import { useState } from 'react';

const StarRating = () => {
    const [rating, setRating] = useState(0); // Estado para almacenar la calificación

    const handleRating = (index) => {
        setRating(index + 1); // Actualiza la calificación al hacer clic en una estrella
    };

    return (
        <div className="flex space-x-1 justify-center">
            {[...Array(5)].map((_, index) => (
                <img key={index}
                    onClick={() => handleRating(index)}
                    className={`h-8 w-8 cursor-pointer ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`} src="/images/start.svg" alt="" />
            ))}
        </div>
    );
};

export default StarRating;
