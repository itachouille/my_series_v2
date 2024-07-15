import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col items-center gap-10 pt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
          <Card key={id} className="w-80 h-96 flex flex-col items-center">
            <CardHeader>
              <Skeleton className="h-10 w-60 p-6 bg-slate-200" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-28 w-60 p-6 bg-slate-100" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-10 w-32 p-6 bg-slate-100" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
