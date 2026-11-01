import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Loans from '@/components/Loans';
import Vehicles from '@/components/Vehicles';
import Benefits from '@/components/Benefits';
import Documents from '@/components/Documents';
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
        <Loans />
        <Vehicles />
        <Benefits />
        <Documents />
        <EnquiryForm />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
