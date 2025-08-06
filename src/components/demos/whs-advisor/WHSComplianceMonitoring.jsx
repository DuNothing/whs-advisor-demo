import React, { useState } from 'react';
import { Eye, ArrowLeft, CheckCircle, AlertTriangle, Clock, TrendingUp, FileText, Shield, Activity, Calendar } from 'lucide-react';

const WHSComplianceMonitoring = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState('overall');

  const complianceData = {
    overall: {
      rate: 94.2,
      status: 'compliant',
      trend: 'up',
      change: '+2.1%'
    },
    training: {
      rate: 89.5,
      status: 'warning',
      trend: 'down',
      change: '-1.2%'
    },
    inspections: {
      rate: 96.8,
      status: 'compliant',
      trend: 'up',
      change: '+0.8%'
    },
    documentation: {
      rate: 91.3,
      status: 'compliant',
      trend: 'up',
      change: '+1.5%'
    }
  };

  const complianceItems = [
    {
      id: 'risk-assessment',
      title: 'Risk Assessment',
      status: 'completed',
      dueDate: '2024-01-15',
      priority: 'high',
      description: 'Annual workplace risk assessment review'
    },
    {
      id: 'safety-training',
      title: 'Safety Training',
      status: 'in-progress',
      dueDate: '2024-01-30',
      priority: 'medium',
      description: 'Mandatory safety training for all workers'
    },
    {
      id: 'incident-reporting',
      title: 'Incident Reporting',
      status: 'completed',
      dueDate: '2024-01-10',
      priority: 'high',
      description: 'Incident reporting procedures review'
    },
    {
      id: 'ppe-inventory',
      title: 'PPE Inventory',
      status: 'overdue',
      dueDate: '2023-12-20',
      priority: 'high',
      description: 'Personal protective equipment inventory check'
    },
    {
      id: 'emergency-procedures',
      title: 'Emergency Procedures',
      status: 'completed',
      dueDate: '2024-01-05',
      priority: 'medium',
      description: 'Emergency evacuation procedures update'
    },
    {
      id: 'safety-committee',
      title: 'Safety Committee',
      status: 'scheduled',
      dueDate: '2024-02-01',
      priority: 'low',
      description: 'Monthly safety committee meeting'
    }
  ];

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

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-amber-400';
      case 'low':
        return 'text-green-400';
      default:
        return 'text-gray-400';
    }
  };

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
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Compliance Monitoring</h1>
                  <p className="text-sm text-gray-400">Real-time tracking of WHS regulatory compliance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Compliance Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {Object.entries(complianceData).map(([category, data]) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`group cursor-pointer bg-gray-800/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'border-cyan-500/50 bg-gray-700/50'
                  : 'border-gray-600/50 hover:border-cyan-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  {data.status === 'compliant' ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-400" />
                  )}
                  <span className="text-sm text-gray-400 capitalize">{category}</span>
                </div>
                <div className={`flex items-center space-x-1 text-sm ${
                  data.trend === 'up' ? 'text-green-400' : 'text-red-400'
                }`}>
                  <TrendingUp className={`w-4 h-4 ${data.trend === 'down' ? 'rotate-180' : ''}`} />
                  <span>{data.change}</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{data.rate}%</h3>
              <p className="text-gray-400 text-sm capitalize">
                {data.status === 'compliant' ? 'Compliant' : 'Needs Attention'}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance Items */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Compliance Items</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 bg-cyan-500 text-white rounded-lg text-sm">Export Report</button>
              <button className="px-3 py-1 bg-gray-700 text-gray-300 rounded-lg text-sm">Filter</button>
            </div>
          </div>

          <div className="space-y-4">
            {complianceItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 bg-gray-700/30 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(item.status)}`}>
                    {item.status === 'completed' && <CheckCircle className="w-5 h-5" />}
                    {item.status === 'in-progress' && <Activity className="w-5 h-5" />}
                    {item.status === 'overdue' && <AlertTriangle className="w-5 h-5" />}
                    {item.status === 'scheduled' && <Calendar className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Due Date</p>
                    <p className="text-white font-medium">{new Date(item.dueDate).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Priority</p>
                    <p className={`text-sm font-medium ${getPriorityColor(item.priority)}`}>
                      {item.priority.charAt(0).toUpperCase() + item.priority.slice(1)}
                    </p>
                  </div>
                  <button className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg text-sm transition-colors duration-200">
                    {item.status === 'completed' ? 'View' : 'Update'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Timeline */}
        <div className="mt-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Recent Compliance Activities</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
              <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Risk assessment completed</p>
                <p className="text-xs text-gray-400">Annual workplace risk assessment review completed</p>
              </div>
              <span className="text-xs text-gray-400">2h ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
              <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                <Activity className="w-4 h-4 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">Safety training in progress</p>
                <p className="text-xs text-gray-400">156 workers enrolled, 89 completed</p>
              </div>
              <span className="text-xs text-gray-400">4h ago</span>
            </div>
            
            <div className="flex items-center space-x-4 p-3 bg-gray-700/30 rounded-lg">
              <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-white">PPE inventory overdue</p>
                <p className="text-xs text-gray-400">Personal protective equipment inventory check overdue</p>
              </div>
              <span className="text-xs text-gray-400">1d ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WHSComplianceMonitoring;
