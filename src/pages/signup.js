import auth from "@/firebase/firebase.auth.js";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";
import RootLayout from "../../components/Layouts/RootLayout";

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const {
        register,
        handleSubmit,
      } = useForm()

      const onSubmit = (data) => {createUserWithEmailAndPassword(data.email,data.password)}

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Create your account
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <div className="mt-1">
                                <input  {...register("email", { required: true })}  id="email" name="email" type="email" autoComplete="email"  required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your email address"/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1">
                                <input  {...register("password", { required: true })}  id="password" name="password" type="password" autoComplete="current-password" required
                                    className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-white text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Enter your password"/>
                            </div>
                        </div>
                        <div>
                            <button type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="mt-6">
                        <div className="text-center py-4">
                            <span>Already have account? <Link href={"/login"}>Login</Link></span>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-100 text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-2 gap-3">                            
                            <button
                                className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                onClick={()=>signIn("github",{callbackUrl:"http://localhost:3000/"})} >
                                <FaGithub />
                            </button>
                            <button className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                                onClick={()=>signIn("google",{callbackUrl:"http://localhost:3000/"})} >
                                <FaGoogle/>
                            </button>
                        </div>
                        <div className="text-center py-4">
                            <Link href={"/signup"}>
                                <p>Do not have account? </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;


SignUp.getLayout = function(page){
    return(
      <RootLayout>{page}</RootLayout>
    )
  }