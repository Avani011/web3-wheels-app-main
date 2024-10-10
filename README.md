<!--
SPDX-License-Identifier: MIT
SPDX-FileCopyrightText: 2024 R. Berkay Bozkurt <resitberkaybozkurt@gmail.com>
-->
# Web3Wheels

## Description
Web3Wheels is a decentralized autonomous Uber service utilizing blockchain and AI technologies. Users can mint, own, and trade self-driving car NFTs. Real-time data and smart contracts ensure transparency, efficiency, and a seamless user experience.

## Live Demo
 App: https://web3-wheels-app.vercel.app/   
 BackendAPI: https://web3-wheels-service.vercel.app/vehicles/

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Architecture](#architecture)
- [Diagrams](#diagrams)  
- [Smart Contracts](#smart-contracts)
- [Additional Information](#additional-information)
- [Technologies](#technologies)
- [License](#license)
- [Resources](#resources)

## Installation

### Prerequisites
- MetaMask for interacting with the Ethereum blockchain.
- Remix.ethereum.org for deploying smart contracts.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/ZhectorSM/web3-wheels.git
    cd web3-wheels
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Deploy Smart Contracts using Remix:
    - Open [Remix.ethereum.org](https://remix.ethereum.org/).
    - Import the smart contract files from the `contracts` directory.
    - Compile and deploy the smart contracts using MetaMask to connect to an Ethereum testnet (e.g., Ropsten or Rinkeby).

4. Update Contract Addresses:
    - After deploying the contracts, update the contract addresses in the frontend configuration files.

5. Start the frontend application:
    ```bash
    npm start
    ```

## Usage

### Minting Cars
1. Open the application in your browser.
2. Connect your MetaMask wallet.
3. Use the interface to mint a new car NFT with 0km.

### Buying Cars
1. Browse available car NFTs in the TokenShop.
2. Purchase a car NFT using your MetaMask wallet.

### Ride Requests
1. Request a ride specifying your requirements.
2. The AI agent will match you with an available self-driving car.

## Architecture

### Overview
Web3Wheels comprises the following components:
- **Frontend**: A web application for user interaction.
- **Smart Contracts**: Manage vehicle minting NFTs, ownership, and transactions.
- **Backend**: Handles data processing and AI integration.
- **AI Module**: Autonomous decision-making for self-driving cars. Processes ride requests and optimizes routes.
- **Chainlink**: Fetches datafeeds, verifies dealer legitimacy and pull data from an API

### Workflow
This project uses GitHub Actions for CI/CD. The workflow checks licenses, runs linting, and tests the code on each push and pull request.

## Resources
https://github.com/smartcontractkit/hardhat-starter-kit.git (Updated to ethers-v6)

https://github.com/tomhirst/solidity-nextjs-starter.git
