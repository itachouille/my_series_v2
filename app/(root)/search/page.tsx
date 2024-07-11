import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Searchbar from "@/components/Searchbar";
import { buttonVariants } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const SearchPage = () => {
  const { userId } = auth();

  if (!userId) redirect("/");

  return (
    <div className="bg-slate-50">
      <section>
        <MaxWidthWrapper className="pb-24 pt-5">
          <div>
            <Link
              href="/"
              className={buttonVariants({
                size: "sm",
                className: "gap-1",
              })}
            >
              Back
              <ArrowLeft className="ml-1.5 h-5 w-5" />
            </Link>
          </div>
          <div className="pt-5">
            <Searchbar />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
};

export default SearchPage;
