import HeaderBottom from "../../../components/Header/HeaderBottom";
import ESignatureModal from "../../../components/Modals/ESignatureModal/ESignatureModal";
import React from "react";
import { useState, useReducer } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import { CurrentDate } from "../../../components/DateReturners";
import "../DocumentPanel.css";
import {  formList, progressItems, actionPlan,  docFile,  site,  currentYear} from "./ObservationPanelFunctions";

function ObservationPanel() {


  const [form, setForm] = useState(formList[0]);
  const [generalInformation, setGeneralInformation] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      recordNumber: `${site}/OB/${currentYear}/000001`,
      site: site,
      originator: "Amit Guru",
      dateOfInitiation: CurrentDate(),
      assignedTo: "",
      dueDate: "",
      dateOpened: "",
      initiatorGroup: "",
      shortDescription: "",
      Description: "",
      attachedFiles: "",
      grading: "",
      referencedGuideline: "",
      categoryobservation: "",
      recomendationDateDueforCAPA: "",
      recommendedAction: "",
      relatedObsevations: "",
      nonCompliance: "",
      initiatedThrough: "",
      initiatedThroughOthers: "",
      severityLevel: "",
      repeat: "",
      repeatNature: "",
      riskLevel: "",
      divisionCode: "",
      natureOfChange: "",
      natureOfChangeOthers: "",
      initialAttachment: "",
      groupComment: "",
    }
  );

  const [cAPAPlan, setCAPAPlan] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      dateResponseDue: "",
      dateDue: "",
      assignedTo: "",
      cROVendor: "",
      actionPlan: "",
      comments: "",
    }
  );

  const [impactAnalysis, setImpactAnalysis] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      impact: "",
      impactAnalysis: "",
      severityRate: "",
      occurrence: "",
      detection: "",
    }
  );

  const [summary, setSummary] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      actualStartDate: "",
      actualEndDate: "",
      actionTaken: "",
      dateRsponseDue: "",
      dateofResponse: "",
      attachedFiles: "",
      relatedURL: "",
      responseSummary: "",
    }
  );

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
                      <label>Originator</label>
                      <input
                        type="text"
                        value={generalInformation.originator}
                        disabled
                      />
                    </div>

                    <div className="group-input">
                      <label>Date Opened</label>
                      <input
                        type="text"
                        value={generalInformation.dateOpened}
                        disabled
                      />
                    </div>
                    <div className="group-input">
                      <label>Assigned To</label>
                      <select
                        name="assign_id"
                        value={generalInformation.assignedTo}
                        onChange={(e) =>
                          setGeneralInformation({ assignedTo: e.target.value })
                        }
                      >
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
                  <div className="sub-head">Observation Details</div>

                  <div className="form-flex">
                    <div className="group-input">
                      <label>Grading</label>
                      <select
                        name="grading"
                        value={generalInformation.grading}
                        onChange={(e) =>
                          setGeneralInformation({ grading: e.target.value })
                        }
                      >
                        <option value="">-- Select --</option>
                        <option value="1">Recommendation</option>
                        <option value="2">Major</option>
                        <option value="3">Minor</option>
                        <option value="4">Critical</option>
                      </select>
                    </div>
                    <div className="group-input">
                      <label>Category Observation</label>
                      <select
                        name="category_observation"
                        value={generalInformation.categoryobservation}
                        onChange={(e) =>
                          setGeneralInformation({
                            categoryobservation: e.target.value,
                          })
                        }
                      >
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
                    <input
                      type="text"
                      value={generalInformation.referencedGuideline}
                      onChange={(e) =>
                        setGeneralInformation({
                          referencedGuideline: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="group-input">
                    <label>Description</label>
                    <textarea
                      value={generalInformation.description}
                      onChange={(e) =>
                        setGeneralInformation({ description: e.target.value })
                      }
                    ></textarea>
                  </div>

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
                    // instruction="Please mention expected date of completion."
                    isRequired="false"
                    enableDate="future"
                    value={generalInformation.recomendationDateDueforCAPA}
                    returnDate={(date) =>
                      setGeneralInformation({
                        recomendationDateDueforCAPA: date,
                      })
                    }
                  />

                  <div className="group-input">
                    <label>Non Compliance</label>
                    <textarea
                      value={generalInformation.nonCompliance}
                      onChange={(e) =>
                        setGeneralInformation({ nonCompliance: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="group-input">
                    <label>Recommended Action</label>
                    <textarea
                      value={generalInformation.recommendedAction}
                      onChange={(e) =>
                        setGeneralInformation({
                          recommendedAction: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
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
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={cAPAPlan.dateResponseDue}
                      returnDate={(date) =>
                        setCAPAPlan({ dateResponseDue: date })
                      }
                    />

                    <InputDate
                      label="Date Due"
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={cAPAPlan.dateDue}
                      returnDate={(date) => setCAPAPlan({ dateDue: date })}
                    />

                    <div className="group-input">
                      <label>Assigned To</label>

                      <select
                        id="select-state"
                        name="assign_id"
                        value={cAPAPlan.assignedTo}
                        onChange={(e) =>
                          setCAPAPlan({ assignedTo: e.target.value })
                        }
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
                        name="assign_id"
                        value={cAPAPlan.cROVendor}
                        onChange={(e) =>
                          setCAPAPlan({ cROVendor: e.target.value })
                        }
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

                  <div className="group-input">
                    <label>Comments</label>
                    <textarea
                      value={cAPAPlan.comments}
                      onChange={(e) =>
                        setCAPAPlan({ comments: e.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
              </div>
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Impact Analysis</div>
                  <div className="group-input">
                    <label>Impact</label>

                    <select
                      name="impact"
                      value={impactAnalysis.impact}
                      onChange={(e) =>
                        setImpactAnalysis({ impact: e.target.value })
                      }
                    >
                      <option value="">-- Select --</option>
                      <option value="1">High</option>
                      <option value="2">Medium</option>
                      <option value="3">Low</option>
                      <option value="4">None</option>
                    </select>
                  </div>

                  <div className="group-input">
                    <label>Impact Analysis</label>
                    <textarea
                      value={impactAnalysis.impactAnalysis}
                      onChange={(e) =>
                        setImpactAnalysis({ impactAnalysis: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <div className="sub-head">Risk Analysis</div>

                  <div className="form-flex">
                    <div className="group-input">
                      <label>Severity Rate</label>
                      <select
                        name="severity"
                        value={impactAnalysis.severityRate}
                        onChange={(e) =>
                          setImpactAnalysis({ severityRate: e.target.value })
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
                        value={impactAnalysis.occurrence}
                        onChange={(e) =>
                          setImpactAnalysis({ occurrence: e.target.value })
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
                        value={impactAnalysis.detection}
                        onChange={(e) =>
                          setImpactAnalysis({ detection: e.target.value })
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
                          impactAnalysis.severityRate *
                          impactAnalysis.occurrence *
                          impactAnalysis.detection
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
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={summary.actualStartDate}
                      returnDate={(date) =>
                        setSummary({ actualStartDate: date })
                      }
                    />

                    <InputDate
                      label="Actual End Date"
                      isRequired="false"
                      enableDate="future"
                      value={summary.actualEndDate}
                      returnDate={(date) => setSummary({ actualEndDate: date })}
                    />
                  </div>
                  <div className="group-input">
                    <label>Action Taken</label>
                    <textarea
                      value={summary.actionTaken}
                      onChange={(e) =>
                        setSummary({ actionTaken: e.target.value })
                      }
                    ></textarea>
                  </div>

                  <div className="sub-head">Response Summary</div>
                  <div className="form-flex">
                    <InputDate
                      label="Date Rsponse Due"
                      isRequired="false"
                      enableDate="future"
                      value={summary.dateRsponseDue}
                      returnDate={(date) =>
                        setSummary({ dateRsponseDue: date })
                      }
                    />

                    <InputDate
                      label="Date of Response"
                      isRequired="false"
                      enableDate="future"
                      value={summary.dateofResponse}
                      returnDate={(date) =>
                        setSummary({ dateofResponse: date })
                      }
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
                    <input
                      type="text"
                      value={summary.relatedURL}
                      onChange={(e) =>
                        setSummary({ relatedURL: e.target.value })
                      }
                    />
                  </div>

                  <div className="group-input">
                    <label>Response Summary</label>
                    <textarea
                      value={summary.responseSummary}
                      onChange={(e) =>
                        setSummary({ responseSummary: e.target.value })
                      }
                    ></textarea>
                  </div>
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
