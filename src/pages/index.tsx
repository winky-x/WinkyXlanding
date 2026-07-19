import React from "react";
import { motion } from "framer-motion";

const PageLayout = ({ category, title, children }: { category?: string, title: string, children: React.ReactNode }) => (
  <div className="min-h-screen bg-black text-zinc-300 pt-36 pb-32 px-6 relative z-10 selection:bg-zinc-800 selection:text-white">
    <div className="max-w-3xl mx-auto">
      {category && (
        <span className="text-xs uppercase tracking-[3px] text-zinc-500 font-bold block mb-4">
          {category}
        </span>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-tight">
        {title}
      </h1>
      <div className="h-[1px] w-full bg-zinc-800/80 mb-12" />
      <div className="space-y-10 text-base md:text-lg leading-relaxed text-zinc-300 font-normal">
        {children}
      </div>
    </div>
  </div>
);

export function WhyChooseUs() {
  return (
    <PageLayout category="WinkyX Overview" title="Why Choose WinkyX?">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        WinkyX is designed to solve the single greatest vulnerability in modern communication: <strong className="text-white font-medium">the cloud</strong>. 
        Even when using other "secure" apps, you are still trusting a third-party server to hold, route, or manage your encrypted data. 
        If that server is compromised, shut down, or intercepted, your connection fails.
      </p>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Direct Device-to-Device Mesh</h2>
        <p className="text-zinc-400">
          Our proprietary <strong className="text-white font-medium">Digital Pigeon Protocol</strong> completely removes the cloud from your conversations. Instead of sending messages to a server, WinkyX devices connect directly with one another over local Bluetooth and Wi-Fi mesh networks. Messages hop safely from device to device to reach their destination.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Mathematical, Serverless Security</h2>
        <p className="text-zinc-400">
          We cannot see, track, store, or intercept your messages because there are no servers. You do not have to trust a company or a middleman—the mathematics of WinkyX protect your privacy automatically.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Designed for Real-World Safety</h2>
        <p className="text-zinc-400">
          Whether you are in a crowded stadium, traveling off-grid, or in an emergency area with no cellular service, WinkyX keeps you connected. It is built to be resilient, completely private, and incredibly simple for anyone to use.
        </p>
      </div>
    </PageLayout>
  );
}

export function Privacy() {
  return (
    <PageLayout category="Legal & Compliance" title="Privacy Policy">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        Our privacy policy is the simplest in the world: <strong className="text-white font-medium">We collect absolutely nothing.</strong>
      </p>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">We Have No Data to Sell or Share</h2>
        <p className="text-zinc-400">
          Because WinkyX operates entirely without central servers or databases, we do not track your phone number, your email, your contacts, or your chat history. There are no tracking scripts, no advertisements, and no analytics.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Safe Storage on Your Device (Secure Vault)</h2>
        <p className="text-zinc-400">
          Your messages and contacts are kept exclusively on your physical phone. We protect this data with record-level encryption (<span className="text-zinc-200 font-medium">XSalsa20-Poly1305</span>). Your database is unlocked only by a Master Password that stays strictly in your phone's temporary RAM—meaning if anyone steals your phone, they cannot access your chats without your password.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Local Network Routing</h2>
        <p className="text-zinc-400">
          Messages route directly via local wireless nodes. No ISP, carrier, or foreign entity can monitor who you talk to or when you speak. Your metadata is completely obscured within the mesh network.
        </p>
      </div>
    </PageLayout>
  );
}

export function WhatIsPrivacy() {
  return (
    <PageLayout category="Philosophy" title="What is Privacy?">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        Privacy is not about having something to hide; it is about having something to protect. It is the fundamental human right to decide what you share, and with whom.
      </p>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Control Over Your Digital Life</h2>
        <p className="text-zinc-400">
          In today's connected world, your personal thoughts, relationships, and conversations are continuously analyzed, logged, and monetized by large tech corporations. True privacy means keeping your private lives private, without compromises.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Protecting Your Metadata</h2>
        <p className="text-zinc-400">
          Many apps encrypt the content of your message, but still let governments and carriers track <em className="text-zinc-300">who</em> you talk to, <em className="text-zinc-300">when</em>, and <em className="text-zinc-300">where</em>. In WinkyX, your connections are anonymous. By routing messages dynamically across local devices, it is impossible to map out your contact list or track your communication patterns.
        </p>
      </div>
    </PageLayout>
  );
}

export function Encryption() {
  return (
    <PageLayout category="Cryptographic Standard" title="Unbreakable Encryption">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        WinkyX uses advanced, state-of-the-art encryption algorithms designed to keep your messages permanently secure.
      </p>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">One-Time Pad (OTP) Cryptography</h2>
        <p className="text-zinc-400">
          While ordinary messengers use standard encryption that could eventually be cracked by future supercomputers, WinkyX implements <strong className="text-white font-medium">One-Time Pad (OTP)</strong> payloads. One-Time Pads are mathematically proven to be unconditionally secure—making it impossible for even quantum-level computers to decode your messages without the exact key.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Secure Key Exchange</h2>
        <p className="text-zinc-400">
          WinkyX uses industry-standard <code className="bg-white/5 px-2 py-0.5 rounded text-white text-sm">Curve25519</code> for safe key exchange and <code className="bg-white/5 px-2 py-0.5 rounded text-white text-sm">Ed25519</code> for secure digital signatures. Every chat session uses unique, temporary keys that roll and destroy themselves automatically, ensuring that past conversations remain secure even if a device is compromised in the future.
        </p>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Anti-Tamper Vault</h2>
        <p className="text-zinc-400">
          Your encryption keys are protected on your device using a key forged from 100,000 rounds of PBKDF2 hashing, backed by the hardware-level Secure Enclave of your phone.
        </p>
      </div>
    </PageLayout>
  );
}

export function Architecture() {
  return (
    <PageLayout category="Technical Specification" title="System Architecture">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        WinkyX is built on a decoupled architecture composed of a React Native (Expo) client and a core cryptographic and mesh networking layers.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">1. The Secure Vault (Data at Rest)</h2>
        <p className="text-zinc-400 leading-relaxed mb-4">
          To protect conversations if a physical device is lost or seized, WinkyX implements a multi-tiered Secure Vault. 
          Upon initial configuration, the user's Master Password is run through <strong className="text-white font-medium">100,000 iterations of PBKDF2</strong> to forge an AES-256 Master Key. 
          This master key resides strictly in volatile RAM and is never written to disk. 
          Furthermore, only a cryptographic salt and verification hash are stored in the device's hardware Secure Enclave.
        </p>
        <p className="text-zinc-400 leading-relaxed">
          We do not rely on standard database encryption. Every single message, attachment reference, and contact record is individually encrypted using <strong className="text-white font-medium">XSalsa20-Poly1305</strong> before being inserted into the local SQLite database. All database transactions strictly utilize parameterized queries to render SQL injection attacks impossible.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">2. The Digital Pigeon Protocol (Data in Transit)</h2>
        <p className="text-zinc-400">
          WinkyX completely replaces HTTP. It utilizes the <strong className="text-white font-medium">Digital Pigeon Protocol (DPP)</strong>, a proprietary mesh-relay communication standard. 
          Large message payloads are sliced into <strong className="text-white font-medium">10 shards (8 data, 2 parity)</strong> using Reed-Solomon Erasure Coding, guaranteeing successful reconstruction even if some relay nodes go offline.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">3. Cryptographic Primitives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wider text-emerald-400">Symmetric Security</h4>
            <p className="text-zinc-400 text-sm">AES-256 via PBKDF2 key generation with 100k rounds in volatile RAM.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wider text-emerald-400">Asymmetric Identity</h4>
            <p className="text-zinc-400 text-sm">Curve25519 for secure key exchange, and Ed25519 for digital signatures.</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wider text-emerald-400">Message Payload</h4>
            <p className="text-zinc-400 text-sm">One-Time Pad (OTP) XOR encryption layered beneath NaCl tweetnacl boxes.</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export function ThreatModelPage() {
  return (
    <PageLayout category="Security Matrix" title="Threat Model & Mitigations">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        Unlike other platforms that rely on trust, WinkyX is built to be mathematically secure against real-world attack vectors.
      </p>

      <div className="space-y-8 mt-12">
        <div className="border-b border-zinc-800 pb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Server Database Breach</h3>
          <p className="text-zinc-400">
            <strong className="text-emerald-400 font-medium">Mitigation:</strong> Not applicable. WinkyX does not use servers or centralized message queues. There are no backend databases to breach, leak, or intercept.
          </p>
        </div>

        <div className="border-b border-zinc-800 pb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Physical Device Seizure</h3>
          <p className="text-zinc-400">
            <strong className="text-emerald-400 font-medium">Mitigation:</strong> All local database entries are encrypted with XSalsa20-Poly1305. The Master Key is kept only in temporary RAM. If the device is taken or powered down, the database becomes completely unreadable ciphertext.
          </p>
        </div>

        <div className="border-b border-zinc-800 pb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Sybil Attacks (Mesh Flooding)</h3>
          <p className="text-zinc-400">
            <strong className="text-emerald-400 font-medium">Mitigation:</strong> To prevent attackers from spawning malicious nodes to flood the mesh network, every message shard requires a <strong className="text-white font-medium">12-bit SHA-256 Proof-of-Work (PoW)</strong> calculation. This imposes a negligible (under 15ms) cost on standard users but makes massive spam attacks computationally ruinous.
          </p>
        </div>

        <div className="border-b border-zinc-800 pb-8">
          <h3 className="text-lg font-semibold text-white mb-2">Quantum Decryption (Future)</h3>
          <p className="text-zinc-400">
            <strong className="text-emerald-400 font-medium">Mitigation:</strong> Standard public-key encryption is vulnerable to future quantum computers. WinkyX payloads are encrypted using true One-Time Pads (OTP), which are mathematically proven to be unconditionally secure against infinite computational power.
          </p>
        </div>

        <div className="pb-4">
          <h3 className="text-lg font-semibold text-white mb-2">Forensic Memory Analysis</h3>
          <p className="text-zinc-400">
            <strong className="text-emerald-400 font-medium">Mitigation:</strong> In high-risk scenarios, WinkyX's "Nuclear Wipe" feature instantly zeroes out volatile memory (RAM), destroys authentication hashes in the secure store, and destroys the Vault hashes.
          </p>
        </div>
      </div>

    </PageLayout>
  );
}

export function DigitalPigeonProtocol() {
  return (
    <PageLayout category="Routing Protocol" title="Digital Pigeon Protocol">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        The <strong className="text-white font-medium">Digital Pigeon Protocol (DPP)</strong> is WinkyX's proprietary offline mesh-relay networking layer that routes messages without relying on cellular towers, ISPs, or the Internet.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Reed-Solomon Erasure Coding</h2>
        <p className="text-zinc-400">
          Traditional mesh networks often suffer from high packet loss. DPP resolves this by slicing messages and key blocks into <strong className="text-white font-medium">10 independent shards (8 data shards and 2 parity shards)</strong>. As long as any 8 of the 10 shards reach the destination via different paths in the mesh, the complete message can be mathematically reconstructed.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">12-bit Proof-of-Work (PoW)</h2>
        <p className="text-zinc-400">
          To maintain the health of the peer-to-peer network, each node enforces a 12-bit SHA-256 Proof-of-Work puzzle for every packet relay. This rate-limiting mechanism makes it impossible for attackers to hijack routing tables or flood nearby devices.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">SSID Fingerprinting & Greedy Handshake</h2>
        <p className="text-zinc-400">
          Devices dynamically discover peers in the background using Bluetooth Low Energy (BLE) and Wi-Fi Direct. When two nodes establish a greedy handshake, they negotiate temporary secure tunnels using SSID fingerprinting to rapidly pass along shards intended for distant nodes.
        </p>
      </div>
    </PageLayout>
  );
}

export function OneTimePad() {
  return (
    <PageLayout category="Cryptographic Standard" title="One-Time Pad (OTP) Security">
      <p className="text-lg text-zinc-200 leading-relaxed font-light">
        WinkyX incorporates <strong className="text-white font-medium">One-Time Pad (OTP)</strong> payload encryption to guarantee absolute, unbreakable security.
      </p>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Mathematically Unbreakable Cryptography</h2>
        <p className="text-zinc-400">
          Unlike standard encryption algorithms (such as AES or RSA) which rely on mathematical problems that are hard to solve but <em className="text-zinc-300">theoretically</em> crackable with enough computing power, the One-Time Pad is the only mathematically proven cipher that is <strong className="text-white font-medium">unconditionally secure</strong>. Even with infinite time and computing power, an adversary cannot decrypt a true OTP payload without the symmetric key.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Key Management & Local Generation</h2>
        <p className="text-zinc-400">
          WinkyX clients generate 1MB key blocks locally on the device using high-entropy hardware random number generators. These key blocks are securely synchronized between paired contacts directly via the mesh network.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-white mt-12 mb-4 tracking-tight">Perfect Forward Secrecy</h2>
        <p className="text-zinc-400">
          As soon as a segment of the One-Time Pad is used to encrypt or decrypt a message, it is instantly zeroed out of memory and destroyed. This ensures that past conversations can never be decrypted, even if the device's keys are compromised in the future.
        </p>
      </div>
    </PageLayout>
  );
}

export * from './Testing';
export * from './Testing2';
