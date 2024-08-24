"use client";
import { Layout, WorkPageIndex } from "@/components";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { SELECTED_PROJECT_QUERY } from "../../../base/query/project";

function WorkPage() {
  const { data } = useQuery(SELECTED_PROJECT_QUERY);
  const projects = data?.projects;
  const dribbleShots = data?.dribbleShot;

  

  return (
    <>
      <Head>
        <title>John Ifemezuo | Works</title>
        <link rel="icon" href="/images/me-tab.png" />
      </Head>

      <Layout>
        <WorkPageIndex projects={projects} dribbleShots={dribbleShots} />;
      </Layout>
    </>
  );
}

export default WorkPage;
