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

const Home: NextPage = (props) => {
  // State Variable
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openTokenMetadData, setOpenTokenMetadData] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openAirdrop, setOpenAirdrop] = useState(false);
  const [openSendTransaction, setOpenSendTransaction] = useState(false);
  return (
    <>
      <Head>
        <title>Solana Token Creator | bintangmfhd</title>
        <meta name="Solana Token Creator" content="Build Solana Token" />
      </Head>
      <HomeView setOpenCreateModal={setOpenCreateModal} />
      <ToolView
        setOpenAirdrop={setOpenAirdrop}
        setOpenContact={setOpenContact}
        setOpenCreateModal={setOpenCreateModal}
        setOpenSendTransaction={setOpenSendTransaction}
        setOpenTokenMetadData={setOpenTokenMetadData}
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
      {/* {openAirdrop && (
        <div className="new_loader relative h-full bg-state-900">
          <AirdropView setOpenAirdrop={setOpenAirdrop} />
        </div>
      )}
      {openSendTransaction && (
        <div className="new_loader relative h-full bg-state-900">
          <DonateView setOpenSendTransaction={setOpenSendTransaction} />
        </div>
      )} */}
    </>
  );
};

export default Home;
