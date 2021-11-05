import React from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES, GET_USERS } from "../services/queries";

const useQuerydata = (searchTerm: string) => {
  const {
    data: repositoryData,
    loading: loadingRepoData,
    refetch: refetchReposData,
  } = useQuery(GET_REPOSITORIES, {
    variables: { queryString: searchTerm },
  });
  const {
    data: userData,
    loading: loadingUserData,
    refetch: refetchUsersData,
  } = useQuery(GET_USERS, {
    variables: { queryString: searchTerm },
  });
  return {
    repositoryData,
    loadingRepoData,
    loadingUserData,
    refetchReposData,
    refetchUsersData,
    userData,
  };
};

export default useQuerydata;
