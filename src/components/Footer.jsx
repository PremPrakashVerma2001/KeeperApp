

const curr_year = new Date().getFullYear();

function Footer(){


    return(
        <footer>
            <p>Made with <span>React.js</span>  </p>
            <p> Copyright ©️ {curr_year}</p>
        </footer>
    );
}

export default Footer;