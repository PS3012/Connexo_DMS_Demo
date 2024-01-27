import React, { useReducer } from "react";
import { useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
import InputDate from "../../../components/DataFields/InputDate";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../../components/DateReturners";
import ESignatureModal from "../../../components/Modals/ESignatureModal/ESignatureModal";
import "../DocumentPanel.css";
import HeaderBottom from "../../../components/Header/HeaderBottom";
import {formList, FunctionName, docFile, progressItems, site, currentYear,} from "./ActionItemsPanelFunctions";

function ActionItemsPanel() {
  const [form, setForm] = useState(formList[0]);
  const [selected, setSelected] = useState([]);
  const [progressArray, setProgressArray] = useState([progressItems[0].name]);
  const [signatureModal, setSignatureModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [keywordElements, setKeywordElements] = useState([]);

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
          <div>
            <strong> Record Name:&nbsp;</strong>ActionItems Panel
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

                      <option value="">-- Select --</option>
                      <option value="">Major</option>
                      <option value="">Minor</option>
                      <option value="">Critical</option>
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


        <div className="button-block" style={{ width: "100%" }}>
            <button className="themeBtn">Save</button>
            <button className="themeBtn">Back</button>
            <button className="themeBtn">Next</button>
            <button className="themeBtn">Exit</button>
          </div>
      </div>

      {signatureModal && (
        <ESignatureModal
          closeModal={closeSignatureModal}
          returnSignature={signatureValue}
        />
      )}
    </>
  );
}

export default ActionItemsPanel;
