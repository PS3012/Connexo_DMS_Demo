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

function ManagementReview() {
    const [form, setForm] = useState("General Information");
    const [modal, setModal] = useState(" ");
    const currentDate = new Date();

    const dateFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateFormatOptions).replace(/ /g, '-');

    const oneMonthLater = new Date(currentDate);
    oneMonthLater.setMonth(currentDate.getMonth() + 1);

    // Convert the date one month later to the desired format
    const formattedDateOneMonthLater = oneMonthLater.toLocaleDateString('en-GB', dateFormatOptions).replace(/ /g, '-');

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
                { id: "2.1.1.4", name: "Time End", type: "date" },
                { id: "2.1.1.4", name: "Comment", type: "text" },
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
                { id: "2.1.1.4", name: "Designee Name", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"] },
                { id: "2.1.1.4", name: "Designee Department/Designation", type: "text" },
                { id: "2.1.1.4", name: "Remarks", type: "singleSelection", selectionValues: ["Quality Assurance", "Quality Control", "Production"] },
            ],
        },
    ];


    const attachment = [
        {
            label: "Initial attachment",
            columnList: [
                { id: "2.1.1.1", name: "Title of Document", type: "text" },
                { id: "2.1.1.2", name: "Attached File", type: "file" },
                { id: "2.1.1.3", name: "Remark", type: "text" },
            ],
        },
    ];

    const performanceEvaluation = [
        {
            label: "Initial attachment",
            columnList: [
                { id: "2.1.1.1", name: "Monitoring", type: "text" },
                { id: "2.1.1.2", name: "Measurement", type: "text" },
                { id: "2.1.1.3", name: "Analysis", type: "text" },
                { id: "2.1.1.4", name: "Evalutaion", type: "text" },
            ],
        },
    ];



    return (
        <>

            <HeaderTop />
            <div id="config-form-document-page">
                <div className="top-block">
                    <div className="head">Management Review</div>
                    <div className="content">
                        Site / Process : Jordan / Management Review
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
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Date of Initiation
                                            </b>
                                        </label>
                                        <input type="text" value={formattedDate} readOnly />
                                    </div>
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
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Due Date
                                            </b>
                                        </label>
                                        <div className="instruction">Please mention expected date of completion</div>
                                        <input type="text" value={formattedDateOneMonthLater} readOnly />
                                    </div>
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
                                    <div className="group-input">
                                        <label>
                                            <b>Scheduled Start Date</b>
                                        </label>
                                        <input type="date" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>Scheduled End Date</b>
                                        </label>
                                        <input type="date" />
                                    </div>
                                    <div className="group-input">
                                        <label>
                                            <b>
                                                Attendess
                                            </b>
                                        </label>
                                        <textarea cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                                <div className="group-input">
                                    <Grid
                                        label={Agenda[0].label}
                                        required={Agenda[0].required}
                                        instruction={Agenda[0].instruction}
                                        columnList={Agenda[0].columnList}
                                    />
                                </div>
                                <div className="group-input">
                                    <label><b>Description</b></label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
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
                                <div className="group-input">
                                    <label><b>Operations</b>
                                        <span onClick={() => setModal("Operations")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                {modal === "Requirements for Products and Services" ? (
                                    < RequirementsforProductModal closeModal={() => { setModal(" ") }} />
                                ) : ""}
                                <div className="group-input">
                                    <label><b>Requirements for Products and Services</b>
                                        <span onClick={() => setModal("Requirements for Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                {modal === "Design and Development of Products and Services" ? (
                                    < DesignnDevelopment closeModal={() => { setModal(" ") }} />
                                ) : ""}
                                <div className="group-input">
                                    <label><b>Design and Development of Products and Services</b>
                                        <span onClick={() => setModal("Design and Development of Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                {modal === "Control of Externally Provided Processes, Products and Services" ? (
                                    < ControlofExternally closeModal={() => { setModal(" ") }} />
                                ) : ""}
                                <div className="group-input">
                                    <label><b>Control of Externally Provided Processes, Products and Services</b>
                                        <span onClick={() => setModal("Control of Externally Provided Processes, Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                {modal === "Production and Service Provision" ? (
                                    < ProductionnService closeModal={() => { setModal(" ") }} />
                                ) : ""}
                                <div className="group-input">
                                    <label><b>Production and Service Provision</b>
                                        <span onClick={() => setModal("Production and Service Provision")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                {modal === "Release of Products and Services" ? (
                                    < ReleaseOfProduct closeModal={() => { setModal(" ") }} />
                                ) : ""}
                                <div className="group-input">
                                    <label><b>Release of Products and Services</b>
                                        <span onClick={() => setModal("Release of Products and Services")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>
                                {modal === "Control of Non-conforming Outputs" ? (
                                    < ControlofNonConforming closeModal={() => { setModal(" ") }} />
                                ) : ""}
                                <div className="group-input">
                                    <label><b>Control of Non-conforming Outputs</b>
                                        <span onClick={() => setModal("Control of Non-conforming Outputs")} className="instruction">(Launch Instruction)</span>
                                    </label>
                                    <textarea cols="30" rows="3"></textarea>
                                </div>

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
                    ) : ""}
                </div>
            </div>
        </>
    )
}

export default ManagementReview