import React, { useReducer } from "react";
import { useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
import InputDate from "../../../components/DataFields/InputDate";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../../components/DateReturners";
import {
  formList,
  workFlow,
  FunctionName,
  docFile,
  site,
  currentYear,
} from "./ActionItemsFunctions";
import "../ConfigForms.css";

function ActionItems() {
  const [form, setForm] = useState(formList[0]);
  const [selected, setSelected] = useState([]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);

  const [generalInformation, setGeneralInformation] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      recordNumber: `${site}/AI/${currentYear}/000001`,
      site: site,
      initiator: "Amit Guru",
      dateOfInitiation: CurrentDate(),
      assignedTo: "",
      dueDate: "",  
      shortDescription: "",
      Description: "",
      ResponsibleDepartment: "",
      ResponsibleDepartmentOthers: "",
      ActionItemRelatedRecords: '',
      HodPersons: "",
      severityLevel: "",
    }
  );

  const [postCompletion, setPostCompletion] = useReducer((prev, next) => ({
    ...prev, ...next
}), {
    ActualStartDate: '',
    ActualEndDate: '',
    Comments: '',
    Actiontaken: '',
  
})

const [actionApproval, setactionApproval] = useReducer((prev, next) => ({
  ...prev, ...next
}), {
  QAReviewComments: '',
  DueDateExtension: '',
 
})

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
              {workFlow.map((item, index) => (
                <div
                  className={
                    index === 0
                      ? "green-state"
                      : index === workFlow.length - 1
                      ? "red-state"
                      : ""
                  }
                >
                  {item}
                  {index !== workFlow.length - 1 && (
                    <img src="/down.gif" alt="..." />
                  )}
                </div>
              ))}
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
                        value={generalInformation.recordNumber}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Site/Location Code</label>
                      <input
                        type="text"
                        value={generalInformation.site}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Initiator</label>
                      <input
                        type="text"
                        value={generalInformation.initiator}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Date of Initiation</label>
                      <input
                        type="text"
                        value={generalInformation.dateOfInitiation}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Assigned To</label>
                      <div className="instruction">&nbsp;</div>
                      <select
                        value={generalInformation.assignedTo}
                        onChange={(e) =>
                          setGeneralInformation({ assignedTo: e.target.value })
                        }
                      >
                        <option value="">-- Select --</option>
                        <option value="amit_guru">Amit Guru</option>
                        <option value="shaleen_mishra">Shaleen Mishra</option>
                        <option value="vikas_prajapati">Vikas Prajapati</option>
                        <option value="anshul_patel">Anshul Patel</option>
                        <option value="amit_patel">Amit Patel</option>
                        <option value="madhulika_mishra">
                          Madhulika Mishra
                        </option>
                      </select>
                    </div>
                    <InputDate
                      label="Due Date"
                      instruction="Please mention expected date of completion."
                      isRequired="true"
                      enableDate="future"
                      value={generalInformation.dueDate}
                      returnDate={(date) =>
                        setGeneralInformation({ dueDate: date })
                      }
                    />
                  </div>
                  <div className="group-input">
                    <label>
                      <div className="required"></div>Short Description
                    </label>
                    <div className="instruction">
                      Please mention brief summary
                    </div>
                    <textarea
                      value={generalInformation.shortDescription}
                      onChange={(e) =>
                        setGeneralInformation({
                          shortDescription: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="group-input">
                    <label>Severity Level</label>
                    
                    <select 
                        value={generalInformation.severityLevel}
                        onChange={(e) => setGeneralInformation({ severityLevel: e.target.value })}>

                      <option value="Select">-- Select --</option>
                      <option value="Major">Major</option>
                      <option value="Minor">Minor</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>
                  <RelatedRecords label="Action Item Related Records" />
                  <div className="group-input">
                    <label>
                      {generalInformation.HodPersons === "Yes" && (
                        <div className="required"></div>
                      )}
                      HOD Persons
                    </label>
                    <MultiSelect
                      options={FunctionName}
                      value={selected}
                      onChange={setSelected}
                      labelledBy="Select"
                      required={generalInformation.HodPersons === "Yes"}
                      disabled={!generalInformation.HodPersons === "Yes"}
                    />

                    <div className="group-input">
                      <label> Description</label>
                      <div className="instruction">
                        Please mention brief summary
                      </div>
                      <textarea
                        value={generalInformation.Description}
                        onChange={(e) =>
                          setGeneralInformation({ Description: e.target.value })
                        }
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Responsible Department</label>
                      <div className="instruction">
                        Please select related information
                      </div>
                      <select
                        value={generalInformation.ResponsibleDepartment}
                        onChange={(e) =>
                          setGeneralInformation({
                            ResponsibleDepartment: e.target.value,
                          })
                        }
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
                        {generalInformation.ResponsibleDepartment === "others" && (
                          <div className="required"></div>
                        )}
                        Other
                      </label>
                      <textarea
                        value={generalInformation.ResponsibleDepartmentOthers}
                        onChange={(e) =>
                          setGeneralInformation({
                            ResponsibleDepartmentOthers: e.target.value,
                          })
                        }
                        required={
                          generalInformation.ResponsibleDepartment === "others"
                        }
                      ></textarea>
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
                 
                  <div className="group-input">
                      <label>Action Taken</label>
                      <textarea
                        value={postCompletion.Actiontaken}
                        onChange={(e) =>
                          setPostCompletion({ Actiontaken : e.target.value })
                        }
                      ></textarea>
                  </div>
                  <div className="form-flex">
                    
                    <InputDate
                      label="Actual Start Date"
                      instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={postCompletion.ActualStartDate}
                      returnDate={(date) =>
                        setPostCompletion({ ActualStartDate: date })
                      }
                    />

                   
                    <InputDate
                      label="Actual End Date"
                      instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={postCompletion.ActualEndDate}
                      returnDate={(date) =>
                        setPostCompletion({ ActualEndDate: date })
                      }
                    />

                  </div>

                   <div className="group-input">
                      <label>Comments</label>
                      <div className="instruction">
                        Please mention brief summary
                      </div>
                      <textarea
                        value={postCompletion.Comments}
                        onChange={(e) =>
                          setPostCompletion({ Comments: e.target.value })
                        }
                      ></textarea>
                    </div>
                </div>
              </div>
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Action Approval</div>
                  
                  <div className="group-input">
                      <label>QA Review Comments</label>
                      <div className="instruction">
                        Please mention brief summary
                      </div>
                      <textarea
                        value={actionApproval.QAReviewComments}
                        onChange={(e) =>
                          setactionApproval({ QAReviewComments: e.target.value })
                        }
                      ></textarea>
                    </div>
                  <div className="sub-head">Extension Justification</div>
                
                  <div className="group-input">
                      <label>Due Date Extension Justification</label>
                      <div className="instruction">
                        Please mention brief summary
                      </div>
                      <textarea
                        value={actionApproval.DueDateExtension}
                        onChange={(e) =>
                          setactionApproval({ DueDateExtension: e.target.value })
                        }
                      ></textarea>
                    </div>
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
                      <strong>Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
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
                      <strong>Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
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
