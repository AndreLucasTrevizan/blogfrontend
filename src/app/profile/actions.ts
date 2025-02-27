"use server";

import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error";
import { api } from "../_api";
import { redirect } from "next/navigation";

export interface UserType {
  id: number,
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Date
}

export const getUserDetails = async () => {
  const serverCookies = await cookies();

  const token = serverCookies.get("token")?.value;
  
  try {
    const response = await api.get("/users/details", {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data.user;  
  } catch (error) {
    const returnError = new ErrorHandler(error);

    return returnError;
  }
}

export const sessionLogout = async () => {
  const serverCookies = await cookies();

  serverCookies.delete("token");

  redirect('/sign_in');
}
