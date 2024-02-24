import Image from "next/image";

import EthereumIcon from "@/assets/icons/eth.svg"
import VerifiedIcon from "@/assets/icons/verified.svg"

type CollectorCardProps = {
  ranking: number;
  collectorUsername: string;
  minPrice: number;
  currPrice: number;
};

const CollectorCard: React.FC<CollectorCardProps> = ({ ranking, collectorUsername, minPrice, currPrice }) => {
  return (
    <div className="w-full h-auto h-min-collector-card px-7 py-2 border border-white/[.05] rounded-collector-card flex justify-between font-inter text-xs text-white bg-white/[.01] @laptop:text-sm">
      <div className="flex gap-6 font-semibold">
        <div className="flex justify-center items-center text-sm @laptop:text-base">{ranking}</div>
        <div className="flex gap-4 items-center">
          <div className="min-w-10 min-h-10 relative">
            <Image
              className="rounded-full"
              fill
              src="/images/nfts/nft-card-cover-1.png"
              alt=""
            />
            <Image
              style={{
                position: "absolute",
                right: -3,
                bottom: -3
              }}
              width={16}
              src={VerifiedIcon}
              alt=""
            />
          </div>
          <div>
            <p className="text-sm @laptop:text-base">{collectorUsername}</p>
            <div className="flex items-center flex-wrap ">
              <p className="mr-2 font-normal opacity-70">Preço mínimo</p>
              <p className="flex items-center">
                <Image
                  style={{
                    marginRight: "8px"
                  }}
                  src={EthereumIcon}
                  alt=""
                />
                {minPrice} ETH
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex shrink-0 flex-col justify-center items-end">
        <p className="font-bold text-collector-card-appreciation">20%</p>
        <p className="flex items-center gap-2 font-semibold">
          <Image
            src={EthereumIcon}
            alt=""
          />
          {currPrice} ETH
        </p>
      </div>
    </div>
  );
}

export default CollectorCard;