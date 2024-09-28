import React from 'react';
import PlanCard from './PlanCard';

const PricingPlans: React.FC<{ isMonthly: boolean }> = ({ isMonthly }) => {
    const annualPrices = [19.99, 24.99, 39.99];
    const monthlyPrices = [199.99, 249.99, 399.99];

    const plans = [
        {
            title: "Basic",
            storage: "500 GB Storage",
            users: "2 Users Allowed",
            sendLimit: "Send up to 3 GB"
        },
        {
            title: "Professional",
            storage: "1 TB Storage",
            users: "5 Users Allowed",
            sendLimit: "Send up to 10 GB"
        },
        {
            title: "Master",
            storage: "2 TB Storage",
            users: "10 Users Allowed",
            sendLimit: "Send up to 20 GB"
        }
    ];

    const prices = isMonthly ? monthlyPrices : annualPrices;

    return (
        <section className="pricing-container flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 text-center">
            {plans.map((plan, index) => (
                <PlanCard
                    key={index}
                    title={plan.title}
                    price={prices[index]}
                    storage={plan.storage}
                    users={plan.users}
                    sendLimit={plan.sendLimit}
                    highlight={index === 1}
                />
            ))}
        </section>
    );
};

export default PricingPlans;
