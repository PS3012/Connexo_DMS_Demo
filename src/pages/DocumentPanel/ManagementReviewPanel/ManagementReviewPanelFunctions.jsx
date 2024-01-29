export const currentDate = new Date();
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["General Information", "Operational planning and control", "Meetings and summary", "Closure", "Signatures",]



export const Agenda = [
    {
        label: "Agenda",
      
        columnList: [
            { id: "2.1.1.1", name: "Date", type: "date" },
            { id: "2.1.1.2", name: "Topic", type: "text" },
            { id: "2.1.1.3", name: "Responsible", type: "text" },
            { id: "2.1.1.4", name: "Time Start", type: "date" },
            { id: "2.1.1.5", name: "Time End", type: "date" },
            { id: "2.1.1.6", name: "Comment", type: "text" },
        ],
    },
];
export const managementReview = [
    {
        label: "Management Review Participants",
        columnList: [
            {
                id: "2.1.1.1",
                name: "Invited Person",
                type: "singleSelection",
                selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"]
            },
            {
                id: "2.1.1.2",
                name: "Designee",
                type: "singleSelection",
                selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"]
            },
            { id: "2.1.1.3", name: "Department", type: "singleSelection", selectionValues: ["Quality Assurance", "Quality Control", "Production"] },
            { id: "2.1.1.4", name: "Meeting Attended", type: "singleSelection", selectionValues: ["Yes", "No"] },
            { id: "2.1.1.5", name: "Designee Name", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Madhulika Mishra", "Harsh Mishra"] },
            { id: "2.1.1.6", name: "Designee Department/Designation", type: "text" },
            { id: "2.1.1.7", name: "Remarks", type: "singleSelection", selectionValues: ["Quality Assurance", "Quality Control", "Production"] },
        ],
    },
];
export const attachment = [ 
    {
        label: "Initial attachment",
        instruction: "Please Attach all relevant or supporting documents",
        columnList: [
            { id: "2.1.1.1", name: "Title of Document", type: "text" },
            { id: "2.1.1.2", name: "Attached File", type: "file" },
            { id: "2.1.1.3", name: "Remark", type: "text" },
        ],
    },
];
export const actionItem = [
    {
        label: "Action Item Details",
        columnList: [
            { id: "2.1.1.1", name: "Short Description", type: "text" },
            { id: "2.1.1.2", name: "Due Date", type: "date" },
            { id: "2.1.1.3", name: "Site / Division", type: "text" },
            { id: "2.1.1.4", name: "Person Responsible", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana"] },
            { id: "2.1.1.5", name: "Current Status", type: "text" },
            { id: "2.1.1.6", name: "Date Closed", type: "date" },
            { id: "2.1.1.7", name: "Remarks", type: "text" },
        ],
    },
];
export const performanceEvaluation = [
    {
        label: "Performance Evaluation",
        columnList: [
            { id: "2.1.1.1", name: "Monitoring", type: "text" },
            { id: "2.1.1.2", name: "Measurement", type: "text" },
            { id: "2.1.1.3", name: "Analysis", type: "text" },
            { id: "2.1.1.4", name: "Evalutaion", type: "text" },
        ],
    },
];
export const capaDetails = [
    {
        label: "Performance Evaluation",
        // instruction:"Please Attach all relevant or supporting documents",
        columnList: [
            { id: "2.1.1.1", name: "CAPA Details", type: "text" },
            { id: "2.1.1.2", name: "CAPA Type", type: "singleSelection", selectionValues: ["Corrective Action", "Preventive Action", "Corrective &  Preventive Action"] },
            { id: "2.1.1.3", name: "Site / Division", type: "text" },
            { id: "2.1.1.4", name: "Person Responsible", type: "singleSelection", selectionValues: ["Amit Guru", "Shaleen Mishra", "Shaleen Mishra", "Madhulika Mishra", "Jin Kim", "Akash Asthana"] },
            { id: "2.1.1.5", name: "Current Status", type: "text" },
            { id: "2.1.1.6", name: "Date Closed", type: "date" },
            { id: "2.1.1.7", name: "Remarks", type: "text" },

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