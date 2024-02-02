import './Question.css'
import HeaderTop from '../../components/Header/HeaderTop'
import HeaderBottom from '../../components/Header/HeaderBottom'

function AddQuizzes() {
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div id="AddQuizzes">
                <div className="document-form">
                    <div className="details-form-data">
                        <div className='sub-head'>
                            Manage Quiz
                        </div>
                        <div className='group-input'>
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className='group-input'>
                            <label>Description</label>
                            <textarea rows="2"></textarea>
                        </div>
                        <div className="form-flex">
                            <div className="group-input">
                                <label>Category</label>
                                <input type="text" />
                            </div>
                            <div className="group-input">
                                <label>Passing Percentage</label>
                                <input type="text" />
                            </div>
                            <div className='group-input'>
                                <div className='checkbox-flex'>
                                    <input type="checkbox" value="Bike" />
                                    <label for="vehicle1">Randomize Questions</label>
                                </div>
                            </div>
                            <div className='group-input'>
                                <div className='checkbox-flex'>
                                    <input type="checkbox" value="Bike" />
                                    <label for="vehicle1">Show Feedback</label>
                                </div>
                            </div>
                        </div>
                        <div className='group-input'>
                            <label>Choose Question Bank</label>
                            <select>
                                <option value="">--select--</option>
                            </select>
                        </div>
                    </div>
                    <div className="table-head">Select Questions</div>
                    <div>
                        <table className="table table-bordered left-table">
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody id="question-list">
                                <tr>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                    <td>&nbsp;</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="button-block">
                        <button className="themeBtn">Save</button>
                        <button className="themeBtn">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddQuizzes;
