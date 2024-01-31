import { useReducer, useState } from "react";
import "../ConfigForms.css";
import { MultiSelect } from "react-multi-select-component";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import HeaderTop from "../../../components/Header/HeaderTop";
import { currentYear, departments, formList, site, teamMembers, rootCauseMethodology, workFlow, docFile, attachment, Mitigation } from "./RiskAssessmentFunctions";
import { CurrentDate } from "../../../components/DateReturners";
import FailureModeAndEffectAnalysis from "../../../components/DataFields/FailureModeAndEffectAnalysis";
import IsIsNotAnalysis from "../../../components/DataFields/IsIsNotAnalysis";
import FishBoneIshikawaDiagram from "../../../components/DataFields/FishBoneIshikawaDiagram";
import WhyWhyChart from "../../../components/DataFields/WhyWhyChart";
import e from "cors";

function RiskAssessment() {
    const [form, setForm] = useState(formList[0]);
    const [department, setDepartment] = useState([]);
    const [teamMember, setTeamMember] = useState([]);
    const [rootCause, setRootCause] = useState([]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false)
    
    const [riskAssessment, setRiskAssessment] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: `${site}/LI/${currentYear}/000001`,
        site: site,
        initiator: 'Amit Guru',
        dateOfInitiation: CurrentDate(),
        assignedTo: '',
        dueDate: '',
        initiatorGroup: '',
        shortDescription: '',
        sourceOfRisk: '',
        type: '',
        priorityLevel: '',
        zone: '',
        country: '',
        stateDistrict: '',
        city: '',
        description: '',
        groupComments: ''
    })
    const [riskDetails, setRiskDetails] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        referenceRecords: '',
        sourceOfRisk: '',
        siteCode: '',
        building: '',
        floor: '',
        referenceRecords2: '',
        duration: '',
        hazard: '',
        room: '',
        regulatoryClimate: '',
        numberOfEmployees: '',
        riskManagementStrategy: ''
    })
    const [workGroupAssignment, setWorkGroupAssignment] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        scheduleStartDate: '',
        scheduleEndDate: '',
        estimatedManHours: '',
        estimatedCost: '',
        currency: '',
        justificationRationale: '',
        actionPlan: '',
        initialAttachments: ''
    })
    const [riskAnalysis, setRiskAnalysis] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        failureModeAndEffectAnalysis: [],
        fishboneIshikawaDiagram: {},
        whyWhyChart: {},
        isIsNotAnalysis: {},
        rootCauseDescription: '',
        investigationSummary: '',
        severityRate: '',
        occurrence: '',
        detection: ''
    })
    const [residualRisk, setResidualRisk] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        residualRisk: '',
        residualRiskImpact: '',
        residualRiskProbability: '',
        residualDetection: '',
        comments: ''
    })
    const [riskMitigation, setRiskMitigation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        mitigationPlanDetails: '',
        mitigationRequired: '',
        mitigationPlan: '',
        mitigationDueDate: '',
        statusOfMitigation: '',
        mitigationStatusComments: '',
        impact: '',
        criticality: '',
        impactAnalysis: '',
        riskAnalysis: '',
        dueDateExtensionJustification: ''
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
                        <div><strong> Record Name:&nbsp;</strong>Risk Assessment</div>
                        <div><strong> Site:&nbsp;</strong>{site}</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>{riskAssessment.initiator}</div>
                    </div>

                    <div className='document-block'>

                        <div className="document-tabs">
                            {formList.map((item, index) => (
                                <div key={index} className={form === item ? 'active' : ''} onClick={() => setForm(item)}>{item}</div>
                            ))}
                        </div>

                        {form === formList[0] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="form-flex">
                                        <div className="group-input">
                                            <label>Record Number</label>
                                            <input type="text" value={riskAssessment.recordNumber} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Site / Location Code</label>
                                            <input type="text" value={riskAssessment.site} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Initiator</label>
                                            <input type="text" value={riskAssessment.initiator} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Date of Initiation</label>
                                            <input type="text" value={riskAssessment.dateOfInitiation} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Assigned To</label>
                                            <select value={riskAssessment.assignedTo} onChange={(e) => setRiskAssessment({ assignedTo: e.target.value })}>
                                                <option value="Amit Guru">Amit Guru</option>
                                                <option value="Shaleen Mishra">Shaleen Mishra</option>
                                                <option value="Vikas Prajapati">Vikas Prajapati</option>
                                                <option value="Anshul Patel">Anshul Patel</option>
                                                <option value="Amit Patel">Amit Patel</option>
                                                <option value="Madhulika Mishra">Madhulika Mishra</option>
                                                <option value="Jin Kim">Jin Kim</option>
                                                <option value="Akash Asthana">Akash Asthana</option>
                                            </select>
                                        </div>
                                        <InputDate
                                            label="Due Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="true"
                                            enableDate="future"
                                            value={riskAssessment.dueDate}
                                            returnDate={(date) => setRiskAssessment({ dueDate: date })}
                                        />
                                        <div className="group-input">
                                            <label>Initiator Group </label>
                                            <select value={riskAssessment.initiatorGroup} onChange={(e) => setRiskAssessment({ initiatorGroup: e.target.value })}>
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
                                            <input type="text" value={riskAssessment.initiatorGroup} disabled />
                                        </div>
                                    </div>
                                    <div className='group-input'>
                                        <label>
                                            <div className="required"></div>
                                            Short Description
                                        </label>
                                        <div className='instruction'>Investigation short description to be presented on desktop</div>
                                        <textarea required value={riskAssessment.shortDescription} onChange={(e) => setRiskAssessment({ shortDescription: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Department(s)</label>
                                        <MultiSelect
                                            options={departments}
                                            value={department}
                                            onChange={setDepartment}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label>Team Members</label>
                                        <MultiSelect
                                            options={teamMembers}
                                            value={teamMember}
                                            onChange={setTeamMember}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label>Source of Risk</label>
                                        <select value={riskAssessment.sourceOfRisk} onChange={(e) => setRiskAssessment({ sourceOfRisk: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="Audit">Audit</option>
                                            <option value="Complaint">Complaint</option>
                                            <option value="Employee">Employee</option>
                                            <option value="Customer">Customer</option>
                                            <option value="Regulation">Regulation</option>
                                            <option value="Competition">Competition</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-flex">
                                        <div className="group-input">
                                            <label>Type</label>
                                            <select value={riskAssessment.type} onChange={(e) => setRiskAssessment({ type: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="Other">Other</option>
                                                <option value="BusinessRisk">Business Risk</option>
                                                <option value="customerRelated">Customer-Related Risk(Complaint)</option>
                                                <option value="Market">Market</option>
                                                <option value="OperationalRisk">Operational Risk</option>
                                                <option value="StrategicRick">Strategic Rick</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Priority Level</label>
                                            <select value={riskAssessment.priorityLevel} onChange={(e) => setRiskAssessment({ priorityLevel: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="High">High</option>
                                                <option value="medium">Medium</option>
                                                <option value="Low">Low</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Zone</label>
                                            <select value={riskAssessment.zone} onChange={(e) => setRiskAssessment({ zone: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="Asia">Asia</option>
                                                <option value="Europe">Europe</option>
                                                <option value="Africa">Africa</option>
                                                <option value="Central_America">Central America</option>
                                                <option value="South_America">South America</option>
                                                <option value="Oceania">Oceania</option>
                                                <option value="North_America">North America</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Country</label>
                                            <select value={riskAssessment.country} onChange={(e) => setRiskAssessment({ country: e.target.value })}>
                                                <option value="">Select Country</option>
                                                <option value="Afghanistan" >Afghanistan</option>
                                                <option value="Albania" >Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica" >Antarctica</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>State / District</label>
                                            <select value={riskAssessment.stateDistrict} onChange={(e) => setRiskAssessment({ stateDistrict: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>City</label>
                                            <select value={riskAssessment.city} onChange={(e) => setRiskAssessment({ city: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Description</label>
                                        <textarea value={riskAssessment.description} onChange={(e) => setRiskAssessment({ description: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Group Comments</label>
                                        <textarea value={riskAssessment.groupComments} onChange={(e) => setRiskAssessment({ groupComments: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[1] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="group-input">
                                        <RelatedRecords
                                            label="Reference Records"
                                        />
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Source of Risk</label>
                                            <select value={riskDetails.sourceOfRisk} onChange={(e) => setRiskDetails({ sourceOfRisk: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="Audit">Audit</option>
                                                <option value="Complaint">Complaint</option>
                                                <option value="Employee">Employee</option>
                                                <option value="Customer">Customer</option>
                                                <option value="Regulation">Regulation</option>
                                                <option value="Competition">Competition</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Site Code</label>
                                            <select value={riskDetails.siteCode} onChange={(e) => setRiskDetails({ siteCode: e.target.value })}>
                                                <option value="0">Select a value</option>
                                                <option value="1">Select Department</option>
                                                <option value="3">QA</option>
                                                <option value="4">QC</option>
                                                <option value="5">R&D</option>
                                                <option value="6">Manufacturing</option>
                                                <option value="7">Warehouse</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Building</label>
                                            <select value={riskDetails.building} onChange={(e) => setRiskDetails({ building: e.target.value })}>
                                                <option value="0">Select a value</option>
                                                <option value="1">A</option>
                                                <option value="3">B</option>
                                                <option value="4">C</option>
                                                <option value="5">D</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Floor</label>
                                            <select value={riskDetails.floor} onChange={(e) => setRiskDetails({ floor: e.target.value })}>
                                                <option value="NA">Select a value</option>
                                                <option value="First">First</option>
                                                <option value="Second">Second</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <RelatedRecords
                                            label="Reference Records"
                                        />
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Duration</label>
                                            <select value={riskDetails.duration} onChange={(e) => setRiskDetails({ duration: e.target.value })}>
                                                <option value="0">Enter Your Selection Here</option>
                                                <option value="1">2 Hour</option>
                                                <option value="3">4 Hour</option>
                                                <option value="4">8 Hour</option>
                                                <option value="5">16 Hour</option>
                                                <option value="6">24 Hour</option>
                                                <option value="7">36 Hour</option>
                                                <option value="8">72 Hour</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Hazard</label>
                                            <select value={riskDetails.hazard} onChange={(e) => setRiskDetails({ hazard: e.target.value })}>
                                                <option value="0">Enter Your Selection Here</option>
                                                <option value="1">Confined Space</option>
                                                <option value="3">Electrical</option>
                                                <option value="4">Energy Use</option>
                                                <option value="5">Ergonomics</option>
                                                <option value="6">Machine Guarding</option>
                                                <option value="7">Material Storage</option>
                                                <option value="8">Material Use</option>
                                                <option value="9">Pressure</option>
                                                <option value="9">Thermal</option>
                                                <option value="9">Water Use</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Room</label>
                                            <select value={riskDetails.room} onChange={(e) => setRiskDetails({ room: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="Automation">Automation</option>
                                                <option value="Biochemistry">Biochemistry</option>
                                                <option value="Blood Collection">Blood Collection</option>
                                                <option value="Enter Yo">Enter Yo</option>
                                                <option value="Buffer Preparation">Buffer Preparation</option>
                                                <option value="Bulk Fill">Bulk Fill</option>
                                                <option value="Calibration">Calibration</option>
                                                <option value="Component Manufacturing">Component Manufacturing</option>
                                                <option value="Computer">Computer</option>
                                                <option value="Computer / Automated Systems">Computer / Automated Systems</option>
                                                <option value="Dispensing Donor Suitability">Dispensing Donor Suitability</option>
                                                <option value="Filling">Filling</option>
                                                <option value="Filtration">Filtration</option>
                                                <option value="Formulation">Formulation</option>
                                                <option value="Incoming QA">Incoming QA</option>
                                                <option value="Hazard">Hazard</option>
                                                <option value="Laboratory">Laboratory</option>
                                                <option value="Laboratory Support Facility">Laboratory Support Facility</option>
                                                <option value="Enter Your">Enter Your</option>
                                                <option value="Lot Release">Lot Release</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Materials Management">Materials Management</option>
                                                <option value="Room">Room</option>
                                                <option value="Operations">Operations</option>
                                                <option value="Packaging">Packaging</option>
                                                <option value="Plant Engineering">Plant Engineering</option>
                                                <option value="NJown">NJown</option>
                                                <option value="Powder Filling">Powder Filling</option>
                                                <option value="Process Development">Process Development</option>
                                                <option value="Product Distribution">Product Distribution</option>
                                                <option value="Product Testing">Product Testing</option>
                                                <option value="Production Purification">Production Purification</option>
                                                <option value="QA">QA</option>
                                                <option value="QA Laboratory Quality Control">QA Laboratory Quality Control</option>
                                                <option value="Quality Control / Assurance">Quality Control / Assurance</option>
                                                <option value="Sanitization">Sanitization</option>
                                                <option value="Shipping/Distribution Storage/Distribution">Shipping/Distribution Storage/Distribution</option>
                                                <option value="Storage and Distribution">Storage and Distribution</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Regulatory Climate</label>
                                            <select value={riskDetails.regulatoryClimate} onChange={(e) => setRiskDetails({ regulatoryClimate: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">0. No significant regulatory issues affecting operation</option>
                                                <option value="2">1. Some regulatory or enforcement changes potentially affecting operation are anticipated</option>
                                                <option value="3">2. A few regulatory or enforcement changes affect operations</option>
                                                <option value="4">3. Regulatory and enforcement changes affect operation</option>
                                                <option value="5">4. Significant programmatic regulatory and enforcement changes affect operation</option>
                                                <option value="2">1. Some regulatory or enforcement changes potentially affecting operation are anticipated </option>
                                                <option value="3">2. A few regulatory or enforcement changes affect operations</option>
                                                <option value="4">3. Regulatory and enforcement changes affect operation</option>
                                                <option value="5">4. Significant programmatic regulatory and enforcement changes affect operation</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Number Of Employees</label>
                                            <select value={riskDetails.numberOfEmployees} onChange={(e) => setRiskDetails({ numberOfEmployees: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">0-50</option>
                                                <option value="2">5-100</option>
                                                <option value="3">100-200</option>
                                                <option value="4">200-300</option>
                                                <option value="5">300-500</option>
                                                <option value="6">500-1000</option>
                                                <option value="7">1000+</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Risk Management Strategy</label>
                                            <select value={riskDetails.riskManagementStrategy} onChange={(e) => setRiskDetails({ riskManagementStrategy: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">Accept</option>
                                                <option value="2">Avoid the Risk</option>
                                                <option value="3">Mitigate</option>
                                                <option value="4">Transfer</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[2] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sub-head">Assignment Details</div>
                                    <div className="dual-grid">
                                        <InputDate
                                            label="Scheduled Start Date"
                                            isRequired="false"
                                            enableDate="future"
                                            value={workGroupAssignment.scheduleStartDate}
                                            returnDate={(date) => setWorkGroupAssignment({ scheduleStartDate: date })}
                                        />
                                        <InputDate
                                            label="Scheduled End Date"
                                            isRequired="false"
                                            enableDate="future"
                                            value={workGroupAssignment.scheduleEndDate}
                                            returnDate={(date) => setWorkGroupAssignment({ scheduleEndDate: date })}
                                        />
                                        <div className="group-input">
                                            <label>Estimated Man-Hours</label>
                                            <input type="text" value={workGroupAssignment.estimatedManHours} onChange={(e) => setWorkGroupAssignment({ estimatedManHours: e.target.value })} />
                                        </div>
                                        <div className="group-input">
                                            <label>Estimated Cost</label>
                                            <input type="text" value={workGroupAssignment.estimatedCost} onChange={(e) => setWorkGroupAssignment({ estimatedCost: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Currency</label>
                                        <select value={workGroupAssignment.currency} onChange={(e) => setWorkGroupAssignment({ currency: e.target.value })}>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">ARS-Argentine Peso</option>
                                            <option value="2">AUD-Australian Dollar</option>
                                            <option value="3">BRL-Brazilian Real CAD-Canadian Dollar</option>
                                            <option value="4">CHF-Swiss Franc</option>
                                            <option value="5">CNY-Chinese Yuan</option>
                                            <option value="6">EUR-Euro</option>
                                            <option value="7">HKD-Hong Kong Dollar ILS-Israeli New Sheqel</option>
                                            <option value="8">INR-Indian Rupee JPY-Japanese Yen</option>
                                            <option value="9">KRW-South Korean Won</option>
                                            <option value="10">MXN-Mexican Peso</option>
                                            <option value="11">RUB-Russian Rouble</option>
                                            <option value="12">SAR-Saudi Riyal</option>
                                            <option value="13">TRY-Turkish Lira</option>
                                            <option value="14">USD-US Dollar</option>
                                            <option value="15">XAG-Silver</option>
                                            <option value="16">XAU-Gold</option>
                                            <option value="17">XPD-Palladium</option>
                                            <option value="18">XPT-Platinum</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Justification / Rationale</label>
                                        <textarea value={workGroupAssignment.justificationRationale} onChange={(e) => setWorkGroupAssignment({ justificationRationale: e.target.value })}></textarea>
                                    </div>
                                    <div className="sub-head">Action Plan</div>
                                    <div className="group-input">
                                        <Grid
                                            label={docFile[0].label}
                                            required={docFile[0].required}
                                            instruction={docFile[0].instruction}
                                            columnList={docFile[0].columnList}
                                            onChange={(data) => setWorkGroupAssignment({ actionPlan: data })}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={attachment[0].label}
                                            required={attachment[0].required}
                                            instruction={attachment[0].instruction}
                                            columnList={attachment[0].columnList}
                                            onChange={(data) => setWorkGroupAssignment({ initialAttachments: data })}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[3] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sub-head">RCA Results</div>
                                    <div className='group-input'>
                                        <label>Root Cause Methodology</label>
                                        <MultiSelect
                                            options={rootCauseMethodology}
                                            value={rootCause}
                                            onChange={setRootCause}
                                            labelledBy="Select"
                                        />
                                    </div>
                                    <FailureModeAndEffectAnalysis
                                        value={riskAnalysis.failureModeAndEffectAnalysis}
                                        onUpdate={(data) => setRiskAnalysis({ failureModeAndEffectAnalysis: data })}
                                    />
                                    <FishBoneIshikawaDiagram
                                        value={riskAnalysis.fishboneIshikawaDiagram}
                                        onUpdate={(data) => setRiskAnalysis({ fishboneIshikawaDiagram: data })}
                                    />
                                    <WhyWhyChart
                                        value={riskAnalysis.whyWhyChart}
                                        onUpdate={(data) => setRiskAnalysis({ whyWhyChart: data })}
                                    />
                                    <IsIsNotAnalysis
                                        value={riskAnalysis.isIsNotAnalysis}
                                        onIsIsNotDataChange={(data) => setRiskAnalysis({ isIsNotAnalysis: data })}
                                    />
                                    <div className="group-input">
                                        <label>Root Cause Description</label>
                                        <textarea value={riskAnalysis.rootCauseDescription} onChange={(e) => setRiskAnalysis({ rootCauseDescription: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Investigation Summary</label>
                                        <textarea value={riskAnalysis.investigationSummary} onChange={(e) => setRiskAnalysis({ investigationSummary: e.target.value })}></textarea>
                                    </div>
                                    <div className="sub-head">
                                        Risk Analysis
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Severity Rate</label>
                                            <select value={riskAnalysis.severityRate} onChange={(e) => setRiskAnalysis({ severityRate: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">Negligible</option>
                                                <option value="2">Moderate</option>
                                                <option value="3">Major</option>
                                                <option value="4">Fatal</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Occurrence</label>
                                            <select value={riskAnalysis.occurrence} onChange={(e) => setRiskAnalysis({ occurrence: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="5">Extremely Unlikely</option>
                                                <option value="4">Rare</option>
                                                <option value="3">Unlikely</option>
                                                <option value="2">Likely</option>
                                                <option value="1">Very Likely</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Detection</label>
                                            <select value={riskAnalysis.detection} onChange={(e) => setRiskAnalysis({ detection: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="5">Impossible</option>
                                                <option value="4">Rare</option>
                                                <option value="3">Unlikely</option>
                                                <option value="2">Likely</option>
                                                <option value="1">Very Likely</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>RPN</label>
                                            <div className="instruction">Auto - Calculated</div>
                                            <input type="text" value={riskAnalysis.severityRate * riskAnalysis.occurrence * riskAnalysis.detection} disabled />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[4] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="group-input">
                                        <label>Residual Risk</label>
                                        <input type="text" value={residualRisk.residualRisk} onChange={(e) => setResidualRisk({ residualRisk: e.target.value })} />
                                    </div>
                                    <div className="dual-grid">
                                        <div className="group-input">
                                            <label>Residual Risk Impact</label>
                                            <select value={residualRisk.residualRiskImpact} onChange={(e) => setResidualRisk({ residualRiskImpact: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">High</option>
                                                <option value="2">Low</option>
                                                <option value="3">Medium</option>
                                                <option value="4">None</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Residual Risk Probability</label>
                                            <select value={residualRisk.residualRiskProbability} onChange={(e) => setResidualRisk({ residualRiskProbability: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="1">High</option>
                                                <option value="2">Medium</option>
                                                <option value="3">Low</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Residual Detection</label>
                                            <select value={residualRisk.residualDetection} onChange={(e) => setResidualRisk({ residualDetection: e.target.value })}>
                                                <option value="">Enter Your Selection Here</option>
                                                <option value="Impossible">Impossible</option>
                                                <option value="Rare">Rare</option>
                                                <option value="Unlikely">Unlikely</option>
                                                <option value="Likely">Likely</option>
                                                <option value="Very Likely">Very Likely</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Residual RPN</label>
                                            <input type="text" value={residualRisk.residualRiskImpact * residualRisk.residualRiskProbability * residualRisk.residualDetection} disabled />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Comments</label>
                                        <textarea value={residualRisk.comments} onChange={(e) => setResidualRisk({ comments: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[5] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="group-input">
                                        <Grid
                                            label={Mitigation[0].label}
                                            required={Mitigation[0].required}
                                            instruction={Mitigation[0].instruction}
                                            columnList={Mitigation[0].columnList}
                                            onChange={(data) => setRiskMitigation({ mitigationPlanDetails: data })}
                                        />
                                    </div>
                                    <div className="sub-head">Risk Mitigation</div>
                                    <div className="group-input">
                                        <label>Mitigation Required</label>
                                        <select value={riskMitigation.mitigationRequired} onChange={() => setRiskMitigation({ mitigationRequired: e.target.value })}>
                                            <option value="">Enter Your Selection Here</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>
                                    <div className="group-input">
                                        <label>Mitigation Plan</label>
                                        <textarea value={riskMitigation.mitigationPlan} onChange={() => setRiskMitigation({ mitigationPlan: e.target.value })}></textarea>
                                    </div>
                                    <div className="dual-grid">
                                        <InputDate
                                            label="Mitigation Due Date"
                                            enableDate="future"
                                            isRequired="false"
                                            value={riskMitigation.mitigationDueDate}
                                            returnDate={(date) => setRiskMitigation({ mitigationDueDate: date })}
                                        />
                                        <div className="group-input">
                                            <label>Status of Mitigation</label>
                                            <select value={riskMitigation.statusOfMitigation} onChange={() => setRiskMitigation({ statusOfMitigation: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="green">Green Status</option>
                                                <option value="amber">Amber Status</option>
                                                <option value="red">Red Status</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Mitigation Status Comments</label>
                                        <textarea value={riskMitigation.mitigationStatusComments} onChange={() => setRiskMitigation({ mitigationStatusComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="sub-head">Overall Assessment</div>
                                    <div className="dual-grid">
                                        <InputDate
                                            label="Impact"
                                            enableDate="future"
                                            isRequired="false"
                                            value={riskMitigation.impact}
                                            returnDate={(date) => setRiskMitigation({ impact: date })}
                                        />
                                        <div className="group-input">
                                            <label>Critically</label>
                                            <select value={riskMitigation.criticality} onChange={() => setRiskMitigation({ criticality: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="high">High</option>
                                                <option value="medium">Medium</option>
                                                <option value="low">Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Impact Analysis</label>
                                        <textarea value={riskMitigation.impactAnalysis} onChange={() => setRiskMitigation({ impactAnalysis: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Risk Analysis</label>
                                        <div className="instruction">Please Mention justification if due date is crossed</div>
                                        <textarea value={riskMitigation.riskAnalysis} onChange={() => setRiskMitigation({ riskAnalysis: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="Reference Records"
                                    />
                                    <div className="sub-head">Extension Justification</div>
                                    <div className="group-input">
                                        <label>Due Date Extension Justification</label>
                                        <div className="instruction">Please Mention justification if due date is crossed</div>
                                        <textarea value={riskMitigation.dueDateExtensionJustification} onChange={() => setRiskMitigation({ dueDateExtensionJustification: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[6] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Submitted By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong> Submitted On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>
                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Evaluated By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong> Evaluated On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>
                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Plan Approved By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong> Plan Approved On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>
                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Risk Analysis Completed By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong> Risk Analysis Completed On:&nbsp;</strong>18 Jan, 2023 11:00 PM
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

                </div >

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

export default RiskAssessment