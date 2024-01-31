const currentDate = new Date();
export const site = localStorage.getItem("site");
export const currentYear = currentDate.getFullYear();

export const formList = [
  "General Information",
  "Post Completion",
  "Action Approval",
  "Activity Log",
];

export const workFlow =["Opened", "Work In Progress", "Closed-Done"]

export const FunctionName = [
    { label: "Amit Guru", value: "Amit Guru" },
    { label: "Shaleen Mishra", value: "Shaleen Mishra" },
    { label: "Vikas Prajapati", value: "Vikas Prajapati" },
    { label: "Anshul Patel", value: "Anshul Patel" },
    { label: "Madhulika Mishra", value: "Madhulika Mishra" },
    { label: " Akash Asthana", value: " Akash Asthana" },
    { label: " Jim Kim", value: " Jim Kim" },
  ];

 export const docFile = [
    {
      label: "File attachment",
      instruction: "Please Attach all relevant or supporting documents",
      required: true,
      columnList: [
        { id: "2.1.1.1", name: "Title of Document", type: "text" },
        { id: "2.1.1.2", name: "Attached File", type: "File" },
        { id: "2.1.1.3", name: "Remark", type: "text" },
      ],
    },
   
  ];
