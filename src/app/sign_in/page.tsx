"use client";

import FormSignIn from "../_ui/FormSignIn";

export default function SignIn() {
  return (
    <div
      className="
        md:w-3/4
        md:m-auto
        p-4
        flex
        gap-4
        justify-center
        w-full
      "
    >
      <FormSignIn />
    </div>
  );
}