import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { type NextRequest, NextResponse } from "next/server";

import { Database } from "./types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isAuthPage =
    req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup");
  const isProtectedPage = req.nextUrl.pathname.startsWith("/account");

  // If user is signed in and the current path is an auth page, redirect the user to /account
  if (session && isAuthPage) {
    return NextResponse.redirect(new URL("/account", req.url));
  }

  if (!session && isProtectedPage) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }

    return NextResponse.redirect(new URL(`/login?from=${encodeURIComponent(from)}`, req.url));
  }

  return res;
}
