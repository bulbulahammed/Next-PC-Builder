import cooling from "@/assets/images/cooling.png";
import graphicsCard from "@/assets/images/graphicsCard.png";
import monitor from "@/assets/images/monitor.png";
import motherBoard from "@/assets/images/motherBoard.png";
import powerSupply from "@/assets/images/powerSupply.png";
import processor from "@/assets/images/processor.png";
import ram from "@/assets/images/ram.png";
import storage from "@/assets/images/storage.png";
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
                    <Link className="my-4" href="/processor">
                        <div className="m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={processor}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Processor</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/graphicsCard">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={graphicsCard}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Graphics Card</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/motherBoard">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={motherBoard}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Mother Board</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/ram">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={ram}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Memory (RAM)</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/storage">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={storage}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Storage</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/powerSupply">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={powerSupply}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Power Supply</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/cooling">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={cooling}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">System Cooking</h3>
                        </div>
                    </Link>
                    <Link className="my-4" href="/gaming">
                        <div className="  m-1 text-center">
                            <div className="flex justify-center">
                                <Image
                                    className="rounded"
                                    src={monitor}
                                    alt="Picture of the author"
                                    width={100}
                                    height={100}
                                    />
                            </div>
                            <h3 className="pt-3">Monitors</h3>
                        </div>
                    </Link>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Components;


