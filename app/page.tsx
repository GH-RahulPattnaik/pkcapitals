import Header from '@/components/Header';
import Hero from '@/components/Hero';
import LendingPartners from '@/components/LendingPartners';
import Loans from '@/components/Loans';
import Vehicles from '@/components/Vehicles';
import Benefits from '@/components/Benefits';
import Documents from '@/components/Documents';
import EMICalculator from '@/components/EMICalculator';
import EnquiryForm from '@/components/EnquiryForm';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';

/** Single-page site: sections in the order agreed in the brief. */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LendingPartners />
        <Loans />
        <Vehicles />
        <Benefits />
        <Documents />

        {/* Loan amount calculation placed just before the enquiry and contact sections */}
        <section id="calculator" className="scroll-mt-20 bg-white px-4 py-16 md:px-6 md:py-24 dark:bg-[#060f26]">
          <div className="mx-auto max-w-2xl">
            <EMICalculator />
          </div>
        </section>

        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}