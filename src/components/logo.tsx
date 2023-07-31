import { clsx } from "clsx";
import Link from "next/link";

export interface LogoProps {
  href?: string;
  className?: string;
}

export const Logo = ({ href = "/", className }: LogoProps) => {
  return (
    <Link href={href} className="flex items-center gap-3">
      <span className="block h-7 w-7 rounded-full bg-primary" />
      <span className={clsx("text-xl font-black", className)}>Logo</span>
    </Link>
  );
};
