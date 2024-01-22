import { useState, useReducer } from "react";
import "./ConfigForms.css";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";
import RelatedRecords from "../../components/DataFields/RelatedRecords";

function CAPA() {
  const [form, setForm] = useState("General Information");
  const [code, setCode] = useState("");
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);
  const [groupComment, setGroupComment] = useState(0);
  const [changeControl, setChangeControl] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }), {
      initiatorGroup: "",
      initiatedThrough: "",
      typeOfAudit: "",
    }
  );
  const [option, setOption] = useState("");
  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };
  const [selectedForm, setSelectedForm] = useState(''); 
  const handleFormChange = (event) => {
    setSelectedForm(event.target.value);
  };
  const docFile = [
    {
      label: "CAPA Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: false,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Closure Attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
  ];
  const docDetails = {
    label: "Product Details",
    instruction: <div></div>,
    required: false,
    columnList: [
      {
        id: "2.1.1.1",
        name: "Product Name",
        type: "singleSelection",
        selectionValues: [
          "-Select Value-",
          "PLACEBEFOREBIMATOPROSTOPH.SOLO.01%W/",
          "BIMATOPROSTANDTIMOLOLMALEATEEDSOLUTION",
          "CAFFEINECITRATEORALSOLUTION USP 60MG/3ML",
          "BRIMONIDINE TART. OPH SOL 0.1%W/V (CB)",
          "DORZOLAMIDEPFREE20MG/MLEDSOLSINGLEDOSECO",
        ],
      },
      {
        id: "2.1.1.2",
        name: "Batch No./Lot No./AR No.",
        type: "singleSelection",
        selectionValues: [
          "DCAU0030",
          "BDZH0007",
          "BDZH0006",
          "BJJH0004A",
          "DCAU0036",
        ],
      },
      { id: "2.1.1.3", name: "Manufacturing Date", type: "Date" },
      { id: "2.1.1.4", name: "Date Of Expiry", type: "Date" },
      { id: "2.1.1.5", name: "Batch Disposition Decision", type: "text" },
      { id: "2.1.1.6", name: "Remark", type: "text" },
      {
        id: "2.1.1.7",
        name: "Batch Status",
        type: "singleSelection",
        selectionValues: ["Hold", "Release", "Quaratine"],
      },
    ],
  };
  const matDetails = {
    label: "Materials Details",
    instruction: <div></div>,
    required: false,
    columnList: [
      {
        id: "2.1.1.1",
        name: "Product Name",
        type: "singleSelection",
        selectionValues: [
          "-Select Value-",
          "PLACEBEFOREBIMATOPROSTOPH.SOLO.01%W/",
          "BIMATOPROSTANDTIMOLOLMALEATEEDSOLUTION",
          "CAFFEINECITRATEORALSOLUTION USP 60MG/3ML",
          "BRIMONIDINE TART. OPH SOL 0.1%W/V (CB)",
          "DORZOLAMIDEPFREE20MG/MLEDSOLSINGLEDOSECO",
        ],
      },
      {
        id: "2.1.1.2",
        name: "Batch No./Lot No./AR No.",
        type: "singleSelection",
        selectionValues: [
          "DCAU0030",
          "BDZH0007",
          "BDZH0006",
          "BJJH0004A",
          "DCAU0036",
        ],
      },
      { id: "2.1.1.3", name: "Manufacturing Date", type: "Date" },
      { id: "2.1.1.4", name: "Date Of Expiry", type: "Date" },
      { id: "2.1.1.5", name: "Batch Disposition Decision", type: "text" },
      { id: "2.1.1.6", name: "Remark", type: "text" },
      {
        id: "2.1.1.7",
        name: "Batch Status",
        type: "singleSelection",
        selectionValues: ["Hold", "Release", "Quaratine"],
      },
    ],
  };
  const equiDetails = {
    label: "Equipment/Instruments Details",
    instruction: <div></div>,
    required: false,
    columnList: [
      { id: "2.1.1.1", name: "Equipment/Instruments Name", type: "text" },
      { id: "2.1.1.2", name: "Equipment/Instruments ID", type: "text" },
      { id: "2.1.1.3", name: "Equipment/Instruments Comments", type: "text" },
    ],
  };

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

          <div id="config-form-document-page">
            <div className="inner-block-content">
              <div className="change-control-fields">
                <div className="container-fluid">
                  {/* <div id="change-control-fields"> */}
                  <div className="top-block">
                    <div>
                      <strong>Record Name:&nbsp;</strong> CAPA
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

                  <div id="change-controls-field">
                    <div className="container-fluid">
                      <div className="document-block">
                        <div className="document-tabs">
                          <div
                            className={
                              form === "General Information" ? "active" : ""
                            }
                            onClick={() => setForm("General Information")}
                          >
                            General Information
                          </div>

                          <div
                            className={
                              form === "Product Information" ? "active" : ""
                            }
                            onClick={() => setForm("Product Information")}
                          >
                            Product Information
                          </div>

                          <div
                            className={form === "CAPA Details" ? "active" : ""}
                            onClick={() => setForm("CAPA Details")}
                          >
                            CAPA Details
                          </div>

                          <div
                            className={form === "CAPA Closure" ? "active" : ""}
                            onClick={() => setForm("CAPA Closure")}
                          >
                            CAPA Closure
                          </div>

                          <div
                            className={form === "Activity Log" ? "active" : ""}
                            onClick={() => setForm("Activity Log")}
                          >
                            Activity Log
                          </div>

                          {groupComment === "yes" && (
                            <div
                              className={
                                form === "Group Comments" ? "active" : ""
                              }
                              onClick={() => setForm("Group Comments")}
                            >
                              Group Comments
                            </div>
                          )}
                        </div>

                        {form === "General Information" ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="form-flex">
                                <div className="group-input">
                                  <label>
                                    <b>Record Number</b>
                                  </label>
                                  <input
                                    type="text"
                                    value="KSA/CAPA/2024/0009"
                                    disabled
                                  />
                                </div>

                                <div className="group-input">
                                  <label>
                                    <b>Division Code</b>
                                  </label>
                                  <input type="text" value="KSA" disabled />
                                </div>

                                <div className="group-input">
                                  <label>
                                    <b>Initiator</b>
                                  </label>
                                  <input
                                    type="text"
                                    value="Amit Guru"
                                    disabled
                                  />
                                </div>

                                <div className="group-input">
                                  <label>
                                    <b>Date of Initiation</b>
                                  </label>
                                  <input type="" value="10-Jan-2024" disabled />
                                </div>

                                <div className="group-input">
                                  <label>Assigned To</label>
                                  <select
                                    id="select-state"
                                    className="form-control"
                                    placeholder="Select..."
                                    name="assign_to"
                                  >
                                    <option value="Select a value">
                                      Select a value
                                    </option>
                                    <option value="Shaleen Mishra">
                                      Shaleen Mishra
                                    </option>
                                    <option value="Amit guru">Amit guru</option>
                                    <option value="Vikash Prajapati">
                                      Vikash Prajapati
                                    </option>
                                    <option value="Anshul patel">
                                      Anshul patel
                                    </option>
                                    <option value="Amit Patel">
                                      Amit Patel
                                    </option>
                                    <option value="Aakash Asthana">
                                      Aakash Asthana
                                    </option>
                                  </select>
                                </div>
                                <InputDate
                                  label="Due Date"
                                  enableDate="future"
                                  isRequired="false"
                                />

                                <div className="group-input">
                                  <label htmlFor="Initiator Group">
                                    Initiator Group
                                  </label>
                                  <select
                                    name="initiatorGroup"
                                    id="initiator_group"
                                    onChange={(e) => setCode(e.target.value)}
                                  >
                                    <option value="0">-- Select --</option>
                                    <option value="CQA">
                                      Corporate Quality Assurance
                                    </option>
                                    <option value="QAB">
                                      Quality Assurance Biopharma
                                    </option>
                                    <option value="CQC">
                                      Central Quality Control
                                    </option>
                                    <option value="CQC">Manufacturing</option>
                                    <option value="PSG">
                                      Plasma Sourcing Group
                                    </option>
                                    <option value="CS">Central Stores</option>
                                    <option value="ITG">
                                      Information Technology Group
                                    </option>
                                    <option value="MM">
                                      Molecular Medicine
                                    </option>
                                    <option value="CL">
                                      Central Laboratory
                                    </option>
                                    <option value="TT">Tech team</option>
                                    <option value="QA">
                                      {" "}
                                      Quality Assurance
                                    </option>
                                    <option value="QM">
                                      Quality Management
                                    </option>
                                    <option value="IA">
                                      IT Administration
                                    </option>
                                    <option value="ACC">Accounting</option>
                                    <option value="LOG">Logistics</option>
                                    <option value="SM">
                                      Senior Management
                                    </option>
                                    <option value="BA">
                                      Business Administration
                                    </option>
                                  </select>
                                </div>

                                <div className="group-input">
                                  <label>
                                    <b>Initiator Group Code</b>
                                  </label>
                                  <input
                                    type="text"
                                    name="initiator_group_code"
                                    id="initiator_group_code"
                                    value={code}
                                  />
                                </div>
                              </div>

                              <div className="group-input">
                                <label>
                                  <div className="required"></div>
                                  Short Description
                                </label>
                                <input type="text" />
                              </div>

                              <div className="form-flex">
                                <div className="group-input">
                                  <label>
                                    <b>Initiated Through</b>
                                  </label>
                                  <div className="instruction">
                                    Please select related information
                                  </div>
                                  <select
                                    name="initiated_through"
                                    value={changeControl.initiatedThrough}
                                    onChange={(e) =>
                                      setChangeControl({
                                        initiatedThrough: e.target.value,
                                      })
                                    }
                                  >
                                    <option>Enter Your Selection Here</option>
                                    <option value="recall">Recall</option>
                                    <option value="return">Return</option>
                                    <option value="deviation">Deviation</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="regulatory">
                                      {" "}
                                      Regulatory
                                    </option>
                                    <option value="lab-incident">
                                      {" "}
                                      Lab Incident{" "}
                                    </option>
                                    <option value="improvement">
                                      {" "}
                                      Improvement{" "}
                                    </option>
                                    <option value="others">Others</option>
                                  </select>
                                </div>

                                <div className="group-input">
                                  <label>
                                    {changeControl.initiatedThrough ===
                                      "others" && (
                                      <div className="required"></div>
                                    )}
                                    <b>Others</b>
                                  </label>
                                  {/* <div className='instruction'></div> */}
                                  <textarea name="initiated_through_req"></textarea>
                                </div>
                              </div>

                              <div className="group-input">
                                <label>
                                  <b>Repeat</b>
                                </label>
                                <div className="instruction">
                                  Please select yes if it is has recurred in
                                  past six months
                                </div>
                                <select
                                  name="initiated_through"
                                  className="form-control"
                                >
                                  <option>Enter Your Selection Here</option>
                                  <option>Yes</option>
                                  <option>No</option>
                                  <option>NA</option>
                                </select>
                              </div>

                              <FlexField
                                label="Repeat Nature"
                                instruction=""
                                isRequired="false"
                              />

                              <FlexField
                                label="Problem Description"
                                instruction=""
                                isRequired="false"
                              />

                              <div className="col-12">
                                <div className="group-input">
                                  <label htmlFor="CAPA Team">CAPA Team</label>
                                  <select
                                    id="select-state"
                                    placeholder="Select..."
                                    name="capa_team"
                                  >
                                    <option value="Select a value">
                                      Select a value
                                    </option>
                                    <option value="Amit Guru">Amit Guru</option>
                                    <option value="Shaleen Mishra">
                                      Shaleen Mishra
                                    </option>
                                    <option value="Vikas Prajapati">
                                      Vikas Prajapati
                                    </option>
                                    <option value="Anshul Patel">
                                      Anshul Patel
                                    </option>
                                    <option value="Amit Patel">
                                      Amit Patel
                                    </option>
                                    <option value="Madhulika Mishra">
                                      Madhulika Mishra
                                    </option>
                                    <option value="Jin Kim">Jin Kim</option>
                                    <option value="Akash Asthana">
                                      Akash Asthana
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <RelatedRecords label="Reference Records" />

                              <FlexField
                                label="Initial Observation"
                                instruction=""
                                isRequired="false"
                              />

                              <div className="col-lg-6">
                                <div className="group-input">
                                  <label htmlFor="Interim Containnment">
                                    Interim Containnment
                                  </label>
                                  <select
                                    name="interim_containnment"
                                    onChange="otherController(this.value, 'required', 'containment_comments')"
                                  >
                                    <option value="">
                                      Enter Your Selection Here
                                    </option>
                                    <option value="required">Required</option>
                                    <option value="not-required">
                                      Not Required
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <FlexField
                                label="Containment Comments"
                                instruction=""
                                isRequired="false"
                              />

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
                        ) : form === "Product Information" ? (
                          <div className="document-form">
                            <div className="sub-head">Product Details</div>
                            <div className="details-form-data">
                              <Grid
                                label={docDetails.label}
                                required={docDetails.required}
                                instruction={docDetails.instruction}
                                columnList={docDetails.columnList}
                              />
                              <div className="sub-head">Material Details</div>
                              <Grid
                                label={matDetails.label}
                                required={matDetails.required}
                                instruction={matDetails.instruction}
                                columnList={matDetails.columnList}
                              />
                              <div className="sub-head">
                                Equipment/Instruments Details
                              </div>
                              <Grid
                                label={equiDetails.label}
                                required={equiDetails.required}
                                instruction={equiDetails.instruction}
                                columnList={equiDetails.columnList}
                              />
                              <div className="col-12 sub-head">
                                Other type CAPA Details{" "}
                              </div>
                              <div className="group-input">
                                <label htmlFor="Details">Details</label>
                                <input type="text" name="details" />
                              </div>

                              <FlexField
                                label="CAPA QA Comments"
                                instruction=""
                                isRequired="false"
                              />
                            </div>
                          </div>
                        ) : form === "CAPA Details" ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="group-input">
                                    <label htmlFor="search">
                                      CAPA Type
                                      <span className="text-danger"></span>
                                    </label>
                                    <select
                                      value={selectedForm} 
                                      onChange={handleFormChange}
                                    >
                                      <option value="">Select a value</option>
                                      <option value="corrective_action">
                                        Corrective Action
                                      </option>
                                      <option value="preventive_action">
                                        Preventive Action
                                      </option>
                                      <option value="corrective_preventive_action">
                                        Corrective & Preventive Action
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                {(selectedForm === 'corrective_action' || selectedForm === 'corrective_preventive_action') && (
                                <FlexField
                                  label="Corrective Action"
                                  instruction=""
                                  isRequired="false"
                                />
                                )}

                               {(selectedForm === 'preventive_action' || selectedForm === 'corrective_preventive_action') && (
                                <FlexField
                                  label="Preventive Action"
                                  instruction=""
                                  isRequired="false"
                                />
                               )}

                              
                                <FlexField
                                  label="Supervisor Review Comments"
                                  instruction=""
                                  isRequired="false"
                                />
                            
                              </div>
                            </div>
                          </div>
                        ) : form === "CAPA Closure" ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="row">
                                <FlexField
                                  label="QA Review & Closure"
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
                                <div className="col-12 sub-head">
                                  Effectiveness Check Details
                                </div>
                                <div className="col-12">
                                  <div className="group-input">
                                    <label htmlFor="Effectiveness Check Required">
                                      Effectiveness Check Required?
                                    </label>
                                    <select
                                      name="effect_check"
                                      id="option"
                                      value={option}
                                      onChange={handleOptionChange}
                                    >
                                      <option value="">
                                        Enter Your Selection Here
                                      </option>
                                      <option value="yes">Yes</option>
                                      <option value="no">No</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="form-flex">
                                  {option === "yes" && (
                                    <InputDate
                                      label="Effect.Check Creation Date"
                                      enableDate="future"
                                      isRequired="true"
                                    />
                                  )}

                                  {option === "yes" && (
                                    <div className="col-6">
                                      <div className="group-input">
                                        <label htmlFor="Effectiveness_checker">
                                          <div className="required"></div>
                                          Effectiveness Checker
                                        </label>
                                        <select
                                          id="select-state"
                                          placeholder="Select..."
                                          name="Effectiveness_checker"
                                        >
                                          <option value="">
                                            Select a person
                                          </option>
                                          <option value="1">Amit Guru</option>
                                          <option value="2">
                                            Shaleen Mishra
                                          </option>
                                          <option value="3">
                                            Vikas Prajapati
                                          </option>
                                          <option value="4">
                                            Anshul Patel
                                          </option>
                                          <option value="5">Amit Patel</option>
                                          <option value="6">
                                            Madhulika Mishra
                                          </option>
                                          <option value="7">Jin Kim</option>
                                          <option value="8">
                                            Akash Asthana
                                          </option>
                                        </select>
                                      </div>
                                    </div>
                                  )}
                                </div>

                                <FlexField
                                  label="Effectiveness Check Plan"
                                  instruction=""
                                  isRequired="false"
                                />

                                <div className="col-12 sub-head">
                                  Extension Justification
                                </div>

                                <FlexField
                                  label="Due Date Extension Justification"
                                  instruction="Please Mention justification if due date
                                    is crossed"
                                  isRequired="false"
                                />
                              </div>
                            </div>
                          </div>
                        ) : form === "Activity Log" ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="activity-log-field">
                                <div>
                                  <strong>Plan Proposed By: &nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Plan Proposed On: &nbsp;</strong>15
                                  Jan, 2023 11:00 PM
                                </div>
                              </div>
                              <div className="activity-log-field">
                                <div>
                                  <strong>Plan Approved By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Plan Approved On:&nbsp;</strong>15
                                  Jan, 2023 11:00 PM
                                </div>
                              </div>
                              <div className="activity-log-field">
                                <div>
                                  <strong>
                                    QA More Info Required By:&nbsp;
                                  </strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>
                                    QA More Info Required On:&nbsp;
                                  </strong>
                                  15 Jan, 2023 11:00 PM
                                </div>
                              </div>
                              <div className="activity-log-field">
                                <div>
                                  <strong>Cancelled By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Cancelled On:&nbsp;</strong>
                                  15 Jan, 2023 11:00 PM
                                </div>
                              </div>
                              <div className="activity-log-field">
                                <div>
                                  <strong>Completed By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Completed On:&nbsp;</strong>
                                  15 Jan, 2023 11:00 PM
                                </div>
                              </div>
                              <div className="activity-log-field">
                                <div>
                                  <strong>Approved By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Approved On:&nbsp;</strong>
                                  15 Jan, 2023 11:00 PM
                                </div>
                              </div>
                              <div className="activity-log-field">
                                <div>
                                  <strong>Rejected By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Rejected On:&nbsp;</strong>
                                  15 Jan, 2023 11:00 PM
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
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
              </div>
            </div>
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

export default CAPA;
