import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

type CardProps = {
  title: string;
  backdrop_path: string;
  saison: number;
  episode: number;
  id: string;
};

const img_path = "https://image.tmdb.org/t/p/w500";

const CardModel = ({
  title,
  backdrop_path,
  saison,
  episode,
  id,
}: CardProps) => {
  return (
    <Card className="max-w-80 flex flex-col items-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={img_path + backdrop_path}
          width={300}
          height={300}
          alt="TV-Show poster"
        />
      </CardContent>
      <CardFooter>
        <Button
          size="lg"
          className="w-full"
          /* onClick={() =>
            addSerie({ title, backdrop_path, id, saison, episode }, userId!)
          } */
        >
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardModel;
