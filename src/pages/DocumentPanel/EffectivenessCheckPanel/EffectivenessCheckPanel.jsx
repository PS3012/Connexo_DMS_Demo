import { useState, useReducer } from 'react'
import HeaderTop from '../../../components/Header/HeaderTop'
import HeaderBottom from '../../../components/Header/HeaderBottom'
import ESignatureModal from '../../../components/Modals/ESignatureModal/ESignatureModal';
import '../DocumentPanel.css'
import React from "react";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import { CurrentDate } from "../../../components/DateReturners";
import {formList , docFile, progressItems, currentYear, site,} from './EffectivenessCheckPanelFunctions';


function EffectivenessCheckPanel() {
  const [form, setForm] = useState(formList[0]); 
  const [progressArray, setProgressArray] = useState([progressItems[0].name])
  const [signatureModal, setSignatureModal] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [keywordElements, setKeywordElements] = useState([])

  const [generalInformation, setGeneralInformation] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      recordNumber: `${site}/EC/${currentYear}/000001`,
      site: site,
      initiator: "Amit Guru",
      dateOfInitiation: CurrentDate(),
      assignedTo: "",
      dueDate: "",
      initiatorGroup: "",
      shortDescription: "",
      severityLevel: "",
      initiatedThrough: "",
      initiatedThroughOthers: "",
      qualityReviewer: "",
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

  const [effectivenessCheckResults, setEffectivenessCheckResults] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      effectivenessSummary: "",
      effectivenessResults: "",
      effectivenesscheckAttachment: "",
      addendumComments: "",
      addendumAttachment: "",
    }
  );

  const [activityHistory, setActivityHistory] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      actualClosureDate: "",
      originalDateDue: "",
      cancellationCategory: "",
      trackWiseRecordType: "",
      cancellationJustification: "",
    }
  );


  const closeSignatureModal = () => setSignatureModal(false);

  function handleESignature(key, elements) {
    setKeyword(key)
    setKeywordElements(elements)
    for (let ele of elements) {
      let updatedItemIndex = progressItems.findIndex((item) => item.name === ele);
      if (updatedItemIndex !== -1) {
        progressItems[updatedItemIndex].details = 'Updated';
      } else {
        console.error('Item with name "Opened" not found.');
      }
    }
    setSignatureModal(true)
  }
  function signatureValue(key) {
    if (key) {
      if (keyword === 'add') {
        addProgress(keywordElements)
      } else if (keyword === 'remove') {
        removeProgress(keywordElements)
      } else {
        setProgressArray('Closed-Cancelled')
      }
    } else {
      alert('E-Signature Not Matched.')
    }
  }
  function addProgress(addEle) {
    for (let ele of addEle) {
      setProgressArray((prevArray) => [...prevArray, ele])
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
            <strong> Record Name:&nbsp;</strong>EffectivenessCheckPanel
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
                {progressArray.length === 1 &&
                  <>
                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[1].name])}>Submit</button>
                    <button className="themeBtn" onClick={() => handleESignature('closed', [])}>Cancel</button>
                  </>
                }
                {progressArray.length === 2 &&
                  <>
                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[2].name])}>HOD Review Complete</button>
                    <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[1].name])}>More Information Required</button>
                  </>
                }
                {progressArray.length === 3 &&
                  <>
                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name])}>Send to CFT Reviewers</button>
                    <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name])}>More Information Required</button>
                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3].name, progressItems[4].name])}>CFT Review Not Required</button>
                  </>
                }
                {progressArray.length === 4 &&
                  <>
                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[4].name])}>Review Complete</button>
                    <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2].name, progressItems[3].name])}>Request More Info</button>
                  </>
                }
                {progressArray.length === 5 &&
                  <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[5].name])}>Implemented</button>
                }
                <button className="themeBtn">Exit</button>
              </div>
            </div>
            <div className="progress-block">
              {(progressArray === 'Closed-Cancelled') ?
                <>
                  <div className="active">Opened</div>
                  <div className="active closed">Closed-Cancelled</div>
                </>
                : progressItems.map((item) => (
                  <div key={item.id} className={progressArray.includes(item.name) ? 'active' : ''}>
                    {item.name}
                    {item.details && <div className="details">{item.details}</div>}
                  </div>
                ))
              }
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
                      <select
                        name="assign_id"
                        value={generalInformation.assignedTo}
                        onChange={(e) =>
                          setGeneralInformation({ assignedTo: e.target.value })
                        }
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
                      instruction="Please mention expected date of completion."
                      isRequired="true"
                      enableDate="future"
                      value={generalInformation.dueDate}
                      returnDate={(date) =>
                        setGeneralInformation({ dueDate: date })
                      }
                    />
                    <div className="group-input">
                      <label>Quality Reviewer</label>

                      <select
                        value={generalInformation.qualityReviewer}
                        onChange={(e) =>
                          setGeneralInformation({
                            qualityReviewer: e.target.value,
                          })
                        }
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
                      onChange={(e) =>
                        setGeneralInformation({ severityLevel: e.target.value })
                      }
                    >
                      <option value="Select">-- Select --</option>
                      <option value="Major">Major</option>
                      <option value="Minor">Minor</option>
                      <option value="Critical">Critical</option>
                    </select>
                  </div>

                  <div className="sub-head">
                    Effectiveness Planning Information
                  </div>
                  <div className="group-input">
                    <label>Effectiveness check Plan</label>
                    <input
                      type="text"
                      value={generalInformation.effectivenesscheckPlan}
                      onChange={(e) =>
                        setGeneralInformation({
                          effectivenesscheckPlan: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              </div>
            ) : form === formList[1] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Effectiveness Summary</div>

                  <div className="group-input">
                    <label>Effectiveness Summary</label>
                    <textarea
                      value={effectivenessCheckResults.effectivenessSummary}
                      onChange={(e) =>
                        setEffectivenessCheckResults({
                          effectivenessSummary: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  <div className="sub-head">Effectiveness Check Results</div>
                  <div className="group-input">
                    <label>Effectiveness Results</label>
                    <input
                      type="text"
                      value={effectivenessCheckResults.effectivenessResults}
                      onChange={(e) =>
                        setEffectivenessCheckResults({
                          effectivenessResults: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="group-input">
                    <Grid
                      label={docFile[0].label}
                      required={docFile[0].required}
                      instruction={docFile[0].instruction}
                      columnList={docFile[0].columnList}
                    />
                  </div>

                  <div className="sub-head">Reopen</div>
                  <div className="group-input">
                    <label>Addendum Comments</label>
                    <input
                      type="text"
                      value={effectivenessCheckResults.addendumComments}
                      onChange={(e) =>
                        setEffectivenessCheckResults({
                          addendumComments: e.target.value,
                        })
                      }
                    />
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
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Data History</div>
                  <div className="form-flex">
                    <InputDate
                      label="Actual Closure Date"
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={activityHistory.actualClosureDate}
                      returnDate={(date) =>
                        setActivityHistory({ actualClosureDate: date })
                      }
                    />

                    <InputDate
                      label="Original Date Due"
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={activityHistory.originalDateDue}
                      returnDate={(date) =>
                        setActivityHistory({ originalDateDue: date })
                      }
                    />
                  </div>
                  <div className="sub-head">Record Signature</div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Submitted by:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
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
                  <div className="activity-log-field">
                    <div>
                      <strong>Quality Approal By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Quality Approal On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Addendum Complete By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Addendum Complete On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Cancel By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Cancel On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Re Open For Addendum By:&nbsp;</strong>Shaleen
                      Mishra
                    </div>
                    <div>
                      <strong>Re Open For Addendum On:&nbsp;</strong>15 Jan,
                      2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Cancellation Approve By:&nbsp;</strong>Shaleen
                      Mishra
                    </div>
                    <div>
                      <strong>Cancellation Approve On:&nbsp;</strong>15 Jan,
                      2023 11:00 PM
                    </div>
                  </div>
                  <div className="sub-head">Cancellation Details</div>
                  <div className="form-flex">
                    <div className="group-input">
                      <label>Cancellation Category</label>
                      <select
                        value={activityHistory.cancellationCategory}
                        onChange={(e) =>
                          setActivityHistory({
                            cancellationCategory: e.target.value,
                          })
                        }
                      >
                        <option value="">Enter Your Selection Here</option>
                        <option value="Duplicate Entry">Duplicate Entry</option>
                        <option value="Entered in Error">
                          Entered in Error
                        </option>
                        <option value="No Longer Necessary">
                          No Longer Necessary
                        </option>
                        <option value="Parent Record Closed">
                          Parent Record Closed
                        </option>
                      </select>
                    </div>

                    <div className="group-input">
                      <label>TrackWise Record Type</label>

                      <select
                        value={activityHistory.trackWiseRecordType}
                        onChange={(e) =>
                          setActivityHistory({
                            trackWiseRecordType: e.target.value,
                          })
                        }
                      >
                        <option>Enter Your Selection Here</option>
                        <option value="Effectiveness Check">
                          Effectiveness Check
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="group-input">
                    <label>Cancellation Justification</label>
                    <textarea
                      value={activityHistory.cancellationJustification}
                      onChange={(e) =>
                        setActivityHistory({
                          cancellationJustification: e.target.value,
                        })
                      }
                    ></textarea>
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

      {signatureModal && <ESignatureModal closeModal={closeSignatureModal} returnSignature={signatureValue} />}

    </>
  )
}

export default EffectivenessCheckPanel;

