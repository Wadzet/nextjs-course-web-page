import React from 'react';

type PlanCardProps = {
    title: string;
    price: number;
    storage: string;
    users: string;
    sendLimit: string;
    highlight?: boolean;
};

const PlanCard: React.FC<PlanCardProps> = ({ title, price, storage, users, sendLimit, highlight }) => {
    return (
        <article
            className={`${
                highlight
                    ? 'h-[500px] py-14 bg-gradient-to-b from-plan-start to-plan-end text-white-color'
                    : 'bg-plan-bg-color text-text-color'
            } h-[450px] w-[350px] sm:w-[500px] md:w-[750px] lg:w-[350px] p-8 plan-shadow rounded-lg flex flex-col`}
        >
            <h3 className="text-2xl font-bold pt-2">{title}</h3>
            <p className="text-7xl py-5 font-bold flex items-center justify-center">
                <span className="text-[40px] mr-2">$</span>{price}
            </p>
            <div className="pt-3.5 text-sm font-extrabold">
                <p className="py-3.5 border-y">{storage}</p>
                <p className="py-3.5">{users}</p>
                <p className="py-3.5 border-y">{sendLimit}</p>
            </div>
            <button
                className={`my-7 w-full py-3 text-sm font-bold uppercase tracking-wide rounded-md transition-all duration-500 ${
                    highlight
                        ? 'bg-white text-plan-hover-color border border-white-color hover:bg-transparent hover:text-white-color'
                        : 'bg-gradient-to-r from-plan-start to-plan-end text-white-color border border-white hover:text-plan-hover-color hover:border-plan-hover-color hover:bg-gradient-to-l hover:from-white hover:to-white'
                }`}
            >
                Learn More
            </button>
        </article>
    );
};

export default PlanCard;
