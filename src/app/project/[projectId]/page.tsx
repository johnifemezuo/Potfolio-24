"use client";  

import { useQuery } from "@apollo/client";
import Head from "next/head";
import React from "react";
import { OTHER_PROJECT_QUERY, PROJECT_DETAILS_QUERY, PROJECT_QUERY, SELECTED_PROJECT_QUERY } from "../../../../base/query/project";
import { useRouter } from "next/router";
import { SingleWorkTopNavigation } from "@/components";
import { ProjectDetails } from "@/components/Pages/Work/ProjectDetails";


function ProjectDetailPage({params}: any) {
  const { data } = useQuery(PROJECT_DETAILS_QUERY, {variables: {slug: params.projectId}});

  const projects = data?.projects;

  const { data: others  } = useQuery(OTHER_PROJECT_QUERY, {variables: {slug: params.projectId}});
    
  return (
    <>
      <Head>
        <title>John Ifemezuo | Works | </title>
      </Head>

      <SingleWorkTopNavigation />
      <ProjectDetails content={projects} otherProjects={others}/>
    </>
  );
}

export default ProjectDetailPage;
