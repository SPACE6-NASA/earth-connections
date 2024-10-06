import React, { useState } from 'react';

function Quiz() {
  const questions = [
    {
      question: "What happens to the air when wildfires burn?",
      options: [
        "The air gets cleaner.",
        "The air gets filled with smoke and harmful gases.",
        "The air becomes cooler.",
      ],
      correctAnswer: 1,
      explanation: "Wildfires release smoke and gases like carbon dioxide (CO2) into the air, which can make the air dirty and cause breathing problems."
    },
    {
      question: "How does cutting down too many trees affect the planet?",
      options: [
        "It makes the soil healthier.",
        "It helps animals find new homes.",
        "It can lead to more carbon in the air, warming the planet.",
      ],
      correctAnswer: 2,
      explanation: "Trees help absorb carbon dioxide. When too many trees are cut down, more CO2 stays in the atmosphere, causing the Earth to warm."
    },
    {
      question: "What can happen if polar ice keeps melting?",
      options: [
        "Sea levels will rise and flood coastal areas.",
        "More animals will live in the Arctic.",
        "The weather will become colder everywhere.",
      ],
      correctAnswer: 0,
      explanation: "As polar ice melts, sea levels rise, which can cause flooding in cities and towns near the coast."
    },
    {
      question: "How are wildfires, deforestation, and polar ice melting connected?",
      options: [
        "They all cause more plants to grow.",
        "They are not connected at all.",
        "They all contribute to warming the Earth and changing the climate.",
      ],
      correctAnswer: 2,
      explanation: "Each of these problems—wildfires, deforestation, and polar ice melting—releases more carbon dioxide into the air, which leads to climate change and affects the whole planet."
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (index) => {
    if (index === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(index);
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <div className="quiz">
      {showResult ? (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your score is {score} out of {questions.length}</p>
          <button onClick={() => window.location.reload()}>Play Again</button>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={selectedAnswer === index ? "selected" : ""}
                onClick={() => handleAnswer(index)}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer !== null && (
            <p className="explanation">{questions[currentQuestion].explanation}</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
