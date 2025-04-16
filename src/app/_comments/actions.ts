"use server";

import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error"
import { api } from "../_api";
import { revalidatePath } from "next/cache";

export const createComment = async (prevState: { message: string } | undefined, formData: FormData) => {
  const serverCookies = await cookies();

  let token = '';

  if (serverCookies.get("signed_data") != undefined) {
    const signed_data = serverCookies.get("signed_data")!.value;

    token = JSON.parse(signed_data!!).token;
  }

  try {
    const data = {
      body: formData.get("body"),
      postId: formData.get("postId"),
    };

    await api.post("/comments", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }

  revalidatePath(`/posts/${formData.get("postId")}`);
}