export default function Services() {
    const services = [
        "Web Development",
        "UI/UX Design",
        "Sound Design",
        "Game Design",
        "Advertising",
        "Photography",
    ];

    return (
        <section style={styles.container}>
            <h2>My Services</h2>
            <div style={styles.grid}>
                {services.map((service, i) => (
                    <div key={i} style={styles.card}>
                        <h3>{service}</h3>
                        <p>High-quality service tailored to your needs.</p>
                        <button>ORDER NOW</button>
                    </div>
                ))}
            </div>
        </section>
    );
}

const styles = {
    container: {
        padding: "40px",
        backgroundColor: "#111",
        color: "#fff",
    },
    grid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
    },
    card: {
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "8px",
    },
};
