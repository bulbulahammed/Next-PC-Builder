import RootLayout from "../../../components/Layouts/RootLayout";

const PcComponent = () => {
    return (
        <div>
            <h3>This is Pc Components page</h3>
        </div>
    );
};

export default PcComponent;


PcComponent.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }