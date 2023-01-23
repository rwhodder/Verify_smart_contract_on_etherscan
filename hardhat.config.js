require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const QUICKNODE_HTTP_URL =
  "https://dry-side-wind.matic-testnet.discover.quiknode.pro/410b73b1117c31b7235a35a513cab3f6e5918de6/";
const PRIVATE_KEY =
  "0xf1c1571af4f2fedb48fdd410c997cea899f5425f6840b4cea1fe7e8b98a741e1";
const POLYGONSCAN_KEY = "91HK1UD4DB9FN4RYUS1G7DCNN4S1GV86HC";

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: QUICKNODE_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      polygonMumbai: POLYGONSCAN_KEY,
    },
  },
};

//0x2CBEa9118fDFC7bB33C82D47Ab6A12b8b5cc8791
