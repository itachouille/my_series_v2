import Link from "next/link";
import { buttonVariants } from "./ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/actions/user.action";

const Header = async () => {
  const user = await checkUser();

  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            My<span className="text-red-600">Series</span>
          </Link>
          <div className="h-full flex items-center space-x-4">
            {!user ? (
              <>
                <Link
                  href="/sign-in"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className={buttonVariants({ size: "sm", variant: "ghost" })}
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <UserButton />
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Header;
