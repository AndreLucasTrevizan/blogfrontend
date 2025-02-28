"use server";

import { cookies } from "next/headers";
import { api } from "../_api";
import { ErrorHandler } from "../_helper/Error";

export const getPosts = async (page: number, limit?: number) => {
  const serverCookies = await cookies();

  try {
    const response = await api.get("/posts", {
      headers: {
        "Authorization": `Bearer ${serverCookies.get("token")?.value}`,
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