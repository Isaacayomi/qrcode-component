import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
function App() {
  return <Main />;
}

function Main() {
  return (
    <main className="container">
      <QRImage source="images/image-qr-code.png" />
      <QRHeading heading="Improve your front-end skills by building projects" />
      <QRDescription description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level" />
    </main>
  );
}

function QRImage({ source }) {
  return <img className="qrcode" src={source} alt="qr code image" />;
}

function QRHeading({ heading }) {
  return <h1>{heading}</h1>;
}

function QRDescription({ description }) {
  return <p>{description}</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
