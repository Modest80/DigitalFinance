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
                        <form className="bg-neutral-50 rounded-md shadow-md p-6 w-[500px] space-y-6">
                            <h2 className="text-xl">Создать новый счёт</h2>
                            <div>
                                <label htmlFor="account-type" className="block mb-2">Тип счёта</label>
                                <details className="relative">
                                    <summary className="cursor-pointer block w-full bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">Выберите тип счёта</summary>
                                    <ul className="absolute z-10 bg-neutral-50 w-full border rounded-md mt-2 shadow-lg">
                                        <li className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">Сберегательный</li>
                                        <li className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">Текущий</li>
                                        <li className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">Кредитный</li>
                                    </ul>
                                </details>
                            </div>
                            <div>
                                <label htmlFor="account-name" className="block mb-2">Название счёта</label>
                                <input type="text" id="account-name" className="w-full px-4 py-2 bg-neutral-100 rounded-md" placeholder="Введите название счёта" />
                            </div>
                            <button className="w-full bg-primary text-white py-2 px-4 rounded-full">Создать счёт</button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Cabinet;