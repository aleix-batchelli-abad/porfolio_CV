import { Icon } from "@iconify/react";
import { skills } from "@assets/skills/skills.js";
import styles from "@components/Skills.module.css";

export default function Skills() {
    return (
        <div className={styles.skills}>
            <h1> Some of my skills.</h1>
           <div className={styles.skillBoxContainer}>
                {skills.map(skill => (
                    <div key={skill.name} className={styles.skillBox}>
                        <Icon className={styles.icon} icon={skill.icon} width="40" />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
