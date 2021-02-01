const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Samiya Blog</h1>
            <div className="links">
                <a href="/">HOME</a>
                <a href="/create" style={{
                    color:"white",
                    backgroundColor:' #f1356d',
                    borderRadius:'8px'
                }}>NEW BLOG</a>
            </div>
        </nav>
     );
}
 
export default Navbar;