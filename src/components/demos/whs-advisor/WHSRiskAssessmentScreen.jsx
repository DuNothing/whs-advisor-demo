import React, { useState, useEffect } from 'react';
import { Shield, ArrowLeft, AlertTriangle, CheckCircle, Clock, Users, Activity, FileText, Plus, Search, Filter, Download, Eye, Edit, Trash2, ChevronRight, ChevronDown, ChevronUp, MapPin, Zap, Target, TrendingUp } from 'lucide-react';

const WHSRiskAssessmentScreen = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailItem, setDetailItem] = useState(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [particles, setParticles] = useState([]);

  // Particle animation
  useEffect(() => {
    const initialParticles = Array.from({ length: 10 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.15 + 0.08,
      opacity: Math.random() * 0.3 + 0.2,
      color: Math.random() > 0.5 ? 'orange' : 'amber'
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

  // Risk assessment data
  const riskData = {
    overall: {
      totalRisks: 24,
      highRisk: 3,
      mediumRisk: 8,
      lowRisk: 13,
      trend: 'down',
      change: '-15%'
    },
    categories: {
      physical: {
        count: 8,
        highRisk: 1,
        mediumRisk: 3,
        lowRisk: 4
      },
      chemical: {
        count: 5,
        highRisk: 1,
        mediumRisk: 2,
        lowRisk: 2
      },
      ergonomic: {
        count: 6,
        highRisk: 0,
        mediumRisk: 2,
        lowRisk: 4
      },
      psychosocial: {
        count: 5,
        highRisk: 1,
        mediumRisk: 1,
        lowRisk: 3
      }
    }
  };

  const riskAssessments = [
    {
      id: 'ra-001',
      title: 'Manual Handling Operations',
      category: 'ergonomic',
      riskLevel: 'high',
      likelihood: 4,
      severity: 4,
      riskScore: 16,
      status: 'in-progress',
      lastUpdated: '2024-01-15',
      assignedTo: 'Sarah Johnson',
      description: 'Assessment of manual handling tasks in warehouse operations',
      controls: [
        'Mechanical lifting equipment provided',
        'Worker training on proper lifting techniques',
        'Regular breaks and rotation of tasks'
      ],
      actions: [
        'Complete ergonomic assessment',
        'Implement additional controls',
        'Monitor effectiveness'
      ]
    },
    {
      id: 'ra-002',
      title: 'Chemical Storage and Handling',
      category: 'chemical',
      riskLevel: 'high',
      likelihood: 3,
      severity: 5,
      riskScore: 15,
      status: 'completed',
      lastUpdated: '2024-01-10',
      assignedTo: 'Mike Chen',
      description: 'Risk assessment for chemical storage and handling procedures',
      controls: [
        'Proper ventilation systems',
        'PPE requirements enforced',
        'Spill response procedures',
        'Regular safety audits'
      ],
      actions: [
        'Review control effectiveness',
        'Update procedures as needed'
      ]
    },
    {
      id: 'ra-003',
      title: 'Workplace Stress and Mental Health',
      category: 'psychosocial',
      riskLevel: 'medium',
      likelihood: 4,
      severity: 3,
      riskScore: 12,
      status: 'in-progress',
      lastUpdated: '2024-01-12',
      assignedTo: 'Lisa Wang',
      description: 'Assessment of psychosocial hazards and workplace stress',
      controls: [
        'Regular team meetings',
        'Employee assistance program',
        'Flexible work arrangements',
        'Stress management training'
      ],
      actions: [
        'Implement stress management program',
        'Conduct employee surveys',
        'Monitor mental health indicators'
      ]
    },
    {
      id: 'ra-004',
      title: 'Machine Guarding and Safety',
      category: 'physical',
      riskLevel: 'medium',
      likelihood: 2,
      severity: 4,
      riskScore: 8,
      status: 'completed',
      lastUpdated: '2024-01-08',
      assignedTo: 'David Smith',
      description: 'Assessment of machine safety and guarding requirements',
      controls: [
        'All machines properly guarded',
        'Lockout/tagout procedures',
        'Regular maintenance schedule',
        'Operator training programs'
      ],
      actions: [
        'Install additional guards where needed',
        'Update maintenance procedures'
      ]
    },
    {
      id: 'ra-005',
      title: 'Working at Heights',
      category: 'physical',
      riskLevel: 'high',
      likelihood: 3,
      severity: 5,
      riskScore: 15,
      status: 'in-progress',
      lastUpdated: '2024-01-14',
      assignedTo: 'Tom Wilson',
      description: 'Risk assessment for working at heights activities',
      controls: [
        'Fall protection equipment',
        'Safety harness training',
        'Work platform inspections',
        'Weather condition monitoring'
      ],
      actions: [
        'Complete fall protection training',
        'Inspect all equipment',
        'Develop rescue procedures'
      ]
    }
  ];

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'high':
        return 'text-red-400 bg-red-500/20';
      case 'medium':
        return 'text-amber-400 bg-amber-500/20';
      case 'low':
        return 'text-green-400 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-400 bg-green-500/20';
      case 'in-progress':
        return 'text-blue-400 bg-blue-500/20';
      case 'overdue':
        return 'text-red-400 bg-red-500/20';
      case 'scheduled':
        return 'text-amber-400 bg-amber-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'physical':
        return 'text-blue-400 bg-blue-500/20';
      case 'chemical':
        return 'text-purple-400 bg-purple-500/20';
      case 'ergonomic':
        return 'text-green-400 bg-green-500/20';
      case 'psychosocial':
        return 'text-pink-400 bg-pink-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const openDetail = (item) => {
    setDetailItem(item);
    setDetailOpen(true);
  };

  const filteredAssessments = riskAssessments.filter(assessment => {
    const matchesCategory = selectedCategory === 'all' || assessment.category === selectedCategory;
    const matchesSearch = assessment.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         assessment.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-md border-b border-orange-500/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Risk Assessment</h1>
                  <p className="text-sm text-gray-400">Identify, assess, and control workplace hazards</p>
                </div>
              </div>
            </div>
            
            {/* Action buttons */}
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg text-sm font-medium transition-colors duration-200">
                <Plus className="w-4 h-4 inline mr-2" />
                New Assessment
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-orange-400" />
              <div className="flex items-center space-x-1 text-sm text-red-400">
                <TrendingUp className="w-4 h-4 rotate-180" />
                <span>{riskData.overall.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{riskData.overall.totalRisks}</h3>
            <p className="text-gray-400 text-sm">Total Risks</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{riskData.overall.highRisk}</h3>
            <p className="text-gray-400 text-sm">High Risk</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <AlertTriangle className="w-8 h-8 text-amber-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{riskData.overall.mediumRisk}</h3>
            <p className="text-gray-400 text-sm">Medium Risk</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{riskData.overall.lowRisk}</h3>
            <p className="text-gray-400 text-sm">Low Risk</p>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search risk assessments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
            </div>
          </div>
          
          <div className="flex space-x-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-orange-500"
            >
              <option value="all">All Categories</option>
              <option value="physical">Physical</option>
              <option value="chemical">Chemical</option>
              <option value="ergonomic">Ergonomic</option>
              <option value="psychosocial">Psychosocial</option>
            </select>
            
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200"
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Risk Assessments List */}
        <div className="space-y-4">
          {filteredAssessments.map((assessment) => (
            <div key={assessment.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{assessment.title}</h3>
                    <p className="text-sm text-gray-400">{assessment.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(assessment.riskLevel)}`}>
                    {assessment.riskLevel.toUpperCase()} RISK
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(assessment.status)}`}>
                    {assessment.status.replace('-', ' ').toUpperCase()}
                  </span>
                  <button
                    onClick={() => toggleExpanded(assessment.id)}
                    className="p-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-colors duration-200"
                  >
                    {expandedItems[assessment.id] ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
              
              {/* Expanded Details */}
              {expandedItems[assessment.id] && (
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Risk Score</h4>
                      <div className="text-2xl font-bold text-white">{assessment.riskScore}</div>
                      <div className="text-xs text-gray-400">
                        Likelihood: {assessment.likelihood} | Severity: {assessment.severity}
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Assigned To</h4>
                      <div className="text-white">{assessment.assignedTo}</div>
                      <div className="text-xs text-gray-400">
                        Updated: {assessment.lastUpdated}
                      </div>
                    </div>
                    
                    <div className="bg-gray-700/30 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Category</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getCategoryColor(assessment.category)}`}>
                        {assessment.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Current Controls</h4>
                      <ul className="space-y-1">
                        {assessment.controls.map((control, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {control}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-300 mb-2">Required Actions</h4>
                      <ul className="space-y-1">
                        {assessment.actions.map((action, index) => (
                          <li key={index} className="text-sm text-gray-400 flex items-center">
                            <Clock className="w-3 h-3 text-amber-400 mr-2" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors duration-200">
                      <Eye className="w-4 h-4 inline mr-2" />
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors duration-200">
                      <Edit className="w-4 h-4 inline mr-2" />
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors duration-200">
                      <Download className="w-4 h-4 inline mr-2" />
                      Export
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Risk Matrix */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Risk Matrix</h3>
          <div className="grid grid-cols-6 gap-2">
            {/* Matrix headers */}
            <div className="text-center text-sm font-medium text-gray-400">Severity</div>
            <div className="text-center text-sm font-medium text-gray-400">1</div>
            <div className="text-center text-sm font-medium text-gray-400">2</div>
            <div className="text-center text-sm font-medium text-gray-400">3</div>
            <div className="text-center text-sm font-medium text-gray-400">4</div>
            <div className="text-center text-sm font-medium text-gray-400">5</div>
            
            {/* Matrix rows */}
            {[5, 4, 3, 2, 1].map((likelihood) => (
              <React.Fragment key={likelihood}>
                <div className="text-center text-sm font-medium text-gray-400">{likelihood}</div>
                {[1, 2, 3, 4, 5].map((severity) => {
                  const score = likelihood * severity;
                  let bgColor = 'bg-gray-700';
                  if (score >= 15) bgColor = 'bg-red-500';
                  else if (score >= 8) bgColor = 'bg-amber-500';
                  else bgColor = 'bg-green-500';
                  
                  return (
                    <div key={severity} className={`${bgColor} rounded text-center text-xs font-medium text-white p-2`}>
                      {score}
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
          
          <div className="mt-4 flex space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
              <span>High Risk (15-25)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-amber-500 rounded mr-2"></div>
              <span>Medium Risk (8-14)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
              <span>Low Risk (1-7)</span>
            </div>
          </div>
        </div>
      </main>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-orange-400 rounded-full opacity-50 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            transform: `scale(${particle.size})`
          }}
        />
      ))}
    </div>
  );
};

export default WHSRiskAssessmentScreen;
