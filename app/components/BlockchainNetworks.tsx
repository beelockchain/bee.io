'use client';

import { useState } from 'react';

interface Network {
  id: string;
  name: string;
  logo: string;
  description: string[];
  icon: string;
}

const networks: Network[] = [
  {
    id: 'ethereum',
    name: 'Ethereum',
    logo: '/assets/images/network-ethereum.png',
    icon: '/assets/images/networksec-contenticon1.png',
    description: [
      'The most mature smart contract platform powering DeFi, NFTs, and enterprise dApps.',
      'Ideal for secure, decentralized applications with a strong global ecosystem.',
      'Higher gas fees, but unmatched security, decentralization, and ecosystem maturity.'
    ]
  },
  {
    id: 'bnb',
    name: 'BNB CHAIN',
    logo: '/assets/images/network-bnb.png',
    icon: '/assets/images/networksec-contenticon2.png',
    description: [
      'A high-performance blockchain offering low fees and fast confirmations.',
      'Ideal for cost-efficient DeFi platforms and Web3 applications.',
      'Low gas fees, offering a strong balance between speed, cost, and adoption.'
    ]
  },
  {
    id: 'cardano',
    name: 'CARDANO',
    logo: '/assets/images/network-cardano.png',
    icon: '/assets/images/networksec-contenticon3.png',
    description: [
      'A research-driven blockchain built for long-term scalability and security.',
      'Ideal for regulated environments and high-assurance decentralized systems.',
      'Low and predictable fees, suitable for regulated and long-term applications.'
    ]
  },
  {
    id: 'celo',
    name: 'CELO',
    logo: '/assets/images/network-celo.png',
    icon: '/assets/images/networksec-contenticon4.png',
    description: [
      'A mobile-first blockchain focused on financial inclusion and ease of use.',
      'Optimized for payment systems and real-world crypto adoption.',
      'Ultra-low gas fees, optimized for everyday transactions and global users.'
    ]
  },
  {
    id: 'near',
    name: 'NEAR',
    logo: '/assets/images/network-near.png',
    icon: '/assets/images/networksec-contenticon5.png',
    description: [
      'A developer-friendly blockchain with sharding for high scalability.',
      'Designed for user-friendly dApps and fast-growing Web3 ecosystems.',
      'Low gas fees, enabled by sharding for cost-efficient performance.'
    ]
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    logo: '/assets/images/network-polkadot.png',
    icon: '/assets/images/networksec-contenticon6.png',
    description: [
      'A multi-chain network enabling seamless interoperability between blockchains.',
      'Perfect for building scalable, cross-chain applications with shared security.',
      'Low to moderate fees, with efficient cross-chain communication and shared security.'
    ]
  },
  {
    id: 'polygon',
    name: 'Polygon',
    logo: '/assets/images/network-polygon.png',
    icon: '/assets/images/networksec-contenticon7.png',
    description: [
      'A leading Layer-2 scaling solution for Ethereum with low fees and speed.',
      'Perfect for high-volume dApps, NFTs, and scalable Web3 products.',
      'Very low gas fees, ideal for high-volume dApps and NFT platforms.'
    ]
  },
  {
    id: 'tezos',
    name: 'Tezos',
    logo: '/assets/images/network-tezos.png',
    icon: '/assets/images/networksec-contenticon8.png',
    description: [
      'A self-upgrading blockchain with on-chain governance.',
      'Well-suited for secure smart contracts and long-term enterprise use cases.',
      'Low to moderate gas fees, with efficient smart contract execution.'
    ]
  },
  {
    id: 'tron',
    name: 'TRON',
    logo: '/assets/images/network-tron.png',
    icon: '/assets/images/networksec-contenticon9.png',
    description: [
      'High-throughput blockchain optimized for fast, low-cost transactions.',
      'Best suited for entertainment, content distribution, and scalable dApps.',
      'Very low gas fees, making it ideal for frequent transfers and scalable dApps.'
    ]
  },
  {
    id: 'avalanche',
    name: 'AVALANCHE',
    logo: '/assets/images/network-Avalanche.png',
    icon: '/assets/images/networksec-contenticon10.png',
    description: [
      'A highly scalable platform designed for speed, low latency, and security.',
      'Best for DeFi, enterprise blockchain solutions, and custom subnetworks.',
      'Low gas fees with near-instant finality for high-demand applications.'
    ]
  },
  {
    id: 'substrate',
    name: 'Substrate',
    logo: '/assets/images/network-subtrate.png',
    icon: '/assets/images/networksec-contenticon11.png',
    description: [
      'A flexible blockchain framework for building custom blockchains from scratch.',
      'Enables full control over consensus, governance, and scalability.',
      'Gas fees are configurable, giving projects full control over transaction costs.'
    ]
  },
    {
    id: 'monad',
    name: 'Monad',
    logo: '/assets/images/network-monad.png',
    icon: '/assets/images/networksec-contenticon12.png',
    description: [
      'A faster Layer-1 blockchain with ultra-low latency & high throughput.',
      'It is fully Ethereum-compatible while supporting existing smart contracts & tools.',
      'Parallel execution & optimized consensus enable the scalable performance without sacrificing security or decentralization.'
    ]
  }
];


