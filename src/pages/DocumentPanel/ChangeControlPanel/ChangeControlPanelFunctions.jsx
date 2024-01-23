export const formList = ["General Information", "Change Details", "QA Review", "Evaluation", "Additional Information", "Group Comments", "Risk Assessment", "QA Approval Comments", "Change Closure", "Activity Log"]

export const CFTReviewer = [
    { label: "Anshul Patel", value: "1" },
    { label: "Mango", value: "mango", disabled: true },
    { label: "Amit", value: "2" },
];

export const docFile = [
    {
        label: "Initial attachment",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
        ]
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
    }, {
        label: 'QA Attachments',
        instruction: 'Please Attach all relevant or supporting documents',
        required: false,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
        ]
    }, {
        label: 'QA Attachments',
        instruction: 'Please Attach all relevant or supporting documents',
        required: false,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
        ]
    }, {
        label: 'CFT Attachments',
        instruction: 'Please Attach all relevant or supporting documents',
        required: false,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
        ]
    }, {
        label: 'Training Attachments',
        instruction: 'Please Attach all relevant or supporting documents',
        required: false,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
        ]
    }, {
        label: 'List of Attachments',
        instruction: 'Please Attach all relevant or supporting documents',
        required: false,
        columnList: [
            { id: '2.1.1.1', name: 'Title of Document', type: 'text' },
            { id: '2.1.1.2', name: 'Attached File', type: 'File' },
            { id: '2.1.1.3', name: 'Remark', type: 'text' },
        ]
    },
    {
        label: "QA Attachments",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: "2.1.1.1", name: "Title of Document", type: "text" },
            { id: "2.1.1.2", name: "Attached File", type: "File" },
            { id: "2.1.1.3", name: "Remark", type: "text" },
        ],
    },
    {
        label: "QA Attachments",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
        columnList: [
            { id: "2.1.1.1", name: "Title of Document", type: "text" },
            { id: "2.1.1.2", name: "Attached File", type: "File" },
            { id: "2.1.1.3", name: "Remark", type: "text" },
        ],
    },
    {
        label: "QA Attachments",
        instruction: "Please Attach all relevant or supporting documents",
        required: false,
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

export const docDetails = {
    label: "Document Details",
    instruction: <div></div>,
    required: true,
    columnList: [
        { id: "2.1.1.1", name: "Current Document No.", type: "text" },
        { id: "2.1.1.2", name: "Current Version No.", type: "number" },
        { id: "2.1.1.3", name: "New Document No.", type: "text" },
        { id: "2.1.1.4", name: "New Version No.", type: "number" },
        { id: "2.1.1.5", name: "Remarks", type: "text" },
    ],
};

export const changeCloser = {
    label: "Document Details",
    instruction: <div></div>,
    required: true,
    columnList: [
        { id: "2.1.1.1", name: "Affected Documents", type: "text" },
        { id: "2.1.1.2", name: "Document Name", type: "number" },
        { id: "2.1.1.3", name: "Document No.", type: "text" },
        { id: "2.1.1.4", name: "Version No.", type: "number" },
        { id: "2.1.1.5", name: "Implementation Date", type: "date" },
        { id: "2.1.1.6", name: "New Document No.", type: "text" },
        { id: "2.1.1.7", name: "New Version No.", type: "text" },
        { id: "2.1.1.8", name: "Remarks", type: "text" },
    ],
};

export const progressItems = [
    { id: 1, name: 'Opened', details: 'Document is opened at 10 Jan, 2023 11:12PM' },
    { id: 2, name: 'HOD Review', details: 'Action Item child can be created at this stage.' },
    { id: 3, name: 'Pending QA Review', details: '' },
    { id: 4, name: 'CFT/SME Review', details: '' },
    { id: 5, name: 'Pending Change Implementation', details: 'New Document child can be created at this stage.' },
    { id: 6, name: 'Closed - Done', details: '' },
]