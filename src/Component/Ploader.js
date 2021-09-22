import React from "react";
import Loader from "react-loader-spinner";

function Ploader() {
  return (
    <div>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={800}
        width={800}
        timeout={3000}
        
      />
    </div>
  );
}

export default Ploader;
