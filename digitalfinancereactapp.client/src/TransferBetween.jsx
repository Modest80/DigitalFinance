import React from "react";
import "./css/style.css";

function TransferBetween(){
    return (
        <div id="webcrumbs">
            <div className="w-[500px] shadow-lg rounded-lg bg-neutral-50 p-6">
                <h2 className="text-2xl font-title text-primary mb-4">Перевод между счетами</h2>

                <form method="post" className="space-y-6">
                    {/* Откуда перевод */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Откуда</label>
                        <div className="relative">
                            <details className="w-full">
                                <summary className="bg-neutral-100 px-4 py-2 rounded-md cursor-pointer">
                                    Выберите счет
                                </summary>
                                <div className="absolute w-full bg-neutral-50 left-0 mt-2 rounded-md z-10 shadow-md space-y-2">
                                    <a href="#" className="block px-4 py-2 hover:bg-neutral-200">Счет 1: 100 000₽</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-neutral-200">Счет 2: 50 000₽</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-neutral-200">Счет 3: 30 000₽</a>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Куда перевод */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Куда</label>
                        <div className="relative">
                            <details className="w-full">
                                <summary className="bg-neutral-100 px-4 py-2 rounded-md cursor-pointer">
                                    Выберите счет
                                </summary>
                                <div className="absolute w-full bg-neutral-50 left-0 mt-2 rounded-md z-10 shadow-md space-y-2">
                                    <a href="#" className="block px-4 py-2 hover:bg-neutral-200">Счет 4: 200 000₽</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-neutral-200">Счет 5: 150 000₽</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-neutral-200">Счет 6: 90 000₽</a>
                                </div>
                            </details>
                        </div>
                    </div>

                    {/* Сумма */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Сумма</label>
                        <input type="text" className="w-full rounded-md border border-neutral-300 px-4 py-2 bg-neutral-50" placeholder="Введите сумму" />
                    </div>

                    {/* Кнопка подтверждения */}
                    <button className="w-full bg-primary text-white rounded-md py-2 font-semibold">
                        Подтвердить перевод
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TransferBetween;

