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
import HeaderBottom from "../../components/Header/HeaderBottom";

function ManagementReviewPanel() {
    const [form, setForm] = useState("General Information");
    const [modal, setModal] = useState(" ");
    const currentDate = new Date();
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false)

    const dateFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateFormatOptions).replace(/ /g, '-');

    const oneMonthLater = new Date(currentDate);
    oneMonthLater.setMonth(currentDate.getMonth() + 1);

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
    // ------------------Record Workflow-------------
    const progressItems = [
        { id: 1, name: 'Opened', details: 'Document is opened at 10 Jan, 2023 11:12PM' },
        { id: 2, name: 'HOD Review', details: 'Action Item child can be created at this stage.' },
        { id: 3, name: 'Pending QA Review', details: '' },
        { id: 4, name: 'CFT/SME Review', details: '' },
        { id: 5, name: 'Pending Change Implementation', details: 'New Document child can be created at this stage.' },
        { id: 6, name: 'Closed - Done', details: '' },
    ]
    const [progressArray, setProgressArray] = useState([progressItems[0].name])
    const [signatureModal, setSignatureModal] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [keywordElements, setKeywordElements] = useState([])
    const closeSignatureModal = () => setSignatureModal(false);
    function handleESignature(key, elements) {
        setKeyword(key)
        setKeywordElements(elements)
        for (let ele of elements) {
            let updatedItemIndex = progressItems.findIndex((item) => item.name === ele);
            if (updatedItemIndex !== -1) {
                progressItems[updatedItemIndex].details = 'Updated';
            } else {
                console.error('Item with name "Opened" not found.');
            }
        }
        setSignatureModal(true)
    }
    function signatureValue(key) {
        if (key) {
            if (keyword === 'add') {
                addProgress(keywordElements)
            } else if (keyword === 'remove') {
                removeProgress(keywordElements)
            } else {
                setProgressArray('Closed-Cancelled')
            }
        } else {
            alert('E-Signature Not Matched.')
        }
    }
    function addProgress(addEle) {
        for (let ele of addEle) {
            setProgressArray((prevArray) => [...prevArray, ele])
        }
    }
    function removeProgress(removeEle) {
        setProgressArray(progressArray.filter((item) => !removeEle.includes(item)));
    }
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div id="document-panel">


                <div className="top-block">
                    <div><strong> Record Name:&nbsp;</strong>Management Review Panel</div>
                    <div><strong> Site:&nbsp;</strong>Jordan</div>
                    <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                    <div><strong> Initiated By:&nbsp;</strong>Shaleen Mishra</div>
                </div>

                <div className="inner-block">

                    <div className="workflow-bar">
                        <div className="workflow-top-block">
                            <div className="head">Record Workflow</div>
                            <div className="btn-bar">
                                <button className="themeBtn">Audit Trail</button>
                                <button className="themeBtn">Print</button>
                                {progressArray.length === 1 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[1].name])}>Submit</button>
                                        <button className="themeBtn" onClick={() => handleESignature('closed', [])}>Cancel</button>
                                    </>
                                }
                                {progressArray.length === 2 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[2].name])}>HOD Review Complete</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[1].name])}>More Information Required</button>
                                    </>
                                }
                                {progressArray.length === 3 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name])}>Send to CFT Reviewers</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name])}>More Information Required</button>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name, progressItems[4].name])}>CFT Review Not Required</button>
                                    </>
                                }
                                {progressArray.length === 4 &&
                                    <>
                                        <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[4].name])}>Review Complete</button>
                                        <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name, progressItems[3].name])}>Request More Info</button>
                                    </>
                                }
                                {progressArray.length === 5 &&
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[5].name])}>Implemented</button>
                                }
                                <button className="themeBtn">Exit</button>
                            </div>
                        </div>
                        <div className="progress-block">
                            {(progressArray === 'Closed-Cancelled') ?
                                <>
                                    <div className="active">Opened</div>
                                    <div className="active closed">Closed-Cancelled</div>
                                </>
                                : progressItems.map((item) => (
                                    <div key={item.id} className={progressArray.includes(item.name) ? 'active' : ''}>
                                        {item.name}
                                        {item.details && <div className="details">{item.details}</div>}
                                    </div>
                                ))
                            }
                        </div>
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

                                <FlexField
                                    label="Operations"
                                    instruction="(Launch Instruction)"
                                    isRequired="false"
                                    modal="Operations"
                                />
                                {modal === "Requirements for Products and Services" ? (
                                    < RequirementsforProductModal closeModal={() => { setModal(" ") }} />
                                ) : ""}

                                <FlexField
                                    label="Requirements for Products and Services"
                                    instruction=""
                                    isRequired="false"
                                    modal="Requirements for Products and Services"
                                />
                                {modal === "Design and Development of Products and Services" ? (
                                    < DesignnDevelopment closeModal={() => { setModal(" ") }} />
                                ) : ""}

                                <FlexField
                                    label="Design and Development of Products and Services"
                                    instruction=""
                                    isRequired="false"
                                />
                                {modal === "Control of Externally Provided Processes, Products and Services" ? (
                                    < ControlofExternally closeModal={() => { setModal(" ") }} />
                                ) : ""}

                                <FlexField
                                    label="Control of Externally Provided Processes, Products and Services"
                                    instruction=""
                                    isRequired="false"
                                />
                                {modal === "Production and Service Provision" ? (
                                    < ProductionnService closeModal={() => { setModal(" ") }} />
                                ) : ""}

                                <FlexField
                                    label="Production and Service Provision"
                                    instruction=""
                                    isRequired="false"
                                />

                                {modal === "Release of Products and Services" ? (
                                    < ReleaseOfProduct closeModal={() => { setModal(" ") }} />
                                ) : ""}

                                <FlexField
                                    label="Release of Products and Services"
                                    instruction=""
                                    isRequired="false"
                                />
                                {modal === "Control of Non-conforming Outputs" ? (
                                    < ControlofNonConforming closeModal={() => { setModal(" ") }} />
                                ) : ""}

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

                                <FlexField
                                    label="Risk & Opportunities"
                                    instruction=""
                                    isRequired="false"
                                />

                                <FlexField
                                    label="External Supplier Performance"
                                    instruction=""
                                    isRequired="false"
                                />


                                <FlexField
                                    label="Customer Satisfaction Level"
                                    instruction=""
                                    isRequired="false"
                                />

                                <FlexField
                                    label="Budget Estimates"
                                    instruction=""
                                    isRequired="false"
                                />

                                <FlexField
                                    label="Completion of Previous Tasks"
                                    instruction=""
                                    isRequired="false"
                                />

                                <FlexField
                                    label="Production"
                                    instruction=""
                                    isRequired="false"
                                />

                                <FlexField
                                    label="Plans"
                                    instruction=""
                                    isRequired="false"
                                />


                                <FlexField
                                    label="Forecast"
                                    instruction=""
                                    isRequired="false"
                                />

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
        </>
    )
}

export default ManagementReviewPanel
