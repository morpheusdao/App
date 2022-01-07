import { Networks } from "../../constants/blockchain";
import { LPBond, CustomLPBond } from "./lp-bond";
import { StableBond, CustomBond } from "./stable-bond";

import DaiIcon from "../../assets/tokens/DAI.e.svg";
import AvaxIcon from "../../assets/tokens/AVAX.svg";
import DaiVerseIcon from "../../assets/tokens/VERSE-DAI.png";
import AvaxTimeIcon from "../../assets/tokens/TIME-AVAX.svg";

import { StableBondContract, LpBondContract, WavaxBondContract, StableReserveContract, LpReserveContract } from "../../abi";

export const dai = new StableBond({
    name: "dai",
    displayName: "DAI",
    bondToken: "DAI",
    bondIconSvg: DaiIcon,
    bondContractABI: StableBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x563FbA9B6694611C9362E73780064664b9fAaAeE",
            reserveAddress: "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
        },
    },
    // tokensInStrategy: "60500000000000000000000000",
});

export const wavax = new CustomBond({
    name: "wavax",
    displayName: "wAVAX",
    bondToken: "AVAX",
    bondIconSvg: AvaxIcon,
    bondContractABI: WavaxBondContract,
    reserveContractAbi: StableReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0x177eBDfBeFdf92C426f11B7520203B1C5D6b0250",
            reserveAddress: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
        },
    },
    // tokensInStrategy: "756916000000000000000000",
});

export const daiVerse = new LPBond({
    name: "dai_verse_lp",
    displayName: "VERSE-DAI LP",
    bondToken: "DAI",
    bondIconSvg: DaiVerseIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xc168A3083907d3261e78BFb830ea8E5019225BCd",
            reserveAddress: "0xbf56ea8a64faf58889584930716e655317d22ea6",
        },
    },
    lpUrl: "https://exchange.lydia.finance/#/add/0xB72ab6f7177bBb41eFcC17D817778d77460259F1/0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
});

export const avaxVerse = new CustomLPBond({
    name: "avax_verse_lp",
    displayName: "VERSE-AVAX LP",
    bondToken: "AVAX",
    bondIconSvg: AvaxTimeIcon,
    bondContractABI: LpBondContract,
    reserveContractAbi: LpReserveContract,
    networkAddrs: {
        [Networks.AVAX]: {
            bondAddress: "0xc26850686ce755FFb8690EA156E5A6cf03DcBDE1",
            reserveAddress: "0xf64e1c5B6E17031f5504481Ac8145F4c3eab4917",
        },
    },
    lpUrl: "https://exchange.lydia.finance/#/add/AVAX/0xb54f16fB19478766A268F172C9480f8da1a7c9C3",
});

// export default [mim, wavax, mimTime, avaxTime];

export default [dai, daiVerse];
