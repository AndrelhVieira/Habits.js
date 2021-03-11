import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";

import API from "../../services/index.js";

import { useChecked } from "../../providers/user";

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import Button from "../Button";

const CreateHabitForm = () => {
  const { isChecked } = useChecked();

  const errorRequired = "Campo Obrigatório";
  const schema = yup.object().shape({
    title: yup.string().required(errorRequired),
    category: yup.string().required(errorRequired),
    difficulty: yup.string().required(errorRequired),
    frequency: yup.string().required(errorRequired),
  });

  const { register, handleSubmit, errors, reset, control } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const token = isChecked
      ? localStorage.getItem("token")
      : sessionStorage.getItem("token");

    console.log(JSON.parse(token));

    try {
      const { user_id } = await jwt_decode(token);
      await API.post(
        "/habits/",
        {
          title: data.title,
          category: data.category,
          difficulty: data.difficulty,
          frequency: data.frequency,
          achieved: false,
          how_much_achieved: 0,
          user: user_id,
        },
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const difficultyOptions = [
    "Muito Fácil",
    "Fácil",
    "Normal",
    "Difícil",
    "Desafio",
  ];
  const frequencyOptions = [
    "Diária",
    "Dia Sim/Não",
    "A Cada 2 Dias",
    "A Cada 3 Dias",
    "Semanal",
    "Quinzenal",
    "Mensal",
  ];

  return (
    <FormControl component="form" onSubmit={handleSubmit(handleForm)}>
      {console.log(isChecked)}
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        label="Título"
        name="title"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <TextField
        variant="outlined"
        size="small"
        margin="dense"
        label="Categoria"
        name="category"
        inputRef={register}
        error={!!errors.category}
        helperText={errors.category?.message}
      />
      <FormControl>
        <InputLabel>Dificuldade</InputLabel>
        <Controller
          name="difficulty"
          control={control}
          defaultValue={difficultyOptions[2]}
          as={
            <Select>
              {difficultyOptions.map((difficult, index) => (
                <MenuItem key={index} value={difficult}>
                  {difficult}
                </MenuItem>
              ))}
            </Select>
          }
        />
      </FormControl>
      <FormControl>
        <InputLabel>Frequência</InputLabel>
        <Controller
          name="frequency"
          control={control}
          defaultValue={frequencyOptions[0]}
          as={
            <Select>
              {frequencyOptions.map((frequency, index) => (
                <MenuItem key={index} value={frequency}>
                  {frequency}
                </MenuItem>
              ))}
            </Select>
          }
        />
      </FormControl>
      <Button type="submit" children="Adicionar" size="small" />
      {/* <Button type="submit" size="small" children="Adicionar" /> */}
    </FormControl>
  );
};

export default CreateHabitForm;
