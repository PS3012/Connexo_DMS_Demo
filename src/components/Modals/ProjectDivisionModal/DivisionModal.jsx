import React from 'react'
import './DivisionModal.css';

function DivisionModal() {
    return (
        <>
            <div className="division_modal" id="division_modal">
                <div className="modal_container">
                    <div className="modal_top">
                        <div className="division">
                            <strong>Division</strong>
                        </div>
                        <div className="project">
                            <strong>Project</strong>
                        </div>
                        <div className="close_modal">
                            <strong>x</strong>
                        </div>
                    </div>
                    <div className="modal_middle">
                        <div className="division_container">
                            <div className="division_link">
                                <input type="radio" value='KSA'  name='division'/>
                                <div>KSA</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='Egypt' name='division'/>
                                <div>Egypt</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='Estonia' name='division'/>
                                <div>Estonia</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='EHS-North America' name='division'/>
                                <div>EHS-North America</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='Global' name='division'/>
                                <div>Global</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='Jordan' name='division'/>
                                <div>Jordan</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='India' name='division'/>
                                <div>India</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='India' name='division'/>
                                <div>QMS-Asia</div>
                            </div>  
                            <div className="division_link">
                                <input type="radio" value='India' name='division'/>
                                <div>QMS-EMEA</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='India' name='division'/>
                                <div>SQM-APAC</div>
                            </div>
                            <div className="division_link">
                                <input type="radio" value='India' name='division'/>
                                <div>QMS-South America</div>
                            </div>
                        </div>
                        <div className="project_container">
                            <div className="project_link">
                                Internal Audit
                            </div>
                            <div className="project_link">
                                External Audit
                            </div>
                            <div className="project_link">
                                CAPA
                            </div>
                            <div className="project_link">
                                Audit Program
                            </div>
                            <div className="project_link">
                                Lab Incident
                            </div>
                            <div className="project_link">
                                Risk Assessment
                            </div>
                            <div className="project_link">
                                Root Cause Analysis
                            </div>
                            <div className="project_link">
                                Change Control
                            </div>
                            <div className="project_link">
                                Management Review
                            </div>
                            <div className="project_link">
                                New Document
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DivisionModal