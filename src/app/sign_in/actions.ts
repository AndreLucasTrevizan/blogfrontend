"use server";

import { api } from "../_api";
import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error";
import { redirect } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

interface SignInData {
  email: string;
  password: string;
}

export const handleUserSignIn: SubmitHandler<SignInData> = async (values) => {
  try {
    console.log("Date");

    const serverCookies = await cookies();

    const response = await api.post("/sign_in", values, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const {
      data
    } = response;

    console.log(data);
    
    serverCookies.set("signed_data", JSON.stringify(data));
  } catch (error) {
    const errorHandler = new ErrorHandler(error);
    console.log(errorHandler.message);
  }

  redirect("/");
}
