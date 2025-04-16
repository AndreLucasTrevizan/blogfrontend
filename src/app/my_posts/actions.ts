"use server";

import { cookies } from "next/headers";
import { api } from "../_api";

export const getOwnPosts = async () => {
  const serverCookies = await cookies();

  let token = '';

  if (serverCookies.get("signed_data") != undefined) {
    const signed_data = serverCookies.get("signed_data")!.value;

    token = JSON.parse(signed_data!!).token;
  }

  const response = await api.get("/posts", {
    headers: {
      "Authorization": `Bearer ${token}`,
    },
    params: {
      me: true,
    }
  });

  return response.data.posts;
}