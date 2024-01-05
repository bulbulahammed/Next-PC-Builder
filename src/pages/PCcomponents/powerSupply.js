import RootLayout from "../../../components/Layouts/RootLayout";

const PowerSupply = () => {
    return (
        <div>
            <h2>This is powerSupply page</h2>
        </div>
    );
};

export default PowerSupply;


PowerSupply.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }