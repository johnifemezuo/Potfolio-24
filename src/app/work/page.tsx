"use client";
import { Layout, WorkPageIndex } from "@/components";
import Head from "next/head";
import React from "react";

function WorkPage() {
  return (
    <>
      <Head>
        <title>John Ifemezuo | Works</title>
      </Head>

      <Layout>
        <WorkPageIndex />;
      </Layout>
    </>
  );
}

export default WorkPage;
