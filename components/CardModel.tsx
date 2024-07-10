import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { addSerie } from "@/lib/actions/serie.action";

interface CardProps {
  title: string;
  apiId: number;
  backdropPath?: string;
  posterPath?: string;
  season?: number;
  episode?: number;
}

const img_path = "https://image.tmdb.org/t/p/w500";

const CardModel = ({
  title,
  apiId,
  backdropPath,
  posterPath,
  season,
  episode,
}: CardProps) => {
  const isValidImage = typeof backdropPath;
  return (
    <Card className="w-80 h-96 flex flex-col items-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="min-h-60">
        {isValidImage === "string" ? (
          <Image
            src={img_path + backdropPath}
            width={300}
            height={300}
            alt="TV-Show poster"
          />
        ) : (
          <Image
            src={img_path + posterPath}
            width={300}
            height={300}
            alt="TV-Show poster"
          />
        )}
      </CardContent>
      <CardFooter className="">
        <Button
          size="lg"
          className=""
          onClick={() =>
            addSerie({
              title,
              apiId,
              backdropPath,
              posterPath,
              season,
              episode,
            })
          }
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardModel;
