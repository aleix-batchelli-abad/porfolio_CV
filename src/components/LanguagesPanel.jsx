import styles from './LanguagesPanel.module.css';
import SkillWheel from "./SkillWheel.jsx";

export default function LanguagesPanel () {
    return (
        <div className={styles.languagesPanel}>
            <SkillWheel label="Spanish" value={100} />
            <SkillWheel label="English" value={80} />
            <SkillWheel label="Catalan" value={100} />
        </div>
    );
}