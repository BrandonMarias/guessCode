import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item, stacks } from './datos';

const GuessCodeGame: React.FC = () => {
  

  const [selectedStack, setSelectedStack] = useState<string>("Holguras y niveles");
  const [currentItem, setCurrentItem] = useState<Item>(
    stacks["Holguras y niveles"][Math.floor(Math.random() * stacks["Holguras y niveles"].length)]
  );
  const [guess, setGuess] = useState<string>("");
  const [feedback, setFeedback] = useState<string>("");

  const handleGuess = () => {
    if (parseInt(guess) === currentItem.code) {
      setFeedback("¡Correcto! 🎉");
    } else {
      setFeedback("Incorrecto. Intenta de nuevo. ❌, el código correcto es: " + currentItem.code);
    }
  };

  const handleNext = () => {
    const stackItems = stacks[selectedStack];
    setCurrentItem(stackItems[Math.floor(Math.random() * stackItems.length)]);
    setGuess("");
    setFeedback("");
  };

  const handleStackChange = (stack: string) => {
    setSelectedStack(stack);
    const stackItems = stacks[stack];
    setCurrentItem(stackItems[Math.floor(Math.random() * stackItems.length)]);
    setGuess("");
    setFeedback("");
  };

 

  return (
    <div className={`container text-center py-4`}>
      <div className="mb-4">
        <label htmlFor="stack-select" className="form-label">Selecciona un stack:</label>
        <select
          id="stack-select"
          value={selectedStack}
          onChange={(e) => handleStackChange(e.target.value)}
          className="form-select w-50 mx-auto mb-3"
        >
          {Object.keys(stacks).map((stack) => (
            <option key={stack} value={stack}>{stack}</option>
          ))}
        </select>
      </div>

      <p className="lead mb-4">{currentItem.name}</p>

      <div className="mb-4">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Escribe el código aquí"
          className="form-control w-50 mx-auto mb-3"
        />
        <button
          onClick={handleGuess}
          className="btn btn-primary btn-lg me-2"
        >
          Verificar
        </button>
        <button
          onClick={handleNext}
          className="btn btn-success btn-lg"
        >
          Siguiente
        </button>
      </div>

      {feedback && <p className="h5 mt-4">{feedback}</p>}
    </div>
  );
};

export default GuessCodeGame;
