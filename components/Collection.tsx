import { CollectionProps } from "@/types";
import CardModel from "./CardModel";
import Loading from "./Loading";

const Collection: React.FC<CollectionProps> = ({ results }) => {
  return (
    <div className="flex flex-col items-center gap-10 pt-5">
      {results.length <= 0 ? (
        <Loading />
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 md:p-6">
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
