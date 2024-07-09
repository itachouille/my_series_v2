"use server";

import { db } from "../db";

interface SearchData {
  title: string;
}

interface DataResultProps {
  data?: SearchData;
  error?: string;
}

export const addSerie = async (
  formData: FormData
): Promise<DataResultProps> => {
  /*     const newSerie = await db.serie.create({
    data: {
     user: ,
     apiId: ,
     title:   ,
     backdropPath: ,
     season: 1,
     episode: 1
    },
  }); */
};
