import React, { useReducer } from "react";
import { useState } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";

import InputDate from "../../../components/DataFields/InputDate";

import { CurrentDate } from "../../../components/DateReturners";

import HeaderBottom from "../../../components/Header/HeaderBottom";
import {formList, docFile, progressItems, currentYear, site,} from "./ExtensionPanelFunction";

function ExtensionPanel() {


    const [generalInformation, setGeneralInformation] = useReducer(
        (prev, next) => ({
          ...prev,
          ...next,
        }),
        {
          recordNumber: `${site}/EX/${currentYear}/000001`,
          site: site,
          initiator: "Amit Guru",
          dateOfInitiation: CurrentDate(),
          assignedTo: "",
          dueDate: "",
          initiatorGroup: "",
          shortDescription: "",
          initiatedThrough: "",
          initiatedThroughOthers: "",
          currentParentDueDate: "",
          revisedDueDate: "",
          justificationOfExtention: "",
          extentionAttachments: "",
          approver: "",
          severityLevel: "",
        }
      );
      const [qAApproval, setQAApproval] = useReducer(
        (prev, next) => ({
          ...prev,
          ...next,
        }),
        {
          approverComments: "",
          extentionAttachments: "",
     
        }
      );
    const [form, setForm] = useState("General Information");
    const [asideWorkFlow, setAsideWorkFlow] = useState(false);
    const [asideFamilyTree, setAsideFamilyTree] = useState(false);

 
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
                        <strong> Record Name:&nbsp;</strong>Internal Audit
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
                      <label>Current Parent Due Date</label>
                      <input
                        type="text"
                        value={generalInformation.currentParentDueDate}
                        disabled
                      />
                    </div>

                    <InputDate
                      label="Revised Due Date"
                      // instruction="Please mention expected date of completion."
                      isRequired="false"
                      enableDate="future"
                      value={generalInformation.revisedDueDate}
                      returnDate={(date) =>
                        setGeneralInformation({ revisedDueDate: date })
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
                  <div className="group-input">
                    <label>Justification of Extention</label>
                    <input
                      type="text"
                      value={generalInformation.justificationOfExtention}
                      onChange={(e) =>
                        setGeneralInformation({
                          justificationOfExtention: e.target.value,
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
                  <div className="group-input">
                    <label> Approver</label>
                    {/* <div className='instruction'>Please select related information</div> */}
                    <select
                      value={generalInformation.approver}
                      onChange={(e) =>
                        setGeneralInformation({ approver: e.target.value })
                      }
                    >
                      <option value="">-- Select --</option>
                      <option value="amit_guru">Amit Guru</option>
                      <option value="amit_patel">Amit Patel</option>
                      <option value="akash_asthana">Akash Asthana</option>
                      <option value="madhulika_mishra">Madhulika Mishra</option>
                      <option value="shaleen_mishra">Shaleen Mishra</option>
                    </select>
                  </div>
                </div>
              </div>
            ) : form === formList[1] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="group-input">
                    <label>Approver Comments</label>
                    <textarea
                      value={qAApproval.approverComments}
                      onChange={(e) =>
                        setQAApproval({ approverComments: e.target.value })
                      }
                    ></textarea>
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
            ) : form === formList[2] ? (
              <div className="document-form">
                <div className="details-form-data">
                  <div className="activity-log-field">
                    <div>
                      <strong>Audit Scheduled By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Audit Scheduled On:&nbsp;</strong>15 Jan, 2023
                      11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Submitted By:&nbsp;</strong>Shaleen Mishra
                    </div>
                    <div>
                      <strong>Submitted On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Cancelled By:&nbsp;</strong>
                      Shaleen Mishra
                    </div>
                    <div>
                      <strong>Cancelled On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Ext Approved By:&nbsp;</strong>
                      Shaleen Mishra
                    </div>
                    <div>
                      <strong>Ext Approved On:&nbsp;</strong>
                      Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>More Information Required By:&nbsp;</strong>
                      Shaleen Mishra
                    </div>
                    <div>
                      <strong>More Information Required On:&nbsp;</strong>15
                      Jan, 2023 11:00 PM
                    </div>
                  </div>
                  <div className="activity-log-field">
                    <div>
                      <strong>Rejected By:&nbsp;</strong>
                      Shaleen Mishra
                    </div>
                    <div>
                      <strong>Rejected On:&nbsp;</strong>15 Jan, 2023 11:00 PM
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

                <div className="button-block" style={asideWorkFlow || asideFamilyTree ? { width: "calc(100% - 300px)" } : { width: "100%" }}>
                    <button className="themeBtn">Save</button>
                    <button className="themeBtn">Back</button>
                    <button className="themeBtn">Next</button>
                    <button className="themeBtn">Exit</button>
                </div>
            </div>

        </>
    )
}

export default ExtensionPanel
