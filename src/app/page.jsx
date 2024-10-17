import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        I am home.
        <Button variant="default" size="sm" className="text-bold text-white hover:bg-red-200">Hello</Button>
        <div className="flex gap-4">
          <Badge>Popular</Badge>
          <Badge>Top Rated</Badge>
          <Badge>Upcoming</Badge>
        </div>

        <Card>I am Card</Card>
        <Link href="/about">About</Link>
        <Link href="/about/me">Me</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
      </main>
    </div>
  );
}
