"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import React, { useActionState } from "react";
import createUser from "./create-user";
import { useFormState } from "react-dom";

function Signup() {
  const [state, formAction] = useActionState(createUser, { error: "" });

  return (
    <form action={formAction} className="w-full max-w-xs">
      <Stack spacing={2}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          type="text"
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          type="email"
          helperText={state.error}
          error={!!state.error}
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          type="password"
          helperText={state.error}
          error={!!state.error}
        />
        <Button type="submit" variant="contained">
          Signup
        </Button>
        <Link component={NextLink} href="/auth/login" className="self-center">
          login
        </Link>
      </Stack>
    </form>
  );
}

export default Signup;
