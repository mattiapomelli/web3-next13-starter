import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import { Database } from "@/types/supabase";

export async function GET(req: NextRequest) {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const from = searchParams.get("from") || "/";

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect(new URL(from, req.url));
}
