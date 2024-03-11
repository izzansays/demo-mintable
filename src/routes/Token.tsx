import { useParams } from "wouter";
import { FaEthereum } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getToken } from "../service";
import CollectionMap from "../constants";
import Loading from "../components/Loading";

interface TokenProps {
  subdomain: string;
}

const Token = ({ subdomain }: TokenProps) => {
  let host = window.location.host;
  let parts = host.split(".");

  const params = useParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getToken({
      address: CollectionMap[subdomain],
      id: params.id!,
    })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto mb-32">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex items-center space-x-2 max-w-7xl px-8"
          >
            <li>
              <div className="flex items-center text-sm font-medium text-gray-900">
                <a href={`http://${parts[1]}`} className="mr-3">
                  Home
                </a>
                <span>/</span>
              </div>
            </li>
            <li>
              <div className="flex items-center text-sm font-medium text-gray-900">
                <a href={`http://${host}`} className="mr-3">
                  {data.contract?.openSeaMetadata.collectionName}
                </a>
                <span>/</span>
              </div>
            </li>

            <li className="text-sm">
              <a
                // href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {data.name ??
                  data.contract?.openSeaMetadata.collectionName +
                    " " +
                    data.tokenId}
              </a>
            </li>
          </ol>
        </nav>

        {/* Product info */}
        <div className="mx-auto pt-10 grid max-w-7xl grid-cols-3 grid-rows-[auto,auto,1fr] gap-x-8 px-8 pb-24">
          <div className="col-span-2  pr-8">
            <div className="aspect-square hidden overflow-hidden rounded-lg lg:block">
              <img
                src={data.image?.cachedUrl}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="flex flex-col row-span-3 mt-0">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
              {data.name ??
                data.contract?.openSeaMetadata.collectionName +
                  " " +
                  data.tokenId}
            </h1>
            <div className="flex items-center mb-8">
              <FaEthereum size={24} />
              <p className="ml-3 text-3xl tracking-tight text-gray-900">
                {data.contract?.openSeaMetadata.floorPrice}
              </p>
            </div>

            <button className="mb-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Buy
            </button>
            <div>
              <h3 className="text-base font-semibold leading-7 text-gray-900">
                Metadata
              </h3>
              {data.raw?.metadata.attributes.map(
                (
                  attribute: { trait_type: string; value: string },
                  i: number
                ) => (
                  <div key={i} className="mt-2 border-t border-gray-100">
                    <dl className="divide-y divide-gray-100">
                      <div className="px-0 py-6 grid grid-cols-3 gap-4">
                        <dt className="text-sm font-medium leading-6 text-gray-900">
                          {attribute.trait_type}
                        </dt>
                        <dd className="mt-0 text-sm leading-6 text-gray-700 col-span-2">
                          {attribute.value}
                        </dd>
                      </div>
                    </dl>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
