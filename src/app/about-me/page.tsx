"use client"

import { AboutPage, Layout } from "@/components";
import React from "react";

function AboutMePage() {
  return (
    <>
      <head>
        <title>John Ifemezuo | About</title>
        <link rel="icon" href="/images/me-tab.png" />
      </head>

      <Layout>
        <AboutPage />
      </Layout>
    </>
  );
}

export default AboutMePage;
