import { Link } from 'react-router-dom';
import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import './AuditTrail.css';

function AuditTrail() {
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
                            <div>
                                <strong>Site/Location Code: &nbsp;</strong>KSA
                            </div>
                            <div>
                                <strong>Initiator: &nbsp;</strong>
                                Amit Guru
                            </div>
                        </div>

                        <div className="activity-log-field">
                            <div>
                                <strong>Date of Initiation: &nbsp;</strong>27-Jan-2024
                            </div>
                            <div>
                                <strong>Document Stage: &nbsp;</strong>Closed - Done
                            </div>
                        </div>

                        <div class="activity-table">
                            <table class="table table-bordered" id="auditTable">
                                <thead>
                                    <tr>
                                        <th>Sr.No</th>
                                        <th>Activity Type</th>
                                        <th>Performed on</th>
                                        <th>Performed by</th>
                                        <th>Performer Role</th>
                                        <th>Origin State</th>
                                        <th>Resulting State</th>
                                        <th><Link to='/'>Action</Link></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1.</td>
                                        <td className="viewdetails">
                                            <Link to='/'>Short Description</Link>
                                        </td>
                                        <td>26-Jan-2024</td>
                                        <td>Amit Guru</td>
                                        <td>Originator</td>
                                        <td>Opened</td>
                                        <td>Closed - Done</td>
                                        <td><Link to='/audit-trail-inner'>  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12ZM12.0003 17C14.7617 17 17.0003 14.7614 17.0003 12C17.0003 9.23858 14.7617 7 12.0003 7C9.23884 7 7.00026 9.23858 7.00026 12C7.00026 14.7614 9.23884 17 12.0003 17ZM12.0003 15C10.3434 15 9.00026 13.6569 9.00026 12C9.00026 10.3431 10.3434 9 12.0003 9C13.6571 9 15.0003 10.3431 15.0003 12C15.0003 13.6569 13.6571 15 12.0003 15Z"></path></svg>
                                        </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AuditTrail;
