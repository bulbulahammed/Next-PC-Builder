import { useRouter } from 'next/router';
import RootLayout from '../../../components/Layouts/RootLayout';

const ComponentsDetails = () => {
    const router = useRouter();
    return (
        <div>
            <h2> This is Product Detail page for: {router.query.componentsDetails}</h2>
        </div>
    );
};

export default ComponentsDetails;


ComponentsDetails.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }