import React, { useState, useEffect } from "react";
import "./css/style.css";

function Create() {

    const [accountTypes, setAccountTypes] = useState([]); // Состояние для хранения типов счетов
    const [accountType, setAccountType] = useState(0);
    const [error, setError] = useState(null); // Для хранения возможных ошибок
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState(null);

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

    const handleSelect = (type) => {
        setAccountTypes(type);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const token = localStorage.getItem('token'); // Получаем токен из localStorage

        try {
            const data = {
                title: title,
                user_id: 0,
                accountType: accountType
            }
            const response = await fetch(`http://localhost:5146/api/Accounts`, {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`, // Указываем токен в заголовке
                    'Content-Type': 'application/json',
                },                
                body: JSON.stringify(data), // Передаем данные в теле запроса
            });

            if (!response.ok) {
                throw new Error('Ошибка сети при обновлении счета');
            }

            const result = await response.json();
            setMessage(`${JSON.stringify(result.message)}`);
        } catch (error) {
            setMessage(`Ошибка: ${error.message}`);
        }
    };

    return (
        <form className="bg-neutral-50 rounded-md shadow-md p-6 w-[500px] space-y-6"
            onSubmit={handleSubmit}>
            <h2 className="text-xl">Создать новый счёт</h2>
            <div>
                <label htmlFor="account-type" className="block mb-2">
                    Тип счёта
                </label>
                <select className="w-full p-2 rounded-md border"
                    onChange={(e) => setAccountType(parseInt(e.target.value))}
                >
                    {error ? (
                        <option className="py-2 px-4 text-red-500">Ошибка: {error}</option>
                    ) : accountTypes.length > 0 ? (
                        accountTypes.map((type) => (
                            <option key={type.id} value={type.id} className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">
                                {type.type}
                            </option>
                        ))
                    ) : (
                        <option className="py-2 px-4">Загрузка...</option>
                    )}
                </select>
                {message && <p>{message}</p>}
            </div>
            <div>
                <label htmlFor="account-name" className="block mb-2">Название счёта</label>
                <input type="text" id="account-name"
                    className="w-full px-4 py-2 bg-neutral-100 rounded-md"
                    placeholder="Введите название счёта"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-full">Создать счёт</button>
        </form>
    )
}

export default Create;