import React from "react";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import FeelingProud from "./FeelingProud";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './resume.css'



function Greeting(props) {
    const theme = props.theme;

    return (
        <Fade bottom duration={2000} distance="40px">
            <div className="greet-main" id="greeting">
                <div className="greeting-main">
                    <div className="greeting-text-div">
                        <div>
                            <h1 className="greeting-text" style={{color: theme.text}}>
                                {greeting.title}
                            </h1>

                            <p className="greeting-text-p subTitle"
                                style={{ color: theme.secondaryText }}>
                                {greeting.subTitle}
                            </p>

                            <SocialMedia theme={theme} />
                            <div className="resume">
                            <div className="portoflio-repo-btn-div">
                                <Button
                                    text="⭐ Star Me On Github"
                                    newTab={true}
                                    href={greeting.portfolio_repository}
                                    theme={theme}
                                    className="portfolio-repo-btn"
                                />
                            </div>
                                                            <div className="portoflio-repo-btn-div">
<Button
                                        text={<><FontAwesomeIcon icon={faLightbulb} style={{ color: 'yellow' }} /> See My Resume</>}
                                        newTab={true}
                                        href={greeting.resumeLink}
                                        theme={theme}
                                        className="portfolio-repo-btn"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="greeting-image-div">
                        <FeelingProud theme={theme} />
                    </div>
                     
                </div>
            </div>
        </Fade>
    );
}

export default Greeting;