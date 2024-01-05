import RootLayout from "../../../components/Layouts/RootLayout";

const Ram = () => {
    return (
        <div>
            <h2>This is Ram page</h2>
        </div>
    );
};

export default Ram;

Ram.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }