import { useEffect, useReducer, useState } from "react";
import ESignatureModal from '../../../components/Modals/ESignatureModal/ESignatureModal';
import { MultiSelect } from "react-multi-select-component";
import Grid from "../../../components/DataFields/Grid";
import { CurrentDate, convertDateFormat } from "../../../components/DateReturners";
import InputDate from "../../../components/DataFields/InputDate";
import '../DocumentPanel.css';
import FlexField from "../../../components/DataFields/FlexField";
import HeaderTop from "../../../components/Header/HeaderTop";
import HeaderBottom from "../../../components/Header/HeaderBottom";

import { formList, NotifyTo, responsibilities, interpretationOfResult, criticalSteps, referenceProcedures, approvers, reviewers, testData, Survey, docFormFile, docDetails, PersonPrintPermission, PersonDownloadPermission, site, currentYear } from "./DocumentPanelFunction";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";

function DocumentPanel() {

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
    // const [printDownloadControl, setPrintDownloadControl] = useReducer((prev, next) => ({
    //     ...prev, ...next
    // }), {
    //     personPrintPermission: '',

    // })

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

    // -------------work flow-------
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
                    <div><strong> Record Name:&nbsp;</strong>Document-Panel</div>
                    <div><strong> Site:&nbsp;</strong>{newDocument.site}</div>
                    <div><strong> Current Status:&nbsp;</strong>{progressArray[progressArray.length - 1]}</div>
                    <div><strong> Initiated By:&nbsp;</strong>{newDocument.initiator}</div>
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
                                        <label>{newDocument.reviewers === "Yes" && ''}<div className="required">
                                        </div>Reviewers</label>
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

                <div className="button-block">
                    <button className='themeBtn'>Save</button>
                    <button className='themeBtn'>Back</button>
                    <button className='themeBtn'>Next</button>
                    <button className='themeBtn'>Exit</button>
                </div>

            </div>

            {signatureModal && <ESignatureModal closeModal={closeSignatureModal} returnSignature={signatureValue} />}

        </>
    )
}

export default DocumentPanel
