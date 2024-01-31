const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["Risk Opportunity", "Risk Details", "Work Group Assignment", "Risk Analysis", "Residual Risk", "Risk Mitigation", "Activity Log"]

export const workFlow = ["Opened", "Risk Analysis & Work Group Assignment", "Risk Processing & Action Plan", "Pending HOD Approval", "Action Items in Progress", "Residual Risk Evaluation", "Closed-Done"]

export const departments = [
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

export const teamMembers = [
    { label: "Amit Guru", value: "amit_guru" },
    { label: "Shaleen Mishra", value: "shaleen_mishra" },
    { label: "Madhulika Mishra", value: "madhulika_mishra" },
    { label: "Amit Patel", value: "amit_patel" },
    { label: "Harsh Mishra", value: "harsh_mishra" },
];

export const docFile = [
    {
        label: "Action Plan",
        instruction: "",
        required: true,
        columnList: [
            { id: "2.1.1.1", name: "Action", type: "text" },
            { id: "2.1.1.2", name: "Responsible Person", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana", "Amit Patel"] },
            { id: "2.1.1.3", name: "Deadline", type: "date" },
            { id: "2.1.1.4", name: "Item Static", type: "text" },
        ],
    },
];

export const attachment = [
    {
        label: "Initial attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: true,
        columnList: [
            { id: "2.1.1.1", name: "Title of Document", type: "text" },
            { id: "2.1.1.2", name: "Attached File", type: "file" },
            { id: "2.1.1.3", name: "Remark", type: "text" },
        ],
    },
];

export const Mitigation = [
    {
        label: "Mitigation Plan Details",
        instruction: "",
        required: false,
        columnList: [
            { id: "2.1.1.1", name: "Mitigation Steps", type: "text" },
            { id: "2.1.1.2", name: "Deadline", type: "date" },
            { id: "2.1.1.3", name: "Responsible Person", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana", "Amit Patel"] },
            { id: "2.1.1.4", name: "Status", type: "text" },
            { id: "2.1.1.5", name: "Remark", type: "text" }
        ],
    },
];

export const progressItems = [
    { id: 1, name: 'Opened', details: 'Document is opened at 10 Jan, 2023 11:12PM' },
    { id: 2, name: 'HOD Review', details: 'Action Item child can be created at this stage.' },
    { id: 3, name: 'Pending QA Review', details: '' },
    { id: 4, name: 'CFT/SME Review', details: '' },
    { id: 5, name: 'Pending Change Implementation', details: 'New Document child can be created at this stage.' },
    { id: 6, name: 'Closed - Done', details: '' },
]