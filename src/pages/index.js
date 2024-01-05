import RootLayout from "../../components/Layouts/RootLayout"
import Banner from "../../components/UI/Banner"
import BuildSection from "../../components/UI/BuildSection"
import Components from "../../components/UI/Components"
import Contact from "../../components/UI/Contact"
import Faq from "../../components/UI/Faq"
import Sample from "../../components/UI/Sample"


function Home() {
  return (
    <div className="montserrat">
      <Banner/>
      <BuildSection/>
      <Sample/>
      <Components/>
      <Contact/>
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


 