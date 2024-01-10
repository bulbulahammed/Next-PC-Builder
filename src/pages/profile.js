
import { useSession } from "next-auth/react";
import Image from 'next/image';
import RootLayout from "../../components/Layouts/RootLayout";
const Profile = () => {
    const { data: session } = useSession();
    const avatar = session?.user?.image;
    return (
            <section className=" bg-[#071e34] flex font-medium items-center justify-center h-screen">
                <section className="w-64 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <span className="text-emerald-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                        </svg>
                        </span>
                    </div>
                    <div className="mt-6 w-fit mx-auto">
                            {
                            session?.user?(
                                <Image src={avatar} className="rounded-full w-28 " alt="profile picture"
                                height={100}
                                width={100}
                                />
                            ):(                        
                                <Image src="https://i.ibb.co/2Khgnwn/user2.png" className="rounded-full w-28 " alt="profile picture"
                                height={100}
                                width={100}
                                />
                            )
                        }
                    </div>
                    <div className="mt-8 ">
                        <h2 className="text-white font-bold text-2xl tracking-wide">{session?.user?.name}</h2>
                    </div>
                </section>
            </section>
    );
};

export default Profile;



Profile.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }