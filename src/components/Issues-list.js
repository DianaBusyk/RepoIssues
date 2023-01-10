import React, { Component } from "react";
import Issue from "./issue";
import Loading from "./loading";
import { useGlobalContext } from "../context";

export default function IssuesList() {
  const { issues, loading } = useGlobalContext;
  if (loading) {
    return <Loading/>;
  }
//   if (issues.length < 1) {
//     return (
//         <h2>No issues in this repo</h2>
//     )
//   }
  return (
      <div>
        {/* {issues.map((item) => {
          return <Issue key={item.id} {...item} />;
        })} */}
      </div>
  );
}
