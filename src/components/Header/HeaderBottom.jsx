// import React from 'react'
import "./HeaderBottom.css";

function HeaderBottom() {
    return (
        <div className="Header_Bottom">
            <div className="headerBottomInner">
                <div className="headerBottomLft">
                    <div className="navItem">
                        <i className="ri-dashboard-line"></i>
                        <h3>Dashboard</h3>
                    </div>
                    <div className="navItem">
                        <h3>KPI&#39;s</h3>
                    </div>
                    <div className="navItem">
                        <h3>Home Hub</h3>
                    </div>
                    <div className="navItem">
                        <h3>DMS Dashboard</h3>
                    </div>
                    <div className="navItem">
                        <h3>TMS Dashboard</h3>
                    </div>
                    <div className="navItem">
                        <h3>QMS Dashboard</h3>
                    </div>
                </div>
                <div className="headerBottomRgt">
                    <button>Initiate Record</button>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom