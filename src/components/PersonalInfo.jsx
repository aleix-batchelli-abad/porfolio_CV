import styles from "@components/PersonalInfo.module.css";
import { images } from "@assets/img";
import {useTranslation} from "react-i18next";

export default function PersonalInfo() {

    const {t} = useTranslation();

    return (
        <div className={styles.personalInfo}>
            <img className={styles.profilePic} src={images.profile} alt="Profile" />

            <div className={styles.info}>
                <p className={styles.name}>Aleix Batchellí I Abad</p>
                <p className={styles.role}>Full Stack Developer</p>
                <p className={styles.location}>{t('based-in')} Barcelona</p>
            </div>
        </div>
    );
}
