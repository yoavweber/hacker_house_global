
export const abi = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "teamName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "member",
        "type": "address"
      }
    ],
    "name": "addTeamMember",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "teamName",
        "type": "string"
      }
    ],
    "name": "createTeam",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "teamName",
        "type": "string"
      }
    ],
    "name": "getTeamMembers",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getTeams",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;
