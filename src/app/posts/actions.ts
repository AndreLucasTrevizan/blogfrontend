"use server";

import { cookies } from "next/headers";
import { api } from "../_api";

export const getPosts = async () => {
  const serverCookies = await cookies();

  const response = await api.get("/posts", {
    headers: {
      "Authorization": `Bearer ${serverCookies.get("token")?.value}`,
    }
  });

  return response.data.posts;
}