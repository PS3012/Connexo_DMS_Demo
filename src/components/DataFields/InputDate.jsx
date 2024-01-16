import { useState } from 'react';
import './DataFields.css'

function InputDate(_props) {
    const [inputDate, setInputDate] = useState('');
    const [convertedDate, setConvertedDate] = useState('');
    const convertDate = (dateString) => {
        const date = new Date(dateString);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    };

    const handleInputChange = (event) => {
        const newInputDate = event.target.value;
        setInputDate(newInputDate);
        const formattedDate = convertDate(newInputDate);
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
                        onChange={handleInputChange}
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
