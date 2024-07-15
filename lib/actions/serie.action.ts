"use server";

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../db";
import { redirect } from "next/navigation";
import { SerieProps, Show } from "@/types";

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

export const getAllSeries = async (): Promise<Show[]> => {
  const user = await currentUser();

  if (!user) return [];

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!loggedInUser) return [];
  const series = await db.serie.findMany({
    where: {
      userId: loggedInUser.clerkUserId,
    },
  });

  return series.map((serie) => ({
    ...serie,
    backdropPath: serie.backdropPath ?? undefined,
    posterPath: serie.posterPath ?? undefined,
  }));
};

export const deleteSerie = async (apiId: number) => {
  const user = await currentUser();

  if (!user) {
    throw new Error("User not authenticated");
  }

  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!loggedInUser) {
    throw new Error("User not found");
  }

  await db.serie.deleteMany({
    where: {
      userId: loggedInUser.clerkUserId,
      apiId: apiId,
    },
  });

  redirect("/dashboard");
};

export const increaseEpisode = async (apiId: number, episode: number) => {
  const user = await currentUser();
  const nextEpisode = episode + 1;

  if (!user) {
    throw new Error("User not authenticated");
  }
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id,
    },
  });

  if (!loggedInUser) {
    throw new Error("User not found");
  }

  const serie = await db.serie.findFirst({
    where: {
      userId: loggedInUser.clerkUserId!,
      apiId: apiId,
    },
  });

  if (!serie) {
    throw new Error("Serie not found");
  }

  await db.serie.update({
    where: {
      id: serie.id,
    },
    data: {
      episode: nextEpisode,
    },
  });

  redirect("/dashboard");
};
