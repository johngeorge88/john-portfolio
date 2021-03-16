import React from "react";

function Footer() {
    return (
        <footer className="bg-black text-white fixed inset-x-0 bottom-0 z-50 h-10 flex gap-3 justify-center items-center">
            <div className="flex gap-3" role="group" aria-label="Basic outlined example">


                <a href="https://github.com/johngeorge88" alt="GitHub">
                    <i className="fab fa-github"></i>
                    </a>
                <a href="https://twitter.com/John_Iskander" className="btn btn-outline-primary">
                <i class="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/john-awad-1b2842b0/" className="btn btn-outline-primary">
                <i class="fab fa-linkedin"></i>
                </a>
            </div>  
        </footer>
    );
}

export default Footer;