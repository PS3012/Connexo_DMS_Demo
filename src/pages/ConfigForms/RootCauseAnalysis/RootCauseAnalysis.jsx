import { useReducer, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { CFTReviewer, attachmentRoot, currentYear, formList, rootCauseAttachment, rootCauseDepartments, rootCauseInvestigators, rootCauseMethodology, site, workFlow } from './RootCauseAnalysisFunctions';
import HeaderTop from '../../../components/Header/HeaderTop';
import InputDate from '../../../components/DataFields/InputDate';
import Grid from '../../../components/DataFields/Grid';
import '../ConfigForms.css'
import { CurrentDate } from '../../../components/DateReturners';
import IsIsNotAnalysis from '../../../components/DataFields/IsIsNotAnalysis';
import FishBoneIshikawaDiagram from '../../../components/DataFields/FishBoneIshikawaDiagram';
import WhyWhyChart from '../../../components/DataFields/WhyWhyChart';
import FailureModeAndEffectAnalysis from '../../../components/DataFields/FailureModeAndEffectAnalysis';

function RootCauseAnalysis() {
    const [form, setForm] = useState(formList[0]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);
    const [additionalInv, setAdditionalInv] = useState([])
    const [department, setDepartment] = useState([])
    const [rootCause, setRootCause] = useState([])
    const [cftPersons, setCftPersons] = useState([])
    
    const [generalInformation, setGeneralInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: `${site}/RCA/${currentYear}/000001`,
        site: site,
        initiator: 'Amit Guru',
        dateOfInitiation: CurrentDate(),
        assignedTo: '',
        dueDate: '',
        shortDescription: '',
        type: '',
        priorityLevel: '',
        description: '',
        comments: '',
        initialAttachments: '',
        relatedURL: ''
    })
    const [riskAnalysis, setRiskAnalysis] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        failureModeAndEffectAnalysis: [],
        fishboneIshikawaDiagram: {},
        whyWhyChart: {},
        isIsNotAnalysis: {},
        investigationSummary: '',
        zone: '',
        country: '',
        stateDistrict: '',
        city: ''
    })
    const [additionalInformation, setAdditionalInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        cftReviewRequired: '',
        groupReviewRequired: '',
        production: '',
        productionPerson: '',
        qualityApprover: '',
        qualityApproverPerson: '',
        others: '',
        othersPerson: '',
        qaEvaluationComments: '',
        qaAttachments: ''
    })
    const [groupComments, setGroupComments] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        qaEvaluationComments: '',
        cftAttachments: '',
        qaComments: '',
        qaHeadDesigneeComments: '',
        warehouseComments: '',
        engineeringComments: '',
        instrumentationComments: '',
        validationComments: '',
        othersComments: '',
        groupComments: ''
    })
    const [labInvestigationRemark, setLabInvestigationRemark] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        labInvestigatorConclusion: '',
        labInvestigatorAttachments: ''
    })
    const [qAHeadDesigneeEvalComments, setQAHeadDesigneeEvalComments] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        qCHeadEvaluationComments: '',
        InvestigationAttachments: ''
    })

    const handleSubmit = () => {
        window.location.href = '/desktop'
    }

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
                <div id='config-form-document-page'>
                    <HeaderTop />

                    <div className="top-block">
                        <div><strong> Record Name:&nbsp;</strong>Root Cause Analysis</div>
                        <div><strong> Site:&nbsp;</strong>{site}</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>{generalInformation.initiator}</div>
                    </div>

                    <div className='document-block'>

                        <div className="document-tabs">
                            {formList.map((item, index) => (
                                <div key={index} className={form === item ? 'active' : ''} onClick={() => setForm(item)}>{item}</div>
                            ))}
                        </div>

                        {form === formList[0] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label>Record Number</label>
                                            <input type="text" value={generalInformation.recordNumber} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Division Code</label>
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
                                    </div>
                                    <div className='group-input'>
                                        <label>
                                            <div className="required"></div>
                                            Short Description
                                        </label>
                                        <div className='instruction'>Investigation short description to be presented on desktop</div>
                                        <textarea required value={generalInformation.shortDescription} onChange={(e) => setGeneralInformation({ shortDescription: e.target.value })}></textarea>
                                    </div>
                                    <div className='form-flex'>
                                        <div className='group-input'>
                                            <label>Type</label>
                                            <div className="instruction">&nbsp;</div>
                                            <select value={generalInformation.type} onChange={(e) => setGeneralInformation({ type: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="1">Facilities</option>
                                                <option value="2">Other</option>
                                                <option value="3">Stability</option>
                                                <option value="4">Raw Material</option>
                                                <option value="5">Clinical Production</option>
                                                <option value="6">Commercial Production</option>
                                                <option value="7">Labelling</option>
                                                <option value="8">laboratory</option>
                                                <option value="9">Utilities</option>
                                                <option value="10">Validation</option>
                                            </select>
                                        </div>
                                        <div className='group-input'>
                                            <label>Priority Level</label>
                                            <div className='instruction'>Choose high if Immediate actions are required</div>
                                            <select value={generalInformation.priorityLevel} onChange={(e) => setGeneralInformation({ priorityLevel: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="low">Low</option>
                                                <option value="medium">Medium</option>
                                                <option value="high">High</option>
                                            </select>
                                        </div>
                                        <div className='group-input'>
                                            <label>Additional Investigators</label>
                                            <MultiSelect
                                                options={rootCauseInvestigators}
                                                value={additionalInv}
                                                onChange={setAdditionalInv}
                                                labelledBy="Select"
                                            />
                                        </div>
                                        <div className='group-input'>
                                            <label>Department(s)</label>
                                            <MultiSelect
                                                options={rootCauseDepartments}
                                                value={department}
                                                onChange={setDepartment}
                                                labelledBy="Select"
                                            />
                                        </div>
                                    </div>
                                    <div className="sub-head">
                                        Investigation details
                                    </div>
                                    <div className='group-input'>
                                        <label>Description</label>
                                        <textarea value={generalInformation.description} onChange={(e) => setGeneralInformation({ description: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <label>Comments</label>
                                        <textarea value={generalInformation.comments} onChange={(e) => setGeneralInformation({ comments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={rootCauseAttachment.label}
                                            required={rootCauseAttachment.required}
                                            instruction={rootCauseAttachment.instruction}
                                            columnList={rootCauseAttachment.columnList}
                                            onChange={(data) => setGeneralInformation({ initialAttachments: data })}
                                        />
                                    </div>
                                    <div className='group-input'>
                                        <label>Related URL</label>
                                        <input type='url' value={generalInformation.relatedURL} onChange={(e) => setGeneralInformation({ relatedURL: e.target.value })} />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[1] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
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
                                        <label>Investigation Summary</label>
                                        <textarea value={riskAnalysis.investigationSummary} onChange={(e) => setRiskAnalysis({ investigationSummary: e.target.value })}></textarea>
                                    </div>
                                    <div className='sub-head'>
                                        Geographic Information
                                    </div>
                                    <div className='form-flex'>
                                        <div className='group-input'>
                                            <label>Zone</label>
                                            <select value={riskAnalysis.zone} onChange={(e) => setRiskAnalysis({ zone: e.target.value })}>
                                                <option>-- Select --</option>
                                                <option>Asia</option>
                                                <option>Europe</option>
                                                <option>Africa</option>
                                                <option>Central America</option>
                                                <option>South America</option>
                                                <option>Oceania</option>
                                                <option>North America</option>
                                            </select>
                                        </div>
                                        <div className='group-input'>
                                            <label>Country</label>
                                            <select value={riskAnalysis.country} onChange={(e) => setRiskAnalysis({ country: e.target.value })}>
                                                <option>-- Select --</option>
                                            </select>
                                        </div>
                                        <div className='group-input'>
                                            <label>State/District</label>
                                            <select value={riskAnalysis.stateDistrict} onChange={(e) => setRiskAnalysis({ stateDistrict: e.target.value })}>
                                                <option>-- Select --</option>
                                            </select>
                                        </div>
                                        <div className='group-input'>
                                            <label>City</label>
                                            <select value={riskAnalysis.city} onChange={(e) => setRiskAnalysis({ city: e.target.value })}>
                                                <option>-- Select --</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[2] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        CFT Information
                                    </div>
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label>CFT Review Required</label>
                                            <select name="type_change" value={additionalInformation.cftReviewRequired} onChange={(e) => setAdditionalInformation({ cftReviewRequired: e.target.value })}>
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {additionalInformation.cftReviewRequired === "Yes" && <div className="required"></div>}
                                                CFT Reviewer Person
                                            </label>
                                            <MultiSelect
                                                options={CFTReviewer}
                                                value={cftPersons}
                                                onChange={setCftPersons}
                                                labelledBy="Select"
                                                required={additionalInformation.cftReviewRequired === "Yes"}
                                                disabled={additionalInformation.cftReviewRequired !== "Yes"}
                                            />
                                        </div>
                                    </div>
                                    <div className="sub-head">
                                        Concerned Information
                                    </div>
                                    <div className="group-input">
                                        <label>Is Concerned Group Review Required?</label>
                                        <select name="type_change" value={additionalInformation.groupReviewRequired} onChange={(e) => setAdditionalInformation({ groupReviewRequired: e.target.value })}>
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </div>
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label>Production</label>
                                            <select
                                                name="type_change"
                                                value={additionalInformation.production}
                                                disabled={additionalInformation.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setAdditionalInformation({ production: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {additionalInformation.production === 'Yes' && <div className="required"></div>}
                                                Production Person
                                            </label>
                                            <select
                                                name="Production_Person"
                                                value={additionalInformation.productionPerson}
                                                disabled={additionalInformation.production !== 'Yes' || additionalInformation.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setAdditionalInformation({ productionPerson: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="1">Amit Guru</option>
                                                <option value="2">Shaleen Mishra</option>
                                                <option value="3">Vikas Prajapati</option>
                                                <option value="4">Anshul Patel</option>
                                                <option value="5">Amit Patel</option>
                                                <option value="6">Madhulika Mishra</option>
                                                <option value="7">Jin Kim</option>
                                                <option value="8">Akash Asthana</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Quality Approver</label>
                                            <select
                                                name="Quality_Approver"
                                                value={additionalInformation.qualityApprover}
                                                disabled={additionalInformation.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setAdditionalInformation({ qualityApprover: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {additionalInformation.qualityApprover === 'Yes' && <div className="required"></div>}
                                                Quality Approver Person
                                            </label>
                                            <select
                                                name="Quality_Approver_Person"
                                                value={additionalInformation.qualityApproverPerson}
                                                disabled={additionalInformation.qualityApprover !== 'Yes' || additionalInformation.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setAdditionalInformation({ qualityApproverPerson: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="1">Amit Guru</option>
                                                <option value="2">Shaleen Mishra</option>
                                                <option value="3">Vikas Prajapati</option>
                                                <option value="4">Anshul Patel</option>
                                                <option value="5">Amit Patel</option>
                                                <option value="6">Madhulika Mishra</option>
                                                <option value="7">Jin Kim</option>
                                                <option value="8">Akash Asthana</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                Others
                                            </label>
                                            <select
                                                name="type_change"
                                                value={additionalInformation.others}
                                                disabled={additionalInformation.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setAdditionalInformation({ others: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>
                                                {additionalInformation.others === 'Yes' && <div className="required"></div>}
                                                Others Person
                                            </label>
                                            <select
                                                name="Production_Person"
                                                value={additionalInformation.othersPerson}
                                                disabled={additionalInformation.others !== 'Yes' || additionalInformation.groupReviewRequired !== 'Yes'}
                                                onChange={(e) => setAdditionalInformation({ othersPerson: e.target.value })}
                                            >
                                                <option value="0">-- Select --</option>
                                                <option value="1">Amit Guru</option>
                                                <option value="2">Shaleen Mishra</option>
                                                <option value="3">Vikas Prajapati</option>
                                                <option value="4">Anshul Patel</option>
                                                <option value="5">Amit Patel</option>
                                                <option value="6">Madhulika Mishra</option>
                                                <option value="7">Jin Kim</option>
                                                <option value="8">Akash Asthana</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>QA Evaluation Comments</label>
                                        <textarea value={additionalInformation.qAEvaluationComments} onChange={(e) => setAdditionalInformation({ qAEvaluationComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={attachmentRoot[0].label}
                                            required={attachmentRoot[0].required}
                                            instruction={attachmentRoot[0].instruction}
                                            columnList={attachmentRoot[0].columnList}
                                            onChange={(data) => setAdditionalInformation({ qaAttachments: data })}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[3] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        CFT Feedback
                                    </div>
                                    <div className="group-input">
                                        <label>QA Evaluation Comments</label>
                                        <textarea value={groupComments.qaEvaluationComments} onChange={(e) => setGroupComments({ qaEvaluationComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={attachmentRoot[1].label}
                                            required={attachmentRoot[1].required}
                                            instruction={attachmentRoot[1].instruction}
                                            columnList={attachmentRoot[1].columnList}
                                            onChange={(data) => setGroupComments({ cftAttachments: data })}
                                        />
                                    </div>
                                    <div className="sub-head">
                                        Concerned Group Feedback
                                    </div>
                                    <div className="group-input">
                                        <label>QA Comments</label>
                                        <textarea value={groupComments.qaComments} onChange={(e) => setGroupComments({ qaComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>QA Head Designee Comments</label>
                                        <textarea value={groupComments.qaHeadDesigneeComments} onChange={(e) => setGroupComments({ qaHeadDesigneeComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Warehouse Comments</label>
                                        <textarea value={groupComments.warehouseComments} onChange={(e) => setGroupComments({ warehouseComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Engineering Comments</label>
                                        <textarea value={groupComments.engineeringComments} onChange={(e) => setGroupComments({ engineeringComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Instrumentation Comments</label>
                                        <textarea value={groupComments.instrumentationComments} onChange={(e) => setGroupComments({ instrumentationComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Validation Comments</label>
                                        <textarea value={groupComments.validationComments} onChange={(e) => setGroupComments({ validationComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Others Comments</label>
                                        <textarea value={groupComments.othersComments} onChange={(e) => setGroupComments({ othersComments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>Group Comments</label>
                                        <textarea value={groupComments.groupComments} onChange={(e) => setGroupComments({ groupComments: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[4] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='group-input'>
                                        <label>Lab Investigator Conclusion</label>
                                        <textarea value={labInvestigationRemark.labInvestigatorConclusion} onChange={(e) => setLabInvestigationRemark({ labInvestigatorConclusion: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <Grid
                                            label={attachmentRoot[2].label}
                                            required={attachmentRoot[2].required}
                                            instruction={attachmentRoot[2].instruction}
                                            columnList={attachmentRoot[2].columnList}
                                            onChange={(data) => setLabInvestigationRemark({ labInvestigatorAttachments: data })}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[5] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className='group-input'>
                                        <label>QC Head Evaluation Comments</label>
                                        <textarea value={qAHeadDesigneeEvalComments.qCHeadEvaluationComments} onChange={(e) => setQAHeadDesigneeEvalComments({ qCHeadEvaluationComments: e.target.value })}></textarea>
                                    </div>
                                    <div className='group-input'>
                                        <Grid
                                            label={attachmentRoot[3].label}
                                            required={attachmentRoot[3].required}
                                            instruction={attachmentRoot[3].instruction}
                                            columnList={attachmentRoot[3].columnList}
                                            onChange={(data) => setQAHeadDesigneeEvalComments({ InvestigationAttachments: data })}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[6] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
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
                                            <strong> Report Result By:&nbsp;</strong>Amit Patel
                                        </div>
                                        <div>
                                            <strong>Report Result On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Evaluation Complete By:&nbsp;</strong> Amit Guru
                                        </div>
                                        <div>
                                            <strong>Evaluation Complete On:&nbsp;</strong>18 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                            : ''}
                    </div>
                    <div className="button-block" style={asideWorkFlow || asideFamilyTree ? { 'width': 'calc(100% - 300px)' } : { 'width': '100%' }}>
                        <button className='themeBtn' onClick={handleSubmit}>Save</button>
                        <button className='themeBtn'>Back</button>
                        <button className='themeBtn'>Next</button>
                        <button className='themeBtn'>Exit</button>
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

export default RootCauseAnalysis;       
