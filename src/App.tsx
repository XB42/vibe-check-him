import React, { useState } from 'react';
import { User, MessageCircle, Search, Percent, Brain, ChevronRight, Shield, Heart, AlertTriangle, ThumbsUp, ThumbsDown, Check } from 'lucide-react';

interface EmailFormProps {
  email: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const EmailForm: React.FC<EmailFormProps> = ({ email, onEmailChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="space-y-4">
    <input
      type="email"
      value={email}
      onChange={onEmailChange}
      placeholder="Enter your email"
      className="w-full px-4 py-3 rounded-full bg-white bg-opacity-90 placeholder-gray-400 text-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400"
      required
    />
    <button
      type="submit"
      className="w-full px-6 py-3 text-lg font-medium text-pink-600 bg-white rounded-full hover:bg-pink-100 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
    >
      Get Early Access 💖
    </button>
  </form>
);

interface SuccessMessageProps {
  shareLink: string;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ shareLink }) => (
  <div className="text-center py-4">
    <p className="text-white text-lg font-medium mb-2">
      Thanks, queen! 👑
    </p>
    <p className="text-white text-opacity-90 mb-4">
      We'll send you an invite soon!
    </p>
    <a 
      href={shareLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-2 text-sm font-medium text-pink-600 bg-white rounded-full hover:bg-pink-100 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Share the love! 💕
    </a>
  </div>
);

function App() {
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [heroShareLink, setHeroShareLink] = useState('');
  
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubmitted, setFooterSubmitted] = useState(false);
  const [footerShareLink, setFooterShareLink] = useState('');

  const twitterShareLinks = [
    "https://twitter.com/intent/tweet?text=No%20More%20Toxic%20Guys%20-%20Get%20the%20Truth%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Ditch%20the%20Red%20Flags%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Ready%20to%20Vibe-Check%20Your%20Crush%3F%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Trust%20Your%20Gut%2C%20Then%20Confirm%20It%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Save%20Your%20Heartbreak%20-%20Check%20Him%20Out%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Spot%20the%20Real%20Deal%20or%20the%20Real%20Drama%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Don%27t%20Waste%20Time%20on%20Losers%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Heed%20the%20Warning%20Signs%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Smart%20Dating%20Starts%20Here%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=No%20Second-Guessing%20Needed%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Because%20You%20Deserve%20Better%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Stop%20the%20Toxic%20Cycle%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Better%20Safe%20Than%20Sorry%20-%20Vibe%20Check%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Check%20His%20Vibe%2C%20Protect%20Your%20Peace%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Say%20Goodbye%20to%20Red%20Flags%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Your%20Heart%20Matters%20-%20Verify%20First%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Find%20Out%20If%20He%27s%20Worth%20It%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Date%20Smarter%2C%20Not%20Harder%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Because%20Trust%20Shouldn%27t%20Be%20Blind%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Leave%20the%20Drama%20Behind%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Make%20Informed%20Choices%2C%20Not%20Regrets%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Don%27t%20Date%20in%20the%20Dark%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Empower%20Your%20Dating%20Life%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Guard%20Your%20Heart%20and%20Sanity%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Cut%20Out%20the%20Drama%20Early%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Always%20Stay%20One%20Step%20Ahead%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Take%20the%20Mystery%20Out%20of%20Dating%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Your%20Peace%20Is%20Non-Negotiable%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Never%20Settle%20for%20Less%20Than%20Respect%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Mindful%20Dating%20Starts%20with%20You%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Don%27t%20Guess%20-%20Vibe%20Check%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Protect%20Yourself%20First%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Respect%20Is%20the%20New%20Romance%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Move%20On%20from%20Mediocrity%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Life%27s%20Too%20Short%20for%20Toxic%20Love%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Don%27t%20Let%20Him%20Waste%20Your%20Time%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Red%20Flags%20Are%20Real%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=No%20More%20Sleepless%20Nights%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Love%20Shouldn%27t%20Hurt%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Your%20Vibes%20Deserve%20Alignment%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=No%20More%20Mixed%20Signals%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Get%20the%20Facts%20Before%20You%20Fall%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Embrace%20a%20Healthier%20Love%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Take%20Control%20of%20Your%20Heart%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Find%20Out%20If%20He%27s%20the%20One%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Guard%20Your%20Self-Worth%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Because%20Knowledge%20Is%20Power%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Run%20from%20Relationship%20Red%20Flags%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Protect%20Your%20Future%20Self%21%20Check%3A%20vibecheckhim.com",
    "https://twitter.com/intent/tweet?text=Start%20Loving%20Smarter%20Today%21%20Check%3A%20vibecheckhim.com"
  ];

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * twitterShareLinks.length);
    setHeroShareLink(twitterShareLinks[randomIndex]);
    setHeroSubmitted(true);
  };

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * twitterShareLinks.length);
    setFooterShareLink(twitterShareLinks[randomIndex]);
    setFooterSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-300 to-pink-500">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-5 bg-repeat"></div>
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-flex items-center px-4 py-1 bg-white bg-opacity-20 backdrop-blur-lg rounded-full text-white text-sm mb-6 border border-white border-opacity-20">
              <User className="w-4 h-4 mr-2 text-red-400" />
              AI-Powered Dating Assistant For Women
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Make Better Dating Decisions <span className="text-red-400">🚩🚩🚩</span>
            </h1>
            <p className="text-xl text-white text-opacity-90 mb-8 max-w-lg">
              Your AI bestie who helps you quickly filter red flags in your dating app matches. Stop wasting time on the wrong guys!
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-6 rounded-3xl shadow-xl border border-white border-opacity-20 max-w-md">
              {!heroSubmitted ? (
                <EmailForm 
                  email={heroEmail}
                  onEmailChange={(e) => setHeroEmail(e.target.value)}
                  onSubmit={handleHeroSubmit}
                />
              ) : (
                <SuccessMessage shareLink={heroShareLink} />
              )}
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white border-opacity-20">
              <img
                src="https://i.imgur.com/W9cqwfb.png"
                alt="Dating conversation"
                className="rounded-2xl w-full shadow-lg transform hover:scale-102 transition-transform"
              />
            </div>
          </div>
        </div>

        {/* Questions Section */}
        <div className="max-w-4xl mx-auto text-center mt-32 mb-32">
          {/* First Group */}
          <div className="space-y-12 mb-24">
            <p className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg animate-pulse">
              Do you know if he is an Andrew Tate fan?
            </p>
            <p className="text-4xl md:text-5xl font-semibold text-pink-200 drop-shadow-lg">
              Or what if he has a hidden wife?
            </p>
          </div>

          {/* Second Group */}
          <div className="space-y-12">
            <p className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              Are you tired of the same endless dating cycle?
            </p>
            <p className="text-5xl md:text-6xl font-black text-white drop-shadow-xl">
              Unable to find the man <span className="text-pink-300">YOU</span> want?
            </p>
            <div className="mt-16 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <p className="relative text-black text-6xl md:text-7xl font-black tracking-wider transform hover:scale-105 transition-transform cursor-default border-4 border-white border-opacity-50 rounded-xl px-8 py-4 bg-white">
                This ends TODAY!
              </p>
            </div>
            <div className="mt-16 bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-20 max-w-4xl mx-auto">
              <p className="text-xl text-white leading-relaxed mb-6">
                VibeCheckHim.com is a Telegram bot designed to empower women on dating apps. Simply set your ideal partner criteria, and let our smart AI do the rest.
              </p>
              <p className="text-xl text-white leading-relaxed">
                From generating tailored conversation starters to performing discreet background checks using social media data, this tool gives you the insights you need to confidently navigate your dating life. We take the guesswork out of online dating—ensuring you invest your time in matches that truly resonate with you.
              </p>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="max-w-6xl mx-auto mt-32 mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 drop-shadow-lg">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-20 transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-white text-2xl font-semibold">Tell us what you want!</h3>
              </div>
              <p className="text-white text-lg mb-6">We are here to Listen! Answer our set of questions or directly tell us what you are looking for!</p>
              <ul className="text-white space-y-3">
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-3 text-red-400" />
                  <span>Instantly Blacklist Andrew Tate Fans</span>
                </li>
                <li className="flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-3 text-red-400" />
                  <span>Instantly Blacklist Trump supporters</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>Add income range</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>Add minimum height</span>
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 mr-3 text-green-400" />
                  <span>And lots more</span>
                </li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-20 transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-white text-2xl font-semibold">Use our conversations</h3>
              </div>
              <p className="text-white text-lg mb-4">Instead of thinking of how to respond to his boring messages, let us handle it for you! Just send us screenshots of his conversations and we will craft the perfect response.</p>
              <p className="text-white text-lg italic">Response is trained to subtly identify if he is what you are looking for</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-20 transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-xl">3</span>
                </div>
                <h3 className="text-white text-2xl font-semibold">Give us his socials</h3>
              </div>
              <p className="text-white text-lg">Our skills are at par with yours! We will find you all relevant information of him on the internet. Good or Bad.</p>
            </div>

            {/* Step 4 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white border-opacity-20 transform hover:scale-105 transition-transform">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-white rounded-full border-4 border-pink-400 flex items-center justify-center mr-4">
                  <span className="text-pink-600 font-bold text-xl">4</span>
                </div>
                <h3 className="text-white text-2xl font-semibold">Get your verdict</h3>
              </div>
              <p className="text-white text-lg mb-4">Unable to decide? Don't worry! We will give each guy a score out of 10 on the parameters set by you.</p>
              <p className="text-white text-lg mb-6">We will also give you the best way to drive the guy away in case he is not a good fit.</p>
              <div className="flex justify-center space-x-8">
                <div className="flex items-center">
                  <ThumbsDown className="w-6 h-6 text-red-400 mr-2" />
                  <span className="text-red-400 font-semibold">Red Flag</span>
                </div>
                <div className="flex items-center">
                  <ThumbsUp className="w-6 h-6 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold">Green Flag</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="mt-24 bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-12 max-w-4xl mx-auto shadow-2xl border border-white border-opacity-20">
          <div className="flex items-center justify-center mb-8">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Join the Sisterhood</h2>
          <p className="text-center text-white text-opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of smart women who are done with dating drama. Let AI be your wingwoman and never miss a red flag again! 💅
          </p>
          <div className="max-w-md mx-auto">
            {!footerSubmitted ? (
              <EmailForm 
                email={footerEmail}
                onEmailChange={(e) => setFooterEmail(e.target.value)}
                onSubmit={handleFooterSubmit}
              />
            ) : (
              <SuccessMessage shareLink={footerShareLink} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;