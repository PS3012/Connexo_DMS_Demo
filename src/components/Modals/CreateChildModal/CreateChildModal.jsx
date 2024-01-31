import { useState } from "react"
import './CreateChildModal.css'
import { Link } from "react-router-dom"

function CreateChildModal(_props) {
    const [child, setChild] = useState('')
    const [formLink, setFormLink] = useState('')
    const childList = [
        { name: 'Action Item', link: '/action-item' },
        { name: 'New Document', link: '/new-document' },
        { name: 'Root Cause Analysis', link: '/root-cause-analysis' },
        { name: 'CAPA', link: '/capa' },
        { name: 'Effectiveness Check', link: '/effectiveness-check' },
    ]
    const handleSelectChild = (element) => {
        setChild(element.name)
        setFormLink(element.link)
    }
    const handleSubmit = () => {
        window.location.assign(formLink);
    }
    return (
        <>

            <div className="custom-modal" id="create-child-modal">
                <div className="modal-container" >

                    <div className="modal-top">
                        <div className="head">
                            Child
                        </div>
                        <div className="close-modal" onClick={_props.closeModal}>
                            x
                        </div>
                    </div>

                    <div className="modal-middle">
                        <div className="children">
                            {childList.map((item, index) => (
                                _props.children.includes(item.name) &&
                                <div
                                    key={index}
                                    className={(child === item.name) && 'active'}
                                    onClick={() => handleSelectChild(item)}
                                >
                                    {item.name}
                                </div>
                            ))}
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

export default CreateChildModal
