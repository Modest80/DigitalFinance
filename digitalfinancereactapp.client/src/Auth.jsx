import React from "react";
import "./css/style.css";
function Auth() {
    return (
        <div id="webcrumbs">
            <div className="w-[400px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6 mx-auto my-12 flex flex-col items-center justify-center">
                <h2 className="font-title text-center mb-4">Авторизация</h2>
                <form className="flex flex-col gap-4 w-full">
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
                    <button
                        type="submit"
                        className="w-full h-[40px] bg-primary text-white rounded-md"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}
export default Auth;