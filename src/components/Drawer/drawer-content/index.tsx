import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import Social from "./social";
import { trim, shorten } from "../../../helpers";
import { useAddress } from "../../../hooks";
import useBonds from "../../../hooks/bonds";
import { Link } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./drawer-content.scss";
import DocsIcon from "../../../assets/icons/docs.svg";
import StakeIcon from "../../../assets/icons/stake.svg";
import BondIcon from "../../../assets/icons/bond.svg";
//import WonderlandIcon from "../../../assets/icons/Index_traverse.gif";
import DashboardIcon from "../../../assets/icons/dashboard.svg";
import ChartIcon from "../../../assets/icons/chart.svg";
import CalculatorIcon from "../../../assets/icons/calculator.svg";
import classnames from "classnames";

function NavContent() {
    const [isActive] = useState();
    const address = useAddress();
    const { bonds } = useBonds();

    const checkPage = useCallback((location: any, page: string): boolean => {
        const currentPath = location.pathname.replace("/", "");
        if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
            return true;
        }
        if (currentPath.indexOf("stake") >= 0 && page === "stake") {
            return true;
        }
        if (currentPath.indexOf("mints") >= 0 && page === "mints") {
            return true;
        }
        if (currentPath.indexOf("calculator") >= 0 && page === "calculator") {
            return true;
        }
        return false;
    }, []);

    return (
        <div className="dapp-sidebar">
            <div className="branding-header">
                <Link href="https://traverse.money" target="_blank">
                    {/*<img alt="" src={WonderlandIcon} width={130}/>*/}
                    <div className="TraverseIcon">
                        
                        <p>Traverse</p>
                        <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'>
                        </link>
                        </div>
                </Link>

                {address && (
                    <div className="wallet-link">
                        <Link href={`https://cchain.explorer.avax.network/address/${address}`} target="_blank">
                            <p>{shorten(address)}</p>
                        </Link>
                    </div>
                )}
            </div>

            <div className="dapp-menu-links">
                <div className="dapp-nav">
                    <Link
                        component={NavLink}
                        to="/dashboard"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "dashboard");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={DashboardIcon} />
                            <p>Dashboard</p>
                            <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'>
                        </link>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        to="/stake"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "stake");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={StakeIcon} />
                            <p>Stake</p>
                            <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'>
                        </link>
                        </div>
                    </Link>

                    <Link
                        component={NavLink}
                        id="bond-nav"
                        to="/mints"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "mints");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={BondIcon} />
                            <p>Mint</p>
                        </div>
                    </Link>

                    <div className="bond-discounts">
                        <p>Mint discounts</p>
                        <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'>
                        </link>
                        {bonds.map((bond, i) => (
                            <Link component={NavLink} to={`/mints/${bond.name}`} key={i} className={"bond"}>
                                {!bond.bondDiscount ? (
                                    <Skeleton variant="text" width={"150px"} />
                                ) : (
                                    <p>
                                        {bond.displayName}
                                        <span className="bond-pair-roi">{bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%</span>
                                    </p>
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        component={NavLink}
                        to="/calculator"
                        isActive={(match: any, location: any) => {
                            return checkPage(location, "calculator");
                        }}
                        className={classnames("button-dapp-menu", { active: isActive })}
                    >
                        <div className="dapp-menu-item">
                            <img alt="" src={CalculatorIcon} />
                            <p>Calculator</p>
                        </div>
                    </Link>
                    <Link href="https://dexscreener.com/avalanche/0xbf56ea8a64faf58889584930716e655317d22ea6" target="_blank" className={classnames("button-dapp-menu", { active: isActive })}>
                        <div className="dapp-menu-item">
                            <img alt="" src={ChartIcon} />
                            <p>Verse Chart</p>
                            <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'>
                        </link>
                        </div>
                    </Link>
                    <Link href="https://traverse.gitbook.io/traverse/" target="_blank" className={classnames("button-dapp-menu", { active: isActive })}>
                        <div className="dapp-menu-item">
                            <img alt="" src={DocsIcon} />
                            <p>Docs</p>
                            <link href='https://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet'>
                        </link>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="dapp-menu-doc-link">
                {/* <Link href="https://traverse.gitbook.io/traverse/" target="_blank">
                    <img alt="" src={DocsIcon} />
                    <p>Docs</p>
                </Link>
                <Link href="https://legacy.traverse.money/" target="_blank">
                    <p>Legacy website</p>
                </Link> */}
            </div>
            <Social />
        </div>
    );
}

export default NavContent;
