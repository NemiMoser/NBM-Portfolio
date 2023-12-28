import React from 'react';
import { FaGithub } from 'react-icons/fa';
import weatherImage from './assets/weatherDashboard.jpg';
import wcImage from './assets/whatsCoding.jpg';
import quizImage from './assets/codingQuiz.jpg';
import pwdImage from './assets/pwdGenerator.jpg';
import nsqlImage from './assets/noSQLVid.jpg';
import ecomImage from './assets/eCommerceVid.jpg';
import './Portfolio.css';

export default function Portfolio() {
    return (
      <div>
        <h2>portfolio</h2>

        <div className="row">
            <div className="col-md-4">
                <div className="deployed-site-link">
                    <a href="https://nemimoser.github.io/WeatherDashboard/">weather dashboard
                    </a>
                </div>
                <div className="weatherDashboard">    
                    <div className="image-container">
                        <img src={weatherImage} height="150" width="225" alt="Weather Dashboard" />
                        <div className="github-link">
                            <a href="https://github.com/NemiMoser/WeatherDashboard">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>        
            </div>

            <div className="col-md-4">
                <div className="deployed-site-link">
                    <a href="https://nemimoser.github.io/Whats-Coding/">front-end development
                    </a>
                </div>
                <div className="whatsCoding">
                    <div className="image-container">
                        <img src={wcImage} height="150" width="225" alt="Whats Front-End Development" />
                        <div className="links">
                            <a href="https://github.com/NemiMoser/Whats-Coding">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
            <div className="deployed-site-link">
                    <a href="https://nemimoser.github.io/WeatherDashboard/">weather dashboard
                    </a>
                </div>
                <div className="codingQuiz">
                    <div className="image-container">
                        <img src={quizImage} height="150" width="225" alt="Coding Quiz" />
                        <div className="links">
                            <a href="https://github.com/NemiMoser/Challenge-04-codingQuiz">               
                                <FaGithub />
                            </a>
                            <a href="https://nemimoser.github.io/Challenge-04-codingQuiz/">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="deployed-site-link">
                    <a href="https://nemimoser.github.io/Challenge-03-pwdGEN/">password generator</a>
                </div>
                <div className="passwordGenerator">
                    <div className="image-container">
                        <img src={pwdImage} height="150" width="225" alt="Password Generator" />
                        <div className="links">
                            <a href="https://github.com/NemiMoser/Challenge-03-pwdGEN">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="deployed-site-link">
                    <a href="https://drive.google.com/file/d/1vEwSCxoLKeV4c3bp5RDMDVUysbFYRoPT/view">noSQL</a>
                </div>
                <div className="noSQL">
                    <div className="image-container">
                    <img src={nsqlImage} height="150" width="225" alt="NoSQL" />
                        <div className="links">
                            <a href="https://github.com/NemiMoser/NoSQL">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="deployed-site-link">
                    <a href="https://drive.google.com/file/d/1lP3c6Vp4Ytn6oRegxwwihPvWRjY1Yrtx/view?usp=sharing/">e-commerce</a>
                </div>
                <div className="eCommerce">
                    <div className="image-container">
                    <img src={ecomImage} height="150" width="225" alt="E-Commerce" />
                        <div className="links">
                            <a href="https://github.com/NemiMoser/E-Commerce">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    );
  }
  