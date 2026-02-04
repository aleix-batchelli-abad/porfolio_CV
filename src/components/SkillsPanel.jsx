import styles from "./SkillsPanel.module.css"
import ProgressBar from "./ProgressBar";

export default function SkillsPanel() {
    return (
        <div className={styles.skillsPanel} >
            <h3>Skills</h3>
            <ProgressBar label="html" value={80}/>
            <ProgressBar label="css" value={80}/>
            <ProgressBar label="js" value={80}/>
            

        </div>
    );
}