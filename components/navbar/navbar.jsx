const Navbar = () => {
    return (
        <section className="section is-small p-0">
            <div className="hero is-black">
                <div className="hero-body m-0 p-3">
                    <div className="container is-fluid p-1">
                        <nav className="navbar" role="navigation" aria-label="main navigation">
                            <div className="navbar-brand">
                                <a
                                    role="button"
                                    className="navbar-burger"
                                    aria-label="menu"
                                    aria-expanded="false"
                                >
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>
                            </div>
                            <div className="navbar-menu pr-6">
                                <div className="navbar-end">
                                    <a className="navbar-item is-size-5">Home</a>
                                    <a className="navbar-item is-size-5">About</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar;