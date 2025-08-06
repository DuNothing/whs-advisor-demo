import React from 'react';
import WHSAdvisorDemo from './components/demos/whs-advisor';

/**
 * Main App component that serves as the root of the application.
 * 
 * Review Notes:
 * - Simple and clean implementation with a single responsibility
 * - Good practice to have a dedicated component for the demo (WHSAdvisorDemo)
 * - Consider adding error boundaries for better error handling
 * - Could potentially add routing if the app grows to have multiple views
 * - PropTypes or TypeScript could be added for type safety in larger projects
 */
const App = () => {
  return <WHSAdvisorDemo />;
};

export default App;
