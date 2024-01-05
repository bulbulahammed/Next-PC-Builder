import RootLayout from "../../../components/Layouts/RootLayout";

const Storage = () => {
    return (
        <div>
            <h2>This is Storage page</h2>
        </div>
    );
};

export default Storage;

Storage.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }