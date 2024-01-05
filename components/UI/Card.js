import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div classNameName="text-center">
            <Link href="/">
                <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                    <Image className="h-48 w-full object-cover object-center" src="https://www.ryanscomputers.com/storage/products/small/single-intel-10th-gen-comet-lake-core-i3-10100f-11605418404.webp" alt="Product Image" width={500} height={500}/>
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">Intel Processor</h2>
                        <div className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        </div>
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">$20.00</p>
                            <p className="text-base  font-medium text-gray-500 dark:text-gray-300">In Stock</p>
                            <p className="ml-auto text-base font-medium text-green-500">CPU</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;