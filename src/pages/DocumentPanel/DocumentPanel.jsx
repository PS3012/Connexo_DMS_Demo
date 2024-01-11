import { useState } from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderBottom from '../../components/Header/HeaderBottom'
import ESignatureModal from '../../components/Modals/ESignatureModal/ESignatureModal';
import './DocumentPanel.css'

function DocumentPanel() {
    const progressItems = ['Opened', 'HOD Review', 'Pending QA Review', 'CFT/SME Review', 'Pending Change Implementation', 'Closed - Done'];
    const [progressArray, setProgressArray] = useState([progressItems[0]])
    const [signatureModal, setSignatureModal] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [keywordElements, setKeywordElements] = useState([])
    const closeSignatureModal = () => setSignatureModal(false);
    function handleESignature(key, elements) {
        setKeyword(key)
        setKeywordElements(elements)
        setSignatureModal(true)
    }
    function signatureValue(key) {
        if(key) {
            if(keyword === 'add') {
                addProgress(keywordElements)
            } else if(keyword === 'remove') {
                removeProgress(keywordElements)
            } else {
                setProgressArray('Closed-Cancelled')
            }
        } else {
            alert('E-Signature Not Matched.')
        }
    }
    function addProgress(addEle) {
        for (let ele of addEle) {
            setProgressArray((prevArray) => [...prevArray, ele])
        }
    }
    function removeProgress(removeEle) {
        setProgressArray(progressArray.filter((item) => !removeEle.includes(item)));
    }
    return (
        <>

            <HeaderTop />
            <HeaderBottom />
            <div id="document-panel">
                <div className="workflow-bar">
                    <div className="top-block">
                        <div className="head">Record Workflow</div>
                        <div className="btn-bar">
                            <button className="themeBtn">Audit Trail</button>
                            {progressArray.length === 1 &&
                                <>
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[1]])}>Submit</button>
                                    <button className="themeBtn" onClick={() => handleESignature('closed', [])}>Cancel</button>
                                </>
                            }
                            {progressArray.length === 2 &&
                                <>
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[2]])}>HOD Review Complete</button>
                                    <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[1]])}>More Information Required</button>
                                </>
                            }
                            {progressArray.length === 3 &&
                                <>
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3]])}>Send to CFT Reviewers</button>
                                    <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2]])}>More Information Required</button>
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[3], progressItems[4]])}>CFT Review Not Required</button>
                                </>
                            }
                            {progressArray.length === 4 &&
                                <>
                                    <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[4]])}>Review Complete</button>
                                    <button className="themeBtn" onClick={() => handleESignature('remove', [progressItems[2], progressItems[3]])}>Request More Info</button>
                                </>
                            }
                            {progressArray.length === 5 &&
                                <button className="themeBtn" onClick={() => handleESignature('add', [progressItems[5]])}>Implemented</button>
                            }
                            <button className="themeBtn">Exit</button>
                        </div>
                    </div>
                    <div className="progress-block">
                        {(progressArray === 'Closed-Cancelled') ?
                            <>
                                <div className="active">Opened</div>
                                <div className="active closed">Closed-Cancelled</div>
                            </>
                            : progressItems.map((item) => (
                                <div key={item} className={progressArray.includes(item) ? 'active' : ''}>
                                    {item}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {signatureModal && <ESignatureModal closeModal={closeSignatureModal} returnSignature={signatureValue} />}

        </>
    )
}

export default DocumentPanel
