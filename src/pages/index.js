import RootLayout from "../../components/Layouts/RootLayout"
import Banner from "../../components/UI/Banner"
import Sample from "../../components/UI/Sample"


function Home() {
  return (
    <div>
      <Banner/>
      <Sample/>
    </div>
  )
}

export default Home

Home.getLayout = function(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}


 