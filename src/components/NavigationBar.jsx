import styles from "@components/NavigationBar.module.css";
import { Icon } from "@iconify/react";

export default function NavigationBar() {
    return (
        <nav className={styles.navigationBar}>
            <div className={styles.flexCenter}>
                <p className={styles.name}>Aleix Batchellí I Abad</p>
                <p className={styles.openToWork}>🟢 Open to work</p>
            </div>

            <div className={styles.links}>
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
                    href="www.linkedin.com/in/aleixbatchelli"
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

                <a className={styles.cvButton} href="/cv.pdf" target="_blank">
                    My CV
                </a>
            </div>
        </nav>
    );
}
