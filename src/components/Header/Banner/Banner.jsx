const Banner = () => {
    return (
        <div>
            <div className="hero rounded-3xl bg-image">
                
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-5 text-5xl leading-[76px] text-white font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="mb-10">Experience the delight of a customized cooking class, perfectly tailored to suit your palate. Uncover <br /> the joy of culinary exploration with our personalized sessions, curated just for you.</p>
                        <button className="btn bg-[#0BE58A]  rounded-l-full text-black rounded-r-full text-xl mr-6 font-semibold p-5 flex-nowrap border-none">Explore Now</button>
                        <button className="btn bg-transparent border border-white  rounded-l-full text-white rounded-r-full text-xl font-medium p-5 flex-nowrap">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Banner;