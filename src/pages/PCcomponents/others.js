import RootLayout from '../../../components/Layouts/RootLayout';

const OthersComponents = () => {
    return (
        <div>
            <h2>This is other Components page</h2>
        </div>
    );
};

export default OthersComponents;

OthersComponents.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }