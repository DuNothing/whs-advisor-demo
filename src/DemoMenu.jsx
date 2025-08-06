import React, { useState, useEffect } from 'react';
import { Lock, User, Eye, EyeOff, Shield, Activity, Settings, Brain, Leaf, Plane, Mountain, Heart, Database, ArrowLeft, Play, FileText, Code, BarChart3, Sparkles, Clock, Users, TrendingUp } from 'lucide-react';
import WHSAdvisorDemo from './components/demos/whs-advisor';

// Authentication and User State
const SouthernCrossPortal = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks if user is logged in
  const [userRole, setUserRole] = useState(null); // Stores user role ('admin' or 'demo')
  const [showLogin, setShowLogin] = useState(false); // Controls login modal visibility
  const [credentials, setCredentials] = useState({ username: '', password: '' }); // Stores login form data
  const [showPassword, setShowPassword] = useState(false); // Toggles password visibility
  const [loginError, setLoginError] = useState(''); // Stores login error messages
  const [isLoading, setIsLoading] = useState(false); // Loading state for login process
// Demo Selection and Display
  const [selectedDemo, setSelectedDemo] = useState(null); // Currently selected demo
  const [isTransitioning, setIsTransitioning] = useState(false); // Animation state for transitions
  const [demoLoading, setDemoLoading] = useState(false); // Loading state for demo initialization

  // Visual Effects
  const [particles, setParticles] = useState([]); // Particle animation data

  const demos = [
    { 
      id: 1, 
      title: 'Clinical Coding Assistant', 
      restricted: true, 
      icon: Heart, 
      category: 'Healthcare',
      description: 'AI-powered medical coding with ICD-10 compliance and accuracy optimization.',
      features: ['ICD-10 Automation', 'Compliance Checking', 'Audit Trail', 'Real-time Validation'],
      accuracy: 99.2,
      usage: 87.5,
      satisfaction: 94.8
    },
    { 
      id: 2, 
      title: 'Work Health & Safety Advisor', 
      restricted: false, 
      icon: Shield, 
      category: 'Safety',
      description: 'Comprehensive workplace safety management with risk assessment and compliance tracking.',
      features: ['Risk Assessment', 'Incident Reporting', 'Compliance Monitoring', 'Safety Analytics'],
      accuracy: 96.8,
      usage: 92.3,
      satisfaction: 91.2,
      screens: 6,
      estimatedTime: '15-20 minutes'
    },
    { 
      id: 3, 
      title: 'Disaster & Emergency Training', 
      restricted: false, 
      icon: Activity, 
      category: 'Emergency',
      description: 'Interactive emergency response training with scenario-based learning modules.',
      features: ['Scenario Training', 'Response Planning', 'Team Coordination', 'Performance Analytics'],
      accuracy: 94.5,
      usage: 78.9,
      satisfaction: 88.7
    },
    { 
      id: 4, 
      title: 'Agricultural Support Assistant', 
      restricted: false, 
      icon: Leaf, 
      category: 'Agriculture',
      description: 'Smart farming solutions with crop management and sustainability insights.',
      features: ['Crop Monitoring', 'Weather Integration', 'Yield Prediction', 'Sustainability Metrics'],
      accuracy: 91.7,
      usage: 85.4,
      satisfaction: 89.9
    },
    { 
      id: 5, 
      title: 'Cybersecurity Compliance Assistant', 
      restricted: false, 
      icon: Settings, 
      category: 'Security',
      description: 'Advanced threat detection and compliance management for enterprise security.',
      features: ['Threat Detection', 'Compliance Auditing', 'Risk Scoring', 'Automated Reporting'],
      accuracy: 97.3,
      usage: 89.6,
      satisfaction: 93.1
    },
    { 
      id: 6, 
      title: 'Civil Aviation Safety Navigator', 
      restricted: false, 
      icon: Plane, 
      category: 'Aviation',
      description: 'Flight safety optimization with real-time monitoring and predictive analytics.',
      features: ['Flight Monitoring', 'Safety Predictions', 'Maintenance Alerts', 'Weather Integration'],
      accuracy: 98.7,
      usage: 76.2,
      satisfaction: 95.4
    },
    { 
      id: 7, 
      title: 'Mining & Geoscience Advisor', 
      restricted: false, 
      icon: Mountain, 
      category: 'Mining',
      description: 'Geological analysis and mining operation optimization with safety prioritization.',
      features: ['Geological Analysis', 'Safety Monitoring', 'Resource Optimization', 'Environmental Impact'],
      accuracy: 93.9,
      usage: 82.1,
      satisfaction: 87.6
    },
    { 
      id: 8, 
      title: 'Aged Care Compliance Advisor', 
      restricted: false, 
      icon: Heart, 
      category: 'Healthcare',
      description: 'Comprehensive aged care compliance with quality assurance and regulatory tracking.',
      features: ['Quality Assurance', 'Regulatory Compliance', 'Care Planning', 'Audit Management'],
      accuracy: 95.6,
      usage: 88.9,
      satisfaction: 92.3
    },
    { 
      id: 9, 
      title: 'NSW Infection Control Advisor', 
      restricted: false, 
      icon: Shield, 
      category: 'Healthcare',
      description: 'State-specific infection control protocols with real-time monitoring and alerts.',
      features: ['Protocol Management', 'Real-time Monitoring', 'Outbreak Prevention', 'Compliance Tracking'],
      accuracy: 97.8,
      usage: 91.4,
      satisfaction: 94.2
    },
    { 
      id: 10, 
      title: 'Community & Institutional Infection Advisor', 
      restricted: false, 
      icon: Shield, 
      category: 'Healthcare',
      description: 'Large-scale infection control for communities and institutions with predictive modeling.',
      features: ['Predictive Modeling', 'Community Tracking', 'Resource Allocation', 'Policy Recommendations'],
      accuracy: 96.4,
      usage: 84.7,
      satisfaction: 90.8
    },
    { 
      id: 11, 
      title: 'Grant Discovery & R&D Navigator', 
      restricted: true, 
      icon: Database, 
      category: 'Research',
      description: 'AI-powered grant discovery with application assistance and research insights.',
      features: ['Grant Matching', 'Application Assistance', 'Research Analytics', 'Success Prediction'],
      accuracy: 94.2,
      usage: 79.6,
      satisfaction: 91.7
    },
    { 
      id: 12, 
      title: 'Advanced AI Research Platform', 
      restricted: false, 
      icon: Brain, 
      comingSoon: true, 
      category: 'Future',
      description: 'Next-generation AI research platform with experimental features.',
      features: ['Experimental AI', 'Research Tools', 'Beta Features', 'Innovation Lab'],
      accuracy: 0,
      usage: 0,
      satisfaction: 0
    }
  ];

  useEffect(() => {
    const initialParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.3 + 0.1,
      opacity: Math.random() * 0.4 + 0.2,
      color: Math.random() > 0.5 ? 'cyan' : 'blue'
    }));
    setParticles(initialParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 105 ? -5 : particle.y + particle.speed,
        x: particle.x + Math.sin(Date.now() * 0.001 + particle.id) * 0.1
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const canAccessDemo = (demo) => {
    if (demo.comingSoon) return false;
    if (!demo.restricted) return true;
    return userRole === 'admin';
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoading(true);
    
    setTimeout(() => {
      if (credentials.username === 'demo_user' && credentials.password === 'Demo2025!') {
        setIsAuthenticated(true);
        setUserRole('demo');
        setShowLogin(false);
        setCredentials({ username: '', password: '' });
      } else if (credentials.username === 'admin_user' && credentials.password === 'Admin2025_Secure!') {
        setIsAuthenticated(true);
        setUserRole('admin');
        setShowLogin(false);
        setCredentials({ username: '', password: '' });
      } else {
        setLoginError('Invalid credentials');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setSelectedDemo(null);
  };

  const handleDemoClick = (demo) => {
    if (!canAccessDemo(demo)) return;
    
    setDemoLoading(true);
    setIsTransitioning(true);
    
    setTimeout(() => {
      setSelectedDemo(demo);
      setIsTransitioning(false);
      setTimeout(() => {
        setDemoLoading(false);
      }, 1200);
    }, 400);
  };

  const handleBackToMenu = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedDemo(null);
      setDemoLoading(false);
      setIsTransitioning(false);
    }, 400);
  };

  const DemoExpansion = ({ demo }) => {

    if (demo.id === 2) { // WHS Advisor demo ID
    return <WHSAdvisorDemo />;
    }

    const IconComponent = demo.icon;
    
    return (
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <div className="bg-gray-800/80 backdrop-blur-md border-b border-cyan-500/50 relative z-10">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {demo.title}
                  </h1>
                  <p className="text-cyan-300 flex items-center space-x-2">
                    <span>{demo.category} • AI-Powered Solution</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </p>
                  <p className="text-gray-400 text-sm mt-1">{demo.description}</p>
                </div>
              </div>
              
              <button
                onClick={handleBackToMenu}
                className="flex items-center space-x-2 bg-gray-700/50 hover:bg-gray-600/50 text-white px-6 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm border border-gray-600/30 hover:border-cyan-500/50 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                <span>Back to Menu</span>
              </button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-6 py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="lg:col-span-2">
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6 relative overflow-hidden">
                {demoLoading && (
                  <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-20 rounded-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-cyan-300 text-lg font-medium">Initializing Demo...</p>
                      <p className="text-gray-400 text-sm">Loading AI components</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <h2 className="text-2xl font-bold text-white">Interactive Demo</h2>
                    <div className="flex items-center space-x-2 bg-green-500/20 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Live</span>
                    </div>
                  </div>
                  <button 
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/30 group"
                    disabled={demoLoading}
                  >
                    <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    <span>Start Demo</span>
                  </button>
                </div>
                
                <div className="bg-gray-900/50 border border-gray-600/30 rounded-lg h-96 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse shadow-lg shadow-cyan-500/50">
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Demo Interface</h3>
                    <p className="text-gray-400 mb-4">Interactive {demo.title.toLowerCase()} interface</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>Real-time</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>Multi-user</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Overview</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {demo.description}
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-400 flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Active</span>
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Version:</span>
                    <span className="text-cyan-300">v3.2.1</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Last Updated:</span>
                    <span className="text-gray-300">July 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Uptime:</span>
                    <span className="text-green-300">99.8%</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <Code className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Key Features</h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  {demo.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors duration-200"></div>
                      <span className="group-hover:text-white transition-colors duration-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6 hover:border-cyan-500/30 transition-colors duration-300">
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart3 className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-white">Performance Metrics</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Accuracy</span>
                      <span className="text-green-400 font-medium">{demo.accuracy}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-1000 ease-out"
                        style={{width: `${demo.accuracy}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Usage Rate</span>
                      <span className="text-cyan-400 font-medium">{demo.usage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-400 rounded-full transition-all duration-1000 ease-out delay-200"
                        style={{width: `${demo.usage}%`}}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">User Satisfaction</span>
                      <span className="text-purple-400 font-medium">{demo.satisfaction}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full transition-all duration-1000 ease-out delay-500"
                        style={{width: `${demo.satisfaction}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const LoginModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900/90 border border-cyan-500 rounded-lg p-8 w-96 shadow-2xl shadow-cyan-500/30 backdrop-blur-md relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, cyan 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 relative">
              <Lock className="w-6 h-6 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-white text-center mb-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Secure Access Portal
          </h2>
          <p className="text-gray-400 text-center text-sm mb-6">Enterprise Authentication System</p>
        
          <div className="space-y-4">
            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-cyan-400" />
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                  placeholder="Enter username"
                  disabled={isLoading}
                />
              </div>
            </div>
            
            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 w-4 h-4 text-cyan-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  onKeyPress={(e) => e.key === 'Enter' && handleLogin(e)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-lg pl-10 pr-10 py-2 text-white focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200"
                  placeholder="Enter password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-cyan-300 transition-colors duration-200"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            
            {loginError && (
              <div className="text-red-400 text-sm text-center">{loginError}</div>
            )}
            
            <button
              onClick={handleLogin}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 disabled:shadow-none flex items-center justify-center relative overflow-hidden group"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <span className="relative z-10">Access Portal</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </>
              )}
            </button>
          </div>
          
          <button
            onClick={() => setShowLogin(false)}
            className="w-full mt-4 text-gray-400 hover:text-cyan-300 transition-colors duration-200 relative z-10"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
        {particles.map(particle => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${particle.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${particle.size * 2}px ${particle.color === 'cyan' ? '#22d3ee' : '#3b82f6'}`
            }}
          />
        ))}
        
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
        
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="text-center relative z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-cyan-500/50 animate-pulse relative">
            <Shield className="w-16 h-16 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            </div>
            <div className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-blue-500 rounded-full animate-spin"></div>
          </div>
          
          <h1 className="text-8xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            SouthernCross.ai
          </h1>
          <p className="text-cyan-300 text-2xl mb-2 animate-pulse">Advanced AI Demos Portal</p>
          <p className="text-gray-400 text-lg mb-2">Next-Generation Enterprise Solutions</p>
          <p className="text-gray-500 text-sm mb-8">Powered by Artificial Intelligence</p>
          
          <button
            onClick={() => setShowLogin(true)}
            className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:via-blue-500 hover:to-purple-500 text-white font-bold py-4 px-12 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center space-x-2">
              <span>Enter Portal</span>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
        </div>
        
        {showLogin && <LoginModal />}
      </div>
    );
  }

  if (selectedDemo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Reduced particles for demo view */}
        {particles.slice(0, 15).map(particle => (
          <div
            key={particle.id}
            className={`absolute rounded-full ${particle.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size * 0.7}px`,
              height: `${particle.size * 0.7}px`,
              opacity: particle.opacity * 0.6,
              filter: 'blur(0.5px)'
            }}
          />
        ))}
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, cyan 2px, transparent 0)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <DemoExpansion demo={selectedDemo} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Floating particles for main grid */}
      {particles.slice(0, 20).map(particle => (
        <div
          key={particle.id}
          className={`absolute rounded-full ${particle.color === 'cyan' ? 'bg-cyan-400' : 'bg-blue-400'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size * 0.8}px`,
            height: `${particle.size * 0.8}px`,
            opacity: particle.opacity * 0.7,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-800/30"></div>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25px 25px, cyan 2px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-800/30"></div>
      
      <header className="bg-gray-800/80 backdrop-blur-md border-b border-cyan-500/50 relative z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/50 relative">
                <Shield className="w-6 h-6 text-white" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SouthernCross.ai
                </h1>
                <p className="text-cyan-300 text-sm">AI Demos Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm bg-gray-700/50 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                <span className="text-gray-400">Logged in as: </span>
                <span className="text-cyan-300 font-medium">
                  {userRole === 'admin' ? 'Administrator' : 'Demo User'}
                </span>
                <div className="inline-block w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-600/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm border border-red-500/30 hover:shadow-lg hover:shadow-red-500/20"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            AI-Powered Solutions
          </h2>
          <p className="text-gray-400 text-lg mb-4">
            Access {userRole === 'admin' ? 'all 12' : '10'} advanced AI demonstrations
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live System</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <span>Real-time Analytics</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
              <span>Enterprise Ready</span>
            </div>
          </div>
          <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {demos.map((demo) => {
            const IconComponent = demo.icon;
            const accessible = canAccessDemo(demo);
            
            return (
              <div
                key={demo.id}
                onClick={() => handleDemoClick(demo)}
                className={`
                  group relative bg-gray-800/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 cursor-pointer
                  ${accessible 
                    ? 'border-gray-600/50 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 hover:bg-gray-700/50 transform hover:scale-105' 
                    : 'border-gray-700/50 opacity-50 cursor-not-allowed'
                  }
                  ${demo.restricted && userRole !== 'admin' ? 'relative' : ''}
                  ${isTransitioning ? 'pointer-events-none' : ''}
                `}
              >
                {accessible && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                      ${accessible 
                        ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70' 
                        : 'bg-gray-600'
                      }
                    `}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {demo.restricted && userRole !== 'admin' && (
                      <Lock className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {demo.title}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
                      {demo.category}
                    </span>
                    
                    {demo.comingSoon ? (
                      <span className="text-amber-400 text-sm font-medium">Coming Soon</span>
                    ) : demo.restricted && userRole !== 'admin' ? (
                      <span className="text-red-400 text-sm font-medium">Restricted</span>
                    ) : (
                      <span className="text-cyan-300 text-sm font-medium">Available</span>
                    )}
                  </div>
                  
                  {accessible && !demo.comingSoon && (
                    <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                      {demo.description}
                    </p>
                  )}
                  
                  {accessible && !demo.comingSoon && demo.accuracy > 0 && (
                    <div className="mb-3">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">Performance</span>
                        <span className="text-cyan-400">{demo.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                          style={{width: `${demo.accuracy}%`}}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {accessible && !demo.comingSoon && (
                    <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default SouthernCrossPortal;
