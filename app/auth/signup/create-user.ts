"use server";

import { API_URL } from "@/app/const/api";
import { getErrorMessage } from "@/app/util/errors";
import { redirect } from "next/navigation";

export default async function createUser(_prevState: any, formData: FormData) {
  const res = await fetch(`${API_URL}/users`, {
    method: "POST",
    body: formData,
    // headers: {
    //   "Content-Type": "application/json",
    // },
  });

  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  } else {
    redirect("/auth/login");
  }
}
