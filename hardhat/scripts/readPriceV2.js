const {ethers} = require("hardhat");

async function main() {
  try {
      
    const [deployer] = await ethers.getSigners();    
    const priceConsumerV3 = await ethers.getContractAt("PriceConsumerV3", deployer);

    const contract = priceConsumerV3.attach(
        "" // The deployed contract address
    );

    const price = await contract.getLatestPrice();
    console.log(price.toString());
    
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

main();
