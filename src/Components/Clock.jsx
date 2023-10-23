import React, { useState, useEffect } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Mettre à jour toutes les secondes

    // Nettoyer le timer lorsque le composant est démonté
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
}

export default Clock;
