const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Explicit", function () {
    async function deployContract() {
        const Contract = await ethers.getContractFactory("Explicit");
        const contract = await Contract.deploy();
        return contract;
    }

    describe("incrementSingle", function () {
        it("Should increment a", async function () {
            const contract = await loadFixture(deployContract);

            await contract.incrementSingle();
            const data = await contract.data();

            expect(data.a).to.equal(2);
        });
    });

    describe("incrementAll", function () {
        it("Should increment a", async function () {
            const contract = await loadFixture(deployContract);

            await contract.incrementAll();

            const data = await contract.data();

            expect(data.a).to.equal(2);
            expect(data.b).to.equal(2);
            expect(data.c).to.equal(2);
            expect(data.d).to.equal(2);
        });
    });
});
