import React from 'react';

const Header = () => {
    return (
        <div className="bg-dark mb-3">
            <nav className="container navbar navbar-light">
                <div className="container-fluid">
                    <a className="text-decoration-none" href="home"><h1 className="navbar-brand mb-0 mx-0 px-0 text-light fw-bold"> Management System</h1></a>
                </div>
            </nav>
        </div>
    );
};

export default Header;