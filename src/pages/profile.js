import { useSession } from "next-auth/react";
import { useAuthState } from 'react-firebase-hooks/auth';


const Profile = () => {
    const { data: session } = useSession();
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
                 <h1 style={{ textAlign: "center", marginTop:"10%" }}>Welcome To Next Auth Home Page</h1>
                {user?.email &&  <h2 style={{ textAlign: "center" }}>Logged In User: {user?.email}</h2>}
        </div>
    );
};

export default Profile;