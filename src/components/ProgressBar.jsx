import styles from './ProgressBar.module.css';

export default function ProgressBar({ label, value }) {
    return (
        <div className={styles.progressBar}>
            <p>{label}</p>
            <div className={styles.progressContainer}>
                <div
                    className={styles.progressFill}
                    style={{ width: `${value}%` }}
                />
            </div>
        </div>
    );
}
