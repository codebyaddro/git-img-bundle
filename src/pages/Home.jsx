
const Home = () => {
    return (
        <>
            <div className=" ">
                <section className="bg-teal-50 lg:grid lg:h-screen lg:place-content-center">
                    <div className="mx-auto w-screen max-w-screen-xl flex justify-between items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
                        <div className="mx-auto max-w-prose">
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                               High-Quality <span className="text-green-600">Fiverr</span> Gig Images to 
                                <strong className="text-indigo-600"> Boost </strong>
                                 Your Sales
                            </h1>

                            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
                               Stand out from the crowd with professionally designed gig thumbnails that grab attention and drive more clicks. Perfect for freelancers in every niche.
                            </p>

                            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
                                <a
                                    className="inline-block rounded border border-teal-100 bg-teal-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-teal-800"
                                    href="#"
                                >
                                    Browse Images
                                </a>

                                <a
                                    className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                                    href="#"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div>
                            <img src="./images/undraw_social-dashboard_81sv.svg" alt="" />
                        </div>
                    </div>
                </section>
            </div>
            <section className="bg-teal-50">
                <div className='max-w-screen-xl mx-auto bg-teal-100 grid grid-cols-2 gap-5 items-center justify-center p-10 rounded-lg py-20'>
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-center text-4xl font-bold mt-2">Gig Image Category</h2>
                        <a href="/" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Email Marketing</a>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Lead Generation</a>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Web Development</a>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Search Engine Optimization</a>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h2 className="text-center text-4xl font-bold mt-2">Gig Description & Title Category</h2>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Email Marketing</a>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Lead Generation</a>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Web Development</a>
                        <a href="/login" className="border border-teal-600 rounded-md w-full transition duration-300 ease-in-out bg-teal-600 text-white hover:bg-white hover:text-teal-600 text-2xl px-4 py-1">Search Engine Optimization</a>
                    </div>
                </div>
            </section>
             <div className="text-center mt-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Customize Your Product</h2>

            <p className="mx-auto mt-4 max-w-sm text-gray-500">
              Choose Your needed Gig and Start Earning Today with our outstanding Gigs.
            </p>

            <a
              href="#"
              className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:ring-3 focus:outline-hidden"
            >
              Get Started
            </a>
          </div>
        </>
    );
};

export default Home;
