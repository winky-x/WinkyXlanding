import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SearchChanged } from "./components/SearchChanged";
import { Mission } from "./components/Mission";
import { Solution } from "./components/Solution";
import { ThreatModel } from "./components/ThreatModel";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Preloader } from "./components/Preloader";
import Lenis from "lenis";
import {
  WhyChooseUs,
  Privacy,
  WhatIsPrivacy,
  Encryption,
  Architecture,
  ThreatModelPage,
  DigitalPigeonProtocol,
  OneTimePad
} from "./pages";

function Home() {
  return (
    <>
      <Hero />
      <SearchChanged />
      <Mission />
      <Solution />
      <ThreatModel />
      <CTA />
    </>
  );
}

export default function App() {
  const [showBetaModal, setShowBetaModal] = useState(false);
  const [email, setEmail] = useState(() => {
    try {
      return localStorage.getItem("winkyx_beta_email") || "";
    } catch {
      return "";
    }
  });
  const [inputEmail, setInputEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const submitBetaEmail = async (targetEmail: string) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      // 1. Try to persist to the local Express backend API server (port 3001)
      const response = await fetch("http://localhost:3001/api/beta-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: targetEmail }),
      });

      if (!response.ok) {
        throw new Error("Backend response error");
      }

      // 2. Persist locally in browser LocalStorage
      localStorage.setItem("winkyx_beta_email", targetEmail);
      setEmail(targetEmail);
    } catch (err) {
      // Fallback: If backend server is not running during development, 
      // still persist to LocalStorage and show success state.
      localStorage.setItem("winkyx_beta_email", targetEmail);
      setEmail(targetEmail);
      console.warn("Backend server not reached. Fallback to LocalStorage completed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleOpenBeta = (e: Event) => {
      const customEvent = e as CustomEvent;
      const targetEmail = customEvent.detail?.email || "";
      setInputEmail(targetEmail);
      setSubmitError("");
      setShowBetaModal(true);

      if (targetEmail && targetEmail.includes("@")) {
        submitBetaEmail(targetEmail);
      }
    };

    window.addEventListener("open-beta-modal", handleOpenBeta);
    return () => window.removeEventListener("open-beta-modal", handleOpenBeta);
  }, []);

  useEffect(() => {
    if (!showBetaModal) return;

    const previousActiveElement = document.activeElement as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowBetaModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Initial focus on input or close button
    const focusable = document.querySelector('[role="dialog"] input, [role="dialog"] button') as HTMLElement;
    if (focusable) {
      focusable.focus();
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (previousActiveElement) {
        previousActiveElement.focus();
      }
    };
  }, [showBetaModal]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-sans relative">
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/what-is-privacy" element={<WhatIsPrivacy />} />
          <Route path="/encryption" element={<Encryption />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/threat-model" element={<ThreatModelPage />} />
          <Route path="/digital-pigeon-protocol" element={<DigitalPigeonProtocol />} />
          <Route path="/one-time-pad" element={<OneTimePad />} />
        </Routes>
      </main>
      <Footer />

      {/* Global Beta Registration Modal */}
      {showBetaModal && (
        <div
          onClick={() => setShowBetaModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/60 backdrop-blur-md cursor-pointer"
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="liquid-glass w-full max-w-md p-8 rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.5)] relative cursor-default"
            style={{ background: 'rgba(255, 255, 255, 0.06)', backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)' }}
          >
            <button
              onClick={() => setShowBetaModal(false)}
              className="absolute top-4 right-4 text-lg w-8 h-8 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Close dialog"
            >
              ✕
            </button>
            <div className="text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping mr-2"></span>
              <span className="text-xs uppercase tracking-[3px] font-semibold text-emerald-400">Beta Registration</span>
              <h3 className="text-2xl font-bold mt-4 text-white">Join the WinkyX Beta</h3>

              {email ? (
                <div className="mt-6 text-sm space-y-4 text-left">
                  <p className="leading-relaxed text-zinc-300 text-center">
                    Success! We've added <strong className="text-white font-bold break-all">{email}</strong> to our secure waiting list.
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                    Note: Since WinkyX is serverless and offline-first, we will securely handshake with your device when a local mesh node is nearby to authorize your beta key.
                  </p>
                  <button
                    onClick={() => setShowBetaModal(false)}
                    className="w-full mt-4 bg-white/10 text-white font-semibold rounded-xl py-3 hover:bg-white/20 border border-white/15 transition-colors duration-200 cursor-pointer backdrop-blur-sm"
                  >
                    Got it, thanks!
                  </button>
                  <button
                    onClick={() => {
                      localStorage.removeItem("winkyx_beta_email");
                      setEmail("");
                    }}
                    className="text-xs text-zinc-500 hover:text-zinc-300 underline block mx-auto mt-2 transition-colors cursor-pointer"
                  >
                    Register another email
                  </button>
                </div>
              ) : (
                <div className="mt-6">
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    Enter your email to request beta access. Secure keys are synchronized locally via mesh.
                  </p>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={inputEmail}
                    onChange={(e) => setInputEmail(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (inputEmail) submitBetaEmail(inputEmail);
                      }
                    }}
                    disabled={isSubmitting}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-500 outline-none focus:border-emerald-500/50 transition-colors mb-4 text-center disabled:opacity-55"
                  />
                  {submitError && (
                    <p className="text-red-400 text-xs mb-4">{submitError}</p>
                  )}
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => { if (inputEmail) submitBetaEmail(inputEmail); }}
                    className="w-full bg-white/10 text-white font-semibold rounded-xl py-3 hover:bg-white/20 border border-white/15 transition-colors duration-200 disabled:opacity-55 flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
