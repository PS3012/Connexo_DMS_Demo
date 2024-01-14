import React from "react";
import { useState } from "react";
import "./ConfigForms.css";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
function ExternalAudit() {
  const [form, setForm] = useState("General Information");
  const [typeOfChange, setTypeOfChange] = useState(0);
  const [selected, setSelected] = useState([]);
  const [groupComment, setGroupComment] = useState(0);
  const RelatedRecords = [
    { label: "Plant 1", value: "Plant 1" },
    { label: "QA", value: "QA" },
    { label: "QC", value: "QC" },
    { label: "MFG", value: "MFG" },
    { label: "Corporate", value: "Corporate" },
    { label: "Microbiology", value: "Microbiology" },
    { label: "Others", value: "Others" },
  ];

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

  const ReferenceRecord = [
    { label: "KSA/IA/2024/0003", value: "KSA/IA/2024/0003" },
    { label: "KSA/IA/2024/0004", value: "KSA/IA/2024/0004" },
    { label: "KSA/IA/2024/0005", value: "KSA/IA/2024/0005" },
    { label: "KSA/IA/2024/0006", value: "KSA/IA/2024/0006" },
    { label: "KSA/IA/2024/0007", value: "KSA/IA/2024/0007" },
    { label: "KSA/IA/2024/0008", value: "KSA/IA/2024/0008" },
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
        { id: "2.1.1.6", name: "Severity Level", type: "text" },
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

  return (
    <>
      <HeaderTop />

      <div id="config-form-document-page">
        <div className="top-block">
          <div className="content">
            <b> Site Division/Project :</b> India / External Audit
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
              className={form === " Audit Planning" ? "active" : ""}
              onClick={() => setForm(" Audit Planning")}
            >
              Audit Planning
            </div>

            <div
              className={form === "Audit Preparation" ? "active" : ""}
              onClick={() => setForm("Audit Preparation")}
            >
              Audit Preparation
            </div>

            <div
              className={form === "Audit Execution" ? "active" : ""}
              onClick={() => setForm("Audit Execution")}
            >
              Audit Execution
            </div>

            <div
              className={form === "Audit Response & Closure" ? "active" : ""}
              onClick={() => setForm("Audit Response & Closure")}
            >
              Audit Response & Closure
            </div>

            <div
              className={form === "Activity Log" ? "active" : ""}
              onClick={() => setForm("Activity Log")}
            >
              Activity Log
            </div>
          </div>

          {form === "General Information" ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>Record Number</b>
                    </label>
                    <input
                      type="text"
                      value="Jordan/EA/2024/00000001"
                      disabled
                    />
                  </div>
                  <div className="group-input">
                    <label>
                      <b>Division Code</b>
                    </label>
                    <input type="text" value="Jordan" disabled />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Initiator</b>
                    </label>
                    <input type="text" value="Amit Guru" disabled />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Date of Initiation</b>
                    </label>
                    <input type="" value="10-Jan-2024" disabled />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Assigned To</b>
                      <span className="required">&nbsp;*</span>
                    </label>
                    <select
                      id="select-state"
                      className="form-control"
                      placeholder="Select..."
                      name="assign_to"
                    >
                      <option value="">Select a value</option>
                      <option value="2">Shaleen Mishra</option>
                    </select>{" "}
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Due Date</b>
                      <span className="required">&nbsp;*</span>
                    </label>
                    <div className="instruction">
                      Please mention expected date of completion
                    </div>
                    <input type="date" placeholder="" />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>
                        Initiator Group{" "}
                        <span className="required">&nbsp;*</span>
                      </b>
                    </label>
                    <input type="date" placeholder="" />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Initiator Group Code</b>
                    </label>
                    <input type="" value="" disabled />
                  </div>
                </div>

                <div className="group-input">
                  <label>
                    <b>
                      Short Description{" "}
                      <span className="required">&nbsp;*</span>
                    </b>
                  </label>
                  <div className="instruction">
                    Please mention brief summary
                  </div>
                  <textarea name="w3review" rows="4" cols="50"></textarea>
                </div>

                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>Initiated Through</b>
                    </label>
                    <div className="instruction">
                      Please select related information
                    </div>
                    <select name="initiated_through" className="form-control">
                      <option>Enter Your Selection Here</option>
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
                      <b>Other</b>
                    </label>
                    <div className="instruction">
                      Please select yes if it is has recurred in past six months
                    </div>
                    <textarea name="w3review"></textarea>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Type of Audit</b>
                    </label>
                    <div className="instruction">
                      Please select yes if it is has recurred in past six months
                    </div>
                    <select name="initiated_through" className="form-control">
                      <option>Enter Your Selection Here</option>
                      <option>R&D</option>
                      <option>GLP</option>
                      <option>GCP</option>
                      <option>GDP</option>
                      <option>GEP</option>
                      <option>ISO 17025</option>
                      <option>Others</option>
                    </select>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>If Other</b>
                    </label>
                    <textarea name="w3review"></textarea>
                  </div>
                </div>
                <div className="group-input">
                  <label>
                    <b>Initial Comments</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>

                <div className="group-input">
                  <label>
                    <b>Initial Attachment</b>
                  </label>
                  <div className="instruction">
                    Please Attach all relevant or supporting documents
                  </div>

                  <div className="adddocument-file">
                    <div className="adddocument-area">
                      <textarea name="w3review"></textarea>
                    </div>
                    <div className="add-button">
                      <div className="add-file">Add</div>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : form === " Audit Planning" ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>
                        Audit Schedule Start Date
                        <span className="required">&nbsp;*</span>
                      </b>
                    </label>
                    <input type="date" placeholder="" />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>
                        Audit Schedule End Date
                        <span className="required">&nbsp;*</span>
                      </b>
                    </label>
                    <input type="date" placeholder="" />
                  </div>
                </div>
                <Grid
                  label={AuditAgenda.label}
                  required={AuditAgenda.required}
                  instruction={AuditAgenda.instruction}
                  columnList={AuditAgenda.columnList}
                />
                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>Related Records</b>
                    </label>
                    <MultiSelect
                      options={RelatedRecords}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                    />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Function Name</b>
                    </label>
                    <MultiSelect
                      options={FunctionName}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                    />
                  </div>
                </div>
                <div className="group-input">
                  <label>
                    <b>
                      Product/Material Name
                      <span className="required">&nbsp;*</span>
                    </b>
                  </label>
                  <input type="text" placeholder="" />
                </div>
                <div className="group-input">
                  <label>
                    <b>
                      Comments(If Any)
                      <span className="required">&nbsp;*</span>
                    </b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>
              </div>
            </div>
          ) : form === "Audit Preparation" ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="group-input">
                  <label>
                    <b>Lead Auditor</b>
                  </label>

                  <select name="initiated_through" className="form-control">
                    <option>Enter Your Selection Here</option>
                    <option>Amit Guru</option>
                    <option>Amit Patel</option>
                    <option>Akash Asthana</option>
                    <option>Madhulika Mishra</option>
                    <option>Shaleen Mishra</option>
                  </select>
                </div>

                <div className="group-input">
                  <label>
                    <b>File Attachment</b>
                  </label>
                  <div className="instruction">
                    Please Attach all relevant or supporting documents
                  </div>

                  <div className="adddocument-file">
                    <div className="adddocument-area">
                      <textarea name="w3review"></textarea>
                    </div>
                    <div className="add-button">
                      <div className="add-file">Add</div>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                  </div>
                </div>

                <div className="group-input">
                  <Grid
                    label={ObservationFields[0].label}
                    required={ObservationFields[0].required}
                    instruction={ObservationFields[0].instruction}
                    columnList={ObservationFields[0].columnList}
                  />
                </div>
                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>Audit Team</b>
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
                      <b>Auditee</b>
                    </label>
                    <MultiSelect
                      options={AuditTeam}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                    />
                  </div>
                </div>
                <div className="group-input">
                  <label>
                    <b>External Auditor Details</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>

                <div className="group-input">
                  <label>
                    <b>External Auditing Agency</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>

                <div className="group-input">
                  <label>
                    <b>Relevant Guidelines / Industry Standards</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>
                <div className="group-input">
                  <label>
                    <b>QA Comments</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>
                <div className="group-input">
                  <label>
                    <b>Guideline Attachment</b>
                  </label>
                  <div className="instruction">
                    Please Attach all relevant or supporting documents
                  </div>
                  <div className="adddocument-file">
                    <div className="adddocument-area">
                      <textarea name="w3review"></textarea>
                    </div>
                    <div className="add-button">
                      <div className="add-file">Add</div>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                  </div>
                </div>

                <div className="group-input">
                  <label>
                    <b>Audit Category</b>
                  </label>
                  <select name="initiated_through" className="form-control">
                    <option>Enter Your Selection Here</option>
                    <option>Internal Audit/Self Inspection</option>
                    <option>Supplier Audit</option>
                    <option>Regulatory Audit</option>
                    <option>Consultant Audit</option>
                  </select>
                </div>

                <div className="group-input">
                  <label>
                    <b>Supplier/Vendor/Manufacturer Details</b>
                  </label>
                  <input type="text" />
                </div>

                <div className="group-input">
                  <label>
                    <b>Supplier/Vendor/Manufacturer Site</b>
                  </label>
                  <input type="text" />
                </div>
                <div className="group-input">
                  <label>
                    <b>Comments</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>
              </div>
            </div>
          ) : form === "Audit Execution" ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="sub-head">Audit Response</div>
                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>Audit Start Date</b>
                    </label>
                    <input type="date" placeholder="" />
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit End Date</b>
                    </label>
                    <input type="date" placeholder="" />
                  </div>
                </div>

                <div className="group-input">
                  <label>
                    <b>Audit Attachments</b>
                  </label>
                  <div className="instruction">
                    Please Attach all relevant or supporting documents
                  </div>
                  <div className="adddocument-file">
                    <div className="adddocument-area">
                      <textarea name="w3review"></textarea>
                    </div>
                    <div className="add-button">
                      <div className="add-file">Add</div>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                  </div>
                </div>
                <div className="group-input">
                  <label>
                    <b>
                      Audit Comments
                      <span className="required">&nbsp;*</span>
                    </b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>
              </div>
            </div>
          ) : form === "Audit Response & Closure" ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="sub-head">Audit Response & Closure</div>

                <div className="group-input">
                  <label>
                    <b>Remarks</b>
                  </label>
                  <textarea name="w3review"></textarea>
                </div>

                <div className="group-input">
                  <label>
                    <b>Reference Record</b>
                  </label>
                  <MultiSelect
                    options={ReferenceRecord}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                  />
                </div>
                <div className="group-input">
                  <label>
                    <b>Report Attachments</b>
                  </label>
                  <div className="instruction">
                    Please Attach all relevant or supporting documents
                  </div>
                  <div className="adddocument-file">
                    <div className="adddocument-area">
                      <textarea name="w3review"></textarea>
                    </div>
                    <div className="add-button">
                      <div className="add-file">Add</div>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                  </div>
                </div>

                <div className="group-input">
                  <label>
                    <b>Audit Attachments</b>
                  </label>
                  <div className="instruction">
                    Please Attach all relevant or supporting documents
                  </div>
                  <div className="adddocument-file">
                    <div className="adddocument-area">
                      <textarea name="w3review"></textarea>
                    </div>
                    <div className="add-button">
                      <div className="add-file">Add</div>
                      <input type="file" id="myFile" name="filename" />
                    </div>
                  </div>
                </div>

                <div className="group-input">
                  <label>
                    <b>Audit Comments</b>
                  </label>
                  <textarea></textarea>
                </div>

                <div className="group-input">
                  <label>
                    <b>Due Date Extension Justification</b>
                  </label>
                  <div className="instruction">
                    Please Mention justification if due date is crossed
                  </div>
                  <textarea name="w3review"></textarea>
                </div>
              </div>
            </div>
          ) : form === "Activity Log" ? (
            <div className="document-form">
              <div className="details-form-data">
                <div className="form-flex">
                  <div className="group-input">
                    <label>
                      <b>Audit Schedule By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Schedule On</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Cancelled By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Cancelled On</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Preparation Completed By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Preparation Completed On</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Mgr.more Info Reqd By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Mgr.more Info Reqd On</b>
                    </label>
                  </div>
                  <div className="group-input">
                    <label>
                      <b>Audit Observation Submitted By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Observation Submitted On</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Lead More Info Reqd By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Lead More Info Reqd On</b>
                    </label>
                  </div>
                  <div className="group-input">
                    <label>
                      <b>Audit Response Completed By</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Audit Response Completed On</b>
                    </label>
                  </div>
                  <div className="group-input">
                    <label>
                      <b>Response Feedback VerifiedBy</b>
                    </label>
                  </div>

                  <div className="group-input">
                    <label>
                      <b>Response Feedback VerifiedOn</b>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="button-block">
          <button className="themeBtn">Save</button>
          <button className="themeBtn">Back</button>
          <button className="themeBtn">Next</button>
          <button className="themeBtn">Exit</button>
        </div>
      </div>
    </>
  );
}

export default ExternalAudit;
