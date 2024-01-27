import { useState } from 'react'
import '../General.css'
import './CreateRecordModal.css'

function CreateRecordModal(_props) {
    const [division, setDivision] = useState('KSA')
    const [project, setProject] = useState('')
    const [formLink, setFormLink] = useState('')
    const handleSelectProcess = (element) => {
        setProject(element.name)
        setFormLink(element.link)
    }
    const handleSubmit = () => {
        localStorage.removeItem("site")
        localStorage.setItem("site", division)
        window.location.href = formLink;
    }
    const divisionList = [
        {
            id: 1,
            name: 'KSA',
            projects: [
                {
                    name: "Internal Audit",
                    link: "/internal-audit"
                }, {
                    name: "External Audit",
                    link: "/external-audit"
                }, {
                    name: "CAPA",
                    link: "/capa"
                }, {
                    name: "Audit Program",
                    link: "/audit-program"
                }, {
                    name: "Lab Incident",
                    link: "/lab-incident"
                }, {
                    name: "Risk Opportunity",
                    link: "/risk-opportunity"
                }, {
                    name: "Root Cause Analysis",
                    link: "/root-cause-analysis",
                }, {
                    name: "Change Control",
                    link: "/change-control"
                }, {
                    name: "Management Review",
                    link: "/management-review"
                }, {
                    name: "New Document",
                    link: "/new-document"
                }, {
                    name: "Training plan",
                    link: "/training-management-system"
                },
            ]
        },
        {
            id: 2,
            name: 'Egypt',
            projects: [
                {
                    name: "Internal Audit",
                    link: "/internal-audit"
                }, {
                    name: "External Audit",
                    link: "/external-audit"
                }, {
                    name: "CAPA",
                    link: "/capa"
                }, {
                    name: "Audit Program",
                    link: "/audit-program"
                }, {
                    name: "Lab Incident",
                    link: "/lab-incident"
                }, {
                    name: "Risk Opportunity",
                    link: "/risk-opportunity"
                }, {
                    name: "Root Cause Analysis",
                    link: "/root-cause-analysis",
                }, {
                    name: "Change Control",
                    link: "/change-control"
                }, {
                    name: "Management Review",
                    link: "/management-review"
                }, {
                    name: "New Document",
                    link: "/new-document"
                }, {
                    name: "Training plan",
                    link: "/training-management-system"
                },
            ]
        },
        {
            id: 3,
            name: 'Estonia',
            projects: [
                {
                    name: "Internal Audit",
                    link: "/internal-audit"
                }, {
                    name: "External Audit",
                    link: "/external-audit"
                }, {
                    name: "CAPA",
                    link: "/capa"
                }, {
                    name: "Audit Program",
                    link: "/audit-program"
                }, {
                    name: "Lab Incident",
                    link: "/lab-incident"
                }, {
                    name: "Risk Opportunity",
                    link: "/risk-opportunity"
                }, {
                    name: "Root Cause Analysis",
                    link: "/root-cause-analysis",
                }, {
                    name: "Change Control",
                    link: "/change-control"
                }, {
                    name: "Management Review",
                    link: "/management-review"
                }, {
                    name: "New Document",
                    link: "/new-document"
                }, {
                    name: "Training plan",
                    link: "/training-management-system"
                },
            ]
        },
        {
            id: 4,
            name: 'Jordan',
            projects: [
                {
                    name: "Internal Audit",
                    link: "/internal-audit"
                }, {
                    name: "External Audit",
                    link: "/external-audit"
                }, {
                    name: "CAPA",
                    link: "/capa"
                }, {
                    name: "Audit Program",
                    link: "/audit-program"
                }, {
                    name: "Lab Incident",
                    link: "/lab-incident"
                }, {
                    name: "Risk Opportunity",
                    link: "/risk-opportunity"
                }, {
                    name: "Root Cause Analysis",
                    link: "/root-cause-analysis",
                }, {
                    name: "Change Control",
                    link: "/change-control"
                }, {
                    name: "Management Review",
                    link: "/management-review"
                }, {
                    name: "New Document",
                    link: "/new-document"
                }, {
                    name: "Training plan",
                    link: "/training-management-system"
                },
            ]
        }
    ]
    return (
        <>

            <div className="custom-modal" id="create-record-modal">
                <div className="modal-container">

                    <div className="modal-top">
                        <div className="head">
                            Initiate Record
                        </div>
                    </div>

                    <div className="modal-middle">
                        <div className="selection-block">
                            <div className="division">
                                <div className="head">Site/Location</div>
                                <div className="select-list division-list">
                                    {divisionList.map((item) => (
                                        <div
                                            className={(division === item.name) ? 'active': ''}
                                            key={item.id}
                                            onClick={() => setDivision(item.name)}
                                        >{item.name}</div>
                                    ))}
                                </div>
                            </div>
                            <div className="project">
                                <div className="head">Process</div>
                                {divisionList.map((item) =>
                                    division === item.name ? (
                                        <div className="select-list project-list" key={item.id}>
                                            {item.projects.map((ele, index) => (
                                                <div
                                                    className={(project === ele.name) ? 'active' : ''}
                                                    key={index}
                                                    onClick={() => handleSelectProcess(ele)}
                                                >{ele.name}</div>
                                            ))}
                                        </div>
                                    ) : (
                                        ''
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="modal-bottom">
                        <div className="modal-btn btn-1" onClick={handleSubmit}>Submit</div>
                        <div className="modal-btn btn-2" onClick={_props.closeModal}>Cancel</div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CreateRecordModal
