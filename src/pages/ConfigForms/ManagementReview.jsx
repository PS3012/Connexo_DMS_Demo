// import React from 'react'

import { useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop"
import Grid from "../../components/DataFields/Grid";
import OperationModal from "../../components/Modals/InstructionModal/OperationModal";
import RequirementsforProductModal from "../../components/Modals/InstructionModal/RequirementsforProductModal";
import DesignnDevelopment from "../../components/Modals/InstructionModal/DesignnDevelopment";
import ControlofExternally from "../../components/Modals/InstructionModal/ControlofExternally";
import ProductionnService from "../../components/Modals/InstructionModal/ProductionnService";
import ReleaseOfProduct from "../../components/Modals/InstructionModal/ReleaseOfProduct";
import ControlofNonConforming from "../../components/Modals/InstructionModal/ControlofNonConforming";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";

function ManagementReview() {
    const [form, setForm] = useState("General Information");
    const [modal, setModal] = useState(" ");
    const currentDate = new Date();
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false)

    const dateFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateFormatOptions).replace(/ /g, '-');

    const oneMonthLater = new Date(currentDate);
    oneMonthLater.setMonth(currentDate.getMonth() + 1);

    // Convert the date one month later to the desired format
    // const formattedDateOneMonthLater = oneMonthLater.toLocaleDateString('en-GB', dateFormatOptions).replace(/ /g, '-');

    const Agenda = [
        {
            label: "Agenda",
            // instruction: "Please Attach all relevant or supporting documents",
            // required: true,
            columnList: [
                { id: "2.1.1.1", name: "Date", type: "date" },
                { id: "2.1.1.2", name: "Topic", type: "text" },
                { id: "2.1.1.3", name: "Responsible", type: "text" },
                { id: "2.1.1.4", name: "Time Start", type: "date" },
                { id: "2.1.1.5", name: "Time End", type: "date" },
                { id: "2.1.1.6", name: "Comment", type: "text" },
            ],
        },
    ];

    const managementReview = [
        {
            label: "Management Review Participants",
            columnList: [
                { id: "2.1.1.1", name: "Invited Person", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"] },
                { id: "2.1.1.2", name: "Designee", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"] },
                { id: "2.1.1.3", name: "Department", type: "singleSelection", selectionValues: ["Quality Assurance", "Quality Control", "Production"] },
                { id: "2.1.1.4", name: "Meeting Attended", type: "singleSelection", selectionValues: ["Yes", "No"] },
                { id: "2.1.1.5", name: "Designee Name", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"] },
                { id: "2.1.1.6", name: "Designee Department/Designation", type: "text" },
                { id: "2.1.1.7", name: "Remarks", type: "singleSelection", selectionValues: ["Quality Assurance", "Quality Control", "Production"] },
            ],
        },
    ];


    const attachment = [
        {
            label: "Initial attachment",
            instruction: "Please Attach all relevant or supporting documents",
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "file" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
    ];

    const actionItem = [
        {
            label: "Action Item Details",
            columnList: [
                { id: "2.1.1.1", name: "Short Description", type: "text" },
                { id: "2.1.1.2", name: "Due Date", type: "date" },
                { id: "2.1.1.3", name: "Site / Division", type: "text" },
                { id: "2.1.1.4", name: "Person Responsible", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana"] },
                { id: "2.1.1.5", name: "Current Status", type: "text" },
                { id: "2.1.1.6", name: "Date Closed", type: "date" },
                { id: "2.1.1.7", name: "Remarks", type: "text" },
            ],
        },
    ];

    const performanceEvaluation = [
        {
            label: "Performance Evaluation",
            columnList: [
                { id: "2.1.1.1", name: "Monitoring", type: "text" },
                { id: "2.1.1.2", name: "Measurement", type: "text" },
                { id: "2.1.1.3", name: "Analysis", type: "text" },
                { id: "2.1.1.4", name: "Evalutaion", type: "text" },
            ],
        },
    ];

    const capaDetails = [
        {
            label: "Performance Evaluation",
            // instruction:"Please Attach all relevant or supporting documents",
            columnList: [
                { id: "2.1.1.1", name: "CAPA Details", type: "text" },
                { id: "2.1.1.2", name: "CAPA Type", type: "singleSelection", selectionValues: ["Corrective Action", "Preventive Action", "Corrective &  Preventive Action"] },
                { id: "2.1.1.3", name: "Site / Division", type: "text" },
                { id: "2.1.1.4", name: "Person Responsible", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana"] },
                { id: "2.1.1.5", name: "Current Status", type: "text" },
                { id: "2.1.1.6", name: "Date Closed", type: "date" },
                { id: "2.1.1.7", name: "Remarks", type: "text" },

            ],
        },
    ];



    return (
        <>
            <div id="main-form-container" style={asideWorkFlow || asideFamilyTree ? { 'padding': '0 0 0 300px' } : {}}>

                {asideWorkFlow &&
                    <div className="aside-container">
                        <div className="head">
                            <div>Workflow</div>
                            <div>Trust The Process</div>
                        </div>
                        <div className="content workflow">
                            <div className="green-state">
                                Opened
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Under HOD Review
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                HOD Review Completed
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Under CFT Review
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Approved
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div>
                                Implemented
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div className="red-state">
                                Closed-Done
                                <img src="/down.gif" alt="..." />
                            </div>
                            <div className="red-state">
                                Closed- Cancelled
                            </div>
                        </div>
                    </div>
                }

                {asideFamilyTree &&
                    <div className="aside-container">
                        <div className="head">
                            <div>Family Tree</div>
                            <div>Family of Precision</div>
                        </div>
                        <div className="content family-list">
                            <div>CAPA (1)</div>
                            <div>Audit Program (0)</div>
                            <div>Observation (3)</div>
                            <div>Extension (2)</div>
                            <div>Effectiveness Check (0)</div>
                            <div>Change Control (0)</div>
                            <div>Root Cause Analysis (0)</div>
                        </div>
                    </div>
                }

                <div id="config-form-document-page">
                    <HeaderTop />
                    <div className="top-block">
                        <div className="head"><strong> Record Name:&nbsp;</strong>Management Review</div>
                        <div className="content">
                            <strong>Site / Process</strong> : Jordan / Management Review
                        </div>
                    </div>
                    <div className="document-block">
                        <div className="document-tabs">
                            <div
                                className={form === "General Information" ? "active" : ""}
                                onClick={() => setForm("General Information")}
                            >
                                General Information
                            </div>
                            <div
                                className={form === "Operational planning and control" ? "active" : ""}
                                onClick={() => setForm("Operational planning and control")}
                            >
                                Operational planning and control
                            </div>
                            <div
                                className={form === "Meetings and summary" ? "active" : ""}
                                onClick={() => setForm("Meetings and summary")}
                            >
                                Meetings and summary
                            </div>
                            <div
                                className={form === "Closure" ? "active" : ""}
                                onClick={() => setForm("Closure")}
                            >
                                Closure
                            </div>
                            <div
                                className={form === "Signatures" ? "active" : ""}
                                onClick={() => setForm("Signatures")}
                            >
                                Signatures
                            </div>
                        </div>
                        {form === "General Information" ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Record Number
                                                </b>
                                            </label>
                                            <input type="text" />
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Division Code
                                                </b>
                                            </label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Initiator
                                                </b>
                                            </label>
                                            <input type="text" value="Amit Guru" readOnly />
                                        </div>
                                        {/* <div className="group-input">
                                        <label>
                                            <b>
                                                Date of Initiation
                                            </b>
                                        </label>
                                        <input type="text" value={formattedDate} readOnly />
                                    </div> */}
                                        <InputDate label="Date of Initiation" enableDate="past" required="false" />
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Assigned To
                                                </b>
                                            </label>
                                            <select id="select-state" placeholder="Select..." name="assign_id">
                                                <option value="assign_id">Select a value</option>
                                                <option value="1">Amit Guru</option>
                                                <option value="2">Shaleen Mishra</option>
                                                <option value="6">Madhulika Mishra</option>
                                                <option value="7">Jin Kim</option>
                                                <option value="8">Akash Asthana</option>
                                            </select>
                                        </div>
                                        {/* <div className="group-input">
                                        <label>
                                            <b>
                                                Due Date
                                            </b>
                                        </label>
                                        <div className="instruction">Please mention expected date of completion</div>
                                        <input type="text" value={formattedDateOneMonthLater} readOnly />
                                    </div> */}
                                        <InputDate label="Due Date" enableDate="future" required="false" />

                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Initiator Group
                                                </b>
                                            </label>
                                            <select name="initiatorGroup" id="initiator_group">
                                                <option value="">-- Select --</option>
                                                <option value="CQA">
                                                    Corporate Quality Assurance</option>
                                                <option value="QAB">Quality
                                                    Assurance Biopharma</option>
                                                <option value="CQC">Central
                                                    Quality Control</option>
                                                <option value="CQC">
                                                    Manufacturing</option>
                                                <option value="PSG">Plasma
                                                    Sourcing Group</option>
                                                <option value="CS">Central
                                                    Stores</option>
                                                <option value="ITG">
                                                    Information Technology Group</option>
                                                <option value="MM">
                                                    Molecular Medicine</option>
                                                <option value="CL">Central
                                                    Laboratory</option>

                                                <option value="TT">Tech
                                                    team</option>
                                                <option value="QA">
                                                    Quality Assurance</option>
                                                <option value="QM">
                                                    Quality Management</option>
                                                <option value="IA">IT
                                                    Administration</option>
                                                <option value="ACC">
                                                    Accounting</option>
                                                <option value="LOG">
                                                    Logistics</option>
                                                <option value="SM">
                                                    Senior Management</option>
                                                <option value="BA">
                                                    Business Administration</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Initiator Group Code
                                                </b>
                                            </label>
                                            <input type="text" disabled />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <div className="required"></div>
                                            <b>Short Description</b>
                                        </label>
                                        <div className="instruction">Please mention brief summary</div>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>Type</b>
                                            </label>
                                            <select name="type">
                                                <option value="">Select Type</option>
                                                <option value="Other">Other</option>
                                                <option value="Training">Training</option>
                                                <option value="FinanceFinance">FinanceFinance</option>
                                                <option value="follow Up">Follow Up</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Sales">Sales</option>
                                                <option value="Account Service">Account Service</option>
                                                <option value="Recent Product Launch">Recent Product Launch</option>
                                                <option value="IT">IT</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <b>Priority Level</b>
                                            </label>
                                            <select name="priority_level">
                                                <option value="">Select Priority Level</option>
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </select>
                                        </div>
                                        <InputDate label="Scheduled Start Date" enableDate="past" required="false" />
                                        <InputDate label="Scheduled End Date" enableDate="future" required="false" />
                                    </div>
                                    <FlexField
                                        label="Attendess"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <div className="group-input">
                                        <Grid
                                            label={Agenda[0].label}
                                            required={Agenda[0].required}
                                            instruction={Agenda[0].instruction}
                                            columnList={Agenda[0].columnList}
                                        />
                                    </div>
                                    <FlexField
                                        label="Description"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <div className="group-input">
                                        <Grid
                                            label={managementReview[0].label}
                                            required={managementReview[0].required}
                                            instruction={managementReview[0].instruction}
                                            columnList={managementReview[0].columnList}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={attachment[0].label}
                                            required={attachment[0].required}
                                            instruction={attachment[0].instruction}
                                            columnList={attachment[0].columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === "Operational planning and control" ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    {modal === "Operations" ? (
                                        < OperationModal closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Operations</b>
                                        <span onClick={() => setModal("Operations")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Operations"
                                        instruction="(Launch Instruction)"
                                        isRequired="false"
                                        modal="Operations"
                                    />
                                    {modal === "Requirements for Products and Services" ? (
                                        < RequirementsforProductModal closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Requirements for Products and Services</b>
                                        <span onClick={() => setModal("Requirements for Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Requirements for Products and Services"
                                        instruction=""
                                        isRequired="false"
                                        modal="Requirements for Products and Services"
                                    />
                                    {modal === "Design and Development of Products and Services" ? (
                                        < DesignnDevelopment closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Design and Development of Products and Services</b>
                                        <span onClick={() => setModal("Design and Development of Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Design and Development of Products and Services"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {modal === "Control of Externally Provided Processes, Products and Services" ? (
                                        < ControlofExternally closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Control of Externally Provided Processes, Products and Services</b>
                                        <span onClick={() => setModal("Control of Externally Provided Processes, Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Control of Externally Provided Processes, Products and Services"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {modal === "Production and Service Provision" ? (
                                        < ProductionnService closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Production and Service Provision</b>
                                        <span onClick={() => setModal("Production and Service Provision")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Production and Service Provision"
                                        instruction=""
                                        isRequired="false"
                                    />

                                    {modal === "Release of Products and Services" ? (
                                        < ReleaseOfProduct closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Release of Products and Services</b>
                                        <span onClick={() => setModal("Release of Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Release of Products and Services"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {modal === "Control of Non-conforming Outputs" ? (
                                        < ControlofNonConforming closeModal={() => { setModal(" ") }} />
                                    ) : ""}
                                    {/* <div className="group-input">
                                    <label><b>Control of Non-conforming Outputs</b>
                                        <span onClick={() => setModal("Control of Non-conforming Outputs")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Control of Non-conforming Outputs"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <div className="group-input">
                                        <Grid
                                            label={performanceEvaluation[0].label}
                                            required={performanceEvaluation[0].required}
                                            instruction={performanceEvaluation[0].instruction}
                                            columnList={performanceEvaluation[0].columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === "Meetings and summary" ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Risk & Opportunities
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Risk & Opportunities"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            External Supplier Performance
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="External Supplier Performance"
                                        instruction=""
                                        isRequired="false"
                                    />

                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Customer Satisfaction Level
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Customer Satisfaction Level"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Budget Estimates
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Budget Estimates"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Completion of Previous Tasks
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Completion of Previous Tasks"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Production
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Production"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Plans
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Plans"
                                        instruction=""
                                        isRequired="false"
                                    />

                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Forecast
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Forecast"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    {/* <div className="group-input">
                                    <label>
                                        <b>
                                            Any Additional Support Required
                                        </b>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div> */}
                                    <FlexField
                                        label="Any Additional Support Required"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <div className="group-input">
                                        <Grid
                                            label={attachment[0].label}
                                            required={attachment[0].required}
                                            instruction={attachment[0].instruction}
                                            columnList={attachment[0].columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === "Closure" ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="group-input">
                                        <Grid
                                            label={actionItem[0].label}
                                            required={actionItem[0].required}
                                            instruction={actionItem[0].instruction}
                                            columnList={actionItem[0].columnList}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={capaDetails[0].label}
                                            required={capaDetails[0].required}
                                            instruction={capaDetails[0].instruction}
                                            columnList={capaDetails[0].columnList}
                                        />
                                    </div>
                                    <InputDate label="Next Management Review Date" enableDate="past" required="false" />
                                    <FlexField
                                        label="Summary & Recommendation"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <FlexField
                                        label="Conclusion"
                                        instruction=""
                                        isRequired="false"
                                    />
                                    <div className="group-input">
                                        <Grid
                                            label={attachment[0].label}
                                            required={attachment[0].required}
                                            instruction={attachment[0].instruction}
                                            columnList={attachment[0].columnList}
                                        />
                                    </div>
                                    <div className="sub-head">Extension Justification</div>
                                    <FlexField
                                        label="Due Date Extension Justification"
                                        instruction="Please Mention justification if due date is crossed"
                                        isRequired="false"
                                    />
                                </div>
                            </div>
                        ) : form === "Signatures" ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Completed By
                                                </b>
                                            </label>
                                            <input type="text" />
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                <b>
                                                    Completed On
                                                </b>
                                            </label>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : ""}
                    </div>
                    <div className="button-block" style={asideWorkFlow || asideFamilyTree ? { 'width': 'calc(100% - 300px)' } : { 'width': '100%' }}>
                        <button className="themeBtn">Save</button>
                        <button className="themeBtn">Back</button>
                        <button className="themeBtn">Next</button>
                        <button className="themeBtn">Exit</button>
                    </div>
                </div>
                <div className="sticky-buttons">
                    <div onClick={() => { setAsideWorkFlow(!asideWorkFlow); setAsideFamilyTree(false) }}>
                        <svg width="18" height="24" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ffffff" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34M332.1 128H256V51.9zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288zm220.1-208c-5.7 0-10.6 4-11.7 9.5c-20.6 97.7-20.4 95.4-21 103.5c-.2-1.2-.4-2.6-.7-4.3c-.8-5.1.3.2-23.6-99.5c-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1c-24.4 99-24 96.2-24.8 103.7c-.1-1.1-.2-2.5-.5-4.2c-.7-5.2-14.1-73.3-19.1-99c-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8c8 32.6 26.7 109.5 33.2 136c1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4c1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1c20.8-81.9 30.2-119 34.5-136c1.9-7.6-3.8-14.9-11.6-14.9h-15.8z" />
                        </svg>
                    </div>
                    <div onClick={() => { setAsideFamilyTree(!asideFamilyTree); setAsideWorkFlow(false) }}>
                        <svg width="24" height="24" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#ffffff" d="M25.01 49v46H103V49zM153 49v46h78V49zm128 0v46h78V49zm128 0v46h78V49zM55.01 113v64H119v46h18v-46h64v-64h-18v46H73.01v-46zM311 113v64h64v46h18v-46h64v-64h-18v46H329v-46zM89.01 241v46H167v-46zM345 241v46h78v-46zm-226 64v48h128v46h18v-46h128v-48h-18v30H137v-30zm98 112v46h78v-46z" />
                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManagementReview