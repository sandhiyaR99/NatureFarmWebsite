import React, { useState } from 'react';

const Welcome = () => {
    const [showDropdown, setShowDropdown] = useState('');

    const handleMouseEnter = (item) => {
        setShowDropdown(item);
    };

    const handleMouseLeave = () => {
        setShowDropdown('');
    };

    return (
        <>
            <h1 className="text-green-600 text-center py-5 font-semibold text-xl">Welcome to the world of Nature</h1>
            <div className="flex justify-around p-4">
                <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter('seeds')}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className="cursor-pointer font-semibold text-lg">Seeds</p>
                    {showDropdown === 'seeds' && (
                        <ul className="absolute left-0 mt-2 w-48 bg-green-600 text-white rounded-md shadow-lg p-2 opacity-100">
                            <li className="hover:bg-green-500 p-2 rounded-md">Vegetable Seeds</li>
                            <li className="hover:bg-green-500 p-2 rounded-md">Flower Seeds</li>
                            <li className="hover:bg-green-500 p-2 rounded-md">Hybrid Seeds</li>
                        </ul>
                    )}
                </div>
                <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter('fertilizers')}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className="cursor-pointer font-semibold text-lg">Fertilizers</p>
                    {showDropdown === 'fertilizers' && (
                        <ul className="absolute left-0 mt-2 w-48 bg-green-600 text-white rounded-md shadow-lg p-2 opacity-100">
                            <li className="hover:bg-green-500 p-2 rounded-md">Organic</li>
                            <li className="hover:bg-green-500 p-2 rounded-md">Inorganic</li>
                        </ul>
                    )}
                </div>
                <div
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter('pestControl')}
                    onMouseLeave={handleMouseLeave}
                >
                    <p className="cursor-pointer font-semibold text-lg">Pest Control</p>
                    {showDropdown === 'pestControl' && (
                        <ul className="absolute left-0 mt-2 w-48 bg-green-600 text-white rounded-md shadow-lg p-2 opacity-100">
                            <li className="hover:bg-green-500 p-2 rounded-md">Animal Waste Compost</li>
                            <li className="hover:bg-green-500 p-2 rounded-md">Cow Dung Compost</li>
                        </ul>
                    )}
                </div>
            </div>
        </>
    );
}

export default Welcome;
