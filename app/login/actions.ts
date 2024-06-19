"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";

type FormState = {
  error: string;
  message: string | null;
  status: string;
};

export async function login(prevState: FormState, formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return {
      message: null,
      error:
        error.message === "fetch failed"
          ? "No network connection"
          : error.message,
      status: "failed",
    };
  }
  revalidatePath("/", "layout");
  redirect("/private");
}
