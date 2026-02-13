import { Icon } from "@iconify/react";
import { skills } from "@assets/skills/skills.js";
import styles from "@components/Skills.module.css";
import {useTranslation} from "react-i18next";

export default function Skills() {

    const {t} = useTranslation();

    return (
        <div className={styles.skills}>
            <h1> {t('my-skills-title')}</h1>
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
