import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import styles from "./layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>{`${pageTitle} - NextJs Basic`}</title>
        <meta name="description" content="nextjs basic" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
