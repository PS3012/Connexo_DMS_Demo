import React from "react";
import { useState, useReducer } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import FlexField from "../../../components/DataFields/FlexField";
import { CurrentDate } from "../../../components/DateReturners";
import {
  formList,
  workFlow,
  actionPlan,
  docFile,
  site,
  currentYear,
} from "./ObservationFunction";
import "../ConfigForms.css";

function Observation() {
  const [form, setForm] = useState(formList[0]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);
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
              <strong> Record Name:&nbsp;</strong>Observation
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

                      <option value="">-- Select --</option>
                      <option value="">Major</option>
                      <option value="">Minor</option>
                      <option value="">Critical</option>
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

export default Observation;
