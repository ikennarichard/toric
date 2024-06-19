'use client'
import Link from "next/link"
import SubmitButton from "./SubmitButton"
import signout from "../signout/actions"

export default function SideNav() {
 return (
    <>
      <nav>
        <ul className="flex flex-col text-white gap-4">
          <li className="hover:underline">
            <Link href="#">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">About</Link>
          </li>
          <li className="hover:underline">
            <Link href="#">Investments</Link>
          </li>
          <form action={signout}>
            <SubmitButton text="Sign Out" />
          </form>
        </ul>
      </nav>
    </>
  )
}
