import React from "react";
import "./css/cabinet.css";

function Cabinet() {
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] min-h-[600px] bg-neutral-50 rounded-lg shadow-lg flex">
                <aside className="w-[250px] bg-neutral-200 p-6 rounded-l-lg">
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <button className="block w-full text-left bg-primary text-white py-2 px-4 rounded-md">Создать счёт</button>
                            </li>
                            <li>
                                <button className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Пополнить счёт</button>
                            </li>
                            <li>
                                <button className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Сделать перевод между счетами</button>
                            </li>
                            <li>
                                <button className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Сделать перевод другому пользователю</button>
                            </li>
                            <li>
                                <button className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Посмотреть историю операций</button>
                            </li>
                            <li>
                                <button className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Закрыть счёт</button>
                            </li>
                            <hr />
                            <li>
                                <button className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Выйти</button>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <main className="flex-1 p-8">
                    <header className="mb-8">
                        <h1 className="font-title text-2xl">DigitalFinance</h1>
                    </header>

                    <section className="bg-neutral-100 h-[400px] rounded-md flex justify-center items-center">
                        <p className="text-lg text-neutral-500">Выберите действие в меню слева.</p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Cabinet;