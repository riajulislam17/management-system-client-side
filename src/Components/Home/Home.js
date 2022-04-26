import React from 'react';
import Insertion from '../Insertion/Insertion';
import Retrieve from '../Retrieve/Retrieve';

const Home = () => {
    return (
        <div>
            <div className="container-fluid px-4">
                <div className="row g-3">
                    
                    <div className="col-sm-12 col-md-7 col-lg-8">
                        <div className="p-3 bg-light rounded border border-dark border-2"><Retrieve></Retrieve></div>
                    </div>

                    <div className="col-sm-12 col-md-5 col-lg-4">
                        <div className="p-3 bg-light rounded border border-dark border-2"><Insertion></Insertion></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;