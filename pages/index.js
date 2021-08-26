import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Header from "../components/header/header";
import "tailwindcss/tailwind.css";
// import useSWR from 'swr';
import Link from "next/link";
// import cookie from 'js-cookie'; 
import LightFeatureA from "../components/homebody/body";
//import EmblaCarousel from "../components/homebody/carousel/imageCarousel";
import React from "react";
import ReactDOM from "react-dom";
import App from "./_app";
import { NhostApolloProvider } from "@nhost/react-apollo";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <LightFeatureA />
    </Layout>
  );
}
