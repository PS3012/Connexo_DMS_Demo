import { useState } from "react";
import HeaderTop from "../../components/Header/HeaderTop";
import "./ManageQuiz.css";

function ManageQuiz() {
    const [questions, setQuestions] = useState([]);
    const [formData, setFormData] = useState({
        Title: '',
        description: '',
        category: '',
        passingPercentage: '',
        randomizeQuestion: '',
        showFeedback: '',
        questionBank: '',
    });
    const [otherTableData, setOtherTableData] = useState([]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        if (formData.Title && formData.questionBank) {
            setQuestions((prevQuestions) => [...prevQuestions, formData]);
            setFormData({
                Title: '',
                description: '',
                category: '',
                passingPercentage: '',
                randomizeQuestion: '',
                showFeedback: '',
                questionBank: '',
            });
        } else {
            alert('Please fill in all fields before saving.');
        }
    };

    const handleMoveToOtherTable = (selectedQuestion) => {
        setQuestions((prevQuestions) => prevQuestions.filter((_, index) => index !== selectedQuestion));
        setOtherTableData((prevData) => [...prevData, questions[selectedQuestion]]);
    };

    const handleMoveBackToFirstTable = (selectedQuestion) => {
        setOtherTableData((prevData) => prevData.filter((_, index) => index !== selectedQuestion));
        setQuestions((prevQuestions) => [...prevQuestions, otherTableData[selectedQuestion]]);
    };

    return (
        <>
            <HeaderTop />
            <div id="manage-quiz-page">
                <div className="top-block">
                    <div className="head">Manage Quiz</div>
                </div>
                <div className="main-block">
                    <div className="form-block">
                        {/* Your other input fields */}
                        <div className="group-input">
                            <label htmlFor="Title">Title</label>
                            <input type="text" name="Title" value={formData.Title} onChange={handleInputChange} />
                        </div>

                        <div className="group-input">
                            <label htmlFor="description">Description</label>
                            <textarea type="text" name="description" />
                        </div>
                        <div className="dual-grid">
                            <div className="group-input">
                                <label htmlFor="category">Category</label>
                                <input type="text" name="category" />
                            </div>
                            <div className="group-input">
                                <label htmlFor="passingPercentage">Passing Percentage</label>
                                <input type="text" name="passingPercentage" />
                            </div>
                        </div>
                        <div className="dual-grid">
                            <div className="group-input">
                                <label htmlFor="randomizeQuestion">Randomize Questions</label>
                                <select
                                    name="randomizeQuestion"
                                >
                                    <option value="0">-- Select --</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                            <div className="group-input">
                                <label htmlFor="showFeedback">Show Feedback</label>
                                <select
                                    name="showFeedback"
                                >
                                    <option value="0">-- Select --</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>
                        </div>
                        <div className="group-input">
                            <label htmlFor="questionBank">Choose Question Bank</label>
                            <select
                                name="questionBank"
                                value={formData.questionBank}
                                onChange={handleInputChange}
                            >
                                <option value="0">-- Select --</option>
                                <option value="select1">Select 1</option>
                            </select>
                        </div>
                    </div>
                    <div className="table-wrapper">
                        {/* Your tables */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {questions.map((q, index) => (
                                    <tr key={index}>
                                        <td>{q.Title}</td>
                                        <td>{q.questionBank}</td>
                                        <td>
                                            <svg onClick={() => handleMoveToOtherTable(index)} width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="none" stroke="#0000ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h6m0 0h6m-6 0v6m0-6V6" />
                                            </svg>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>Question</th>
                                    <th>Type</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {otherTableData.map((q, index) => (
                                    <tr key={index}>
                                        <td>{q.Title}</td>
                                        <td>{q.questionBank}</td>
                                        <td>
                                            <svg onClick={() => handleMoveBackToFirstTable(index)} width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#ff0000" d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z" />
                                            </svg>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="button-block">
                    <button className="themeBtn" onClick={handleSave}>
                        Save
                    </button>
                    <button className="themeBtn">Cancel</button>
                </div>
            </div>
        </>
    );
}

export default ManageQuiz;
