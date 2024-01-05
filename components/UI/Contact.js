import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div className="mx-10 py-20">
            {/* Heading */}
            <div className="text-left">
                <h2 className="text-3xl font-bold">Need Help?</h2>
            </div>
            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 text-center md:text-left">
                {/* Text Info */}
                <div className="my-10">
                    <p className="py-2">If you need assistance, You can start checking our tour FAQ section, where we have compiled answer to some of the most commonly asked question.</p>

                    <p className="py-2">If You do not find the answer you are looking for , you can also reach out to our customer service team via email or phone</p>
                </div>
                {/* Contact Info */}
                <div className="my-10">
                    <div className="flex justify-center place-content-center items-center py-4">
                        <div className="mr-2"><MdOutlineEmail /></div>
                        <div><p>example@gmail.com</p></div>
                    </div>
                    <div className="flex justify-center place-content-center items-center py-4">
                        <div className="mr-2"><IoCallOutline /></div>
                        <div><p>+8801770302010</p></div>
                    </div>
                    <div className="flex justify-center place-content-center items-center py-4">
                        <div className="mr-2"><CiLocationOn /></div>
                        <div><p>example@gmail.com</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;