import { ExternalProvider } from "@ethersproject/providers";
import { ethers } from "ethers";
import { useEffect } from "react";
export default function () {
  // const init = async () => {
  //   // @ts-nocheck
  //   const provider = new ethers.providers.Web3Provider(
  //     global?.window?.ethereum as ExternalProvider
  //   );
  //   provider.getNetwork().then((net) => {
  //     console.log(net);
  //   });

  //   const abiERC721 = [
  //     "function name() view returns (string)",
  //     "function symbol() view returns (string)",
  //     "function supportsInterface(bytes4) public view returns(bool)",
  //   ];
  //   // ERC721的合约地址，这里用的BAYC
  //   const addressBoyn = "0x67De2D661b059d223Fec31b776162f9d57f28424";
  //   // 创建ERC721合约实例
  //   const contractERC721 = new ethers.Contract(
  //     addressBoyn,
  //     abiERC721,
  //     provider
  //   );
  //   const nameERC721 = await contractERC721.name();
  //   const symbolERC721 = await contractERC721.symbol();
  //   console.log("\n1. 读取ERC721合约信息");
  //   console.log(`合约地址: ${addressBoyn}`);
  //   console.log(`名称: ${nameERC721}`);
  //   console.log(`代号: ${symbolERC721}`);

  //   const selectorERC721 = "0x80ac58cd";
  //   const isERC721 = await contractERC721.supportsInterface(selectorERC721);
  //   console.log("\n2. 利用ERC165的supportsInterface，确定合约是否为ERC721标准");
  //   console.log(`合约是否为ERC721标准: ${isERC721}`);
  // };
  // useEffect(() => {
  //   init().catch(console.error);
  // }, []);
  return (
    <div>
      <div>23l</div>
      <div>23</div>
    </div>
  );
}
