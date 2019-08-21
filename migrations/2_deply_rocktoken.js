var rocktoken = artifacts.require("./rocktoken.sol");

module.exports = function (deployer) {
    deployer.deploy(rocktoken);
};