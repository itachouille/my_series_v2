"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "./ui/input";
import { getSeries } from "@/lib/actions/search.action";
import Collection from "./Collection";
import Loading from "./Loading";
import { Show } from "@/types";

const Searchbar: React.FC<{ placeholder?: string }> = ({
  placeholder = "Search title...",
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Show[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const onSearch = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await getSeries(query);
      if (!data || !data.results) {
        console.log("No data or results");
        setResults([]);
        return;
      }
      const formattedResults: Show[] = data.results.map((item: any) => ({
        apiId: item.id,
        title: item.name,
        backdropPath: item.backdrop_path || undefined,
        posterPath: item.poster_path || undefined,
        season: item.season || undefined,
        episode: item.episode || undefined,
      }));
      setResults(formattedResults);
    } catch (error) {
      console.log("Error fetching series:", error);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  return (
    <>
      <form onSubmit={onSearch}>
        <Image src="/search.svg" alt="search" width={24} height={24} />
        <Input
          type="text"
          placeholder={placeholder}
          onChange={(e) => setQuery(e.target.value)}
          className="border-0 bg-gray-40 outline-offset-0 placeholder:text-gray-500 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </form>
      <div className="pt-5">
        {loading && <Loading />}
        {!loading && searched && <Collection results={results} />}
      </div>
    </>
  );
};

export default Searchbar;
