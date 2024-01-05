import RootLayout from "../../../components/Layouts/RootLayout";

const MotherBoard = () => {
    return (
        <div>
            <h2>This is motherBoard page</h2>
        </div>
    );
};

export default MotherBoard;

MotherBoard.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }