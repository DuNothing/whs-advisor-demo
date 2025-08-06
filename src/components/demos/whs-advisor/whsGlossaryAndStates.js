// Glossary of legal WHS terms
export const GLOSSARY = [
  {
    term: 'Reasonably practicable',
    definition: 'What is reasonably able to be done to ensure health and safety, taking into account likelihood, degree of harm, what is known about the hazard, ways to eliminate or minimise risk, and the costs involved.'
  },
  {
    term: 'Safe work method',
    definition: 'A formal procedure which results from systematic examination of a task to identify all hazards and assess risks.'
  },
  {
    term: 'PCBU',
    definition: 'Person Conducting a Business or Undertaking; the primary duty holder under the WHS Act.'
  },
  {
    term: 'Notifiable incident',
    definition: 'An incident involving death, serious injury/illness, or dangerous occurrence that must be reported to the regulator.'
  },
  // Add more terms as needed
];

// State-by-state WHS legal variations
export const STATE_VARIATIONS = [
  {
    state: 'NSW',
    summary: 'Generally adopts the Model WHS Laws with minor variations.',
    callouts: []
  },
  {
    state: 'QLD',
    summary: 'Adopts Model WHS Laws with additional fatigue management requirements for certain industries.',
    callouts: [
      {
        title: 'Fatigue Rules',
        content: 'Queensland has specific fatigue management requirements for certain high-risk industries such as road transport and mining.'
      }
    ]
  },
  {
    state: 'VIC',
    summary: 'Victoria has its own OHS Act and Regulations, not the Model WHS Laws.',
    callouts: [
      {
        title: 'Different Legal Framework',
        content: 'Victoria operates under the Occupational Health and Safety Act 2004 and associated regulations.'
      }
    ]
  },
  {
    state: 'WA',
    summary: 'Adopted Model WHS Laws in 2022 with some mining-specific provisions.',
    callouts: []
  },
  {
    state: 'SA',
    summary: 'Adopts Model WHS Laws.',
    callouts: []
  },
  {
    state: 'TAS',
    summary: 'Adopts Model WHS Laws.',
    callouts: []
  },
  {
    state: 'NT',
    summary: 'Adopts Model WHS Laws.',
    callouts: []
  },
  {
    state: 'ACT',
    summary: 'Adopts Model WHS Laws.',
    callouts: []
  }
];
