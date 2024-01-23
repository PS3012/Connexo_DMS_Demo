import { useState } from "react";
import "./HeaderBottom.css";
import { Link } from "react-router-dom";
import CreateRecordModal from "../Modals/CreateRecordModal/CreateRecordModal";

function HeaderBottom() {
    const [recordModal, setRecordModal] = useState(false)
    const closeRecordModal = () =>  setRecordModal(false)
    return (
        <>
            <div className="Header_Bottom">
                <div className="headerBottomInner">
                    <div className="headerBottomLft">
                        <Link to="/desktop">
                            <div className="navItem">
                                <i className="ri-home-3-fill"></i>
                                <h3>Desktop</h3>
                            </div>
                        </Link>
                        <Link to="/dashboard">
                            <div className="navItem">
                                <i className="ri-dashboard-3-fill"></i>
                                <h3>Dashboard</h3>
                            </div>
                        </Link>
                        <Link to="/analytics">
                            <div className="navItem">
                                <i className="ri-bar-chart-fill"></i>
                                <h3>Analytics</h3>
                            </div>
                        </Link>
                        <Link to="#">
                            <div className="navItem">
                                <i className="ri-file-marked-fill"></i>
                                <h3>Standards</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="headerBottomRgt">
                        <div className="themeBtn" onClick={() => setRecordModal(true)}>Initiate Record</div>
                    </div>
                </div>
            </div>

            {recordModal && <CreateRecordModal closeModal={closeRecordModal} />}
        </>
    )
}

export default HeaderBottom