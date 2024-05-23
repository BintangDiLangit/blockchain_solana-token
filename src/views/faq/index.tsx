export const FaqView = ({}) => {
  const questions = [
    {
      question: " What is Solana?",
      answer:
        " Solana is a high-performance blockchain supporting fast transactions and low fees, designed to scale applications for global adoption.",
      id: "faq-1",
    },
    {
      question: " How can I generate a Solana token?",
      answer:
        "Our platform provides user-friendly tools to create and manage your own Solana tokens easily without needing extensive technical knowledge.",
      id: "faq-2",
    },
    {
      question: " What is an airdrop and how can I send one?",
      answer:
        " An airdrop is a method of distributing tokens to multiple wallet addresses. You can use our platform to send airdrops quickly and efficiently.",
      id: "faq-3",
    },
    {
      question: " How does Solana ensure fast transaction speeds?",
      answer:
        "Solana uses a unique combination of Proof of History (PoH) and other innovative technologies o achieve high throughput and low latency.",
      id: "faq-4",
    },
    {
      question: "  What are the benefits of using Solana for my project?",
      answer:
        "Solana offers high scalability, low transaction costs, and fast processing times, making it ideal for decentralized applications and large-scale projects.",
      id: "faq-5",
    },
    {
      question: " Is it safe to use your platform for transactions?",
      answer:
        "Yes, our platform is built on the secure and robust Solana network, ensuring your transactions and token management are safe and reliable.",
      id: "faq-6",
    },
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-medium capitalize text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-default-200 text-sm font-medium">
              Find answers to commonly asked questions about Solana and our
              platform.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="hs-accordion-group space-y-4">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`hs-accordion bg-default-950/40 overflow-hidden 
                rounded-lg border border-white/10 backdrop-blur-3xl`}
                id={question.id}
              >
                <button
                  className="hs-accordion-toggle inline-flex items-center justify between gap-x-3
                px-6 py-4 text-left capitalize text-white transition-all"
                  aria-controls={`faq-accordion-${index + 1}`}
                >
                  <h5 className="flex text-base font-semibold">
                    <i className="me-3 h-5 w-5 stroke-white align-middle"></i>
                    {question.question}
                  </h5>
                  <i className="hs-accordion-active:-rotate-180 h-4 w-4 transition-all duration-500"></i>
                </button>
                <div
                  id={`faq-accordion-${index + 1}`}
                  className="hs-accordion-content 
                w-full overflow-hidden transition-[height] duration-300"
                  style={{ display: "none" }}
                  aria-labelledby={question.id}
                >
                  <div className="px-6 pb-4 pt-0">
                    <p className="text-default-300 mb-2 text-sm font-medium">
                      {question.answer}
                    </p>
                    <p className="text-default-300 text-small font-medium">
                      If you are interested in becoming a blockchain developer,
                      just reach out me.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
