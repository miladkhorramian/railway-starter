import * as React from "react";

/**
 * A custom React hook that provides a responsive design capability by checking the current window's media query.
 * It returns a boolean value indicating whether the current window's width matches the provided media query.
 *
 * @param mediaQuery - A string representing a media query or a key from the `breakpoints` object.
 * If a key is provided, it will be looked up in the `breakpoints` object.
 *
 * @returns A boolean value indicating whether the current window's width matches the provided media query.
 */

const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;

type BreakpointKey = keyof typeof breakpoints;

function useMediaQuery(mediaQuery: BreakpointKey): boolean;
function useMediaQuery(mediaQuery: string): boolean;
function useMediaQuery(mediaQuery: BreakpointKey | string): boolean {
  const query = breakpoints[mediaQuery as BreakpointKey] || mediaQuery;

  const [matches, setMatches] = React.useState<boolean>(false);

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const documentChangeHandler = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", documentChangeHandler);
    documentChangeHandler(); // Set the initial state

    return () => {
      mediaQueryList.removeEventListener("change", documentChangeHandler);
    };
  }, [query]);

  return matches;
}

export { useMediaQuery, breakpoints };

// sm:    640px      @media (min-width: 640px) { ... }
// md:    768px      @media (min-width: 768px) { ... }
// lg:    1024px    @media (min-width: 1024px) { ... }
// xl:    1280px    @media (min-width: 1280px) { ... }
// 2xl:    1536px    @media (min-width: 1536px) { ... }