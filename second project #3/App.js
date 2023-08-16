
import React, { useState } from 'react';
import backgroundImage2 from './Design2.png';

const App = () => {
    const [scoreboard1, setScoreboard1] = useState(0);
    const [scoreboard2, setScoreboard2] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questions = [
        {
            question: "اخر 8 من المبشرين بالجنة",
            answers: [
                { answer: "أبو عبيدة عامر بن الجراح", score: 40 },
                { answer: "سعد بن أبي وقاص", score: 35 },
                { answer: "سعيد بن زيد", score: 30 },
                { answer: "عبدالرحمن بن  عوف", score: 25 },
                { answer: "طلحة بن عبيد الله ", score: 20 },
                { answer: "الزبير بن العوام", score: 15 },
                { answer: "علي بن ابي طالب ", score: 10 },
                { answer: "عثمان بن عفان", score: 5 }
            ]
        },
        {
            question: " اسماء الكواكب",
            answers: [
                { answer: "اورانوس", score: 10 },
                { answer: "نبتون", score: 10 },
                { answer: "المشتري", score: 10 },
                { answer: "الزهرة", score: 10 },
                { answer: "الارض", score: 10 },
                { answer: "المريخ", score: 10 },
                { answer: "عطارد", score: 10 },
                { answer: "زحل", score: 10 }
            ]
        },
        {
            question: "أخر 6 غزوات للرسول",
            answers: [
                { answer: "غزوة تبوك", score: 30 },
                { answer: "غزوة الطائف", score: 25 },
                { answer: "غزوة حنين", score: 20 },
                { answer: "فتح مكة", score: 15 },
                { answer: " غزوة مؤتة", score: 10 },
                { answer: " ذات الرقاع", score: 5 }
            ]
        }
    ];

    const handleAnswerClick = (answer, score) => {
        setSelectedAnswer({ answer, score });
    };

    const handleScoreboardClick = () => {
        if (selectedAnswer) {
            if (currentQuestion % 2 === 0) {
                setScoreboard1(scoreboard1 + selectedAnswer.score);
            } else {
                setScoreboard2(scoreboard2 + selectedAnswer.score);
            }

            setSelectedAnswer(null);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const resetGame = () => {
        setScoreboard1(0);
        setScoreboard2(0);
        setCurrentQuestion(0);
        setSelectedAnswer(null);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImage2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '200px',
                    marginBottom: '20px'
                }}
            >
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '10px 20px',
                        borderRadius: '5px'
                    }}
                >
                    {scoreboard1}
                </div>
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '10px20px',
                        borderRadius: '5px'
                    }}
                >
                    {scoreboard2}
                </div>
            </div>

            {currentQuestion < questions.length ? (
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '20px',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}
                >
                    <h2>{questions[currentQuestion].question}</h2>
                    {questions[currentQuestion].answers.map((answer, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: answer === selectedAnswer ? 'green' : 'white',
                                padding: '10px',
                                margin: '10px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                            onClick={() =>
                                handleAnswerClick(answer.answer, answer.score)
                            }
                        >
                            {answer.answer}
                        </div>
                    ))}
                </div>
            ) : (
                <div
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        padding: '20px',
                        borderRadius: '5px',
                        marginBottom: '20px',
                        textAlign: 'center'
                    }}
                >
                    <h2>Game Over</h2>
                    <button
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            cursor: 'pointer'
                        }}
                        onClick={resetGame}
                    >
                        Play Again
                    </button>
                </div>
            )}

            <button
                style={{
                    padding: '10px 20px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
                onClick={handleScoreboardClick}
            >
                Next
            </button>
        </div>
    );
};

export default App;