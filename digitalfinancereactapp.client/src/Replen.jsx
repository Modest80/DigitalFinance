import React from "react";


function Replen() {
    return (
        <div id="webcrumbs">
            <div className="w-[500px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6">
                <h1 className="font-title text-xl mb-4">Пополнение счета</h1>
                <form className="flex flex-col gap-4">
                    <details className="relative">
                        <summary className="cursor-pointer">Выберите счет</summary>
                        <div className="absolute left-0 w-full bg-white rounded-md shadow-lg z-10">
                            <ul className="flex flex-col gap-1 p-2">
                                <li className="p-2 rounded-md hover:bg-gray-100">Счет 1</li>
                                <li className="p-2 rounded-md hover:bg-gray-100">Счет 2</li>
                                <li className="p-2 rounded-md hover:bg-gray-100">Счет 3</li>
                            </ul>
                        </div>
                    </details>
                    <input type="number" placeholder="Сумма" className="border rounded-md p-2" />
                    <button className="w-[120px] h-[40px] bg-primary text-white rounded-full">Пополнить</button>
                </form>
            </div>
        </div>
    )
}

export default Replen;