import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

export default async function PrivatePage() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) {
    redirect("/login");
  }

  let metadata = user.user_metadata;

  return (
    <main className="p-12 grid grid-cols-[auto_1fr]">
      <div className="border border-blue-100 p-6">
        <SideNav />
      </div>
      <div className="border border-blue-100 p-4">
        <p className="text-white mt-3">Hello, {metadata.first_name!}</p>
      </div>
    </main>
  );
}
