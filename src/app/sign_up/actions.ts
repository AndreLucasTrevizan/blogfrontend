"use server";

import { api } from "../_api";
import { ErrorHandler } from "../_helper/Error";
import { redirect } from "next/navigation";

export const handleUserSignUp = async (prevState: { message: string }, formData: FormData) => {
  try {
    const signUp = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    await api.post("/users", signUp, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }

  redirect("/sign_in");
}
