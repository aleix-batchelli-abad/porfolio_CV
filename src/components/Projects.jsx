import { useState, useEffect } from "react";
import styles from "@components/Projects.module.css";
import Project from "@components/Project.jsx";
import {useTranslation} from "react-i18next";


export default function Projects() {

    const {t, i18n} = useTranslation();

    const [projectsData, setProjectsData] = useState([]);

    const [loading, setLoading] = useState(true);

    const currentLang = i18n.resolvedLanguage || 'en';

    useEffect(() => {
        fetch('/projects/projects.json')
            .then(response => response.json())
            .then(data => {
                setProjectsData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error loading projects:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div className={styles.projects}>
            <h1>{t('my-projects-title')}</h1>

            {loading && <p>Loading projects...</p>}

            <div className={styles.projectsContainer}>
                {!loading && projectsData.map((project, index) => (
                    <Project
                        key={index}
                        name={project.name}
                        description={project.description[currentLang]}
                        image={`/projects/img/${project.name}.png`}
                        links={project.links}
                    />
                ))}
            </div>
        </div>
    );
}