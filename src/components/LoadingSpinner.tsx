import React from "react";
import "../styles/LoadingSpinner.css"; // Pastikan file ini ada

const LoadingSpinner: React.FC = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p className="loading-text">Loading...</p>
        </div>
    );
};

export default LoadingSpinner;
