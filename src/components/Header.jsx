import logo from '../assets/investment-calculator-logo.png';
export default function Header(){
    return(
        <header id='header'>
            <img src={logo} alt="A money bag" />
            <h1>Investment Calculator</h1>
        </header>
    );
}