import CardModel from "./CardModel";
import Loading from "./Loading";

interface Show {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface CollectionProps {
  results: Show[];
}

const Collection: React.FC<CollectionProps> = ({ results }) => {
  return (
    <div className="flex flex-col items-center gap-10 pt-5">
      {results.length <= 0 ? (
        <Loading />
      ) : (
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {results.map((item) => (
            <li key={item.id}>
              <CardModel
                title={item.name}
                backdropPath={item.backdrop_path}
                posterPath={item.poster_path}
                apiId={item.id}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collection;
