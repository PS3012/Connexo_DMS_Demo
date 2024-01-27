import { useEffect, useReducer, useState } from "react";
import '../ConfigForms.css'
import HeaderTop from "../../../components/Header/HeaderTop";
import { MultiSelect } from "react-multi-select-component";
import Grid from "../../../components/DataFields/Grid";
import { CurrentDate, convertDateFormat } from "../../../components/DateReturners";
import InputDate from "../../../components/DataFields/InputDate";
import FlexField from "../../../components/DataFields/FlexField";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import { formList, site, NotifyTo, currentYear, interpretationOfResult, criticalSteps, referenceProcedures, approvers, responsibilities, reviewers, testData, Survey, docFormFile, docDetails, PersonPrintPermission, PersonDownloadPermission, workFlow } from "./DocumentFormFunction";

function DocumentForm() {
    const [form, setForm] = useState(formList[0]);
    const [effectiveDateProper, setEffectiveProper] = useState('')
    const [notifySelected, setSelectedNotify] = useState([]);
    const [selected, setSelected] = useState([]);
    const [selectedPersonDownload, setSelectedPersonDownload] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState([]);
    const [selectedOther, setSelectedOther] = useState([]);
    const [selectedwetChemistry, setSelectedwetChemistry] = useState([]);
    const [selectedGoodLaboratory, setSelectedGoodLaboratory] = useState([]);
    const [selectedMicrobiologySop, setSelectedMicrobiologySop] = useState([]);
    const [selectedInstrumentChemistry, setSelectedInstrumentChemistry] = useState([]);
    const [selectedsetInstrumentSop, setSelectedsetInstrumentSop] = useState([]);
    const [selectedResponsibilities, setSelectedResponsibilities] = useState([]);
    const [reviewersSelected, setReviewSelected] = useState([]);
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);

    const [newDocument, setNewDocument] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        recordNumber: `${site}/SOP/${currentYear}/000001`,
        site: site,
        initiator: 'Amit Guru',
        sopType: '',
        departmentName: '',
        documentType: '',
        documentSubType: '',
        language: '',
        trainingRequired: '',
        effectiveDate: '',
        reviewPeriod: '',
        nextReviewDate: '',
        shortDescription: '',
        severityLevel: '',
        dueDate: '',
        notifyTo: '',
        description: '',
        attachDraftDocument: '',
        attachEffectiveDocument: '',
        reviewers: '',
        approvers: '',
        revisionSummary: '',

    })
    const [chemistrySop, setChemistrySop] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsChemical: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        referenceProceduresForms: '',
        interpretationofResult: '',
        changeControl: '',
        fileAttachment: '',
    })
    const [instrumentSop, setInstrumentSop] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsRequired: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        operations: '',
        authorizationMatrix: '',
        references: '',
        changeControl: '',
        fileAttachment: '',
    })
    const [instrumentChemistrySop, setInstrumentChemistrySop] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsChemical: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        operations: '',
        authorizationMatrix: '',
        references: '',
        changeControl: '',
        fileAttachment: '',
        calculation: '',
        softwareProcessingSteps: '',
    })
    const [microbiologySop, setMicrobiologySop] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsChemical: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        authorizationMatrix: '',
        references: '',
        changeControl: '',
        fileAttachment: '',

    })
    const [goodLaboratory, setGoodLaboratory] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsChemical: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        authorizationMatrix: '',
        references: '',
        changeControl: '',
        fileAttachment: '',

    })
    const [wetChemistry, setWetChemistry] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsChemical: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        authorizationMatrix: '',
        references: '',
        changeControl: '',
        fileAttachment: '',

    })
    const [other, setOther] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        responsibilities: '',
        purpose: '',
        scopeField: '',
        materialsChemical: '',
        equipmentInstruments: '',
        safetyPrecautions: '',
        procedure: '',
        authorizationMatrix: '',
        references: '',
        changeControl: '',
        fileAttachment: '',

    })
    const [trainingInformation, setTrainingInformation] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        trainingRequired: '',

    })
    const [printDownloadControl, setPrintDownloadControl] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        personPrintPermission: '',

    })

    function returnEffectiveDate(date) {
        setEffectiveProper(date)
    }
    useEffect(() => {
        if (effectiveDateProper && newDocument.reviewPeriod !== null) {
            const year = parseInt(effectiveDateProper.substring(0, 4), 10);
            const newYear = year + Number(newDocument.reviewPeriod);
            const effectiveDateObject = new Date(effectiveDateProper);
            const updatedDate = new Date(newYear, effectiveDateObject.getMonth(), effectiveDateObject.getDate() + 1);
            setNewDocument({ nextReviewDate: convertDateFormat(updatedDate.toISOString().slice(0, 10)) });
        }
    }, [effectiveDateProper, newDocument.reviewPeriod]);

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
                        <div><strong> Record Name:&nbsp;</strong>Document</div>
                        <div><strong> Site:&nbsp;</strong>{site}</div>
                        <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
                        <div><strong> Initiated By:&nbsp;</strong>{newDocument.initiator}</div>
                    </div>

                    <div className='document-block'>

                        <div className="document-tabs">
                            <div className={form === formList[0] ? 'active' : ''} onClick={() => setForm(formList[0])}>{formList[0]}</div>
                            {newDocument.sopType === "chemistry_sop" &&
                                <div className={form === formList[1] ? 'active' : ''} onClick={() => setForm(formList[1])}>{formList[1]}</div>
                            }
                            {newDocument.sopType === "instrument_sop" &&
                                <div className={form === formList[2] ? 'active' : ''} onClick={() => setForm(formList[2])}>{formList[2]}</div>
                            }
                            {newDocument.sopType === "instrumental_chemistry_sop" &&
                                <div className={form === formList[3] ? 'active' : ''} onClick={() => setForm(formList[3])}>{formList[3]}</div>
                            }
                            {newDocument.sopType === "microbiology_sop" &&
                                <div className={form === formList[4] ? 'active' : ''} onClick={() => setForm(formList[4])}>{formList[4]}</div>
                            }
                            {newDocument.sopType === "good_laboratory_practices" &&
                                <div className={form === formList[5] ? 'active' : ''} onClick={() => setForm(formList[5])}>{formList[5]}</div>
                            }
                            {newDocument.sopType === "wet_chemistry" &&
                                <div className={form === formList[6] ? 'active' : ''} onClick={() => setForm(formList[6])}>{formList[6]}</div>
                            }
                            {newDocument.sopType === "others" &&
                                <div className={form === formList[7] ? 'active' : ''} onClick={() => setForm(formList[7])}>{formList[7]}</div>
                            }
                            <div className={form === formList[8] ? 'active' : ''} onClick={() => setForm(formList[8])}>{formList[8]}</div>
                            <div className={form === formList[9] ? 'active' : ''} onClick={() => setForm(formList[9])}>{formList[9]}</div>
                            <div className={form === formList[10] ? 'active' : ''} onClick={() => setForm(formList[10])}>{formList[10]}</div>
                            <div className={form === formList[11] ? 'active' : ''} onClick={() => setForm(formList[11])}>{formList[11]}</div>
                        </div>


                        {form === formList[0] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="form-flex">
                                        <div className="group-input">
                                            <label>Record Number</label>
                                            <div className="instruction">Document Number</div>
                                            <input type="text" value={newDocument.recordNumber} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Site/Location Code</label>
                                            <div className="instruction">&nbsp;</div>
                                            <input type="text" value={newDocument.site} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Initiator</label>
                                            <input type="text" value={newDocument.initiator} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label>Date of Initiation</label>
                                            <input type="" value={CurrentDate()} disabled />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Short Description</label>
                                        <textarea type="text" rows="2" value={newDocument.shortDescription} onChange={(e) => setNewDocument({ shortDescription: e.target.value })}></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>Severity Level</label>
                                        <select value={newDocument.severityLevel} onChange={(e) => setNewDocument({ severityLevel: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="">Major</option>
                                            <option value="">Minor</option>
                                            <option value="">Critical</option>
                                        </select>
                                    </div>
                                    <div className='form-flex'>
                                        <InputDate
                                            label="Due Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="false"
                                            enableDate="future"
                                            value={newDocument.dueDate}
                                            returnDate={(date) => setNewDocument({ dueDate: date })}
                                        />
                                        <div className="group-input">
                                            <label>{newDocument.auditTeam === "Yes" && ''}Notify To</label>
                                            <MultiSelect
                                                options={NotifyTo}
                                                value={notifySelected}
                                                onChange={setSelectedNotify}
                                                labelledBy="notifySelected"
                                                required={newDocument.notifyTo === "Yes"}
                                                disabled={!newDocument.notifyTo === "Yes"}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label>Description</label>
                                        <textarea type="text" rows="2" value={newDocument.description} onChange={(e) => setNewDocument({ description: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>SOP Type</label>
                                        <select value={newDocument.sopType} onChange={(e) => setNewDocument({ sopType: e.target.value })}>
                                            <option value="">-- Select --</option>
                                            <option value="chemistry_sop">Chemistry SOP</option>
                                            <option value="instrument_sop">Instrument SOP</option>
                                            <option value="instrumental_chemistry_sop">Instrumental Chemistry SOP</option>
                                            <option value="microbiology_sop">Microbiology SOP</option>
                                            <option value="good_laboratory_practices">Good Laboratory Practices</option>
                                            <option value="wet_chemistry">Wet Chemistry</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    <div className="sub-head">
                                        Document Information
                                    </div>
                                    <div className='form-flex'>
                                        <div className="group-input">
                                            <label><div className="required"></div>Department Name</label>
                                            <select value={newDocument.departmentName} onChange={(e) => setNewDocument({ departmentName: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="QA">Quality Assurance </option>
                                                <option value="QC">Quality Control</option>
                                                <option value="Prod">Production</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Department Code</label>
                                            <input type="text" value={newDocument.departmentName} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label><div className="required"></div>Document Type</label>
                                            <select value={newDocument.documentType} onChange={(e) => setNewDocument({ documentType: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="STP">Standard Test Procedure </option>
                                                <option value="SOP">Standard Operating Procedure</option>
                                                <option value="WI">Work Instruction</option>
                                                <option value="Spec">Specification </option>
                                                <option value="VP">Validation Protocol</option>
                                                <option value="PFD">Process Flow Diagram</option>
                                                <option value="QP">Qualification Protocol</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Document Type Code</label>
                                            <input type="text" value={newDocument.documentType} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label><div className="required"></div>Document Sub Type Code</label>
                                            <select value={newDocument.documentSubType} onChange={(e) => setNewDocument({ documentSubType: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="STP">Standard Test Procedure </option>
                                                <option value="SOP">Standard Operating Procedure</option>
                                                <option value="WI">Work Instruction</option>
                                                <option value="Spec">Specification </option>
                                                <option value="VP">Validation Protocol</option>
                                                <option value="PFD">Process Flow Diagram</option>
                                                <option value="QP">Qualification Protocol</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Document Sub Type Code</label>
                                            <input type="text" value={newDocument.documentSubType} disabled />
                                        </div>
                                        <div className="group-input">
                                            <label><div className="required"></div>Department Language</label>
                                            <select value={newDocument.language} onChange={(e) => setNewDocument({ language: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="EN">English</option>
                                                <option value="KN">Korean</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Document Language Code</label>
                                            <input type="text" value={newDocument.language} disabled />
                                        </div>
                                    </div>
                                    <div className='form-flex-three'>
                                        <div className="group-input">
                                            <InputDate
                                                label="Effective Date"
                                                instruction="Please mention expected date of completion."
                                                isRequired="false"
                                                enableDate="future"
                                                value={newDocument.effectiveDate}
                                                returnDate={(date) => setNewDocument({ dueDate: date })}
                                            />
                                        </div>
                                        <div className="group-input">
                                            <label>Review Period</label>
                                            <div className="instruction">&nbsp;</div>
                                            <input type="number" value={newDocument.reviewPeriod} onChange={(e) => setNewDocument({ reviewPeriod: e.target.value })} />
                                        </div>
                                        <div className="group-input">
                                            <label>Next Review Date</label>
                                            <div className="instruction">&nbsp;</div>
                                            <input type="text" value={newDocument.nextReviewDate} placeholder="DD-MMM-YYYY" disabled />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <div className="group-input">
                                            <Grid
                                                label={docFormFile[0].label}
                                                required={docFormFile[0].required}
                                                instruction={docFormFile[0].instruction}
                                                columnList={docFormFile[0].columnList}
                                            />
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <div className="group-input">
                                            <Grid
                                                label={docFormFile[1].label}
                                                required={docFormFile[1].required}
                                                instruction={docFormFile[1].instruction}
                                                columnList={docFormFile[1].columnList}
                                            />
                                        </div>
                                    </div>
                                    <div className="sub-head">
                                        Other Information
                                    </div>
                                    <div className="form-flex">
                                        <div className="group-input">
                                            <label>{newDocument.reviewers === "Yes" && ''}<div className="required"></div>Reviewers</label>
                                            <div className="instruction">Even multiple reviewers can be added!</div>
                                            <MultiSelect
                                                options={reviewers}
                                                value={reviewersSelected}
                                                onChange={setReviewSelected}
                                                labelledBy="Select"
                                                required={newDocument.reviewers === "Yes"}
                                                disabled={!newDocument.reviewers === "Yes"}
                                            />
                                        </div>
                                        <div className="group-input">
                                            <label>{newDocument.approvers === "Yes" && ''}<div className="required"></div>Approvers</label>
                                            <div className="instruction">Even multiple approvers can be added!</div>
                                            <MultiSelect
                                                options={approvers}
                                                value={selected}
                                                onChange={setSelected}
                                                labelledBy="Select"
                                                required={newDocument.approvers === "Yes"}
                                                disabled={!newDocument.approvers === "Yes"}
                                            />
                                        </div>
                                    </div>
                                    <FlexField
                                        label="Revision Summary"
                                    />
                                </div>
                            </div>
                        ) : form === formList[1] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="sub-head-2">Chemistry SOP</div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for</div>
                                        <textarea type="text" rows="2" value={chemistrySop.purpose} onChange={(e) => setChemistrySop({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <div className="instruction">All test samples received at the laboratory plant and required</div>
                                        <textarea type="text" rows="2" value={chemistrySop.scopeField} onChange={(e) => setChemistrySop({ scopeField: e.target.value })}></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>{chemistrySop.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedResponsibilities}
                                            onChange={setSelectedResponsibilities}
                                            labelledBy="selectedResponsibilities"
                                            required={newDocument.responsibilities === "Yes"}
                                            disabled={!newDocument.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials/Chemical Required</label>
                                        <textarea type="text" rows="2" value={chemistrySop.materialsChemical} onChange={(e) => setChemistrySop({ materialsChemical: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Equipment/Instruments Used</label>
                                        <textarea type="text" rows="2" value={chemistrySop.equipmentInstruments} onChange={(e) => setChemistrySop({ equipmentInstruments: e.target.value })}></textarea>                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Safety Precautions</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={chemistrySop.safetyPrecautions} onChange={(e) => setChemistrySop({ safetyPrecautions: e.target.value })}></textarea>                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Procedure</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={chemistrySop.procedure} onChange={(e) => setChemistrySop({ procedure: e.target.value })}></textarea>                                    </div>
                                    <Grid
                                        label={interpretationOfResult.label}
                                        coloredLabel={interpretationOfResult.coloredLabel}
                                        required={interpretationOfResult.required}
                                        instruction={interpretationOfResult.instruction}
                                        columnList={interpretationOfResult.columnList}
                                    />
                                    <Grid
                                        label={referenceProcedures.label}
                                        coloredLabel={referenceProcedures.coloredLabel}
                                        required={referenceProcedures.required}
                                        instruction={referenceProcedures.instruction}
                                        columnList={referenceProcedures.columnList}
                                    />
                                    <div className="group-input">
                                        <label className="color-label">10.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={chemistrySop.references} onChange={(e) => setChemistrySop({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="11.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[2] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="sub-head-2">Instrument SOP</div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for handling, operating, calibration and maintaining of instrumentation</div>
                                        <textarea type="text" rows="2" value={instrumentSop.purpose} onChange={(e) => setInstrumentSop({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <textarea type="text" rows="2" value={instrumentSop.scopeField} onChange={(e) => setInstrumentSop({ scopeField: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>{instrumentSop.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedsetInstrumentSop}
                                            onChange={setSelectedsetInstrumentSop}
                                            labelledBy="selectedsetInstrumentSop"
                                            required={instrumentSop.responsibilities === "Yes"}
                                            disabled={!instrumentSop.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials Required</label>
                                        <textarea type="text" rows="2" value={instrumentSop.materialsRequired} onChange={(e) => setInstrumentSop({ materialsRequired: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Procedure</label>
                                        <textarea type="text" rows="2" value={instrumentSop.procedure} onChange={(e) => setInstrumentSop({ procedure: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Operations</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentSop.operations} onChange={(e) => setInstrumentSop({ operations: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Authorization Matrix</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentSop.authorizationMatrix} onChange={(e) => setInstrumentSop({ authorizationMatrix: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">8.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentSop.references} onChange={(e) => setInstrumentSop({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="9.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[3] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="sub-head-2">Instrumental Chemistry SOP</div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for</div>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.purpose} onChange={(e) => setInstrumentChemistrySop({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <div className="instruction">All test samples received at the laboratory plant and required</div>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.scopeField} onChange={(e) => setInstrumentChemistrySop({ scopeField: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>{instrumentChemistrySop.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedInstrumentChemistry}
                                            onChange={setSelectedInstrumentChemistry}
                                            labelledBy="selectedInstrumentChemistry"
                                            required={instrumentChemistrySop.responsibilities === "Yes"}
                                            disabled={!instrumentChemistrySop.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials/Chemical Required</label>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.materialsChemical} onChange={(e) => setInstrumentChemistrySop({ materialsChemical: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Equipment/Instruments Used</label>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.equipmentInstruments} onChange={(e) => setInstrumentChemistrySop({ equipmentInstruments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Safety Precautions</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.safetyPrecautions} onChange={(e) => setInstrumentChemistrySop({ safetyPrecautions: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Procedure</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.procedure} onChange={(e) => setInstrumentChemistrySop({ procedure: e.target.value })}></textarea>
                                    </div>
                                    <Grid
                                        label={criticalSteps.label}
                                        coloredLabel={criticalSteps.coloredLabel}
                                        required={criticalSteps.required}
                                        instruction={criticalSteps.instruction}
                                        columnList={criticalSteps.columnList}
                                    />
                                    <div className="group-input">
                                        <label className="color-label">9.0 Software Processing Steps</label>
                                        <div className="instruction"></div>
                                        <textarea value={instrumentChemistrySop.softwareProcessingSteps} onChange={(e) => setInstrumentChemistrySop({ softwareProcessingSteps: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">10.0 Calculation</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.calculation} onChange={(e) => setInstrumentChemistrySop({ calculation: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">11.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={instrumentChemistrySop.references} onChange={(e) => setInstrumentChemistrySop({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="12.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[4] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="sub-head-2">Microbiology SOP</div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for</div>
                                        <textarea type="text" rows="2" value={microbiologySop.purpose} onChange={(e) => setMicrobiologySop({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <div className="instruction">All test samples received at the laboratory plant and required</div>
                                        <textarea type="text" rows="2" value={microbiologySop.scopeField} onChange={(e) => setMicrobiologySop({ scopeField: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>{microbiologySop.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedMicrobiologySop}
                                            onChange={setSelectedMicrobiologySop}
                                            labelledBy="selectedMicrobiologySop"
                                            required={microbiologySop.responsibilities === "Yes"}
                                            disabled={!microbiologySop.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials/Chemical Required</label>
                                        <textarea type="text" rows="2" value={microbiologySop.materialsChemical} onChange={(e) => setMicrobiologySop({ materialsChemical: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Equipment/Instruments Used</label>
                                        <textarea type="text" rows="2" value={microbiologySop.equipmentInstruments} onChange={(e) => setMicrobiologySop({ equipmentInstruments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Safety Precautions</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={microbiologySop.safetyPrecautions} onChange={(e) => setMicrobiologySop({ safetyPrecautions: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Procedure</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={microbiologySop.procedure} onChange={(e) => setMicrobiologySop({ procedure: e.target.value })}></textarea>
                                    </div>
                                    <Grid
                                        label={interpretationOfResult.label}
                                        coloredLabel={interpretationOfResult.coloredLabel}
                                        required={interpretationOfResult.required}
                                        instruction={interpretationOfResult.instruction}
                                        columnList={interpretationOfResult.columnList}
                                    />
                                    <div className="group-input">
                                        <label className="color-label">9.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={microbiologySop.references} onChange={(e) => setMicrobiologySop({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="10.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[5] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="sub-head-2">Good Laboratory Practices</div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for</div>
                                        <textarea type="text" rows="2" value={goodLaboratory.purpose} onChange={(e) => setGoodLaboratory({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <div className="instruction">All test samples received at the laboratory plant and required</div>
                                        <textarea type="text" rows="2" value={goodLaboratory.scopeField} onChange={(e) => setGoodLaboratory({ scopeField: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>{microbiologySop.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedGoodLaboratory}
                                            onChange={setSelectedGoodLaboratory}
                                            labelledBy="selectedGoodLaboratory"
                                            required={microbiologySop.responsibilities === "Yes"}
                                            disabled={!microbiologySop.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials/Chemical Required</label>
                                        <textarea type="text" rows="2" value={goodLaboratory.materialsChemical} onChange={(e) => setGoodLaboratory({ materialsChemical: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Equipment/Instruments Used</label>
                                        <textarea type="text" rows="2" value={goodLaboratory.equipmentInstruments} onChange={(e) => setGoodLaboratory({ equipmentInstruments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Safety Precautions</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={goodLaboratory.safetyPrecautions} onChange={(e) => setGoodLaboratory({ safetyPrecautions: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Procedure</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={goodLaboratory.procedure} onChange={(e) => setGoodLaboratory({ procedure: e.target.value })}></textarea>
                                    </div>
                                    <Grid
                                        label={interpretationOfResult.label}
                                        coloredLabel={interpretationOfResult.coloredLabel}
                                        required={interpretationOfResult.required}
                                        instruction={interpretationOfResult.instruction}
                                        columnList={interpretationOfResult.columnList}
                                    />
                                    <div className="group-input">
                                        <label className="color-label">9.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={goodLaboratory.references} onChange={(e) => setGoodLaboratory({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="10.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[6] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for</div>
                                        <textarea type="text" rows="2" value={wetChemistry.purpose} onChange={(e) => setWetChemistry({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <div className="instruction">All test samples received at the laboratory plant and required</div>
                                        <textarea type="text" rows="2" value={wetChemistry.scopeField} onChange={(e) => setWetChemistry({ scopeField: e.target.value })}></textarea>
                                    </div>

                                    <div className="group-input">
                                        <label>{wetChemistry.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedwetChemistry}
                                            onChange={setSelectedwetChemistry}
                                            labelledBy="selectedwetChemistry"
                                            required={wetChemistry.responsibilities === "Yes"}
                                            disabled={!wetChemistry.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials/Chemical Required</label>
                                        <textarea type="text" rows="2" value={wetChemistry.materialsChemical} onChange={(e) => setWetChemistry({ materialsChemical: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Equipment/Instruments Used</label>
                                        <textarea type="text" rows="2" value={wetChemistry.equipmentInstruments} onChange={(e) => setWetChemistry({ equipmentInstruments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Safety Precautions</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={wetChemistry.safetyPrecautions} onChange={(e) => setWetChemistry({ safetyPrecautions: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Procedure</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={wetChemistry.procedure} onChange={(e) => setWetChemistry({ procedure: e.target.value })}></textarea>
                                    </div>
                                    <Grid
                                        label={criticalSteps.label}
                                        coloredLabel={criticalSteps.coloredLabel}
                                        required={criticalSteps.required}
                                        instruction={criticalSteps.instruction}
                                        columnList={criticalSteps.columnList}
                                    />
                                    <div className="group-input">
                                        <label className="color-label">9.0 Software Processing Steps</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={wetChemistry.softwareProcessingSteps} onChange={(e) => setWetChemistry({ softwareProcessingSteps: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">10.0 Calculation</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={wetChemistry.calculation} onChange={(e) => setWetChemistry({ calculation: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">11.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={wetChemistry.references} onChange={(e) => setWetChemistry({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="12.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[7] ? (
                            <div className="document-form">
                                <div className="details-form-data">
                                    <div className="sop-type-header">
                                        <div className="logo">
                                            <img src="/customer.png" alt="..." />
                                        </div>
                                        <div className="main-head">
                                            <div>Standard Operating Procedure</div>
                                            <div>Environmental Laboratory</div>
                                        </div>
                                    </div>
                                    <div className="sub-head-2">Wet Chemistry</div>
                                    <div className="group-input">
                                        <label className="color-label">1.0 Purpose</label>
                                        <div className="instruction">To establish a plan for</div>
                                        <textarea type="text" rows="2" value={other.purpose} onChange={(e) => setOther({ purpose: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">2.0 Scope/Field of Application</label>
                                        <div className="instruction">All test samples received at the laboratory plant and required</div>
                                        <textarea type="text" rows="2" value={other.scopeField} onChange={(e) => setOther({ scopeField: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label>{microbiologySop.responsibilities === "Yes" && ''}<div className="required"></div>3.0 Responsibilities</label>
                                        <div className="instruction">The performance of the tests should be done by</div>
                                        <MultiSelect
                                            options={responsibilities}
                                            value={selectedOther}
                                            onChange={setSelectedOther}
                                            labelledBy="selectedOther"
                                            required={other.responsibilities === "Yes"}
                                            disabled={!other.responsibilities === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">4.0 Materials/Chemical Required</label>
                                        <textarea type="text" rows="2" value={other.materialsChemical} onChange={(e) => setOther({ materialsChemical: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">5.0 Equipment/Instruments Used</label>
                                        <textarea type="text" rows="2" value={other.equipmentInstruments} onChange={(e) => setOther({ equipmentInstruments: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">6.0 Safety Precautions</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={other.safetyPrecautions} onChange={(e) => setOther({ safetyPrecautions: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">7.0 Procedure</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={other.procedure} onChange={(e) => setOther({ procedure: e.target.value })}></textarea>
                                    </div>
                                    <Grid
                                        label={criticalSteps.label}
                                        coloredLabel={criticalSteps.coloredLabel}
                                        required={criticalSteps.required}
                                        instruction={criticalSteps.instruction}
                                        columnList={criticalSteps.columnList}
                                    />
                                    <div className="group-input">
                                        <label className="color-label">9.0 Software Processing Steps</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={other.softwareProcessingSteps} onChange={(e) => setOther({ softwareProcessingSteps: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">10.0 Calculation</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={other.calculation} onChange={(e) => setOther({ calculation: e.target.value })}></textarea>
                                    </div>
                                    <div className="group-input">
                                        <label className="color-label">11.0 References</label>
                                        <div className="instruction"></div>
                                        <textarea type="text" rows="2" value={other.references} onChange={(e) => setOther({ references: e.target.value })}></textarea>
                                    </div>
                                    <RelatedRecords
                                        label="12.0 Change Control"
                                        coloredLabel={true}
                                        instruction="Add referenced Change Control records"
                                    />
                                    <Grid
                                        label={docFormFile[2].label}
                                        coloredLabel={docFormFile[2].coloredLabel}
                                        required={docFormFile[2].required}
                                        instruction={docFormFile[2].instruction}
                                        columnList={docFormFile[2].columnList}
                                    />
                                </div>
                            </div>
                        ) : form === formList[8] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        Training Information
                                    </div>
                                    <div className="form-flex">
                                        <div className="group-input">
                                            <label>Training Required?</label>
                                            <select value={trainingInformation.trainingRequired} onChange={(e) => setTrainingInformation({ trainingRequired: e.target.value })}>
                                                <option value="">-- Select --</option>
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div className="group-input">
                                            <label>Trainer</label>
                                            <select disabled={trainingInformation.trainingRequired !== "Yes"}>
                                                <option value="">- Select --</option>
                                                <option value="">Madhulika Mishra</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={testData.label}
                                            required={testData.required}
                                            instruction={testData.instruction}
                                            columnList={testData.columnList}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={Survey.label}
                                            required={Survey.required}
                                            instruction={Survey.instruction}
                                            columnList={Survey.columnList}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <label>Comments</label>
                                        <textarea name="w3review" rows="2" value={trainingInformation.comments} onChange={(e) => setTrainingInformation({ comments: e.target.value })}></textarea>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[9] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        Distribution & Retrieval
                                    </div>
                                    <div className="group-input">
                                        <Grid
                                            label={docDetails.label}
                                            required={docDetails.required}
                                            instruction={docDetails.instruction}
                                            columnList={docDetails.columnList}
                                        />
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[10] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>
                                    <div className="sub-head">
                                        Print Permissions
                                    </div>
                                    <div className="group-input">
                                        <label>{selectedPerson.PersonPrintPermission === "Yes" && ''}Person Print Permission</label>
                                        <MultiSelect
                                            options={PersonPrintPermission}
                                            value={selectedPerson}
                                            onChange={setSelectedPerson}
                                            labelledBy="selectedPerson"
                                            required={selectedPerson.PersonPrintPermission === "Yes"}
                                            disabled={!selectedPerson.PersonPrintPermission === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <table className="table-bordered table">
                                            <thead>
                                                <tr>
                                                    <th className="person">Person</th>
                                                    <th className="permission">Daily</th>
                                                    <th className="permission">Weekly</th>
                                                    <th className="permission">Monthly</th>
                                                    <th className="permission">Quarterly</th>
                                                    <th className="permission">Annually</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="person">Amit Patel</td>
                                                    <td className="permission">6543</td>
                                                    <td className="permission">6543</td>
                                                    <td className="permission">6543</td>
                                                    <td className="permission">432</td>
                                                    <td className="permission">123</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="sub-head">
                                        Download Permissions
                                    </div>
                                    <div className="group-input">
                                        <label>{selectedPerson.PersonDownloadPermission === "Yes" && ''}Person Download Permission</label>
                                        <MultiSelect
                                            options={PersonDownloadPermission}
                                            value={selectedPersonDownload}
                                            onChange={setSelectedPersonDownload}
                                            labelledBy="selectedPersonDownload"
                                            required={selectedPerson.PersonDownloadPermission === "Yes"}
                                            disabled={!selectedPerson.PersonDownloadPermission === "Yes"}
                                        />
                                    </div>
                                    <div className="group-input">
                                        <table className="table-bordered table">
                                            <thead>
                                                <tr>
                                                    <th className="person">Person</th>
                                                    <th className="permission">Daily</th>
                                                    <th className="permission">Weekly</th>
                                                    <th className="permission">Monthly</th>
                                                    <th className="permission">Quarterly</th>
                                                    <th className="permission">Annually</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="person">Amit Patel</td>
                                                    <td className="permission">6543</td>
                                                    <td className="permission">6543</td>
                                                    <td className="permission">6543</td>
                                                    <td className="permission">432</td>
                                                    <td className="permission">123</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        ) : form === formList[11] ? (
                            <div className='document-form'>
                                <div className='details-form-data'>


                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Review Proposed By:&nbsp;</strong>Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong> Review Proposed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong> Document Reuqest Approved By:&nbsp;</strong>Amit Patel
                                        </div>
                                        <div>
                                            <strong>Document Reuqest Approved On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Document Writing Completed By:&nbsp;</strong> Amit Guru
                                        </div>
                                        <div>
                                            <strong>Document Writing Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Reviewd By:&nbsp;</strong> Amit Guru
                                        </div>
                                        <div>
                                            <strong>Reviewd On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                    <div className="activity-log-field">
                                        <div>
                                            <strong>Approved By:&nbsp;</strong> Shaleen Mishra
                                        </div>
                                        <div>
                                            <strong>Approved On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                                        </div>
                                    </div>

                                </div>

                            </div>
                        ) : ''}
                    </div>

                    <div className="button-block" style={asideWorkFlow || asideFamilyTree ? { 'width': 'calc(100% - 300px)' } : { 'width': '100%' }}>
                        <button className='themeBtn'>Save</button>
                        <button className='themeBtn'>Back</button>
                        <button className='themeBtn'>Next</button>
                        <button className='themeBtn'>Exit</button>
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

export default DocumentForm;
