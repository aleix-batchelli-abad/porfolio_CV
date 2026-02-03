export default function Hero() {
    return (
        <section style={styles.hero}>
            <h1>Discover my Amazing Art Space!</h1>
            <code>I build web and mobile apps.</code>
            <br />
            <button style={styles.button}>EXPLORE NOW</button>
        </section>
    );
}

const styles = {
    hero: {
        padding: "60px",
        backgroundColor: "#111",
        color: "#fdd835",
        textAlign: "center",
    },
    button: {
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "#fdd835",
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
    },
};
