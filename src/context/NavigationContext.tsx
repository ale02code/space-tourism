import React, { createContext, ReactNode, useState } from "react";

export const NavigationContext = createContext();

interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState("Home");

  if(currentPage == "Home") {
    
  }

  return (
    <NavigationContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
