const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("None", function () {
    async function deployContract() {
        const Contract = await ethers.getContractFactory("None");
        const contract = await Contract.deploy();
        return contract;
    }

    describe("incrementSingle", function () {
        it("Should increment a", async function () {
            const contract = await loadFixture(deployContract);

            await contract.incrementSingle();

            expect(await contract.a()).to.equal(2);
        });
    });

    describe("incrementAll", function () {
        it("Should increment a", async function () {
            const contract = await loadFixture(deployContract);

            await contract.incrementAll();

            expect(await contract.a()).to.equal(2);
            expect(await contract.b()).to.equal(2);
            expect(await contract.c()).to.equal(2);
            expect(await contract.d()).to.equal(2);
        });
    });
});
