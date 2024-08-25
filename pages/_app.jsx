import "../styles/global.scss";
import { Poppins } from "next/font/google";
import Layout from "../components/Layout/Layout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
