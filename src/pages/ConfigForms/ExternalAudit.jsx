import { useReducer, useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";
import RelatedRecords from "../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../components/DateReturners";
import "./ConfigForms.css";

function ExternalAudit() {
  const formList = ["General Information", "Audit Planning", "Audit Preparation", "Audit Execution", "Audit Response & Closure", "Activity Log"]
  const site = localStorage.getItem("site")
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const [externalAudit, setExternalAudit] = useReducer((prev, next) => ({
    ...prev, ...next
  }), {
    initiatorGroup: '',
    initiatedThrough: '',
    typeOfAudit: ''
  })
  const [form, setForm] = useState(formList[0]);
  const [selected, setSelected] = useState([]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false)
  const [asideFamilyTree, setAsideFamilyTree] = useState(false)
  const FunctionName = [
    { label: "QA", value: "QA" },
    { label: "QC", value: "QC" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "Warehouse", value: "Warehouse" },
    { label: "RA", value: "RA" },
    { label: "R&D,", value: "R&D" },
  ];
  const AuditTeam = [
    { label: "Amit Guru", value: "Amit Guru" },
    { label: "Amit Patel", value: "Amit Patel" },
    { label: "Akash Asthana", value: "Akash Asthana" },
    { label: "Madhulika Mishra", value: "Madhulika Mishra" },
    { label: "Shaleen Mishra", value: "Shaleen Mishra" },
  ];
  const ObservationFields = [
    {
      label: "Observation Fields ",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Observation ID", type: "text" },
        { id: "2.1.1.2", name: "Date", type: "date" },
        { id: "2.1.1.3", name: "Auditor", type: "select" },
        { id: "2.1.1.4", name: "Auditee", type: "select" },
        { id: "2.1.1.5", name: "Observation Description", type: "text" },
        { id: "2.1.1.7", name: "Area/process", type: "text" },
        { id: "2.1.1.8", name: "Observation Category", type: "text" },
        { id: "2.1.1.9", name: "CAPA Required", type: "select" },
        { id: "2.1.1.10", name: "Auditee Response", type: "text" },
        { id: "2.1.1.11", name: "Auditor Review on Response", type: "text" },
        { id: "2.1.1.12", name: "QA Comments", type: "text" },
        { id: "2.1.1.13", name: "CAPA Details", type: "text" },
        { id: "2.1.1.14", name: "CAPA Due Date", type: "date" },
        { id: "2.1.1.15", name: "CAPA Owner", type: "select" },
        { id: "2.1.1.16", name: "Action Taken", type: "text" },
        { id: "2.1.1.17", name: "	CAPA Completion Date", type: "date" },
        { id: "2.1.1.18", name: "Status", type: "text" },
        { id: "2.1.1.19", name: "Remarks", type: "text" },
      ],
    },
  ];
  const AuditAgenda = {
    label: "Audit Agenda",
    instruction: <div></div>,
    required: true,
    columnList: [
      { id: "2.1.1.1", name: "	Area of Audit", type: "text" },
      { id: "2.1.1.2", name: "Scheduled Start Date", type: "date" },
      { id: "2.1.1.3", name: "Scheduled Start Time", type: "time" },
      { id: "2.1.1.4", name: "Scheduled End Date", type: "date" },
      { id: "2.1.1.5", name: "Auditor", type: "select" },
      { id: "2.1.1.6", name: "Auditee", type: "text" },
      { id: "2.1.1.7", name: "Remarks", type: "text" },
    ],
  };
  const docFile = [
    {
      label: 'Initial attachment',
      instruction: 'Please Attach all relevant or supporting documents',
      required: true,
      columnList: [
        { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
        { id: '2.1.1.2', name: 'Attached File', type: 'File' },
        { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
    }, {
      label: 'List of Attachment',
      instruction: 'Please Attach all relevant or supporting documents',
      required: true,
      columnList: [
        { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
        { id: '2.1.1.2', name: 'Attached File', type: 'File' },
        { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
    }, {
      label: 'Guideline Attachment',
      instruction: 'Please Attach all relevant or supporting documents',
      required: true,
      columnList: [
        { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
        { id: '2.1.1.2', name: 'Attached File', type: 'File' },
        { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
    }, {
      label: 'Audit Attachments',
      instruction: 'Please Attach all relevant or supporting documents',
      required: true,
      columnList: [
        { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
        { id: '2.1.1.2', name: 'Attached File', type: 'File' },
        { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
    }, {
      label: 'Audit Attachments',
      instruction: 'Please Attach all relevant or supporting documents',
      required: true,
      columnList: [
        { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
        { id: '2.1.1.2', name: 'Attached File', type: 'File' },
        { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
    }, {
      label: 'Report Attachments',
      instruction: 'Please Attach all relevant or supporting documents',
      required: true,
      columnList: [
        { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
        { id: '2.1.1.2', name: 'Attached File', type: 'File' },
        { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
    }
  ]

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
            <div><strong> Record Name:&nbsp;</strong>External Audit</div>
            <div><strong> Site:&nbsp;</strong>{site}</div>
            <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
            <div><strong> Initiated By:&nbsp;</strong>Shaleen Mishra</div>
          </div>

          <div className="document-block">
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
                      <input type="text" value={`${site}/IA/${currentYear}/00000001`} disabled />
                    </div>
                    <div className="group-input">
                      <label>Site/Location Code</label>
                      <input type="text" value="Jordan" disabled />
                    </div>
                    <div className="group-input">
                      <label>Initiator</label>
                      <input type="text" value="Amit Guru" disabled />
                    </div>
                    <div className="group-input">
                      <label>Date of Initiation</label>
                      <input type="" value={CurrentDate()} disabled />
                    </div>
                    <div className="group-input">
                      <label>
                        <div className="required"></div>
                        Assigned To
                      </label>
                      <select required>
                        <option value="">Select a value</option>
                        <option value="2">Shaleen Mishra</option>
                      </select>
                    </div>
                    <InputDate label="Due Date" enableDate="future" isRequired="false" />
                    <div className="group-input">
                      <label htmlFor="initiatorGroup">
                        <div className="required"></div>
                        Initiator Group
                      </label>
                      <select name="initiatorGroup" value={externalAudit.initiatorGroup} onChange={(e) => setExternalAudit({ initiatorGroup: e.target.value })}>
                        <option value="">-- Select --</option>
                        <option value="CQA">Corporate Quality Assurance</option>
                        <option value="QAB">Quality Assurance Bio-Pharma</option>
                        <option value="CQC">Central Quality Control</option>
                        <option value="Manu">Manufacturing</option>
                        <option value="PSG">Plasma Sourcing Group</option>
                        <option value="CS" >Central Stores</option>
                        <option value="ITG">Information Technology Group</option>
                        <option value="MM" >Molecular Medicine</option>
                        <option value="CL" >Central Laboratory</option>
                        <option value="TT" >Tech team</option>
                        <option value="QA" > Quality Assurance</option>
                        <option value="QM" >Quality Management</option>
                        <option value="IA" >IT Administration</option>
                        <option value="ACC">Accounting</option>
                        <option value="LOG">Logistics</option>
                        <option value="SM" >Senior Management</option>
                        <option value="BA" >Business Administration</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>Initiator Group Code</label>
                      <input type="text" value={externalAudit.initiatorGroup} disabled />
                    </div>
                  </div>
                  <div className="group-input">
                    <label>
                      Short Description
                    </label>
                    <textarea type="text" rows="2" />
                  </div>

                  <div className="group-input">
                    <label>Severity Level</label>
                    <select>
                      <option value="">-- Select --</option>
                      <option value="">Major</option>
                      <option value="">Minor</option>
                      <option value="">Critical</option>
                    </select>
                  </div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Initiated Through</label>
                      <div className='instruction'>Please select related information</div>
                      <select name="initiated_through" value={externalAudit.initiatedThrough} onChange={(e) => setExternalAudit({ initiatedThrough: e.target.value })}>
                        <option value="">-- Select --</option>
                        <option value="recall">Recall</option>
                        <option value="return">Return</option>
                        <option value="deviation">Deviation</option>
                        <option value="complaint">Complaint</option>
                        <option value="regulatory">Regulatory</option>
                        <option value="lab-incident">Lab Incident</option>
                        <option value="improvement">Improvement</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>
                        {externalAudit.initiatedThrough === 'others' && <div className="required"></div>}
                        Other
                      </label>
                      <textarea required={externalAudit.initiatedThrough === 'others'}></textarea>
                    </div>
                    <div className="group-input">
                      <label>
                        Type of Audit
                      </label>
                      <div className="instruction">
                        Please select yes if it is has recurred in past six months
                      </div>
                      <select value={externalAudit.typeOfAudit} onChange={(e) => setExternalAudit({ typeOfAudit: e.target.value })} >
                        <option value="">-- Select --</option>
                        <option value="R&D">R&D</option>
                        <option value="GLP">GLP</option>
                        <option value="GCP">GCP</option>
                        <option value="GCP">GDP</option>
                        <option value="GEP">GEP</option>
                        <option value="ISO17025">ISO 17025</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>
                        {externalAudit.typeOfAudit === 'Others' && <div className="required"></div>}
                        If Other
                      </label>
                      <textarea required={externalAudit.typeOfAudit === 'Others'}></textarea>
                    </div>
                  </div>
                  <FlexField
                    label="Initial Comments"
                    instruction=""
                    isRequired="true"
                  />
                  <div className="group-input">
                    <Grid
                      label={docFile[0].label}
                      required={docFile[0].required}
                      instruction={docFile[0].instruction}
                      columnList={docFile[0].columnList}
                    />
                  </div>
                </div>
              </div>
            ) : form === formList[1] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="form-flex">
                    <InputDate
                      label="Audit Schedule Start Date"
                      isRequired="true"
                      enableDate="future"
                    />
                    <InputDate
                      label="Audit Schedule End Date"
                      isRequired="true"
                      enableDate="future"
                    />
                  </div>
                  <Grid
                    label={AuditAgenda.label}
                    required={AuditAgenda.required}
                    instruction={AuditAgenda.instruction}
                    columnList={AuditAgenda.columnList}
                  />
                  <RelatedRecords
                    label="Related Records"
                  />

                  <FlexField
                    label="Comments (if any)"
                    instruction=""
                    isRequired="false"
                  />
                </div>
              </div>
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="group-input">
                    <label>
                      Lead Auditor
                    </label>
                    <select name="initiated_through" >
                      <option value="">-- Select --</option>
                      <option value="amit_guru">Amit Guru</option>
                      <option value="amit_patel">Amit Patel</option>
                      <option value="akash_asthana">Akash Asthana</option>
                      <option value="madhulika_mishra">Madhulika Mishra</option>
                      <option value="shaleen_mishra">Shaleen Mishra</option>
                    </select>
                  </div>
                  <Grid
                    label={docFile[1].label}
                    required={docFile[1].required}
                    instruction={docFile[1].instruction}
                    columnList={docFile[1].columnList}
                  />

                  <div className="form-flex">
                    <div className="group-input">
                      <label>
                        Audit Team
                      </label>
                      <MultiSelect
                        options={AuditTeam}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                      />
                    </div>
                    <div className="group-input">
                      <label>
                        Auditee
                      </label>
                      <MultiSelect
                        options={AuditTeam}
                        value={selected}
                        onChange={setSelected}
                        labelledBy="Select"
                      />
                    </div>
                  </div>
                  <FlexField
                    label="External Auditor Details"
                    instruction=""
                    isRequired="false"
                  />
                  <FlexField
                    label="External Auditing Agency"
                    instruction=""
                    isRequired="false"
                  />
                  <FlexField
                    label="Relevant Guidelines / Industry Standards"
                    instruction=""
                    isRequired="false"
                  />
                  <FlexField
                    label="QA Comments"
                    instruction=""
                    isRequired="false"
                  />
                  <Grid
                    label={docFile[2].label}
                    required={docFile[2].required}
                    instruction={docFile[2].instruction}
                    columnList={docFile[2].columnList}
                  />
                  <div className="group-input">
                    <label>
                      Audit Category
                    </label>
                    <select name="initiated_through" >
                      <option>Enter Your Selection Here</option>
                      <option>Internal Audit/Self Inspection</option>
                      <option>Supplier Audit</option>
                      <option>Regulatory Audit</option>
                      <option>Consultant Audit</option>
                    </select>
                  </div>
                  <div className="group-input">
                    <label>
                      Supplier/Vendor/Manufacturer Details
                    </label>
                    <input type="text" />
                  </div>
                  <div className="group-input">
                    <label>
                      Supplier/Vendor/Manufacturer Site
                    </label>
                    <input type="text" />
                  </div>
                  <FlexField
                    label="Comments"
                    instruction=""
                    isRequired="false"
                  />
                </div>
              </div>
            ) : form === formList[3] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Audit Response</div>
                  <div className="form-flex">
                    <InputDate
                      label="Audit Start Date"
                      isRequired="true"
                      enableDate="future"
                    />
                    <InputDate
                      label="Audit End Date"
                      isRequired="true"
                      enableDate="future"
                    />
                  </div>

                  <div className="group-input">
                    <Grid
                      label={ObservationFields[0].label}
                      required={ObservationFields[0].required}
                      instruction={ObservationFields[0].instruction}
                      columnList={ObservationFields[0].columnList}
                    />
                  </div>
                  <Grid
                    label={docFile[3].label}
                    required={docFile[3].required}
                    instruction={docFile[3].instruction}
                    columnList={docFile[3].columnList}
                  />
                  <FlexField
                    label="Audit Comments"
                    instruction=""
                    isRequired="false"
                  />
                </div>
              </div>
            ) : form === formList[4] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Audit Response & Closure</div>
                  <FlexField
                    label="Remarks"
                    instruction=""
                    isRequired="false"
                  />
                  <RelatedRecords
                    label="Reference Records"
                  />
                  <Grid
                    label={docFile[4].label}
                    required={docFile[4].required}
                    instruction={docFile[4].instruction}
                    columnList={docFile[4].columnList}
                  />
                  <Grid
                    label={docFile[5].label}
                    required={docFile[5].required}
                    instruction={docFile[5].instruction}
                    columnList={docFile[5].columnList}
                  />
                  <FlexField
                    label="Audit Comments"
                    instruction=""
                    isRequired="false"
                  />
                  <div className="sub-head">Extension Details</div>
                  <FlexField
                    label="Due Date Extension Justification"
                    instruction=""
                    isRequired="false"
                  />
                </div>
              </div>
            ) : form === formList[5] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Scheduled By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Scheduled On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Cancelled By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Cancelled On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Preparation Completed By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Preparation Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Migration More Info Required By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Migration More Info Required On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Observation Submitted By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Observation Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Lead More Info Required By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Lead More Info Required On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Response Completed By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Response Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Response Feedback Verified By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Response Feedback Verified On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
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
  );
}

export default ExternalAudit;
