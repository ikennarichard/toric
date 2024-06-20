"use client";

import Link from "next/link";
import { login } from "./actions";
import toast from "react-hot-toast";
import SubmitButton from "../components/SubmitButton";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ToggleVisibility from "../components/ToggleVisibility";

type FormFields = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, {
    error: "",
    status: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    formState: { errors },
  } = useForm<FormFields>({
    mode: "onChange",
  });

  useEffect(() => {
    if (formState.status === "failed") {
      toast.error(formState.error);
    }
  }, [formState]);

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 m-auto">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Login
      </h2>
      <form action={formAction}>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
            {errors?.email && errors.email?.message}
          </p>
        </div>
        <div className="relative mb-3">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters",
              },
            })}
            type={isVisible ? "text" : "password"}
            id="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <ToggleVisibility
            isVisible={isVisible}
            handleOnClick={() => setIsVisible((prev) => !prev)}
          />
          <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
            {errors?.password && errors.password?.message}
          </p>
        </div>
        {/* <div className="flex items-center justify-between mb-4">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </a>
        </div> */}
        <SubmitButton text="Login" />
      </form>
      <p className="text-center text-gray-600 mt-6">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
