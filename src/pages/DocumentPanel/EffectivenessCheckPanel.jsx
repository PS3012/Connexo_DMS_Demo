import { useState } from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderBottom from '../../components/Header/HeaderBottom'
import ESignatureModal from '../../components/Modals/ESignatureModal/ESignatureModal';
import './DocumentPanel.css'
import React from "react";
import Grid from "../../components/DataFields/Grid";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";
import RelatedRecords from "../../components/DataFields/RelatedRecords";
import { CurrentDate } from "../../components/DateReturners";


function EffectivenessCheckPanel() {

  const formList = [
    "General Information",
    "Effectiveness Check Results",
    "Reference Info/Comments",
    "Activity History",
  ];

  const [form, setForm] = useState(formList[0]);


  const docFile = [
    {
      label: "Effectiveness check Attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },

    {
      label: "Addendum Attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Attachment",
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
    { id: 1, name: 'Opened', details: 'Document is opened at 10 Jan, 2023 11:12PM' },
    { id: 2, name: 'HOD Review', details: 'Action Item child can be created at this stage.' },
    { id: 3, name: 'Pending QA Review', details: '' },
    { id: 4, name: 'CFT/SME Review', details: '' },
    { id: 5, name: 'Pending Change Implementation', details: 'New Document child can be created at this stage.' },
    { id: 6, name: 'Closed - Done', details: '' },
  ]
  const [progressArray, setProgressArray] = useState([progressItems[0].name])
  const [signatureModal, setSignatureModal] = useState(false)
  const [keyword, setKeyword] = useState('')
  const [keywordElements, setKeywordElements] = useState([])
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

                    <div className="group-input">
                      <label>Quality Reviewer</label>
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

                  <div className="sub-head">
                    Effectiveness Planning Information
                  </div>
                  <div className="group-input">
                    <label>Effectiveness check Plan</label>
                    <input type="text" />
                  </div>


                </div>
              </div>
            ) : form === formList[1] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Effectiveness Summary</div>
                  <FlexField
                    label="Effectiveness Summary"
                    instruction=""
                    isRequired="false"
                  />
                  <div className="sub-head">Effectiveness Check Results</div>
                  <div className="group-input">
                    <label>Effectiveness Results</label>
                    <input type="text" />
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
                    <input type="text" />
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
                  <div className="sub-head">Reference Info comments</div>
                  <FlexField
                    label="Comments"
                    instruction=""
                    isRequired="false"
                  />

                  <div className="group-input">
                    <Grid
                      label={docFile[2].label}
                      required={docFile[2].required}
                      instruction={docFile[2].instruction}
                      columnList={docFile[2].columnList}
                    />
                  </div>

                  <RelatedRecords label="Reference Records" />
                </div>
              </div>
            ) : form === formList[3] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="sub-head">Data History</div>
                  <div className="form-flex">
                    <InputDate
                      label="Actual Closure Date"
                      enableDate="future"
                      isRequired="false"
                    />
                    <InputDate
                      label="Original Date Due"
                      enableDate="future"
                      isRequired="false"
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
                      <select>
                        <option value="">Enter Your Selection Here</option>
                        <option value="Duplicate Entry">Duplicate Entry</option>
                        <option value="Entered in Error">Entered in Error</option>
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
                      <select>
                        <option>Enter Your Selection Here</option>
                        <option value="Effectiveness Check">
                          Effectiveness Check
                        </option>
                      </select>
                    </div>
                  </div>
                  <FlexField
                    label="Cancellation Justification"
                    instruction=""
                    isRequired="false"
                  />
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

