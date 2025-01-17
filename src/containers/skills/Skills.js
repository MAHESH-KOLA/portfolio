import React from "react";
import "./Skills.css";
import { Fade } from "react-reveal";
import SkillSection from "../skills/SkillSection";

function Skills(props) {
    const theme = props.theme;
    return(
        <div className="main" id="skills">
            <div className="skills-header-div">
                <Fade button duration={2000} distance="20px">
                    <h1 className="skills-header" style={{color: theme.text}}>
                        What I Do?
                    </h1>
                </Fade>
            </div>
            <SkillSection theme={theme} />
        </div>
    );
}

export default Skills;