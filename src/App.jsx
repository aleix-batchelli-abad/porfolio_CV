import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";

export default function App() {
    return (
        <div style={{ display: "flex", width: "100vw", minHeight: "100vh" }}>
        <Sidebar />
            <main style={{ flex: 1 }}>
                <Hero />
                <Stats />
                <Services />
            </main>
        </div>
    );
}
