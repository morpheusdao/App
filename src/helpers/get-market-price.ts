import { ethers } from "ethers";
import { LpReserveContract } from "../abi";
import { daiVerse } from "../helpers/bond";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    // const mimTimeAddress = daiVerse.getAddressForReserve(networkID);
    const daiVerseAddress = '0x907c9DC537a5AE4E5d56d3C881De0382ceF43A3a';
    const pairContract = new ethers.Contract(daiVerseAddress, LpReserveContract, provider);
    const reserves = await pairContract.getReserves();
    const marketPrice = reserves[0] / reserves[1];
    return marketPrice;
}
