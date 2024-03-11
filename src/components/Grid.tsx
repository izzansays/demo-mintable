import { Nft } from "alchemy-sdk";
import Card from "./Card";

interface GridProps {
  items: Nft[];
}

const Grid = ({ items }: GridProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Items ({items[0].contract?.totalSupply})
      </h2>
      <div className="mt-6 grid grid-cols-6 gap-x-6 gap-y-10">
        {items.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Grid;
