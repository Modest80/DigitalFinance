import React from "react";


function HomePage(){
    return (
        <div id="webcrumbs">
            <div className="w-[600px] bg-neutral-50 shadow-lg rounded-lg p-6">
                <h1 className="text-2xl font-title mb-4">Карточка клиента</h1>

                <form className="space-y-4">
                    <div className="flex gap-4 flex-wrap">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-sm font-medium">Имя:</label>
                            <input type="text" id="name" className="mt-1 px-3 py-2 border border-neutral-300 rounded-md" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-sm font-medium">Email:</label>
                            <input type="email" id="email" className="mt-1 px-3 py-2 border border-neutral-300 rounded-md" />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="phone" className="text-sm font-medium">Телефон:</label>
                            <input type="tel" id="phone" className="mt-1 px-3 py-2 border border-neutral-300 rounded-md" />
                        </div>

                    </div>
                </form>

                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Карточки клиента</h2>
                    <div className="mt-2 space-y-4">
                        {/* Card 1 */}
                        <div className="flex justify-between items-center p-4 border border-neutral-300 rounded-md bg-neutral-100">
                            <div>
                                <p className="text-sm font-medium">Visa Classic</p>
                                <p className="text-xs">**** 1234</p>
                            </div>
                            <div>
                                <p className="font-semibold">12,345.67 ₽</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="flex justify-between items-center p-4 border border-neutral-300 rounded-md bg-neutral-100">
                            <div>
                                <p className="text-sm font-medium">MasterCard Gold</p>
                                <p className="text-xs">**** 5678</p>
                            </div>
                            <div>
                                <p className="font-semibold">78,912.45 ₽</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
