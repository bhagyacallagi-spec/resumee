// Common action verbs for resume bullet points
const ACTION_VERBS = [
  'Built', 'Developed', 'Designed', 'Implemented', 'Led', 'Improved', 'Created', 'Optimized',
  'Automated', 'Managed', 'Spearheaded', 'Architected', 'Engineered', 'Launched', 'Delivered',
  'Streamlined', 'Reduced', 'Increased', 'Enhanced', 'Refactored', 'Deployed', 'Integrated',
  'Collaborated', 'Mentored', 'Resolved', 'Achieved', 'Drove', 'Established', 'Initiated',
  'Transformed', 'Accelerated', 'Expanded', 'Secured', 'Negotiated', 'Analyzed', 'Tested',
  'Maintained', 'Supported', 'Coordinated', 'Facilitated', 'Directed', 'Supervised', 'Trained',
];

export interface BulletFeedback {
  hasActionVerb: boolean;
  hasMetrics: boolean;
  suggestions: string[];
}

export function analyzeBullet(text: string): BulletFeedback {
  const trimmedText = text.trim();
  
  if (!trimmedText) {
    return { hasActionVerb: false, hasMetrics: false, suggestions: [] };
  }

  // Check for action verb at start
  const firstWord = trimmedText.split(/\s+/)[0];
  const hasActionVerb = ACTION_VERBS.some(verb => 
    firstWord.toLowerCase() === verb.toLowerCase()
  );

  // Check for metrics (numbers, %, k, m, b, etc.)
  const hasMetrics = /\d|%|\b[kmb]\b|\bthousand\b|\bmillion\b|\bbillion\b/i.test(trimmedText);

  const suggestions: string[] = [];

  if (!hasActionVerb) {
    suggestions.push('Start with a strong action verb.');
  }

  if (!hasMetrics) {
    suggestions.push('Add measurable impact (numbers).');
  }

  return {
    hasActionVerb,
    hasMetrics,
    suggestions,
  };
}

export function getBulletGuidance(text: string): string | null {
  const feedback = analyzeBullet(text);
  
  if (feedback.suggestions.length === 0) {
    return null;
  }

  return feedback.suggestions.join(' ');
}
