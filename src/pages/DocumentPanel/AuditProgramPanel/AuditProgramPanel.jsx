import { useState } from "react";
import HeaderBottom from "../../../components/Header/HeaderBottom";
import ESignatureModal from "../../../components/Modals/ESignatureModal/ESignatureModal";
import { useReducer } from "react";
import HeaderTop from "../../../components/Header/HeaderTop";
import Grid from "../../../components/DataFields/Grid";
import InputDate from "../../../components/DataFields/InputDate";
import { CurrentDate } from "../../../components/DateReturners";
import "../DocumentPanel.css";
import {
  docFile,
  auditDetails,
  progressItems,
  site,
  currentYear,
} from "./AuditProgramPanelFunctions";

function AuditProgramPanel() {
  const [form, setForm] = useState("Audit Program");
  const [progressArray, setProgressArray] = useState([progressItems[0].name]);
  const [signatureModal, setSignatureModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [keywordElements, setKeywordElements] = useState([]);



  const [auditProgram, setAuditProgram] = useReducer(
    (prev, next) => ({
      ...prev,
      ...next,
    }),
    {
      recordNumber: `${site}/AP/${currentYear}/000001`,
      site: site,
      initiator: "Amit Guru",
      dateOfInitiation: CurrentDate(),
      initiatorGroup: "",

      assignedTo: "",
      dueDate: "",

      shortDescription: "",
      description: "",
      initiatedThrough: "",
      initiatedThroughOthers: "",

      type: "",
      year: "",
      quarter: "",
      comments: "",
      relatedUrl: "",
      urlDescription: "",
      suggestedAudit: "",
      typeNature: "",
      riskLevel: "",
      zone: "",
      country: "",
      state: "",
      city: "",
      auditProgram: "",
      attachedFiles: "",
      severityLevel: "",
    }
  );


 

 
 


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
            <strong> Record Name:&nbsp;</strong>AuditProgram Panel
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
                          <div
                            className={form === "Audit Program" ? "active" : ""}
                            onClick={() => setForm("Audit Program")}
                          >
                            Audit Program
                          </div>

                          <div
                            className={form === "Signatures" ? "active" : ""}
                            onClick={() => setForm("Signatures")}
                          >
                            Signatures
                          </div>
                        </div>

                        {form === "Audit Program" ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="sub-head">
                                General Information
                              </div>
                              <div className="form-flex">
                                <div className="group-input">
                                  <label>Record Number</label>
                                  <input
                                    type="text"
                                    value={auditProgram.recordNumber}
                                    disabled
                                  />
                                </div>

                                <div className="group-input">
                                  <label>Division Code</label>
                                  <input
                                    type="text"
                                    value={auditProgram.site}
                                    disabled
                                  />
                                </div>

                                <div className="group-input">
                                  <label>Initiator</label>
                                  <input
                                    type="text"
                                    value={auditProgram.initiator}
                                    disabled
                                  />
                                </div>

                                <div className="group-input">
                                  <label>Date of Initiation</label>
                                  <input
                                    type="text"
                                    value={auditProgram.dateOfInitiation}
                                    disabled
                                  />
                                </div>

                                <div className="group-input">
                                  <label>Assigned To</label>
                                  <div className="instruction">&nbsp;</div>
                                  <select
                                    value={auditProgram.assignedTo}
                                    onChange={(e) =>
                                      setAuditProgram({
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
                                  value={auditProgram.dueDate}
                                  returnDate={(date) =>
                                    setAuditProgram({ dueDate: date })
                                  }
                                />

                                <div className="group-input">
                                  <label>Initiator Group </label>
                                  <select
                                    value={auditProgram.initiatorGroup}
                                    onChange={(e) =>
                                      setAuditProgram({
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
                                    <option value="M">Manufacturing</option>
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
                                    value={auditProgram.initiatorGroup}
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
                                  value={auditProgram.shortDescription}
                                  onChange={(e) =>
                                    setAuditProgram({
                                      shortDescription: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>
                              <div className="group-input">
                                <label>Severity Level</label>

                                <select
                                  value={auditProgram.severityLevel}
                                  onChange={(e) =>
                                    setAuditProgram({
                                      severityLevel: e.target.value,
                                    })
                                  }
                                >
                                  <option value="">-- Select --</option>
                                  <option value="">Major</option>
                                  <option value="">Minor</option>
                                  <option value="">Critical</option>
                                </select>
                              </div>

                              <div className="form-flex">
                                <div className="group-input">
                                  <label>Initiated Through</label>
                                  <div className="instruction">
                                    Please select related information
                                  </div>
                                  <select
                                    value={auditProgram.initiatedThrough}
                                    onChange={(e) =>
                                      setAuditProgram({
                                        initiatedThrough: e.target.value,
                                      })
                                    }
                                  >
                                    <option value="">-- Select --</option>
                                    <option value="recall">Recall</option>
                                    <option value="return">Return</option>
                                    <option value="deviation">Deviation</option>
                                    <option value="complaint">Complaint</option>
                                    <option value="regulatory">
                                      Regulatory
                                    </option>
                                    <option value="lab-incident">
                                      Lab Incident
                                    </option>
                                    <option value="improvement">
                                      Improvement
                                    </option>
                                    <option value="others">Others</option>
                                  </select>
                                </div>
                                <div className="group-input">
                                  <label>
                                    {auditProgram.initiatedThrough ===
                                      "others" && (
                                      <div className="required"></div>
                                    )}
                                    Other
                                  </label>
                                  <textarea
                                    value={auditProgram.initiatedThroughOthers}
                                    onChange={(e) =>
                                      setAuditProgram({
                                        initiatedThroughOthers: e.target.value,
                                      })
                                    }
                                    required={
                                      auditProgram.initiatedThrough === "others"
                                    }
                                  ></textarea>
                                </div>
                              </div>

                              <div className="tripple-grid">
                                <div className="col-lg-4">
                                  <div className="group-input">
                                    <label htmlFor="Type">Type</label>
                                    <select
                                      value={auditProgram.type}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          type: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">-- Select --</option>
                                      <option value="other">Other</option>
                                      <option value="annual">Annual</option>
                                      <option value="monthly">Monthly</option>
                                      <option value="quarterly">
                                        Quarterly
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-lg-4">
                                  <div className="group-input">
                                    <label htmlFor="Year">Year</label>
                                    {/* <select name="year"> */}
                                    <select
                                      value={auditProgram.year}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          year: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">-- Select --</option>
                                      <option value="2024">2024</option>
                                      <option value="2025">2025</option>
                                      <option value="2026">2026</option>
                                      <option value="2027">2027</option>
                                      <option value="2028">2028</option>
                                      <option value="2029">2029</option>
                                      <option value="2030">2030</option>
                                      <option value="2031">2031</option>
                                      <option value="2032">2032</option>
                                      <option value="2033">2033</option>
                                      <option value="2034">2034</option>
                                      <option value="2035">2035</option>
                                      <option value="2036">2036</option>
                                      <option value="2037">2037</option>
                                      <option value="2038">2038</option>
                                      <option value="2039">2039</option>
                                      <option value="2040">2040</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="group-input">
                                    <label htmlFor="Quarter">Quarter</label>

                                    <select
                                      value={auditProgram.quarter}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          quarter: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">-- Select --</option>
                                      <option value="Q1">Q1</option>
                                      <option value="Q2">Q2</option>
                                      <option value="Q3">Q3</option>
                                      <option value="Q4">Q4</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="details-form-data">
                                <Grid
                                  label={auditDetails.label}
                                  required={auditDetails.required}
                                  instruction={auditDetails.instruction}
                                  columnList={auditDetails.columnList}
                                />
                              </div>

                              <div className="group-input">
                                <label>Description</label>
                                <textarea
                                  value={auditProgram.description}
                                  onChange={(e) =>
                                    setAuditProgram({
                                      description: e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>

                              <div className="group-input">
                                <label>Comments</label>
                                <textarea
                                  value={auditProgram.comments}
                                  onChange={(e) =>
                                    setAuditProgram({
                                      comments: e.target.value,
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

                              <div className="form-flex">
                                <div className="group-input">
                                  <label htmlFor="related_url">
                                    Related URl's
                                  </label>
                                  <input
                                    type="url"
                                    name="related_url"
                                    id="related_url"
                                    value={auditProgram.relatedUrl}
                                    onChange={(e) =>
                                      setAuditProgram({
                                        relatedUrl: e.target.value,
                                      })
                                    }
                                  />
                                </div>

                                <div className="col-lg-6">
                                  <div className="group-input">
                                    <label htmlFor="related_url">
                                      URl's description
                                    </label>
                                    <input
                                      type="text"
                                      name="url_description"
                                      id="url_description"
                                      value={auditProgram.urlDescription}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          urlDescription: e.target.value,
                                        })
                                      }
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="sub-head">
                                  Geographical Information
                                </div>
                              </div>

                              <div className="form-flex">
                                <div className="col-lg-6">
                                  <div className="group-input">
                                    <label htmlFor="zone">Zone</label>
                                    <select
                                      name="zone"
                                      value={auditProgram.zone}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          zone: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">-- Select --</option>
                                      <option value="Asia">Asia</option>
                                      <option value="Europe">Europe</option>
                                      <option value="Africa">Africa</option>
                                      <option value="Central_America">
                                        Central America
                                      </option>
                                      <option value="South_America">
                                        South America
                                      </option>
                                      <option value="Oceania">Oceania</option>
                                      <option value="North_America">
                                        North America
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="group-input">
                                    <label htmlFor="country">Country</label>

                                    <select
                                      className="countries"
                                      name="country"
                                      id="countryId"
                                      value={auditProgram.country}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          country: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">Select Country</option>
                                      <option value="Afghanistan" countryid="1">
                                        Afghanistan
                                      </option>
                                      <option
                                        value="Aland Islands"
                                        countryid="2"
                                      >
                                        Aland Islands
                                      </option>
                                      <option value="Albania" countryid="3">
                                        Albania
                                      </option>
                                      <option value="Algeria" countryid="4">
                                        Algeria
                                      </option>
                                      <option
                                        value="American Samoa"
                                        countryid="5"
                                      >
                                        American Samoa
                                      </option>
                                      <option value="Andorra" countryid="6">
                                        Andorra
                                      </option>
                                      <option value="Angola" countryid="7">
                                        Angola
                                      </option>
                                      <option value="Anguilla" countryid="8">
                                        Anguilla
                                      </option>
                                      <option value="Antarctica" countryid="9">
                                        Antarctica
                                      </option>
                                      <option value="Argentina" countryid="11">
                                        Argentina
                                      </option>
                                      <option value="Armenia" countryid="12">
                                        Armenia
                                      </option>
                                      <option value="Aruba" countryid="13">
                                        Aruba
                                      </option>
                                      <option value="Australia" countryid="14">
                                        Australia
                                      </option>
                                      <option value="Austria" countryid="15">
                                        Austria
                                      </option>
                                      <option value="Azerbaijan" countryid="16">
                                        Azerbaijan
                                      </option>
                                      <option
                                        value="The Bahamas"
                                        countryid="17"
                                      >
                                        The Bahamas
                                      </option>
                                      <option value="Bahrain" countryid="18">
                                        Bahrain
                                      </option>
                                      <option value="Bangladesh" countryid="19">
                                        Bangladesh
                                      </option>
                                      <option value="Barbados" countryid="20">
                                        Barbados
                                      </option>
                                      <option value="Belarus" countryid="21">
                                        Belarus
                                      </option>
                                      <option value="Belgium" countryid="22">
                                        Belgium
                                      </option>
                                      <option value="Belize" countryid="23">
                                        Belize
                                      </option>
                                      <option value="Benin" countryid="24">
                                        Benin
                                      </option>
                                      <option value="Bermuda" countryid="25">
                                        Bermuda
                                      </option>
                                      <option value="Bhutan" countryid="26">
                                        Bhutan
                                      </option>
                                      <option value="Bolivia" countryid="27">
                                        Bolivia
                                      </option>
                                      <option
                                        value="Bosnia and Herzegovina"
                                        countryid="28"
                                      >
                                        Bosnia and Herzegovina
                                      </option>
                                      <option value="Botswana" countryid="29">
                                        Botswana
                                      </option>
                                      <option
                                        value="Bouvet Island"
                                        countryid="30"
                                      >
                                        Bouvet Island
                                      </option>
                                      <option value="Brazil" countryid="31">
                                        Brazil
                                      </option>
                                      <option
                                        value="British Indian Ocean Territory"
                                        countryid="32"
                                      >
                                        British Indian Ocean Territory
                                      </option>
                                      <option value="Brunei" countryid="33">
                                        Brunei
                                      </option>
                                      <option value="Bulgaria" countryid="34">
                                        Bulgaria
                                      </option>
                                      <option
                                        value="Burkina Faso"
                                        countryid="35"
                                      >
                                        Burkina Faso
                                      </option>
                                      <option value="Burundi" countryid="36">
                                        Burundi
                                      </option>
                                      <option value="Cambodia" countryid="37">
                                        Cambodia
                                      </option>
                                      <option value="Cameroon" countryid="38">
                                        Cameroon
                                      </option>
                                      <option value="Canada" countryid="39">
                                        Canada
                                      </option>
                                      <option value="Cape Verde" countryid="40">
                                        Cape Verde
                                      </option>
                                      <option
                                        value="Cayman Islands"
                                        countryid="41"
                                      >
                                        Cayman Islands
                                      </option>
                                      <option
                                        value="Central African Republic"
                                        countryid="42"
                                      >
                                        Central African Republic
                                      </option>
                                      <option value="Chile" countryid="44">
                                        Chile
                                      </option>
                                      <option value="China" countryid="45">
                                        China
                                      </option>
                                      <option
                                        value="Christmas Island"
                                        countryid="46"
                                      >
                                        Christmas Island
                                      </option>
                                      <option
                                        value="Cocos (Keeling) Islands"
                                        countryid="47"
                                      >
                                        Cocos (Keeling) Islands
                                      </option>
                                      <option value="Colombia" countryid="48">
                                        Colombia
                                      </option>
                                      <option value="Comoros" countryid="49">
                                        Comoros
                                      </option>
                                      <option value="Congo" countryid="50">
                                        Congo
                                      </option>
                                      <option
                                        value="Democratic Republic of the Congo"
                                        countryid="51"
                                      >
                                        Democratic Republic of the Congo
                                      </option>
                                      <option
                                        value="Cook Islands"
                                        countryid="52"
                                      >
                                        Cook Islands
                                      </option>
                                      <option value="Costa Rica" countryid="53">
                                        Costa Rica
                                      </option>
                                      <option value="Croatia" countryid="55">
                                        Croatia
                                      </option>
                                      <option value="Cuba" countryid="56">
                                        Cuba
                                      </option>
                                      <option value="Cyprus" countryid="57">
                                        Cyprus
                                      </option>
                                      <option
                                        value="Czech Republic"
                                        countryid="58"
                                      >
                                        Czech Republic
                                      </option>
                                      <option value="Denmark" countryid="59">
                                        Denmark
                                      </option>
                                      <option value="Djibouti" countryid="60">
                                        Djibouti
                                      </option>
                                      <option value="Dominica" countryid="61">
                                        Dominica
                                      </option>
                                      <option
                                        value="Dominican Republic"
                                        countryid="62"
                                      >
                                        Dominican Republic
                                      </option>
                                      <option value="East Timor" countryid="63">
                                        East Timor
                                      </option>
                                      <option value="Ecuador" countryid="64">
                                        Ecuador
                                      </option>
                                      <option value="Egypt" countryid="65">
                                        Egypt
                                      </option>
                                      <option
                                        value="El Salvador"
                                        countryid="66"
                                      >
                                        El Salvador
                                      </option>
                                      <option
                                        value="Equatorial Guinea"
                                        countryid="67"
                                      >
                                        Equatorial Guinea
                                      </option>
                                      <option value="Eritrea" countryid="68">
                                        Eritrea
                                      </option>
                                      <option value="Estonia" countryid="69">
                                        Estonia
                                      </option>
                                      <option value="Ethiopia" countryid="70">
                                        Ethiopia
                                      </option>
                                      <option
                                        value="Falkland Islands"
                                        countryid="71"
                                      >
                                        Falkland Islands
                                      </option>
                                      <option
                                        value="Faroe Islands"
                                        countryid="72"
                                      >
                                        Faroe Islands
                                      </option>
                                      <option
                                        value="Fiji Islands"
                                        countryid="73"
                                      >
                                        Fiji Islands
                                      </option>
                                      <option value="Finland" countryid="74">
                                        Finland
                                      </option>
                                      <option value="France" countryid="75">
                                        France
                                      </option>
                                      <option
                                        value="French Guiana"
                                        countryid="76"
                                      >
                                        French Guiana
                                      </option>
                                      <option
                                        value="French Polynesia"
                                        countryid="77"
                                      >
                                        French Polynesia
                                      </option>
                                      <option
                                        value="French Southern Territories"
                                        countryid="78"
                                      >
                                        French Southern Territories
                                      </option>
                                      <option value="Gabon" countryid="79">
                                        Gabon
                                      </option>
                                      <option value="Gambia The" countryid="80">
                                        Gambia The
                                      </option>
                                      <option value="Georgia" countryid="81">
                                        Georgia
                                      </option>
                                      <option value="Germany" countryid="82">
                                        Germany
                                      </option>
                                      <option value="Ghana" countryid="83">
                                        Ghana
                                      </option>
                                      <option value="Gibraltar" countryid="84">
                                        Gibraltar
                                      </option>
                                      <option value="Greece" countryid="85">
                                        Greece
                                      </option>
                                      <option value="Greenland" countryid="86">
                                        Greenland
                                      </option>
                                      <option value="Guadeloupe" countryid="88">
                                        Guadeloupe
                                      </option>
                                      <option value="Guam" countryid="89">
                                        Guam
                                      </option>
                                      <option value="Guatemala" countryid="90">
                                        Guatemala
                                      </option>
                                      <option
                                        value="Guernsey and Alderney"
                                        countryid="91"
                                      >
                                        Guernsey and Alderney
                                      </option>
                                      <option value="Guinea" countryid="92">
                                        Guinea
                                      </option>
                                      <option
                                        value="Guinea-Bissau"
                                        countryid="93"
                                      >
                                        Guinea-Bissau
                                      </option>
                                      <option value="Guyana" countryid="94">
                                        Guyana
                                      </option>
                                      <option value="Haiti" countryid="95">
                                        Haiti
                                      </option>
                                      <option
                                        value="Heard Island and McDonald Islands"
                                        countryid="96"
                                      >
                                        Heard Island and McDonald Islands
                                      </option>
                                      <option value="Honduras" countryid="97">
                                        Honduras
                                      </option>
                                      <option
                                        value="Hong Kong S.A.R."
                                        countryid="98"
                                      >
                                        Hong Kong S.A.R.
                                      </option>
                                      <option value="Hungary" countryid="99">
                                        Hungary
                                      </option>
                                      <option value="Iceland" countryid="100">
                                        Iceland
                                      </option>
                                      <option value="India" countryid="101">
                                        India
                                      </option>
                                      <option value="Indonesia" countryid="102">
                                        Indonesia
                                      </option>
                                      <option value="Iran" countryid="103">
                                        Iran
                                      </option>
                                      <option value="Iraq" countryid="104">
                                        Iraq
                                      </option>
                                      <option value="Ireland" countryid="105">
                                        Ireland
                                      </option>
                                      <option value="Israel" countryid="106">
                                        Israel
                                      </option>
                                      <option value="Italy" countryid="107">
                                        Italy
                                      </option>
                                      <option value="Jamaica" countryid="108">
                                        Jamaica
                                      </option>
                                      <option value="Japan" countryid="109">
                                        Japan
                                      </option>
                                      <option value="Jersey" countryid="110">
                                        Jersey
                                      </option>
                                      <option value="Jordan" countryid="111">
                                        Jordan
                                      </option>
                                      <option
                                        value="Kazakhstan"
                                        countryid="112"
                                      >
                                        Kazakhstan
                                      </option>
                                      <option value="Kenya" countryid="113">
                                        Kenya
                                      </option>
                                      <option value="Kiribati" countryid="114">
                                        Kiribati
                                      </option>
                                      <option
                                        value="North Korea"
                                        countryid="115"
                                      >
                                        North Korea
                                      </option>
                                      <option
                                        value="South Korea"
                                        countryid="116"
                                      >
                                        South Korea
                                      </option>
                                      <option value="Kuwait" countryid="117">
                                        Kuwait
                                      </option>
                                      <option
                                        value="Kyrgyzstan"
                                        countryid="118"
                                      >
                                        Kyrgyzstan
                                      </option>
                                      <option value="Laos" countryid="119">
                                        Laos
                                      </option>
                                      <option value="Latvia" countryid="120">
                                        Latvia
                                      </option>
                                      <option value="Lebanon" countryid="121">
                                        Lebanon
                                      </option>
                                      <option value="Lesotho" countryid="122">
                                        Lesotho
                                      </option>
                                      <option value="Liberia" countryid="123">
                                        Liberia
                                      </option>
                                      <option value="Libya" countryid="124">
                                        Libya
                                      </option>
                                      <option
                                        value="Liechtenstein"
                                        countryid="125"
                                      >
                                        Liechtenstein
                                      </option>
                                      <option value="Lithuania" countryid="126">
                                        Lithuania
                                      </option>
                                      <option
                                        value="Luxembourg"
                                        countryid="127"
                                      >
                                        Luxembourg
                                      </option>
                                      <option
                                        value="Macau S.A.R."
                                        countryid="128"
                                      >
                                        Macau S.A.R.
                                      </option>
                                      <option value="Macedonia" countryid="129">
                                        Macedonia
                                      </option>
                                      <option
                                        value="Madagascar"
                                        countryid="130"
                                      >
                                        Madagascar
                                      </option>
                                      <option value="Malawi" countryid="131">
                                        Malawi
                                      </option>
                                      <option value="Malaysia" countryid="132">
                                        Malaysia
                                      </option>
                                      <option value="Maldives" countryid="133">
                                        Maldives
                                      </option>
                                      <option value="Mali" countryid="134">
                                        Mali
                                      </option>
                                      <option value="Malta" countryid="135">
                                        Malta
                                      </option>
                                      <option
                                        value="Man (Isle of)"
                                        countryid="136"
                                      >
                                        Man (Isle of)
                                      </option>
                                      <option
                                        value="Marshall Islands"
                                        countryid="137"
                                      >
                                        Marshall Islands
                                      </option>
                                      <option
                                        value="Martinique"
                                        countryid="138"
                                      >
                                        Martinique
                                      </option>
                                      <option
                                        value="Mauritania"
                                        countryid="139"
                                      >
                                        Mauritania
                                      </option>
                                      <option value="Mauritius" countryid="140">
                                        Mauritius
                                      </option>
                                      <option value="Mayotte" countryid="141">
                                        Mayotte
                                      </option>
                                      <option value="Mexico" countryid="142">
                                        Mexico
                                      </option>
                                      <option
                                        value="Micronesia"
                                        countryid="143"
                                      >
                                        Micronesia
                                      </option>
                                      <option value="Moldova" countryid="144">
                                        Moldova
                                      </option>
                                      <option value="Monaco" countryid="145">
                                        Monaco
                                      </option>
                                      <option value="Mongolia" countryid="146">
                                        Mongolia
                                      </option>
                                      <option
                                        value="Montenegro"
                                        countryid="147"
                                      >
                                        Montenegro
                                      </option>
                                      <option
                                        value="Montserrat"
                                        countryid="148"
                                      >
                                        Montserrat
                                      </option>
                                      <option value="Morocco" countryid="149">
                                        Morocco
                                      </option>
                                      <option
                                        value="Mozambique"
                                        countryid="150"
                                      >
                                        Mozambique
                                      </option>
                                      <option value="Myanmar" countryid="151">
                                        Myanmar
                                      </option>
                                      <option value="Namibia" countryid="152">
                                        Namibia
                                      </option>
                                      <option value="Nauru" countryid="153">
                                        Nauru
                                      </option>
                                      <option value="Nepal" countryid="154">
                                        Nepal
                                      </option>
                                      <option
                                        value="Bonaire, Sint Eustatius and Saba"
                                        countryid="155"
                                      >
                                        Bonaire, Sint Eustatius and Saba
                                      </option>
                                      <option
                                        value="Netherlands"
                                        countryid="156"
                                      >
                                        Netherlands
                                      </option>
                                      <option
                                        value="New Caledonia"
                                        countryid="157"
                                      >
                                        New Caledonia
                                      </option>
                                      <option
                                        value="New Zealand"
                                        countryid="158"
                                      >
                                        New Zealand
                                      </option>
                                      <option value="Nicaragua" countryid="159">
                                        Nicaragua
                                      </option>
                                      <option value="Niger" countryid="160">
                                        Niger
                                      </option>
                                      <option value="Nigeria" countryid="161">
                                        Nigeria
                                      </option>
                                      <option value="Niue" countryid="162">
                                        Niue
                                      </option>
                                      <option
                                        value="Norfolk Island"
                                        countryid="163"
                                      >
                                        Norfolk Island
                                      </option>
                                      <option
                                        value="Northern Mariana Islands"
                                        countryid="164"
                                      >
                                        Northern Mariana Islands
                                      </option>
                                      <option value="Norway" countryid="165">
                                        Norway
                                      </option>
                                      <option value="Oman" countryid="166">
                                        Oman
                                      </option>
                                      <option value="Pakistan" countryid="167">
                                        Pakistan
                                      </option>
                                      <option value="Palau" countryid="168">
                                        Palau
                                      </option>
                                      <option
                                        value="Palestinian Territory Occupied"
                                        countryid="169"
                                      >
                                        Palestinian Territory Occupied
                                      </option>
                                      <option value="Panama" countryid="170">
                                        Panama
                                      </option>
                                      <option
                                        value="Papua new Guinea"
                                        countryid="171"
                                      >
                                        Papua new Guinea
                                      </option>
                                      <option value="Paraguay" countryid="172">
                                        Paraguay
                                      </option>
                                      <option value="Peru" countryid="173">
                                        Peru
                                      </option>
                                      <option
                                        value="Philippines"
                                        countryid="174"
                                      >
                                        Philippines
                                      </option>
                                      <option
                                        value="Pitcairn Island"
                                        countryid="175"
                                      >
                                        Pitcairn Island
                                      </option>
                                      <option value="Poland" countryid="176">
                                        Poland
                                      </option>
                                      <option value="Portugal" countryid="177">
                                        Portugal
                                      </option>
                                      <option
                                        value="Puerto Rico"
                                        countryid="178"
                                      >
                                        Puerto Rico
                                      </option>
                                      <option value="Qatar" countryid="179">
                                        Qatar
                                      </option>
                                      <option value="Reunion" countryid="180">
                                        Reunion
                                      </option>
                                      <option value="Romania" countryid="181">
                                        Romania
                                      </option>
                                      <option value="Russia" countryid="182">
                                        Russia
                                      </option>
                                      <option value="Rwanda" countryid="183">
                                        Rwanda
                                      </option>
                                      <option
                                        value="Saint Helena"
                                        countryid="184"
                                      >
                                        Saint Helena
                                      </option>
                                      <option
                                        value="Saint Kitts And Nevis"
                                        countryid="185"
                                      >
                                        Saint Kitts And Nevis
                                      </option>
                                      <option
                                        value="Saint Lucia"
                                        countryid="186"
                                      >
                                        Saint Lucia
                                      </option>
                                      <option
                                        value="Saint Pierre and Miquelon"
                                        countryid="187"
                                      >
                                        Saint Pierre and Miquelon
                                      </option>
                                      <option
                                        value="Saint Vincent And The Grenadines"
                                        countryid="188"
                                      >
                                        Saint Vincent And The Grenadines
                                      </option>
                                      <option
                                        value="Saint-Barthelemy"
                                        countryid="189"
                                      >
                                        Saint-Barthelemy
                                      </option>
                                      <option
                                        value="Saint-Martin (French part)"
                                        countryid="190"
                                      >
                                        Saint-Martin (French part)
                                      </option>
                                      <option value="Samoa" countryid="191">
                                        Samoa
                                      </option>
                                      <option
                                        value="San Marino"
                                        countryid="192"
                                      >
                                        San Marino
                                      </option>
                                      <option
                                        value="Sao Tome and Principe"
                                        countryid="193"
                                      >
                                        Sao Tome and Principe
                                      </option>
                                      <option
                                        value="Saudi Arabia"
                                        countryid="194"
                                      >
                                        Saudi Arabia
                                      </option>
                                      <option value="Senegal" countryid="195">
                                        Senegal
                                      </option>
                                      <option value="Serbia" countryid="196">
                                        Serbia
                                      </option>
                                      <option
                                        value="Seychelles"
                                        countryid="197"
                                      >
                                        Seychelles
                                      </option>
                                      <option
                                        value="Sierra Leone"
                                        countryid="198"
                                      >
                                        Sierra Leone
                                      </option>
                                      <option value="Singapore" countryid="199">
                                        Singapore
                                      </option>
                                      <option value="Slovakia" countryid="200">
                                        Slovakia
                                      </option>
                                      <option value="Slovenia" countryid="201">
                                        Slovenia
                                      </option>
                                      <option
                                        value="Solomon Islands"
                                        countryid="202"
                                      >
                                        Solomon Islands
                                      </option>
                                      <option value="Somalia" countryid="203">
                                        Somalia
                                      </option>
                                      <option
                                        value="South Africa"
                                        countryid="204"
                                      >
                                        South Africa
                                      </option>
                                      <option
                                        value="South Georgia"
                                        countryid="205"
                                      >
                                        South Georgia
                                      </option>
                                      <option
                                        value="South Sudan"
                                        countryid="206"
                                      >
                                        South Sudan
                                      </option>
                                      <option value="Spain" countryid="207">
                                        Spain
                                      </option>
                                      <option value="Sri Lanka" countryid="208">
                                        Sri Lanka
                                      </option>
                                      <option value="Sudan" countryid="209">
                                        Sudan
                                      </option>
                                      <option value="Suriname" countryid="210">
                                        Suriname
                                      </option>
                                      <option
                                        value="Svalbard And Jan Mayen Islands"
                                        countryid="211"
                                      >
                                        Svalbard And Jan Mayen Islands
                                      </option>
                                      <option value="Swaziland" countryid="212">
                                        Swaziland
                                      </option>
                                      <option value="Sweden" countryid="213">
                                        Sweden
                                      </option>
                                      <option
                                        value="Switzerland"
                                        countryid="214"
                                      >
                                        Switzerland
                                      </option>
                                      <option value="Syria" countryid="215">
                                        Syria
                                      </option>
                                      <option value="Taiwan" countryid="216">
                                        Taiwan
                                      </option>
                                      <option
                                        value="Tajikistan"
                                        countryid="217"
                                      >
                                        Tajikistan
                                      </option>
                                      <option value="Tanzania" countryid="218">
                                        Tanzania
                                      </option>
                                      <option value="Thailand" countryid="219">
                                        Thailand
                                      </option>
                                      <option value="Togo" countryid="220">
                                        Togo
                                      </option>
                                      <option value="Tokelau" countryid="221">
                                        Tokelau
                                      </option>
                                      <option
                                        value="Trinidad And Tobago"
                                        countryid="223"
                                      >
                                        Trinidad And Tobago
                                      </option>
                                      <option value="Tunisia" countryid="224">
                                        Tunisia
                                      </option>
                                      <option value="Turkey" countryid="225">
                                        Turkey
                                      </option>
                                      <option
                                        value="Turkmenistan"
                                        countryid="226"
                                      >
                                        Turkmenistan
                                      </option>
                                      <option
                                        value="Turks And Caicos Islands"
                                        countryid="227"
                                      >
                                        Turks And Caicos Islands
                                      </option>
                                      <option value="Tuvalu" countryid="228">
                                        Tuvalu
                                      </option>
                                      <option value="Uganda" countryid="229">
                                        Uganda
                                      </option>
                                      <option value="Ukraine" countryid="230">
                                        Ukraine
                                      </option>
                                      <option
                                        value="United Arab Emirates"
                                        countryid="231"
                                      >
                                        United Arab Emirates
                                      </option>
                                      <option
                                        value="United Kingdom"
                                        countryid="232"
                                      >
                                        United Kingdom
                                      </option>
                                      <option
                                        value="United States"
                                        countryid="233"
                                      >
                                        United States
                                      </option>
                                      <option
                                        value="United States Minor Outlying Islands"
                                        countryid="234"
                                      >
                                        United States Minor Outlying Islands
                                      </option>
                                      <option value="Uruguay" countryid="235">
                                        Uruguay
                                      </option>
                                      <option
                                        value="Uzbekistan"
                                        countryid="236"
                                      >
                                        Uzbekistan
                                      </option>
                                      <option value="Vanuatu" countryid="237">
                                        Vanuatu
                                      </option>
                                      <option
                                        value="Vatican City State (Holy See)"
                                        countryid="238"
                                      >
                                        Vatican City State (Holy See)
                                      </option>
                                      <option value="Venezuela" countryid="239">
                                        Venezuela
                                      </option>
                                      <option value="Vietnam" countryid="240">
                                        Vietnam
                                      </option>
                                      <option
                                        value="Virgin Islands (British)"
                                        countryid="241"
                                      >
                                        Virgin Islands (British)
                                      </option>
                                      <option
                                        value="Virgin Islands (US)"
                                        countryid="242"
                                      >
                                        Virgin Islands (US)
                                      </option>
                                      <option
                                        value="Wallis And Futuna Islands"
                                        countryid="243"
                                      >
                                        Wallis And Futuna Islands
                                      </option>
                                      <option
                                        value="Western Sahara"
                                        countryid="244"
                                      >
                                        Western Sahara
                                      </option>
                                      <option value="Yemen" countryid="245">
                                        Yemen
                                      </option>
                                      <option value="Zambia" countryid="246">
                                        Zambia
                                      </option>
                                      <option value="Zimbabwe" countryid="247">
                                        Zimbabwe
                                      </option>
                                      <option value="Kosovo" countryid="248">
                                        Kosovo
                                      </option>
                                      <option value="Curaçao" countryid="249">
                                        Curaçao
                                      </option>
                                      <option
                                        value="Sint Maarten (Dutch part)"
                                        countryid="250"
                                      >
                                        Sint Maarten (Dutch part)
                                      </option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="group-input">
                                    <label htmlFor="State/District">
                                      State/District
                                    </label>

                                    <select
                                      className="states"
                                      name="state"
                                      id="stateId"
                                      value={auditProgram.state}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          state: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">Select State</option>
                                    </select>
                                  </div>
                                </div>

                                <div className="col-lg-6">
                                  <div className="group-input">
                                    <label htmlFor="City">City</label>

                                    <select
                                      className="cities"
                                      name="city"
                                      id="cityId"
                                      value={auditProgram.city}
                                      onChange={(e) =>
                                        setAuditProgram({
                                          city: e.target.value,
                                        })
                                      }
                                    >
                                      <option value="">Select City</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              <div className="col-12 sub-head">
                                Extension Justification
                              </div>

                              <div className="group-input">
                                <label>Due Date Extension Justification</label>
                                <div className="instruction">
                                  Please Mention justification if due date is
                                  crossed
                                </div>
                                <textarea
                                  value={
                                    auditProgram.DueDateExtensionJustification
                                  }
                                  onChange={(e) =>
                                    setAuditProgram({
                                      DueDateExtensionJustification:
                                        e.target.value,
                                    })
                                  }
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        ) : form === "Signatures" ? (
                          <div className="document-form">
                            <div className="details-form-data">
                              <div className="activity-log-field">
                                <div>
                                  <strong>Submitted By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Submitted On:&nbsp;</strong>
                                  15 Jan, 2023 11:00 PM
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
                                  <strong>Cancelled  By:&nbsp;</strong>
                                  Shaleen Mishra
                                </div>
                                <div>
                                  <strong>Cancelled  On:&nbsp;</strong>
                                  15 Jan, 2023 11:00 PM
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

export default AuditProgramPanel;
