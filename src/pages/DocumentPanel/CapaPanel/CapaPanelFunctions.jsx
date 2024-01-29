const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["General Information", "Material & Equipments Info", "CAPA Details", "Additional Information","Group Comments", "CAPA Closure", "Activity Log"]
export const workFlow = ["Opened", "HOD Review", "Pending QA Review", "CFT/SME Review", "Pending Change Implementation", "Closed-Done"]


export const docFile = [
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
    {
      label: 'QA Attachments',
      instruction: 'Please Attach all relevant or supporting documents',
      required: false,
      columnList: [
          { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
          { id: '2.1.1.2', name: 'Attached File', type: 'File' },
          { id: '2.1.1.3', name: 'Remark', type: 'text' },
      ]
  },
  {
    label: 'CFT Attachments',
    instruction: 'Please Attach all relevant or supporting documents',
    required: false,
    columnList: [
      { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
      { id: '2.1.1.2', name: 'Attached File', type: 'File' },
      { id: '2.1.1.3', name: 'Remark', type: 'text' },
    ]
  }
  ];


export const docDetails = {
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
export  const matDetails = {
    label: "Materials Details",
    instruction: <div></div>,
    required: false,
    columnList: [
      {
        id: "2.1.1.1",
        name: "Material Code",
        type: "singleSelection",
        selectionValues: [
          "-Select Value-",
          "DCAU0030",
          "BDZH0007",
          "BDZH0006",
          "BJJH0004A",
          "DCAU0036",
        ],
      },
      {
        id: "2.1.1.2",
        name: "Material Name",
        type: "singleSelection",
        selectionValues: [
          "PLACE",
          "BIMA",
          "CAFL",
          "BRI)",
          "DORZO",
        ],
      },
      { id: "2.1.1.3",
       name: "Material Type",
       type: "singleSelection",
       selectionValues: [
        "PLACE",
        "BIMA",
        "CAFL",
        "BRI)",
        "DORZO",
      ],
       },
      { id: "2.1.1.4",
      name: "Default Units",
      type: "singleSelection", 
      selectionValues: [
        "PLACE",
        "BIMA",
        "CAFL",
        "BRI)",
        "DORZO",
      ],
      
      },
      { id: "2.1.1.5",
      name: "Remarks",
      type: "text" },
    ],
  };
export const equiDetails = {
    label: "Equipment Details",
    instruction: <div></div>,
    required: false,
    columnList: [
      { id: "2.1.1.1",
       name: "Equipment ID",
       type: "singleSelection",
       selectionValues: [
        "-Select Value-",
        "DCAU0030",
        "BDZH0007",
        "BDZH0006",
        "BJJH0004A",
        "DCAU0036",
      ],
       },
      { id: "2.1.1.2",
       name: "Equipment Name",
       type: "singleSelection",
       selectionValues: [
        "PLACE",
        "BIMA",
        "CAFL",
        "BRI)",
        "DORZO",
      ],
       },
      { id: "2.1.1.3",
       name: "Status",
       type: "singleSelection",
       selectionValues: [
        "comp",
        "Incomp",
        "Pending",
        "Yes",
        "No",
      ],
       },
      { id: "2.1.1.4",
      name: "Remarks",
      type: "text" },
    ],
  };

  export const CFTReviewer = [
    { label: "Anshul Patel", value: "1" },
    { label: "Mango", value: "mango", disabled: true },
    { label: "Amit", value: "2" },
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
    { id: 6, name: "Closed - Done", details: "" },]