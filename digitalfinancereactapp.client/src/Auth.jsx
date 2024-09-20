import React, { useState } from 'react';
import "./css/style.css";
function Auth() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const userData = {
            email,
            password,
        };

        // Отправка данных на сервер для проверки
        try {
            const response = await fetch('http://localhost:5146/api/auth', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error('Ошибка авторизации');
            }

            const data = await response.json();
            // Сохраняем токен в localStorage
            localStorage.setItem('token', data.token);
            window.location.href = '/cabinet';  // Перенаправление после успешного входа

        } catch (error) {
            setError('Неверные учетные данные');
        }
    };
    return (
        <div id="webcrumbs">
            <div className="w-[400px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6 mx-auto my-12 flex flex-col items-center justify-center">
                <h2 className="font-title text-center mb-4">Авторизация</h2>
                <form className="flex flex-col gap-4 w-full" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Эл.почта"
                        className="border p-2 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        className="border p-2 rounded-md"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
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