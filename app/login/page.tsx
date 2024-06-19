'use client'

import Link from "next/link";
import { login } from "./actions";
import toast from "react-hot-toast";
import SubmitButton from "../components/SubmitButton";
import { useFormState } from "react-dom";
import { useEffect } from "react";

export default function LoginPage() {
  const [formState, formAction] = useFormState(login, {
    error: '',
    message: null,
    status: ''
  })

  useEffect(() => {
    if (formState.status === 'failed') {
      toast.error(formState.error)
    }
  }, [formState])

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 m-auto">
      <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
        Login
      </h2>
      <form action={formAction}>
        <div className="mb-4">
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="mb-6">
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
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
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
