"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import PricingToggle from './components/PricingToggle';
import PricingPlans from './components/PricingPlans';
import Image from 'next/image';
import BgLeft from './public/bg-left.svg';
import BgRight from './public/bg-right.svg';

const Page: React.FC = () => {
    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = (toggleState: boolean) => {
        setIsMonthly(toggleState);
    };

    return (
            <div className="flex justify-center items-center flex-col bg-main-color text-text-color font-montserrat font-bold lg:h-screen h-full w-full overflow-x-hidden relative">
                <Header />
                <main className="w-full flex flex-col justify-center items-center relative z-20">
                    <PricingToggle onToggle={handleToggle} />
                    <PricingPlans isMonthly={isMonthly} />
                </main>
                <Image src={BgLeft} alt="Left background element" className="absolute bottom-0 left-0 w-1/4 z-10" />
                <Image src={BgRight} alt="Right background element" className="absolute top-0 right-0 w-1/4 z-10" />
            </div>
    );
};

export default Page;
