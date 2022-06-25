import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HeaderLoggedIn from "../components/HeaderLoggedIn";
import HeaderNotLoggedIn from "../components/HeaderNotLoggedIn";

export default function Home() {
  return (
    <div>
      <HeaderLoggedIn />
      {/*}  
      <HeaderNotLoggedIn />*/}
    </div>
  );
}
