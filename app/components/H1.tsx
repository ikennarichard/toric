import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function H1() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <Link href={user ? "/private" : "/"}>
      <h1 className="text-white font-bold italic">PayWay</h1>
    </Link>
  );
}
