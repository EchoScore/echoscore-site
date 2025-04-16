import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SupportedPlatforms } from "@/components/supported-platforms";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="bg-[#0087C7] text-white py-3">
        <div className="container pt-16 text-center">
          <Image
            src="/EchoScore.svg"
            alt="EchoScore Logo"
            width={300}
            height={300}
            className="mx-auto opacity-90 drop-shadow-md animate-float mb-8"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            See what your social media really says about you.
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            EchoScore finds reputation risks in your old posts — before an employer, investor, or journalist does.
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 text-xl px-10 py-8 bg-white text-[#0087C7] hover:bg-white/90"
          >
            <Link href="/waitlist">
              Join the Waitlist <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <SupportedPlatforms />

      <section className="py-24">
        <div className="container max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why it matters</h2>
          <p className="text-lg text-muted-foreground mb-12">
            One tweet can cost you a job. A Facebook post can kill a deal. What’s online lasts forever — unless you
            find it first.
          </p>
          <Button
            asChild
            size="lg"
            className="gap-2 text-xl px-10 py-8 bg-[#0087C7] hover:bg-[#0087C7]/90 text-white"
          >
            <Link href="/waitlist">
              Get Scanned <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
