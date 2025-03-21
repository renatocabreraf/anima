import React, { useRef, useState } from "react";

function PresentationHeader() {
  return (
    <>
      <div style={{ marginTop: -220, paddingTop: 0 }}>
        <img
          src={require("assets/img/banner10.png")}
          alt="Banner"
          style={{
            display: "block",
            width: "100%",
            marginTop: -250,

          }}
        />
      </div>
    </>
  );
}

export default PresentationHeader;
