import styles from "@components/AboutMe.module.css";
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
    const { t } = useTranslation();
    return (
        <div className={styles.aboutMe}>
            <h1 className={styles.title}>{t('get-to-know-me')}</h1>

            <div className={styles.boxesContainer}>
                <div className={styles.boxContainer}>
                    <h2>{t('my-interests-title')}</h2>
                    <p style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
                        {t('my-interests-desc')}
                    </p>
                </div>

                <div className={styles.boxContainer}>
                    <h2>{t('my-hobbies-title')}</h2>
                    <p style={{ textAlign: "justify" }}>
                        {t('my-hobbies-desc')}
                    </p>
                </div>
            </div>
        </div>
    );
}
