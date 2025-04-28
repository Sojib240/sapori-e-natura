import React from "react";

const Materials = () => {
    return (
        <section className="text-color-primary border-color-primary mt-32 px-3 sm:px-4 md:px-5 pb-20 md:pb-25 lg:pb-30 xl:pb-40 relative">
            <div className="text-[9vw] leading-[75%] font-font2 py-5 border-b uppercase ">
                <h4>Raw materials</h4>
            </div>
            <div className="text-[9vw] leading-[75%] font-font2 py-5 border-b uppercase text-right">
                <h4>Excellent</h4>
            </div>
            <div className="text-[9vw] leading-[75%] font-font2 py-5 border-b uppercase">
                <h4>For a Taste</h4>
            </div>
            <div className="text-[9vw] leading-[75%] font-font2 py-5 border-b uppercase text-right">
                <h4>Unmistakable</h4>
            </div>
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-3 sm:px-4 md:px-5">
                <div className="w-full flex justify-between items-center gap-3 mb-15">
                    <div className="w-[16vw] flex justify-center items-center text-[1.3vw] font-font3 border rounded-full aspect-[3/1.1] uppercase bg-color-secondary hover:bg-color-primary hover:text-color-secondary transition-colors easing">
                        <p>Almonds</p>
                    </div>
                    <div className="w-[16vw] flex justify-center items-center text-[1.3vw] font-font3 border rounded-full aspect-[3/1.1] uppercase bg-color-secondary hover:bg-color-primary hover:text-color-secondary transition-colors easing">
                        <p>Pistachio</p>
                    </div>
                    <div className="w-[16vw] flex justify-center items-center text-[1.3vw] font-font3 border rounded-full aspect-[3/1.1] uppercase bg-color-secondary hover:bg-color-primary hover:text-color-secondary transition-colors easing">
                        <p>Black cherry</p>
                    </div>
                </div>
                <div className="w-full flex justify-evenly items-center gap-3">
                    <div className="w-[16vw] flex justify-center items-center text-[1.3vw] font-font3 border rounded-full aspect-[3/1.1] uppercase bg-color-secondary hover:bg-color-primary hover:text-color-secondary transition-colors easing">
                        <p>Almonds</p>
                    </div>
                    <div className="w-[16vw] flex justify-center items-center text-[1.3vw] font-font3 border rounded-full aspect-[3/1.1] uppercase bg-color-secondary hover:bg-color-primary hover:text-color-secondary transition-colors easing">
                        <p>Black cherry</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Materials;
