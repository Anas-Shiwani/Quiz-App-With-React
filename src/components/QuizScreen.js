import React, { useState } from 'react';
import './css/Quiz.css';

const QuizScreen = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);
    const [isAnswered, setIsAnswered] = useState(false);


    const questions = [
        {
            question: "HTML Stands For _________",
            options: [
                "Anchor Text Language",
                "HTML",
                "Case Cading Style Sheet",
                "HyperText markup language",
            ],
            correctAns: "HyperText markup language",
        },
        {
            question: "CSS Stands For _________",
            options: [
                "Casecading Style Sheet",
                "Java",
                "Ram",
                "Hypertext markup language",
            ],
            correctAns: "Casecading Style Sheet",
        },
        {
            question: "JS Stands For _________",
            options: ["Java Style", "Java Script", "Script", "Script Src"],
            correctAns: "Java Script",
        },
        {
            question: "DOM Stands For _________",
            options: ["Document Object Model", "html", "Css", "Java"],
            correctAns: "Document Object Model",
        },
        {
            question: "RAM Stands For _________",
            options: ["Read Only Memory", "Dom", "Random Access Memory", "For Pc"],
            correctAns: "Random Access Memory",
        },
        {
            question: "ROM Stands For _________",
            options: [
                "Hyper Text Markup Language",
                "html",
                "HTml",
                "Read Only Memory",
            ],
            correctAns: "Read Only Memory",
        },
        {
            question: "SQL Stands For _________",
            options: [
                "Structured Query Language",
                "Stylish Question Language",
                "Statement Question Language",
                "Stylish Query Language",
            ],
            correctAns: "Structured Query Language",
        },
        
    ];
    

    const handleOptionClick = (option) => {
        if (!isAnswered) {
            const correctAns = questions[currentIndex].correctAns;
            setSelectedOption(option);
            setIsAnswered(true);

            if (option === correctAns) {
                setScore(score + 5);
            }
        }
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setIsAnswered(false);
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setSelectedOption(null);
        setCurrentIndex(0);
        setIsQuizCompleted(false);
        setScore(0);
        setIsAnswered(false);
    };

    return (
        <div className="container-fluid d-flex flex-column  justify-content-center align-items-center vh-100 bg-info">
            <h1 className="main-heading text-white mb-5">Quiz App</h1>
            <div className="card p-4 text-center bg-danger ">
                <div className="card-body">
                    {!isQuizCompleted ? (
                        <>
                            <h5>Eeach Question Contain 5 Marks</h5>
                            <p>Question: {currentIndex + 1}/{questions.length}</p>
                            <h5 className="card-title mb-4">{questions[currentIndex].question}</h5>
                            <div className="list-group ">
                                {questions[currentIndex].options.map((x, i) => (
                                    <button
                                        key={i}
                                        type="button"
                                        disabled={isAnswered}
                                        className={`list-group-item list-group-item-action option ${selectedOption === x && x === questions[currentIndex].correctAns ? 'selected-correct' : selectedOption === x && x !== questions[currentIndex].correctAns ? 'selected-incorrect' : ''}`}
                                        onClick={() => handleOptionClick(x)}
                                    >
                                        {x}
                                    </button>
                                ))}
                            </div>
                            {selectedOption && (
                                <p className="mt-3">
                                    {selectedOption === questions[currentIndex].correctAns ? "Correct!" : `Incorrect! Correct answer: ${questions[currentIndex].correctAns}`}
                                </p>
                            )}
                            {isAnswered && (
                                <button
                                    className="btn btn-primary mt-3"
                                    onClick={handleNextQuestion}
                                >
                                    Next
                                </button>
                            )}
                        </>
                    ) : (
                        <div>
                            <h2 className="text-white">Your quiz is completed!</h2>
                            <h3 className="text-white">Total Score: {score} / {questions.length * 5}</h3>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={restartQuiz}
                            >
                                Restart Quiz
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuizScreen;
