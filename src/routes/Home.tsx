import { useState, useEffect } from "react";
import { getCollectionMetadata } from "../service";
import CollectionMap from "../constants";
import EmblaCarousel from "../components/Carousel";
import Loading from "../components/Loading";

const Home = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    Promise.all(
      Object.values(CollectionMap).map((address) =>
        getCollectionMetadata({
          address: address,
        })
          .then((data) => {
            return data;
          })
          .catch((err) => console.error(err))
      )
    ).then((data) => setData(data));
  }, []);

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="mx-auto mt-8">
      <div className="w-screen-2xl pb-40 px-6">
        <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50">
          <p className="font-medium">Log in credentials</p>
          <p>Email: test@example.com</p>
          <p>Password: demomintable</p>
        </div>
        <section className="bg-white mb-16">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6x">
                Mint your NFT on the Blockchain for Free!
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
                Find it. Buy it. Flip it.
              </p>
              <span className="cursor-pointer inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-800 focus:ring-4 focus:ring-primary-300 ">
                Demo
              </span>
              <span className="cursor-pointer inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100   ">
                Shop
              </span>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://mintable.com/static/media/mintable-logo-new.e2bd394114ffcecad16c.png"
                alt="mockup"
              />
            </div>
          </div>
        </section>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-8">
          Top Collections
        </h2>
        <EmblaCarousel slides={data} options={{ loop: true }} />
      </div>
    </div>
  );
};

export default Home;
