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
