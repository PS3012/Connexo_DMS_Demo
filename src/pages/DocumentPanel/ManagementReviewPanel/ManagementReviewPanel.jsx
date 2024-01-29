import { useState, useReducer} from "react";
import HeaderTop from "../../../components/Header/HeaderTop"
import Grid from "../../../components/DataFields/Grid";
import OperationModal from "../../../components/Modals/InstructionModal/OperationModal";
import RequirementsforProductModal from "../../../components/Modals/InstructionModal/RequirementsforProductModal";
import DesignnDevelopment from "../../../components/Modals/InstructionModal/DesignnDevelopment";
import ControlofExternally from "../../../components/Modals/InstructionModal/ControlofExternally";
import ProductionnService from "../../../components/Modals/InstructionModal/ProductionnService";
import ReleaseOfProduct from "../../../components/Modals/InstructionModal/ReleaseOfProduct";
import ControlofNonConforming from "../../../components/Modals/InstructionModal/ControlofNonConforming";
import InputDate from "../../../components/DataFields/InputDate";
import { CurrentDate } from "../../../components/DateReturners";
import HeaderBottom from "../../../components/Header/HeaderBottom";
import { managementReview, site, Agenda, actionItem, attachment, performanceEvaluation, capaDetails,progressItems, formList, currentYear, } from './ManagementReviewPanelFunctions';

function ManagementReviewPanel() {
    const [form, setForm] = useState("General Information");
    const currentDate = new Date();

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


    const dateFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-GB', dateFormatOptions).replace(/ /g, '-');

    const oneMonthLater = new Date(currentDate);
    oneMonthLater.setMonth(currentDate.getMonth() + 1);



    // ------------------Record Workflow-------------
   
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
                <div className="button-block">
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
