import Link from "next/link";
const NotFoundPage = () => {
    return (
<div class="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
  <div class="rounded-lg bg-white p-8 text-center shadow-xl">
    <h1 class="mb-4 text-4xl font-bold">404</h1>
    <p class="text-gray-600">Oops! The page you are looking for could not be found.</p>
    <Link href="/">
        <p className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Back To Home</p>
    </Link>
  </div>
</div>
    );
};

export default NotFoundPage;