/* eslint-disable react/prop-types */

const SatisfactionButtons = ({ index, respuestas, handleSatisfaccion }) => {
    
    const options = [
        { value: 'verysad', src: 'images/1.svg' },
        { value: 'sad', src: 'images/2.svg' },
        { value: 'neutral', src: 'images/3.svg' },
        { value: 'happy', src: 'images/4.svg' },
        { value: 'veryhappy', src: 'images/5.svg' }
    ];

    return (
        <div className="flex space-x-2">
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    className="text-xl p-1 rounded-full"
                    onClick={() => handleSatisfaccion(index, option.value)}
                >
                    <img
                        src={option.src}
                        alt={option.value}
                        style={{ filter: respuestas[index] === option.value ? 'grayscale(0%)' : 'grayscale(100%)' }}
                    />
                </button>
            ))}
        </div>
    );
};

export default SatisfactionButtons;
