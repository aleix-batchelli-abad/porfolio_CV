import { useEffect, useState } from "react";

export default function SkillWheel({ label, value }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        const duration = 250; // animation time in ms

        const timer = setInterval(() => {
            start += 1;
            setProgress(start);
            if (start >= end) clearInterval(timer);
        }, duration / end);

        return () => clearInterval(timer);
    }, [value]);

    const circleSize = 120;
    const strokeWidth = 10;
    const radius = (circleSize - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div style={styles.container}>
            <svg
                viewBox="0 0 120 120"
                style={{ width: "100%", height: "100%" }}
            >
            <circle
                    stroke="#333"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                />
                <circle
                    stroke="#fdd835"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    r={radius}
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    style={{ transition: "stroke-dashoffset 0.1s linear" }}
                />
            </svg>

            <div style={styles.value}>
                <strong>{progress}%</strong>
            </div>
            <div style={styles.text}>
                <span>{label}</span>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: "relative",
        flex: "1 1 50px",
        aspectRatio: "1 / 1",
        margin: "5px",
    },
    value: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "#fff",
    },
    text: {
        position: "absolute",
        top: "120%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "#fff",
    },
};
