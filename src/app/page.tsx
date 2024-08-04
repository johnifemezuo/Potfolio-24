"use client";
import { HomepageIndex } from "@/components";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import { SELECTED_PROJECT_QUERY } from "../../base/query/project";

export default function Home() {
  const { data, loading: isLoading } = useQuery(SELECTED_PROJECT_QUERY);
  const projects = data?.projects;
  const dribbleShots = data?.dribbleShot;

  return (
    <>
      <Head>
        <title>John Ifemezuo | Portfolio</title>
      </Head>

      <div>
        {isLoading ? <p>Loading...</p> : <HomepageIndex projects={projects} dribbleShots={dribbleShots} />}
      </div>
    </>
  );
}
