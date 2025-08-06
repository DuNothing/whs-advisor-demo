import React, { useState, useEffect } from 'react';
import { Book, Gavel, FileText, ExternalLink, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, AlertCircle, CheckCircle, Users, HardHat, MessageCircle, X, Send, Info } from 'lucide-react';
import { GLOSSARY, STATE_VARIATIONS } from './whsGlossaryAndStates';

const LEGISLATION = [
  {
    id: 'whs-act',
    title: 'Work Health & Safety Act 2011',
    summary: 'The primary piece of legislation governing workplace health and safety in Australia.',
    details: 'The WHS Act sets out the primary obligations for employers (PCBU) and workers, including duty of care, consultation, and risk management. It applies to most workplaces across Australia.',
    link: 'https://www.legislation.gov.au/Details/C2011A00137',
    type: 'act',
  },
  {
    id: 'whs-regulations',
    title: 'WHS Regulations 2017',
    summary: 'Detailed regulations supporting the WHS Act, outlining specific requirements for risk management, training, and reporting.',
    details: 'The Regulations provide practical guidance on how to meet the general duties under the WHS Act, including hazardous work, incident notification, and worker representation.',
    link: 'https://www.legislation.nsw.gov.au/view/html/inforce/current/sl-2017-0404',
    type: 'regulation',
  },
  {
    id: 'codes-practice',
    title: 'Model Codes of Practice',
    summary: 'Practical guides for achieving the standards of health, safety, and welfare required under the WHS Act and Regulations.',
    details: 'Codes of Practice provide detailed guidance on specific topics like manual handling, hazardous chemicals, and consultation. They are not law but can be used as evidence of what is reasonably practicable.',
    link: 'https://www.safeworkaustralia.gov.au/doc/model-codes-practice',
    type: 'code',
  },
];

