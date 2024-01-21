import React from "react";
import Header from "./components/Header.tsx";
import HomePage from "./pages/HomePage.tsx";
import NavigationProvider from "./context/NavigationContext.tsx";

function App() {
  return (
    <div className="font-Barlow">
      <NavigationProvider>
        <Header />
      </NavigationProvider>
      <HomePage />
    </div>
  );
}

export default App;
