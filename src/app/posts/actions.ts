"use server";

import { cookies } from "next/headers";
import { api } from "../_api";
import { ErrorHandler } from "../_helper/Error";

export const getPosts = async (page: number, limit?: number) => {
  const serverCookies = await cookies();

  let token = '';

  if (serverCookies.get("signed_data") != undefined) {
    const signed_data = serverCookies.get("signed_data")!.value;

    token = JSON.parse(signed_data!!).token;
  }

  try {
    const response = await api.get("/posts", {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      params: {
        page,
        limit,
      }
    });
  
    return response.data;
  } catch (error) {
    const returnError = new ErrorHandler(error);

    return returnError;
  }
}