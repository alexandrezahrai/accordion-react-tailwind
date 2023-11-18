import Accordion from "./components/Accordion";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <section className="mx-auto container relative">
        <div className="text-center max-w-[600px] mx-auto w-full mb-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-lg font-normal text-gray-500 lg:text-xl text-balance">
            Here are some of our FAQs. If you have any other questions
            you&apos;d like answered please feel free to reach out to us.
          </p>
        </div>

        <Accordion backgroundColor="bg-green-200" />
      </section>

      <Footer year="2023" name="Alex Zahrai" url="https://alexandre-zahrai.vercel.app/" />
    </>
  );
}
