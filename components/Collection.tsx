import { CollectionProps } from "@/types";
import CardModel from "./CardModel";
import Loading from "./Loading";

const Collection: React.FC<CollectionProps> = ({ results }) => {
  return (
    <div className="flex flex-col items-center gap-10 pt-5">
      {results.length <= 0 ? (
        <Loading />
      ) : (
        <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {results.map((item) => (
            <li key={item.apiId}>
              <CardModel
                title={item.title}
                backdropPath={item.backdropPath}
                posterPath={item.posterPath}
                apiId={item.apiId}
                season={item.season}
                episode={item.episode}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Collection;
