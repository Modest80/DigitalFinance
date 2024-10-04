import React, { useState, useEffect } from "react";
import "./css/style.css";


function TransferBetween() {
    const [accounts, setAccounts] = useState([]); // Хранение данных счетов
    const [loading, setLoading] = useState(true); // Индикатор загрузки
    const [error, setError] = useState(null); // Хранение ошибок

    const [accountFromId, setAccountFromId] = useState('');
    const [accountToId, setAccountToId] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const token = localStorage.getItem('token'); // Получаем токен из localStorage

        try {
            const response = await fetch(`http://localhost:5146/api/Accounts/TransferBetween?accountFromId=${accountFromId}&accountToId=${accountToId}&transferAmount=${transferAmount}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`, // Указываем токен в заголовке
                    'Content-Type': 'application/json',
                },
                //body: JSON.stringify({
                //    accountFromId,
                //    accountToId,
                //    amount: transferAmount
                //}),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(JSON.stringify(result.message));
            }
            
            setMessage(`Счет обновлен: ${JSON.stringify(result.message)}`);
        } catch (error) {
            setMessage(`Ошибка: ${error.message}`);
        }
    };

    useEffect(() => {
        // Функция для отправки запроса
        const fetchAccounts = async () => {
            try {
                const response = await fetch('http://localhost:5146/api/Accounts', {
                    method: 'GET',
                    headers: {
                        'Authorization': localStorage.getItem('token'), // Укажите здесь ваш токен
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Ошибка сети');
                }

                const data = await response.json();
                setAccounts(data); // Сохраняем данные в состояние
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false); // Снимаем индикатор загрузки
            }
        };

        fetchAccounts();
    }, []); // Пустой массив зависимостей означает, что useEffect выполнится один раз при монтировании компонента

    if (loading) return <p>Загрузка...</p>; // Отображаем сообщение о загрузке
    if (error) return <p>Ошибка: {error}</p>; // Отображаем сообщение об ошибке

    return (
        <div id="webcrumbs">
            <div className="w-[500px] shadow-lg rounded-lg bg-neutral-50 p-6">
                <h2 className="text-2xl font-title text-primary mb-4">Перевод между счетами</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Откуда перевод */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Откуда</label>
                        <select className="w-full p-2 rounded-md border"
                            onChange={(e) => setAccountFromId(e.target.value)}>
                            <option key="0" value="0" disabled selected>-- Выберите счёт --</option>
                            {accounts.map((account) => (
                                <option key={account.id} value={account.id}>
                                    {`${account.title} - ${account.accountNumberReg || 'N/A'} - Баланс: ${account.balance}`}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Куда перевод */}
                    <div>
                        <label className="block text-lg font-semibold mb-2">Куда</label>
                        <select className="w-full p-2 rounded-md border"
                            onChange={(e) => setAccountToId(e.target.value)}>
                            <option key="0" value="0" disabled selected>-- Выберите счёт --</option>
                            {accounts.map((account) => (
                                <option key={account.id} value={account.id}>
                                    {`${account.title} - ${account.accountNumberReg || 'N/A'} - Баланс: ${account.balance}`}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Сумма */}

                    <input type="number" placeholder="Сумма" className="border rounded-md p-2"
                        type="number"
                        value={transferAmount}
                        onChange={(e) => setTransferAmount(e.target.value)} />
                    {message && <p>{message}</p>} {/* Отображаем сообщение об успехе или ошибке */}


                    {/* Кнопка подтверждения */}
                    <button type="submit" className="w-full bg-primary text-white rounded-md py-2 font-semibold">
                        Подтвердить перевод
                    </button>
                </form>
            </div>
        </div>
    )
}

export default TransferBetween;

