import Link from "next/link";

import { AuthForm } from "@/components/auth-form";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Sign in</h1>
      <AuthForm />
      <p className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href="/signup" className="text-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
