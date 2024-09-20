import React from "react";
import "./css/index.css";

function Index() {
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] min-h-[800px] bg-neutral-50 shadow-lg rounded-lg">
                {/* Header */}
                <header className="flex justify-between items-center p-6 bg-neutral-100 rounded-t-lg">
                    <h1 className="font-title text-2xl"><a href="/">DigitalFinance</a></h1>
                    <nav className="flex space-x-6">
                        <a href="/Reg" className="text-primary font-medium hover:underline">Регистрация</a>
                        <a href="/Auth" className="text-primary font-medium hover:underline">Авторизация</a>
                    </nav>
                </header>

                {/* Main Banner */}
                <section className="relative h-[400px] w-full">
                    <img
                        className="object-cover w-full h-full rounded-lg"
                        src="/src/assets/df.jpg"
                        alt="DigitalFinance Banner"
                    />
                </section>

                {/* Footer */}
                <footer className="flex justify-between items-center p-6 mt-auto bg-neutral-100 rounded-b-lg">
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook">
                            <i className="fa-brands fa-facebook"></i>
                        </a>
                        <a href="#" aria-label="Twitter">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="#" aria-label="Instagram">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                    <a href="/Rules" className="text-primary font-medium hover:underline">Правила сервиса</a>
                </footer>
            </div>
        </div>
    )
}

export default Index;