import React, { useState, useEffect } from "react";
import { format } from "date-fns";

function DateDisplay() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Mettre à jour toutes les secondes

    // Nettoyer le timer lorsque le composant est démonté
    return () => {
      clearInterval(timerID);
    };
  }, []);

  //   const formattedDate = currentDate.toLocaleDateString();
  const formattedDate = format(currentDate, "d MMMM yyyy");
  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
}

export default DateDisplay;
