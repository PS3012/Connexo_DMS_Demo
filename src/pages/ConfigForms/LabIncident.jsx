import './ConfigForms.css'
import HeaderTop from "../../components/Header/HeaderTop";
import { useState } from 'react';

function LabIncident() {

    const [form, setForm] = useState("General Information");

    return (
        <>
            <HeaderTop />

            <div id='config-form-document-page'>
                <div className="top-block">
                    <div className="head">Lab Incident</div>
                </div>

                <div className='document-block'>
                    <div className="document-tabs">

                        <div className={form === 'General Information' ? 'active' : ''} onClick={() => setForm('General Information')}>General Information</div>

                        <div className={form === 'Incident Details' ? 'active' : ''} onClick={() => setForm('Incident Details')}>Incident Details</div>

                        <div className={form === 'Investigation Details' ? 'active' : ''} onClick={() => setForm('Investigation Details')}>Investigation Details</div>

                        <div className={form === 'CAPA' ? 'active' : ''} onClick={() => setForm('CAPA')}>CAPA</div>

                        <div className={form === 'QA Review' ? 'active' : ''} onClick={() => setForm('QA Review')}>QA Review</div>

                        <div className={form === 'QA Head/Designee Approval' ? 'active' : ''} onClick={() => setForm('QA Head/Designee Approval')}>QA Head/Designee Approval</div>

                        <div className={form === 'Activity Log' ? 'active' : ''} onClick={() => setForm('Activity Log')}>Activity Log</div>

                    </div>

                    <div className='document-form'>
                        <div className='details-form-data'>
                            <div className='form-flex'>
                                <div className="group-input">
                                    <label><b>Record Number</b></label>
                                    <input type="text" value="Jordan/LI/2024/00000001" disabled />
                                </div>
                                <div className="group-input">
                                    <label><b>Division Code</b></label>
                                    <input type="text" value="Jordan" disabled />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LabIncident;
