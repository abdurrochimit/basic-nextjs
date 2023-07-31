import { useEffect } from "react";
import { useRouter } from "next/router";

const NotfoundPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }, []);
  return (
    <>
      <h1 className="title-not-found">Oooops... </h1>
      <h1 className="title-not-found">Halaman tidak ditemukan</h1>
    </>
  );
};

export default NotfoundPage;
