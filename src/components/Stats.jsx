export default function Stats() {
    const stats = [
        { label: "Years Experience", value: "10+" },
        { label: "Completed Projects", value: "143" },
        { label: "Happy Customers", value: "114" },
        { label: "Honors and Awards", value: "20+" },
    ];

    return (
        <section style={styles.container}>
            {stats.map((stat, i) => (
                <div key={i} style={styles.card}>
                    <h2>{stat.value}</h2>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "space-around",
        padding: "40px",
        backgroundColor: "#222",
        color: "#fff",
    },
    card: {
        textAlign: "center",
    },
};
