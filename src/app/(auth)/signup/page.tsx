import Link from "next/link";

import { AuthForm } from "@/components/auth-form";

export const metadata = {
  title: "Signup",
};

export default function SignupPage() {
  return (
    <div className="w-full max-w-sm">
      <h1 className="mb-4 text-center text-3xl font-bold">Sign up</h1>
      <AuthForm />
      <p className="mt-4 text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
