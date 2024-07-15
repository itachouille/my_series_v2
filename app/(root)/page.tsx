import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

export default function Home() {
  const { userId } = auth();

  if (userId) redirect("/dashboard");

  return (
    <section className="bg-slate-50">
      <MaxWidthWrapper className="pb-24 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 xl:pt-24">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-20">
          <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="absolute w-28 left-0 -top-8 hidden lg:block">
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28" />
              <Image src="/tv.jpg" alt="tv" width={100} height={100} />
            </div>
            <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl">
              Never Lose Your Place in a{" "}
              <span className="bg-red-600 px-2 text-white">TV Series</span>{" "}
              Again!
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
              My Series is a web application designed for{" "}
              <span className="font-semibold">TV series</span> enthusiasts.
              <br />
              Search for your favorite series, and keep track of the season and
              episode where you left off.
            </p>
          </div>
        </div>
        <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
          <div className="relative md:max-w-xl">
            <Image
              src="/home.jpg"
              alt="image"
              width={1000}
              height={1000}
              className="max-h-[80vh] object-contain 2xl:max-h-[56vh]"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
