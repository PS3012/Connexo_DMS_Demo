import React from 'react'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderBottom from '../../components/Header/HeaderBottom'

function AuditTrailinner() {
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div id='AuditTrail-page'>
                <div className="document-form">
                    <div className="details-form-data">
                        <div className="activity-log-field">
                            <div className='Record-Number'>
                                <strong>Record Number: &nbsp;</strong>KSA/MR/2024/000001
                            </div>
                        </div>

                        <div className="activity-log-field">
                            <div><strong>Site/Location Code: &nbsp;</strong>KSA</div>
                            <div><strong>Initiator: &nbsp;</strong>Amit Guru</div>
                        </div>

                        <div className="activity-log-field">
                            <div><strong>Date of Initiation: &nbsp;</strong>27-Jan</div>
                            <div><strong>Document Stage: &nbsp;</strong>Closed - Done</div>
                        </div>

                        <div className="activity-log-field">
                            <div><strong>Modified By: &nbsp;</strong>Amit Guru</div>
                            <div><strong>Modified On: &nbsp;</strong>26-Jan-2024</div>
                        </div>
                        <div className="activity-log-field">
                            <div><strong>Modifier role: &nbsp;</strong>Originator</div>
                            <div><strong>Origin state: &nbsp;</strong>Opened</div>
                        </div>
                        <div className="activity-log-field">
                            <div><strong>Comment: &nbsp;</strong>NA</div>
                        </div>
                        <div className="activity-log-field">
                            <div><strong>Changed From: &nbsp;</strong>Null</div>
                        </div>
                        <div className="activity-log-field">
                            <div><strong>Changed To: &nbsp;</strong>cg</div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AuditTrailinner
