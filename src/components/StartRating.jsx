/* eslint-disable react/prop-types */
import { useState } from "react";

const StartRating = ({ onRatingChange }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (index) => {
    const newRating = index + 1;
    setRating(newRating);
    onRatingChange(newRating); // Llama a la función de callback con la nueva calificación
  };

  return (
    <div className="flex space-x-1 justify-center">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          onClick={() => handleRating(index)}
          className={`h-8 w-8 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          src="images/start.svg"
          alt=""
          style={{ filter: index < rating ? 'grayscale(0%)' : 'grayscale(100%)' }}
        />
      ))}
    </div>
  );
};

export default StartRating;
