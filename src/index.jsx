import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { CalculateProvider } from "./contexts/calculate"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <CalculateProvider>
      <App />
    </CalculateProvider>
  </React.StrictMode>
)