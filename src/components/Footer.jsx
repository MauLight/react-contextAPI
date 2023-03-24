import { useContext } from "react";
import { LevelContext } from "../context/LevelContext";

export const Footer = () => {
    const level = useContext(LevelContext);
    if (level === 6) {
        return <small>Created with useContext</small>
    };
}