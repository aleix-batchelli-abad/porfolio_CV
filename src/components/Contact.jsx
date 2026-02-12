import styles from "@components/Contact.module.css";
import { Icon } from "@iconify/react";

export default function Contact() {
    return (
        <div className={styles.contact}>
            <h2 className={styles.title}>Get in Touch</h2>

            <div className={styles.links}>
                <a
                    href="mailto:aleix.batchelli@students.salle.url.edu"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:email" className={styles.icon} />
                    Email
                </a>

                <a
                    href="https://github.com/aleix-batchelli"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:github" className={styles.icon} />
                    GitHub
                </a>

                <a
                    href="https://www.linkedin.com/in/aleixbatchelli"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Icon icon="mdi:linkedin" className={styles.icon} />
                    LinkedIn
                </a>
            </div>
        </div>
    );
}
