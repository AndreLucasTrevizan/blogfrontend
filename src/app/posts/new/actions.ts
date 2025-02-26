"use server";

import { api } from "@/app/_api";
import { ErrorHandler } from "../../_helper/Error";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const createPost = async (prevState: { message: string }, formData: FormData) => {
  const serverCookies = await cookies();

  try {
    const data = {
      title: formData.get("title"),
      body: formData.get("body"),
    };

    await api.post("/posts", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${serverCookies.get("token")?.value}`
      }
    });
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }

  redirect("/");
}
