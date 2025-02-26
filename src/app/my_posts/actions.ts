"use server";

import { cookies } from "next/headers";
import { api } from "../_api";

export const getOwnPosts = async () => {
  const serverCookies = await cookies();

  const response = await api.get("/posts", {
    headers: {
      "Authorization": `Bearer ${serverCookies.get("token")?.value}`,
    },
    params: {
      me: true,
    }
  });

  return response.data.posts;
}