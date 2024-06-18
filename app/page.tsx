import Link from "next/link";
import H1 from "./components/H1";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) {
    redirect("/private");
  }

  return (
    <main className="flex flex-col justify-between p-12">
      <header className="flex justify-between gap-7 items-center">
        <H1 />
        <nav>
          <ul className="flex items-center text-white gap-6">
            <li className="hover:underline">
              <Link href="/login">Login</Link>
            </li>
            <li className="hover:underline">
              <Link href="/signup">Get Started</Link>
            </li>
          </ul>
        </nav>
      </header>
    </main>
  );
}
