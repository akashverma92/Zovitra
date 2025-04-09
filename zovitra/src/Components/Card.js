import React from "react";

const Card = ({ title, children }) => {
    return (
        <div style={styles.card}>
            <h3 style={styles.title}>{title}</h3>
            <div style={styles.content}>{children}</div>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
    content: {
        fontSize: "14px",
        color: "#555",
    },
};

export default Card;
