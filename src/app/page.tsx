"use client";

import { useState, useEffect } from 'react';

export default function Home() {
  const [timer, setTimer] = useState('04:59:23');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [redeemCode, setRedeemCode] = useState('');
  const [codeValidated, setCodeValidated] = useState(false);
  
  const handleCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (redeemCode.toUpperCase() === 'WIN8KAJ') {
      setCodeValidated(true);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate processing
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setShowFinalMessage(true);
      }, 3000);
    }, 2000);
  };
  
  useEffect(() => {
    let seconds = 59;
    let minutes = 59;
    let hours = 4;
    
    const interval = setInterval(() => {
      seconds--;
      if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
          minutes = 59;
          hours--;
          if (hours < 0) {
            clearInterval(interval);
            return;
          }
        }
      }
      setTimer(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gradient-to-b from-black via-blue-900 to-black text-white">
      {/* Balance Bar */}
      <div className="fixed top-0 right-0 bg-gradient-to-l from-yellow-600 to-yellow-500 p-3 rounded-bl-lg shadow-lg z-50">
        <div className="font-bold text-black">
          <div className={codeValidated ? "animate-pulse" : ""}>
            <span className="text-lg">Balance: </span>
            <span className="text-xl">{codeValidated ? "8 KAJILLION BTC" : "0 BTC"}</span>
          </div>
        </div>
      </div>
      
      <div className="z-10 max-w-5xl w-full flex flex-col items-center justify-between">
        <div className="text-center mb-8 mt-12">
          <div className={`${codeValidated ? "animate-text-pulse" : ""}`}>
            <h1 className="flex items-center justify-center text-6xl font-bold mb-4">
              <span className="inline-block mr-3 animate-emoji-1">🎉</span>
              <span className="inline-block mr-3 animate-emoji-2">🚀</span>
              <span className="inline-block mr-3 animate-emoji-3">💰</span>
              <span className="text-transparent bg-rainbow animate-rainbow">CONGRATULATIONS</span>
              <span className="inline-block ml-3 animate-emoji-3">💰</span>
              <span className="inline-block ml-3 animate-emoji-2">🚀</span>
              <span className="inline-block ml-3 animate-emoji-1">🎉</span>
            </h1>
          </div>
          <h2 className="text-3xl font-bold mb-8 text-green-400">
            {codeValidated 
              ? (<>You&apos;ve UNLOCKED <span className="text-transparent bg-rainbow animate-rainbow">8 KAJILLION</span> BITCOIN!</>) 
              : "You've WON 58.73 BITCOIN!"}
          </h2>
          <p className="text-xl mb-4">
            Current Value: <span className="text-green-400 font-bold">{codeValidated ? "$∞" : "$3,724,981.26"}</span>
          </p>
          
          {/* Redemption Code Form */}
          {!codeValidated && (
            <div className="max-w-md mx-auto bg-gradient-to-r from-blue-900 to-indigo-900 p-4 rounded-lg mb-6 border border-yellow-300 shadow-lg">
              <h3 className="text-lg font-bold mb-2 text-yellow-300">Enter Redemption Code:</h3>
              <form onSubmit={handleCodeSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={redeemCode}
                  onChange={(e) => setRedeemCode(e.target.value)}
                  placeholder="WIN8KAJ"
                  className="flex-grow p-2 bg-gray-800 border border-indigo-500 rounded-md text-white placeholder-indigo-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-2 px-4 rounded-md shadow-md transform transition hover:scale-105"
                >
                  Unlock
                </button>
              </form>
            </div>
          )}
          <div className="max-w-2xl mx-auto bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 rounded-lg shadow-lg mb-8 border-2 border-yellow-400">
            {codeValidated ? (
              <>
                <p className="text-xl mb-4 font-bold">
                  CONGRATULATIONS! You&apos;ve successfully claimed 8 KAJILLION BITCOIN!
                </p>
                <p className="text-lg">
                  Simply verify your identity below to withdraw your astronomical fortune!
                </p>
              </>
            ) : (
              <>
                <p className="text-xl mb-4">
                  Our advanced blockchain algorithms have selected YOUR wallet address as the GRAND PRIZE WINNER in our crypto distribution event!
                </p>
                <p className="text-lg">
                  Simply verify your identity below to receive your winnings within 24 hours!
                </p>
              </>
            )}
          </div>
        </div>

        <div className="w-full max-w-md">
          <div className="bg-gradient-to-br from-slate-800 via-gray-800 to-zinc-800 p-8 rounded-lg shadow-lg border-2 border-cyan-500">
            <h3 className="text-2xl font-bold mb-6 text-center text-yellow-400">
              {showFinalMessage ? "Thanks for the info! 😂" : "Claim Your Bitcoin Now!"}
            </h3>
            
            {!submitted && (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Social Security Number</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="Enter your SSN (required for verification)" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Credit Card Number</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="For identity verification only" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Expiry Date</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                      placeholder="MM/YY" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">CVV</label>
                    <input 
                      type="text" 
                      className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                      placeholder="123" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Bitcoin Wallet Address</label>
                  <input 
                    type="text" 
                    className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
                    placeholder="Enter your Bitcoin wallet address" 
                  />
                </div>
                <button 
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 hover:from-yellow-500 hover:via-amber-600 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 shadow-lg"
                >
                  {submitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      PROCESSING...
                    </span>
                  ) : `CLAIM MY ${codeValidated ? '8 KAJILLION' : '58.73'} BITCOIN NOW!`}
                </button>
              </form>
            )}
            
            {submitted && !showFinalMessage && (
              <div className="py-6 text-center">
                <svg className="animate-spin mx-auto h-12 w-12 text-green-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-xl text-green-400">Verifying your information...</p>
                <p className="mt-2 text-gray-400">Preparing to transfer {codeValidated ? '8 KAJILLION' : '58.73'} BTC to your wallet</p>
              </div>
            )}
            
            {showFinalMessage && (
              <div className="py-6 text-center">
                <p className="text-2xl text-red-500 font-bold mb-4">THIS IS A FAKE WEBSITE!</p>
                <p className="text-xl mb-4">This was created for an educational project to demonstrate phishing techniques.</p>
                <p className="text-lg mb-6">Never enter personal information on suspicious websites!</p>
              </div>
            )}
            {!showFinalMessage && (
              <div className="mt-6 text-center text-sm text-gray-400">
                <p>Limited time offer! Your prize will expire in:</p>
                <p className="text-red-500 font-bold text-xl mt-2">{timer}</p>
              </div>
            )}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500">
            <p>By claiming your prize, you agree to our terms and conditions.</p>
            <p>MahoneyCoin is not responsible for any government taxes on your winnings.</p>
            <p>©2025 MahoneyCoin Enterprises. Definitely not a scam.</p>
          </div>
        </div>

      </div>
    </main>
  );
}