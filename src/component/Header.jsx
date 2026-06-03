import logoImg from '../assets/global-network.png'
function Header() {
    return(
        <header className='header'>
            <img className='logoImg' src={logoImg} alt="globle-icon" width={"100px"} height={"100px"}/>
            <h1>My Tarvel journal</h1>
        </header>
    )
}
export default Header