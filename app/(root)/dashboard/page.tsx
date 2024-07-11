import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Collection from "@/components/Collection";
import { getAllSeries } from "@/lib/actions/serie.action";
import { Show } from "@/types";

const Page = async () => {
  const { userId } = auth();
  const user = await currentUser();

  if (!userId) redirect("/");

  const savedSerie = await getAllSeries();
  const results: Show[] = savedSerie;

  return (
    <div className="bg-slate-50">
      <section className="flex flex-col">
        <MaxWidthWrapper className="pb-24 sm:pb-32 xl:pt-24">
          <div>
            <h2>Welcome, {user?.firstName}</h2>
          </div>
          <div className="pt-5">
            <Link
              href="/search"
              className={buttonVariants({
                size: "sm",
                className: "gap-1",
              })}
            >
              Search series
              <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
          <div className="pt-5">
            <Collection results={results} />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default Page;
