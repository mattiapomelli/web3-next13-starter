import { redirect } from "next/navigation";

import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Account",
};

export default async function AccountPage() {
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return <div className="w-full max-w-sm">Account: {user.email}</div>;
}
