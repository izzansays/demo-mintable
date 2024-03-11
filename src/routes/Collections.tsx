import { useState, useEffect } from "react";
import Grid from "../components/Grid";
import { getCollection } from "../service";
import CollectionMap from "../constants";
import Loading from "../components/Loading";

interface CollectionsProps {
  subdomain: string;
}

const Collections = ({ subdomain }: CollectionsProps) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getCollection({
      address: CollectionMap[subdomain],
    })
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data.nfts) {
    return <Loading />;
  }

  return (
    <div className="mx-auto mt-8">
      <div className="w-screen-2xl pb-40 px-6">
        <div className="flex justify-between items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold leading-7 text-gray-900 mb-4">
              {data.nfts[0].contract.openSeaMetadata.collectionName}
            </h2>
            <p className="text-gray-700 max-w-2xl">
              {data.nfts[0].contract.openSeaMetadata.description}
            </p>
          </div>
          <img src={data.nfts[0].contract.openSeaMetadata.bannerImageUrl} />
        </div>
        <Grid items={data.nfts} />
      </div>
    </div>
  );
};

export default Collections;
