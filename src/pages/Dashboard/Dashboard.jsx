import './Dashboard.css';
import React, { useState } from 'react'
import HeaderTop from '../../components/Header/HeaderTop';
import HeaderBottom from '../../components/Header/HeaderBottom';

function Dashboard() {
    const [form, setForm] = useState("Internal Audit");

    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <>
                <div id='multitab_header_tabs'>
                    <div
                        onClick={() => setForm("Internal Audit")}
                        className={`process_group ${form === "Internal Audit" ? 'active' : 'inactive'}`}>
                        Internal Audit
                    </div>
                    <div
                        onClick={() => setForm("External Audit")}
                        className={`process_group ${form === "External Audit" ? 'active' : 'inactive'}`}>
                        External Audit
                    </div>
                    <div
                        onClick={() => setForm("CAPA")}
                        className={`process_group ${form === "CAPA" ? 'active' : 'inactive'}`}>
                        CAPA
                    </div>
                    <div
                        onClick={() => setForm("Audit Program")}
                        className={`process_group ${form === "Audit Program" ? 'active' : 'inactive'}`}>
                        Audit Program
                    </div>
                    <div
                        onClick={() => setForm("Lab Incident")}
                        className={`process_group ${form === "Lab Incident" ? 'active' : 'inactive'}`}>
                        Lab Incident
                    </div>
                    <div
                        onClick={() => setForm("Change Control")}
                        className={`process_group ${form === "Change Control" ? 'active' : 'inactive'}`}>
                        Change Control
                    </div>
                    <div
                        onClick={() => setForm("Risk Assessment")}
                        className={`process_group ${form === "Risk Assessment" ? 'active' : 'inactive'}`}>
                        Risk Assessment
                    </div>
                    <div
                        onClick={() => setForm("Root Cause Analysis")}
                        className={`process_group ${form === "Root Cause Analysis" ? 'active' : 'inactive'}`}>
                        Root Cause Analysis
                    </div>
                    <div
                        onClick={() => setForm("Management Review")}
                        className={`process_group ${form === "Management Review" ? 'active' : 'inactive'}`}>
                        Management Review
                    </div>
                    <div
                        onClick={() => setForm("New Document")}
                        className={`process_group ${form === "New Document" ? 'active' : 'inactive'}`}>
                        New Document
                    </div>
                </div>
            </>
            <div id="scope_table_container">
                <div className="scope_bar">
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
                    <button className='themeBtn'>Print</button>
                    <button className='themeBtn'>Print All</button>
                </div>
                <div className="table_block">
                    {form === "Internal Audit" ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Internal Audit</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Major</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                    <tr>
                                        <td>0001</td>
                                        <td>Internal Audit</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Major</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'External Audit' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>External Audit</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Major</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'CAPA' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>CAPA</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'Audit Program' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Audit Program</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'Lab Incident' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Lab Incident</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'Change Control' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Change Control</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'Risk Assessment' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Risk Assessment</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'Root Cause Analysis' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Root Cause Analysis</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'Management Review' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>Management Review</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : form === 'New Document' ? (
                        <div className="table_wrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Record</th>
                                        <th>Division</th>
                                        <th>Process</th>
                                        <th>Short Description</th>
                                        <th>Severity Level</th>
                                        <th>Date Opened</th>
                                        <th>Assigned To</th>
                                        <th>Due Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>0001</td>
                                        <td>New Document</td>
                                        <td>Internal-Audit</td>
                                        <td>description</td>
                                        <td>Minor</td>
                                        <td>17-Jan-2024 11:09 AM</td>
                                        <td>Amit guru</td>
                                        <td>17-Jan-2024</td>
                                        <td>Closed - Done</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : ''}
                </div>
            </div>
        </>
    )
}

export default Dashboard