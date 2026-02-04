import InfoPanel from "./InfoPanel.jsx";
import LanguagesPanel from "./LanguagesPanel.jsx";
import SkillsPanel from "./SkillsPanel.jsx";

export default function Sidebar() {
    return (
        <aside style={styles.sidebar}>

            <InfoPanel />

            <hr />

            <LanguagesPanel />

            <hr />

            <SkillsPanel />
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
