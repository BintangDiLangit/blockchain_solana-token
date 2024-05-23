import React, { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Branding } from "components/Branding";

export const ComingSoonView = ({ setOpenComingSoon }) => {
  // Component
  const CloseModal = () => (
    <a
      onClick={() => setOpenComingSoon(false)}
      className="group mt-4 inline-flex h-10 w-10 items-center
    justify-center rounded-lg bg-white/20 backdrop-blur-2xl 
    transition-all duration-500 hover:bg-blue-600/60"
    >
      <i className="text-2xl text-white group-hover:text-white">
        <AiOutlineClose />
      </i>
    </a>
  );

  return (
    <>
      <section className="flex w-full items-center py-6 px-0 lg:h-screen lg:p-10">
        <div className="container">
          <div
            className="bg-default-950/40 mx-auto max-w-5xl overflow-hidden rounded-2xl
        backdrop-blur-2xl"
          >
            <div className="grid gap-10 lg:grid-cols-2">
              {/* First */}
              <Branding
                image="img-7"
                title="@bintangmfhd"
                message="We are working on this feature, stay tuned!"
              />
              <div className="lg-ps-0 flex h-full flex-col p-10">
                <div className="text-end">
                  <CloseModal />
                </div>
                <div className="my-auto pb-20 text-center">
                  <div className="flex items-start justify-center">
                    <img
                      src={"assets/images/logout.svg"}
                      alt=""
                      className="h-40"
                    />
                  </div>

                  <h4 className="text-2xl font-bold text-white mt-5">
                    Coming Soon :)
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
