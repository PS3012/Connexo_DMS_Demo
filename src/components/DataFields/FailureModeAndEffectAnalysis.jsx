import React, { useState } from 'react'

function FailureModeAndEffectAnalysis(_props) {
    const [failureMode, setFailureMode] = useState(_props.value || [])
    const handleAddRow = () => {
        const newElement = {
            riskFactor: '',
            riskElement: '',
            probableCauseOfRiskElement: '',
            existingRiskControl: '',
            initialSeverity: '',
            initialProbability: '',
            initialDetectability: '',
            riskAcceptance: '',
            proposedAdditionalRiskControl: '',
            residualSeverity: '',
            residualProbability: '',
            residualDetectability: '',
            riskAcceptance2: '',
            mitigationProposal: ''
        }
        setFailureMode([...failureMode, newElement])
    }
    const handleDeleteRow = (rowIndex) => {
        const updatedFailureMode = [...failureMode];
        updatedFailureMode.splice(rowIndex, 1);
        setFailureMode(updatedFailureMode);
    };

    const handleChange = (event, rowIndex, fieldName) => {
        const updatedFailureMode = [...failureMode];
        updatedFailureMode[rowIndex][fieldName] = event.target.value;
        setFailureMode(updatedFailureMode);
        _props.onUpdate(failureMode)
    };
    return (
        <>

            <div className="group-input">
                <label>
                    Failure Mode and Effect Analysis
                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={handleAddRow}>
                        <path fill="#000000" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2" />
                    </svg>
                    <div className="instruction">(Launch Instruction)</div>
                </label>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Row</th>
                                <th>Risk Factor</th>
                                <th>Risk Element</th>
                                <th>Probable cause of Risk Element</th>
                                <th>Existing Risk Controls</th>
                                <th>Initial Severity-H(3)/M(2)/L(1)</th>
                                <th>Initial Probability-H(3)/M(2)/L(1)</th>
                                <th>Initial Detectability-H(3)/M(2)/L(1)</th>
                                <th>Initial RPN</th>
                                <th>Risk Acceptance (Y/N)</th>
                                <th>Proposed Additional Risk control measure (Mandatory for Risk elements having RPN&gt;4)</th>
                                <th>Residual Severity-H(3)/M(2)/L(1)</th>
                                <th>Residual Probability-H(3)/M(2)/L(1)</th>
                                <th>Residual Detectability-H(3)/M(2)/L(1)</th>
                                <th>Residual RPN</th>
                                <th>Risk Acceptance (Y/N)</th>
                                <th>Mitigation proposal (Mention either CAPA reference number, IQ, OQ or PQ)</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {failureMode.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td><input type="text" value={item.riskFactor} onChange={(e) => handleChange(e, index, 'riskFactor')} /></td>
                                    <td><input type="text" value={item.riskElement} onChange={(e) => handleChange(e, index, 'riskElement')} /></td>
                                    <td><input type="text" value={item.probableCauseOfRiskElement} onChange={(e) => handleChange(e, index, 'probableCauseOfRiskElement')} /></td>
                                    <td><input type="text" value={item.existingRiskControl} onChange={(e) => handleChange(e, index, 'existingRiskControl')} /></td>
                                    <td>
                                        <select value={item.initialSeverity} onChange={(e) => handleChange(e, index, 'initialSeverity')}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select value={item.initialProbability} onChange={(e) => handleChange(e, index, 'initialProbability')}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select value={item.initialDetectability} onChange={(e) => handleChange(e, index, 'initialDetectability')}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                    <td>{item.initialSeverity * item.initialProbability * item.initialDetectability}</td>
                                    <td>
                                        <select value={item.riskAcceptance} onChange={(e) => handleChange(e, index, 'riskAcceptance')}>
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </td>
                                    <td><input type="text" value={item.proposedAdditionalRiskControl} onChange={(e) => handleChange(e, index, 'proposedAdditionalRiskControl')} /></td>
                                    <td>
                                        <select value={item.residualSeverity} onChange={(e) => handleChange(e, index, 'residualSeverity')}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select value={item.residualProbability} onChange={(e) => handleChange(e, index, 'residualProbability')}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select value={item.residualDetectability} onChange={(e) => handleChange(e, index, 'residualDetectability')}>
                                            <option value="0">-- Select --</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </td>
                                    <td>{item.residualSeverity * item.residualProbability * item.residualDetectability}</td>
                                    <td>
                                        <select value={item.riskAcceptance2} onChange={(e) => handleChange(e, index, 'riskAcceptance2')}>
                                            <option value="0">-- Select --</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>
                                        </select>
                                    </td>
                                    <td><input type="text" value={item.mitigationProposal} onChange={(e) => handleChange(e, index, 'mitigationProposal')} /></td>
                                    <td>
                                        <div className="action">
                                            <svg width="20" height="20" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg" onClick={() => handleDeleteRow(index)}>
                                                <path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4" />
                                                <path fill="#ff0000" d="M51 37v20.621L48.3 60H33z" />
                                                <path fill="#FFF" d="M17 16h38v4H17z" />
                                                <path fill="none" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55" />
                                            </svg>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default FailureModeAndEffectAnalysis
