import React, { useReducer } from 'react'

function WhyWhyChart(_props) {
    const [whyWhy, setWhyWhy] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        problemStatement: '',
        why1: [''],
        why2: [''],
        why3: [''],
        why4: [''],
        why5: [''],
        rootCause: ''
    })
    const addBtn = <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2" />
    </svg>
    const delBtn = <div>
        <svg width="25" height="25" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4" />
            <path fill="#ff0000" d="M51 37v20.621L48.3 60H33z" />
            <path fill="#FFF" d="M17 16h38v4H17z" />
            <path fill="none" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55" />
        </svg>
    </div>
    const handleProblemStatement = (event) => {
        setWhyWhy({ problemStatement: event.target.value })
        _props.onUpdate(whyWhy)
    }
    const handleRootCause = (event) => {
        setWhyWhy({ rootCause: event.target.value })
        _props.onUpdate(whyWhy)
    }
    const handleDeleteWhy = (key) => {
        if (whyWhy[key].length > 1) {
            setWhyWhy({ [key]: whyWhy[key].slice(0, -1) });
        }
        _props.onUpdate(whyWhy)
    };
    const handleChangeWhy = (event, index, key) => {
        const updatedArray = [...whyWhy[key]];
        updatedArray[index] = event.target.value;
        setWhyWhy({ [key]: updatedArray });
        _props.onUpdate(whyWhy)
    };
    return (
        <>

            <div className="group-input">
                <label>Why Why Chart</label>
                <div className="why-why-chart">
                    <table>
                        <tbody>
                            <tr className="problem-statement">
                                <td>Problem Statement</td>
                                <td><textarea value={whyWhy.problemStatement} onChange={(e) => handleProblemStatement(e)}></textarea></td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>Why 1</div>
                                        <div onClick={() => setWhyWhy({ why1: [...whyWhy.why1, ''] })}>{addBtn}</div>
                                        {whyWhy.why1.length !== 1 && <div onClick={() => handleDeleteWhy('why1')}>{delBtn}</div>}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {whyWhy.why1.map((item, index) => (
                                            <textarea
                                                key={index}
                                                value={whyWhy.why1[index]}
                                                onChange={(e) => handleChangeWhy(e, index, 'why1')}
                                            >
                                                {item[index]}
                                            </textarea>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>Why 2</div>
                                        <div onClick={() => setWhyWhy({ why2: [...whyWhy.why2, ''] })}>{addBtn}</div>
                                        {whyWhy.why2.length !== 1 && <div onClick={() => handleDeleteWhy('why2')}>{delBtn}</div>}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {whyWhy.why2.map((item, index) => (
                                            <textarea
                                                key={index}
                                                value={whyWhy.why2[index]}
                                                onChange={(e) => handleChangeWhy(e, index, 'why2')}
                                            >
                                                {item[index]}
                                            </textarea>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>Why 3</div>
                                        <div onClick={() => setWhyWhy({ why3: [...whyWhy.why3, ''] })}>{addBtn}</div>
                                        {whyWhy.why3.length !== 1 && <div onClick={() => handleDeleteWhy('why3')}>{delBtn}</div>}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {whyWhy.why3.map((item, index) => (
                                            <textarea
                                                key={index}
                                                value={whyWhy.why3[index]}
                                                onChange={(e) => handleChangeWhy(e, index, 'why3')}
                                            >
                                                {item[index]}
                                            </textarea>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>Why 4</div>
                                        <div onClick={() => setWhyWhy({ why4: [...whyWhy.why4, ''] })}>{addBtn}</div>
                                        {whyWhy.why4.length !== 1 && <div onClick={() => handleDeleteWhy('why4')}>{delBtn}</div>}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {whyWhy.why4.map((item, index) => (
                                            <textarea
                                                key={index}
                                                value={whyWhy.why4[index]}
                                                onChange={(e) => handleChangeWhy(e, index, 'why4')}
                                            >
                                                {item[index]}
                                            </textarea>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <div>Why 5</div>
                                        <div onClick={() => setWhyWhy({ why5: [...whyWhy.why5, ''] })}>{addBtn}</div>
                                        {whyWhy.why5.length !== 1 && <div onClick={() => handleDeleteWhy('why5')}>{delBtn}</div>}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        {whyWhy.why5.map((item, index) => (
                                            <textarea
                                                key={index}
                                                value={whyWhy.why5[index]}
                                                onChange={(e) => handleChangeWhy(e, index, 'why5')}
                                            >
                                                {item[index]}
                                            </textarea>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                            <tr className="root-cause">
                                <td>Root Cause</td>
                                <td><textarea value={whyWhy.rootCause} onChange={(e) => handleRootCause(e)}></textarea></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default WhyWhyChart
