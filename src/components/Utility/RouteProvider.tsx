import { createContext, useState, ReactNode } from "react";

interface RouteState {
  currentRoute: string | null;
  nextRoute: string | null;
  setCurrentRoute: (route: string | null) => void;
  setNextRoute: (route: string | null) => void;
  renderNextRoute: boolean; // Add this
  setRenderNextRoute: (value: boolean) => void; // And this
}

const defaultRouteState: RouteState = {
  currentRoute: null,
  nextRoute: null,
  setCurrentRoute: () => {},
  setNextRoute: () => {},
  renderNextRoute: false, // Add this
  setRenderNextRoute: () => {}, // And this
};

export const RouteContext = createContext(defaultRouteState);

export const RouteProvider = ({ children }: { children: ReactNode }) => {
  const [currentRoute, setCurrentRoute] = useState<string | null>("/");
  const [nextRoute, setNextRoute] = useState<string | null>(null);
  const [renderNextRoute, setRenderNextRoute] = useState(true);

  return (
    <RouteContext.Provider
      value={{
        currentRoute,
        setCurrentRoute,
        nextRoute,
        setNextRoute,
        renderNextRoute,
        setRenderNextRoute,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
