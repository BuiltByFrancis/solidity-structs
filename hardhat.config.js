require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const {
  ALCHEMY_KEY,
  ETHERSCAN_API_KEY,
} = process.env;

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 500,
      },
    },
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
        blockNumber: 16629225,
      },
    },
  },
  etherscan: {
    apiKey: `${ETHERSCAN_API_KEY}`,
  },
};
