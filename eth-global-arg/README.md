# 🌍 Hack the World  
**Gamified Social Platform for Hackers, Builders & Digital Nomads**

Hack the World is a pixel-style social platform where hackers can discover events, find teammates, match through on-chain credentials, and form hacker houses to collaborate both online and IRL.  
Built for global hackathon travelers — powered by Web3 identity, POAPs, zk proofs, and AI-assisted team formation.

---

## 🚀 Core Concept

Hack the World creates a unified hub for the global hacker community:

- Discover hackathons and tech events around the world  
- Match with other hackers based on skills + shared POAPs/NFTs  
- Unlock private contact info only after matching  
- Form teams and hacker houses with real-time group chat  
- Use AI to plan trips, find safe areas, and recommend accomodations  
- Join houses gated by zk-verified credentials

---

## 🧩 Platform Overview

### **/profile — Hacker Identity**
Connect a wallet → the platform automatically imports:

- Talent Protocol profile  
- POAPs  
- On-chain credentials & NFTs  

A pixel-style “cypher identity” is generated for each hacker.

---

### **/world — Interactive Exploration**
A gamified world map that reveals cities and events.  
Hovering a city shows:

- **Find Hackers**
- **View Events**

This acts as the entry point to the global hacker ecosystem.

---

### **/find-hackers — Discover Builders**
Browse hackers filtered by:

- Event  
- City  
- Skills (Solidity, Rust, React, Web3, etc.)  
- Shared POAPs  

Send a **match request** to connect privately.

---

### **/matches — Secure Interactions**
When two hackers match:

- Private contact info is unlocked (Telegram, Email, Lens, etc.)
- Pending and accepted matches are shown
- Users can initiate collaboration

All matches are stored on-chain via EVVM.

---

### **/squad — Team & House Formation**
Matched hackers can create a **Hacker House**, which acts as a squad server:

- Group chat  
- Onboarding flow for new house members  
- Suggestions powered by LLMs:
  - Trip planning  
  - Safe/dangerous zones  
  - Food / coworking / event tips  
  - Airbnb recommendations via API  

This is where hackathon teams are formed.

---

### **/hackerhouses — Join a Team**
A public directory of active Hacker Houses.

Each house can set **gated requirements**, such as:

- POAPs  
- NFT collections  
- Talent credentials  
- ZK-verified matching (same event POAP, same NFT, etc.)

Users apply → zk proof validates → join approved squad.

---

## 🛠️ On-Chain Architecture

### **EVVM (Ethereum Virtual Verifiable Machine)**
Used to store:

- Hacker profiles  
- Match events  
- House metadata  
- ZK validation results

Decentralized + verifiable storage for identity and collaboration.

---

### **Zero-Knowledge Credentials**
ZK proofs ensure:

- Two hackers truly share a required POAP/NFT  
- Verified identity  
- Eligibility to join a hacker house  

Without revealing personal or private data.

---

### **World App (WorldID Mini-Apps)**
Planned integration to push the entire platform into the **World** ecosystem:

- Login via World ID  
- Interact with Hack the World inside World App  
- Enhanced privacy and sybil-resistance  

---

## 🧬 Tech Stack

**Frontend:**  
- Webflow (MVP)  
- Next.js (future expansion)  
- TailwindCSS  
- Pixel-art UI components

**APIs:**  
- Talent Protocol API  
- POAP API  
- Airbnb API (LLM travel planning)  
- LLMs for suggestions (OpenAI / Llama / custom agents)

**On-Chain:**  
- EVVM  
- zk-Proofs  
- WalletConnect / RainbowKit  
- World ID (upcoming)

---

## 📌 Roadmap

### **MVP (Hackathon Build)**
- Wallet login + profile creation  
- World map + event exploration  
- Find hackers + match flow  
- Basic squads (chat + planning)

### **Phase 2**
- ZK-verified entry to hacker houses  
- Airbnb + travel agent LLM  
- User reputation system  
- Event organizer dashboard

### **Phase 3**
- Full mini-app for World ID  
- Cross-city hacker house network  
- In-platform economy (XP, badges, identity power-ups)

---

## 🖼️ Screenshots / Mockups

(Add your images here once uploaded to repo)

---

## 🤝 Contributing

This project is being built live during ETHGlobal, from scratch.  
Pull requests, feedback, and collaborations are welcome.

---

## 📜 License
MIT License

