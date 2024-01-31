const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["General Information", "Risk Analysis ", "Additional Information", "Group Comments", "Lab Investigator Remark", "QA Head/Designee Eval Comments", "Activity Log"]

export const workFlow = ["Opened", "Investigation in Progress", "Pending Group Review", "Discussion", "Pending Group Review", "Pending QA Review", "Closed-Done"]

export const rootCauseInvestigators = [
    { label: "Amit Guru", value: "amit_guru" },
    { label: "Shaleen Mishra", value: "shaleen_mishra" },
    { label: "Madhulika Mishra", value: "madhulika_mishra" },
    { label: "Amit Patel", value: "amit_patel" },
    { label: "Harsh Mishra", value: "harsh_mishra" },
];

export const rootCauseDepartments = [
    { value: "CQA", label: "Corporate Quality Assurance" },
    { value: "QAB", label: "Quality Assurance BioPharma" },
    { value: "CQC", label: "Central Quality Control" },
    { value: "Manu", label: "Manufacturing" },
    { value: "PSG", label: "Plasma Sourcing Group" },
    { value: "CS", label: "Central Stores" },
    { value: "ITG", label: "Information Technology Group" },
    { value: "MM", label: "Molecular Medicine" },
    { value: "CL", label: "Central Laboratory" },
    { value: "TT", label: "Tech Team" },
    { value: "QA", label: "Quality Assurance" },
    { value: "QM", label: "Quality Management" },
    { value: "IA", label: "IT Administration" },
    { value: "Acc", label: "Accounting" },
    { value: "Log", label: "Logistics" },
    { value: "SM", label: "Senior Management" },
    { value: "BA", label: "Business Administration" }
];

export const rootCauseMethodology = [
    { label: "Why-Why Chart", value: "whyWhyChart" },
    { label: "Failure Mode and Effect Analysis", value: "failureModeEffectAnalysis" },
    { label: "Fishbone or Ishikawa Diagram", value: "fishboneIshikawa" },
    { label: "Is/Is Not Analysis", value: "isIsNotAnalysis" },
];

export const rootCauseAttachment = {
    label: 'Initial Attachment',
    instruction: <div></div>,
    required: false,
    columnList: [
        { id: '1', name: 'Title of Document', type: 'text' },
        { id: '2', name: 'Attached File', type: 'file' },
        { id: '3', name: 'Remark', type: 'text' },
    ]
}

export const attachmentRoot = [
    {
        label: 'QA Attachments',
        instruction: <div></div>,
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },

        ]
    }, {
        label: 'CFT Attachments',
        instruction: <div></div>,
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },

        ]
    }, {
        label: 'Lab Investigator Attachments',
        instruction: <div></div>,
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },

        ]
    }, {
        label: 'Investigation Attachments',
        instruction: <div></div>,
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },

        ]
    },
]

export const CFTReviewer = [
    { label: "Anshul Patel", value: "1" },
    { label: "Amit Patel", value: "2" },
];
