import { SerieProps } from "@/types";

import React from "react";
import { CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import {
  addSerie,
  deleteSerie,
  increaseEpisode,
} from "@/lib/actions/serie.action";

const CardFooters = ({
  title,
  apiId,
  backdropPath,
  posterPath,
  season,
  episode,
}: SerieProps) => {
  return (
    <CardFooter className="flex flex-col mt-2">
      {season ? (
        <>
          <div className="flex flex-col text-lg text-center text-gray-500 dark:text-gray-400">
            <div>season {season}</div>
            <div>episode {episode}</div>
          </div>
          <div className="mt-2">
            <Button
              className="m-1"
              variant="default"
              onClick={() => increaseEpisode(apiId, episode!)}
            >
              seen
            </Button>
            <Button
              className="m-1"
              variant="destructive"
              onClick={() => deleteSerie(apiId)}
            >
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
