import './DataFields.css';
import { useState } from 'react';
// import { Editor } from '@tinymce/tinymce-react';
import OperationModal from '../Modals/InstructionModal/OperationModal';

function FlexField(_props) {
    const [form, setForm] = useState("");

    const handleInstructionClick = () => {
        if (_props.modal === "Operations") {
            setForm("Operations");
        }
    };
    const closeModal = () => {
        setForm('')
    }


    return (
        <>
        {form === "Operations" ? (<OperationModal />):""}
            <div className="group-input">
                <label htmlFor={_props.label}>
                    {_props.isRequired === "true" && <div className="required"></div>}
                    {_props.label}
                    <div className='instruction' onClick={handleInstructionClick}>{_props.instruction}</div>
                </label>
                <textarea></textarea>
            </div>
        </>
    );
}

export default FlexField;
