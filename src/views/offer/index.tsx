import React from "react";

export const OfferView = ({}) => {
  return (
    <>
      <section id="support" className="py-20">
        <div className="container">
          <div className="mb-10 flex items-end justify-between">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 text-3xl font-medium capitalize text-white">
                Supported By
              </h2>
              <p className="text-default-200 text-sm font-medium">
                We are backed by the best in the blockchain software industry.
              </p>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* First */}
            <div
              className="bg-default-950/40 hover:translate-y-2 
              border-primary border-s-2 rounded-xl backdrop-blur-3xl
              transition-all duration-500"
            >
              <a href="#">
                <img
                  src="assets/images/ai/img-10.jpg"
                  alt=""
                  className="h-50"
                />
                <div className="p-10">
                  <i className="text-primary h-10 w-10"></i>
                  <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                    Blockchain Developer
                  </h3>
                  <p className="text-default-100 mb-4 text-sm font-medium">
                    ba8659c4732b25457ad475dc8b7f2781a7602ae944b4e40ad20542dc20e02566.
                  </p>
                </div>
              </a>
            </div>
            <div
              className="bg-default-950/40 hover:translate-y-2 
              border-primary border-s-2 rounded-xl backdrop-blur-3xl
              transition-all duration-500"
            >
              <a href="#">
                <img
                  src="assets/images/ai/img-11.jpg"
                  alt=""
                  className="h-50"
                />
                <div className="p-10">
                  <i className="text-primary h-10 w-10"></i>
                  <h3 className="mb-4 mt-8 text-2xl font-medium text-white">
                    Blockchain Developer
                  </h3>
                  <p className="text-default-100 mb-4 text-sm font-medium">
                    65d35a1535f0ffd8bbcfd0d69b73519d18f3c6a763c00fb57194b7527ef93294.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
