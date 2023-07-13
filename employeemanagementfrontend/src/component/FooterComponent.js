import React from "react";

const FooterComponent = () => {
    const footerStyle = {
        backgroundColor: "#2c3e50",
        padding: "15px",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
    };

    return (
        <div>
            <footer className="footer" style={footerStyle}>
                <span>Created By Ahmed Ali &copy; {new Date().getFullYear()}</span>
            </footer>
        </div>
    );
};

export default FooterComponent;