import { UserProfile } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { RiNftFill } from "react-icons/ri";
import { FaRegClipboard } from "react-icons/fa6";
import { getCollection } from "../service";
import Grid from "../components/Grid";
import Loading from "../components/Loading";

const UserProfilePage = () => (
  <UserProfile path="/user" routing="virtual">
    <UserProfile.Page label="account" />
    <UserProfile.Page
      label="My NFTS"
      labelIcon={<RiNftFill size={18} />}
      url="my-nfts"
    >
      <MyNFTS />
    </UserProfile.Page>
    <UserProfile.Page label="security" />
  </UserProfile>
);

export default UserProfilePage;

const MyNFTS = () => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getCollection({
      address: "0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7",
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
    <div className="mx-auto">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
        My NFTs
      </h2>
      <p className="text-gray-800 mb-2">Displaying tokens in address:</p>
      <code className="text-sm inline-flex text-left items-center space-x-4 rounded-lg p-4 pl-6 border-2 border-gray-200 mb-8">
        <span className="flex gap-4">
          <span className="flex-1">
            <span>0x7Bd29408f11D2bFC23c34f18275bBf23bB716Bc7</span>
          </span>
        </span>
        <FaRegClipboard />
      </code>
      <Grid items={data.nfts} />
    </div>
  );
};
