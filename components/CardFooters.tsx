import { SerieProps } from "@/types";

import React from "react";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { addSerie, deleteSerie } from "@/lib/actions/serie.action";

const CardFooters = ({
  title,
  apiId,
  backdropPath,
  posterPath,
  season,
  episode,
}: SerieProps) => {
  return (
    <CardFooter className="flex flex-col gap-1">
      {season ? (
        <>
          <div>
            season {season} | episode {episode}
          </div>
          <div>
            <Button onClick={() => deleteSerie(apiId)}>delete</Button>
          </div>
        </>
      ) : (
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
      )}
    </CardFooter>
  );
};

export default CardFooters;
