import { makeStyles, Modal } from "@material-ui/core";
import { useState } from "react";

import CreateHabitForm from "../FormCreateHabit";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    justifyContent: "space-around",
    // eslint-disable-next-line
    ["@media (min-width:450px)"]: {
      width: 400,
    },
  },
}));

const ModalCreateHabit = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CreateHabitForm
        handleClose={handleClose}
        setOpen={setOpen}
        open={open}
      />
    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Adicionar Atividade
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default ModalCreateHabit;