Here's a concise product context you can give to any LLM working on your project — it defines what Hacker House Protocol is and what the product aims to do, without locking you into current implementation details:

⸻

🏠 Hacker House Protocol — Product Context

Overview
Hacker House Protocol is a Web3 social and booking platform for builders, hackers, and digital nomads. It gamifies the process of finding teammates, booking hacker houses, and participating in tech events through an interactive 2D pixel-world interface. Each user is represented by a unique on-chain avatar (a "Cypher Kitten"), linked to their wallet and verifiable credentials.

⸻

Core Concept

The platform merges three key experiences:
	1.	Identity Layer: Every user connects a crypto wallet .
	2.	Booking Layer: Users discover and co-pay for real hacker houses near major events using crypto payments with escrow and staking mechanisms.
	3.	Social Layer: Builders can match with others by skills, POAPs, NFTs, and event attendance, forming teams and co-living groups inside virtual "hacker house servers."

⸻

User Flow
	1.	Onboarding:
	•	Connect wallet → generate Cypher Kitten avatar.
	•	Optionally link Talent Protocol, GitHub, and POAP profiles to enrich identity.
	2.	Exploration:
	•	Enter a pixel-style map to explore cities or events.
	•	Choose between viewing hacker house listings or discovering other hackers.
	3.	Matchmaking:
	•	Filter hackers by skills, dates, or event participation.
	•	View detailed profiles with verified credentials, POAPs, and NFTs.
	4.	Booking:
	•	Browse hacker houses (available, recruiting, or virtual).
	•	Book using co-payment (USDT/USDC) — funds go to escrow.
	•	A portion is paid to the host; deposits are staked for yield (returned post-stay if no disputes).
	5.	Virtual Hacker House:
	•	After booking, users join a shared server (chat) where teammates coordinate, share progress, and prepare for events.

⸻

Revenue Model
	•	Listing Fee: ~1% platform commission from host payouts.
	•	Yield Revenue: Interest from staking deposits during stays.

⸻

Core Principles
	•	On-chain transparency: Smart contracts handle escrow and staking.
	•	Composability: Integrates with Talent Protocol, POAP, and NFT identity systems.
	•	Community-first: Focused on empowering builders to find housing, teammates, and opportunities.
	•	Playful UX: Pixel-art interface, gamified discovery, and social presence system.

⸻

MVP Scope

The MVP covers:
	•	Wallet connection + profile creation.
	•	City/event map view with toggle.
	•	Basic matchmaking with profile browsing.
	•	Hacker house listings (available/recruiting).
	•	Co-payment mock flow → virtual chat room.

The aesthetic remains cyberpunk/pixel-art, using a consistent color palette (neon purple, cyan, lime, and magenta). The tone is playful but functional — a bridge between booking app, social layer, and metaverse.

**Perfect if you want to create your own virtual blockchain with custom tokens and governance.**

Follow the complete deployment process below:

**What you get**: Your own virtual blockchain with custom tokens, domain system, staking rewards, and treasury management - all deployed and verified on public testnets.

**Next steps**: Jump to [Deploy Your Own EVVM](#deploy-your-own-evvm) section below.

---

## Library Usage

If you chose **Option A** above, here's how to use EVVM contracts as a library in your project:

### NPM Installation

```bash
npm install @evvm/testnet-contracts
```

### Forge Installation

```bash
forge install EVVM-org/Testnet-Contracts
```

After installing with Foundry, add the following to your `foundry.toml` file to configure the library paths correctly:

```toml
[profile.default]
remappings = [
    "@evvm/testnet-contracts/=lib/Testnet-Contracts/src/",
]
```
### Create Your Service

Check out [How to Create an EVVM Service](./08-HowToMakeAEVVMService.md) for detailed development guides.

---

## Deploy Your Own EVVM

If you chose **Option B** above, follow this streamlined deployment process to create your own virtual blockchain:

## Prerequisites

The deployment wizard will automatically validate that you have the required tools installed:

- **Foundry** - Solidity development toolkit (includes `forge` and `cast`) [Install Foundry](https://getfoundry.sh/introduction/installation/)
- **Node.js** (>= 18.0) - For npm dependency management [Install Node.js](https://nodejs.org/en/download/)
- **Git** - Version control system [Install Git](https://git-scm.com/downloads)

## 1. Clone and Install

```bash
git clone https://github.com/EVVM-org/Testnet-Contracts
cd Testnet-Contracts
make install
```

The `make install` command will:
- Install npm dependencies
- Initialize git submodules
- Compile contracts with IR optimization (`--via-ir`)

## 2. Environment Setup

Create your `.env` file with required API keys and RPC URLs:

```bash
# Copy the example and fill in your values
cp .env.example .env
```

Add your configuration (you can get more RPC URLs from https://chainlist.org/):

```bash
RPC_URL_ETH_SEPOLIA="https://0xrpc.io/sep"
RPC_URL_ARB_SEPOLIA="https://arbitrum-sepolia.therpc.io"
ETHERSCAN_API=your_etherscan_api_key
```

:::warning[**IMPORTANT: No Private Keys in .env**]
The `.env` file should **ONLY** contain:
- RPC URLs for blockchain networks
- API keys for block explorers (Etherscan, Arbiscan)

**NEVER store private keys in the .env file**. Private keys will be managed securely through Foundry's encrypted keystore in the next step.
:::

## 3. Secure Key Management

Import your testnet private key securely using Foundry:

```bash
cast wallet import defaultKey --interactive
```

:::warning[**Security Note**]
This command will prompt you to enter your private key securely. The key will be encrypted and stored locally by Foundry. **Never commit real private keys to version control or store them in .env files**.
:::

## 4. Interactive Deployment Wizard

Run the automated deployment wizard:

```bash
npm run wizard
```

This interactive TypeScript wizard will guide you through the entire deployment process with a modern, user-friendly interface.

### What the Wizard Does

The wizard automates the complete deployment process:

1. **Prerequisites Validation** - Checks that Foundry, Git, and Node.js are properly installed
2. **Git Submodule Initialization** - Ensures all dependencies are properly configured
3. **Environment Setup** - Guides you through RPC URL and API key configuration
4. **Wallet Selection** - Lists available Foundry keystores and helps you select the deployment account
5. **Interactive Configuration** - Prompts for all deployment parameters (see sections below)
6. **Automatic Deployment** - Deploys all contracts with optimized settings
7. **Contract Verification** - Automatically verifies contracts on block explorers
8. **Deployment Summary** - Provides contract addresses and explorer links
9. **Registry Registration** - Optionally registers your EVVM in the Registry EVVM Contract

### Wizard Features

- **RPC Fallback System**: Includes 5 backup RPC endpoints per network for 99%+ deployment success
- **Input Validation**: Ensures all addresses and values are properly formatted
- **Network Selection**: Choose from Ethereum Sepolia, Arbitrum Sepolia, or custom RPC
- **Configuration Summary**: Review all settings before deployment
- **Automatic File Generation**: Creates configuration files in `input/` directory

The wizard will guide you through:

### Administrator Configuration
- **Admin address** - Contract administrator with [governance privileges](./05-Staking/02-StakingContract/03-AdminFunctions.md)
- **Golden Fisher address** - Special sudo-like account with unrestricted [golden staking](./05-Staking/02-StakingContract/01-StakingFunctions/01-goldenStaking.md) privileges
- **Activator address** - Controls system activation and feature flags

:::info[Golden Fisher Privileges]
The **Golden Fisher** is a special account that operates like a "sudo" user in the EVVM staking system:

- **Direct Staking/Unstaking**: Can perform staking and unstaking operations without any limits or restrictions
- **No Signature Required**: Operations are executed directly without signature verification
- **Bypass All Constraints**: Ignores normal staking rules, cooldown periods, and validation requirements  
- **Administrative Control**: Intended for system administration and emergency operations
- **Single Account**: Only one Golden Fisher address can be configured per deployment

This account should be secured with the highest level of protection as it has unrestricted access to staking operations.
:::

### EVVM Metadata Configuration
- **EVVM Name** - Default: "EVVM" (your virtual blockchain's identity hosted on the selected network)
- **EVVM ID** - Unique identifier for your EVVM instance (multiple EVVMs can be deployed on the same host blockchain)
- **Principal Token Name** - Default: "Mate token" (the [core ecosystem token](./04-EVVM/01-Introduction.md))
- **Principal Token Symbol** - Default: "MATE"

### Advanced Configuration (Optional)
- **Total Supply** - Default: 2,033,333,333 × 10¹⁸ (total token economics)
- **Era Tokens** - Default: 1,016,666,666.5 × 10¹⁸ (rewards pool for [staking system](./05-Staking/01-Introduction.md))
- **Reward per operation** - Default: 5 × 10¹⁸ (base reward for [transaction processing](./03-ProcessOfATransaction.md))

:::info[Principal Token Address Configuration]

The `principalTokenAddress` parameter is **not included** in the interactive setup wizard as it is an extremely advanced and sensitive configuration option. 

**If you need to specify a custom principal token address:**

1. **Modify the deployment script** directly in `script/DeployTestnet.s.sol`
2. **Update the `principalTokenAddress` field** in the `EvvmMetadata` struct (currently set to `0x0000000000000000000000000000000000000001`)

This option should only be used in very specific scenarios and requires deep understanding of the EVVM token architecture.

:::warning[**CRITICAL**]
Do **NOT** commit these changes to the Testnet repository as they will be discarded immediately
:::

### Network Selection

The wizard will prompt you to select a deployment network:

- **Ethereum Sepolia** - Deploy EVVM on Ethereum Sepolia testnet (host blockchain)
- **Arbitrum Sepolia** - Deploy EVVM on Arbitrum Sepolia testnet (host blockchain)
- **Custom RPC** - Deploy EVVM on any EVM-compatible blockchain using a custom RPC URL

:::warning[**CRITICAL: Testnet Tokens Required**]
**You must have testnet tokens** for the network where you want to deploy your EVVM contracts. These tokens are free but required for paying gas fees during deployment.

**Get testnet tokens from these public faucets:**

**Ethereum Sepolia:**
- https://ethglobal.com/faucet/
- https://cloud.google.com/application/web3/faucet/ethereum/sepolia
- https://www.alchemy.com/faucets/ethereum-sepolia
- https://faucets.chain.link/sepolia
- https://faucet.quicknode.com/ethereum/sepolia
- https://www.infura.io/zh/faucet/sepolia

**Arbitrum Sepolia:**
- https://www.alchemy.com/faucets/arbitrum-sepolia
- https://faucets.chain.link/arbitrum-sepolia
- https://faucet.quicknode.com/arbitrum/sepolia
- https://www.l2faucet.com/arbitrum
- https://learnweb3.io/faucets/arbitrum_sepolia/

:::

The wizard automatically handles host blockchain configuration and deployment parameters based on your network choice. Your EVVM virtual blockchain will be deployed as smart contracts on the selected host blockchain.

:::note[Expected Verification Warning]
```bash
Error: Not all (5 / 6) contracts were verified!
```

**This warning is normal and expected**. One library dependency cannot be automatically verified on the block explorer, but this doesn't affect your EVVM functionality. All main contracts will be verified successfully.
:::

## 5. What Happens During Deployment

The `npm run wizard` command automatically:

1. **Validates Prerequisites** - Checks that Foundry, Git, and Node.js are properly installed with correct versions

2. **Initializes Dependencies** - Ensures git submodules and npm packages are up to date

3. **Configures Environment** - Guides you through RPC URLs and API key setup with fallback options

4. **Collects Configuration** - Interactively prompts for administrator addresses, EVVM metadata, and token parameters

5. **Generates Configuration Files** in the `input/` directory:
   - `address.json` - Administrator addresses for [system governance](./05-Staking/02-StakingContract/03-AdminFunctions.md)
   - `evvmBasicMetadata.json` - EVVM identity and [principal token](./04-EVVM/01-Introduction.md) metadata
   - `evvmAdvancedMetadata.json` - Supply parameters and [reward distribution](./03-ProcessOfATransaction.md) settings

6. **Displays Configuration Summary** - Shows all entered values for your review and confirmation

7. **Deploys Contracts** - Automatically deploys the complete [EVVM ecosystem](./intro.md) on your chosen host blockchain using `DeployTestnet.s.sol`

8. **Verifies Contracts** - Automatically verifies all contracts on the host blockchain's block explorers using Etherscan API

9. **Provides Deployment Summary** - Shows deployed contract addresses with direct links to block explorers

10. **Assists with Registry Registration** - Optionally helps you register your EVVM in the Registry EVVM Contract

## 6. Manual Deployment (Alternative)

If you prefer manual control or need to customize the deployment process beyond what the wizard provides, you can still use the traditional deployment methods:

### Environment Setup for Manual Deployment

First, create and configure your `.env` file:

```bash
cp .env.example .env
```

Add your RPC URLs and API keys (get more from https://chainlist.org/):

```bash
RPC_URL_ETH_SEPOLIA="https://0xrpc.io/sep"
RPC_URL_ARB_SEPOLIA="https://arbitrum-sepolia.therpc.io"
ETHERSCAN_API=your_etherscan_api_key
```

### Manual Deployment Commands

```bash
# Deploy EVVM on Ethereum Sepolia (host blockchain)
make deployTestnet NETWORK=eth

# Deploy EVVM on Arbitrum Sepolia (host blockchain) (default)
make deployTestnet NETWORK=arb

# Deploy EVVM on custom EVM-compatible host blockchain
forge script script/DeployTestnet.s.sol:DeployTestnet \
  --rpc-url YOUR_RPC_URL \
  --account defaultKey \
  --broadcast \
  --verify \
  --etherscan-api-key $ETHERSCAN_API \
  -vvvvvv
```

:::info[Configuration Files Required]
For manual deployment, you must first create the configuration files in the `input/` directory:
- `address.json` - Administrator addresses
- `evvmBasicMetadata.json` - EVVM and token metadata
- `evvmAdvancedMetadata.json` - Supply and reward parameters

The wizard creates these automatically, or you can create them manually based on the examples in the repository.
:::

### Local Development

For local testing with Anvil (local host blockchain):

```bash
# Start local host blockchain
make anvil

# Deploy EVVM to local host blockchain (in another terminal)
make deployLocalTestnet
```

## 7. Verify Your Deployment

After deployment, check the `broadcast/` directory for:

- **Transaction receipts** - Detailed transaction information from the host blockchain
- **Deployed contract addresses** - EVVM contract addresses on the host blockchain network
- **Gas usage reports** - Deployment cost analysis on the host blockchain

### What Gets Deployed

The EVVM virtual blockchain ecosystem consists of five main smart contracts deployed on your chosen host blockchain:

- **[Evvm.sol](./04-EVVM/01-Introduction.md)** - Core virtual machine implementation with payment processing
- **[NameService.sol](./06-NameService/01-Introduction.md)** - Domain name resolution and identity system
- **[Staking.sol](./05-Staking/01-Introduction.md)** - Token staking, rewards mechanism, and fisher registration
- **[Estimator.sol](./05-Staking/03-Estimator/01-notifyNewEpoch.md)** - Staking rewards estimation and calculation system
- **[Treasury.sol](./07-Treasury/01-Introduction.md)** - Asset deposit and withdrawal system between EVVM and host blockchains

### Understanding Your Deployment

- **[Transaction Flow](./03-ProcessOfATransaction.md)** - Learn how transactions are processed in your EVVM virtual blockchain
- **[Payment Functions](./04-EVVM/04-PaymentFunctions/02-payMultiple.md)** - Explore available payment operations within the virtual blockchain
- **[Staking Operations](./05-Staking/02-StakingContract/01-StakingFunctions/03-publicStaking.md)** - Understand staking functionality on your deployed EVVM

## 8. Register Your EVVM in the Registry

After successfully deploying your EVVM virtual blockchain, the next step is registering it in the **Registry EVVM Contract**. This registration gives you an official EVVM ID that acts like a "phone number" for your virtual blockchain - other services and applications can use this ID to discover and connect to your deployment.

### Why Register Your EVVM?

The Registry EVVM Contract serves as the central directory for all EVVM deployments across testnets:

- **Official Recognition**: Get an official EVVM ID for your virtual blockchain
- **Service Discovery**: Allow other dApps and services to find your EVVM instance
- **Network Integration**: Enable integration with EVVM ecosystem tools and services
- **Verification**: Prove your deployment is legitimate and properly configured

### Registration Process

#### Public Registration (Recommended for Most Users)

For standard deployments, use the public registration process. The system automatically assigns you an ID starting from 1000 (IDs 1-999 are reserved for official EVVM deployments):

1. **Call the Registry Contract**: Execute the `registerEvvm()` function on the Registry EVVM Contract
2. **Provide Required Information**:
   - `chainId`: The testnet chain ID where you deployed your EVVM (e.g., 11155111 for Sepolia, 421614 for Arbitrum Sepolia)
   - `evvmAddress`: Your deployed EVVM contract address (found in `broadcast/DeployTestnet.s.sol/[chainId]/run-latest.json`)
3. **Receive Your Unique ID**: The contract automatically assigns you a unique EVVM ID (starting from 1000)

#### Registry Contract Location

- **Proxy Address**: `0x389dC8fb09211bbDA841D59f4a51160dA2377832`
- **Implementation**: `0xC1ef02492F1A75bCdB20766B558f10D643f9d504`
- **Network**: Ethereum Sepolia Testnet
- [View on Etherscan](https://sepolia.etherscan.io/address/0x389dC8fb09211bbDA841D59f4a51160dA2377832#writeProxyContract)

:::warning[**CRITICAL REQUIREMENTS**]

**MANDATORY FOR ALL DEPLOYMENTS**: Regardless of which host blockchain you deployed your EVVM on (Sepolia, Arbitrum Sepolia, or any other testnet), you **MUST** register on the official Registry EVVM Contract located on **Ethereum Sepolia**.

**ETH Sepolia Required**: You need ETH Sepolia tokens to pay for the registration transaction gas fees, even if your EVVM is deployed on a different testnet.

**Get ETH Sepolia tokens from these faucets**:
- [Ethereum Global Faucet](https://ethglobal.com/faucet/)
- [Google Cloud Faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia)
- [Alchemy Sepolia Faucet](https://www.alchemy.com/faucets/ethereum-sepolia)
- [Chainlink Sepolia Faucet](https://faucets.chain.link/sepolia)

:::

#### Using Your EVVM ID 

After registration, you must configure your EVVM ID in your contract to make it fully functional. Call the `setEvvmID(uint256 evvmID)` function on your deployed EVVM contract with the assigned ID.

:::warning[Important ID Management Rules]
- **Reserved IDs**: EVVM IDs 1-999 are reserved for official deployments managed by the superUser. Public registrations automatically receive IDs starting from 1000.
- **Administrator Only**: The `setEvvmID` function can only be called by the administrator address configured during deployment.
- **One-Hour Window**: Once set, the evvmID can only be changed within a 1-hour window after the initial assignment. After this period, the ID becomes permanent.
- **No Reserved ID Registration**: Do not attempt to register with reserved IDs (1-999) as these will be rejected.
:::

#### How to Find Your EVVM Contract Address

After deployment, you need to locate your EVVM contract address in the generated broadcast files:

```bash
# Navigate to your deployment broadcast directory
# Replace [CHAIN_ID] with your actual chain ID (e.g., 11155111 for Sepolia)
cd broadcast/DeployTestnet.s.sol/[CHAIN_ID]/

# Search for your EVVM contract address in the deployment results
cat run-latest.json | grep -A 5 '"contractName": "Evvm"'
```

**What to look for**: Find the `contractAddress` field in the transaction that deployed the "Evvm" contract. This is your main EVVM contract address that you'll need for registration.

### Using Your EVVM ID

Once registered, your EVVM ID can be used by:

- **Frontend Applications**: To connect to your specific EVVM instance
- **Service Integration**: For Name Service, Staking, and Treasury operations
- **dApp Development**: To target your virtual blockchain in smart contracts
- **Network Tools**: For monitoring, analytics, and developer tools

### Verify Your Registration

After completing the registration process, confirm everything worked correctly:

**Check in the Registry Contract:**
- Call `getEvvmIdMetadata(uint256 evvmID)` with your assigned ID to see your registration details
- Verify the returned `chainId` and `evvmAddress` match your deployment

**Check in Your EVVM Contract:**
- Call `getEvvmID()` on your deployed EVVM contract
- It should return your assigned EVVM ID (1000+)

**What Success Looks Like:** Both functions should return consistent information, confirming your EVVM is properly registered and ready to use.

## 9. Next Steps

- **View deployment artifacts** in `broadcast/` directory
- **Check contract verification** on the host blockchain's block explorer (Etherscan/Arbiscan)
- **Register your EVVM** in the Registry EVVM Contract to get an official ID
- **Test your contracts** using the provided test suite: `make test`
- **Monitor gas usage** and optimize if needed: `make seeSizes`
- **Compile contracts** for development: `make compile`

### Ready to Build Services?

With your EVVM virtual blockchain deployed, you can now create smart contract services that leverage the EVVM ecosystem:

- **[How to Make a EVVM Service](./08-HowToMakeAEVVMService.md)** - Complete guide to building smart contracts within your EVVM instance
- Learn about dual signature patterns, fisher incentives, and service integration
- Connect your contracts to existing services like Name Service and Staking
- Implement gasless transactions through the fisher network

## 10. Available Commands

Run `make help` to see all available commands:

```bash
make install          # Install dependencies and compile EVVM contracts
make compile          # Compile EVVM contracts with IR optimization
make anvil           # Run Anvil local host blockchain
make deployLocalTestnet    # Deploy EVVM to local Anvil host blockchain
make deployTestnet NETWORK=<eth|arb>  # Deploy EVVM to public host blockchains
make seeSizes        # View EVVM contract sizes
```

## 11. Explore the EVVM Ecosystem

Once your EVVM virtual blockchain contracts are deployed and registered on your chosen host blockchain, explore the complete EVVM documentation:

### Core System Documentation
- **[Transaction Processing](./03-ProcessOfATransaction.md)** - Learn how transactions flow through the EVVM ecosystem
- **[EVVM Core Contract](./04-EVVM/01-Introduction.md)** - Understand payment processing and token management
- **[Staking System](./05-Staking/01-Introduction.md)** - Token staking, rewards, and fisher registration
- **[Name Service](./06-NameService/01-Introduction.md)** - Username registration and identity resolution

### Advanced Features
- **[Treasury Operations](./07-Treasury/01-Introduction.md)** - Host blockchain to EVVM deposits and withdrawals
- **[Creating EVVM Services](./08-HowToMakeAEVVMService.md)** - Build smart contract services within your EVVM instance
- **[Signature Structures](./09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md)** - EIP-191 signature specifications for all services

### Registry System
- **[Registry EVVM](./11-RegistryEvvm/01-Introduction.md)** - Central registry for EVVM deployments and ID management
- **[Public Registration](./11-RegistryEvvm/02-RegistrationFunctions/01-registerEvvm.md)** - How to register your EVVM instance
- **[Registry Governance](./11-RegistryEvvm/03-GovernanceFunctions/01-SuperUserGovernance/01-proposeSuperUser.md)** - Time-delayed governance system

### Payment Functions
- **[Single Payments](./04-EVVM/04-PaymentFunctions/01-pay.md)** - Basic payment operations
- **[Batch Payments](./04-EVVM/04-PaymentFunctions/02-payMultiple.md)** - Multi-payment and dispersal functions
- **Withdrawal Functions** - Move tokens from EVVM virtual blockchain back to host blockchain

### Key Concepts
- **[Nonce Types](./04-EVVM/02-NonceTypes.md)** - Synchronous vs asynchronous transaction ordering
- **[Staking Functions](./05-Staking/02-StakingContract/01-StakingFunctions/03-publicStaking.md)** - Complete staking operation guide
- **[Name Service Functions](./06-NameService/02-UsernameFunctions/02-registrationUsername.md)** - Username and metadata management

---

You now have a fully deployed and verified EVVM virtual blockchain environment running on your chosen host blockchain. Your deployment is ready for development and testing.

### What You've Accomplished
- **Deployed** a complete virtual blockchain ecosystem
- **Registered** your EVVM with an official ID  
- **Verified** all contracts on the block explorer
- **Configured** a secure development environment

### What's Next?
Explore the ecosystem documentation to build powerful applications on the world's first virtual blockchain architecture. Whether you're building simple services or complex dApps, EVVM provides the infrastructure for gasless, scalable blockchain applications.

---

## Process of a Transaction in EVVM


Understanding how transactions work in the EVVM (Ethereum Virtual Virtual Machine) ecosystem requires examining its unique architecture. EVVM operates as a virtual blockchain where transactions are processed through a fisher-based validation and execution system, creating a gasless experience for users.

![Transaction Process](./img/03-ProcessOfATransaction/img/transaction-process.svg)

The transaction process consists of four key stages:

1. **Transaction Creation & Signing**: Users create and cryptographically sign transactions using the EIP-191 standard
2. **Transaction Broadcasting**: Signed transactions are sent to fishing spots where fishers can discover them
3. **Fisher Capture & Validation**: Fishers monitor fishing spots, capture transactions, and validate their authenticity
4. **Execution & Rewards**: Valid transactions are executed on EVVM, and rewards are distributed to participants

Each stage is explained in detail below.

## Transaction Creation & Signing

In the first stage, users construct and cryptographically sign their transactions using the EIP-191 standard for secure authentication:

### 1. Transaction Payload Construction

Every EVVM transaction follows a standardized format that includes all necessary information:

```solidity
string.concat(<evvmId>,",",<functionName>,",",<param1>,",",<param2>,",",...,",",<paramN>)
```

**Component breakdown:**

- `<evvmId>`: Unique identifier of the target EVVM instance (which virtual blockchain to use)
- `<functionName>`: Specific function to execute within EVVM (e.g., "pay", "registerUsername")
- `<param1> ... <paramN>`: Function parameters in the exact order required by the target function

### 2. EIP-191 Signature Generation

The user signs the transaction using the **EIP-191 standard**, which ensures cryptographic authenticity:

```
signature = sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))
```

### 3. Broadcast to Fishing Spot

Once the transaction is signed, the user broadcasts the complete package to a **fishing spot**:

**What gets broadcasted:**

- The signed transaction (with EIP-191 signature)
- Input data (function parameters)
- Target function (which EVVM function to execute)

**Where transactions can be sent (Fishing Spots):**

- **Public Mempool**: Broadcasting to blockchain mempools where anyone can see and capture transactions (e.g., Ethereum mainnet mempool)
- **Private APIs**: Direct submission to fisher-operated APIs for faster or private processing
- **Communication Channels**: Any communication medium where fishers actively monitor for EVVM transactions

### Gas Parameters for Mempool Transactions

When sending transactions to public mempools, specific gas parameters ensure the transaction waits for fisher capture instead of immediate execution:

**Recommended gas settings:**

$$gas = \left(  \frac{lengthOfText}{2}\right) \times 16 + 21000$$

$$maxFeePerGas = 1~gwei$$

$$maxPriorityFeePerGas = 0.0000001~gwei$$

**Why these low values:** These intentionally low gas parameters prevent miners from executing the transaction immediately, giving fishers time to capture and properly validate it through the EVVM system.

## Fisher Capture & Validation

In this critical stage, fishers act as transaction processors who monitor fishing spots, capture user transactions, and perform comprehensive validation before execution:

### 1. Transaction Capture

Fishers actively monitor various fishing spots to capture transactions:

- **Mempool Monitoring**: Scanning blockchain mempools for EVVM transactions
- **API Listening**: Receiving transactions through private APIs
- **Direct Submission**: Users can submit transactions directly to specific fishers

### 2. Comprehensive Validation

Before execution, fishers perform thorough validation:

#### **EIP-191 Signature Verification**

- Fishers verify each EIP-191 signature to ensure transaction authenticity
- Multiple signatures may be required depending on the function (EVVM + service signatures)
- Invalid signatures result in transaction rejection

#### **Nonce Verification**

Nonces are unique numbers that prevent transaction replay attacks. EVVM supports two types:

- **Synchronous Nonces**: Must follow sequential order (1, 2, 3, 4...) for each user account
- **Asynchronous Nonces**: Can be any unused number, providing more flexibility for applications
- **Service-Specific Nonces**: Individual services like NameService and Staking maintain their own nonce systems

#### **Balance & Authorization Checks**

- Sender must have sufficient token balance for the transaction
- Required permissions and access rights are validated
- Service-specific requirements (e.g., staking status, username ownership) are checked

### 3. Fisher Requirements and Incentives

**Who can be a fisher:**

- Any Ethereum address can become a fisher and process transactions
- Stakers (users who have staked MATE tokens) receive enhanced rewards for their service
- Some advanced services may require fishers to be stakers for execution privileges

**Fisher responsibilities:**

- Cover gas costs for executing transactions on the host blockchain (Ethereum, Arbitrum, etc.)
- These costs are typically offset by the rewards received from successful transaction processing

## Execution & Rewards

In the final stage, validated transactions are executed within the EVVM virtual blockchain, and the reward system distributes incentives to participants:

### 1. EVVM Execution

Once validated, the transaction executes within the EVVM virtual blockchain environment:

- **Function Calls**: The specified EVVM function or service function is invoked with the provided parameters
- **State Updates**: Smart contract states are modified according to the transaction logic (balances, ownership, etc.)
- **Token Transfers**: All required payments, fees, and token movements are processed atomically

### 2. Reward Distribution System

The EVVM ecosystem maintains a sustainable economy by rewarding participants who contribute to transaction processing and network security:

#### **Base Rewards for Stakers**

- **EVVM Contract Rewards**: Stakers receive base MATE token rewards for executing EVVM functions
- **Service Rewards**: Additional rewards from services like NameService, Staking Contract, etc.
- **Enhanced Amounts**: Stakers often receive multiplied reward amounts compared to non-stakers

#### **Priority Fee Distribution**

- **Direct Fisher Payment**: Optional priority fees paid by users are sent directly to the fisher who processes their transaction
- **Market-Based Incentives**: Higher priority fees create competition among fishers, leading to faster processing times
- **User Control**: Users decide whether to pay priority fees based on their urgency requirements

#### **Service-Specific Rewards**

Different services provide varying reward structures:

- **NameService**: Rewards for registration, renewal, and offer processing
- **Staking Contract**: Enhanced rewards for staking-related operations
- **Treasury Operations**: Rewards for deposit and withdrawal processing
- **P2P Swap**: Fees from peer-to-peer trading operations

### 3. Reward Requirements

- **Staker Verification**: Only verified stakers receive enhanced rewards
- **Successful Execution**: Rewards are only distributed upon successful transaction completion
- **Gas Coverage**: Fishers must cover host blockchain gas costs, which are typically offset by rewards

### 4. Multi-Service Coordination

EVVM enables sophisticated transactions that can interact with multiple services simultaneously:

- **Cross-Service Operations**: A single transaction can involve multiple EVVM services (payments, name registration, staking operations)
- **Coordinated Rewards**: The reward system automatically accounts for all services involved in a transaction
- **Atomic Execution**: All operations within a transaction either complete successfully together, or the entire transaction fails and reverts

## Economic Model Summary

This multi-layered reward system creates a self-sustaining ecosystem where:

- **Users** pay for services they need, often without gas fees
- **Fishers** are compensated for processing transactions and covering gas costs
- **Stakers** receive enhanced rewards for their long-term commitment to network security
- **Services** can offer incentives to encourage usage and adoption

The result is a virtual blockchain that operates efficiently while maintaining economic incentives for all participants.

---

## Introduction to the EVVM Core Contract


The EVVM (*E*thereum *V*irtual *V*irtual *M*achine) Core Contract serves as the central payment processing and token management hub for the EVVM ecosystem. This smart contract implements core functionalities including payment systems, staker rewards, cross-chain operations, and administrative tools.

## Core Contract Functions

### Payment Processing
The EVVM Core Contract implements a unified payment system with automatic staker detection:

- **Unified Payment Function (`pay`)**: Single payment function that automatically detects executor staker status
- **Automatic Staker Benefits**: Staker executors receive priority fees and MATE token rewards automatically
- **Nonce Management**: Synchronous and asynchronous processing options via `priorityFlag` parameter
- **Batch Operations**: Multi-payment processing through `payMultiple` and `dispersePay` functions
- **Contract Payments**: Administrative payment functions (`caPay`, `disperseCaPay`)

### Token Management
- **Token Abstractions**: Internal token representations using EIP-191 signatures
- **Balance Management**: Principal balances, reward balances, and cross-chain reserves
- **Transfer Authorization**: Signature-based validation for all token operations

### System Integration
- **Name Service**: Identity resolution for username-based payments
- **Staking Coordination**: Principal token staking and reward distribution
- **Fisher Bridge**: Cross-chain withdrawal and deposit operations

### Administrative Functions
- **Governance System**: Time-delayed administrative changes
- **Security Controls**: Multi-layer validation and replay protection
- **Proxy Architecture**: Upgradeable contract design with implementation changes

## Payment System Architecture

### Unified Payment Processing

#### The `pay` Function
- **Automatic Staker Detection**: Determines executor staker status during execution without requiring separate functions
- **Conditional Rewards**: Staker executors automatically receive MATE token rewards and priority fees
- **Universal Access**: Available to all users - staker benefits are applied automatically based on executor status
- **Simplified Integration**: Single function handles all payment scenarios, reducing complexity for developers

### Nonce Management System

#### Synchronous Processing (`priorityFlag = false`)
- Automatic nonce increment for ordered transactions
- Guaranteed transaction sequence
- Simplified transaction management

#### Asynchronous Processing (`priorityFlag = true`)
- Custom nonce management for transaction ordering
- Multiple transactions can be prepared simultaneously
- Replay protection prevents duplicate transaction execution

## Advanced Payment Features

### Batch Payment Processing

#### Multiple Payments (`payMultiple`)
- Execute multiple individual payments in one transaction
- Partial success handling with detailed result reporting
- Individual validation for each payment

#### Distribution Payments (`dispersePay`)
- Distribute from one sender to multiple recipients
- All-or-nothing execution for consistency
- Support for both direct addresses and Name Service identities

### Contract-to-Address Payments

#### Administrative Payments (`caPay`)
- Smart contracts can execute payments without token approvals
- Direct integration for contract-based operations
- Automated distributions for system-level operations

#### Contract Distribution (`disperseCaPay`)
- Multi-recipient distributions from contracts
- Designed for protocol-level operations
- Parameter validation for token amounts

## Economic Model and Tokenomics

### Principal Token System
The principal token drives the contract's economic model:

- **Era Transitions**: Reward halving when supply thresholds are reached
- **Base Rewards**: Fixed principal token amounts for transaction processing
- **Staker Incentives**: Additional rewards for principal token holders who stake
- **Random Bonuses**: Era transition triggers provide lottery-style rewards (1-5083x)

### Fee Structure
- **Priority Fees**: Optional fees for faster processing
- **Staker Distribution**: Priority fees distributed to transaction processors
- **Cross-Chain Fees**: Fees for Fisher Bridge withdrawal and deposit operations
- **Dynamic Limits**: Withdrawal limits adjustable through governance

## Security Architecture

### Signature Verification
- **EIP-191 Standard**: All transactions require cryptographic signatures
- **Replay Protection**: Nonce-based system prevents duplicate transactions
- **Parameter Integrity**: Signatures cover all critical transaction parameters

### Governance System
- **Time-Delayed Changes**: 30-day delay for proxy implementation changes, 1-day for administrative updates
- **Community Protection**: All changes visible before execution
- **Emergency Controls**: Admin can reject problematic proposals

## Token Architecture

### Token Abstraction System
EVVM implements internal token abstractions instead of traditional ERC-20 contracts:

- **Internal Representations**: Tokens exist as abstractions within EVVM
- **Signature-Based Authorization**: All transfers authorized through EIP-191 signatures
- **Input Validation**: Signatures validated against exact function parameters

### Balance Management
- **Principal Balances**: Direct token holdings managed by core contract
- **Reward Balances**: Accumulated principal token rewards from staking and system participation
- **Cross-Chain Reserves**: Tokens locked for Fisher Bridge operations
- **Pending Withdrawals**: Balances reserved for cross-chain withdrawal processing

## Integration Capabilities

### Name Service Integration
- **Username Payments**: Convert usernames to wallet addresses automatically
- **Identity Resolution**: Support both direct addresses and Name Service identities
- **Validation Layer**: Verification of identity ownership and validity

## Execution Methods

The EVVM supports two execution approaches:

### Direct Execution
- **User-Initiated**: Users interact directly with the EVVM contract
- **Immediate Processing**: Transactions submitted directly to the blockchain
- **Full Control**: Complete autonomy over transaction timing and parameters

### Fisher Execution  
- **Fishing Spot Integration**: Users submit transactions through the fishing spot system
- **Fisher Processing**: Specialized fisher nodes capture and execute transactions
- **Optimized Routing**: Fishers handle transaction optimization and gas management

The EVVM Core Contract provides comprehensive payment processing, token management, and administrative functionality as the central infrastructure component of the EVVM ecosystem.

---

## Nonce Types in EVVM


The EVVM system implements two distinct nonce mechanisms for payment functions: `sync` and `async`. Understanding these nonce types is essential for developers interfacing with the EVVM contract, as they serve different purposes and behave in significantly different ways.

## Sync Nonce

### Definition and Behavior

The sync nonce is a consecutive counter that increments sequentially by one each time a payment transaction is executed. This mechanism closely resembles the standard nonce implementation used in Ethereum transactions.

### Key Characteristics:

- **Sequential Incrementing**: Each successful transaction increases the nonce value by exactly one unit.
- **Transaction Ordering**: Ensures transactions are processed in the order they were issued.
- **Replay Protection**: Prevents transaction replay attacks by requiring each transaction to have a unique nonce value.
- **Predictability**: The next valid nonce is always the current nonce value plus one.

### Use Cases:

- Standard payment operations where transaction order matters
- Operations that require deterministic processing sequence
- Situations where transaction dependencies exist
- Services that rely on deterministic payment processing

![Sync Nonce](./img/02NonceTypes/SyncNonces.svg)

---

## Async Nonce

### Definition and Behavior

The async nonce is a non-consecutive number that is user-generated and transaction-specific. Unlike the sync nonce, async nonces do not follow a predetermined sequence and can be any valid number chosen by the user.

### Key Characteristics:

- **Non-sequential**: Numbers don't need to follow any particular order or sequence.
- **Uniqueness Per Address**: Each async nonce can only be used once per address.
- **User-defined**: Users can generate their own nonce values, providing flexibility in transaction preparation.
- **Parallelism**: Multiple transactions can be prepared independently without knowledge of other pending transactions.

### Use Cases:

- Parallel transaction processing
- Delayed execution scenarios
- Batch transaction preparation without dependency on execution order
- Systems where transaction preparation and submission might happen on different timelines

![Async Nonce](./img/02NonceTypes/AsyncNonces.svg)

---

## pay Function


**Function Type**: `external`  
**Function Signature**: `pay(address,address,string,address,uint256,uint256,uint256,bool,address,bytes)`

The `pay` function executes a payment from one address to a single recipient address or identity. This is EVVM's core single payment function with intelligent staker detection and reward distribution.

**Key features:**
- **Single Payment**: Transfers tokens from one sender to one recipient (address or username)
- **Staker Detection**: Automatically detects if the executor is a staker and distributes rewards accordingly
- **Flexible Nonce Management**: Supports both synchronous and asynchronous nonce patterns
- **Identity Resolution**: Can send payments to usernames which are resolved to addresses via NameService

The function supports both synchronous and asynchronous nonce management through the `priorityFlag` parameter, making it flexible for various execution patterns and use cases. For details on nonce types, see [Nonce Types in EVVM](../02-NonceTypes.md). For signature details, see [Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

### Parameters

| Field         | Type      | Description                                                                                                                                    |
|---------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `from`        | `address` | The address of the payment sender whose funds are being transferred and whose signature/nonce are validated.                                   |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is empty.                                                                                    |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService.                                   |
| `token`       | `address` | The token contract address for the transfer.                                                                                                   |
| `amount`      | `uint256` | The quantity of tokens to transfer from `from` to the recipient.                                                                               |
| `priorityFee` | `uint256` | Additional fee for transaction priority. If the executor is a staker, they receive this fee as a reward.                                       |
| `nonce`       | `uint256` | Transaction nonce value. Usage depends on `priorityFlag`: if `false` (sync), this value is ignored and automatic nonce is used.                |
| `priorityFlag`| `bool`    | Execution type flag: `false` = synchronous nonce (sequential), `true` = asynchronous nonce (custom).                                          |
| `executor`    | `address` | Address authorized to execute this transaction. Use `address(0)` to allow any address to execute.                                              |
| `signature`   | `bytes`   | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this payment.                 |

:::note
The `nonce` parameter usage depends on `priorityFlag`: when `false` (synchronous), the nonce is automatically managed and the provided value is ignored; when `true` (asynchronous), the provided nonce value is used for custom ordering.
:::

### Execution Methods

The function can be executed in multiple ways:

#### Fisher Execution

1. A user signs the payment details and sends the request (parameters + signature) to a fishing spot.
2. A fisher (preferably a staker for rewards) captures the transaction and validates the request.
3. The fisher submits the transaction to the function for processing and receives rewards if they are a staker.

#### Direct Execution

1. The user or any authorized service directly calls the `pay` function.
2. If an `executor` address is specified, only that address can submit the transaction.
3. If `executor` is set to `address(0)`, anyone can execute the transaction with a valid signature.

:::tip[Additional Security Using Executor Address]
When using a service as the executor, we recommend specifying the service's address in the `executor` parameter for additional security.
:::

### Workflow

1. **Signature Verification**: Validates the `signature` against the `from` address and other parameters using `verifyMessageSignedForPay`. For synchronous payments (`priorityFlag = false`), uses `nextSyncUsedNonce[from]` as the nonce; for asynchronous payments (`priorityFlag = true`), uses the provided `nonce` parameter. Reverts with `InvalidSignature` on failure.
2. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. Reverts with `SenderIsNotTheExecutor` if they don't match.
3. **Asynchronous Nonce Verification**: For asynchronous payments only (`priorityFlag = true`), checks if the provided `nonce` has already been used for the `from` address by consulting the `asyncUsedNonce` mapping. Reverts with `InvalidAsyncNonce` if the nonce has already been used.
4. **Resolve Recipient Address**: Determines the final recipient address:
   - If `to_identity` is provided (not empty), resolves the identity to an owner address using `verifyStrictAndGetOwnerOfIdentity` from the NameService contract.
   - If `to_identity` is empty, uses the provided `to_address`.
5. **Balance Update**: Executes the payment transfer using the `_updateBalance` function, sending `amount` of `token` from the `from` address to the resolved recipient address. Reverts with `UpdateBalanceFailed` on transfer failure.
6. **Staker Benefits Distribution**: If the executor (`msg.sender`) is a registered staker:
   - **Priority Fee Transfer**: If `priorityFee > 0`, transfers the `priorityFee` amount of `token` from the `from` address to the `msg.sender` (executor) as a staker reward.
   - **Principal Token Reward**: Grants 1x reward amount in principal tokens to the `msg.sender` (executor) using the `_giveReward` function.
7. **Nonce Management**: Updates nonce tracking based on execution type:
   - **Asynchronous** (`priorityFlag = true`): Marks the specific `nonce` as used (`true`) for the `from` address in the `asyncUsedNonce` mapping.
   - **Synchronous** (`priorityFlag = false`): Increments the synchronous nonce counter for the `from` address to prevent replay attacks.

:::info

For more information about the signature structure, refer to the [Payment Signature Structure section](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

:::

:::tip
**Need to send from one user to multiple recipients?**  
Use [dispersePay](./03-dispersePay.md) to send tokens from a single sender to multiple different addresses or identities in one transaction.

**Need to execute multiple separate payments?**  
Use [payMultiple](./02-payMultiple.md) to process several individual `pay` operations within a single transaction, each with their own sender, recipient, and parameters.
:::

---

## payMultiple Function


**Function Type**: `external`  
**Function Signature**: `payMultiple((address,address,string,address,uint256,uint256,uint256,bool,address,bytes)[])`
**Returns**: `(uint256 successfulTransactions, uint256 failedTransactions, bool[] memory results)`

Processes multiple payments in a single transaction batch with individual success/failure tracking. Each payment instruction can originate from different senders and supports both staker and non-staker payment types, with comprehensive transaction statistics and detailed results for each operation.

## Parameters

| Parameter | Type      | Description                                                   |
| --------- | --------- | ------------------------------------------------------------- |
| `payData` | PayData[] | An array of structs, each defining a single payment operation |

## Return Values

| Return Value             | Type        | Description                                                 |
| ------------------------ | ----------- | ----------------------------------------------------------- |
| `successfulTransactions` | `uint256`   | Number of payments that completed successfully              |
| `failedTransactions`     | `uint256`   | Number of payments that failed                              |
| `results`                | `bool[]`    | Boolean array indicating success/failure for each payment  |

## `PayData` Struct

Defines the complete set of parameters for a single, independent payment within the batch.

```solidity
struct PayData {
    address from;
    address to_address;
    string to_identity;
    address token;
    uint256 amount;
    uint256 priorityFee;
    uint256 nonce;
    bool priorityFlag;
    address executor;
    bytes signature;
}
```

| Field         | Type      | Description                                                                                                                                         |
| ------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `from`        | `address` | The address of the payment sender whose funds are being transferred and whose signature/nonce are validated.                                        |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is empty.                                                                                         |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService.                                        |
| `token`       | `address` | The token address for the transfer.                                                                                                        |
| `amount`      | `uint256` | The quantity of tokens to transfer from `from` to the recipient.                                                                                    |
| `priorityFee` | `uint256` | Fee amount distributed to stakers as reward (only paid if executor is a staker).                                                                    |
| `nonce`       | `uint256` | Nonce value for transaction ordering and replay protection (interpretation depends on `priorityFlag`).                                              |
| `priorityFlag`| `bool`    | Determines nonce type: `true` for asynchronous (custom nonce), `false` for synchronous (sequential nonce).                                          |
| `executor`    | `address` | Address authorized to execute this transaction. Use `address(0)` to allow any address to execute.                                                   |
| `signature`   | `bytes`   | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this payment.                      |

:::info

If you want to know more about the signature structure, refer to the [Payment Signature Structure section](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

:::

## Execution Methods

This function can be executed by any address, with different behavior depending on whether the executor is a staker:

### Fisher Execution

- A fisher collects multiple authorized `PayData` structures (with valid signatures) from various users through fishing spots.
- The fisher aggregates these into the `payData` array and submits the transaction.
- If the fisher is a staker, they receive priority fees and principal token rewards.

### Direct Execution

- A user or service constructs the `payData` array with one or multiple payment requests.
- They directly call `payMultiple` with appropriate authorization.
- Staker executors receive priority fees and principal token rewards based on successful transactions.

:::warning[Signature Validation Behavior]
 If any signature verification fails during processing, the entire transaction will revert and no payments will be executed. All signatures must be valid for the batch to proceed. Other validation failures (insufficient balance, nonce issues, etc.) will mark individual payments as failed but allow the transaction to continue processing the remaining payments.
:::

## Workflow

The function processes each payment in the `payData` array independently, allowing partial success:

1. **Initialize Results Array**: Creates a boolean array to track individual payment results.

2. **For each payment in the array**:

   a. **Signature Verification**: Validates the `signature` against all payment parameters using `verifyMessageSignedForPay`. Uses the appropriate nonce based on `priorityFlag`. Reverts with `InvalidSignature` if validation fails.

   b. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. If they don't match, marks the payment as failed and continues to the next payment.

   c. **Nonce Management**: Handles nonce verification and updates based on `priorityFlag`:
   - **Async (priorityFlag = true)**: Checks if the custom nonce hasn't been used, then marks it as used. If already used, marks payment as failed.
   - **Sync (priorityFlag = false)**: Verifies the nonce matches the expected sequential nonce, then increments it. If mismatch, marks payment as failed.

   d. **Recipient Resolution**: Determines the final recipient address:
   - If `to_identity` is provided, resolves it using `verifyStrictAndGetOwnerOfIdentity` from the NameService.
   - If `to_identity` is empty, uses `to_address`.

   e. **Balance Verification**: Checks if the sender has sufficient balance for both `amount` and `priorityFee`. If insufficient, marks payment as failed.

   f. **Payment Execution**: Executes the main transfer using `_updateBalance`. If the transfer fails, marks payment as failed.

   g. **Priority Fee Distribution**: If the payment succeeded and `priorityFee > 0` and the executor is a staker (`isAddressStaker(msg.sender)`), transfers the priority fee to the executor. If this fails, marks payment as failed.

   h. **Result Tracking**: Updates counters and result array based on payment success/failure.

3. **Staker Rewards**: After processing all payments, if the executor is a staker, grants principal token rewards equal to the number of successful transactions using `_giveMateReward`.

4. **Return Values**: Returns the count of successful transactions, failed transactions, and the detailed results array.

:::note
Each payment is processed independently - failure of one payment (except for signature validation) doesn't affect others in the batch.
:::

![payMultiple Happy Path](./img/02payMultiple/payMultiple_HappyPath.svg)
![payMultiple Failed Path](./img/02payMultiple/payMultiple_FailedPath.svg)

---

## dispersePay Function


**Function Type**: `external`  
**Function Signature**: `dispersePay(address,(uint256,address,string)[],address,uint256,uint256,uint256,bool,address,bytes)`

Distributes tokens from a single sender to multiple recipients with efficient single-source multi-recipient payment distribution. This function uses a single signature to authorize distribution to multiple recipients, supports both direct addresses and identity-based recipients, and includes integrated priority fee and staker reward systems.

The signature structure for these payments is detailed in the [Disperse Payment Signature Structure](../../09-SignatureStructures/01-EVVM/02-DispersePaySignatureStructure.md) section.

## Parameters

| Parameter      | Type                    | Description                                                                                                                       |
| -------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `from`         | `address`               | The address of the payment sender whose funds will be distributed.                                                                |
| `toData`       | `DispersePayMetadata[]` | An array detailing each recipient's address/identity and the amount they should receive. See struct below.                        |
| `token`        | `address`               | The token address to be distributed.                                                                                              |
| `amount`       | `uint256`               | The total amount of tokens to distribute across all recipients. Must equal the sum of individual amounts in `toData`.             |
| `priorityFee`  | `uint256`               | Fee amount for the transaction executor (distributed to stakers as reward).                                                       |
| `nonce`        | `uint256`               | Transaction nonce for replay protection. Usage depends on the `priorityFlag`.                                                     |
| `priorityFlag` | `bool`                  | Determines nonce type: `true` for asynchronous (custom nonce), `false` for synchronous (sequential nonce).                        |
| `executor`     | `address`               | Address authorized to execute this transaction. Use `address(0)` to allow any address to execute.                                 |
| `signature`    | `bytes`                 | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing the distribution. |

:::info

If you want to know more about the signature structure, refer to the [Disperse Payment Signature Structure section](../../09-SignatureStructures/01-EVVM/02-DispersePaySignatureStructure.md).

:::

## `DispersePayMetadata` Struct

Defines the payment details for a single recipient within the `toData` array.

```solidity
struct DispersePayMetadata {
   uint256 amount;
   address to_address;
   string to_identity;
}
```

| Field         | Type      | Description                                                                                                  |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------ |
| `amount`      | `uint256` | The amount of tokens to be sent to this recipient.                                                           |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is `address(0)`.                                           |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService. |

:::note
If `to_identity` is an empty string (`""`), the `to_address` field will be used as the recipient's destination address. Otherwise, the contract attempts to resolve the `to_identity` to its owner address using the NameService.
:::

## Execution Methods

This function can be executed by any address, with different behavior depending on whether the executor is a staker:

### Fisher Execution

- A fisher collects multiple disperse payment requests with valid signatures from users through fishing spots.
- The fisher submits the transaction and receives priority fees and principal token rewards if they are a staker.

### Direct Execution

- A user or service directly calls `dispersePay` with appropriate authorization.
- Staker executors receive priority fees and principal token rewards for processing.

:::tip
When using a service as the executor, we recommend specifying the service's address in the `executor` parameter for additional security.
:::

## Workflow {#disperse-pay-workflow}

1. **Signature Verification**: Validates the `signature` against the reconstructed message hash using `verifyMessageSignedForDispersePay`. The message includes a hash of the `toData` array for integrity. Uses the appropriate nonce based on `priorityFlag`. Reverts with `InvalidSignature` if validation fails.

2. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. Reverts with `SenderIsNotTheExecutor` if they don't match.

3. **Async Nonce Verification**: If `priorityFlag` is `true` (asynchronous), checks if the custom nonce hasn't been used by consulting the `asyncUsedNonce` mapping. Reverts with `InvalidAsyncNonce` if already used.

4. **Balance Verification**: Checks that the `from` address has sufficient balance to cover both `amount` and `priorityFee`. Reverts with `InsufficientBalance` if insufficient.

5. **Balance Deduction**: Subtracts the total `amount` and `priorityFee` from the sender's balance upfront.

6. **Distribution Loop**: Iterates through each recipient in the `toData` array:

   - **Amount Tracking**: Maintains a running total (`accumulatedAmount`) of distributed amounts
   - **Recipient Resolution**:
     - If `to_identity` is provided, verifies the identity exists using `strictVerifyIfIdentityExist` and resolves it to an owner address using `getOwnerOfIdentity`
     - If `to_identity` is empty, uses `to_address`
   - **Token Distribution**: Adds the specified amount to the recipient's balance

7. **Amount Validation**: Verifies that the total distributed amount (`accumulatedAmount`) exactly matches the specified `amount` parameter. Reverts with `InvalidAmount` if mismatch.

8. **Staker Benefits**:

   - If the executor is a staker (`isAddressStaker(msg.sender)`):
     - Grants 1 principal token reward using `_giveMateReward`
     - Distributes the `priorityFee` to the executor
   - If the executor is not a staker:
     - Returns the `priorityFee` to the original sender

9. **Nonce Update**: Marks the nonce as used to prevent replay attacks:
   - **Async (priorityFlag = true)**: Marks the custom nonce as used in `asyncUsedNonce`
   - **Sync (priorityFlag = false)**: Increments the sequential nonce in `nextSyncUsedNonce`

![DispersePay Happy Path](./img/03dispersePay/dispersePay_HappyPath.svg)
![DispersePay Failed Path](./img/03dispersePay/dispersePay_FailedPath.svg)

---

## caPay Function


**Function Type**: `external`  
**Function Signature**: `caPay(address,address,uint256)`  

Contract-to-address payment function designed for authorized smart contracts to distribute tokens without signature verification. This function allows registered smart contracts to efficiently transfer tokens using direct balance manipulation, primarily for automated distributions and system payouts.

## Key Features

- **Contract-Only Execution:** Only smart contracts (non-EOA addresses) can call this function, verified via bytecode presence
- **No Signature Required:** Bypasses signature verification as authorization is implicit through contract execution
- **No Nonce Management:** Does not use EVVM nonce systems since contracts rely on blockchain transaction nonces
- **Automated Distributions:** Designed for staking rewards, NameService fees, and other automated system payouts
- **Staker Rewards:** Contracts that are registered stakers receive principal token rewards for successful transfers

## Parameters

| Field    | Type      | Description                                                       |
| -------- | --------- | ----------------------------------------------------------------- |
| `to`     | `address` | The recipient's address for the token transfer.                   |
| `token`  | `address` | The token address to transfer.                                    |
| `amount` | `uint256` | The quantity of tokens to transfer from the calling contract.     |

## Workflow

1. **Contract Verification**: Validates that the caller (`msg.sender`) is a smart contract by checking its bytecode size using `extcodesize`. Reverts with `NotAnCA` if the caller is an Externally Owned Account (EOA).

2. **Balance Update**: Executes the token transfer using the `_updateBalance` function:
   - Verifies the calling contract has sufficient token balance
   - Debits the `amount` from the calling contract's balance
   - Credits the `amount` to the recipient's balance
   - Reverts with `UpdateBalanceFailed` if the transfer fails

3. **Staker Reward**: If the calling contract is a registered staker (`isAddressStaker(msg.sender)`), grants 1 principal token reward using `_giveMateReward`.

![caPay](./img/04caPay/caPay.svg)

---

## disperseCaPay Function


**Function Type**: `external`  
**Function Signature**: `disperseCaPay((uint256,address)[],address,uint256)`

Contract-to-multiple-addresses payment distribution function that allows authorized smart contracts to distribute tokens to multiple recipients efficiently in a single transaction. This function is optimized for contract-based automated distributions with minimal overhead.

## Key Features

- **Contract-Only Execution:** Only smart contracts can call this function, verified via bytecode presence
- **Direct Address Distribution:** Optimized for direct address transfers without identity resolution
- **Batch Efficiency:** Single transaction distributes to multiple recipients with amount validation
- **No Authorization Overhead:** No signature verification or nonce management required
- **Staker Rewards:** Contracts that are registered stakers receive principal token rewards

## Parameters

| Parameter | Type                      | Description                                                                                                           |
| --------- | ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `toData`  | `DisperseCaPayMetadata[]` | An array detailing each recipient's address and the amount they should receive. See struct below.                     |
| `token`   | `address`                 | The token address to distribute.                                                                                      |
| `amount`  | `uint256`                 | The total amount of tokens to distribute across all recipients. Must equal the sum of individual amounts in `toData`. |

## `DisperseCaPayMetadata` Struct

Defines the payment details for a single recipient within the `toData` array.

```solidity
struct DisperseCaPayMetadata {
   uint256 amount;
   address toAddress;
}
```

| Field       | Type      | Description                                     |
| ----------- | --------- | ----------------------------------------------- |
| `amount`    | `uint256` | The amount of tokens to send to this recipient. |
| `toAddress` | `address` | The recipient's direct wallet address.          |

## Workflow

1. **Contract Verification**: Validates that the caller (`msg.sender`) is a smart contract by checking its bytecode size using `extcodesize`. Reverts with `NotAnCA` if the caller is an Externally Owned Account (EOA).

2. **Balance Verification**: Checks that the calling contract has sufficient token balance to cover the total distribution amount. Reverts with `InsufficientBalance` if insufficient.

3. **Balance Deduction**: Subtracts the total `amount` from the calling contract's token balance upfront.

4. **Distribution Loop**: Iterates through each recipient in the `toData` array:

   - **Amount Tracking**: Maintains a running total (`accumulatedAmount`) of distributed amounts
   - **Overflow Check**: Validates that accumulated amount doesn't exceed the total amount during iteration
   - **Token Distribution**: Adds the specified amount directly to each recipient's balance

5. **Final Amount Validation**: Verifies that the total distributed amount exactly matches the specified `amount` parameter. Reverts with `InvalidAmount` if there's a mismatch.

6. **Staker Reward**: If the calling contract is a registered staker (`isAddressStaker(msg.sender)`), grants 1 principal token reward using `_giveMateReward`.

![disperseCaPay](./img/05disperseCaPay/disperseCaPay.svg)

---

## Introduction


## Important Notice About Implementation Location

The single payment functions documented in this section are currently implemented in `src/contracts/evvm/EvvmLegacy.sol` instead of the main `Evvm.sol` contract.

:::info Legacy Implementation
This contract includes multiple pay functions, which, although gas efficient, can be complex in code. If you prefer your EVVM to have multiple pay functions, please change the name of the document from `EvvmLegacy.sol` to `Evvm.sol` and verify that the services have something similar to this instead of pay.
:::

## Background

The EVVM ecosystem provides two approaches for implementing payment functionality:

1. **Simplified Approach (Current Default)**: Uses a single, unified `pay` function that handles all payment scenarios through internal logic branching.

2. **Legacy Approach (Multiple Functions)**: Uses separate, specialized functions for different payment types (`payNoStaker_sync`, `payNoStaker_async`, `payStaker_sync`, `payStaker_async`).

## When to Use Legacy Functions

Consider using the legacy implementation if:

- **Gas Optimization is Critical**: The specialized functions can be more gas-efficient for specific use cases since they avoid conditional logic.
- **Clear Function Separation**: Your application benefits from having distinct function signatures for different payment types.
- **Integration Requirements**: Your existing services are designed to work with multiple specific payment functions.

## Migration Process

To use these legacy functions in your EVVM deployment:

1. **Rename the File**: Change `EvvmLegacy.sol` to `Evvm.sol` in your contract structure.
2. **Update Service Integration**: Ensure your services are configured to use the specific function names instead of the generic `pay` function.
3. **Test Thoroughly**: Verify that all payment scenarios work correctly with the specialized functions.
4. **Update Documentation**: Make sure your service documentation reflects the use of multiple payment functions.

## Function Overview

The legacy implementation provides four main payment functions:

- **`payNoStaker_sync`**: Synchronous payments for non-stakers
- **`payNoStaker_async`**: Asynchronous payments for non-stakers  
- **`payStaker_sync`**: Synchronous payments for stakers with rewards
- **`payStaker_async`**: Asynchronous payments for stakers with rewards

Each function is optimized for its specific use case, providing potentially better gas efficiency at the cost of increased code complexity.

---

The following documentation covers each of these specialized payment functions in detail.

---

## payNoStaker Functions


The `payNoStaker` functions enable single payments where the transaction executor (`msg.sender`) is **not** required to hold staking tokens. This provides a more accessible execution model compared to staking-required payment functions.

A key characteristic of these functions is that the `priorityFee` parameter is not utilized in non-staker payments, simplifying the transaction structure for users who don't participate in the staking mechanism.

These functions are available in two variants: synchronous (`_sync`) for sequential transaction ordering and asynchronous (`_async`) for flexible transaction ordering. For details on nonce types, see [Nonce Types in EVVM](../../02-NonceTypes.md). For signature details, see [Payment Signature Structure](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

## payNoStaker_sync

**Function Type**: `external`  
**Function Signature**: `payNoStaker_sync(address,address,string,address,uint256,uint256,address,bytes)`  
**Function Selector**: `0x4faa1fa2`

Executes a single, synchronous payment without requiring the executor (`msg.sender`) to hold staking tokens. It uses an implicitly managed synchronous nonce. The executor **does not** receive the `priorityFee` or rewards.

### Parameters

| Field         | Type      | Description                                                                                                                         |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `from`        | `address` | The address of the payment sender whose funds are being transferred and whose signature/nonce are validated.                        |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is empty.                                                                         |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService.                        |
| `token`       | `address` | The token address for the transfer.                                                                                                 |
| `amount`      | `uint256` | The quantity of tokens to transfer from `from` to the recipient.                                                                    |
| `priorityFee` | `uint256` | Additional fee for transaction priority (not used in non-staker payments).                                                          |
| `executor`    | `address` | Address authorized to execute this transaction. Use `address(0)` to allow any address to execute (sender-only restriction removed). |
| `signature`   | `bytes`   | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this payment.       |

:::note
There is no explicit `nonce` parameter; the synchronous nonce is automatically managed and validated as part of the signature verification process.
:::

### Execution Methods

The function can be executed in two ways:

#### Fisher Execution

1.  A user signs the payment details and sends the request (parameters + signature) to a fishing spot.
2.  The fisher (who must hold staking) captures the transaction and validates the request.
3.  The fisher submits the transaction to the function for processing.

#### Direct Execution

1. The user or any authorized service directly calls the `payNoStaker_sync` function.
2. If an `executor` address is specified, only that address can submit the transaction.
3. If `executor` is set to `address(0)`, anyone can execute the transaction with a valid signature.

:::tip
When using a service as the executor, we recommend specifying the service's address in the `executor` parameter for additional security.
:::

### Workflow

1. **Signature Verification**: Validates the `signature` against the `from` address and other parameters using `verifyMessageSignedForPay`. This includes checking that the synchronous nonce matches the expected next nonce for the `from` address. Reverts with `InvalidSignature` on failure.
2. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. Reverts with `SenderIsNotTheExecutor` if they don't match.
3. **Resolve Recipient Address**: Determines the final recipient address:
   - If `to_identity` is provided (not empty), resolves the identity to an owner address using `verifyStrictAndGetOwnerOfIdentity` from the NameService contract.
   - If `to_identity` is empty, uses the provided `to_address`.
4. **Balance Update**: Executes the payment transfer using the `_updateBalance` function, sending `amount` of `token` from the `from` address to the resolved recipient address. Reverts with `UpdateBalanceFailed` on transfer failure.
5. **Nonce Increment**: Increments the synchronous nonce counter for the `from` address to prevent replay attacks.

:::info

For more information about the signature structure, refer to the [Payment Signature Structure section](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

:::

![payNoStaker_sync generic transaction flow](./img/01payNoStaker/payNoStaker_sync.svg)

---

## payNoStaker_async

**Function Type**: `external`  
**Function Signature**: `payNoStaker_async(address,address,string,address,uint256,uint256,uint256,address,bytes)`  
**Function Selector**: `0xf4e1895b`

Executes a single, asynchronous payment without requiring the executor (`msg.sender`) to hold staking tokens. Asynchronous execution uses an explicit `nonce` parameter, allowing for out-of-order processing relative to other async transactions from the same sender. The executor **does not** receive the `priorityFee` or rewards.

### Parameters

| Field         | Type      | Description                                                                                                                         |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `from`        | `address` | The address of the payment sender whose funds are being transferred and whose signature/nonce are validated.                        |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is empty.                                                                         |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService.                        |
| `token`       | `address` | The token address for the transfer.                                                                                                 |
| `amount`      | `uint256` | The quantity of tokens to transfer from `from` to the recipient.                                                                    |
| `priorityFee` | `uint256` | Additional fee for transaction priority (not used in non-staker payments).                                                          |
| `nonce`       | `uint256` | Custom nonce value for transaction ordering and replay protection.                                                                  |
| `executor`    | `address` | Address authorized to execute this transaction. Use `address(0)` to allow any address to execute (sender-only restriction removed). |
| `signature`   | `bytes`   | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this payment.       |

### Execution Methods

This function can be executed by any address since it doesn't require the executor to hold staking tokens:

#### Direct Execution

1. The user or any authorized service directly calls the `payNoStaker_async` function.
2. If an `executor` address is specified, only that address can submit the transaction.
3. If `executor` is set to `address(0)`, anyone can execute the transaction with a valid signature.

:::tip
When using a service as the executor, we recommend specifying the service's address in the `executor` parameter for additional security.
:::

### Workflow

1. **Signature Verification**: Validates the `signature` against the `from` address and other parameters using `verifyMessageSignedForPay`. Reverts with `InvalidSignature` on failure.
2. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. Reverts with `SenderIsNotTheExecutor` if they don't match.
3. **Async Nonce Verification**: Checks if the provided `nonce` has already been used for the `from` address by consulting the `asyncUsedNonce` mapping. Reverts with `InvalidAsyncNonce` if the nonce has already been used.
4. **Resolve Recipient Address**: Determines the final recipient address:
   - If `to_identity` is provided (not empty), resolves the identity to an owner address using `verifyStrictAndGetOwnerOfIdentity` from the NameService contract.
   - If `to_identity` is empty, uses the provided `to_address`.
5. **Balance Update**: Executes the payment transfer using the `_updateBalance` function, sending `amount` of `token` from the `from` address to the resolved recipient address. Reverts with `UpdateBalanceFailed` on transfer failure.
6. **Nonce Marking**: Marks the specific asynchronous `nonce` as used (`true`) for the `from` address in the `asyncUsedNonce` mapping to prevent replay attacks.

:::info

If you want to know more about the signature structure, refer to the [Payment Signature Structure section](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

:::

![payNoStaker_async generic transaction flow](./img/01payNoStaker/payNoStaker_async.svg)

---

---

## payStaker Functions


The `payStaker` functions process single payments where the transaction executor (`msg.sender`) must be a token staker. These functions provide enhanced benefits including priority fee rewards and principal token rewards for stakers who process transactions.

Staker benefits include receiving priority fees as rewards for transaction processing and earning principal token rewards upon successful execution. These functions support both direct addresses and identity-based payments through the NameService.

For detailed information on nonce types, please refer to the [Nonce Types in EVVM](../../02-NonceTypes.md) section. The signature structure for these payments is detailed in the [Payment Signature Structure](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md) section.

## payStaker_sync

**Function Type**: `external`  
**Function Signature**: `payStaker_sync(address,address,string,address,uint256,uint256,address,bytes)`  
**Function Selector**: `0x4faa1fa2`

Processes synchronous payments for principal token stakers with enhanced benefits and rewards. This function provides staker benefits including priority fee rewards and principal token rewards, while using automatic nonce increment for sequential transaction ordering.

### Parameters

| Field         | Type      | Description                                                                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `from`        | `address` | The address of the payment sender whose funds are being transferred and whose signature/nonce are validated.                  |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is empty.                                                                   |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService.                  |
| `token`       | `address` | The token address for the transfer.                                                                                           |
| `amount`      | `uint256` | The quantity of tokens to transfer from `from` to the recipient.                                                              |
| `priorityFee` | `uint256` | Fee amount distributed to stakers as reward for processing the transaction.                                                   |
| `executor`    | `address` | Address authorized to execute this transaction (must be a staker). Use `address(0)` to allow any staker to execute.           |
| `signature`   | `bytes`   | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this payment. |

:::note
There is no explicit `nonce` parameter; the synchronous nonce is automatically managed and validated as part of the signature verification process.
:::

### Execution Methods

This function can only be executed by principal token stakers:

#### Fisher Execution

1. A user signs the payment details and sends the request (parameters + signature) to a fishing spot.
2. The fisher (who must be a registered staker) captures the transaction and validates the request.
3. The fisher submits the transaction to the function for processing and receives rewards.

#### Direct Execution

When the executor is a staker user or service:

1. The staker user/service directly calls the `payStaker_sync` function.
2. The executor receives priority fee rewards and principal token rewards for processing.

:::tip
When using a service as the executor, we recommend specifying the service's address in the `executor` parameter for additional security.
:::

### Workflow

1. **Signature Verification**: Validates the `signature` against the `from` address and other parameters using `verifyMessageSignedForPay`. This includes checking that the synchronous nonce matches the expected next nonce for the `from` address. Reverts with `InvalidSignature` on failure.
2. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. Reverts with `SenderIsNotTheExecutor` if they don't match.
3. **Staker Verification**: Verifies that the `msg.sender` (executor) is a registered staker using the `isAddressStaker` function. Reverts with `NotAnStaker` if `msg.sender` is not a staker.
4. **Resolve Recipient Address**: Determines the final recipient address:
   - If `to_identity` is provided (not empty), resolves the identity to an owner address using `verifyStrictAndGetOwnerOfIdentity` from the NameService contract.
   - If `to_identity` is empty, uses the provided `to_address`.
5. **Balance Update**: Executes the main payment transfer using the `_updateBalance` function, sending `amount` of `token` from the `from` address to the resolved recipient address. Reverts with `UpdateBalanceFailed` on transfer failure.
6. **Priority Fee Distribution**: If `priorityFee > 0`, transfers the `priorityFee` amount of `token` from the `from` address to the `msg.sender` (executor) as a staker reward. Reverts with `UpdateBalanceFailed` on transfer failure.
7. **Principal Token Reward**: Grants 1 principal token reward to the `msg.sender` (executor) using the `_giveMateReward` function.
8. **Nonce Increment**: Increments the synchronous nonce counter for the `from` address to prevent replay attacks.

:::info

For more information about the signature structure, refer to the [Payment Signature Structure section](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

:::

![payStaker_sync generic transaction flow](./img/02payStaker/payStaker_sync.svg)

---

## payStaker_async

**Function Type**: `external`  
**Function Signature**: `payStaker_async(address,address,string,address,uint256,uint256,uint256,address,bytes)`  
**Function Selector**: `0xf4e1895b`

Processes asynchronous payments for principal token stakers with enhanced benefits and custom nonce management. This function provides staker benefits including priority fee rewards and principal token rewards, while using custom nonces for flexible transaction ordering and replay protection.

### Parameters

| Field         | Type      | Description                                                                                                                   |
| ------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `from`        | `address` | The address of the payment sender whose funds are being transferred and whose signature/nonce are validated.                  |
| `to_address`  | `address` | Direct recipient address. Used when `to_identity` is empty.                                                                   |
| `to_identity` | `string`  | Username/identity of the recipient. If provided, the contract resolves it to an address via the NameService.                  |
| `token`       | `address` | The token contract address for the transfer.                                                                                  |
| `amount`      | `uint256` | The quantity of tokens to transfer from `from` to the recipient.                                                              |
| `priorityFee` | `uint256` | Fee amount distributed to stakers as reward for processing the transaction.                                                   |
| `nonce`       | `uint256` | Custom nonce value for transaction ordering and replay protection.                                                            |
| `executor`    | `address` | Address authorized to execute this transaction (must be a staker). Use `address(0)` to allow any staker to execute.           |
| `signature`   | `bytes`   | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this payment. |

### Execution Methods

This function can only be executed by principal token stakers:

#### Fisher Execution

1. A user signs the payment details and sends the request (parameters + signature) to a fishing spot.
2. The fisher (who must be a registered staker) captures the transaction and validates the request.
3. The fisher submits the transaction to the function for processing and receives rewards.

#### Direct Execution

When the executor is a staker user or service:

1. The staker user/service directly calls the `payStaker_async` function.
2. The executor receives priority fee rewards and principal token rewards for processing.

:::tip
When using a service as the executor, we recommend specifying the service's address in the `executor` parameter for additional security.
:::

### Workflow

1. **Signature Verification**: Validates the `signature` against the `from` address and other parameters using `verifyMessageSignedForPay`. Reverts with `InvalidSignature` on failure.
2. **Executor Validation**: If `executor` is not `address(0)`, checks that `msg.sender` matches the `executor` address. Reverts with `SenderIsNotTheExecutor` if they don't match.
3. **Staker Verification**: Verifies that the `msg.sender` (executor) is a registered staker using the `isAddressStaker` function. Reverts with `NotAnStaker` if `msg.sender` is not a staker.
4. **Async Nonce Verification**: Checks if the provided `nonce` has already been used for the `from` address by consulting the `asyncUsedNonce` mapping. Reverts with `InvalidAsyncNonce` if the nonce has already been used.
5. **Resolve Recipient Address**: Determines the final recipient address:
   - If `to_identity` is provided (not empty), resolves the identity to an owner address using `verifyStrictAndGetOwnerOfIdentity` from the NameService contract.
   - If `to_identity` is empty, uses the provided `to_address`.
6. **Balance Update**: Executes the main payment transfer using the `_updateBalance` function, sending `amount` of `token` from the `from` address to the resolved recipient address. Reverts with `UpdateBalanceFailed` on transfer failure.
7. **Priority Fee Distribution**: If `priorityFee > 0`, transfers the `priorityFee` amount of `token` from the `from` address to the `msg.sender` (executor) as a staker reward. Reverts with `UpdateBalanceFailed` on transfer failure.
8. **Principal token Reward**: Grants 1 principal token reward to the `msg.sender` (executor) using the `_giveMateReward` function. Reverts with `UpdateBalanceFailed` on failure.
9. **Nonce Marking**: Marks the specific asynchronous `nonce` as used (`true`) for the `from` address in the `asyncUsedNonce` mapping to prevent replay attacks.

:::info

For more information about the signature structure, refer to the [Payment Signature Structure section](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).

:::

![payStaker_async generic transaction flow](./img/02payStaker/payStaker_async.svg)

---

---

## Getter Functions


This section details all available getter functions in the EVVM contract, providing comprehensive information about the contract's state, configuration, and user data.

## System Configuration Functions

### getEvvmMetadata

**Function Type**: `view`  
**Function Signature**: `getEvvmMetadata()`

Returns the complete EVVM metadata configuration containing system-wide parameters and economic settings.

#### Return Value

Returns an `EvvmMetadata` struct containing:

| Field                     | Type      | Description                                           |
| ------------------------- | --------- | ----------------------------------------------------- |
| `principalTokenAddress`   | `address` | Address of the principal token (MATE token)          |
| `reward`                  | `uint256` | Current reward amount per transaction                 |
| `totalSupply`             | `uint256` | Total supply tracking for era transitions            |
| `eraTokens`               | `uint256` | Era tokens threshold for reward transitions          |

---

### getNameServiceAddress

**Function Type**: `view`  
**Function Signature**: `getNameServiceAddress()`

Gets the current NameService contract address used for identity resolution in payments.

#### Return Value

| Type      | Description                                    |
| --------- | ---------------------------------------------- |
| `address` | Address of the integrated NameService contract |

---

### getStakingContractAddress

**Function Type**: `view`  
**Function Signature**: `getStakingContractAddress()`

Gets the authorized staking contract address that can modify staker status and receive rewards.

#### Return Value

| Type      | Description                                   |
| --------- | --------------------------------------------- |
| `address` | Address of the integrated staking contract    |

---

## Nonce Management Functions

### getNextCurrentSyncNonce

**Function Type**: `view`  
**Function Signature**: `getNextCurrentSyncNonce(address)`

Returns the expected nonce for the next synchronous payment transaction for a specific user.

#### Input Parameters

| Parameter | Type      | Description                           |
| --------- | --------- | ------------------------------------- |
| `user`    | `address` | Address to check sync nonce for       |

#### Return Value

| Type      | Description                  |
| --------- | ---------------------------- |
| `uint256` | Next synchronous nonce value |

---

### getIfUsedAsyncNonce

**Function Type**: `view`  
**Function Signature**: `getIfUsedAsyncNonce(address,uint256)`

Checks if a specific asynchronous nonce has been used by a user to prevent replay attacks.

#### Input Parameters

| Parameter | Type      | Description                               |
| --------- | --------- | ----------------------------------------- |
| `user`    | `address` | Address to check nonce usage for          |
| `nonce`   | `uint256` | Specific nonce value to verify            |

#### Return Value

| Type   | Description                                          |
| ------ | ---------------------------------------------------- |
| `bool` | True if the nonce has been used, false if available |

---

### getNextFisherDepositNonce

**Function Type**: `view`  
**Function Signature**: `getNextFisherDepositNonce(address)`

Returns the expected nonce for the next Fisher Bridge cross-chain deposit.

#### Input Parameters

| Parameter | Type      | Description                               |
| --------- | --------- | ----------------------------------------- |
| `user`    | `address` | Address to check deposit nonce for        |

#### Return Value

| Type      | Description                         |
| --------- | ----------------------------------- |
| `uint256` | Next Fisher Bridge deposit nonce    |

---

## Balance and Staking Functions

### getBalance

**Function Type**: `view`  
**Function Signature**: `getBalance(address,address)`

Gets the balance of a specific token for a user stored in the EVVM system.

#### Input Parameters

| Parameter | Type      | Description                          |
| --------- | --------- | ------------------------------------ |
| `user`    | `address` | Address to check balance for         |
| `token`   | `address` | Token contract address to check      |

#### Return Value

| Type   | Description                       |
| ------ | --------------------------------- |
| `uint` | Current token balance for the user |

---

### isAddressStaker

**Function Type**: `view`  
**Function Signature**: `isAddressStaker(address)`

Checks if an address is registered as a staker with transaction processing privileges and reward eligibility.

#### Input Parameters

| Parameter | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| `user`    | `address` | Address to check staker status for       |

#### Return Value

| Type   | Description                                        |
| ------ | -------------------------------------------------- |
| `bool` | True if the address is a registered staker        |

---

## Economic System Functions

### getEraPrincipalToken

**Function Type**: `view`  
**Function Signature**: `getEraPrincipalToken()`

Gets the current era token threshold that triggers the next reward halving in the deflationary tokenomics system.

#### Return Value

| Type      | Description                      |
| --------- | -------------------------------- |
| `uint256` | Current era tokens threshold     |

---

### getRewardAmount

**Function Type**: `view`  
**Function Signature**: `getRewardAmount()`

Gets the current MATE token reward amount distributed to stakers for transaction processing.

#### Return Value

| Type      | Description                                |
| --------- | ------------------------------------------ |
| `uint256` | Current reward amount in MATE tokens       |

---

### getPrincipalTokenTotalSupply

**Function Type**: `view`  
**Function Signature**: `getPrincipalTokenTotalSupply()`

Gets the total supply of the principal token (MATE) used for era transition calculations.

#### Return Value

| Type      | Description                    |
| --------- | ------------------------------ |
| `uint256` | Total supply of MATE tokens    |

---

## Token Management Functions

### getWhitelistTokenToBeAdded

**Function Type**: `view`  
**Function Signature**: `getWhitelistTokenToBeAdded()`

Gets the address of the token that is pending whitelist approval after the time delay.

#### Return Value

| Type      | Description                                               |
| --------- | --------------------------------------------------------- |
| `address` | Address of the token prepared for whitelisting (zero if none) |

---

### getWhitelistTokenToBeAddedDateToSet

**Function Type**: `view`  
**Function Signature**: `getWhitelistTokenToBeAddedDateToSet()`

Gets the acceptance deadline for pending token whitelist proposals.

#### Return Value

| Type      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| `uint256` | Timestamp when pending token can be whitelisted (0 if no pending proposal) |

---

## Proxy and Governance Functions

### getCurrentImplementation

**Function Type**: `view`  
**Function Signature**: `getCurrentImplementation()`

Gets the current active implementation contract address used by the proxy for delegatecalls.

#### Return Value

| Type      | Description                                      |
| --------- | ------------------------------------------------ |
| `address` | Address of the current implementation contract   |

---

### getProposalImplementation

**Function Type**: `view`  
**Function Signature**: `getProposalImplementation()`

Gets the proposed implementation contract address pending approval for proxy upgrade.

#### Return Value

| Type      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `address` | Address of the proposed implementation contract (zero if none) |

---

### getTimeToAcceptImplementation

**Function Type**: `view`  
**Function Signature**: `getTimeToAcceptImplementation()`

Gets the acceptance deadline for the pending implementation upgrade.

#### Return Value

| Type      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `uint256` | Timestamp when implementation upgrade can be executed (0 if no pending proposal) |

---

## Administrative Functions

### getCurrentAdmin

**Function Type**: `view`  
**Function Signature**: `getCurrentAdmin()`

Gets the current admin address with administrative privileges over the contract.

#### Return Value

| Type      | Description                    |
| --------- | ------------------------------ |
| `address` | Address of the current admin   |

---

### getProposalAdmin

**Function Type**: `view`  
**Function Signature**: `getProposalAdmin()`

Gets the proposed admin address pending approval for admin privileges.

#### Return Value

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `address` | Address of the proposed admin (zero if no pending proposal) |

---

### getTimeToAcceptAdmin

**Function Type**: `view`  
**Function Signature**: `getTimeToAcceptAdmin()`

Gets the acceptance deadline for the pending admin change.

#### Return Value

| Type      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `uint256` | Timestamp when admin change can be executed (0 if no pending proposal) |

---

## Usage Examples

### Checking User Balance

```solidity
// Check MATE token balance for a user
uint256 mateBalance = evvm.getBalance(userAddress, mateTokenAddress);

// Check if user is a staker
bool isStaker = evvm.isAddressStaker(userAddress);
```

### Nonce Management

```solidity
// Get next sync nonce for a user
uint256 nextNonce = evvm.getNextCurrentSyncNonce(userAddress);

// Check if async nonce is used
bool nonceUsed = evvm.getIfUsedAsyncNonce(userAddress, customNonce);
```

### Token Management Verification

```solidity
// Check if token is pending whitelist
address pendingToken = evvm.getWhitelistTokenToBeAdded();

// Get deadline for whitelist proposal
uint256 deadline = evvm.getWhitelistTokenToBeAddedDateToSet();
```

---

## Administrative Functions


This section covers all administrative functions in the EVVM contract, including system configuration, governance, and access control mechanisms. These functions implement time-delayed governance for critical system changes to ensure security and allow for community review.

:::info[Proxy Management Functions]
The proxy management functions have been moved to their own dedicated section. See [Proxy Management Functions](./10-ProxyManagement.md) for complete documentation on implementation upgrades and proxy operations.
:::

---

## Initial Setup Functions

### _setupNameServiceAndTreasuryAddress

**Function Type**: `external`  
**Function Signature**: `_setupNameServiceAndTreasuryAddress(address,address)`

One-time setup function to configure the NameService and Treasury contract addresses. This function can only be called once due to a breaker flag mechanism for security.

#### Input Parameters

| Parameter              | Type      | Description                                    |
| ---------------------- | --------- | ---------------------------------------------- |
| `_nameServiceAddress`  | `address` | Address of the deployed NameService contract   |
| `_treasuryAddress`     | `address` | Address of the deployed Treasury contract      |

#### Setup Process

1. **Breaker Validation**: Ensures the function can only be called once
2. **NameService Configuration**: Sets the NameService contract address for identity resolution
3. **Initial Balance**: Provides 10,000 MATE tokens to the NameService contract
4. **Staker Registration**: Registers NameService as a privileged staker
5. **Treasury Configuration**: Sets the Treasury contract address for balance operations

#### Security Features

- **One-Time Execution**: Breaker flag prevents multiple calls
- **Essential Integration**: Configures critical system dependencies
- **Automatic Staking**: NameService receives staker privileges automatically
- **Initial Funding**: NameService gets operational balance for fees and operations

#### Workflow

```solidity
// Initial state: breakerSetupNameServiceAddress == FLAG_IS_STAKER (0x01)
// After execution: breakerSetupNameServiceAddress == 0x00 (prevents re-execution)

evvm._setupNameServiceAndTreasuryAddress(nameServiceAddr, treasuryAddr);
```

---

## Admin Management Functions

The contract implements time-delayed admin transfers with a 1-day security period.

### proposeAdmin

**Function Type**: `external onlyAdmin`  
**Function Signature**: `proposeAdmin(address)`

Proposes a new admin address with a 1-day time delay for security.

#### Input Parameters

| Parameter    | Type      | Description                      |
| ------------ | --------- | -------------------------------- |
| `_newOwner`  | `address` | Address of the proposed new admin |

#### Security Features

- **1-day time delay**: Shorter than implementation upgrades but provides safety
- **Non-zero validation**: Prevents setting admin to zero address
- **Self-assignment prevention**: Cannot propose current admin as new admin
- **Admin-only access**: Only current admin can propose changes

#### Workflow

1. Current admin proposes a new admin address
2. System sets acceptance deadline (current time + 1 day)
3. Proposed admin must accept the role after the time delay
4. Current admin can cancel the proposal if needed

---

### rejectProposalAdmin

**Function Type**: `external onlyAdmin`  
**Function Signature**: `rejectProposalAdmin()`

Cancels a pending admin change proposal.

#### Security Features

- **Admin-only access**: Only current admin can reject proposals
- **Immediate effect**: Cancellation takes effect immediately
- **State cleanup**: Clears both proposal address and acceptance deadline

---

### acceptAdmin

**Function Type**: `external`  
**Function Signature**: `acceptAdmin()`

Allows the proposed admin to accept the admin role after the time delay.

#### Security Features

- **Time delay enforcement**: Can only be called after the acceptance deadline
- **Proposed admin only**: Only the proposed admin can call this function
- **Two-step process**: Requires both proposal and acceptance for security

#### Workflow

1. Verifies that the current timestamp exceeds the acceptance deadline
2. Verifies that the caller is the proposed admin
3. Updates the current admin to the proposed admin
4. Clears the proposal state

---

## NameService Integration

### setNameServiceAddress

**Function Type**: `external onlyAdmin`  
**Function Signature**: `setNameServiceAddress(address)`

Updates the NameService contract address for identity resolution.

#### Input Parameters

| Parameter              | Type      | Description                           |
| ---------------------- | --------- | ------------------------------------- |
| `_nameServiceAddress`  | `address` | Address of the new NameService contract |

#### Security Features

- **Admin-only access**: Only admin can change NameService integration
- **Immediate effect**: Change takes effect immediately
- **Critical integration**: Affects identity resolution in payments

#### Use Cases

- Upgrading to a new NameService contract version
- Switching to a different identity resolution system
- Fixing integration issues with the current NameService

---

## Usage Examples

### Admin Transfer Process

```solidity
// 1. Current admin proposes new admin
evvm.proposeAdmin(newAdminAddress);

// 2. Wait 1 day

// 3. Proposed admin accepts the role
// (must be called by the proposed admin)
evvm.acceptAdmin();
```

## Security Considerations

### Time Delays

- **Admin changes**: 1-day delay for administrative control

### Access Control

- All administrative functions require `onlyAdmin` modifier
- Two-step process for admin transfers prevents accidental loss of control
- Cancellation mechanisms allow recovery from erroneous proposals

### State Management

- Admin proposals can only be executed after time delays
- State is properly cleaned up after execution or cancellation
- Clear proposal and acceptance process prevents confusion

---

## Identity Resolution Functions


The EVVM contract integrates with the NameService to provide identity-based payment functionality, allowing users to send payments to human-readable usernames instead of complex addresses. This section covers the identity resolution system and NameService integration.

## NameService Integration

The EVVM contract uses the NameService to resolve usernames to wallet addresses, enabling user-friendly payment experiences while maintaining the security of blockchain addresses.

### Identity Resolution Process

When a payment includes a `to_identity` parameter, the EVVM contract performs the following resolution process:

1. **Identity Validation**: Checks if the provided identity exists in the NameService
2. **Strict Verification**: Ensures the identity is properly registered and active  
3. **Address Resolution**: Retrieves the wallet address associated with the identity
4. **Payment Processing**: Executes the payment to the resolved address

### NameService Functions Used

The EVVM contract utilizes several NameService functions for identity resolution:

#### verifyStrictAndGetOwnerOfIdentity

**Function Purpose**: Strict identity verification with address resolution  
**Usage Context**: Primary method for secure identity-to-address conversion

```solidity
address recipient = NameService(nameServiceAddress)
    .verifyStrictAndGetOwnerOfIdentity(to_identity);
```

**Security Features**:
- Performs comprehensive validation of identity status
- Ensures identity is not expired or suspended  
- Returns the current owner address
- Reverts if identity is invalid or inactive

#### strictVerifyIfIdentityExist

**Function Purpose**: Checks identity existence without address resolution  
**Usage Context**: Used in batch operations for efficiency

```solidity
bool exists = NameService(nameServiceAddress)
    .strictVerifyIfIdentityExist(to_identity);
```

**Use Cases**:
- Batch payment validation before processing
- Efficient existence checks in `dispersePay` operations
- Pre-validation in multi-recipient transactions

#### getOwnerOfIdentity

**Function Purpose**: Retrieves address associated with an identity  
**Usage Context**: Used after existence verification

```solidity
address owner = NameService(nameServiceAddress)
    .getOwnerOfIdentity(to_identity);
```

**Security Note**: Should only be used after confirming identity existence with `strictVerifyIfIdentityExist`.

## Identity Resolution in Payment Functions

### Single Payment Functions

In the unified `pay` function, identity resolution follows this pattern:

```solidity
address to = !Strings.equal(to_identity, "")
    ? NameService(nameServiceAddress).verifyStrictAndGetOwnerOfIdentity(to_identity)
    : to_address;
```

**Logic Flow**:
1. Check if `to_identity` is provided (not empty string)
2. If identity provided: Use `verifyStrictAndGetOwnerOfIdentity` for secure resolution
3. If identity empty: Use the provided `to_address` directly
4. Proceed with payment to the resolved address

### Batch Payment Functions

In `payMultiple`, each payment in the batch undergoes individual identity resolution:

```solidity
to_aux = !Strings.equal(payData[iteration].to_identity, "")
    ? NameService(nameServiceAddress).verifyStrictAndGetOwnerOfIdentity(
        payData[iteration].to_identity
    )
    : payData[iteration].to_address;
```

**Benefits**:
- Each payment can use different resolution methods (identity or address)
- Failed identity resolution only affects individual payments in the batch
- Maintains security across all payments in the batch

### Disperse Payment Functions

In `dispersePay`, the resolution process is optimized for efficiency:

```solidity
if (!Strings.equal(toData[i].to_identity, "")) {
    if (NameService(nameServiceAddress).strictVerifyIfIdentityExist(
        toData[i].to_identity
    )) {
        to_aux = NameService(nameServiceAddress).getOwnerOfIdentity(
            toData[i].to_identity
        );
    }
} else {
    to_aux = toData[i].to_address;
}
```

**Optimization Features**:
- Two-step verification for better error handling
- Continues processing even if some identities are invalid
- Efficient batch processing of multiple recipients

## NameService Configuration

### Setup Process

The NameService integration is configured during contract deployment and setup:

#### Initial Setup

```solidity
function _setupNameServiceAddress(address _nameServiceAddress) external {
    if (breakerSetupNameServiceAddress == 0x00) {
        revert();
    }
    nameServiceAddress = _nameServiceAddress;
    balances[nameServiceAddress][evvmMetadata.principalTokenAddress] = 
        10000 * 10 ** 18;
    stakerList[nameServiceAddress] = FLAG_IS_STAKER;
}
```

**Setup Features**:
- One-time configuration with breaker flag protection
- Provides initial MATE token balance (10,000 MATE) to NameService
- Registers NameService as a privileged staker
- Prevents multiple setup calls for security

#### Administrative Updates

```solidity
function setNameServiceAddress(address _nameServiceAddress) external onlyAdmin {
    nameServiceAddress = _nameServiceAddress;
}
```

**Administrative Control**:
- Admin can update NameService address if needed
- Immediate effect for operational flexibility
- Used for upgrades or integration changes

## Security Considerations

### Identity Validation

1. **Strict Verification**: Always use `verifyStrictAndGetOwnerOfIdentity` for secure resolution
2. **Existence Checks**: Verify identity exists before attempting resolution
3. **Error Handling**: Proper handling of invalid or expired identities
4. **Fallback Mechanism**: Support both identity and direct address payments

### Attack Vectors

#### Identity Spoofing
- **Protection**: NameService handles identity uniqueness and ownership
- **Validation**: Strict verification prevents unauthorized identity use
- **Resolution**: Only valid, active identities can be resolved

#### Identity Expiration
- **Handling**: Expired identities fail strict verification
- **Fallback**: Users can always use direct addresses
- **Notification**: Clear error messages for resolution failures

#### Service Disruption
- **Resilience**: Direct address payments remain available
- **Isolation**: NameService issues don't affect address-based payments
- **Recovery**: Admin can update NameService address if needed

## Best Practices

### For Users

1. **Verify Identity**: Ensure the identity you're paying to is correct and active
2. **Fallback Option**: Keep recipient addresses as backup for critical payments
3. **Recent Validation**: Verify identity ownership before large payments

### For Developers

1. **Error Handling**: Implement proper error handling for identity resolution failures
2. **Validation**: Always validate identity format before attempting resolution
3. **Caching**: Consider caching resolved addresses for frequently used identities
4. **User Experience**: Provide clear feedback for identity resolution status

### For Integrators

1. **Dual Support**: Support both identity and address-based payments
2. **Validation UI**: Provide real-time identity validation in user interfaces
3. **Error Messages**: Display helpful error messages for resolution failures
4. **Address Display**: Show resolved addresses to users for confirmation

## Usage Examples

### Identity-Based Payment

```solidity
// Payment using identity
evvm.pay(
    senderAddress,
    address(0),          // Empty address
    "alice.mate",        // Identity to resolve
    tokenAddress,
    amount,
    priorityFee,
    nonce,
    priorityFlag,        // async/sync flag
    executor,
    signature
);
```

### Address-Based Payment

```solidity
// Payment using direct address
evvm.pay(
    senderAddress,
    recipientAddress,    // Direct address
    "",                  // Empty identity
    tokenAddress,
    amount,
    priorityFee,
    executor,
    signature
);
```

### Mixed Batch Payment

```solidity
PayData[] memory payments = new PayData[](2);

// Payment 1: Using identity
payments[0] = PayData({
    from: sender,
    to_address: address(0),
    to_identity: "alice.mate",
    token: tokenAddress,
    amount: amount1,
    // ... other fields
});

// Payment 2: Using direct address  
payments[1] = PayData({
    from: sender,
    to_address: recipientAddress,
    to_identity: "",
    token: tokenAddress,
    amount: amount2,
    // ... other fields
});

evvm.payMultiple(payments);
```

## Integration Benefits

### User Experience
- **Human-Readable**: Users can send payments to memorable usernames
- **Error Reduction**: Reduces address copy-paste errors
- **Social Integration**: Enables social payment features

### Developer Benefits
- **Abstraction**: Simplifies address management in applications
- **Flexibility**: Supports both traditional and identity-based payments  
- **Future-Proof**: Easy integration with identity evolution

### Ecosystem Benefits
- **Adoption**: Lowers barriers to blockchain payment adoption
- **Integration**: Enables rich social and identity features
- **Standardization**: Provides consistent identity resolution across services

---

## Economic System Functions


The EVVM ecosystem implements a sophisticated economic system with deflationary tokenomics, reward distribution, and era-based transitions. This section covers the economic functions that manage token supply, rewards, and the evolution of the system's monetary policy.

## Token Economics Overview

The EVVM economic system is built around the MATE token with several key features:

- **Deflationary Mechanism**: Reward halving through era transitions
- **Staker Incentives**: Enhanced rewards for network participants  
- **Random Bonuses**: Lottery-style rewards for era transition triggers
- **Supply Management**: Controlled token distribution and burning

## Era Transition System

### recalculateReward

**Function Type**: `public`  
**Function Signature**: `recalculateReward()`

Triggers a reward recalculation and era transition in the token economy when the total supply exceeds the current era threshold.

#### Era Transition Mechanism

The function implements a deflationary system where:

1. **Threshold Check**: Activates when `totalSupply > eraTokens`
2. **Era Adjustment**: Moves half of remaining tokens to next era threshold
3. **Reward Halving**: Cuts base reward amount in half for future transactions  
4. **Bonus Distribution**: Provides random MATE bonus to the caller (1-5083x reward)

#### Economic Formula

```solidity
// Era threshold update
evvmMetadata.eraTokens += ((evvmMetadata.totalSupply - evvmMetadata.eraTokens) / 2);

// Random bonus calculation
uint256 bonus = evvmMetadata.reward * getRandom(1, 5083);

// Reward halving
evvmMetadata.reward = evvmMetadata.reward / 2;
```

#### Economic Impact

- **Scarcity Creation**: Era thresholds become progressively harder to reach
- **Inflation Reduction**: Reward halving reduces token inflation over time
- **Early Incentive**: Higher rewards for early ecosystem participation
- **Random Incentive**: Lottery mechanism for era transition triggering

#### Workflow

1. **Eligibility Check**: Verifies total supply exceeds current era tokens threshold
2. **Era Calculation**: Updates era threshold by adding half the excess supply
3. **Bonus Award**: Grants random MATE bonus (1-5083x base reward) to caller
4. **Reward Halving**: Reduces base reward for all future transactions
5. **State Update**: Updates metadata to reflect new economic parameters

#### Access Control

- **Public Function**: Anyone can trigger when conditions are met
- **Conditional Execution**: Only works when total supply exceeds era threshold
- **Single Execution**: Each era transition can only occur once per threshold

---

### getRandom

**Function Type**: `internal view`  
**Function Signature**: `getRandom(uint256,uint256)`

Generates pseudo-random numbers for era transition bonuses and other system randomness needs.

#### Input Parameters

| Parameter | Type      | Description                    |
| --------- | --------- | ------------------------------ |
| `min`     | `uint256` | Minimum value (inclusive)      |
| `max`     | `uint256` | Maximum value (inclusive)      |

#### Return Value

| Type      | Description                                  |
| --------- | -------------------------------------------- |
| `uint256` | Random number between min and max (inclusive) |

#### Randomness Source

```solidity
return min + (uint256(
    keccak256(abi.encodePacked(block.timestamp, block.prevrandao))
) % (max - min + 1));
```

**Components**:
- **block.timestamp**: Current block timestamp for variability
- **block.prevrandao**: Validator randomness from consensus layer
- **Keccak256 Hashing**: Cryptographic mixing of randomness sources
- **Modulo Operation**: Maps to desired range

#### Security Considerations

- **Non-Critical Randomness**: Suitable for reward bonuses and incentives
- **Predictability**: Not suitable for high-stakes applications
- **Manipulation Resistance**: Difficult to manipulate but not impossible
- **Block-Based**: Updates with each new block

## Reward Distribution System

### _giveReward

**Function Type**: `internal`  
**Function Signature**: `_giveReward(address,uint256)`

Internal function that distributes MATE token rewards to stakers for transaction processing and network participation.

#### Input Parameters

| Parameter | Type      | Description                                    |
| --------- | --------- | ---------------------------------------------- |
| `user`    | `address` | Address of the staker to receive rewards       |
| `amount`  | `uint256` | Number of transactions or reward multiplier    |

#### Return Value

| Type   | Description                                      |
| ------ | ------------------------------------------------ |
| `bool` | True if reward distribution completed successfully |

#### Reward Calculation

```solidity
uint256 principalReward = evvmMetadata.reward * amount;
balances[user][evvmMetadata.principalTokenAddress] += principalReward;
```

**Formula**:
- **Total Reward** = Base Reward × Transaction Count
- **Base Reward**: Current system reward amount (halves with each era)
- **Transaction Count**: Number of successful operations processed

#### Use Cases

- **Single Payments**: 1x reward for processing individual payments
- **Batch Payments**: Multiple rewards based on successful transaction count
- **Bridge Operations**: Rewards for Fisher Bridge processing
- **Contract Operations**: Rewards for automated system operations

#### Integration Points

The reward system is integrated throughout EVVM functions:

```solidity
// Single payment reward
_giveReward(msg.sender, 1);

// Batch payment reward
_giveReward(msg.sender, successfulTransactions);

// Bridge operation reward  
_giveReward(msg.sender, 1);
```

## Economic State Functions

### Token Supply Management

#### getPrincipalTokenTotalSupply

**Function Type**: `view`  
**Function Signature**: `getPrincipalTokenTotalSupply()`

Returns the current total supply of MATE tokens used for era transition calculations.

#### getEraPrincipalToken

**Function Type**: `view`  
**Function Signature**: `getEraPrincipalToken()`

Returns the current era token threshold that triggers the next reward halving event.

#### getRewardAmount

**Function Type**: `view`  
**Function Signature**: `getRewardAmount()`

Returns the current base reward amount distributed to stakers for transaction processing.

### Economic Metadata

#### getEvvmMetadata

**Function Type**: `view`  
**Function Signature**: `getEvvmMetadata()`

Returns the complete economic configuration including token addresses, rewards, supply data, and era thresholds.

## Economic Scenarios

### Era Transition Example

Consider the following economic state:

```
Initial State:
- Total Supply: 1,000,000 MATE
- Era Tokens: 800,000 MATE  
- Base Reward: 100 MATE
- Excess Supply: 200,000 MATE (1,000,000 - 800,000)

After Era Transition:
- Era Tokens: 900,000 MATE (800,000 + 200,000/2)
- Base Reward: 50 MATE (100/2)
- Caller Bonus: 50-254,150 MATE (50 * random(1,5083))
- Next Threshold: 900,000 MATE
```

### Reward Halving Impact

| Era | Base Reward | Era Threshold | Economic Phase |
| --- | ----------- | ------------- | -------------- |
| 1   | 100 MATE    | 1M MATE       | High Inflation |
| 2   | 50 MATE     | ~1.5M MATE    | Moderate Inflation |
| 3   | 25 MATE     | ~2M MATE      | Low Inflation |
| 4   | 12.5 MATE   | ~2.5M MATE    | Deflationary |
| 5   | 6.25 MATE   | ~3M MATE      | Ultra Deflationary |

### Staker Economics

#### Transaction Processing Rewards

| Operation Type      | Base Reward | Additional Benefits |
| ------------------- | ----------- | ------------------- |
| Single Payment      | 1x reward   | Priority fees       |
| Batch Payment       | Nx reward   | Priority fees       |
| Bridge Operation    | 1x reward   | Bridge fees         |
| Contract Operation  | 1x reward   | Service fees        |

#### Era Transition Bonuses

Random bonus multipliers for triggering era transitions:

- **Minimum Bonus**: 1x base reward
- **Maximum Bonus**: 5083x base reward  
- **Average Bonus**: ~2542x base reward
- **Expected Value**: Significant incentive for monitoring

## Economic Security

### Inflation Control

- **Automatic Halving**: Reduces inflation with each era transition
- **Supply Caps**: Era thresholds create natural supply limits
- **Staker Distribution**: Rewards distributed to active participants only

### Economic Attacks

#### Era Manipulation
- **Attack Vector**: Attempting to manipulate era transition timing
- **Protection**: Public function allows anyone to trigger when eligible
- **Mitigation**: Random bonuses reduce predictable profit

#### Reward Farming
- **Attack Vector**: Gaming the reward system for excessive tokens
- **Protection**: Staker-only rewards and transaction validation
- **Mitigation**: Legitimate transaction processing required

#### Supply Inflation
- **Attack Vector**: Excessive reward distribution inflating supply
- **Protection**: Automatic halving mechanism reduces rewards over time
- **Mitigation**: Era thresholds become progressively harder to reach

## Integration Guidelines

### For Stakers

1. **Monitor Era Progress**: Track total supply approaching era thresholds
2. **Trigger Transitions**: Call `recalculateReward()` when eligible for bonuses  
3. **Optimize Processing**: Focus on high-volume periods for maximum rewards
4. **Long-term Planning**: Understand reward reduction trajectory

### For Developers

1. **Reward Integration**: Properly integrate `_giveReward()` in new functions
2. **Economic Queries**: Use getter functions for economic state information
3. **Era Monitoring**: Build tools to track era transition progress
4. **Reward Calculation**: Account for changing reward amounts in projections

### For Users

1. **Understand Economics**: Learn how era transitions affect system costs
2. **Timing Strategies**: Consider era transitions when planning large operations
3. **Staker Benefits**: Understand advantages of becoming a staker
4. **Long-term Value**: Recognize deflationary nature of tokenomics

## Economic Monitoring

### Key Metrics

- **Total Supply Growth**: Rate of MATE token creation
- **Era Progression**: Distance to next era transition
- **Reward Efficiency**: Rewards per transaction over time
- **Staker Participation**: Number of active reward recipients

### Health Indicators

- **Inflation Rate**: Current rate of token supply growth
- **Era Transition Frequency**: How often transitions occur
- **Reward Distribution**: Concentration of rewards among stakers
- **Economic Activity**: Transaction volume and reward generation

## Future Economic Evolution

### Predicted Trajectory

As the system matures:

1. **Early Growth**: High rewards attract initial stakers and users
2. **Expansion Phase**: Increased adoption drives era transitions
3. **Maturation**: Slower era transitions as thresholds become harder
4. **Stability**: Ultra-low inflation creates stable economic environment
5. **Sustainability**: System reaches long-term sustainable reward levels

### Adaptation Mechanisms

- **Community Governance**: Future economic parameter adjustments
- **Market Forces**: Natural balance between rewards and participation
- **Technical Evolution**: New features may introduce economic innovations
- **Cross-Chain Integration**: Economic effects of multi-chain expansion

---

## Staking Integration Functions


The EVVM contract integrates closely with the staking system to manage staker status, privileges, and rewards. This integration enables enhanced functionality for MATE token stakers while maintaining secure access control and reward distribution.

## Staking System Overview

The EVVM staking integration provides:

- **Staker Status Management**: Control over who can earn staking rewards
- **Enhanced Privileges**: Special access to staker-only functions
- **Reward Distribution**: Integrated MATE token rewards for stakers
- **Cross-Contract Communication**: Secure integration with staking contract

## Staker Status Functions

### pointStaker

**Function Type**: `public`  
**Function Signature**: `pointStaker(address,bytes1)`

Updates staker status for a user address, controlling access to staking privileges and rewards.

#### Input Parameters

| Parameter | Type      | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| `user`    | `address` | Address to update staker status for              |
| `answer`  | `bytes1`  | Flag indicating staker status/type               |

#### Access Control

```solidity
if (msg.sender != stakingContractAddress) {
    revert();
}
```

**Security Features**:
- **Staking Contract Only**: Only the authorized staking contract can call this function
- **Centralized Control**: Ensures staker status changes are properly authorized
- **Integration Security**: Prevents unauthorized staker privilege escalation

#### Staker Status Values

The `answer` parameter uses standardized flag values:

| Value              | Meaning                | Description                           |
| ------------------ | ---------------------- | ------------------------------------- |
| `FLAG_IS_STAKER`   | Active Staker          | User has staking privileges           |
| `0x00`             | Non-Staker             | User has no staking privileges        |
| Other values       | Custom Status          | Future staker types or special status |

#### Integration Flow

1. **Staking Contract Event**: User stakes or unstakes MATE tokens
2. **Status Update**: Staking contract calls `pointStaker()` to update status
3. **EVVM Update**: User's staker status is updated in EVVM contract
4. **Privilege Changes**: User gains/loses automatic staker benefits when executing payments

### isAddressStaker

**Function Type**: `view`  
**Function Signature**: `isAddressStaker(address)`

Checks if an address is registered as an active staker with transaction processing privileges.

#### Input Parameters

| Parameter | Type      | Description                        |
| --------- | --------- | ---------------------------------- |
| `user`    | `address` | Address to check staker status for |

#### Return Value

| Type   | Description                                  |
| ------ | -------------------------------------------- |
| `bool` | True if the address is a registered staker   |

#### Implementation

```solidity
function isAddressStaker(address user) public view returns (bool) {
    return stakerList[user] == FLAG_IS_STAKER;
}
```

**Validation Logic**:
- Checks if user's status equals the active staker flag
- Returns boolean for easy integration in other functions
- Used throughout EVVM for privilege verification

## Staker Privileges

### Enhanced Payment Processing

Stakers receive special privileges in payment processing functions:

#### Staker Payment Benefits

- **Automatic Detection**: The `pay` function automatically detects if executor is a staker
- **Enhanced Rewards**: Staker executors receive MATE token rewards for processing
- **Priority Fees**: Staker executors collect priority fees from users
- **Batch Processing**: Special rewards for batch payment processing

#### Privilege Detection

```solidity
if (isAddressStaker(msg.sender)) {
    // Staker gets priority fee and rewards
    if (priorityFee > 0) {
        if (!_updateBalance(from, msg.sender, token, priorityFee))
            revert ErrorsLib.UpdateBalanceFailed();
    }
    _giveReward(msg.sender, 1);
}
```

This automatic detection is used in:
- `pay` (unified payment function)
- `payMultiple` (for enhanced rewards)
- `dispersePay` (single-source multi-recipient)
- Bridge operations

### Reward System Integration

#### Standard Rewards

Stakers receive base MATE rewards for transaction processing:

```solidity
_giveReward(msg.sender, 1);  // Single transaction reward
```

#### Batch Rewards

Enhanced rewards for batch processing:

```solidity
_giveReward(msg.sender, successfulTransactions);  // Multiple transaction rewards
```

#### Bridge Rewards

Special rewards for Fisher Bridge operations:

```solidity
balances[msg.sender][evvmMetadata.principalTokenAddress] += evvmMetadata.reward;
```

## Contract Integration

### Staking Contract Address

#### getStakingContractAddress

**Function Type**: `view`  
**Function Signature**: `getStakingContractAddress()`

Returns the authorized staking contract address that can modify staker status.

#### Setup and Configuration

The staking contract address is set during EVVM deployment:

```solidity
constructor(
    address _initialOwner,
    address _stakingContractAddress,
    EvvmMetadata memory _evvmMetadata
) {
    stakingContractAddress = _stakingContractAddress;
    // Initial MATE token allocation to staking contract
    balances[_stakingContractAddress][evvmMetadata.principalTokenAddress] = 
        getRewardAmount() * 2;
    // Register staking contract as staker
    stakerList[_stakingContractAddress] = FLAG_IS_STAKER;
}
```

**Initial Setup Features**:
- **Address Registration**: Sets authorized staking contract
- **Initial Funding**: Provides MATE tokens for reward distribution
- **Staker Status**: Grants staking contract staker privileges
- **Integration Ready**: Prepares for cross-contract communication

### Cross-Contract Communication

#### Staking Contract → EVVM

When users stake or unstake tokens:

1. **User Action**: Stakes/unstakes MATE tokens in staking contract
2. **Status Calculation**: Staking contract determines new staker status
3. **EVVM Update**: Staking contract calls `pointStaker()` to update status
4. **Privilege Change**: User gains/loses staker privileges in EVVM

#### EVVM → Staking Contract

EVVM provides reward distribution to the staking contract:

- **Initial Allocation**: MATE tokens provided during deployment
- **Ongoing Rewards**: System generates rewards for distribution
- **Contract Balance**: Staking contract maintains MATE balance for rewards

## Staker Economics

### Cost-Benefit Analysis

#### Staking Requirements

To become a staker, users typically need to:

1. **Stake MATE Tokens**: Lock tokens in staking contract
2. **Maintain Balance**: Keep minimum staking requirements
3. **Active Participation**: Process transactions to earn rewards
4. **Network Contribution**: Provide validation and processing services

#### Staker Benefits

| Benefit Type          | Description                                    | Value                    |
| --------------------- | ---------------------------------------------- | ------------------------ |
| MATE Rewards          | Base rewards for transaction processing        | Variable (era-based)     |
| Priority Fees         | User-paid fees for transaction processing      | Market-determined        |
| Bridge Fees           | Fees from Fisher Bridge operations            | User-paid + MATE rewards |
| Enhanced Access       | Access to staker-only functions               | Exclusive privileges     |
| Network Influence     | Participation in network validation           | Governance potential     |

### Reward Calculations

#### Single Transaction Rewards

```solidity
// Base MATE reward
uint256 baseReward = evvmMetadata.reward;

// Priority fee (if applicable)
uint256 priorityFee = userSpecifiedFee;

// Total earnings = Base reward + Priority fee
uint256 totalEarnings = baseReward + priorityFee;
```

#### Batch Transaction Rewards

```solidity
// Multiple base rewards
uint256 totalRewards = evvmMetadata.reward * successfulTransactions;

// Multiple priority fees (if applicable)
uint256 totalFees = sum(individualPriorityFees);

// Total earnings = Multiple rewards + Total fees
uint256 totalEarnings = totalRewards + totalFees;
```

## Integration Best Practices

### For Staking Contract Developers

#### Secure Integration

1. **Address Validation**: Ensure EVVM contract address is correct
2. **Access Control**: Properly restrict who can trigger status updates
3. **Error Handling**: Handle EVVM contract failures gracefully
4. **State Synchronization**: Keep staking and EVVM status in sync

#### Status Management

```solidity
// Example staking contract integration
function updateStakerStatus(address user) internal {
    if (isUserStaker(user)) {
        IEvvm(evvmAddress).pointStaker(user, FLAG_IS_STAKER);
    } else {
        IEvvm(evvmAddress).pointStaker(user, 0x00);
    }
}
```

### For EVVM Integrators

#### Staker Verification

Always verify staker status before granting privileges:

```solidity
function privilegedFunction() external {
    require(evvm.isAddressStaker(msg.sender), "Not a staker");
    // Privileged functionality here
}
```

#### Reward Distribution

Properly integrate reward distribution:

```solidity
function processTransaction() external {
    // Transaction processing logic
    
    if (evvm.isAddressStaker(msg.sender)) {
        // Grant rewards through EVVM internal function
        // This is handled automatically by EVVM functions
    }
}
```

### For Users

#### Becoming a Staker

1. **Research Requirements**: Understand staking token requirements
2. **Evaluate Economics**: Calculate potential rewards vs. staking costs
3. **Stake Tokens**: Follow staking contract procedures
4. **Verify Status**: Confirm staker status in EVVM using `isAddressStaker()`
5. **Start Processing**: Begin earning rewards through transaction processing

#### Maintaining Staker Status

1. **Monitor Requirements**: Keep track of minimum staking requirements
2. **Stay Active**: Regularly process transactions to earn rewards
3. **Manage Rewards**: Properly handle earned MATE tokens and fees
4. **Update Status**: Ensure status remains synchronized across contracts

## Security Considerations

### Access Control

#### Staking Contract Security

- **Single Authority**: Only one contract can update staker status
- **Address Verification**: Staking contract address must be validated
- **Function Restrictions**: `pointStaker()` is restricted to staking contract only

#### Status Manipulation Prevention

- **Centralized Control**: Prevents unauthorized staker privilege escalation
- **Contract-Only Updates**: EOAs cannot directly modify staker status
- **Synchronization**: Status changes must originate from staking contract

### Integration Risks

#### Contract Upgrade Risks

- **Address Changes**: Staking contract upgrades may require EVVM updates
- **Interface Changes**: Modified interfaces may break integration
- **State Migration**: Status synchronization during upgrades

#### Failure Scenarios

- **Staking Contract Failure**: EVVM continues operating with existing staker status
- **Communication Failure**: Status updates may be delayed or lost
- **Network Issues**: Cross-contract calls may fail during network congestion

## Monitoring and Maintenance

### Health Indicators

#### Integration Health

- **Status Synchronization**: Staking contract and EVVM status alignment
- **Update Frequency**: Rate of staker status changes
- **Reward Distribution**: Proper MATE reward allocation
- **Cross-Contract Calls**: Success rate of `pointStaker()` calls

#### System Metrics

- **Active Stakers**: Number of addresses with staker status
- **Reward Volume**: Total MATE rewards distributed to stakers
- **Transaction Processing**: Volume of staker-processed transactions
- **Integration Errors**: Failed cross-contract communications

### Troubleshooting

#### Common Issues

1. **Status Sync Failure**
   - Check staking contract integration
   - Verify EVVM contract address in staking contract
   - Review recent staker status changes

2. **Reward Distribution Issues**
   - Verify staker status using `isAddressStaker()`
   - Check MATE token balances
   - Review transaction processing logs

3. **Integration Breaks**
   - Validate contract addresses
   - Check interface compatibility
   - Review access control configurations

## Future Integration Enhancements

### Planned Features

- **Multi-Tier Staking**: Different staker levels with varying privileges
- **Governance Integration**: Staker voting rights in system governance
- **Cross-Chain Staking**: Staking integration across multiple chains
- **Advanced Rewards**: More sophisticated reward calculation mechanisms

### Extensibility

The current integration design supports:

- **Multiple Staker Types**: Using different flag values in `pointStaker()`
- **Enhanced Privileges**: New functions can easily check staker status
- **Reward Evolution**: Flexible reward system can accommodate changes
- **Protocol Evolution**: Integration can adapt to new staking mechanisms

---

## Proxy Management Functions


The EVVM contract uses a sophisticated proxy pattern with time-delayed upgrades to ensure security and allow for community review of critical system changes. This section covers all proxy-related functions for implementation management.

## Proxy Pattern Overview

The EVVM contract implements an upgradeable proxy pattern with the following security features:

- **Time-Delayed Upgrades**: 30-day delay for implementation changes
- **Community Review**: Extended time for security audits and community validation
- **Admin Control**: Only authorized admin can propose and execute upgrades
- **Cancellation Mechanism**: Ability to reject proposed upgrades before execution
- **Fallback Delegation**: Automatic delegation to current implementation

## Implementation Management Functions

### proposeImplementation

**Function Type**: `external onlyAdmin`  
**Function Signature**: `proposeImplementation(address)`

Proposes a new implementation contract for the proxy with a mandatory 30-day time delay for security.

#### Input Parameters

| Parameter   | Type      | Description                                    |
| ----------- | --------- | ---------------------------------------------- |
| `_newImpl`  | `address` | Address of the new implementation contract     |

#### Security Features

- **30-day time delay**: Allows comprehensive community review and validation
- **Admin-only access**: Only current admin can propose upgrades
- **Single proposal**: Only one implementation proposal can be pending at a time
- **Cancellable**: Can be rejected using `rejectUpgrade()` before deadline

#### Workflow

1. **Admin Proposal**: Admin calls `proposeImplementation()` with new implementation address
2. **Deadline Setting**: System sets acceptance deadline (current timestamp + 30 days)
3. **Community Review**: 30-day period for security audits and community validation
4. **Optional Cancellation**: Admin can cancel using `rejectUpgrade()` if issues are found
5. **Execution**: After 30 days, admin can execute upgrade using `acceptImplementation()`

#### Implementation

```solidity
function proposeImplementation(address _newImpl) external onlyAdmin {
    proposalImplementation = _newImpl;
    timeToAcceptImplementation = block.timestamp + 30 days;
}
```

---

### rejectUpgrade

**Function Type**: `external onlyAdmin`  
**Function Signature**: `rejectUpgrade()`

Cancels a pending implementation upgrade proposal before the time delay expires.

#### Security Features

- **Admin-only access**: Only current admin can reject upgrades
- **Immediate effect**: Cancellation takes effect immediately
- **Complete reset**: Clears both proposal address and acceptance deadline
- **Emergency mechanism**: Allows quick response to discovered security issues

#### Use Cases

- **Security Issues**: Community or auditors identify problems in proposed implementation
- **Better Alternative**: Superior implementation becomes available during review period
- **Administrative Decision**: Admin decides to withdraw the upgrade proposal
- **Emergency Response**: Quick cancellation of problematic proposals

#### Implementation

```solidity
function rejectUpgrade() external onlyAdmin {
    proposalImplementation = address(0);
    timeToAcceptImplementation = 0;
}
```

---

### acceptImplementation

**Function Type**: `external onlyAdmin`  
**Function Signature**: `acceptImplementation()`

Executes a pending implementation upgrade after the mandatory 30-day time delay has passed.

#### Security Features

- **Time delay enforcement**: Cannot be called before the acceptance deadline
- **Admin-only access**: Only current admin can execute upgrades
- **Automatic cleanup**: Clears proposal data after successful upgrade
- **Atomic execution**: Implementation change happens atomically

#### Execution Requirements

1. **Valid Proposal**: Must have a pending implementation proposal
2. **Time Elapsed**: Current timestamp must exceed the acceptance deadline
3. **Admin Authorization**: Must be called by the current admin
4. **Clean State**: Proposal state is cleared after execution

#### Workflow

1. **Deadline Verification**: Confirms that 30 days have passed since proposal
2. **Implementation Update**: Sets current implementation to proposed implementation
3. **State Cleanup**: Clears proposal implementation and acceptance deadline
4. **Proxy Activation**: New implementation becomes active for all delegatecalls

#### Implementation

```solidity
function acceptImplementation() external onlyAdmin {
    if (block.timestamp < timeToAcceptImplementation) revert();
    currentImplementation = proposalImplementation;
    proposalImplementation = address(0);
    timeToAcceptImplementation = 0;
}
```

---

## Proxy Query Functions

### getCurrentImplementation

**Function Type**: `view`  
**Function Signature**: `getCurrentImplementation()`

Gets the current active implementation contract address used by the proxy for delegatecalls.

#### Return Value

| Type      | Description                                      |
| --------- | ------------------------------------------------ |
| `address` | Address of the current implementation contract   |

#### Use Cases

- **Integration Verification**: Confirm which implementation is currently active
- **Debugging**: Identify implementation during troubleshooting
- **Monitoring**: Track implementation changes over time
- **Interface Detection**: Determine available functions in current implementation

---

### getProposalImplementation

**Function Type**: `view`  
**Function Signature**: `getProposalImplementation()`

Gets the proposed implementation contract address that is pending approval for proxy upgrade.

#### Return Value

| Type      | Description                                                    |
| --------- | -------------------------------------------------------------- |
| `address` | Address of the proposed implementation contract (zero if none) |

#### Use Cases

- **Proposal Monitoring**: Track pending implementation upgrades
- **Community Review**: Allow community to examine proposed implementations
- **Security Analysis**: Enable security audits of pending upgrades
- **Decision Making**: Provide information for upgrade approval decisions

---

### getTimeToAcceptImplementation

**Function Type**: `view`  
**Function Signature**: `getTimeToAcceptImplementation()`

Gets the acceptance deadline for the pending implementation upgrade.

#### Return Value

| Type      | Description                                                              |
| --------- | ------------------------------------------------------------------------ |
| `uint256` | Timestamp when implementation upgrade can be executed (0 if no pending proposal) |

#### Use Cases

- **Timing Information**: Know when upgrade can be executed
- **Countdown Tracking**: Monitor time remaining in review period
- **Automation**: Enable automated execution after deadline
- **Planning**: Schedule upgrade execution and related activities

---

## Fallback Mechanism

### Delegatecall Fallback

The EVVM contract implements a sophisticated fallback function that automatically delegates calls to the current implementation:

```solidity
fallback() external {
    if (currentImplementation == address(0)) revert();

    assembly {
        // Copy the entire calldata
        calldatacopy(0, 0, calldatasize())

        // Delegatecall to implementation
        let result := delegatecall(
            gas(), 
            sload(currentImplementation.slot), 
            0, 
            calldatasize(), 
            0, 
            0
        )

        // Copy the return data
        returndatacopy(0, 0, returndatasize())

        // Handle the result
        switch result
        case 0 {
            revert(0, returndatasize()) // Forward revert
        }
        default {
            return(0, returndatasize()) // Forward return
        }
    }
}
```

#### Fallback Features

- **Automatic Delegation**: Routes unknown function calls to current implementation
- **Gas Forwarding**: Passes all available gas to implementation
- **Data Preservation**: Maintains exact calldata and return data
- **Error Forwarding**: Properly forwards reverts and error messages
- **Security Check**: Reverts if no implementation is set

## Security Considerations

### Upgrade Security

#### Time Delay Benefits

- **Community Review**: 30 days allows thorough security analysis
- **Vulnerability Discovery**: Extended time for finding implementation bugs
- **Social Consensus**: Time for community discussion and consensus building
- **Emergency Response**: Ability to cancel upgrades if issues are found

#### Access Control

- **Admin-Only Operations**: All proxy management restricted to admin
- **Single Point of Control**: Centralized but time-delayed upgrade authority
- **Proposal Validation**: Admin can review proposals before execution
- **Emergency Cancellation**: Quick response capability for security issues

### Attack Vectors

#### Malicious Implementation

- **Protection**: 30-day review period allows security analysis
- **Mitigation**: Community can identify malicious code before execution
- **Response**: Admin can cancel malicious proposals using `rejectUpgrade()`

#### Admin Compromise

- **Risk**: Compromised admin could propose malicious implementations
- **Mitigation**: 30-day delay provides time to detect compromise
- **Response**: Community alert systems and emergency procedures

#### Implementation Bugs

- **Risk**: New implementations may contain bugs or vulnerabilities
- **Mitigation**: Extended review period and testing requirements
- **Response**: Cancel upgrade and deploy fixed implementation

## Integration Guidelines

### For Developers

#### Monitoring Upgrades

```solidity
// Check for pending upgrades
address pendingImpl = evvm.getProposalImplementation();
uint256 deadline = evvm.getTimeToAcceptImplementation();

if (pendingImpl != address(0)) {
    // Upgrade is pending - analyze and prepare
    uint256 timeRemaining = deadline - block.timestamp;
    // Implement monitoring and preparation logic
}
```

#### Implementation Development

1. **Security First**: Prioritize security in implementation development
2. **Comprehensive Testing**: Extensive testing before proposal
3. **Community Engagement**: Engage community during development
4. **Documentation**: Provide detailed upgrade documentation

### For Community

#### Review Process

1. **Code Analysis**: Examine proposed implementation code
2. **Security Audit**: Conduct or review security audits
3. **Testing**: Participate in testnet validation
4. **Feedback**: Provide feedback during review period

#### Monitoring Tools

- **Implementation Tracking**: Monitor current and proposed implementations
- **Deadline Alerts**: Set up notifications for upgrade deadlines
- **Change Analysis**: Analyze differences between implementations
- **Community Discussion**: Participate in upgrade discussions

## Best Practices

### Upgrade Planning

1. **Thorough Testing**: Comprehensive testing on testnets
2. **Security Audits**: Professional security audits before proposal
3. **Community Engagement**: Early community involvement and feedback
4. **Documentation**: Complete documentation of changes and rationale
5. **Emergency Procedures**: Clear procedures for upgrade cancellation

### Operational Security

1. **Admin Key Security**: Secure storage and management of admin keys
2. **Monitoring Systems**: Automated monitoring of upgrade proposals
3. **Response Procedures**: Defined procedures for security issues
4. **Community Coordination**: Clear communication channels with community

### Development Lifecycle

1. **Design Phase**: Community input on upgrade requirements
2. **Development Phase**: Transparent development with regular updates
3. **Testing Phase**: Comprehensive testing including security testing
4. **Review Phase**: Community review and feedback incorporation
5. **Deployment Phase**: Careful execution with monitoring

---

## Treasury Functions


The EVVM contract includes specialized functions that can only be called by the authorized Treasury contract. These functions provide controlled access to user balance management for treasury operations such as deposits, withdrawals, and automated distributions.

:::warning[Treasury Authorization Required]
These functions will revert with `SenderIsNotTreasury()` if called by any address other than the authorized treasury contract.
:::

## addAmountToUser

**Function Type**: `external`  
**Function Signature**: `addAmountToUser(address,address,uint256)`

Adds tokens to a user's balance in the EVVM system. This function is used by the treasury for deposit operations and reward distributions.

### Parameters

| Field    | Type      | Description                                    |
| -------- | --------- | ---------------------------------------------- |
| `user`   | `address` | Address of the user to receive the balance     |
| `token`  | `address` | Address of the token contract                  |
| `amount` | `uint256` | Amount of tokens to add to the user's balance |

### Workflow

1. **Authorization Check**: Validates that `msg.sender` is the authorized treasury contract, reverts with `SenderIsNotTreasury()` if unauthorized
2. **Balance Update**: Directly adds the specified `amount` to `balances[user][token]` mapping
3. **Immediate Effect**: Balance change takes effect immediately within the EVVM system

## removeAmountFromUser

**Function Type**: `external`  
**Function Signature**: `removeAmountFromUser(address,address,uint256)`

Removes tokens from a user's balance in the EVVM system. This function is used by the treasury for withdrawal operations and fee deductions.

### Parameters

| Field    | Type      | Description                                        |
| -------- | --------- | -------------------------------------------------- |
| `user`   | `address` | Address of the user to remove balance from        |
| `token`  | `address` | Address of the token contract                      |
| `amount` | `uint256` | Amount of tokens to remove from the user's balance |

### Workflow

1. **Authorization Check**: Validates that `msg.sender` is the authorized treasury contract, reverts with `SenderIsNotTreasury()` if unauthorized
2. **Balance Update**: Directly subtracts the specified `amount` from `balances[user][token]` mapping
3. **Underflow Risk**: No underflow protection - treasury must ensure sufficient balance exists (Solidity 0.8+ will revert on underflow)
4. **Immediate Effect**: Balance change takes effect immediately within the EVVM system

---

## Introduction to Staking Service


The Staking service is a sophisticated dual-contract ecosystem that forms the backbone of EVVM's decentralized validation and reward system. Comprising the **Staking Contract** for user operations and the **Estimator Contract** for mathematical reward calculations, this service enables users to stake MATE tokens, participate as network fishers, and receive time-weighted rewards based on their contribution to the ecosystem.

## Overview

The Staking ecosystem combines operational efficiency with mathematical precision through two specialized contracts:

- **Staking Contract**: Manages user staking operations, access tiers, and administrative governance
- **Estimator Contract**: Calculates epoch-based rewards using time-weighted algorithms for fair distribution

Together, they provide a comprehensive staking mechanism with multiple access tiers, time-locked governance, mathematical reward precision, and integrated security systems that serve as the foundation for EVVM's decentralized fisher validation network.

## Key Features

### Multi-Tier Staking System
- **Golden Staking**: Exclusive access for the golden fisher with synchronized EVVM nonces
- **Presale Staking**: Limited to 800 presale users with a maximum of 2 staking tokens each
- **Public Staking**: Open access for all users when enabled
- **Service Staking**: Three-phase process for smart contracts: prepare → pay → confirm, plus direct unstaking

### Security & Governance
- **EIP-191 Signature Verification**: All operations require cryptographic authorization
- **Nonce Management**: Prevents replay attacks with per-user nonce tracking
- **Time-Delayed Governance**: Administrative changes require 24-hour delay periods
- **Time-Locked Unstaking**: Full unstaking requires 21-day waiting period

### Economic Model
- **Fixed Token Price**: 1 staking token = 5,083 MATE tokens
- **Epoch-Based Rewards**: Time-weighted reward calculation ensuring fair distribution based on actual participation
- **Mathematical Precision**: Rewards calculated using sophisticated algorithms that account for staking duration and amount
- **Enhanced Rewards**: Stakers receive 2x rewards when validating transactions
- **Proportional Distribution**: Users receive rewards proportional to their time-weighted average staking contribution

## Integration Points

The Staking service integrates deeply with other EVVM components:

### Core Ecosystem Integration
- **EVVM Core Contract**: Handles payments, fisher registration, and transaction reward processing
- **Name Service**: Provides username-based staking operations and identity context
- **Signature Utils**: Validates all staking authorization signatures using EIP-191 standards

### Estimator Contract Integration
- **Reward Calculation**: Mathematical time-weighted algorithms for fair reward distribution
- **Epoch Management**: Automated epoch transitions and pool management
- **History Analysis**: Processes user staking history for accurate reward calculations
- **Administrative Coordination**: Synchronized governance between contracts

### Cross-Contract Communication
- **State Synchronization**: Real-time coordination between staking operations and reward calculations  
- **Data Consistency**: Ensures reward calculations match actual staking participation
- **Security Alignment**: Unified security model across both contracts

## Architecture Benefits

### Dual-Contract Excellence
- **Separation of Concerns**: Staking operations isolated from complex mathematical calculations
- **Specialized Optimization**: Each contract optimized for its specific responsibilities
- **Independent Security**: Separate access controls and validation mechanisms

### Service Integration Innovation
- **Atomic Service Staking**: Three-phase prepare/pay/confirm process ensures transaction atomicity
- **Contract Account Support**: Native support for smart contract staking with specialized access controls
- **Payment Verification**: Strict validation of Principal Token transfers for service operations
- **Simplified Unstaking**: Direct unstaking process for services without signature requirements

### Mathematical Precision
- **Time-Weighted Algorithms**: Fair reward distribution based on actual staking participation over time
- **Epoch-Based Processing**: Systematic reward calculations with clear temporal boundaries
- **Proportional Accuracy**: Precise calculations ensuring rewards match contribution levels

### Operational Efficiency
- **Unified Processing**: Single `stakingBaseProcess` handles both user and service operations
- **AccountMetadata Architecture**: Clean differentiation between user and service accounts
- **Optimized Flows**: Streamlined processing paths for different account types
- **Security**: Multiple validation layers, time-lock mechanisms, and administrative safeguards

### Integration Advantages
- **Ecosystem Harmony**: Seamless integration with all EVVM core components
- **Service-First Design**: Native support for DApps and services built on EVVM
- **Data Consistency**: Synchronized state management across operational and calculation layers
- **Future-Proof Design**: Architecture supports expansion and enhancement of reward mechanisms

---

## goldenStaking


**Function Type**: `external`  
**Function Signature**: `goldenStaking(bool,uint256,bytes)`  
**Function Selector**: `0x475c31ff`

The `goldenStaking` function provides administrative control over staking operations. It is exclusively accessible to the `goldenFisher` address, allowing privileged execution of stake/unstake actions that bypass standard verification requirements. This function automatically uses the golden fisher's synchronized EVVM nonce for transactions.

## Parameters

| Parameter         | Type    | Description                               |
| ----------------- | ------- | ----------------------------------------- |
| `isStaking`       | bool    | `true` = Stake, `false` = Unstake         |
| `amountOfStaking` | uint256 | Amount of staking tokens to stake/unstake |
| `signature_EVVM`  | bytes   | EVVM authorization signature              |

:::note
The EVVM payment signature (`signature_EVVM`) follows the [Single Payment Signature Structure](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
:::

## Workflow

### Staking Process

1. **Authorization Validation**: Verifies caller is the designated `goldenFisher` address
2. **Process Execution**: Calls internal `stakingBaseProcess` with:
   - Golden fisher address as both payer and staker
   - Automatic synchronous EVVM nonce retrieval
   - No priority fees (set to 0)
   - Standard staking processing flow

:::info

For detailed information about the `stakingBaseProcess` implementation, refer to the [stakingBaseProcess](../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

![goldenStaking Staking Flow - Happy Path](./img/01goldenStaking/goldenStaking_Staking_HappyPath.svg)
![goldenStaking Staking Flow - Failed Path](./img/01goldenStaking/goldenStaking_Staking_FailedPath.svg)

### Unstaking Process

1. **Authorization Validation**: Verifies caller is the designated `goldenFisher` address
2. **Process Execution**: Calls internal `stakingBaseProcess` with:
   - Golden fisher address as both payer and staker
   - Automatic synchronous EVVM nonce retrieval
   - No priority fees (set to 0)
   - Standard unstaking processing flow

:::info

For detailed information about the `stakingBaseProcess` implementation, refer to the [stakingBaseProcess](../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

![goldenStaking Unstaking Flow - Happy Path](./img/01goldenStaking/goldenStaking_Unstaking_HappyPath.svg)
![goldenStaking Unstaking Flow - Failed Path](./img/01goldenStaking/goldenStaking_Unstaking_FailedPath.svg)

---

## presaleStaking


**Function Type**: `external`  
**Function Signature**: `presaleStaking(address,bool,uint256,bytes,uint256,uint256,bool,bytes)` 

The `presaleStaking` function enables presale participants to stake or unstake their MATE tokens under specific restrictions. This function ensures exclusive access for qualifying presale users while enforcing operational limits.

## Restrictions

- Fixed amount of 1 staking token per operation
- Maximum allocation of 2 staking tokens per user
- Requires active `allowPresaleStaking` flag
- Not available when `allowPublicStaking` flag is active (presale users must use `publicStaking` instead)

:::info

For all EVVM testnets `allowPublicStaking.flag` is enabled by default, all users should use the `publicStaking` function for staking and unstaking operations.

:::

## Parameters

| Parameter           | Type    | Description                                          |
| ------------------- | ------- | ---------------------------------------------------- |
| `user`              | address | Presale participant's wallet address                 |
| `isStaking`         | bool    | `true` = Stake, `false` = Unstake                    |
| `nonce`             | uint256 | Staking contract nonce for replay protection         |
| `signature`         | bytes   | User authorization signature                         |
| `priorityFee_EVVM`  | uint256 | EVVM priority fee                                    |
| `nonce_EVVM`        | uint256 | EVVM payment operation nonce                         |
| `priorityFlag_EVVM` | bool    | EVVM execution mode (`true` = async, `false` = sync) |
| `signature_EVVM`    | bytes   | EVVM payment authorization                           |

:::note

- If you want to know more about the signature structure, refer to the [Standard Staking/Unstaking Signature Structure](../../../09-SignatureStructures/03-Staking/01-StandardStakingStructure.md).
- The EVVM payment signature (`signature_EVVM`) follows the [Single Payment Signature Structure](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
  :::

## Workflow

The function supports two execution paths:

- **Fisher-Mediated**: A designated fisher captures the transaction from the fishing spot and submits it to the contract
- **Direct User Submission**: The user directly submits the transaction to the contract

## Staking Process

1. **Signature Verification**: Validates the authenticity of the user signature
2. **Nonce Validation**: Confirms the contract nonce is valid and unused
3. **Presale Claims Processing**: Calls `presaleClaims()` to verify presale participation and enforce 2-token limit
4. **Presale Staking Status**: Verifies `allowPresaleStaking.flag` is enabled
5. **Process Execution**: Calls the internal `stakingBaseProcess` function with:
   - User address and IsAService=false in AccountMetadata
   - Fixed amount of 1 staking token
   - Standard EVVM payment processing
   - Historical record updates and reward distribution
6. **Nonce Update**: Marks the staking nonce as used to prevent replay attacks

:::info

For detailed information about the `stakingBaseProcess` function, refer to the [stakingBaseProcess](../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

![presaleStaking Staking Process - Happy Path](./img/02presaleStaking/presaleStaking_Staking_HappyPath.svg)
![presaleStaking Staking Process - Failed Path](./img/02presaleStaking/presaleStaking_Staking_FailedPath.svg)

## Unstaking Process

1. **Signature Verification**: Validates the authenticity of the user signature
2. **Nonce Validation**: Confirms the contract nonce is valid and unused
3. **Presale Claims Processing**: Calls `presaleClaims()` to verify presale participation and validate unstaking eligibility
4. **Presale Staking Status**: Verifies `allowPresaleStaking.flag` is enabled
5. **Process Execution**: Calls the internal `stakingBaseProcess` function with:
   - User address and IsAService=false in AccountMetadata
   - Fixed amount of 1 staking token
   - Standard EVVM payment processing
   - Historical record updates and reward distribution
6. **Nonce Update**: Marks the staking nonce as used to prevent replay attacks

:::info

For detailed information about the `stakingBaseProcess` function, refer to the [stakingBaseProcess](../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

![presaleStaking Unstaking Process - Happy Path](./img/02presaleStaking/presaleStaking_Unstaking_HappyPath.svg)
![presaleStaking Unstaking Process - Failed Path](./img/02presaleStaking/presaleStaking_Unstaking_FailedPath.svg)

---

## publicStaking


**Function Type**: `external`  
**Function Signature**: `publicStaking(address,bool,uint256,uint256,bytes,uint256,uint256,bool,bytes)`  
**Function Selector**: `0x21cc1749`

The `publicStaking` function enables universal access to MATE token staking when the `allowPublicStaking.flag` is enabled, regardless of presale participation status or account type.

:::info

For all EVVM testnets `allowPublicStaking.flag` is enabled by default.

:::

## Parameters

| Parameter           | Type    | Description                                          |
| ------------------- | ------- | ---------------------------------------------------- |
| `user`              | address | User address                                         |
| `isStaking`         | bool    | `true` = Stake, `false` = Unstake                    |
| `amountOfStaking`   | uint256 | Amount of staking tokens to stake/unstake            |
| `nonce`             | uint256 | Staking contract nonce for replay protection         |
| `signature`         | bytes   | Staking contract signature for replay protection     |
| `priorityFee_EVVM`  | uint256 | EVVM priority fee                                    |
| `nonce_EVVM`        | uint256 | EVVM payment operation nonce                         |
| `priorityFlag_EVVM` | bool    | EVVM execution mode (`true` = async, `false` = sync) |
| `signature_EVVM`    | bytes   | EVVM payment authorization                           |

:::note

- If you want to know more about the signature structure, refer to the [Standard Staking/Unstaking Signature Structure](../../../09-SignatureStructures/03-Staking/01-StandardStakingStructure.md).
- The EVVM payment signature (`signature_EVVM`) follows the [Single Payment Signature Structure](../../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
  :::

## Workflow

The function supports two execution paths:

- **Fisher-Mediated**: A designated fisher captures the transaction from the fishing spot and submits it to the contract
- **Direct User Submission**: The user directly submits the transaction to the contract

## Staking Process

1. **Feature Status Verification**: Confirms `allowPublicStaking.flag` is enabled
2. **Signature Verification**: Validates the authenticity of the user signature
3. **Nonce Validation**: Confirms the contract nonce is valid and unused
4. **Process Execution**: Calls the internal `stakingBaseProcess` function with:
   - User address and IsAService=false in AccountMetadata
   - Specified amount of staking tokens
   - Standard EVVM payment processing
   - Historical record updates and reward distribution
5. **Nonce Update**: Marks the staking nonce as used to prevent replay attacks

:::info

For detailed information about the `stakingBaseProcess` function, refer to the [stakingBaseProcess](../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

![publicStaking Staking Staking Flow - Happy Path](./img/03publicStaking/publicStaking_Staking_HappyPath.svg)
![publicStaking Staking Flow - Failed Path](./img/03publicStaking/publicStaking_Staking_FailedPath.svg)

## Unstaking Process

1. **Feature Status Verification**: Confirms `allowPublicStaking.flag` is enabled  
2. **Signature Verification**: Validates the authenticity of the user signature
3. **Nonce Validation**: Confirms the contract nonce is valid and unused
4. **Process Execution**: Calls the internal `stakingBaseProcess` function with:
   - User address and IsAService=false in AccountMetadata
   - Specified amount of staking tokens
   - Standard EVVM payment processing
   - Historical record updates and reward distribution
5. **Nonce Update**: Marks the staking nonce as used to prevent replay attacks

:::info

For detailed information about the `stakingBaseProcess` function, refer to the [stakingBaseProcess](../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

![publicStaking Unstaking Flow - Happy Path](./img/03publicStaking/publicStaking_Unstaking_HappyPath.svg)
![publicStaking Unstaking Flow - Failed Path](./img/03publicStaking/publicStaking_Unstaking_FailedPath.svg)

---

## Service Staking Introduction


The EVVM Staking system provides native support for smart contracts (services) to participate in staking operations. Service staking is designed with enhanced security and atomicity requirements to prevent token loss while enabling Services to become network fishers.

## Overview

Service staking operates differently from user staking due to the nature of smart contracts:

- **Contract-Only Access**: Only smart contracts can use service staking functions (enforced by `onlyCA` modifier)
- **Atomic Operations**: Staking requires a three-phase atomic process to ensure transaction safety
- **Simplified Unstaking**: Direct unstaking without signatures or complex payment processing
- **Same Time Locks**: Subject to identical cooldown periods as user staking

## Three-Phase Service Staking Process

Service staking requires three sequential steps that MUST occur in the same transaction:

### Step 1: prepareServiceStaking
- **Function**: `prepareServiceStaking(uint256 amountOfStaking)`
- **Purpose**: Records pre-staking state and metadata
- **Process**: Stores service address, timestamp, intended amount, and balance snapshots
- **Access**: Contract accounts only (`onlyCA`)

### Step 2: EVVM Payment
- **Function**: `EVVM.caPay(address, address, uint256)`
- **Purpose**: Transfers Principal Tokens to staking contract
- **Amount**: `amountOfStaking * PRICE_OF_STAKING` Principal Tokens
- **Target**: Staking contract address

### Step 3: confirmServiceStaking
- **Function**: `confirmServiceStaking()`
- **Purpose**: Validates payment and completes staking
- **Validation**: Confirms exact payment amounts and same-transaction execution
- **Completion**: Calls `stakingBaseProcess` to finalize staking

:::warning[Critical Transaction Requirements]

All three steps MUST occur in the same transaction. If any step is missed or fails:
- **Token Loss Risk**: Principal Tokens may become permanently locked in the staking contract
- **No Recovery Mechanism**: There is no way to recover tokens from incomplete operations
- **Transaction Atomicity**: Use proper error handling to ensure all-or-nothing execution

:::

## Service Unstaking Process

Service unstaking is a simplified single-step process:

### Direct Unstaking
- **Function**: `serviceUnstaking(uint256 amountOfStaking)`
- **Process**: Direct call to `stakingBaseProcess` with service parameters
- **Access**: Contract accounts only (`onlyCA`)
- **Payment**: Returns `amountOfStaking * PRICE_OF_STAKING` Principal Tokens
- **No Signatures**: Unlike user unstaking, no signature validation required

### Time Lock Restrictions
Service unstaking follows the same time lock rules as user unstaking:
- **Re-staking Cooldown**: Must wait after complete unstaking before staking again
- **Full Unstaking Cooldown**: 21-day wait period for withdrawing all staked tokens

## Key Differences from User Staking

| Aspect | User Staking | Service Staking |
|--------|-------------|-----------------|
| **Access Control** | Any address | Contract accounts only (`onlyCA`) |
| **Staking Process** | Single function call with signatures | Three-phase atomic process |
| **Payment Method** | EVVM `pay()` with signatures | Direct `caPay()` transfer |
| **Unstaking** | Signature + nonce validation | Direct function call |
| **Time Locks** | Same cooldown periods | Same cooldown periods |
| **Rewards** | Standard reward distribution | Standard reward distribution |

## Integration Methods

### Method 1: Manual Three-Phase Process

Directly implement the three-step process in your service contract:

```solidity
contract MyService {
    address immutable STAKING_CONTRACT;
    address immutable EVVM_CONTRACT;
    
    function stakeTokens(uint256 amount) external {
        // Step 1: Prepare
        Staking(STAKING_CONTRACT).prepareServiceStaking(amount);
        
        // Step 2: Pay
        uint256 cost = amount * Staking(STAKING_CONTRACT).priceOfStaking();
        Evvm(EVVM_CONTRACT).caPay(
            STAKING_CONTRACT, 
            0x0000000000000000000000000000000000000001, // PRINCIPAL_TOKEN_ADDRESS
            cost
        );
        
        // Step 3: Confirm
        Staking(STAKING_CONTRACT).confirmServiceStaking();
    }
    
    function unstakeTokens(uint256 amount) external {
        Staking(STAKING_CONTRACT).serviceUnstaking(amount);
    }
}
```

### Method 2: StakingServiceHooks Library (Recommended)

Use the helper library available at `@evvm/testnet-contracts/library/StakingServiceHooks.sol` for simplified, atomic operations:

```solidity

contract MyService is StakingServiceHooks {
    constructor(address stakingAddress) StakingServiceHooks(stakingAddress) {
        // StakingServiceHooks automatically:
        // - Sets stakingHookAddress = stakingAddress
        // - Retrieves and sets evvmHookAddress from staking contract
    }
    
    function stakeTokens(uint256 amount) external {
        // Atomic operation that handles all 3 steps automatically:
        // 1. prepareServiceStaking(amount)
        // 2. caPay(stakingContract, PRINCIPAL_TOKEN_ADDRESS, cost)
        // 3. confirmServiceStaking()
        _makeStakeService(amount);
    }
    
    function unstakeTokens(uint256 amount) external {
        // Direct wrapper for serviceUnstaking
        _makeUnstakeService(amount);
    }
    
    // Optional: Update staking contract address
    function updateStakingContract(address newStakingAddress) external onlyOwner {
        _changeStakingHookAddress(newStakingAddress);
    }
}
```

**Key StakingServiceHooks Features:**
- **Automatic Address Management**: Constructor sets both staking and EVVM addresses
- **Atomic Staking**: `makeStakeService()` prevents token loss through transaction atomicity  
- **Error Prevention**: Transaction reverts completely if any step fails
- **Simplified Integration**: No need to manage three separate contract calls
- **Address Updates**: Built-in functions to update contract addresses when needed

## StakingServiceHooks Library

The `StakingServiceHooks` is a helper abstract contract located at `@evvm/testnet-contracts/library/StakingServiceHooks.sol` that simplifies service staking integration by providing pre-built hooks for service contracts to safely interact with the EVVM staking system.

### Library Architecture

```solidity
abstract contract StakingServiceHooks {
    address stakingHookAddress;  // Staking contract address
    address evvmHookAddress;     // EVVM contract address
    
    constructor(address _stakingAddress) {
        stakingHookAddress = _stakingAddress;
        evvmHookAddress = Staking(_stakingAddress).getEvvmAddress();
    }
}
```

### Core Functions

#### makeStakeService(uint256 amountToStake)
- **Type**: `internal` function
- **Purpose**: Performs complete atomic staking operation
- **Process**: Executes all three staking steps in a single transaction:
  1. `Staking(stakingHookAddress).prepareServiceStaking(amountToStake)`
  2. `Evvm(evvmHookAddress).caPay(stakingContract, PRINCIPAL_TOKEN_ADDRESS, cost)`
  3. `Staking(stakingHookAddress).confirmServiceStaking()`
- **Safety**: Ensures atomicity - if any step fails, entire transaction reverts

#### makeUnstakeService(uint256 amountToUnstake)
- **Type**: `internal` function
- **Purpose**: Simplified unstaking wrapper
- **Process**: Direct call to `Staking(stakingHookAddress).serviceUnstaking(amountToUnstake)`
- **Returns**: `amountToUnstake * PRICE_OF_STAKING` Principal Tokens to the service

#### _changeStakingHookAddress(address newStakingAddress)
- **Type**: `internal` function
- **Purpose**: Updates both staking and EVVM contract addresses
- **Process**: Sets new staking address and automatically retrieves corresponding EVVM address
- **Use Case**: When staking contract is upgraded

#### changeEvvmHookAddress(address newEvvmAddress)
- **Type**: `internal` function  
- **Purpose**: Manually updates only the EVVM contract address
- **Use Case**: When EVVM contract is upgraded independently (rare)
- **Note**: Prefer using `_changeStakingHookAddress` for consistency

### Benefits of Using StakingServiceHooks

- **Token Loss Prevention**: Atomic operations ensure all-or-nothing execution
- **Simplified Integration**: Single inheritance provides all necessary functionality
- **Automatic Address Management**: Constructor and update functions handle contract addresses
- **Error Safety**: Complete transaction reversion prevents partial state updates
- **Reduced Gas Costs**: Optimized for minimal gas usage in atomic operations

## Validation and Error Handling

### Common Validation Errors

| Function | Error | Condition |
|----------|-------|-----------|
| `prepareServiceStaking` | `AddressIsNotAService()` | Called by EOA instead of contract |
| `confirmServiceStaking` | `ServiceDoesNotStakeInSameTx()` | Not called in same transaction as prepare |
| `confirmServiceStaking` | `ServiceDoesNotFulfillCorrectStakingAmount()` | Incorrect payment amount |
| `confirmServiceStaking` | `AddressMismatch()` | Different caller than prepare step |
| `serviceUnstaking` | `AddressMustWaitToFullUnstake()` | Full unstaking cooldown not met |

### Balance Requirements

Before staking, ensure the service contract has sufficient Principal Token balance:
```solidity
uint256 requiredBalance = amountToStake * stakingContract.priceOfStaking();
require(evvmContract.getBalance(address(this), PRINCIPAL_TOKEN_ADDRESS) >= requiredBalance, "Insufficient balance");
```

## Security Considerations

### Critical Safety Requirements

1. **Transaction Atomicity**: Never split the three-phase staking process across multiple transactions
2. **Balance Verification**: Always check Principal Token balance before initiating staking
3. **Error Handling**: Implement comprehensive error handling for all staking operations
4. **Access Control**: Restrict staking functions to authorized addresses within your service

### Time Lock Management

Service contracts must respect the same time lock restrictions as user staking:
- **Re-staking Cooldown**: Configurable wait period after complete unstaking
- **Full Unstaking Cooldown**: Default 21-day wait period for withdrawing all tokens
- **Balance Monitoring**: Track when cooldown periods will expire

## Best Practices

1. **Prefer StakingServiceHooks**: Use the helper library for most implementations
2. **Implement Balance Checks**: Verify sufficient funds before attempting staking operations
3. **Use Try-Catch Patterns**: Handle staking failures gracefully with proper error recovery
4. **Monitor Cooldowns**: Track time lock periods and notify users of waiting requirements
5. **Test Edge Cases**: Thoroughly test scenarios including insufficient balances and cooldown periods

The service staking system provides secure functionality for smart contracts to participate in the EVVM network while preventing common integration pitfalls that could result in token loss.

---

## prepareServiceStaking


**Function Type**: `external`  
**Function Signature**: `prepareServiceStaking(uint256)`  
**Access Control**: `onlyCA` (Contract Accounts Only)

The `prepareServiceStaking` function is the first step in the service staking process. It records the pre-staking state and prepares the necessary metadata for validation. This function must be followed by payment via `EVVM.caPay()` and completion via `confirmServiceStaking()` in the same transaction.

:::warning[Critical Transaction Requirements]

All three steps MUST occur in the same transaction:
1. Call `prepareServiceStaking(amount)` - Records balances and metadata
2. Use `EVVM.caPay()` to transfer Principal Tokens to the staking contract  
3. Call `confirmServiceStaking()` - Validates payment and completes staking

**CRITICAL WARNING**: If the process is not completed properly (especially if caPay is called but confirmServiceStaking is not), the Principal Tokens will remain locked in the staking contract with no way to recover them. The service will lose the tokens permanently.

:::

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `amountOfStaking` | uint256 | Amount of staking tokens the service intends to stake |

## Workflow

### Preparation Process

1. **Access Control**: Verifies caller is a contract account using `onlyCA` modifier
2. **Metadata Recording**: Stores critical pre-staking information:
   - Service address (`msg.sender`)
   - Current timestamp
   - Intended staking amount
   - Service's Principal Token balance before staking
   - Staking contract's Principal Token balance before staking

### State Changes

The function populates the `serviceStakingData` struct with:

```solidity
struct ServiceStakingMetadata {
    address service;                      // Service contract address
    uint256 timestamp;                    // Block timestamp when prepare was called
    uint256 amountOfStaking;             // Intended staking amount
    uint256 amountServiceBeforeStaking;  // Service balance before staking
    uint256 amountStakingBeforeStaking;  // Contract balance before staking
}
```

## Integration Requirements

### Following Steps Required

After calling `prepareServiceStaking()`, the service must:

1. **Make Payment**: Use `EVVM.caPay()` to transfer `amountOfStaking * PRICE_OF_STAKING` Principal Tokens to the staking contract
2. **Confirm Staking**: Call `confirmServiceStaking()` to validate payment and complete the staking process

### Access Control

- **Only Contract Accounts**: Function restricted to smart contracts via `onlyCA` modifier
- **Same Transaction**: All steps must occur in a single transaction
- **Balance Validation**: Subsequent confirmation validates exact payment amounts

## Example Usage

```solidity
// Step 1: Prepare staking for 5 tokens
stakingContract.prepareServiceStaking(5);

// Step 2: Transfer required Principal Tokens  
uint256 cost = 5 * stakingContract.priceOfStaking();
evvmContract.caPay(address(stakingContract), PRINCIPAL_TOKEN_ADDRESS, cost);

// Step 3: Confirm and complete staking
stakingContract.confirmServiceStaking();
```

:::info

This function only records metadata and does not perform any token transfers. The actual payment and staking completion occurs in the subsequent steps.

:::

:::danger[Token Loss Warning]

Failure to complete all three steps in the same transaction will result in permanent loss of Principal Tokens. Always ensure proper transaction atomicity when implementing service staking.

:::

---

## confirmServiceStaking


**Function Type**: `external`  
**Access Control**: `onlyCA` (Contract Accounts Only)

The `confirmServiceStaking` function is the final step in the service staking process. It validates that payment was made correctly and completes the staking operation. This function must be called in the same transaction as `prepareServiceStaking()` and the EVVM payment.

## Parameters

None - The function uses data stored during `prepareServiceStaking()`.

## Workflow

### Validation Process

1. **Payment Verification**: Validates that the correct amount of Principal Tokens was transferred:
   - Service balance decreased by exactly `amountOfStaking * PRICE_OF_STAKING`
   - Staking contract balance increased by exactly `amountOfStaking * PRICE_OF_STAKING`

2. **Transaction Timing**: Confirms operation occurs in the same transaction as `prepareServiceStaking`:
   - Compares current `block.timestamp` with stored timestamp
   - Reverts with `ServiceDoesNotStakeInSameTx()` if timestamps differ

3. **Service Authentication**: Ensures caller matches the service that initiated preparation:
   - Compares `msg.sender` with stored service address
   - Reverts with `AddressMismatch()` if addresses don't match

### Completion Process

4. **Staking Execution**: Calls `stakingBaseProcess` with:
   - Service address and IsAService=true in AccountMetadata
   - Staking operation (isStaking=true)
   - Prepared staking amount
   - Zero values for EVVM parameters (no additional payment needed)

## Validation Errors

The function performs strict validation and reverts with specific errors:

| Error | Condition | Description |
|-------|-----------|-------------|
| `ServiceDoesNotFulfillCorrectStakingAmount()` | Incorrect payment amount | Service didn't transfer exactly the required amount |
| `ServiceDoesNotStakeInSameTx()` | Different timestamp | Function not called in same transaction as preparation |
| `AddressMismatch()` | Wrong caller | Caller doesn't match the service that prepared staking |

## Balance Calculations

The function calculates required payment as:
```solidity
uint256 totalStakingRequired = PRICE_OF_STAKING * serviceStakingData.amountOfStaking;
```

And validates:
```solidity
// Service balance must decrease by exact amount
serviceBalanceBefore - totalStakingRequired == serviceBalanceAfter

// Contract balance must increase by exact amount  
contractBalanceBefore + totalStakingRequired == contractBalanceAfter
```

## State Changes

Upon successful validation:

1. **Staker Status**: Service receives staker status via `Evvm(EVVM_ADDRESS).pointStaker(address, 0x01)`
2. **History Update**: Transaction recorded in service's staking history
3. **Metadata Cleared**: Service staking metadata is implicitly cleared for next operation

## Integration Points

### With stakingBaseProcess
- Calls core staking logic with service-specific parameters
- IsAService=true flag indicates contract account staking
- No additional EVVM payments required (already completed)

### With EVVM Contract
- Validates balance changes through EVVM balance queries
- Coordinates with EVVM for staker status assignment

## Example Complete Flow

```solidity
// Complete service staking in one transaction
function stakeAsService(uint256 amount) external {
    // Step 1: Prepare
    stakingContract.prepareServiceStaking(amount);
    
    // Step 2: Pay
    uint256 cost = amount * stakingContract.priceOfStaking();
    evvmContract.caPay(address(stakingContract), PRINCIPAL_TOKEN_ADDRESS, cost);
    
    // Step 3: Confirm (this function)
    stakingContract.confirmServiceStaking();
}
```

:::info

For detailed information about the core staking logic, refer to the [stakingBaseProcess](../../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

:::warning

This function must be called immediately after payment via `EVVM.caPay()` in the same transaction. Any delay or separate transaction will cause validation failures.

:::

---

## serviceUnstaking


**Function Type**: `external`  
**Function Signature**: `serviceUnstaking(uint256)`  
**Access Control**: `onlyCA` (Contract Accounts Only)

The `serviceUnstaking` function allows smart contracts (services) to unstake their staking tokens directly. This is a simplified unstaking process for services that doesn't require signatures or complex payment processing.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `amountOfStaking` | uint256 | Amount of staking tokens to unstake |

## Workflow

### Unstaking Process

1. **Access Control**: Verifies caller is a contract account using `onlyCA` modifier
2. **Direct Processing**: Calls `stakingBaseProcess` with service-specific parameters:
   - Service address and IsAService=true in AccountMetadata
   - Unstaking operation (isStaking=false) 
   - Specified unstaking amount
   - Zero values for all EVVM parameters

### Service Advantages

Unlike user unstaking, service unstaking:
- **No Signatures Required**: Services don't need to provide authorization signatures
- **No Priority Fees**: No additional payment processing needed
- **Simplified Flow**: Direct call to core staking logic
- **Contract-Only**: Restricted to smart contract accounts for security

## Token Return Process

When unstaking is successful:

1. **Token Calculation**: Returns `amountOfStaking * PRICE_OF_STAKING` Principal Tokens
2. **Direct Transfer**: Tokens transferred directly to the service address via `makeCaPay()`
3. **Status Update**: If full unstaking, removes staker status via EVVM contract
4. **History Recording**: Updates service's staking history with unstaking transaction

## Time Lock Restrictions

Service unstaking is subject to the same time lock restrictions as user unstaking:

### Re-staking Cooldown
- Must wait after complete unstaking before staking again
- Controlled by `secondsToUnlockStaking.actual`

### Full Unstaking Cooldown  
- Must wait the full period (default 21 days) for complete unstaking
- Controlled by `secondsToUnlockFullUnstaking.actual`
- Applies when unstaking all remaining tokens

## Error Conditions

The function may revert with:

| Error | Condition |
|-------|-----------|
| `AddressIsNotAService()` | Caller is not a contract account (EOA attempted access) |
| `AddressMustWaitToFullUnstake()` | Full unstaking cooldown period not met |
| `InsufficientStakingBalance()` | Attempting to unstake more than available |

## Integration Points

### With stakingBaseProcess
- Uses core unstaking logic with service-specific configuration
- IsAService=true enables service-specific processing paths
- Simplified parameter set (no signatures or payments)

### With EVVM Contract
- Token returns processed through EVVM's `caPay()` function
- Staker status updates coordinated with EVVM contract
- Balance queries for validation

## Example Usage

```solidity
// Service unstaking 3 tokens
contract MyService {
    function unstakeTokens() external {
        // Unstake 3 staking tokens
        stakingContract.serviceUnstaking(3);
        
        // Service will receive: 3 * PRICE_OF_STAKING Principal Tokens
        // Tokens appear in service's EVVM balance
    }
    
    function unstakeAll() external {
        // Check current staked amount
        uint256 stakedAmount = stakingContract.getUserAmountStaked(address(this));
        
        // Unstake everything (subject to full unstaking cooldown)
        stakingContract.serviceUnstaking(stakedAmount);
    }
}
```

## Comparison with User Unstaking

| Aspect | Service Unstaking | User Unstaking |
|--------|------------------|----------------|
| **Access Control** | Contract accounts only | Any address |
| **Signatures** | None required | EIP-191 signature required |
| **Payment Processing** | None | Optional priority fees |
| **Nonce Management** | None | Nonce validation required |
| **Time Locks** | Same restrictions | Same restrictions |

:::info

For detailed information about the core unstaking logic and time lock calculations, refer to the [stakingBaseProcess](../../02-InternalStakingFunctions/04-stakingBaseProcess.md).

:::

:::tip

Services can check their current staked amount using `getUserAmountStaked(address(this))` before calling this function to ensure they don't attempt to unstake more than available.

:::

---

## presaleClaims


**Function Type**: `internal`

The `presaleClaims` function manages presale staking limits and permissions by enforcing the 2 staking token limit for presale users and tracking their staking amounts. This function is called by `presaleStaking` to validate and update presale user constraints.

## Parameters

| Parameter    | Type    | Description                                                      |
| ------------ | ------- | ---------------------------------------------------------------- |
| `_isStaking` | bool    | `true` = Stake (increments count), `false` = Unstake (decrements count) |
| `_user`      | address | Address of the presale user                                      |

## Workflow

The function handles two operation types with different validation flows:

- **Staking Operations**: Validates limits and increments staking counter
- **Unstaking Operations**: Validates existing stakes and decrements counter

## Staking Process

1. **Public Staking Status Check**: Verifies `allowPublicStaking.flag` is disabled, reverts with `PresaleStakingDisabled()` if public staking is active (presale staking is only valid when public staking is not active)
2. **Presale Participant Verification**: Confirms the user is registered as a presale participant using `userPresaleStaker[_user].isAllow`, reverts with `UserIsNotPresaleStaker()` if not authorized
3. **Limit Check**: Ensures `userPresaleStaker[_user].stakingAmount < 2`, reverts with `UserPresaleStakerLimitExceeded()` if limit reached
4. **Counter Increment**: Increments `userPresaleStaker[_user].stakingAmount++`

![presaleClaims Staking Process - Happy Path](./img/01presaleClaims/presaleClaims_Staking_HappyPath.svg)
![presaleClaims Staking Process - Failed Path](./img/01presaleClaims/presaleClaims_Staking_FailedPath.svg)

## Unstaking Process

1. **Public Staking Status Check**: Verifies `allowPublicStaking.flag` is disabled, reverts with `PresaleStakingDisabled()` if public staking is active (presale staking is only valid when public staking is not active)
2. **Presale Participant Verification**: Confirms the user is registered as a presale participant using `userPresaleStaker[_user].isAllow`, reverts with `UserIsNotPresaleStaker()` if not authorized
3. **Balance Check**: Ensures `userPresaleStaker[_user].stakingAmount > 0`, reverts with `UserPresaleStakerLimitExceeded()` if no stakes to unstake
4. **Counter Decrement**: Decrements `userPresaleStaker[_user].stakingAmount--`

![presaleClaims Unstaking Process - Happy Path](./img/01presaleClaims/presaleClaims_Unstaking_HappyPath.svg)
![presaleClaims Unstaking Process - Failed Path](./img/01presaleClaims/presaleClaims_Unstaking_FailedPath.svg)

---

## stakingBaseProcess


**Function Type**: `internal`

The `stakingBaseProcess` function implements the core staking logic that handles both service and user staking operations. It processes payments, updates history, handles time locks, and manages EVVM integration for all staking types.

## Parameters

| Parameter           | Type            | Description                                                    |
| ------------------- | --------------- | -------------------------------------------------------------- |
| `account`           | AccountMetadata | Metadata of the account performing the staking operation       |
| `isStaking`         | bool            | `true` = Stake (requires payment), `false` = Unstake (provides refund) |
| `amountOfStaking`   | uint256         | Amount of staking tokens to stake/unstake                      |
| `priorityFee_EVVM`  | uint256         | Priority fee for EVVM transaction                              |
| `nonce_EVVM`        | uint256         | Nonce for EVVM contract transaction                            |
| `priorityFlag_EVVM` | bool            | `true` = async EVVM transaction, `false` = sync               |
| `signature_EVVM`    | bytes           | Signature for EVVM contract transaction                        |

### AccountMetadata Structure

The `account` parameter uses the following struct:

```solidity
struct AccountMetadata {
    address Address;     // Address of the account
    bool IsAService;     // Boolean indicating if the account is a smart contract (service) account
}
```

## Workflow

The function processes two distinct operation types with different validation and execution flows:

- **Staking Operations**: Payment processing, cooldown validation, and stake assignment
- **Unstaking Operations**: Conditional payments, token refunds, and stake removal

## Staking Process

1. **Re-Staking Cooldown Check**: Verifies `getTimeToUserUnlockStakingTime(account.Address) <= block.timestamp`, reverts with `AddressMustWaitToStakeAgain()` if cooldown period hasn't elapsed
2. **Payment Processing**: 
   - **For Users (!account.IsAService)**: Calls `makePay(account.Address, PRICE_OF_STAKING * amountOfStaking, priorityFee_EVVM, priorityFlag_EVVM, nonce_EVVM, signature_EVVM)`
   - **For Services (account.IsAService)**: Skips payment processing (already handled in preparation phase)
3. **Staker Status Assignment**: Sets `Evvm(EVVM_ADDRESS).pointStaker(account.Address, 0x01)` to mark as active staker
4. **Balance Calculation**: Calculates new total stake:
   - **First time staking**: `auxSMsteBalance = amountOfStaking`
   - **Additional staking**: `auxSMsteBalance = lastTotalStaked + amountOfStaking`
5. **History Update**: Pushes `HistoryMetadata` with transaction type `bytes32(uint256(1))`, amount, timestamp, and total staked
6. **Executor Rewards**: If `msg.sender` is a staker and `!account.IsAService`, pays `(getRewardAmount() * 2) + priorityFee_EVVM` via `makeCaPay()`

![stakingBaseProcess Staking Process - Happy Path](./img/04stakingBaseProcess/stakingBaseProcess_Staking_HappyPath.svg)
![stakingBaseProcess Staking Process - Failed Path](./img/04stakingBaseProcess/stakingBaseProcess_Staking_FailedPath.svg)

## Unstaking Process

1. **Full Unstaking Validation**: If `amountOfStaking == getUserAmountStaked(account.Address)` (complete unstaking):
   - **Cooldown Check**: Verifies `getTimeToUserUnlockFullUnstakingTime(account.Address) <= block.timestamp`, reverts with `AddressMustWaitToFullUnstake()` if cooldown not met
   - **Status Removal**: Sets `Evvm(EVVM_ADDRESS).pointStaker(account.Address, 0x00)` to remove staker status
2. **Optional Priority Payment**: If `priorityFee_EVVM != 0 && !account.IsAService` (user unstaking with priority fee):
   - **Priority Fee Payment**: Calls `makePay(account.Address, priorityFee_EVVM, 0, priorityFlag_EVVM, nonce_EVVM, signature_EVVM)`
3. **Balance Calculation**: `auxSMsteBalance = lastTotalStaked - amountOfStaking`
4. **Token Refund**: Calls `makeCaPay(PRINCIPAL_TOKEN_ADDRESS, account.Address, PRICE_OF_STAKING * amountOfStaking)` to return tokens
5. **History Update**: Pushes `HistoryMetadata` with transaction type `bytes32(uint256(2))`, amount, timestamp, and remaining total staked
6. **Executor Rewards**: If `msg.sender` is a staker and `!account.IsAService`, pays `(getRewardAmount() * 2) + priorityFee_EVVM` via `makeCaPay()`

![stakingBaseProcess Unstaking Process - Happy Path](./img/04stakingBaseProcess/stakingBaseProcess_Unstaking_HappyPath.svg)
![stakingBaseProcess Unstaking Process - Failed Path](./img/04stakingBaseProcess/stakingBaseProcess_Unstaking_FailedPath.svg)

:::info

For detailed information about the helper functions, refer to:
- [makePay](../05-makePay.md) - Handles EVVM payment processing
- [makeCaPay](../04-makeCaPay.md) - Handles token distributions
- [Getter Functions](../06-Getters.md) - Time lock and balance functions

:::

---

## Administrative Functions(02-StakingContract)


This section details all administrative functions in the contract, which implement a secure time-delayed governance system to ensure safe management of critical contract parameters and roles.

:::info Time-Delayed Governance
All administrative changes follow a secure two-step process with a mandatory 24-hour waiting period to prevent immediate modifications to critical parameters.
:::

---

## Presale Staker Management

### addPresaleStaker

**Function Type**: `external`  
**Function Signature**: `addPresaleStaker(address)`  

Allows the admin to add a single new presale staker to the contract.

#### Parameters

| Parameter | Type    | Description                       |
| --------- | ------- | --------------------------------- |
| `_staker` | address | Address of the new presale staker |

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges using `onlyOwner` modifier
2. **Limit Validation**: Ensures adding this staker won't exceed the 800 staker limit (`LIMIT_PRESALE_STAKER`)
3. **Staker Registration**: Sets `userPresaleStaker[_staker].isAllow = true`
4. **Counter Update**: Increments `presaleStakerCount`

---

### addPresaleStakers

**Function Type**: `external`  
**Function Signature**: `addPresaleStakers(address[])`  

Allows the admin to add multiple presale stakers in a single transaction for efficient batch processing.

#### Parameters

| Parameter  | Type      | Description                               |
| ---------- | --------- | ----------------------------------------- |
| `_stakers` | address[] | Array of addresses of new presale stakers |

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges using `onlyOwner` modifier
2. **Batch Processing**: Iterates through the array of staker addresses
3. **Individual Limit Check**: For each address, verifies the 800 staker limit (`LIMIT_PRESALE_STAKER`)
4. **Staker Registration**: Sets `userPresaleStaker[_stakers[i]].isAllow = true` for each valid address
5. **Counter Update**: Increments `presaleStakerCount` for each successfully added staker

---

## Admin Role Management

### proposeAdmin

**Function Type**: `external`  
**Function Signature**: `proposeAdmin(address)`  

Initiates the admin role transfer process by proposing a new admin address.

#### Parameters

| Parameter   | Type    | Description                       |
| ----------- | ------- | --------------------------------- |
| `_newAdmin` | address | Address of the proposed new admin |

#### Workflow

1. **Admin Verification**: Validates caller has current admin privileges
2. **Proposal Setup**: Sets `admin.proposal = _newAdmin`
3. **Time Lock Activation**: Sets `admin.timeToAccept = block.timestamp + 1 days`

---

### rejectProposalAdmin

**Function Type**: `external`  
**Function Signature**: `rejectProposalAdmin()`  

Allows the current admin to cancel a pending admin change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has current admin privileges
2. **Proposal Cancellation**: Resets `admin.proposal = address(0)`
3. **Time Lock Reset**: Resets `admin.timeToAccept = 0`

---

### acceptNewAdmin

**Function Type**: `external`  
**Function Signature**: `acceptNewAdmin()`  

Allows the proposed admin to accept the role after the mandatory waiting period.

#### Workflow

1. **Proposal Validation**: Verifies `msg.sender == admin.proposal`
2. **Time Lock Validation**: Confirms `admin.timeToAccept <= block.timestamp`
3. **Role Transfer**: Updates `admin.actual = admin.proposal`
4. **Cleanup**: Resets `admin.proposal = address(0)` and `admin.timeToAccept = 0`

---

## Golden Fisher Role Management

### proposeGoldenFisher

**Function Type**: `external`  
**Function Signature**: `proposeGoldenFisher(address)`  

Initiates the golden fisher role assignment process.

#### Parameters

| Parameter        | Type    | Description                               |
| ---------------- | ------- | ----------------------------------------- |
| `_goldenFisher` | address | Address of the proposed new golden fisher |

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Setup**: Sets `goldenFisher.proposal = _goldenFisher`
3. **Time Lock Activation**: Sets `goldenFisher.timeToAccept = block.timestamp + 1 days`

---

### rejectProposalGoldenFisher

**Function Type**: `external`  
**Function Signature**: `rejectProposalGoldenFisher()`  

Allows the current admin to cancel a pending golden fisher change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Cancellation**: Resets `goldenFisher.proposal = address(0)`
3. **Time Lock Reset**: Resets `goldenFisher.timeToAccept = 0`

---

### acceptNewGoldenFisher

**Function Type**: `external`  
**Function Signature**: `acceptNewGoldenFisher()`  

Allows the admin to confirm the new golden fisher role assignment after the waiting period.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Validation**: Confirms `goldenFisher.timeToAccept <= block.timestamp`
3. **Role Assignment**: Updates `goldenFisher.actual = goldenFisher.proposal`
4. **Cleanup**: Resets `goldenFisher.proposal = address(0)` and `goldenFisher.timeToAccept = 0`

---

## Staking Time Lock Configuration

### proposeSetSecondsToUnlockStaking

**Function Type**: `external`  
**Function Signature**: `proposeSetSecondsToUnlockStaking(uint256)`  

Initiates the process to change the re-staking cooldown period.

#### Parameters

| Parameter                 | Type    | Description                          |
| ------------------------- | ------- | ------------------------------------ |
| `_secondsToUnlockStaking` | uint256 | New staking unlock period in seconds |

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Setup**: Sets `secondsToUnlockStaking.proposal = _secondsToUnlockStaking`
3. **Time Lock Activation**: Sets `secondsToUnlockStaking.timeToAccept = block.timestamp + 1 days`

---

### rejectProposalSetSecondsToUnlockStaking

**Function Type**: `external`  
**Function Signature**: `rejectProposalSetSecondsToUnlockStaking()`  

Allows the current admin to cancel a pending staking unlock period change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Cancellation**: Resets `secondsToUnlockStaking.proposal = 0`
3. **Time Lock Reset**: Resets `secondsToUnlockStaking.timeToAccept = 0`

---

### acceptSetSecondsToUnlockStaking

**Function Type**: `external`  
**Function Signature**: `acceptSetSecondsToUnlockStaking()`  

Allows the admin to confirm the new staking unlock period after the waiting period.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Validation**: Confirms `secondsToUnlockStaking.timeToAccept <= block.timestamp`
3. **Configuration Update**: Updates `secondsToUnlockStaking.actual = secondsToUnlockStaking.proposal`
4. **Cleanup**: Resets `secondsToUnlockStaking.proposal = 0` and `secondsToUnlockStaking.timeToAccept = 0`

---

## Full Unstaking Time Lock Configuration

### prepareSetSecondsToUnlockFullUnstaking

**Function Type**: `external`  
**Function Signature**: `prepareSetSecondsToUnllockFullUnstaking(uint256)`  

Initiates the process to change the full unstaking cooldown period.

#### Parameters

| Parameter                         | Type    | Description                                 |
| --------------------------------- | ------- | ------------------------------------------- |
| `_secondsToUnllockFullUnstaking` | uint256 | New full unstaking unlock period in seconds |

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Setup**: Sets `secondsToUnllockFullUnstaking.proposal = _secondsToUnllockFullUnstaking`
3. **Time Lock Activation**: Sets `secondsToUnllockFullUnstaking.timeToAccept = block.timestamp + 1 days`

---

### cancelSetSecondsToUnlockFullUnstaking

**Function Type**: `external`  
**Function Signature**: `cancelSetSecondsToUnllockFullUnstaking()`  

Allows the current admin to cancel a pending full unstaking unlock period change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Cancellation**: Resets `secondsToUnllockFullUnstaking.proposal = 0`
3. **Time Lock Reset**: Resets `secondsToUnllockFullUnstaking.timeToAccept = 0`

---

### confirmSetSecondsToUnlockFullUnstaking

**Function Type**: `external`  
**Function Signature**: `confirmSetSecondsToUnllockFullUnstaking()`  

Allows the admin to confirm the new full unstaking unlock period after the waiting period.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Validation**: Confirms `secondsToUnllockFullUnstaking.timeToAccept <= block.timestamp`
3. **Configuration Update**: Updates `secondsToUnllockFullUnstaking.actual = secondsToUnllockFullUnstaking.proposal`
4. **Cleanup**: Resets `secondsToUnllockFullUnstaking.proposal = 0` and `secondsToUnllockFullUnstaking.timeToAccept = 0`

---

## Public Staking Flag Management

### prepareChangeAllowPublicStaking

**Function Type**: `external`  
**Function Signature**: `prepareChangeAllowPublicStaking()`  

Initiates the process to toggle the public staking availability flag.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Activation**: Sets `allowPublicStaking.timeToAccept = block.timestamp + 1 days`

---

### cancelChangeAllowPublicStaking

**Function Type**: `external`  
**Function Signature**: `cancelChangeAllowPublicStaking()`  

Allows the current admin to cancel a pending public staking flag change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Reset**: Resets `allowPublicStaking.timeToAccept = 0`

---

### confirmChangeAllowPublicStaking

**Function Type**: `external`  
**Function Signature**: `confirmChangeAllowPublicStaking()`  

Allows the admin to confirm the public staking flag toggle after the waiting period.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Validation**: Confirms `allowPublicStaking.timeToAccept <= block.timestamp`
3. **Flag Toggle**: Creates new `BoolTypeProposal` with `flag: !allowPublicStaking.flag`
4. **Cleanup**: Sets `timeToAccept: 0`

---

## Presale Staking Flag Management

### prepareChangeAllowPresaleStaking

**Function Type**: `external`  
**Function Signature**: `prepareChangeAllowPresaleStaking()`  

Initiates the process to toggle the presale staking availability flag.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Activation**: Sets `allowPresaleStaking.timeToAccept = block.timestamp + 1 days`

---

### cancelChangeAllowPresaleStaking

**Function Type**: `external`  
**Function Signature**: `cancelChangeAllowPresaleStaking()`  

Allows the current admin to cancel a pending presale staking flag change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Reset**: Resets `allowPresaleStaking.timeToAccept = 0`

---

### confirmChangeAllowPresaleStaking

**Function Type**: `external`  
**Function Signature**: `confirmChangeAllowPresaleStaking()`  

Allows the admin to confirm the presale staking flag toggle after the waiting period.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Validation**: Confirms `allowPresaleStaking.timeToAccept <= block.timestamp`
3. **Flag Toggle**: Creates new `BoolTypeProposal` with `flag: !allowPresaleStaking.flag`
4. **Cleanup**: Sets `timeToAccept: 0`

---

## Estimator Contract Management

### proposeEstimator

**Function Type**: `external`  
**Function Signature**: `proposeEstimator(address)`  

Initiates the process to change the estimator contract address.

#### Parameters

| Parameter    | Type    | Description                            |
| ------------ | ------- | -------------------------------------- |
| `_estimator` | address | Address of the proposed new estimator |

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Setup**: Sets `estimator.proposal = _estimator`
3. **Time Lock Activation**: Sets `estimator.timeToAccept = block.timestamp + 1 days`

---

### rejectProposalEstimator

**Function Type**: `external`  
**Function Signature**: `rejectProposalEstimator()`  

Allows the current admin to cancel a pending estimator change proposal.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Proposal Cancellation**: Resets `estimator.proposal = address(0)`
3. **Time Lock Reset**: Resets `estimator.timeToAccept = 0`

---

### acceptNewEstimator

**Function Type**: `external`  
**Function Signature**: `acceptNewEstimator()`  

Allows the admin to confirm the new estimator address after the waiting period.

#### Workflow

1. **Admin Verification**: Validates caller has admin privileges
2. **Time Lock Validation**: Confirms `estimator.timeToAccept <= block.timestamp`
3. **Contract Update**: Updates `estimator.actual = estimator.proposal`
4. **Cleanup**: Resets `estimator.proposal = address(0)` and `estimator.timeToAccept = 0`

---

## Data Structures

### AddressTypeProposal

```solidity
struct AddressTypeProposal {
    address actual;      // Current active address
    address proposal;    // Proposed new address
    uint256 timeToAccept; // Timestamp when proposal can be accepted
}
```

Used for managing: `admin`, `goldenFisher`, `estimator`

### UintTypeProposal

```solidity
struct UintTypeProposal {
    uint256 actual;      // Current active value
    uint256 proposal;    // Proposed new value
    uint256 timeToAccept; // Timestamp when proposal can be accepted
}
```

Used for managing: `secondsToUnlockStaking`, `secondsToUnllockFullUnstaking`

### BoolTypeProposal

```solidity
struct BoolTypeProposal {
    bool flag;           // Current boolean state
    uint256 timeToAccept; // Timestamp when flag change can be executed
}
```

Used for managing: `allowPresaleStaking`, `allowPublicStaking`

### presaleStakerMetadata

```solidity
struct presaleStakerMetadata {
    bool isAllow;        // Whether address can participate in presale staking
    uint256 stakingAmount; // Current staking tokens staked (max 2 for presale)
}
```

Used for tracking presale staker status and limits.

---

## makeCaPay


**Function Type**: `internal`

The `makeCaPay` function provides a streamlined interface for contract-to-contract payment operations through the EVVM contract's `caPay` function.

## Parameters

| Parameter      | Type    | Description                                     |
| -------------- | ------- | ----------------------------------------------- |
| `tokenAddress` | address | Address of the token contract to be transferred |
| `user`         | address | Recipient address for the payment               |
| `amount`       | uint256 | Amount of tokens to transfer                    |

## Workflow

1. **Direct Payment Execution**: Calls the EVVM contract's `caPay` function with the provided parameters in the order: user, tokenAddress, amount

## Description

This internal function serves as a simple wrapper around the EVVM contract's `caPay` function, providing a consistent interface for contract-to-contract token transfers. It is commonly used for:

- Priority fee distributions to transaction executors
- Reward distributions to stakers
- Token withdrawals during unstaking operations
- Service fee payments

:::info
This function uses the EVVM contract's direct payment mechanism, which does not require signatures since it's executed directly by the staking contract itself.
:::

---

## makePay


**Function Type**: `internal`

The `makePay` function facilitates payment processing through the EVVM contract, directing transactions to either synchronous or asynchronous processing paths based on specified parameters.

## Parameters

| Parameter      | Type    | Description                                          |
| -------------- | ------- | ---------------------------------------------------- |
| `user`         | address | User address for the payment transaction             |
| `amount`       | uint256 | Amount of tokens involved in the transaction         |
| `priorityFee`  | uint256 | EVVM priority fee for transaction processing         |
| `priorityFlag` | bool    | EVVM execution mode (`true` = async, `false` = sync) |
| `nonce`        | uint256 | EVVM payment operation nonce for replay protection   |
| `signature`    | bytes   | EVVM payment authorization signature                 |

## Workflow

1. **Payment Processing**: Uses the unified `pay` function for both synchronous and asynchronous processing
2. **Payment Execution**: Forwards parameters to the EVVM contract's `pay` function for payment processing and automatic staker detection
   - The `pay` function receives: user address, contract address, empty string, PRINCIPAL_TOKEN_ADDRESS, amount, priorityFee, nonce, priorityFlag, contract address, and signature

## Description

This internal function serves as a standardized interface for EVVM payment operations, utilizing the unified `pay` function which automatically handles staker detection and reward distribution. It simplifies the interface between the staking contract and the EVVM payment system.

:::note
The EVVM payment signature follows the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
:::

---

## Getter Functions(02-StakingContract)


This section details all available getter functions in the contract, providing comprehensive information about the contract's state and configuration.

---

## Contract State Retrieval Functions

### getAddressHistory

**Function Type**: `view`  
**Function Signature**: `getAddressHistory(address _account)`

Retrieves the complete transaction history for a specified user address.

#### Input Parameters

| Parameter  | Type    | Description                                   |
| ---------- | ------- | --------------------------------------------- |
| `_account` | address | Address of the user to retrieve history for   |

#### Return Value

Returns an array of `HistoryMetadata` structs containing the user's transaction history:

```solidity
struct HistoryMetadata {
    bytes32 transactionType;  // 0x01 for staking, 0x02 for unstaking
    uint256 amount;            // Amount of staking tokens staked/unstaked
    uint256 timestamp;         // Transaction timestamp
    uint256 totalStaked;       // User's total staked tokens after transaction
}
```

---

### getSizeOfAddressHistory

**Function Type**: `view`  
**Function Signature**: `getSizeOfAddressHistory(address _account)`

Returns the total number of transactions in a user's history.

#### Input Parameters

| Parameter  | Type    | Description                                          |
| ---------- | ------- | ---------------------------------------------------- |
| `_account` | address | Address of the user to query                         |

#### Return Value

| Type    | Description                                    |
| ------- | ---------------------------------------------- |
| uint256 | Number of transactions in user's history       |

---

### getAddressHistoryByIndex

**Function Type**: `view`  
**Function Signature**: `getAddressHistoryByIndex(address _account, uint256 _index)`

Retrieves a specific transaction from a user's history based on its index.

#### Input Parameters

| Parameter  | Type    | Description                                   |
| ---------- | ------- | --------------------------------------------- |
| `_account` | address | Address of the user to query                  |
| `_index`   | uint256 | Index of the transaction to retrieve          |

#### Return Value

Returns a single `HistoryMetadata` struct:

```solidity
struct HistoryMetadata {
    bytes32 transactionType;  // 0x01 for staking, 0x02 for unstaking
    uint256 amount;            // Amount of staking tokens staked/unstaked
    uint256 timestamp;         // Transaction timestamp
    uint256 totalStaked;       // User's total staked tokens after transaction
}
```

---

## Price and Token Functions

### priceOfStaking

**Function Type**: `view`  
**Function Signature**: `priceOfStaking()`

Calculates the current exchange rate between staking tokens and MATE tokens.

#### Return Value

| Type    | Description                             |
| ------- | --------------------------------------- |
| uint256 | Current exchange rate (staking tokens to MATE)   |

---

## User Time Lock Functions

### getTimeToUserUnlockFullUnstakingTime

**Function Type**: `view`  
**Function Signature**: `getTimeToUserUnlockFullUnstakingTime(address _account)`

Calculates when a user can perform full unstaking (withdraw all tokens) based on their transaction history. Full unstaking requires waiting after the last time their balance reached 0.

#### Input Parameters

| Parameter  | Type    | Description                                |
| ---------- | ------- | ------------------------------------------ |
| `_account` | address | Address of the user to query               |

#### Return Value

| Type    | Description                                         |
| ------- | --------------------------------------------------- |
| uint256 | Timestamp when user can perform full unstaking      |

#### Execution Flow

1. **Backward History Search**: Iterates through user's history from most recent to oldest transaction
2. **Zero Balance Detection**: Searches for the last transaction where `totalStaked == 0`
3. **Cooldown Calculation**: If found, returns `timestamp + secondsToUnlockFullUnstaking.actual`
4. **Fallback Logic**: If no zero balance found in history, uses first transaction timestamp `userHistory[_account][0].timestamp + secondsToUnlockFullUnstaking.actual`

---

### getTimeToUserUnlockStakingTime

**Function Type**: `view`  
**Function Signature**: `getTimeToUserUnlockStakingTime(address _account)`

Calculates when a user becomes eligible to stake again after their last full unstaking. Users must wait a configurable period after their balance reaches zero.

#### Input Parameters

| Parameter  | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| `_account` | address | Address of the user to query              |

#### Return Value

| Type    | Description                                      |
| ------- | ------------------------------------------------ |
| uint256 | Timestamp when user can stake again (0 if already allowed) |

#### Execution Flow

1. **History Check**: If no history exists (`length == 0`), returns `0` (user can stake immediately)
2. **Recent Transaction Analysis**: Examines the most recent transaction in user's history
3. **Zero Balance Cooldown**: If last transaction resulted in `totalStaked == 0`, returns `timestamp + secondsToUnlockStaking.actual`
4. **No Cooldown**: If current balance > 0, returns `0` (user can stake immediately)

---

## System Configuration Functions

### getSecondsToUnlockFullUnstaking

**Function Type**: `view`  
**Function Signature**: `getSecondsToUnlockFullUnstaking()`

Retrieves the current full unstaking unlock period in seconds.

#### Return Value

| Type    | Description                                    |
| ------- | ---------------------------------------------- |
| uint256 | Current full unstaking time lock period        |

---

### getSecondsToUnlockStaking

**Function Type**: `view`  
**Function Signature**: `getSecondsToUnlockStaking()`

Retrieves the current staking unlock period in seconds.

#### Return Value

| Type    | Description                                |
| ------- | ------------------------------------------ |
| uint256 | Current staking time lock period           |

---

## User Asset Functions

### getUserAmountStaked

**Function Type**: `view`  
**Function Signature**: `getUserAmountStaked(address _account)`

Retrieves the total amount of staking tokens currently staked by a user.

#### Input Parameters

| Parameter  | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| `_account` | address | Address of the user to query              |

#### Return Value

| Type    | Description                                |
| ------- | ------------------------------------------ |
| uint256 | Total amount of staking tokens staked by the user   |

---

## Security and Validation Functions

### checkIfStakeNonceUsed

**Function Type**: `view`  
**Function Signature**: `checkIfStakeNonceUsed(address,uint256)`

Checks if a specific staking nonce has already been used by a user.

#### Input Parameters

| Parameter  | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| `_account` | address | Address of the user to check the nonce for |
| `_nonce`   | uint256 | The nonce to check for prior usage        |

#### Return Value

| Type | Description                                         |
| ---- | --------------------------------------------------- |
| bool | `true` if nonce has been used, `false` otherwise    |

---

## Contract Reference Functions

### getGoldenFisher

**Function Type**: `view`  
**Function Signature**: `getGoldenFisher()`

Retrieves the address of the Golden Fisher contract.

#### Return Value

| Type    | Description                               |
| ------- | ----------------------------------------- |
| address | Address of the Golden Fisher contract     |

---

### getGoldenFisherProposal

**Function Type**: `view`  
**Function Signature**: `getGoldenFisherProposal()`

Retrieves the address of the Golden Fisher contract proposal.

#### Return Value

| Type    | Description                                      |
| ------- | ------------------------------------------------ |
| address | Address of the Golden Fisher contract proposal   |

---

### getEstimatorAddress

**Function Type**: `view`  
**Function Signature**: `getEstimatorAddress()`

Retrieves the address of the current Estimator contract.

#### Return Value

| Type    | Description                               |
| ------- | ----------------------------------------- |
| address | Address of the current Estimator contract |

---

### getEstimatorProposal

**Function Type**: `view`  
**Function Signature**: `getEstimatorProposal()`

Retrieves the address of the proposed new Estimator contract.

#### Return Value

| Type    | Description                                      |
| ------- | ------------------------------------------------ |
| address | Address of the proposed Estimator contract (zero address if none) |

---

### getEvvmAddress

**Function Type**: `view`  
**Function Signature**: `getEvvmAddress()`

Retrieves the address of the EVVM contract.

#### Return Value

| Type    | Description                               |
| ------- | ----------------------------------------- |
| address | Address of the EVVM contract              |

---

### getMateAddress

**Function Type**: `view`  
**Function Signature**: `getMateAddress()`

Retrieves the address of the staking token contract.

#### Return Value

| Type    | Description                                |
| ------- | ------------------------------------------ |
| address | Address of the staking token contract        |

---

### getOwner

**Function Type**: `view`  
**Function Signature**: `getOwner()`

Retrieves the address of the contract owner.

#### Return Value

| Type    | Description                               |
| ------- | ----------------------------------------- |
| address | Address of the contract owner             |

---

## Presale Staker Information

### getPresaleStaker

**Function Type**: `view`  
**Function Signature**: `getPresaleStaker(address _account)`

Determines if a user is a presale staker and retrieves their staked amount.

#### Input Parameters

| Parameter  | Type    | Description                               |
| ---------- | ------- | ----------------------------------------- |
| `_account` | address | Address of the user to query              |

#### Return Value

| Type    | Description                                              |
| ------- | -------------------------------------------------------- |
| bool    | `true` if user is a presale staker, `false` otherwise    |
| uint256 | Amount of staking tokens staked by the user during presale        |

---

### getPresaleStakerCount

**Function Type**: `view`  
**Function Signature**: `getPresaleStakerCount()`

Retrieves the total number of presale stakers in the contract.

#### Return Value

| Type    | Description                                |
| ------- | ------------------------------------------ |
| uint256 | Number of presale stakers in the contract  |

---

## Contract Status Functions

### getAllDataOfAllowPublicStaking

**Function Type**: `view`  
**Function Signature**: `getAllDataOfAllowPublicStaking()`

Retrieves the value of the `allowPublicStaking` variable in `BoolTypeProposal` struct.

#### Return Value

| Type             | Description                                                         |
| ---------------- | ------------------------------------------------------------------- |
| BoolTypeProposal | Value of `allowPublicStaking` variable in `BoolTypeProposal` struct |

The struct contains the following fields:

```solidity
struct BoolTypeProposal {
    bool flag;           // Current value of the allowPublicStaking variable
    uint256 timeToAccept; // Timestamp when the change should be accepted
}
```

---

### getAllowPresaleStaking

**Function Type**: `view`  
**Function Signature**: `getAllowPresaleStaking()`

Retrieves the value of the `allowPresaleStaking` variable in `BoolTypeProposal` struct.

#### Return Value

| Type             | Description                                                          |
| ---------------- | -------------------------------------------------------------------- |
| BoolTypeProposal | Value of `allowPresaleStaking` variable in `BoolTypeProposal` struct |

The struct contains the following fields:

```solidity
struct BoolTypeProposal {
    bool flag;           // Current value of the allowPresaleStaking variable
    uint256 timeToAccept; // Timestamp when the change should be accepted
}
```

---

---

## History and Time Lock System


The staking contract maintains a comprehensive history system and implements time-based restrictions to ensure fair and secure staking operations. This system prevents rapid staking/unstaking cycles and provides complete transaction traceability.

## HistoryMetadata Structure

Every staking and unstaking operation is recorded in the user's history using the `HistoryMetadata` struct:

```solidity
struct HistoryMetadata {
    bytes32 transactionType;  // Transaction identifier
    uint256 amount;           // Amount of staking tokens involved
    uint256 timestamp;        // When the transaction occurred
    uint256 totalStaked;      // User's total staked balance after transaction
}
```

### Transaction Types

The `transactionType` field identifies the operation performed:

| Value | Type | Description |
|-------|------|-------------|
| `bytes32(uint256(1))` | **Staking** | Tokens added to user's stake |
| `bytes32(uint256(2))` | **Unstaking** | Tokens removed from user's stake |

### Record Details

Each history entry captures:

- **`amount`**: Specific tokens staked/unstaked in this transaction
- **`timestamp`**: Exact time when the operation occurred (block.timestamp)
- **`totalStaked`**: User's cumulative staked balance after this transaction

## Time Lock Mechanisms

The contract enforces two types of cooldown periods to maintain system stability and prevent abuse:

### Re-Staking Cooldown

**Purpose**: Prevents immediate re-staking after complete unstaking

- **Trigger**: Activated when user's `totalStaked` reaches `0` (complete unstaking)
- **Duration**: Configurable via `secondsToUnlockStaking.actual`
- **Logic**: User must wait before staking again after their balance reached zero
- **Function**: `getTimeToUserUnlockStakingTime()`

### Full Unstaking Cooldown

**Purpose**: Prevents frequent complete withdrawals

- **Trigger**: Based on the last time user's `totalStaked` was `0`
- **Duration**: Configurable via `secondsToUnlockFullUnstaking.actual` (typically 21 days)
- **Logic**: User must wait before performing complete unstaking
- **Function**: `getTimeToUserUnlockFullUnstakingTime()`

## Cooldown Calculation Logic

### Re-Staking Time Calculation

**Function**: `getTimeToUserUnlockStakingTime(address _account)`

```solidity
function getTimeToUserUnlockStakingTime(address _account) public view returns (uint256) {
    uint256 lengthOfHistory = userHistory[_account].length;
    
    if (lengthOfHistory == 0) {
        return 0; // No history = can stake immediately
    }
    
    if (userHistory[_account][lengthOfHistory - 1].totalStaked == 0) {
        return userHistory[_account][lengthOfHistory - 1].timestamp + 
               secondsToUnlockStaking.actual;
    } else {
        return 0; // Current balance > 0 = no cooldown
    }
}
```

**Logic Flow**:
1. **No History**: User can stake immediately (`return 0`)
2. **Last Transaction Check**: Examines most recent transaction
3. **Zero Balance Cooldown**: If `totalStaked == 0`, apply cooldown
4. **Already Allowed**: If current balance > 0, no cooldown (`return 0`)

### Full Unstaking Time Calculation

**Function**: `getTimeToUserUnlockFullUnstakingTime(address _account)`

```solidity
function getTimeToUserUnlockFullUnstakingTime(address _account) public view returns (uint256) {
    for (uint256 i = userHistory[_account].length; i > 0; i--) {
        if (userHistory[_account][i - 1].totalStaked == 0) {
            return userHistory[_account][i - 1].timestamp + 
                   secondsToUnlockFullUnstaking.actual;
        }
    }
    
    return userHistory[_account][0].timestamp + 
           secondsToUnlockFullUnstaking.actual;
}
```

**Logic Flow**:
1. **Backward History Search**: Iterates from most recent to oldest transaction
2. **Zero Balance Detection**: Finds last time `totalStaked == 0`
3. **Cooldown Applied**: `lastZeroTimestamp + secondsToUnlockFullUnstaking.actual`
4. **Fallback**: If no zero balance found, uses first transaction timestamp

## Practical Examples

### Example 1: First-Time User

```solidity
// User stakes for the first time
History: []
getTimeToUserUnlockStakingTime() → 0 (can stake immediately)
getTimeToUserUnlockFullUnstakingTime() → 0 (no history)

// After staking 5 tokens
History: [
    {
        transactionType: bytes32(uint256(1)),
        amount: 5,
        timestamp: 1625097600,
        totalStaked: 5
    }
]
```

### Example 2: Complete Unstaking Cycle

```solidity
// User completely unstakes (totalStaked becomes 0)
History: [
    {
        transactionType: bytes32(uint256(2)),
        amount: 5,
        timestamp: 1625184000,
        totalStaked: 0  // ← This triggers cooldowns
    }
]

getTimeToUserUnlockStakingTime() → 1625184000 + secondsToUnlockStaking.actual
getTimeToUserUnlockFullUnstakingTime() → 1625184000 + secondsToUnlockFullUnstaking.actual
```

### Example 3: Partial Unstaking

```solidity
// User partially unstakes (totalStaked > 0)
History: [
    {
        transactionType: bytes32(uint256(2)),
        amount: 2,
        timestamp: 1625270400,
        totalStaked: 3  // ← Still has stake, no cooldown
    }
]

getTimeToUserUnlockStakingTime() → 0 (can stake immediately)
getTimeToUserUnlockFullUnstakingTime() → searches for last totalStaked == 0
```

## Integration with Staking Functions

### stakingBaseProcess Integration

The history system is automatically updated in `stakingBaseProcess`:

```solidity
// History entry creation for both staking and unstaking
userHistory[stakingAccount].push(
    HistoryMetadata({
        transactionType: isStaking ? bytes32(uint256(1)) : bytes32(uint256(2)),
        amount: amountOfStaking,
        timestamp: block.timestamp,
        totalStaked: auxSMsteBalance
    })
);
```

### Cooldown Validation

Before allowing operations, functions check time locks:

```solidity
// Staking cooldown check
if (getTimeToUserUnlockStakingTime(stakingAccount) > block.timestamp) {
    revert ErrorsLib.UserMustWaitToStakeAgain();
}

// Full unstaking cooldown check  
if (getTimeToUserUnlockFullUnstakingTime(stakingAccount) > block.timestamp) {
    revert ErrorsLib.UserMustWaitToFullUnstake();
}
```

## Administrative Configuration

Both time lock periods (`secondsToUnlockStaking.actual` and `secondsToUnlockFullUnstaking.actual`) are configurable by the contract administrator through a secure proposal system.

For detailed information about configuring these time lock periods, including the proposal system, time delays, and all available administrative functions, see [Administrative Functions](./03-AdminFunctions.md).

---

## notifyNewEpoch


**Function Type**: `external`  
**Access Control**: `onlyActivator`  
**Function Signature**: `notifyNewEpoch(address,uint256,uint256,uint256)`

Initializes a new reward distribution epoch by setting the epoch metadata. This function is called by the activator to establish the parameters for reward calculations during a specific time period.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `tokenPool` | address | Address of the token pool contract containing rewards |
| `totalPool` | uint256 | Total amount of tokens available for distribution in this epoch |
| `totalStaked` | uint256 | Total amount of tokens staked across all users at epoch start |
| `tStart` | uint256 | Timestamp when the epoch begins |

## Functionality

### Epoch Initialization
The function creates a new `EpochMetadata` struct with:
- **Token Pool**: Sets the reward pool contract address
- **Total Pool**: Establishes the total reward amount available
- **Total Staked**: Records the aggregate staked amount for proportional calculations
- **Time Final**: Automatically sets to current block timestamp (`block.timestamp`)
- **Time Start**: Uses the provided start timestamp parameter

### Access Control
- **Activator Only**: Function restricted to the activator address
- **Administrative Control**: Prevents unauthorized epoch manipulation

## Usage Context

This function is typically called:
1. **Epoch Transitions**: When starting a new reward distribution period
2. **Pool Updates**: When reward pools are refreshed or modified  
3. **Staking Adjustments**: After significant changes in total staked amounts

## State Changes

- **Epoch Metadata**: Completely overwrites the current epoch data
- **Reward Pool**: Establishes the available reward pool for calculations
- **Time Boundaries**: Sets the temporal boundaries for reward calculations

## Integration

### With Staking Contract
- Coordinates with staking contract for total staked amounts
- Ensures reward calculations align with actual staking data

### With Reward Distribution
- Provides the foundation for `makeEstimation` function calculations
- Establishes the parameters needed for proportional reward distribution

:::info

The epoch end time (`tFinal`) is automatically set to the current block timestamp when this function is called, creating a time window from `tStart` to `tFinal` for reward calculations.

:::

## Example Workflow

1. **Activator calls `notifyNewEpoch`** with new epoch parameters
2. **Epoch metadata is updated** with current timestamp as end time
3. **Reward calculations** can now be performed using `makeEstimation`
4. **Users receive rewards** proportional to their staking participation during the epoch

---

## makeEstimation


**Function Type**: `external`  
**Access Control**: `onlyStaking`  
**Function Signature**: `makeEstimation(address)`  
**Returns**: `(bytes32,address,uint256,uint256,uint256)`

Calculates and distributes epoch-based staking rewards for a specific user based on their staking history and participation during the epoch period. This function implements a time-weighted average staking calculation to ensure fair reward distribution.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `_user` | address | Address of the user for whom to calculate rewards |

## Return Values

| Return | Type | Description |
|--------|------|-------------|
| `epochAnswer` | bytes32 | Epoch identifier (returns 0 if already processed) |
| `tokenAddress` | address | Address of the reward token pool |
| `amountTotalToBeRewarded` | uint256 | Total reward amount calculated for the user |
| `idToOverwrite` | uint256 | Index in user's history to overwrite with epoch data |
| `timestampToOverwrite` | uint256 | Timestamp to record in the overwritten history entry |

## Functionality

### Time-Weighted Average Calculation

The function implements the following formula for fair reward distribution:

$$
averageSm = \frac{\sum_{i=1}^{n} [(t_i - t_{i-1}) \times S_{i-1}] \times 10^{18}}{t_{Final} - t_{Start}}
$$

Where:
- `ti` = timestamp of current iteration
- `ti-1` = timestamp of previous iteration  
- `Si-1` = staked amount at previous timestamp
- `tFinal` = epoch end time
- `tStart` = epoch start time

### Reward Calculation Process

1. **History Analysis**: Iterates through user's staking history within the epoch period
2. **Time-Weighted Calculation**: Calculates the weighted average of staked amounts over time
3. **Proportional Distribution**: Applies the user's proportion of total staked amounts
4. **Pool Adjustment**: Updates epoch pool to reflect distributed rewards

### Edge Cases Handled

#### Already Processed Users
```solidity
if (h.transactionType == epochId) return (0, address(0), 0, 0, 0);
```
Returns zero values if user has already received rewards for this epoch.

#### Single History Entry
```solidity
if (size == 1) totSmLast = h.totalStaked;
```
Handles users with only one staking transaction in their history.

#### Future Timestamps
```solidity
if (h.timestamp > epoch.tFinal) {
    if (totSmLast > 0) sumSmT += (epoch.tFinal - tLast) * totSmLast;
    // Process remaining calculations...
}
```
Properly handles history entries that extend beyond the epoch end time.

## State Changes

### Epoch Pool Updates
- **Total Pool**: Reduces by the amount rewarded to the user
- **Total Staked**: Decreases by the user's final staked amount
- **Remaining Rewards**: Available for subsequent user reward calculations

## Access Control

- **Staking Contract Only**: Function can only be called by the registered staking contract
- **Authorization Protection**: Prevents unauthorized reward calculations and manipulations

## Integration Points

### With Staking Contract
- **History Access**: Reads user staking history from the staking contract
- **Reward Processing**: Coordinated reward distribution with staking operations
- **Data Consistency**: Ensures reward calculations match actual staking data

### With Epoch Management
- **Epoch Boundaries**: Uses epoch metadata for time-based calculations
- **Pool Management**: Manages reward pool depletion and allocation

## Mathematical Precision

### Scaling Factor
Uses `1e18` scaling factor to maintain precision in:
- Time-weighted average calculations
- Proportional reward distributions
- Final reward amount determinations

### Calculation Accuracy
The time-weighted approach ensures:
- **Fair Distribution**: Rewards proportional to actual staking participation
- **Time Consideration**: Longer staking periods receive proportionally higher rewards
- **Accurate Accounting**: Precise tracking of staking contributions over time

## Example Workflow

1. **Staking contract calls `makeEstimation`** for a user
2. **Function retrieves user's staking history** within epoch period  
3. **Time-weighted average is calculated** based on staking duration and amounts
4. **Proportional reward is determined** from the available epoch pool
5. **Epoch pool is updated** to reflect the distributed reward
6. **Return values provide** reward amount and history update information

---

## Admin Functions


The Estimator contract implements a comprehensive administrative governance system with time-delayed proposals for all critical address updates. This system ensures security through a 24-hour delay period for all administrative changes.

## Governance Architecture

### Time-Delayed Proposal System
All administrative functions follow a secure three-step process:
1. **Proposal Creation**: Admin proposes a new address with 24-hour delay
2. **Waiting Period**: 24-hour security delay before acceptance
3. **Proposal Execution**: Anyone can execute the proposal after the delay period

### Managed Addresses
The system manages four critical contract addresses:
- **Activator**: Controls epoch notifications and system activation
- **EVVM Address**: Core EVVM contract for payment processing
- **Staking Address**: Staking contract for user data access
- **Admin**: Primary administrative control address

## Activator Address Management

### `setActivatorProposal`
**Access Control**: `onlyActivator`  
**Function Signature**: `setActivatorProposal(address)`

Creates a proposal to change the activator address.

**Parameters:**
- `_proposal` (address): New proposed activator address

**Process:**
1. Sets the proposed activator address
2. Establishes acceptance time as current timestamp + 24 hours
3. Requires current activator authorization

### `cancelActivatorProposal`
**Access Control**: `onlyActivator`  
**Function Signature**: `cancelActivatorProposal()`

Cancels any pending activator address proposal.

**Process:**
1. Resets proposal address to zero address
2. Resets acceptance time to zero
3. Prevents unauthorized address changes

### `acceptActivatorProposal`
**Access Control**: `public`  
**Function Signature**: `acceptActivatorProposal()`

Executes the activator address change after the delay period.

**Requirements:**
- Current timestamp must exceed the acceptance time
- Valid proposal must exist

**Process:**
1. Verifies delay period has elapsed
2. Updates actual activator address to proposed address
3. Clears proposal data

## EVVM Address Management

### `setEvvmAddressProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `setEvvmAddressProposal(address)`

Creates a proposal to update the EVVM contract address.

**Parameters:**
- `_proposal` (address): New proposed EVVM contract address

### `cancelEvvmAddressProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `cancelEvvmAddressProposal()`

Cancels any pending EVVM address proposal.

### `acceptEvvmAddressProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `acceptEvvmAddressProposal()`

Executes the EVVM address change after verification of the delay period.

## Staking Address Management

### `setAddressStakingProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `setAddressStakingProposal(address)`

Creates a proposal to update the staking contract address.

**Parameters:**
- `_proposal` (address): New proposed staking contract address

### `cancelAddressStakingProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `cancelAddressStakingProposal()`

Cancels any pending staking address proposal.

### `acceptAddressStakingProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `acceptAddressStakingProposal()`

Executes the staking address change after the required delay period.

## Admin Address Management

### `setAdminProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `setAdminProposal(address)`

Creates a proposal to transfer administrative control to a new address.

**Parameters:**
- `_proposal` (address): New proposed admin address

### `cancelAdminProposal`
**Access Control**: `onlyAdmin`  
**Function Signature**: `cancelAdminProposal()`

Cancels any pending admin address proposal.

### `acceptAdminProposal`
**Access Control**: `public`  
**Function Signature**: `acceptAdminProposal()`

Executes the admin address transfer after the delay period.

**Note:** This function is publicly callable to ensure admin transfer can occur even if the current admin becomes unavailable.

## Security Features

### Time-Lock Protection
- **24-Hour Delay**: All address changes require a 24-hour waiting period
- **Proposal Visibility**: All proposals are publicly visible during the waiting period
- **Emergency Cancellation**: Current authorized addresses can cancel proposals

### Access Control Patterns
- **Role-Based Permissions**: Each function has specific role requirements
- **Separation of Concerns**: Different roles for different administrative functions
- **Public Execution**: Some acceptance functions are public to prevent admin lockout

### Proposal Structure
Each address proposal includes:
```solidity
struct AddressTypeProposal {
    address actual;      // Current active address
    address proposal;    // Proposed new address  
    uint256 timeToAccept; // Timestamp when proposal can be executed
}
```

## Integration Points

### With Core Contracts
- **Staking Contract**: Maintains connection for user data access
- **EVVM Contract**: Coordinates payment processing integration
- **Activator System**: Controls epoch and system activation functions

### With Governance
- **Decentralized Control**: Time delays provide community oversight opportunity
- **Emergency Response**: Cancellation functions provide emergency controls
- **Transparent Process**: All proposals are publicly visible and verifiable

## Usage Workflows

### Standard Address Update
1. **Proposal Creation**: Authorized address creates proposal
2. **Community Review**: 24-hour period for community oversight
3. **Proposal Execution**: Anyone executes proposal after delay
4. **System Update**: Contract begins using new address

### Emergency Cancellation
1. **Threat Detection**: Unauthorized or malicious proposal detected
2. **Immediate Cancellation**: Authorized address cancels proposal
3. **System Protection**: Prevents unauthorized address changes

:::warning

All administrative functions include time delays for security. Plan address updates in advance to accommodate the 24-hour waiting period.

:::

:::info

The public nature of acceptance functions ensures that administrative changes can be completed even if the current admin becomes unavailable, preventing system lockout scenarios.

:::

---

## Introduction to the Name Service


The Name Service is a comprehensive decentralized identity and username management system built on the EVVM ecosystem. It provides users with human-readable usernames that can be used across the entire platform, along with rich metadata capabilities and a built-in marketplace for username trading.

## Core Features

### Username Registration System
- **Pre-registration Protection**: Commit-reveal scheme prevents front-running attacks during registration
- **Dynamic Pricing**: Registration costs scale with network activity (100x current EVVM reward amount)
- **Expiration Management**: Usernames have expiration dates and can be renewed to maintain ownership

### Custom Metadata Management
- **Schema-Based Storage**: Structured metadata follows standardized formats for interoperability
- **Flexible Data Types**: Support for social media links, contact information, organization memberships, and custom fields
- **Individual Management**: Add, remove, or flush all metadata entries independently

### Username Marketplace
- **Offer System**: Users can make offers on existing usernames with time-based expiration
- **Direct Trading**: Username owners can accept offers to transfer ownership
- **Fee Structure**: 0.5% marketplace fee on successful transactions

### Time-Delayed Governance
- **Administrative Security**: All admin functions require 1-day time delays for execution
- **Proposal System**: Changes must be proposed, then accepted after the waiting period
- **Cancellation Rights**: Pending proposals can be cancelled before execution

### Comprehensive Query System
- **Identity Verification**: Functions to check username existence, ownership, and availability
- **Metadata Access**: Retrieve all or specific metadata entries for any username
- **Pricing Information**: Real-time pricing for all operations based on current network conditions
- **Administrative Status**: Query admin details, pending proposals, and system configuration

### Data Validation Infrastructure
- **Username Format Validation**: Ensures usernames meet system requirements (4+ characters, alphanumeric, letter start)
- **Email Address Validation**: Comprehensive email format checking following standard protocols
- **Phone Number Validation**: Validates phone number format (6-19 digits)
- **Input Sanitization**: Prevents invalid data from entering the system

## Registration Process

The registration system uses a secure three-step process to prevent front-running and ensure fair access:

### 1. Pre-Registration Phase
```
preRegistrationUsername(user, hashedUsername, nonce, signature, ...)
```
- Commit to a username by submitting its hash
- Prevents others from seeing your intended username
- 30-minute window to complete full registration
- Costs the full registration fee upfront

### 2. Registration Phase
```
registrationUsername(user, username, salt, nonce, signature, ...)
```
- Reveal the actual username and salt used in hashing
- Must be completed within 30 minutes of pre-registration
- Username becomes active and owned by the registrant
- Any unused funds from pre-registration are refunded

### 3. Management Phase
Once registered, users can:
- Add custom metadata to their username
- Manage incoming offers from other users
- Renew their username before expiration
- Transfer ownership through the marketplace

## Security Architecture

### Signature Verification
All operations require cryptographic signatures using EIP-191 standard:
- **User Authorization**: Each action must be signed by the username owner
- **Replay Protection**: Nonce-based system prevents transaction replay attacks
- **Message Integrity**: Signatures cover all critical parameters

### Payment Integration
Secure integration with the EVVM core contract:
- **Principal Token Payments**: All fees paid in the network's primary token
- **Priority Fees**: Optional fees for faster transaction processing
- **Reward Distribution**: Executors receive rewards for processing transactions

### Execution Methods
The Name Service supports two distinct methods for executing functions:

#### Direct Execution
- **User-Initiated**: Users interact directly with the Name Service contract
- **Immediate Processing**: Transactions are submitted directly to the blockchain
- **Self-Service**: Users manage their own transaction timing and gas costs
- **Full Control**: Complete autonomy over transaction parameters

#### Fisher Execution
- **Fishing Spot Integration**: Users submit transactions through the fishing spot system
- **Fisher Processing**: Specialized fisher nodes capture and execute transactions
- **Optimized Routing**: Fishers handle transaction optimization and timing
- **Reward Sharing**: Fishers receive portions of fees for their execution services
- **Enhanced Efficiency**: Potential for better gas optimization and batching

### Time-Lock Security
Administrative functions use time-delayed execution:
- **Proposal Period**: 1-day waiting period for all administrative changes
- **Transparency**: All changes are visible before execution
- **Emergency Controls**: Proposals can be cancelled during the waiting period

## Economic Model

### Registration Costs
- **Standard Rate**: 100x current EVVM reward amount for new usernames
- **Market-Based Pricing**: Uses renewal pricing logic if username has existing offers
- **Dynamic Adjustment**: Registration costs adapt to market demand and activity
- **Offer-Driven Economics**: Higher demand usernames cost more to register

### Metadata Operations
- **Add Metadata**: 10x current EVVM reward amount per entry
- **Remove Metadata**: 10x current EVVM reward amount per entry
- **Flush All Metadata**: 10x reward amount per existing entry

### Renewal Pricing
- **Time-Based**: Earlier renewals cost less than last-minute renewals
- **Market Demand**: Pricing adapts based on network activity
- **Expiration Protection**: Grace periods and renewal incentives

### Marketplace Economics
- **Trading Fee**: 0.5% of transaction value
- **Offer Management**: Small fees for offer creation and withdrawal
- **Revenue Sharing**: Executors receive portions of fees as rewards

## Integration with EVVM

### Payment Processing
- **Unified Token System**: All payments use principal tokens through EVVM
- **Staker Rewards**: sMATE stakers receive priority and reward distributions
- **Fee Collection**: Automatic routing of fees to appropriate recipients

### Reward Distribution
- **Executor Incentives**: Transaction processors receive reward payments
- **Proportional Rewards**: Rewards scale with work performed
- **Priority Processing**: Higher fees enable faster transaction execution

### Cross-Contract Security
- **Shared Nonce System**: Prevents replay attacks across the ecosystem
- **Address Validation**: Ensures compatibility with EVVM address formats
- **State Synchronization**: Maintains consistency with core EVVM operations

## Use Cases

### Individual Users
- **Digital Identity**: Establish a recognizable username across the platform
- **Profile Management**: Add social media links, contact info, and credentials
- **Asset Trading**: Buy, sell, or trade valuable usernames

### Organizations
- **Brand Protection**: Register and protect organizational usernames
- **Team Management**: Assign usernames to team members or departments
- **Public Presence**: Maintain verified organizational identity

### Developers
- **Integration APIs**: Build applications using Name Service identities
- **Metadata Standards**: Implement standardized user profile systems
- **Marketplace Tools**: Create trading interfaces and analytical tools

## Technical Architecture

### Smart Contract Design
- **Modular Functions**: Separate contracts for different functionality areas
- **Upgrade Safety**: Time-locked governance prevents immediate changes
- **Gas Optimization**: Efficient operations for common use cases
- **Comprehensive API**: Over 30 getter functions for complete system state access

### Data Storage
- **On-Chain Metadata**: All usernames and metadata stored on blockchain
- **Efficient Indexing**: Optimized data structures for quick lookups
- **Scalable Design**: Architecture supports growing user base
- **State Verification**: Built-in functions for verifying data integrity and ownership

### Query Infrastructure
- **Real-Time Pricing**: Dynamic pricing functions based on current network conditions
- **Ownership Verification**: Multiple verification methods from basic checks to strict validation
- **Metadata Management**: Complete CRUD operations with efficient retrieval functions
- **Administrative Monitoring**: Full transparency of admin proposals and system status

### Data Validation Layer
- **Format Enforcement**: Strict validation rules for usernames, emails, and phone numbers
- **Security Checks**: Input sanitization prevents malformed data storage
- **Standard Compliance**: Email validation follows RFC standards for maximum compatibility
- **Character Set Control**: Username validation ensures consistent identifier formats

### Event System
- **Comprehensive Logging**: All operations emit detailed events
- **Integration Support**: Events enable external system integration
- **Audit Trail**: Complete history of all username operations

The Name Service represents a foundational layer for decentralized identity within the EVVM ecosystem, providing the infrastructure for human-readable addresses, rich profile information, and secure username trading.

---

## preRegistrationUsername


**Function Type**: `public`  
**Function Signature**: `preRegistrationUsername(address,bytes32,uint256,bytes,uint256,uint256,bool,bytes)`

Pre-registers a username hash to prevent front-running attacks during the registration process. This function creates a temporary reservation that can be registered after a 30-minute waiting period. The function uses a commitment-reveal scheme where users first commit to a hash of their desired username plus a secret number.

## Parameters

| Parameter                   | Type      | Description                                                                                                                     |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `user`                      | `address` | The address of the end-user initiating the pre-registration.                                                                    |
| `hashPreRegisteredUsername` | `bytes32` | The pre-commitment hash calculated as `keccak256(abi.encodePacked(username, clowNumber))`.                                      |
| `nonce`                     | `uint256` | The user's nonce specific to this NameService contract for replay protection of this pre-registration action.                           |
| `signature`                 | `bytes`   | The EIP-191 signature from `user` authorizing this pre-registration action.                                                     |
| `priorityFee_EVVM`          | `uint256` | Optional fee (in principal tokens) paid by `user` to the `msg.sender` (staker executing the transaction) via the EVVM contract. |
| `nonce_EVVM`                | `uint256` | **Required if `priorityFee_EVVM > 0`**. `user`'s nonce for the EVVM payment function call used only to pay the priority fee.    |
| `priorityFlag_EVVM`         | `bool`    | **Required if `priorityFee_EVVM > 0`**. Priority flag (sync/async) for the EVVM payment call paying the priority fee.           |
| `signature_EVVM`            | `bytes`   | **Required if `priorityFee_EVVM > 0`**. `user`'s signature authorizing the EVVM payment call paying the priority fee.           |

:::note

- The EVVM payment signature (`signature_EVVM`) is only needed if paying a priority fee and follows the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
- The NameService pre-registration signature (`signature`) follows the [Pre-Registration Signature Structure](../../09-SignatureStructures/02-NameService/01-preRegistrationUsernameStructure.md).
- The EVVM parameters (`nonce_EVVM`, `priorityFlag_EVVM`, `signature_EVVM`) are only required and processed if `priorityFee_EVVM` is greater than zero.

:::

## Hash Username Structure

The `hashPreRegisteredUsername` is calculated off-chain by the user using SHA3-256 (keccak256):

```solidity
keccak256(abi.encodePacked(username, clowNumber));
```

Where:

- `username` (string): The desired username.
- `clowNumber` (uint256): A secret number chosen by the user, required later during the `registrationUsername` step to validate the commitment.

## Execution Methods

This function can be executed by any address, with staker rewards only distributed to stakers.

### Fisher Execution

When the executor is the fisher:

1. The user sends the payment request to the fishing spot
2. The fisher captures the transaction and validates all parameters
3. The fisher submits the transaction to the contract for processing

### Direct Execution

When the executor is the user or a service:

1. The user/service submits their transaction directly to the contract

## Workflow

1. **NameService Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if used.

2. **Pre-registration Signature Verification**: Verifies the `signature` provided by `user` using `verifyMessageSignedForPreRegistrationUsername`. Reverts with `InvalidSignatureOnNameService` if invalid.

3. **Priority Fee Processing**: If `priorityFee_EVVM > 0`, calls the `makePay` function to process the priority fee payment through EVVM using the provided EVVM parameters.

4. **Hash Storage**: Records the pre-registration by storing the `hashPreRegisteredUsername` with:

   - Key: `"@" + hashPreRegisteredUsername` (converted to string)
   - Owner: `user`
   - Expiration: `block.timestamp + 30 minutes`
   - Flags: Marked as not a username (`flagNotAUsername = 0x01`)

5. **Nonce Management**: Marks the NameService `nonce` as used for the `user` in the `nameServiceNonce` mapping.

6. **Staker Rewards**: If the executor (`msg.sender`) is a staker (`isAddressStaker(msg.sender)`), distributes rewards via `makeCaPay`:
   - Base MATE reward (`getRewardAmount()`)
   - Plus the `priorityFee_EVVM` amount

![preRegistrationUsername happy path](./img/01preRegistrationUsername/preRegistrationUsername_HappyPath.svg)
![preRegistrationUsername failed path](./img/01preRegistrationUsername/preRegistrationUsername_FailedPath.svg)

---

## registrationUsername


**Function Type**: `public`  
**Function Signature**: `registrationUsername(address,string,uint256,uint256,bytes,uint256,uint256,bool,bytes)`

Completes username registration using a pre-registration commitment. The user reveals the `username` and `clowNumber` to validate their prior pre-registration commit. This function processes the required registration fee payment via EVVM and finalizes the username registration, associating it with the user.

**Requirements:**

- A valid pre-registration corresponding to `keccak256(abi.encodePacked(username, clowNumber))` must exist and be associated with `user`.
- A minimum waiting period (30 minutes) must have passed since the pre-registration timestamp.
- The `user` must pay the registration fee plus any optional priority fee via the EVVM contract.

## Parameters

| Parameter           | Type      | Description                                                                                                                       |
| ------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `user`              | `address` | The address of the end-user registering the username (must match the address used in pre-registration).                           |
| `username`          | `string`  | The desired username being registered (must match the value used to generate the pre-registered hash).                            |
| `clowNumber`        | `uint256` | The secret number used with `username` during pre-registration hash calculation. Revealing it proves ownership of the commitment. |
| `nonce`             | `uint256` | The user's NameService nonce specific to this registration action.                                                                        |
| `signature`         | `bytes`   | The EIP-191 signature from `user` authorizing this registration action.                                                           |
| `priorityFee_EVVM`  | `uint256` | Optional fee (in MATE) paid **by `user`** to the `msg.sender` (executor) via EVVM, added to the registration fee payment.         |
| `nonce_EVVM`        | `uint256` | `user`'s nonce for the EVVM payment function call used to pay the total amount.                                                   |
| `priorityFlag_EVVM` | `bool`    | Priority flag (sync/async) for the EVVM payment function call.                                                                    |
| `signature_EVVM`    | `bytes`   | `user`'s signature authorizing the EVVM call to transfer the total payment (Registration Fee + `priorityFee_EVVM`).               |

:::note

- The EVVM payment signature (`signature_EVVM`) covers the **total** payment amount and is paid by `user`. It uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
- The NameService registration signature (`signature`) must be generated by `user` and follows the [Registration Signature Structure](../../09-SignatureStructures/02-NameService/02-registrationUsernameStructure.md).
- The EVVM parameters are mandatory as a registration fee is always required.

:::

## Execution Methods

Can be executed by any address (`msg.sender`). Rewards are only distributed if the executor is a staker.

### Fisher Execution

When the executor is the fisher:

1. The user sends the payment request to the fishing spot
2. The fisher captures the transaction and validates all parameters
3. The fisher submits the transaction to the contract for processing

### Direct Execution

When the executor is the user or a service:

1. The user/service submits their transaction directly to the contract

## Workflow

1. **NameService Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if used.

2. **Username Validation**: Unless `user` is the admin address, calls `isValidUsername` to validate the `username` against character set and length rules. Reverts if invalid.

3. **Username Availability Check**: Calls `isUsernameAvailable` to ensure the `username` is not already registered. Reverts with `UsernameAlreadyRegistered` if unavailable.

4. **Registration Signature Verification**: Verifies the `signature` provided by `user` using `verifyMessageSignedForRegistrationUsername`. Reverts with `InvalidSignatureOnNameService` if invalid.

5. **Registration Payment**: Calls `makePay` to process the registration fee payment:

   - Calculates the required registration fee using `getPriceOfRegistration(username)` with dynamic pricing
   - If username has existing offers, uses market-based pricing via `seePriceToRenew` logic
   - If no offers exist, uses standard rate of 100x current EVVM reward amount
   - Transfers the total payment amount from the `user` via EVVM
   - Uses the provided EVVM parameters for authorization

6. **Pre-Registration Validation**:

   - Reconstructs the expected hash: `keccak256(abi.encodePacked(username, clowNumber))`
   - Retrieves pre-registration data stored under key `"@<hash_string>"`
   - Verifies the stored user matches `user` and the waiting period has passed
   - Reverts with `PreRegistrationNotValid` if validation fails

7. **Username Registration**: Creates the final username registration in `identityDetails` with:

   - Owner: `user`
   - Expiration: `block.timestamp + 366 days`
   - Flags: Marked as username (`flagNotAUsername = 0x00`)

8. **Nonce Management**: Marks the `nonce` as used for the `user` in the `nameServiceNonce` mapping.

9. **Staker Rewards**: If the executor is a staker, distributes rewards via `makeCaPay`:

   - Base reward: `50 * getRewardAmount()`
   - Plus the `priorityFee_EVVM` amount

10. **Cleanup**: Deletes the pre-registration entry to free storage.

![registrationUsername happy path](./img/02registrationUsername/registrationUsername_HappyPath.svg)
![registrationUsername failed path](./img/02registrationUsername/registrationUsername_FailedPath.svg)

---

## makeOffer


**Function Type**: `external`  
**Function Signature**: `makeOffer(address,string,uint256,uint256,uint256,bytes,uint256,uint256,bool,bytes)`

Allows a user (`_user`) to make a formal, time-limited offer to purchase an existing username (`_username`) by committing principal tokens. This function **must be executed by an sMATE staker** (`msg.sender`).

## Parameters

| Parameter           | Type      | Description                                                                                                                                    |
| ------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`              | `address` | The address of the end-user making the offer (offeror).                                                                                        |
| `username`          | `string`  | The target username for which the offer is being made.                                                                                         |
| `expireDate`        | `uint256` | The Unix timestamp when this offer automatically expires if not accepted or withdrawn.                                                         |
| `amount`            | `uint256` | The total gross amount of principal tokens the offeror commits. This includes the actual offer value plus a 0.5% service fee.                  |
| `nonce`             | `uint256` | The offeror's nonce specific to this NameService contract for replay protection of this `makeOffer` action.                                            |
| `signature`         | `bytes`   | The EIP-191 signature from `user` authorizing this make offer action.                                                                          |
| `priorityFee_EVVM`  | `uint256` | Optional fee (in principal tokens) paid by `user` to the `msg.sender` (staker executing the transaction) via the EVVM contract for prioritized processing. |
| `nonce_EVVM`        | `uint256` | `user`'s nonce for the EVVM payment function call used to transfer the total payment.                                                          |
| `priorityFlag_EVVM` | `bool`    | Priority flag (sync/async) for the EVVM payment function call.                                                                                 |
| `signature_EVVM`    | `bytes`   | `user`'s signature authorizing the EVVM payment call to transfer the total payment.                                                            |

**Returns**: `offerID` - Unique identifier for the created offer

:::note

- The EVVM payment signature (`signature_EVVM`) covers the **total** payment amount and is paid by the offeror (`user`). It uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
- The NameService make offer signature (`signature`) must be generated by `user` and follows the [Make Offer Signature Structure](../../09-SignatureStructures/02-NameService/03-makeOfferStructure.md).

:::

## Execution Methods

This function can be executed by any address.

### Fisher Execution

When the executor is the fisher:

1. The user sends the payment request to the fishing spot
2. The fisher captures the transaction and validates all parameters
3. The fisher submits the transaction to the contract for processing

### Direct Execution

When the executor is the user or a service:

1. The user/service submits their transaction directly to the contract

## Workflow

1. **NameService Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if used.

2. **Offer Validation**: Validates the offer parameters:

   - Ensures the target `username` exists and is not flagged as a pre-registration
   - Verifies `amount > 0` and `expireDate > block.timestamp`
   - Reverts with `PreRegistrationNotValid` if validation fails

3. **Make Offer Signature Validation**: Verifies the `signature` provided by `user` using `verifyMessageSignedForMakeOffer`. Reverts with `InvalidSignatureOnNameService` if invalid.

4. **Payment Execution**: Calls `makePay` to transfer the `amount` and `priorityFee_EVVM` from `user` to the service via EVVM. Reverts if payment fails.

5. **Offer ID Assignment**: Finds the next available sequential ID for an offer by looping through existing offer slots until an empty one (`address(0)` offerer) is found.

6. **Offer Creation**: Creates and stores the offer in the `usernameOffers` mapping with:

   - `offerer`: `user`
   - `expireDate`: provided expiration timestamp
   - `amount`: net offer amount (99.5% of input `amount` after 0.5% fee)

7. **Reward Distribution**: Distributes rewards to the executor via `makeCaPay`:

   - Base MATE reward (`getRewardAmount()`)
   - Plus 0.125% of the gross `amount`
   - Plus the `priorityFee_EVVM`

8. **Token Locking**: Updates `mateTokenLockedForWithdrawOffers` to track locked tokens for future withdrawals.

9. **Offer Slot Management**: Updates the username's `offerMaxSlots` if this offer exceeds the current maximum slot count.

10. **Nonce Management**: Marks the user's `nonce` as used in the `nameServiceNonce` mapping.

![makeOffer happy path](./img/03makeOffer/makeOffer_HappyPath.svg)
![makeOffer failed path](./img/03makeOffer/makeOffer_FailedPath.svg)

---

## withdrawOffer


**Function Type**: `public`  
**Function Signature**: `withdrawOffer(address,string,uint256,uint256,bytes,uint256,uint256,bool,bytes)`

Withdraws a marketplace offer and refunds the locked tokens to the original offeror. This action cancels the offer and returns the escrowed principal tokens. Can only be called by the offer creator.

## Parameters

| Parameter           | Type      | Description                                                                                                                                    |
| ------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`              | `address` | The address of the user who originally placed the offer and is now withdrawing it.                                                             |
| `username`          | `string`  | The target username associated with the offer being withdrawn.                                                                                 |
| `offerID`           | `uint256` | The unique identifier of the specific offer to be withdrawn.                                                                                   |
| `nonce`             | `uint256` | The user's nonce specific to the NameService contract for this `withdrawOffer` action's replay protection.                                             |
| `signature`         | `bytes`   | The EIP-191 signature from `user` authorizing this withdraw offer action.                                                                      |
| `priorityFee_EVVM`  | `uint256` | Optional fee (in MATE) paid by `user` to the `msg.sender` (staker executing the transaction) via the EVVM contract for prioritized processing. |
| `nonce_EVVM`        | `uint256` | **Required if `priorityFee_EVVM > 0`**. `user`'s nonce for the EVVM payment call used only to pay the priority fee.                            |
| `priorityFlag_EVVM` | `bool`    | **Required if `priorityFee_EVVM > 0`**. Priority flag (sync/async) for the EVVM payment call paying the priority fee.                          |
| `signature_EVVM`    | `bytes`   | **Required if `priorityFee_EVVM > 0`**. `user`'s signature authorizing the EVVM payment call paying the priority fee.                          |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount and uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
- The NameService withdraw offer signature (`signature`) follows the [Withdraw Offer Signature Structure](../../09-SignatureStructures/02-NameService/04-withdrawOfferStructure.md).
- The EVVM parameters facilitate the transfer of the offer funds and any optional priority fee from the offeror (`user`).

:::

## Execution Methods

This function can be executed by any address.

### Fisher Execution

When the executor is the fisher:

1. The user sends the payment request to the fishing spot
2. The fisher captures the transaction and validates all parameters
3. The fisher submits the transaction to the contract for processing

### Direct Execution

When the executor is the user or a service:

1. The user/service submits their transaction directly to the contract

## Workflow

Failure at validation steps typically reverts the transaction.

1.  **NameService Nonce Verification**: Checks if the provided `_nonce` is unused for the `_user` using the `verifyIfNonceIsAvailable` modifier. Reverts if the nonce is already used.
2.  **Executor Staker Verification**: Verifies that the `msg.sender` (the executor submitting the transaction) is an sMATE staker by calling `isMateStaker()` on the associated EVVM contract. Reverts if `msg.sender` is not a staker.
3.  **Offerer Verification**: Retrieves the offer data associated with `_username` and `_offerID` from the `usernameOffers` mapping. Verifies that the `_user` parameter matches the `offerer` address stored in the retrieved offer data. Reverts if `_user` is not the recorded offerer or if the specified offer does not exist.
4.  **Withdrawal Signature Validation**: Verifies the `_signature` provided by `_user` (which authorizes this NameService withdrawal action) using the `verifyMessageSignedForWithdrawOffer` function. Reverts if the signature is invalid according to the [Withdraw Offer Signature Structure](../../09-SignatureStructures/02-NameService/04-withdrawOfferStructure.md).
5.  **EVVM Payment Execution (Optional Priority Fee)**: If `_priorityFeeForFisher` is greater than zero:
    - Calls an internal helper function (e.g., `makePay`) designed to interact with the EVVM's `payMateStaker` function.
    - Uses the provided `_nonce_Evvm`, `_priority_Evvm`, and `_signature_Evvm` parameters to authorize the EVVM payment.
    - This action attempts to transfer the `_priorityFeeForFisher` amount of principal tokens from the `_user` address to the `msg.sender` address via the EVVM contract mechanism.
    - Reverts if this EVVM payment process fails.
6.  **Withdrawal Offer Payment Execution (Return Funds)**: Calls an internal helper function (e.g., `makeCaPay`) responsible for refunding the escrowed offer funds. It retrieves the **total** `amount` stored in the `usernameOffers[_username][_offerID]` data structure and transfers this full amount of principal tokens from the NameService contract's escrow back to the original offeror (`_user`). Reverts if this principal token transfer fails.
7.  **Offer Cleanup**: Modifies the state of the withdrawn offer in the `usernameOffers` mapping by setting the `offerer` field for the specific `_username` and `_offerID` to `address(0)`. This effectively invalidates the offer slot.
8.  **Reward Distribution (to Executor)**: Calls an internal helper function (e.g., `makeCaPay`) to distribute rewards in principal tokens to `msg.sender` (the executor). The rewards consist of:
    - A base MATE reward, typically fetched from the EVVM contract (e.g., 1 \* `seeMateReward()`).
    - The `_priorityFeeForFisher`, if it was greater than zero and successfully paid in Step 5.
    - An additional amount calculated based on the withdrawn offer's value: 0.125% of the `amount` stored in `usernameOffers[_username][_offerID]`. _(This is derived from the 0.5% fee structure associated with the offer)._
9.  **Nonce Management**: Marks the NameService `_nonce` (provided as input parameter) as used for the `_user` address within the `mateNameServiceNonce` mapping to prevent replay of this specific withdrawal action.

![withdrawOffer happy path](./img/04withdrawOffer/withdrawOffer_HappyPath.svg)
![withdrawOffer failed path](./img/04withdrawOffer/withdrawOffer_FailedPath.svg)

---

## acceptOffer


**Function Type**: `external`  
**Function Signature**: `acceptOffer(address,string,uint256,address,uint256,uint256,uint256,bytes,bytes)`
**Function Selector**: `0xae36fe72`

Allows the current owner (`user`) of a username (`username`) to accept a specific, active offer (`offerID`) made by another user. Accepting the offer triggers the transfer of the agreed principal tokens from the offeror to the owner, and transfers the ownership of the username to the original offeror.

## Parameters

| Parameter Name   | Type      | Description                                                                        |
| ---------------- | --------- | ---------------------------------------------------------------------------------- |
| `user`           | `address` | The address of the **current owner** of the `username` who is accepting the offer. |
| `username`       | `string`  | The username associated with the offer being accepted.                             |
| `offerID`        | `uint256` | The unique identifier of the specific offer being accepted.                        |
| `token`          | `address` | The address of the token to be used for payment.                                   |
| `amount`         | `uint256` | The total amount to be transferred for the offer.                                  |
| `priorityFee`    | `uint256` | The priority fee amount.                                                           |
| `nonce`          | `uint256` | The nonce value for the signature.                                                 |
| `signature_EVVM` | `bytes`   | The EVVM payment signature.                                                        |
| `signature`      | `bytes`   | The NameService accept offer signature.                                                    |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount and uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
- The NameService accept offer signature (`signature`) must be generated by the **current owner (`user`)** and follows the [Accept Offer Signature Structure](../../09-SignatureStructures/02-NameService/05-acceptOfferStructure.md).
- The EVVM parameters facilitate the transfer of the offer funds and any optional priority fee from the offeror (`user`).

:::

## Execution Methods

This function can be executed by any address.

## Workflow

Failure at validation steps typically reverts the transaction.

1. **Username Owner Verification**: Checks if the provided `_user` address is the registered owner of the `_username` (e.g., using an internal ownership check like `onlyAdminOfIdentity`). Reverts if `_user` is not the owner.
2. **NameService Nonce Verification**: Checks if the provided `_nonce` is unused for the `_user` using the `verifyIfNonceIsAvailable` modifier. Reverts if the nonce is already used.
3. **Offer validation**: Retrieves the offer data associated with `_username` and `_offerID`. Checks that the offer exists (e.g., `offerer != address(0)`) and that its `expireDate` has not passed based on the current block timestamp. Reverts if the offer is invalid or expired.
4. **Signature Verification**: Validates the `_signature` provided by `_user` (the owner) against the reconstructed message hash using `verifyMessageSignedForAcceptOffer`. Reverts if the signature is invalid according to the [Accept Offer Signature Structure](../../09-SignatureStructures/02-NameService/05-acceptOfferStructure.md).
5. **EVVM Payment Execution (Optional Priority Fee)**: If `_priorityFeeForFisher` is greater than zero:
   - Calls an internal helper function (e.g., `makePay`) designed to interact with the EVVM's `payMateStaker` function.
   - Uses the provided `_nonce_Evvm`, `_priority_Evvm`, and `_signature_Evvm` parameters to authorize the EVVM payment.
   - This action attempts to transfer the `_priorityFeeForFisher` amount of principal tokens from the `_user` address to the `msg.sender` address via the EVVM contract mechanism.
   - Reverts if this EVVM payment process fails.
6. **Transaction Execution (Pay Seller)**: Calls an internal helper function (e.g., `makeCaPay`) to transfer the accepted offer funds (retrieved from `usernameOffers[_username][_offerID].amount`).
7. **Ownership Transfer**: Transfers the ownership of the `_username` within the NameService system from the current owner (`_user`) to the address of the original offeror (retrieved from `usernameOffers[_username][_offerID].offerer`).
8. **Offer Cleanup**: Updates the `usernameOffers[_username][_offerID]` entry by setting the `offerer` field to `address(0)`, marking the offer as fulfilled and the slot as empty/invalid.
9. **Reward Distribution (to Executor)**: Calls an internal helper function (e.g., `makeCaPay`) to distribute rewards in principal tokens to `msg.sender` (the executor). The rewards consist of:
   - A base MATE reward, typically fetched from the EVVM contract (e.g., 1 \* `seeMateReward()`).
   - The `_priorityFeeForFisher`, if it was greater than zero and successfully paid in Step 5.
   - An additional amount calculated based on the withdrawn offer's value: 0.125% of the `amount` stored in `usernameOffers[_username][_offerID]`. _(This is derived from the 0.5% fee structure associated with the offer)._
10. **Nonce Management**: Marks the NameService `_nonce` (provided as input parameter) as used for the `_user` address within the `mateNameServiceNonce` mapping to prevent replay of this specific accept action.

![acceptOffer happy path](./img/05acceptOffer/acceptOffer_HappyPath.svg)
![acceptOffer failed path](./img/05acceptOffer/acceptOffer_FailedPath.svg)

---

## renewUsername


**Function Type**: `external`
**Function Signature**: `renewUsername(address,string,address,uint256,uint256,uint256,bytes,bytes)`
**Function Selector**: `0xf1747483`

Allows the current owner (`user`) of a registered username (`username`) to extend its expiration date by one year. The cost of renewal varies based on when the renewal occurs relative to the current expiration date and involves a payment in principal tokens facilitated via the EVVM contract.

## Parameters

| Parameter Name   | Type      | Description                                                                |
| ---------------- | --------- | -------------------------------------------------------------------------- |
| `user`           | `address` | The address of the **current owner** of the `username` who is renewing it. |
| `username`       | `string`  | The username whose registration is being renewed.                          |
| `token`          | `address` | The address of the token to be used for payment.                           |
| `amount`         | `uint256` | The total amount to be transferred for the renewal.                        |
| `priorityFee`    | `uint256` | The priority fee amount.                                                   |
| `nonce`          | `uint256` | The nonce value for the signature.                                         |
| `signature_EVVM` | `bytes`   | The EVVM payment signature.                                                |
| `signature`      | `bytes`   | The NameService renew username signature.                                          |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount and uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md).
- The NameService renew username signature (`signature`) must be generated by the **current owner (`user`)** and follows the [Renew Username Signature Structure](../../09-SignatureStructures/02-NameService/06-renewUsernameStructure.md).

:::

## Execution Methods

This function can be executed by any address.

## Workflow

Failure at validation steps typically reverts the transaction.

1. **Username Owner Verification**: Checks if the provided `_user` address is the registered owner of the `_username` (e.g., using an internal ownership check like `onlyAdminOfIdentity`). Reverts if `_user` is not the owner.
2. **NameService Nonce Verification**: Checks if the provided `_nonce` is unused for the `_user` using the `verifyIfNonceIsAvailable` modifier. Reverts if the nonce is already used.
3. **Identity Verification**: Checks if the identity exists and is a valid username (e.g., `identityDetails[_username].flagNotAUsername` indicates it's a valid username type). Reverts if the identity doesn't exist or isn't a valid username.
4. **Signature Verification**: Validates the `_signature` provided by `_user` (the owner) against the reconstructed message hash using `verifyMessageSignedForRenewUsername`. Reverts if the signature is invalid according to the [Renew Username Signature Structure](../../09-SignatureStructures/02-NameService/06-renewUsernameStructure.md).
5. **Date Verification**: Checks if this calculated date exceeds the maximum allowed registration term (e.g., 100 years from the current block timestamp). Reverts if the renewal would extend the registration beyond this limit.
6. **Price Calculation**: Calls the `seePriceToRenew(_username)` function (or equivalent internal logic) to determine the cost (`renewalFee`) in MATE required to renew the `_username` for 366 days.
7. **EVVM Payment Execution**: The payment is executed using the `makePay` function.
8. **Reward Distribution (to Executor)**: Checks if the executor (`msg.sender`) is an sMATE staker (e.g., using `isMateStaker(msg.sender)`). If `msg.sender` is a staker:
   - Calls an internal helper function (e.g., `_giveMateReward` or `makeCaPay`) to distribute rewards in principal tokens directly to `msg.sender`.
   - The rewards typically include:
     - A base MATE reward (e.g., 1 \* `seeMateReward()` value obtained from the EVVM contract).
     - The full `_priorityFeeForFisher` amount, if it was greater than zero and successfully paid in Step 7.
     - A percentage share (e.g., 50%) of the `renewalFee` that was successfully paid in Step 7.
   - _(The remaining portion of the `renewalFee` is typically retained by the service)._
9. **Username Renewal**: Updates the stored expiration date for the username by adding one year's duration (specifically, 366 days' worth of seconds) to the current `identityDetails[_username].expireDate`.
10. **Nonce Management**: Marks the NameService `_nonce` (provided as input parameter) as used for the `_user` address within the `mateNameServiceNonce` mapping to prevent replay of this specific accept action.

![renewUsername happy path](./img/06renewUsername/renewUsername_HappyPath.svg)
![renewUsername failed path](./img/06renewUsername/renewUsername_FailedPath.svg)

---

## Add Custom Metadata Function


This section details the `addCustomMetadata` function within the Name Service service. This function allows the current owner (`user`) of a registered identity (`identity`, typically a username) to associate a custom string value (`value`) with their identity.

To add custom metadata, the identity owner must authorize the action with a signature and pay a fee (10 times the current reward amount, determined by `getPriceToAddCustomMetadata()`) via the EVVM contract. An optional priority fee can also be paid to the executor. This function can be executed by any address.

**Function Type**: `public`  
**Function Signature**: `addCustomMetadata(address,string,string,uint256,bytes,uint256,uint256,bool,bytes)`  
**Function Selector**: `0xe6efeffa`

## Parameters

| Parameter Name          | Type      | Description                                                                                                                                     |
| ----------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `user`                 | `address` | The address of the **current owner** of the `identity` who is adding the metadata.                                                             |
| `identity`             | `string`  | The registered identity (e.g., username) to which the custom metadata will be added/associated.                                                 |
| `value`                | `string`  | The custom metadata value (as a string) to be stored. Must not be empty. See "Recommended Metadata Value Format" below for suggested structure. |
| `nonce`                | `uint256` | The **owner's (`user`)** nonce specific to the Name Service contract (`nameServiceNonce`) for this `addCustomMetadata` action's replay protection.  |
| `signature`            | `bytes`   | The EIP-191 signature **from the owner (`user`)** authorizing _this add metadata action_                                                       |
| `priorityFee_EVVM` | `uint256` | Optional fee (in principal tokens) paid **by the owner (`user`)** to the `msg.sender` (executor) via the EVVM contract for prioritized processing.  |
| `nonce_EVVM`           | `uint256` | **Required**. The **owner's (`user`)** nonce for the EVVM payment call used to pay the Metadata Fee + Priority Fee.                    |
| `priorityFlag_EVVM`        | `bool`    | **Required**. Priority flag (sync/async) for the EVVM payment call paying the fees.                                                     |
| `signature_EVVM`       | `bytes`   | **Required**. The **owner's (`user`)** signature authorizing the EVVM payment call paying the Metadata Fee + Priority Fee.             |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount (calculated Metadata Fee + `priorityFee_EVVM`) and is paid **by the identity owner (`user`)**. It uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md). Since a metadata fee is always required, these EVVM parameters are **mandatory**.
- The Name Service add custom metadata signature (`signature`) must be generated by the **current owner (`user`)** and follows the [Add Custom Metadata Signature Structure](../../09-SignatureStructures/02-NameService/07-addCustomMetadataStructure.md).
- The metadata fee is calculated dynamically as **10 times the current EVVM reward amount** via `getPriceToAddCustomMetadata()`.

:::

## Metadata Pricing

The cost to add custom metadata is calculated dynamically based on the current EVVM reward amount:

**Metadata Fee** = `10 * getRewardAmount()`

This ensures the pricing scales with the network's current reward structure and maintains consistency with other protocol fees.

## Metadata Storage Mechanism

Custom metadata is stored associated with an identity. The system allows flexibility in the format of the `value` string. However, a recommended structure exists to promote interoperability and standardized parsing.

## Recommended Metadata Value Format

While not enforced on-chain, adhering to this format for the `value` string is highly recommended:

`[schema]:[subschema]>[value]`

- **Separators**:
  - `:` separates the `schema` and `subschema`.
  - `>` separates the schema/subschema prefix from the actual `value` data.
- **Schema**: A category identifier, preferably based on standard vocabularies like [Schema.org](https://schema.org/docs/schemas.html) (e.g., `email`, `memberOf`, `url`).
- **Subschema**: Provides additional context within the main schema (optional, e.g., `dev`, `work`, `personal`).
- **Padding**: If `schema` or `subschema` has fewer than 5 characters, it **should** be right-padded with spaces to exactly 5 characters. This aids off-chain parsing.
- **Social Media**: Use `schema = "socialMedia"` and `subschema = <network_name>` (e.g., `x`, `linkedin`, `github` - padded if needed). The `value` is the username/handle on that network.

**Examples:**

- `memberOf:>EVVM` _(Schema: memberOf, Value: EVVM)_
- `socialMedia:x>jistro` _(Schema: socialMedia, Subschema: x, Value: jistro)_
- `email:dev>jistro[at]evvm.org` _(Schema: email, Subschema: dev, Value: jistro[at]evvm.org)_
- `email:callme>contact[at]jistro.xyz` _(Schema: email, Subschema: callme, Value: contact[at]jistro.xyz)_

### Workflow

Failure at validation steps typically reverts the transaction. The steps execute **in the specified order**.

1.  **Identity Ownership Verification**: Checks if the provided `identity` is owned by the `user`. Reverts if not.
2.  **Name Service Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if used.
3.  **Custom Metadata Length Validation**: Checks that the provided `value` string has a length greater than 0. Reverts if the value is empty.
4.  **Add Custom Metadata Signature Validation**: Verifies the `signature` provided by `user` (authorizing this Name Service action) using `verifyMessageSignedForAddCustomMetadata`. Reverts if invalid according to the [Add Custom Metadata Signature Structure](../../09-SignatureStructures/02-NameService/07-addCustomMetadataStructure.md).
5.  **Payment execution**: Calls `makePay` to transfer the payment using the `getPriceToAddCustomMetadata` function and `priorityFee_EVVM` of principal tokens from `user` to the service via the EVVM contract. Reverts if the payment fails.
6.  **Reward Distribution (to Executor)**: If the executor (`msg.sender`) is an sMATE staker, calls an internal helper function (`makeCaPay`) to distribute rewards in principal tokens directly to `msg.sender`. The rewards consist of:
    - 5 times the base reward amount (`5 * Evvm(evvmAddress.current).getRewardAmount()`).
    - 50% of the metadata fee (`(getPriceToAddCustomMetadata() * 50) / 100`).
    - The full `priorityFee_EVVM`, if it was greater than zero and successfully paid in Step 5.
7.  **Custom Metadata Storage**: Stores the provided `value` string associated with the `identity`. This is done by adding the `value` to the mapping `identityCustomMetadata[identity][slot] = value` where slot is the current `identityDetails[identity].customMetadataMaxSlots` value.
8.  **Slot Counter Update**: Increments the counter (`identityDetails[identity].customMetadataMaxSlots++`) that tracks the number of metadata entries for that identity.
9.  **Nonce Management**: Marks the Name Service `nonce` (provided as an input parameter for this transaction) as used for the `user` address within the `nameServiceNonce` mapping.

![addCustomMetadata Happy Path](./img/01addCustomMetadata/addCustomMetadata_HappyPath.svg)
![addCustomMetadata Failed Path](./img/01addCustomMetadata/addCustomMetadata_FailedPath.svg)

---

## Remove Custom Metadata Function


This section details the `removeCustomMetadata` function within the name service. This function allows the current owner (`user`) of a registered identity (`identity`, typically a username) to remove a specific custom metadata entry identified by its index (`key`).

To remove custom metadata, the identity owner must authorize the action with a signature and pay a fee (10 times the current reward amount, determined by `getPriceToRemoveCustomMetadata()`) via the EVVM contract. An optional priority fee can also be paid to the executor. This function can be executed by any address.

**Function Type**: `public`  
**Function Signature**: `removeCustomMetadata(address,string,uint256,uint256,bytes,uint256,uint256,bool,bytes)`  
**Function Selector**: `0x8001a999`

## Parameters

| Parameter Name          | Type      | Description                                                                                                                                                        |
| ----------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `user`                 | `address` | The address of the **current owner** of the `identity` who is removing the metadata.                                                                              |
| `identity`             | `string`  | The registered identity (e.g., username) from which the custom metadata will be removed.                                                                           |
| `key`                  | `uint256` | The index (zero-based) of the specific custom metadata entry to be removed from the identity's list.                                                               |
| `nonce`                | `uint256` | The **owner's (`user`)** nonce specific to the Name Service contract (`nameServiceNonce`) for this `removeCustomMetadata` action's replay protection.                  |
| `signature`            | `bytes`   | The EIP-191 signature **from the owner (`user`)** authorizing _this remove metadata action_.                              |
| `priorityFee_EVVM` | `uint256` | Optional fee (in principal tokens) paid **by the owner (`user`)** to the `msg.sender` (executor) via the EVVM contract for prioritized processing of this transaction. |
| `nonce_EVVM`           | `uint256` | **Required**. The **owner's (`user`)** nonce for the EVVM payment call used to pay the Metadata Removal Fee + Priority Fee.                               |
| `priorityFlag_EVVM`        | `bool`    | **Required**. Priority flag (sync/async) for the EVVM payment call paying the fees.                                                                        |
| `signature_EVVM`       | `bytes`   | **Required**. The **owner's (`user`)** signature authorizing the EVVM payment call paying the Metadata Removal Fee + Priority Fee.                        |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount (calculated Metadata Fee + `priorityFee_EVVM`) and is paid **by the identity owner (`user`)**. It uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md). Since a metadata fee is always required, these EVVM parameters are **mandatory**.
- The Name Service remove custom metadata signature (`signature`) must be generated by the **current owner (`user`)** and follows the [Remove Custom Metadata Signature Structure](../../09-SignatureStructures/02-NameService/08-removeCustomMetadataStructure.md).
- The metadata removal fee is calculated dynamically as **10 times the current EVVM reward amount** via `getPriceToRemoveCustomMetadata()`.

:::

## Metadata Pricing

The cost to remove custom metadata is calculated dynamically based on the current EVVM reward amount:

**Metadata Removal Fee** = `10 * getRewardAmount()`

This ensures the pricing scales with the network's current reward structure and maintains consistency with other protocol fees.

### Workflow

Failure at validation steps typically reverts the transaction. The steps execute **in the specified order**.

1.  **Identity Ownership Verification**: Checks if the provided `user` address is the registered owner of the `identity`. Reverts if `user` is not the owner.
2.  **Name Service Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if the nonce is already used.
3.  **Remove Custom Metadata Signature Validation**: Verifies the `signature` provided by `user` (the owner) against the reconstructed message hash using `verifyMessageSignedForRemoveCustomMetadata`. Reverts if the signature is invalid according to the [Remove Custom Metadata Signature Structure](../../09-SignatureStructures/02-NameService/08-removeCustomMetadataStructure.md).
4.  **Custom Metadata Index Validation**: Checks that the provided `key` (index) is valid, meaning it is less than the current number of metadata entries for the `identity` (`key < identityDetails[identity].customMetadataMaxSlots`). Reverts if the index is out of bounds.
5.  **Payment execution**: Calls `makePay` to transfer the payment using the `getPriceToRemoveCustomMetadata()` function and `priorityFee_EVVM` of principal tokens from `user` to the service via the EVVM contract. Reverts if the payment fails.
6.  **Custom Metadata Removal**: Removes the metadata entry at the specified `key` index for the `identity`. The removal process involves two scenarios:
    - **If `key == customMetadataMaxSlots` (Last element):** Directly deletes the metadata entry at `identityCustomMetadata[identity][key]`.
    - **If `key < customMetadataMaxSlots` (Not the last element):** 
      - Iterates from `i = key` up to `customMetadataMaxSlots - 1`.
      - In each iteration, copies the metadata entry from index `i + 1` to index `i` (`identityCustomMetadata[identity][i] = identityCustomMetadata[identity][i + 1]`).
      - Deletes the entry at the last occupied index (`identityCustomMetadata[identity][customMetadataMaxSlots]`) to clear the duplicated data.
7.  **Decrement Count**: Decreases the metadata count: `identityDetails[identity].customMetadataMaxSlots--` to reflect the removal.
8.  **Nonce Management**: Marks the Name Service `nonce` (provided as an input parameter for this transaction) as used for the `user` address within the `nameServiceNonce` mapping.
9.  **Reward Distribution (to Executor)**: If the executor (`msg.sender`) is an sMATE staker, calls an internal helper function (`makeCaPay`) to distribute rewards in principal tokens directly to `msg.sender`. The rewards consist of:
    - 5 times the base reward amount (`5 * Evvm(evvmAddress.current).getRewardAmount()`).
    - The full `priorityFee_EVVM`, if it was greater than zero and successfully paid in Step 5.

![removeCustomMetadata Happy Path](./img/02removeCustomMetadata/removeCustomMetadata_HappyPath.svg)
![removeCustomMetadata Failed Path](./img/02removeCustomMetadata/removeCustomMetadata_FailedPath.svg)

---

## Flush Custom Metadata Function


This section details the `flushCustomMetadata` function within the Name Service. This function allows the current owner (`user`) of a registered identity (`identity`, typically a username) to remove **all** custom metadata entries associated with that identity in a single transaction.

To flush all custom metadata, the identity owner must authorize the action with their signature and pay a fee via the EVVM contract. This fee is calculated dynamically as 10 times the current reward amount per metadata entry via `getPriceToFlushCustomMetadata(identity)`. An optional priority fee can also be paid to the executor. This function can be executed by any address.

**Function Type**: `public`  
**Function Signature**: `flushCustomMetadata(address,string,uint256,bytes,uint256,uint256,bool,bytes)`  
**Function Selector**: `0x3e7899a1`

## Parameters

| Parameter Name          | Type      | Description                                                                                                                                                                                  |
| ----------------------- |-----------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `user`                 | `address` | The address of the **current owner** of the `identity` who is authorizing the flush.                                                                                                        |
| `identity`             | `string`  | The registered identity (e.g., username) from which all custom metadata entries will be flushed.                                                                                             |
| `nonce`                | `uint256` | The **owner's (`user`)** nonce specific to the NameService contract (`nameServiceNonce`) for this `flushCustomMetadata` action's replay protection.                                             |
| `signature`            | `bytes`   | The EIP-191 signature **from the owner (`user`)** authorizing *this flush all metadata action*.                                              |
| `priorityFee_EVVM` | `uint256` | Optional fee (in principal tokens) paid **by the owner (`user`)** to the `msg.sender` (executor) via the EVVM contract for prioritized processing of this transaction.                           |
| `nonce_EVVM`           | `uint256` | **Required**. The **owner's (`user`)** nonce for the EVVM payment call used to pay the total calculated Flush Fee + Priority Fee.                                               |
| `priorityFlag_EVVM`        | `bool`    | **Required**. Priority flag (sync/async) for the EVVM payment call paying the fees.                                                                                                 |
| `signature_EVVM`       | `bytes`   | **Required**. The **owner's (`user`)** signature authorizing the EVVM payment call.                        |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount (calculated Flush Fee + `priorityFee_EVVM`) and is paid **by the identity owner (`user`)**. It uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md). Since a flush fee is always required, these EVVM parameters are **mandatory**.
- The NameService flush custom metadata signature (`signature`) must be generated by the **current owner (`user`)** and follows the [Flush Custom Metadata Signature Structure](../../09-SignatureStructures/02-NameService/09-flushCustomMetadataStructure.md).
- The flush fee is calculated dynamically as **10 times the current EVVM reward amount per metadata entry** via `getPriceToFlushCustomMetadata(identity)`.

:::

## Metadata Pricing

The cost to flush all custom metadata is calculated dynamically based on the current EVVM reward amount and the number of metadata entries:

**Flush Fee** = `(10 * getRewardAmount()) * customMetadataMaxSlots`

This ensures the pricing scales with both the network's current reward structure and the amount of work required to flush all entries.

### Workflow

Failure at validation steps typically reverts the transaction. The steps execute **in the specified order**.

1.  **Identity Ownership Verification**: Checks if the provided `user` address is the registered owner of the `identity`. Reverts if `user` is not the owner.
2.  **NameService Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if the nonce is already used.
3.  **Flush Custom Metadata Signature Validation**: Verifies the `signature` provided by `user` (the owner) against the reconstructed message hash using `verifyMessageSignedForFlushCustomMetadata`. Reverts if the signature is invalid according to the [Flush Custom Metadata Signature Structure](../../09-SignatureStructures/02-NameService/09-flushCustomMetadataStructure.md).
4.  **Empty Metadata Validation**: Checks that the identity has at least one metadata entry (`identityDetails[identity].customMetadataMaxSlots > 0`). Reverts if there are no metadata entries to flush.
5.  **Payment Execution**: Calls `makePay` to transfer the payment using `getPriceToFlushCustomMetadata(identity)` and `priorityFee_EVVM` of principal tokens from `user` to the service via the EVVM contract. Reverts if the payment fails.
6.  **Custom Metadata Removal (Flush)**: Iterates through all metadata entries and deletes them:
    - Loops from `i = 0` to `customMetadataMaxSlots - 1`
    - Deletes each entry: `delete identityCustomMetadata[identity][i]`
7.  **Reward Distribution (to Executor)**: If the executor (`msg.sender`) is an sMATE staker, calls an internal helper function (`makeCaPay`) to distribute rewards in principal tokens directly to `msg.sender`. The rewards consist of:
    - 5 times the base reward amount **multiplied by the number of metadata entries** (`(5 * getRewardAmount()) * customMetadataMaxSlots`).
    - The full `priorityFee_EVVM`, if it was greater than zero and successfully paid in Step 5.
8.  **Reset Metadata Counter**: Sets `identityDetails[identity].customMetadataMaxSlots = 0` to reflect that all metadata has been removed.
9.  **Nonce Management**: Marks the NameService `nonce` as used for the `user` address within the `nameServiceNonce` mapping.

![flushCustomMetadata Happy Path](./img/03flushCustomMetadata/flushCustomMetadata_HappyPath.svg)
![flushCustomMetadata Failed Path](./img/03flushCustomMetadata/flushCustomMetadata_FailedPath.svg)

---

## Flush Username Function


This section details the `flushUsername` function within the Name Service. This function allows the current owner (`user`) of a registered identity (`username`, typically a username) to **permanently delete the username registration and all of its associated data**. This is an irreversible action that makes the username available for registration again by others.

To flush a username, the owner must authorize the action with their signature and pay a fee via the EVVM contract (determined by `getPriceToFlushUsername(username)`). An optional priority fee can also be paid to the executor. This function can be executed by any address.

**Function Type**: `public`  
**Function Signature**: `flushUsername(address,string,uint256,bytes,uint256,uint256,bool,bytes)`  
**Function Selector**: `0xd22c816c`

## Parameters

| Parameter Name          | Type      | Description                                                                                                                                                                          |
| ----------------------- |-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `user`                 | `address` | The address of the **current owner** of the `username` who is authorizing the permanent deletion.                                                                                   |
| `username`             | `string`  | The registered identity (e.g., username) to be permanently flushed from the system.                                                                                                  |
| `nonce`                | `uint256` | The **owner's (`user`)** nonce specific to the Name Service contract (`nameServiceNonce`) for this `flushUsername` action's replay protection.                                           |
| `signature`            | `bytes`   | The EIP-191 signature **from the owner (`user`)** authorizing *this flush username action*.                                        |
| `priorityFee_EVVM` | `uint256` | Optional fee (in principal tokens) paid **by the owner (`user`)** to the `msg.sender` (executor) via the EVVM contract for prioritized processing of this transaction.                   |
| `nonce_EVVM`           | `uint256` | **Required**. The **owner's (`user`)** nonce for the EVVM payment call used to pay the total calculated Flush Fee + Priority Fee.                                         |
| `priorityFlag_EVVM`        | `bool`    | **Required**. Priority flag (sync/async) for the EVVM payment call paying the fees.                                                                                         |
| `signature_EVVM`       | `bytes`   | **Required**. The **owner's (`user`)** signature authorizing the EVVM payment call to transfer the total calculated Flush Fee + Priority Fee.                           |

:::note Signature Links & EVVM Payment

- The EVVM payment signature (`signature_EVVM`) covers the **total** amount (calculated Flush Fee + `priorityFee_EVVM`) and is paid **by the identity owner (`user`)**. It uses the [Single Payment Signature Structure](../../09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md). Since a flush fee is required, these EVVM parameters are **mandatory**.
- The Name Service flush username signature (`signature`) must be generated by the **current owner (`user`)** and follows the [Flush Username Signature Structure](../../09-SignatureStructures/02-NameService/10-flushUsernameStructure.md).
- The flush fee is calculated as the sum of metadata flush cost plus a base username deletion fee via `getPriceToFlushUsername(username)`.

:::

## Username Flush Pricing

The cost to flush a username is calculated dynamically based on the current EVVM reward amount and includes both metadata removal and username deletion costs:

**Flush Fee** = `((10 * getRewardAmount()) * customMetadataMaxSlots) + getRewardAmount()`

This pricing includes:
- **Metadata removal cost**: 10x reward amount per metadata entry
- **Base username deletion fee**: 1x reward amount

### Workflow

Failure at validation steps typically reverts the transaction. The steps execute **in the specified order**.

1.  **NameService Nonce Verification**: Checks if the provided `nonce` is unused for the `user` using the `verifyIfNonceIsAvailable` modifier. Reverts if the nonce is already used.
2.  **Identity Ownership Verification**: Checks if the provided `user` address is the registered owner of the `username`. Reverts if `user` is not the owner.
3.  **Username Expiration and Type Validation**: Validates that the username has not expired and is a valid username type:
    - Checks that `block.timestamp < identityDetails[username].expireDate` (username is still active)
    - Checks that `identityDetails[username].flagNotAUsername == 0x00` (it's a username, not another type of identity)
    - Reverts with `FlushUsernameVerificationFailed` if either condition fails.
4.  **Flush Username Signature Validation**: Verifies the `signature` provided by `user` (the owner) against the reconstructed message hash using `verifyMessageSignedForFlushUsername`. Reverts if the signature is invalid according to the [Flush Username Signature Structure](../../09-SignatureStructures/02-NameService/10-flushUsernameStructure.md).
5.  **Payment Execution**: Calls `makePay` to transfer the payment using `getPriceToFlushUsername(username)` and `priorityFee_EVVM` of principal tokens from `user` to the service via the EVVM contract. Reverts if the payment fails.
6.  **Custom Metadata Removal**: Iterates through all metadata entries and deletes them:
    - Loops from `i = 0` to `customMetadataMaxSlots - 1`
    - Deletes each entry: `delete identityCustomMetadata[username][i]`
7.  **Reward Distribution (to Executor)**: Calls an internal helper function (`makeCaPay`) to distribute rewards in principal tokens directly to `msg.sender` (the executor). The rewards consist of:
    - 5 times the base reward amount **multiplied by the number of metadata entries** (`(5 * getRewardAmount()) * customMetadataMaxSlots`).
    - The full `priorityFee_EVVM`, if it was greater than zero and successfully paid in Step 5.
8.  **Username Registration Reset**: Resets the username registration data while preserving offer slots:
    - Sets `owner` to `address(0)`
    - Sets `expireDate` to `0`
    - Sets `customMetadataMaxSlots` to `0`
    - Preserves existing `offerMaxSlots`
    - Sets `flagNotAUsername` to `0x00` (making it available for re-registration)
9.  **Nonce Management**: Marks the Name Service `nonce` as used for the `user` address within the `nameServiceNonce` mapping.

![flushUsername Happy Path](./img/04flushUsername/flushUsername_HappyPath.svg)
![flushUsername Failed Path](./img/04flushUsername/flushUsername_FailedPath.svg)

---

## Admin Functions(06-NameService)


This section details the administrative functions available in the Name Service contract, which are restricted to the current admin address. These functions facilitate the secure transfer of the admin role, the withdrawal of collected protocol fees, and the updating of core contract dependencies like the EVVM address.

---

## Admin Role Transfer Process

The admin role is transferred using a secure, time-locked, two-step process to prevent immediate or malicious takeovers. This involves a proposal by the current admin and acceptance by the nominated successor after a mandatory waiting period.

### `proposeAdmin`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `proposeAdmin(address _adminToPropose)`

Initiates the admin role transfer process by nominating a new address as the proposed admin. This can only be called by the current admin. The function validates that the proposed admin is not the zero address and is different from the current admin.

#### Parameters

| Parameter        | Type    | Description                                 |
| ---------------- | ------- | ------------------------------------------- |
| `_adminToPropose` | `address` | The address of the nominated new admin.     |

### `cancelProposeAdmin`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `cancelProposeAdmin()`

Allows the **current admin** to cancel a pending admin change proposal before it has been accepted, immediately revoking the nomination.

### `acceptProposeAdmin`

**Function Type**: `public`
**Function Signature**: `acceptProposeAdmin()`

Allows the **proposed admin** to claim the admin role after the mandatory waiting period (1 day) has passed. This function can only be successfully called by the proposed admin address.

### Complete Workflow

1.  **Proposal Initiation**: The current admin calls `proposeAdmin(newAdminAddress)` to nominate a successor. The function validates that the new address is not zero and is different from the current admin. A proposal timestamp is recorded with a 1-day waiting period (`block.timestamp + 1 days`).
2.  **Proposal Cancellation (Optional)**: At any point before the role is accepted, the **current admin** can call `cancelProposeAdmin` to nullify the pending proposal by resetting the proposal address and time.
3.  **Role Acceptance**: The **proposed admin** must wait for the mandatory 1-day period to elapse after the proposal timestamp. After the waiting period is over, the proposed admin calls `acceptProposeAdmin`. The function verifies that the `msg.sender` is the proposed admin and that the waiting period has passed. Upon success, the admin role is transferred to the new address and the proposal data is reset.

![Admin Role Change Process](./img/04adminFunctions/AdminChangeProcess.svg)

---

## Fee Withdrawal Process

The withdrawal of collected protocol fees also follows a secure, time-locked, two-step proposal process to ensure transparency and prevent immediate fund drainage.

### `proposeWithdrawPrincipalTokens`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `proposeWithdrawPrincipalTokens(uint256 _amount)`

Initiates the withdrawal process by proposing an amount of principal tokens to be withdrawn from the contract's collected fees. The function validates that sufficient funds are available after reserving amounts for operations and locked offers.

:::note Withdrawable Amount Calculation
The `_amount` can **only** be from the fees collected by the contract. The calculation ensures sufficient funds remain by subtracting:
- **5083**: Reserved amount for operations
- **Current reward amount**: Buffer for reward payments
- **Locked offer funds**: `principalTokenTokenLockedForWithdrawOffers` reserved for active offers

Formula: `Available = Total Balance - (5083 + Reward Amount + Locked Offers)`
:::

#### Parameters

| Parameter | Type      | Description                                |
| --------- | --------- | ------------------------------------------ |
| `_amount` | `uint256` | The amount of principal tokens to be withdrawn. |

### `cancelWithdrawPrincipalTokens`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `cancelWithdrawPrincipalTokens()`

Allows the current admin to cancel a pending fee withdrawal proposal before it has been claimed.

### `claimWithdrawPrincipalTokens`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `claimWithdrawPrincipalTokens()`

Allows the admin to execute the proposed withdrawal of principal tokens after the mandatory waiting period (1 day) has passed.

### Complete Workflow

1.  **Proposal Initiation**: The current admin calls `proposeWithdrawPrincipalTokens(_amount)`. The function validates that the proposed `_amount` is available after subtracting reserved funds (5083 + reward amount + locked offers) and is greater than zero. A proposal timestamp is recorded with a 1-day waiting period (`block.timestamp + 1 days`).
2.  **Proposal Cancellation (Optional)**: At any point before the withdrawal is claimed, the **current admin** can call `cancelWithdrawPrincipalTokens` to nullify the proposal by resetting the amount and time.
3.  **Withdrawal Confirmation**: The admin must wait for the mandatory 1-day period to elapse after the proposal timestamp. After the waiting period is over, the admin calls `claimWithdrawPrincipalTokens`. The function verifies that the waiting period has passed. Upon success, it transfers the proposed amount of principal tokens to the admin's address using `makeCaPay`, then resets the proposal data.

![Withdraw Principal Tokens from Fees Process](./img/04adminFunctions/WithdrawalProcess.svg)

---

## Change EVVM Contract Address Process

This two-step, time-locked process allows the admin to safely update the address of the core EVVM contract dependency, ensuring the NameService contract can adapt to future infrastructure changes.

### `proposeChangeEVVMContractAddress`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `proposeChangeEvvmAddress(address _newEvvmAddress)`

Initiates the process to change the EVVM contract address by proposing a new address. The function validates that the new address is not the zero address.

#### Parameters
| Parameter                 | Type    | Description                                   |
| ------------------------- | ------- | --------------------------------------------- |
| `_newEvvmAddress` | `address` | The address of the new EVVM contract to be set. |

### `cancelChangeEvvmAddress`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `cancelChangeEvvmAddress()`

Allows the current admin to cancel a pending EVVM contract address change proposal before it has been finalized.

### `acceptChangeEvvmAddress`

**Function Type**: `public` (`onlyAdmin`)
**Function Signature**: `acceptChangeEvvmAddress()`

Allows the **current admin** to finalize the change and set the new EVVM contract address after the mandatory waiting period (1 day) has passed.

### Complete Workflow

1.  **Proposal Initiation**: The current admin calls `proposeChangeEvvmAddress(newEVVMAddress)` to nominate a new EVVM contract address. The function validates that the address is not zero. A proposal timestamp is recorded with a 1-day waiting period (`block.timestamp + 1 days`).
2.  **Proposal Cancellation (Optional)**: At any point before the new address is accepted, the **current admin** can call `cancelChangeEvvmAddress` to nullify the pending proposal by resetting the address and time.
3.  **Address Acceptance**: The **current admin** must wait for the mandatory 1-day period to elapse after the proposal timestamp. After the waiting period is over, the admin calls `acceptChangeEvvmAddress`. The function verifies that the waiting period has passed. Upon success, the EVVM contract address is updated to the new address and the proposal data is reset.

![Change EVVM Contract Address Process](./img/04adminFunctions/ChangeEVVMProcess.svg)
---

---

## Getter Functions(06-NameService)


This section documents the view functions available in the Name Service contract that allow querying system state, user information, pricing details, and administrative data. These functions are read-only and do not modify the blockchain state.

---

## Identity Verification Functions

### `verifyIfIdentityExists`

**Function Type**: `public view`  
**Function Signature**: `verifyIfIdentityExists(string memory _identity) returns (bool)`

Checks if an identity exists in the system, handling both pre-registrations and actual username registrations.

#### Parameters

| Parameter   | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| `_identity` | `string` | The identity/username to check           |

#### Returns

| Type   | Description                                    |
| ------ | ---------------------------------------------- |
| `bool` | `true` if the identity exists and is valid     |

### `strictVerifyIfIdentityExist`

**Function Type**: `public view`  
**Function Signature**: `strictVerifyIfIdentityExist(string memory _username) returns (bool)`

Strictly verifies if an identity exists and reverts if not found. This is a more strict version that reverts instead of returning false.

#### Parameters

| Parameter   | Type     | Description                 |
| ----------- | -------- | --------------------------- |
| `_username` | `string` | The username to verify      |

#### Returns

| Type   | Description                                           |
| ------ | ----------------------------------------------------- |
| `bool` | `true` if username exists (reverts if not found)     |

### `isUsernameAvailable`

**Function Type**: `public view`  
**Function Signature**: `isUsernameAvailable(string memory _username) returns (bool)`

Checks if a username is available for registration. A username is available if it was never registered or has been expired for 60+ days.

#### Parameters

| Parameter   | Type     | Description                                |
| ----------- | -------- | ------------------------------------------ |
| `_username` | `string` | The username to check availability for     |

#### Returns

| Type   | Description                                      |
| ------ | ------------------------------------------------ |
| `bool` | `true` if username is available for registration |

---

## Identity Information Functions

### `getOwnerOfIdentity`

**Function Type**: `public view`  
**Function Signature**: `getOwnerOfIdentity(string memory _username) returns (address)`

Returns the owner address of a registered identity.

#### Parameters

| Parameter   | Type     | Description             |
| ----------- | -------- | ----------------------- |
| `_username` | `string` | The username to query   |

#### Returns

| Type      | Description                      |
| --------- | -------------------------------- |
| `address` | Address of the username owner    |

### `verifyStrictAndGetOwnerOfIdentity`

**Function Type**: `public view`  
**Function Signature**: `verifyStrictAndGetOwnerOfIdentity(string memory _username) returns (address)`

Combines strict verification with owner lookup in one call. Reverts if username doesn't exist.

#### Parameters

| Parameter   | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| `_username` | `string` | The username to verify and get owner  |

#### Returns

| Type      | Description                                    |
| --------- | ---------------------------------------------- |
| `address` | Owner address (reverts if username not found) |

### `getIdentityBasicMetadata`

**Function Type**: `public view`  
**Function Signature**: `getIdentityBasicMetadata(string memory _username) returns (address, uint256)`

Returns essential metadata for quick identity verification including owner and expiration date.

#### Parameters

| Parameter   | Type     | Description                        |
| ----------- | -------- | ---------------------------------- |
| `_username` | `string` | The username to get basic info for |

#### Returns

| Type                       | Description                         |
| -------------------------- | ----------------------------------- |
| `(address, uint256)`       | Owner address and expiration timestamp |

### `getExpireDateOfIdentity`

**Function Type**: `public view`  
**Function Signature**: `getExpireDateOfIdentity(string memory _identity) returns (uint256)`

Returns the timestamp when the username registration expires.

#### Parameters

| Parameter   | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| `_identity` | `string` | The username to check expiration for |

#### Returns

| Type      | Description                                        |
| --------- | -------------------------------------------------- |
| `uint256` | Expiration timestamp in seconds since Unix epoch   |

---

## Custom Metadata Functions

### `getAmountOfCustomMetadata`

**Function Type**: `public view`  
**Function Signature**: `getAmountOfCustomMetadata(string memory _username) returns (uint256)`

Returns the count of metadata slots currently used by a username.

#### Parameters

| Parameter   | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `_username` | `string` | The username to count metadata   |

#### Returns

| Type      | Description                           |
| --------- | ------------------------------------- |
| `uint256` | Number of custom metadata entries     |

### `getFullCustomMetadataOfIdentity`

**Function Type**: `public view`  
**Function Signature**: `getFullCustomMetadataOfIdentity(string memory _username) returns (string[] memory)`

Retrieves all custom metadata entries for a username as an array.

#### Parameters

| Parameter   | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| `_username` | `string` | The username to get metadata    |

#### Returns

| Type              | Description                            |
| ----------------- | -------------------------------------- |
| `string[] memory` | Array of all custom metadata strings   |

### `getSingleCustomMetadataOfIdentity`

**Function Type**: `public view`  
**Function Signature**: `getSingleCustomMetadataOfIdentity(string memory _username, uint256 _key) returns (string memory)`

Retrieves a specific custom metadata entry by index.

#### Parameters

| Parameter   | Type     | Description                           |
| ----------- | -------- | ------------------------------------- |
| `_username` | `string` | The username to get metadata from     |
| `_key`      | `uint256`| The index of the metadata entry       |

#### Returns

| Type            | Description                                 |
| --------------- | ------------------------------------------- |
| `string memory` | The metadata string at the specified index |

### `getCustomMetadataMaxSlotsOfIdentity`

**Function Type**: `public view`  
**Function Signature**: `getCustomMetadataMaxSlotsOfIdentity(string memory _username) returns (uint256)`

Returns the total capacity for custom metadata entries.

#### Parameters

| Parameter   | Type     | Description                              |
| ----------- | -------- | ---------------------------------------- |
| `_username` | `string` | The username to check metadata capacity  |

#### Returns

| Type      | Description                          |
| --------- | ------------------------------------ |
| `uint256` | Maximum number of metadata slots     |

---

## Marketplace Functions

### `getOffersOfUsername`

**Function Type**: `public view`  
**Function Signature**: `getOffersOfUsername(string memory _username) returns (OfferMetadata[] memory)`

Returns all offers made for a specific username, including both active and expired offers.

#### Parameters

| Parameter   | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| `_username` | `string` | The username to get offers for  |

#### Returns

| Type                      | Description                              |
| ------------------------- | ---------------------------------------- |
| `OfferMetadata[] memory`  | Array of all offer metadata structures  |

### `getSingleOfferOfUsername`

**Function Type**: `public view`  
**Function Signature**: `getSingleOfferOfUsername(string memory _username, uint256 _offerID) returns (OfferMetadata memory)`

Retrieves detailed information about a particular offer.

#### Parameters

| Parameter   | Type     | Description                      |
| ----------- | -------- | -------------------------------- |
| `_username` | `string` | The username to get offer from   |
| `_offerID`  | `uint256`| The ID/index of specific offer   |

#### Returns

| Type                    | Description                            |
| ----------------------- | -------------------------------------- |
| `OfferMetadata memory`  | The complete offer metadata structure  |

### `getLengthOfOffersUsername`

**Function Type**: `public view`  
**Function Signature**: `getLengthOfOffersUsername(string memory _username) returns (uint256)`

Counts the total number of offers made for a username.

#### Parameters

| Parameter   | Type     | Description                     |
| ----------- | -------- | ------------------------------- |
| `_username` | `string` | The username to count offers    |

#### Returns

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `uint256` | Total number of offers that have been made |

---

## Pricing Functions

### `getPriceOfRegistration`

**Function Type**: `public view`  
**Function Signature**: `getPriceOfRegistration(string memory username) returns (uint256)`

Returns the price to register a specific username. Price is fully dynamic based on existing offers and timing:

- **No Offers**: Price is 100x current EVVM reward amount (standard rate)
- **Has Offers**: Price is calculated using `seePriceToRenew` function logic (market-based pricing)
  - Uses the same complex pricing algorithm as username renewal
  - Factors in active offers, market demand, and timing
  - Results in higher prices for in-demand usernames

#### Parameters

| Parameter  | Type     | Description                           |
| ---------- | -------- | ------------------------------------- |
| `username` | `string` | The username to get registration price for |

#### Returns

| Type      | Description                                     |
| --------- | ----------------------------------------------- |
| `uint256` | Current registration price in Principal Tokens  |

### `seePriceToRenew`

**Function Type**: `public view`  
**Function Signature**: `seePriceToRenew(string memory _identity) returns (uint256)`

Calculates the cost to renew a username registration. Pricing varies based on timing and market demand:

- Free if renewed before expiration (within grace period)
- Variable cost based on highest active offer (minimum 500 Principal Token)
- Fixed 500,000 Principal Token if renewed more than 1 year before expiration

#### Parameters

| Parameter   | Type     | Description                                 |
| ----------- | -------- | ------------------------------------------- |
| `_identity` | `string` | The username to calculate renewal price for |

#### Returns

| Type      | Description                                      |
| --------- | ------------------------------------------------ |
| `uint256` | Cost in Principal Tokens to renew the username  |

### `getPriceToAddCustomMetadata`

**Function Type**: `public view`  
**Function Signature**: `getPriceToAddCustomMetadata() returns (uint256)`

Returns the current price to add custom metadata to a username. Price is dynamic based on current EVVM reward amount (10x reward).

#### Returns

| Type      | Description                                      |
| --------- | ------------------------------------------------ |
| `uint256` | Cost in Principal Tokens (10x current reward)   |

### `getPriceToRemoveCustomMetadata`

**Function Type**: `public view**  
**Function Signature**: `getPriceToRemoveCustomMetadata() returns (uint256)`

Returns the current price to remove a single custom metadata entry.

#### Returns

| Type      | Description                                      |
| --------- | ------------------------------------------------ |
| `uint256` | Cost in Principal Tokens (10x current reward)   |

### `getPriceToFlushCustomMetadata`

**Function Type**: `public view`  
**Function Signature**: `getPriceToFlushCustomMetadata(string memory _identity) returns (uint256)`

Returns the cost to remove all custom metadata entries from a username. Cost scales with the number of metadata entries.

#### Parameters

| Parameter   | Type     | Description                        |
| ----------- | -------- | ---------------------------------- |
| `_identity` | `string` | The username to calculate cost for |

#### Returns

| Type      | Description                                               |
| --------- | --------------------------------------------------------- |
| `uint256` | Total cost (10x reward amount per metadata entry)        |

### `getPriceToFlushUsername`

**Function Type**: `public view`  
**Function Signature**: `getPriceToFlushUsername(string memory _identity) returns (uint256)`

Returns the cost to completely remove a username and all its data. Includes cost for metadata removal plus base deletion fee.

#### Parameters

| Parameter   | Type     | Description                          |
| ----------- | -------- | ------------------------------------ |
| `_identity` | `string` | The username to calculate cost for   |

#### Returns

| Type      | Description                                                     |
| --------- | --------------------------------------------------------------- |
| `uint256` | Total cost (metadata flush cost + 1x reward amount)            |

---

## Nonce Management Functions

### `checkIfNameServiceNonceIsAvailable`

**Function Type**: `public view**  
**Function Signature**: `checkIfNameServiceNonceIsAvailable(address _user, uint256 _nonce) returns (bool)`

Checks if a nonce has been used by a specific user to prevent replay attacks.

#### Parameters

| Parameter | Type      | Description                    |
| --------- | --------- | ------------------------------ |
| `_user`   | `address` | Address of the user to check   |
| `_nonce`  | `uint256` | Nonce value to verify          |

#### Returns

| Type   | Description                                      |
| ------ | ------------------------------------------------ |
| `bool` | `true` if nonce used, `false` if still available |

---

## Administrative Getter Functions

### `getAdmin`

**Function Type**: `public view`  
**Function Signature**: `getAdmin() returns (address)`

Returns the current admin address with administrative privileges.

#### Returns

| Type      | Description                    |
| --------- | ------------------------------ |
| `address` | The current admin address      |

### `getAdminFullDetails`

**Function Type**: `public view`  
**Function Signature**: `getAdminFullDetails() returns (address, address, uint256)`

Returns complete admin information including pending proposals.

#### Returns

| Type                              | Description                                    |
| --------------------------------- | ---------------------------------------------- |
| `(address, address, uint256)`     | Current admin, proposed admin, acceptance time |

### `getProposedWithdrawAmountFullDetails`

**Function Type**: `public view`  
**Function Signature**: `getProposedWithdrawAmountFullDetails() returns (uint256, uint256)`

Returns information about pending token withdrawal proposals.

#### Returns

| Type                    | Description                                            |
| ----------------------- | ------------------------------------------------------ |
| `(uint256, uint256)`    | Proposed withdrawal amount and acceptance deadline     |

### `getEvvmAddress`

**Function Type**: `public view`  
**Function Signature**: `getEvvmAddress() returns (address)`

Returns the address of the EVVM contract used for payment processing.

#### Returns

| Type      | Description                         |
| --------- | ----------------------------------- |
| `address` | The current EVVM contract address   |

### `getEvvmAddressFullDetails`

**Function Type**: `public view`  
**Function Signature**: `getEvvmAddressFullDetails() returns (address, address, uint256)`

Returns complete EVVM address information including pending proposals.

#### Returns

| Type                              | Description                                           |
| --------------------------------- | ----------------------------------------------------- |
| `(address, address, uint256)`     | Current EVVM address, proposed address, acceptance time |

---

## Utility Functions

### `hashUsername`

**Function Type**: `public pure`  
**Function Signature**: `hashUsername(string memory _username, uint256 _randomNumber) returns (bytes32)`

Creates a hash of username and random number for pre-registration using the commit-reveal scheme to prevent front-running attacks.

#### Parameters

| Parameter       | Type     | Description                      |
| --------------- | -------- | -------------------------------- |
| `_username`     | `string` | The username to hash             |
| `_randomNumber` | `uint256`| Random number to add entropy     |

#### Returns

| Type      | Description                               |
| --------- | ----------------------------------------- |
| `bytes32` | Hash of the username and random number    |

---

## Data Validation Functions

These functions validate input data formats according to system rules and standards.

### Username Validation

**Function**: `isValidUsername(string memory username)` (internal pure)

Validates username format according to system rules:
- Must be at least 4 characters
- Must start with a letter
- Can only contain letters and digits

### Email Validation

**Function**: `isValidEmail(string memory _email)` (internal pure) 

Validates email address format:
- Checks for proper structure: prefix(3+ chars) + @ + domain(3+ chars) + . + TLD(2+ chars)
- Ensures valid characters in each section
- Returns `true` for valid format

### Phone Number Validation

**Function**: `isValidPhoneNumberNumber(string memory _phoneNumber)` (internal pure)

Validates phone number format:
- Must be 6-19 digits only
- No special characters or letters allowed
- Returns `true` for valid format

:::note Internal Functions
The validation functions are marked as `internal` and are used by other contract functions for input validation. They are not directly callable from external contracts or users.
:::

---

## Treasury System Overview


The Treasury system enables secure asset movement between external blockchains and the EVVM ecosystem. It provides validated mechanisms for users to deposit assets into EVVM and withdraw them back to their preferred blockchain environments.

## Two Treasury Solutions

EVVM offers two treasury architectures for different deployment scenarios:

### Simple Treasury
Single-chain solution for when EVVM operates on the same blockchain as user assets.

**Best for:**
- Same-chain operations
- Lower complexity
- Cost efficiency
- Direct integration

### Crosschain Treasury
Multi-chain solution enabling asset transfers across different blockchains.

**Best for:**
- Cross-chain operations
- Multiple blockchain support
- Advanced features like fisher bridge
- Interoperability protocols (Hyperlane, LayerZero, Axelar)

## Core Functions

Both systems provide:
- **Asset Deposits**: Native coins and ERC20 tokens
- **Asset Withdrawals**: Secure balance verification
- **EVVM Integration**: Direct balance management
- **Security Protection**: Principal token withdrawal prevention

## Available Documentation

- **[Simple Treasury](./01-TreasurySimple/01-Introduction.md)**: Single-chain treasury operations
- **[Crosschain Treasury](./02-TreasuryCrosschain/01-Introduction.md)**: Multi-chain treasury system

## Choosing Your Treasury

| Need | Simple Treasury | Crosschain Treasury |
|------|----------------|-------------------|
| Same-chain only | ✅ | ❌ |
| Multi-chain support | ❌ | ✅ |
| Lower gas costs | ✅ | ⚖️ |
| Advanced features | ❌ | ✅ |

---

## Simple Treasury Introduction


The Simple Treasury provides a streamlined, single-chain solution for asset management within EVVM. It operates on the same blockchain as the EVVM core contract, offering direct and efficient asset deposit and withdrawal operations.

## When to Use Simple Treasury

**Ideal for:**
- EVVM running on the same blockchain as user assets
- Direct integration scenarios
- Lower gas costs and complexity
- Single-chain environments

**Not suitable for:**
- Multi-chain operations
- Cross-chain bridge requirements
- Gasless transaction needs

## Key Features

- **Direct Execution**: Users interact directly with the Treasury contract
- **Same-Chain Operations**: All transactions on the same blockchain as EVVM
- **Native & ERC20 Support**: Both native coins and standard tokens
- **EVVM Integration**: Seamless balance synchronization
- **Security Protection**: Principal token withdrawal prevention

## Available Functions

- **[deposit](./02-deposit.md)**: Deposit native coins or ERC20 tokens into EVVM
- **[withdraw](./03-withdraw.md)**: Withdraw assets from EVVM back to user wallet

## Architecture

```
User Wallet → Simple Treasury → EVVM Core
     ↑              ↓
     └──────────────┘
   (Same Blockchain)
```

The Simple Treasury acts as a direct bridge between user wallets and EVVM balances on the same blockchain.

---

## Deposit Function

# deposit

**Function Type**: `external payable`  
**Function Signature**: `deposit(address,uint256)`  
**Returns**: `void`

Deposits host chain coins or ERC20 tokens from the host blockchain into the EVVM virtual blockchain. The function transfers assets from the user's wallet on the host blockchain to the Treasury contract and credits the equivalent balance in the EVVM system.

## Parameters

| Parameter | Type      | Description                                                    |
| --------- | --------- | -------------------------------------------------------------- |
| `token`   | `address` | Token contract address or `address(0)` for host chain coin   |
| `amount`  | `uint256` | Amount to deposit (must match `msg.value` for host chain coin) |

## Workflow

**Host Chain Coin Deposit Flow** (when `token == address(0)`):

1. **Zero Check**: Ensures `msg.value > 0`. Reverts with `DepositAmountMustBeGreaterThanZero` if zero host chain coin is sent.
2. **Amount Validation**: Verifies that `amount` exactly matches `msg.value`. Reverts with `InvalidDepositAmount` if they don't match.
3. **EVVM Balance Credit**: Calls `addAmountToUser(msg.sender, address(0), msg.value)` in the EVVM core contract to credit the user's internal host chain coin balance in the virtual blockchain.

**ERC20 Deposit Flow** (when `token != address(0)`):

1. **Host Chain Coin Validation**: Ensures `msg.value == 0` (no host chain coin should be sent with ERC20 deposits). Reverts with `InvalidDepositAmount` if host chain coin is sent.
2. **Amount Validation**: Ensures `amount > 0`. Reverts with `DepositAmountMustBeGreaterThanZero` if amount is zero.
3. **Host Blockchain Transfer**: Executes `transferFrom(msg.sender, address(this), amount)` to move tokens from user to Treasury contract on the host blockchain.
4. **EVVM Balance Credit**: Calls `addAmountToUser(msg.sender, token, amount)` in the EVVM core contract to credit the user's internal token balance in the virtual blockchain.

---

## Withdraw Function

# withdraw

**Function Type**: `external`  
**Function Signature**: `withdraw(address,uint256)`  
**Returns**: `void`

Withdraws host chain coins or ERC20 tokens from the EVVM virtual blockchain back to the user's wallet on the host blockchain. This function includes principal token protection to prevent withdrawal of the ecosystem's core token.

## Parameters

| Parameter | Type      | Description                                           |
| --------- | --------- | ----------------------------------------------------- |
| `token`   | `address` | Token contract address or `address(0)` for host chain coin |
| `amount`  | `uint256` | Amount to withdraw                                   |

## Workflow

1. **Principal Token Protection**: Checks if the token is the ecosystem's principal token using `getEvvmMetadata().principalTokenAddress`. Reverts with `PrincipalTokenIsNotWithdrawable` if attempting to withdraw the principal token.
2. **EVVM Balance Verification**: Validates that the user has sufficient balance in the EVVM virtual blockchain using `getBalance(msg.sender, token) < amount`. Reverts with `InsufficientBalance` if the user lacks adequate funds.
3. **Conditional Transfer Flow**:
   - **Host Chain Coin Withdrawal** (`token == address(0)`): 
     - Calls `removeAmountFromUser(msg.sender, address(0), amount)` to debit the user's EVVM balance
     - Uses `SafeTransferLib.safeTransferETH(msg.sender, amount)` to transfer host chain coins from Treasury to user on the host blockchain
   - **ERC20 Withdrawal** (`token != address(0)`): 
     - Calls `removeAmountFromUser(msg.sender, token, amount)` to debit the user's EVVM balance
     - Executes `IERC20(token).transfer(msg.sender, amount)` to send tokens from Treasury to user on the host blockchain

---

## Crosschain Treasury Introduction


The Crosschain Treasury enables secure asset transfers between EVVM and external blockchains. This multi-chain solution uses interoperability protocols to coordinate asset management across different blockchain networks.

## Architecture

The system uses two coordinated stations that communicate through multiple cross-chain protocols:

### Host Chain Station (TreasuryHostChainStation)
- Operates on the same blockchain as EVVM
- Handles withdrawals from EVVM balances to external chains
- Receives Fisher bridge deposits from external chains
- Manages EVVM balance integration and updates
- Integrates with EVVM core contract for balance operations

### External Chain Station (TreasuryExternalChainStation)
- Deployed on external blockchains where user assets exist
- Handles deposits from users to EVVM ecosystem
- Receives Fisher bridge withdrawals from EVVM
- Manages real asset custody (ERC20 tokens and native coins)
- Provides deposit interfaces for multiple asset types

## Supported Protocols

| Protocol | ID | Description |
|----------|----|----|
| **Hyperlane** | `0x01` | Modular interoperability framework |
| **LayerZero** | `0x02` | Omnichain protocol |
| **Axelar** | `0x03` | Decentralized cross-chain network |

## Fisher Bridge System

Advanced feature enabling gasless cross-chain transactions:
- **Gasless Operations**: Users don't need native tokens for gas on destination chains
- **EIP-191 Signature Authorization**: Users sign structured messages to authorize transfers
- **Priority Fees**: Economic incentives for Fisher executors who process transactions
- **Fisher Executor Control**: Permissioned addresses with `onlyFisherExecutor` modifier
- **Nonce-Based Security**: Replay attack prevention with sequential nonce tracking
- **EVVM ID Integration**: Cross-instance security through unique EVVM identifiers

## When to Use Crosschain Treasury

**Ideal for:**
- EVVM on different blockchain than user assets
- Multi-chain support requirements
- Advanced features like gasless transactions
- Interoperability protocol integration

## Available Functions

### Host Chain Station
- **[withdraw](./02-HostChainStation/01-withdraw.md)**: Withdraw assets to external chains
- **[Fisher Bridge Functions](./02-HostChainStation/02-fisherBridgeReceive.md)**: Gasless transaction support
- **[Admin Functions](./02-HostChainStation/05-AdminFunctions.md)**: System management

### External Chain Station
- **[depositERC20](./03-ExternalChainStation/01-depositERC20.md)**: Deposit tokens to EVVM
- **[depositCoin](./03-ExternalChainStation/02-depositCoin.md)**: Deposit native coins to EVVM
- **[Fisher Bridge Functions](./03-ExternalChainStation/03-fisherBridgeReceive.md)**: Gasless transaction support
- **[Admin Functions](./03-ExternalChainStation/06-AdminFunctions.md)**: System management

## Cross-Chain Flow

```
External Chain          Host Chain
     │                      │
User Assets  ──────→  EVVM Balances
     │                      │ 
External Station ←──→ Host Station
```

The stations coordinate through cross-chain messaging to maintain synchronized asset management.

## Available Functions

### Host Chain Station Functions
- **[withdraw](./02-HostChainStation/01-withdraw.md)**: Withdraw assets from EVVM to external chains via cross-chain protocols
- **[fisherBridgeReceive](./02-HostChainStation/02-fisherBridgeReceive.md)**: Receive Fisher bridge deposits and credit EVVM balances
- **[fisherBridgeSend](./02-HostChainStation/03-fisherBridgeSend.md)**: Process Fisher bridge withdrawals with signature verification
- **[setExternalChainAddress](./02-HostChainStation/04-setExternalChainAddress.md)**: One-time setup of external station addresses
- **[Admin Functions](./02-HostChainStation/05-AdminFunctions.md)**: Time-delayed governance and executor management

### External Chain Station Functions
- **[depositERC20](./03-ExternalChainStation/01-depositERC20.md)**: Deposit ERC20 tokens and send to EVVM via cross-chain protocols
- **[depositCoin](./03-ExternalChainStation/02-depositCoin.md)**: Deposit native coins and send to EVVM via cross-chain protocols  
- **[fisherBridgeReceive](./03-ExternalChainStation/03-fisherBridgeReceive.md)**: Receive Fisher bridge transactions (validation only)
- **[fisherBridgeSendERC20](./03-ExternalChainStation/04-fisherBridgeSendERC20.md)**: Process Fisher bridge ERC20 transfers to host chain
- **[fisherBridgeSendCoin](./03-ExternalChainStation/05-fisherBridgeSendCoin.md)**: Process Fisher bridge native coin transfers to host chain
- **[Admin Functions](./03-ExternalChainStation/06-AdminFunctions.md)**: Time-delayed governance and system configuration

### Supporting Libraries
For Fisher Bridge signature requirements and verification, see the [Fisher Bridge Signature Structure](../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md) documentation.

The Treasury Crosschain system implements standardized error handling and data structures for cross-chain operations.

## Security Features

:::warning[Security Considerations]
- **Principal Token Protection**: Principal token (MATE) withdrawals blocked via `PrincipalTokenIsNotWithdrawable` error
- **Cross-Chain Authorization**: All messages require sender and chain ID validation
- **Fisher Bridge Signatures**: EIP-191 compliant signatures with structured message format
- **Nonce-Based Protection**: Sequential nonce tracking prevents replay attacks
- **Time-Delayed Governance**: 1-day delays for admin and Fisher executor changes
- **Access Control**: `onlyAdmin` and `onlyFisherExecutor` modifiers restrict critical functions
- **Protocol Validation**: Chain-specific authorization for Hyperlane, LayerZero, and Axelar
- **Balance Verification**: Insufficient balance checks with `InsufficientBalance` error protection
:::

## Gas Management

Each protocol requires different gas payment mechanisms:
- **Hyperlane**: Native tokens paid to mailbox contract
- **LayerZero**: Estimated fees through LayerZero endpoint
- **Axelar**: Gas service payments for cross-chain execution

Users must provide sufficient native tokens to cover cross-chain transaction costs when initiating transfers.

---

## withdraw


**Function Type**: `external payable`  
**Function Signature**: `withdraw(address,address,uint256,bytes1)`  
**Returns**: `void`

Withdraws tokens from EVVM balance and sends them to external chain via selected cross-chain protocol. This function validates balance, deducts from EVVM, and bridges via Hyperlane, LayerZero, or Axelar protocols.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `toAddress` | `address` | Recipient address on the external chain |
| `token` | `address` | Token contract address or `address(0)` for native coin |
| `amount` | `uint256` | Amount to withdraw |
| `protocolToExecute` | `bytes1` | Cross-chain protocol identifier (`0x01`, `0x02`, or `0x03`) |

## Protocol Identifiers

| Value | Protocol | Description |
|-------|----------|-------------|
| `0x01` | Hyperlane | Uses Hyperlane mailbox for cross-chain messaging |
| `0x02` | LayerZero | Uses LayerZero endpoint for omnichain transfers |
| `0x03` | Axelar | Uses Axelar gateway for decentralized cross-chain communication |

## Workflow

### Initial Validations
1. **Principal Token Protection**: Validates token is not the Principal Token (MATE) using `Evvm(evvmAddress).getEvvmMetadata().principalTokenAddress`. Reverts with `ErrorsLib.PrincipalTokenIsNotWithdrawable()` if attempted.
2. **Balance Verification**: Confirms user has sufficient EVVM balance using `Evvm(evvmAddress).getBalance(msg.sender, token)`. Reverts with `ErrorsLib.InsufficientBalance()` if insufficient.
3. **EVVM Balance Deduction**: Calls `Evvm(evvmAddress).removeAmountFromUser(msg.sender, token, amount)` to deduct from user's virtual balance.

### Protocol-Specific Execution

#### Hyperlane (`0x01`)
```solidity
bytes memory payload = PayloadUtils.encodePayload(token, toAddress, amount);
uint256 quote = IMailbox(hyperlane.mailboxAddress).quoteDispatch(
    hyperlane.externalChainStationDomainId,
    hyperlane.externalChainStationAddress,
    payload
);
IMailbox(hyperlane.mailboxAddress).dispatch{value: quote}(
    hyperlane.externalChainStationDomainId,
    hyperlane.externalChainStationAddress,
    payload
);
```
- **Payload Encoding**: Uses `PayloadUtils.encodePayload()` for standardized message format
- **Quote Calculation**: Gets exact dispatch cost via `IMailbox.quoteDispatch()`
- **Message Dispatch**: Sends to external station via Hyperlane mailbox with proper gas payment

#### LayerZero (`0x02`)
```solidity
bytes memory payload = PayloadUtils.encodePayload(token, toAddress, amount);
MessagingFee memory fee = _quote(
    layerZero.externalChainStationEid,
    payload,
    options,
    false
);
_lzSend(
    layerZero.externalChainStationEid,
    payload,
    options,
    MessagingFee(fee.nativeFee, 0),
    msg.sender
);
```
- **Payload Encoding**: Uses `PayloadUtils.encodePayload()` for consistent data structure
- **Fee Quotation**: Calculates exact messaging fee via `_quote()` function
- **Omnichain Send**: Dispatches via LayerZero V2 endpoint with proper fee handling

#### Axelar (`0x03`)
```solidity
bytes memory payload = PayloadUtils.encodePayload(token, toAddress, amount);
IAxelarGasService(axelar.gasServiceAddress).payNativeGasForContractCall{
    value: msg.value
}(
    address(this),
    axelar.externalChainStationChainName,
    axelar.externalChainStationAddress,
    payload,
    msg.sender
);
gateway().callContract(
    axelar.externalChainStationChainName,
    axelar.externalChainStationAddress,
    payload
);
```
- **Payload Encoding**: Uses `PayloadUtils.encodePayload()` for cross-chain compatibility
- **Gas Service Payment**: Prepays execution gas to Axelar gas service contract
- **Gateway Dispatch**: Routes message through Axelar gateway with refund to sender

## Payload Encoding

The function uses standardized payload encoding via `PayloadUtils` library:
```solidity
bytes memory payload = PayloadUtils.encodePayload(token, toAddress, amount);
```

This creates a consistent format decoded on external chain station using:
```solidity
(address token, address toAddress, uint256 amount) = PayloadUtils.decodePayload(payload);
```

The payload structure ensures:
1. **Token identification**: ERC20 contract address or `address(0)` for native coins
2. **Recipient specification**: Exact recipient address on external chain  
3. **Amount precision**: Token amount in native decimals

## Gas Requirements

Users must send sufficient native tokens with the transaction to cover:
- **Hyperlane**: Mailbox dispatch fees
- **LayerZero**: Endpoint messaging fees  
- **Axelar**: Gas service payments

:::warning[Gas Payment Required]
The transaction will revert if insufficient native tokens are provided to cover cross-chain messaging costs. Use the respective quote functions to estimate required amounts.
:::

## Security Features

- **User Authorization**: Only holders can withdraw from their own EVVM balances
- **Principal Token Protection**: `ErrorsLib.PrincipalTokenIsNotWithdrawable()` prevents MATE token withdrawal
- **Balance Verification**: `ErrorsLib.InsufficientBalance()` protection with EVVM balance checks
- **Protocol Validation**: Reverts for invalid protocol identifiers
- **Cross-Chain Security**: Each protocol validates sender authorization on message receipt

## External Chain Processing

Upon successful cross-chain message delivery, the External Chain Station:
1. **Message Validation**: Verifies sender authorization and chain ID
2. **Payload Decoding**: Uses `PayloadUtils.decodePayload()` to extract transfer details
3. **Asset Transfer**: Transfers ERC20 tokens or native coins to recipient
4. **Event Emission**: Logs successful cross-chain transfer for tracking

---

## fisherBridgeReceive


**Function Type**: `external`  
**Function Signature**: `fisherBridgeReceive(address,address,address,uint256,uint256,bytes)`  
**Access Control**: `onlyFisherExecutor`  
**Returns**: `void`

Receives Fisher bridge transactions from external chain and credits EVVM balances. Verifies EIP-191 signature, increments nonce, and adds balance to recipient and executor for priority fees.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `address` | Original sender on the external chain |
| `addressToReceive` | `address` | Recipient address for the EVVM balance credit |
| `tokenAddress` | `address` | Token contract address or `address(0)` for native coin |
| `priorityFee` | `uint256` | Fee amount paid to the fisher executor |
| `amount` | `uint256` | Amount to credit to the recipient's EVVM balance |
| `signature` | `bytes` | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this transaction. |

## Access Control

This function can only be called by addresses with the `fisherExecutor` role:

```solidity
modifier onlyFisherExecutor() {
    if (msg.sender != fisherExecutor.current) {
        revert();
    }
    _;
}
```

## Workflow

### 1. Signature Verification
```solidity
if (!SignatureUtils.verifyMessageSignedForFisherBridge(
    EVVM_ID,
    from,
    addressToReceive,
    nextFisherExecutionNonce[from],
    tokenAddress,
    priorityFee,
    amount,
    signature
)) revert ErrorsLib.InvalidSignature();
```

Validates EIP-191 signature using structured message format with EVVM ID integration. Message format: `"{EVVM_ID},fisherBridge,{addressToReceive},{nonce},{tokenAddress},{priorityFee},{amount}"`.

### 2. Nonce Management
```solidity
nextFisherExecutionNonce[from]++;
```
Increments user's Fisher bridge nonce to prevent replay attacks across cross-chain operations.

### 3. EVVM Balance Updates

#### Recipient Credit
```solidity
Evvm(evvmAddress).addAmountToUser(addressToReceive, tokenAddress, amount);
```
Adds the transfer amount to recipient's EVVM balance via core contract integration.

#### Fisher Executor Fee
```solidity
if (priorityFee > 0) {
    Evvm(evvmAddress).addAmountToUser(msg.sender, tokenAddress, priorityFee);
}
```
Credits priority fee to Fisher executor's EVVM balance as processing incentive.

## Signature Message Format

:::info

For more information about the signature structure, refer to the [Fisher Bridge Signature Structure](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md).

:::

## EVVM Integration

The function directly integrates with the EVVM core contract for balance management:

```solidity
Evvm(evvmAddress).addAmountToUser(addressToReceive, tokenAddress, amount);
```

This provides:
- **Direct Balance Credit**: Adds tokens to user's EVVM virtual balance
- **Token Type Support**: Handles both ERC20 tokens and native ETH (address(0))
- **Atomic Operations**: Ensures consistent state between Treasury and EVVM core
- **Fee Distribution**: Separates user funds from Fisher executor incentives

## Security Features

- **Fisher Executor Authorization**: `onlyFisherExecutor` modifier restricts function access
- **EIP-191 Signature Verification**: Structured message format with EVVM ID binding
- **Nonce-Based Replay Protection**: Sequential nonce tracking per user address
- **EVVM ID Integration**: Cross-instance security through unique identifiers
- **Balance Segregation**: Separate handling of transfer amount and priority fees

## Cross-Chain Flow

1. **External Chain**: User initiates Fisher bridge transaction with signature
2. **Fisher Monitoring**: Fisher executor captures transaction from external station
3. **Host Chain Processing**: This function validates and credits EVVM balances
4. **Balance Availability**: Tokens immediately available in user's EVVM account
    }
}
```

## Fisher Bridge Benefits

### For Users
- **Gasless Transactions**: Users don't need native tokens on the host chain
- **Flexible Recipients**: Can specify different recipient addresses
- **Signature-based Authorization**: Secure consent without direct interaction

### For Fisher Executors
- **Priority Fees**: Earn fees for facilitating transfers
- **Batch Processing**: Can process multiple transfers efficiently
- **Automated Operations**: Enable programmatic cross-chain services

## Security Features

### Signature Security
- **EIP-191 Standard**: Uses Ethereum's signed message standard (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))
- **Replay Protection**: Nonce-based prevention of signature reuse
- **Address Binding**: Signature tied to specific sender address

### Access Control
- **Fisher Authorization**: Only authorized executors can call the function
- **Signature Validation**: Cryptographic proof of user consent required (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))

### Balance Management
- **Direct EVVM Integration**: Secure balance updates through authorized treasury functions
- **Atomic Operations**: Balance credits are processed atomically

## Error Conditions

| Error | Condition |
|-------|-----------|
| `InvalidSignature` | Signature verification fails |
| Access Control Revert | Called by unauthorized address (not current fisher executor) |

## Usage Example

A typical fisher bridge receive flow:

1. User signs a message on external chain authorizing the transfer
2. Fisher executor receives the signature and transfer details
3. Fisher calls `fisherBridgeReceive` with the signature and transfer parameters
4. Function validates signature and credits EVVM balances
5. User receives tokens in EVVM, fisher receives priority fee (if applicable)

:::info[Fisher Executor Management]
Fisher executors are managed through a time-delayed governance system. See [Admin Functions](./05-AdminFunctions.md) for details on executor management.
:::

---

## fisherBridgeSend


**Function Type**: `external`  
**Function Signature**: `fisherBridgeSend(address,address,address,uint256,uint256,bytes)`  
**Access Control**: `onlyFisherExecutor`  
**Returns**: `void`

Processes Fisher bridge token transfers from host to external chain. Validates balance and signature, deducts from sender, pays executor fee, and emits event for external chain processing.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `address` | User initiating the withdrawal from EVVM |
| `addressToReceive` | `address` | Recipient address on the external chain |
| `tokenAddress` | `address` | Token contract address or `address(0)` for native coin |
| `priorityFee` | `uint256` | Fee amount paid to the fisher executor |
| `amount` | `uint256` | Amount to withdraw from user's EVVM balance |
| `signature` | `bytes` | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this withdrawal. |

## Access Control

```solidity
modifier onlyFisherExecutor() {
    if (msg.sender != fisherExecutor.current) {
        revert();
    }
    _;
}
```

Only addresses with the current `fisherExecutor` role can call this function.

## Workflow

### 1. Principal Token Protection
```solidity
if (tokenAddress == Evvm(evvmAddress).getEvvmMetadata().principalTokenAddress)
    revert ErrorsLib.PrincipalTokenIsNotWithdrawable();
```
Prevents withdrawal of Principal Token (MATE) to protect ecosystem integrity.

### 2. Balance Validation
```solidity
if (Evvm(evvmAddress).getBalance(from, tokenAddress) < (amount + priorityFee))
    revert ErrorsLib.InsufficientBalance();
```
Verifies user has sufficient EVVM balance to cover both withdrawal amount and priority fee.

### 3. Signature Verification
```solidity
if (!SignatureUtils.verifyMessageSignedForFisherBridge(
    EVVM_ID,
    from,
    addressToReceive,
    nextFisherExecutionNonce[from],
    tokenAddress,
    priorityFee,
    amount,
    signature
)) revert ErrorsLib.InvalidSignature();
```

Validates EIP-191 signature with EVVM ID integration and structured message format.

### 4. Nonce Increment
```solidity
nextFisherExecutionNonce[from]++;
```
Increments Fisher bridge nonce for replay attack prevention.

### 5. EVVM Balance Operations

#### User Balance Deduction
```solidity
Evvm(evvmAddress).removeAmountFromUser(from, tokenAddress, amount + priorityFee);
```
Deducts total amount (transfer + fee) from user's EVVM balance.

#### Fisher Executor Fee
```solidity
if (priorityFee > 0) {
    Evvm(evvmAddress).addAmountToUser(msg.sender, tokenAddress, priorityFee);
}
```
Credits priority fee to Fisher executor's EVVM balance as processing incentive.

### 6. Event Emission
```solidity
emit FisherBridgeSend(
    from,
    addressToReceive,
    tokenAddress,
    priorityFee,
    amount,
    nextFisherExecutionNonce[from] - 1
    amount,
    nextFisherExecutionNonce[from] - 1
);
```

Emits an event containing all transfer details for external chain monitoring and processing.

## Event Definition

```solidity
event FisherBridgeSend(
    address indexed from,
    address indexed addressToReceive,
    address indexed tokenAddress,
    uint256 priorityFee,
    uint256 amount,
    uint256 nonce
);
```

### Event Parameters
- `from`: User who initiated the withdrawal (indexed)
- `addressToReceive`: Recipient on external chain (indexed)  
- `tokenAddress`: Token being withdrawn (indexed)
- `priorityFee`: Fee paid to fisher executor
- `amount`: Withdrawal amount
- `nonce`: Execution nonce used for this transaction

## External Chain Processing

The emitted event serves as a signal for external chain operations. The corresponding external chain station or fisher services should:

1. Monitor for `FisherBridgeSend` events
2. Extract transfer details from event parameters
3. Execute the actual token transfer on the external chain
4. Transfer `amount` of `tokenAddress` to `addressToReceive`

## Security Features

### Signature Security
- **EIP-191 Compliance**: Standard Ethereum signed message format
- **Nonce Protection**: Prevents signature replay attacks
- **User Authorization**: Cryptographic proof of user consent

### Balance Protection
- **Principal Token Guard**: Prevents withdrawal of ecosystem's core token
- **Sufficient Balance Check**: Validates user has adequate funds
- **Atomic Operations**: Balance updates are processed atomically

### Access Control
- **Fisher Authorization**: Only current fisher executor can initiate withdrawals
- **Signature Validation**: Requires valid user signature for each transaction (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))

## Fee Structure

The priority fee mechanism incentivizes fisher executors:
- **User Pays**: Total debit of `amount + priorityFee` from user balance
- **Fisher Receives**: Priority fee credited to executor's EVVM balance
- **Net Transfer**: User receives `amount` on external chain

## Error Conditions

| Error | Condition |
|-------|-----------|
| `PrincipalTokenIsNotWithdrawable` | Attempting to withdraw principal token |
| `InsufficientBalance` | User lacks sufficient EVVM balance |
| `InvalidSignature` | Signature verification fails |
| Access Control Revert | Called by unauthorized address |

## Usage Flow

1. **User Intent**: User wants to withdraw tokens from EVVM to external chain
2. **Signature Creation**: User signs withdrawal authorization message
3. **Fisher Execution**: Authorized fisher calls `fisherBridgeSend` with signature
4. **Validation**: Function validates signature and user balance
5. **Balance Update**: EVVM balances updated (user debited, fisher credited fee)
6. **Event Emission**: Event emitted for external chain processing
7. **External Transfer**: External services process the actual token transfer

:::warning[Off-chain Coordination Required]
This function only updates EVVM balances and emits events. The actual token transfer on the external chain must be handled by off-chain services monitoring these events.
:::

---

## setExternalChainAddress


**Function Type**: `external`  
**Function Signature**: `setExternalChainAddress(bytes32,string)`  
**Access Control**: `onlyAdmin`  
**Returns**: `void`

Configures the external chain station address for all supported cross-chain protocols. This administrative function establishes the connection between the host chain station and its counterpart on external blockchains.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `externalChainStationAddressBytes32` | `bytes32` | External station address in bytes32 format (for Hyperlane and LayerZero) |
| `externalChainStationAddressString` | `string` | External station address in string format (for Axelar) |

## Access Control

```solidity
modifier onlyAdmin() {
    if (msg.sender != admin.current) {
        revert();
    }
    _;
}
```

Only the current admin can call this function.

## Workflow

### 1. Hyperlane Configuration
```solidity
hyperlane.externalChainStationAddress = externalChainStationAddressBytes32;
```
Sets the external chain station address for Hyperlane protocol communication.

### 2. LayerZero Configuration
```solidity
layerZero.externalChainStationAddress = externalChainStationAddressBytes32;
```
Sets the external chain station address for LayerZero protocol communication.

### 3. Axelar Configuration
```solidity
axelar.externalChainStationAddress = externalChainStationAddressString;
```
Sets the external chain station address for Axelar protocol communication using string format.

### 4. LayerZero Peer Setup
```solidity
_setPeer(
    layerZero.externalChainStationEid,
    layerZero.externalChainStationAddress
);
```
Establishes the peer relationship in LayerZero's OApp framework for secure message passing.

## Protocol-Specific Address Formats

### Hyperlane & LayerZero
- **Format**: `bytes32`
- **Usage**: Direct address representation for protocol routing
- **Example**: `0x742d35Cc6634C0532925a3b8D43C1C16bE8c91234567...` (truncated to 32 bytes)

### Axelar
- **Format**: `string`
- **Usage**: Human-readable address for Axelar gateway calls
- **Example**: `"0x742d35Cc6634C0532925a3b8D43C1C16bE8c91234567"`

## Configuration Requirements

Before calling this function, ensure:

1. **External Station Deployment**: The external chain station contract is deployed on the target blockchain
2. **Address Verification**: Both address formats represent the same deployed contract
3. **Protocol Compatibility**: The external station supports all three protocols (Hyperlane, LayerZero, Axelar)

## Security Considerations

### Address Validation
- **Critical Setup**: Incorrect addresses will break cross-chain communication
- **No Reversal**: Once set, addresses affect all future cross-chain operations
- **Format Consistency**: Both `bytes32` and `string` parameters must represent the same contract

### Admin Control
- **Single Point**: Only current admin can modify these addresses
- **Time Delay**: Admin changes follow 1-day time delay governance (see [Admin Functions](./05-AdminFunctions.md))

## Configuration Dependencies

This function configures addresses but relies on constructor initialization for:

- **Domain/Chain IDs**: Set during contract deployment
- **Protocol Endpoints**: Hyperlane mailbox, LayerZero endpoint, Axelar gateway addresses
- **Gas Service**: Axelar gas service configuration

## Protocol Integration Effects

### Hyperlane
- Messages sent to `hyperlane.externalChainStationDomainId`
- Delivered to `hyperlane.externalChainStationAddress`
- Authenticated by domain and address validation

### LayerZero  
- Messages sent to `layerZero.externalChainStationEid`
- Peer relationship established with `layerZero.externalChainStationAddress`
- OApp security through trusted peer configuration

### Axelar
- Contract calls to `axelar.externalChainStationChainName`  
- Target address `axelar.externalChainStationAddress`
- Gateway routing and execution validation

## Error Conditions

| Error | Condition |
|-------|-----------|
| Access Control Revert | Called by non-admin address |
| LayerZero Peer Error | Invalid EID or address format for `_setPeer` |

## Usage Example

```solidity
// Example configuration call
setExternalChainAddress(
    0x742d35Cc6634C0532925a3b8D43C1C16bE8c9123456789abcdef123456789abcd, // bytes32 format
    "0x742d35Cc6634C0532925a3b8D43C1C16bE8c91234567" // string format
);
```

## Post-Configuration Verification

After calling this function, verify configuration through getter functions:
- `getHyperlaneConfig()`: Confirm Hyperlane address setting
- `getLayerZeroConfig()`: Confirm LayerZero address and peer setup
- `getAxelarConfig()`: Confirm Axelar address setting

:::warning[Critical Configuration]
This function establishes the foundation for all cross-chain communication. Incorrect addresses will result in failed transfers and potential loss of funds. Always verify external station deployment and address accuracy before configuration.
:::

---

## Admin Functions(02-HostChainStation)


The Treasury Host Chain Station includes comprehensive administrative functions with time-delayed governance to ensure secure management of critical system parameters and roles.

## Admin Management

### proposeAdmin

**Function Type**: `external`  
**Function Signature**: `proposeAdmin(address)`  
**Access Control**: `onlyAdmin`

Proposes a new admin address with a mandatory 1-day time delay for security.

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `_newOwner` | `address` | Address of the proposed new admin |

#### Workflow
1. **Validation**: Ensures new address is not zero address or current admin
2. **Proposal Setup**: Sets `admin.proposal = _newOwner`
3. **Time Lock**: Sets `admin.timeToAccept = block.timestamp + 1 days`

```solidity
function proposeAdmin(address _newOwner) external onlyAdmin {
    if (_newOwner == address(0) || _newOwner == admin.current) revert();
    
    admin.proposal = _newOwner;
    admin.timeToAccept = block.timestamp + 1 days;
}
```

### rejectProposalAdmin

**Function Type**: `external`  
**Function Signature**: `rejectProposalAdmin()`  
**Access Control**: `onlyAdmin`

Cancels a pending admin change proposal.

#### Workflow
1. **Reset Proposal**: Sets `admin.proposal = address(0)`
2. **Clear Timestamp**: Sets `admin.timeToAccept = 0`

### acceptAdmin

**Function Type**: `external`  
**Function Signature**: `acceptAdmin()`  
**Access Control**: Proposed admin only

Accepts a pending admin proposal and completes the admin transition.

#### Workflow
1. **Time Validation**: Ensures `block.timestamp >= admin.timeToAccept`
2. **Authority Check**: Validates `msg.sender == admin.proposal`
3. **Admin Transfer**: Sets `admin.current = admin.proposal`
4. **Cleanup**: Resets proposal and timestamp to zero

```solidity
function acceptAdmin() external {
    if (block.timestamp < admin.timeToAccept) revert();
    if (msg.sender != admin.proposal) revert();
    
    admin.current = admin.proposal;
    admin.proposal = address(0);
    admin.timeToAccept = 0;
}
```

## Fisher Executor Management

### proposeFisherExecutor

**Function Type**: `external`  
**Function Signature**: `proposeFisherExecutor(address)`  
**Access Control**: `onlyAdmin`

Proposes a new fisher executor with the same time-delay mechanism as admin changes.

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `_newFisherExecutor` | `address` | Address of the proposed new fisher executor |

#### Workflow
1. **Validation**: Ensures new address is not zero or current executor
2. **Proposal Setup**: Sets `fisherExecutor.proposal = _newFisherExecutor`
3. **Time Lock**: Sets `fisherExecutor.timeToAccept = block.timestamp + 1 days`

### rejectProposalFisherExecutor

**Function Type**: `external`  
**Function Signature**: `rejectProposalFisherExecutor()`  
**Access Control**: `onlyAdmin`

Cancels a pending fisher executor change proposal.

### acceptFisherExecutor

**Function Type**: `external`  
**Function Signature**: `acceptFisherExecutor()`  
**Access Control**: Proposed fisher executor only

Accepts a pending fisher executor proposal and completes the transition.

#### Workflow
1. **Time Validation**: Ensures sufficient time has passed
2. **Authority Check**: Validates caller is the proposed executor
3. **Role Transfer**: Updates current fisher executor
4. **Cleanup**: Resets proposal state

## Getter Functions

### getAdmin

**Function Type**: `external view`  
**Function Signature**: `getAdmin()`  
**Returns**: `AddressTypeProposal memory`

Returns the complete admin state including current admin, proposed admin, and acceptance timestamp.

```solidity
struct AddressTypeProposal {
    address current;    // Current admin address
    address proposal;   // Proposed new admin (address(0) if none)
    uint256 timeToAccept; // Timestamp when proposal can be accepted
}
```

### getFisherExecutor

**Function Type**: `external view`  
**Function Signature**: `getFisherExecutor()`  
**Returns**: `AddressTypeProposal memory`

Returns the complete fisher executor state with the same structure as admin state.

### getNextFisherExecutionNonce

**Function Type**: `external view`  
**Function Signature**: `getNextFisherExecutionNonce(address)`  
**Returns**: `uint256`

Returns the next nonce value for a specific user's fisher bridge operations.

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `user` | `address` | User address to query nonce for |

### getEvvmAddress

**Function Type**: `external view`  
**Function Signature**: `getEvvmAddress()`  
**Returns**: `address`

Returns the address of the connected EVVM core contract.

### Configuration Getters

#### getHyperlaneConfig
**Returns**: `HyperlaneConfig memory`
```solidity
struct HyperlaneConfig {
    uint32 externalChainStationDomainId;
    bytes32 externalChainStationAddress;
    address mailboxAddress;
}
```

#### getLayerZeroConfig  
**Returns**: `LayerZeroConfig memory`
```solidity
struct LayerZeroConfig {
    uint32 externalChainStationEid;
    bytes32 externalChainStationAddress;
    address endpointAddress;
}
```

#### getAxelarConfig
**Returns**: `AxelarConfig memory`
```solidity
struct AxelarConfig {
    string externalChainStationChainName;
    string externalChainStationAddress;
    address gasServiceAddress;
    address gatewayAddress;
}
```

#### getOptions
**Returns**: `bytes memory`

Returns the LayerZero execution options used for cross-chain messaging.

## Security Features

### Time-Delayed Governance
- **1-Day Delay**: All role changes require 24-hour waiting period
- **Proposal/Accept Pattern**: Two-step process prevents accidental changes
- **Current Admin Control**: Only current admin can propose changes
- **Self-Accept**: Proposed addresses must accept their own appointments

### Role Separation
- **Admin Role**: Controls system configuration and role proposals
- **Fisher Executor Role**: Processes fisher bridge transactions
- **Distinct Management**: Separate proposal/accept cycles for each role

### Access Control
```solidity
modifier onlyAdmin() {
    if (msg.sender != admin.current) {
        revert();
    }
    _;
}

modifier onlyFisherExecutor() {
    if (msg.sender != fisherExecutor.current) {
        revert();
    }
    _;
}
```

## Governance Flow Example

### Admin Change Process
1. **Proposal**: Current admin calls `proposeAdmin(newAddress)`
2. **Wait Period**: 24-hour delay begins
3. **Acceptance**: Proposed admin calls `acceptAdmin()` after delay
4. **Completion**: Admin role transferred, proposal state cleared

### Emergency Rejection
- Current admin can call `rejectProposalAdmin()` at any time to cancel pending changes
- Useful for responding to compromised proposed addresses or changed requirements

:::warning[Governance Security]
The time-delayed governance system protects against unauthorized role changes but requires careful coordination:
- Ensure proposed addresses are controlled and available for acceptance
- Current admins retain rejection power during the delay period  
- Lost access to proposed addresses requires starting the proposal process over
:::

---

## depositERC20


**Function Type**: `external payable`  
**Function Signature**: `depositERC20(address,address,uint256,bytes1)`  
**Returns**: `void`

Deposits ERC20 tokens and sends them to host chain via selected cross-chain protocol. Supports Hyperlane, LayerZero, and Axelar protocols for reliable token bridging to EVVM ecosystem.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `toAddress` | `address` | Recipient address for EVVM balance credit |
| `token` | `address` | ERC20 token contract address (cannot be `address(0)`) |
| `amount` | `uint256` | Amount of tokens to deposit |
| `protocolToExecute` | `bytes1` | Cross-chain protocol identifier (`0x01`, `0x02`, or `0x03`) |

## Protocol Identifiers

| Value | Protocol | Description |
|-------|----------|-------------|
| `0x01` | Hyperlane | Uses Hyperlane mailbox for cross-chain messaging |
| `0x02` | LayerZero | Uses LayerZero endpoint for omnichain transfers |
| `0x03` | Axelar | Uses Axelar gateway for decentralized cross-chain communication |

## Workflow

### 1. Input Validation
```solidity
if (amount == 0) revert ErrorsLib.DepositAmountMustBeGreaterThanZero();
```
Ensures meaningful deposit amounts and prevents zero-value transactions.

### 2. Token Transfer
```solidity
SafeTransferLib.safeTransferFrom(token, msg.sender, address(this), amount);
```
Safely transfers ERC20 tokens from user to contract using Solady's SafeTransferLib for gas optimization and security.

### 3. Payload Encoding
```solidity
bytes memory payload = PayloadUtils.encodePayload(token, toAddress, amount);
```
Creates standardized cross-chain message payload using PayloadUtils library.

### 3. Protocol-Specific Cross-Chain Execution

#### Hyperlane (`0x01`)
```solidity
uint256 quote = IMailbox(hyperlane.mailboxAddress).quoteDispatch(
    hyperlane.hostChainStationDomainId,
    hyperlane.hostChainStationAddress,
    payload
);
IMailbox(hyperlane.mailboxAddress).dispatch{value: quote}(
    hyperlane.hostChainStationDomainId,
    hyperlane.hostChainStationAddress,
    payload
);
```
- **Quote Calculation**: Gets exact dispatch cost from Hyperlane mailbox
- **Message Dispatch**: Sends encoded payload to host chain station
- **Gas Payment**: Uses quoted amount for precise fee payment

#### LayerZero (`0x02`)
```solidity
MessagingFee memory fee = _quote(
    layerZero.hostChainStationEid,
    payload,
    options,
    false
);
_lzSend(
    layerZero.hostChainStationEid,
    payload,
    options,
    MessagingFee(fee.nativeFee, 0),
    msg.sender
);
```
- **Fee Quotation**: Calculates exact LayerZero messaging costs
- **Omnichain Send**: Utilizes LayerZero V2 OApp framework
- **Refund Handling**: Excess fees automatically refunded to sender

#### Axelar (`0x03`)
```solidity
IAxelarGasService(axelar.gasServiceAddress).payNativeGasForContractCall{
    value: msg.value
}(
    address(this),
    axelar.hostChainStationChainName,
    axelar.hostChainStationAddress,
    payload,
    msg.sender
);
gateway().callContract(
    axelar.hostChainStationChainName,
    axelar.hostChainStationAddress,
    payload
);
```
- **Gas Service Payment**: Prepays execution gas via Axelar gas service
- **Gateway Routing**: Routes message through Axelar's decentralized gateway
- **Refund Management**: Gas refunds processed through Axelar's system

## Token Requirements

### ERC20 Transfer Process
The function uses SafeTransferLib for secure and gas-optimized token transfers:
```solidity
SafeTransferLib.safeTransferFrom(token, msg.sender, address(this), amount);
```

### Prerequisites
- **Token Approval**: Users must approve the External Chain Station contract for the deposit amount
- **Sufficient Balance**: User must have adequate token balance for the transfer
- **Valid Token**: Token contract must be a valid ERC20 implementation

## Cross-Chain Message Processing

### Payload Structure
```solidity
bytes memory payload = PayloadUtils.encodePayload(token, toAddress, amount);
```

### Host Chain Processing
Upon successful cross-chain message delivery:
1. **Payload Decoding**: `PayloadUtils.decodePayload()` extracts transfer parameters
2. **EVVM Integration**: `Evvm(evvmAddress).addAmountToUser(toAddress, token, amount)`  
3. **Balance Credit**: Recipient's EVVM balance immediately reflects the deposited tokens

## Gas Requirements

Users must provide sufficient native tokens (`msg.value`) to cover cross-chain messaging costs:

- **Hyperlane**: Mailbox dispatch fees
- **LayerZero**: Endpoint messaging fees
- **Axelar**: Gas service payments for execution

Use the respective quote functions to estimate required amounts:
- `getQuoteHyperlane(toAddress, token, amount)`
- `quoteLayerZero(toAddress, token, amount)`

## Security Features

### Input Validation
- **Amount Check**: `ErrorsLib.DepositAmountMustBeGreaterThanZero()` prevents zero deposits
- **Safe Transfer**: `SafeTransferLib.safeTransferFrom()` handles transfer edge cases
- **Protocol Support**: Validates supported protocol identifiers (0x01, 0x02, 0x03)

### Cross-Chain Security  
- **Message Authentication**: Each protocol validates sender and origin chain
- **Payload Integrity**: `PayloadUtils` ensures consistent encoding/decoding
- **Recipient Verification**: Direct address binding prevents misdirected funds

## Error Conditions

| Error | Condition |
|-------|-----------|
| `DepositAmountMustBeGreaterThanZero` | Amount parameter is zero |
| SafeTransfer Revert | Token transfer fails (insufficient balance, approval, etc.) |
| Protocol Revert | Invalid `protocolToExecute` value |
| Insufficient Gas | `msg.value` doesn't cover cross-chain messaging costs |

## Usage Example

```solidity
// 1. Approve tokens
IERC20(tokenAddress).approve(externalChainStationAddress, depositAmount);

// 2. Get gas quote
uint256 gasRequired = getQuoteHyperlane(recipientAddress, tokenAddress, depositAmount);

// 3. Execute deposit
depositERC20{value: gasRequired}(
    recipientAddress,
    tokenAddress, 
    depositAmount,
    0x01 // Hyperlane
);
```

## Integration with EVVM

The deposit flow connects external chain assets to EVVM balances:

1. **External Chain**: User transfers ERC20 tokens to external station
2. **Cross-Chain**: Message sent to host chain station  
3. **Host Chain**: Host station receives message and credits EVVM balance
4. **EVVM**: Recipient can use tokens within the EVVM ecosystem

:::warning[Gas Payment Required]
Ensure sufficient native tokens are sent with the transaction to cover cross-chain messaging costs. Insufficient gas will cause transaction failure and potential token loss.
:::

:::info[ERC20 Approval Required]
Users must approve the external chain station contract before calling this function. The approval should cover at least the deposit amount.
:::

---

## depositCoin


**Function Type**: `external payable`  
**Function Signature**: `depositCoin(address,uint256,bytes1)`  
**Returns**: `void`

Deposits native ETH and sends it to host chain via selected cross-chain protocol. The msg.value must cover both the deposit amount and protocol messaging fees.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `toAddress` | `address` | Recipient address for EVVM balance credit |
| `amount` | `uint256` | Amount of native coins to deposit |
| `protocolToExecute` | `bytes1` | Cross-chain protocol identifier (`0x01`, `0x02`, or `0x03`) |

## Protocol Identifiers

| Value | Protocol | Description |
|-------|----------|-------------|
| `0x01` | Hyperlane | Uses Hyperlane mailbox for cross-chain messaging |
| `0x02` | LayerZero | Uses LayerZero endpoint for omnichain transfers |
| `0x03` | Axelar | Uses Axelar gateway for decentralized cross-chain communication |

## Workflow

### 1. Input Validation
```solidity
if (amount == 0) revert ErrorsLib.DepositAmountMustBeGreaterThanZero();
```
Prevents zero-value deposits and ensures meaningful transaction amounts.

### 2. Payload Encoding
```solidity
bytes memory payload = PayloadUtils.encodePayload(address(0), toAddress, amount);
```
Creates standardized payload with `address(0)` representing native ETH using PayloadUtils library.

### 3. Protocol-Specific Cross-Chain Execution

#### Hyperlane (`0x01`)
```solidity
uint256 quote = IMailbox(hyperlane.mailboxAddress).quoteDispatch(
    hyperlane.hostChainStationDomainId,
    hyperlane.hostChainStationAddress,
    payload
);
if (msg.value < (amount + quote)) 
    revert ErrorsLib.InvalidDepositAmount();
    
IMailbox(hyperlane.mailboxAddress).dispatch{value: quote}(
    hyperlane.hostChainStationDomainId,
    hyperlane.hostChainStationAddress,
    payload
);
```
- **Quote Calculation**: Gets exact dispatch cost from Hyperlane mailbox
- **Total Validation**: `msg.value >= amount + quote` ensures sufficient funds
- **Fee Payment**: Uses precise quote for gas payment

#### LayerZero (`0x02`)
```solidity
MessagingFee memory fee = _quote(
    layerZero.hostChainStationEid,
    payload,
    options,
    false
);
if (msg.value < (amount + fee.nativeFee)) 
    revert ErrorsLib.InvalidDepositAmount();
    
_lzSend(
    layerZero.hostChainStationEid,
    payload,
    options,
    MessagingFee(fee.nativeFee, 0),
    msg.sender
);
```
- **Fee Quotation**: Calculates exact LayerZero V2 messaging costs
- **Balance Validation**: Ensures sufficient funds for deposit + messaging
- **Refund Mechanism**: LayerZero handles excess fee refunds automatically

#### Axelar (`0x03`)
```solidity
if (msg.value <= amount) 
    revert ErrorsLib.InvalidDepositAmount();
    
IAxelarGasService(axelar.gasServiceAddress).payNativeGasForContractCall{
    value: msg.value - amount
}(
    address(this),
    axelar.hostChainStationChainName,
    axelar.hostChainStationAddress,
    payload,
    msg.sender
);
gateway().callContract(
    axelar.hostChainStationChainName,
    axelar.hostChainStationAddress,
    payload
);
```
- **Fund Separation**: `msg.value > amount` ensures gas budget available
- **Gas Service Payment**: `msg.value - amount` allocated for cross-chain execution
- **Gateway Dispatch**: Routes message through Axelar's decentralized network

## Native Coin Handling

### Value Distribution
The `msg.value` serves dual purposes:
1. **Deposit Amount**: Actual ETH being bridged to EVVM ecosystem
2. **Protocol Fees**: Gas costs for cross-chain message execution

### Fee Structure by Protocol
- **Hyperlane**: `msg.value >= amount + quote` for precise fee calculation
- **LayerZero**: `msg.value >= amount + fee.nativeFee` with automatic refunds
- **Axelar**: `msg.value > amount` with remainder allocated to gas service

## Cross-Chain Message Processing

### Payload Structure
```solidity
bytes memory payload = PayloadUtils.encodePayload(address(0), toAddress, amount);
```
Uses standardized PayloadUtils with `address(0)` representing native ETH.

### Host Chain Processing
Upon successful cross-chain message delivery:
1. **Payload Decoding**: `PayloadUtils.decodePayload()` extracts `(address(0), toAddress, amount)`
2. **EVVM Integration**: `Evvm(evvmAddress).addAmountToUser(toAddress, address(0), amount)`
3. **Balance Update**: Recipient's EVVM balance reflects deposited native coins

## Gas Estimation

Before calling this function, estimate total required value:

### Hyperlane
```solidity
uint256 gasQuote = getQuoteHyperlane(toAddress, address(0), amount);
uint256 totalRequired = amount + gasQuote;
```

### LayerZero
```solidity
uint256 layerZeroFee = quoteLayerZero(toAddress, address(0), amount);
uint256 totalRequired = amount + layerZeroFee;
```

### Axelar
For Axelar, provide sufficient value to cover both deposit and gas service:
```solidity
uint256 totalRequired = amount + estimatedAxelarGas;
```

## Security Features

### Input Validation
- **Amount Check**: `ErrorsLib.DepositAmountMustBeGreaterThanZero()` prevents zero deposits
- **Balance Validation**: Protocol-specific checks ensure sufficient `msg.value`
- **Atomic Processing**: Deposit and cross-chain messaging happen atomically

### Cross-Chain Security
- **Message Authentication**: Each protocol validates sender authorization
- **Payload Integrity**: `PayloadUtils` ensures consistent data encoding
- **Native Asset Handling**: Standardized `address(0)` convention across protocols

## Error Conditions

| Error | Condition |
|-------|-----------|
| `DepositAmountMustBeGreaterThanZero` | Amount parameter is zero |
| `InvalidDepositAmount` | Insufficient `msg.value` for deposit + protocol fees |
| Protocol Revert | Unsupported `protocolToExecute` identifier |
| Cross-Chain Failure | Insufficient gas payment for selected protocol |

## Usage Examples

### Hyperlane Deposit
```solidity
// 1. Get gas quote
uint256 gasRequired = getQuoteHyperlane(recipientAddress, address(0), depositAmount);
uint256 totalValue = depositAmount + gasRequired;

// 2. Execute deposit
depositCoin{value: totalValue}(
    recipientAddress,
    depositAmount,
    0x01 // Hyperlane
);
```

### LayerZero Deposit
```solidity
// 1. Get fee quote
uint256 layerZeroFee = quoteLayerZero(recipientAddress, address(0), depositAmount);
uint256 totalValue = depositAmount + layerZeroFee;

// 2. Execute deposit
depositCoin{value: totalValue}(
    recipientAddress,
    depositAmount,
    0x02 // LayerZero
);
```

### Axelar Deposit
```solidity
// 1. Estimate total (deposit + gas)
uint256 totalValue = depositAmount + estimatedAxelarGas;

// 2. Execute deposit
depositCoin{value: totalValue}(
    recipientAddress,
    depositAmount,
    0x03 // Axelar
);
```

## Integration Flow

1. **External Chain**: User sends native coins to external station
2. **Value Split**: Coins divided between deposit amount and gas fees
3. **Cross-Chain**: Message sent to host chain station with deposit details
4. **Host Chain**: Host station credits EVVM balance with native coin equivalent
5. **EVVM**: Recipient can use deposited coins within EVVM ecosystem

:::warning[Sufficient Value Required]
Ensure `msg.value` covers both the deposit amount and cross-chain messaging fees. Each protocol has different gas requirements that must be satisfied for successful execution.
:::

:::info[Native Coin Representation]
Native coins are represented as `address(0)` in EVVM balances, consistent with the standard convention for native currency handling.
:::

---

## fisherBridgeReceive(03-ExternalChainStation)


**Function Type**: `external`  
**Function Signature**: `fisherBridgeReceive(address,address,address,uint256,uint256,bytes)`  
**Access Control**: `onlyFisherExecutor`  
**Returns**: `void`

Receives and validates Fisher bridge transactions from host chain. Verifies EIP-191 signature and increments nonce but doesn't transfer tokens (validation-only function for external chain).

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `address` | Original sender on the host chain (user requesting withdrawal) |
| `addressToReceive` | `address` | Recipient address on the external chain |
| `tokenAddress` | `address` | Token contract address or `address(0)` for native coin |
| `priorityFee` | `uint256` | Fee amount paid to the fisher executor |
| `amount` | `uint256` | Amount to transfer to the recipient |
| `signature` | `bytes` | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this transaction. |

## Access Control

```solidity
modifier onlyFisherExecutor() {
    if (msg.sender != fisherExecutor.current) {
        revert();
    }
    _;
}
```

Only addresses with the current `fisherExecutor` role can call this function.

## Workflow

### 1. Signature Verification
```solidity
if (!SignatureUtils.verifyMessageSignedForFisherBridge(
    EVVM_ID,
    from,
    addressToReceive,
    nextFisherExecutionNonce[from],
    tokenAddress,
    priorityFee,
    amount,
    signature
)) revert ErrorsLib.InvalidSignature();
```

Validates EIP-191 signature with EVVM ID integration using structured message format: `"{EVVM_ID},fisherBridge,{addressToReceive},{nonce},{tokenAddress},{priorityFee},{amount}"`.

### 2. Nonce Increment
```solidity
nextFisherExecutionNonce[from]++;
```
Increments Fisher bridge nonce to prevent replay attacks across cross-chain operations.

## Validation-Only Function

This function serves as a validation endpoint and **does not perform token transfers**. Its purpose:

1. **Signature Validation**: Cryptographically verifies user authorization for Fisher bridge operations
2. **Nonce Management**: Tracks sequential nonces to prevent replay attacks
3. **Access Control**: Ensures only authorized Fisher executors can validate transactions
4. **Cross-Chain Coordination**: Provides secure validation for off-chain Fisher bridge processes

**Note**: Actual token transfers on the external chain must be handled by separate Fisher bridge mechanisms that coordinate with this validation system.

## Signature Message Format

:::info

For more information about the signature structure, refer to the [Fisher Bridge Signature Structure](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md).

:::

## Fisher Bridge Architecture

### Cross-Chain Coordination
1. **Host Chain**: User authorizes withdrawal via `fisherBridgeSend`
2. **Event Emission**: Host chain emits `FisherBridgeSend` event
3. **External Chain**: Fisher executor calls `fisherBridgeReceive` with same signature
4. **Validation**: External station validates signature and nonce
5. **Execution**: Off-chain services execute the actual token transfer

### Nonce Synchronization
Both host and external chain stations maintain synchronized nonce counters:
- **Host Chain**: Increments nonce in `fisherBridgeSend`
- **External Chain**: Increments nonce in `fisherBridgeReceive`
- **Coordination**: Both must use the same nonce value for signature validation

## Security Features

### Signature Security
- **EIP-191 Compliance**: Standard Ethereum signed message format
- **Replay Protection**: Nonce-based prevention of signature reuse
- **User Authorization**: Cryptographic proof of user consent
- **Address Binding**: Signature tied to specific sender address

### Access Control
- **Fisher Authorization**: Only authorized executors can validate signatures
- **Distributed Validation**: Same signature validates on both chains

### Nonce Management
- **Sequential Increment**: Nonces increase monotonically
- **Per-User Tracking**: Individual nonce counters for each user
- **Cross-Chain Sync**: Coordination between host and external chains

## Integration with External Services

Since this function only validates signatures, external services must:

### Monitor Host Chain Events
```solidity
event FisherBridgeSend(
    address indexed from,
    address indexed addressToReceive,
    address indexed tokenAddress,
    uint256 priorityFee,
    uint256 amount,
    uint256 nonce
);
```

### Execute Token Transfers
Based on validated parameters:
- **Native Coins**: Transfer `amount` of native currency to `addressToReceive`
- **ERC20 Tokens**: Transfer `amount` of `tokenAddress` tokens to `addressToReceive`
- **Priority Fees**: Handle fee distribution to fisher executor

### Error Handling
- **Signature Validation**: Use this function to verify user authorization (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))
- **Nonce Tracking**: Ensure nonce synchronization with host chain
- **Transfer Validation**: Verify successful token transfers

## Error Conditions

| Error | Condition |
|-------|-----------|
| `InvalidSignature` | Signature verification fails |
| Access Control Revert | Called by unauthorized address (not current fisher executor) |

## Usage Flow

1. **Host Chain**: User calls `fisherBridgeSend` with signature
2. **Event Monitoring**: External services detect `FisherBridgeSend` event
3. **Signature Validation**: Fisher calls `fisherBridgeReceive` with same parameters
4. **Nonce Increment**: External station increments user's nonce
5. **Token Transfer**: External services execute actual transfer
6. **Fee Distribution**: Priority fees handled by external coordination

## Coordination Requirements

For proper fisher bridge operation:

### Signature Consistency
- Same signature used on both host and external chains
- Identical parameter values across chains
- Synchronized nonce values

### Service Integration
- Off-chain monitoring of host chain events
- External token transfer execution
- Priority fee distribution mechanisms
- Error handling and retry logic

:::info[Off-chain Coordination Required]
This function only validates signatures and manages nonces. Actual token transfers on the external chain require off-chain services that coordinate between the validation and execution steps.
:::

:::warning[Nonce Synchronization Critical]
Nonce values must remain synchronized between host and external chain stations. Mismatched nonces will cause signature validation failures and break the fisher bridge system.
:::

---

## fisherBridgeSendERC20


**Function Type**: `external`  
**Function Signature**: `fisherBridgeSendERC20(address,address,address,uint256,uint256,bytes)`  
**Access Control**: `onlyFisherExecutor`  
**Returns**: `void`

Processes Fisher bridge ERC20 token transfers to host chain. Validates signature, deposits tokens, and emits tracking event for cross-chain coordination.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `address` | User initiating the deposit from external chain |
| `addressToReceive` | `address` | Recipient address for EVVM balance credit |
| `tokenAddress` | `address` | ERC20 token contract address |
| `priorityFee` | `uint256` | Fee amount paid to the fisher executor |
| `amount` | `uint256` | Amount to deposit to EVVM |
| `signature` | `bytes` | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this deposit. |

## Access Control

```solidity
modifier onlyFisherExecutor() {
    if (msg.sender != fisherExecutor.current) {
        revert();
    }
    _;
}
```

Only addresses with the current `fisherExecutor` role can call this function.

## Workflow

### 1. Signature Verification
```solidity
if (!SignatureUtils.verifyMessageSignedForFisherBridge(
    EVVM_ID,
    from,
    addressToReceive,
    nextFisherExecutionNonce[from],
    tokenAddress,
    priorityFee,
    amount,
    signature
)) revert ErrorsLib.InvalidSignature();
```

Validates EIP-191 signature with EVVM ID integration using structured message format for Fisher bridge operations.

### 2. Token Transfer
```solidity
SafeTransferLib.safeTransferFrom(tokenAddress, from, address(this), amount + priorityFee);
```

Safely transfers ERC20 tokens from user to contract using Solady's SafeTransferLib. Total transfer includes both deposit amount and priority fee.

### 3. Nonce Increment
```solidity
nextFisherExecutionNonce[from]++;
```
Increments Fisher bridge nonce to prevent replay attacks.

### 4. Event Emission
```solidity
emit FisherBridgeSend(
    from,
    addressToReceive,
    tokenAddress,
    priorityFee,
    amount,
    nextFisherExecutionNonce[from] - 1
);
```

Emits event with transfer details for cross-chain coordination.

## Token Requirements

### ERC20 Approval
Before the fisher executor can call this function, the user must approve the external chain station:
```solidity
IERC20(tokenAddress).approve(externalChainStationAddress, amount);
```

### Transfer Validation
The function validates and executes the token transfer:
```solidity
function verifyAndDepositERC20(address token, uint256 amount) internal {
    if (token == address(0)) revert();
    if (IERC20(token).allowance(msg.sender, address(this)) < amount)
        revert ErrorsLib.InsufficientBalance();
    
    IERC20(token).transferFrom(msg.sender, address(this), amount);
}
```

## Event Definition

```solidity
event FisherBridgeSend(
    address indexed from,
    address indexed addressToReceive,
    address indexed tokenAddress,
    uint256 priorityFee,
    uint256 amount,
    uint256 nonce
);
```

### Event Parameters
- `from`: User who authorized the deposit (indexed)
- `addressToReceive`: Recipient on EVVM (indexed)
- `tokenAddress`: ERC20 token being deposited (indexed)
- `priorityFee`: Fee paid to fisher executor
- `amount`: Deposit amount
- `nonce`: Execution nonce used for this transaction

## Cross-Chain Processing

The emitted event serves as a signal for cross-chain operations:

### Host Chain Coordination
1. **Event Monitoring**: Host chain services monitor for `FisherBridgeSend` events
2. **Message Creation**: Create cross-chain message with event parameters
3. **EVVM Credit**: Host chain station credits `addressToReceive` with `amount`
4. **Fee Handling**: Priority fee management through EVVM balance system

### Signature Synchronization
The same signature used here should be processable by the host chain station's `fisherBridgeReceive` function for coordination.

## Fisher Bridge Benefits

### For Users
- **Gasless Deposits**: Fisher pays gas fees on external chain
- **Simplified UX**: Single signature authorizes the entire flow
- **Flexible Recipients**: Can specify different EVVM recipient addresses

### For Fisher Executors
- **Priority Fees**: Earn fees for facilitating deposits
- **Token Custody**: Temporary custody of tokens before cross-chain transfer
- **Service Provision**: Enable cross-chain deposit services

## Security Features

### Signature Security
- **EIP-191 Standard**: Uses Ethereum's signed message standard (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))
- **Replay Protection**: Nonce-based prevention of signature reuse
- **User Authorization**: Cryptographic proof of user consent
- **Parameter Binding**: Signature tied to specific transfer parameters

### Token Security
- **Allowance Validation**: Ensures sufficient approval before transfer
- **Transfer Verification**: Uses standard ERC20 `transferFrom` with revert on failure
- **Address Validation**: Rejects zero address for token parameter

### Access Control
- **Fisher Authorization**: Only authorized executors can initiate deposits
- **Signature Validation**: Requires valid user signature for each transaction (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))

## Error Conditions

| Error | Condition |
|-------|-----------|
| `InvalidSignature` | Signature verification fails |
| `InsufficientBalance` | Insufficient ERC20 allowance |
| ERC20 Transfer Failure | Token transfer reverts (insufficient balance, paused token, etc.) |
| Access Control Revert | Called by unauthorized address |

## Usage Flow

1. **User Approval**: User approves external chain station for token spending
2. **Signature Creation**: User signs authorization message with deposit details
3. **Fisher Execution**: Authorized fisher calls `fisherBridgeSendERC20`
4. **Validation**: Function validates signature and transfers tokens
5. **Event Emission**: Event emitted for cross-chain coordination
6. **Cross-Chain**: Host chain services process the deposit to EVVM
7. **Balance Credit**: Recipient receives tokens in EVVM balance

## Integration Requirements

### Off-Chain Services
- **Event Monitoring**: Listen for `FisherBridgeSend` events
- **Cross-Chain Messaging**: Send deposit instructions to host chain
- **Nonce Tracking**: Maintain synchronization with host chain nonces

### Token Handling
- **Custody Management**: External station holds tokens until cross-chain processing
- **Transfer Coordination**: Ensure tokens reach correct EVVM balances
- **Fee Distribution**: Handle priority fee allocation

:::warning[Token Approval Required]
Users must approve the external chain station contract before fishers can execute deposits. Insufficient allowance will cause transaction failure.
:::

:::info[Cross-Chain Coordination]
This function initiates the deposit process but requires off-chain services to complete the cross-chain transfer and EVVM balance crediting.
:::

---

## fisherBridgeSendCoin


**Function Type**: `external payable`  
**Function Signature**: `fisherBridgeSendCoin(address,address,uint256,uint256,bytes)`  
**Access Control**: `onlyFisherExecutor`  
**Returns**: `void`

Facilitates native coin deposits from external chain to EVVM through the fisher bridge system. This function validates user signatures, accepts native currency payments, and emits events for cross-chain processing coordination.

## Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `from` | `address` | User initiating the deposit from external chain |
| `addressToReceive` | `address` | Recipient address for EVVM balance credit |
| `priorityFee` | `uint256` | Fee amount paid to the fisher executor |
| `amount` | `uint256` | Amount of native coins to deposit to EVVM |
| `signature` | `bytes` | Cryptographic signature ([EIP-191](https://eips.ethereum.org/EIPS/eip-191)) from the `from` address authorizing this deposit. |

## Access Control

```solidity
modifier onlyFisherExecutor() {
    if (msg.sender != fisherExecutor.current) {
        revert();
    }
    _;
}
```

Only addresses with the current `fisherExecutor` role can call this function.

## Workflow

### 1. Signature Verification
```solidity
if (!SignatureUtils.verifyMessageSignedForFisherBridge(
    from,
    addressToReceive,
    nextFisherExecutionNonce[from],
    address(0), // Native coins represented as address(0)
    priorityFee,
    amount,
    signature
)) revert ErrorsLib.InvalidSignature();
```

:::info

For more information about the signature structure, refer to the [Fisher Bridge Signature Structure](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md).

:::

Note: Native coins are represented as `address(0)` in the signature.

### 2. Payment Validation
```solidity
if (msg.value != amount + priorityFee)
    revert ErrorsLib.InsufficientBalance();
```

Ensures the fisher executor sends exactly the required amount:
- `amount`: Native coins for deposit to EVVM
- `priorityFee`: Fee paid to the fisher executor

### 3. Nonce Management
```solidity
nextFisherExecutionNonce[from]++;
```
Increments the user's execution nonce to prevent replay attacks.

### 4. Event Emission
```solidity
emit FisherBridgeSend(
    from,
    addressToReceive,
    address(0), // Native coins
    priorityFee,
    amount,
    nextFisherExecutionNonce[from] - 1
);
```

Emits event with transfer details for cross-chain coordination.

## Native Coin Handling

### Payment Structure
The `msg.value` must equal the sum of:
- **Deposit Amount**: Native coins to be credited in EVVM
- **Priority Fee**: Compensation for the fisher executor

### Value Validation
```solidity
Total Required = amount + priorityFee
msg.value must equal Total Required
```

Unlike ERC20 deposits, native coin deposits require exact payment matching.

## Event Definition

```solidity
event FisherBridgeSend(
    address indexed from,
    address indexed addressToReceive,
    address indexed tokenAddress, // address(0) for native coins
    uint256 priorityFee,
    uint256 amount,
    uint256 nonce
);
```

### Event Parameters
- `from`: User who authorized the deposit (indexed)
- `addressToReceive`: Recipient on EVVM (indexed)
- `tokenAddress`: `address(0)` for native coins (indexed)
- `priorityFee`: Fee paid to fisher executor
- `amount`: Native coin deposit amount
- `nonce`: Execution nonce used for this transaction

## Cross-Chain Processing

### Host Chain Coordination
1. **Event Monitoring**: Host chain services monitor for `FisherBridgeSend` events with `tokenAddress == address(0)`
2. **Native Coin Recognition**: Identify native coin deposits by zero address
3. **EVVM Credit**: Host chain station credits `addressToReceive` with `amount` of native coins
4. **Fee Handling**: Priority fee management through EVVM balance system

### Signature Consistency
The signature format includes `address(0)` for native coins, ensuring consistency between external and host chain validation.

## Fisher Bridge Benefits

### For Users
- **Gasless Deposits**: Users don't pay gas fees on external chain
- **Direct Payment**: Simple native currency payment to fisher
- **Signature Authorization**: Single signature authorizes the deposit

### For Fisher Executors
- **Priority Fees**: Earn fees in native currency
- **Direct Payment**: Receive both deposit and fee in single transaction
- **Service Revenue**: Generate income from cross-chain deposit facilitation

## Security Features

### Signature Security
- **EIP-191 Standard**: Uses Ethereum's signed message standard (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))
- **Native Coin Identifier**: `address(0)` clearly identifies native coin deposits
- **Replay Protection**: Nonce-based prevention of signature reuse
- **Parameter Binding**: Signature tied to specific deposit parameters

### Payment Security
- **Exact Value Matching**: Requires precise payment amount
- **Atomic Operation**: Payment and validation in single transaction
- **Fee Transparency**: Clear separation of deposit amount and priority fee

### Access Control
- **Fisher Authorization**: Only authorized executors can accept deposits
- **Signature Validation**: Cryptographic proof of user consent required (see [signature format](../../../09-SignatureStructures/04-Treasury/01-FisherBridgeSignatureStructure.md))

## Error Conditions

| Error | Condition |
|-------|-----------|
| `InvalidSignature` | Signature verification fails |
| `InsufficientBalance` | `msg.value != amount + priorityFee` |
| Access Control Revert | Called by unauthorized address |

## Usage Flow

1. **User Intent**: User wants to deposit native coins to EVVM
2. **Signature Creation**: User signs authorization message with deposit details
3. **Fisher Payment**: Fisher sends `amount + priorityFee` in native currency
4. **Fisher Execution**: Fisher calls `fisherBridgeSendCoin` with signature
5. **Validation**: Function validates signature and payment amount
6. **Event Emission**: Event emitted for cross-chain coordination
7. **Cross-Chain**: Host chain services process the deposit to EVVM
8. **Balance Credit**: Recipient receives native coins in EVVM balance

## Payment Example

For a deposit of 1 ETH with 0.01 ETH priority fee:

```solidity
fisherBridgeSendCoin{value: 1.01 ether}(
    userAddress,
    recipientAddress, 
    0.01 ether, // priorityFee
    1 ether,    // amount
    signature
);
```

Result:
- **External Station**: Receives 1.01 ETH
- **EVVM Credit**: Recipient gets 1 ETH balance
- **Fisher Fee**: 0.01 ETH compensation

## Integration Requirements

### Off-Chain Services
- **Event Monitoring**: Listen for `FisherBridgeSend` events with `address(0)`
- **Native Coin Processing**: Handle native currency cross-chain transfers
- **Nonce Synchronization**: Maintain coordination with host chain

### Payment Coordination
- **User-Fisher Agreement**: Establish terms for deposit and fee amounts
- **Payment Verification**: Ensure correct value transmission
- **Cross-Chain Messaging**: Coordinate with host chain for EVVM crediting

:::warning[Exact Payment Required]
The fisher executor must send exactly `amount + priorityFee` in native currency. Any deviation will cause transaction failure.
:::

:::info[Native Coin Representation]
Native coins are consistently represented as `address(0)` throughout the system, from signature creation to EVVM balance crediting.
:::

---

## Admin Functions(03-ExternalChainStation)


The Treasury External Chain Station includes comprehensive administrative functions with time-delayed governance, following the same security patterns as the host chain station but adapted for external chain operations.

## Admin Management

### proposeAdmin

**Function Type**: `external`  
**Function Signature**: `proposeAdmin(address)`  
**Access Control**: `onlyAdmin`

Proposes a new admin address with a mandatory 1-day time delay for security.

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `_newOwner` | `address` | Address of the proposed new admin |

#### Workflow
1. **Validation**: Ensures new address is not zero address or current admin
2. **Proposal Setup**: Sets `admin.proposal = _newOwner`
3. **Time Lock**: Sets `admin.timeToAccept = block.timestamp + 1 days`

### rejectProposalAdmin

**Function Type**: `external`  
**Function Signature**: `rejectProposalAdmin()`  
**Access Control**: `onlyAdmin`

Cancels a pending admin change proposal.

### acceptAdmin

**Function Type**: `external`  
**Function Signature**: `acceptAdmin()`  
**Access Control**: Proposed admin only

Accepts a pending admin proposal and completes the admin transition.

## Fisher Executor Management

### proposeFisherExecutor

**Function Type**: `external`  
**Function Signature**: `proposeFisherExecutor(address)`  
**Access Control**: `onlyAdmin`

Proposes a new fisher executor with the same time-delay mechanism.

### rejectProposalFisherExecutor

**Function Type**: `external`  
**Function Signature**: `rejectProposalFisherExecutor()`  
**Access Control**: `onlyAdmin`

Cancels a pending fisher executor change proposal.

### acceptFisherExecutor

**Function Type**: `external`  
**Function Signature**: `acceptFisherExecutor()`  
**Access Control**: Proposed fisher executor only

Accepts a pending fisher executor proposal.

## Cross-Chain Configuration

### setHostChainAddress

**Function Type**: `external`  
**Function Signature**: `setHostChainAddress(bytes32,string)`  
**Access Control**: `onlyAdmin`

Configures the host chain station address for all supported cross-chain protocols.

#### Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| `hostChainStationAddressBytes32` | `bytes32` | Host station address in bytes32 format (for Hyperlane and LayerZero) |
| `hostChainStationAddressString` | `string` | Host station address in string format (for Axelar) |

#### Workflow
```solidity
function setHostChainAddress(
    bytes32 hostChainStationAddressBytes32,
    string memory hostChainStationAddressString
) external onlyAdmin {
    hyperlane.hostChainStationAddress = hostChainStationAddressBytes32;
    layerZero.hostChainStationAddress = hostChainStationAddressBytes32;
    axelar.hostChainStationAddress = hostChainStationAddressString;
    _setPeer(
        layerZero.hostChainStationEid,
        layerZero.hostChainStationAddress
    );
}
```

## Getter Functions

### getAdmin

**Function Type**: `external view`  
**Function Signature**: `getAdmin()`  
**Returns**: `AddressTypeProposal memory`

Returns the complete admin state including current admin, proposed admin, and acceptance timestamp.

### getFisherExecutor

**Function Type**: `external view`  
**Function Signature**: `getFisherExecutor()`  
**Returns**: `AddressTypeProposal memory`

Returns the complete fisher executor state.

### getNextFisherExecutionNonce

**Function Type**: `external view`  
**Function Signature**: `getNextFisherExecutionNonce(address)`  
**Returns**: `uint256`

Returns the next nonce value for a specific user's fisher bridge operations.

### getEvvmAddress

**Function Type**: `external view`  
**Function Signature**: `getEvvmAddress()`  
**Returns**: `address`

Returns the address of the connected EVVM core contract (used for reference, not direct interaction).

### Configuration Getters

#### getHyperlaneConfig
**Returns**: `HyperlaneConfig memory`
```solidity
struct HyperlaneConfig {
    uint32 hostChainStationDomainId;
    bytes32 hostChainStationAddress;
    address mailboxAddress;
}
```

#### getLayerZeroConfig
**Returns**: `LayerZeroConfig memory`
```solidity
struct LayerZeroConfig {
    uint32 hostChainStationEid;
    bytes32 hostChainStationAddress;
    address endpointAddress;
}
```

#### getAxelarConfig
**Returns**: `AxelarConfig memory`
```solidity
struct AxelarConfig {
    string hostChainStationChainName;
    string hostChainStationAddress;
    address gasServiceAddress;
    address gatewayAddress;
}
```

#### getOptions
**Returns**: `bytes memory`

Returns the LayerZero execution options used for cross-chain messaging.

## External Chain Specific Features

### Asset Management
Unlike the host chain station, the external chain station:
- **Holds Real Assets**: Manages actual ERC20 tokens and native coins
- **No EVVM Integration**: Doesn't directly interact with EVVM balances
- **Transfer Execution**: Handles final asset delivery to users

### Cross-Chain Coordination
- **Message Reception**: Receives withdrawal instructions from host chain
- **Asset Distribution**: Transfers tokens/coins to specified recipients
- **Event Emission**: Signals deposit operations for host chain processing

## Security Features

### Time-Delayed Governance
- **1-Day Delay**: All role changes require 24-hour waiting period
- **Proposal/Accept Pattern**: Two-step process prevents accidental changes
- **Emergency Rejection**: Current admin can cancel pending proposals

### Asset Security
- **Real Asset Custody**: Manages actual tokens and native coins
- **Transfer Validation**: Ensures sufficient balances before transfers
- **Address Verification**: Validates recipient addresses for asset delivery

### Cross-Chain Security
- **Protocol Authentication**: Validates messages from authorized host chain station
- **Address Configuration**: Secure setup of cross-chain communication endpoints
- **Message Integrity**: Ensures accurate parameter transmission across chains

## Configuration Requirements

### Host Chain Setup
Before calling `setHostChainAddress`:
1. **Host Station Deployment**: Ensure host chain station is deployed and configured
2. **Address Verification**: Confirm both bytes32 and string formats represent same address
3. **Protocol Compatibility**: Verify host station supports all three protocols

### Asset Requirements
For proper operation, ensure:
1. **Token Holdings**: Sufficient ERC20 token balances for withdrawal processing
2. **Native Balance**: Adequate native coins for user withdrawals and gas fees
3. **Allowance Management**: Proper token approval mechanisms if needed

## Error Conditions

Similar to host chain station:
- **Access Control**: Unauthorized calls to admin-only functions
- **Time Validation**: Premature acceptance attempts
- **Address Validation**: Invalid or duplicate address proposals

## Governance Flow

The administrative flow mirrors the host chain station:
1. **Proposal**: Current admin proposes changes
2. **Time Delay**: 24-hour waiting period
3. **Acceptance**: Proposed address accepts the role
4. **Completion**: Role transfer and state cleanup

:::warning[Cross-Chain Coordination]
When changing admin or fisher executor roles, ensure coordination between host and external chain stations to maintain synchronized operations.
:::

:::info[Asset Custody Responsibility]
The external chain station holds real assets and is responsible for their secure management and distribution. Admin changes affect control over these assets.
:::

---

## How to Create an EVVM Service


Create gasless smart contracts that your users will love! This guide shows you exactly how to build EVVM services with practical examples.

## What is an EVVM Service?

An EVVM Service is a **smart contract that works without gas fees for users**. Instead of users paying gas, "fishers" (third parties) execute transactions and get rewarded.

### Coffee Shop Example

The best way to understand is with a simple example:

```solidity
// ❌ Traditional Contract: Users pay gas + coffee price
contract TraditionalCafe {
    function buyCoffee() external payable {
        require(msg.value >= 0.01 ether, "Not enough for coffee");
        // User paid gas + coffee = bad UX
    }
}

// ✅ EVVM Service: Users pay only coffee price, no gas!
contract EVVMCafe {
    function orderCoffee(
        address clientAddress,
        string memory coffeeType,
        uint256 quantity,
        uint256 totalPrice,
        uint256 nonce,
        bytes memory signature,
        uint256 priorityFee_EVVM,
        uint256 nonce_EVVM,
        bool priorityFlag_EVVM,
        bytes memory signature_EVVM
    ) external {
        // 1. Customer signed this off-chain (no gas!)
        // 2. Fisher executes this function (gets rewarded)
        // 3. Customer pays only coffee price through EVVM
        // 4. Everyone happy! ☕
    }
}
```

**What happens:**
1. **Customer**: Signs `"<evvmID>,orderCoffee,latte,1,1000000000000000,123456"` (1 latte for 0.001 ETH, no gas!)
2. **Fisher**: Executes the transaction (gets rewarded for doing it)
3. **EVVM**: Handles the payment (customer pays only for coffee)
4. **Result**: Customer gets coffee without gas fees!

### Who are "Fishers"?

**Fishers** = Anyone who executes EVVM transactions

- **Anyone can be a fisher** (even your grandma!)
- **Staker-fishers** get automatic rewards from EVVM
- **Regular fishers** get rewards only if you give them some

Think of fishers like Uber drivers - they provide a service (executing transactions) and get paid for it.

## Quick Start: Build Your First Service

Skip the theory - let's build something! You can understand the details later.

### Installation

Foundry (recommended)

```bash
forge install EVVM-org/Testnet-Contracts
forge install OpenZeppelin/openzeppelin-contracts
```

NPM
```bash
npm install @evvm/testnet-contracts @openzeppelin/contracts
```

**Foundry setup:** Add to `foundry.toml`:
```toml
remappings = [
    "@evvm/testnet-contracts/=lib/Testnet-Contracts/src/",
    "@openzeppelin/contracts/=lib/openzeppelin-contracts/contracts/"
]
```

**Key imports you'll need:**
```solidity

```

### Simple Message Service Example

Let's build a service where users can store messages without paying gas:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MessageService {
    address public evvmAddress;
    
    mapping(address => string) public messages;
    mapping(address => mapping(uint256 => bool)) public usedNonces;
    
    constructor(address _evvmAddress) {
        evvmAddress = _evvmAddress;
    }
    
    function storeMessage(
        address user,
        string memory message,
        uint256 nonce,
        bytes memory signature
    ) external {
        // 1. Check nonce isn't reused
        require(!usedNonces[user][nonce], "Nonce used");
        
        // 2. Verify user signed this (simplified)
        // In production, use proper signature verification
        
        // 3. Store the message
        messages[user] = message;
        usedNonces[user][nonce] = true;
        
        // 4. Fisher executed this for free (no automatic rewards)
        // You could add custom rewards here if you want
    }
}
```

**What happens:**
1. User signs message with nonce (off-chain, no gas)
2. Fisher calls `storeMessage()` 
3. Message gets stored
4. Fisher gets no automatic rewards (free service)

But let's make it more interesting...

### Complete Coffee Shop Example (Production-Ready)

Here's the full EVVMCafe contract with proper signature verification, service staking, and admin functions:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EVVMCafe {
    
    error InvalidSignature();
    error NonceAlreadyUsed();

    address evvmAddress;

    address constant ETHER_ADDRESS = address(0);

    address constant PRINCIPAL_TOKEN_ADDRESS = address(1);

    address ownerOfShop;

    mapping(address => mapping(uint256 => bool)) public checkAsyncNonce;

    constructor(address _evvmAddress, address _ownerOfShop) {
        evvmAddress = _evvmAddress;
        ownerOfShop = _ownerOfShop;
    }

    function orderCoffee(
        address clientAddress,
        string memory coffeeType,
        uint256 quantity,
        uint256 totalPrice,
        uint256 nonce,
        bytes memory signature,
        uint256 priorityFee_EVVM,
        uint256 nonce_EVVM,
        bool priorityFlag_EVVM,
        bytes memory signature_EVVM
    ) external {
        if (
            !SignatureRecover.signatureVerification(
                Strings.toString(IEvvm(evvmAddress).getEvvmID()),
                "orderCoffee",
                string.concat(
                    coffeeType,
                    ",",
                    Strings.toString(quantity),
                    ",",
                    Strings.toString(totalPrice),
                    ",",
                    Strings.toString(nonce)
                ),
                signature,
                clientAddress
            )
        ) revert InvalidSignature();

        if (checkAsyncNonce[clientAddress][nonce]) revert NonceAlreadyUsed();

        IEvvm(evvmAddress).pay(
            clientAddress,
            address(this),
            "",
            ETHER_ADDRESS,
            totalPrice,
            priorityFee_EVVM,
            nonce_EVVM,
            priorityFlag_EVVM,
            address(this),
            signature_EVVM
        );

        if (IEvvm(evvmAddress).isAddressStaker(address(this))) {
            
            IEvvm(evvmAddress).caPay(
                msg.sender,
                ETHER_ADDRESS,
                priorityFee_EVVM
            );

            IEvvm(evvmAddress).caPay(
                msg.sender,
                PRINCIPAL_TOKEN_ADDRESS,
                IEvvm(evvmAddress).getRewardAmount() / 2
            );
        }

        checkAsyncNonce[clientAddress][nonce] = true;
    }

    function withdrawRewards(address to) external {
        
        if (msg.sender != ownerOfShop) revert InvalidSignature();

        uint256 balance = IEvvm(evvmAddress).getBalance(
            address(this),
            PRINCIPAL_TOKEN_ADDRESS
        );

        IEvvm(evvmAddress).caPay(to, PRINCIPAL_TOKEN_ADDRESS, balance);
    }

    function withdrawFunds(address to) external {
        if (msg.sender != ownerOfShop) revert InvalidSignature();

        uint256 balance = IEvvm(evvmAddress).getBalance(
            address(this),
            ETHER_ADDRESS
        );

        IEvvm(evvmAddress).caPay(to, ETHER_ADDRESS, balance);
    }
}
```
:::info
You can find the full EVVMCafe contract [here](https://github.com/EVVM-org/Hackathon-CoffeShop-Example/blob/main/contracts/src/EVVMCafe.sol)
:::

**What happens:**
1. **Customer signs**: `"<evvmID>,orderCoffee,latte,2,20000000000000000,123"` (2 lattes for 0.02 ETH, nonce: 123)
2. **Fisher calls** `orderCoffee()` with customer's signature + payment signature
3. **Contract verifies**: Signature matches exact format and nonce not reused
4. **EVVM processes payment**: Customer → Coffee Shop (ETH payment)
5. **Fisher incentive system**: If cafe is a staker, fisher gets priority fees + 50% of rewards
6. **Nonce marked as used**: Prevents future replay attacks
7. **Result**: Customer gets coffee, pays no gas, fisher gets incentivized!

**Key Features:**
- **Production-ready NatSpec documentation** with detailed function comments
- **Comprehensive error handling** with custom errors (InvalidSignature, NonceAlreadyUsed)
- **Fisher incentive system** that rewards fishers with priority fees + 50% of reward tokens
- **Proper signature verification** using SignatureRecover library
- **Replay attack protection** with async nonce tracking
- **Owner-only withdrawal functions** for both ETH funds and reward tokens
- **Clear code organization** with sections for errors, state variables, and functions

## Key Concepts (Simple Explanations)

### Nonces: Preventing Replay Attacks
```solidity
// Without nonces: 
// 1. Alice signs "123,orderCoffee,latte,1,1000000000000000"  (missing nonce)
// 2. Evil person copies signature and buys 1000 coffees!

// With nonces (EVVMCafe uses async nonces):
// 1. Alice signs "123,orderCoffee,latte,1,1000000000000000,456789" 
//    (Alice wants 1 latte for 0.001 ETH, nonce: 456789)
// 2. Contract checks: if (checkAsyncNonce[alice][456789]) revert NonceAlreadyUsed();
// 3. Contract marks: checkAsyncNonce[alice][456789] = true;
// 4. Evil person can't reuse signature with nonce 456789
```

### Two Types of Nonces
- **Sync nonces**: 1, 2, 3, 4... (must be in order, managed by EVVM)
- **Async nonces**: any unused number (you track them, like EVVMCafe does)

**EVVMCafe uses async nonces** for flexibility - customers can use timestamp, random numbers, or any unique value.

### Fishers & Rewards
| Fisher Type | Paid Service | Free Service |
|-------------|--------------|--------------|
| **Staker** | ✅ Gets automatic rewards | ❌ No automatic rewards |
| **Regular** | ❌ No automatic rewards | ❌ No automatic rewards |

**You can give custom rewards to anyone:**
```solidity
// Custom reward for any fisher
IEvvm(evvmAddress).caPay(msg.sender, PRINCIPAL_TOKEN_ADDRESS, rewardAmount);
```

## Common Service Patterns

### Pattern 1: Free Service
```solidity
function freeAction(address user, bytes memory signature) external {
    // No payment, no automatic rewards
    // You can add custom rewards if you want
}
```

### Pattern 2: Paid Service  
```solidity
function paidAction(
    address user, 
    bytes memory signature,
    uint256 priorityFee,
    uint256 evvmNonce,
    bool useAsync,
    bytes memory evvmSignature
) external {
    // Process payment - staker fishers get automatic rewards!
    IEvvm(evvmAddress).pay(user, address(this), "", ETHER_ADDRESS, amount, priorityFee, evvmNonce, useAsync, msg.sender, evvmSignature);
}
```

### Pattern 3: Custom Rewards
```solidity
function actionWithCustomRewards(address user, bytes memory signature) external {
    // Your logic here...
    
    // Reward anyone you want
    if (IEvvm(evvmAddress).isAddressStaker(msg.sender)) {
        IEvvm(evvmAddress).caPay(msg.sender, PRINCIPAL_TOKEN_ADDRESS, bigReward);
    } else {
        IEvvm(evvmAddress).caPay(msg.sender, PRINCIPAL_TOKEN_ADDRESS, smallReward);
    }
}
```

## Service Staking: Creating Sustainable Economics 

Your service itself can become a staker and earn rewards! This creates powerful economic models:

### Why Service Staking?
- **Service earns automatic rewards** when processing payments
- **Create sustainable economics** (service funds itself)
- **Build incentive pools** for users and fishers
- **Enable cashback/loyalty programs**

### Example: Service Staking Integration

The EVVMCafe example above already includes service staking! Here's how it works:

```solidity
/**
 * FISHER INCENTIVE SYSTEM:
 * If this contract is registered as a staker in EVVM virtual blockchain, distribute rewards to the fisher.
 * This creates an economic incentive for fishers to process transactions.
 *
 * Rewards distributed:
 * 1. All priority fees paid by the client (priorityFee_EVVM)
 * 2. Half of the reward earned from this transaction
 *
 * Note: You could optionally restrict this to only staker fishers by adding:
 * IEvvm(evvmAddress).isAddressStaker(msg.sender) to the condition
 */
if (IEvvm(evvmAddress).isAddressStaker(address(this))) {
    // Transfer the priority fee to the fisher as immediate incentive
    IEvvm(evvmAddress).caPay(
        msg.sender,
        ETHER_ADDRESS,
        priorityFee_EVVM
    );

    // Transfer half of the reward (on principal tokens) to the fisher
    IEvvm(evvmAddress).caPay(
        msg.sender,
        PRINCIPAL_TOKEN_ADDRESS,
        IEvvm(evvmAddress).getRewardAmount() / 2
    );
}

/**
 * @notice Withdraws accumulated virtual blockchain reward tokens from the contract
 * @dev Only callable by the coffee shop owner
 */
function withdrawRewards(address to) external {
    // Ensure only the shop owner can withdraw accumulated rewards
    if (msg.sender != ownerOfShop) revert InvalidSignature();

    // Get the current balance of principal tokens (EVVM virtual blockchain rewards)
    uint256 balance = IEvvm(evvmAddress).getBalance(address(this), PRINCIPAL_TOKEN_ADDRESS);
    
    // Transfer all accumulated reward tokens to the specified address
    IEvvm(evvmAddress).caPay(to, PRINCIPAL_TOKEN_ADDRESS, balance);
}

/**
 * @notice Withdraws accumulated ETH funds from coffee sales
 * @dev Only callable by the coffee shop owner
 */
function withdrawFunds(address to) external {
    // Ensure only the shop owner can withdraw accumulated funds
    if (msg.sender != ownerOfShop) revert InvalidSignature();

    // Get the current ETH balance held by the contract
    uint256 balance = IEvvm(evvmAddress).getBalance(address(this), ETHER_ADDRESS);
    
    // Transfer all accumulated ETH to the specified address
    IEvvm(evvmAddress).caPay(to, ETHER_ADDRESS, balance);
}
```

**What happens:**
1. **Service stakes** tokens via Staking contract (one-time setup)
2. **Each transaction** generates automatic rewards when service is staker
3. **Fisher incentive system activates**: Fishers get priority fees + 50% of reward tokens
4. **Service accumulates**: Coffee payments (ETH) + remaining 50% of reward tokens
5. **Economic incentives created**: Fishers prioritize this service's transactions
6. **Owner can withdraw**: Both ETH funds and accumulated reward tokens separately

**Economic Models You Can Build:**
1. **Cashback Services**: Reward users with service earnings
2. **Fisher Bonus Pools**: Create extra rewards for active fishers  
3. **Loyalty Programs**: Accumulate rewards for frequent users
4. **Cross-Service Incentives**: Fund other services in your ecosystem

## Complete Example: Message Board Service

Here's a production-ready example you can copy and modify:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MessageBoard {
    address public evvmAddress;
    address constant ETHER_ADDRESS = address(0);
    address constant PRINCIPAL_TOKEN_ADDRESS = address(1);
    
    mapping(address => string) public messages;
    mapping(address => mapping(uint256 => bool)) public usedNonces;
    
    uint256 public constant MESSAGE_PRICE = 100;
    
    constructor(address _evvmAddress) {
        evvmAddress = _evvmAddress;
    }
    
    // Free message posting
    function postFreeMessage(
        address user,
        string memory message,
        uint256 nonce,
        bytes memory signature
    ) external {
        require(!usedNonces[user][nonce], "Nonce used");
        // In production: add proper signature verification
        
        messages[user] = message;
        usedNonces[user][nonce] = true;
        
        // No automatic rewards, but you could add custom ones
    }
    
    // Paid message posting (fishers get rewarded)
    function postPaidMessage(
        address user,
        string memory message,
        uint256 nonce,
        bytes memory signature,
        uint256 priorityFee,
        uint256 evvmNonce,
        bool useAsync,
        bytes memory evvmSignature
    ) external {
        require(!usedNonces[user][nonce], "Nonce used");
        
        // Process payment - staker fishers get automatic rewards!
        IEvvm(evvmAddress).pay(
            user,
            address(this),
            "",
            PRINCIPAL_TOKEN_ADDRESS,
            MESSAGE_PRICE,
            priorityFee,
            evvmNonce,
            useAsync,
            msg.sender,
            evvmSignature
        );
        
        messages[user] = message;
        usedNonces[user][nonce] = true;
    }
}
```

## Frontend Integration (Basic Example)

```javascript
// User signs and fisher executes
async function orderCoffee(coffeeType, quantity, totalPrice) {
    const nonce = Date.now();
    const evvmId = await evvmContract.getEvvmID();
    
    // Customer signs order (no gas needed!)
    // Example: "123,orderCoffee,latte,1,1000000000000000,1698123456789"
    const orderMessage = `${evvmId},orderCoffee,${coffeeType},${quantity},${totalPrice},${nonce}`;
    const orderSignature = await wallet.signMessage(orderMessage);
    
    // Customer also signs payment approval
    const paymentSignature = await signPayment(totalPrice, evvmNonce);
    
    // Fisher calls contract (pays gas, gets rewarded)
    await evvmCafe.orderCoffee(
        userAddress,
        coffeeType,
        quantity,
        totalPrice,
        nonce,
        orderSignature,
        priorityFee,
        evvmNonce,
        true, // useAsync
        paymentSignature
    );
}
```

## Quick Reference

| Function Type | Who Gets Rewards |
|---------------|------------------|
| **Free service** | No automatic rewards (you can add custom ones) |
| **Paid service** | Staker fishers get automatic rewards + priority fee |
| **Custom rewards** | Anyone you choose via `caPay()` |

**Essential EVVM Functions:**
```solidity
// Check if someone is a staker
bool isStaker = IEvvm(evvmAddress).isAddressStaker(address(this));

// Token addresses (built-in constants)
address constant ETHER_ADDRESS = address(0);
address constant PRINCIPAL_TOKEN_ADDRESS = address(1);

// Get EVVM ID for signature verification
uint256 evvmId = IEvvm(evvmAddress).getEvvmID();

// Verify signatures (prevent tampering)
bool valid = SignatureRecover.signatureVerification(
    Strings.toString(evvmId), "functionName", "params", signature, signer
);

// Process payment (stakers get automatic rewards)
IEvvm(evvmAddress).pay(from, to, identity, token, amount, priorityFee, nonce, useAsync, executor, signature);

// Give custom rewards or withdraw funds
IEvvm(evvmAddress).caPay(recipient, token, amount);

// Check balances
uint256 balance = IEvvm(evvmAddress).getBalance(address(this), token);

// Get reward amount for service staking
uint256 reward = IEvvm(evvmAddress).getRewardAmount();
```
## Advanced Tips

**Connect to other services:**
```solidity
// Call Name Service to resolve usernames
(bool success, bytes memory result) = nameServiceAddress.call(
    abi.encodeWithSignature("verifyStrictAndGetOwnerOfIdentity(string)", username)
);
address userAddress = abi.decode(result, (address));
```

**Service staking for automatic rewards:**
```solidity
// Make your service a staker (see Staking docs for implementation)
stakingContract.publicServiceStaking(address(this), true, stakingAmount, ...);
```

---

## Next Steps

**You now know the essentials!** Here's what to explore next:

### Learn More
- **[Signature Structures](./09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md)** - Production signature patterns
- **[Staking System](./05-Staking/01-Introduction.md)** - **Essential!** Make your service a staker for automatic rewards
- **[Name Service](./06-NameService/01-Introduction.md)** - Add usernames to your service
- **[EVVM Core](./04-EVVM/01-Introduction.md)** - Advanced payment features

### Pro Tips
1. **Start simple** - Build a free service first, add payments later
2. **Test thoroughly** - Use testnet extensively before mainnet
3. **Consider service staking** - Creates sustainable economics
4. **Design for users** - Gasless experience is your biggest advantage

**💡 For sustainable services with automatic funding:** Check out the [Staking System](./05-Staking/01-Introduction.md) to learn how to make your service contract a staker and earn automatic rewards.

---

**Ready to build?** Copy the examples above and start experimenting! The EVVM ecosystem makes it easy to create powerful services without complex infrastructure. 🚀

---

## Introduction to EVVM Signature Structures


All EVVM operations require cryptographic signatures for security. This guide explains the universal signature format used across all EVVM services.

## Universal Message Format

Every EVVM signature follows this standardized structure:

```
<evvmId>,<functionName>,<param1>,<param2>,...,<paramN>
```

**Components:**
- `<evvmId>`: Network identifier (typically `1`)
- `<functionName>`: Operation to execute (`pay`, `registerUsername`, etc.)
- `<param1>, <param2>...`: Function parameters in exact order

## EIP-191 Message Signing

EVVM uses the **EIP-191 standard** - the same protocol used by MetaMask and other Ethereum wallets.

**How it works:**
1. Build your message: `1,pay,0x742c...,0x0000...,50000000000000000,1000000000000000,42,false,0x0000...`
2. EIP-191 wraps it: `"\x19Ethereum Signed Message:\n145"` + message
3. Wallet creates signature from the wrapped message

This prevents signatures from being used on other systems or contracts.

## Parameter Formatting Rules

All parameters must be converted to strings:

- **Numbers**: `50000000000000000` (decimal, no separators)
- **Addresses**: `0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c` (lowercase hex with 0x)
- **Strings**: `alice` (as provided)
- **Booleans**: `true` or `false` (lowercase)
- **Bytes**: `0xa1b2c3d4...` (hex with 0x)

## Message Construction Process

1. **Convert Parameters**: Transform all values to proper string format
2. **Concatenate**: Join with commas in exact parameter order
3. **Sign**: Use wallet to create EIP-191 signature

## Example: Payment Transaction

**Scenario:** Send 0.05 ETH to another user

**Function Parameters:**
1. Recipient: `0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c`
2. Token: `0x0000000000000000000000000000000000000000` (ETH)
3. Amount: `50000000000000000` (0.05 ETH in wei)
4. Priority Fee: `1000000000000000` (0.001 ETH)
5. Nonce: `42`
6. Priority Flag: `false` (sync execution)
7. Executor: `0x0000000000000000000000000000000000000000` (unrestricted)

**Constructed Message:**
```
1,pay,0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c,0x0000000000000000000000000000000000000000,50000000000000000,1000000000000000,42,false,0x0000000000000000000000000000000000000000
```

**Username Alternative:**
Replace address with username `alice`:
```
1,pay,alice,0x0000000000000000000000000000000000000000,50000000000000000,1000000000000000,42,false,0x0000000000000000000000000000000000000000
```

## EVVM Services Overview

### EVVM Core Functions
**Payments and transfers:**
- Single payments to addresses or usernames
- Batch payments to multiple recipients
- Withdrawal operations (coming soon)

### Name Service Functions  
**Username management:**
- Registration (pre-register → register process)
- Marketplace (make/withdraw/accept offers)
- Metadata management and renewal

### Staking Functions
**Token staking operations:**
- Public and presale staking/unstaking
- Reward claiming and management

### Treasury Functions
**Cross-chain operations:**
- Bridge transfers between blockchains
- Asset management across networks

## Important Rules

- **Parameter Order**: Must match exact function specification
- **Nonce Usage**: Each signature requires unique nonce per service
- **Format Precision**: No extra spaces, correct case sensitivity
- **Address Format**: Always lowercase with `0x` prefix

---

## Single Payment Signature Structure


To authorize payment operations the user must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. The message is constructed by concatenating the EVVM ID, action type, and parameters, then wrapped with the EIP-191 prefix: `"\x19Ethereum Signed Message:\n"` + message length + message content.

The structure uses conditional logic to determine whether to use a direct address or identity string for the recipient.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),        // EVVM ID as string
    "pay",                           // Action type
    string.concat(                   // Concatenated parameters
        _receiverAddress == address(0)
            ? _receiverIdentity
            : AdvancedStrings.addressToString(_receiverAddress),
        ",",
        AdvancedStrings.addressToString(_token),
        ",",
        Strings.toString(_amount),
        ",",
        Strings.toString(_priorityFee),
        ",",
        Strings.toString(_nonce),
        ",",
        _priorityFlag ? "true" : "false",
        ",",
        AdvancedStrings.addressToString(_executor)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},pay,{receiver},{token},{amount},{priorityFee},{nonce},{priorityFlag},{executor}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

This creates the final hash that the user must sign with their private key.

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"pay"`
- *Purpose*: Identifies this as a payment operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Recipient Identifier (String):**
- If `_receiverAddress == address(0)`: Use `_receiverIdentity` string directly
- If `_receiverAddress != address(0)`: Use `AdvancedStrings.addressToString(_receiverAddress)`
- *Purpose*: Specifies the intended recipient using either address or identity

**3.2. Token Address (String):**
- The result of `AdvancedStrings.addressToString(_token)`
- *Purpose*: Identifies the token being transferred

**3.3. Amount (String):**
- The result of `Strings.toString(_amount)`
- *Purpose*: Specifies the quantity of the token to be transferred

**3.4. Priority Fee (String):**
- The result of `Strings.toString(_priorityFee)`
- *Purpose*: Specifies the fee paid to staking holders

**3.5. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for the transaction

**3.6. Priority Flag (String):**
- `"true"`: If `_priorityFlag` is `true` (asynchronous)
- `"false"`: If `_priorityFlag` is `false` (synchronous)
- *Purpose*: Explicitly includes the execution mode in the signed message

**3.7. Executor Address (String):**
- The result of `AdvancedStrings.addressToString(_executor)`
- *Purpose*: Specifies the address authorized to submit this payment request

## Example

Here's a practical example of constructing a signature message for sending 0.05 ETH:

**Scenario:** User wants to send 0.05 ETH to another user using synchronous processing

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_priorityFlag`: `false` (synchronous processing)
- `_receiverAddress`: `0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c`
- `_token`: `address(0)` (ETH)
- `_amount`: `50000000000000000` (0.05 ETH in wei)
- `_priorityFee`: `1000000000000000` (0.001 ETH in wei)
- `_nonce`: `42`
- `_executor`: `0x0000000000000000000000000000000000000000` (unrestricted)

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "pay", // action type
    "0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c,0x0000000000000000000000000000000000000000,50000000000000000,1000000000000000,42,false,0x0000000000000000000000000000000000000000",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,pay,0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c,0x0000000000000000000000000000000000000000,50000000000000000,1000000000000000,42,false,0x0000000000000000000000000000000000000000
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n145",
    "1,pay,0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c,0x0000000000000000000000000000000000000000,50000000000000000,1000000000000000,42,false,0x0000000000000000000000000000000000000000"
))
```

**Concatenated parameters breakdown:**
1. `0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c` - Receiver address
2. `0x0000000000000000000000000000000000000000` - Token address (ETH)
3. `50000000000000000` - Amount in wei (0.05 ETH)
4. `1000000000000000` - Priority fee in wei (0.001 ETH)
5. `42` - Nonce
6. `false` - Priority flag (synchronous)
7. `0x0000000000000000000000000000000000000000` - Executor (unrestricted)

## Example with Username

Here's another example using a username instead of an address:

**Scenario:** User wants to send 0.05 ETH to username "example" using asynchronous processing

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_priorityFlag`: `true` (asynchronous processing)
- `_receiverAddress`: `address(0)` (using identity instead)
- `_receiverIdentity`: `"example"`
- `_token`: `address(0)` (ETH)
- `_amount`: `50000000000000000` (0.05 ETH in wei)
- `_priorityFee`: `2000000000000000` (0.002 ETH in wei)  
- `_nonce`: `15`
- `_executor`: `0x0000000000000000000000000000000000000000` (unrestricted)

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "pay", // action type
    "example,0x0000000000000000000000000000000000000000,50000000000000000,2000000000000000,15,true,0x0000000000000000000000000000000000000000",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,pay,example,0x0000000000000000000000000000000000000000,50000000000000000,2000000000000000,15,true,0x0000000000000000000000000000000000000000
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n134",
    "1,pay,example,0x0000000000000000000000000000000000000000,50000000000000000,2000000000000000,15,true,0x0000000000000000000000000000000000000000"
))
```

**Concatenated parameters breakdown:**
1. `example` - Receiver identity (username)
2. `0x0000000000000000000000000000000000000000` - Token address (ETH)
3. `50000000000000000` - Amount in wei (0.05 ETH)
4. `2000000000000000` - Priority fee in wei (0.002 ETH)
5. `15` - Nonce
6. `true` - Priority flag (asynchronous)
7. `0x0000000000000000000000000000000000000000` - Executor (unrestricted)

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**: 
  - `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **Priority Flag**: Determines execution mode (async=`true`, sync=`false`)
- **Recipient Logic**: Uses `_receiverIdentity` if `_receiverAddress == address(0)`, otherwise uses the address
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

---

## Disperse Payment Signature Structure


To authorize disperse payment operations the user must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. The message is constructed by concatenating the EVVM ID, action type (`"dispersePay"`), and parameters (including a hash of the recipient data array), then wrapped with the EIP-191 prefix: `"\x19Ethereum Signed Message:\n"` + message length + message content.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),        // EVVM ID as string
    "dispersePay",                   // Action type
    string.concat(                   // Concatenated parameters
        AdvancedStrings.bytes32ToString(hashList),
        ",",
        AdvancedStrings.addressToString(_token),
        ",",
        Strings.toString(_amount),
        ",",
        Strings.toString(_priorityFee),
        ",",
        Strings.toString(_nonce),
        ",",
        _priorityFlag ? "true" : "false",
        ",",
        AdvancedStrings.addressToString(_executor)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},dispersePay,{hashList},{token},{amount},{priorityFee},{nonce},{priorityFlag},{executor}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

This creates the final hash that the user must sign with their private key.

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"dispersePay"`
- *Purpose*: Identifies this as a disperse payment operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Hash List (String):**
- The result of `AdvancedStrings.bytes32ToString(hashList)`
- Where `hashList = sha256(abi.encode(toData))`
- *Purpose*: Ensures signature covers the specific recipient list and amounts

**3.2. Token Address (String):**
- The result of `AdvancedStrings.addressToString(_token)`
- *Purpose*: Identifies the token being distributed

**3.3. Total Amount (String):**
- The result of `Strings.toString(_amount)`
- *Purpose*: Specifies the total amount being distributed across all recipients

**3.4. Priority Fee (String):**
- The result of `Strings.toString(_priorityFee)`
- *Purpose*: Specifies the fee paid to staking holders

**3.5. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for the transaction

**3.6. Priority Flag (String):**
- `"true"`: If `_priorityFlag` is `true` (asynchronous)
- `"false"`: If `_priorityFlag` is `false` (synchronous)
- *Purpose*: Explicitly includes the execution mode in the signed message

**3.7. Executor Address (String):**
- The result of `AdvancedStrings.addressToString(_executor)`
- *Purpose*: Specifies the address authorized to submit this payment request

:::tip

- `AdvancedStrings.addressToString` converts an address to a lowercase string
- `AdvancedStrings.bytes32ToString` converts a bytes32 hash to a hexadecimal string  
- `Strings.toString` converts a number to a string
- `_priorityFlag` indicates whether the payment will be executed asynchronously (`true`) or synchronously (`false`)
- The signature verification uses the `SignatureRecover.signatureVerification` function with structured parameters

:::

## Hash List Structure

The `hashList` component within the signature message is derived by ABI-encoding the entire `toData` array and then computing its `sha256` hash:

```solidity
bytes32 hashList = sha256(abi.encode(toData));
```

This ensures that the signature covers the specific recipient list and amounts.

## Example

Here's a practical example of constructing a signature message for distributing 0.1 ETH to multiple recipients:

**Scenario:** User wants to distribute 0.1 ETH to three recipients using synchronous processing

**Recipients (`toData` array):**
```solidity
DispersePayMetadata[] memory toData = new DispersePayMetadata[](3);
toData[0] = DispersePayMetadata({
    amount: 30000000000000000,  // 0.03 ETH
    to_address: 0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c,
    to_identity: ""
});
toData[1] = DispersePayMetadata({
    amount: 50000000000000000,  // 0.05 ETH
    to_address: address(0),
    to_identity: "alice"
});
toData[2] = DispersePayMetadata({
    amount: 20000000000000000,  // 0.02 ETH
    to_address: 0x8e3f2b4c5d6a7f8e9c1b2a3d4e5f6c7d8e9f0a1b,
    to_identity: ""
});
```

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `hashList`: `sha256(abi.encode(toData))` = `0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b`
- `_token`: `address(0)` (ETH)
- `_amount`: `100000000000000000` (0.1 ETH total)
- `_priorityFee`: `5000000000000000` (0.005 ETH)
- `_nonce`: `25`
- `_priorityFlag`: `false` (synchronous)
- `_executor`: `address(0)` (unrestricted)

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "dispersePay", // action type
    "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b,0x0000000000000000000000000000000000000000,100000000000000000,5000000000000000,25,false,0x0000000000000000000000000000000000000000",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,dispersePay,0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b,0x0000000000000000000000000000000000000000,100000000000000000,5000000000000000,25,false,0x0000000000000000000000000000000000000000
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n188",
    "1,dispersePay,0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b,0x0000000000000000000000000000000000000000,100000000000000000,5000000000000000,25,false,0x0000000000000000000000000000000000000000"
))
```

**Concatenated parameters breakdown:**
1. `0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b` - Hash of recipient data
2. `0x0000000000000000000000000000000000000000` - Token address (ETH)
3. `100000000000000000` - Total amount in wei (0.1 ETH)
4. `5000000000000000` - Priority fee in wei (0.005 ETH)
5. `25` - Nonce
6. `false` - Priority flag (synchronous)
7. `0x0000000000000000000000000000000000000000` - Executor (unrestricted)

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**:
  - `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
  - `AdvancedStrings.bytes32ToString` converts bytes32 hash to hex string with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **Hash List Integrity**: `hashList = sha256(abi.encode(toData))` ensures signature covers specific recipients
- **Amount Validation**: Total `_amount` should equal sum of all individual amounts in `toData` array
- **Priority Flag**: Determines execution mode (async=`true`, sync=`false`)
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

## `DispersePayMetadata` Struct

Defines the payment details for a single recipient within the `toData` array.

```solidity
struct DispersePayMetadata {
    uint256 amount;
    address to_address;
    string to_identity;
}
```

- **amount**: The amount to send to this specific recipient
- **to_address**: Direct address (use `address(0)` if using identity)
- **to_identity**: Username/identity string (empty if using address)

---

## Withdrawal Signature Structure


:::warning

**Currently Not Implemented in SignatureUtils.sol**

The withdrawal signature verification functionality is not currently implemented in the `SignatureUtils.sol` library. The current implementation only includes:
- `verifyMessageSignedForPay` - for single payment operations
- `verifyMessageSignedForDispersePay` - for disperse payment operations

This documentation is preserved for reference and will be updated when withdrawal signature verification is implemented.

:::

To authorize withdrawal operations from the EVVM protocol, the user whose funds are being withdrawn (`from`) must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard.

This signature proves the user's intent and authorization to withdraw a specific `amount` of a `token` to a designated external `addressToReceive` (if any), according to the parameters included in the signed message.

## Expected Signed Message Format

Based on the pattern established in the current SignatureUtils.sol implementation, withdrawal signature verification would likely follow this structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),        // EVVM ID as string
    "withdraw",                      // Action type (expected)
    string.concat(                   // Concatenated parameters
        AdvancedStrings.addressToString(addressToReceive),
        ",",
        AdvancedStrings.addressToString(_token),
        ",",
        Strings.toString(_amount),
        ",",
        Strings.toString(_priorityFee),
        ",",
        Strings.toString(_nonce),
        ",",
        _priorityFlag ? "true" : "false",
        ",",
        AdvancedStrings.addressToString(_executor)
    ),
    signature,
    signer
);
```

### Expected Internal Message Construction

Following the `SignatureRecover` pattern, the function would construct the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This would result in a message format:
```
"{evvmID},withdraw,{addressToReceive},{token},{amount},{priorityFee},{nonce},{priorityFlag},{executor}"
```

### Expected EIP-191 Message Hashing

The message would be hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

## Expected Message Components

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Expected value: `"withdraw"`
- *Purpose*: Identifies this as a withdrawal operation

**3. Concatenated Parameters (String):**
The parameters would be concatenated with comma separators:

**3.1. Recipient Address (String):**
- The result of `AdvancedStrings.addressToString(addressToReceive)`
- *Purpose*: The destination address on the external network where the withdrawn tokens should be sent via the bridge

**3.2. Token Address (String):**
- The result of `AdvancedStrings.addressToString(_token)`
- *Purpose*: The ERC20 token contract address being withdrawn

**3.3. Amount (String):**
- The result of `Strings.toString(_amount)`
- *Purpose*: The quantity of the token the user authorizes to be withdrawn

**3.4. Priority Fee (String):**
- The result of `Strings.toString(_priorityFee)`
- *Purpose*: The fee included in the transaction authorization

**3.5. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for the transaction

**3.6. Priority Flag (String):**
- `"true"`: If `_priorityFlag` is `true` (asynchronous)
- `"false"`: If `_priorityFlag` is `false` (synchronous)  
- *Purpose*: Explicitly includes the execution mode in the signed message

**3.7. Executor Address (String):**
- The result of `AdvancedStrings.addressToString(_executor)`
- *Purpose*: Specifies the address authorized to submit this withdrawal request

:::warning Expected Technical Details

**This structure is speculative** and based on the pattern used in the implemented payment functions:

- **Expected Message Format**: `"{evvmID},{functionName},{parameters}"`
- **Expected EIP-191 Compliance**: Would use `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Expected Hash Function**: `keccak256` would be used for the final message hash before signing
- **Expected Signature Recovery**: Would use `ecrecover` to verify the signature against the expected signer
- **String Conversion**:
  - `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **Priority Flag**: Would determine execution mode (async=`true`, sync=`false`)
- **EVVM ID**: Would identify the specific EVVM instance for signature verification
- **Bridge Integration**: `addressToReceive` would specify the destination on external network

**Note**: The actual implementation may differ from this expected structure when withdrawal functionality is added to SignatureUtils.sol.

:::

---

## Pre-registration of username Signature Structure


To authorize the `preRegistrationUsername` operation, the user must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. The message is constructed by concatenating the EVVM ID, action type (`"preRegistrationUsername"`), and parameters, then wrapped with the EIP-191 prefix: `"\x19Ethereum Signed Message:\n"` + message length + message content.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "preRegistrationUsername",                          // Action type
    string.concat(                                      // Concatenated parameters
        AdvancedStrings.bytes32ToString(_hashUsername),
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},preRegistrationUsername,{hashUsername},{nameServiceNonce}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

This creates the final hash that the user must sign with their private key.

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"preRegistrationUsername"`
- *Purpose*: Identifies this as a username pre-registration operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Username Hash (String):**
- The result of `AdvancedStrings.bytes32ToString(_hashUsername)`
- *Purpose*: String representation of the `bytes32` hash commitment being pre-registered

**3.2. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for pre-registration actions by the user

## Example

Here's a practical example of constructing a signature message for pre-registering a username:

**Scenario:** User wants to pre-register the username "alice" with a secret clowNumber

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- Username: `"alice"`
- ClowNumber: `123456789` (secret value)
- `_hashUsername`: `keccak256(abi.encodePacked("alice", 123456789))` = `0xa1b2c3d4e5f6789abcdef123456789abcdef123456789abcdef123456789abcdef`
- `_nameServiceNonce`: `15`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "preRegistrationUsername", // action type
    "0xa1b2c3d4e5f6789abcdef123456789abcdef123456789abcdef123456789abcdef,15",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,preRegistrationUsername,0xa1b2c3d4e5f6789abcdef123456789abcdef123456789abcdef123456789abcdef,15
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n97",
    "1,preRegistrationUsername,0xa1b2c3d4e5f6789abcdef123456789abcdef123456789abcdef123456789abcdef,15"
))
```

**Concatenated parameters breakdown:**
1. `0xa1b2c3d4e5f6789abcdef123456789abcdef123456789abcdef123456789abcdef` - Hash of username and clowNumber
2. `15` - Name Service nonce

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**:
  - `AdvancedStrings.bytes32ToString` converts bytes32 values to lowercase hex with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **Username Hash**: Must be calculated as `keccak256(abi.encodePacked(_username, _clowNumber))`
- **Commit-Reveal Scheme**: The `_clowNumber` is secret during pre-registration and revealed during registration
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

## Hash Username Structure

For pre-registration of a username, users must provide a hash of the username. The hash is calculated using keccak256 with the following structure:

```solidity
keccak256(abi.encodePacked(_username, _clowNumber));
```

Where:

- `_username` is the desired username (string)
- `_clowNumber` is the secret key number (uint256) that will be used in the `registrationUsername` function

**Important:** The `_clowNumber` must be kept secret during pre-registration and revealed during the actual registration process.

---

## Registration of username Signature Structure


To authorize the `registrationUsername` operation (the reveal phase following pre-registration), the user must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. This signature proves ownership of the pre-registration commit by revealing the original username and the secret `clowNumber`. The message is constructed by concatenating the EVVM ID, action type (`"registrationUsername"`), and parameters, then wrapped with the EIP-191 prefix.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "registrationUsername",                             // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_clowNumber),
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},registrationUsername,{username},{clowNumber},{nameServiceNonce}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"registrationUsername"`
- *Purpose*: Identifies this as a username registration operation (reveal phase)

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Username (String):**
- The `_username` string itself
- *Purpose*: The actual, plain-text username that the user intends to register. This must match the username used to generate the hash during pre-registration

**3.2. Clow Number (String):**
- The result of `Strings.toString(_clowNumber)`
- *Purpose*: The string representation of the secret `uint256` number chosen by the user during the pre-registration phase

**3.3. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for registration actions by the user

## Example

Here's a practical example of constructing a signature message for registering a username:

**Scenario:** User wants to register the username "alice" revealing the secret clowNumber from pre-registration

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_username`: `"alice"`
- `_clowNumber`: `123456789` (secret value from pre-registration)
- `_nameServiceNonce`: `5`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "registrationUsername", // action type
    "alice,123456789,5",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,registrationUsername,alice,123456789,5
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n37",
    "1,registrationUsername,alice,123456789,5"
))
```

**Concatenated parameters breakdown:**
1. `alice` - The username to register
2. `123456789` - The secret clowNumber used during pre-registration
3. `5` - The user's name service nonce

**Commit-Reveal Verification:**
The system will verify that `keccak256(abi.encodePacked("alice", 123456789))` matches the hash that was pre-registered.

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**: `Strings.toString` converts numbers to decimal strings
- **Commit-Reveal Scheme**: The `clowNumber` and username combination must match what was used during pre-registration
- **Hash Verification**: System verifies `keccak256(abi.encodePacked(_username, _clowNumber))` matches pre-registration hash
- **EVVM ID**: Identifies the specific EVVM instance for signature verification
- **Replay Protection**: `_nameServiceNonce` prevents replay attacks for registration actions

:::

---

## Make Offer Signature Structure


To authorize the `makeOffer` operation within the Name Service, the user (the offeror) must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library. This signature proves the offeror's intent and authorization to place a specific offer on a target username under the specified terms (amount, expiration).

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "makeOffer",                                        // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_dateExpire),
        ",",
        Strings.toString(_amount),
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},makeOffer,{username},{dateExpire},{amount},{nameServiceNonce}"
```

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"makeOffer"`
- *Purpose*: Identifies this as a make offer operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Target Username (String):**
- The `_username` string itself
- *Purpose*: Specifies the username on which the offer is being placed

**3.2. Offer Expiration Date (String):**
- The result of `Strings.toString(_dateExpire)`
- *Purpose*: Unix timestamp indicating when this offer expires

**3.3. Offer Amount (String):**
- The result of `Strings.toString(_amount)`
- *Purpose*: The quantity of tokens being offered in exchange for the username

**3.4. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for make offer actions

## Example

Here's a practical example of constructing a signature message for making an offer:

**Scenario:** User wants to make an offer on username "alice"

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_username`: `"alice"`
- `_dateExpire`: `1735689600` (Unix timestamp for January 1, 2025)
- `_amount`: `1000` (tokens)
- `_nameServiceNonce`: `5`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "makeOffer", // action type
    "alice,1735689600,1000,5",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,makeOffer,alice,1735689600,1000,5
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n36",
    "1,makeOffer,alice,1735689600,1000,5"
))
```

**Concatenated parameters breakdown:**
1. `alice` - The username being offered on
2. `1735689600` - Unix timestamp when the offer expires
3. `1000` - Amount of tokens being offered
4. `5` - The offeror's name service nonce

:::tip Technical Details

- **Message Format**: `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Expiration Logic**: `_dateExpire` must be a future Unix timestamp
- **Token Amount**: `_amount` represents the total tokens offered for the username
- **Replay Protection**: `_nameServiceNonce` prevents replay attacks for offer actions
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

:::tip

- The function selector `d82e5d8b` is the first 4 bytes of the keccak256 hash of the function signature for `verifyMessageSignedForMakeOffer`
- `Strings.toString` converts a number to a string (standard OpenZeppelin utility)
- The signature verification uses the EIP-191 standard for message signing
- The `_dateExpire` parameter should be a Unix timestamp representing when the offer expires
- The `_amount` represents the total amount of tokens being offered for the username

:::

---

## Withdraw Offer Signature Structure


To authorize the `withdrawOffer` operation within the Name Service, the user (the original offeror) must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library. This signature proves the offeror's intent and authorization to withdraw a specific, previously placed offer from a target username.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "withdrawOffer",                                    // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_offerId),
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},withdrawOffer,{username},{offerId},{nameServiceNonce}"
```

## Message Components

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"withdrawOffer"`
- *Purpose*: Identifies this as a withdraw offer operation

**3. Concatenated Parameters (String):**

**3.1. Target Username (String):**
- The `_username` string itself
- *Purpose*: Specifies the username associated with the offer being withdrawn

**3.2. Offer ID (String):**
- The result of `Strings.toString(_offerId)`
- *Purpose*: The unique identifier assigned to the specific offer when created

**3.3. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for withdraw offer actions

## Example

**Scenario:** User wants to withdraw their offer on username "alice"

**Parameters:**
- `evvmID`: `1`
- `_username`: `"alice"`
- `_offerId`: `42`
- `_nameServiceNonce`: `7`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "withdrawOffer",
    "alice,42,7",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,withdrawOffer,alice,42,7
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n27",
    "1,withdrawOffer,alice,42,7"
))
```

:::tip Technical Details

- **Message Format**: `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Offer ID Validation**: `_offerId` must correspond to an existing offer made by the same user
- **Authorization**: Only the original offeror can withdraw their own offers
- **Replay Protection**: `_nameServiceNonce` prevents replay attacks
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

---

## Accept Offer Signature Structure


To authorize the `acceptOffer` operation within the Name Service, the user who **currently owns the username** must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library. This signature proves the current username owner's intent and authorization to accept a specific offer (`_offerId`), thereby agreeing to transfer ownership of their username (`_username`) in exchange for the offered amount.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "acceptOffer",                                      // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_offerId),
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},acceptOffer,{username},{offerId},{nameServiceNonce}"
```

## Message Components

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"acceptOffer"`
- *Purpose*: Identifies this as an accept offer operation

**3. Concatenated Parameters (String):**

**3.1. Target Username (String):**
- The `_username` string itself
- *Purpose*: Specifies the username that the owner is agreeing to sell

**3.2. Offer ID (String):**
- The result of `Strings.toString(_offerId)`
- *Purpose*: The unique identifier of the specific offer being accepted

**3.3. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for accept offer actions

## Example

**Scenario:** Current owner of username "alice" wants to accept an offer

**Parameters:**
- `evvmID`: `1`
- `_username`: `"alice"`
- `_offerId`: `123`
- `_nameServiceNonce`: `3`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "acceptOffer",
    "alice,123,3",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,acceptOffer,alice,123,3
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n25",
    "1,acceptOffer,alice,123,3"
))
```

:::tip Technical Details

- **Message Format**: `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Authorization**: Only the current owner of the username can accept offers
- **Offer Validation**: `_offerId` must correspond to a valid, non-expired offer
- **Ownership Transfer**: Accepting an offer transfers username ownership to the offeror
- **Replay Protection**: `_nameServiceNonce` prevents replay attacks
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

---

## Renew Username Signature Structure


To authorize the `renewUsername` operation within the Name Service, the user (the current username owner) must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library. This signature proves the owner's intent and authorization to extend the validity period of their username registration.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "renewUsername",                                    // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},renewUsername,{username},{nameServiceNonce}"
```

## Message Components

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"renewUsername"`
- *Purpose*: Identifies this as a username renewal operation

**3. Concatenated Parameters (String):**

**3.1. Target Username (String):**
- The `_username` string itself
- *Purpose*: Specifies the username whose registration is being renewed

**3.2. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for renewal actions

## Example

**Scenario:** Current owner wants to renew their username "alice"

**Parameters:**
- `evvmID`: `1`
- `_username`: `"alice"`
- `_nameServiceNonce`: `8`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "renewUsername",
    "alice,8",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,renewUsername,alice,8
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n22",
    "1,renewUsername,alice,8"
))
```

:::tip Technical Details

- **Message Format**: `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Authorization**: Only the current owner of the username can renew their own username
- **Renewal Logic**: Extends the username's expiration period and may involve a renewal fee
- **Replay Protection**: `_nameServiceNonce` prevents replay attacks
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

---

## Add Custom Metadata Signature Structure


To authorize the `addCustomMetadata` operation within the Name Service, the user who **currently owns the username** must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library. This signature proves the current username owner's intent and authorization to add or update a specific custom metadata field (`_value`) associated with their identity (`_identity`).

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "addCustomMetadata",                                // Action type
    string.concat(                                      // Concatenated parameters
        _identity,
        ",",
        _value,
        ",",
        Strings.toString(_nameServiceNonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},addCustomMetadata,{identity},{value},{nameServiceNonce}"
```

## Message Components

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"addCustomMetadata"`
- *Purpose*: Identifies this as an add custom metadata operation

**3. Concatenated Parameters (String):**

**3.1. Target Identity (String):**
- The `_identity` string itself
- *Purpose*: Specifies the identity (username) to which this custom metadata applies

**3.2. Metadata Value (String):**
- The `_value` string itself, exactly as provided by the user
- *Purpose*: Represents the custom data being associated with the identity

**3.3. Name Service Nonce (String):**
- The result of `Strings.toString(_nameServiceNonce)`
- *Purpose*: Provides replay protection for metadata operations

## Example

**Scenario:** Owner wants to add custom metadata to their identity "alice"

**Parameters:**
- `evvmID`: `1`
- `_identity`: `"alice"`
- `_value`: `"https://alice.example.com/profile"`
- `_nameServiceNonce`: `12`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "addCustomMetadata",
    "alice,https://alice.example.com/profile,12",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,addCustomMetadata,alice,https://alice.example.com/profile,12
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n59",
    "1,addCustomMetadata,alice,https://alice.example.com/profile,12"
))
```

:::tip Technical Details

- **Message Format**: `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Authorization**: Only the current owner of the identity can add custom metadata
- **Flexible Data**: `_value` can contain any string data (URLs, descriptions, custom information)
- **Metadata Management**: Allows users to associate additional information with their identities
- **Replay Protection**: `_nameServiceNonce` prevents replay attacks
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

---

## Remove Custom Metadata Signature Structure


To authorize the `removeCustomMetadata` operation within the MNS service, the user who **currently owns the username** must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard.

This signature proves the current username owner's intent and authorization to remove a specific custom metadata entry (identified by its key/index `_key`) associated with their username (`_username`).

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "removeCustomMetadata",                             // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_key),
        ",",
        Strings.toString(_nonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},removeCustomMetadata,{username},{key},{nonce}"
```

## Message Components

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"removeCustomMetadata"`
- *Purpose*: Identifies this as a remove custom metadata operation

**3. Concatenated Parameters (String):**

**3.1. Target Username (String):**
- The `_username` string itself
- *Purpose*: Specifies the username from which the custom metadata entry will be removed

**3.2. Metadata Key/Index (String):**
- The result of `Strings.toString(_key)`
- *Purpose*: The identifier for the specific metadata entry targeted for removal

**3.3. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for metadata removal operations

## Example

**Scenario:** Owner wants to remove custom metadata from their username "alice"

**Parameters:**
- `evvmID`: `1`
- `_username`: `"alice"`
- `_key`: `3` (metadata entry identifier)
- `_nonce`: `15`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "removeCustomMetadata",
    "alice,3,15",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,removeCustomMetadata,alice,3,15
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n33",
    "1,removeCustomMetadata,alice,3,15"
))
```

**Message Breakdown:**
- `8adf3927`: Function selector for remove custom metadata verification
- `alice`: The username from which the metadata will be removed
- `3`: The key/index of the specific metadata entry to remove
- `15`: The current username owner's nonce

This message would then be signed using EIP-191 standard, and the resulting signature would be used to verify the metadata removal request in the `verifyMessageSignedForRemoveCustomMetadata` function.
   
:::tip

- The function selector `8adf3927` is the first 4 bytes of the keccak256 hash of the function signature for `verifyMessageSignedForRemoveCustomMetadata`
- `Strings.toString` converts a number to a string (standard OpenZeppelin utility)
- The signature verification uses the EIP-191 standard for message signing
- Only the current owner of the username can remove custom metadata from their username
- The `_key` parameter identifies which specific metadata entry to remove by its index/identifier
- The `_nonce` parameter is the user's general nonce, not specifically the name service nonce

:::

---

## Flush Custom Metadata Signature Structure


To authorize the `flushCustomMetadata` operation within the MNS service, the user who **currently owns the username** must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard.

This signature proves the current username owner's intent and authorization to remove **all** custom metadata entries associated with their username (`_username`).

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "flushCustomMetadata",                              // Action type
    string.concat(                                      // Concatenated parameters
        _identity,
        ",",
        Strings.toString(_nonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},flushCustomMetadata,{identity},{nonce}"
```

## Example

**Scenario:** Owner wants to flush all custom metadata from their identity "alice"

**Parameters:**
- `evvmID`: `1`
- `_identity`: `"alice"`
- `_nonce`: `20`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "flushCustomMetadata",
    "alice,20",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,flushCustomMetadata,alice,20
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n31",
    "1,flushCustomMetadata,alice,20"
))
```

**Message Breakdown:**
- `3ca44e54`: Function selector for flush custom metadata verification
- `alice`: The identity (username) from which all metadata will be removed
- `20`: The current identity owner's nonce

This message would then be signed using EIP-191 standard, and the resulting signature would be used to verify the metadata flush request in the `verifyMessageSignedForFlushCustomMetadata` function.
   
:::tip

- The function selector `3ca44e54` is the first 4 bytes of the keccak256 hash of the function signature for `verifyMessageSignedForFlushCustomMetadata`
- `Strings.toString` converts a number to a string (standard OpenZeppelin utility)
- The signature verification uses the EIP-191 standard for message signing
- Only the current owner of the identity can flush all custom metadata from their identity
- This operation removes **all** custom metadata entries at once, unlike `removeCustomMetadata` which removes specific entries
- The `_nonce` parameter is the user's general nonce, similar to the remove function

:::

---

## Flush Username Signature Structure


To authorize the `flushUsername` operation within the Name Service, the user who **currently owns the username** must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library. This signature proves the current username owner's intent and authorization to completely remove and "flush" their username registration from the system.## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "flushUsername",                                    // Action type
    string.concat(                                      // Concatenated parameters
        _username,
        ",",
        Strings.toString(_nonce)
    ),
    signature,
    signer
);
```

### Internal Message Construction

This results in a message format:
```
"{evvmID},flushUsername,{username},{nonce}"
```

## Example

**Scenario:** Owner wants to permanently delete their username "alice"

**Parameters:**
- `evvmID`: `1`
- `_username`: `"alice"`
- `_nonce`: `25`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",
    "flushUsername",
    "alice,25",
    signature,
    signer
);
```

**Final message to be signed:**
```
1,flushUsername,alice,25
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n23",
    "1,flushUsername,alice,25"
))
```

⚠️ **Warning**: This operation is **irreversible** and will permanently delete the username registration and all associated data.

:::tip

- The function selector `044695cb` is the first 4 bytes of the keccak256 hash of the function signature for `verifyMessageSignedForFlushUsername`
- `Strings.toString` converts a number to a string (standard OpenZeppelin utility)
- The signature verification uses the EIP-191 standard for message signing
- Only the current owner of the username can flush their own username
- This operation is **irreversible** and permanently deletes the username registration and all associated data
- The `_nonce` parameter is the user's general nonce, similar to other deletion operations

:::

---

## Standard Staking/Unstaking Signature Structure


To authorize standard staking operations like `presaleStaking` or `publicStaking`, or their corresponding unstaking actions, the user must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. This signature proves the user's intent and authorization to perform a specific staking or unstaking action with a defined amount of staking tokens, according to the parameters provided in the signed message.

## Verification Function

The signature is verified using the `verifyMessageSignedForStake` function:

```solidity
function verifyMessageSignedForStake(
    uint256 evvmID,
    address user,
    bool isExternalStaking,
    bool _isStaking,
    uint256 _amountOfStaking,
    uint256 _nonce,
    bytes memory signature
) internal pure returns (bool)
```

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    isExternalStaking ? "publicStaking" : "presaleStaking", // Action type
    string.concat(                                      // Concatenated parameters
        _isStaking ? "true" : "false",
        ",",
        Strings.toString(_amountOfStaking),
        ",",
        Strings.toString(_nonce)
    ),
    signature,
    user
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},{actionType},{isStaking},{amountOfStaking},{nonce}"
```

Where `{actionType}` is either `"publicStaking"` or `"presaleStaking"` depending on `isExternalStaking`.

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Conditional value based on `isExternalStaking`:
  - `"publicStaking"`: When `isExternalStaking` is `true`
  - `"presaleStaking"`: When `isExternalStaking` is `false`
- *Purpose*: Identifies the specific type of staking operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Staking Action Flag (String):**
- `"true"`: If the user intends to stake (`_isStaking` is `true`)
- `"false"`: If the user intends to unstake (`_isStaking` is `false`)
- *Purpose*: Indicates whether the operation is staking or unstaking

**3.2. Staking Amount (String):**
- The result of `Strings.toString(_amountOfStaking)`
- *Purpose*: The quantity of staking tokens for this operation

**3.3. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for staking/unstaking operations

## Examples

### Public Staking Example

**Scenario:** User wants to stake 1000 tokens in public staking

**Parameters:**
- `evvmID`: `1`
- `isExternalStaking`: `true` (public staking)
- `_isStaking`: `true` (staking operation)
- `_amountOfStaking`: `1000`
- `_nonce`: `42`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",            // evvmID as string
    "publicStaking", // action type
    "true,1000,42", // concatenated parameters
    signature,
    user
);
```

**Final message to be signed:**
```
1,publicStaking,true,1000,42
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n29",
    "1,publicStaking,true,1000,42"
))
```

### Presale Unstaking Example

**Scenario:** User wants to unstake 500 tokens from presale staking

**Parameters:**
- `evvmID`: `1`
- `isExternalStaking`: `false` (presale staking)
- `_isStaking`: `false` (unstaking operation)
- `_amountOfStaking`: `500`
- `_nonce`: `43`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",             // evvmID as string
    "presaleStaking", // action type
    "false,500,43",  // concatenated parameters
    signature,
    user
);
```

**Final message to be signed:**
```
1,presaleStaking,false,500,43
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n30",
    "1,presaleStaking,false,500,43"
))
```

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected user

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected user
- **Action Types**: `"publicStaking"` for external staking, `"presaleStaking"` for internal staking
- **Dual Operations**: Single function handles both staking (`true`) and unstaking (`false`)
- **Nonce Management**: Each nonce should be unique to prevent replay attacks
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

---

## Fisher Bridge Signature Structure


To authorize cross-chain treasury operations through the Fisher Bridge system, users must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. The signature authorizes fisher executors to process cross-chain deposits and withdrawals on behalf of users, enabling gasless transactions and seamless multi-chain asset management.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),                           // EVVM ID as string
    "fisherBridge",                                     // Action type
    string.concat(                                      // Concatenated parameters
        AdvancedStrings.addressToString(addressToReceive),
        ",",
        Strings.toString(nonce),
        ",",
        AdvancedStrings.addressToString(tokenAddress),
        ",",
        Strings.toString(priorityFee),
        ",",
        Strings.toString(amount)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},fisherBridge,{addressToReceive},{nonce},{tokenAddress},{priorityFee},{amount}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"fisherBridge"`
- *Purpose*: Identifies this as a Fisher Bridge cross-chain operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Recipient Address (String):**
- The result of `AdvancedStrings.addressToString(addressToReceive)`
- *Purpose*: Specifies the address that will receive the assets or EVVM balance credit
- *Note*: This can be different from the signer address, allowing flexible recipient designation

**3.2. Nonce (String):**
- The result of `Strings.toString(nonce)`
- *Purpose*: Provides replay protection for the transaction
- *Source*: Current value from `nextFisherExecutionNonce[signer]` mapping

**3.3. Token Address (String):**
- The result of `AdvancedStrings.addressToString(tokenAddress)`
- *Purpose*: Identifies the token being transferred
- *Special Case*: `address(0)` represents native blockchain coins (ETH, MATIC, BNB, etc.)

**3.4. Priority Fee (String):**
- The result of `Strings.toString(priorityFee)`
- *Purpose*: Specifies the fee paid to the fisher executor for processing the transaction
- *Note*: Can be `0` if no priority fee is offered

**3.5. Amount (String):**
- The result of `Strings.toString(amount)`
- *Purpose*: Specifies the quantity of tokens/coins to be transferred

## Usage Scenarios

### External Chain to EVVM Deposit
Users on external chains sign messages to authorize fisher executors to deposit their assets into EVVM.

### EVVM to External Chain Withdrawal
Users sign messages to authorize fisher executors to withdraw assets from EVVM to external chains.

## Example Scenarios

### Example 1: USDC Deposit from Ethereum to EVVM

**Scenario:** User wants to deposit 100 USDC from Ethereum to EVVM with 1 USDC priority fee

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `addressToReceive`: `0x742d35Cc6634C0532925a3b8D43C1C16bE8c9123` (recipient in EVVM)
- `nonce`: `5` (current fisher execution nonce for user)
- `tokenAddress`: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` (USDC contract)
- `priorityFee`: `1000000` (1 USDC with 6 decimals)
- `amount`: `100000000` (100 USDC with 6 decimals)

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",            // evvmID as string
    "fisherBridge", // action type
    "0x742d35cc6634c0532925a3b8d43c1c16be8c9123,5,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,1000000,100000000",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,fisherBridge,0x742d35cc6634c0532925a3b8d43c1c16be8c9123,5,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,1000000,100000000
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n119",
    "1,fisherBridge,0x742d35cc6634c0532925a3b8d43c1c16be8c9123,5,0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48,1000000,100000000"
))
```

**Concatenated parameters breakdown:**
1. `0x742d35cc6634c0532925a3b8d43c1c16be8c9123` - Recipient address (lowercase with 0x prefix)
2. `5` - Current nonce
3. `0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48` - USDC token address (lowercase with 0x prefix)
4. `1000000` - Priority fee (1 USDC)
5. `100000000` - Amount (100 USDC)

### Example 2: ETH Withdrawal from EVVM to Ethereum

**Scenario:** User wants to withdraw 0.5 ETH from EVVM to Ethereum with 0.01 ETH priority fee

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `addressToReceive`: `0x9876543210987654321098765432109876543210` (recipient on Ethereum)
- `nonce`: `12` (current fisher execution nonce for user)
- `tokenAddress`: `0x0000000000000000000000000000000000000000` (native ETH)
- `priorityFee`: `10000000000000000` (0.01 ETH in wei)
- `amount`: `500000000000000000` (0.5 ETH in wei)

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",            // evvmID as string
    "fisherBridge", // action type
    "0x9876543210987654321098765432109876543210,12,0x0000000000000000000000000000000000000000,10000000000000000,500000000000000000",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,fisherBridge,0x9876543210987654321098765432109876543210,12,0x0000000000000000000000000000000000000000,10000000000000000,500000000000000000
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n129",
    "1,fisherBridge,0x9876543210987654321098765432109876543210,12,0x0000000000000000000000000000000000000000,10000000000000000,500000000000000000"
))
```

**Concatenated parameters breakdown:**
1. `0x9876543210987654321098765432109876543210` - Recipient address (lowercase with 0x prefix)
2. `12` - Current nonce
3. `0x0000000000000000000000000000000000000000` - Native coin representation (address(0))
4. `10000000000000000` - Priority fee (0.01 ETH)
5. `500000000000000000` - Amount (0.5 ETH)

## Security Considerations

### Nonce Management
- **Sequential Processing**: Nonces must be used in sequential order
- **Cross-Chain Synchronization**: Both host and external chain stations track the same nonce sequence
- **Replay Protection**: Each nonce can only be used once per user

### Signature Binding
- **Parameter Integrity**: All transaction parameters are included in the signed message
- **Address Verification**: Signer address is cryptographically verified during signature validation
- **Message Format**: Exact message format must be maintained for successful verification

### Priority Fee Security
- **Optional Fee**: Priority fee can be set to `0` if no incentive is offered
- **Fisher Incentive**: Higher priority fees may result in faster processing
- **Fee Distribution**: Priority fees are typically credited to fisher executor's balance

## Implementation Notes

### Address Formatting
- Uses `AdvancedStrings.addressToString()` for consistent address representation
- Addresses are converted to lowercase hex strings without `0x` prefix
- Ensures compatibility across different blockchain environments

### Nonce Tracking
- Each user has an independent nonce sequence tracked in `nextFisherExecutionNonce` mapping
- Nonces increment after each successful fisher bridge operation
- Both host and external chain stations must maintain synchronized nonce values

### Cross-Chain Coordination
- Same signature format used on both host and external chains
- Enables verification on both sides of the cross-chain transaction
- Supports multiple interoperability protocols (Hyperlane, LayerZero, Axelar)

## Verification Function

The signature verification is performed using the `SignatureUtils.verifyMessageSignedForFisherBridge()` function:

```solidity
function verifyMessageSignedForFisherBridge(
    uint256 evvmID,
    address signer,
    address addressToReceive,
    uint256 nonce,
    address tokenAddress,
    uint256 priorityFee,
    uint256 amount,
    bytes memory signature
) internal pure returns (bool)
```

This function uses the `SignatureRecover.signatureVerification()` to reconstruct the message string using the provided parameters and verifies that the signature was created by the specified signer address using EIP-191 standard verification.

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **Address Format**: `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
- **Cross-Chain Compatibility**: Same signature format used on both host and external chains
- **Fisher Incentives**: Higher priority fees may result in faster processing by fisher executors
- **Flexible Recipients**: `addressToReceive` can differ from signer for flexible asset management
- **Native Token Support**: `address(0)` represents native blockchain coins (ETH, MATIC, BNB, etc.)
- **Nonce Management**: Sequential nonce processing prevents replay attacks across chains
- **EVVM ID**: Identifies the specific EVVM instance for signature verification

:::

:::info[EIP-191 Compliance]
All Fisher Bridge signatures follow the EIP-191 "Signed Data Standard" ensuring compatibility with standard Ethereum wallets and signing tools. The message is prefixed with `"\x19Ethereum Signed Message:\n"` during the signing process.
:::

:::warning[Exact Format Required]
The message format must be followed exactly for signature verification to succeed. Any deviation in parameter ordering, formatting, or separators will cause verification failures and transaction rejection.
:::

---

## Testnet Exclusive Functions


:::warning[Testnet Only Functions]

These functions are exclusively available in testnet deployments and are **NOT** included in mainnet versions of the EVVM ecosystem contracts. They serve as development faucets for testing and demonstration purposes.

:::

:::info[Testnet Cooldown Configuration]

All cooldown timers in testnet deployments have been reduced to **1 minute** to facilitate faster testing and development. This includes cooldowns for transactions, staking operations, and any other time-locked features that may have longer cooldowns in mainnet.

:::

## addBalance

**Function Type**: `external`  
**Function Signature**: `addBalance(address,address,uint256)`

Testnet faucet function that directly adds token balance to any user's account, bypassing normal deposit flows. This allows developers and testers to quickly obtain tokens for testing EVVM functionality.

### Parameters

| Field      | Type      | Description                                              |
| ---------- | --------- | -------------------------------------------------------- |
| `user`     | `address` | The address of the user to receive the balance          |
| `token`    | `address` | The address of the token contract to add balance for    |
| `quantity` | `uint256` | The amount of tokens to add to the user's balance       |

### Workflow

1. **Direct Balance Addition**: Adds the specified `quantity` directly to `balances[user][token]` mapping
2. **No Authorization**: No checks or validations - anyone can call this function on testnet
3. **Immediate Effect**: Balance is available instantly for testing transactions

## setPointStaker

**Function Type**: `external`  
**Function Signature**: `setPointStaker(address,bytes1)`

Testnet faucet function that directly configures a user's staker status for testing purposes, bypassing normal staking registration and token requirements. This allows developers to quickly test staker-specific functionality.

### Parameters

| Field    | Type      | Description                                                 |
| -------- | --------- | ----------------------------------------------------------- |
| `user`   | `address` | The address of the user to set as staker                   |
| `answer` | `bytes1`  | The bytes1 value representing the staker status            |

### Workflow

1. **Direct Status Assignment**: Sets the staker status directly in `stakerList[user]` mapping to the provided `answer` value
2. **No Token Requirements**: No validation or token deposit checks - bypasses normal staking process
3. **Immediate Effect**: Staker status is active instantly for testing staker-specific features

### Staker Status Values

| Value  | Type           | Description                              |
| ------ | -------------- | ---------------------------------------- |
| `0x00` | Non-Staker     | Removes staker status (default state)   |
| `0x01` | Regular Staker | Standard staker with basic rewards       |
| `0x02` | Premium Staker | Enhanced staker with additional benefits |

---

## Introduction to Registry EVVM Contract


The Registry EVVM Contract serves as the central registry system for EVVM deployments across various testnets. This upgradeable contract implements a sophisticated dual-tier registration system with time-delayed governance for security and administrative control.

## Core Functionality

### Dual-Tier Registration System

#### Public Registration (IDs 1000+)
- **Open Access**: Anyone can register EVVM instances with auto-incrementing IDs starting from 1000
- **Chain Whitelisting**: Only whitelisted testnet chain IDs are allowed for registration
- **Automatic ID Assignment**: System automatically assigns sequential IDs for community deployments
- **Duplicate Prevention**: Prevents registration of the same address on the same chain

#### Whitelisted Registration (IDs 1-999)
- **SuperUser Only**: Reserved for official EVVM deployments managed by superUser
- **Custom ID Assignment**: Allows specific ID assignment within the reserved range
- **Official Deployments**: Used for vetted and officially supported EVVM instances
- **Enhanced Control**: Additional validation and control over reserved ID range

### Time-Delayed Governance

The contract implements a 7-day time-delayed governance system for critical operations:

- **SuperUser Changes**: Changing the superUser requires a 7-day proposal and acceptance period
- **Contract Upgrades**: Implementation upgrades require time-delayed proposals
- **Security Layer**: Prevents immediate malicious changes and allows for community review

### Chain ID Whitelisting

- **Testnet Focus**: Only allows registration on whitelisted testnet chain IDs
- **Mainnet Protection**: Prevents accidental or malicious registration on mainnet
- **Flexible Management**: SuperUser can add new chain IDs as needed

## Key Features

### Registration Functions
- `registerEvvm()`: Public registration with auto-incrementing IDs
- `sudoRegisterEvvm()`: SuperUser registration with custom IDs
- `registerChainId()`: Chain ID whitelisting management

### Governance Functions
- `proposeSuperUser()`: Propose new superUser with time delay
- `acceptSuperUser()`: Accept pending superUser proposal
- `proposeUpgrade()`: Propose contract upgrade with time delay
- `acceptProposalUpgrade()`: Accept pending upgrade proposal

### Query Functions
- `getEvvmIdMetadata()`: Retrieve EVVM registration metadata
- `getWhiteListedEvvmIdActive()`: List all active whitelisted registrations
- `getPublicEvvmIdActive()`: List all active public registrations
- `isChainIdRegistered()`: Check if chain ID is whitelisted
- `isAddressRegistered()`: Check if address is already registered

## Security Model

### Access Control
- **SuperUser Privileges**: Reserved functions for administrative control
- **Public Access**: Open registration within defined parameters
- **Time Delays**: 7-day waiting period for critical changes

### Input Validation
- **Address Validation**: Prevents zero addresses in registrations
- **Chain ID Validation**: Ensures only valid chain IDs are used
- **Duplicate Prevention**: Prevents multiple registrations of same address

### Upgrade Safety
- **UUPS Pattern**: Implements OpenZeppelin's upgradeable proxy pattern
- **Initialization Protection**: Prevents direct initialization of implementation
- **Governance Controls**: Time-delayed upgrades with proposal system

## Data Structure

### Metadata Structure
```solidity
struct Metadata {
    uint256 chainId;      // Chain ID where EVVM is deployed
    address evvmAddress;  // Contract address of the EVVM
}
```

### Governance Proposal Structure
```solidity
struct AddressTypeProposal {
    address current;        // Currently active address
    address proposal;       // Proposed new address
    uint256 timeToAccept;   // Timestamp when proposal can be accepted
}
```

## Use Cases

### For dApp Developers
- Discover available EVVM instances across different testnets
- Verify official vs community EVVM deployments
- Query metadata for specific EVVM instances

### For EVVM Operators
- Register new EVVM deployments for community use
- Track and manage multiple EVVM instances
- Participate in decentralized EVVM ecosystem

### For Ecosystem Governance
- Manage official EVVM deployments through reserved IDs
- Control testnet access through chain ID whitelisting
- Implement secure governance changes with time delays

This registry system enables a decentralized yet controlled approach to EVVM deployment management, balancing open access with security and quality control.

---

## registerEvvm Function


**Function Type**: `external`  
**Function Signature**: `registerEvvm(uint256,address)`

Public registration function for EVVM instances that allows anyone to register an EVVM deployment on whitelisted testnet chains. The function implements automatic ID assignment starting from 1000, ensuring no conflicts with the reserved range (1-999) used for official deployments managed by the superUser.

### Parameters

| Field         | Type      | Description                                              |
|---------------|-----------|----------------------------------------------------------|
| `chainId`     | `uint256` | The chain ID of the testnet where the EVVM is deployed  |
| `evvmAddress` | `address` | The contract address of the EVVM instance               |

### Workflow

1. **Access Control**: Validates that the caller is authorized using the appropriate modifier. Reverts with `InvalidUser` if not authorized.
2. **Input Validation**: Checks that the provided EVVM address is not the zero address and the chain ID is registered. Reverts with `InvalidInput` on validation failure.
3. **ID Assignment**: Assigns the next available ID from the public range (starting at 1000) to the new EVVM registration.
4. **Metadata Storage**: Stores the chain ID and EVVM address in the contract's metadata mapping for the assigned ID.
5. **State Update**: Updates the public EVVM ID counter and marks the registration as active.

---

---

## sudoRegisterEvvm Function


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `sudoRegisterEvvm(uint256,uint256,address)`

SuperUser registration function for whitelisted EVVM IDs that allows the superUser to register EVVMs with specific IDs in the reserved range (1-999). These IDs are intended for official EVVM deployments that have been vetted and approved by the ecosystem governance. Only the current superUser can call this function, which is managed through a time-delayed governance system.

### Parameters

| Field         | Type      | Description                                              |
|---------------|-----------|----------------------------------------------------------|
| `evvmId`      | `uint256` | The specific reserved ID (1-999) to assign             |
| `chainId`     | `uint256` | The chain ID where the EVVM is deployed                |
| `evvmAddress` | `address` | The contract address of the EVVM instance              |

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Input Validation**: Checks that `evvmId` is within the reserved range (1-999), that both `chainId` and `evvmAddress` are not zero, and that the chain ID is registered. Reverts with `InvalidInput` on validation failure.
3. **Duplicate Prevention**: Verifies that the `evvmAddress` is not already registered for the specified `chainId` and that the `evvmId` is not already in use. Reverts with `AlreadyRegistered` or `EvvmIdAlreadyRegistered` respectively.
4. **Registration Storage**: Stores the metadata in the registry mapping and marks the address as registered for the chain.
5. **Return Assignment**: Returns the assigned EVVM ID (same as the input `evvmId`).

---

## proposeSuperUser Function


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `proposeSuperUser(address)`

Proposes a new superUser address with a mandatory 7-day time delay before the proposal can be accepted. This function initiates the first step of the time-delayed governance process for changing the superUser, providing a security buffer against malicious or hasty changes. Only the current superUser can propose a new superUser.

### Parameters

| Field            | Type      | Description                                    |
|------------------|-----------|------------------------------------------------|
| `_newSuperUser`  | `address` | Address of the proposed new superUser         |

### Requirements

- Only callable by the current superUser
- The proposed address must not be the zero address
- The proposed address must be different from the current superUser

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Input Validation**: Checks that `_newSuperUser` is not the zero address and is different from the current superUser. Reverts on validation failure.
3. **Proposal Creation**: Sets the `superUser.proposal` to the new address and `superUser.timeToAccept` to current timestamp plus 7 days.
4. **Governance State Update**: Updates the proposal state to allow for later acceptance or rejection.

---

## rejectProposalSuperUser


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `rejectProposalSuperUser()`

Cancels a pending superUser change proposal, resetting the governance state to allow for new proposals.

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Proposal Reset**: Clears the proposed superUser address immediately.
3. **State Cleanup**: Resets the timeToAccept timestamp to 0.
4. **Governance Security**: Prevents unwanted superUser changes and maintains current governance structure.

---

## acceptSuperUser


**Function Type**: `external`  
**Function Signature**: `acceptSuperUser()`

Accepts a pending superUser proposal and completes the superUser transition, transferring governance control to the proposed address.

### Workflow

1. **Access Control**: Validates that the caller is the proposed superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not the proposed superUser.
2. **Time Validation**: Checks that the 7-day acceptance period has elapsed using the `timeElapsed` modifier. Reverts with `TimeNotElapsed` if called too early.
3. **State Update**: Sets the caller as the new superUser and clears the proposal data.
4. **Governance Transition**: Completes the superUser transition process and updates system governance.

### Governance Lifecycle
- [`proposeSuperUser()`](./01-proposeSuperUser.md) - Initiate superUser change
- [`rejectProposalSuperUser()`](./02-rejectProposalSuperUser.md) - Cancel proposals

### State Queries
- [`getSuperUserData()`](../../05-GetterFunctions/04-getSuperUserData.md) - Monitor proposal status
- [`getSuperUser()`](../../05-GetterFunctions/05-getSuperUser.md) - Verify current superUser

The `acceptSuperUser` function represents the final, irreversible step in the governance transition process, emphasizing the importance of careful consideration and preparation before execution.

---

## proposeUpgrade


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `proposeUpgrade(address _newImplementation)`

Proposes a new implementation address for contract upgrade with a mandatory 7-day time delay before the upgrade can be executed.

## Parameters

| Parameter             | Type      | Description                                    |
| --------------------- | --------- | ---------------------------------------------- |
| `_newImplementation`  | `address` | Address of the proposed new implementation     |

## Description

This function initiates the first step of the time-delayed governance process for upgrading the contract implementation. It follows the UUPS (Universal Upgradeable Proxy Standard) pattern with additional security through time delays.

## Access Control

**Modifier**: `isSuperUser`

Only the current superUser can propose contract upgrades, ensuring that only authorized governance can initiate system changes.

## Security Features

### Time Delay Protection
- **7-day waiting period**: Provides time for community review and security audits
- **Proposal transparency**: The proposed implementation address is publicly visible
- **Cancellation capability**: SuperUser can reject the proposal at any time

### Implementation Validation
The function validates that:
- The proposed implementation address is not the zero address
- Basic input validation prevents obvious errors

## Upgrade Workflow

### 1. Implementation Preparation
Before proposing an upgrade:
- New implementation contract must be deployed
- Security audits should be completed
- Compatibility testing should be performed

### 2. Proposal Submission
```solidity
// SuperUser proposes new implementation
address newImplementation = 0x1234567890123456789012345678901234567890;
registryContract.proposeUpgrade(newImplementation);
```

### 3. Waiting Period (7 Days)
- Community can review the proposed implementation
- Security researchers can audit the new code
- SuperUser can cancel if issues are discovered

### 4. Upgrade Execution
After 7 days, superUser can execute the upgrade:
```solidity
registryContract.acceptProposalUpgrade();
```

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Input Validation**: Checks that `_implementation` is not the zero address and is different from the current implementation. Reverts on validation failure.
3. **Proposal Creation**: Sets the `upgradeProposal.implementation` to the new address and `upgradeProposal.timeToAccept` to current timestamp plus 7 days.
4. **State Update**: Updates the upgrade proposal state to allow for later acceptance or rejection.

## Implementation Requirements

### UUPS Compatibility
The new implementation must:
- Inherit from `UUPSUpgradeable`
- Implement required upgrade authorization
- Maintain storage layout compatibility
- Include proper initialization functions

### Security Considerations
- Storage layout must be compatible with current version
- New functions should not break existing functionality
- Proper access controls must be maintained

## Usage Example

```solidity
// Deploy new implementation
RegistryEvvmV2 newImplementation = new RegistryEvvmV2();

// Propose the upgrade (superUser only)
registryContract.proposeUpgrade(address(newImplementation));

// Query proposal status
AddressTypeProposal memory proposal = registryContract.getUpgradeProposalData();
console.log("Proposed Implementation:", proposal.proposal);
console.log("Can execute after:", proposal.timeToAccept);
```

## Integration Examples

### Governance Dashboard
```javascript
// Monitor upgrade proposals
const monitorUpgradeProposals = async () => {
    const proposalData = await registryContract.getUpgradeProposalData();
    
    if (proposalData.proposal !== "0x0000000000000000000000000000000000000000") {
        const timeToAccept = new Date(proposalData.timeToAccept * 1000);
        const now = new Date();
        
        if (now >= timeToAccept) {
            console.log("Upgrade proposal ready for execution");
        } else {
            const remainingTime = timeToAccept - now;
            console.log(`Upgrade proposal pending: ${formatTime(remainingTime)} remaining`);
        }
    }
};
```

### Automated Testing Pipeline
```javascript
// Automated testing of proposed implementations
const testProposedImplementation = async (implementationAddress) => {
    // Deploy test proxy with new implementation
    const testProxy = await deployTestProxy(implementationAddress);
    
    // Run compatibility tests
    const compatibilityResults = await runCompatibilityTests(testProxy);
    
    // Run functional tests
    const functionalResults = await runFunctionalTests(testProxy);
    
    // Generate test report
    const report = {
        implementation: implementationAddress,
        compatibility: compatibilityResults,
        functionality: functionalResults,
        recommendation: determineRecommendation(compatibilityResults, functionalResults)
    };
    
    return report;
};
```

## Pre-Upgrade Checklist

### Technical Validation
- [ ] New implementation deployed and verified
- [ ] Storage layout compatibility confirmed
- [ ] All existing functions maintain compatibility
- [ ] New functionality properly tested
- [ ] Security audit completed

### Governance Process
- [ ] Community notification sent
- [ ] Proposal rationale documented
- [ ] Timeline communicated
- [ ] Feedback collection period established

### Risk Assessment
- [ ] Rollback plan prepared
- [ ] Impact analysis completed
- [ ] Communication plan ready
- [ ] Monitoring systems prepared

## Security Considerations

### Implementation Security
- New implementation should be thoroughly audited
- Storage layout changes must be carefully managed
- Access control patterns must be preserved

### Proposal Security
- Validate implementation address before proposing
- Ensure implementation source code is available
- Verify implementation deployment was successful

### Community Security
- Allow sufficient time for community review
- Provide clear documentation of changes
- Enable feedback and concern reporting

## Related Functions

### Upgrade Lifecycle
- [`rejectProposalUpgrade()`](./02-rejectProposalUpgrade.md) - Cancel pending upgrade proposals
- [`acceptProposalUpgrade()`](./03-acceptProposalUpgrade.md) - Execute pending upgrades

### State Queries
- [`getUpgradeProposalData()`](../../05-GetterFunctions/08-getUpgradeProposalData.md) - Query upgrade proposal status
- [`getVersion()`](../../05-GetterFunctions/09-getVersion.md) - Check current contract version

## Best Practices

### Proposal Timing
- Coordinate with other governance activities
- Avoid conflicts with superUser transitions
- Consider community engagement schedules

### Communication
- Announce upgrade proposals publicly
- Provide detailed change documentation
- Maintain transparency throughout process

### Testing
- Comprehensive testing on testnets
- Load testing for performance impact
- Integration testing with dependent systems

---

## rejectProposalUpgrade


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `rejectProposalUpgrade()`

Cancels a pending upgrade proposal, resetting the upgrade governance state to allow for new proposals.

## Description

This function allows the current superUser to cancel any pending upgrade proposal at any time during the 7-day waiting period. It provides a critical safety mechanism to reject upgrades that may have security issues, compatibility problems, or are no longer desired.

## Access Control

**Modifier**: `isSuperUser`

Only the current superUser can reject pending upgrade proposals, ensuring that only the current governance authority can cancel proposed changes.

## Security Features

### Immediate Cancellation
- No time delay required for rejection
- Immediate effect upon successful execution
- Allows for rapid response to discovered issues

### Clean State Reset
- Completely clears the pending upgrade proposal
- Resets the acceptance timestamp
- Allows for immediate new proposals with different implementations

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Proposal Reset**: Clears the proposed implementation address immediately.
3. **State Cleanup**: Resets the timeToAccept timestamp to 0.
4. **Security Measure**: Prevents unwanted contract upgrades and maintains current implementation.

```javascript
// Governance interface for upgrade management
const renderUpgradeManagement = async () => {
    const proposalData = await registryContract.getUpgradeProposalData();
    
    if (proposalData.proposal !== "0x0000000000000000000000000000000000000000") {
        return `
            
                Pending Upgrade Proposal
                Implementation: ${proposalData.proposal}
                Can execute after: ${new Date(proposalData.timeToAccept * 1000)}
                
                <button onclick="rejectUpgrade()" class="reject-btn">
                    Reject Proposal
                </button>
                
                
                    Security Analysis
                    Loading...
                
            
        `;
    }
};

const rejectUpgrade = async () => {
    if (confirm("Are you sure you want to reject this upgrade proposal?")) {
        try {
            await registryContract.rejectProposalUpgrade();
            console.log("Upgrade proposal rejected successfully");
            // Refresh interface
            location.reload();
        } catch (error) {
            console.error("Failed to reject upgrade proposal:", error);
        }
    }
};
```

## Workflow Integration

### Standard Rejection Workflow
1. **Issue Identification**: Discover problems with proposed implementation
2. **Impact Assessment**: Evaluate severity of issues
3. **Stakeholder Communication**: Inform community of rejection
4. **Execute Rejection**: Call `rejectProposalUpgrade()`
5. **Plan Resolution**: Determine next steps for addressing issues

## Related Functions

### Upgrade Lifecycle
- [`proposeUpgrade()`](./01-proposeUpgrade.md) - Create new upgrade proposals
- [`acceptProposalUpgrade()`](./03-acceptProposalUpgrade.md) - Execute pending upgrades

### State Management
- [`getUpgradeProposalData()`](../../05-GetterFunctions/08-getUpgradeProposalData.md) - Query current proposal state
- [`getVersion()`](../../05-GetterFunctions/09-getVersion.md) - Verify current implementation version

The `rejectProposalUpgrade` function serves as a critical safety valve in the upgrade governance system, ensuring that problematic upgrades can be quickly canceled while maintaining the integrity of the time-delayed governance process.

---

## acceptProposalUpgrade


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `acceptProposalUpgrade()`

Accepts a pending upgrade proposal and executes the contract upgrade after the mandatory 7-day waiting period has elapsed.

## Description

This function completes the final step of the time-delayed governance process for contract upgrades. It validates the time delay, executes the upgrade to the new implementation, and cleans up the proposal state.

## Access Control

**Modifier**: `isSuperUser`

Only the current superUser can execute pending upgrade proposals, maintaining governance authority over system changes.

## Requirements

### Time Delay Validation
- Current timestamp must be greater than or equal to `upgradeProposal.timeToAccept`
- The full 7-day waiting period must have elapsed

### Proposal State Validation
- A valid proposal must exist (proposal address cannot be zero)
- Proposal must not have been rejected or expired

## Security Features

### Time Delay Enforcement
- Mandatory 7-day waiting period cannot be bypassed
- Provides community oversight and intervention opportunity
- Allows for thorough security review

### Atomic Execution
- Upgrade and state cleanup happen in single transaction
- Prevents partial state issues
- Ensures clean governance transition

### UUPS Pattern Compliance
- Uses OpenZeppelin's `upgradeToAndCall` for secure upgrades
- Maintains proxy pattern integrity
- Preserves storage layout and state

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Time Validation**: Checks that the 7-day acceptance period has elapsed using the `timeElapsed` modifier. Reverts with `TimeNotElapsed` if called too early.
3. **Upgrade Execution**: Calls the internal `_authorizeUpgrade` function to perform the contract upgrade.
4. **State Cleanup**: Clears the proposal data after successful upgrade execution.

## Related Functions

### Upgrade Lifecycle
- [`proposeUpgrade()`](./01-proposeUpgrade.md) - Initiate upgrade proposals
- [`rejectProposalUpgrade()`](./02-rejectProposalUpgrade.md) - Cancel proposals

### State Queries
- [`getUpgradeProposalData()`](../../05-GetterFunctions/08-getUpgradeProposalData.md) - Monitor proposal status
- [`getVersion()`](../../05-GetterFunctions/09-getVersion.md) - Verify upgrade success

The `acceptProposalUpgrade` function represents the culmination of the upgrade governance process, executing irreversible system changes with appropriate safeguards and validation.

---

## registerChainId


**Function Type**: `external`  
**Access Control**: `isSuperUser`  
**Function Signature**: `registerChainId(uint256[] memory chainIds)`

Registers multiple chain IDs to the whitelist, enabling EVVM registration on those specific blockchain networks.

## Parameters

| Parameter  | Type        | Description                                              |
| ---------- | ----------- | -------------------------------------------------------- |
| `chainIds` | `uint256[]` | Array of chain IDs to whitelist for EVVM registration   |

## Description

This function allows the superUser to add multiple chain IDs to the whitelist in a single transaction. Only whitelisted chain IDs can be used for EVVM registration, providing control over which networks are supported and preventing accidental or malicious registration on inappropriate networks (such as mainnet).

## Access Control

**Modifier**: `isSuperUser`

Only the current superUser can add chain IDs to the whitelist, ensuring that network support decisions remain under governance control.

## Security Features

### Batch Operations
- Efficiently adds multiple chain IDs in a single transaction
- Reduces gas costs for managing multiple networks
- Atomic operation - all additions succeed or fail together

### Input Validation
- Validates that no chain ID in the array is zero
- Prevents registration of invalid networks
- Ensures data integrity in the whitelist

### Network Control
- Prevents mainnet registration by controlling which chains are supported
- Enables support for new testnets as they become available
- Provides fine-grained control over supported networks

### Workflow

1. **Access Control**: Validates that the caller is the current superUser using the `isSuperUser` modifier. Reverts with `InvalidUser` if not authorized.
2. **Input Validation**: Iterates through the provided chain IDs array and validates each ID is not zero. Reverts with `InvalidInput` if any chain ID is zero.
3. **Registration Loop**: For each valid chain ID, sets `isThisChainIdRegistered[chainId] = true` to enable support.
4. **State Update**: Updates the registry to support EVVM deployments on the newly registered chain IDs.

---

## _authorizeUpgrade


**Function Type**: `internal`  
**Access Control**: `isSuperUser`  
**Function Signature**: `_authorizeUpgrade(address newImplementation)`

Internal authorization function required by the UUPS (Universal Upgradeable Proxy Standard) pattern, ensuring only authorized parties can upgrade the contract implementation.

## Parameters

| Parameter            | Type      | Description                                    |
| -------------------- | --------- | ---------------------------------------------- |
| `newImplementation`  | `address` | Address of the new implementation (unused)     |

## Description

This function is an internal override required by OpenZeppelin's `UUPSUpgradeable` contract. It serves as the authorization gate for contract upgrades, but in this implementation, the actual authorization logic is handled by the time-delayed governance system in `acceptProposalUpgrade()`.

## Access Control

**Modifier**: `isSuperUser`

Only the current superUser can authorize upgrades, maintaining governance control over the upgrade process.

## Implementation Details

### Workflow

1. **Internal Access Control**: Called internally by `acceptProposalUpgrade()` which already validates the caller is the current superUser.
2. **Proposal Validation**: Verifies that a valid upgrade proposal exists with a non-zero implementation address.
3. **Time Delay Check**: Confirms that the 7-day waiting period has elapsed through the `timeElapsed` modifier.
4. **Upgrade Authorization**: Authorizes the UUPS proxy upgrade to proceed with the proposed implementation.

---

## getEvvmIdMetadata


**Function Type**: `view`  
**Function Signature**: `getEvvmIdMetadata(uint256 evvmID) returns (Metadata memory)`

Retrieves the complete metadata for a specific EVVM ID, including the chain ID and contract address where the EVVM is deployed.

## Parameters

| Parameter | Type      | Description                        |
| --------- | --------- | ---------------------------------- |
| `evvmID`  | `uint256` | The EVVM ID to query metadata for |

## Return Value

| Type       | Description                                            |
| ---------- | ------------------------------------------------------ |
| `Metadata` | Struct containing chainId and evvmAddress information |

### Metadata Structure

```solidity
struct Metadata {
    uint256 chainId;      // Chain ID where the EVVM is deployed
    address evvmAddress;  // Contract address of the EVVM instance
}
```

---

## getWhiteListedEvvmIdActive


**Function Type**: `view`  
**Function Signature**: `getWhiteListedEvvmIdActive() returns (uint256[] memory)`

Retrieves all active whitelisted EVVM IDs in the reserved range (1-999), providing a complete list of official EVVM deployments.

## Return Value

| Type        | Description                                                    |
| ----------- | -------------------------------------------------------------- |
| `uint256[]` | Array of active EVVM IDs in the whitelisted range (1-999)     |

---

## getPublicEvvmIdActive


**Function Type**: `view`  
**Function Signature**: `getPublicEvvmIdActive() returns (uint256[] memory)`

Retrieves all active public EVVM IDs in the public range (1000+), providing a complete list of community-deployed EVVM instances.

## Return Value

| Type        | Description                                                |
| ----------- | ---------------------------------------------------------- |
| `uint256[]` | Array of active EVVM IDs in the public range (1000+)     |

## Description

This function returns all EVVM IDs that have been registered through the public registration system with auto-incrementing IDs starting from 1000. It serves as a discovery mechanism for community-deployed EVVM instances that anyone can register on whitelisted testnets.

---

## getSuperUserData


**Function Type**: `view`  
**Function Signature**: `getSuperUserData() returns (AddressTypeProposal memory)`

Retrieves complete superUser governance data including current superUser, proposed superUser, and acceptance timestamp information.

## Return Value

| Type                   | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `AddressTypeProposal`  | Struct containing current superUser, proposed superUser, and timing data     |

### AddressTypeProposal Structure

```solidity
struct AddressTypeProposal {
    address current;        // Currently active superUser address
    address proposal;       // Proposed new superUser address (0x0 if none)
    uint256 timeToAccept;   // Timestamp when proposal can be accepted (0 if none)
}
```

## Description

This function provides comprehensive information about the superUser governance state, including any pending proposals and their acceptance timelines. It's essential for governance interfaces and monitoring systems that need to track superUser transitions.

---

## getSuperUser


**Function Type**: `view`  
**Function Signature**: `getSuperUser() returns (address)`

Retrieves the current superUser address - the active governance authority for the Registry EVVM contract.

## Return Value

| Type      | Description                           |
| --------- | ------------------------------------- |
| `address` | Address of the current superUser      |

## Description

This function provides a simple way to query the current superUser address without the additional governance proposal data. It's useful for quick access control checks and basic governance queries.

---

## isChainIdRegistered


**Function Type**: `view`  
**Function Signature**: `isChainIdRegistered(uint256 chainId) returns (bool)`

Checks if a specific chain ID is whitelisted for EVVM registration, determining whether registrations are allowed on that blockchain network.

## Parameters

| Parameter | Type      | Description                              |
| --------- | --------- | ---------------------------------------- |
| `chainId` | `uint256` | The chain ID to check for whitelisting  |

## Return Value

| Type   | Description                                                     |
| ------ | --------------------------------------------------------------- |
| `bool` | `true` if the chain ID is whitelisted, `false` otherwise       |

## Description

This function provides a way to verify if EVVM registrations are allowed on a specific blockchain network. Only whitelisted chain IDs can be used for both public and superUser EVVM registrations, providing control over which testnets are supported.

---

## isAddressRegistered


**Function Type**: `view`  
**Function Signature**: `isAddressRegistered(uint256 chainId, address evvmAddress) returns (bool)`

Checks if a specific EVVM address is already registered on a given chain, preventing duplicate registrations and verifying existing registrations.

## Parameters

| Parameter     | Type      | Description                                              |
| ------------- | --------- | -------------------------------------------------------- |
| `chainId`     | `uint256` | The chain ID to check for the address registration      |
| `evvmAddress` | `address` | The EVVM address to check for existing registration     |

## Return Value

| Type   | Description                                                           |
| ------ | --------------------------------------------------------------------- |
| `bool` | `true` if the address is already registered on this chain, `false` otherwise |

## Description

This function provides duplicate prevention and registration verification by checking if a specific EVVM address has already been registered on a particular blockchain. It's essential for maintaining registry integrity and preventing multiple registrations of the same address.

## Usage Examples

### Basic Registration Check
```solidity
// Check if address is already registered on Sepolia
bool isRegistered = registryContract.isAddressRegistered(
    11155111, // Sepolia chain ID
    0x1234567890123456789012345678901234567890
);

if (isRegistered) {
    console.log("EVVM address is already registered on Sepolia");
} else {
    console.log("EVVM address is available for registration");
}
```

### Pre-Registration Validation
```javascript
// Complete validation before registration attempt
const validateRegistration = async (chainId, evvmAddress) => {
    const validation = {
        isValid: true,
        errors: []
    };
    
    try {
        // Check if chain is supported
        const isChainSupported = await registryContract.isChainIdRegistered(chainId);
        if (!isChainSupported) {
            validation.isValid = false;
            validation.errors.push(`Chain ID ${chainId} is not whitelisted`);
        }
        
        // Check if address is already registered
        const isAlreadyRegistered = await registryContract.isAddressRegistered(
            chainId, 
            evvmAddress
        );
        if (isAlreadyRegistered) {
            validation.isValid = false;
            validation.errors.push('EVVM address is already registered on this chain');
        }
        
        // Additional validations
        if (!evvmAddress || evvmAddress === "0x0000000000000000000000000000000000000000") {
            validation.isValid = false;
            validation.errors.push('Invalid EVVM address');
        }
        
    } catch (error) {
        validation.isValid = false;
        validation.errors.push(`Validation failed: ${error.message}`);
    }
    
    return validation;
};
```

### Registration Status Dashboard
```javascript
// Check registration status across multiple chains
const checkMultiChainRegistration = async (evvmAddress, chainIds) => {
    const registrationStatus = {};
    
    for (const chainId of chainIds) {
        try {
            const isRegistered = await registryContract.isAddressRegistered(
                chainId, 
                evvmAddress
            );
            
            registrationStatus[chainId] = {
                chainId,
                isRegistered,
                networkName: await getNetworkName(chainId)
            };
            
        } catch (error) {
            registrationStatus[chainId] = {
                chainId,
                isRegistered: false,
                error: error.message
            };
        }
    }
    
    return registrationStatus;
};
```

## Integration Patterns

### Registration Conflict Detection
```javascript
// Service to detect and handle registration conflicts
class RegistrationConflictDetector {
    constructor(registryContract) {
        this.registry = registryContract;
    }
    
    async checkForConflicts(chainId, evvmAddress) {
        const conflicts = {
            hasConflict: false,
            conflictType: null,
            details: {}
        };
        
        try {
            // Check current chain
            const isRegistered = await this.registry.isAddressRegistered(chainId, evvmAddress);
            
            if (isRegistered) {
                conflicts.hasConflict = true;
                conflicts.conflictType = 'SAME_CHAIN_DUPLICATE';
                conflicts.details.chainId = chainId;
                conflicts.details.address = evvmAddress;
            }
            
            return conflicts;
            
        } catch (error) {
            return {
                hasConflict: true,
                conflictType: 'VALIDATION_ERROR',
                details: { error: error.message }
            };
        }
    }
    
    async suggestAlternatives(chainId, evvmAddress) {
        const suggestions = {
            canRegisterOnOtherChains: [],
            isAlreadyRegistered: await this.registry.isAddressRegistered(chainId, evvmAddress)
        };
        
        // Check other supported chains
        const supportedChains = await this.getSupportedChains();
        
        for (const otherChainId of supportedChains) {
            if (otherChainId !== chainId) {
                const isRegisteredElsewhere = await this.registry.isAddressRegistered(
                    otherChainId, 
                    evvmAddress
                );
                
                suggestions.canRegisterOnOtherChains.push({
                    chainId: otherChainId,
                    isAvailable: !isRegisteredElsewhere,
                    networkName: await getNetworkName(otherChainId)
                });
            }
        }
        
        return suggestions;
    }
    
    async getSupportedChains() {
        // This would need to be implemented based on known chains
        const knownChains = [11155111, 421614, 11155420, 80001, 84532];
        const supported = [];
        
        for (const chainId of knownChains) {
            const isSupported = await this.registry.isChainIdRegistered(chainId);
            if (isSupported) {
                supported.push(chainId);
            }
        }
        
        return supported;
    }
}
```

### Address Registry Scanner
```javascript
// Scan for existing registrations of an address
const scanAddressRegistrations = async (evvmAddress) => {
    const knownChains = [
        { id: 11155111, name: 'Sepolia' },
        { id: 421614, name: 'Arbitrum Sepolia' },
        { id: 11155420, name: 'Optimism Sepolia' },
        { id: 80001, name: 'Polygon Mumbai' },
        { id: 84532, name: 'Base Sepolia' }
    ];
    
    const registrations = [];
    
    for (const chain of knownChains) {
        try {
            // First check if chain is supported
            const isChainSupported = await registryContract.isChainIdRegistered(chain.id);
            
            if (isChainSupported) {
                const isRegistered = await registryContract.isAddressRegistered(
                    chain.id, 
                    evvmAddress
                );
                
                registrations.push({
                    chainId: chain.id,
                    chainName: chain.name,
                    isRegistered,
                    isSupported: true
                });
            } else {
                registrations.push({
                    chainId: chain.id,
                    chainName: chain.name,
                    isRegistered: false,
                    isSupported: false
                });
            }
            
        } catch (error) {
            registrations.push({
                chainId: chain.id,
                chainName: chain.name,
                isRegistered: false,
                isSupported: false,
                error: error.message
            });
        }
    }
    
    return {
        address: evvmAddress,
        totalRegistrations: registrations.filter(r => r.isRegistered).length,
        availableChains: registrations.filter(r => r.isSupported && !r.isRegistered).length,
        registrations
    };
};
```

### Smart Registration Form
```javascript
// Real-time registration form with conflict detection
const createSmartRegistrationForm = () => {
    return {
        async validateInput(chainId, evvmAddress) {
            const validation = {
                chainId: { isValid: true, message: '' },
                evvmAddress: { isValid: true, message: '' },
                overall: { isValid: true, canProceed: false }
            };
            
            // Validate chain ID
            if (!chainId || chainId <= 0) {
                validation.chainId.isValid = false;
                validation.chainId.message = 'Chain ID is required';
            } else {
                const isChainSupported = await registryContract.isChainIdRegistered(chainId);
                if (!isChainSupported) {
                    validation.chainId.isValid = false;
                    validation.chainId.message = 'Chain ID is not whitelisted';
                }
            }
            
            // Validate EVVM address
            if (!evvmAddress || evvmAddress === "0x0000000000000000000000000000000000000000") {
                validation.evvmAddress.isValid = false;
                validation.evvmAddress.message = 'EVVM address is required';
            } else if (!/^0x[a-fA-F0-9]{40}$/.test(evvmAddress)) {
                validation.evvmAddress.isValid = false;
                validation.evvmAddress.message = 'Invalid address format';
            } else if (validation.chainId.isValid) {
                // Check for duplicate registration
                const isAlreadyRegistered = await registryContract.isAddressRegistered(
                    chainId, 
                    evvmAddress
                );
                
                if (isAlreadyRegistered) {
                    validation.evvmAddress.isValid = false;
                    validation.evvmAddress.message = 'Address already registered on this chain';
                }
            }
            
            validation.overall.isValid = validation.chainId.isValid && validation.evvmAddress.isValid;
            validation.overall.canProceed = validation.overall.isValid;
            
            return validation;
        },
        
        async getRegistrationSuggestions(evvmAddress) {
            const suggestions = await scanAddressRegistrations(evvmAddress);
            
            return {
                availableChains: suggestions.registrations
                    .filter(r => r.isSupported && !r.isRegistered)
                    .map(r => ({ chainId: r.chainId, name: r.chainName })),
                    
                alreadyRegistered: suggestions.registrations
                    .filter(r => r.isRegistered)
                    .map(r => ({ chainId: r.chainId, name: r.chainName }))
            };
        }
    };
};
```

## Performance Optimization

### Batch Address Checking
```javascript
// Check multiple addresses efficiently
const batchCheckAddresses = async (chainId, addresses) => {
    const promises = addresses.map(async (address) => {
        try {
            const isRegistered = await registryContract.isAddressRegistered(chainId, address);
            return { address, isRegistered, error: null };
        } catch (error) {
            return { address, isRegistered: false, error: error.message };
        }
    });
    
    const results = await Promise.all(promises);
    
    return {
        chainId,
        total: addresses.length,
        registered: results.filter(r => r.isRegistered).length,
        available: results.filter(r => !r.isRegistered && !r.error).length,
        errors: results.filter(r => r.error).length,
        details: results
    };
};
```

### Cached Registration Status
```javascript
// Cache registration status to reduce contract calls
class RegistrationStatusCache {
    constructor(registryContract, ttl = 60000) { // 1 minute cache
        this.registry = registryContract;
        this.ttl = ttl;
        this.cache = new Map();
    }
    
    getCacheKey(chainId, address) {
        return `${chainId}_${address.toLowerCase()}`;
    }
    
    async isAddressRegistered(chainId, address) {
        const cacheKey = this.getCacheKey(chainId, address);
        const cached = this.cache.get(cacheKey);
        
        if (cached && Date.now() - cached.timestamp < this.ttl) {
            return cached.isRegistered;
        }
        
        try {
            const isRegistered = await this.registry.isAddressRegistered(chainId, address);
            
            this.cache.set(cacheKey, {
                isRegistered,
                timestamp: Date.now()
            });
            
            return isRegistered;
            
        } catch (error) {
            console.error(`Failed to check registration for ${address} on chain ${chainId}:`, error);
            throw error;
        }
    }
    
    invalidateCache(chainId = null, address = null) {
        if (chainId && address) {
            const cacheKey = this.getCacheKey(chainId, address);
            this.cache.delete(cacheKey);
        } else {
            this.cache.clear();
        }
    }
    
    getCacheStats() {
        return {
            size: this.cache.size,
            entries: Array.from(this.cache.keys())
        };
    }
}
```

## Error Handling

### Robust Address Checking
```javascript
// Handle various error conditions gracefully
const safeCheckAddressRegistration = async (chainId, evvmAddress, options = {}) => {
    const { retries = 3, timeout = 10000 } = options;
    
    // Input validation
    if (!chainId || chainId <= 0) {
        return { success: false, error: 'Invalid chain ID' };
    }
    
    if (!evvmAddress || evvmAddress === "0x0000000000000000000000000000000000000000") {
        return { success: false, error: 'Invalid EVVM address' };
    }
    
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const promise = registryContract.isAddressRegistered(chainId, evvmAddress);
            const timeoutPromise = new Promise((_, reject) => 
                setTimeout(() => reject(new Error('Timeout')), timeout)
            );
            
            const isRegistered = await Promise.race([promise, timeoutPromise]);
            
            return {
                success: true,
                isRegistered,
                chainId,
                evvmAddress
            };
            
        } catch (error) {
            console.error(`Attempt ${attempt} failed:`, error);
            
            if (attempt === retries) {
                return {
                    success: false,
                    error: `Failed after ${retries} attempts: ${error.message}`,
                    chainId,
                    evvmAddress
                };
            }
            
            // Wait before retry
            await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
        }
    }
};
```

## Security Considerations

### Input Sanitization
```javascript
// Sanitize and validate inputs
const sanitizeAddressCheck = (chainId, evvmAddress) => {
    // Sanitize chain ID
    const numericChainId = typeof chainId === 'string' ? parseInt(chainId, 10) : chainId;
    
    if (!Number.isInteger(numericChainId) || numericChainId <= 0) {
        throw new Error('Chain ID must be a positive integer');
    }
    
    // Sanitize address
    if (typeof evvmAddress !== 'string') {
        throw new Error('EVVM address must be a string');
    }
    
    const cleanAddress = evvmAddress.trim().toLowerCase();
    
    if (!/^0x[a-f0-9]{40}$/.test(cleanAddress)) {
        throw new Error('Invalid EVVM address format');
    }
    
    return {
        chainId: numericChainId,
        evvmAddress: cleanAddress
    };
};
```

## Integration Examples

### API Endpoint
```javascript
// Express.js endpoint for registration checking
app.get('/api/registry/check/:chainId/:address', async (req, res) => {
    try {
        const { chainId, address } = req.params;
        
        // Sanitize inputs
        const sanitized = sanitizeAddressCheck(parseInt(chainId), address);
        
        // Check registration
        const result = await safeCheckAddressRegistration(
            sanitized.chainId, 
            sanitized.evvmAddress
        );
        
        if (result.success) {
            res.json({
                success: true,
                data: {
                    chainId: sanitized.chainId,
                    evvmAddress: sanitized.evvmAddress,
                    isRegistered: result.isRegistered,
                    timestamp: new Date().toISOString()
                }
            });
        } else {
            res.status(400).json({
                success: false,
                error: result.error
            });
        }
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Failed to check registration status',
            details: error.message
        });
    }
});
```

## Use Cases

### Registration Validation
- **Duplicate Prevention**: Prevent multiple registrations of the same address
- **Pre-Registration Checks**: Validate before attempting registration
- **Form Validation**: Real-time validation in registration interfaces

### Address Discovery
- **Registration Scanning**: Find where an address is already registered
- **Availability Checking**: Identify available chains for new registrations
- **Cross-Chain Analysis**: Analyze address registration patterns

### Integration Services
- **API Validation**: Validate registration requests in backend services
- **Multi-Chain dApps**: Check registration status across networks
- **Registry Management**: Monitor and manage address registrations

## Related Functions

### Validation Functions
- [`isChainIdRegistered()`](./06-isChainIdRegistered.md) - Check chain support
- [`getEvvmIdMetadata()`](./01-getEvvmIdMetadata.md) - Get registration details

### Registration Functions
- [`registerEvvm()`](../02-RegistrationFunctions/01-registerEvvm.md) - Uses this for duplicate prevention
- [`sudoRegisterEvvm()`](../02-RegistrationFunctions/02-sudoRegisterEvvm.md) - Also uses this for validation

This function provides essential duplicate prevention and registration verification capabilities, ensuring the integrity of the Registry EVVM system while enabling efficient address management across multiple blockchain networks.

---

## getUpgradeProposalData


**Function Type**: `view`  
**Function Signature**: `getUpgradeProposalData() returns (AddressTypeProposal memory)`

Retrieves complete upgrade proposal governance data including current implementation, proposed implementation, and acceptance timestamp information.

## Return Value

| Type                   | Description                                                                   |
| ---------------------- | ----------------------------------------------------------------------------- |
| `AddressTypeProposal`  | Struct containing current implementation, proposed implementation, and timing data |

### AddressTypeProposal Structure

```solidity
struct AddressTypeProposal {
    address current;        // Currently active implementation address (unused for upgrades)
    address proposal;       // Proposed new implementation address (0x0 if none)
    uint256 timeToAccept;   // Timestamp when proposal can be accepted (0 if none)
}
```

## Description

This function provides comprehensive information about pending contract upgrade proposals, including the proposed implementation address and acceptance timeline. It's essential for governance interfaces and monitoring systems that need to track contract upgrade processes.

---

## getVersion


**Function Type**: `pure`  
**Function Signature**: `getVersion() returns (uint256)`

Returns the current version number of the Registry EVVM contract for compatibility checks and version tracking.

## Return Value

| Type      | Description                              |
| --------- | ---------------------------------------- |
| `uint256` | Current version number of the contract   |

## Description

This function provides a simple way to query the contract version, enabling applications to verify compatibility, track upgrades, and implement version-specific logic. The version number is hardcoded in the contract and increments with each upgrade.

---

## EVVM TypeScript Library Introduction


The `@evvm/viem-signature-library` is the official TypeScript library for building EVVM applications. It provides type-safe signature construction, contract interaction, and transaction management for all EVVM services.

## Core Features

- **Payment Operations**: Individual and multi-recipient transactions
- **Identity Management**: Username registration, offers, and metadata
- **Staking Functions**: Golden, public, and presale staking
- **Generic Builders**: Custom service signature construction
- **Full Type Safety**: Complete TypeScript integration with viem/wagmi

## Universal Signature Format

All EVVM operations follow the standardized message format:
```
evvmID,functionName,param1,param2,...,paramN
```

The library automatically constructs these messages and handles EIP-191 signing, eliminating manual formatting.

## Architecture Overview

The library consists of four main modules:

### Signature Builders
- `EVVMSignatureBuilder` - Payment operations
- `NameServiceSignatureBuilder` - Identity management  
- `StakingSignatureBuilder` - Staking operations
- `GenericSignatureBuilder` - Custom services

### Additional Modules
- **Types**: TypeScript definitions for all operations
- **Utils**: Message construction and hashing utilities  
- **ABI**: Contract interfaces for direct interaction

## Quick Start Examples

### Payment Transaction
```typescript

const builder = new EVVMSignatureBuilder(walletClient, account);
const signature = await builder.signPay(
  evvmID, recipient, token, amount, fee, nonce, priority, executor
);
```

### Username Registration
```typescript

const nameBuilder = new NameServiceSignatureBuilder(walletClient, account);
const { paySignature, actionSignature } = await nameBuilder.signRegistrationUsername(
  evvmID, nameServiceAddress, username, clowNumber, nonce,
  reward, priorityFee, evvmNonce, priorityFlag
);
```

### Staking Operation
```typescript

const stakingBuilder = new StakingSignatureBuilder(walletClient, account);
const { paySignature, actionSignature } = await stakingBuilder.signPublicStaking(
  evvmID, stakingAddress, true, amount, nonce, price, fee, evvmNonce, priority
);
```

## Installation

```bash
npm install @evvm/viem-signature-library
```

## Key Benefits

- **Automatic Message Construction**: No manual formatting required
- **Dual Signature Support**: Handles complex service + payment patterns
- **Type Safety**: Full TypeScript integration prevents runtime errors
- **Modular Design**: Import only needed functionality
- **Battle Tested**: Production-ready with comprehensive validation

The library implements all EVVM patterns documented in the Signature Structures section, providing a seamless bridge between documentation and working code.

---

## ABI Interfaces


The EVVM TypeScript library includes pre-compiled Application Binary Interfaces (ABIs) for all EVVM contracts. These ABIs enable type-safe contract interactions using wagmi and viem.

## Available ABIs

The library exports four main contract ABIs:

### EVVM Core Contract
```typescript

```
Contains functions for:
- Payment operations and transactions
- Multi-recipient payment handling
- Administrative and governance functions
- System getters and state queries

### NameService Contract
```typescript

```
Contains functions for:
- Username registration and renewal
- Offer marketplace operations
- Custom metadata management
- Identity resolution functions

### Staking Contract
```typescript

```
Contains functions for:
- Golden staking operations
- Public and presale staking
- Service staking functions
- Reward and estimation functions

### Estimator Contract
```typescript

```
Contains functions for:
- Reward calculations
- Economic parameter estimation
- System metrics and analytics

## Usage with wagmi

### Basic Contract Interaction

The most common pattern is using ABIs with wagmi's `writeContract` function:

```typescript

const executePay = async (
  inputData: PayInputData,
  evvmAddress: `0x${string}`,
  config: Config
) => {
  return writeContract(config, {
    abi: EvvmABI,
    address: evvmAddress,
    functionName: 'pay',
    args: [
      inputData.from,
      inputData.to_address,
      inputData.to_identity,
      inputData.token,
      inputData.amount,
      inputData.priorityFee,
      inputData.nonce,
      inputData.priority,
      inputData.executor,
      inputData.signature,
    ],
  });
};
```

### Reading Contract Data

For reading contract state, use `readContract`:

```typescript

const getUserNonce = async (
  userAddress: `0x${string}`,
  evvmAddress: `0x${string}`,
  config: Config
) => {
  return readContract(config, {
    abi: EvvmABI,
    address: evvmAddress,
    functionName: 'getNonce',
    args: [userAddress],
  });
};
```

## Complete Transaction Flow

Here's a complete example showing how to use ABIs with signature builders:

```typescript

  EVVMSignatureBuilder,
  EvvmABI,
  PayInputData 
} from '@evvm/viem-signature-library';

const executePayment = async (
  walletClient: WalletClient,
  account: Account,
  config: Config,
  evvmAddress: `0x${string}`,
  recipient: string,
  amount: bigint
) => {
  // 1. Create signature builder
  const signatureBuilder = new EVVMSignatureBuilder(walletClient, account);
  
  // 2. Get current nonce
  const nonce = await readContract(config, {
    abi: EvvmABI,
    address: evvmAddress,
    functionName: 'getNonce',
    args: [account.address],
  });

  // 3. Generate signature
  const signature = await signatureBuilder.signPay(
    1n, // evvmID
    recipient,
    '0x0000000000000000000000000000000000000001' as `0x${string}`, // Native token
    amount,
    0n, // No priority fee
    nonce,
    false, // Not priority
    account.address
  );

  // 4. Prepare input data
  const payInputData: PayInputData = {
    from: account.address,
    to_address: recipient as `0x${string}`,
    to_identity: '',
    token: '0x0000000000000000000000000000000000000001' as `0x${string}`,
    amount,
    priorityFee: 0n,
    nonce,
    priority: false,
    executor: account.address,
    signature,
  };

  // 5. Execute transaction
  return writeContract(config, {
    abi: EvvmABI,
    address: evvmAddress,
    functionName: 'pay',
    args: [
      payInputData.from,
      payInputData.to_address,
      payInputData.to_identity,
      payInputData.token,
      payInputData.amount,
      payInputData.priorityFee,
      payInputData.nonce,
      payInputData.priority,
      payInputData.executor,
      payInputData.signature,
    ],
  });
};
```

## NameService ABI Usage

Example of using NameService ABI for username registration:

```typescript

const registerUsername = async (
  walletClient: WalletClient,
  account: Account,
  config: Config,
  nameServiceAddress: `0x${string}`,
  username: string,
  clowNumber: bigint
) => {
  const nameBuilder = new NameServiceSignatureBuilder(walletClient, account);
  
  const nonce = await readContract(config, {
    abi: NameServiceABI,
    address: nameServiceAddress,
    functionName: 'getNonce',
    args: [account.address],
  });

  const { paySignature, actionSignature } = await nameBuilder.signRegistrationUsername(
    1n, nameServiceAddress, username, clowNumber, nonce,
    100000000000000000n, 0n, nonce + 1n, false
  );

  return writeContract(config, {
    abi: NameServiceABI,
    address: nameServiceAddress,
    functionName: 'registrationUsername',
    args: [account.address, username, clowNumber, nonce, actionSignature, 0n, nonce + 1n, false, paySignature || '0x'],
  });
};
```

## Staking ABI Usage

Example of using Staking ABI for public staking:

```typescript

const executePublicStaking = async (
  walletClient: WalletClient,
  account: Account,
  config: Config,
  stakingAddress: `0x${string}`,
  stakingAmount: bigint
) => {
  const stakingBuilder = new StakingSignatureBuilder(walletClient, account);
  
  const nonce = await readContract(config, {
    abi: StakingABI,
    address: stakingAddress,
    functionName: 'getNonce',
    args: [account.address],
  });

  const { paySignature, actionSignature } = await stakingBuilder.signPublicStaking(
    1n, stakingAddress, true, stakingAmount, nonce, stakingAmount, 0n, nonce + 1n, false
  );

  return writeContract(config, {
    abi: StakingABI,
    address: stakingAddress,
    functionName: 'publicStaking',
    args: [account.address, true, stakingAmount, nonce, actionSignature, 0n, nonce + 1n, false, paySignature || '0x'],
  });
};
```

## Error Handling

When working with ABIs and contract calls, proper error handling is essential:

```typescript
const safeExecutePay = async (
  inputData: PayInputData,
  evvmAddress: `0x${string}`,
  config: Config
) => {
  try {
    const txHash = await writeContract(config, {
      abi: EvvmABI,
      address: evvmAddress,
      functionName: 'pay',
      args: [/* all required arguments */],
    });
    
    return txHash;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('insufficient funds')) {
        throw new Error('Insufficient balance for transaction');
      } else if (error.message.includes('nonce')) {
        throw new Error('Invalid nonce - transaction may be duplicate');
      }
    }
    throw error;
  }
};
```

## ABI Export Patterns

The library provides multiple ways to import ABIs:

```typescript
// Individual imports

// Default export

const evvmContract = { abi: ABIs.Evvm, address: evvmAddress };
```

## TypeScript Integration

The ABIs are fully typed, providing compile-time validation:

```typescript
const result = await writeContract(config, {
  abi: EvvmABI,
  address: evvmAddress,
  functionName: 'pay', // ✅ Valid function name
  args: [/* properly typed arguments */],
});
```

---

## Signature Builders


Signature builders are specialized classes that construct and sign EVVM messages for different services. Each builder handles the specific requirements and patterns for its respective service.

## Available Signature Builders

### EVVMSignatureBuilder
Handles core EVVM payment operations:
- `signPay` - Individual payments to addresses or usernames
- `signDispersePay` - Multiple recipient payments in single transaction

### NameServiceSignatureBuilder
Handles identity management operations:
- `signPreRegistrationUsername` - Pre-register username with hash
- `signRegistrationUsername` - Register username with payment
- `signMakeOffer` - Make offer for existing username
- `signWithdrawOffer` - Withdraw previously made offer
- `signAcceptOffer` - Accept offer for your username
- `signRenewUsername` - Renew username registration
- `signAddCustomMetadata` - Add custom metadata to identity
- `signRemoveCustomMetadata` - Remove specific metadata entry
- `signFlushCustomMetadata` - Remove all metadata for identity
- `signFlushUsername` - Remove username completely

### StakingSignatureBuilder
Handles staking operations:
- `signGoldenStaking` - Golden staking (single signature, 5083 EVVM per stake)
- `signPresaleStaking` - Presale staking (dual signature with payment)
- `signPublicStaking` - Public staking (dual signature, flexible amounts)

### GenericSignatureBuilder
Handles custom service operations:
- Generic message construction for any EVVM function
- Future-proofing for new services

## Basic Usage Examples

### 1. Simple Payment (EVVMSignatureBuilder)

Basic payment signature for sending tokens or native currency:

```typescript

const createPaymentSignature = async () => {
  const walletData = await getAccountWithRetry(config);
  const walletClient = await getWalletClient(config);
  const signatureBuilder = new EVVMSignatureBuilder(walletClient, walletData);

  const signature = await signatureBuilder.signPay(
    BigInt("1"), // evvmID
    "alice.evvm", // recipient (address or username)
    "0x0000000000000000000000000000000000000000" as `0x${string}`, // Native token
    BigInt("1000000000000000000"), // 1 ETH
    BigInt("50000000000000000"), // Priority fee
    BigInt("123"), // Nonce
    false, // Priority flag
    "0x742d35Cc6634C0532925a3b8D138068fd4C1B7a1" as `0x${string}` // Executor
  );

  return signature;
};
```

### 2. Service + Payment (StakingSignatureBuilder)

Dual signature example - service function that requires payment:

```typescript

const createPublicStakingSignature = async () => {
  const walletData = await getAccountWithRetry(config);
  const walletClient = await getWalletClient(config);
  const stakingBuilder = new StakingSignatureBuilder(walletClient, walletData);

  // Generate dual signatures (service + payment)
  const { paySignature, actionSignature } = await stakingBuilder.signPublicStaking(
    BigInt("1"), // evvmID
    "0xStakingAddress" as `0x${string}`,
    true, // isStaking
    BigInt("5"), // amount of MATE tokens
    BigInt("100"), // service nonce
    BigInt("25415000000000000000000"), // total price (5 * 5083 EVVM)
    BigInt("10000000000000000"), // priority fee
    BigInt("101"), // payment nonce
    false // priority flag
  );

  return { paySignature, actionSignature };
};
```

## GenericSignatureBuilder Usage

### Custom Service Functions

For new or custom EVVM services:

```typescript

const createCustomServiceSignature = async () => {
  const walletData = await getAccountWithRetry(config);
  const walletClient = await getWalletClient(config);
  const genericBuilder = new GenericSignatureBuilder(walletClient, walletData);

  // Example: Coffee shop service
  const serviceData = {
    coffeeType: "Fisher Espresso",
    quantity: BigInt(2),
    totalPrice: BigInt("2000000000000000"), // 0.002 ETH
    nonce: BigInt("42")
  };

  // Construct message parameters
  const messageParams = [
    serviceData.coffeeType,
    serviceData.quantity.toString(),
    serviceData.totalPrice.toString(),
    serviceData.nonce.toString()
  ].join(",");

  // Generate signature
  const signature = await genericBuilder.signGenericMessage(
    BigInt("1"), // evvmID
    "orderCoffee", // Function name
    messageParams // Parameters
  );

  // For custom services, you also need a payment signature
  const evvmBuilder = new EVVMSignatureBuilder(walletClient, walletData);
  const paymentSignature = await evvmBuilder.signPay(
    BigInt("1"),
    "0xCafeServiceAddress" as `0x${string}`,
    "0x0000000000000000000000000000000000000000" as `0x${string}`,
    serviceData.totalPrice,
    serviceData.totalPrice / BigInt(1000), // Priority fee (0.1% of price)
    BigInt("43"), // Different nonce for payment
    false,
    "0xCafeServiceAddress" as `0x${string}`
  );

  return {
    serviceSignature: signature,
    paymentSignature: paymentSignature,
    serviceData
  };
};
```

## Common Patterns and Best Practices

### Nonce Management

```typescript
// Sync nonces (priority: false)
const getSyncNonce = async (userAddress: string) => {
  return readContract(config, {
    abi: EvvmABI,
    address: evvmAddress,
    functionName: 'getNextCurrentSyncNonce',
    args: [userAddress],
  });
};

// Async nonces (priority: true) - use random numbers
const generateAsyncNonce = () => {
  return BigInt(Math.floor(Math.random() * 1000000));
};
```

### Error Handling

```typescript
const safeSignatureCreation = async () => {
  try {
    const signature = await signatureBuilder.signPay(/* parameters */);
    return signature;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('User rejected')) {
        throw new Error('User cancelled signature request');
      } else if (error.message.includes('insufficient funds')) {
        throw new Error('Insufficient balance for gas fees');
      }
    }
    throw new Error('Failed to create signature');
  }
};
```

### Type Safety

```typescript
// Use proper typing for all inputs
interface PaymentFormData {
  evvmID: string;
  to: string;
  tokenAddress: `0x${string}`;
  amount: string;
  priorityFee: string;
  nonce: string;
  priorityFlag: boolean;
  executor: `0x${string}`;
}

// Validate addresses before signing
const isValidAddress = (address: string): address is `0x${string}` => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};
```

### Address vs Username Handling

```typescript
const handleRecipient = (input: string) => {
  if (input.startsWith('0x')) {
    // Address payment
    return {
      to_address: input as `0x${string}`,
      to_identity: ""
    };
  } else {
    // Username payment
    return {
      to_address: "0x0000000000000000000000000000000000000000" as `0x${string}`,
      to_identity: input
    };
  }
};
```

## Integration with React Components

### Form State Management

```typescript
const PaymentForm = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    evvmID: "1",
    to: "",
    tokenAddress: "0x0000000000000000000000000000000000000000",
    amount: "",
    priorityFee: "",
    nonce: "",
    priorityFlag: false,
    executor: "0x0000000000000000000000000000000000000000"
  });

  const [payInputData, setPayInputData] = useState<PayInputData | null>(null);

  const handleSignature = async () => {
    const result = await createPaymentSignature();
    setPayInputData(result);
  };

  return (
    <form onSubmit={handleSignature}>
      {/* Form inputs */}
      <button type="submit">Create Signature</button>
      {payInputData && <PaymentReceipt data={payInputData} />}
    </form>
  );
};
```

---

## Type Definitions


The EVVM TypeScript library provides comprehensive type definitions for all contract interactions, ensuring type safety and better development experience. All types are exported from the main package and can be imported individually.

## Core Types

### Base Signature Types

```typescript

```

**SignatureResult**: Used for single signature operations
```typescript
interface SignatureResult {
  signature: `0x${string}`;
}
```

**DualSignatureResult**: Used for operations requiring both payment and action signatures
```typescript
interface DualSignatureResult {
  paySignature?: `0x${string}`;
  actionSignature: `0x${string}`;
}
```

### Re-exported Viem/Wagmi Types

The library re-exports common types from viem and wagmi for convenience:

```typescript

```

## EVVM Payment Types

### PayInputData

Type definition for individual payment transactions:

```typescript

type PayInputData = {
  from: `0x${string}`;           // Sender address
  to_address: `0x${string}`;     // Recipient address
  to_identity: string;           // Recipient username (if applicable)
  token: `0x${string}`;          // Token contract address
  amount: bigint;                // Payment amount
  priorityFee: bigint;           // Priority fee for faster processing
  nonce: bigint;                 // Transaction nonce
  priority: boolean;             // Priority flag
  executor: string;              // Transaction executor
  signature: string;             // Transaction signature
};
```

### DispersePayInputData

Type definition for multi-recipient payments:

```typescript

type DispersePayMetadata = {
  amount: bigint;                // Amount for this recipient
  to_address: `0x${string}`;     // Recipient address
  to_identity: string;           // Recipient username (if applicable)
};

type DispersePayInputData = {
  from: `0x${string}`;           // Sender address
  toData: DispersePayMetadata[]; // Array of recipients and amounts
  token: `0x${string}`;          // Token contract address
  amount: bigint;                // Total payment amount
  priorityFee: bigint;           // Priority fee
  priority: boolean;             // Priority flag
  nonce: bigint;                 // Transaction nonce
  executor: string;              // Transaction executor
  signature: string;             // Transaction signature
};
```

## NameService Types

All NameService operations use dual signature patterns with both service and payment signatures.

### Username Registration Types

```typescript

  PreRegistrationUsernameInputData,
  RegistrationUsernameInputData 
} from '@evvm/viem-signature-library';
```

**PreRegistrationUsernameInputData**: For username pre-registration
```typescript
type PreRegistrationUsernameInputData = {
  user: `0x${string}`;
  hashPreRegisteredUsername: string;
  nonce: bigint;
  signature: string;
  priorityFee_EVVM: bigint;
  nonce_EVVM: bigint;
  priorityFlag_EVVM: boolean;
  signature_EVVM: string;
};
```

**RegistrationUsernameInputData**: For final username registration
```typescript
type RegistrationUsernameInputData = {
  user: `0x${string}`;
  username: string;
  clowNumber: bigint;
  nonce: bigint;
  signature: string;
  priorityFee_EVVM: bigint;
  nonce_EVVM: bigint;
  priorityFlag_EVVM: boolean;
  signature_EVVM: string;
};
```

### Marketplace Types

```typescript

  MakeOfferInputData,
  WithdrawOfferInputData,
  AcceptOfferInputData,
  RenewUsernameInputData
} from '@evvm/viem-signature-library';
```

**MakeOfferInputData**: For creating username offers
```typescript
type MakeOfferInputData = {
  user: `0x${string}`;
  username: string;
  expireDate: bigint;
  amount: bigint;
  nonce: bigint;
  signature: string;
  priorityFee_EVVM: bigint;
  nonce_EVVM: bigint;
  priorityFlag_EVVM: boolean;
  signature_EVVM: string;
};
```

### Metadata Management Types

```typescript

  AddCustomMetadataInputData,
  RemoveCustomMetadataInputData,
  FlushCustomMetadataInputData,
  FlushUsernameInputData
} from '@evvm/viem-signature-library';
```

**AddCustomMetadataInputData**: For adding metadata to usernames
```typescript
type AddCustomMetadataInputData = {
  user: `0x${string}`;
  identity: string;
  value: string;
  nonce: bigint;
  signature: string;
  priorityFee_EVVM: bigint;
  nonce_EVVM: bigint;
  priorityFlag_EVVM: boolean;
  signature_EVVM: string;
};
```

## Staking Types

### Basic Staking Types

```typescript

  GoldenStakingInputData,
  PresaleStakingInputData,
  PublicStakingInputData,
  PublicServiceStakingInputData
} from '@evvm/viem-signature-library';
```

**GoldenStakingInputData**: For golden staking (single signature)
```typescript
type GoldenStakingInputData = {
  isStaking: boolean;
  amountOfStaking: bigint;
  signature_EVVM: string;
};
```

**PublicStakingInputData**: For public staking (dual signature)
```typescript
type PublicStakingInputData = {
  user: `0x${string}`;
  isStaking: boolean;
  amountOfStaking: bigint;
  nonce: bigint;
  signature: string;
  priorityFee_EVVM: bigint;
  nonce_EVVM: bigint;
  priorityFlag_EVVM: boolean;
  signature_EVVM: string;
};
```

**PublicServiceStakingInputData**: For service-specific staking
```typescript
type PublicServiceStakingInputData = {
  user: `0x${string}`;
  service: `0x${string}`;        // Service contract address
  isStaking: boolean;
  amountOfStaking: bigint;
  nonce: bigint;
  signature: string;
  priorityFee_EVVM: bigint;
  nonce_EVVM: bigint;
  priorityFlag_EVVM: boolean;
  signature_EVVM: string;
};
```

## ABI Types

### Contract ABI Structure

```typescript

  ABIFunction,
  ABIParameter,
  ContractABI,
  EstimatorABIType,
  EvvmABIType,
  NameServiceABIType,
  StakingABIType
} from '@evvm/viem-signature-library';
```

**ABIFunction**: Defines contract function structure
```typescript
interface ABIFunction {
  type: 'function' | 'constructor' | 'event' | 'error';
  name?: string;
  inputs: ABIParameter[];
  outputs?: ABIParameter[];
  stateMutability?: 'pure' | 'view' | 'nonpayable' | 'payable';
}
```

**ABIParameter**: Defines function parameter structure
```typescript
interface ABIParameter {
  name: string;
  type: string;
  internalType?: string;
  components?: ABIParameter[];
}
```

## Usage Patterns

### Type-Safe Contract Calls

```typescript

  PayInputData, 
  EvvmABI,
  EVVMSignatureBuilder 
} from '@evvm/viem-signature-library';

const executeTypedPayment = async (
  inputData: PayInputData,  // Type-safe input
  config: Config
) => {
  return writeContract(config, {
    abi: EvvmABI,              // Type-safe ABI
    address: evvmAddress,
    functionName: 'pay',       // Type-checked function name
    args: [                    // Type-checked arguments
      inputData.from,
      inputData.to_address,
      inputData.to_identity,
      inputData.token,
      inputData.amount,
      inputData.priorityFee,
      inputData.nonce,
      inputData.priority,
      inputData.executor,
      inputData.signature,
    ],
  });
};
```

### Dual Signature Pattern

```typescript

  StakingSignatureBuilder,
  PublicStakingInputData,
  DualSignatureResult 
} from '@evvm/viem-signature-library';

const createStakingInput = async (): Promise<PublicStakingInputData> => {
  // Generate dual signatures
  const signatures: DualSignatureResult = await stakingBuilder.signPublicStaking(
    /* parameters */
  );

  // Use typed input data structure
  const inputData: PublicStakingInputData = {
    user: account.address,
    isStaking: true,
    amountOfStaking: BigInt("5"),
    nonce: BigInt("100"),
    signature: signatures.actionSignature,
    priorityFee_EVVM: BigInt("0"),
    nonce_EVVM: BigInt("101"),
    priorityFlag_EVVM: false,
    signature_EVVM: signatures.paySignature || '0x',
  };

  return inputData;
};
```

### Custom Type Guards

```typescript
const isValidPayInputData = (data: any): data is PayInputData => {
  return (
    typeof data === 'object' &&
    typeof data.from === 'string' &&
    typeof data.to_address === 'string' &&
    typeof data.amount === 'bigint' &&
    typeof data.signature === 'string'
  );
};
```

## Type Import Patterns

### Individual Imports
```typescript

```

### Grouped Imports
```typescript

  // Core types
  SignatureResult,
  DualSignatureResult,
  
  // Payment types
  PayInputData,
  DispersePayInputData,
  
  // Staking types
  PublicStakingInputData,
  GoldenStakingInputData,
  
  // NameService types
  RegistrationUsernameInputData,
  MakeOfferInputData
} from '@evvm/viem-signature-library';
```

All types are designed to provide maximum type safety and integrate seamlessly with TypeScript's type checking system, ensuring robust and maintainable EVVM applications.

---

## Utility Functions


The EVVM TypeScript library provides utility functions for message construction and data hashing. These utilities are essential for creating properly formatted signatures and ensuring data integrity across the EVVM ecosystem.

## Message Construction

### Overview

Message construction utilities generate formatted strings for EVVM signatures following the universal format: `evvmID,functionName,param1,param2,...,paramN`. These functions ensure consistent message formatting across all contract interactions.

### Import Pattern

```typescript

  buildMessageSignedForPay,
  buildMessageSignedForDispersePay,
  buildMessageSignedForPublicStaking,
  buildMessageSignedForRegistrationUsername,
  basicMessageBuilder
} from '@evvm/viem-signature-library';
```

### EVVM Payment Messages

#### buildMessageSignedForPay

Constructs messages for individual payment transactions:

```typescript
const buildMessageSignedForPay = (
  evvmID: bigint,
  to: `0x${string}` | string,
  tokenAddress: `0x${string}`,
  amount: bigint,
  priorityFee: bigint,
  nonce: bigint,
  priorityFlag: boolean,
  executor: `0x${string}`
): string
```

**Parameters:**
- `evvmID`: Network identifier
- `to`: Recipient address or username
- `tokenAddress`: Token contract address
- `amount`: Payment amount in wei
- `priorityFee`: Priority fee for faster processing
- `nonce`: Transaction nonce
- `priorityFlag`: Priority transaction flag
- `executor`: Transaction executor address

**Example:**
```typescript
const payMessage = buildMessageSignedForPay(
  1n,                                                           // EVVM ID
  "0x742d35Cc6634C0532925a3b8D00B6d0e98A8887e",               // Recipient
  "0x0000000000000000000000000000000000000001",               // Native token
  BigInt("1000000000000000000"),                               // 1 ETH
  BigInt("10000000000000000"),                                 // 0.01 ETH priority
  BigInt("100"),                                               // Nonce
  false,                                                       // Not priority
  "0x8ba1f109551bD432803012645Hac136c22C177ec183"             // Executor
);
// Returns: "1,pay,0x742d35cc6634c0532925a3b8d00b6d0e98a8887e,0x0000000000000000000000000000000000000001,1000000000000000000,10000000000000000,100,false,0x8ba1f109551bd432803012645hac136c22c177ec183"
```

#### buildMessageSignedForDispersePay

Constructs messages for multi-recipient payments:

```typescript
const buildMessageSignedForDispersePay = (
  evvmID: bigint,
  hashList: string,
  tokenAddress: `0x${string}`,
  amount: bigint,
  priorityFee: bigint,
  nonce: bigint,
  priorityFlag: boolean,
  executor: `0x${string}`
): string
```

**Parameters:**
- `hashList`: Hashed recipient data (without 0x prefix)
- Other parameters same as `buildMessageSignedForPay`

**Example:**
```typescript
const disperseMessage = buildMessageSignedForDispersePay(
  1n,
  "a1b2c3d4e5f6789...", // Hashed recipient list
  "0x0000000000000000000000000000000000000001",
  BigInt("5000000000000000000"), // Total 5 ETH
  BigInt("50000000000000000"),   // Priority fee
  BigInt("101"),
  false,
  "0x8ba1f109551bD432803012645Hac136c22C177ec183"
);
```

### Staking Messages

#### buildMessageSignedForPublicStaking

```typescript
const buildMessageSignedForPublicStaking = (
  evvmID: bigint,
  isStaking: boolean,
  amountOfSMate: bigint,
  nonce: bigint
): string
```

**Example:**
```typescript
const stakingMessage = buildMessageSignedForPublicStaking(
  1n,      // EVVM ID
  true,    // Staking (not unstaking)
  5n,      // 5 MATE tokens
  100n     // Nonce
);
// Returns: "1,publicStaking,true,5,100"
```

#### buildMessageSignedForPresaleStaking

```typescript
const buildMessageSignedForPresaleStaking = (
  evvmID: bigint,
  isStaking: boolean,
  amountOfSMate: bigint,
  nonce: bigint
): string
```

#### buildMessageSignedForPublicServiceStake

```typescript
const buildMessageSignedForPublicServiceStake = (
  evvmID: bigint,
  serviceAddress: string,
  isStaking: boolean,
  amountOfSMate: bigint,
  nonce: bigint
): string
```

### NameService Messages

#### Username Registration

```typescript
const buildMessageSignedForRegistrationUsername = (
  evvmID: bigint,
  username: string,
  clowNumber: bigint,
  nonceNameService: bigint
): string

const buildMessageSignedForPreRegistrationUsername = (
  evvmID: bigint,
  hashUsername: string,
  nonceNameService: bigint
): string
```

**Example:**
```typescript
const registrationMessage = buildMessageSignedForRegistrationUsername(
  1n,           // EVVM ID
  "myusername", // Username
  12345n,       // Clown number
  100n          // Nonce
);
// Returns: "1,registrationUsername,myusername,12345,100"
```

#### Marketplace Operations

```typescript
const buildMessageSignedForMakeOffer = (
  evvmID: bigint,
  username: string,
  dateExpire: bigint,
  amount: bigint,
  nonceNameService: bigint
): string

const buildMessageSignedForWithdrawOffer = (
  evvmID: bigint,
  username: string,
  offerId: bigint,
  mateNameServiceNonce: bigint
): string

const buildMessageSignedForAcceptOffer = (
  evvmID: bigint,
  username: string,
  offerId: bigint,
  mateNameServiceNonce: bigint
): string
```

#### Metadata Management

```typescript
const buildMessageSignedForAddCustomMetadata = (
  evvmID: bigint,
  identity: string,
  value: string,
  mateNameServiceNonce: bigint
): string

const buildMessageSignedForRemoveCustomMetadata = (
  evvmID: bigint,
  identity: string,
  key: bigint,
  nonceNameService: bigint
): string

const buildMessageSignedForFlushCustomMetadata = (
  evvmID: bigint,
  identity: string,
  nonceNameService: bigint
): string

const buildMessageSignedForFlushUsername = (
  evvmID: bigint,
  username: string,
  nonceNameService: bigint
): string
```

### Basic Message Builder

The foundational function used by all message builders:

```typescript
const basicMessageBuilder = (
  evvmID: string,
  functionName: string,
  inputs: string
): string
```

**Example:**
```typescript
const customMessage = basicMessageBuilder(
  "1",
  "customFunction",
  "param1,param2,param3"
);
// Returns: "1,customFunction,param1,param2,param3"
```

## Hash Utilities

### Overview

Hash utilities provide cryptographic functions for data integrity and privacy in the EVVM ecosystem. These functions use industry-standard hashing algorithms.

### Import Pattern

```typescript

  hashDispersePaymentUsersToPay,
  hashPreRegisteredUsername
} from '@evvm/viem-signature-library';
```

### hashDispersePaymentUsersToPay

Hashes payment data for multiple recipients in disperse payment operations:

```typescript
const hashDispersePaymentUsersToPay = (
  toData: DispersePayMetadata[]
): `0x${string}`
```

**Parameters:**
- `toData`: Array of payment metadata objects

**Example:**
```typescript

const paymentData: DispersePayMetadata[] = [
  {
    amount: BigInt("1000000000000000000"), // 1 ETH
    to_address: "0x742d35Cc6634C0532925a3b8D00B6d0e98A8887e" as `0x${string}`,
    to_identity: "alice"
  },
  {
    amount: BigInt("2000000000000000000"), // 2 ETH
    to_address: "0x8ba1f109551bD432803012645Hac136c22C177ec183" as `0x${string}`,
    to_identity: "bob"
  }
];

const hashedData = hashDispersePaymentUsersToPay(paymentData);
// Returns: "0x1a2b3c4d5e6f789..."
```

### hashPreRegisteredUsername

Creates a hash for username pre-registration:

```typescript
const hashPreRegisteredUsername = (
  username: string,
  clowNumber: bigint
): `0x${string}`
```

**Parameters:**
- `username`: Username to register
- `clowNumber`: Unique clown number for the username

**Example:**
```typescript
const usernameHash = hashPreRegisteredUsername(
  "myusername",
  12345n
);
// Returns: "0xa1b2c3d4e5f6789..."

// Use in pre-registration message
const preRegMessage = buildMessageSignedForPreRegistrationUsername(
  1n,
  usernameHash.slice(2), // Remove 0x prefix
  100n
);
```

## Usage Patterns

### Complete Payment Flow

```typescript

  buildMessageSignedForPay,
  EVVMSignatureBuilder 
} from '@evvm/viem-signature-library';

const executePaymentWithUtils = async (
  walletClient: WalletClient,
  account: Account,
  recipient: string,
  amount: bigint
) => {
  // 1. Build message using utility
  const message = buildMessageSignedForPay(
    1n,                                    // EVVM ID
    recipient,                            // Recipient
    "0x0000000000000000000000000000000000000001" as `0x${string}`,
    amount,                               // Amount
    0n,                                   // No priority fee
    100n,                                 // Nonce
    false,                                // Not priority
    account.address                       // Executor
  );

  // 2. Sign message using signature builder
  const signatureBuilder = new EVVMSignatureBuilder(walletClient, account);
  const signature = await signatureBuilder.signMessage(message);

  return { message, signature };
};
```

### Disperse Payment with Hashing

```typescript

  hashDispersePaymentUsersToPay,
  buildMessageSignedForDispersePay,
  DispersePayMetadata 
} from '@evvm/viem-signature-library';

const createDispersePayment = async (recipients: DispersePayMetadata[]) => {
  // 1. Hash recipient data
  const hashedRecipients = hashDispersePaymentUsersToPay(recipients);
  
  // 2. Calculate total amount
  const totalAmount = recipients.reduce(
    (sum, recipient) => sum + recipient.amount, 
    0n
  );
  
  // 3. Build message
  const message = buildMessageSignedForDispersePay(
    1n,                           // EVVM ID
    hashedRecipients.slice(2),    // Hash without 0x
    "0x0000000000000000000000000000000000000001" as `0x${string}`,
    totalAmount,                  // Total amount
    0n,                          // Priority fee
    101n,                        // Nonce
    false,                       // Priority flag
    account.address              // Executor
  );

  return { message, hashedRecipients };
};
```

### Username Registration Flow

```typescript

  hashPreRegisteredUsername,
  buildMessageSignedForPreRegistrationUsername,
  buildMessageSignedForRegistrationUsername 
} from '@evvm/viem-signature-library';

const registerUsernameComplete = async (username: string, clowNumber: bigint) => {
  // 1. Pre-registration
  const usernameHash = hashPreRegisteredUsername(username, clowNumber);
  const preRegMessage = buildMessageSignedForPreRegistrationUsername(
    1n,
    usernameHash.slice(2), // Remove 0x prefix
    100n
  );

  // 2. Registration
  const regMessage = buildMessageSignedForRegistrationUsername(
    1n,
    username,
    clowNumber,
    101n
  );

  return { preRegMessage, regMessage, usernameHash };
};
```

## Error Handling

### Message Construction Validation

```typescript
const safeMessageConstruction = (to: string, amount: bigint) => {
  try {
    if (!to || typeof to !== 'string') {
      throw new Error('Invalid recipient address');
    }
    
    if (amount <= 0n) {
      throw new Error('Amount must be greater than zero');
    }

    return buildMessageSignedForPay(
      1n, to, tokenAddress, amount, 0n, nonce, false, executor
    );
  } catch (error) {
    console.error('Message construction failed:', error);
    throw error;
  }
};
```

### Hash Validation

```typescript
const validateHashedData = (toData: DispersePayMetadata[]) => {
  if (!Array.isArray(toData) || toData.length === 0) {
    throw new Error('Invalid payment data array');
  }
  
  for (const item of toData) {
    if (!item.to_address || item.amount <= 0n) {
      throw new Error('Invalid payment metadata');
    }
  }
  
  return hashDispersePaymentUsersToPay(toData);
};
```

All utility functions are designed to work seamlessly with the signature builders and provide the foundation for secure, consistent EVVM operations.

---

## @evvm/testnet-contracts

# Testnet Contracts

The `@evvm/testnet-contracts` package provides Solidity interfaces and implementations for all EVVM smart contracts documented in this site. This package enables developers to integrate EVVM functionality directly into their smart contracts.

## Package Structure

### Interfaces  

Ready-to-use interfaces for all EVVM contracts:

- **`IEvvm.sol`** - Core payment and transaction functions
- **`INameService.sol`** - Identity management and username operations
- **`IStaking.sol`** - Staking and reward distribution functions
- **`IEstimator.sol`** - Economic calculation and estimation functions
- **`ITreasury.sol`** - Treasury management operations
- **`ITreasuryHostChainStation.sol`** - Cross-chain treasury host functions
- **`ITreasuryExternalChainStation.sol`** - Cross-chain treasury external functions

### Contracts 
Full contract implementations organized by service:

#### **evvm/**

- `Evvm.sol` - Main EVVM contract implementation
- `EvvmLegacy.sol` - Legacy version compatibility
- `lib/` - Supporting libraries

#### **nameService/**

- `NameService.sol` - Identity service implementation
- `lib/` - Username and metadata utilities

#### **staking/**

- `Staking.sol` - Staking contract implementation
- `Estimator.sol` - Economic estimation contract
- `lib/` - Staking calculation libraries

#### **treasury/**

- `Treasury.sol` - Single-chain treasury implementation
- `lib/` - Treasury management utilities

#### **treasuryTwoChains/**

- `TreasuryHostChainStation.sol` - Host chain treasury operations
- `TreasuryExternalChainStation.sol` - External chain treasury operations
- `lib/` - Cross-chain communication utilities

### Library 

Utility libraries for contract development:

- **`SignatureRecover.sol`** - EIP-191 signature verification utilities
- **`Erc191TestBuilder.sol`** - Testing utilities for signature construction
- **`AdvancedStrings.sol`** - String manipulation utilities
- **`StakingServiceHooks.sol`** - Service integration hooks for staking

## Usage for Service Developers

### Recommended Approach: Use Interfaces

For developers creating EVVM services, we strongly recommend using the interfaces rather than full contract implementations:

```solidity

contract MyService {
    IEvvm public immutable evvm;
    INameService public immutable nameService;

    constructor(address _evvm, address _nameService) {
        evvm = IEvvm(_evvm);
        nameService = INameService(_nameService);
    }

    function makePayment(address to, uint256 amount) external {
        // Use EVVM interface for payments
        evvm.pay(/* parameters */);
    }
}
```

### Benefits of Using Interfaces

- **Lighter Dependencies**: Only import what you need
- **Future Compatibility**: Interfaces remain stable across contract upgrades
- **Gas Efficiency**: No unnecessary code deployment
- **Clean Integration**: Focus on functionality, not implementation details

## Installation

```bash
npm install @evvm/testnet-contracts
```

## Generic Service Implementation Pattern

Here's a complete template demonstrating best practices for EVVM service integration:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EVVMService is StakingServiceHooks {
    // State variables
    address evvmAddress;
    address serviceOwner;
    address constant ETHER_ADDRESS = address(0);
    address constant PRINCIPAL_TOKEN_ADDRESS = address(1);

    mapping(address => mapping(uint256 => bool)) usedNonces;

    constructor(
        address _evvmAddress,
        address _stakingAddress,
        address _serviceOwner
    ) StakingServiceHooks(_stakingAddress) {
        evvmAddress = _evvmAddress;
        serviceOwner = _serviceOwner;
    }

    function executeService(
        address clientAddress,
        string memory serviceData,
        uint256 serviceAmount,
        uint256 nonce,
        bytes memory signature,
        uint256 priorityFee_EVVM,
        uint256 nonce_EVVM,
        bool priorityFlag_EVVM,
        bytes memory signature_EVVM
    ) external {
        // 1. Verify client signature for service authorization
        require(
            SignatureRecover.signatureVerification(
                Strings.toString(IEvvm(evvmAddress).getEvvmID()),
                "executeService",
                string.concat(
                    serviceData, ",",
                    Strings.toString(serviceAmount), ",",
                    Strings.toString(nonce)
                ),
                signature,
                clientAddress
            ),
            "Invalid signature"
        );

        // 2. Prevent replay attacks
        require(!usedNonces[clientAddress][nonce], "Nonce already used");

        // 3. Process payment through EVVM
        IEvvm(evvmAddress).pay(
            clientAddress,      // from
            address(this),      // to_address
            "",                 // to_identity
            ETHER_ADDRESS,      // token
            serviceAmount,      // amount
            priorityFee_EVVM,   // priorityFee
            nonce_EVVM,         // nonce
            priorityFlag_EVVM,  // priority
            address(this),      // executor
            signature_EVVM      // signature
        );

        // 4. Distribute rewards to fisher (if staking)
        if (IEvvm(evvmAddress).isAddressStaker(address(this))) {
            // Priority fee to fisher
            IEvvm(evvmAddress).caPay(
                msg.sender,
                ETHER_ADDRESS,
                priorityFee_EVVM
            );

            // Share rewards with fisher
            IEvvm(evvmAddress).caPay(
                msg.sender,
                PRINCIPAL_TOKEN_ADDRESS,
                IEvvm(evvmAddress).getRewardAmount() / 2
            );
        }

        // 5. Your custom service logic here
        _performServiceLogic(clientAddress, serviceData, serviceAmount);

        usedNonces[clientAddress][nonce] = true;
    }

    function _performServiceLogic(
        address client,
        string memory data,
        uint256 amount
    ) internal {
        // Implement your service-specific functionality here
    }

    // Service staking functions using inherited hooks
    function stake(uint256 amountToStake) external {
        require(msg.sender == serviceOwner, "Unauthorized");
        _makeStakeService(amountToStake);
    }

    function unstake(uint256 amountToUnstake) external {
        require(msg.sender == serviceOwner, "Unauthorized");
        _makeUnstakeService(amountToUnstake);
    }
}
```

### Essential Implementation Patterns

1. **Interface Integration**: Use `IEvvm` for all EVVM operations
2. **Dual Signature Pattern**: Service authorization + payment signatures
3. **Nonce Management**: Prevent replay attacks with proper tracking
4. **Staking Integration**: Inherit from `StakingServiceHooks` for service staking
5. **Fisher Incentives**: Distribute rewards to encourage transaction processing
6. **Modular Design**: Separate service logic from EVVM integration

### Universal Message Format

Service signatures follow the standard EVVM pattern:

```
"<evvmID>,<functionName>,<param1>,<param2>,...,<paramN>"
```

Example for a generic service:

```
"1,executeService,serviceData,1000000000000000000,100"
```

This template can be adapted for any service type by:

- Changing function names and parameters
- Implementing custom service logic in `_performServiceLogic`
- Adding service-specific state variables and functions

This package provides everything needed to integrate with the EVVM ecosystem documented throughout this site, offering both flexibility for advanced use cases and simplicity for standard service development.

---

## Introduction to P2P Swap Contract


The P2P Swap Contract is a decentralized peer-to-peer token exchange system that enables users to create, manage, and fulfill token swap orders in a trustless marketplace environment. Built on the EVVM ecosystem, it provides a comprehensive order book system with flexible fee structures and integrated staking rewards.

## Core Contract Functions

### Order Management System
The P2P Swap Contract implements a sophisticated order book system:

- **Order Creation (`makeOrder`)**: Users can create swap orders offering one token in exchange for another
- **Order Cancellation (`cancelOrder`)**: Order creators can cancel their unfilled orders and reclaim their tokens
- **Order Fulfillment**: Two dispatch methods with different fee structures for order execution
- **Market Discovery**: Automatic market creation for new token pairs

### Fee Structure Models
- **Proportional Fee Model**: Percentage-based fees calculated from order amounts
- **Fixed Fee Model**: Capped fee structure with maximum limits to protect users
- **Dynamic Fee Distribution**: Fees distributed between sellers, service treasury, and MATE stakers

### EVVM Ecosystem Integration
- **Payment Processing**: Full integration with EVVM's payment system for secure token transfers
- **Staking Rewards**: Executors who are MATE stakers receive additional rewards
- **Signature Authorization**: EIP-191 signature verification for all operations
- **Service Staking**: Contract can stake MATE tokens to participate in the staking ecosystem

## Market Architecture

### Dynamic Market Creation
- **Automatic Markets**: New markets created automatically when users create orders for new token pairs
- **Market Identification**: Each token pair (tokenA/tokenB) gets a unique market ID
- **Order Storage**: Orders organized by market ID and sequential order IDs within each market
- **Efficient Lookup**: Fast market discovery and order retrieval through optimized mappings

### Order Book Structure
- **Sequential Order IDs**: Orders assigned sequential IDs within each market for easy tracking
- **Slot Management**: Efficient slot reuse when orders are cancelled or filled
- **Order Metadata**: Complete order information including seller, amounts, and status
- **Market Statistics**: Real-time tracking of available orders and market capacity

## Economic Model

### Fee Distribution System
The contract implements a three-way fee split:

- **Seller Rewards**: Portion of fees goes to order creators as incentive
- **Service Treasury**: Contract accumulates fees for operational sustainability
- **MATE Staker Rewards**: Stakers who execute transactions receive fee portions

### Staker Incentive Structure
- **Base Rewards**: All staker executors receive MATE token rewards
- **Priority Fee Bonuses**: Additional rewards for processing priority transactions
- **Execution Multipliers**: Higher rewards for complex operations (3x-5x base rewards)
- **Fee Sharing**: Stakers receive portions of transaction fees as additional compensation

### Treasury Management
- **Fee Accumulation**: Service fees automatically accumulate in contract balances
- **Withdrawal System**: Time-delayed withdrawal proposals for treasury management
- **Balance Tracking**: Real-time tracking of contract token balances
- **Staking Integration**: Contract can stake accumulated MATE tokens for additional rewards

## Security Architecture

### Signature-Based Authorization
All operations require cryptographic signatures using EIP-191 standard:
- **User Authorization**: Each action must be signed by the relevant user
- **Replay Protection**: Nonce-based system prevents transaction replay attacks
- **Parameter Integrity**: Signatures cover all critical transaction parameters
- **Message Verification**: Dedicated SignatureUtils library for consistent verification

### Time-Delayed Governance
Administrative functions use time-delayed execution:
- **Proposal Period**: 1-day waiting period for all administrative changes
- **Transparency**: All changes visible before execution
- **Emergency Controls**: Proposals can be cancelled during waiting period
- **Owner Management**: Secure owner transfer process with proposal/acceptance pattern

## Integration Capabilities

### EVVM Core Integration
- **Payment Functions**: Direct integration with EVVM's `pay`, `caPay`, and `disperseCaPay` functions
- **Token Abstractions**: Works with EVVM's internal token representation system
- **Staker Detection**: Automatic detection of staker status for reward distribution
- **Priority Processing**: Support for priority fees and expedited transaction processing

### Staking Service Integration
- **Service Staking**: Contract can stake MATE tokens as a service participant
- **Reward Accumulation**: Automatic accumulation of staking rewards
- **Unstaking Process**: Controlled unstaking with proper authorization
- **Balance Management**: Integration with staking balance tracking

## Execution Methods

The P2P Swap Contract supports multiple execution approaches:

### Direct Execution
- **User-Initiated**: Users interact directly with the P2P Swap contract
- **Immediate Processing**: Transactions submitted directly to the blockchain
- **Full Control**: Complete autonomy over transaction timing and parameters

### Fisher Execution
- **Fishing Spot Integration**: Users submit transactions through the fishing spot system
- **Fisher Processing**: Specialized fisher nodes capture and execute transactions
- **Staker Benefits**: Fisher executors who are stakers receive enhanced rewards
- **Optimized Routing**: Fishers handle transaction optimization and gas management

## Order Lifecycle

### Order Creation Process
1. **Signature Generation**: User signs order parameters with their private key
2. **Token Transfer**: User's tokens transferred to contract via EVVM payment system
3. **Market Assignment**: Order assigned to appropriate market (created if necessary)
4. **Order Storage**: Order details stored in contract with unique ID
5. **Reward Distribution**: Staker executors receive MATE token rewards

### Order Fulfillment Process
1. **Order Selection**: Buyer selects order from available market orders
2. **Signature Verification**: Buyer's signature verified for dispatch authorization
3. **Token Exchange**: Automatic token swap between buyer and seller
4. **Fee Processing**: Fees calculated and distributed to all parties
5. **Order Cleanup**: Completed order removed from active order book

### Order Cancellation Process
1. **Authorization Check**: Verify cancellation request from order creator
2. **Token Return**: Original tokens returned to order creator
3. **Order Removal**: Order removed from market order book
4. **Market Update**: Market statistics updated to reflect cancellation

## Fee Calculation Models

### Proportional Fee Model
- **Percentage-Based**: Fees calculated as percentage of order amount
- **Configurable Rate**: Admin-adjustable percentage rate (default 5%)
- **Predictable Costs**: Users know exact fee percentage in advance
- **Scalable Structure**: Fees scale proportionally with order size

### Fixed Fee Model
- **Capped Fees**: Maximum fee limit protects users from excessive charges
- **Hybrid Approach**: Uses proportional calculation up to maximum limit
- **User Protection**: Prevents fee exploitation on large orders
- **Flexible Implementation**: Supports both models simultaneously

## Administrative Features

### Governance System
- **Owner Management**: Secure owner transfer with time-delayed acceptance
- **Fee Configuration**: Adjustable fee percentages and distribution ratios
- **Treasury Operations**: Controlled withdrawal system for accumulated fees
- **Staking Management**: Contract-level staking operations for service participation

### Monitoring and Analytics
- **Order Tracking**: Complete order history and status monitoring
- **Market Analytics**: Real-time market statistics and order book depth
- **Fee Analytics**: Detailed fee collection and distribution tracking
- **Balance Monitoring**: Real-time contract balance tracking across all tokens

The P2P Swap Contract provides a comprehensive decentralized exchange infrastructure that seamlessly integrates with the EVVM ecosystem while offering flexible fee structures, robust security, and attractive incentives for both users and stakers.

---

## makeOrder Function


**Function Type**: `external`  
**Function Signature**: `makeOrder(address,MetadataMakeOrder,bytes,uint256,uint256,bool,bytes)`

The `makeOrder` function creates a new token swap order in the P2P marketplace, allowing users to offer one token in exchange for another at a specified rate. This function handles market creation, order storage, and reward distribution for staker executors.

**Key features:**

- **Order Creation**: Establishes a new swap order offering tokenA for tokenB
- **Automatic Market Creation**: Creates new markets for previously unseen token pairs
- **Staker Rewards**: Executors who are stakers receive MATE token rewards and priority fees
- **Signature Verification**: Uses EIP-191 signatures for secure authorization
- **EVVM Integration**: Leverages EVVM payment system for token transfers

### Parameters

| Field               | Type                | Description                                                                          |
| ------------------- | ------------------- | ------------------------------------------------------------------------------------ |
| `user`              | `address`           | The address creating the order whose tokens will be locked and signature is verified |
| `metadata`          | `MetadataMakeOrder` | Struct containing order details (nonce, tokenA, tokenB, amountA, amountB)            |
| `signature`         | `bytes`             | EIP-191 signature from `user` authorizing the order creation                         |
| `_priorityFee_Evvm` | `uint256`           | Fee amount distributed to stakers as reward for processing the transaction.          |
| `_nonce_Evvm`       | `uint256`           | Nonce for EVVM payment transaction                                                   |
| `_priority_Evvm`    | `bool`              | Priority flag (sync/async) for the EVVM payment function call.                       |
| `_signature_Evvm`   | `bytes`             | EIP-191 signature for EVVM payment authorization                                     |

### MetadataMakeOrder Structure

| Field     | Type      | Description                                 |
| --------- | --------- | ------------------------------------------- |
| `nonce`   | `uint256` | Unique nonce for P2P Swap replay protection |
| `tokenA`  | `address` | Token being offered by the order creator    |
| `tokenB`  | `address` | Token being requested in exchange           |
| `amountA` | `uint256` | Amount of tokenA being offered              |
| `amountB` | `uint256` | Amount of tokenB being requested            |

### Return Values

| Field     | Type      | Description                                      |
| --------- | --------- | ------------------------------------------------ |
| `market`  | `uint256` | ID of the market where the order was placed      |
| `orderId` | `uint256` | Unique ID of the created order within the market |

### Execution Methods

#### Fisher Execution

1. User signs both P2P order details and EVVM payment authorization
2. Fisher captures the transaction and validates all signatures
3. Fisher submits the transaction and receives staker rewards if eligible
4. Order is created and tokens are locked in the contract

#### Direct Execution

1. User or authorized service calls the function directly
2. All signature validations are performed on-chain
3. Order creation and token locking happen immediately
4. Staker benefits are distributed if executor qualifies

### Workflow

1. **P2P Signature Verification**: Validates the `signature` against the `user` address and order metadata using `SignatureUtils.verifyMessageSignedForMakeOrder`. Reverts with `"Invalid signature"` on failure.

2. **Nonce Validation**: Checks if the P2P nonce has been used before by consulting `nonceP2PSwap[user][metadata.nonce]`. Reverts with `"Nonce already used"` if the nonce was previously used.

3. **Token Transfer**: Executes payment to lock the user's tokens using `makePay` with the provided EVVM parameters, transferring `metadata.amountA` of `metadata.tokenA` from `user` to the contract.

4. **Market Resolution**: Determines the appropriate market using `findMarket(metadata.tokenA, metadata.tokenB)`. If no market exists (returns 0), creates a new market using `createMarket`.

5. **Order ID Assignment**: Assigns an order ID within the market:
   - If market is at capacity (`maxSlot == ordersAvailable`), increments `maxSlot` and uses the new slot
   - Otherwise, finds the first available slot by iterating through existing orders
   - Updates `ordersAvailable` counter

6. **Order Storage**: Stores the order in `ordersInsideMarket[market][orderId]` with seller address, token amounts, and metadata.

7. **Staker Reward Distribution**: If the executor (`msg.sender`) is a registered staker:
   - **Priority Fee Transfer**: If `_priorityFee_Evvm > 0`, transfers the priority fee in `metadata.tokenA` to the executor
   - **MATE Token Rewards**: Grants MATE tokens to the executor:
     - 3x base reward amount if priority fee was provided
     - 2x base reward amount if no priority fee

8. **Nonce Update**: Marks the P2P nonce as used to prevent replay attacks.

### Example

**Scenario:** User wants to create an order offering 100 USDC for 0.05 ETH

**Parameters:**

- `user`: `0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c`
- `metadata.nonce`: `15`
- `metadata.tokenA`: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` (USDC)
- `metadata.tokenB`: `0x0000000000000000000000000000000000000000` (ETH)
- `metadata.amountA`: `100000000` (100 USDC, 6 decimals)
- `metadata.amountB`: `50000000000000000` (0.05 ETH in wei)
- `_priorityFee_Evvm`: `1000000000000000` (0.001 ETH priority fee)

**Process:**

1. User signs the order details with their private key
2. Fisher or user submits the transaction
3. Contract validates signature and transfers 100 USDC to contract
4. Order is assigned to USDC/ETH market (created if new)
5. Order stored with unique ID for future fulfillment
6. Staker executor receives priority fee + 3x MATE reward

**Market Creation:**
If this is the first USDC/ETH order:

- New market created with ID (e.g., market #5)
- Market metadata initialized for USDC/ETH pair
- Order becomes first order in the new market

**Order Assignment:**

- Order receives ID #1 in the market
- Market statistics updated (maxSlot: 1, ordersAvailable: 1)
- Order can now be discovered and fulfilled by other users

:::info
For signature structure details, see [Make Order Signature Structure](../../14-SignatureStructures/01-P2PSwap/01-MakeOrderSignatureStructure.md)
:::

:::tip
**Want to cancel your order?**  
Use [cancelOrder](./02-cancelOrder.md) to cancel your order and reclaim your tokens.

**Looking for existing orders?**  
Check the [Getter Functions](../03-GetterFunctions.md) to browse available orders in different markets.
:::

---

## cancelOrder Function


**Function Type**: `external`  
**Function Signature**: `cancelOrder(address,MetadataCancelOrder,uint256,uint256,bool,bytes)`

The `cancelOrder` function allows order creators to cancel their existing orders and reclaim their locked tokens. This function validates ownership, returns tokens to the original creator, and provides rewards to staker executors.

**Key features:**

- **Order Cancellation**: Removes existing orders from the marketplace
- **Token Recovery**: Returns locked tokens to the original order creator
- **Ownership Validation**: Ensures only order creators can cancel their orders
- **Staker Rewards**: Executors who are stakers receive MATE token rewards
- **Market Cleanup**: Updates market statistics after order removal

### Parameters

| Field               | Type                  | Description                                                                |
| ------------------- | --------------------- | -------------------------------------------------------------------------- |
| `user`              | `address`             | The address that created the original order and is requesting cancellation |
| `metadata`          | `MetadataCancelOrder` | Struct containing cancellation details and embedded signature              |
| `_priorityFee_Evvm` | `uint256`             | Priority fee for EVVM transaction processing (optional)                    |
| `_nonce_Evvm`       | `uint256`             | Nonce for EVVM payment transaction                                         |
| `_priority_Evvm`    | `bool`                | Priority flag for EVVM payment (sync/async)                                |
| `_signature_Evvm`   | `bytes`               | EIP-191 signature for EVVM payment authorization                           |

:::info 
`_priorityFee_Evvm` is paid using principal tokens
:::

### MetadataCancelOrder Structure

| Field       | Type      | Description                                                |
| ----------- | --------- | ---------------------------------------------------------- |
| `nonce`     | `uint256` | Unique nonce for P2P Swap replay protection                |
| `tokenA`    | `address` | Token that was offered in the original order               |
| `tokenB`    | `address` | Token that was requested in the original order             |
| `orderId`   | `uint256` | ID of the order to be cancelled                            |
| `signature` | `bytes`   | EIP-191 signature from `user` authorizing the cancellation |

### Execution Methods

#### Fisher Execution

1. User signs cancellation details and optional EVVM payment authorization
2. Fisher captures the transaction and validates all signatures
3. Fisher submits the transaction and receives staker rewards if eligible
4. Order is cancelled and tokens are returned to the user

#### Direct Execution

1. User or authorized service calls the function directly
2. All signature validations are performed on-chain
3. Order cancellation and token return happen immediately
4. Staker benefits are distributed if executor qualifies

### Workflow

1. **P2P Signature Verification**: Validates the embedded `metadata.signature` against the `user` address and cancellation parameters using `SignatureUtils.verifyMessageSignedForCancelOrder`. Reverts with `"Invalid signature"` on failure.

2. **Market Resolution**: Finds the market for the token pair using `findMarket(metadata.tokenA, metadata.tokenB)`.

3. **Nonce Validation**: Checks if the P2P nonce has been used before by consulting `nonceP2PSwap[user][metadata.nonce]`. Reverts with `"Invalid nonce"` if the nonce was previously used.

4. **Order Ownership Verification**: Validates that:
   - The market exists (market != 0)
   - The order exists and belongs to the requesting user
   - Reverts with `"Invalid order"` if validation fails

5. **Priority Fee Processing**: If `_priorityFee_Evvm > 0`, processes the priority fee payment using `makePay` with MATE tokens.

6. **Token Return**: Returns the locked tokens to the order creator using `makeCaPay`, transferring `ordersInsideMarket[market][metadata.orderId].amountA` of `metadata.tokenA` back to `user`.

7. **Order Removal**: Marks the order as cancelled by setting the seller address to `address(0)`.

8. **Staker Reward Distribution**: If the executor (`msg.sender`) is a registered staker:
   - **MATE Token Rewards**: Grants MATE tokens to the executor:
     - 3x base reward amount + priority fee if priority fee was provided
     - 2x base reward amount if no priority fee

9. **Market Update**: Decrements the `ordersAvailable` counter for the market.

10. **Nonce Update**: Marks the P2P nonce as used to prevent replay attacks.

### Example

**Scenario:** User wants to cancel their order offering 100 USDC for 0.05 ETH

**Parameters:**

- `user`: `0x742c7b6b472c8f4bd58e6f9f6c82e8e6e7c82d8c`
- `metadata.nonce`: `25`
- `metadata.tokenA`: `0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48` (USDC)
- `metadata.tokenB`: `0x0000000000000000000000000000000000000000` (ETH)
- `metadata.orderId`: `3`
- `_priorityFee_Evvm`: `0` (no priority fee)

**Process:**

1. User signs the cancellation details with their private key
2. Fisher or user submits the transaction
3. Contract validates signature and order ownership
4. 100 USDC is returned to the user's balance
5. Order #3 is marked as cancelled in the USDC/ETH market
6. Staker executor receives 2x MATE reward (no priority fee)

**Market Impact:**

- Market's `ordersAvailable` count decreases by 1
- Order slot becomes available for reuse
- Market statistics reflect the cancellation

**Token Recovery:**

- Original 100 USDC locked in the order is returned to user
- User can immediately use these tokens for other purposes
- No fees charged for order cancellation

:::info
For signature structure details, see [Cancel Order Signature Structure](../../14-SignatureStructures/01-P2PSwap/02-CancelOrderSignatureStructure.md)
:::

:::tip
**Want to create a new order?**  
Use [makeOrder](./01-makeOrder.md) to create a new swap order with different parameters.

**Looking to fulfill someone else's order?**  
Check [dispatchOrder](./03-dispatchOrder-proportional.md) to execute existing orders in the marketplace.
:::

---

## dispatchOrder_fillPropotionalFee Function


**Function Type**: `external`  
**Function Signature**: `dispatchOrder_fillPropotionalFee(address,MetadataDispatchOrder,uint256,uint256,bool,bytes)`

The `dispatchOrder_fillPropotionalFee` function fulfills existing swap orders using a proportional fee model where fees are calculated as a percentage of the order amount. This function handles token exchanges, fee distribution, and reward allocation.

**Key features:**
- **Order Fulfillment**: Executes existing swap orders from the marketplace
- **Proportional Fees**: Fees calculated as a configurable percentage of order amount
- **Three-Way Fee Split**: Fees distributed between seller, service, and MATE stakers
- **Token Exchange**: Automatic token swap between buyer and seller
- **Staker Rewards**: Enhanced rewards for staker executors

### Parameters

| Field | Type | Description |
|-------|------|-------------|
| `user` | `address` | The address fulfilling the order (buyer) whose signature is verified |
| `metadata` | `MetadataDispatchOrder` | Struct containing dispatch details and embedded signature |
| `_priorityFee_Evvm` | `uint256` | Priority fee for EVVM transaction processing |
| `_nonce_Evvm` | `uint256` | Nonce for EVVM payment transaction |
| `_priority_Evvm` | `bool` | Priority flag for EVVM payment (sync/async) |
| `_signature_Evvm` | `bytes` | EIP-191 signature for EVVM payment authorization |

### MetadataDispatchOrder Structure

| Field | Type | Description |
|-------|------|-------------|
| `nonce` | `uint256` | Unique nonce for P2P Swap replay protection |
| `tokenA` | `address` | Token offered in the original order |
| `tokenB` | `address` | Token requested in the original order |
| `orderId` | `uint256` | ID of the order to be fulfilled |
| `amountOfTokenBToFill` | `uint256` | Amount of tokenB the buyer is providing (must cover order + fees) |
| `signature` | `bytes` | EIP-191 signature from `user` authorizing the dispatch |

### Fee Calculation

The proportional fee is calculated as:
```
fee = (orderAmount * percentageFee) / 10_000
```

Where `percentageFee` is configurable (default: 500 = 5%).

### Fee Distribution

Fees are distributed according to the `rewardPercentage` structure:
- **Seller Portion**: Added to the seller's payment as bonus
- **Service Portion**: Accumulated in contract treasury
- **MATE Staker Portion**: Distributed to the executor (if staker)

### Execution Methods

#### Fisher Execution
1. User signs dispatch details and EVVM payment authorization
2. Fisher captures the transaction and validates all signatures
3. Fisher submits the transaction and receives enhanced rewards if staker
4. Order is fulfilled and tokens are exchanged

#### Direct Execution
1. User or authorized service calls the function directly
2. All signature validations are performed on-chain
3. Order fulfillment and token exchange happen immediately
4. Staker benefits are distributed if executor qualifies

### Workflow

1. **P2P Signature Verification**: Validates the embedded `metadata.signature` against the `user` address and dispatch parameters using `SignatureUtils.verifyMessageSignedForDispatchOrder`. Reverts with `"Invalid signature"` on failure.

2. **Market Resolution**: Finds the market for the token pair using `findMarket(metadata.tokenA, metadata.tokenB)`.

3. **Nonce Validation**: Checks if the P2P nonce has been used before by consulting `nonceP2PSwap[user][metadata.nonce]`. Reverts with `"Invalid nonce"` if the nonce was previously used.

4. **Order Validation**: Verifies that:
   - The market exists (market != 0)
   - The order exists and is active (seller != address(0))
   - Reverts if validation fails

5. **Fee Calculation**: Calculates the proportional fee using `calculateFillPropotionalFee(ordersInsideMarket[market][metadata.orderId].amountB)`.

6. **Amount Validation**: Ensures `metadata.amountOfTokenBToFill` is sufficient to cover the order amount plus fees. Reverts with `"Insuficient amountOfTokenToFill"` if insufficient.

7. **Token Payment**: Processes the buyer's payment using `makePay`, transferring `metadata.amountOfTokenBToFill` of `metadata.tokenB` from `user` to the contract.

8. **Excess Refund**: If the buyer provided more than required (order + fee), refunds the excess using `makeCaPay`.

9. **Fee Distribution Setup**: Creates distribution array with:
   - Seller payment: order amount + seller's fee portion
   - Executor payment: priority fee + staker's fee portion

10. **Service Fee Accumulation**: Adds the service portion of fees to `balancesOfContract[metadata.tokenB]`.

11. **Payment Distribution**: Executes the distribution using `makeDisperseCaPay` to pay both seller and executor.

12. **Token A Transfer**: Transfers the seller's tokenA to the buyer using `makeCaPay`.

13. **Staker Reward Distribution**: If the executor is a staker:
    - **Enhanced MATE Rewards**: Grants additional MATE tokens:
      - 5x base reward if excess was refunded
      - 4x base reward for standard fulfillment

14. **Order Cleanup**: Marks the order as completed by setting seller to `address(0)` and decrements market's `ordersAvailable`.

15. **Nonce Update**: Marks the P2P nonce as used to prevent replay attacks.

### Example

**Scenario:** User wants to fulfill an order offering 100 USDC for 0.05 ETH (5% fee)

**Existing Order:**
- Seller offers: 100 USDC
- Seller wants: 0.05 ETH
- Market: USDC/ETH, Order ID: 3

**Parameters:**
- `user`: `0x123...` (buyer)
- `metadata.amountOfTokenBToFill`: `52500000000000000` (0.0525 ETH = 0.05 + 0.0025 fee)
- `_priorityFee_Evvm`: `1000000000000000` (0.001 ETH)

**Fee Calculation:**
- Order amount: 0.05 ETH
- Proportional fee (5%): 0.0025 ETH
- Total required: 0.0525 ETH

**Fee Distribution (assuming 50%/40%/10% split):**
- Seller receives: 0.05 ETH + 0.00125 ETH (50% of fee) = 0.05125 ETH
- Service treasury: 0.001 ETH (40% of fee)
- Executor receives: 0.001 ETH (priority) + 0.00025 ETH (10% of fee) = 0.00125 ETH

**Final Exchange:**
- Buyer pays: 0.0525 ETH
- Buyer receives: 100 USDC
- Seller receives: 0.05125 ETH (order + bonus)
- Executor receives: 0.00125 ETH + 4x MATE rewards

:::info
For signature structure details, see [Dispatch Order Signature Structure](../../14-SignatureStructures/01-P2PSwap/03-DispatchOrderSignatureStructure.md)
:::

:::tip
**Want fixed fee protection?**  
Use [dispatchOrder_fillFixedFee](./04-dispatchOrder-fixed.md) for capped fees on large orders.

**Looking for orders to fulfill?**  
Check the [Getter Functions](../03-GetterFunctions.md) to browse available orders in different markets.
:::

---

## dispatchOrder_fillFixedFee Function


**Function Type**: `external`  
**Function Signature**: `dispatchOrder_fillFixedFee(address,MetadataDispatchOrder,uint256,uint256,bool,bytes,uint256)`

The `dispatchOrder_fillFixedFee` function fulfills existing swap orders using a fixed fee model with maximum fee caps to protect users from excessive charges on large orders. This hybrid approach uses proportional calculation up to a maximum limit provided in the function call.

**Key features:**

- **Capped Fee Structure**: Maximum fee limit protects users from excessive charges
- **Hybrid Fee Model**: Uses proportional calculation up to the maximum limit
- **User Protection**: Prevents fee exploitation on large orders
- **Flexible Payment**: Supports partial fee payment within acceptable ranges
- **Enhanced Rewards**: Higher rewards for complex fee calculations

### Parameters

| Field               | Type                    | Description                                                                                                       |
| ------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `user`              | `address`               | The address fulfilling the order (buyer) whose signature is verified                                              |
| `metadata`          | `MetadataDispatchOrder` | Struct containing dispatch details and embedded signature                                                         |
| `_priorityFee_Evvm` | `uint256`               | Priority fee for EVVM transaction processing                                                                      |
| `_nonce_Evvm`       | `uint256`               | Nonce for EVVM payment transaction                                                                                |
| `_priority_Evvm`    | `bool`                  | Priority flag for EVVM payment (sync/async)                                                                       |
| `_signature_Evvm`   | `bytes`                 | EIP-191 signature for EVVM payment authorization                                                                  |
| `_amountOut`        | `uint256`               | The maximum fee amount (fee cap) for the transaction. This value acts as the upper limit for the fee calculation. |

### Fee Calculation Logic

The fixed fee model uses a two-tier calculation where the fee is the lesser of a proportional fee and an externally provided cap:

1. **Standard Proportional Fee**: Calculated as `(orderAmount * percentageFee) / 10_000`.
2. **External Fee Cap**: Provided by the `_amountOut` parameter in the function call.
3. **Final Fee**: The final fee is `min(proportionalFee, _amountOut)`.

### Fee Flexibility

The function accepts payments within a range:

- **Minimum**: `orderAmount + fee - (fee * 10%)`
- **Maximum**: `orderAmount + fee`
- **Actual Fee Used**: Based on amount provided by user

### Execution Methods

#### Fisher Execution

1. User signs dispatch details and EVVM payment authorization
2. Fisher captures the transaction and validates all signatures
3. Fisher submits the transaction with appropriate fee calculation
4. Order is fulfilled with optimized fee structure

#### Direct Execution

1. User or authorized service calls the function directly
2. Fee calculations are performed on-chain
3. Order fulfillment uses the most favorable fee structure
4. Enhanced rewards for complex processing

### Workflow

1. **P2P Signature Verification**: Validates the embedded `metadata.signature` against the `user` address and dispatch parameters using `SignatureUtils.verifyMessageSignedForDispatchOrder`. Reverts with `"Invalid signature"` on failure.

2. **Market Resolution**: Finds the market for the token pair using `findMarket(metadata.tokenA, metadata.tokenB)`.

3. **Nonce Validation**: Checks if the P2P nonce has been used before. Reverts with `"Invalid nonce"` if the nonce was previously used.

4. **Order Validation**: Verifies that the market exists and the order is active. Reverts with `"Invalid order"` if validation fails.

5. **Fee Calculation**: Calculates both fee amounts using `calculateFillFixedFee`:
   - `fee`: The actual fee to be charged (capped amount)
   - `fee10`: 10% of the fee (for minimum payment calculation)

6. **Payment Validation**: Ensures `metadata.amountOfTokenBToFill` meets minimum requirement:
   - Minimum: `orderAmount + fee - fee10`
   - Reverts with `"Insufficient amountOfTokenBToFill"` if insufficient

7. **Token Payment**: Processes the buyer's payment using `makePay`.

8. **Final Fee Determination**: Calculates the actual fee based on payment amount:
   - If payment is between minimum and full fee: uses `paymentAmount - orderAmount`
   - If payment is full fee or more: uses the calculated `fee`

9. **Excess Refund**: If payment exceeds `orderAmount + fee`, refunds the excess.

10. **Fee Distribution Setup**: Creates distribution array with calculated amounts:
    - Seller payment: order amount + seller's portion of final fee
    - Executor payment: priority fee + staker's portion of final fee

11. **Service Fee Accumulation**: Adds service portion of final fee to contract treasury.

12. **Payment Distribution**: Executes distribution using `makeDisperseCaPay`.

13. **Token A Transfer**: Transfers seller's tokenA to the buyer.

14. **Enhanced Staker Rewards**: If executor is a staker:
    - **Premium MATE Rewards**: 5x base reward if excess was refunded, 4x otherwise

15. **Order Cleanup**: Marks order as completed and updates market statistics.

16. **Nonce Update**: Marks P2P nonce as used.

### Example

**Scenario:** Large order with fee cap protection

**Existing Order:**

- Seller offers: 10,000 USDC
- Seller wants: 5 ETH
- Proportional fee (5%): 0.25 ETH
- Fee cap (from `_amountOut`): 0.001 ETH
- **Actual fee**: 0.001 ETH (capped)

**Parameters:**

- `metadata.amountOfTokenBToFill`: `5000900000000000000` (5.0009 ETH)
- `_amountOut`: `1000000000000000` (0.001 ETH cap)

**Fee Calculation:**

- Standard fee would be: 0.25 ETH (5% of 5 ETH)
- Fee cap applies: 0.001 ETH
- 10% reduction: 0.0001 ETH
- Minimum payment: 5 ETH + 0.001 ETH - 0.0001 ETH = 5.0009 ETH

**Payment Flexibility:**

- User pays: 5.0009 ETH (minimum acceptable)
- Actual fee charged: 0.0009 ETH (payment - order amount)
- User saves: 0.2491 ETH compared to proportional fee

**Fee Distribution:**

- Seller receives: 5 ETH + seller's portion of 0.0009 ETH
- Service treasury: service portion of 0.0009 ETH
- Executor receives: priority fee + staker portion of 0.0009 ETH

**Benefits:**

- **User Protection**: Massive fee savings on large orders
- **Flexibility**: Can pay anywhere from minimum to full fee
- **Fair Distribution**: Fees still distributed proportionally
- **Enhanced Rewards**: Executor gets premium MATE rewards

:::info
For signature structure details, see [Dispatch Order Signature Structure](../../14-SignatureStructures/01-P2PSwap/03-DispatchOrderSignatureStructure.md)
:::

:::tip
**Prefer predictable fees?**  
Use [dispatchOrder_fillPropotionalFee](./03-dispatchOrder-proportional.md) for percentage-based fees.

**Want to create your own order?**  
Use [makeOrder](./01-makeOrder.md) to create a new swap order with your preferred terms.
:::

---

## Getter Functions(13-P2PSwap)


The P2P Swap Contract provides a comprehensive set of getter functions for querying order information, market data, user balances, and administrative settings. These functions enable users and applications to interact effectively with the marketplace.

## Order Query Functions

### getAllMarketOrders

**Function Signature**: `getAllMarketOrders(uint256 market) → OrderForGetter[]`

Returns all orders in a specific market, including both active and cancelled orders.

**Parameters:**
- `market` (uint256): The market ID to query

**Returns:**
- Array of `OrderForGetter` structs containing market ID, order ID, seller, and amounts

**Usage Example:**
```solidity
// Get all orders in USDC/ETH market (market ID 1)
OrderForGetter[] memory orders = p2pSwap.getAllMarketOrders(1);
```

### getOrder

**Function Signature**: `getOrder(uint256 market, uint256 orderId) → Order`

Retrieves a specific order by market and order ID.

**Parameters:**
- `market` (uint256): The market ID
- `orderId` (uint256): The order ID within the market

**Returns:**
- `Order` struct containing seller address and token amounts

### getMyOrdersInSpecificMarket

**Function Signature**: `getMyOrdersInSpecificMarket(address user, uint256 market) → OrderForGetter[]`

Returns all orders created by a specific user in a given market.

**Parameters:**
- `user` (address): The user's address
- `market` (uint256): The market ID to query

**Returns:**
- Array of user's orders in the specified market

## Market Information Functions

### findMarket

**Function Signature**: `findMarket(address tokenA, address tokenB) → uint256`

Finds the market ID for a specific token pair.

**Parameters:**
- `tokenA` (address): First token in the pair
- `tokenB` (address): Second token in the pair

**Returns:**
- Market ID (0 if market doesn't exist)

### getMarketMetadata

**Function Signature**: `getMarketMetadata(uint256 market) → MarketInformation`

Retrieves complete metadata for a specific market.

**Parameters:**
- `market` (uint256): The market ID

**Returns:**
- `MarketInformation` struct containing token addresses, max slots, and available orders

### getAllMarketsMetadata

**Function Signature**: `getAllMarketsMetadata() → MarketInformation[]`

Returns metadata for all existing markets.

**Returns:**
- Array of `MarketInformation` structs for all markets

## User State Functions

### checkIfANonceP2PSwapIsUsed

**Function Signature**: `checkIfANonceP2PSwapIsUsed(address user, uint256 nonce) → bool`

Checks if a specific nonce has been used by a user.

**Parameters:**
- `user` (address): The user's address
- `nonce` (uint256): The nonce to check

**Returns:**
- `true` if nonce has been used, `false` otherwise

## Contract Balance Functions

### getBalanceOfContract

**Function Signature**: `getBalanceOfContract(address token) → uint256`

Returns the contract's balance for a specific token.

**Parameters:**
- `token` (address): The token address to query

**Returns:**
- Token balance held by the contract

## Administrative Query Functions

### Owner Management

#### getOwner
**Function Signature**: `getOwner() → address`
Returns the current contract owner address.

#### getOwnerProposal
**Function Signature**: `getOwnerProposal() → address`
Returns the proposed new owner address.

#### getOwnerTimeToAccept
**Function Signature**: `getOwnerTimeToAccept() → uint256`
Returns the timestamp when the owner proposal expires.

### Fee Configuration

#### getPercentageFee
**Function Signature**: `getPercentageFee() → uint256`
Returns the current percentage fee (in basis points, e.g., 500 = 5%).

#### getProposalPercentageFee
**Function Signature**: `getProposalPercentageFee() → uint256`
Returns the proposed percentage fee.

#### getRewardPercentage
**Function Signature**: `getRewardPercentage() → Percentage`
Returns the current fee distribution percentages.

#### getRewardPercentageProposal
**Function Signature**: `getRewardPercentageProposal() → Percentage`
Returns the proposed fee distribution percentages.

### Fixed Fee Limits

#### getMaxLimitFillFixedFee
**Function Signature**: `getMaxLimitFillFixedFee() → uint256`
Returns the current maximum fixed fee limit.

#### getMaxLimitFillFixedFeeProposal
**Function Signature**: `getMaxLimitFillFixedFeeProposal() → uint256`
Returns the proposed maximum fixed fee limit.

### Treasury Management

#### getProposedWithdrawal
**Function Signature**: `getProposedWithdrawal() → (address, uint256, address, uint256)`
Returns details of any pending withdrawal proposal.

**Returns:**
- `tokenToWithdraw` (address): Token to be withdrawn
- `amountToWithdraw` (uint256): Amount to be withdrawn
- `recipientToWithdraw` (address): Recipient of the withdrawal
- `timeToWithdrawal` (uint256): Expiration timestamp of the proposal

## Data Structures

### OrderForGetter
```solidity
struct OrderForGetter {
    uint256 marketId;
    uint256 orderId;
    address seller;
    uint256 amountA;
    uint256 amountB;
}
```

### Order
```solidity
struct Order {
    address seller;
    uint256 amountA;
    uint256 amountB;
}
```

### MarketInformation
```solidity
struct MarketInformation {
    address tokenA;
    address tokenB;
    uint256 maxSlot;
    uint256 ordersAvailable;
}
```

### Percentage
```solidity
struct Percentage {
    uint256 seller;
    uint256 service;
    uint256 mateStaker;
}
```

## Usage Examples

### Finding and Browsing Orders

```solidity
// Find USDC/ETH market
uint256 marketId = p2pSwap.findMarket(usdcAddress, ethAddress);

if (marketId != 0) {
    // Get all orders in this market
    OrderForGetter[] memory orders = p2pSwap.getAllMarketOrders(marketId);
    
    // Check market statistics
    MarketInformation memory marketInfo = p2pSwap.getMarketMetadata(marketId);
    
    // Get specific order details
    Order memory specificOrder = p2pSwap.getOrder(marketId, 1);
}
```

### Checking User Activity

```solidity
// Check if user has orders in a market
OrderForGetter[] memory userOrders = p2pSwap.getMyOrdersInSpecificMarket(
    userAddress, 
    marketId
);

// Verify nonce hasn't been used
bool nonceUsed = p2pSwap.checkIfANonceP2PSwapIsUsed(userAddress, 42);
```

### Monitoring Contract State

```solidity
// Check contract's token balances
uint256 ethBalance = p2pSwap.getBalanceOfContract(ethAddress);
uint256 usdcBalance = p2pSwap.getBalanceOfContract(usdcAddress);

// Get current fee configuration
uint256 currentFee = p2pSwap.getPercentageFee();
Percentage memory feeDistribution = p2pSwap.getRewardPercentage();
```

These getter functions provide complete visibility into the P2P Swap marketplace, enabling users, applications, and administrators to make informed decisions and monitor system state effectively.

---

## Administrative Functions(13-P2PSwap)


The P2P Swap Contract implements a comprehensive administrative system with time-delayed governance, secure owner management, and flexible configuration options. All administrative changes follow a proposal-acceptance pattern with mandatory waiting periods for security.

## Owner Management

### proposeOwner

**Function Signature**: `proposeOwner(address _owner)`

Proposes a new contract owner with a 1-day acceptance window.

**Access**: Current owner only  
**Parameters:**
- `_owner` (address): Address of the proposed new owner

**Process:**
1. Sets `owner_proposal` to the new address
2. Sets `owner_timeToAccept` to `block.timestamp + 1 days`
3. Proposed owner has 24 hours to accept

### acceptOwner

**Function Signature**: `acceptOwner()`

Accepts the owner proposal and transfers ownership.

**Access**: Proposed owner only, within acceptance window  
**Requirements:**
- Must be called by the proposed owner
- Must be within the 1-day acceptance window

**Process:**
1. Transfers ownership to the proposed owner
2. Clears the proposal state

### rejectProposeOwner

**Function Signature**: `rejectProposeOwner()`

Rejects the owner proposal.

**Access**: Proposed owner only, within acceptance window  
**Process:**
1. Clears the owner proposal
2. Cancels the ownership transfer

## Fee Configuration Management

### Proportional Fee Management

#### proposeFillPropotionalPercentage

**Function Signature**: `proposeFillPropotionalPercentage(uint256 _seller, uint256 _service, uint256 _mateStaker)`

Proposes new fee distribution percentages for proportional fee model.

**Access**: Owner only  
**Parameters:**
- `_seller` (uint256): Percentage for sellers (basis points)
- `_service` (uint256): Percentage for service treasury (basis points)
- `_mateStaker` (uint256): Percentage for MATE stakers (basis points)

**Requirements:**
- Total must equal 10,000 (100%)
- 1-day waiting period before acceptance

#### acceptFillPropotionalPercentage

**Function Signature**: `acceptFillPropotionalPercentage()`

Accepts the proposed proportional fee distribution.

**Access**: Owner only, within acceptance window

#### rejectProposeFillPropotionalPercentage

**Function Signature**: `rejectProposeFillPropotionalPercentage()`

Rejects the proposed proportional fee distribution.

**Access**: Owner only, within acceptance window

### Fixed Fee Management

#### proposeFillFixedPercentage

**Function Signature**: `proposeFillFixedPercentage(uint256 _seller, uint256 _service, uint256 _mateStaker)`

Proposes new fee distribution percentages for fixed fee model.

**Access**: Owner only  
**Parameters:** Same as proportional fee management  
**Requirements:** Same validation rules apply

#### acceptFillFixedPercentage / rejectProposeFillFixedPercentage

Similar pattern to proportional fee management functions.

### Base Fee Rate Management

#### proposePercentageFee

**Function Signature**: `proposePercentageFee(uint256 _percentageFee)`

Proposes a new base percentage fee rate.

**Access**: Owner only  
**Parameters:**
- `_percentageFee` (uint256): New fee percentage in basis points (e.g., 500 = 5%)

#### acceptPercentageFee / rejectProposePercentageFee

Standard proposal-acceptance pattern with 1-day delay.

### Fixed Fee Limit Management

#### proposeMaxLimitFillFixedFee

**Function Signature**: `proposeMaxLimitFillFixedFee(uint256 _maxLimitFillFixedFee)`

Proposes a new maximum limit for fixed fees.

**Access**: Owner only  
**Parameters:**
- `_maxLimitFillFixedFee` (uint256): New maximum fee limit in token units

#### acceptMaxLimitFillFixedFee / rejectProposeMaxLimitFillFixedFee

Standard proposal-acceptance pattern with 1-day delay.

## Treasury Management

### proposeWithdrawal

**Function Signature**: `proposeWithdrawal(address _tokenToWithdraw, uint256 _amountToWithdraw, address _to)`

Proposes withdrawal of accumulated fees from the contract treasury.

**Access**: Owner only  
**Parameters:**
- `_tokenToWithdraw` (address): Token to withdraw
- `_amountToWithdraw` (uint256): Amount to withdraw
- `_to` (address): Recipient address

**Requirements:**
- Amount must not exceed contract balance for the token
- 1-day waiting period before execution

### acceptWithdrawal

**Function Signature**: `acceptWithdrawal()`

Executes the proposed withdrawal.

**Access**: Owner only, within acceptance window  
**Process:**
1. Transfers tokens to the specified recipient
2. Updates contract balance tracking
3. Clears withdrawal proposal state

### rejectProposeWithdrawal

**Function Signature**: `rejectProposeWithdrawal()`

Cancels the proposed withdrawal.

**Access**: Owner only, within acceptance window

## Staking Management

### stake

**Function Signature**: `stake(uint256 amount)`

Stakes MATE tokens on behalf of the contract.

**Access**: Owner only  
**Parameters:**
- `amount` (uint256): Number of staking tokens to purchase

**Requirements:**
- Contract must have sufficient MATE token balance
- Uses current staking price from Staking contract

**Process:**
1. Calculates required MATE tokens (amount × staking price)
2. Calls internal `_makeStakeService` function
3. Contract becomes a service staker

### unstake

**Function Signature**: `unstake(uint256 amount)`

Unstakes MATE tokens from the contract's staking position.

**Access**: Owner only  
**Parameters:**
- `amount` (uint256): Number of staking tokens to unstake

**Process:**
1. Calls internal `_makeUnstakeService` function
2. Follows standard unstaking procedures and timelock

## Balance Management

### addBalance

**Function Signature**: `addBalance(address _token, uint256 _amount)`

Manually adjusts contract balance tracking for a specific token.

**Access**: Owner only  
**Parameters:**
- `_token` (address): Token address
- `_amount` (uint256): Amount to add to balance tracking

**Use Cases:**
- Correcting balance discrepancies
- Accounting for direct token transfers
- Administrative balance adjustments

## Security Features

### Time-Delayed Execution

All administrative changes follow a mandatory 1-day delay pattern:

1. **Proposal Phase**: Owner proposes changes
2. **Waiting Period**: 24-hour delay for transparency
3. **Execution Window**: Limited time to accept or reject
4. **Automatic Expiry**: Proposals expire if not acted upon

### Access Control

- **Owner-Only Functions**: Most administrative functions restricted to contract owner
- **Proposal-Specific Access**: Some functions require being the proposed party
- **Time Window Validation**: All time-sensitive functions validate execution windows

### Validation Checks

- **Balance Verification**: Withdrawal amounts validated against actual balances
- **Percentage Validation**: Fee percentages must sum to exactly 100%
- **Address Validation**: Non-zero address requirements where applicable

## Administrative Workflow Examples

### Changing Fee Structure

```solidity
// 1. Owner proposes new fee distribution (60% seller, 30% service, 10% stakers)
p2pSwap.proposeFillPropotionalPercentage(6000, 3000, 1000);

// 2. Wait 24 hours

// 3. Owner accepts the change
p2pSwap.acceptFillPropotionalPercentage();
```

### Treasury Withdrawal

```solidity
// 1. Owner proposes withdrawal of 100 USDC to treasury address
p2pSwap.proposeWithdrawal(usdcAddress, 100000000, treasuryAddress);

// 2. Wait 24 hours

// 3. Owner executes withdrawal
p2pSwap.acceptWithdrawal();
```

### Owner Transfer

```solidity
// 1. Current owner proposes new owner
p2pSwap.proposeOwner(newOwnerAddress);

// 2. New owner accepts within 24 hours
// (called by newOwnerAddress)
p2pSwap.acceptOwner();
```

## Emergency Procedures

### Proposal Cancellation

Any pending proposal can be cancelled by the appropriate party:
- Owner proposals: Can be rejected by proposed owner
- Administrative proposals: Can be rejected by current owner

### Time Window Management

- All proposals have exactly 24-hour acceptance windows
- Expired proposals must be re-proposed
- No emergency override mechanisms (by design)

The administrative system balances operational flexibility with security through mandatory delays, ensuring all stakeholders have visibility into proposed changes before they take effect.

---

## EVVM Frontend Tooling


The EVVM Signature Constructor Frontend provides a comprehensive web application infrastructure for constructing, signing, and executing EVVM transactions. Built on Next.js with TypeScript, it implements the complete EIP-191 signature specification and transaction lifecycle management for the EVVM ecosystem.

This frontend infrastructure directly supports the transaction process described in [Process of a Transaction](./03-ProcessOfATransaction.md) by providing user interfaces for transaction creation, EIP-191 signing, and fisher interaction through various fishing spots.

### Deployed Frontend
If you want to test the deployed contracts you can use this
[live version](https://evvm.dev/)

## Quick Start

### Prerequisites

Before using the EVVM Signature Constructor Frontend, ensure you have:

- A deployed EVVM instance (follow the [QuickStart](./02-QuickStart.md) guide)
- A compatible wallet (MetaMask, WalletConnect-compatible wallets)
- Access to supported networks (Sepolia or Arbitrum Sepolia for testnet)

### Setup and Installation

```bash
# Clone the frontend repository
git clone https://github.com/EVVM-org/EVVM-Signature-Constructor-Front
cd EVVM-Signature-Constructor-Front

# Install dependencies
npm install
# or
pnpm install

# Configure environment
cp .env.example .env
# Add your Reown Project ID from https://cloud.reown.com
echo "NEXT_PUBLIC_PROJECT_ID=your_project_id_here" >> .env

# Run development server
npm run dev
# or
pnpm dev
```

### Basic Usage

1. **Connect Wallet**: Click the connect button and select your wallet
2. **Choose Function Type**: Select from available transaction types:
   - **Faucet Functions**: Get testnet tokens (testnet only)
   - **Payment Signatures**: Single and batch payments
   - **Staking Signatures**: Staking operations
   - **Name Service Signatures**: Username and metadata operations
3. **Fill Parameters**: Enter transaction parameters in the forms
4. **Sign Transaction**: Generate EIP-191 signatures
5. **Execute Transaction**: Submit to fishers for processing

For detailed deployment and EVVM setup, refer to the [QuickStart](./02-QuickStart.md) documentation.

---

## Infrastructure Overview

The frontend application serves as a critical infrastructure component that bridges user interactions with the EVVM protocol through standardized signature construction and transaction execution pipelines. It implements the complete transaction lifecycle from the [EVVM transaction process](./03-ProcessOfATransaction.md), enabling users to interact with the abstract blockchain infrastructure without managing traditional blockchain complexity.

### Core Architecture

```
EVVM-Signature-Constructor-Front/
├── public/                         # Static assets and branding
├── src/
│   ├── app/                        # Next.js application layer
│   │   ├── layout.tsx              # Application shell and providers
│   │   ├── page.tsx                # Main application entry point
│   │   ├── globals.css             # Global styling framework
│   │   └── fonts/                  # Typography assets
│   ├── components/                 # React component library
│   │   ├── ConnectButton.tsx       # Wallet connection interface
│   │   ├── ActionButtonList.tsx    # Action dispatch interface
│   │   ├── InfoList.tsx            # Account information display
│   │   └── SigConstructors/        # Signature construction modules
│   │       ├── SigMenu.tsx         # Navigation and routing logic
│   │       ├── FaucetFunctions/    # Testnet token distribution
│   │       ├── PaymentFunctions/   # Payment signature construction
│   │       ├── StakingFunctions/   # Staking operation signatures
│   │       ├── NameServiceFunctions/   # Name service signatures
│   │       └── InputsAndModules/   # Reusable UI components
│   ├── config/                     # Application configuration
│   │   └── index.ts                # Wagmi and network configuration
│   ├── constants/                  # Protocol constants and ABIs
│   │   ├── address.tsx             # Contract address registry
│   │   └── abi/                    # Smart contract interfaces
│   │       ├── Evvm.json           # Core EVVM contract ABI
│   │       ├── NameService.json    # Name service contract ABI
│   │       ├── Staking.json        # Staking contract ABI
│   │       └── Estimator.json      # Fee estimation contract ABI
│   ├── context/                    # React context providers
│   │   └── index.tsx               # Application state management
│   ├── hooks/                      # Custom React hooks
│   │   └── useClientMount.ts       # Client-side mounting logic
│   └── utils/                      # Core utility libraries
│       ├── SignatureBuilder/       # EIP-191 signature construction
│       ├── TransactionExecuter/    # Smart contract interaction
│       ├── TransactionVerify/      # Pre-execution validation
│       ├── TypeInputStructures/    # TypeScript type definitions
│       └── [utility functions]     # Supporting utilities
├── docs/                           # Documentation
├── package.json                    # Dependency management
├── tsconfig.json                   # TypeScript configuration
├── next.config.ts                  # Next.js configuration
├── .eslintrc.json                  # Code quality configuration
└── .env.example                    # Environment template
```

### Technology Stack

**Core Framework:**
- Next.js 15.3.0 with App Router architecture
- React 19.0.0 with modern concurrent features
- TypeScript 5 for type safety and developer experience

**Blockchain Integration:**
- Wagmi 2.12.31 for Ethereum wallet integration
- Viem 2.21.44 for low-level blockchain interactions
- Reown AppKit 1.7.5 for wallet connection management

**State Management:**
- TanStack Query 5.59.20 for server state management
- React Context for application state
- Cookie storage for session persistence

**Development Tools:**
- ESLint for code quality enforcement
- TypeScript strict mode for type safety
- Next.js development tools for debugging

---

## Signature Construction Infrastructure

The application implements the complete EIP-191 signature specification as defined in the EVVM Signature Structures documentation section. All signature construction follows the standardized message formats for cryptographic security and replay protection, ensuring compatibility with the fisher-based validation system described in [Process of a Transaction](./03-ProcessOfATransaction.md).

### EIP-191 Implementation

The frontend implements the exact EIP-191 signature specification as documented in the Signature Structures section, with function selectors and message construction matching the protocol requirements precisely.

```typescript
// Core signature construction pattern
const constructMessage = (
  functionSelector: string,
  ...parameters: string[]
): string => {
  return [functionSelector, ...parameters].join(',');
};

// Example: Single payment signature
const buildMessageSignedForPay = (
  from: string,
  to_address: string,
  to_identity: string,
  token: string,
  amount: string,
  priorityFee: string,
  nonce: string,
  priority: boolean,
  executor: string
): string => {
  const priorityFlag = priority ? "f4e1895b" : "4faa1fa2";
  const recipient = to_address === "0x0000000000000000000000000000000000000000" 
    ? to_identity 
    : to_address;
    
  return constructMessage(
    priorityFlag,
    recipient,
    token,
    amount,
    priorityFee,
    nonce,
    priority.toString(),
    executor
  );
};
```

### Signature Builder Hooks

The application provides specialized React hooks for each transaction type, implementing the exact signature structures defined in the protocol specification.

#### EVVM Payment Signatures

The payment signature implementation follows the exact specifications from [Single Payment Signature Structure](./09-SignatureStructures/01-EVVM/01-SinglePaymentSignatureStructure.md) and [Disperse Payment Signature Structure](./09-SignatureStructures/01-EVVM/02-DispersePaySignatureStructure.md).

```typescript
export const useEVVMSignatureBuilder = () => {
  const { signMessage } = useSignMessage();
  
  const signPay = (
    amount: string,
    to: string,
    tokenAddress: string,
    priorityFee: string,
    nonce: string,
    priority: boolean,
    executor: string,
    onSuccess: (signature: string) => void,
    onError: (error: Error) => void
  ) => {
    const message = buildMessageSignedForPay(
      // Message construction parameters
    );
    
    signMessage({ message }, {
      onSuccess: (signature) => onSuccess(signature),
      onError: (error) => onError(error)
    });
  };
  
  const signDispersePay = (
    toData: DispersePayMetadata[],
    tokenAddress: string,
    amount: string,
    priorityFee: string,
    nonce: string,
    priority: boolean,
    executor: string,
    onSuccess: (signature: string) => void,
    onError: (error: Error) => void
  ) => {
    const message = buildMessageSignedForDispersePay(
      // Disperse payment construction parameters
    );
    
    signMessage({ message }, {
      onSuccess: (signature) => onSuccess(signature),
      onError: (error) => onError(error)
    });
  };
  
  return { signPay, signDispersePay };
};
```

#### Name Service Signatures

The Name Service signature implementation follows the exact specifications from the [Name Service Signature Structures](./09-SignatureStructures/02-NameService/01-preRegistrationUsernameStructure.md), implementing all functions including pre-registration, registration, offers, and metadata management.

```typescript
export const useNameServiceSignatureBuilder = () => {
  const { signMessage } = useSignMessage();
  
  // Pre-registration signature (Function Selector: 5d232a55)
  // Implements the exact structure from PreRegistrationUsernameStructure documentation
  const signPreRegistrationUsername = (
    hashUsername: string,
    nameServiceNonce: string,
    onSuccess: (signature: string) => void,
    onError: (error: Error) => void
  ) => {
    const message = constructMessage(
      "5d232a55",
      hashUsername,
      nameServiceNonce
    );
    
    signMessage({ message }, { onSuccess, onError });
  };
  
  // Registration signature (Function Selector: a5ef78b2)
  // Implements the exact structure from RegistrationUsernameStructure documentation
  const signRegistrationUsername = (
    username: string,
    clowNumber: string,
    nameServiceNonce: string,
    onSuccess: (signature: string) => void,
    onError: (error: Error) => void
  ) => {
    const message = constructMessage(
      "a5ef78b2",
      username,
      clowNumber,
      nameServiceNonce
    );
    
    signMessage({ message }, { onSuccess, onError });
  };
  
  return { 
    signPreRegistrationUsername,
    signRegistrationUsername,
    // ... other name service signatures
  };
};
```

#### Staking Signatures

The Staking signature implementation follows the specifications from [Staking Signature Structures](./09-SignatureStructures/03-Staking/01-StandardStakingStructure.md), supporting all staking operations including golden staking, presale staking, and public staking functions.

```typescript
export const useStakingSignatureBuilder = () => {
  const { signMessage } = useSignMessage();
  
  // Standard staking signature construction
  const signStaking = (
    stakingType: string,
    amount: string,
    stakingNonce: string,
    additionalData: string,
    onSuccess: (signature: string) => void,
    onError: (error: Error) => void
  ) => {
    const functionSelector = getFunctionSelectorForStaking(stakingType);
    const message = constructMessage(
      functionSelector,
      amount,
      stakingNonce,
      additionalData
    );
    
    signMessage({ message }, { onSuccess, onError });
  };
  
  return { signStaking };
};
```

---

## Transaction Execution Infrastructure

The transaction execution layer provides standardized interfaces for interacting with EVVM smart contracts using the constructed signatures. This implementation directly supports the execution phase described in [Process of a Transaction](./03-ProcessOfATransaction.md), where fishers execute validated transactions and distribute rewards.

### Contract Interaction Patterns

```typescript
// Generic transaction execution pattern
const executeTransaction = async (
  contractAddress: `0x${string}`,
  abi: any[],
  functionName: string,
  args: any[],
  config: Config
): Promise<void> => {
  try {
    const result = await writeContract(config, {
      abi,
      address: contractAddress,
      functionName,
      args
    });
    
    return result;
  } catch (error) {
    throw new Error(`Transaction execution failed: ${error.message}`);
  }
};

// EVVM payment execution
// Supports both staker and non-staker payment functions as defined in EVVM Core
export const executePay = async (
  inputData: PayInputData,
  evvmAddress: `0x${string}`,
  asStaker: boolean
): Promise<void> => {
  // Function name selection follows EVVM Core contract specifications
  // payMateStaking_* for stakers, payNoMateStaking_* for non-stakers
  // _async for priority transactions, _sync for standard processing
  const functionName = inputData.priority
    ? (asStaker ? "payMateStaking_async" : "payNoMateStaking_async")
    : (asStaker ? "payMateStaking_sync" : "payNoMateStaking_sync");
    
  return executeTransaction(
    evvmAddress,
    EvvmABI.abi,
    functionName,
    [
      inputData.from,
      inputData.to_address,
      inputData.to_identity,
      inputData.token,
      inputData.amount,
      inputData.priorityFee,
      inputData.nonce,
      inputData.executor,
      inputData.signature
    ],
    config
  );
};
```

### Type System Infrastructure

The application implements comprehensive TypeScript types that correspond exactly to the smart contract interfaces and signature requirements defined in the EVVM protocol documentation.

```typescript
// Core EVVM transaction types
interface PayInputData {
  from: `0x${string}`;
  to_address: `0x${string}`;
  to_identity: string;
  token: `0x${string}`;
  amount: bigint;
  priorityFee: bigint;
  nonce: bigint;
  priority: boolean;
  executor: string;
  signature: string;
}

interface DispersePayMetadata {
  amount: bigint;
  to_address: `0x${string}`;
  to_identity: string;
}

interface DispersePayInputData {
  from: `0x${string}`;
  toData: DispersePayMetadata[];
  token: `0x${string}`;
  amount: bigint;
  priorityFee: bigint;
  priority: boolean;
  nonce: bigint;
  executor: string;
  signature: string;
}

// Name Service transaction types
interface PreRegistrationUsernameInputData {
  user: `0x${string}`;
  hashUsername: string;
  nameServiceNonce: bigint;
  signature: string;
}

interface RegistrationUsernameInputData {
  user: `0x${string}`;
  username: string;
  clowNumber: bigint;
  nameServiceNonce: bigint;
  signature: string;
}

// Staking transaction types
interface StakingInputData {
  user: `0x${string}`;
  amount: bigint;
  stakingNonce: bigint;
  additionalData: string;
  signature: string;
}
```

---

## Network Configuration Infrastructure

The application supports multiple blockchain networks with configurable contract addresses and network parameters. The supported networks align with the EVVM deployment strategy described in [QuickStart](./02-QuickStart.md).

### Network Registry

```typescript
// Network configuration
export const networks = [
  sepolia,          // Ethereum Sepolia Testnet
  arbitrumSepolia   // Arbitrum Sepolia Testnet
] as [AppKitNetwork, ...AppKitNetwork[]];

// Contract address registry by network
export const contractAddress = {
  11155111: {  // Sepolia
    evvm: "0x5c66EB3CAAD38851C9c6291D77510b0Eaa8B3c84",
    nameService: "0x7F41487e77D092BA53c980171C4ebc71d68DC5AE",
    staking: "0x0fb1aD66636411bB50a33458a8De6507D9b270E8",
    estimator: "0xF66464ccf2d0e56DFA15572c122C6474B0A1c82C"
  },
  421614: {    // Arbitrum Sepolia
    evvm: "0xaBee6F8014468e88035041E94d530838d2ce025C",
    nameService: "0xfd54B984637AC288B8bd24AD0915Ef6fBaEA5400",
    staking: "0xb39a3134D1714AcFa6d0Bc3C9235C09918bbe2a6",
    estimator: "0xA319d1Ba0Eb0bd8aaeb7Fe931F3Ef70383fAA3A5"
  }
};

// Token address constants matching EVVM protocol specifications
// MATE token uses address 0x0000000000000000000000000000000000000001
// ETH uses zero address as per EVVM conventions
export const tokenAddress = {
  mate: "0x0000000000000000000000000000000000000001",
  ether: "0x0000000000000000000000000000000000000000"
};
```

### Wagmi Configuration

```typescript
// Wagmi adapter configuration for SSR compatibility
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;
```

---

## User Interface Architecture

The UI layer provides modular components for each transaction type, following the signature structure specifications exactly.

### Component Architecture Pattern

```typescript
// Generic signature constructor component pattern
interface SignatureConstructorProps {
  title: string;
  functionSelector: string;
  onSignatureComplete: (signature: string, data: any) => void;
  onExecutionComplete: () => void;
}

const SignatureConstructorComponent: React.FC<SignatureConstructorProps> = ({
  title,
  functionSelector,
  onSignatureComplete,
  onExecutionComplete
}) => {
  const [formData, setFormData] = useState({});
  const [signedData, setSignedData] = useState(null);
  
  const handleSignature = async () => {
    // Construct signature using appropriate builder
    // Call onSignatureComplete with results
  };
  
  const handleExecution = async () => {
    // Execute transaction using signed data
    // Call onExecutionComplete on success
  };
  
  return (
    
      {title}
      {/* Form inputs for transaction parameters */}
      <button onClick={handleSignature}>Sign Transaction</button>
      {signedData && (
        <button onClick={handleExecution}>Execute Transaction</button>
      )}
    
  );
};
```

### Input Validation Infrastructure

```typescript
// Address validation
const validateEthereumAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

// Amount validation
const validateAmount = (amount: string): boolean => {
  try {
    const parsed = BigInt(amount);
    return parsed > 0n;
  } catch {
    return false;
  }
};

// Nonce validation
const validateNonce = (nonce: string): boolean => {
  try {
    const parsed = BigInt(nonce);
    return parsed >= 0n;
  } catch {
    return false;
  }
};
```

---

## Error Handling and Resilience

The infrastructure implements comprehensive error handling and retry mechanisms for robust operation in production environments.

### Retry Mechanisms

```typescript
// Account retrieval with retry
export const getAccountWithRetry = async (
  config: Config, 
  maxRetries: number = 3,
  delay: number = 1000
): Promise<GetAccountReturnType | null> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const account = getAccount(config);
      if (account.address) {
        return account;
      }
    } catch (error) {
      console.warn(`Account retrieval attempt ${attempt} failed:`, error);
      
      if (attempt === maxRetries) {
        console.error("Max retries reached for account retrieval");
        return null;
      }
      
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  return null;
};

// Transaction execution with retry
const executeTransactionWithRetry = async (
  transactionFn: () => Promise<any>,
  maxRetries: number = 3
): Promise<any> => {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await transactionFn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      
      const delay = Math.pow(2, attempt) * 1000; // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};
```

### Error Classification

```typescript
// Error types for proper handling
enum TransactionErrorType {
  USER_REJECTED = "USER_REJECTED",
  INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS",
  NETWORK_ERROR = "NETWORK_ERROR",
  CONTRACT_ERROR = "CONTRACT_ERROR",
  SIGNATURE_ERROR = "SIGNATURE_ERROR"
}

const classifyError = (error: any): TransactionErrorType => {
  if (error.code === 4001) return TransactionErrorType.USER_REJECTED;
  if (error.message?.includes("insufficient funds")) return TransactionErrorType.INSUFFICIENT_FUNDS;
  if (error.message?.includes("network")) return TransactionErrorType.NETWORK_ERROR;
  if (error.message?.includes("execution reverted")) return TransactionErrorType.CONTRACT_ERROR;
  return TransactionErrorType.SIGNATURE_ERROR;
};
```

---

## Development and Deployment Infrastructure

### Build Configuration

```typescript
// Next.js configuration for production optimization
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  experimental: {
    optimizeCss: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default nextConfig;
```

### Environment Configuration

```bash
# Production environment variables
NEXT_PUBLIC_PROJECT_ID=your_production_project_id
NEXT_PUBLIC_ENVIRONMENT=production
NEXT_PUBLIC_NETWORK_MODE=mainnet
```

### Deployment Pipeline

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "type-check": "tsc --noEmit",
    "test": "jest",
    "test:e2e": "playwright test"
  }
}
```

---

## Integration Patterns

### API Integration

```typescript
// External service integration pattern
interface ExternalServiceConfig {
  baseUrl: string;
  apiKey: string;
  timeout: number;
}

class EVVMServiceClient {
  constructor(private config: ExternalServiceConfig) {}
  
  async validateTransaction(transactionData: any): Promise<boolean> {
    // Validate transaction against external service
  }
  
  async estimateFees(transactionType: string, amount: bigint): Promise<bigint> {
    // Get fee estimation from external service
  }
}
```

### Monitoring Integration

```typescript
// Transaction monitoring
const monitorTransaction = async (
  txHash: string,
  onUpdate: (status: TransactionStatus) => void
) => {
  const receipt = await waitForTransaction({
    hash: txHash,
    confirmations: 2
  });
  
  onUpdate({
    status: receipt.status === "success" ? "confirmed" : "failed",
    blockNumber: receipt.blockNumber,
    gasUsed: receipt.gasUsed
  });
};
```

---

### Security Considerations

The frontend implements multiple security layers as required by the EVVM ecosystem:

### Signature Security

- All signatures implement EIP-191 standard for security as specified in Signature Structures section
- Nonce-based replay protection for all transaction types following EVVM protocol requirements
- Function selector validation for transaction integrity
- Message format validation before signing ensures compatibility with fisher validation

### Input Sanitization

- Address validation using regex patterns
- Amount validation with BigInt conversion
- Nonce validation for sequential integrity
- String sanitization for identity fields

### Session Management

- Cookie-based session persistence with security flags
- Wallet connection state management
- Automatic session cleanup on disconnect

---

## Performance Optimization

### Code Splitting

```typescript
// Dynamic imports for large components
const PaymentComponent = dynamic(
  () => import('./PaymentFunctions/PaySignaturesComponent'),
  { loading: () => Loading payment interface... }
);

const StakingComponent = dynamic(
  () => import('./StakingFunctions/GoldenStakingComponent'),
  { loading: () => Loading staking interface... }
);
```

### Caching Strategy

```typescript
// React Query configuration for optimal caching
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
    },
  },
});
```

---

## Extension and Customization

### Adding New Transaction Types

1. **Define Type Structure:**
```typescript
// Add to TypeInputStructures
interface CustomTransactionData {
  customField: string;
  amount: bigint;
  nonce: bigint;
  signature: string;
}
```

2. **Implement Signature Builder:**
```typescript
// Add to SignatureBuilder
const signCustomTransaction = (data: CustomTransactionParams, onSuccess, onError) => {
  const message = constructMessage(
    "custom_selector",
    data.customField,
    data.amount.toString(),
    data.nonce.toString()
  );
  
  signMessage({ message }, { onSuccess, onError });
};
```

3. **Create UI Component:**
```typescript
// Add to SigConstructors
export const CustomTransactionComponent = () => {
  // Implementation following established patterns
};
```

4. **Add Transaction Executor:**
```typescript
// Add to TransactionExecuter
export const executeCustomTransaction = async (
  inputData: CustomTransactionData,
  contractAddress: `0x${string}`
) => {
  return executeTransaction(
    contractAddress,
    CustomContractABI.abi,
    "customFunction",
    [inputData.customField, inputData.amount, inputData.nonce, inputData.signature],
    config
  );
};
```

### Network Extension

```typescript
// Add new network support

export const networks = [
  sepolia,
  arbitrumSepolia,
  polygon,    // New network
  bsc         // New network
];

// Update contract addresses
const contractAddress = {
  // ... existing networks
  137: {      // Polygon Mainnet
    evvm: "0x...",
    nameService: "0x...",
    staking: "0x...",
    estimator: "0x..."
  },
  56: {       // BSC Mainnet
    evvm: "0x...",
    nameService: "0x...",
    staking: "0x...",
    estimator: "0x..."
  }
};
```

---

## Documentation and Maintenance

### Code Documentation Standards

```typescript
/**
 * Constructs and signs an EVVM payment transaction
 * 
 * @param amount - Payment amount in token units
 * @param to - Recipient address or identity string
 * @param tokenAddress - Token contract address
 * @param priorityFee - Priority fee for transaction processing
 * @param nonce - Unique nonce for replay protection
 * @param priority - Priority flag for async/sync processing
 * @param executor - Executor address for transaction execution
 * @param onSuccess - Success callback with signature
 * @param onError - Error callback with error details
 * 
 * @example
 * ```typescript
 * signPay(
 *   "1000000000000000000", // 1 token
 *   "0x123...",            // Recipient address
 *   "0x000...001",         // MATE token
 *   "100000000000000",     // Priority fee
 *   "12345",               // Nonce
 *   true,                  // High priority
 *   "0x000...000",         // No executor
 *   (signature) => console.log("Signed:", signature),
 *   (error) => console.error("Error:", error)
 * );
 * ```
 */
const signPay = (/* parameters */) => {
  // Implementation
};
```

### Testing Infrastructure

```typescript
// Unit test example
describe('SignatureBuilder', () => {
  describe('buildMessageSignedForPay', () => {
    it('should construct correct message format for high priority payment', () => {
      const message = buildMessageSignedForPay(
        "0x1234567890123456789012345678901234567890",
        "0x0987654321098765432109876543210987654321",
        "",
        "0x0000000000000000000000000000000000000001",
        "1000000000000000000",
        "100000000000000",
        "12345",
        true,
        "0x0000000000000000000000000000000000000000"
      );
      
      expect(message).toBe(
        "f4e1895b,0x0987654321098765432109876543210987654321,0x0000000000000000000000000000000000000001,1000000000000000000,100000000000000,12345,true,0x0000000000000000000000000000000000000000"
      );
    });
  });
});
```

---

## References and Related Documentation

### EVVM Core Documentation
- [Introduction](./intro) - EVVM abstract blockchain overview
- [QuickStart](./02-QuickStart.md) - Deploy your EVVM instance
- [Process of a Transaction](./03-ProcessOfATransaction.md) - Complete transaction lifecycle
- [EVVM Core Contract](./04-EVVM/01-Introduction.md) - Payment processing and token management

### Service Documentation
- [Staking System](./05-Staking/01-Introduction.md) - Staking infrastructure and rewards
- [Name Service](./06-NameService/01-Introduction.md) - Username and identity management
- [Treasury System](./07-Treasury/01-Introduction.md) - Cross-chain operations and bridging

### Development Resources
- [How to Create an EVVM Service](./08-HowToMakeAEVVMService.md) - Service development guide
- [Testnet Functions](./10-TestnetExclusiveFunctions.md) - Testing and faucet functions

### External Libraries
- [Wagmi Documentation](https://wagmi.sh/) - React hooks for Ethereum
- [Viem Documentation](https://viem.sh/) - TypeScript Ethereum client
- [Reown AppKit](https://docs.reown.com/appkit/overview) - Wallet connection infrastructure
- [Next.js Documentation](https://nextjs.org/docs) - React framework
- [EIP-191 Specification](https://eips.ethereum.org/EIPS/eip-191) - Signed message standard

---

This infrastructure documentation provides comprehensive technical details for developers implementing, extending, or integrating with the EVVM Signature Constructor Frontend. The modular architecture ensures maintainability and extensibility while adhering to the EVVM protocol specifications for secure transaction processing.

---

## Make Order Signature Structure


To authorize order creation operations, users must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. The message is constructed by concatenating the EVVM ID, action type, and parameters, then wrapped with the EIP-191 prefix: `"\x19Ethereum Signed Message:\n"` + message length + message content.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),        // EVVM ID as string
    "makeOrder",                     // Action type
    string.concat(                   // Concatenated parameters
        Strings.toString(_nonce),
        ",",
        AdvancedStrings.addressToString(_tokenA),
        ",",
        AdvancedStrings.addressToString(_tokenB),
        ",",
        Strings.toString(_amountA),
        ",",
        Strings.toString(_amountB)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},makeOrder,{nonce},{tokenA},{tokenB},{amountA},{amountB}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

This creates the final hash that the user must sign with their private key.

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"makeOrder"`
- *Purpose*: Identifies this as an order creation operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for the P2P Swap transaction

**3.2. Token A Address (String):**
- The result of `AdvancedStrings.addressToString(_tokenA)`
- *Purpose*: Identifies the token being offered by the order creator

**3.3. Token B Address (String):**
- The result of `AdvancedStrings.addressToString(_tokenB)`
- *Purpose*: Identifies the token being requested in exchange

**3.4. Amount A (String):**
- The result of `Strings.toString(_amountA)`
- *Purpose*: Specifies the quantity of tokenA being offered

**3.5. Amount B (String):**
- The result of `Strings.toString(_amountB)`
- *Purpose*: Specifies the quantity of tokenB being requested

## Example

Here's a practical example of constructing a signature message for creating a swap order:

**Scenario:** User wants to create an order offering 100 USDC for 0.05 ETH

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_nonce`: `15`
- `_tokenA`: `0xA0b86a33E6441e6e80D0c4C6C7527d72E1d00000` (USDC)
- `_tokenB`: `0x0000000000000000000000000000000000000000` (ETH)
- `_amountA`: `100000000` (100 USDC with 6 decimals)
- `_amountB`: `50000000000000000` (0.05 ETH in wei)

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "makeOrder", // action type
    "15,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,100000000,50000000000000000",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,makeOrder,15,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,100000000,50000000000000000
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n149",
    "1,makeOrder,15,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,100000000,50000000000000000"
))
```

**Concatenated parameters breakdown:**
1. `15` - P2P Swap nonce for replay protection
2. `0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000` - USDC token address (tokenA)
3. `0x0000000000000000000000000000000000000000` - ETH address (tokenB)
4. `100000000` - Amount of USDC being offered (100 USDC with 6 decimals)
5. `50000000000000000` - Amount of ETH being requested (0.05 ETH in wei)

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**: 
  - `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **EVVM ID**: Identifies the specific EVVM instance for signature verification
- **Nonce Purpose**: P2P Swap specific nonce prevents replay attacks within the swap system

:::

---

## Cancel Order Signature Structure


To authorize order cancellation operations, users must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. The message is constructed by concatenating the EVVM ID, action type, and parameters, then wrapped with the EIP-191 prefix.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),        // EVVM ID as string
    "cancelOrder",                   // Action type
    string.concat(                   // Concatenated parameters
        Strings.toString(_nonce),
        ",",
        AdvancedStrings.addressToString(_tokenA),
        ",",
        AdvancedStrings.addressToString(_tokenB),
        ",",
        Strings.toString(_orderId)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},cancelOrder,{nonce},{tokenA},{tokenB},{orderId}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

This creates the final hash that the user must sign with their private key.

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"cancelOrder"`
- *Purpose*: Identifies this as an order cancellation operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for the P2P Swap transaction

**3.2. Token A Address (String):**
- The result of `AdvancedStrings.addressToString(_tokenA)`
- *Purpose*: Identifies the token that was offered in the original order

**3.3. Token B Address (String):**
- The result of `AdvancedStrings.addressToString(_tokenB)`
- *Purpose*: Identifies the token that was requested in the original order

**3.4. Order ID (String):**
- The result of `Strings.toString(_orderId)`
- *Purpose*: Specifies the unique ID of the order to be cancelled

## Example

Here's a practical example of constructing a signature message for cancelling a swap order:

**Scenario:** User wants to cancel their order #3 in the USDC/ETH market

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_nonce`: `25`
- `_tokenA`: `0xA0b86a33E6441e6e80D0c4C6C7527d72E1d00000` (USDC)
- `_tokenB`: `0x0000000000000000000000000000000000000000` (ETH)
- `_orderId`: `3`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "cancelOrder", // action type
    "25,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,3",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,cancelOrder,25,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,3
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n134",
    "1,cancelOrder,25,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,3"
))
```

**Concatenated parameters breakdown:**
1. `25` - P2P Swap nonce for replay protection
2. `0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000` - USDC token address (tokenA from original order)
3. `0x0000000000000000000000000000000000000000` - ETH address (tokenB from original order)
4. `3` - Order ID to be cancelled

## Example with Different Token Pair

**Scenario:** User wants to cancel their order #7 in the MATE/USDC market

**Parameters:**
- `evvmID`: `1`
- `_nonce`: `42`
- `_tokenA`: `0x0000000000000000000000000000000000000001` (MATE)
- `_tokenB`: `0xA0b86a33E6441e6e80D0c4C6C7527d72E1d00000` (USDC)
- `_orderId`: `7`

**Final message to be signed:**
```
1,cancelOrder,42,0x0000000000000000000000000000000000000001,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,7
```

**Concatenated parameters breakdown:**
1. `42` - P2P Swap nonce
2. `0x0000000000000000000000000000000000000001` - MATE token address
3. `0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000` - USDC token address
4. `7` - Order ID to cancel

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

## Security Considerations

### Order Ownership Validation

The signature alone does not prove order ownership. The contract performs additional validation:

1. **Signature Verification**: Confirms the user signed the cancellation request
2. **Order Existence**: Verifies the order exists in the specified market
3. **Ownership Check**: Confirms the signer is the original order creator
4. **Nonce Validation**: Ensures the nonce hasn't been used before

### Market Identification

The token pair (tokenA, tokenB) must match the original order exactly:
- **Token Addresses**: Must be identical to the original order
- **Market Resolution**: Used to find the correct market for the order
- **Order Lookup**: Combined with orderId to locate the specific order

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**: 
  - `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **Order Identification**: Requires both token pair and order ID to uniquely identify the order
- **Nonce Independence**: P2P Swap nonces are separate from EVVM payment nonces

:::

---

## Dispatch Order Signature Structure


To authorize order fulfillment operations, users must generate a cryptographic signature compliant with the [EIP-191](https://eips.ethereum.org/EIPS/eip-191) standard using the Ethereum Signed Message format.

The signature verification process uses the `SignatureRecover` library which implements the standard Ethereum message signing protocol. This signature is used for both `dispatchOrder_fillPropotionalFee` and `dispatchOrder_fillFixedFee` functions.

## Signed Message Format

The signature verification uses the `SignatureRecover.signatureVerification` function with the following structure:

```solidity
SignatureRecover.signatureVerification(
    Strings.toString(evvmID),        // EVVM ID as string
    "dispatchOrder",                 // Action type
    string.concat(                   // Concatenated parameters
        Strings.toString(_nonce),
        ",",
        AdvancedStrings.addressToString(_tokenA),
        ",",
        AdvancedStrings.addressToString(_tokenB),
        ",",
        Strings.toString(_orderId)
    ),
    signature,
    signer
);
```

### Internal Message Construction

Internally, the `SignatureRecover.signatureVerification` function constructs the final message by concatenating:

```solidity
string.concat(evvmID, ",", functionName, ",", inputs)
```

This results in a message format:
```
"{evvmID},dispatchOrder,{nonce},{tokenA},{tokenB},{orderId}"
```

### EIP-191 Message Hashing

The message is then hashed according to EIP-191 standard:

```solidity
bytes32 messageHash = keccak256(
    abi.encodePacked(
        "\x19Ethereum Signed Message:\n",
        Strings.toString(bytes(message).length),
        message
    )
);
```

This creates the final hash that the user must sign with their private key.

## Message Components

The signature verification takes three main parameters:

**1. EVVM ID (String):**
- The result of `Strings.toString(evvmID)`
- *Purpose*: Identifies the specific EVVM instance

**2. Action Type (String):**
- Fixed value: `"dispatchOrder"`
- *Purpose*: Identifies this as an order fulfillment operation

**3. Concatenated Parameters (String):**
The parameters are concatenated with comma separators:

**3.1. Nonce (String):**
- The result of `Strings.toString(_nonce)`
- *Purpose*: Provides replay protection for the P2P Swap transaction

**3.2. Token A Address (String):**
- The result of `AdvancedStrings.addressToString(_tokenA)`
- *Purpose*: Identifies the token offered in the target order

**3.3. Token B Address (String):**
- The result of `AdvancedStrings.addressToString(_tokenB)`
- *Purpose*: Identifies the token requested in the target order

**3.4. Order ID (String):**
- The result of `Strings.toString(_orderId)`
- *Purpose*: Specifies the unique ID of the order to be fulfilled

## Example

Here's a practical example of constructing a signature message for fulfilling a swap order:

**Scenario:** User wants to fulfill order #3 in the USDC/ETH market (buying 100 USDC for 0.05 ETH)

**Parameters:**
- `evvmID`: `1` (EVVM instance ID)
- `_nonce`: `33`
- `_tokenA`: `0xA0b86a33E6441e6e80D0c4C6C7527d72E1d00000` (USDC - token being offered by seller)
- `_tokenB`: `0x0000000000000000000000000000000000000000` (ETH - token being requested by seller)
- `_orderId`: `3`

**Signature verification call:**
```solidity
SignatureRecover.signatureVerification(
    "1",  // evvmID as string
    "dispatchOrder", // action type
    "33,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,3",
    signature,
    signer
);
```

**Final message to be signed (after internal concatenation):**
```
1,dispatchOrder,33,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,3
```

**EIP-191 formatted message hash:**
```
keccak256(abi.encodePacked(
    "\x19Ethereum Signed Message:\n136",
    "1,dispatchOrder,33,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,0x0000000000000000000000000000000000000000,3"
))
```

**Concatenated parameters breakdown:**
1. `33` - P2P Swap nonce for replay protection
2. `0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000` - USDC token address (tokenA from target order)
3. `0x0000000000000000000000000000000000000000` - ETH address (tokenB from target order)
4. `3` - Order ID to be fulfilled

## Example with Reverse Token Pair

**Scenario:** User wants to fulfill order #12 in the ETH/USDC market (buying ETH with USDC)

**Parameters:**
- `evvmID`: `1`
- `_nonce`: `55`
- `_tokenA`: `0x0000000000000000000000000000000000000000` (ETH - offered by seller)
- `_tokenB`: `0xA0b86a33E6441e6e80D0c4C6C7527d72E1d00000` (USDC - requested by seller)
- `_orderId`: `12`

**Final message to be signed:**
```
1,dispatchOrder,55,0x0000000000000000000000000000000000000000,0xa0b86a33e6441e6e80d0c4c6c7527d72e1d00000,12
```

**Transaction Flow:**
- Buyer provides USDC (tokenB) + fees
- Buyer receives ETH (tokenA) from the order
- Seller receives USDC payment + fee bonus

## Usage in Both Dispatch Functions

This signature structure is used by both dispatch functions:

### dispatchOrder_fillPropotionalFee
- Uses the same signature verification
- Applies percentage-based fee calculation
- Distributes fees according to configured percentages

### dispatchOrder_fillFixedFee
- Uses identical signature verification
- Applies capped fee calculation with maximum limits
- Provides fee protection for large orders

## Signature Implementation Details

The `SignatureRecover` library performs signature verification in the following steps:

1. **Message Construction**: Concatenates `evvmID`, `functionName`, and `inputs` with commas
2. **EIP-191 Formatting**: Prepends `"\x19Ethereum Signed Message:\n"` + message length
3. **Hashing**: Applies `keccak256` to the formatted message
4. **Signature Parsing**: Splits the 65-byte signature into `r`, `s`, and `v` components
5. **Recovery**: Uses `ecrecover` to recover the signer's address
6. **Verification**: Compares recovered address with expected signer

### Signature Format Requirements

- **Length**: Exactly 65 bytes
- **Structure**: `[r (32 bytes)][s (32 bytes)][v (1 byte)]`
- **V Value**: Must be 27 or 28 (automatically adjusted if < 27)

## Security Considerations

### Order Validation

The signature authorizes the dispatch attempt, but the contract performs additional validation:

1. **Signature Verification**: Confirms the user signed the dispatch request
2. **Order Existence**: Verifies the order exists and is active
3. **Market Validation**: Confirms the token pair matches an existing market
4. **Nonce Validation**: Ensures the nonce hasn't been used before
5. **Payment Sufficiency**: Validates the user provided enough tokens to cover order + fees

### Token Direction Understanding

The signature includes tokenA and tokenB from the **seller's perspective**:
- **tokenA**: What the seller is offering (buyer will receive)
- **tokenB**: What the seller wants (buyer must provide)
- **Order ID**: Identifies the specific order within the market

### Fee Model Independence

The same signature works for both fee models:
- **Proportional Fee**: Percentage-based calculation
- **Fixed Fee**: Capped fee with maximum limits
- **Fee Choice**: Determined by which function is called, not the signature

:::tip Technical Details

- **Message Format**: The final message follows the pattern `"{evvmID},{functionName},{parameters}"`
- **EIP-191 Compliance**: Uses `"\x19Ethereum Signed Message:\n"` prefix with message length
- **Hash Function**: `keccak256` is used for the final message hash before signing
- **Signature Recovery**: Uses `ecrecover` to verify the signature against the expected signer
- **String Conversion**: 
  - `AdvancedStrings.addressToString` converts addresses to lowercase hex with "0x" prefix
  - `Strings.toString` converts numbers to decimal strings
- **Universal Signature**: Same signature structure works for both proportional and fixed fee dispatch functions
- **Order Identification**: Token pair and order ID uniquely identify the target order
- **Buyer Authorization**: Signature proves the buyer authorizes the specific order fulfillment

:::

---

## EVVM Noncommercial License v1.0


All source code specified as: SPDX-Identifier: EVVM-NONCOMMERCIAL-1.0 follows this license.

Other licenses are specified on a file by file basis

Copyright (c) 2025
MATE Labs Inc., a Delaware corporation ("Licensor")

EVVM is licensed under the EVVM Noncommercial License v1.0 (the "License").
You may obtain a copy of the License text in this file or at:
https://polyformproject.org/licenses/noncommercial/1.0.0/

COMMERCIAL USE OF THIS SOFTWARE REQUIRES A SEPARATE COMMERCIAL LICENSE.
For commercial licensing, please contact g@evvm.org.

--------------------------------------------------------------------------------

# PolyForm Noncommercial License 1.0.0

https://polyformproject.org/licenses/noncommercial/1.0.0

## Acceptance

In order to get any license under these terms, you must agree
to them as both strict obligations and conditions to all
your licenses.

## Copyright License

The licensor grants you a copyright license for the
software to do everything you might do with the software
that would otherwise infringe the licensor's copyright
in it for any permitted purpose.  However, you may
only distribute the software according to [Distribution
License](#distribution-license) and make changes or new works
based on the software according to [Changes and New Works
License](#changes-and-new-works-license).

## Distribution License

The licensor grants you an additional copyright license
to distribute copies of the software.  Your license
to distribute covers distributing the software with
changes and new works permitted by [Changes and New Works
License](#changes-and-new-works-license).

## Notices

You must ensure that anyone who gets a copy of any part of
the software from you also gets a copy of these terms or the
URL for them above, as well as copies of any plain-text lines
beginning with `Required Notice:` that the licensor provided
with the software.  For example:

> Required Notice: Copyright (c) 2025 MATE Labs Inc., a Delaware corporation ("Licensor")

## Changes and New Works License

The licensor grants you an additional copyright license to
make changes and new works based on the software for any
permitted purpose.

## Patent License

The licensor grants you a patent license for the software that
covers patent claims the licensor can license, or becomes able
to license, that you would infringe by using the software.

## Noncommercial Purposes

Any noncommercial purpose is a permitted purpose.

## Personal Uses

Personal use for research, experiment, and testing for
the benefit of public knowledge, personal study, private
entertainment, hobby projects, amateur pursuits, or religious
observance, without any anticipated commercial application,
is use for a permitted purpose.

## Noncommercial Organizations

Use by any charitable organization, educational institution,
public research organization, public safety or health
organization, environmental protection organization,
or government institution is use for a permitted purpose
regardless of the source of funding or obligations resulting
from the funding.

## Fair Use

You may have "fair use" rights for the software under the
law. These terms do not limit them.

## No Other Rights

These terms do not allow you to sublicense or transfer any of
your licenses to anyone else, or prevent the licensor from
granting licenses to anyone else.  These terms do not imply
any other licenses.

## Patent Defense

If you make any written claim that the software infringes or
contributes to infringement of any patent, your patent license
for the software granted under these terms ends immediately. If
your company makes such a claim, your patent license ends
immediately for work on behalf of your company.

## Violations

The first time you are notified in writing that you have
violated any of these terms, or done anything with the software
not covered by your licenses, your licenses can nonetheless
continue if you come into full compliance with these terms,
and take practical steps to correct past violations, within
32 days of receiving notice.  Otherwise, all your licenses
end immediately.

## No Liability

***As far as the law allows, the software comes as is, without
any warranty or condition, and the licensor will not be liable
to you for any damages arising out of these terms or the use
or nature of the software, under any kind of legal claim.***

## Definitions

The **licensor** is MATE Labs Inc., a Delaware corporation ("Licensor"),
and the **software** is EVVM and related components made
available under these terms.

**You** refers to the individual or entity agreeing to these
terms.

**Your company** is any legal entity, sole proprietorship,
or other kind of organization that you work for, plus all
organizations that have control over, are under the control of,
or are under common control with that organization.  **Control**
means ownership of substantially all the assets of an entity,
or the power to direct its management and policies by vote,
contract, or otherwise.  Control can be direct or indirect.

**Your licenses** are all the licenses granted to you for the
software under these terms.

**Use** means anything you do with the software requiring one
of your licenses.

--------------------------------------------------------------------------------

ADDITIONAL TERMS (Share-Alike Requirement):

1. Any modifications, enhancements, or derivative works created under non-commercial use
   must be publicly released under this same License within 90 days of creation,
   distribution, or other availability.

2. "Publicly released" requires making source code freely accessible on platforms like
   GitHub or GitLab, with clear attribution to the original work.

3. These terms supplement and do not replace any conditions in the PolyForm
   Noncommercial 1.0.0 license.

--------------------------------------------------------------------------------

DISCLAIMER OF WARRANTY:
THIS SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES, OR OTHER LIABILITY ARISING
FROM THE USE OF THIS SOFTWARE.

---

## Introduction(Docs)


## What is a Virtual Blockchain?

A virtual blockchain decouples blockchain infrastructure from physical implementation, opening possibilities that weren't viable before. Think of it as having your own blockchain without the headache of managing validators, nodes, and physical infrastructure.

EVVM enables "virtual blockchains" to live securely on top of host blockchains, like having a virtual machine (VM) for blockchains.

## Revolutionary Architecture

### Virtual Blockchain Infrastructure
- **Infrastructure Decoupling**: Separate blockchain logic from physical infrastructure requirements
- **Host Blockchain Security**: Virtual blockchains inherit security from the underlying host network
- **Zero Infrastructure Overhead**: Get blockchain benefits without managing physical infrastructure
- **Instant Deployment**: Launch blockchain environments without complex setup procedures

### Vertical Scalability
- **Multiple Virtual Blockchains**: One or several EVVMs can operate on a single host blockchain
- **Unprecedented Scaling**: Achieve incredible vertical scalability through virtualization
- **Resource Optimization**: Efficient utilization of host blockchain resources

### Gasless Communication
- **Fishing Spot System**: Any communication medium that can transmit data can serve as a fishing spot
- **Unlimited Channels**: Traditional APIs, messaging systems, radio waves, or any data transmission method
- **Flexible Input Reception**: Any medium capable of receiving and processing transaction inputs
- **Cost Elimination**: Zero gas fees for transactions transmitted through alternative communication channels

## Target Audience

### For Organizations and Protocols
EVVM enables any organization to leverage blockchain technology, including **protocols**, **enterprises**, **banks**, **public sector**, and many others:

- **Custom On-Chain Infrastructure**: Implement your own blockchain rules and optimizations
- **Blockchain-as-a-Service**: Access blockchain functionality without infrastructure management
- **Flexible Implementation**: Adapt blockchain technology to any specific requirements
- **Operational Simplicity**: Gain blockchain benefits without technical complexity

### For Developers
EVVM is your new superpower with three development approaches:

#### 1. Deploy Your Own EVVM
Create your own isolated, custom blockchain environment

#### 2. Build Within an EVVM
Collaborate in larger, existing virtual blockchain ecosystems

#### 3. Experiment Without Limits
Use EVVM as a testing ground for future technologies

### EIP Innovation Laboratory
- **Ethereum Improvement Proposal Testing**: Test cutting-edge EIPs in controlled environments
- **New Opcode Experimentation**: Experiment with new opcodes and functions
- **Real-World Validation**: Validate proposals before mainnet deployment
- **Ecosystem Acceleration**: Accelerate innovation for the entire Web3 ecosystem

## Core Ecosystem Components

### EVVM Core Contract
The central payment processing and token management hub that implements:
- **Dual-Track Payment System**: Optimized paths for stakers and non-stakers
- **Token Abstractions**: Internal token representations using EIP-191 signatures
- **Cross-Chain Integration**: Seamless asset transfers through Fisher Bridge
- **Administrative Tools**: Time-delayed governance and security controls

### Name Service
Human-readable identity system providing:
- **Username Registration**: Secure, blockchain-based identity registration
- **Custom Metadata**: Extensible metadata system for usernames
- **Payment Integration**: Username-based payments across the ecosystem
- **Administrative Governance**: Decentralized governance for system management

### Staking System
Principal token staking infrastructure featuring:
- **Reward Distribution**: Era-based rewards with deflationary mechanisms
- **Enhanced Access**: Priority processing and additional rewards for stakers
- **Fisher & Service Staking**: Both fishers and services (smart contracts) can become stakers and receive rewards for executing transactions
- **Governance Participation**: Staker involvement in system decisions
- **Cross-System Integration**: Staking benefits across all EVVM components

### Fisher Bridge
Cross-chain infrastructure enabling:
- **Multi-Chain Withdrawals**: Secure asset transfers to external blockchains
- **Operator Network**: Decentralized bridge operators with incentive systems
- **Security Limits**: Configurable withdrawal limits and safety mechanisms
- **Fee Integration**: Comprehensive fee and reward distribution system

## Key Innovations

### Token Architecture
- **Internal Abstractions**: Tokens as internal representations, not separate contracts
- **Permission-less Integration**: Services integrate without special approvals
- **Signature-Based Authorization**: EIP-191 signatures for all operations
- **Cross-Environment Compatibility**: Seamless operation across different EVVM instances

### Economic Model
- **Principal Token System**: Deflationary tokenomics with era-based transitions
- **Staker Incentives**: Enhanced rewards and priority access for token holders
- **Dynamic Fee Structure**: Market-based pricing with user control
- **Cross-Chain Economics**: Integrated economic model spanning multiple blockchains

### Security Framework
- **Cryptographic Authorization**: EIP-191 signatures for all critical operations
- **Time-Delayed Governance**: Protection against malicious changes
- **Multi-Layer Validation**: Comprehensive security across all system interactions
- **Replay Protection**: Nonce-based systems preventing duplicate transactions

## The Future of Web3

EVVM offers:
- **Custom Blockchain Environments**: Deploy tailored solutions without infrastructure overhead
- **Vertical Scalability**: Multiple abstract blockchains on single host networks
- **Gasless Communication**: Revolutionary methods eliminating gas fees for certain operations
- **Innovation Laboratory**: Real-world testing ground for Web3's future

## Get Started Today

Ready to deploy your own EVVM abstract blockchain? Our **[Quickstart Guide](./02-QuickStart.md)** provides everything you need to get up and running in minutes:

- **Interactive Setup Wizard**: Automated configuration and deployment
- **Testnet Deployment**: Deploy to Ethereum Sepolia, Arbitrum Sepolia, or custom networks
- **Complete Ecosystem**: All four core contracts deployed and verified automatically
- **Local Development**: Anvil support for local testing and development
>>>>>>> contracts-repo/main
