import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xf5dfbe5ba4b4aaa26425f5bb38e796965d3ceec9";  //contract address 
// 0x08822bDe44357f8DD8f2b84179302eeD4388551D - newly created
// 0xf5dfbe5ba4b4aaa26425f5bb38e796965d3ceec9 - old maybe

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/fdaKceFZHQWm40e-JVWi8iiXD1GTGFWR",
  },
};