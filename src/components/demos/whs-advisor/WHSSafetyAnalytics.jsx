import React, { useState } from 'react';
import { BarChart3, ArrowLeft, TrendingUp, AlertTriangle, CheckCircle, Clock, Users, Activity } from 'lucide-react';

// Metrics data for different timeframes
const metricsData = {
  week: [
    {
      title: 'Safety Incidents',
      value: '2',
      change: '-33%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      title: 'Compliance Rate',
      value: '93.5%',
      change: '+1.0%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'Training Hours',
      value: '210',
      change: '+5%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-400'
    },
    {
      title: 'Active Workers',
      value: '150',
      change: '+1',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400'
    }
  ],
  month: [
    {
      title: 'Safety Incidents',
      value: '12',
      change: '-25%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      title: 'Compliance Rate',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'Training Hours',
      value: '1,247',
      change: '+15%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-400'
    },
    {
      title: 'Active Workers',
      value: '156',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400'
    }
  ],
  quarter: [
    {
      title: 'Safety Incidents',
      value: '30',
      change: '-10%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      title: 'Compliance Rate',
      value: '92.8%',
      change: '+1.8%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'Training Hours',
      value: '3,500',
      change: '+10%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-400'
    },
    {
      title: 'Active Workers',
      value: '158',
      change: '+5',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400'
    }
  ],
  year: [
    {
      title: 'Safety Incidents',
      value: '120',
      change: '-15%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      title: 'Compliance Rate',
      value: '91.5%',
      change: '+3.2%',
      trend: 'up',
      icon: CheckCircle,
      color: 'text-green-400'
    },
    {
      title: 'Training Hours',
      value: '14,800',
      change: '+20%',
      trend: 'up',
      icon: Clock,
      color: 'text-blue-400'
    },
    {
      title: 'Active Workers',
      value: '162',
      change: '+8',
      trend: 'up',
      icon: Users,
      color: 'text-purple-400'
    }
  ]
};

// Trends data for different timeframes
const trendsData = {
  week: [
    { month: 'Mon', incidents: 1, compliance: 90 },
    { month: 'Tue', incidents: 0, compliance: 92 },
    { month: 'Wed', incidents: 0, compliance: 93 },
    { month: 'Thu', incidents: 1, compliance: 94 },
    { month: 'Fri', incidents: 0, compliance: 95 },
    { month: 'Sat', incidents: 0, compliance: 96 },
    { month: 'Sun', incidents: 0, compliance: 97 }
  ],
  month: [
    { month: 'Jan', incidents: 8, compliance: 89 },
    { month: 'Feb', incidents: 6, compliance: 91 },
    { month: 'Mar', incidents: 5, compliance: 93 },
    { month: 'Apr', incidents: 4, compliance: 94 },
    { month: 'May', incidents: 3, compliance: 95 },
    { month: 'Jun', incidents: 2, compliance: 96 }
  ],
  quarter: [
    { month: 'Q1', incidents: 19, compliance: 90 },
    { month: 'Q2', incidents: 11, compliance: 92 },
    { month: 'Q3', incidents: 8, compliance: 94 },
    { month: 'Q4', incidents: 7, compliance: 95 }
  ],
  year: [
    { month: '2021', incidents: 140, compliance: 87 },
    { month: '2022', incidents: 130, compliance: 89 },
    { month: '2023', incidents: 120, compliance: 91 },
    { month: '2024', incidents: 110, compliance: 93 }
  ]
};

const WHSSafetyAnalytics = ({ onBack }) => {
  // State for selected timeframe (week, month, quarter, year)
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');

  // Get metrics and trends for the selected timeframe
  const metrics = metricsData[selectedTimeframe];
  const safetyTrends = trendsData[selectedTimeframe];

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
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Safety Analytics</h1>
                  <p className="text-sm text-gray-400">Performance metrics and insights</p>
                </div>
              </div>
            </div>
            
            {/* Timeframe selection buttons */}
            <div className="flex space-x-2">
              {['week', 'month', 'quarter', 'year'].map((timeframe) => (
                <button
                  key={timeframe}
                  onClick={() => setSelectedTimeframe(timeframe)}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors duration-200 ${
                    selectedTimeframe === timeframe
                      ? 'bg-cyan-500 text-white'
                      : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                  }`}
                >
                  {timeframe.charAt(0).toUpperCase() + timeframe.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className={`w-8 h-8 ${metric.color}`} />
                  <div className={`flex items-center space-x-1 text-sm ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
                <p className="text-gray-400 text-sm">{metric.title}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Safety Trends Chart */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Safety Trends</h3>
            <div className="space-y-4">
              {safetyTrends.map((data, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400 w-8">{data.month}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4">
                      {/* Incidents bar */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs text-gray-400">Incidents</span>
                          <span className="text-xs text-red-400">{data.incidents}</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-red-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(data.incidents / (selectedTimeframe === 'week' ? 2 : selectedTimeframe === 'month' ? 10 : selectedTimeframe === 'quarter' ? 20 : 150)) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      {/* Compliance bar */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xs text-gray-400">Compliance</span>
                          <span className="text-xs text-green-400">{data.compliance}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${data.compliance}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity List */}
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {/* Activity: Safety training completed */}
              <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Safety training completed</p>
                  <p className="text-xs text-gray-400">156 workers trained this {selectedTimeframe}</p>
                </div>
                <span className="text-xs text-gray-400">2h ago</span>
              </div>
              {/* Activity: Risk assessment updated */}
              <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Risk assessment updated</p>
                  <p className="text-xs text-gray-400">New hazards identified and mitigated</p>
                </div>
                <span className="text-xs text-gray-400">4h ago</span>
              </div>
              {/* Activity: Incident reported */}
              <div className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                <div className="w-8 h-8 bg-amber-500/20 rounded-full flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Incident reported</p>
                  <p className="text-xs text-gray-400">Minor injury - investigation in progress</p>
                </div>
                <span className="text-xs text-gray-400">1d ago</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WHSSafetyAnalytics;
