import React from 'react';

const Header = () => {
    return (
        <header className="bg-black text-white min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNzItMDM3LWMta3ZoaDA4bXAuanBn.jpg')" }}></div>
            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-extrabold drop-shadow-lg">Eigen Signatuur: Sam Middendorp</h1>
                <p className="mt-4 text-xl">Welkom op mijn signatuur website voor specialize me 2.</p>
            </div>
        </header>
    );
}

export default Header;

