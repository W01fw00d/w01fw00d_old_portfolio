import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../stylesheets/AppHeader.css';

import avatar from '../assets/avatar_square.png';
import github_logo from '../assets/logos/github.png';
import linkedin_logo from '../assets/logos/linkedin.png';
import codingame_logo from '../assets/logos/codingame.png';

import cv_eng_pdf from '../assets/cvs/gabrielRomay_cv_eng.pdf';

const names = ['Gabriel'],
    surnames = ['Romay', 'Machado'],
    linkedin = 'https://www.linkedin.com/in/gabriel-romay-machado-40050a114',
    codingame = 'https://www.codingame.com/profile/aa7bf59d70fe3c6f026b5788fd87eeb8411507',
    github = {
        alias: 'W01fw00d',
        userUrl: 'https://github.com/W01fw00d',
        portfolioUrl: 'https://github.com/W01fw00d/w01fw00d_portfolio'
    };    

class AppHeader extends Component {
  render () {
    return (
        <div className="AppHeader">
            <div className="solid-header">
                <Row>
                    <Col xs="2">
                        <Link to="/w01fw00d_portfolio/" >
                            <img src={avatar} className="avatar-logo" title="Home" alt="avatar" /> 
                        </Link>
                    </Col>

                    <Col xs="6" className="id-info">
                        <h4>{names.join(' ') + ' ' + surnames.join(' ')}</h4>
                        <h4>{github.alias}</h4>
                    </Col>

                    <Col xs="3">
                        <p>Full-stack Web Developer</p>
                        <div>
                            <a target="_blank" href={github.userUrl}>
                                <img src={github_logo} className="small-logo spinning-logo" title="Github Account" alt="logo" />
                            </a>

                            <a target="_blank" href={linkedin}>
                                <img src={linkedin_logo} className="small-logo spinning-logo" title="LinkedIn Account" alt="logo" />
                            </a>

                            <a target="_blank" href={codingame}>
                                <img src={codingame_logo} className="small-logo spinning-logo" title="CodinGame Account" alt="logo" />
                            </a>

                            <a target="_blank" href={cv_eng_pdf} className="cv-link" title="Curriculum Vitae.pdf" >
                                CV
                            </a>
                        </div>

                    </Col>

                    <a target="_blank" href={github.portfolioUrl}>
                        <img className="github-ribbon" src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png" />
                    </a>
                </Row>
            </div>

            <div>
                <Button> <Link to="/w01fw00d_portfolio/techs"> Technologies </Link> </Button>
                <Button className="hidden"> Principles </Button>
                <Button className="hidden"> Personal projects </Button>
            </div>
        </div>
    );
  }
}

export default AppHeader;