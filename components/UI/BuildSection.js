import Card from "./Card";

const BuildSection = () => {
    return (
        <div className="my-20">
            <div className='mx-10'>
                {/* Heading */}
            <div className="text-center">
                <h2 className="text-3xl font-bold">Select Components</h2>
                <p>Build your Dream Pc from Here</p>
            </div>
            {/* Content */}
                <Card/>
            </div>
        </div>
    );
};

export default BuildSection;


