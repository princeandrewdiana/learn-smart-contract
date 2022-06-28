// scripts/index.js
module.exports = async function main (callback) {
    try {
      // Our code will go here
      const accounts = await web3.eth.getAccounts();
      console.log(accounts)

      const Box3 = artifacts.require('Box3');
      const box = await Box3.deployed();

      // Send a transaction to store() a new value in the Box
      await box.store(23);

      // Call the retrieve() function of the deployed Box contract
      const value = await box.retrieve();
      console.log('Box value is', value.toString());

      callback(0);
    } catch (error) {
      console.error(error);
      callback(1);
    }
  };