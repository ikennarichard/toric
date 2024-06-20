"use client";

import { signup } from "./actions";
import toast from "react-hot-toast";
import SubmitButton from "../components/SubmitButton";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ToggleVisibility from "../components/ToggleVisibility";

type FormFields = {
  firstname: string;
  lastname: string;
  email: string;
  gender: string;
  phone_number: string;
  password: string;
};

export default function SignupPage() {
  const [formState, formAction] = useFormState(signup, {
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
    <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-5 m-auto -mt-8">
      <form action={formAction}>
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Setup your account
        </h2>
        <div className="flex gap-3">
          <div className="mb-2">
            <label
              htmlFor="firstname"
              className="block text-gray-700 font-medium mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              {...register("firstname", {
                required: "Firstname is required",
              })}
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
              {errors?.firstname && errors.firstname?.message}
            </p>
          </div>
          <div className="mb-2">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name
            </label>
            <input
              {...register("lastname", {
                required: "Lastname is required",
              })}
              type="text"
              id="lastname"
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
              {errors?.lastname && errors.lastname?.message}
            </p>
          </div>
        </div>

        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Gender
          </label>
          <select
            {...register("gender", {
              required: "Gender is required",
            })}
            required
            id="gender"
            className="w-full px-3 py-2 border text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Please select your gender</option>
            <option value="male">M</option>
            <option value="female">F</option>
          </select>
          <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
            {errors?.gender && errors.gender?.message}
          </p>
        </div>
        <div className="mb-2">
          <label
            htmlFor="phone_number"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            {...register("phone_number", {
              required: "Phone number is required",
              maxLength: {
                value: 11,
                message: "Phone number must be 11 digits",
              },
            })}
            type="number"
            id="phone_number"
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
            {errors?.phone_number && errors.phone_number?.message}
          </p>
        </div>
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
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <p className="text-red-500 h-1 w-fit text-sm pb-2 border-solid border-red-400 mt-1">
            {errors?.email && errors.email?.message}
          </p>
        </div>
        <div className="relative mb-2">
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
            placeholder="Password must be atleast 6 characters"
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
        <SubmitButton text="Continue" />
      </form>
    </div>
  );
}
