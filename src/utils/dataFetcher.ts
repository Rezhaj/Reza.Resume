import { useState, useEffect } from 'react';

/**
 * Utility for fetching JSON data from GitHub repository
 */

const GITHUB_REPO_URL = 'https://rezhaj.github.io/Reza.Resume/data';

/**
 * Fetches JSON data from GitHub repository
 * @param fileName - The name of the JSON file to fetch (without extension)
 * @param fallbackData - Unused parameter, kept for backward compatibility
 * @param signal - Optional AbortController signal for aborting the fetch request
 * @returns The fetched data
 * @throws Error if fetch fails
 */
export async function fetchData<T>(fileName: string, fallbackData: T | null, signal?: AbortSignal): Promise<T> {
  try {
    const response = await fetch(`${GITHUB_REPO_URL}/${fileName}.json`, { signal });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${fileName}.json. Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data as T;
  } catch (error) {
    // Check if the error is due to an aborted request
    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new Error(`Fetch for ${fileName}.json timed out.`);
    } else {
      // Re-throw the error to be handled by the caller
      throw error;
    }
  }
}

/**
 * Creates a hook for fetching data with loading state
 * @param fileName - The name of the JSON file to fetch
 * @param fallbackData - The local data to use as fallback
 * @returns An object with data, loading state, and error
 */
export function useFetchData<T>(fileName: string, fallbackData: T): { 
  data: T; 
  isLoading: boolean; 
  error: Error | null;
} {
  const [data, setData] = useState<T>(fallbackData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    
    const fetchDataAsync = async () => {
      try {
        const result = await fetchData<T>(fileName, fallbackData, controller.signal);
        if (isMounted) {
          setData(result);
          setIsLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error('Unknown error'));
          setIsLoading(false);
        }
      }
    };

    fetchDataAsync();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [fileName, fallbackData]);

  return { data, isLoading, error };
}

export default fetchData; 