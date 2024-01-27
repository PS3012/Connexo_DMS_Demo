const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const workFlow = ["Opened", "HOD Review", "Pending QA Review", "CFT/SME Review", "Pending Change Implementation", "Closed-Done"]




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
  ];

export  const auditDetails = {
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