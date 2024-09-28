import React, { useState, useEffect } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Create from './Create';
//import Deposit from './Deposit';
import TransferBetween from './TransferBetween';
import Replen from './Replen';
import TransferUser from './TransferUser';
import History from './History';
import ClosingAccount from './ClosingAccount';
import HomePage from './HomePage';

import "./css/cabinet.css";

function Cabinet() {    
    return (
        <div id="webcrumbs">
            <div className="w-[1200px] min-h-[600px] bg-neutral-50 rounded-lg shadow-lg flex">
                <aside className="w-[250px] bg-neutral-200 p-6 rounded-l-lg">
                    <nav>
                        <ul className="space-y-4">
                            <li>
                                <Link to="/cabinet/HomePage" className="block w-full text-left bg-primary text-white py-2 px-4 rounded-md">
                                    Личные данные
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet/create" className="block w-full text-left bg-primary text-white py-2 px-4 rounded-md">
                                    Создать счёт
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet/Replen" className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">
                                    Пополнить счёт
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet/TransferBetween" className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">
                                    Перевод между счетами
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet/TransferUser" className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">
                                    Перевод другому пользователю 
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet/History" className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">
                                    Истории операций
                                </Link>
                            </li>
                            <li>
                                <Link to="/cabinet/ClosingAccount" className="block w-full text-left bg-neutral-100 py-2 px-4 rounded-md hover:bg-neutral-300">
                                    Закрыть счёт
                                </Link>
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
                            <Route path="create" element={<Create />} />
                            <Route path="TransferBetween" element={<TransferBetween />} />
                            <Route path="Replen" element={<Replen />} />
                            <Route path="TransferUser" element={<TransferUser />} />
                            <Route path="History" element={<History />} />
                            <Route path="ClosingAccount" element={<ClosingAccount />} />
                            <Route path="HomePage" element={<HomePage />} />
                        </Routes>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default Cabinet;