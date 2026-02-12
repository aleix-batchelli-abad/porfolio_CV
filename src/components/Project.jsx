import styles from "@components/Project.module.css";

export default function Project({ name, description, image, links }) {
    return (
        <div className={styles.project}>
            <img
                src={image}
                alt={name}
                className={styles.projectImage}
            />

            <h3 className={styles.projectTitle}>{name}</h3>
            <p className={styles.projectDescription}>{description}</p>

            <div className={styles.projectButtons}>
                {links.map((link, index) => (
                    <a className={styles.button} key={index} href={link.url}>
                        {link.name}
                    </a>
                ))}
            </div>
        </div>
    )
}
