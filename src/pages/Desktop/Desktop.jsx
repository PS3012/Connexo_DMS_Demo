import React from 'react'
import HeaderTop from '../../components/Header/HeaderTop';
import "./Desktop.css";

function Desktop() {
    return (
        <>
            <HeaderTop />
            <div className="desktop-input-table-wrapper">
                <div className="input-wrapper">
                    <div className="group-input-2">
                        <label>Process</label>
                        <select>
                            <option value="all_records">All Records</option>
                            <option value="internal_audit">Internal Audit</option>
                            <option value="external_audit">External Audit</option>
                            <option value="capa">Capa</option>
                            <option value="lab_incident">Lab Incident</option>
                            <option value="risk_assement">Risk Assesment</option>
                            <option value="root_cause_analysis">Root Cause Analysis</option>
                            <option value="management_review">Management Review</option>
                        </select>
                    </div>
                    <div className="group-input-2">
                        <label>Criteria</label>
                        <select>
                            <option value="all_records">All Records</option>
                            <option value="1">Closed Records</option>
                            <option value="2">Opened Records</option>
                            <option value="3">Cancelled Records</option>
                            <option value="4">Overdue Records</option>
                            <option value="5">Assigned To Me</option>
                            <option value="6">Records Created Today</option>
                        </select>
                    </div>
                    <button className='btn'>Print</button>
                </div>
                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Record</th>
                                <th>Division</th>
                                <th>Process</th>
                                <th>Short Description</th>
                                <th>Date Opened</th>
                                <th>Assigned To</th>
                                <th>Due Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Desktop