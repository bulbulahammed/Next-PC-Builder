import PC from "@/assets/images/pc.png";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="h-screen container pt-28 flex place-content-center mx-10">
            <div className="text-center w-100 md:w-1/3 md:text-left">
               <div className="text-4xl md:text-5xl lg:text-6xl font-bold"> 
                  <h2>Get Your Perfect PC Today!</h2>
                </div>
               <div className=" text-slate-600 text-lg pt-4 pb-6 font-medium">
                  <p>Choose From Our Prebuild Section Or Build Your Own PC</p>
               </div>
               <div className="flex place-content-center md:place-content-start">
                    <div className="text-white mr-2 text-center">
                        <button className="btn text-white rounded bg-black hover:bg-white hover:text-black">Pre-Build</button>
                    </div>
                    <div className="ml-2">
                        <button className="btn  rounded text-black bg-white hover:bg-black hover:text-white">Build Yourself</button>
                    </div>
               </div>
            </div>
            <div className="w-1/3 md:block hidden">
            <Image
                src={PC}
                alt="Picture of the author"
                width={300}
                height={300}
                />
            </div>
            <div className="text-left w-1/3 md:block hidden">
                <div className="py-5">
                    <h3 className="text-xl font-medium text-slate-700 pb-2">Pre-Build</h3>
                    <p className="text-slate-500">Computer that are already assembled and configured by manufacturers, rather than building ones own computer from scratch</p>
                </div>
                <div className="py-5">
                    <h3 className="text-xl font-medium text-slate-700 pb-2">Build it yourself</h3>
                    <p className="text-slate-500">Main advantages of building your own computer is flexibility and customization. You have full control over the selection of each component, allowing you to choose the best  parts for your specific needs and budget</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;