import { useState } from "react";
import "./Question.css";
import HeaderTop from "../../components/Header/HeaderTop";
import HeaderBottom from "../../components/Header/HeaderBottom";

function Question() {
    const [questionType, setQuestionType] = useState(0);
    const [options, setOptions] = useState([{ id: 1, value: '' }]);

    const handleAddButton = () => {
        const newId = Math.max(...options.map(option => option.id), 0) + 1;
        setOptions([...options, { id: newId, value: '' }]);
    };

    const handleDeleteOption = (id) => {
        setOptions((prev) => prev.filter(option => option.id !== id));
    };

    const handleOptionChange = (id, value) => {
        setOptions((prev) =>
            prev.map((option) => (option.id === id ? { ...option, value } : option))
        );
    };

    return (
        <>
            <HeaderTop />
            <HeaderBottom />
            <div id="add-question-page">
                <div className="main-block">
                    <div className="form-block">
                        <div className="group-input">
                            <div className="group-input">
                                <label htmlFor="question_type">Question Type</label>
                                <select
                                    name="question_type"
                                    value={questionType}
                                    onChange={(e) => setQuestionType(e.target.value)}
                                >
                                    <option value="0">-- Select --</option>
                                    <option value="single-select">Single Select Question</option>
                                    <option value="multi-select">Multi Select Questions</option>
                                    <option value="exact-match">Exact Match Question</option>
                                </select>
                            </div>
                        </div>
                        <div className="group-input">
                            <label htmlFor="question">Question</label>
                            <input type="text" name="question" />
                        </div>
                        {questionType === "single-select" || questionType === "multi-select" ? (
                            <div className="group-input">
                                <label htmlFor="option" className="flex-label">
                                    Options
                                    <svg
                                        onClick={handleAddButton}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="#000000"
                                            d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2"
                                        />
                                    </svg>
                                </label>
                                <div className="option-grid">
                                    {options.map((option) => (
                                        <div key={option.id}>
                                            <input
                                                type="text"
                                                name="option"
                                                value={option.value}
                                                onChange={(e) =>
                                                    handleOptionChange(option.id, e.target.value)
                                                }
                                            />
                                            {questionType === "single-select" && (
                                                <input type="radio" name="option" />
                                            )}
                                            {questionType === "multi-select" && (
                                                <input type="checkbox" name="option" />
                                            )}
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 72 72"
                                                xmlns="http://www.w3.org/2000/svg"
                                                onClick={() => handleDeleteOption(option.id)}
                                            >
                                                <path
                                                    fill="#FFF"
                                                    d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                                />
                                                <path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z" />
                                                <path fill="#FFF" d="M17 16h38v4H17z" />
                                                <path
                                                    fill="none"
                                                    stroke="#ff0000"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeMiterlimit="10"
                                                    strokeWidth="2"
                                                    d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                                />
                                            </svg>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : null}
                        {questionType === "exact-match" && (
                            <div className="group-input">
                                <label htmlFor="answer">Answer</label>
                                <input type="text" name="answer" />
                            </div>
                        )}
                    </div>
                </div>
                <div className="button-block">
                    <button className="themeBtn">Save</button>
                    <button className="themeBtn">Cancel</button>
                </div>
            </div>
        </>
    );
}

export default Question;
