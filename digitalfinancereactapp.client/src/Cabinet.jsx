import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Create from './Create';
import Deposit from './Deposit';
import Transfer from './Transfer';

import "./css/cabinet.css";

function Cabinet() {
    const [accountTypes, setAccountTypes] = useState([]); // Состояние для хранения типов счетов
    const [error, setError] = useState(null); // Для хранения возможных ошибок

    useEffect(() => {
        // Функция для получения данных с сервера
        const fetchAccountTypes = async () => {
            try {
                const response = await fetch("localhost:5146/api/account-types"); // URL API для получения данных
                if (!response.ok) {
                    throw new Error("Ошибка при загрузке данных");
                }
                const data = await response.json(); // Предполагаем, что ответ в формате JSON
                setAccountTypes(data); // Сохраняем данные в состояние
            } catch (err) {
                setError(err.message); // Обрабатываем ошибки
            }
        };

        fetchAccountTypes(); // Вызываем функцию для получения данных при монтировании компонента
    }, []);

    return (
        <div id="webcrumbs">
            <div className="w-[1200px] min-h-[600px] bg-neutral-50 rounded-lg shadow-lg flex">
                <aside className="w-[250px] bg-neutral-200 p-6 rounded-l-lg">
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <NavLink to="/cabinet/create" activeClassName="active" className="block w-full text-left bg-primary text-white py-2 px-4 rounded-md">
                                    Создать счёт
                                </NavLink>
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
                        <Routes>
                            <Route path="/cabinet/create" element={<Create />} />
                            <Route path="/cabinet/deposit" element={<Deposit />} />
                            <Route path="/cabinet/transfer" element={<Transfer />} />
                        </Routes>


                        <form className="bg-neutral-50 rounded-md shadow-md p-6 w-[500px] space-y-6">
                            <h2 className="text-xl">Создать новый счёт</h2>
                            <div>
                                <label htmlFor="account-type" className="block mb-2">
                                    Тип счёта
                                </label>
                                <details className="relative">
                                    <summary className="cursor-pointer block w-full bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">
                                        Выберите тип счёта
                                    </summary>
                                    <ul className="absolute z-10 bg-neutral-50 w-full border rounded-md mt-2 shadow-lg">
                                        {error ? (
                                            <li className="py-2 px-4 text-red-500">Ошибка: {error}</li>
                                        ) : accountTypes.length > 0 ? (
                                            accountTypes.map((type) => (
                                                <li key={type.id} className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">
                                                    {type.name}
                                                </li>
                                            ))
                                        ) : (
                                            <li className="py-2 px-4">Загрузка...</li>
                                        )}
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