export default function BlockchainNetworks() {
  const [activeNetwork, setActiveNetwork] = useState<string>('bnb');

  const activeNetworkData =
    networks.find(n => n.id === activeNetwork) || networks[1];

  return (
    <section className="relative  md:h-unset lg:min-h-screen xl:min-h-screen bg-[#0a0e1a] py-20  md:py-10 md:px-2 lg:py-10 lg:px-2 xl:py-20 xl:px-2">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="px-2 max-w-3xl md:max-w-5xl lg:max-w-5xl xl:max-w-5xl font-bold text-[26px] md:text-[clamp(32px,5vw,48px)] lg:text-[clamp(32px,5vw,48px)] xl:text-[clamp(32px,5vw,48px)] mb-5 md:mb-16 lg:mb-16 xl:mb-16
                      bg-gradient-to-r from-[#c9cacc] via-[#e2e2e4] to-[#f1f1f2]
                      bg-clip-text text-transparent font-poppins">
          Next-Gen Blockchain Development
          Networks We Build
        </h1>



        {/* Container */}
        <div className="relative border-t z-10 border-b border-cyan-400 md:rounded-3xl lg:rounded-3xl xl:rounded-3xl md:border md:border-cyan-400  lg:border lg:border-cyan-400  xl:border border-cyan-400  bg-[#1A1C2B]">

          {/* TABS */}
          <div className="grid grid-cols-6 gap-4
                           sm:grid-cols-6
                          max-md:grid-cols-5 poin 
                           p-5 sm:p-5 md:p-8 lg:p-8 xl:p-8 bg-[#12141E] md:rounded-t-3xl lg:rounded-t-3xl xl:rounded-t-3xl ">

            {networks.map((network) => {
              const active = activeNetwork === network.id;

              return (
                  <button
                    key={network.id}
                    onClick={() => setActiveNetwork(network.id)}
                    className={`
                      flex items-center justify-center cursor-pointer
                     p-1    xl:p-5
                     h-[25px] md:h-[30px] xl:h-[64px]
                      transition-all duration-200

                      ${active
                        ? `
                          border-1 border-cyan-400
                          bg-gradient-to-r from-[#0f1720] to-[#1f8f8a]
                          [background-clip:padding-box]
                          relative
                          before:absolute before:inset-0 before:rounded-[12px]
                          before:p-[1px]
                          before:bg-gradient-to-r before:from-cyan-400 before:to-emerald-400
                          before:-z-10
                        `
                        : 'bg-[#12141E] border-[#12141E] hover:border-cyan-400/60'
                      }

                      rounded-[12px]
                      md:rounded-[12px]
                      max-md:rounded-full
                    `}
                  >

                  <img
                    src={network.logo}
                    className="w-auto md:w-[100%] lg:w-auto xl:w-auto object-cover sm:p-6"
                  />
                </button>
              );
            })}
          </div>
            <hr className='border-cyan-400 hidden sm:hidden md:block lg:block xl:block'/>
          {/* CONTENT */}
            <div className='p-5 md:p-8 lg:p-8 xl:p-8 bg-[#1A1C2B] rounded-b-3xl'>
               <div className="bg-[#434650] rounded-2xl p-5 md:p-10 lg:p-10 xl:p-10 border border-slate-600/40">


            <div className="flex flex-col md:flex-row md:gap-10 lg:gap-10 xl:gap-10 md:items-start lg:items-start xl:items-start">

              {/* ICON */}
              <div className="md:w-[140px] md:h-[90px] lg:w-[140px] lg:h-[90px] xl:w-[140px] xl:h-[90px] flex items-center justify-center rounded-xl mt-10 m-5">
                <img src={activeNetworkData.icon} className="w-40 scale-110 " />
              </div>

              {/* TEXT */}
              <ul className="space-y-1 font-manrope md:space-y-1 lg:space-y-1 xl:space-y-1 mt-6 md:ml-15 lg:ml-15 xl:ml-15 text-slate-200 text-[12px] md:text-[12px] lg:text-[16px] xl:text-[18px] font-semibold leading-5 md:leading-6 lg:leading-7 xl:leading-7">
                {activeNetworkData.description.map((item, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text-white text-lg">•</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          </div>
            </div>

        </div>
      </div>
        {/* Bottom glow area */}
<div className="pointer-events-none absolute bottom-0 left-0 w-full 
                md:h-[120px] lg:h-[45px] xl:h-[150px] 
                overflow-hidden z-0">
  {/* center glow */}
  <div className="absolute inset-0 flex justify-center">
    <div
      className="
        w-[2000px] h-full
        bg-[radial-gradient(ellipse_at_center,rgba(0,255,200,0.35)_0%,rgba(0,255,200,0.18)_35%,rgba(0,0,0,0)_70%)]
        blur-[60px]
      "
    />
  </div>

  {/* left & right dark fade (keeps sides black) */}
  <div className="absolute inset-0 
      bg-[linear-gradient(to_right,#0a0e1a_0%,transparent_30%,transparent_70%,#0a0e1a_100%)]">
  </div>

</div>

    </section>
  );
}
