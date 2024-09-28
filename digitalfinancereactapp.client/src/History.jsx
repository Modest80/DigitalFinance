import React from "react";

function History(){
    return (
        <div id="webcrumbs">
            <div className='w-[600px] min-h-[600px] rounded-lg bg-neutral-50 p-6 shadow-lg'>
                <form className='flex flex-col gap-6'>
                    <h1 className='text-2xl font-title'>История операций</h1>

                    
                    <div className='flex gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor='from-date' className='text-sm'>С какой даты</label>
                            <input id='from-date' type='date' className='rounded-md border-gray-300 p-2' />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='to-date' className='text-sm'>По какую дату</label>
                            <input id='to-date' type='date' className='rounded-md border-gray-300 p-2' />
                        </div>
                    </div>

                   
                    <button
                        type='submit'
                        className='rounded-md bg-primary text-white py-2 px-4'>
                        Найти
                    </button>

                   
                    <div className='flex flex-col'>
                        <label htmlFor='results' className='text-sm'>Результаты:</label>
                        <textarea
                            id='results'
                            rows={10}
                            className='border-gray-300 rounded-md p-2'
                            placeholder='Здесь будет отображена история операций...'
                            readOnly
                        >
                        </textarea>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default History;
