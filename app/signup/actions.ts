"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

type FormState = {
  error: string;
  status: string;
};

const UserSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  gender: z.string(),
  phone_number: z.string().length(11),
  email: z.string(),
  password: z.string(),
});

export async function signup(prevState: FormState, formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    first_name: formData.get("firstname") as string,
    last_name: formData.get("lastname") as string,
    gender: formData.get("gender") as string,
    phone_number: formData.get("phone_number") as string,
  };

  try {
    UserSchema.parse(data);
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          first_name: data.first_name,
          last_name: data.last_name,
          gender: data.gender,
          phone_number: data.phone_number,
        },
      },
    });

    if (error) {
      return {
        error:
          error.message === "fetch failed"
            ? "No network connection"
            : error.message,
        status: "failed",
      };
    }
  } catch (e) {
    return {
      error: "Sign up failed, check inputs and try again",
      status: "failed",
    };
  }
  revalidatePath("/", "layout");
  redirect("/private");
}

export async function confirmSignup(email: string, formData: FormData) {
  const supabase = createClient();

  const { error } = await supabase.auth.verifyOtp({
    email: email,
    token: formData.get("token") as string,
    type: "email",
  });

  if (error) {
    redirect("/login?message=Error verifying OTP");
  }

  revalidatePath("/", "layout");
  redirect("/private");
}
