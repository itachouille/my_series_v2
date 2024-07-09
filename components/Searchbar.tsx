"use client";

import Image from "next/image";
import { useState } from "react";
import { Input } from "./ui/input";
import { getSeries } from "@/lib/actions/search.action";
import Collection from "./Collection";
import Loading from "./Loading";

const Searchbar = ({
  placeholder = "Search title...",
}: {
  placeholder?: string;
}) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
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
      setResults(data.results);
    } catch (error) {
      console.log("Error fetching series:", error);
    } finally {
      setLoading(false);
      setSearched(true);
    }
  };

  return (
    <div className="">
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
    </div>
  );
};

export default Searchbar;
