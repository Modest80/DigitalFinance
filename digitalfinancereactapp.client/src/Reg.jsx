import React, { useState } from 'react';
import "./css/style.css";

function Reg() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            phone,
            password,
        };

        try {
            const response = await fetch('http://localhost:5146/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Ошибка регистрации');
            }

            setSuccess('Регистрация успешна. Перенаправляем на страницу входа...');
            setError('');

            // Перенаправление на страницу авторизации после успешной регистрации
            setTimeout(() => {
                window.location.href = '/auth';
            }, 2000);
        } catch (error) {
            setError('Ошибка при регистрации. Проверьте введенные данные.');
            setSuccess('');
        }
    };

    return (
        <div id="webcrumbs">
            <div className="w-[400px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6 mx-auto my-12 flex flex-col items-center justify-center">
                <h2 className="font-title text-center mb-4">Регистрация</h2>
                <form className="flex flex-col gap-4" onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Имя"
                        className="border p-2 rounded-md"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="tel"
                        placeholder="Телефон"
                        className="border p-2 rounded-md"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
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
                    <label className="flex items-center">
                        <input type="checkbox" className="mr-2" required />
                        &nbsp;Согласен с <a href="/rules">&nbsp;правилами сервиса</a>
                    </label>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success && <p style={{ color: 'green' }}>{success}</p>}
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