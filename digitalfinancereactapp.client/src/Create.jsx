import React, { useState, useEffect } from "react";
import "./css/style.css";

function Create() {

    const [accountTypes, setAccountTypes] = useState([]); // Состояние для хранения типов счетов
    const [error, setError] = useState(null); // Для хранения возможных ошибок

    useEffect(() => {
        // Функция для получения данных с сервера
        const fetchAccountTypes = async () => {
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

        fetchAccountTypes(); // Вызываем функцию для получения данных при монтировании компонента
    }, []);

    return (
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
                                    {type.type}
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
    )
}

export default Create;