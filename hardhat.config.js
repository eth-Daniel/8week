require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * 切记私钥不要上传到仓库 切记 切记
 */

module.exports = {
  solidity: "0.8.9",
  networks: {
    
    "optimismgoerli": {
       url:"https://opt-goerli.g.alchemy.com/v2/ufUWS-4grv5CtJp4oCIdz-XySyN89QKz",
       accounts:["58fa9a6a9fa6cc6226cb2eaf6eaa950ed0795d7f5ff5d3f06c8d5d3c38ea2a9f" ]
    }
  }
};
