import React, { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import {
  HomeView,
  ToolView,
  FeatureView,
  OfferView,
  FaqView,
  CreateView,
  TokenMetadata,
  ContactView,
  AirdropView,
  DonateView,
} from "../views";

import { ComingSoonView } from "../views/additional/comming_soon";

const Home: NextPage = (props) => {
  // State Variable
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetadData, setOpenTokenMetadData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);
  const [openComingSoon, setOpenComingSoon] = useState(false);
  return (
    <>
      <Head>
        <title>Solana Token Generator | by @bintangmfhd</title>
        <meta name="title" content="Solana Token Generator | by @bintangmfhd" />
        <meta
          name="description"
          content="Platform to generate Solana tokens, send airdrops, and make transactions | Built on the Solana Network."
        />

        <meta name="Solana Token Generator" content="Build Solana Token" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://solana-token.bintangmfhd.com/"
        />
        <meta
          property="og:title"
          content="Solana Token Generator | by @bintangmfhd"
        />
        <meta
          property="og:description"
          content="Platform to generate Solana tokens, send airdrops, and make transactions | Built on the Solana Network."
        />
        <meta
          property="og:image"
          content="https://bintangmfhd.s3.ap-southeast-3.amazonaws.com/photos/1/Tech/Solana%20Token%20Generator.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://twitter.com/bintangmf_hd"
        />
        <meta
          property="twitter:title"
          content="Solana Token Generator | by @bintangmfhd"
        />
        <meta
          property="twitter:description"
          content="Platform to generate Solana tokens, send airdrops, and make transactions | Built on the Solana Network."
        />
        <meta
          property="twitter:image"
          content="https://bintangmfhd.s3.ap-southeast-3.amazonaws.com/photos/1/Tech/Solana%20Token%20Generator.png"
        />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetadData={setOpenTokenMetadData}
        setOpenComingSoon={setOpenComingSoon}
      />
      <FeatureView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetadData={setOpenTokenMetadData}
      />
      <OfferView />
      <FaqView />

      {/* Dynamic Component */}
      {openCreateModal && (
        <div className="new_loader relative h-full bg-state-900">
          <CreateView setOpenCreateModal={setOpenCreateModal} />
        </div>
      )}
      {openTokenMetadData && (
        <div className="new_loader relative h-full bg-state-900">
          <TokenMetadata setOpenTokenMetadData={setOpenTokenMetadData} />
        </div>
      )}
      {openContact && (
        <div className="new_loader relative h-full bg-state-900">
          <ContactView setOpenContact={setOpenContact} />
        </div>
      )}
      {openAirdrop && (
        <div className="new_loader relative h-full bg-state-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}
      {openSendTransaction && (
        <div className="new_loader relative h-full bg-state-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )}
      {openComingSoon && (
        <div className="new_loader relative h-full bg-state-900">
          <ComingSoonView setOpenComingSoon={setOpenComingSoon} />
        </div>
      )}
    </>
  );
};

export default Home;
