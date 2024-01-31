import { useReducer, useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
import InputDate from "../../../components/DataFields/InputDate";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../../components/DateReturners";
import "../DocumentPanel.css";
import { formList, AuditTeam, ObservationFields, AuditAgenda, docFile, progressItems, site, currentYear } from './ExternalAuditPanelFunction';
import HeaderBottom from "../../../components/Header/HeaderBottom";

function ExternalAuditPanel() {


  const [form, setForm] = useState(formList[0]);
  const [selected, setSelected] = useState([]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);

  const [externalAudit, setExternalAudit] = useReducer((prev, next) => ({
    ...prev, ...next
  }), {
    recordNumber: `${site}/EA/${currentYear}/000001`,
    site: site,
    initiator: 'Amit Guru',
    dateOfInitiation: CurrentDate(),
    assignedTo: '',
    dueDate: '',
    initiatorGroup: '',
    initiatedThrough: '',
    typeOfAudit: '',
    shortDescription: '',
    severityLevel: '',
    other: '',
    ifOther: '',
    initialAttachment: '',
    description: '',
  })
  const [auditPlanning, setAuditPlanning] = useReducer((prev, next) => ({
    ...prev, ...next
  }), {
    auditScheduleStartDate: '',
    auditScheduleEndDate: '',
    auditAgenda: '',
    relatedRecords: '',
    comments: '',
  })
  const [auditPreparation, setAuditPreparation] = useReducer((prev, next) => ({
    ...prev, ...next
  }), {
    leadAuditor: '',
    listofAttachment: '',
    auditTeam: '',
    externalAuditorDetails: '',
    externalAuditingAgency: '',
    auditee: '',
    relevantGuidelines: '',
    qaComments: '',
    guidelineAttachment: '',
    auditCategory: '',
    supplierDetails: '',
    supplierSite: '',
    comments: '',

  })
  const [auditExecution, setAuditExecution] = useReducer((prev, next) => ({
    ...prev, ...next
  }), {
    auditStartDate: '',
    auditStartEnd: '',
    observationFields: '',
    auditAttachments: '',
    auditComments: '',
  })
  const [auditResponse, setAuditResponse] = useReducer((prev, next) => ({
    ...prev, ...next
  }), {
    remarks: '',
    referenceRecords: '',
    auditAttachments: '',
    reportAttachments: '',
    auditComments: '',
    dueDateExtensionJustification: '',
  })


  //   /=======================

  const [progressArray, setProgressArray] = useState([progressItems[0].name]);
  const [signatureModal, setSignatureModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [keywordElements, setKeywordElements] = useState([]);
  const closeSignatureModal = () => setSignatureModal(false);

  function handleESignature(key, elements) {
    setKeyword(key);
    setKeywordElements(elements);
    for (let ele of elements) {
      let updatedItemIndex = progressItems.findIndex(
        (item) => item.name === ele
      );
      if (updatedItemIndex !== -1) {
        progressItems[updatedItemIndex].details = "Updated";
      } else {
        console.error('Item with name "Opened" not found.');
      }
    }
    setSignatureModal(true);
  }
  function signatureValue(key) {
    if (key) {
      if (keyword === "add") {
        addProgress(keywordElements);
      } else if (keyword === "remove") {
        removeProgress(keywordElements);
      } else {
        setProgressArray("Closed-Cancelled");
      }
    } else {
      alert("E-Signature Not Matched.");
    }
  }
  function addProgress(addEle) {
    for (let ele of addEle) {
      setProgressArray((prevArray) => [...prevArray, ele]);
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
          <div><strong> Record Name:&nbsp;</strong>External Audit Panel</div>
          <div><strong> Site:&nbsp;</strong>{site}</div>
          <div><strong> Current Status:&nbsp;</strong>Under Initiation</div>
          <div><strong> Initiated By:&nbsp;</strong>{externalAudit.initiator}</div>
        </div>

        <div className="inner-block">
          <div className="workflow-bar">
            <div className="workflow-top-block">
              <div className="head">Record Workflow</div>
              <div className="btn-bar">
                <button className="themeBtn">Audit Trail</button>
                <button className="themeBtn">Print</button>
                {progressArray.length === 1 && (
                  <>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("add", [progressItems[1].name])
                      }
                    >
                      Submit
                    </button>
                    <button
                      className="themeBtn"
                      onClick={() => handleESignature("closed", [])}
                    >
                      Cancel
                    </button>
                  </>
                )}
                {progressArray.length === 2 && (
                  <>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("add", [progressItems[2].name])
                      }
                    >
                      HOD Review Complete
                    </button>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("remove", [progressItems[1].name])
                      }
                    >
                      More Information Required
                    </button>
                  </>
                )}
                {progressArray.length === 3 && (
                  <>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("add", [progressItems[3].name])
                      }
                    >
                      Send to CFT Reviewers
                    </button>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("remove", [progressItems[2].name])
                      }
                    >
                      More Information Required
                    </button>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("add", [
                          progressItems[3].name,
                          progressItems[4].name,
                        ])
                      }
                    >
                      CFT Review Not Required
                    </button>
                  </>
                )}
                {progressArray.length === 4 && (
                  <>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("add", [progressItems[4].name])
                      }
                    >
                      Review Complete
                    </button>
                    <button
                      className="themeBtn"
                      onClick={() =>
                        handleESignature("remove", [
                          progressItems[2].name,
                          progressItems[3].name,
                        ])
                      }
                    >
                      Request More Info
                    </button>
                  </>
                )}
                {progressArray.length === 5 && (
                  <button
                    className="themeBtn"
                    onClick={() =>
                      handleESignature("add", [progressItems[5].name])
                    }
                  >
                    Implemented
                  </button>
                )}
                <button className="themeBtn">Exit</button>
              </div>
            </div>
            <div className="progress-block">
              {progressArray === "Closed-Cancelled" ? (
                <>
                  <div className="active">Opened</div>
                  <div className="active closed">Closed-Cancelled</div>
                </>
              ) : (
                progressItems.map((item) => (
                  <div
                    key={item.id}
                    className={
                      progressArray.includes(item.name) ? "active" : ""
                    }
                  >
                    {item.name}
                    {item.details && (
                      <div className="details">{item.details}</div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
        <div className="document-block">
          <div className="document-tabs">
            {formList.map((item, index) => (
              <div
                key={index}
                className={form === item ? "active" : ""}
                onClick={() => setForm(item)}
              >
                {item}
              </div>
            ))}
          </div>

          {form === formList[0] ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="form-flex">
                  <div className="group-input">
                    <label>Record Number</label>
                    <input type="text" value={externalAudit.recordNumber} disabled />
                  </div>
                  <div className="group-input">
                    <label>Site/Location Code</label>
                    <input type="text" value={externalAudit.site} disabled />
                  </div>
                  <div className="group-input">
                    <label>Initiator</label>
                    <input type="text" value={externalAudit.initiator} disabled />
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
                    <select value={externalAudit.assignedTo} onChange={(e) => setExternalAudit({ assignedTo: e.target.value })}>
                      <option value="">Select a value</option>
                      <option value="2">Shaleen Mishra</option>
                    </select>
                  </div>

                  <InputDate
                    label="Due Date"
                    enableDate="future"
                    isRequired="false"
                    value={externalAudit.dueDate}
                    returnDate={(date) => setExternalAudit({ dueDate: date })}
                  />
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
                  <textarea type="text" rows="2" value={externalAudit.shortDescription} onChange={(e) => setExternalAudit({ shortDescription: e.target.value })}></textarea>
                </div>

                <div className="group-input">
                  <label>Severity Level</label>
                  <select value={externalAudit.severityLevel} onChange={(e) => setExternalAudit({ severityLevel: e.target.value })}>
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
                      {externalAudit.initiatedThrough === 'others' &&
                        <div className="required"></div>
                      }
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

                <div className="group-input">
                  <label>
                    Description
                  </label>
                  <textarea type="text" rows="2" value={externalAudit.description} onChange={(e) => setExternalAudit({ description: e.target.value })}></textarea>
                </div>
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
                    value={auditPlanning.auditScheduleStartDate}
                    returnDate={(date) => setAuditPlanning({ auditScheduleStartDate: date })}
                  />
                  <InputDate
                    label="Audit Schedule End Date"
                    isRequired="true"
                    enableDate="future"
                    value={auditPlanning.auditScheduleEndDate}
                    returnDate={(date) => setAuditPlanning({ auditScheduleEndDate: date })}
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

                <div className="group-input">
                  <label>Comments (if any)</label>
                  <textarea value={auditPlanning.comments} onChange={(e) => setAuditPlanning({ comments: e.target.value })}></textarea>
                </div>
              </div>

            </div>
          ) : form === formList[2] ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="group-input">
                  <label>Lead Auditor</label>
                  <select value={auditPreparation.leadAuditor} onChange={(e) => setAuditPreparation({ leadAuditor: e.target.value })}>
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
                    <label> {auditPreparation.auditTeam === "Yes" && ''}Audit Team</label>
                    <MultiSelect
                      options={AuditTeam}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                      required={auditPreparation.auditTeam === "Yes"}
                      disabled={!auditPreparation.auditTeam === "Yes"}
                    />
                  </div>
                  <div className="group-input">
                    <label> {auditPreparation.auditee === "Yes" && ''} Auditee</label>
                    <MultiSelect
                      options={AuditTeam}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                      required={auditPreparation.auditee === "Yes"}
                      disabled={!auditPreparation.auditee === "Yes"}
                    />
                  </div>
                </div>

                <div className="group-input">
                  <label>
                    External Auditor Details
                  </label>
                  <textarea type="text" rows="2" value={auditPreparation.externalAuditorDetails} onChange={(e) => setAuditPreparation({ externalAuditorDetails: e.target.value })}></textarea>
                </div>

                <div className="group-input">
                  <label>
                    External Auditing Agency
                  </label>
                  <textarea type="text" rows="2" value={auditPreparation.externalAuditingAgency} onChange={(e) => setAuditPreparation({ externalAuditingAgency: e.target.value })}></textarea>
                </div>

                <div className="group-input">
                  <label>
                    Relevant Guidelines / Industry Standards
                  </label>
                  <textarea type="text" rows="2" value={auditPreparation.relevantGuidelines} onChange={(e) => setAuditPreparation({ relevantGuidelines: e.target.value })}></textarea>
                </div>

                <div className="group-input">
                  <label>
                    QA Comments
                  </label>
                  <textarea type="text" rows="2" value={auditPreparation.qaComments} onChange={(e) => setAuditPreparation({ qaComments: e.target.value })}></textarea>
                </div>
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
                  <select name="initiated_through" value={auditPreparation.auditCategory} onChange={(e) => setAuditPreparation({ auditCategory: e.target.value })}>
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
                  <input type="text" value={auditPreparation.supplierDetails} onChange={(e) => setAuditPreparation({ supplierDetails: e.target.value })} />
                </div>
                <div className="group-input">
                  <label>
                    Supplier/Vendor/Manufacturer Site
                  </label>
                  <input type="text" value={auditPreparation.supplierSite} onChange={(e) => setAuditPreparation({ supplierSite: e.target.value })} />
                </div>

                <div className="group-input">
                  <label>
                    Comments
                  </label>
                  <textarea type="text" rows="2" value={auditPreparation.comments} onChange={(e) => setAuditPreparation({ comments: e.target.value })}></textarea>
                </div>
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
                    value={auditExecution.auditStartDate}
                    returnDate={(date) => setAuditExecution({ auditStartDate: date })}
                  />
                  <InputDate
                    label="Audit End Date"
                    isRequired="true"
                    enableDate="future"
                    value={auditExecution.auditEndDate}
                    returnDate={(date) => setAuditExecution({ auditEndDate: date })}
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

                <div className="group-input">
                  <label>
                    Audit Comments
                  </label>
                  <textarea type="text" rows="2" value={auditExecution.auditComments} onChange={(e) => setAuditExecution({ auditComments: e.target.value })}></textarea>
                </div>
              </div>
            </div>
          ) : form === formList[4] ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="sub-head">Audit Response & Closure</div>

                <div className="group-input">
                  <label>
                    Remarks
                  </label>
                  <textarea type="text" rows="2" value={auditResponse.remarks} onChange={(e) => setAuditResponse({ remarks: e.target.value })}></textarea>
                </div>
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
                <div className="group-input">
                  <label>
                    Audit Comments
                  </label>
                  <textarea type="text" rows="2" value={auditResponse.auditComments} onChange={(e) => setAuditResponse({ auditComments: e.target.value })}></textarea>
                </div>
                <div className="sub-head">Extension Details</div>

                <div className="group-input">
                  <label>
                    Due Date Extension Justification
                  </label>
                  <textarea type="text" rows="2" value={auditResponse.dueDateExtensionJustification} onChange={(e) => setAuditResponse({ dueDateExtensionJustification: e.target.value })}></textarea>
                </div>
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
                    <strong>Audit Scheduled On:&nbsp;</strong>15 Jan, 2023
                    11:00 PM
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
                    <strong>Audit Preparation Completed By:&nbsp;</strong>
                    Shaleen Mishra
                  </div>
                  <div>
                    <strong>Audit Preparation Completed On:&nbsp;</strong>15
                    Jan, 2023 11:00 PM
                  </div>
                </div>
                <div className="activity-log-field">
                  <div>
                    <strong>
                      Audit Migration More Info Required By:&nbsp;
                    </strong>
                    Shaleen Mishra
                  </div>
                  <div>
                    <strong>
                      Audit Migration More Info Required On:&nbsp;
                    </strong>
                    15 Jan, 2023 11:00 PM
                  </div>
                </div>
                <div className="activity-log-field">
                  <div>
                    <strong>Audit Observation Submitted By:&nbsp;</strong>
                    Shaleen Mishra
                  </div>
                  <div>
                    <strong>Audit Observation Submitted On:&nbsp;</strong>15
                    Jan, 2023 11:00 PM
                  </div>
                </div>
                <div className="activity-log-field">
                  <div>
                    <strong>Audit Lead More Info Required By:&nbsp;</strong>
                    Shaleen Mishra
                  </div>
                  <div>
                    <strong>Audit Lead More Info Required On:&nbsp;</strong>15
                    Jan, 2023 11:00 PM
                  </div>
                </div>
                <div className="activity-log-field">
                  <div>
                    <strong>Audit Response Completed By:&nbsp;</strong>Shaleen
                    Mishra
                  </div>
                  <div>
                    <strong>Audit Response Completed On:&nbsp;</strong>15 Jan,
                    2023 11:00 PM
                  </div>
                </div>
                <div className="activity-log-field">
                  <div>
                    <strong>Response Feedback Verified By:&nbsp;</strong>
                    Shaleen Mishra
                  </div>
                  <div>
                    <strong>Response Feedback Verified On:&nbsp;</strong>15
                    Jan, 2023 11:00 PM
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div
          className="button-block"
          style={
            asideWorkFlow || asideFamilyTree
              ? { width: "calc(100% - 300px)" }
              : { width: "100%" }
          }
        >
          <button className="themeBtn">Save</button>
          <button className="themeBtn">Back</button>
          <button className="themeBtn">Next</button>
          <button className="themeBtn">Exit</button>
        </div>

      </div>
      {/* </div> */}
    </>
  );
}

export default ExternalAuditPanel;
