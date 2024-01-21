import HeaderBottom from "../../components/Header/HeaderBottom";
import ESignatureModal from "../../components/Modals/ESignatureModal/ESignatureModal";
import React from "react";
import { useState, useReducer } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";
import { CurrentDate } from "../../components/DateReturners";
import "./DocumentPanel.css";

function ObservationPanel() {
  const formList = [
    "Observation",
    "CAPA Plan",
    "Impact Analysis",
    "Summary",
    "Signatures",
  ];

  const [form, setForm] = useState(formList[0]);
  const [changeControl, setChangeControl] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      severityRate: 0,
      occurrence: 0,
      detection: 0,
    }
  );

  const actionPlan = {
    label: "Action Plan",
    instruction: <div></div>,
    required: false,
    columnList: [
      { id: "2.1.1.1", name: "Action", type: "text" },
      { id: "2.1.1.2", name: "Responsible", type: "text" },
      { id: "2.1.1.3", name: "Deadline", type: "text" },
      { id: "2.1.1.4", name: "Item Status", type: "text" },
    ],
  };

  const docFile = [
    {
      label: "Attached Files",
      instruction: "Please Attach all relevant or supporting documents",
      required: false,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Related Obsevations",
      instruction: "Please Attach all relevant or supporting documents",
      required: false,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Attached Files",
      instruction: "Please Attach all relevant or supporting documents",
      required: false,
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
            <strong> Record Name:&nbsp;</strong>ObservationPanel
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
                      <label>Division Code</label>
                      <input type="text" value="Jordan" disabled />
                    </div>
                    <div className="group-input">
                      <label>Originator</label>
                      <input type="text" value="Amit Guru" disabled />
                    </div>
                    <div className="group-input">
                      <label>Date Opened</label>
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
                      <div className="required"></div>
                      Short Description
                    </label>
                    <input type="text" />
                  </div>
                  <div className="sub-head">Observation Details</div>

                  <div className="form-flex">
                    <div className="group-input">
                      <label>Grading</label>
                      <select name="grading">
                        <option value="">-- Select --</option>
                        <option value="1">Recommendation</option>
                        <option value="2">Major</option>
                        <option value="3">Minor</option>
                        <option value="4">Critical</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>Category Observation</label>
                      <select name="category_observation">
                        <option value="">-- Select --</option>
                        <option title="Case Report Form (CRF)" value="1">
                          Case Report Form (CRF)
                        </option>
                        <option title="Clinical Database" value="2">
                          Clinical Database
                        </option>
                        <option title="Clinical Trial Protocol" value="3">
                          Clinical Trial Protocol
                        </option>
                        <option title="Clinical Trial Report" value="4">
                          Clinical Trial Report
                        </option>
                        <option title="Compliance" value="5" selected="">
                          Compliance
                        </option>
                        <option title="Computerized systems" value="6">
                          Computerized systems
                        </option>
                        <option title="Conduct of Study" value="7">
                          Conduct of Study
                        </option>
                        <option title="Data Accuracy / SDV" value="8">
                          Data Accuracy / SDV
                        </option>
                        <option title="Documentation" value="9">
                          Documentation
                        </option>
                        <option
                          title="Essential Documents (TMF/ISF)"
                          value="10"
                        >
                          Essential Documents (TMF/ISF)
                        </option>
                        <option title="Ethics Committee (IEC / IRB)" value="11">
                          Ethics Committee (IEC / IRB)
                        </option>
                        <option title="Facilities / Equipment" value="12">
                          Facilities / Equipment
                        </option>
                        <option title="Miscellaneous" value="13">
                          Miscellaneous
                        </option>
                        <option title="Monitoring" value="14">
                          Monitoring
                        </option>
                        <option
                          title="Organization and Responsibilities"
                          value="16"
                        >
                          Organization and Responsibilities
                        </option>
                        <option title="Periodic Safety Reporting" value="17">
                          Periodic Safety Reporting
                        </option>
                        <option title="Protocol Compliance" value="18">
                          Protocol Compliance
                        </option>
                        <option
                          title="Qualification and Training of Staff"
                          value="19"
                        >
                          Qualification and Training of Staff
                        </option>
                        <option title="Quality Management System" value="20">
                          Quality Management System
                        </option>
                        <option title="Regulatory Requirements" value="25">
                          Regulatory Requirements
                        </option>
                        <option title="Reliability of Data" value="26">
                          Reliability of Data
                        </option>
                        <option title="Safety Reporting" value="27">
                          Safety Reporting
                        </option>
                        <option title="Source Documents" value="28">
                          Source Documents
                        </option>
                        <option title="Subject Diary(ies)" value="29">
                          Subject Diary(ies)
                        </option>
                        <option title="Informed Consent Form" value="30">
                          Informed Consent Form
                        </option>
                        <option title="Subject Questionnaire(s)" value="31">
                          Subject Questionnaire(s)
                        </option>
                        <option title="Supporting Procedures" value="32">
                          Supporting Procedures
                        </option>
                        <option
                          title="Test Article and Accountability"
                          value="33"
                        >
                          Test Article and Accountability
                        </option>
                        <option title="Trial Master File (TMF)" value="34">
                          Trial Master File (TMF)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="group-input">
                    <label>Referenced Guideline</label>
                    <input type="text" />
                  </div>
                  <FlexField
                    label="Description"
                    instruction=""
                    isRequired="false"
                  />

                  <div className="sub-head">Further Information</div>

                  <div className="group-input">
                    <Grid
                      label={docFile[0].label}
                      required={docFile[0].required}
                      instruction={docFile[0].instruction}
                      columnList={docFile[0].columnList}
                    />
                  </div>
                  <InputDate
                    label="Recomendation Date Due for CAPA"
                    enableDate="future"
                    isRequired="false"
                  />

                  <FlexField
                    label="Non Compliance"
                    instruction=""
                    isRequired="false"
                  />
                  <FlexField
                    label="Recommended Action"
                    instruction=""
                    isRequired="false"
                  />

                  <div className="group-input">
                    <Grid
                      label={docFile[1].label}
                      required={docFile[1].required}
                      instruction={docFile[1].instruction}
                      columnList={docFile[1].columnList}
                    />
                  </div>
                </div>
              </div>
            ) : form === formList[1] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">CAPA Plan Details</div>
                  <div className="form-flex">
                    <InputDate
                      label="Date Response Due"
                      isRequired="false"
                      enableDate="future"
                    />
                    <InputDate
                      label="Date Due"
                      isRequired="false"
                      enableDate="future"
                    />

                    <div className="group-input">
                      <label>Assigned To</label>
                      <select
                        id="select-state"
                        placeholder="Select..."
                        name="assign_id"
                      >
                        <option value="">-Select-</option>
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

                    <div className="group-input">
                      <label>CRO/Vendor</label>
                      <select
                        id="select-state"
                        placeholder="Select..."
                        name="assign_id"
                      >
                        <option value="">-Select-</option>
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
                  </div>

                  <Grid
                    label={actionPlan.label}
                    required={actionPlan.required}
                    instruction={actionPlan.instruction}
                    columnList={actionPlan.columnList}
                  />

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
                  <div className="sub-head">Impact Analysis</div>
                  <div className="group-input">
                    <label>Impact</label>
                    <select name="impact">
                      <option value="">-- Select --</option>
                      <option value="1">High</option>
                      <option value="2">Medium</option>
                      <option value="3">Low</option>
                      <option value="4">None</option>
                    </select>
                  </div>
                  <FlexField
                    label="Impact Analysis"
                    instruction=""
                    isRequired="false"
                  />
                  <div className="sub-head">Risk Analysis</div>

                  <div className="form-flex">
                    <div className="group-input">
                      <label>Severity Rate</label>
                      <select
                        name="severity"
                        value={changeControl.severityRate}
                        onChange={(e) =>
                          setChangeControl({ severityRate: e.target.value })
                        }
                      >
                        <option value="0">-- Select --</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>Occurrence</label>
                      <select
                        name="Occurrence"
                        value={changeControl.occurrence}
                        onChange={(e) =>
                          setChangeControl({ occurrence: e.target.value })
                        }
                      >
                        <option value="0">-- Select --</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>Detection</label>
                      <select
                        name="Detection"
                        value={changeControl.detection}
                        onChange={(e) =>
                          setChangeControl({ detection: e.target.value })
                        }
                      >
                        <option value="0">-- Select --</option>
                        <option value="1">Low</option>
                        <option value="2">Medium</option>
                        <option value="3">High</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>RPN</label>
                      <div className="instruction">Auto - Calculated</div>
                      <input
                        type="text"
                        name="RPN"
                        value={
                          changeControl.severityRate *
                          changeControl.occurrence *
                          changeControl.detection
                        }
                        disabled
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : form === formList[3] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Action Summary</div>
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
                    label="Action Taken"
                    instruction=""
                    isRequired="false"
                  />

                  {/* <Grid
                    label={docFile[4].label}
                    required={docFile[4].required}
                    instruction={docFile[4].instruction}
                    columnList={docFile[4].columnList}
                  /> */}
                  {/* <Grid
                    label={docFile[5].label}
                    required={docFile[5].required}
                    instruction={docFile[5].instruction}
                    columnList={docFile[5].columnList}
                  /> */}
                  {/* <FlexField
                    label="Audit Comments"
                    instruction=""
                    isRequired="false"
                  /> */}
                  <div className="sub-head">Response Summary</div>
                  <div className="form-flex">
                    <InputDate
                      label="Date Rsponse Due"
                      isRequired="false"
                      enableDate="future"
                    />
                    <InputDate
                      label="Date of Response"
                      isRequired="false"
                      enableDate="future"
                    />
                  </div>
                  <div className="group-input">
                    <Grid
                      label={docFile[2].label}
                      required={docFile[2].required}
                      instruction={docFile[2].instruction}
                      columnList={docFile[2].columnList}
                    />
                  </div>
                  <div className="group-input">
                    <label>Related URL</label>
                    <input type="text" />
                  </div>

                  <FlexField
                    label="Response Summary"
                    instruction=""
                    isRequired="false"
                  />
                </div>
              </div>
            ) : form === formList[4] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Electronic Signatures</div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Completed By:&nbsp;</strong>
                      Shaleen Mishra
                    </div>
                    <div>
                      <strong>Completed On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>QA Approved By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>QA Approved On:&nbsp;</strong>15 Jan, 2023 11:00
                      PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Final Approval By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Final Approval On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
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

export default ObservationPanel;
