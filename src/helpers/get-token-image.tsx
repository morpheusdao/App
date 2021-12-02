import VerseImg from "../assets/tokens/VERSE.svg";
import SverseImg from "../assets/tokens/SVERSE.svg";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "verse") {
        return toUrl(VerseImg);
    }

    if (name === "sverse") {
        return toUrl(SverseImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
