import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="pt-32 pb-24 px-6 container mx-auto max-w-4xl min-h-[80vh]">
    <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-6xl font-medium tracking-tight mb-8">
      {title}
    </motion.h1>
    <motion.div {...fadeUp(0.2)} className="prose prose-invert max-w-none prose-p:text-muted-foreground prose-h2:font-medium prose-h2:mt-12">
      {children}
    </motion.div>
  </div>
);

export function WhyChooseUs() {
  return (
    <PageLayout title="Why Choose Us">
      <p className="text-lg mb-6">
        WinkyX is built from the ground up to solve the fundamental flaw in modern communication: trust in central authorities. 
        When you use traditional secure messengers, you are essentially asking a third-party server to hold your encrypted data and route it. 
        This is a single point of failure.
      </p>
      <h2>The Digital Pigeon Protocol</h2>
      <p>
        Our proprietary Digital Pigeon Protocol completely eliminates the cloud from the equation. Messages are sliced into Reed-Solomon Erasure Coding shards and passed directly between devices via Bluetooth Low Energy and Wi-Fi Direct. 
      </p>
      <h2>Zero-Knowledge by Design</h2>
      <p>
        We literally cannot see, store, or intercept your messages because there are no servers. You don't have to trust us, because the math protects you.
      </p>
    </PageLayout>
  );
}

export function Privacy() {
  return (
    <PageLayout title="Privacy Policy">
      <p className="text-lg mb-6">
        Our privacy policy is simple: We have no data to collect, so we collect nothing.
      </p>
      <h2>Data at Rest</h2>
      <p>
        Your messages, contacts, and identity keys are stored exclusively on your device within the Secure Vault. 
        They are encrypted using XSalsa20-Poly1305 and protected by a PBKDF2 Master Key forged from your Master Password, which is never stored on disk.
      </p>
      <h2>Data in Transit</h2>
      <p>
        When you send a message, it never touches the internet unless absolutely necessary. It bounces between local mesh nodes. We have no backend databases, no analytics trackers, and no telemetry.
      </p>
    </PageLayout>
  );
}

export function WhatIsPrivacy() {
  return (
    <PageLayout title="What is Privacy?">
      <p className="text-lg mb-6">
        Privacy is not about having something to hide; it's about having something to protect.
      </p>
      <h2>The Right to be Left Alone</h2>
      <p>
        In the digital age, your thoughts, conversations, and relationships are constantly mapped, analyzed, and monetized. 
        True privacy means having control over who gets access to your digital life. 
      </p>
      <h2>Beyond Encryption</h2>
      <p>
        Encryption is only part of privacy. If an adversary knows who you are talking to, when you talk to them, and how often (metadata), they often don't need the content of the message. 
        WinkyX's mesh network obscures metadata by utilizing decentralized relays.
      </p>
    </PageLayout>
  );
}

export function Encryption() {
  return (
    <PageLayout title="What is Encryption?">
      <p className="text-lg mb-6">
        Encryption is the mathematical translation of data into a secret code. WinkyX uses the most robust primitives available.
      </p>
      <h2>One-Time Pad (OTP)</h2>
      <p>
        While traditional messengers rely on AES or RSA, WinkyX implements true 1MB One-Time Pads for payload encryption. 
        OTP is the only theoretically unbreakable encryption method. Even with infinite computational power or a quantum computer, decryption without the exact symmetric key is mathematically impossible.
      </p>
      <h2>Perfect Forward Secrecy</h2>
      <p>
        Keys are ephemeral. If an adversary compromises your device tomorrow, they cannot decrypt the messages you sent yesterday. 
        Your Secure Vault automatically rolls and destroys keys as they are used.
      </p>
    </PageLayout>
  );
}
