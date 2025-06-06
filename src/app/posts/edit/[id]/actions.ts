"use server";

import { api } from "@/app/_api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ErrorHandler } from "@/app/_helper/Error";

export const editPost = async (prevState: { message: string }, formData: FormData) => {
  const serverCookies = await cookies();

  let token = '';

  if (serverCookies.get("signed_data") != undefined) {
    const signed_data = serverCookies.get("signed_data")!.value;

    token = JSON.parse(signed_data!!).token;
  }

  const data = {
    postId: formData.get("postId"),
    title: formData.get("title"),
    body: formData.get("body"),
  };

  try {
    await api.put(`/posts/edit`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }

  redirect(`/posts/${data.postId}`);
}
