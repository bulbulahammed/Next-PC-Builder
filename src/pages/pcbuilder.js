import RootLayout from "../../components/Layouts/RootLayout"

function PcBuilder() {
  return (
    <div>
        <p>This is Pc Builder Page</p>
    </div>
  )
}

export default PcBuilder


PcBuilder.getLayout = function(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}