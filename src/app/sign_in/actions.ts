"use server";

import { api } from "../_api";
import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error";
import { redirect } from "next/navigation";

export const handleUserSignIn = async (prevState: { message: string }, formData: FormData) => {
  try {
    const serverCookies = await cookies();

    const signIn = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const response = await api.post("/sign_in", signIn, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const {
      token
    } = response.data;

    serverCookies.set("token", token);
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }

  redirect("/");
}
