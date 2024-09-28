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
                    ? 'bg-gradient-to-r from-plan-accent-gradient-start to-plan-accent-gradient-end text-white-color'
                    : 'bg-plan-bg-color text-text-color'
            } shadow-sm p-8 w-[350px] h-[450px] rounded-lg flex flex-col`}
        >
            <h3 className="text-[22px] font-bold">{title}</h3>
            <p className="text-[75px] font-bold flex items-center justify-center">
                <span className="text-[40px]">$</span>{price.toFixed(2)}
            </p>
            <div className="pt-4 text-[15px]">
                <p className="border-y py-4">{storage}</p>
                <p className="py-4">{users}</p>
                <p className="border-y py-4">{sendLimit}</p>
            </div>
            <button
                className={`mt-8 w-full py-3 text-sm font-bold uppercase tracking-wide rounded-md transition-all duration-500 ${
                    highlight
                        ? 'bg-transparent text-white-color border border-white-color hover:bg-white hover:text-plan-hover-color hover:border-plan-hover-color'
                        : 'bg-gradient-to-l from-plan-accent-gradient-start to-plan-accent-gradient-end text-white-color border border-white-color hover:bg-plan-hover-gradient hover:text-plan-hover-color hover:border-plan-hover-color'
                }`}
            >
                Learn More
            </button>
        </article>
    );
};

export default PlanCard;
