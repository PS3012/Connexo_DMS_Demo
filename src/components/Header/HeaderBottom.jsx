import { useState } from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";

function HeaderBottom() {

    return (
        <>
            <div className="Header_Bottom">
                <div className="headerBottomInner">
                    <div className="headerBottomLft">
                        <Link to="#">
                            <div className="navItem">
                                <i class="ri-home-3-fill"></i>
                                <h3>Desktop</h3>
                            </div>
                        </Link>
                        <Link to="/dashboard">
                            <div className="navItem">
                                <i class="ri-dashboard-3-fill"></i>
                                <h3>Dashboard</h3>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="navItem">
                                <i class="ri-bar-chart-fill"></i>
                                <h3>Analytics</h3>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="navItem">
                                <i class="ri-file-marked-fill"></i>
                                <h3>Standards</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="headerBottomRgt">
                        <Link to='/popup'>
                            <button >Initiate Record</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeaderBottom