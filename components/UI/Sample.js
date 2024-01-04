import pc_black from "@/assets/images/pc_black.png";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const Sample = () => {
    return (
        <div className="bg-black text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-10 py-20">
                <div className="text-left">
                    <div className=" text-3xl md:text-4xl lg:text-5xl font-bold">
                        <h3>Brand New Beast</h3>
                    </div>
                    <div className="py-20">
                        <div className="flex place-items-center my-1">
                            <h2 className="text-green-500 mr-3"><FaRegCheckCircle /></h2>
                            <p>Premium Custom PC</p>
                        </div>
                        <div className="flex place-items-center  my-1">
                        <h2 className="text-green-500 mr-3"><FaRegCheckCircle /></h2>
                            <p>Ready For High Performance.</p>
                        </div>
                        <div className="flex place-items-center  my-2">
                        <h2 className="text-green-500 mr-3"><FaRegCheckCircle /></h2>
                            <p>Premium Full Steel Chassis.</p>
                        </div>
                        <div className="flex place-items-center  my-2">
                        <h2 className="text-green-500 mr-3"><FaRegCheckCircle /></h2>
                            <p>Streamer Friendly.</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-xs">From</p>
                        <p><span className="text-6xl font-bold">$2500</span> <span className="text-xs">in stock</span></p>
                        <div className="py-5">
                            <button className="btn  rounded text-black bg-white hover:bg-black hover:text-white">Browse</button>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <Image
                    src={pc_black}
                    alt="Picture of the author"
                    width={300}
                    height={300}
                    />
                </div>
                <div className="text-left">
                    <div>
                      <h2 className="text-xl my-2">Processor</h2>
                      <p>Intel 10 Gen or <br/> Ryzen 3000 Processors</p>
                    </div>
                    <div>
                      <h2 className="text-xl my-2">Graphics Card</h2>
                      <p>Up to NVEDIA <br/> GeFOrce RTX 3080</p>
                    </div>
                    <div>
                      <h2 className="text-xl my-2">Memory</h2>
                      <p>32GB Ultra-fast <br/> 3800mhz Memory</p>
                    </div>
                    <div>
                      <h2 className="text-xl my-2">Cooling</h2>
                      <p>Premium Custom <br/>  Water Cooled CPU</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sample;