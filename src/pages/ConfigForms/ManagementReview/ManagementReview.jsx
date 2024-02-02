import { useReducer, useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop"
import Grid from "../../../components/DataFields/Grid";
// import OperationModal from "../../../components/Modals/InstructionModal/OperationModal";
// import RequirementsforProductModal from "../../../components/Modals/InstructionModal/RequirementsforProductModal";
// import DesignnDevelopment from "../../../components/Modals/InstructionModal/DesignnDevelopment";
// import ControlofExternally from "../../../components/Modals/InstructionModal/ControlofExternally";
// import ProductionnService from "../../../components/Modals/InstructionModal/ProductionnService";
// import ReleaseOfProduct from "../../../components/Modals/InstructionModal/ReleaseOfProduct";
// import ControlofNonConforming from "../../../components/Modals/InstructionModal/ControlofNonConforming";
import InputDate from "../../../components/DataFields/InputDate";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { managementReview, site, Agenda, actionItem, attachment, performanceEvaluation, capaDetails, formList, workFlow, currentYear, } from './ManagementReviewFunction';
import { CurrentDate } from "../../../components/DateReturners";


function ManagementReview() {
    const [form, setForm] = useState(formList[0]);
    const [modal, setModal] = useState(" ");
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false)

    const [generalInformation, setGeneralInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: `${site}/MR/${currentYear}/000001`,
        site: site,
        initiator: 'Amit Guru',
        dateOfInitiation: CurrentDate(),
        assignedTo: '',
        dueDate: '',
        initiatorGroup: '',
        shortDescription: '',
        severityLevel: '',
        type: '',
        priorityLevel: '',
        scheduledStartDate: '',
        scheduledEndDate: '',
        attendess: '',
        agenda: '',
        description: '',
        managementReviewParticipants: '',
        initialAttachment: '',

    })
    const [operationalPlanning, setOperationalPlanning] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        operations: '',
        requirementsforProducts: '',
        designandDevelopment: '',
        controlofExternally: '',
        productionAndService: '',
        releaseOfProduct: '',
        controlOfNonConforming: '',
    })

    const [meetingsSummary, setMeetingsSummary] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        externalSupplierPerformance: '',
        riskOpportunities: '',
        customerSatisfactionLevel: '',
        budgetEstimates: '',
        completionofPreviousTasks: '',
        plans: '',
        production: '',
        anyAdditionalSupportRequired: '',
        forecast: '',
        initialAttachment: '',
    })

    const [closure, setClosure] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        actionItemDetails: '',
        performanceEvaluation: '',
        nextManagementReviewDate: '',
        summaryRecommendation: '',
        conclusion: '',
        initialAttachment: '',
        dueDateExtensionJustification: '',
    })

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
                            {workFlow.map((item, index) => (
                                <div className={index === 0 ? "green-state" : index === (workFlow.length - 1) ? "red-state" : ""}>
                                    {item}
                                    {index !== (workFlow.length - 1) && <img src="/down.gif" alt="..." />}
                                </div>
                            ))}
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
                        <div><strong> Record Name:&nbsp;</strong>Management Review</div>
                        <div><strong> Site:&nbsp;</strong>{site}</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>{generalInformation.initiator}</div>
                    </div>
                    <div className="document-block">
                        <div className="document-tabs">
                            <div className={form === formList[0] ? 'active' : ''} onClick={() => setForm(formList[0])}>{formList[0]}</div>
                            <div className={form === formList[1] ? 'active' : ''} onClick={() => setForm(formList[1])}>{formList[1]}</div>
                            <div className={form === formList[2] ? 'active' : ''} onClick={() => setForm(formList[2])}>{formList[2]}</div>
                            <div className={form === formList[3] ? 'active' : ''} onClick={() => setForm(formList[3])}>{formList[3]}</div>
                            <div className={form === formList[4] ? 'active' : ''} onClick={() => setForm(formList[4])}>{formList[4]}</div>

                        </div>
                        {form === formList[0] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Record Number</label>
                                            <input type="text" value={generalInformation.recordNumber} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>  Site/Location Code</label>
                                            <input type="text" value={generalInformation.site} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Initiator</label>
                                            <input type="text" value={generalInformation.initiator} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Date of Initiation</label>
                                            <input type="text" value={generalInformation.dateOfInitiation} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Assigned To</label>
                                            <div className="instruction">&nbsp;</div>
                                            <select value={generalInformation.assignedTo} onChange={(e) => setGeneralInformation({ assignedTo: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="amit_guru">Amit Guru</option>
                                                <option value="shaleen_mishra">Shaleen Mishra</option>
                                                <option value="vikas_prajapati">Vikas Prajapati</option>
                                                <option value="anshul_patel">Anshul Patel</option>
                                                <option value="amit_patel">Amit Patel</option>
                                                <option value="madhulika_mishra">Madhulika Mishra</option>
                                            </select>
                                        </div>
                                        <InputDate
                                            label="Due Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="true"
                                            enableDate="future"
                                            value={generalInformation.dueDate}
                                            returnDate={(date) => setGeneralInformation({ dueDate: date })}
                                        />
                                        <div className="group-input">
                                            <label>Initiator Group </label>
                                            <select value={generalInformation.initiatorGroup} onChange={(e) => setGeneralInformation({ initiatorGroup: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="CQA">Corporate Quality Assurance</option>
                                                <option value="QAB">Quality Assurance BioPharma</option>
                                                <option value="CQC">Central Quality Control</option>
                                                <option value="Manu.">Manufacturing</option>
                                                <option value="PSG">Plasma Sourcing Group</option>
                                                <option value="CS">Central Stores</option>
                                                <option value="ITG">Information Technology Group</option>
                                                <option value="MM">Molecular Medicine</option>
                                                <option value="CL">Central Laboratory</option>
                                                <option value="TT">Tech team</option>
                                                <option value="QA"> Quality Assurance</option>
                                                <option value="QM">Quality Management</option>
                                                <option value="IA">IT Administration</option>
                                                <option value="ACC">Accounting</option>
                                                <option value="LOG">Logistics</option>
                                                <option value="SM">Senior Management</option>
                                                <option value="BA">Business Administration</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Initiator Group Code</label>
                                            <input type="text" value={generalInformation.initiatorGroup} disabled />
                                        </div>
                                    </div>
                                    <div className='group-input'>
                                        <label><div className='required'></div>Short Description</label>
                                        <div className="instruction">Please mention brief summary</div>
                                        <textarea value={generalInformation.shortDescription} onChange={(e) => setGeneralInformation({ shortDescription: e.target.value })}></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>Severity Level</label>
                                        <select value={generalInformation.severityLevel} onChange={(e) => setGeneralInformation({ severityLevel: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="">Major</option>
                                            <option value="">Minor</option>
                                            <option value="">Critical</option>
                                        </select>
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Type</label>
                                            <select name="type" value={generalInformation.type} onChange={(e) => setGeneralInformation({ type: e.target.value })}>
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
                                            <label>Priority Level</label>
                                            <select name="priority_level" value={generalInformation.priorityLevel} onChange={(e) => setGeneralInformation({ priorityLevel: e.target.value })}>
                                                <option value="">Select Priority Level</option>
                                                <option value="High">High</option>
                                                <option value="Medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </select>
                                        </div>
                                        <InputDate
                                            label="Scheduled Start Date"
                                            enableDate="past"
                                            required="false"
                                            value={generalInformation.scheduledStartDate}
                                            returnDate={(date) => setGeneralInformation({ scheduledStartDate: date })}
                                        />
                                        <InputDate
                                            label="Scheduled End Date"
                                            enableDate="future"
                                            required="false"
                                            value={generalInformation.scheduledEndDate}
                                            returnDate={(date) => setGeneralInformation({ scheduledEndDate: date })}
                                        />
                                    </div>

                                    <div className='group-input'>
                                        <label>Attendess</label>
                                        <div className="instruction">Please mention brief summary</div>
                                        <textarea value={generalInformation.attendess} onChange={(e) => setGeneralInformation({ attendess: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={Agenda[0].label}
                                            required={Agenda[0].required}
                                            instruction={Agenda[0].instruction}
                                            columnList={Agenda[0].columnList}
                                        />
                                    </div>

                                    <div className='group-input'>
                                        <label>Description</label>
                                        <div className="instruction">Please mention brief summary</div>
                                        <textarea value={generalInformation.description} onChange={(e) => setGeneralInformation({ description: e.target.value })}></textarea>
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
                        ) : form === formList[1] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    {/* {modal === "Operations" ? (
                                        < OperationModal closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Operations<div className="instruction">(Launch Instruction)</div></label>
                                        <textarea value={operationalPlanning.operations} onChange={(e) => setOperationalPlanning({ operations: e.target.value })}></textarea>
                                    </div>
                                    {/* {modal === "Requirements for Products and Services" ? (
                                        < RequirementsforProductModal closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Requirements for Products and Services
                                            <div className="instruction">(Launch Instruction)</div>
                                        </label>
                                        <textarea value={operationalPlanning.requirementsforProducts} onChange={(e) => setOperationalPlanning({ requirementsforProducts: e.target.value })}></textarea>
                                    </div>
                                    {/* {modal === "Design and Development of Products and Services" ? (
                                        < DesignnDevelopment closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Design and Development of Products and Services
                                            <div className="instruction">(Launch Instruction)</div>
                                        </label>
                                        <textarea value={operationalPlanning.designandDevelopment} onChange={(e) => setOperationalPlanning({ designandDevelopment: e.target.value })}></textarea>
                                    </div>

                                    {/* {modal === "Control of Externally Provided Processes, Products and Services" ? (
                                        < ControlofExternally closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Control of Externally Provided Processes, Products and Services
                                            <div className="instruction">(Launch Instruction)</div>
                                        </label>
                                        <textarea value={operationalPlanning.controlofExternally} onChange={(e) => setOperationalPlanning({ controlofExternally: e.target.value })}></textarea>
                                    </div>

                                    {/* {modal === "Production and Service Provision" ? (
                                        < ProductionnService closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Production and Service Provision
                                            <div className="instruction">(Launch Instruction)</div>
                                        </label>
                                        <textarea value={operationalPlanning.productionAndService} onChange={(e) => setOperationalPlanning({ productionAndService: e.target.value })}></textarea>
                                    </div>

                                    {/* {modal === "Release of Products and Services" ? (
                                        < ReleaseOfProduct closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Release of Products and Services
                                            <div className="instruction">(Launch Instruction)</div>
                                        </label>
                                        <textarea value={operationalPlanning.releaseOfProduct} onChange={(e) => setOperationalPlanning({ releaseOfProduct: e.target.value })}></textarea>
                                    </div>

                                    {/* {modal === "Control of Non-conforming Outputs" ? (
                                        < ControlofNonConforming closeModal={() => { setModal(" ") }} />
                                    ) : ""} */}

                                    <div className='group-input'>
                                        <label>Control of Non-conforming Outputs
                                            <div className="instruction">(Launch Instruction)</div>
                                        </label>
                                        <textarea value={operationalPlanning.controlOfNonConforming} onChange={(e) => setOperationalPlanning({ controlOfNonConforming: e.target.value })}></textarea>
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
                        ) : form === formList[2] ? (
                            <div className="document-form">
                                <div className="details-form-data">

                                    <div className='group-input'>
                                        <label>Risk & Opportunities</label>
                                        <textarea value={meetingsSummary.riskOpportunities} onChange={(e) => setMeetingsSummary({ riskOpportunities: e.target.value })}></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <label>External Supplier Performance</label>
                                        <textarea value={meetingsSummary.externalSupplierPerformance} onChange={(e) => setMeetingsSummary({ externalSupplierPerformance: e.target.value })}></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <label>Customer Satisfaction Level</label>
                                        <textarea value={meetingsSummary.customerSatisfactionLevel} onChange={(e) => setMeetingsSummary({ customerSatisfactionLevel: e.target.value })}></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <label>Budget Estimates</label>
                                        <textarea value={meetingsSummary.budgetEstimates} onChange={(e) => setMeetingsSummary({ budgetEstimates: e.target.value })}></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <label>Completion of Previous Tasks</label>
                                        <textarea value={meetingsSummary.completionofPreviousTasks} onChange={(e) => setMeetingsSummary({ completionofPreviousTasks: e.target.value })}></textarea>
                                    </div>

                                    <div className='group-input'>
                                        <label>Production</label>
                                        <textarea value={meetingsSummary.production} onChange={(e) => setMeetingsSummary({ production: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <label>Plans</label>
                                        <textarea value={meetingsSummary.plans} onChange={(e) => setMeetingsSummary({ plans: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <label>Forecast</label>
                                        <textarea value={meetingsSummary.forecast} onChange={(e) => setMeetingsSummary({ plans: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <label>Any Additional Support Required</label>
                                        <textarea value={meetingsSummary.anyAdditionalSupportRequired} onChange={(e) => setMeetingsSummary({ anyAdditionalSupportRequired: e.target.value })}></textarea>
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
                        ) : form === formList[3] ? (
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
                                    <InputDate
                                        label="Next Management Review Date"
                                        enableDate="past"
                                        required="false"
                                        value={closure.nextManagementReviewDate}
                                        returnDate={(date) => setClosure({ nextManagementReviewDate: date })}
                                    />

                                    <div className='group-input'>
                                        <label>Summary & Recommendation</label>
                                        <textarea value={closure.summaryRecommendation} onChange={(e) => setClosure({ summaryRecommendation: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <label>Conclusion</label>
                                        <textarea value={closure.conclusion} onChange={(e) => setClosure({ conclusion: e.target.value })}></textarea>
                                    </div>

                                    <div className="group-input">
                                        <Grid
                                            label={attachment[0].label}
                                            required={attachment[0].required}
                                            instruction={attachment[0].instruction}
                                            columnList={attachment[0].columnList}
                                        />
                                    </div>
                                    <div className="sub-head">Extension Justification</div>

                                    <div className='group-input'>
                                        <label>Due Date Extension Justification</label>
                                        <textarea value={closure.dueDateExtensionJustification} onChange={(e) => setClosure({ dueDateExtensionJustification: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[4] ? (
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