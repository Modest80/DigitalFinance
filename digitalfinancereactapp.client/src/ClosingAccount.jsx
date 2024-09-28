import React from "react";


function ClosingAccount(){
    return (
        <div id="webcrumbs">
            <div className='w-[400px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6'>
                <h1 className='font-title text-xl mb-6 text-center'>Закрытие счета</h1>

                <form className='space-y-4'>
                    {/* Select account to close */}
                    <div>
                        <label htmlFor='account-select' className='block text-sm font-medium'>
                            Выберите счет для закрытия
                        </label>
                        <select
                            id='account-select'
                            name='account'
                            className='w-full px-3 py-2 bg-neutral-50 border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary'
                        >
                            <option value=''>Выберите счет</option>
                            <option value='account1'>Счет 1 - Баланс: 10000₽</option>
                            <option value='account2'>Счет 2 - Баланс: 5000₽</option>
                        </select>
                    </div>

                    {/* Select account to transfer funds */}
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