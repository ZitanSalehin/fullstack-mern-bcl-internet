import { Activity, Download, Wifi, Zap } from "lucide-react";
import { useState } from "react";

const SpeedCheckPage = () => {
  const [speed, setSpeed] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const runSpeedTest = async () => {
    setLoading(true);
    setSpeed(null);
    setProgress(0);

    try {
      const imageUrl =
        "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg";

      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return prev + 10;
        });
      }, 100);

      const startTime = new Date().getTime();
      const response = await fetch(imageUrl, { cache: "no-cache" });
      const blob = await response.blob();
      const endTime = new Date().getTime();

      clearInterval(progressInterval);
      setProgress(100);

      const durationInSeconds = (endTime - startTime) / 1000;
      const bitsLoaded = blob.size * 8;
      const speedBps = bitsLoaded / durationInSeconds;
      const speedMbps = (speedBps / 1024 / 1024).toFixed(2);

      setTimeout(() => {
        setSpeed(speedMbps);
        setLoading(false);
      }, 300);
    } catch (err) {
      console.error(err);
      setLoading(false);
      alert("Error measuring speed. Please try again.");
    }
  };

  const getSpeedCategory = (mbps) => {
    if (mbps < 5) return { text: "Slow", color: "text-red-400" };
    if (mbps < 25) return { text: "Average", color: "text-yellow-400" };
    if (mbps < 100) return { text: "Fast", color: "text-green-400" };
    return { text: "Very Fast", color: "text-emerald-400" };
  };

  const speedCategory = speed ? getSpeedCategory(parseFloat(speed)) : null;

  return (
    <div className="min-h-screenflex items-center justify-center p-4 overflow-hidden">
      <div className="relative text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-700 mb-4 tracking-tight">
          Speed Test
        </h1>
        <p className="text-slate-700 text-lg mb-12">
          Click the button to test your connection
        </p>

        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Circular Progress Ring */}
            <svg className="transform -rotate-90 w-80 h-80">
              <circle
                cx="160"
                cy="160"
                r="140"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="12"
                fill="none"
              />
              <circle
                cx="160"
                cy="160"
                r="140"
                stroke="url(#gradient)"
                strokeWidth="12"
                fill="none"
                strokeDasharray={2 * Math.PI * 140}
                strokeDashoffset={
                  2 * Math.PI * 140 - (progress / 100) * 2 * Math.PI * 140
                }
                className="transition-all duration-300 ease-out"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={runSpeedTest}
                disabled={loading}
                className={`relative w-56 h-56 rounded-full bg-linear-to-br from-cyan-500 to-purple-600 shadow-2xl transition-all duration-300 ${
                  loading
                    ? "cursor-not-allowed"
                    : "hover:scale-105 active:scale-95 hover:shadow-cyan-500/50"
                } ${loading ? "animate-pulse-slow" : ""}`}
              >
                <div className="absolute inset-0 rounded-full bg-linear-to-br from-cyan-400 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

                <div className="relative flex flex-col items-center justify-center h-full text-white">
                  {!loading && !speed && (
                    <>
                      <Zap className="w-16 h-16 mb-3 animate-bounce-slow" />
                      <span className="text-xl font-bold tracking-wide">
                        START
                      </span>
                    </>
                  )}

                  {loading && (
                    <>
                      <Activity className="w-16 h-16 mb-3 animate-spin-slow" />
                      <span className="text-lg font-semibold">Testing...</span>
                      <span className="text-3xl font-bold mt-2">
                        {progress}%
                      </span>
                    </>
                  )}

                  {speed && !loading && (
                    <>
                      <Download className="w-12 h-12 mb-2" />
                      <span className="text-5xl font-bold">{speed}</span>
                      <span className="text-lg font-medium">Mbps</span>
                    </>
                  )}
                </div>

                {!loading && (
                  <>
                    <div className="absolute inset-0 rounded-full animate-ping-slow opacity-75 bg-cyan-500"></div>
                    <div className="absolute inset-0 rounded-full animate-ping-slower opacity-50 bg-purple-500"></div>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {speed && !loading && speedCategory && (
          <div className="animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 max-w-sm mx-auto border border-white/20 shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Wifi className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-700 text-sm uppercase tracking-wider">
                  Connection Status
                </span>
              </div>
              <div className={`text-3xl font-bold ${speedCategory.color}`}>
                {speedCategory.text}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-around text-slate-700 text-sm">
                  <div>
                    <div className="font-semibold text-slate-700">Latency</div>
                    <div>Low</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">
                      Stability
                    </div>
                    <div>High</div>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-700">Quality</div>
                    <div>Excellent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <br />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.75;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
          100% {
            transform: scale(1.15);
            opacity: 0;
          }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping-slower {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        .animate-ping-slower {
          animation: ping-slower 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SpeedCheckPage;
