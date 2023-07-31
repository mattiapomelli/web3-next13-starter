import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Database } from "@/types/supabase";

export async function getCurrentUser() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const res = await supabase.auth.getSession();
  return res.data.session?.user;
}
