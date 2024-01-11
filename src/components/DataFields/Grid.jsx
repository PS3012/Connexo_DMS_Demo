import { useState } from 'react';

function Grid(_props) {
    const [rows, setRows] = useState([]);

    function handleAddRow() {
        const newRow = {
            id: Math.random(),
            cells: Array.from({ length: _props.columnList.length + 1 }, (_, index) => {
            if (index === 0) {
                return rows.length + 1;
            } else {
                return '';
            }
        }),
    };

    setRows([...rows, newRow]);
}
return (
    <>

        <div className="group-input">
            <label className='flex-label' htmlFor={_props.label}>
                <div>
                    {_props.label}
                    {_props.required ? <span className="required">&nbsp;*</span> : ''}
                </div>
                <div className='add-btn' onClick={handleAddRow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2" />
                    </svg>
                </div>
            </label>
            <div className="instruction">
                {_props.instruction}
            </div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Row #</th>
                            {_props.columnList.map((item) => (
                                <th key={item.id}>{item.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                {row.cells.map((cell, index) => (
                                    <td key={index}>
                                        {index === 0 ? (
                                            <input type="text" value={cell} readOnly />
                                        ) : (
                                            _props.columnList[index - 1].type === 'singleSelection' ? (
                                                <select
                                                    value={cell}
                                                    onChange={(e) => {
                                                        const updatedRows = [...rows];
                                                        updatedRows.find((r) => r.id === row.id).cells[index] = e.target.value;
                                                        setRows(updatedRows);
                                                    }}
                                                >
                                                    <option value="">-- Select --</option>
                                                    {_props.columnList[index - 1].selectionValues.map((value) => (
                                                        <option key={value} value={value}>
                                                            {value}
                                                        </option>
                                                    ))}
                                                </select>
                                            ) : (
                                                <input
                                                    type={_props.columnList[index - 1].type}
                                                    value={cell}
                                                    onChange={(e) => {
                                                        const updatedRows = [...rows];
                                                        updatedRows.find((r) => r.id === row.id).cells[index] = e.target.value;
                                                        setRows(updatedRows);
                                                    }}
                                                />
                                            )
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </>
)
}

export default Grid