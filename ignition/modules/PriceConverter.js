const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// const priceFeed = "0x5fb1616F78dA7aFC9FF79e0371741a747D2a7F22";
// const ONE_GWEI = 1_000_000_000n;

module.exports = buildModule("PriceConverterModule", (m) => {
    //   const pricefeed = m.getParameter("priceFeed", priceFeed);
    // const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);

    const priceconvetre = m.contract("PriceConverter");

    return { priceconvetre };
});
