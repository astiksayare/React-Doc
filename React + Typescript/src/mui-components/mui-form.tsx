import * as Mui from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
export const MuiForm = () => {

    const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState<formField>({
    firstName: "",
    lastName: "",
    mobileNumber: 0,
    email: "",
  });

  const handleFormField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: name === "mobileNumber" ? Number(value) : value,
    }));
  };

  const handleRegister = (variant: VariantType) => {
    setForm({
      firstName: "",
      lastName: "",
      mobileNumber: 0,
      email: "",
    });
    enqueueSnackbar('Successfully Register', { variant, onClose: () => true })
  };

  return (
    <>
      <Mui.Stack direction={"column"} spacing={3} margin={5}>
        <Mui.Typography
          textAlign={"center"}
          color="primary"
          fontWeight={700}
          variant="h4"
        >
          Student Registration From
        </Mui.Typography>
        <Mui.Stack direction={"column"} spacing={2}>
          <Mui.Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Mui.TextField
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleFormField}
              aria-label="firstName"
              color="secondary"
              required
            />

            <Mui.TextField
              label="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleFormField}
              aria-label="lastName"
              color="secondary"
              required
            />

            <Mui.TextField
              label="Mobile Number"
              name="mobileNumber"
              value={form.mobileNumber}
              onChange={handleFormField}
              aria-label="mobileNumber"
              color="secondary"
              type="number"
              required
            />

            <Mui.TextField
              type="email"
              label="Email"
              name="email"
              value={form.email}
              onChange={handleFormField}
              aria-label="email"
              color="secondary"
              required
            />

            <Mui.Button
              color="success"
              variant="contained"
              onClick={() => handleRegister('success')}
            >
              Register
            </Mui.Button>
          </Mui.Box>
        </Mui.Stack>
        {/* <Mui.Box>
          <Mui.Snackbar
            autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={state}
            onClose={handleClose}
            message="Form Submitted Successfully"
            action={
                <React.Fragment>
                  <Mui.IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                    onClick={handleClose}
                  >
                    <CloseIcon />
                  </Mui.IconButton>
                </React.Fragment>
              }
          />
        </Mui.Box> */}
      </Mui.Stack>
    </>
  );
};

interface formField {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  email: string;
}


export default function IntegrationNotistack() {
    return (
      <SnackbarProvider maxSnack={3}
        autoHideDuration={2000}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            action={
                <React.Fragment>
                  <Mui.IconButton
                    aria-label="close"
                    color="inherit"
                    sx={{ p: 0.5 }}
                  >
                    <CloseIcon />
                  </Mui.IconButton>
                </React.Fragment>
              }
      >
        <MuiForm />
      </SnackbarProvider>
    );
  }
