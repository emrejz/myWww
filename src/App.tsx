import React, { useState, useEffect } from "react";
import { Window, Loading } from "./pages";
import "./app.scss";

const App: React.FC = () => {
  const [loadedDocument, setLoadedDocument] = useState<string | Event>(
    "blueScreen"
  );
  window.addEventListener("load", () => setLoadedDocument("loadingScreen"));
  useEffect(() => {
    const sto = setTimeout(() => {
      setLoadedDocument("loaded");
    }, 2000);
    return () => {
      clearTimeout(sto);
      window.removeEventListener("load", setLoadedDocument);
    };
  }, [loadedDocument]);
  return loadedDocument == "loaded" ? (
    <Window />
  ) : (
    <Loading loadedDocument={loadedDocument} />
  );
};

export default App;
