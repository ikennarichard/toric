"use client";

import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
  text: string;
};

export default function SubmitButton({ text }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <button
      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      type="submit"
    >
      {" "}
      {pending ? "Loading..." : text}
    </button>
  );
}
