import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "UGC- Autonomous Institution",
          "Accredited by NAAC with 'A' Grade",
          // "Recognised by UGC",
          // "Approved by AICTE",
          // "Affiliated to JNTU Kakinada",
          // "Technology Business Incubation Center",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;