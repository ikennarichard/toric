import Link from "next/link";
import H1 from "./H1";
import signout from "../signout/actions";
import SubmitButton from "./SubmitButton";

export default function Header() {
  return (
    <header className="flex flex-col gap-7">
      <H1 />
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
    </header>
  );
}
