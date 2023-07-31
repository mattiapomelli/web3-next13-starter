import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="relative flex min-h-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-10">
        <Button
          variant="ghost"
          leftIcon={<ArrowLeftIcon className="h-5 w-5" />}
          className="min-w-0 px-4 text-base-content"
        >
          Back
        </Button>
      </Link>

      {children}
    </Container>
  );
}
