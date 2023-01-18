import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BoynPage from "./boyn";
/// <reference types="react-scripts" />
import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider;
  }
}

export default function Home() {
  return <BoynPage></BoynPage>;
}