const GlossaryPanel = () => {
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const filtered = GLOSSARY.filter(({ term, definition }) =>
    term.toLowerCase().includes(search.toLowerCase()) ||
    definition.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="mt-12">
      <div className="flex items-center mb-4">
        <Info className="w-5 h-5 mr-2 text-cyan-300" />
        <span className="text-lg font-semibold text-cyan-300">Glossary of Terms</span>
      </div>
      <input
        type="text"
        className="w-full mb-4 px-4 py-2 rounded bg-gray-800 border border-cyan-700/40 text-cyan-100 placeholder-cyan-400 focus:outline-none focus:border-cyan-400"
        placeholder="Search for a term or definition..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul className="divide-y divide-cyan-800">
        {filtered.length === 0 && (
          <li className="py-3 text-cyan-400">No matching terms found.</li>
        )}
        {filtered.map(({ term, definition }) => (
          <li key={term} className="py-3">
            <button
              className="flex items-center w-full text-left focus:outline-none"
              onClick={() => setExpanded(expanded === term ? null : term)}
              aria-expanded={expanded === term}
            >
              <span className="font-bold text-cyan-200 mr-2">{term}</span>
              {expanded === term ? <ChevronUp className="w-4 h-4 text-cyan-300" /> : <ChevronDown className="w-4 h-4 text-cyan-300" />}
            </button>
            {expanded === term && (
              <div className="mt-2 bg-gray-900/80 border border-cyan-700/20 rounded p-4 text-blue-100 animate-fade-in">
                {definition}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

const StateVariationsTabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-2 mb-4">
        {STATE_VARIATIONS.map((state, idx) => (
          <button
            key={state.state}
            onClick={() => setActive(idx)}
            className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-all duration-200 ${active === idx ? 'bg-cyan-800 border-cyan-400 text-cyan-200' : 'bg-gray-800 border-transparent text-cyan-400 hover:bg-cyan-900'}`}
            aria-selected={active === idx}
            role="tab"
          >
            {state.state}
          </button>
        ))}
      </div>
      <div className="bg-gray-900/80 border border-cyan-700/20 rounded-b-lg p-6">
        <h3 className="text-lg font-bold text-cyan-200 mb-2">{STATE_VARIATIONS[active].state}</h3>
        <p className="mb-3 text-blue-100">{STATE_VARIATIONS[active].summary}</p>
        {STATE_VARIATIONS[active].callouts.length > 0 && (
          <div className="space-y-3">
            {STATE_VARIATIONS[active].callouts.map((c, i) => (
              <div key={i} className="bg-yellow-900/30 border-l-4 border-yellow-400 p-4 rounded">
                <div className="font-semibold text-yellow-300 mb-1">{c.title}</div>
                <div className="text-yellow-100 text-sm">{c.content}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const WHSLegislativeGuidanceScreen = ({ onBack }) => {
  const [expanded, setExpanded] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState([]);
  // Chat widget state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  // Chat widget logic
  const handleChatSubmit = (e) => {
    if (chatMessage.trim()) {
      // Simulate AI response
      alert(`AI Response to: "${chatMessage}"`);
      setChatMessage('');
    }
  };

  // Particle animation for visual consistency
  useEffect(() => {
    const initialParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.2 + 0.1,
      opacity: Math.random() * 0.3 + 0.2,
      color: Math.random() > 0.5 ? 'cyan' : 'blue',
    }));
    setParticles(initialParticles);
  }, []);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-cyan-900 via-gray-900 to-blue-900 p-0 overflow-x-hidden">
      {/* Animated Particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.size}rem`,
              height: `${p.size}rem`,
              opacity: p.opacity,
              background: `radial-gradient(circle at center, ${p.color}, transparent 70%)`,
              borderRadius: '50%',
              filter: 'blur(2px)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <button
          onClick={onBack}
          className="mb-8 flex items-center text-cyan-400 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Back
        </button>
        <h1 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Legislative Guidance
        </h1>
        <p className="text-cyan-200 mb-10 max-w-2xl">
          Understand the key legislative frameworks that govern workplace health and safety. Explore the WHS Act, Regulations, and Codes of Practice for your obligations and best practices.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {LEGISLATION.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/60 border border-cyan-700/30 rounded-lg shadow-lg p-6 flex flex-col justify-between transition-all duration-300 hover:border-cyan-400/60 hover:shadow-cyan-500/20"
            >
              <div className="flex items-center mb-4">
                {item.type === 'act' && <Gavel className="w-7 h-7 text-cyan-400 mr-2" />}
                {item.type === 'regulation' && <FileText className="w-7 h-7 text-blue-400 mr-2" />}
                {item.type === 'code' && <Book className="w-7 h-7 text-green-400 mr-2" />}
                <h2 className="text-xl font-semibold text-white">
                  {item.title}
                </h2>
              </div>
              <p className="text-cyan-200 mb-2">{item.summary}</p>
              <button
                className="flex items-center text-cyan-300 hover:text-cyan-100 mt-2 mb-4"
                onClick={() => handleExpand(item.id)}
              >
                {expanded === item.id ? (
                  <>
                    <ChevronUp className="w-4 h-4 mr-1" /> Hide details
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 mr-1" /> Show details
                  </>
                )}
              </button>
              {expanded === item.id && (
                <div className="bg-gray-900/80 border border-cyan-700/20 rounded p-4 mb-4 text-cyan-100">
                  <p className="mb-2">{item.details}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-400 hover:underline"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" /> Read full document
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-blue-200 text-sm">
          <AlertCircle className="inline w-4 h-4 mr-1 text-yellow-400" />
          For the most up-to-date legal information, always refer to the official government sources.
        </div>

        {/* Glossary of Terms */}
        <GlossaryPanel />

        {/* State-by-State Variations */}
        <StateVariationsTabs />
      </div>

      {/* Chat with Docs Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen ? (
          <div className="bg-gray-800/95 backdrop-blur-md border border-cyan-500/50 rounded-lg w-80 h-96 shadow-2xl shadow-cyan-500/30">
            <div className="flex items-center justify-between p-4 border-b border-gray-600/50">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
                <h4 className="font-semibold text-white">Chat with WHS Docs</h4>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 h-64 overflow-y-auto">
              <div className="text-sm text-gray-300 bg-gray-700/50 rounded-lg p-3 mb-3">
                <strong className="text-cyan-300">AI Assistant:</strong> I can help you with WHS questions about legislation, compliance, incident procedures, and more. Try asking about duties, hazards, or specific WHS topics!
              </div>
            </div>
            <div className="p-4 border-t border-gray-600/50">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Ask about WHS compliance..."
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                  onKeyPress={(e) => e.key === 'Enter' && handleChatSubmit(e)}
                />
                <button
                  onClick={handleChatSubmit}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-2 rounded-lg transition-all duration-200 shadow-lg shadow-cyan-500/30"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white p-4 rounded-full shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all duration-300 transform hover:scale-110 group"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
          </button>
        )}
      </div>
    </div>
  );
};

export default WHSLegislativeGuidanceScreen;
