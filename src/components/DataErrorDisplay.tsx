import React from 'react';

interface DataErrorDisplayProps {
  error: Error | null;
  retryFn?: () => void;
}

const DataErrorDisplay: React.FC<DataErrorDisplayProps> = ({ error, retryFn }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <svg 
          className="w-16 h-16 text-red-500 mx-auto mb-4" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Data Loading Error</h1>
        <p className="text-gray-600 mb-4">
          We couldn't load the necessary data for this page. This could be due to network issues or the data source being unavailable.
        </p>
        <div className="text-sm text-red-600 mb-4 bg-red-50 p-3 rounded text-left">
          <p className="font-semibold">Error details:</p>
          <p className="font-mono">{error?.message || 'Unknown error'}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
          {retryFn && (
            <button
              className="px-4 py-2 bg-white border border-primary-600 text-primary-600 rounded hover:bg-primary-50 transition-colors"
              onClick={retryFn}
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataErrorDisplay; 