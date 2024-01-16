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

            <div className="group-input grid-input-field">
                <label className='flex-label' htmlFor={_props.label}>
                    {_props.required ? <div className="required"></div> : ''}
                    {_props.label}
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={handleAddRow}>
                        <path fill="#000000" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2" />
                    </svg>
                    <div className="instruction">
                        {_props.instruction && (_props.instruction)}
                    </div>
                </label>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Row</th>
                                {_props.columnList.map((item) => (
                                    <th key={item.id}>
                                        <div>
                                            {item.name}
                                            <svg width="15" height="15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <g fill="none" stroke="#d0d0d0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                                    <ellipse cx="12" cy="5" rx="9" ry="2" />
                                                    <path d="M3 5c0 2.23 3.871 6.674 5.856 8.805A4.197 4.197 0 0 1 10 16.657V19a2 2 0 0 0 2 2v0a2 2 0 0 0 2-2v-2.343c0-1.061.421-2.075 1.144-2.852C17.13 11.674 21 7.231 21 5" />
                                                </g>
                                            </svg>
                                        </div>
                                    </th>
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
                                                _props.columnList[index - 1].type && _props.columnList[index - 1].type === 'singleSelection' ? (
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