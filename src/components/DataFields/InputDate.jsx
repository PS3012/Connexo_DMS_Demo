import { useState } from 'react';
import './DataFields.css'
import { convertDateFormat } from '../DateReturners';

function InputDate(_props) {
    const [inputDate, setInputDate] = useState(_props.value);
    const [convertedDate, setConvertedDate] = useState('');
    const handleInputChange = (event) => {
        const newInputDate = event.target.value;
        setInputDate(newInputDate);
        _props.returnDate(newInputDate)
        const formattedDate = convertDateFormat(newInputDate);
        setConvertedDate(formattedDate);
    };
    return (
        <>

            <div className="group-input">
                <label>
                    {_props.isRequired === "true" && <div className="required"></div>}
                    {_props.label}
                </label>
                <div className="instruction">{_props.instruction}</div>
                <div className="input-date">
                    <input
                        type="text"
                        name={_props.label}
                        value={convertedDate}
                        readOnly
                        placeholder="DD-MMM-YYYY"
                    />
                    <input
                        type="date"
                        name={_props.label}
                        className="hide-input"
                        value={inputDate}
                        onChange={(e) => handleInputChange(e)}
                        required={_props.isRequired === "true"}
                        disabled={_props.isDisabled}
                        min={_props.enableDate === 'future' ? new Date().toISOString().split('T')[0] : ''}
                        max={_props.enableDate === 'past' ? new Date().toISOString().split('T')[0] : ''}
                    />
                </div>
            </div>

        </>
    )
}

export default InputDate
