import { Modal } from "@material-ui/core";
import { useState } from "react";
import { useModalStyles } from "../../styles/makeStyles";
import getModalStyle from "../../styles/modalStyles";
import CreateHabitForm from "../FormCreateHabit";
import Button from "../Button";

//-----------------------------------------------
const ModalCreateHabit = () => {
  const classes = useModalStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paperStyles}>
      <CreateHabitForm
        handleClose={handleClose}
        setOpen={setOpen}
        open={open}
      />
    </div>
  );

  return (
    <div>
      <Button type="button" onClick={handleOpen} styled="filled">
        Adicionar Hábito
      </Button>
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
