const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["Observation", "CAPA Plan", "Impact Analysis", "Summary", "Signatures"];
export const workFlow = ["Opened", "HOD Review", "Pending QA Review", "CFT/SME Review", "Pending Change Implementation", "Closed-Done"]


export const actionPlan = {
    label: "Action Plan",
    instruction: <div></div>,
    required: false,
    columnList: [
      { id: "2.1.1.1", name: "Action", type: "text" },
      { id: "2.1.1.2", name: "Responsible", type: "text" },
      { id: "2.1.1.3", name: "Deadline", type: "text" },
      { id: "2.1.1.4", name: "Item Status", type: "text" },
    ],
  };

export const docFile = [
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
    {
      label: "Related Obsevations",
      instruction: "Please Attach all relevant or supporting documents",
      required: false,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
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

 export const progressItems = [
    {
      id: 1,
      name: "Opened",
      details: "Document is opened at 10 Jan, 2023 11:12PM",
    },
    {
      id: 2,
      name: "HOD Review",
      details: "Action Item child can be created at this stage.",
    },
    { id: 3, name: "Pending QA Review", details: "" },
    { id: 4, name: "CFT/SME Review", details: "" },
    {
      id: 5,
      name: "Pending Change Implementation",
      details: "New Document child can be created at this stage.",
    },
    { id: 6, name: "Closed - Done", details: "" },
  ];