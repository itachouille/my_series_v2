"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import CardFooters from "./CardFooters";
import { SerieProps } from "@/types";

const img_path = "https://image.tmdb.org/t/p/w500";

const CardModel: React.FC<SerieProps> = ({
  title,
  backdropPath,
  posterPath,
  season,
  episode,
  apiId,
}: SerieProps) => {
  const isValidImage = typeof backdropPath;
  return (
    <Card className="min-w-[250px]">
      <CardHeader className="p-0">
        {isValidImage === "string" ? (
          <Image
            className="object-cover w-full h-60 rounded-t-lg"
            src={img_path + backdropPath}
            width={200}
            height={300}
            alt="TV-Show image"
          />
        ) : (
          <Image
            className="object-cover w-full h-60 rounded-t-lg"
            src={img_path + posterPath}
            width={200}
            height={300}
            alt="TV-Show image"
          />
        )}
      </CardHeader>
      <CardContent className="p-2">
        <CardTitle className="text-center text-lg font-semibold truncate">
          {title}
        </CardTitle>
      </CardContent>
      <CardFooters
        title={title}
        backdropPath={backdropPath}
        posterPath={posterPath}
        season={season}
        episode={episode}
        apiId={apiId}
      />
    </Card>
  );
};

export default CardModel;
