const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["General Information", "Audit Planning", "Audit Preparation", "Audit Execution", "Audit Response & Closure", "Activity Log"]

export const workFlow = ["Opened", "HOD Review", "Pending QA Review", "CFT/SME Review", "Pending Change Implementation", "Closed-Done"]

export const FunctionName = [
    { label: "QA", value: "QA" },
    { label: "QC", value: "QC" },
    { label: "Manufacturing", value: "Manufacturing" },
    { label: "Warehouse", value: "Warehouse" },
    { label: "RA", value: "RA" },
    { label: "R&D,", value: "R&D" },
  ];

export const AuditTeam = [
    { label: "Amit Guru", value: "Amit Guru" },
    { label: "Amit Patel", value: "Amit Patel" },
    { label: "Akash Asthana", value: "Akash Asthana" },
    { label: "Madhulika Mishra", value: "Madhulika Mishra" },
    { label: "Shaleen Mishra", value: "Shaleen Mishra" },
  ];
  export const ObservationFields = [
    {
      label: "Observation Fields ",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Observation ID", type: "text" },
        { id: "2.1.1.2", name: "Date", type: "date" },
        { id: "2.1.1.3", name: "Auditor", type: "select" },
        { id: "2.1.1.4", name: "Auditee", type: "select" },
        { id: "2.1.1.5", name: "Observation Description", type: "text" },
        { id: "2.1.1.7", name: "Area/process", type: "text" },
        { id: "2.1.1.8", name: "Observation Category", type: "text" },
        { id: "2.1.1.9", name: "CAPA Required", type: "select" },
        { id: "2.1.1.10", name: "Auditee Response", type: "text" },
        { id: "2.1.1.11", name: "Auditor Review on Response", type: "text" },
        { id: "2.1.1.12", name: "QA Comments", type: "text" },
        { id: "2.1.1.13", name: "CAPA Details", type: "text" },
        { id: "2.1.1.14", name: "CAPA Due Date", type: "date" },
        { id: "2.1.1.15", name: "CAPA Owner", type: "select" },
        { id: "2.1.1.16", name: "Action Taken", type: "text" },
        { id: "2.1.1.17", name: "	CAPA Completion Date", type: "date" },
        { id: "2.1.1.18", name: "Status", type: "text" },
        { id: "2.1.1.19", name: "Remarks", type: "text" },
      ],
    },
    {
      label: "QA Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "QA Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "QA Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "CFT Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Training Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "List of Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
  ];
  export const AuditAgenda = {
    label: "Audit Agenda",
    instruction: <div></div>,
    required: true,
    columnList: [
      { id: "2.1.1.1", name: "	Area of Audit", type: "text" },
      { id: "2.1.1.2", name: "Scheduled Start Date", type: "date" },
      { id: "2.1.1.3", name: "Scheduled Start Time", type: "time" },
      { id: "2.1.1.4", name: "Scheduled End Date", type: "date" },
      { id: "2.1.1.5", name: "Auditor", type: "select" },
      { id: "2.1.1.6", name: "Auditee", type: "text" },
      { id: "2.1.1.7", name: "Remarks", type: "text" },
    ],
  };
  export const docFile = [
    {
      label: "Initial attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "List of Attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Guideline Attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Audit Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Audit Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
    {
      label: "Report Attachments",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
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
