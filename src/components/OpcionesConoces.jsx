/* eslint-disable react/prop-types */
import { useState } from 'react';

const OpcionesConoces = ({ onRespuestaSeleccionada }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        onRespuestaSeleccionada(value); // Notifica al componente padre la opción seleccionada
    };

    return (
        <div className="flex space-x-4 mb-10">
            <label
                className={`cursor-pointer flex items-center space-x-2 px-7 py-4 border rounded-full ${selectedOption === 'si' ? 'border-blue-600' : ''}`}
            >
                <input
                    type="radio"
                    name="conoces"
                    value="si"
                    className="form-radio text-blue-600"
                    onChange={handleOptionChange}
                />
                <span>Sí</span>
            </label>
            <label
                className={`cursor-pointer flex items-center space-x-2 px-7 py-4 border rounded-full ${selectedOption === 'no' ? 'border-blue-600' : ''}`}
            >
                <input
                    type="radio"
                    name="conoces"
                    value="no"
                    className="form-radio text-blue-600"
                    onChange={handleOptionChange}
                />
                <span>No</span>
            </label>
            <label
                className={`cursor-pointer flex items-center space-x-2 px-7 py-4 border rounded-full ${selectedOption === 'no-debo' ? 'border-blue-600' : ''}`}
            >
                <input
                    type="radio"
                    name="conoces"
                    value="no-debo"
                    className="form-radio text-blue-600"
                    onChange={handleOptionChange}
                />
                <span>He coordinado con la persona, pero no debo ser evaluador.</span>
            </label>
        </div>
    );
};

export default OpcionesConoces;
