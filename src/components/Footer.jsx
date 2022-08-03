import Logo from "../images/Logo.svg"

export default function Footer() {
    const year = new Date().getFullYear()
return(
    <footer>
        <div className="logo__div">
            <img src={Logo} alt="Tree Logo" />
            <h1 className="logo">Tree App</h1>
        </div>
        <p className="attribution">&copy; {year}. Made by <a href="www.danielportillo.dev">Daniel Portillo</a></p>
    </footer>
)
};