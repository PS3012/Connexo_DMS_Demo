import React from "react";
import { useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import HeaderBottom from "../../components/Header/HeaderBottom";
import Chart from "react-apexcharts";
import "./Analytics.css";

function Analytics() {
  const initialChart = {
    options: {
      colors: ["#00CED1", "#DDA0DD", "#00FA9A", "#F08080", "#DC143C", "#FF1493", "#FF7F50", "#FF4500", "#FFFF00", "#4682B4"],
      chart: {
        id: "bar-chart",
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec",
        ],
      },
    },
    series: [
      {
        name: "CAPA",
        data: [30, 40, 45, 50, 49, 60, 70, 91, 30, 40, 45],
      },
      {
        name: "changecontrol",
        data: [24, 60, 35, 80, 29, 70, 50, 51, 34, 50, 45],
      },
      {
        name: "actionitems",
        data: [34, 50, 45, 50, 19, 85, 21, 87, 24, 60, 35,],
      },
      {
        name: "internalaudit",
        data: [44, 65, 45, 30, 29, 95, 31, 97, 34, 50, 45,],
      },
      {
        name: "externalaudit",
        data: [34, 85, 55, 50, 79, 71, 21, 87, 44, 65, 45,],
      },
      {
        name: "labincident",
        data: [55, 65, 75, 85, 95, 85, 75, 65, 34, 85, 55,],
      },
      {
        name: "riskassessment",
        data: [34, 65, 45, 50, 29, 75, 21, 87, 55, 65, 75,],
      },
      {
        name: "rootcauseanalysis",
        data: [20, 30, 40, 50, 60, 70, 80, 90, 34, 65, 100,],
      },
      {
        name: "managementreview",
        data: [10, 15, 45, 50, 29, 75, 21, 100, 20, 30, 40,],
      },
    ],
  };


  const [barChart, setBarChart] = useState(initialChart);
  const [selectedProcess, setSelectedProcess] = useState('all_records');

  const handleProcessChange = (selectedProcess) => {
    setSelectedProcess(selectedProcess);

    if (selectedProcess === 'all_records') {
      setBarChart(initialChart);
    } else {
      const updatedSeries = initialChart.series.filter(item =>
        item.name.toLowerCase() === selectedProcess.toLowerCase()
      );
      setBarChart((prevChart) => ({
        ...prevChart,
        series: updatedSeries,
      }));
    }
  };

  return (
    <>
      <HeaderTop />
      <HeaderBottom />
      <div id="analytics-page">
        <div className="desktop-input-table-wrapper">
          <div className="input-wrapper">
            <div className="group-input-2">
              <label>Process</label>
              <select value={selectedProcess} onChange={(e) => handleProcessChange(e.target.value)}>
                <option value="all_records">All Records</option>
                <option value="capa">CAPA</option>
                <option value="changecontrol">Change Control</option>
                <option value="actionitems">Action Items</option>
                <option value="internalaudit">Internal Audit</option>
                <option value="externalaudit">External Audit</option>
                <option value="labincident">Lab Incident</option>
                <option value="riskassessment">Risk Assessment</option>
                <option value="rootcauseanalysis">Root Cause Analysis</option>
                <option value="managementreview">Management Review</option>
              </select>
            </div>
            <div className="group-input-2">
              <label>Criteria</label>
              <select>
                <option value="all_records">All Records</option>
                <option value="1">Closed Records</option>
                <option value="2">Opened Records</option>
                <option value="3">Cancelled Records</option>
                <option value="4">Overdue Records</option>
                <option value="5">Assigned To Me</option>
                <option value="6">Records Created Today</option>
                <option value="6">Sevierty Level</option>
              </select>
            </div>
            <button className="btn">Print</button>
          </div>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Record</th>
                  <th>Division</th>
                  <th>Process</th>
                  <th>Short Description</th>
                  <th>Date Opened</th>
                  <th>Assigned To</th>
                  <th>Due Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Chart
              options={barChart.options}
              series={barChart.series}
              type="bar"
              width="1300"
            />
          </div>
          <div className="col-4">
            <Chart
              options={barChart.options}
              series={barChart.series}
              type="line"
              width="1000"
            />
          </div>
        </div>
      </div>

    </>
  );
}

export default Analytics;
