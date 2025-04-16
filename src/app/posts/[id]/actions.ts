"use server";

import { api } from "@/app/_api";
import { ErrorHandler } from "@/app/_helper/Error";
import { UserPostType } from "@/app/page";
import { cookies } from "next/headers";

export interface CommentType {
  id: number;
  body: number;
  user: UserPostType;
  createdAt: Date;
  updatedAt: Date;
}

export const getPostByID = async (postId: number) => {
  const serverCookies = await cookies();

  let token = '';

  if (serverCookies.get("signed_data") != undefined) {
    const signed_data = serverCookies.get("signed_data")!.value;

    token = JSON.parse(signed_data!!).token;
  }

  try {
    const response = await api.get(`/posts`, {
      headers: {
        "Authorization": `Bearer ${token}`
      },
      params: {
        postId,
      }
    });

    return response.data.post;
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }
}

export const getCommentsByPost = async (postId: number) => {
  const serverCookies = await cookies();

  const token = serverCookies.get("token")?.value;

  try {
    const response = await api.get(`/comments/${postId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    return response.data.comments;
  } catch (error) {
    const errorHandler = new ErrorHandler(error);

    return errorHandler;
  }
}
