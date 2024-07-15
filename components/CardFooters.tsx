import { SerieProps } from "@/types";

import React from "react";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { addSerie, deleteSerie } from "@/lib/actions/serie.action";
import { Input } from "./ui/input";

const CardFooters = ({
  title,
  apiId,
  backdropPath,
  posterPath,
  season,
  episode,
}: SerieProps) => {
  return (
    <CardFooter className="flex flex-col">
      {season ? (
        <>
          <div>
            season {season} | episode {episode}
          </div>
          <div className="mt-5">
            <Button variant="destructive" onClick={() => deleteSerie(apiId)}>
              delete
            </Button>
          </div>
        </>
      ) : (
        <Button
          size="lg"
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
