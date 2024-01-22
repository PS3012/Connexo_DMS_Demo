import React, { useReducer } from "react";
import { useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import { MultiSelect } from "react-multi-select-component";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";
import RelatedRecords from "../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../components/DateReturners";
import ESignatureModal from "../../components/Modals/ESignatureModal/ESignatureModal";
import "./DocumentPanel.css";
import HeaderBottom from "../../components/Header/HeaderBottom";

function DocumentPanel() {
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

  const progressItems = [
    {
      id: 1,
      name: "Opened",
      details: "Document is opened at 10 Jan, 2023 11:12PM",
    },
    {
      id: 2,
      name: "HOD Review",
      details: "Action Item child can be created at this stage.",
    },
    { id: 3, name: "Pending QA Review", details: "" },
    { id: 4, name: "CFT/SME Review", details: "" },
    {
      id: 5,
      name: "Pending Change Implementation",
      details: "New Document child can be created at this stage.",
    },
    { id: 6, name: "Closed - Done", details: "" },
  ];
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
                      <option value="14">Environment, Health and Safety</option>
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
                <FlexField label="Comments" instruction="" isRequired="false" />
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

export default DocumentPanel;
