// API
import API from "../../services";

import { useEffect, useState } from "react";

// material ui
import { TextField, FormControl, Button, Input } from "@material-ui/core";

// react hook form + yup + resolvers
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//--------------------------------------------
import { patchUpdateActivity } from "../../helper/activities";
//--------------------------------------------

const errorRequired = "Campo obrigatório";
const schema = yup.object().shape({
  title: yup.string().required(errorRequired),
});

//--------------------------------------------
const FormUpdateActivity = (props) => {
  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const [token] = useState(() => {
    const Token = localStorage.getItem("token") || "";

    if (!Token) {
      return "";
    }
    return JSON.parse(Token);
  });

  const onRegister = async (data) => {
    try {
      const response = await API.patch(patchUpdateActivity(props.actId), data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      props.getGroup();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSubmit(onRegister)}>
      <TextField
        name="title"
        label="Nome da Atividade"
        variant="outlined"
        size="small"
        margin="dense"
        inputRef={register}
        error={!!errors.title}
        helperText={errors.title?.message}
      />
      <Button type="submit" variant="contained" size="small" color="primary">
        Atualizar Nome {props.actId}
      </Button>
    </FormControl>
  );
};

export default FormUpdateActivity;