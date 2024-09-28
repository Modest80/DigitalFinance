import React from "react";


function TransferUser(){
    return (
        <div id="webcrumbs">
            <div className='w-[600px] rounded-lg bg-neutral-50 shadow-lg p-8'>
                <h2 className='font-title text-2xl mb-6'>Перевод другому пользователю</h2>

                <form className='space-y-6'>
                    {/* Выбор с какой карты переводить */}
                    <div>
                        <label htmlFor='from-card' className='block mb-2 text-lg'>С какой карты переводить</label>
                        <select id='from-card' name='from-card' className='w-full p-2 rounded-md border'>
                            <option value="1111">Карта **** 1111 — Остаток: 15,000₽</option>
                            <option value="2222">Карта **** 2222 — Остаток: 8,500₽</option>
                            <option value="3333">Карта **** 3333 — Остаток: 23,000₽</option>
                        </select>
                    </div>

                    {/* Способ перевода */}
                    <div>
                        <h3 className='mb-2 text-lg'>Выберите способ перевода:</h3>

                        <div className='space-y-2'>
                            <label className='block'>
                                <input type='radio' name='transfer-method' value='phone' className='mr-2' />
                                По телефону
                            </label>

                            <label className='block'>
                                <input type='radio' name='transfer-method' value='card-number' className='mr-2' />
                                По номеру карты
                            </label>
                        </div>
                    </div>

                    {/* Поле для ввода номера телефона или карты */}
                    <div>
                        <input
                            type='text'
                            name='transfer-to'
                            placeholder='Введите номер телефона или номер карты'
                            className='w-full p-2 rounded-md border'
                        />
                    </div>

                    {/* Введите сумму */}
                    <div>
                        <label htmlFor='amount' className='block mb-2 text-lg'>Введите сумму</label>
                        <input
                            id='amount'
                            type='number'
                            min="1"
                            name='amount'
                            placeholder='Сумма перевода'
                            className='w-full p-2 rounded-md border'
                        />
                    </div>

                    {/* Кнопка отправки */}
                    <button className='bg-primary text-white font-bold rounded-md py-3 w-full'>
                        Отправить перевод
                    </button>
                </form>
            </div>
        </div>
    )
}
export default TransferUser;
