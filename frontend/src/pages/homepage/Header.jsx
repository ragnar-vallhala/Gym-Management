import './Header.css'
function Header(){
    return(
        <div className='header-container'>
        <div className='logo-container'>Logo</div>
        <div className='link-container'>
            <a href='/about'>About</a>
            <a href='/auth'>Login</a>
        </div>
        <hr/>
        </div>
    )
}

export default Header;