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
                <span className="text-toggle-text-color text-lg">Annually</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isMonthly} onChange={handleChange} className="sr-only" />
                    <div
                        className={`w-[60px] h-[30px] bg-gradient-to-r from-toggle-off-gradient-start to-toggle-off-gradient-end rounded-full peer peer-checked:from-toggle-on-gradient-start peer-checked:to-toggle-on-gradient-end`}
                    >
                    </div>
                    <span
                        className={`absolute left-[2px] top-[2px] w-[26px] h-[26px] bg-white-color rounded-full transition-transform duration-400 ${isMonthly ? 'transform translate-x-[30px]' : ''}`}
                    >
                    </span>
                </label>
                <span className="text-toggle-text-color text-lg">Monthly</span>
            </div>
        </section>
    );
};

export default PricingToggle;
