import { useState, useReducer } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import { MultiSelect } from "react-multi-select-component";
import { CurrentDate } from "../../../components/DateReturners";
import RelatedRecords from "../../../components/DataFields/RelatedRecords";
import {
  docFile,
  docDetails,
  matDetails,
  equiDetails,
  workFlow,
  formList,
  site,
  currentYear,
  CFTReviewer,
} from "./CapaFunction";
import "../ConfigForms.css";

function CAPA() {
  const [form, setForm] = useState("General Information");
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);
  const [groupComment, setGroupComment] = useState(0);
  const [option, setOption] = useState("");
  const [selected, setSelected] = useState([]);
  const [selectedForm, setSelectedForm] = useState("");

  const [generalInformation, setGeneralInformation] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      recordNumber: `${site}/CAPA/${currentYear}/000001`,
      site: site,
      initiator: "Amit Guru",
      dateOfInitiation: CurrentDate(),
      assignedTo: "",
      dueDate: "",
      initiatorGroup: "",
      shortDescription: "",
      initiatedThrough: "",
      initiatedThroughOthers: "",

      repeat: "",
      repeatNature: "",
      riskLevel: "",
      divisionCode: "",
      natureOfChange: "",
      natureOfChangeOthers: "",
      initialAttachment: "",
      groupComment: "",
      problemDescription: "",
      multiPerson: "",
      referenceRecords: "",
      initialObservation: "",
      interimContainnment: "",
      containmentComments: "",
      cAPAAttachments: "",
    }
  );

  const [materialsEquipmentsInfo, setMaterialsEquipmentsInfo] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      productDetails: "",
      materialsDetails: "",
      equipmentDetails: "",
      equipmentInstrumentsDetails: "",
      details: "",
      cAPAQAComments: "",
    }
  );

  const [cAPADetails, setCAPADetails] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      cAPAType: "",
      correctiveAction: "",
      preventiveAction: "",
      supervisorReviewComments: "",
    }
  );

  const [additionalInformation, setAdditionalInformation] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      cftReviewRequired: "",
      cftReviewerPerson: "",
      groupReviewRequired: "",
      production: "",
      productionPerson: "",
      qualityApprover: "",
      qualityApproverPerson: "",
      others: "",
      othersPerson: "",
      qaEvaluationComments: "",
      qaAttachments: "",
      severityLevel: "",
    }
  );
  const [groupComments, setGroupComments] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      groupComments: "",
      cFTAttachments: "",
      qAComments: "",
      qAHeadDesigneeComments: "",
      warehouseComments: "",
      engineeringComments: "",
      instrumentationComments: "",
      validationComments: "",
      othersComments: "",
    }
  );
  const [cAPAClosure, setCAPAClosure] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      qAReviewClosure: "",
      closureAttachment: "",
      effectivenessCheckRequired: "",
      effectCheckCreationDate: "",
      effectivenessChecker: "",
      effectivenessCheckPlan: "",
      dueDateExtensionJustification: "",
      groupComments: "",
    }
  );

  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };
  const handleFormChange = (event) => {
    setSelectedForm(event.target.value);
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

          <div id="config-form-document-page">
            <div className="inner-block-content">
              <div className="change-control-fields">
                <div className="container-fluid">
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
                          {formList.map((item, index) => (
                            <div
                              key={index}
                              className={form === item ? "active" : ""}
                              onClick={() => setForm(item)}
                            >
                              {item}
                            </div>
                          ))}

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
                                  <label>Assigned To</label>

                                  <div className="instruction">&nbsp;</div>
                                  <select
                                    className="form-control"
                                    name="assign_to"
                                    value={generalInformation.assignedTo}
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        assignedTo: e.target.value,
                                      })
                                    }
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
                                  instruction="Please mention expected date of completion."
                                  isRequired="false"
                                  enableDate="future"
                                  value={generalInformation.dueDate}
                                  returnDate={(date) =>
                                    setGeneralInformation({ dueDate: date })
                                  }
                                />

                                <div className="group-input">
                                  <label htmlFor="Initiator Group">
                                    Initiator Group
                                  </label>

                                  <select
                                    id="initiator_group"
                                    name="initiatorGroup"
                                    value={generalInformation.initiatorGroup}
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        initiatorGroup: e.target.value,
                                      })
                                    }
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
                                  <label>Initiator Group Code</label>
                                  <input
                                    type="text"
                                    value={generalInformation.initiatorGroup}
                                    disabled
                                  />
                                </div>
                              </div>

                              <div className="group-input">
                                <label>
                                  <div className="required"></div>Short
                                  Description
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
                                    setGeneralInformation({
                                      severityLevel: e.target.value,
                                    })
                                  }
                                >
                                  <option value="Select">-- Select --</option>
                                  <option value="Major">Major</option>
                                  <option value="Minor">Minor</option>
                                  <option value="Critical">Critical</option>
                                </select>
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
                                    value={generalInformation.initiatedThrough}
                                    onChange={(e) =>
                                      setGeneralInformation({
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
                                    {generalInformation.initiatedThrough ===
                                      "others" && (
                                      <div className="required"></div>
                                    )}
                                    Other
                                  </label>
                                  <textarea
                                    value={
                                      generalInformation.initiatedThroughOthers
                                    }
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        initiatedThroughOthers: e.target.value,
                                      })
                                    }
                                    required={
                                      generalInformation.initiatedThrough ===
                                      "others"
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Repeat</label>
                                  <div className="instruction">
                                    Please select yes if it is has recurred in
                                    past six months
                                  </div>
                                  <select
                                    value={generalInformation.repeat}
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        repeat: e.target.value,
                                      })
                                    }
                                  >
                                    <option>Enter Your Selection Here</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="NA">NA</option>
                                  </select>
                                </div>

                                <div className="group-input">
                                  <label>
                                    {generalInformation.repeat === "Yes" && (
                                      <div className="required"></div>
                                    )}
                                    Repeat Nature
                                  </label>
                                  <textarea
                                    value={generalInformation.repeatNature}
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        repeatNature: e.target.value,
                                      })
                                    }
                                    required={
                                      generalInformation.repeat === "Yes"
                                    }
                                  ></textarea>
                                </div>
                              </div>

                              <div className="group-input">
                                <label>Problem Description</label>
                                <textarea
                                  value={generalInformation.problemDescription}
                                  onChange={(e) =>
                                    setGeneralInformation({
                                      problemDescription: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>

                              <div className="col-12">
                                <div className="group-input">
                                  <label htmlFor="Multi Person">
                                    Multi Person
                                  </label>

                                  <select
                                    name="capa_team"
                                    value={generalInformation.multiPerson}
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        multiPerson: e.target.value,
                                      })
                                    }
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

                              <div className="group-input">
                                <label>Initial Observation</label>
                                <textarea
                                  value={generalInformation.initialObservation}
                                  onChange={(e) =>
                                    setGeneralInformation({
                                      initialObservation: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>
                              <div className="col-lg-6">
                                <div className="group-input">
                                  <label htmlFor="Interim Containnment">
                                    Interim Containnment
                                  </label>

                                  <select
                                    name="interim_containnment"
                                    value={
                                      generalInformation.interimContainnment
                                    }
                                    onChange={(e) =>
                                      setGeneralInformation({
                                        interimContainnment: e.target.value,
                                      })
                                    }
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

                              <div className="group-input">
                                <label>Containment Comments</label>
                                <textarea
                                  value={generalInformation.containmentComments}
                                  onChange={(e) =>
                                    setGeneralInformation({
                                      containmentComments: e.target.value,
                                    })
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
                        ) : form === formList[1] ? (
                          <div className="document-form">
                            <div className="details-form-data">
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
                                <input
                                  type="text"
                                  name="details"
                                  value={materialsEquipmentsInfo.details}
                                  onChange={(e) =>
                                    setMaterialsEquipmentsInfo({
                                      details: e.target.value,
                                    })
                                  }
                                />
                              </div>

                              <div className="group-input">
                                <label>CAPA QA Comments</label>
                                <textarea
                                  value={materialsEquipmentsInfo.cAPAQAComments}
                                  onChange={(e) =>
                                    setMaterialsEquipmentsInfo({
                                      cAPAQAComments: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        ) : form === formList[2] ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              {/* <div className="row"> */}
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
                                      {/* <select
                                    value={cAPADetails.cAPAType}
                                    onChange={(e) => setCAPADetails({ cAPAType: e.target.value })}> */}

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

                                {(selectedForm === "corrective_action" ||
                                  selectedForm ===
                                    "corrective_preventive_action") && (
                                  <div className="group-input">
                                    <label>Corrective Action</label>
                                    <textarea
                                      value={cAPADetails.correctiveAction}
                                      onChange={(e) =>
                                        setCAPADetails({
                                          correctiveAction: e.target.value,
                                        })
                                      }
                                    ></textarea>
                                  </div>
                                )}

                                {(selectedForm === "preventive_action" ||
                                  selectedForm ===
                                    "corrective_preventive_action") && (
                                  <div className="group-input">
                                    <label>Preventive Action</label>
                                    <textarea
                                      value={cAPADetails.preventiveAction}
                                      onChange={(e) =>
                                        setCAPADetails({
                                          preventiveAction: e.target.value,
                                        })
                                      }
                                    ></textarea>
                                  </div>
                                )}

                                <div className="group-input">
                                  <label>Supervisor Review Comments</label>
                                  <textarea
                                    value={cAPADetails.supervisorReviewComments}
                                    onChange={(e) =>
                                      setCAPADetails({
                                        supervisorReviewComments:
                                          e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          // </div>QA Review & Closure
                        ) : form === formList[3] ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="sub-head">CFT Information</div>
                              <div className="form-flex">
                                <div className="group-input">
                                  <label>CFT Review Required</label>
                                  <select
                                    name="type_change"
                                    value={
                                      additionalInformation.cftReviewRequired
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        cftReviewRequired: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="group-input">
                                  <label>
                                    {additionalInformation.cftReviewRequired ===
                                      "Yes" && <div className="required"></div>}
                                    CFT Reviewer Person
                                  </label>
                                  <MultiSelect
                                    options={CFTReviewer}
                                    value={selected}
                                    onChange={setSelected}
                                    labelledBy="Select"
                                    required={
                                      additionalInformation.cftReviewRequired ===
                                      "Yes"
                                    }
                                    disabled={
                                      !additionalInformation.cftReviewRequired ===
                                      "Yes"
                                    }
                                  />
                                </div>
                              </div>
                              <div className="sub-head">
                                Concerned Information
                              </div>
                              <div className="group-input">
                                <label>
                                  Is Concerned Group Review Required?
                                </label>
                                <select
                                  name="type_change"
                                  value={
                                    additionalInformation.groupReviewRequired
                                  }
                                  onChange={(e) =>
                                    setAdditionalInformation({
                                      groupReviewRequired: e.target.value,
                                    })
                                  }
                                >
                                  <option value="0">-- Select --</option>
                                  <option value="Yes">Yes</option>
                                  <option value="No">No</option>
                                </select>
                              </div>
                              <div className="form-flex">
                                <div className="group-input">
                                  <label>Production</label>
                                  <select
                                    name="type_change"
                                    value={additionalInformation.production}
                                    disabled={
                                      additionalInformation.groupReviewRequired !==
                                      "Yes"
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        production: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="group-input">
                                  <label>
                                    {additionalInformation.production ===
                                      "Yes" && <div className="required"></div>}
                                    Production Person
                                  </label>
                                  <select
                                    name="Production_Person"
                                    value={
                                      additionalInformation.productionPerson
                                    }
                                    disabled={
                                      additionalInformation.production !==
                                        "Yes" ||
                                      additionalInformation.groupReviewRequired !==
                                        "Yes"
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        productionPerson: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
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
                                  <label>Quality Approver</label>
                                  <select
                                    name="Quality_Approver"
                                    value={
                                      additionalInformation.qualityApprover
                                    }
                                    disabled={
                                      additionalInformation.groupReviewRequired !==
                                      "Yes"
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        qualityApprover: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="group-input">
                                  <label>
                                    {additionalInformation.qualityApprover ===
                                      "Yes" && <div className="required"></div>}
                                    Quality Approver Person
                                  </label>
                                  <select
                                    name="Quality_Approver_Person"
                                    value={
                                      additionalInformation.qualityApproverPerson
                                    }
                                    disabled={
                                      additionalInformation.qualityApprover !==
                                        "Yes" ||
                                      additionalInformation.groupReviewRequired !==
                                        "Yes"
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        qualityApproverPerson: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
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
                                  <label>Others</label>
                                  <select
                                    name="type_change"
                                    value={additionalInformation.others}
                                    disabled={
                                      additionalInformation.groupReviewRequired !==
                                      "Yes"
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        others: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                  </select>
                                </div>
                                <div className="group-input">
                                  <label>
                                    {additionalInformation.others === "Yes" && (
                                      <div className="required"></div>
                                    )}
                                    Others Person
                                  </label>
                                  <select
                                    name="Production_Person"
                                    value={additionalInformation.othersPerson}
                                    disabled={
                                      additionalInformation.others !== "Yes" ||
                                      additionalInformation.groupReviewRequired !==
                                        "Yes"
                                    }
                                    onChange={(e) =>
                                      setAdditionalInformation({
                                        othersPerson: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="0">-- Select --</option>
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
                                <label>QA Evaluation Comments</label>
                                <textarea
                                  value={
                                    additionalInformation.qAEvaluationComments
                                  }
                                  onChange={(e) =>
                                    setAdditionalInformation({
                                      qAEvaluationComments: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>
                              <div className="group-input">
                                <Grid
                                  label={docFile[2].label}
                                  required={docFile[2].required}
                                  instruction={docFile[2].instruction}
                                  columnList={docFile[2].columnList}
                                />
                              </div>
                            </div>
                          </div>
                        ) : form === formList[4] ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="details-form-data">
                                <div className="sub-head">CFT Feedback</div>
                                <div className="group-input">
                                  <label>QA Evaluation Comments</label>
                                  <textarea
                                    value={groupComments.qAEvaluationComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        qAEvaluationComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>
                                <div className="group-input">
                                  <Grid
                                    label={docFile[3].label}
                                    required={docFile[3].required}
                                    instruction={docFile[3].instruction}
                                    columnList={docFile[3].columnList}
                                  />
                                </div>
                                <div className="sub-head">
                                  Concerned Group Feedback
                                </div>

                                <div className="group-input">
                                  <label>QA Comments</label>
                                  <textarea
                                    value={groupComments.qAComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        qAComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>QA Head Designee Comments</label>
                                  <textarea
                                    value={groupComments.qAHeadDesigneeComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        qAHeadDesigneeComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Warehouse Comments</label>
                                  <textarea
                                    value={groupComments.warehouseComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        warehouseComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Engineering Comments</label>
                                  <textarea
                                    value={groupComments.engineeringComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        engineeringComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Instrumentation Comments</label>
                                  <textarea
                                    value={
                                      groupComments.instrumentationComments
                                    }
                                    onChange={(e) =>
                                      setGroupComments({
                                        instrumentationComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Validation Comments</label>
                                  <textarea
                                    value={groupComments.validationComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        validationComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Others Comments</label>
                                  <textarea
                                    value={groupComments.othersComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        othersComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="group-input">
                                  <label>Group Comments</label>
                                  <textarea
                                    value={groupComments.groupComments}
                                    onChange={(e) =>
                                      setGroupComments({
                                        groupComments: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : form === formList[5] ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              {/* <div className="row"> */}
                                <div className="group-input">
                                  <label>QA Review & Closure</label>
                                  <textarea
                                    value={cAPAClosure.qAReviewClosure}
                                    onChange={(e) =>
                                      setCAPAClosure({
                                        qAReviewClosure: e.target.value,
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
                                      {/* <select id="option"  name="effect_check"
                                        value={cAPAClosure.effectivenessCheckRequired}
                                        onChange={(e) => setCAPAClosure({ effectivenessCheckRequired: e.target.value })}> */}
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
                                      label="Effect Check Creation Date"
                                      // instruction="Please mention expected date of completion."
                                      isRequired="true"
                                      enableDate="future"
                                      value={
                                        cAPAClosure.effectCheckCreationDate
                                      }
                                      returnDate={(date) =>
                                        setCAPAClosure({
                                          effectCheckCreationDate: date,
                                        })
                                      }
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
                                          id="option"
                                          name="Effectiveness_checker"
                                          value={
                                            cAPAClosure.effectivenessChecker
                                          }
                                          onChange={(e) =>
                                            setCAPAClosure({
                                              effectivenessChecker:
                                                e.target.value,
                                            })
                                          }
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

                                <div className="group-input">
                                  <label>Effectiveness Check Plan</label>
                                  <textarea
                                    value={cAPAClosure.effectivenessCheckPlan}
                                    onChange={(e) =>
                                      setCAPAClosure({
                                        effectivenessCheckPlan: e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>

                                <div className="col-12 sub-head">
                                  Extension Justification
                                </div>

                                <div className="group-input">
                                  <label>
                                    Due Date Extension Justification
                                  </label>
                                  <div className="instruction">
                                    Please Mention justification if due date is
                                    crossed
                                  </div>
                                  <textarea
                                    value={
                                      cAPAClosure.dueDateExtensionJustification
                                    }
                                    onChange={(e) =>
                                      setCAPAClosure({
                                        dueDateExtensionJustification:
                                          e.target.value,
                                      })
                                    }
                                  ></textarea>
                                </div>
                              {/* </div> */}
                            </div>
                          </div>
                        ) : form === formList[6] ? (
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
