import React, { useEffect } from "react";
import { useResource } from "react-request-hook";

const HomePage = () => {
  const [title, getTitle] = useResource(() => ({
    url: "/rest/welcome/",
    method: "get",
  }));

  useEffect(() => {
    getTitle();
  }, []);

  return (
    <header className="App-header">
      <p>{title.data}</p>
    </header>
  );
};

export default HomePage;
