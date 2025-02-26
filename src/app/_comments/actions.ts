"use server";

import { cookies } from "next/headers";
import { ErrorHandler } from "../_helper/Error"
import { api } from "../_api";
import { revalidatePath } from "next/cache";

export const createComment = async (prevState: { message: string } | undefined, formData: FormData) => {
  const serverCookies = await cookies();

  try {
    const data = {
      body: formData.get("body"),
      postId: formData.get("postId"),
    };

    await api.post("/comments", data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${serverCookies.get("token")?.value}`
      }
    });
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }

  revalidatePath(`/posts/${formData.get("postId")}`);
}