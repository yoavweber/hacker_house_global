import { useWriteContract, useReadContract } from "wagmi";
import { abi } from "../constants/abi";

const contractAddress = "0x100D63C951d5c3f0EAc725a739a4e858F55ccf1b" as `0x${string}`;

/**
 * Hook for creating a new team
 * @returns Object with createTeam function and transaction state
 */
export const useCreateTeam = () => {
  const { writeContract, isPending, isSuccess, isError } = useWriteContract();

  const createTeam = async (teamName: string) => {
    writeContract({
      address: contractAddress,
      abi,
      functionName: "createTeam",
      args: [teamName],
    });
  };

  return {
    createTeam,
    isPending,
    isSuccess,
    isError
  };
};

/**
 * Hook for adding a member to a team
 * @returns Object with addTeamMember function and transaction state
 */
export const useAddTeamMember = () => {
  const { writeContract, isPending, isSuccess, isError } = useWriteContract();

  const addTeamMember = async (teamName: string, memberAddress: `0x${string}`) => {
    writeContract({
      address: contractAddress,
      abi,
      functionName: "addTeamMember",
      args: [teamName, memberAddress],
    });
  };

  return {
    addTeamMember,
    isPending,
    isSuccess,
    isError
  };
};

/**
 * Hook for fetching team members
 * @param teamName - The name of the team to get members for
 * @returns Object with members array and loading state
 */
export const useGetTeamMembers = (teamName: string) => {
  const { data: members, isLoading, isError } = useReadContract({
    address: contractAddress,
    abi,
    functionName: "getTeamMembers",
    args: [teamName],
  });

  return {
    members,
    isLoading,
    isError
  };
};

/**
 * Hook for fetching all teams
 * @returns Object with teams array and loading state
 */
export const useGetTeams = () => {
  const { data: teams, isLoading, isError } = useReadContract({
    address: contractAddress,
    abi,
    functionName: "getTeams",
    args: [],
  });

  return {
    teams,
    isLoading,
    isError
  };
};
