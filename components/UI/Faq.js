/* eslint-disable react/no-unescaped-entities */

const Faq = () => {
    return (
        <div>
            <div className="mx-10">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                    <p>Most Asked Question All At One Place</p>
                    {/* Content */}
                    <div className="py-20">
                        {/* Single Question And Answer */}
                        <div className="collapse collapse-plus rounded-none border-b border-gray-300">
                            <input type="radio" name="accordion-"  checked="checked"/> 
                            <div className="collapse-title text-xl font-medium">
                                Can I Customize my own PC using Components From Your Website?
                            </div>
                            <div className="collapse-content"> 
                                <p className="text-justify">
                                    Absolutely! We provide a wide range of components on our website, giving you the flexibility to customize your own PC according to your specific preferences and requirements. From high-performance processors and graphics cards to motherboards, memory, storage options, and more, you can choose the components that best suit your needs. Our user-friendly interface and detailed product descriptions make it easy for you to explore and select the perfect combination of hardware for your custom PC build. Whether you're a gaming enthusiast, content creator, or someone looking for a reliable workstation, our diverse selection ensures that you can create a personalized and powerful computer tailored to your liking. Enjoy the freedom of building a custom PC with quality components from our website!</p>
                            </div>
                        </div>
                        {/* Single Question And Answer */}
                        <div className="collapse collapse-plus  rounded-none border-b border-gray-300">
                            <input type="radio" name="my-accordion-3"/> 
                            <div className="collapse-title text-xl font-medium">
                            Can You help me to choose the right components?
                            </div>
                            <div className="collapse-content"> 
                                <p className="text-justify">
                                Absolutely, I'd be delighted to help you choose the perfect components for your custom PC build! Your preferences and requirements play a crucial role in tailoring the system to meet your needs effectively. Whether you're a gaming enthusiast, content creator, or someone in need of a high-performance workstation, we can work together to select the right components that fit your budget and specifications. Feel free to share more details about your preferences and intended use, and I'll provide you with personalized recommendations to ensure your custom PC exceeds your expectations. Building a PC is an exciting process, and I'm here to make sure it's a smooth and enjoyable experience for you!
                                </p>
                            </div>
                        </div>
                        {/* Single Question And Answer */}
                        <div className="collapse collapse-plus rounded-none border-b border-gray-300">
                            <input type="radio" name="my-accordion-3"/> 
                            <div className="collapse-title text-xl font-medium">
                                What Components Do I Need To Build My Own PC?
                            </div>
                            <div className="collapse-content"> 
                                <ul>
                                    <li><strong>CPU:</strong> Central Processing Unit</li>
                                    <li><strong>Motherboard:</strong> Main circuit board</li>
                                    <li><strong>Memory (RAM):</strong> Temporary storage</li>
                                    <li><strong>GPU:</strong> Graphics Processing Unit</li>
                                    <li><strong>Storage:</strong>
                                    <ul>
                                        <li><strong>SSD:</strong> Solid State Drive</li>
                                        <li><strong>HDD:</strong> Hard Disk Drive</li>
                                    </ul>
                                    </li>
                                    <li><strong>PSU:</strong> Power Supply Unit</li>
                                    <li><strong>Case:</strong> Computer case</li>
                                    <li><strong>Cooling:</strong>
                                    <ul>
                                        <li><strong>CPU Cooler:</strong> Cooling for the CPU</li>
                                        <li><strong>Case Fans:</strong> Improve airflow</li>
                                    </ul>
                                    </li>
                                    <li><strong>Operating System:</strong> OS for your PC</li>
                                    <li><strong>Peripherals (Optional):</strong>
                                    <ul>
                                        <li>Monitor</li>
                                        <li>Keyboard</li>
                                        <li>Mouse</li>
                                        <li>Speakers or Headphones</li>
                                    </ul>
                                    </li>
                                    <li><strong>Additional Components (Optional):</strong>
                                    <ul>
                                        <li>Optical Drive</li>
                                        <li>Wi-Fi/Bluetooth Card</li>
                                        <li>Additional Case Accessories (RGB lighting, etc.)</li>
                                    </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Single Question And Answer */}
                        <div className="collapse collapse-plus  rounded-none border-b border-gray-300">
                            <input type="radio" name="my-accordion-3"/> 
                            <div className="collapse-title text-xl font-medium">
                                Do Pre-build PC Come With Warranty?
                            </div>
                            <div className="collapse-content"> 
                                <p className="text-justify">
                                    Yes, You will Get Warranty with our pre-build PC.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;