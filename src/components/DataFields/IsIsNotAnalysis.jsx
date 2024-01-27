import React, { useReducer } from 'react'

function IsIsNotAnalysis(_props) {
    const [isIsNot, setIsIsNot] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        whatWillBe: '',
        whatWillNotBe: '',
        whatRationale: '',
        whereWillBe: '',
        whereWillNotBe: '',
        whereRationale: '',
        whenWillBe: '',
        whenWillNotBe: '',
        whenRationale: '',
        coverageWillBe: '',
        coverageWillNotBe: '',
        coverageRationale: '',
        whoWillBe: '',
        whoWillNotBe: '',
        whoRationale: '',
    })
    const handleChange = () => {
        _props.onIsIsNotDataChange(isIsNot)
    }
    return (
        <>

            <div className='group-input'>
                <label>
                    Is/Is Not Analysis
                    <div className='instruction'>(Launch Instruction)</div>
                </label>
                <table>
                    <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>Will Be</th>
                            <th>Will Not Be</th>
                            <th>Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>What</th>
                            <td>
                                <textarea value={isIsNot.whatWillBe} onChange={(e) => { setIsIsNot({ whatWillBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whatWillNotBe} onChange={(e) => { setIsIsNot({ whatWillNotBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whatRationale} onChange={(e) => { setIsIsNot({ whatRationale: e.target.value }); handleChange(); }}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>Where</th>
                            <td>
                                <textarea value={isIsNot.whereWillBe} onChange={(e) => { setIsIsNot({ whereWillBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whereWillNotBe} onChange={(e) => { setIsIsNot({ whereWillNotBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whereRationale} onChange={(e) => { setIsIsNot({ whereRationale: e.target.value }); handleChange(); }}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>When</th>
                            <td>
                                <textarea value={isIsNot.whenWillBe} onChange={(e) => { setIsIsNot({ whenWillBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whenWillNotBe} onChange={(e) => { setIsIsNot({ whenWillNotBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whenRationale} onChange={(e) => { setIsIsNot({ whenRationale: e.target.value }); handleChange(); }}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>Coverage</th>
                            <td>
                                <textarea value={isIsNot.coverageWillBe} onChange={(e) => { setIsIsNot({ coverageWillBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.coverageWillNotBe} onChange={(e) => { setIsIsNot({ coverageWillNotBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.coverageRationale} onChange={(e) => { setIsIsNot({ coverageRationale: e.target.value }); handleChange(); }}></textarea>
                            </td>
                        </tr>
                        <tr>
                            <th>Who</th>
                            <td>
                                <textarea value={isIsNot.whoWillBe} onChange={(e) => { setIsIsNot({ whoWillBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whoWillNotBe} onChange={(e) => { setIsIsNot({ whoWillNotBe: e.target.value }); handleChange(); }}></textarea>
                            </td>
                            <td>
                                <textarea value={isIsNot.whoRationale} onChange={(e) => { setIsIsNot({ whoRationale: e.target.value }); handleChange(); }}></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default IsIsNotAnalysis
