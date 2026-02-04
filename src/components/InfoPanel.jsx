import { Icons } from "../assets/icons";
import styles from "./InfoPanel.module.css";

export default function InfoPanel() {
    return (
        <div className={styles.infoPanel}>
            <div className={styles.row_container}>
                <img src={Icons.PinDrop} className={styles.icon} alt="Location" />
                <p>Barcelona, Spain</p>
            </div>

            <div className={styles.row_container}>
                <img src={Icons.MailIcon} className={styles.icon} alt="Email" />
                <a href="mailto:aleix.batchelli@students.salle.url.edu">
                    aleix.batchelli@students.salle.url.edu
                </a>

            </div>

            <div className={styles.row_container}>
                <img src={Icons.PhoneEnabled} className={styles.icon} alt="Phone" />
                <p>+34 651 53 03 57</p>
            </div>

            <div className={styles.row_container}>
                <img src={Icons.Linkedin} className={styles.icon} alt="Linkedin" />
                <a href="www.linkedin.com/in/aleixbatchelli" >aleixbatchelli</a>
            </div>
        </div>
    );
}
