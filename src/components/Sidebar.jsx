import SkillWheel from "./SkillWheel.jsx";

export default function Sidebar() {
    return (
        <aside style={styles.sidebar}>
            <h2>Aleix</h2>
            <p>Frontend Developer</p>
            <div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <strong>Residence:</strong>Spain
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <strong>City:</strong> Barcelona
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <strong>Age:</strong> 28
                </div>
            </div>
            <hr />
            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    width: "100%",
                }}>
                <SkillWheel label="Spanish" value={100} />
                <SkillWheel label="English" value={80} />
                <SkillWheel label="Catalan" value={100} />
            </div>
            <h3>Skills</h3>
            <ul>
                <li>HTML — 90%</li>
                <li>CSS — 85%</li>
                <li>JavaScript — 75%</li>
            </ul>
        </aside>
    );
}

const styles = {
    sidebar: {
        width: "250px",
        padding: "20px",
        backgroundColor: "#1e1e1e",
        color: "#fff",
    },
};
