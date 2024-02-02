import HeaderBottom from '../../components/Header/HeaderBottom';
import HeaderTop from '../../components/Header/HeaderTop';
import './Question.css'
function AddQuestion() {
    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div id="AddQuestion">
                <div className="document-form">
                    <div className="details-form-data">
                        <div className="group-input">
                            <label>Title</label>
                            <input type="text" />
                        </div>
                        <div className="group-input">
                            <label>Status</label>
                            <select value="">
                                <option id="">Active</option>
                                <option id="">Inactive</option>
                            </select>
                        </div>
                        <div className="group-input">
                            <label>Description</label>
                            <textarea cols="30" rows="1"></textarea>
                        </div>
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

export default AddQuestion;
