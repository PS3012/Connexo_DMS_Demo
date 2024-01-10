import '../General.css'
import './ESignatureModal.css'
import { useState } from 'react'

function ESignatureModal(_props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const currentUsername = localStorage.getItem('username')
    const currentPassword = localStorage.getItem('password')
    function handleSubmit() {
        if(username === currentUsername && password === currentPassword) {
            _props.returnSignature(true)
        } else {
            _props.returnSignature(false)
        }
        _props.closeModal()
    }
    return (
        <>

            <div className="custom-modal" id="e-signature-modal">
                <div className="modal-container">

                    <div className="modal-top">
                        <div className="head">
                            E-Signature
                        </div>
                        <div className="close-modal" onClick={_props.closeModal}>
                            x
                        </div>
                    </div>

                    <div className="modal-middle">
                        <div className="group-input-2">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="group-input-2">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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

export default ESignatureModal
