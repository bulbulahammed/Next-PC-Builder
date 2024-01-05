import Link from "next/link";

const preBuild = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
                <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
                <p className="text-lg mb-8 px-4 md:px-0">We are working hard to bring you something awesome. Stay tuned!</p>
                <div className="flex justify-center items-center space-x-4">
                    <Link href="/">
                        <p className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Back To Home</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default preBuild;