import React, { useReducer } from "react";
import { useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";
import RelatedRecords from "../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../components/DateReturners";
import "./ConfigForms.css";

function ActionItems() {
  const formList = [
    "General Information",
    "Post Completion",
    "Action Approval",
    "Activity Log",
  ];
  const [internalAudit, setInternalAudit] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      initiatorGroup: "",
      initiatedThrough: "",
      typeOfAudit: "",
    }
  );
  const [form, setForm] = useState(formList[0]);
  const [selected, setSelected] = useState([]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);
  const FunctionName = [
    { label: "Amit Guru", value: "Amit Guru" },
    { label: "Shaleen Mishra", value: "Shaleen Mishra" },
    { label: "Vikas Prajapati", value: "Vikas Prajapati" },
    { label: "Anshul Patel", value: "Anshul Patel" },
    { label: "Madhulika Mishra", value: "Madhulika Mishra" },
    { label: " Akash Asthana", value: " Akash Asthana" },
    { label: " Jim Kim", value: " Jim Kim" },
  ];

  const docFile = [
    {
      label: "File attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },

  ];

  return (
    <>
      <div
        id="main-form-container"
        style={
          asideWorkFlow || asideFamilyTree ? { padding: "0 0 0 300px" } : {}
        }
      >
        {asideWorkFlow && (
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
              <div className="red-state">Closed- Cancelled</div>
            </div>
          </div>
        )}

        {asideFamilyTree && (
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
        )}

        <div id="config-form-document-page">
          <HeaderTop />

          <div className="top-block">
            <div>
              <strong> Record Name:&nbsp;</strong>Action Items
            </div>
            <div>
              <strong> Site:&nbsp;</strong>EHS-North America
            </div>
            <div>
              <strong> Current Status:&nbsp;</strong>Under Initiation
            </div>
            <div>
              <strong> Initiated By:&nbsp;</strong>Shaleen Mishra
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
                  <div className="sub-head">General Information</div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Record Number</label>
                      <input
                        type="text"
                        value="Jordan/IA/2024/00000001"
                        disabled
                      />
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
                      <label>Assigned To</label>
                      <select
                        id="select-state"
                        placeholder="Select..."
                        name="assign_id"
                      >
                        <option value="">Select a value</option>
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
                    <InputDate
                      label="Due Date"
                      enableDate="future"
                      isRequired="false"
                    />
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
                  <RelatedRecords label="Action Item Related Records" />
                  <div className="group-input">
                    <label>HOD Persons</label>
                    <MultiSelect

                      options={FunctionName}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                    />

                    <FlexField
                      label="Description"
                      instruction=""
                      isRequired="false"
                    />
                  </div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Responsible Department</label>

                      <select
                        value={internalAudit.initiatedThrough}
                        onChange={(e) =>
                          setInternalAudit({ initiatedThrough: e.target.value })
                        }
                        name="departments"
                      >
                        <option value="">Enter Your Selection Here</option>
                        <option value="1">Quality Assurance-CQA</option>
                        <option value="2">Research and development</option>
                        <option value="3">Regulatory Science</option>
                        <option value="4">Supply Chain Management</option>
                        <option value="5">Finance</option>
                        <option value="6">QA-Digital</option>
                        <option value="7">Central Engineering</option>
                        <option value="8">Projects</option>
                        <option value="9">Marketing</option>
                        <option value="10">QCAT</option>
                        <option value="11">Marketing</option>
                        <option value="12">GMP Pilot Plant</option>
                        <option value="13">
                          Manufacturing Sciences and Technology
                        </option>
                        <option value="14">
                          Environment, Health and Safety
                        </option>
                        <option value="15">
                          Business Relationship Management
                        </option>
                        <option value="16">National Regulatory Affairs</option>
                        <option value="17">HR</option>
                        <option value="18">Admin</option>
                        <option value="19">Information Technology</option>
                        <option value="20">
                          Program Management QA Analytical (Q13)
                        </option>
                        <option value="21">QA Analytical (Q8)</option>
                        <option value="22">QA Packaging Development</option>
                        <option value="23">QA Engineering</option>
                        <option value="24">DS Quality Assurance</option>
                        <option value="25">Quality Control (Q13)</option>
                        <option value="26">Quality Control (Q8)</option>
                        <option value="27">Quality Control (Q15)</option>
                        <option value="28">QC Microbiology (B1)</option>
                        <option value="29">QC Microbiology (B2)</option>
                        <option value="30">Production (B1)</option>
                        <option value="31">Production (B2)</option>
                        <option value="32">Production (Packing)</option>
                        <option value="33">Production (Devices)</option>
                        <option value="34">Production (DS)</option>
                        <option value="35">
                          Engineering and Maintenance (B1)
                        </option>
                        <option value="36">
                          Engineering and Maintenance (B2)
                        </option>
                        <option value="37">
                          Engineering and Maintenance (W20)
                        </option>
                        <option value="38">
                          Device Technology Principle Management
                        </option>
                        <option value="39">Production (82)</option>
                        <option value="40">Production (Packing)</option>
                        <option value="41">Production (Devices)</option>
                        <option value="42">Production (DS)</option>
                        <option value="43">
                          Engineering and Maintenance (B1)
                        </option>
                        <option value="44">
                          Engineering and Maintenance (B2) Engineering and
                          Maintenance (W20)
                        </option>
                        <option value="45">
                          Device Technology Principle Management
                        </option>
                        <option value="46">Warehouse(DP)</option>
                        <option value="47">Drug safety</option>
                        <option value="48">Visual Inspection</option>
                        <option value="others">Others</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>
                        {internalAudit.initiatedThrough === "others" && (
                          <div className="required"></div>
                        )}
                        Other
                      </label>
                      <input
                        type="text"
                        required={internalAudit.initiatedThrough === "others"}
                      ></input>
                    </div>
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
                  <div className="sub-head">Post Completion</div>
                  <FlexField
                    label="Action Taken"
                    instruction=""
                    isRequired="false"
                  />
                  <div className="form-flex">
                    <InputDate
                      label="Actual Start Date"
                      isRequired="false"
                      enableDate="future"
                    />
                    <InputDate
                      label="Actual End Date"
                      isRequired="false"
                      enableDate="future"
                    />
                  </div>
                  <FlexField
                    label="Comments"
                    instruction=""
                    isRequired="false"
                  />
                </div>
              </div>
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Action Approval</div>
                  <FlexField
                    label="QA Review Comments"
                    instruction=""
                    isRequired="false"
                  />
                  <div className="sub-head">Extension Justification</div>
                  <FlexField
                    label="Due Date Extension Justification"
                    instruction=""
                    isRequired="false"
                  />


                </div>
              </div>
            ) : form === formList[3] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Electronic Signatures</div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Submitted By:&nbsp;</strong>
                      Shaleen Mishra
                    </div>
                    <div>
                      <strong>Submitted On:&nbsp;</strong>15
                      Jan, 2023 11:00 PM
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
                      <strong>Completed By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Completed On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
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

        <div className="sticky-buttons">
          <div
            onClick={() => {
              setAsideWorkFlow(!asideWorkFlow);
              setAsideFamilyTree(false);
            }}
          >
            <svg
              width="18"
              height="24"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34M332.1 128H256V51.9zM48 464V48h160v104c0 13.3 10.7 24 24 24h104v288zm220.1-208c-5.7 0-10.6 4-11.7 9.5c-20.6 97.7-20.4 95.4-21 103.5c-.2-1.2-.4-2.6-.7-4.3c-.8-5.1.3.2-23.6-99.5c-1.3-5.4-6.1-9.2-11.7-9.2h-13.3c-5.5 0-10.3 3.8-11.7 9.1c-24.4 99-24 96.2-24.8 103.7c-.1-1.1-.2-2.5-.5-4.2c-.7-5.2-14.1-73.3-19.1-99c-1.1-5.6-6-9.7-11.8-9.7h-16.8c-7.8 0-13.5 7.3-11.7 14.8c8 32.6 26.7 109.5 33.2 136c1.3 5.4 6.1 9.1 11.7 9.1h25.2c5.5 0 10.3-3.7 11.6-9.1l17.9-71.4c1.5-6.2 2.5-12 3-17.3l2.9 17.3c.1.4 12.6 50.5 17.9 71.4c1.3 5.3 6.1 9.1 11.6 9.1h24.7c5.5 0 10.3-3.7 11.6-9.1c20.8-81.9 30.2-119 34.5-136c1.9-7.6-3.8-14.9-11.6-14.9h-15.8z"
              />
            </svg>
          </div>
          <div
            onClick={() => {
              setAsideFamilyTree(!asideFamilyTree);
              setAsideWorkFlow(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#ffffff"
                d="M25.01 49v46H103V49zM153 49v46h78V49zm128 0v46h78V49zm128 0v46h78V49zM55.01 113v64H119v46h18v-46h64v-64h-18v46H73.01v-46zM311 113v64h64v46h18v-46h64v-64h-18v46H329v-46zM89.01 241v46H167v-46zM345 241v46h78v-46zm-226 64v48h128v46h18v-46h128v-48h-18v30H137v-30zm98 112v46h78v-46z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActionItems;
