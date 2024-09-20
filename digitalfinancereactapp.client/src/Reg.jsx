import { React } from "react";
import "./css/style.css";

function Reg() {
    return (
        <div id="webcrumbs">
            <div className="w-[400px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6 mx-auto my-12 flex flex-col items-center justify-center">
                <h2 className="font-title text-center mb-4">Регистрация</h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        className="border p-2 rounded-md"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Телефон"
                        className="border p-2 rounded-md"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Эл.почта"
                        className="border p-2 rounded-md"
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Пароль"
                        className="border p-2 rounded-md"
                        required
                    />
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" required />
                        Согласен с правилами сервиса
                    </label>
                    <button
                        type="submit"
                        className="w-full h-[40px] bg-primary text-white rounded-md"
                    >
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Reg;