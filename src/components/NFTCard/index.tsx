import Image from "next/image";

import EthereumIcon from "@/assets/icons/eth.svg"
import VerifiedIcon from "@/assets/icons/verified.svg"

import { FaRegClock, FaRegHeart } from "react-icons/fa6";

type NFTCardProps = {
  likesCount: number;
  collection: string;
  tag: string;
  price: number;
  expiresAt: number;
};

const NFTCard: React.FC<NFTCardProps> = ({ likesCount, collection, tag, price, expiresAt }) => {
  function getLocalPrice(price: number): string {
    return "R$450,00"
  }

  function getRemainingTime(expiresAt: number): string {
    return "10h 22min 35s";
  }

  return (
    <div className="w-full max-w-nft-card border border-nft-card rounded-2xl font-inter bg-nft-card overflow-hidden">
      <div className="w-full h-nft-card-cover relative">
        <Image
          fill
          src="/images/nfts/nft-card-cover-1.png"
          quality={100}
          alt=""
        />
        <div className="w-20 h-11 border-2 border-nft-card rounded-nft-card-likes absolute top-2 right-2 flex items-center justify-center gap-1 font-semibold bg-nft-card-likes">
          <span>
            <FaRegHeart />
          </span>
          {likesCount}
        </div>
      </div>
      <div className="p-4 space-y-4">
        <div className="space-y-4">
          <div className="space-y-1 font-semibold">
            <p className="flex gap-1 text-xs text-nft-card-collection">
              {collection}
              <span className="flex items-center text-sm text-nft-card-badge">
                <Image
                  width={14}
                  src={VerifiedIcon}
                  alt=""
                />
              </span>
            </p>
            <h1 className="text-lg">{tag}</h1>
          </div>
          <div>
            <p className="text-2xs/3 opacity-70">Preço atual</p>
            <div className="flex items-end justify-between">
              <h2 className="flex gap-1 font-semibold text-lg">
                <span className="flex items-center text-xl">
                  <Image
                    width={12}
                    src={EthereumIcon}
                    alt="Ethereum Currency Icon"
                  />
                </span>
                {price} ETH
              </h2>
              <p className="font-medium text-xs">{getLocalPrice(price)}</p>
            </div>
          </div>
        </div>
        <button className="w-full py-4 rounded-nft-card-btn font-semibold text-sm bg-nft-card-btn">
          Buy Now
        </button>
        <p className="h-2 flex items-center gap-1 text-2xs/3">
          <span className="flex items-center text-sm">
            <FaRegClock />
          </span>
          Fim em {getRemainingTime(expiresAt)}
        </p>
      </div>
    </div>
  );
}

export default NFTCard;