import styles from "@components/PersonalInfo.module.css";
import { images } from "@assets/img";

export default function PersonalInfo() {
    return (
        <div className={styles.personalInfo}>
            <img className={styles.profilePic} src={images.profile} alt="Profile" />

            <div className={styles.info}>
                <p className={styles.name}>Aleix Batchellí I Abad</p>
                <p className={styles.role}>Full Stack Developer</p>
                <p className={styles.location}>Based in Barcelona</p>
            </div>
        </div>
    );
}
