import RootLayout from "../../components/Layouts/RootLayout"
import Banner from "../../components/UI/Banner"
import Components from "../../components/UI/Components"
import Faq from "../../components/UI/Faq"
import Sample from "../../components/UI/Sample"


function Home() {
  return (
    <div className="montserrat">
      <Banner/>
      <Sample/>
      <Components/>
      <Faq/>
    </div>
  )
}

export default Home

Home.getLayout = function(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}


 