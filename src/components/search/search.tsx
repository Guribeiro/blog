"use client"; // Required for App Router client components using hooks

import { cn } from '@/lib/utils'; // Assuming this path is correct and cn is a utility for classnames
import { CircleX, SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation'; // Corrected imports for App Router
import { useCallback } from 'react';

export const Search = () => {
  const router = useRouter(); // useRouter from next/navigation
  const searchParams = useSearchParams(); // Hook to access URL search parameters

  // Get the current search query from URL parameters ('q'). Defaults to an empty string if not present.
  const currentQueryFromUrl = searchParams.get('q') || '';

  // Handles the form submission (e.g., when user presses Enter)
  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault(); // Prevent default form submission behavior

      // Get the query from URL search params at the time of submission
      // This ensures we use the most up-to-date query value reflected in the URL
      const queryToSubmit = searchParams.get('q');

      if (queryToSubmit && queryToSubmit.trim()) {
        // If there's a query, navigate to the blog page with the search query
        // encodeURIComponent ensures the query is URL-safe
        router.push(`/blog?q=${encodeURIComponent(queryToSubmit)}`);
      } else {
        // If the query is empty or whitespace, navigate to the blog page without a query parameter
        router.push(`/blog`);
      }
    },
    [router, searchParams] // Dependencies for useCallback. router and searchParams from next/navigation are stable.
  );

  // Handles changes in the input field as the user types
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQueryValue = event.target.value;

    if (newQueryValue.trim()) {
      // If the new query is not empty, update the URL to /blog?q=newQueryValue
      // { scroll: false } prevents the page from scrolling to the top on this URL change.
      router.push(`/blog?q=${encodeURIComponent(newQueryValue)}`, {
        scroll: false,
      });
    } else {
      // If the input is cleared, navigate to /blog without the q param
      // This also keeps the scroll position.
      router.push(`/blog`, {
        scroll: false,
      });
    }
  };

  const resetSearch = () => {
    router.push('/blog', {
      scroll: false
    });
  };

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:w-60">
      <SearchIcon
        className={cn(
          'text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-300',
          currentQueryFromUrl ? 'text-blue-300' : '' // Dynamically change icon color if there's a query
        )}
      />
      <input
        type="text"
        placeholder="Buscar" // Search placeholder text
        value={currentQueryFromUrl} // Controlled input: its value is tied to the URL's 'q' search parameter
        onChange={handleQueryChange} // Update URL search parameter on every change in the input
        className="w-full h-10 md:w-60 bg-transparent border border-gray-400 pl-9 text-gray-100 rounded-md text-body-sm outline-none transition-all duration-200 focus-within:border-blue-300 focus-within:ring-1 focus-within:ring-blue-300 placeholder:text-gray-300 placeholder:text-body-sm"
      />
      {currentQueryFromUrl && (
        <CircleX
          className="absolute w-4 h-4 top-1/2 -translate-y-1/2 right-3 text-gray-300"
          onClick={resetSearch}
        />
      )}
    </form>
  );
};

// If this component is the default export of its file, you might need:
// export default Search;
