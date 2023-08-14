import React, { useState, useEffect } from 'react';
import backgroundImage2 from './Design2.png';
import correctAnswerSound from './correct-answer.mp3';
import wrongAnswerSound from './wrong-answer.mp3';

const questions = [
    {
        question: 'كم تبلغ مساحة دولة فلسطين التاريخية؟',
        options: ['27027', '29029', '30000', '21000'],
        answer: '27027',
    },
    {
        question: 'ما هو الاسم الذي كان يطلق على العملة الفلسطينية القديمة؟',
        options: ['دينار', 'جنيه', 'ريال', 'شيكل'],
        answer: 'جنيه',
    },
    {
        question: 'كم عدد ركعات صلاة النصر؟',
        options: ['8', '7', '4', '2'],
        answer: '8',
    },
    {
        question: 'كم لبث سيدنا نوح عليه السلام في قومه؟',
        options: ['100', '309', '950', '1000'],
        answer: '950',
    },
    {
        question: 'ماذا يحد فلسطين من الجنوب؟',
        options: ['النقب', 'السودان', 'البحر الأحمر', 'مصر'],
        answer: 'البحر الأحمر',
    },
    {
        question: "ما اسم المكون الأساسي للزجاج؟",
        options: ["الزجاج", "الرمل", "الصدف", "الكربون"],
        answer: "الرمل",
    },
];

function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [remainingTime, setRemainingTime] = useState(20);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (remainingTime > 0) {
                setRemainingTime(remainingTime - 1);
            } else {
                handleNextQuestion();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [remainingTime]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    const handleAnswerCheck = () => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
            new Audio(correctAnswerSound).play();
        } else {
            new Audio(wrongAnswerSound).play();
        }
        setShowAnswer(true);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
            setShowAnswer(false);
        } else {
            alert(`تمت المسابقة! تم الإجابة على ${score} من ${questions.length} أسئلة`);
        }
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage2})`,
                height: '100vh',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    //  backgroundColor: 'white',
                    //  borderRadius: '20px',
                    width: '50%',
                    // padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                    // boxShadow: '0 0 10px rgba(0, 0, 0, 0.25)',
                }}
            >
                <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>{questions[currentQuestion].question}</p>
                {questions[currentQuestion].options.map((option, index) => (
                    <button
                        key={index}
                        style={{
                            margin: '10px',
                            padding: '10px',
                            backgroundColor: showAnswer && selectedOption === option ? option === questions[currentQuestion].answer ? 'green' : 'red'
                                : selectedOption === option ? '#00008B' : '#008CBA',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            width: '80%',
                            maxWidth: '400px',
                            boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)',
                        }}
                        onClick={() => handleOptionSelect(option)}
                    >
                        {option}
                    </button>
                ))}
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    {showAnswer ? (
                        <button
                            style={{
                                margin: '10px',
                                padding: '10px',
                                backgroundColor: '#00008B',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '18px',
                                cursor: 'pointer',
                                width: '80%',
                                maxWidth: '400px',
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)',
                            }}
                            onClick={handleNextQuestion}
                        >
                            التالي
                        </button>
                    ) : (
                        <button
                            style={{
                                margin: '10px',
                                padding: '10px',
                                backgroundColor: selectedOption ? '#008CBA' : 'gray',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                fontSize: '18px',
                                cursor: 'pointer',
                                width: '80%',
                                maxWidth: '400px',
                                boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)',
                            }}
                            onClick={handleAnswerCheck}
                            disabled={!selectedOption}
                        >
                            إجابة
                        </button>
                    )}
                </div>

                <p style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}>
                    النتيجة: {score} من {currentQuestion + 1} أسئلة
                </p>
            </div>
        </div>
    );
}

export default App;
