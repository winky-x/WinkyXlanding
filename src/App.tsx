import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchChanged } from "./components/SearchChanged";
import { Mission } from "./components/Mission";
import { Solution } from "./components/Solution";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { WhyChooseUs, Privacy, WhatIsPrivacy, Encryption } from "./pages";

function Home() {
  return (
    <>
      <Hero />
      <SearchChanged />
      <Mission />
      <Solution />
      <CTA />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/what-is-privacy" element={<WhatIsPrivacy />} />
          <Route path="/encryption" element={<Encryption />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
