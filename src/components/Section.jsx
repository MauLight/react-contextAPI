import { useContext } from "react";
import { LevelContext } from "../context/LevelContext";


export default function Section({ children }) {

    const level = useContext(LevelContext)

    return (
        <section className="section border mx-5 p-3">
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
};