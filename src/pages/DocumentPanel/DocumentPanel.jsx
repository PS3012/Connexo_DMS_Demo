import { useReducer, useState } from "react";
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderBottom from '../../components/Header/HeaderBottom'
import ESignatureModal from '../../components/Modals/ESignatureModal/ESignatureModal';
import { MultiSelect } from "react-multi-select-component";
import Grid from "../../components/DataFields/Grid";
import { Editor } from "@tinymce/tinymce-react";
import { CurrentDate } from "../../components/DateReturners";
import InputDate from "../../components/DataFields/InputDate";
import './DocumentPanel.css'

function DocumentPanel() {
    const formList = ["Document Information", "Training Information", "Document Content", "Annexure", "Distribution & Retrieval", "Print & Download Control", "Signature"]
    const [changeControl, setChangeControl] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        shortDescription: '',
        initiatorGroup: '',
        initiatedThrough: '',
        repeat: '',
        trainingRequired: '',
        typeOfChange: 0,
        severityRate: 0,
        occurrence: 0,
        detection: 0,
        CFTReviewers: 0,
        groupReviewRequired: 0,
        production: 0,
        productionPerson: 0,
        qualityApprover: 0,
        qualityApproverPerson: 0,
        others: 0,
        othersPerson: 0,

    })

    const NotifyTo = [
        { label: "Amit Guru (Originator)", value: "1" },
        { label: "Shaleen Mishra (HOD)", value: "mango", },
        { label: "Vikas Prajapati (Approver)", value: "2" },
        { label: "Amit Patel (Reviewer)", value: "3" },
        { label: "Anshul Patel (CFT) ", value: "4" },
    ];
    const [form, setForm] = useState(formList[0]);
    const [selected, setSelected] = useState([]);
    const [options, setOptions] = useState([{ id: 1, value: '' }]);
    const [responsibilities, setResponsibilities] = useState([{ id: 1, value: '' }]);
    const [definition, setDefinition] = useState([{ id: 1, value: '' }]);
    const [materials, setMaterials] = useState([{ id: 1, value: '' }]);
    const [reporting, setReporting] = useState([{ id: 1, value: '' }]);
    const [references, setReferences] = useState([{ id: 1, value: '' }]);
    const [initiatorGroup, setInitiatorGroup] = useState('');
    const [departmenttype, setDepartmenttype] = useState('');
    const [departmentsubtype, setDepartmentsubtype] = useState('');
    const [language, setLanguage] = useState('');
    const [asideWorkFlow, setAsideWorkFlow] = useState(false)
    const [asideFamilyTree, setAsideFamilyTree] = useState(false)


    // ! ====================Responsibility=====================
    const handleAddResponsibility = () => {
        const newId = Math.max(...responsibilities.map(responsibility => responsibility.id), 0) + 1;
        setResponsibilities([...responsibilities, { id: newId, value: '' }]);
    };

    const handleDeleteResponsibility = (id) => {
        setResponsibilities((prevResponsibilities) =>
            prevResponsibilities.filter(responsibility => responsibility.id !== id)
        );
    };
    // ! ====================Responsibility-end =================
    // ! ====================Definition =========================
    const handleAddDefinition = () => {
        const newId = Math.max(...definition.map(definition => definition.id), 0) + 1;
        setDefinition([...definition, { id: newId, value: '' }]);
    };
    const handleDeleteDefinition = (id) => {
        setDefinition((prevDefinition) =>
            prevDefinition.filter(definition => definition.id !== id)
        );
    };
    // ! ====================Definition end======================
    // ! ====================Materials and Equipments Grid=======
    const handleAddMaterials = () => {
        const newId = Math.max(...materials.map(materials => materials.id), 0) + 1;
        setMaterials([...materials, { id: newId, value: '' }]);
    };

    const handleDeleteMaterials = (id) => {
        setMaterials((prevMaterials) =>
            prevMaterials.filter(materials => materials.id !== id)
        );
    };
    // ! ===============Materials and Equipments Grid end =======
    // ! ==================Abbreviation==========================
    const handleAddButton = () => {
        const newId = Math.max(...options.map(option => option.id), 0) + 1;
        setOptions([...options, { id: newId, value: '' }]);
    };

    const handleDeleteOption = (id) => {
        setOptions((prev) => prev.filter(option => option.id !== id));
    };
    //!======================Abbreviation-end====================
    //!======================Reporting===========================
    const handleAddReporting = () => {
        const newId = Math.max(...reporting.map(reporting => reporting.id), 0) + 1;
        setReporting([...reporting, { id: newId, value: '' }]);
    };

    const handleDeleteReporting = (id) => {
        setReporting((prevReporting) =>
            prevReporting.filter(reporting => reporting.id !== id)
        );
    };
    //!======================Reporting-end=======================
    //!======================References===========================
    const handleAddReferences = () => {
        const newId = Math.max(...references.map(references => references.id), 0) + 1;
        setReferences([...references, { id: newId, value: '' }]);
    };

    const handleDeleteReferences = (id) => {
        setReferences((prevReferences) =>
            prevReferences.filter(references => references.id !== id)
        );
    };
    //!======================References-end=======================
    const referenceRecord = [
        { label: "DMS-North America/STP/2024/SOP-00001", value: "1" },
        { label: "DMS-North America/SOP/2024/SOP-00002", value: "2" },
        { label: "DMS-North America/STP/2024/SOP-00003", value: "3" },
        { label: "DMS-North America/SOP/2024/SOP-00006", value: "4" },
        { label: "DMS-North America/SOP/2024/SOP-000010", value: "5" },

    ];
    const approvers = [
        { label: "Amit", value: "" },
    ];
    const reviewers = [
        { label: "Vikash", value: "" },

    ];
    const testdata = {
        label: 'Test(0)',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1', name: 'Question', type: 'text' },
            { id: '2.1.2', name: 'Answer', type: 'text' },
            { id: '2.1.3', name: 'Result', type: 'text' },
            { id: '2.1.4', name: 'Comment', type: 'text' },
            { id: '2.1.5', name: 'Remarks', type: 'text' },
        ]
    }
    const annexure = {
        label: 'Annexure',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1', name: 'Annexure No.', type: 'text' },
            { id: '2.1.2', name: 'Title of Annexure', type: 'text' },

        ]
    }
    const revisionhistory = {
        label: 'Revisionhistory',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '1.1', name: 'SOP  Revision No.', type: 'Number' },
            { id: '2.2', name: 'Change Control No./ DCRF No.', type: 'Number' },
            { id: '2.2', name: 'Changes', type: 'text' },


        ]
    }
    const Survey = {
        label: 'Survey(0)',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1', name: 'Subject', type: 'text' },
            { id: '2.1.2', name: 'Topic', type: 'text' },
            { id: '2.1.3', name: 'Rating', type: 'text' },
            { id: '2.1.4', name: 'Comment', type: 'text' },
            { id: '2.1.5', name: 'Remarks', type: 'text' },
        ]
    }
    const approversGroup = [
        { label: "Sahleen", value: "" },
    ];
    const reviewersGroup = [
        { label: "Amit Guru", value: "" },

    ];
    const docFormFile = [
        {
            label: 'Attach Draft document',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
        {
            label: 'Attach Effective document',
            instruction: 'Please Attach all relevant or supporting documents',
            required: true,
            columnList: [
                { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
                { id: '2.1.1.2', name: 'Attached File', type: 'File' },
                { id: '2.1.1.3', name: 'Remark', type: 'text' },
            ]
        },
    ];
    const docDetails = {
        label: 'Distribution & Retrieval ',
        instruction: <div></div>,
        required: true,
        columnList: [
            { id: '2.1.1.1', name: 'Document Title', type: 'text' },
            { id: '2.1.1.2', name: 'Document Number', type: 'text' },
            { id: '2.1.1.3', name: 'Document Printed By', type: 'text' },
            { id: '2.1.1.4', name: 'Document Printed on', type: 'text' },
            { id: '2.1.1.5', name: 'Number of Print Copies', type: 'text' },
            { id: '2.1.1.5', name: 'Issuance Date', type: 'date' },
            { id: '2.1.1.5', name: 'Department/Location', type: 'text' },
            { id: '2.1.1.5', name: 'Number of Issued Copies	', type: 'text' },
            { id: '2.1.1.5', name: 'Reason for Issuance', type: 'text' },
            { id: '2.1.1.5', name: 'Retrieval Date', type: 'date' },
            { id: '2.1.1.5', name: 'Retrieved By', type: 'text' },
            { id: '2.1.1.5', name: 'Retrieved Person Department', type: 'text' },
            { id: '2.1.1.5', name: 'Number of Retrieved Copies', type: 'number' },
            { id: '2.1.1.5', name: 'Reason for Retrieval', type: 'text' },
            { id: '2.1.1.5', name: 'Remarks', type: 'text' },
        ]
    };
    const PersonPrintPermission = [
        { label: "Anshul Patel", value: "1" },
        { label: "Shaleen", value: "shaleen", },
        { label: "Amit", value: "2", },
        { label: "Piyush", value: "Piyush", },
    ];
    const GroupDownloadPermission = [
        { label: "Anshul Patel", value: "1" },
        { label: "Shaleen", value: "shaleen", },
        { label: "Amit", value: "2", },
        { label: "Piyush", value: "Piyush", },
    ];
    const GroupPrintPermission = [
        { label: "Anshul Patel", value: "1" },
        { label: "Shaleen", value: "shaleen", },
        { label: "Amit", value: "2", },
        { label: "Piyush", value: "Piyush", },
    ];
    const PersonDownloadPermission = [
        { label: "Anshul Patel", value: "1" },
        { label: "Shaleen", value: "shaleen", },
        { label: "Amit", value: "2", },
        { label: "Piyush", value: "Piyush", },
    ];

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

                <div className='document-block'>

                    <div className="document-tabs">
                        <div className={form === formList[0] ? 'active' : ''} onClick={() => setForm(formList[0])}>{formList[0]}</div>

                        <div className={form === formList[1] ? 'active' : ''} onClick={() => setForm(formList[1])}>{formList[1]}</div>

                        <div className={form === formList[2] ? 'active' : ''} onClick={() => setForm(formList[2])}>{formList[2]}</div>

                        <div className={form === formList[3] ? 'active' : ''} onClick={() => setForm(formList[3])}>{formList[3]}</div>

                        <div className={form === formList[4] ? 'active' : ''} onClick={() => setForm(formList[4])}>{formList[4]}</div>

                        <div className={form === formList[5] ? 'active' : ''} onClick={() => setForm(formList[5])}>{formList[5]}</div>

                        <div className={form === formList[6] ? 'active' : ''} onClick={() => setForm(formList[6])}>{formList[6]}</div>
                    </div>


                    {form === formList[0] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="form-flex-three">
                                    <div className="group-input">
                                        <label>Originator</label>
                                        <input type="text" value="Amit Guru" disabled />

                                    </div>
                                    <div className="group-input">
                                        <label>Date Opened</label>
                                        <input type="" value={CurrentDate()} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label>Record Number</label>
                                        <input type="text" value="00009" disabled />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label><div className="required"></div>
                                        Document Name
                                    </label>
                                    <div className='instruction'>255 characters remaining</div>
                                    <input id="docname" type="text" name="document_name" required=""></input>
                                </div>

                                <div className="group-input">
                                    <label>
                                        <div className="required"></div>
                                        Short Description
                                    </label>
                                    <input type="text" />
                                </div>

                                <div className='form-flex'>

                                    <InputDate
                                        label="Due Date"
                                        instruction="Please mention expected date of completion."
                                        isRequired="false"
                                        enableDate="future"
                                    />


                                    <div className="group-input">
                                        <label><b>Notify To</b></label>
                                        <MultiSelect
                                            options={NotifyTo}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select"
                                            required={changeControl.CFTReviewers === "Yes"}
                                            disabled={!changeControl.CFTReviewers === "Yes"}
                                        />
                                    </div>

                                </div>

                                <div className="group-input">
                                    <label><b>Description</b></label>
                                    <textarea name="w3review"></textarea>
                                </div>

                                <div className="sub-head">
                                    Document Information
                                </div>

                                <div className='form-flex'>

                                    <div className="group-input">
                                        <label>Document Number</label>
                                        <div className="default-name">Not available</div>
                                    </div>

                                    <div className="group-input">
                                        <label>Document Number</label>
                                        <MultiSelect
                                            options={referenceRecord}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />
                                    </div>

                                    <div className="group-input">
                                        <label><div className="required"></div>Department Name</label>
                                        <select name="initiator_group" value={changeControl.initiatorGroup} onChange={(e) => setChangeControl({ initiatorGroup: e.target.value })}>
                                            <option value="Not selected">-- Select --</option>
                                            <option value="QA">Quality Assurance </option>
                                            <option value="QC">Quality Control</option>
                                            <option value="Prod">Production</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>Department Code</label>
                                        <input type="text" value={changeControl.initiatorGroup} disabled />
                                    </div>

                                    <div className="group-input">
                                        <label><div className="required"></div>Department Type</label>
                                        <select name="initiator_group" value={departmenttype} onChange={(e) => setDepartmenttype(e.target.value)}>
                                            <option value="Not selected">Enter your Selection</option>
                                            <option value="STP">Standard Test Procedure </option>
                                            <option value="SOP">Standard Operating Procedure</option>
                                            <option value="WI">Work Instruction</option>
                                            <option value="Spec">Specification </option>
                                            <option value="VP">Validation Protocol  </option>
                                            <option value="PFD">Process Flow Diagram   </option>
                                            <option value="QP">Qualification Protocol   </option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>Document Type Code</label>
                                        <input type="text" value={departmenttype} disabled />
                                    </div>
                                    <div className="group-input">
                                        <label><div className="required"></div>Document SubType Code</label>
                                        <select name="initiator_group" value={departmentsubtype} onChange={(e) => setDepartmentsubtype(e.target.value)}>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>Document SubType Code</label>
                                        <input type="text" value={departmentsubtype} disabled />
                                    </div>

                                    <div className="group-input">
                                        <label><div className="required"></div>Department Language</label>
                                        <select name="" id="lang-name" value={language} onChange={(e) => setLanguage(e.target.value)}>
                                            <option value="Not selected">-- Select --</option>
                                            <option value="EN">English</option>
                                            <option value="KN">Korean</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label>Document Language Code</label>
                                        <input type="text" value={language} disabled />
                                    </div>

                                    <div className="group-input" id="add-keyword">
                                        <div>Keyword</div>
                                        <input type="text" id="sourceField" />
                                        <button id="addButton" className="themeBtn" type="button">Add</button>
                                    </div>

                                </div>

                                <div className="group-input">
                                    <input type="text" />
                                </div>

                                <div className='form-flex-three'>
                                    <div className="group-input">
                                        <InputDate
                                            label="Effective Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="false"
                                            enableDate="future"
                                        />
                                    </div>

                                    <div className="group-input">
                                        <label>Review Period</label>
                                        <div className="instruction">&nbsp;</div>
                                        <input type="number" />
                                    </div>

                                    <div className="group-input">
                                        <InputDate
                                            label="Next Review Date"
                                            instruction="Please mention expected date of completion."
                                            isRequired="false"
                                            enableDate="future"
                                        />
                                    </div>
                                </div>

                                <div className="form-flex">

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
                                </div>

                                <div className="sub-head">
                                    Other Information
                                </div>

                                <div className="form-flex">

                                    <div className="group-input">
                                        <label><div className="required"></div>Reviewers</label>
                                        <MultiSelect
                                            options={reviewers}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />
                                    </div>

                                    <div className="group-input">
                                        <label><div className="required"></div>Approvers</label>
                                        <MultiSelect
                                            options={approvers}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />
                                    </div>

                                    <div className="group-input">
                                        <label>Reviewers Group</label>
                                        <MultiSelect
                                            options={reviewersGroup}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />
                                    </div>

                                    <div className="group-input">
                                        <label>Approvers Group</label>
                                        <MultiSelect
                                            options={approversGroup}
                                            value={selected}
                                            onChange={setSelected}
                                            labelledBy="Select" />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label>Revision Summary</label>
                                    <textarea name="w3review"></textarea>
                                </div>

                            </div>
                        </div>

                    ) : form === formList[1] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    Training Information
                                </div>
                                <div className="form-flex">
                                    <div className="group-input">
                                        <label><b>Training Required?</b></label>
                                        <select name="" id="lang-name" required="">
                                            <option value="" selected="">-- Select --</option>
                                            <option value="1">Yes</option>
                                            <option value="2">No</option>
                                        </select>
                                    </div>

                                    <div className="group-input">
                                        <label><b>Trainer</b></label>
                                        <select name="trainer">
                                            <option value="" selected="">- Select --</option>
                                            <option value="">Madhulika Mishra</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={testdata.label}
                                        required={testdata.required}
                                        instruction={testdata.instruction}
                                        columnList={testdata.columnList}
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
                                    <label><b>Comments</b></label>
                                    <textarea name="w3review" rows="2" cols="50"></textarea>
                                </div>
                            </div>
                        </div>

                    ) : form === formList[2] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>

                                <div className="sub-head">
                                    Document Information
                                </div>

                                <div className="group-input">
                                    <label><b>Purpose</b></label>
                                    <input id="docname" type="text" name="document_name"></input>
                                </div>

                                <div className="group-input">
                                    <label><b>Scope</b></label>
                                    <textarea id="w3review" name="w3review" rows="2 " cols="50" />
                                </div>

                                <div className="group-input">
                                    <label id="icon-flex"><b>Responsibility</b>
                                        <svg
                                            onClick={handleAddResponsibility}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                            />
                                        </svg>
                                    </label>

                                    <div className="option-grid">
                                        {responsibilities.map((responsibility) => (
                                            <div key={responsibility.id}>
                                                <input type="text" name="responsibility" value={responsibility.value} />
                                                <input type="radio" name="responsibility" />
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 72 72"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => handleDeleteResponsibility(responsibility.id)}
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                    />
                                                    <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                    <path fill="#FFF" d="M17 16h38v4H17z" />
                                                    <path
                                                        fill="none"
                                                        stroke="#ff0000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="2"
                                                        d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                    />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label id="icon-flex"><b>Abbreviation</b>
                                        <svg
                                            onClick={handleAddButton}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                            />
                                        </svg>
                                    </label>

                                    <div className="option-grid">
                                        {options.map((option) => (
                                            <div key={option.id}>
                                                <input type="text" name="option" />
                                                <input type="radio" name="option" />
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 72 72"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => handleDeleteOption(option.id)}
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                    />
                                                    <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                    <path fill="#FFF" d="M17 16h38v4H17z" />
                                                    <path
                                                        fill="none"
                                                        stroke="#ff0000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="2"
                                                        d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                    />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>


                                <div className="group-input">
                                    <label id="icon-flex"><b>Definition</b>
                                        <svg
                                            onClick={handleAddDefinition}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                            />
                                        </svg>
                                    </label>
                                    <div className="option-grid">
                                        {definition.map((definition) => (
                                            <div key={definition.id}>
                                                <input type="text" name="definition" value={definition.value} />
                                                <input type="radio" name="definition" />
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 72 72"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => handleDeleteDefinition(definition.id)}
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                    />
                                                    <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                    <path fill="#FFF" d="M17 16h38v4H17z" />
                                                    <path
                                                        fill="none"
                                                        stroke="#ff0000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="2"
                                                        d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                    />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label id="icon-flex"><b>Materials and Equipments</b>
                                        <svg
                                            onClick={handleAddMaterials}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                            />
                                        </svg>
                                    </label>

                                    <div className="option-grid">
                                        {materials.map((materials) => (
                                            <div key={materials.id}>
                                                <input type="text" name="materials" value={materials.value} />
                                                <input type="radio" name="materials" />
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 72 72"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => handleDeleteMaterials(materials.id)}
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                    />
                                                    <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                    <path fill="#FFF" d="M17 16h38v4H17z" />
                                                    <path
                                                        fill="none"
                                                        stroke="#ff0000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="2"
                                                        d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                    />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label><b>Procedure</b></label>
                                    <div className="text-Annexure">
                                        <Editor
                                            apiKey='eg5xrowq8159t7p0vp3nchrbj2gkp5ahucpos8nl3o8lanf9'
                                            init={{
                                                height: 200,
                                                width: '100%',
                                                plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                                tinycomments_mode: 'embedded',
                                                tinycomments_author: 'Author name',
                                                mergetags_list: [
                                                    { value: 'First.Name', title: 'First Name' },
                                                    { value: 'Email', title: 'Email' },
                                                ],
                                                ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                            }}
                                            initialValue="<b>Procedure Box:-</b1>"
                                        />
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label id="icon-flex"><b>Reporting</b>
                                        <svg
                                            onClick={handleAddReporting}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                            />
                                        </svg>
                                    </label>

                                    <div className="option-grid">
                                        {reporting.map((reporting) => (
                                            <div key={reporting.id}>
                                                <input type="text" name="reporting" value={reporting.value} />
                                                <input type="radio" name="reporting" />
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 72 72"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => handleDeleteReporting(reporting.id)}
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                    />
                                                    <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                    <path fill="#FFF" d="M17 16h38v4H17z" />
                                                    <path
                                                        fill="none"
                                                        stroke="#ff0000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="2"
                                                        d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                    />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="group-input">
                                    <label id="icon-flex"><b>References</b>
                                        <svg
                                            onClick={handleAddReferences}
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="#000000"
                                                d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                            />
                                        </svg>
                                    </label>

                                    <div className="option-grid">
                                        {references.map((references) => (
                                            <div key={references.id}>
                                                <input type="text" name="references" value={references.value} />
                                                <input type="radio" name="references" />
                                                <svg
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 72 72"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    onClick={() => handleDeleteReferences(references.id)}
                                                >
                                                    <path
                                                        fill="#FFF"
                                                        d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                    />
                                                    <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                    <path fill="#FFF" d="M17 16h38v4H17z" />
                                                    <path
                                                        fill="none"
                                                        stroke="#ff0000"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeMiterlimit="10"
                                                        strokeWidth="2"
                                                        d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                    />
                                                </svg>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="group-input">
                                    <Grid
                                        label={annexure.label}
                                        required={annexure.required}
                                        instruction={annexure.instruction}
                                        columnList={annexure.columnList}
                                    />
                                </div>

                                <div>
                                    <Grid
                                        label={revisionhistory.label}
                                        required={revisionhistory.required}
                                        instruction={revisionhistory.instruction}
                                        columnList={revisionhistory.columnList}
                                    />
                                </div>


                            </div>
                        </div>

                    ) : form === formList[3] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    Annexure
                                </div>
                                <div className="text-Annexure">
                                    <Editor
                                        apiKey='eg5xrowq8159t7p0vp3nchrbj2gkp5ahucpos8nl3o8lanf9'
                                        init={{
                                            height: 200,
                                            width: '100%',
                                            plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                            tinycomments_mode: 'embedded',
                                            tinycomments_author: 'Author name',
                                            mergetags_list: [
                                                { value: 'First.Name', title: 'First Name' },
                                                { value: 'Email', title: 'Email' },
                                            ],
                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                        }}
                                        initialValue="<b>Welcome to Annexure !=> </b1>"
                                    />
                                </div>
                                <div className="text-Annexure">
                                    <Editor
                                        apiKey='eg5xrowq8159t7p0vp3nchrbj2gkp5ahucpos8nl3o8lanf9'
                                        init={{
                                            height: 200,
                                            width: '100%',
                                            plugins: 'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
                                            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                                            tinycomments_mode: 'embedded',
                                            tinycomments_author: 'Author name',
                                            mergetags_list: [
                                                { value: 'First.Name', title: 'First Name' },
                                                { value: 'Email', title: 'Email' },
                                            ],
                                            ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                                        }}
                                        initialValue="<b>Welcome to Annexure !=> </b1>"
                                    />
                                </div>


                            </div>
                        </div>

                    ) : form === formList[4] ? (
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

                    ) : form === formList[5] ? (
                        <div className='document-form'>
                            <div className='details-form-data'>
                                <div className="sub-head">
                                    Print Permissions
                                </div>

                                <div className="group-input">
                                    <label><b>Person Print Permission</b></label>
                                    <MultiSelect
                                        options={PersonPrintPermission}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
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

                                <div className="group-input">
                                    <label><b>Group Print Permission</b></label>
                                    <MultiSelect
                                        options={GroupPrintPermission}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>

                                <div className="group-input">
                                    <table className="table-bordered table">
                                        <thead>
                                            <tr>
                                                <th className="person">Group</th>
                                                <th className="permission">Daily</th>
                                                <th className="permission">Weekly</th>
                                                <th className="permission">Monthly</th>
                                                <th className="permission">Quarterly</th>
                                                <th className="permission">Annually</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="person">QA</td>
                                                <td className="permission">1</td>
                                                <td className="permission">54</td>
                                                <td className="permission">654</td>
                                                <td className="permission">765</td>
                                                <td className="permission">654</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="sub-head">
                                    Download Permissions
                                </div>

                                <div className="group-input">
                                    <label><b>Person Download Permission</b></label>
                                    <MultiSelect
                                        options={PersonDownloadPermission}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
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

                                <div className="group-input">
                                    <label><b>Group Download Permission</b></label>
                                    <MultiSelect
                                        options={GroupDownloadPermission}
                                        value={selected}
                                        onChange={setSelected}
                                        labelledBy="Select"
                                    />
                                </div>

                                <div className="group-input">
                                    <table className="table-bordered table">
                                        <thead>
                                            <tr>
                                                <th className="person">Group</th>
                                                <th className="permission">Daily</th>
                                                <th className="permission">Weekly</th>
                                                <th className="permission">Monthly</th>
                                                <th className="permission">Quarterly</th>
                                                <th className="permission">Annually</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="person">QA</td>
                                                <td className="permission">1</td>
                                                <td className="permission">54</td>
                                                <td className="permission">654</td>
                                                <td className="permission">765</td>
                                                <td className="permission">654</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    ) : form === formList[6] ? (
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

            {signatureModal && <ESignatureModal closeModal={closeSignatureModal} returnSignature={signatureValue} />}

        </>
    )
}

export default DocumentPanel
