import React, { useEffect, useState } from "react";

const App = () => {
  const [testSite, setTestSite] = useState("");

  useEffect(() => {
    setTestSite("Sheesh");
  }, []);
  return (
    <div>
      <h1>Nice</h1>
      <p>{testSite}</p>
    </div>
  );
};

export default App;
