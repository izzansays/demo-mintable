
import { Alchemy, Nft, NftContract, NftContractNftsResponse } from "alchemy-sdk";

const alchemy = new Alchemy();

export type GetCollectionProps = {
  address: string,
}

export const getCollection = async ({ address }: GetCollectionProps) => {
  const data = await alchemy.nft
    .getNftsForContract(address, { pageSize: 10 })
    .then((data: NftContractNftsResponse) => { return data })
    .catch((err) => console.error(err))

  return data
}

export const getCollectionMetadata = async ({ address }: GetCollectionProps) => {
  const data = await alchemy.nft
    .getContractMetadata(address)
    .then((data: NftContract) => { return data })
    .catch((err) => console.error(err))

  return data
}

export type GetTokenProps = {
  address: string,
  id: string
}

export const getToken = async ({ address, id }: GetTokenProps) => {
  const data = await alchemy.nft
    .getNftMetadata(address, id)
    .then((data: Nft) => { return data })
    .catch((err) => console.error(err))

  return data
}

