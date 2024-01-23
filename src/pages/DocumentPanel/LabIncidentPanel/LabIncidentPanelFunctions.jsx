export const formList = ["Document Information", "Incident Details", "Investigation Details", "CAPA", "QA Review", "QA Head/Designee Approval", "Activity Log"]

export const progressItems = [
    { id: 1, name: "Opened", details: '' },
    { id: 2, name: "Pending Incident Review", details: '' },
    { id: 3, name: "Pending Investigation", details: 'Root Cause Analysis child can be created at this stage.' },
    { id: 4, name: "Pending Activity Completion", details: '' },
    { id: 5, name: "Pending CAPA", details: 'CAPA child can be created at this stage.' },
    { id: 6, name: "Pending QA Review", details: '' },
    { id: 7, name: "Pending QA Head Approval", details: '' },
    { id: 8, name: "Closed-Done", details: '' },
]

export const labFile = [
    {
        label: "Initial Attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remarks', type: 'text' },
        ],
        initialData: [
            { id: 1, cells: [1, 'Title', '', 'Remarks'] },
        ],
    },
    {
        label: "Attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },
        ]
    },
    {
        label: "Inv Attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },
        ]
    },
    {
        label: "CAPA Attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },
        ]
    },
    {
        label: "QA Head Attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: '1', name: 'Title of Document', type: 'text' },
            { id: '2', name: 'Attached File', type: 'file' },
            { id: '3', name: 'Remark', type: 'text' },
        ]
    },
]