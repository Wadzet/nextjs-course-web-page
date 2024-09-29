import React, { useState } from 'react';

const PricingToggle: React.FC<{ onToggle: (toggleState: boolean) => void }> = ({ onToggle }) => {
    const [isMonthly, setIsMonthly] = useState(false);

    const handleChange = () => {
        const newToggleState = !isMonthly;
        setIsMonthly(newToggleState);
        onToggle(newToggleState);
    };

    return (
        <section className="flex justify-center items-center py-8">
            <div className="flex items-center space-x-4">
                <span className="text-toggle-color text-lg">Annually</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isMonthly} onChange={handleChange} className="sr-only peer" />
                    <div
                        className={`w-[60px] h-[30px] rounded-full bg-gradient-to-r from-toggle-off-start to-toggle-off-end transition-all duration-300 peer-checked:from-toggle-on-start peer-checked:to-toggle-on-end`}
                    >
                    </div>
                    <span
                        className={`absolute left-0.5 top-0.5 h-[26px] aspect-square bg-white rounded-full transition-transform duration-400 ${isMonthly ? 'transform translate-x-[30px]' : ''}`}
                    >
                    </span>
                </label>
                <span className="text-toggle-color text-lg">Monthly</span>
            </div>
        </section>
    );
};

export default PricingToggle;
