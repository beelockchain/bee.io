// src/App.tsx
'use client'
import React, { useState, useRef, useMemo } from 'react';
import { toPng } from "html-to-image";
import BlueprintDiagram from "./BlueprintDiagram";
import jsPDF from "jspdf";
import { ChevronDown, Download, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { MacBookFrame } from "./MacBookFrame";
import { Answer, Blueprint, QuizQuestion, ServiceQuestions, Step, BlueprintInput } from './types';


async function fetchBlueprint(service: string, answers: Answer): Promise<Blueprint> {
  const res = await fetch("/api/blueprint", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ service, answers }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(errText || "Failed to generate blueprint");
  }

  return res.json();
} 

const BlueprintGenerator: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>('select');
  const [selectedService, setSelectedService] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [blueprint, setBlueprint] = useState<Blueprint | null>(null);
  const [generatingProgress, setGeneratingProgress] = useState<number>(0);

  // Navigation stack: history of service keys visited, for back navigation
  const [serviceStack, setServiceStack] = useState<string[]>([]);
  // The currently active service/sub-service key driving the question set
  const [currentServiceKey, setCurrentServiceKey] = useState<string>('');
  // User info gate before blueprint is shown
  const [showUserInfoForm, setShowUserInfoForm] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '', company: '' });
  const [userInfoErrors, setUserInfoErrors] = useState({ name: false, email: false, phone: false });

  const diagramRef = useRef<HTMLDivElement>(null);

  // Main service categories
  const services: string[] = [
    'Blockchain',
    'Crypto',
    'Game Development',
    'Game Art',
    'Prediction Market'
  ];

  const serviceQuestions: ServiceQuestions = {
    'Blockchain': [
      {
        id: 'blockchain_solution_type',
        question: 'What type of blockchain solution do you want to build?',
        type: 'single',
        options: [
          'Public / Private Blockchain',
          'Smart Contract',
          'Decentralized App (DAPP)',
          'Layer 1 / Layer 2 Blockchain',
          'NFT Marketplace',
          'Hyperledger Blockchain',
          'Blockchain Game',
          'Others'
        ]
      }
    ],
    
    'Crypto': [
      {
        id: 'crypto_solution_type',
        question: 'Which type of crypto solution would you like to build?',
        type: 'single',
        options: [
          'Crypto Exchange Development',
          'Crypto Wallet Development',
          'Coin/Token Creations',
          'IDO Development',
          'ICO Development',
          'Crypto Trading Bot Development',
          'Others'
        ]
      }
    ],
    
    'Game Development': [
      {
        id: 'game_dev_type',
        question: 'What type of game development do you want to build?',
        type: 'single',
        options: [
          'Play-to-Earn (P2E) Game Development',
          'Move-to-Earn (M2E) Game Development',
          '2D & 3D Game Development',
          'NFT Game Development',
          'Casino Game Development',
          'Unreal Engine Game Development',
          'iGaming Software Development',
          'Poker Game Development',
          'Others'
        ]
      }
    ],
    
    'Game Art': [
      {
        id: 'game_art_type',
        question: 'What type of game art development do you want to build?',
        type: 'single',
        options: [
          '3D Art',
          '2D Art',
          'Character Design',
          'Game Animation',
          'UI & UX Service'
        ]
      }
    ],
    
    'Prediction Market': [
      {
        id: 'prediction_platform_type',
        question: 'What type of prediction market software platform do you want to develop?',
        type: 'single',
        options: [
          'Centralized prediction market platform',
          'Decentralized (on-chain) prediction market',
          'Hybrid (on-chain + off-chain) model',
          'Clone-based solution',
          'Fully custom-built platform'
        ]
      },
      {
        id: 'prediction_market_types',
        question: 'Which types of prediction markets should your platform support?',
        type: 'single',
        options: [
          'Sports prediction markets',
          'Financial / crypto prediction markets',
          'Political / event-based prediction markets',
          'Binary outcome markets',
          'Multi-outcome markets',
          'Hybrid (multiple market categories)'
        ]
      },
      {
        id: 'market_creation_settlement',
        question: 'How should prediction markets be created, and how should outcomes be settled?',
        type: 'single',
        options: [
          'Admin-created markets only',
          'User-generated markets',
          'Oracle-based automated settlement',
          'Manual settlement with verification',
          'Hybrid settlement (oracle + admin review)'
        ]
      },
      {
        id: 'user_participation',
        question: 'How should users participate in predictions?',
        type: 'single',
        options: [
          'Token-based staking',
          'Stablecoin-based predictions',
          'Fiat on-ramp participation',
          'Free-to-play with rewards',
          'Credit-based internal balance'
        ]
      },
      {
        id: 'features',
        question: 'Which core features or intelligent systems should be included in your prediction market platform?',
        type: 'multiple',
        options: [
          'Market creation and management dashboard',
          'Odds calculation engine',
          'Liquidity pool management',
          'Dispute resolution mechanism',
          'User wallet integration',
          'Admin and moderation controls',
          'Market analytics and reporting',
          'AI-driven odds optimization',
          'Fraud and manipulation detection'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline to launch the prediction market platform?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    // ==================== BLOCKCHAIN SUB-FLOWS ====================
    
    'Public / Private Blockchain': [
      {
        id: 'blockchain_type',
        question: 'What type of blockchain do you want to build?',
        type: 'single',
        options: ['Public', 'Private', 'Consortium']
      },
      {
        id: 'primary_purpose',
        question: 'Primary purpose of the blockchain?',
        type: 'single',
        options: [
          'Financial transactions',
          'Supply chain',
          'Identity management',
          'Data sharing',
          'Enterprise workflow'
        ]
      },
      {
        id: 'network_participants',
        question: 'Who will participate in the network?',
        type: 'single',
        options: ['Open (anyone)', 'Permissioned members', 'Internal organization']
      },
      {
        id: 'blockchain_framework',
        question: 'Preferred blockchain framework or network?',
        type: 'single',
        options: ['Ethereum', 'Hyperledger', 'Polygon', 'Custom chain', 'Let EVO AI decide']
      },
      {
        id: 'features',
        question: 'Key features required?',
        type: 'multiple',
        options: [
          'Smart contracts',
          'Node management',
          'Permission control',
          'Tokenization',
          'Governance module',
          'API integration'
        ]
      },
      {
        id: 'timeline',
        question: 'Expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Planning Phase Only']
      }
    ],
  
    'Smart Contract': [
      {
        id: 'contract_purpose',
        question: 'What is the purpose of the smart contract?',
        type: 'single',
        options: [
          'Token creation',
          'DeFi protocol',
          'NFT minting',
          'Governance',
          'Escrow/payments'
        ]
      },
      {
        id: 'blockchain_host',
        question: 'Which blockchain will host the contract?',
        type: 'single',
        options: [
          'Ethereum',
          'Binance Smart Chain (BSC)',
          'Polygon',
          'Solana',
          'BNB Chain',
          'Cardano',
          'Avalanche',
          'Not sure'
        ]
      },
      {
        id: 'contract_functions',
        question: 'What additional contract functions do you need?',
        type: 'multiple',
        options: [
          'Mint/burn logic',
          'Vesting/lock system',
          'Multi-sig approvals',
          'Upgradeable contracts',
          'Oracle integration'
        ]
      },
      {
        id: 'audit_testing',
        question: 'Do you require audit & testing services?',
        type: 'single',
        options: ['Yes', 'No', 'Not sure']
      },
      {
        id: 'ai_automation',
        question: 'Should EVO AI suggest automation or AI logic within the contract?',
        type: 'single',
        options: [
          'AI-based execution triggers',
          'Risk or fraud detection',
          'Predictive gas optimization',
          'No AI needed'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Decentralized App (DAPP)': [
      {
        id: 'dapp_type',
        question: 'What type of dApp are you building?',
        type: 'single',
        options: [
          'DeFi',
          'Crypto Exchange',
          'MVP Consulting',
          'NFT / Collectibles',
          'Gaming',
          'Social / Community',
          'Enterprise or Utility'
        ]
      },
      {
        id: 'platform_support',
        question: 'Which platform should your dApp support?',
        type: 'single',
        options: ['Web', 'Mobile', 'Cross-platform']
      },
      {
        id: 'core_modules',
        question: 'What core modules do you need?',
        type: 'multiple',
        options: [
          'Wallet integration',
          'Token / asset management',
          'User profiles & roles',
          'Marketplace functionality',
          'Admin dashboard',
          'Analytics'
        ]
      },
      {
        id: 'data_sync',
        question: 'Do you need on-chain + off-chain data sync?',
        type: 'single',
        options: ['Yes', 'No', 'Not sure']
      },
      {
        id: 'ai_support',
        question: 'What kind of AI support do you want integrated?',
        type: 'single',
        options: [
          'Chat / Assistant',
          'Analytics & recommendation',
          'Fraud detection',
          'None'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline for launch?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Layer 1 / Layer 2 Blockchain': [
      {
        id: 'layer_service',
        question: 'Which blockchain layer or service do you want to build or integrate?',
        type: 'single',
        options: [
          'Layer 1 Blockchain Development',
          'Layer 2 Scaling Solution Development',
          'Layer 2 Integration Services',
          'Rollup-Based Blockchain Solutions',
          'App-Specific Blockchain (AppChain)',
          'Custom Blockchain Architecture',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'framework_sdk',
        question: 'Which blockchain framework or SDK do you prefer?',
        type: 'single',
        options: [
          'Substrate',
          'Cosmos SDK',
          'Polygon Edge',
          'Custom Architecture',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'consensus_mechanism',
        question: 'What consensus or validation mechanism fits your use case?',
        type: 'single',
        options: [
          'Proof of Stake (PoS)',
          'Delegated Proof of Stake (DPoS)',
          'Proof of Authority (PoA)',
          'Hybrid Model',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'cross_chain',
        question: 'Which cross-chain or bridge functionality do you require?',
        type: 'single',
        options: [
          'Full Cross-Chain Support',
          'Single-Chain Deployment',
          'Planned for Later Phase',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'NFT Marketplace': [
      {
        id: 'marketplace_type',
        question: 'What type of NFT marketplace do you want to build?',
        type: 'single',
        options: [
          'Single-Vendor Marketplace',
          'Multi-Vendor Marketplace',
          'NFT Aggregator Marketplace',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'asset_categories',
        question: 'Which asset categories will your marketplace support?',
        type: 'single',
        options: [
          'Art & Digital Collectibles',
          'Gaming Assets (in-game items, characters)',
          'Music, Video & Media NFTs',
          'Real-World Asset Tokenization',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'marketplace_features',
        question: 'What marketplace features do you need?',
        type: 'multiple',
        options: [
          'NFT Minting & Listing Tools',
          'Auction & Bidding System',
          'Wallet & Payment Integration',
          'Royalty & Creator Earnings Management',
          'Multi-Chain NFT Support',
          'Admin & Moderation Panel'
        ]
      },
      {
        id: 'ai_features',
        question: 'Do you need AI-powered features?',
        type: 'single',
        options: [
          'AI-Based NFT Pricing & Valuation',
          'Personalized NFT Recommendations',
          'AI Fraud & Fake-NFT Detection',
          'No AI Required at This Stage'
        ]
      },
      {
        id: 'blockchain_networks',
        question: 'Which blockchain networks should your marketplace run on?',
        type: 'single',
        options: [
          'BNB Smart Chain',
          'Ethereum',
          'Polygon',
          'Solana',
          'BNB Chain',
          'Cardano',
          'Avalanche',
          'Let EVO AI Recommend'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline for launch?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Hyperledger Blockchain': [
      {
        id: 'hyperledger_framework',
        question: 'Which Hyperledger framework do you prefer?',
        type: 'single',
        options: ['Fabric', 'Sawtooth', 'Besu', 'Indy', 'Let EVO AI Recommend']
      },
      {
        id: 'industry_target',
        question: 'What industry or business process are you targeting?',
        type: 'single',
        options: [
          'Supply Chain & Logistics',
          'Healthcare & Medical Records',
          'Banking & Financial Services',
          'Manufacturing & Operations',
          'Government & Public Services'
        ]
      },
      {
        id: 'core_modules',
        question: 'What core modules do you need?',
        type: 'multiple',
        options: [
          'Identity & Access Management',
          'Asset & Inventory Tracking',
          'Smart Contract (Chaincode) Logic',
          'Role-Based Permission Control',
          'Reporting, Monitoring & Analytics'
        ]
      },
      {
        id: 'deployment_model',
        question: 'Preferred deployment model',
        type: 'single',
        options: [
          'On-Premise Infrastructure',
          'Cloud-Based Deployment',
          'Hybrid (On-Premise + Cloud)'
        ]
      },
      {
        id: 'ai_capabilities',
        question: 'Do you want AI-powered capabilities?',
        type: 'single',
        options: [
          'No',
          'AI-Driven Process Automation',
          'AI-Based Anomaly & Fraud Detection',
          'No AI Integration at This Stage',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline for launch?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Blockchain Game': [
      {
        id: 'game_type',
        question: 'What type of blockchain game are you developing?',
        type: 'single',
        options: [
          'Play-to-Earn (Token & Reward-Driven Games)',
          'Move-to-Earn (Activity-Based Reward Games)',
          'NFT-Based Games (Ownable In-Game Assets)',
          'Hybrid Model (Multiple Game Economies)',
          'Not Sure – Let EVO AI Recommend'
        ]
      },
      {
        id: 'gameplay_style',
        question: 'Which gameplay style fits your concept?',
        type: 'single',
        options: [
          'Strategy / Simulation',
          'Role-Playing Game (RPG)',
          'Casual / Arcade',
          'Card / Casino-Style Games',
          'Sports / Racing Games'
        ]
      },
      {
        id: 'blockchain_components',
        question: 'What blockchain components do you need?',
        type: 'multiple',
        options: [
          'Game Tokenomics Design',
          'NFT Characters, Items & Assets',
          'In-Game Marketplace',
          'Wallet & Player Account System',
          'Reward & Incentive Engine'
        ]
      },
      {
        id: 'blockchain_network',
        question: 'Which blockchain network are you considering?',
        type: 'single',
        options: [
          'BNB Smart Chain',
          'Ethereum',
          'Polygon',
          'Solana',
          'BNB Chain',
          'Cardano',
          'Avalanche',
          'Let EVO AI Recommend'
        ]
      },
      {
        id: 'ai_gameplay',
        question: 'Do you want AI-powered gameplay features?',
        type: 'single',
        options: [
          'AI-Driven NPC & Enemy Behavior',
          'Dynamic Difficulty & Game Balancing',
          'AI Player Analytics & Engagement Tracking',
          'No AI Integration'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline for launch?',
        type: 'single',
        options: [
          '1–3 Months (MVP / Prototype)',
          '3–6 Months (Full Game Development)',
          '6+ Months (Advanced / Scalable Game)',
          'Flexible Timeline'
        ]
      }
    ],
  
    // ==================== CRYPTO SUB-FLOWS ====================
  
    'Crypto Exchange Development': [
      {
        id: 'exchange_type',
        question: 'What type of crypto exchange do you want to build?',
        type: 'single',
        options: [
          'Centralized Exchange (CEX)',
          'Decentralized Exchange (DEX)',
          'Peer-to-Peer (P2P) Exchange',
          'OTC (Over-the-Counter) Trading Platform',
          'Hybrid Exchange',
          'Spot Trading Exchange',
          'Derivatives Exchange',
          'Escrow-Based Exchange',
          'Others'
        ]
      }
    ],
  
    'Centralized Exchange (CEX)': [
      {
        id: 'trading_pairs',
        question: 'Which trading pairs should your centralized exchange support?',
        type: 'single',
        options: ['Crypto–Crypto', 'Crypto–Fiat', 'Fiat–Crypto', 'All supported pairs']
      },
      {
        id: 'order_types',
        question: 'Which order types do you want to enable?',
        type: 'multiple',
        options: ['Market orders', 'Limit orders', 'Stop-loss orders', 'Advanced order types']
      },
      {
        id: 'custody_model',
        question: 'What custody model do you prefer?',
        type: 'single',
        options: [
          'Fully custodial',
          'Semi-custodial',
          'Custody with cold-wallet storage'
        ]
      },
      {
        id: 'compliance_features',
        question: 'Which compliance features are required?',
        type: 'single',
        options: [
          'KYC verification',
          'AML monitoring',
          'Geo-restrictions',
          'Compliance-ready setup'
        ]
      },
      {
        id: 'additional_modules',
        question: 'Which additional modules do you want?',
        type: 'multiple',
        options: [
          'Admin dashboard',
          'User analytics',
          'Liquidity providers',
          'Referral system'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible timeline']
      }
    ],
  
    'Decentralized Exchange (DEX)': [
      {
        id: 'dex_architecture',
        question: 'What type of DEX architecture do you prefer?',
        type: 'single',
        options: ['AMM-based', 'Order-book based', 'Hybrid DEX model']
      },
      {
        id: 'swap_functionality',
        question: 'Which swap functionality do you want?',
        type: 'single',
        options: ['Token-to-token swaps', 'Multi-hop swaps', 'Stablecoin pools']
      },
      {
        id: 'liquidity_pool',
        question: 'Do you want liquidity pool features?',
        type: 'multiple',
        options: [
          'Liquidity creation',
          'Yield farming',
          'Liquidity mining',
          'Fee distribution'
        ]
      },
      {
        id: 'wallet_integrations',
        question: 'Which wallet integrations should be supported?',
        type: 'single',
        options: ['MetaMask', 'WalletConnect', 'Trust Wallet', 'Custom wallet']
      },
      {
        id: 'governance',
        question: 'Do you want governance features?',
        type: 'single',
        options: [
          'DAO-based governance',
          'Voting mechanisms',
          'Governance token',
          'No governance'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible timeline']
      }
    ],
  
    'Peer-to-Peer (P2P) Exchange': [
      {
        id: 'trading_model',
        question: 'What trading model should the P2P exchange follow?',
        type: 'single',
        options: [
          'Buyer–seller marketplace',
          'Advertisement-based trading',
          'Instant matching'
        ]
      },
      {
        id: 'payment_methods',
        question: 'Which payment methods should be supported?',
        type: 'multiple',
        options: [
          'Bank transfer',
          'UPI / local payments',
          'Digital wallets',
          'Crypto-only',
          'Others (Let EVO AI decide)'
        ]
      },
      {
        id: 'escrow_mechanism',
        question: 'What escrow mechanism do you prefer?',
        type: 'single',
        options: [
          'Smart contract escrow',
          'Platform-managed escrow',
          'Manual dispute resolution',
          'Others (Let EVO AI decide)'
        ]
      },
      {
        id: 'user_trust',
        question: 'Which user trust features do you need?',
        type: 'single',
        options: [
          'User ratings',
          'Trade history',
          'Identity verification',
          'Dispute management'
        ]
      },
      {
        id: 'fiat_ramp',
        question: 'Do you want fiat on-ramp/off-ramp support?',
        type: 'single',
        options: ['Yes', 'No', 'Planned for later']
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible timeline']
      }
    ],
  
    'OTC (Over-the-Counter) Trading Platform': [
      {
        id: 'otc_type',
        question: 'What type of OTC trading platform do you want to build?',
        type: 'single',
        options: [
          'Broker-assisted OTC desk',
          'Self-service OTC platform',
          'Hybrid OTC model'
        ]
      },
      {
        id: 'trade_types',
        question: 'Which types of OTC trades should be supported?',
        type: 'single',
        options: [
          'Large-volume crypto trades',
          'Crypto-to-crypto block trades',
          'Fiat-to-crypto OTC trades',
          'Stablecoin transactions',
          'Others (Let EVO AI decide)'
        ]
      },
      {
        id: 'pricing_execution',
        question: 'How should pricing and trade execution work?',
        type: 'single',
        options: [
          'Fixed quoted pricing',
          'Request-for-Quote (RFQ) system',
          'Negotiated pricing between parties',
          'Others (Let EVO AI decide)'
        ]
      },
      {
        id: 'settlement',
        question: 'How should trade settlement be handled?',
        type: 'single',
        options: [
          'Instant settlement',
          'Escrow-based settlement',
          'Scheduled / manual settlement',
          'Others (Let EVO AI decide)'
        ]
      },
      {
        id: 'compliance_level',
        question: 'What compliance level do you require?',
        type: 'single',
        options: [
          'Institutional KYC',
          'Enhanced AML checks',
          'Tier-based client verification',
          'Regional access restrictions',
          'Others (Let EVO AI decide)'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Hybrid Exchange': [
      {
        id: 'hybrid_model',
        question: 'Which hybrid model do you want to implement?',
        type: 'single',
        options: [
          'Centralized matching + decentralized settlement',
          'CEX with DEX wallet control',
          'Custom hybrid architecture'
        ]
      },
      {
        id: 'trading_options',
        question: 'Which trading options should be available?',
        type: 'single',
        options: [
          'Spot trading',
          'On-chain swaps',
          'Cross-chain swaps'
        ]
      },
      {
        id: 'asset_storage',
        question: 'How should assets be stored?',
        type: 'single',
        options: [
          'User-controlled wallets',
          'Platform custody',
          'Mixed custody model'
        ]
      },
      {
        id: 'compliance_level',
        question: 'Which compliance level do you require?',
        type: 'single',
        options: [
          'Full KYC/AML',
          'Partial KYC',
          'Optional verification'
        ]
      },
      {
        id: 'scalability',
        question: 'Which scalability features are required?',
        type: 'single',
        options: [
          'High-frequency trading support',
          'Layer-2 integration',
          'Cross-chain compatibility'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Spot Trading Exchange': [
      {
        id: 'trading_features',
        question: 'Which spot trading features do you want?',
        type: 'single',
        options: [
          'Real-time order book',
          'Instant trade execution',
          'Advanced charting tools'
        ]
      },
      {
        id: 'liquidity_management',
        question: 'How should liquidity be managed?',
        type: 'single',
        options: [
          'External liquidity providers',
          'Internal market making',
          'Hybrid liquidity model'
        ]
      },
      {
        id: 'user_tools',
        question: 'Which user trading tools should be included?',
        type: 'multiple',
        options: [
          'Price alerts',
          'Trade history',
          'Portfolio tracking'
        ]
      },
      {
        id: 'margin_leverage',
        question: 'Do you want margin or leverage options later?',
        type: 'single',
        options: ['Yes', 'No', 'Planned for the future']
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Derivatives Exchange': [
      {
        id: 'derivatives_products',
        question: 'Which derivatives products do you want to offer?',
        type: 'single',
        options: [
          'Futures contracts',
          'Perpetual swaps',
          'Options trading'
        ]
      },
      {
        id: 'leverage_range',
        question: 'What leverage range should be supported?',
        type: 'single',
        options: [
          'Low leverage (up to 5x)',
          'Medium leverage (up to 20x)',
          'High leverage (50x+)'
        ]
      },
      {
        id: 'risk_management',
        question: 'Which risk management features are required?',
        type: 'multiple',
        options: [
          'Auto liquidation',
          'Margin management',
          'Insurance fund',
          'Risk engine'
        ]
      },
      {
        id: 'compliance_level',
        question: 'What compliance level do you require?',
        type: 'single',
        options: [
          'Full regulatory setup',
          'Limited access regions',
          'Professional traders only'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Escrow-Based Exchange': [
      {
        id: 'escrow_type',
        question: 'What type of escrow trading do you want to support?',
        type: 'single',
        options: [
          'Crypto-to-crypto escrow',
          'Crypto-to-fiat escrow',
          'Service-based escrow'
        ]
      },
      {
        id: 'escrow_management',
        question: 'How should escrow be managed?',
        type: 'single',
        options: [
          'Smart contract-based',
          'Platform-controlled',
          'Hybrid escrow model'
        ]
      },
      {
        id: 'dispute_resolution',
        question: 'Which dispute resolution options are needed?',
        type: 'single',
        options: [
          'Automated dispute logic',
          'Admin arbitration',
          'Third-party mediation'
        ]
      },
      {
        id: 'user_verification',
        question: 'What level of user verification do you require?',
        type: 'single',
        options: [
          'Optional Verification',
          'Mandatory KYC',
          'Tier-based Verification'
        ]
      },
      {
        id: 'multi_currency',
        question: 'Do you want multi-currency escrow support?',
        type: 'single',
        options: ['Yes', 'No', 'Planned for later']
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Crypto Wallet Development': [
      {
        id: 'wallet_type',
        question: 'What type of crypto wallet do you want to develop?',
        type: 'single',
        options: [
          'Web3 wallet',
          'NFT wallet',
          'MPC wallet',
          'Centralized/Decentralized wallet integration',
          'Custodial wallet',
          'Non-custodial wallet'
        ]
      }
    ],
  
    'Web3 wallet': [
      {
        id: 'platform_support',
        question: 'Which platforms should the wallet support?',
        type: 'single',
        options: [
          'Browser extension',
          'Mobile application',
          'Web-based wallet',
          'Multi-platform support'
        ]
      },
      {
        id: 'blockchain_integration',
        question: 'Which blockchains should be integrated?',
        type: 'single',
        options: [
          'Ethereum',
          'Polygon',
          'Binance Smart Chain (BSC)',
          'Solana',
          'Multi-chain'
        ]
      },
      {
        id: 'wallet_features',
        question: 'What core wallet features do you need?',
        type: 'multiple',
        options: [
          'Token storage and transfers',
          'dApp connectivity',
          'In-wallet swaps',
          'Staking access',
          'WalletConnect support'
        ]
      },
      {
        id: 'authentication',
        question: 'How should users authenticate?',
        type: 'single',
        options: [
          'Private key / seed phrase',
          'Social login',
          'Biometric authentication'
        ]
      },
      {
        id: 'fiat_ramp',
        question: 'Do you want fiat on-ramp/off-ramp support?',
        type: 'single',
        options: ['Yes', 'No', 'Later phase']
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'NFT wallet': [
      {
        id: 'nft_asset_types',
        question: 'What type of NFT assets should the wallet support?',
        type: 'single',
        options: [
          'Art and collectibles',
          'Gaming NFTs',
          'Music and media NFTs',
          'Real-world asset NFTs'
        ]
      },
      {
        id: 'nft_standards',
        question: 'Which NFT standards should be supported?',
        type: 'single',
        options: [
          'ERC-721',
          'ERC-1155',
          'Multi-standard support'
        ]
      },
      {
        id: 'nft_features',
        question: 'What NFT wallet features do you need?',
        type: 'multiple',
        options: [
          'NFT gallery view',
          'Metadata display',
          'NFT transfers',
          'Marketplace integration',
          'Royalty tracking'
        ]
      },
      {
        id: 'blockchain_networks',
        question: 'Which blockchain networks should be supported?',
        type: 'single',
        options: [
          'Ethereum',
          'Polygon',
          'Solana',
          'Binance Smart Chain (BSC)',
          'Multi-chain'
        ]
      },
      {
        id: 'security',
        question: 'How should NFTs be secured?',
        type: 'single',
        options: [
          'User-controlled keys',
          'Hardware wallet support',
          'Secure backups'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'MPC wallet': [
      {
        id: 'mpc_type',
        question: 'What type of MPC wallet are you building?',
        type: 'single',
        options: [
          'Enterprise MPC wallet',
          'Retail MPC wallet',
          'Custody-grade MPC wallet'
        ]
      },
      {
        id: 'key_management',
        question: 'How should key shares be managed?',
        type: 'single',
        options: [
          'Distributed across servers',
          'User + platform split',
          'Multi-party threshold model'
        ]
      },
      {
        id: 'asset_support',
        question: 'Which assets should the MPC wallet support?',
        type: 'single',
        options: [
          'Cryptocurrencies',
          'Tokens',
          'NFTs',
          'Multi-asset support'
        ]
      },
      {
        id: 'access_control',
        question: 'What access control features are required?',
        type: 'multiple',
        options: [
          'Role-based permissions',
          'Transaction approval workflows',
          'Spending limits',
          'Multi-user accounts'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Custodial wallet': [
      {
        id: 'custody_control',
        question: 'Who will control the wallet assets?',
        type: 'single',
        options: [
          'Platform-managed custody',
          'Third-party custody provider (Fireblocks, BitGo)'
        ]
      },
      {
        id: 'asset_types',
        question: 'Which asset types should be supported?',
        type: 'single',
        options: [
          'Cryptocurrencies',
          'Tokens',
          'NFTs',
          'Multi-asset custody'
        ]
      },
      {
        id: 'compliance_requirements',
        question: 'What compliance requirements must be included?',
        type: 'single',
        options: [
          'KYC verification',
          'AML monitoring',
          'Regulatory reporting'
        ]
      },
      {
        id: 'security_infrastructure',
        question: 'What security infrastructure is required?',
        type: 'multiple',
        options: [
          'Cold wallet storage',
          'Hot wallet operations',
          'Multi-signature security',
          'Withdrawal approvals'
        ]
      },
      {
        id: 'operational_features',
        question: 'Which operational features are needed?',
        type: 'single',
        options: [
          'Admin controls',
          'User balance management',
          'Transaction monitoring'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Non-custodial wallet': [
      {
        id: 'key_control',
        question: 'How should users control their wallet keys?',
        type: 'single',
        options: [
          'Seed phrase only (Mnemonic Phrase)',
          'Social recovery',
          'Hardware wallet integration'
        ]
      },
      {
        id: 'blockchain_networks',
        question: 'Which blockchain networks should be supported?',
        type: 'single',
        options: [
          'Ethereum',
          'Polygon',
          'Binance Smart Chain (BSC)',
          'Solana',
          'Multi-chain'
        ]
      },
      {
        id: 'wallet_capabilities',
        question: 'What wallet capabilities should be included?',
        type: 'multiple',
        options: [
          'Token transfers',
          'NFT management',
          'dApp connectivity',
          'In-wallet swaps'
        ]
      },
      {
        id: 'recovery_options',
        question: 'What recovery options should be available?',
        type: 'single',
        options: [
          'Seed phrase backup',
          'Multi-device recovery',
          'Social recovery'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Coin/Token Creations': [
      {
        id: 'asset_type',
        question: 'What type of crypto asset do you want to create?',
        type: 'single',
        options: [
          'Utility token',
          'Governance token',
          'Security token',
          'Stablecoin',
          'Meme token',
          'Native blockchain coin',
          'Others'
        ]
      }
    ],
  
    'Utility token': [
      {
        id: 'primary_use',
        question: 'What will the utility token be primarily used for?',
        type: 'single',
        options: [
          'Platform access',
          'Payments & transactions',
          'Staking & rewards',
          'Governance participation',
          'Fee discounts',
          'Multiple utilities'
        ]
      },
      {
        id: 'supply_structure',
        question: 'How should the token supply be structured?',
        type: 'single',
        options: [
          'Fixed total supply',
          'Mintable with a cap',
          'Deflationary (burn-based)',
          'Inflationary (reward-based)'
        ]
      },
      {
        id: 'token_distribution',
        question: 'How will tokens be distributed?',
        type: 'single',
        options: [
          'Public sale',
          'Private sale',
          'Team allocation',
          'Community rewards',
          'Ecosystem incentives'
        ]
      },
      {
        id: 'platform_integration',
        question: 'Which platform would you like the token to be integrated with?',
        type: 'single',
        options: [
          'Web app',
          'Mobile app',
          'dApp',
          'Game',
          'Others'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'ICO Development': [
      {
        id: 'project_stage',
        question: 'What stage is your ICO project currently in?',
        type: 'single',
        options: [
          'Idea stage',
          'Whitepaper ready',
          'Token developed',
          'Pre-sale completed',
          'Ready for launch'
        ]
      },
      {
        id: 'ico_features',
        question: 'Which ICO features do you want to include?',
        type: 'multiple',
        options: [
          'Investor dashboard',
          'KYC / AML',
          'Multi-currency payments',
          'Vesting and distribution',
          'Referral system'
        ]
      },
      {
        id: 'fundraising_model',
        question: 'Which fundraising model do you prefer?',
        type: 'single',
        options: [
          'Soft cap and hard cap',
          'Fixed cap',
          'Flexible cap'
        ]
      },
      {
        id: 'additional_support',
        question: 'What additional support do you require for your ICO?',
        type: 'single',
        options: [
          'ICO website development',
          'Smart contract development',
          'Marketing support',
          'Exchange listing support',
          'Not Sure / Let EVO AI Decide'
        ]
      },
      {
        id: 'ai_capabilities',
        question: 'Do you want AI-powered capabilities for your ICO?',
        type: 'single',
        options: [
          'Investor behavior analytics',
          'Fraud detection',
          'Campaign optimization',
          'No AI features'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'IDO Development': [
      {
        id: 'ido_type',
        question: 'What type of IDO do you want to conduct?',
        type: 'single',
        options: [
          'Public IDO',
          'Private IDO',
          'Whitelist-based IDO',
          'Community-driven IDO'
        ]
      },
      {
        id: 'launchpad_setup',
        question: 'How do you want to set up the IDO launchpad?',
        type: 'single',
        options: [
          'Existing launchpad integration',
          'Custom launchpad development',
          'Multi-launchpad strategy'
        ]
      },
      {
        id: 'sale_mechanics',
        question: 'Which token sale mechanics should be applied?',
        type: 'multiple',
        options: [
          'Tier-based allocation',
          'Vesting schedules',
          'Liquidity locking',
          'Whitelisting',
          'Anti-bot protection'
        ]
      },
      {
        id: 'blockchain_network',
        question: 'Which blockchain network should the IDO run on?',
        type: 'single',
        options: [
          'Ethereum',
          'Binance Smart Chain (BSC)',
          'Polygon',
          'Solana',
          'Multi-chain'
        ]
      },
      {
        id: 'ai_features',
        question: 'Do you want AI-powered features for the IDO process?',
        type: 'single',
        options: [
          'Allocation optimization',
          'Bot detection',
          'Investor analytics',
          'No AI features'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    'Crypto Trading Bot Development': [
      {
        id: 'bot_type',
        question: 'What type of crypto trading bot would you like to develop?',
        type: 'single',
        options: [
          'Arbitrage Bot Development',
          'Grid Trading Bot Development',
          'Trend-Following Bot Development',
          'Scalping Bot Development',
          'Hybrid Strategy Bot Development',
          'DCA Bot Development',
          'MEV Bot Development',
          'Signal Bot Development',
          'Sniper Bot Development',
          'Coin Lending Bot Development',
          'Sandwich Bot Development'
        ]
      },
      {
        id: 'trading_logic',
        question: 'How would you like the trading logic and strategy execution to be structured?',
        type: 'single',
        options: [
          'Pre-defined strategy logic',
          'Fully custom trading logic',
          'Hybrid logic (rules + indicators)',
          'Adaptive logic based on market behavior',
          'AI-driven self-learning logic'
        ]
      },
      {
        id: 'trade_execution',
        question: 'How should trade execution be handled?',
        type: 'single',
        options: [
          'Fully automated execution',
          'Semi-automated with confirmations',
          'Manual execution with alerts',
          'Rule-based execution with safety checks'
        ]
      },
      {
        id: 'risk_management',
        question: 'Which capital and risk management controls do you need?',
        type: 'multiple',
        options: [
          'Position sizing rules',
          'Capital exposure limits',
          'Auto rebalancing',
          'Profit reinvestment',
          'Drawdown limits',
          'Volatility-based risk controls',
          'Loss cooldown periods'
        ]
      },
      {
        id: 'ai_integrations',
        question: 'Do you want AI-powered intelligence or advanced integrations added to your trading bot?',
        type: 'single',
        options: [
          'Signal generation',
          'Strategy optimization',
          'Market condition analysis',
          'Risk prediction',
          'Portfolio management dashboard',
          'Bot as a Service (BaaS) platform',
          'No AI or advanced integrations'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Flexible']
      }
    ],
  
    // ==================== GAME DEVELOPMENT SUB-FLOWS ====================
  
    'Play-to-Earn (P2E) Game Development': [
      {
        id: 'blockchain_network',
        question: 'What blockchain do you want to use for your Play-to-Earn game?',
        type: 'single',
        options: [
          'Ethereum',
          'Binance Smart Chain (BSC)',
          'Polygon',
          'Solana',
          'Avalanche',
          'Layer-2 (Arbitrum / Optimism)',
          'Multi-chain'
        ]
      },
      {
        id: 'game_type',
        question: 'What type of Play-to-Earn game are you planning?',
        type: 'single',
        options: [
          'RPG / Adventure',
          'Strategy / Card Game',
          'Battle / Action',
          'Simulation / Metaverse',
          'Casual / Mini-games',
          'Custom concept'
        ]
      },
      {
        id: 'game_engine',
        question: 'What game engine do you prefer?',
        type: 'single',
        options: ['Unity', 'Unreal Engine', 'Web-based (HTML5 / Three.js)', 'Godot']
      },
      {
        id: 'reward_mechanism',
        question: 'How will players earn rewards in your game?',
        type: 'single',
        options: [
          'Tokens only',
          'NFTs only',
          'Tokens + NFTs',
          'In-game items convertible to crypto',
          'Still exploring monetization models'
        ]
      },
      {
        id: 'platform_support',
        question: 'What platforms should the game support?',
        type: 'single',
        options: ['Web (Browser-based)', 'Mobile (iOS / Android)', 'PC / Desktop', 'Cross-platform']
      },
      {
        id: 'timeline',
        question: 'Expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Planning Phase Only']
      }
    ],
  
    'Move-to-Earn (M2E) Game Development': [
      {
        id: 'primary_objective',
        question: 'What is the primary objective of your Move-to-Earn blockchain game?',
        type: 'single',
        options: [
          'Fitness & wellness',
          'Lifestyle gamification',
          'Token earning & rewards ecosystem',
          'Brand/community building',
          'Experimental / MVP validation'
        ]
      },
      {
        id: 'activity_type',
        question: 'What physical activity should be rewarded?',
        type: 'single',
        options: [
          'Walking',
          'Running',
          'Cycling',
          'Gym workouts',
          'Multiple activities',
          'Custom activity'
        ]
      },
      {
        id: 'blockchain_network',
        question: 'Which blockchain network do you prefer to build on, or would you like EVO AI to recommend one?',
        type: 'single',
        options: [
          'Ethereum',
          'Polygon',
          'BNB Chain',
          'Solana',
          'Avalanche',
          'Layer-2 (Arbitrum / Optimism)',
          'EVO AI Recommend'
        ]
      },
      {
        id: 'token_model',
        question: 'What token model do you want to implement?',
        type: 'single',
        options: [
          'Single utility token',
          'Dual-token model (earning + governance)',
          'Governance token (DAO-based)',
          'Stablecoin rewards'
        ]
      },
      {
        id: 'nft_integration',
        question: 'How do NFTs fit into your Move-to-Earn ecosystem?',
        type: 'single',
        options: [
          'NFT sneakers / avatars / equipment',
          'Upgradeable NFTs',
          'NFT staking or burning mechanics',
          'Marketplace trading',
          'No NFTs'
        ]
      },
      {
        id: 'decentralization_level',
        question: 'What level of decentralization do you want?',
        type: 'single',
        options: [
          'Fully decentralized (on-chain logic)',
          'Hybrid (off-chain tracking + on-chain rewards)',
          'Web2 backend with blockchain rewards'
        ]
      },
      {
        id: 'timeline',
        question: 'Expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Planning Phase Only']
      }
    ],
  
    '2D & 3D Game Development': [
      {
        id: 'visual_style',
        question: 'What visual style and quality level are you expecting?',
        type: 'single',
        options: [
          '2D (Flat, Cartoon, or Pixel-based)',
          '3D Low-Poly',
          '3D Stylized',
          '3D Realistic / High-Fidelity'
        ]
      },
      {
        id: 'game_genre',
        question: 'What game genre or category best fits your concept?',
        type: 'single',
        options: [
          'Action / Adventure',
          'Role-Playing Game (RPG)',
          'Puzzle / Casual',
          'Strategy / Simulation',
          'Sports / Racing',
          'Shooter / FPS',
          'Hybrid or custom genre'
        ]
      },
      {
        id: 'game_engine',
        question: 'Which game engine do you prefer?',
        type: 'single',
        options: [
          'Unity',
          'Unreal Engine',
          'Godot',
          'Recommend the best fit'
        ]
      },
      {
        id: 'platform_launch',
        question: 'Which platform(s) do you intend to launch on?',
        type: 'single',
        options: [
          'Mobile (iOS / Android)',
          'PC (Windows / macOS)',
          'Console (PlayStation / Xbox / Nintendo)',
          'Web / Browser-based',
          'Cross-platform (single build for multiple platforms)'
        ]
      },
      {
        id: 'scope_complexity',
        question: 'What is the expected scope and gameplay complexity?',
        type: 'single',
        options: [
          'Simple (single-player, limited mechanics)',
          'Medium (multiple levels, AI, physics, progression systems)',
          'Advanced (multiplayer, real-time interactions, open-world, complex AI)'
        ]
      },
      {
        id: 'timeline',
        question: 'Expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Planning Phase Only']
      }
    ],
  
    'NFT Game Development': [
      {
        id: 'nft_game_type',
        question: 'What type of NFT game are you planning to build?',
        type: 'single',
        options: [
          'Play-to-Earn (P2E)',
          'Collectible / Trading Card Game',
          'Metaverse-based Game',
          'Strategy / Battle Game',
          'Casual / Arcade NFT Game',
          'Casino / Gambling NFT Game'
        ]
      },
      {
        id: 'nft_role',
        question: 'What role do NFTs play in your ecosystem?',
        type: 'single',
        options: [
          'Ownership of playable characters',
          'In-game utility assets (weapons, skins, tools)',
          'Land / virtual real estate',
          'Governance or access rights',
          'Revenue-sharing or staking assets',
          'Mixed utility model'
        ]
      },
      {
        id: 'nft_usage',
        question: 'How will players earn or use NFTs in the game?',
        type: 'single',
        options: [
          'Buy NFTs to start playing',
          'Earn NFTs through gameplay',
          'Trade NFTs in a marketplace',
          'Upgrade / burn NFTs to level up',
          'Staking or reward-based system',
          'Still exploring monetization models'
        ]
      },
      {
        id: 'blockchain_preference',
        question: 'Which blockchain would you prefer for NFT integration?',
        type: 'single',
        options: [
          'Ethereum',
          'Polygon',
          'Binance Smart Chain (BSC)',
          'Solana',
          'Avalanche',
          'Flow'
        ]
      },
      {
        id: 'marketplace_strategy',
        question: 'What is your marketplace strategy?',
        type: 'single',
        options: [
          'In-game marketplace only',
          'External marketplace integration (OpenSea, Magic Eden, etc.)',
          'Hybrid (internal + external)',
          'Dynamic royalties'
        ]
      },
      {
        id: 'nft_standards',
        question: 'What NFT standards will you use?',
        type: 'single',
        options: [
          'ERC-721',
          'ERC-1155',
          'Custom NFT contracts',
          'Cross-chain NFT standards'
        ]
      },
      {
        id: 'timeline',
        question: 'Expected launch timeline?',
        type: 'single',
        options: ['1–3 months', '3–6 months', '6+ months', 'Planning Phase Only']
      }
    ],
  
    'Casino Game Development': [
      {
        id: 'casino_platform_type',
        question: 'What type of casino game platform are you planning to develop?',
        type: 'single',
        options: [
          'Online casino with multiple games',
          'A single casino game',
          'Live dealer casino',
          'Mobile casino app',
          'Web-based casino website'
        ]
      },
      {
        id: 'casino_games',
        question: 'Which casino games do you want to include?',
        type: 'single',
        options: [
          'Slots',
          'Poker',
          'Roulette',
          'Blackjack',
          'Baccarat',
          'Sports Betting',
          'Live Dealer Games',
          'Others'
        ]
      },
      {
        id: 'player_features',
        question: 'Do you want player features like these?',
        type: 'multiple',
        options: [
          'Player accounts & profiles',
          'Wallet & balance tracking',
          'Tournaments & leaderboards',
          'Bonuses & promotions',
          'Referral program',
          'VIP / loyalty system'
        ]
      },
      {
        id: 'payment_types',
        question: 'Which type of payments would you like to support?',
        type: 'single',
        options: [
          'Crypto only',
          'Both crypto and traditional payments',
          'Traditional payments only'
        ]
      },
      {
        id: 'platform_availability',
        question: 'Where do you want your casino to work?',
        type: 'single',
        options: [
          'Website (browser-based)',
          'Mobile app (Android)',
          'Mobile app (iOS)',
          'Both website and mobile apps'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected project timeline?',
        type: 'single',
        options: ['ASAP', '1–3 months', '3–6 months', 'Planning Phase Only']
      }
    ],
  
    'Unreal Engine Game Development': [
      {
        id: 'project_type',
        question: 'What type of Unreal Engine project are you building?',
        type: 'single',
        options: [
          'PC / Console Game',
          'Mobile Game',
          'VR Experience',
          'AR Application',
          'Metaverse / Virtual World',
          'Simulation / Training Software',
          'Architectural / Real-Time Visualization',
          'Film / Cinematic / Virtual Production'
        ]
      },
      {
        id: 'multiplayer_type',
        question: 'Is the game single-player or multiplayer?',
        type: 'single',
        options: [
          'Single Player',
          'Local Multiplayer',
          'Online Multiplayer',
          'Co-op Multiplayer',
          'MMO / Large-Scale Multiplayer'
        ]
      },
      {
        id: 'graphics_quality',
        question: 'What level of graphics quality are you targeting?',
        type: 'single',
        options: [
          'Stylized / Cartoon',
          'Semi-Realistic',
          'Realistic',
          'Cinematic / Photorealistic'
        ]
      },
      {
        id: 'target_platforms',
        question: 'What platforms do you want to target?',
        type: 'single',
        options: [
          'PC (Windows / Mac)',
          'PlayStation',
          'Xbox',
          'Nintendo Switch',
          'Mobile (Android / iOS)',
          'VR Devices (Meta Quest, HTC Vive, etc.)'
        ]
      },
      {
        id: 'game_scope',
        question: 'What is the intended game scope?',
        type: 'single',
        options: [
          'Hyper-Casual',
          'Casual',
          'Mid-Core',
          'Hardcore / AAA-Level',
          'Open World',
          'Episodic / Chapter-Based'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected project timeline?',
        type: 'single',
        options: ['ASAP', '1–3 months', '3–6 months', 'Planning Phase Only']
      }
    ],
  
    'iGaming Software Development': [
      {
        id: 'igaming_product',
        question: 'What type of iGaming product are you planning to launch?',
        type: 'single',
        options: [
          'Online Casino Platform',
          'Sports Betting Platform',
          'Live Casino',
          'Fantasy Sports',
          'Poker / Card Games',
          'Lottery / Bingo',
          'Multi-vertical iGaming Platform'
        ]
      },
      {
        id: 'game_categories',
        question: 'Which game categories do you want to include?',
        type: 'single',
        options: [
          'Slots',
          'Table Games',
          'Live Dealer Games',
          'Sports Betting',
          'Poker',
          'Crash / Instant Games',
          'Arcade / Skill Games',
          'Custom Branded Games'
        ]
      },
      {
        id: 'platform_support',
        question: 'Which platforms should your iGaming software support?',
        type: 'single',
        options: [
          'Web (Desktop & Mobile)',
          'Mobile App (iOS)',
          'Mobile App (Android)',
          'Progressive Web App (PWA)',
          'Admin Panel / Back-office'
        ]
      },
      {
        id: 'realtime_features',
        question: 'Do you need real-time features?',
        type: 'single',
        options: [
          'Live Betting',
          'Live Dealer Streaming',
          'Real-time Odds Updates',
          'In-game Chat',
          'Leaderboards'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected project timeline?',
        type: 'single',
        options: ['ASAP', '1–3 months', '3–6 months', 'Planning Phase Only']
      }
    ],
  
    // ==================== GAME ART SUB-FLOWS ====================
  
    '3D Art': [
      {
        id: 'asset_type',
        question: 'What type of 3D assets do you need?',
        type: 'single',
        options: [
          'Characters',
          'Environments / Levels',
          'Props / Objects',
          'Vehicles / Machinery',
          'Weapons',
          'A complete 3D asset pack'
        ]
      },
      {
        id: 'art_style',
        question: 'What art style are you aiming for?',
        type: 'single',
        options: [
          'Realistic',
          'Stylized',
          'Cartoon / Casual',
          'Sci-Fi / Futuristic',
          'Fantasy',
          'Reference-based'
        ]
      },
      {
        id: 'visual_quality',
        question: 'What level of visual quality are you requiring?',
        type: 'single',
        options: [
          'Low-poly (lightweight & optimized)',
          'Mid-poly (balanced quality and performance)',
          'High-poly / Realistic',
          'AAA / Cinematic quality'
        ]
      },
      {
        id: 'rigging_animation',
        question: 'Do you require rigging and animation services?',
        type: 'single',
        options: ['Rigging only', 'Rigging + animations', 'Animation only', 'No, static models']
      },
      {
        id: 'asset_count',
        question: 'What is the estimated number of 3D assets required?',
        type: 'single',
        options: [
          '1–5 assets',
          '6–15 assets',
          '16–50 assets',
          '50+ assets',
          'Ongoing/long-term requirement'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline?',
        type: 'single',
        options: [
          'Less than 2 weeks',
          '2–4 weeks',
          '1–3 months',
          'Long-term/phased delivery'
        ]
      }
    ],
  
    '2D Art': [
      {
        id: 'art_assets',
        question: 'What type of 2D art assets do you need?',
        type: 'single',
        options: [
          'Characters (player, NPCs, enemies)',
          'Environments / Backgrounds',
          'Props & Objects',
          'UI Elements (icons, buttons, HUD)',
          'Illustrations / Concept Art',
          'Marketing Art (banners, store assets)',
          'Complete 2D Art Package'
        ]
      },
      {
        id: 'animation_workflow',
        question: 'What animation workflow do you prefer (if applicable)?',
        type: 'single',
        options: [
          'Frame-by-frame animation',
          'Skeletal (Spine / DragonBones)',
          'Tween-based animation',
          'Engine-side animation only',
          'No animation required'
        ]
      },
      {
        id: 'detail_level',
        question: 'What level of detailing are you expecting?',
        type: 'single',
        options: [
          'Simple / Flat',
          'Medium detail',
          'High detail',
          'Premium / Studio-quality'
        ]
      },
      {
        id: 'visual_style',
        question: 'What visual style are you aiming for?',
        type: 'single',
        options: [
          'Cartoon / Casual',
          'Realistic',
          'Semi-Realistic',
          'Anime / Manga',
          'Pixel Art',
          'Hand-Drawn / Painterly'
        ]
      },
      {
        id: 'environment_complexity',
        question: 'What environmental complexity do you need?',
        type: 'single',
        options: [
          'Static backgrounds',
          'Parallax backgrounds',
          'Interactive environments',
          'Modular environment pieces',
          'Tile-based environments'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline?',
        type: 'single',
        options: [
          'Less than 2 weeks',
          '2–4 weeks',
          '1–3 months',
          '3+ months',
          'Flexible'
        ]
      }
    ],
  
    'Character Design': [
      {
        id: 'character_types',
        question: 'What type of characters do you need?',
        type: 'single',
        options: [
          'Main / Playable Characters',
          'NPCs (Non-Playable Characters)',
          'Enemy / Boss Characters',
          'Mascots / Brand Characters',
          'Custom Avatars',
          'A mix of multiple types'
        ]
      },
      {
        id: 'target_platform',
        question: 'What is the target platform or usage?',
        type: 'single',
        options: [
          'Mobile Game',
          'PC / Console Game',
          'AR / VR',
          'Metaverse / Web3 / NFT',
          'Multiple platforms'
        ]
      },
      {
        id: 'character_variations',
        question: 'Do you need variations for each character?',
        type: 'single',
        options: [
          'Costume / outfit variations',
          'Expression & emotion sets',
          'Seasonal or themed variants',
          'Full customization options'
        ]
      },
      {
        id: 'detail_level',
        question: 'What level of character detail do you require?',
        type: 'single',
        options: [
          'Low detail (casual or hyper-casual)',
          'Medium detail (mid-core games)',
          'High detail (AAA-quality)',
          'Cinematic / showcase level'
        ]
      },
      {
        id: 'character_count',
        question: 'How many characters are required?',
        type: 'single',
        options: [
          '1–2 characters',
          '3–5 characters',
          '6–10 characters',
          '10–20 characters',
          '20+ characters'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected timeline?',
        type: 'single',
        options: [
          'Less than 2 weeks',
          '2–4 weeks',
          '1–2 months',
          'Flexible / depends on scope'
        ]
      }
    ],
  
    'Game Animation': [
      {
        id: 'animation_type',
        question: 'What type of game animation do you need?',
        type: 'single',
        options: [
          'Character Animation',
          'Environment / Background Animation',
          'Cutscenes / Cinematic Animation',
          'In-Game Action Animations',
          'UI / Motion Graphics Animation',
          'VFX & Special Effects Animation',
          'Full Game Animation (End-to-End)'
        ]
      },
      {
        id: 'animation_style',
        question: 'Which animation style best fits your game?',
        type: 'single',
        options: [
          '2D Frame-by-Frame',
          '2D Skeletal (Spine / DragonBones)',
          '3D Realistic',
          '3D Stylized / Cartoon',
          'Pixel Art Animation',
          'Anime-style Animation'
        ]
      },
      {
        id: 'quality_level',
        question: 'What level of animation quality are you aiming for?',
        type: 'single',
        options: [
          'Basic (simple loops, minimal polish)',
          'Standard (smooth gameplay animations)',
          'High-quality (polished, expressive animations)',
          'AAA-level / cinematic quality'
        ]
      },
      {
        id: 'realism_level',
        question: 'What level of realism are you required?',
        type: 'single',
        options: [
          'Cartoon / exaggerated',
          'Semi-realistic',
          'Realistic',
          'Hyper-realistic',
          'Style-driven (unique art direction)'
        ]
      },
      {
        id: 'game_engine',
        question: 'What game engine will be used?',
        type: 'single',
        options: [
          'Unity',
          'Unreal Engine',
          'Godot',
          'Custom Engine'
        ]
      },
      {
        id: 'timeline',
        question: 'What is the expected timeline?',
        type: 'single',
        options: [
          'Less than 1 month',
          '1–3 months',
          '3–6 months',
          'Long-term / ongoing support',
          'Flexible'
        ]
      }
    ],
  
    'UI & UX Service': [
      {
        id: 'ui_ux_type',
        question: 'What type of game UI/UX design support are you looking for?',
        type: 'single',
        options: [
          'Mobile Game UI/UX',
          'PC / Desktop Game UI/UX',
          'Console Game UI/UX',
          'Cross-Platform Game UI/UX',
          'AR / VR Game UI/UX'
        ]
      },
      {
        id: 'services_needed',
        question: 'Which UI/UX services are you looking for?',
        type: 'single',
        options: [
          'Complete UI & UX Design (from scratch)',
          'UI Design only (visual design)',
          'UX Design only (user flows, wireframes)',
          'HUD & In-Game Interface Design',
          'Menu, Lobby & Store UI',
          'UI Redesign / Modernization'
        ]
      },
      {
        id: 'visual_style',
        question: 'Which visual style best represents the look and feel you want players to experience?',
        type: 'single',
        options: [
          'Casual / cartoon style',
          'Realistic / immersive style',
          'Sci-fi / futuristic',
          'Fantasy / stylized',
          'Minimal / clean UI',
          'Custom visual style'
        ]
      },
      {
        id: 'ux_enhancements',
        question: 'Do you want advanced UX or player experience enhancements as part of your design?',
        type: 'single',
        options: [
          'User onboarding & tutorials',
          'Accessibility support',
          'Player behavior analysis',
          'UX testing & iteration',
          'Cross-device UI optimization',
          'No advanced UX features'
        ]
      },
      {
        id: 'timeline',
        question: 'What is your expected design timeline?',
        type: 'single',
        options: [
          '1–2 weeks',
          '2–4 weeks',
          '1–2 months',
          'Ongoing/iterative design'
        ]
      }
    ]
  };

  // ─── DERIVED STATE ────────────────────────────────────────────────────────────

  /** Questions for the currently active service level */
  const currentQuestions = useMemo(() => {
    if (currentServiceKey && serviceQuestions[currentServiceKey]) {
      return serviceQuestions[currentServiceKey];
    }
    return [];
  }, [currentServiceKey]);

  const currentQuestionData = currentQuestions[currentQuestion];

  /** Total questions completed across all previous stack levels. */
  const questionsCompletedBefore = useMemo(() => {
    return serviceStack.reduce((sum, key) => {
      return sum + (serviceQuestions[key]?.length ?? 0);
    }, 0);
  }, [serviceStack]);

  /**
   * Grand total questions across the entire path.
   * When on a single routing question, peek at the selected answer's sub-flow
   * so the denominator is never 1 (which would make Q1/1 fill the bar fully).
   */
  const totalQuestionsInPath = useMemo(() => {
    const base = questionsCompletedBefore + currentQuestions.length;
    // If this level has only 1 question, add the sub-flow length for the
    // currently highlighted answer (if any) so the bar feels proportional
    if (currentQuestions.length === 1 && currentQuestionData) {
      const peeked = answers[currentQuestionData.id] as string | undefined;
      const subLen = (peeked && serviceQuestions[peeked]?.length) || 0;
      return base + subLen;
    }
    return base;
  }, [questionsCompletedBefore, currentQuestions, currentQuestionData, answers]);

  /** Global question index (1-based) for display. */
  const globalQuestionIndex = questionsCompletedBefore + currentQuestion + 1;

  /** Progress = answered questions / total, so Q1 always starts at 0%. */
  const progressPercent = totalQuestionsInPath > 0
    ? ((questionsCompletedBefore + currentQuestion) / totalQuestionsInPath) * 100
    : 0;

  /** All question IDs across the full path, for building blueprint inputs */
  const QUIZ_IDS: string[] = useMemo(() => {
    const ids: string[] = [];
    serviceStack.forEach(key => {
      serviceQuestions[key]?.forEach(q => ids.push(q.id));
    });
    currentQuestions.forEach(q => ids.push(q.id));
    return ids;
  }, [serviceStack, currentQuestions]);

  /** Label shown in the top bar (deepest selected service) */
  const displayServiceLabel = selectedService || 'Select Service';

  // ─── HELPERS ──────────────────────────────────────────────────────────────────

  function answersToInputs(answers: Answer): BlueprintInput[] {
    return QUIZ_IDS.map((id) => {
      const v = answers?.[id];
      if (v == null) return { id, value: '-' };
      const value = Array.isArray(v) ? v.join(', ') : String(v);
      return { id, value };
    });
  }

  // ─── HANDLERS ─────────────────────────────────────────────────────────────────

  const handleServiceSelect = (service: string): void => {
    setSelectedService(service);
    setCurrentServiceKey(service);
    setServiceStack([]);
    setShowDropdown(false);
    setCurrentStep('quiz');
    setCurrentQuestion(0);
    setAnswers({});
  };

  const drillInto = (answer: string, updatedAnswers: Answer): void => {
    setServiceStack(prev => [...prev, currentServiceKey]);
    setCurrentServiceKey(answer);
    setCurrentQuestion(0);
    setAnswers(updatedAnswers);
  };

  const handleAnswer = (questionId: string, answer: string, isMultiple: boolean = false): void => {
    if (isMultiple) {
      const current = (answers[questionId] as string[]) || [];
      const updated = current.includes(answer)
        ? current.filter(a => a !== answer)
        : [...current, answer];
      setAnswers({ ...answers, [questionId]: updated });
    } else {
      const updatedAnswers = { ...answers, [questionId]: answer };
      setAnswers(updatedAnswers);


    }
  };

  const handleNext = (): void => {
    const currentAnswer = answers[currentQuestionData.id];

    // If the selected answer is itself a service key → drill into sub-flow
    if (
      typeof currentAnswer === 'string' &&
      serviceQuestions[currentAnswer] !== undefined
    ) {
      drillInto(currentAnswer, answers);
      return;
    }

    // Advance within the current question set
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowUserInfoForm(true);
    }
  };

  const handlePrevious = (): void => {
    if (currentQuestion > 0) {
      // Go to the previous question in the current level
      setCurrentQuestion(currentQuestion - 1);
    } else if (serviceStack.length > 0) {
      // Pop back to the previous service level, landing on its last question
      const newStack = [...serviceStack];
      const prevServiceKey = newStack.pop()!;
      const prevQuestions = serviceQuestions[prevServiceKey] ?? [];
      setServiceStack(newStack);
      setCurrentServiceKey(prevServiceKey);
      setCurrentQuestion(prevQuestions.length - 1);
    } else {
      // All the way back to the service selector
      setCurrentStep('select');
      setShowDropdown(false);
    }
  };

  const generateBlueprint = async (): Promise<void> => {
    setCurrentStep('generating');
    setGeneratingProgress(10);

    try {
      const interval = setInterval(() => {
        setGeneratingProgress(p => (p < 90 ? p + 2 : p));
      }, 120);

      const serviceName = currentServiceKey || selectedService;
      const generated = await fetchBlueprint(serviceName, answers);
      clearInterval(interval);
      setGeneratingProgress(100);

      setBlueprint(generated);
      setTimeout(() => setCurrentStep('complete'), 300);
    } catch (e) {
      console.error(e);
      alert('Blueprint generation failed. Check server logs.');
      setCurrentStep('quiz');
      setGeneratingProgress(0);
    }
  };

  const downloadPDF = async (): Promise<void> => {
    console.log('🔥 PDF Download Started');

    if (!diagramRef.current) {
      console.error('❌ diagramRef is null');
      alert('Error: Diagram reference not found. Please try again.');
      return;
    }

    const downloadBtn = document.querySelector('[data-download-btn]') as HTMLButtonElement | null;

    try {
      if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.innerText = 'Generating PDF...';
      }

      const node = diagramRef.current;
      const images = node.querySelectorAll('img');

      await Promise.all(
        Array.from(images).map(
          img =>
            new Promise(resolve => {
              if (img.complete) { resolve(true); return; }
              img.onload = () => resolve(true);
              img.onerror = () => resolve(true);
            })
        )
      );

      await new Promise(resolve => setTimeout(resolve, 500));

      const dataUrl = await toPng(node, {
        backgroundColor: '#ffffff',
        pixelRatio: 3,
        cacheBust: true,
        quality: 1,
        style: { transform: 'scale(1)', transformOrigin: 'top left' },
      });

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageWidth = 210;
      const pageHeight = 297;

      const img = new Image();
      img.src = dataUrl;
      await new Promise(resolve => { img.onload = () => resolve(true); });

      const imgWidth = pageWidth;
      const imgHeight = (img.height * pageWidth) / img.width;

      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(dataUrl, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }

      const serviceName = currentServiceKey || selectedService || 'Blueprint';
      pdf.save(`${serviceName.replace(/\s+/g, '_')}_Blueprint.pdf`);
      alert('PDF downloaded successfully!');
    } catch (err) {
      console.error('❌ PDF generation failed:', err);
      alert(`Failed to generate PDF: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      if (downloadBtn) {
        downloadBtn.disabled = false;
        downloadBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Blueprint
        `;
      }
    }
  };

  const resetGenerator = (): void => {
    setCurrentStep('select');
    setSelectedService('');
    setCurrentServiceKey('');
    setServiceStack([]);
    setCurrentQuestion(0);
    setAnswers({});
    setGeneratingProgress(0);
    setBlueprint(null);
    setShowUserInfoForm(false);
    setUserInfo({ name: '', email: '', phone: '', company: '' });
    setUserInfoErrors({ name: false, email: false, phone: false });
  };

  // ─── RENDER ───────────────────────────────────────────────────────────────────

  return (
    <div className='mt-5'> 
      <h2 className="
            text-center text-transparent bg-clip-text
            bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_54%,#FFFFFF_60%)]
            text-3xl sm:text-4xl lg:text-5xl md:text-6xl
            font-semibold mb-5 sm:mb-14 md:mb-14 lg:mb-16
          ">
        EVO AI Blueprint Generator
      </h2>
      <MacBookFrame>
        <div className="relative z-10 mx-auto flex h-[450px] sm:h-[550px] md:h-[700px] lg:h-[700px] w-full flex-col items-center justify-start px-3 sm:px-4 py-6 sm:py-8 lg:py-10 overflow-hidden">
          <div className="w-full max-w-7xl h-full flex flex-col">
            <div className="rounded-xl sm:rounded-2xl lg:rounded-[24px] border border-white/12 bg-white/6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl overflow-hidden h-full flex flex-col">

              {/* ── Top bar ── */}
              <div className={`flex items-center justify-between border-b border-white/15 bg-black/80 px-3 sm:px-4 lg:px-6 flex-shrink-0 ${currentStep === 'quiz' ? 'py-5 sm:py-6 lg:py-7' : 'py-2.5 sm:py-3 lg:py-4'}`}>
                <div className="text-xs sm:text-sm text-white/35"> </div>
                <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  {currentStep === 'generating' ? (
                    <span className="text-white/50 truncate max-w-[120px] sm:max-w-none">
                      Generating...
                    </span>
                  ) : currentStep === 'quiz' && !showUserInfoForm ? (
                    <span className="text-white/50 truncate max-w-[120px] sm:max-w-none">
                      Q {globalQuestionIndex}/{totalQuestionsInPath}
                    </span>
                  ) : (
                    <div className="relative bg-black/95">
                      <img
                        src="/assets/images/image-blue.gif"
                        alt="Ready"
                        className="mix-blend-screen object-contain h-12 w-12 md:h-20 md:w-20"
                      />
                    </div>
                  )}
                  <span className="text-white/25 hidden sm:inline">•</span>
                  <span className="text-white/80 truncate max-w-[100px] sm:max-w-[200px] lg:max-w-none">
                    {displayServiceLabel}
                  </span>
                </div>
              </div>

              {/* ── Main content ── */}
              <div className="px-3 sm:px-6 md:px-10 lg:px-10 xl:px-20 py-6 sm:py-8 lg:py-1 bg-black/80 flex-1 overflow-y-auto overflow-x-hidden">

                {/* SERVICE SELECTION */}
                {currentStep === 'select' && (
                  <div className="flex flex-col justify-start min-h-full mt-0 space-y-10">
                    <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-4 sm:mb-6 lg:mb-8 mt-10 px-2">
                      Select with <span className="bg-[linear-gradient(90deg,#00A993_42%,#57ADCD_59%,#FFFFFF_100%)] bg-clip-text text-transparent inline-block">Seamless</span>{' '}
                      Power <span className="inline-block ml-0">
                        <img src='/assets/images/sparkle.svg' alt="sparkle"
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 inline" />
                      </span>
                    </h2>

                    <div className="mt-2 sm:mt-3 lg:mt-4 flex justify-center">
                      <div className="relative w-full max-w-xl">
                        <button
                          onClick={() => setShowDropdown(s => !s)}
                          className="group w-full rounded-full border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 shadow-[0_12px_40px_-18px_rgba(0,255,255,0.35)] backdrop-blur-md transition hover:border-white/25"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-bold text-xs sm:text-sm lg:text-base truncate" style={{ color: '#1BFFE1' }}>
                              {selectedService || 'Select a Service'}
                            </span>
                            <span className="flex items-center justify-center rounded-full bg-[#0b1222]/80 px-3 sm:px-4 lg:px-6 py-1 sm:py-1.5 lg:py-2 flex-shrink-0 shadow-[4px_-4px_10px_2px_rgba(0,169,147,0.4)]">
                              <ChevronDown className={`h-3 w-3 sm:h-4 sm:w-4 text-white/80 transition ${showDropdown ? 'rotate-180' : ''}`} />
                            </span>
                          </div>
                        </button>

                        {showDropdown && (
                          <div className="absolute left-0 right-0 mt-2 overflow-hidden rounded-xl sm:rounded-2xl border border-white/15 bg-black/90 shadow-2xl backdrop-blur-xl z-10 max-h-[250px] sm:max-h-[300px] overflow-y-auto">
                            {services.map((item: string) => (
                              <button
                                key={item}
                                onClick={() => handleServiceSelect(item)}
                                className="w-full px-3 sm:px-4 py-2 sm:py-3 text-left text-white/85 hover:bg-white/10 border-b border-white/5 last:border-b-0 text-xs sm:text-sm"
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Two preview cards */}
                    <div className="flex flex-col gap-2 w-full max-w-[240px] sm:max-w-xs md:max-w-sm mx-auto">

                      {/* Card 1 — Flowchart */}
                      <div className="w-full rounded-lg sm:rounded-xl bg-white/5 border border-white/8 px-2.5 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3">
                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-red-400 shadow-[0_0_8px_2px_rgba(248,113,113,0.5)]" />
                        <span className="text-white font-semibold text-[11px] sm:text-xs md:text-sm flex-1">Flowchart</span>
                        <span className="text-white/40 text-[10px] sm:text-xs italic flex-shrink-0">Processing.....</span>
                      </div>

                      {/* Card 2 — Generating magic */}
                      <div className="w-full rounded-lg sm:rounded-xl bg-white/5 border border-white/8 px-2.5 sm:px-3 md:px-4 py-3 sm:py-3.5 md:py-5 flex flex-col items-center gap-1.5 sm:gap-2 md:gap-3">
                        <div className="flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center">
                          <img src='/assets/images/magic.gif' alt="Animation" className="w-full h-full object-contain" />
                        </div>
                        <h2 className="text-[11px] sm:text-sm md:text-base font-bold text-white">Generating magic...</h2>
                        <div className="w-full space-y-1 sm:space-y-1.5">
                          <div className="w-full bg-white/10 rounded-full h-1 sm:h-1.5 md:h-2">
                            <div className="bg-gradient-to-r from-cyan-400 to-teal-300 h-1 sm:h-1.5 md:h-2 rounded-full w-[15%]" />
                          </div>
                          <p className="text-white/40 text-[10px] sm:text-xs italic text-center">Screen 1/6</p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}

                {/* QUIZ SCREEN */}
                {currentStep === 'quiz' && currentQuestionData && !showUserInfoForm && (
                  <div className="flex flex-col">
                    <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                      <div className="inline-block px-3 sm:px-4 lg:px-5 py-1 sm:py-1.5 lg:py-2 bg-cyan-400/10 text-cyan-300 rounded-full text-xs mb-3 sm:mb-4 lg:mb-6 border border-cyan-400/20 font-medium">
                        Question {globalQuestionIndex} of {totalQuestionsInPath}
                        {currentServiceKey && currentServiceKey !== selectedService && (
                          <span className="ml-2">• {currentServiceKey}</span>
                        )}
                      </div>
                      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-extrabold text-white mb-3 sm:mb-4 lg:mb-6 px-2 sm:px-4">
                        {currentQuestionData.question}
                      </h2>
                      <div className="w-full max-w-2xl mx-auto bg-white/10 rounded-full h-1.5 sm:h-2">
                        <div
                          className="bg-gradient-to-r from-cyan-400 to-teal-300 h-1.5 sm:h-2 rounded-full transition-all duration-500"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 max-w-4xl mx-auto mt-4 sm:mt-6 lg:mt-8 w-full">
                      {currentQuestionData.options.map((option: string) => {
                        const isSelected =
                          currentQuestionData.type === 'multiple'
                            ? ((answers[currentQuestionData.id] as string[]) || []).includes(option)
                            : answers[currentQuestionData.id] === option;

                        return (
                          <button
                            key={option}
                            onClick={() =>
                              handleAnswer(
                                currentQuestionData.id,
                                option,
                                currentQuestionData.type === 'multiple'
                              )
                            }
                            className={`px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-3.5 rounded-lg sm:rounded-xl text-left transition-all border backdrop-blur-md text-xs sm:text-sm ${
                              isSelected
                                ? 'bg-cyan-400/20 border-cyan-400/50 text-white shadow-[0_0_30px_-10px_rgba(34,211,238,0.5)]'
                                : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-white/20'
                            }`}
                          >
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-medium leading-tight">{option}</span>
                              {isSelected && (
                                <div className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-400 flex-shrink-0">
                                  <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center pt-6 sm:pt-8 lg:pt-10 pb-4">
                      <button
                        onClick={handlePrevious}
                        className="px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-white/5 hover:bg-white/10 text-white rounded-full flex items-center justify-center gap-2 transition-all border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium"
                      >
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
                        Previous
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={
                          !answers[currentQuestionData.id] ||
                          (currentQuestionData.type === 'multiple' &&
                            (answers[currentQuestionData.id] as string[])?.length === 0)
                        }
                        className="px-5 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-500 hover:to-teal-400 disabled:opacity-30 disabled:cursor-not-allowed text-black rounded-full flex items-center justify-center gap-2 transition-all font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] text-xs sm:text-sm"
                      >
                        {currentQuestion === currentQuestions.length - 1 &&
                         !(typeof answers[currentQuestionData.id] === 'string' && serviceQuestions[answers[currentQuestionData.id] as string])
                          ? 'Generate Blueprint' : 'Next'}
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* USER INFO FORM */}
                {showUserInfoForm && currentStep === 'quiz' && (
                  <div className="flex flex-col justify-center min-h-full py-4 sm:py-6">
                    {/* Header */}
                    <div className="mb-5 sm:mb-7">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2 sm:mb-3">
                        Blueprint Generated!
                      </h2>
                      <p className="text-white/60 text-xs sm:text-sm leading-relaxed max-w-lg">
                        Your comprehensive blueprint is ready for download. Share your info and let us help turn your idea into a ready-to-launch project plan.
                      </p>
                    </div>

                    {/* 2-column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
                      {/* Full name */}
                      <div>
                        <label className="block text-white font-semibold text-xs sm:text-sm mb-1.5">Full name</label>
                        <input
                          type="text"
                          value={userInfo.name}
                          onChange={e => setUserInfo(p => ({ ...p, name: e.target.value }))}
                          placeholder="Enter your full name"
                          className={`w-full bg-white/5 border ${userInfoErrors.name ? 'border-red-400/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder:text-white/25 outline-none focus:border-cyan-400/40 transition`}
                        />
                        {userInfoErrors.name && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>

                      {/* E-mail */}
                      <div>
                        <label className="block text-white font-semibold text-xs sm:text-sm mb-1.5">E-mail</label>
                        <input
                          type="email"
                          value={userInfo.email}
                          onChange={e => setUserInfo(p => ({ ...p, email: e.target.value }))}
                          placeholder="Your e-mail here"
                          className={`w-full bg-white/5 border ${userInfoErrors.email ? 'border-red-400/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder:text-white/25 outline-none focus:border-cyan-400/40 transition`}
                        />
                        {userInfoErrors.email && <p className="text-red-400 text-xs mt-1">Valid email required</p>}
                      </div>

                      {/* Company name (optional) */}
                      <div>
                        <label className="block text-white font-semibold text-xs sm:text-sm mb-1.5">Company name <span className="text-white/35 font-normal">(optional)</span></label>
                        <input
                          type="text"
                          value={userInfo.company}
                          onChange={e => setUserInfo(p => ({ ...p, company: e.target.value }))}
                          placeholder="Tell us your company name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder:text-white/25 outline-none focus:border-cyan-400/40 transition"
                        />
                      </div>

                      {/* Phone number */}
                      <div>
                        <label className="block text-white font-semibold text-xs sm:text-sm mb-1.5">Phone number</label>
                        <input
                          type="tel"
                          value={userInfo.phone}
                          onChange={e => setUserInfo(p => ({ ...p, phone: e.target.value }))}
                          placeholder="Enter your phone number"
                          className={`w-full bg-white/5 border ${userInfoErrors.phone ? 'border-red-400/60' : 'border-white/10'} rounded-xl px-4 py-3 text-white text-xs sm:text-sm placeholder:text-white/25 outline-none focus:border-cyan-400/40 transition`}
                        />
                        {userInfoErrors.phone && <p className="text-red-400 text-xs mt-1">Required</p>}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-5">
                      <button
                        onClick={resetGenerator}
                        className="w-full py-3 sm:py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 font-semibold text-xs sm:text-sm transition"
                      >
                        Create Another
                      </button>
                      <button
                        onClick={async () => {
                          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                          const errors = {
                            name: !userInfo.name.trim(),
                            email: !userInfo.email.trim() || !emailRegex.test(userInfo.email),
                            phone: !userInfo.phone.trim(),
                          };
                          setUserInfoErrors(errors);
                          if (!errors.name && !errors.email && !errors.phone) {
                            // Save to Google Sheets (fire-and-forget — don't block generation)
                            fetch('/api/submit-user', {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({
                                userInfo,
                                service: currentServiceKey || selectedService,
                                answers,
                              }),
                            }).catch(err => console.error('Sheet submission error:', err));

                            setShowUserInfoForm(false);
                            generateBlueprint();
                          }
                        }}
                        className="w-full py-3 sm:py-3.5 bg-[#0a1628] hover:bg-[#0f1f3a] border border-cyan-400/30 text-cyan-400 rounded-xl font-semibold text-xs sm:text-sm transition"
                      >
                        Get My Blueprint
                      </button>
                    </div>

                    {/* Confidential note */}
                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                      <span className="text-cyan-400 font-semibold">Confidential Note:</span>{' '}
                      Your information is safe with us. We'll only use it to provide your blueprint and expert guidance.
                    </p>
                  </div>
                )}

                {/* GENERATING SCREEN */}
                {!showUserInfoForm && currentStep === 'generating' && (
                  <div className="flex flex-col justify-center min-h-full space-y-3 sm:space-y-4 px-2 py-4">

                    {/* Card 1 — Flowchart processing */}
                    <div className="w-full max-w-2xl mx-auto rounded-xl sm:rounded-2xl bg-white/5 border border-white/8 px-4 sm:px-6 py-4 sm:py-5 flex items-center gap-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-400 shadow-[0_0_14px_4px_rgba(248,113,113,0.5)]" />
                      <span className="text-white font-semibold text-sm sm:text-base flex-1">Flowchart</span>
                      <span className="text-white/40 text-xs sm:text-sm italic">Processing.....</span>
                    </div>

                    {/* Card 2 — Generating magic */}
                    <div className="w-full max-w-2xl mx-auto rounded-xl sm:rounded-2xl bg-white/5 border border-white/8 px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center gap-4 sm:gap-5">
                      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center">
                        <img src='/assets/images/magic.gif' alt="Generating" className="w-full h-full object-contain" />
                      </div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                        Generating magic...
                      </h2>
                      <div className="w-full space-y-2">
                        <div className="w-full bg-white/10 rounded-full h-2 sm:h-2.5">
                          <div
                            className="bg-gradient-to-r from-cyan-400 to-teal-300 h-2 sm:h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${generatingProgress}%` }}
                          />
                        </div>
                        <p className="text-white/40 text-xs sm:text-sm italic text-center">
                          Screen {Math.floor(generatingProgress / 17)}/6
                        </p>
                      </div>
                    </div>

                  </div>
                )}

                {/* COMPLETE SCREEN */}
                {currentStep === 'complete' && blueprint && (
                  <div className="text-center space-y-6 sm:space-y-8 lg:space-y-10 py-8 sm:py-12 lg:py-16">
                    <div ref={diagramRef} className="w-full max-w-6xl mx-auto bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                      <BlueprintDiagram
                        title={`${currentServiceKey || selectedService} Blueprint`}
                        blueprint={{
                          ...blueprint,
                          inputs: answersToInputs(answers),
                        }}
                      />
                    </div>

                    <div className="mx-auto flex h-20 w-20 sm:h-20 sm:w-20 lg:h-20 lg:w-20 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-400 to-emerald-300 shadow-lg">
                      <Check className="w-12 h-12 sm:w-12 sm:h-12 lg:w-12 lg:h-12 text-white" />
                    </div>
                    <div className="px-4">
                      <h2 className="text-[20px] md:text-[28px] lg:text-[30px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">
                        Blueprint Generated!
                      </h2>
                      <p className="text-white/50 text-base sm:text-lg">
                        Your comprehensive blueprint is ready for download
                      </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5 justify-center pt-4 sm:pt-6 lg:pt-8 px-4">
                      <button
                        onClick={resetGenerator}
                        className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-full transition-all border border-white/10 backdrop-blur-md font-medium text-sm sm:text-base"
                      >
                        Create Another
                      </button>
                      <button
                        onClick={downloadPDF}
                        data-download-btn
                        className="px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-500 hover:to-teal-400 text-black rounded-full flex items-center justify-center gap-2 transition-all font-semibold shadow-[0_0_30px_-10px_rgba(34,211,238,0.6)] text-sm sm:text-base"
                      >
                        <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                        Download Blueprint
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </MacBookFrame>
    </div>
  );
};

export default BlueprintGenerator;