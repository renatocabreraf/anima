import React from "react";

function CintilloNoticiero() {
  return (
    <div style={{
      backgroundColor: "#0b24fa",
      color: "white",
      padding: "10px 0",
      textAlign: "center",
      fontSize: "20px",
      fontWeight: "bold",
      position: "fixed",
      width: "100%",
      top: 0,
      zIndex: 1000,
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      overflow: "hidden"
    }}>
      <div style={{
        display: "inline-block",
        whiteSpace: "nowrap",
        animation: "scroll-left 10s linear infinite"
      }}>
        Hacemos fácil lo difícil
      </div>
      <style>{`
        @keyframes scroll-left {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

export default CintilloNoticiero;