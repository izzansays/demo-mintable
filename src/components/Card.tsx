import { FaEthereum } from "react-icons/fa6";
import { Nft } from "alchemy-sdk";

const Card = ({ tokenId, name, image, contract }: Nft) => {
  let host = window.location.host;

  return (
    <article className="shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <a href={`http://${host}/${tokenId}`}>
        <img
          src={image.thumbnailUrl}
          loading="lazy"
          className="aspect-square w-full object-cover object-center rounded-t-md"
        />
        <div className="flex justify-between px-3 py-4 items-start flex-col lg:flex-row gap-2">
          <span className="block text-gray-900 text-left">{`${
            name ?? contract.openSeaMetadata.collectionName + " " + tokenId
          }`}</span>
          <div className="flex items-center">
            <FaEthereum />
            <span className="block text-gray-900 ml-1">
              {contract.openSeaMetadata.floorPrice}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
};

export default Card;
