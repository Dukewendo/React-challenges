import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth() {
      setWindowWidth(window.innerWidth);
      console.log("rezise¬!");
    }
    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("clean up crew!")
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return (
    <div>
      <h1>Window width: {windowWidth}</h1>
    </div>
  );
}
