import RootLayout from "../../../components/Layouts/RootLayout";

const Processor = () => {
    return (
        <div>
            <h3>This is Processor Page</h3>
        </div>
    );
};

export default Processor;


Processor.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }