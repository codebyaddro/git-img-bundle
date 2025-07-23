

const Product = () => {
    return (
        <div>
            <section>
                <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 mt-10">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Gig Images</h2>

                        <p className="mt-4 max-w-md text-gray-500">
                           Stand out from the crowd with professionally designed gig thumbnails that grab attention and drive more clicks. Perfect for freelancers in every niche.
                        </p>
                    </header>

                    <div className="mt-8 block lg:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-3 lg:items-start lg:gap-3">
                        
                        {/* Gig image card 1 */}
                        <div className="">
                            <div>
                                <img src="./gig-img/bundle-1.png" alt="" />
                                <div className="flex justify-center gap-12 items-center">
                                    <button className="px-3 py-2 border rounded-lg border-teal-400 text-teal-500 transition-all ease-in-out duration-500 hover:bg-teal-500 hover:text-white mt-2">View Image</button>
                                    <button className="px-3 py-2 border rounded-lg border-teal-400 bg-teal-500 text-white transition-all duration-500 hover:text-teal-500 hover:bg-white mt-2">Add to Cart</button>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div>
                                <img src="./gig-img/bundle-2.png" alt="" />
                                <div className="flex justify-center gap-12 items-center">
                                    <button className="px-3 py-2 border rounded-lg border-teal-400 text-teal-500 transition-all ease-in-out duration-500 hover:bg-teal-500 hover:text-white mt-2">View Image</button>
                                    <button className="px-3 py-2 border rounded-lg border-teal-400 bg-teal-500 text-white transition-all duration-500 hover:text-teal-500 hover:bg-white mt-2">Add to Cart</button>
                                </div>
                            </div>
                            
                        </div>
                        <div>
                            <div>
                                <img src="./gig-img/bundle-3.png" alt="" />
                                <div className="flex justify-center gap-12 items-center">
                                    <button className="px-3 py-2 border rounded-lg border-teal-400 text-teal-500 transition-all ease-in-out duration-500 hover:bg-teal-500 hover:text-white mt-2">View Image</button>
                                    <button className="px-3 py-2 border rounded-lg border-teal-400 bg-teal-500 text-white transition-all duration-500 hover:text-teal-500 hover:bg-white mt-2">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Product;