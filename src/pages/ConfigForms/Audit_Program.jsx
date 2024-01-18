import { useState, useReducer } from "react";
import "./ConfigForms.css";
// import { MultiSelect } from "react-multi-select-component";
import HeaderTop from "../../components/Header/HeaderTop";
import Grid from "../../components/DataFields/Grid";
import InputDate from "../../components/DataFields/InputDate";
import FlexField from "../../components/DataFields/FlexField";

function Audit_Program() {
  const [form, setForm] = useState("Audit Program");
  const [typeOfChange, setTypeOfChange] = useState(0);
  const [code, setCode] = useState("");
  const [selected, setSelected] = useState([]);
  const [asideWorkFlow, setAsideWorkFlow] = useState(false);
  const [asideFamilyTree, setAsideFamilyTree] = useState(false);
  const [groupComment, setGroupComment] = useState(0);

  const [changeControl, setChangeControl] = useReducer(
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
  ];

  const membership = [
    { label: "Grapes", value: "grapes" },
    { label: "Mango", value: "mango", disabled: true },
    { label: "Strawberry", value: "strawberry" },
  ];
  const CFTReviewer = [
    { label: "Anshul Patel", value: "1" },
    { label: "Mango", value: "mango", disabled: true },
    { label: "Amit", value: "2" },
  ];
  const auditDetails = {
    label: "Audit Program",
    instruction: <div></div>,
    required: false,
    columnList: [
      {
        id: "2.1.1.1",
        name: "	Auditees",
        type: "singleSelection",
        selectionValues: [
          "Amit Guru",
          "Shaleen ",
          "Vikas Prajapat",
          "Amit Patel",
          "Madhulika",
          "Akash Asthana",
        ],
      },
      { id: "2.1.1.3", name: "Date Start", type: "Date" },
      { id: "2.1.1.4", name: "Date End", type: "Date" },
      {
        id: "2.1.1.2",
        name: "Lead Investigator",
        type: "singleSelection",
        selectionValues: [
          "Amit Guru",
          "Shaleen ",
          "Vikas Prajapat",
          "Amit Patel",
          "Madhulika",
          "Akash Asthana",
        ],
      },

      { id: "2.1.1.5", name: "Comment", type: "text" },
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
                      <strong> Record Name:&nbsp;</strong> Audit Program
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
                                  <label>
                                    <b>Assigned To</b>
                                  </label>
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
                                <div className="instruction">
                                  Please mention brief summary
                                </div>
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
                                    className="form-control"
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
                                      Regulatory
                                    </option>
                                    <option value="lab-incident">
                                      {" "}
                                      Lab Incident{" "}
                                    </option>
                                    <option value="improvement">
                                      Improvement
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

                              <div className="tripple-grid">
                                <div className="col-lg-4">
                                  <div className="group-input">
                                    <label htmlFor="Type">Type</label>
                                    <select name="type">
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
                                    <select name="year">
                                      <option value="">-- Select --</option>
                                      <option value="2001">2001</option>
                                      <option value="2002">2002</option>
                                      <option value="2003">2003</option>
                                      <option value="2004">2004</option>
                                      <option value="2005">2005</option>
                                      <option value="2006">2006</option>
                                      <option value="2007">2007</option>
                                      <option value="2008">2008</option>
                                      <option value="2009">2009</option>
                                      <option value="2010">2010</option>
                                      <option value="2011">2011</option>
                                      <option value="2012">2012</option>
                                      <option value="2013">2013</option>
                                      <option value="2014">2014</option>
                                      <option value="2015">2015</option>
                                      <option value="2016">2016</option>
                                      <option value="2017">2017</option>
                                      <option value="2018">2018</option>
                                      <option value="2019">2019</option>
                                      <option value="2020">2020</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="col-lg-4">
                                  <div className="group-input">
                                    <label htmlFor="Quarter">Quarter</label>
                                    <select name="Quarter">
                                      <option value="">-- Select --</option>
                                      <option value="Q1">Q1</option>
                                      <option value="Q2">Q2</option>
                                      <option value="Q3">Q3</option>
                                      <option value="Q4">Q4</option>
                                    </select>
                                  </div>
                                </div>
                              </div>

                              {/* <div className="document-form"> */}
                              <div className="details-form-data">
                                <Grid
                                  label={auditDetails.label}
                                  required={auditDetails.required}
                                  instruction={auditDetails.instruction}
                                  columnList={auditDetails.columnList}
                                />
                              </div>

                              <FlexField
                                label="Description"
                                instruction=""
                                isRequired="false"
                              />
                            </div>

                            <FlexField
                              label="Comments"
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

                            <div className="form-flex">
                              <div className="group-input">
                                <label htmlFor="related_url">
                                  Related URl's
                                </label>
                                <input
                                  type="url"
                                  name="related_url"
                                  id="related_url"
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
                                  />
                                </div>
                              </div>
                            </div>

                            <div className="col-12">
                              <div className="group-input">
                                <label htmlFor="suggested_audit">
                                  Suggested Audits
                                </label>
                                <input type="text" name="suggested_audits" />
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
                                  <select name="zone">
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
                                    name="country"
                                    className="countries"
                                    id="countryId"
                                  >
                                    <option value="">Select Country</option>
                                    <option value="Afghanistan" countryid="1">
                                      Afghanistan
                                    </option>
                                    <option value="Aland Islands" countryid="2">
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
                                    <option value="The Bahamas" countryid="17">
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
                                    <option value="Burkina Faso" countryid="35">
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
                                    <option value="Cook Islands" countryid="52">
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
                                    <option value="El Salvador" countryid="66">
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
                                    <option value="Fiji Islands" countryid="73">
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
                                    <option value="Kazakhstan" countryid="112">
                                      Kazakhstan
                                    </option>
                                    <option value="Kenya" countryid="113">
                                      Kenya
                                    </option>
                                    <option value="Kiribati" countryid="114">
                                      Kiribati
                                    </option>
                                    <option value="North Korea" countryid="115">
                                      North Korea
                                    </option>
                                    <option value="South Korea" countryid="116">
                                      South Korea
                                    </option>
                                    <option value="Kuwait" countryid="117">
                                      Kuwait
                                    </option>
                                    <option value="Kyrgyzstan" countryid="118">
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
                                    <option value="Luxembourg" countryid="127">
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
                                    <option value="Madagascar" countryid="130">
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
                                    <option value="Martinique" countryid="138">
                                      Martinique
                                    </option>
                                    <option value="Mauritania" countryid="139">
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
                                    <option value="Micronesia" countryid="143">
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
                                    <option value="Montenegro" countryid="147">
                                      Montenegro
                                    </option>
                                    <option value="Montserrat" countryid="148">
                                      Montserrat
                                    </option>
                                    <option value="Morocco" countryid="149">
                                      Morocco
                                    </option>
                                    <option value="Mozambique" countryid="150">
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
                                    <option value="Netherlands" countryid="156">
                                      Netherlands
                                    </option>
                                    <option
                                      value="New Caledonia"
                                      countryid="157"
                                    >
                                      New Caledonia
                                    </option>
                                    <option value="New Zealand" countryid="158">
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
                                    <option value="Philippines" countryid="174">
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
                                    <option value="Puerto Rico" countryid="178">
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
                                    <option value="Saint Lucia" countryid="186">
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
                                    <option value="San Marino" countryid="192">
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
                                    <option value="Seychelles" countryid="197">
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
                                    <option value="South Sudan" countryid="206">
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
                                    <option value="Switzerland" countryid="214">
                                      Switzerland
                                    </option>
                                    <option value="Syria" countryid="215">
                                      Syria
                                    </option>
                                    <option value="Taiwan" countryid="216">
                                      Taiwan
                                    </option>
                                    <option value="Tajikistan" countryid="217">
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
                                    <option value="Uzbekistan" countryid="236">
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
                                    name="state"
                                    className="states"
                                    id="stateId"
                                  >
                                    <option value="">Select State</option>
                                  </select>
                                </div>
                              </div>

                              <div className="col-lg-6">
                                <div className="group-input">
                                  <label htmlFor="City">City</label>
                                  <select
                                    name="city"
                                    className="cities"
                                    id="cityId"
                                  >
                                    <option value="">Select City</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div className="col-12 sub-head">
                              Extension Justification
                            </div>

                            <FlexField
                              label="Due Date Extension Justification"
                              instruction="Please Mention justification if due date is
                    crossed"
                              isRequired="false"
                            />
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

export default Audit_Program;
