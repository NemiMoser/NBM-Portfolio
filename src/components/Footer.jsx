import linkedInImage from '../assets/icons8-linkedin.svg';
import gitHubImage from '../assets/icons8-github.svg';
import xImage from '../assets/icons8-twitter.svg';

const Footer = () => {
    

    return (
        <footer>
            <a href="https://www.linkedin.com/in/nohemi-moser-383290279/" target="_blank">
                <img src={linkedInImage} alt="LinkedIn" />
            </a>
            <a href="https://github.com/NemiMoser" target="_blank">
                <img src={gitHubImage} alt="GitHub" />
            </a>
            <a href="https://twitter.com/NBM_coding" target="_blank">
                <img src={xImage} alt="X" />
            </a>
            <br></br>
            <a target="_blank" href="https://icons8.com/icon/LoL4bFzqmAa0/github"></a> icons by <a target="_blank" href="https://icons8.com">Icons8</a>
        </footer>
    );
};

export default Footer;