"use client";

import { confirmSignup, signup } from "./actions";
import toast from "react-hot-toast";
import SubmitButton from "../components/SubmitButton";
// import { useRef } from "react";
import { useFormState } from "react-dom";
import { useEffect } from "react";
// import { useForm } from 'react-hook-form'

// type Inputs = {
// 	firstname: string;
// 	lastname: string;
// 	email: string;
// 	query: string;
// 	message: string;
// 	consent: boolean;
// }

export default function SignupPage() {
  const [formState, formAction] = useFormState(signup, {
    message: null,
    error: '',
    status: ''
  });

  useEffect(() => {
    if (formState.status === 'failed') {
      toast.error(formState.error)
    }
  }, [formState])

  // const {
	// 	register,
	// 	formState: {errors}
	//  } = useForm<Inputs>();

  return (
    <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-5 m-auto -mt-6">
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
              name="firstname"
              required
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="lastname"
              className="block text-gray-700 font-medium mb-2"
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
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
            id="gender"
            name="gender"
            required
            className="w-full px-3 py-2 border text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Please select your gender</option>
            <option value="male">M</option>
            <option value="female">F</option>
          </select>
        </div>
        <div className="mb-2">
          <label
            htmlFor="phone_number"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone Number
          </label>
          <input
            type="number"
            id="phone_number"
            name="phone_number"
            required
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <SubmitButton text="Continue" />
      </form>
      {/* )} */}
    </div>
  );
}
