import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeContextProvider } from "./contexts/ThemeContext"; // Pastikan import benar

const root = document.getElementById("root");

if (!root) {
    throw new Error("Root element not found. Check your index.html!");
}

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <ThemeContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeContextProvider>
    </React.StrictMode>
);
