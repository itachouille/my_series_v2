"use server";

export const getSeries = async (query: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  };
  const res = await fetch(
    `https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=true&page=1`,
    options
  );
  if (!res.ok) throw new Error(res.statusText);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = await res.json();
  return data;
};
