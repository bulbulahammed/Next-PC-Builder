import RootLayout from "../../../components/Layouts/RootLayout";

const Monitor = () => {
    return (
        <div>
            <h2>This is Monitor page</h2>
        </div>
    );
};

export default Monitor;

Monitor.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }