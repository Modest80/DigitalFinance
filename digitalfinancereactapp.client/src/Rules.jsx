import React from "react";
import "./css/index.css";

function Rules() {
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] min-h-[800px] bg-neutral-50 shadow-lg rounded-lg">
                {/* Header */}
                <header className="flex justify-between items-center p-6 bg-neutral-100 rounded-t-lg">
                    <h1 className="font-title text-2xl"><a href="/">DigitalFinance</a></h1>
                    <nav className="flex space-x-6">
                        <a href="/reg" className="text-primary font-medium hover:underline">Регистрация</a>
                        <a href="/auth" className="text-primary font-medium hover:underline">Авторизация</a>
                    </nav>
                </header>

                {/* Service Rules Section */}
                <section className="p-6">
                    <h2 className="font-title text-xl mb-4">Правила сервиса</h2>
                    <p className="mb-4">1. Пользователи должны предоставлять только достоверную информацию при регистрации.</p>
                    <p className="mb-4">2. Запрещено использовать сервис для незаконных действий.</p>
                    <p className="mb-4">3. Администрация оставляет за собой право блокировать учетные записи за нарушение правил.</p>
                    <p>4. Все пользователи обязаны соблюдать правила безопасности и не разглашать свои учетные данные третьим лицам.</p>
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

export default Rules;