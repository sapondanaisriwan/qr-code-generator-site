import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Uploader from "./Uploader";
import { useState } from "react";
import { Box, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function UploadModal({ data, handleChange }: ModalProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={handleClickOpen}>
          Import Image
        </Button>
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() =>
            handleChange({ target: { name: "logoImage", value: "" } })
          }
        >
          Delete
        </Button>
      </Stack>

      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Import Your Image
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Uploader data={data} handleChange={handleChange} />
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose} variant="contained">
            Import
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}
