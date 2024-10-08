﻿import React, { useState, useEffect } from "react";
import "./css/style.css";

function Replen(props) {
    const [loading, setLoading] = useState(true); // Индикатор загрузки
    const [error, setError] = useState(null); // Хранение ошибок

    const [accountId, setAccountId] = useState(0);
    const [updateBalance, setUpdateBalance] = useState(0);
    const [message, setMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const token = localStorage.getItem('token'); // Получаем токен из localStorage

        try {
            const response = await fetch(`http://localhost:5146/api/Accounts/Replen?accountId=${accountId}&updateBalance=${updateBalance}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`, // Указываем токен в заголовке
                    'Content-Type': 'application/json',
                },
                //body: JSON.stringify({ updateBalance }), // Передаем данные в теле запроса
            });

            if (!response.ok) {
                throw new Error('Ошибка сети при обновлении счета');
            }

            const result = await response.json();
            setMessage(`${JSON.stringify(result.message)}`);
            handleUpdate();
        } catch (error) {
            setMessage(`Ошибка: ${error.message}`);
        }
    };

    const handleUpdate = () => {
        props.onUpdate();
    }

    //if (loading) return <p>Загрузка...</p>; // Отображаем сообщение о загрузке
    //if (error) return <p>Ошибка: {error}</p>; // Отображаем сообщение об ошибке

    return (
        <div id="webcrumbs">
            <div className="w-[500px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6">
                <h1 className="font-title text-xl mb-4">Пополнение счета</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <select className="w-full p-2 rounded-md border"
                        onChange={(e) => setAccountId(e.target.value)}>
                        <option key="0" value="0" disabled selected>-- Выберите счёт --</option>
                        {props.accounts.map((account) => (
                            <option key={account.id} value={account.id}>
                                {`${account.title} - ${account.accountNumberReg || 'N/A'} - Баланс: ${account.balance}`}
                            </option>
                        ))}
                    </select>
                    <input type="number" placeholder="Сумма" className="border rounded-md p-2"
                        value={updateBalance}
                        onChange={(e) => setUpdateBalance(e.target.value)} />
                    {message && <p>{message}</p>} {/* Отображаем сообщение об успехе или ошибке */}
                    <button className="w-[120px] h-[40px] bg-primary text-white rounded-full">Пополнить</button>
                </form>
            </div>
        </div>
    )
}

export default Replen;