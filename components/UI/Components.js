import cooling from "@/assets/images/cooling.jpg";
import gaming from "@/assets/images/gaming.jpg";
import graphicsCard from "@/assets/images/graphicsCard.jpg";
import motherBoard from "@/assets/images/motherBoard.jpg";
import powerSupply from "@/assets/images/powerSupply.jpg";
import processor from "@/assets/images/processor.jpg";
import ram from "@/assets/images/ram.jpg";
import storage from "@/assets/images/storage.jpg";
import Image from "next/image";
import Link from "next/link";

const Components = () => {
    return (
        <div className="my-20">
            <div className='mx-10'>
                {/* Heading */}
            <div className="text-left">
                <h2 className="text-2xl font-bold">Components</h2>
            </div>
            {/* Content */}
                <div className="py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-center">
                    <Link href="/processor">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={processor}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Processor</h3>
                        </div>
                    </Link>
                    <Link href="/graphicsCard">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={graphicsCard}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Graphics Card</h3>
                        </div>
                    </Link>
                    <Link href="/motherBoard">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={motherBoard}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Mother Board</h3>
                        </div>
                    </Link>
                    <Link href="/ram">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={ram}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Memory (RAM)</h3>
                        </div>
                    </Link>
                    <Link href="/storage">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={storage}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Storage</h3>
                        </div>
                    </Link>
                    <Link href="/powerSupply">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={powerSupply}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Power Supply</h3>
                        </div>
                    </Link>
                    <Link href="/cooling">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={cooling}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>System Cooking</h3>
                        </div>
                    </Link>
                    <Link href="/gaming">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    src={gaming}
                                    alt="Picture of the author"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <h3>Gaming Peripherals</h3>
                        </div>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Components;


