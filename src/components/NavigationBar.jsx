import styles from "@components/NavigationBar.module.css";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

export default function NavigationBar() {
    const { t, i18n } = useTranslation();

    // Helper to handle the dropdown change
    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <nav className={styles.navigationBar}>
            <div className={styles.flexCenter}>
                <p className={styles.name}>Aleix Batchellí I Abad</p>
                <p className={styles.openToWork}>🟢 {t('open-to-work')}</p>
            </div>

            <div className={styles.links}>
                <div className={styles.selectContainer}>
                    <Icon icon="mdi:world" className={styles.langIcon} />
                    <select
                        className={styles.langSelect}
                        onChange={handleLanguageChange}
                        value={i18n.resolvedLanguage}
                    >
                        <option value="en">English</option>
                        <option value="es">Español</option>
                        <option value="ca">Català</option>
                    </select>
                </div>

                <a
                    className={styles.link}
                    href="mailto:aleix.batchelli@students.salle.url.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:email" className={styles.icon} />
                </a>

                <a
                    className={styles.link}
                    href="https://www.linkedin.com/in/aleixbatchelli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:linkedin" className={styles.icon} />
                </a>

                <a
                    className={styles.link}
                    href="https://github.com/aleix-batchelli"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:github" className={styles.icon} />
                </a>

                <a className={styles.cvButton} href="https://drive.google.com/file/d/1f2FSCw1q43_6b_6sge8wwKJSjkJ4j9z0/view?usp=drive_link" target="_blank">
                    My CV
                </a>
            </div>
        </nav>
    );
}