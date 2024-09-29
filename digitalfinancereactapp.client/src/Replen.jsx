import React, { useState, useEffect } from "react";
import "./css/style.css";

function Replen() {
    const [accountNamber, setAccountTypes] = useState([]); // Состояние для хранения счетов
    const [error, setError] = useState(null); // Для хранения возможных ошибок

    useEffect(() => {
        // Функция для получения данных с сервера
        const fetchAccountNambers = async () => {
            try {
                const response = await fetch("http://localhost:5146/api/TypesAccounts", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }

                }); // URL API для получения данных
                if (!response.ok) {
                    throw new Error("Ошибка при загрузке данных");
                }
                const data = await response.json(); // Предполагаем, что ответ в формате JSON
                setAccountTypes(data); // Сохраняем данные в состояние
            } catch (err) {
                setError(err.message); // Обрабатываем ошибки
            }
        };

        fetchAccountNambers(); // Вызываем функцию для получения данных при монтировании компонента
    }, []);

    return (
        <div id="webcrumbs">
            <div className="w-[500px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6">
                <h1 className="font-title text-xl mb-4">Пополнение счета</h1>
                <form className="flex flex-col gap-4">
                    <details className="relative">
                        <summary className="cursor-pointer">Выберите счет</summary>
                        <div className="absolute left-0 w-full bg-white rounded-md shadow-lg z-10">
                            <ul className="absolute z-10 bg-neutral-50 w-full border rounded-md mt-2 shadow-lg">
                                {error ? (
                                    <li className="py-2 px-4 text-red-500">Ошибка: {error}</li>
                                ) : accountNamber.length > 0 ? (
                                    accountNamber.map((type) => (
                                        <li key={type.id} className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">
                                            {type.type}
                                        </li>
                                    ))
                                ) : (
                                    <li className="py-2 px-4">Загрузка...</li>
                                )}
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