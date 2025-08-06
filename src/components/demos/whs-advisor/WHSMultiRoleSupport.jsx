import React, { useState } from 'react';
import { Users, ArrowLeft, Shield, UserCheck, UserX, Settings, Eye, MessageCircle, Calendar, TrendingUp } from 'lucide-react';

const WHSMultiRoleSupport = ({ onBack }) => {
  const [selectedRole, setSelectedRole] = useState('employer');

  const roles = [
    {
      id: 'employer',
      title: 'Employer',
      description: 'Business owners and managers',
      icon: Shield,
      color: 'from-blue-500 to-cyan-600',
      features: [
        'Risk assessment management',
        'Compliance monitoring',
        'Incident reporting oversight',
        'Training program coordination',
        'Safety policy development'
      ],
      stats: {
        activeUsers: 24,
        complianceRate: 94.2,
        incidentsThisMonth: 2
      }
    },
    {
      id: 'worker',
      title: 'Worker',
      description: 'Employees and contractors',
      icon: UserCheck,
      color: 'from-green-500 to-emerald-600',
      features: [
        'Hazard identification',
        'Incident reporting',
        'Safety training access',
        'Personal protective equipment',
        'Emergency procedures'
      ],
      stats: {
        activeUsers: 156,
        trainingCompleted: 89,
        incidentsReported: 8
      }
    },
    {
      id: 'safety-rep',
      title: 'Safety Representative',
      description: 'Health and safety officers',
      icon: UserX,
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Workplace inspections',
        'Incident investigations',
        'Safety committee coordination',
        'Regulatory liaison',
        'Training delivery'
      ],
      stats: {
        activeUsers: 8,
        inspectionsCompleted: 45,
        investigationsActive: 3
      }
    }
  ];

  const currentRole = roles.find(role => role.id === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-md border-b border-cyan-500/50">
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
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Multi-Role Support</h1>
                  <p className="text-sm text-gray-400">Tailored interfaces for different user roles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Role Selection */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Select Your Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roles.map((role) => {
              const IconComponent = role.icon;
              return (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`group cursor-pointer bg-gray-800/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 transform hover:scale-105 ${
                    selectedRole === role.id
                      ? 'border-cyan-500/50 bg-gray-700/50'
                      : 'border-gray-600/50 hover:border-cyan-500/30'
                  }`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{role.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{role.description}</p>
                  
                  {/* Role Stats */}
                  <div className="space-y-2">
                    {role.id === 'employer' && (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Active Users</span>
                          <span className="text-cyan-400 font-semibold">{role.stats.activeUsers}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Compliance Rate</span>
                          <span className="text-green-400 font-semibold">{role.stats.complianceRate}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Incidents (Month)</span>
                          <span className="text-amber-400 font-semibold">{role.stats.incidentsThisMonth}</span>
                        </div>
                      </>
                    )}
                    {role.id === 'worker' && (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Active Users</span>
                          <span className="text-cyan-400 font-semibold">{role.stats.activeUsers}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Training Completed</span>
                          <span className="text-green-400 font-semibold">{role.stats.trainingCompleted}%</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Incidents Reported</span>
                          <span className="text-amber-400 font-semibold">{role.stats.incidentsReported}</span>
                        </div>
                      </>
                    )}
                    {role.id === 'safety-rep' && (
                      <>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Active Users</span>
                          <span className="text-cyan-400 font-semibold">{role.stats.activeUsers}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Inspections Completed</span>
                          <span className="text-green-400 font-semibold">{role.stats.inspectionsCompleted}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Active Investigations</span>
                          <span className="text-amber-400 font-semibold">{role.stats.investigationsActive}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Role Details */}
        {currentRole && (
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${currentRole.color} rounded-lg flex items-center justify-center`}>
                <currentRole.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{currentRole.title} Dashboard</h3>
                <p className="text-gray-400">{currentRole.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Key Features</h4>
                <div className="space-y-3">
                  {currentRole.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200 text-left">
                    <div className="flex items-center space-x-3">
                      <Eye className="w-5 h-5 text-cyan-400" />
                      <div>
                        <p className="text-white font-medium">View Reports</p>
                        <p className="text-xs text-gray-400">Access safety data</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200 text-left">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-white font-medium">Report Issue</p>
                        <p className="text-xs text-gray-400">Submit incident</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200 text-left">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-400" />
                      <div>
                        <p className="text-white font-medium">Training</p>
                        <p className="text-xs text-gray-400">Schedule sessions</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="p-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors duration-200 text-left">
                    <div className="flex items-center space-x-3">
                      <TrendingUp className="w-5 h-5 text-amber-400" />
                      <div>
                        <p className="text-white font-medium">Analytics</p>
                        <p className="text-xs text-gray-400">View metrics</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WHSMultiRoleSupport;
