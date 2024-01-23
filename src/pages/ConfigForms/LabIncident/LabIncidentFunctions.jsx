const currentDate = new Date()
export const site = localStorage.getItem("site")
export const currentYear = currentDate.getFullYear()

export const formList = ["Document Information", "Incident Details", "Investigation Details", "CAPA", "QA Review", "QA Head/Designee Approval", "Activity Log"]

export const workFlow = ["Opened", "Pending Incident Review", "Pending Investigation", "Pending Activity Completion", "Pending CAPA", "Pending QA Review", "Pending QA Head Approval"]

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