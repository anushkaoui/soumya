import React, { useState } from 'react';
import { ProposalStatus } from './types';
import FloatingHearts from './components/FloatingHearts';
import { Heart, Music, Stars, PartyPopper } from 'lucide-react';

// Assets
import dogDance from './Dog Dancing GIF.gif';
import partyDance from './Dance Party Dancing GIF.gif';
import reactionDance from './Dance Reaction GIF.gif';
import soumzz from './soumzz.jpeg';

const App: React.FC = () => {
  const [status, setStatus] = useState<ProposalStatus>(ProposalStatus.PENDING);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [isEscaping, setIsEscaping] = useState(false);

  const danceMemes = [dogDance, partyDance, reactionDance];

  const handleNoHover = () => {
    setIsEscaping(true);
    const newX = Math.random() * 200 - 100;
    const newY = Math.random() * 200 - 100;
    setNoButtonPos({ x: newX, y: newY });
  };

  const handleAccept = () => setStatus(ProposalStatus.ACCEPTED);
  const handleReject = () => setStatus(ProposalStatus.REJECTED);

  const resetProposal = () => {
    setIsEscaping(false);
    setNoButtonPos({ x: 0, y: 0 });
    setStatus(ProposalStatus.PENDING);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden bg-pink-50">
      <FloatingHearts />

      {/* Header Decorations */}
      <div className="absolute top-10 left-10 hidden lg:block animate-bounce">
        <Music className="text-pink-400 w-12 h-12 rotate-12" />
      </div>
      <div className="absolute top-20 right-10 hidden lg:block animate-pulse">
        <Stars className="text-yellow-400 w-12 h-12" />
      </div>

      <div className="z-10 bg-white/80 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-2xl border-4 border-pink-200 max-w-2xl w-full text-center transform transition-all duration-500">
        
        {/* --- PENDING STATE --- */}
        {status === ProposalStatus.PENDING && (
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-pink-500 font-bold tracking-widest uppercase text-sm">BROTHERRRRR A QUESTION FOR YA</h2>
              <h1 className="text-4xl md:text-5xl font-black text-gray-800 font-fancy leading-tight">
                NIGGA <span className="text-pink-600"> soumya pathak iitp aids</span> 💃
              </h1>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">"moti"</span>
                <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-sm font-semibold">"chotu"</span>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl bg-gray-50 border-2 border-pink-100 p-2">
               <img 
                 src={danceMemes[0]} 
                 alt="Dance Meme" 
                 className="w-full max-h-64 object-contain"
               />
               <div className="mt-2 text-xs font-bold text-pink-600 italic">
                 the kinda emotes u keep breaking into.
               </div>
            </div>

            <p className="text-xl md:text-2xl text-gray-700 font-medium">
              Anushka and Oshi want to know... <br/>
              <span className="text-pink-500 font-bold">Will you be our Galentine?</span> 💖
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-4">
              <button
                onClick={handleAccept}
                className="group relative flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xl rounded-full shadow-xl hover:scale-110 transition-all duration-300"
              >
                <Heart className="w-6 h-6 fill-current group-hover:animate-ping" />
                YES!
              </button>

              <button
                onClick={handleReject}
                onMouseEnter={handleNoHover}
                style={{
                    transform: isEscaping ? `translate(${noButtonPos.x}px, ${noButtonPos.y}px)` : 'none',
                    transition: 'transform 0.2s ease-out'
                }}
                className="px-10 py-4 border-2 border-gray-300 text-gray-500 font-bold text-xl rounded-full hover:bg-gray-100"
              >
                No
              </button>
            </div>
          </div>
        )}

        {/* --- ACCEPTED STATE --- */}
        {status === ProposalStatus.ACCEPTED && (
          <div className="space-y-8 animate-[fade-in_0.5s_ease-out]">
            <div className="flex justify-center">
               <div className="bg-pink-100 p-6 rounded-full">
                 <PartyPopper className="w-16 h-16 text-pink-600 animate-bounce" />
               </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-pink-600">YAYYY! 🎉</h1>
            <p className="text-2xl text-gray-800 font-bold italic">
              "i mean fax bitchass uk u didnt really have many other options"
            </p>
            <div className="grid grid-cols-2 gap-4">
               <div className="bg-gray-50 rounded-lg p-1 shadow-inner">
                 <img src={danceMemes[1]} alt="Happy Dance" className="rounded-lg h-40 w-full object-contain" />
               </div>
               <div className="bg-gray-50 rounded-lg p-1 shadow-inner">
                 <img src={danceMemes[2]} alt="Squad Goals" className="rounded-lg h-40 w-full object-contain" />
               </div>
            </div>
            <p className="text-gray-500 italic">Get ready for absolute chaos!</p>
          </div>
        )}

        {/* --- REJECTED STATE --- */}
        {status === ProposalStatus.REJECTED && (
          <div className="space-y-8 animate-shake relative min-h-[400px] flex flex-col justify-center">
            {/* The Straight SLOW Slider */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <img 
                 src={soumzz} 
                 alt="disappointed" 
                 className="absolute top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-red-500 shadow-2xl opacity-80 animate-straight-slide"
               />
            </div>

            <div className="flex justify-center">
               <span className="text-8xl">💀</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-gray-800">Ouch...</h1>
            <div className="bg-black text-red-500 p-6 rounded-xl font-mono text-xl shadow-2xl border-2 border-red-500 z-10">
              "this is why u dont get bitches"
            </div>
            <p className="text-gray-600">(u gonna die bitchless)</p>
            <button 
              onClick={resetProposal}
              className="text-pink-500 font-bold underline hover:text-pink-700 z-20 relative"
            >
              Try again?
            </button>
          </div>
        )}
      </div>

      <div className="mt-12 text-center z-10">
        <p className="text-pink-400 font-bold">Made with pyaar for Moti by Anushka & Oshi</p>
      </div>

      <style>{`
        @keyframes straight-slide {
          0% { left: -20%; opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { left: 120%; opacity: 0; }
        }
        .animate-straight-slide {
          animation: straight-slide 5s linear infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 3;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default App;