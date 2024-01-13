import { useState } from 'react';
import HeaderTop from '../../components/Header/HeaderTop';
import './AddQuestion.css';

function AddQuestion() {
    const [questions, setQuestions] = useState([]);
    const [formData, setFormData] = useState({
        question: '',
        questionType: '',
        description: '',
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
        if (formData.question && formData.questionType && formData.description) {
            setQuestions((prevQuestions) => [...prevQuestions, formData]);
            setFormData({
                question: '',
                questionType: '',
                description: '',
            });
        } else {
            alert('Please fill in all fields before saving.');
        }
    };

    const handleMoveToOtherTable = (selectedQuestion) => {
        // Remove the selected question from the first table
        setQuestions((prevQuestions) => prevQuestions.filter((_, index) => index !== selectedQuestion));

        // Add the moved question to the other table
        setOtherTableData((prevData) => [...prevData, questions[selectedQuestion]]);
    };

    const handleMoveBackToFirstTable = (selectedQuestion) => {
        // Remove the selected question from the other table
        setOtherTableData((prevData) => prevData.filter((_, index) => index !== selectedQuestion));

        // Add the moved question back to the first table
        setQuestions((prevQuestions) => [...prevQuestions, otherTableData[selectedQuestion]]);
    };

    return (
        <>
            <HeaderTop />
            <div id="add-question-bank-page">
                <div className="main-block">
                    <div className="form-block">
                        <div className="group-input">
                            <label htmlFor="question">Question</label>
                            <input type="text" name="question" value={formData.question} onChange={handleInputChange} />
                        </div>
                        <div className="group-input">
                            <label htmlFor="questionType">Question Type</label>
                            <select name="questionType" value={formData.questionType} onChange={handleInputChange}>
                                <option value="">-- Select --</option>
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                        <div className="group-input">
                            <label htmlFor="description">Description</label>
                            <textarea name="description" value={formData.description} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="table-wrapper">
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
                                    <tr key={index} onClick={() => handleMoveToOtherTable(index)}>
                                        <td>{q.question.length > 20 ? `${q.question.slice(0, 20)}...` : q.question}</td>
                                        <td>{q.questionType}</td>
                                        <td>
                                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                                    <tr key={index} onClick={() => handleMoveBackToFirstTable(index)}>
                                        <td>{q.question.length > 20 ? `${q.question.slice(0, 20)}...` : q.question}</td>
                                        <td>{q.questionType}</td>
                                        <td>
                                            <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

export default AddQuestion;
