import React from 'react';
import './TrainingPage.css';
import HeaderBottom from '../../../components/Header/HeaderBottom'
import HeaderTop from '../../../components/Header/HeaderTop'

function ManageQuestionPage() {
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div id='TrainingManagementPage'>
                <div className='training-items'>
                    <div className='training-search-grid'>
                        <div className="group-input-2 search-input">
                            <label>
                                <svg width="15" height="15" viewBox="0 0 376 384" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#808080" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28" />
                                </svg>
                            </label>
                            <input type="text" name="search" placeholder=" Search" />

                        </div>
                        <div className="group-input-2">
                            <label>Questions</label>
                            <input type="text" value="Manage Question " disabled />
                        </div>
                        <div className='themeBtn'>Add</div>
                        <div className='themeBtn'>Print</div>
                    </div>
                    <div className="selection-table">
                        <table className="">
                            <thead>
                                <tr>
                                    <th>Sr.No.</th>
                                    <th>Question</th>
                                    <th>Answer List</th>
                                    <th>Solution</th>
                                    <th>Question Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ManageQuestionPage
