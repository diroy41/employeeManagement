import React from 'react'

const HeaderComponent = () => {
    const headerStyle = {
        backgroundColor: "#2c3e50",
        padding: "15px",
        color: "#fff",
        fontSize: "24px",
        fontWeight: "bold",
        textAlign: "center",
    };

    return (
        <header style={headerStyle}>
            <div className="container">
                <a className="navbar-brand" href="/">
                    Employee Management System
                </a>
            </div>
        </header>
    );
};

export default HeaderComponent;