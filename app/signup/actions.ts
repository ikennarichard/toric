"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// type FormState = {
//   message: string;
// };

export async function signup(formData: FormData) {
  const supabase = createClient();

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        first_name: formData.get("firstname") as string,
        last_name: formData.get("lastname") as string,
        gender: formData.get("gender") as string,
        phone_number: formData.get("phone_number") as string,
      },
    },
  };

  console.log(data);
  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect(`/login?message=${error}`);
  }

  revalidatePath("/", "layout");
  redirect("/private");
  // return {
  // message: "success",
  // };
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
