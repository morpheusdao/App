import { ethers } from "ethers";
import { LpReserveContract } from "../abi";
import { daiVerse } from "../helpers/bond";
import { Networks } from "../constants/blockchain";

export async function getMarketPrice(networkID: Networks, provider: ethers.Signer | ethers.providers.Provider): Promise<number> {
    // const mimTimeAddress = daiVerse.getAddressForReserve(networkID);
    const daiVerseAddress = '0xbf56ea8a64faf58889584930716e655317d22ea6';
    const pairContract = new ethers.Contract(daiVerseAddress, LpReserveContract, provider);
    const reserves = await pairContract.getReserves();
    const marketPrice = reserves[1] / reserves[0];
    return marketPrice;
}
