import type { Metadata } from "next";
import RatgeberSeoInjector from "@/components/RatgeberSeoInjector";

export const metadata: Metadata = {
  alternates: { canonical: "/ratgeber" },
};

export default function RatgeberLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <RatgeberSeoInjector />
      {children}
    </>
  );
}


