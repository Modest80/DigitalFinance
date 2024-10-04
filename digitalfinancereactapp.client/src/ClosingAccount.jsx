import React, { useState } from "react";


function ClosingAccount(props) {
    const [accounts, setAccounts] = useState([]);
    const [accountId, setAccountId] = useState(0);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы

        const token = localStorage.getItem('token'); // Получаем токен из localStorage

        try {
            const data = {
                accountId: accountId,
            }
            const response = await fetch(`http://localhost:5146/api/Accounts?accountId=${accountId}`, {
                method: 'DELETE',
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
            setError(`${JSON.stringify(result.message)}`);
        } catch (error) {
            setError(`Ошибка: ${error.message}`);
        }
    }

    return (
        <div id="webcrumbs">
            <div className='w-[400px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6'>
                <h1 className='font-title text-xl mb-6 text-center'>Закрытие счета</h1>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='account-select' className='block text-sm font-medium'>
                            Выберите счет для закрытия
                        </label>
                        <select
                            id='account-select'
                            name='account'
                            className='w-full px-3 py-2 bg-neutral-50 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                            onChange={(e) => setAccountId(e.target.value)}
                        >
                            <option key="0" value="0" disabled selected>-- Выберите счёт --</option>
                            {props.accounts.map((account) => (
                                <option key={account.id} value={account.id}>
                                    {`${account.title} - ${account.accountNumberReg || 'N/A'} - Баланс: ${account.balance}`}
                                </option>
                            ))}
                        </select>
                        {error && <p>{error}</p>} {/* Отображаем сообщение об успехе или ошибке */}
                    </div>

                    <div>
                        <label htmlFor='transfer-account-select' className='block text-sm font-medium'>
                            Выберите счет для перевода средств
                        </label>
                        <select
                            id='transfer-account-select'
                            name='transfer-account'
                            className='w-full px-3 py-2 bg-neutral-50 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                        >
                            <option value=''>Выберите счет</option>
                            <option value='transfer1'>Счет 3</option>
                            <option value='transfer2'>Счет 4</option>
                        </select>
                    </div>

                    {/* Confirm button */}
                    <div className='text-center'>
                        <button
                            type='submit'
                            className='w-[150px] h-[40px] bg-primary text-white font-medium rounded-md shadow-md'
                        >
                            Подтвердить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ClosingAccount;