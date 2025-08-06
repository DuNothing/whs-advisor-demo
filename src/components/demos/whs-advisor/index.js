import React from 'react';
import { useWHSNavigation } from '../../../hooks/useWHSNavigation';
import WHSAdvisorOverview from './WHSAdvisorOverview';
import WHSActRegulationsScreen from './WHSActRegulationsScreen';
import WHSCodesOfPracticeScreen from './WHSCodesOfPracticeScreen';
import WHSIncidentResponseScreen from './WHSIncidentResponseScreen';
import WHSCompensationScreen from './WHSCompensationScreen';
import WHSComplaintsReportingScreen from './WHSComplaintsReportingScreen';
import WHSLegislativeGuidanceScreen from './WHSLegislativeGuidanceScreen';
import WHSSafetyAnalytics from './WHSSafetyAnalytics';
import WHSComplianceMonitoring from './WHSComplianceMonitoring';
import WHSMultiRoleSupport from './WHSMultiRoleSupport';

const WHSAdvisorDemo = () => {
  const navigation = useWHSNavigation();

  const renderCurrentScreen = () => {
    switch (navigation.currentScreen) {
      case 'overview':
        return <WHSAdvisorOverview navigation={navigation} onNext={navigation.navigateNext} />;
      case 'act-regulations':
        return (
          <WHSActRegulationsScreen 
            onNext={navigation.navigateNext}
            onBack={navigation.navigatePrevious}
          />
        );
      case 'codes-practice':
        return (
          <WHSCodesOfPracticeScreen 
            onNext={navigation.navigateNext}
            onBack={navigation.navigatePrevious}
          />
        );
      case 'legislative-guidance':
        return (
          <WHSLegislativeGuidanceScreen 
            onBack={navigation.navigateToOverview}
          />
        );
      case 'safety-analytics':
        return (
          <WHSSafetyAnalytics 
            onBack={navigation.navigateToOverview}
          />
        );
      case 'compliance-monitoring':
        return (
          <WHSComplianceMonitoring 
            onBack={navigation.navigateToOverview}
          />
        );
      case 'multi-role-support':
        return (
          <WHSMultiRoleSupport 
            onBack={navigation.navigateToOverview}
          />
        );
      case 'incident-response':
        return (
          <WHSIncidentResponseScreen 
            onNext={navigation.navigateNext}
            onBack={navigation.navigatePrevious}
          />
        );
      case 'compensation':
        return (
          <WHSCompensationScreen 
            onNext={navigation.navigateNext}
            onBack={navigation.navigatePrevious}
          />
        );
      case 'complaints-reporting':
        return (
          <WHSComplaintsReportingScreen 
            onBack={navigation.navigatePrevious}
            onReturnToStart={navigation.navigateToOverview}
          />
        );
      default:
        return <WHSAdvisorOverview onNext={navigation.navigateNext} />;
    }
  };

  return (
    <div className="whs-advisor-demo">
      {renderCurrentScreen()}
    </div>
  );
};

export default WHSAdvisorDemo;
