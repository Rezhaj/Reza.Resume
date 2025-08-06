import React from 'react';

// Official social media SVG icons
export const SocialIcons = {
  github: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  ),
  linkedin: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  twitter: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  googlescholar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" width="24" height="24">
      <path d="M320 32L0 192l320 160 256-128v96h64V192L320 32zM128 336v144c0 17.7 
  14.3 32 32 32h128V368h64v144h128c17.7 0 32-14.3 32-32V336L320 416 128 
  336z" fill="currentColor" />
    </svg>
  ),
  orcid: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6c-5.304 0-9.6-4.296-9.6-9.6 0-5.304 4.296-9.6 9.6-9.6 5.304 0 9.6 4.296 9.6 9.6 0 5.304-4.296 9.6-9.6 9.6zM8.4 8.4h1.2v7.2H8.4V8.4zm3.6 0h3.6c2.004 0 3.6 1.596 3.6 3.6 0 2.004-1.596 3.6-3.6 3.6H12V8.4zm1.2 6h2.4c1.332 0 2.4-1.068 2.4-2.4 0-1.332-1.068-2.4-2.4-2.4H13.2v4.8z" />
    </svg>
  ),
  researchgate: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
      <path d="M0 32C0 14.3 14.3 0 32 0h448c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32H32c-17.7 
  0-32-14.3-32-32V32zm129 109v201h46v-60h34l37.5 60h54.7l-44.6-68c15.3-4.3 26.2-12.4 
  33.3-24.3 5.3-8.8 7.9-20.3 7.9-34.3 0-22.5-6.8-38.6-20.2-48.4S330 109 302.4 109H129zm46 
  39h121.7c8.9 0 15.6 2.5 20.2 7.5s6.8 11.8 6.8 20.5c0 10.3-3 17.8-9.1 22.6-6.1 
  4.9-14.4 7.3-25.1 7.3H175v-58z" fill="currentColor" />
    </svg>
  ),
  email: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  website: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  phone: (
    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  ),
};

// Function to render SVG from string or return default icon
export const renderSocialIcon = (iconKey: string) => {
  // If the iconKey is a full SVG string, parse and return it
  if (iconKey.startsWith('<svg')) {
    return <span dangerouslySetInnerHTML={{ __html: iconKey }} />;
  }

  // Otherwise, try to find it in our predefined icons
  const lowerKey = iconKey.toLowerCase();

  // Check if we have a predefined icon for this key
  for (const [key, icon] of Object.entries(SocialIcons)) {
    if (lowerKey.includes(key)) {
      return icon;
    }
  }

  // Default icon if we can't find a match
  return SocialIcons.website;
};

export default SocialIcons; 