import styles from "../styles/Home.module.css";
import Layout from "@/component/layout";
import Image from "next/image";

export default function Home() {
  return (
      <Layout pageTitle="Home">
        <Image src="/ts.png" width={200} height={200} alt="image" />
        <h1 className={styles["title-homepage"]}>Welcome, Abdul Rokhim</h1>
      </Layout>

  );
}
