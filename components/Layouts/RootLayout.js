import { Montserrat } from "next/font/google";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const montserrat_init = Montserrat({
  subsets: ['latin'],
  weight:['100','300','400','500','600','700','800'],
  variable: '--font-montserrat',
})

const RootLayout = ({children}) => {
    return (
        <main className={montserrat_init.variable}>
            <Navbar/>
            {
                children
            }
            <Footer/>
        </main>
    );
};

export default RootLayout;