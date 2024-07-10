"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { redirect } from "next/navigation";

interface SerieProps {
  title: string;
  apiId: number;
  backdropPath?: string;
  posterPath?: string;
  season?: number;
  episode?: number;
}

export const addSerie = async (props: SerieProps) => {
  const user = await currentUser();

  if (!user) return null;

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!loggedInUser) {
    throw new Error("User not found");
  }

  await db.serie.create({
    data: {
      userId: user.id,
      apiId: props.apiId,
      title: props.title,
      backdropPath: props.backdropPath,
      posterPath: props.posterPath,
      season: 1,
      episode: 1,
    },
  });
  redirect("/dashboard");
};

export const getAllSeries = async () => {
  const user = await currentUser();

  if (!user) return null;

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  const data = await db.serie.findMany({
    where: {
      id: loggedInUser?.id,
    },
  });

  console.log(data);
};
