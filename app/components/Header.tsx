import H1 from "./H1";
import { createClient } from "@/utils/supabase/server";
import Register from "./Register";


export default async function Header() {

  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  return (
    <header className="flex justify-between gap-7 mt-6 px-16">
      <H1 />
      {!user ? <Register /> :  null}
    </header>
  );
}
