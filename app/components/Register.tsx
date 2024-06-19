'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Register() {

  const pathname = usePathname();
  return (
    <div className="">
      <ul className="flex items-center text-white gap-6">
        <li className="hover:underline">
          {pathname !== '/login' ? <Link href="/login">Login</Link> : null}
        </li>
        <li className="hover:underline">
          <Link href="/signup">Get Started</Link>
        </li>
      </ul>
    </div>
  )
}