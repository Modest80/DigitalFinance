import React, { useState, useEffect } from "react";
import "./css/style.css";

function Replen() {
    const [accountNamber, setAccountTypes] = useState([]); // ��������� ��� �������� ������
    const [error, setError] = useState(null); // ��� �������� ��������� ������

    useEffect(() => {
        // ������� ��� ��������� ������ � �������
        const fetchAccountNambers = async () => {
            try {
                const response = await fetch("http://localhost:5146/api/TypesAccounts", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    }

                }); // URL API ��� ��������� ������
                if (!response.ok) {
                    throw new Error("������ ��� �������� ������");
                }
                const data = await response.json(); // ������������, ��� ����� � ������� JSON
                setAccountTypes(data); // ��������� ������ � ���������
            } catch (err) {
                setError(err.message); // ������������ ������
            }
        };

        fetchAccountNambers(); // �������� ������� ��� ��������� ������ ��� ������������ ����������
    }, []);

    return (
        <div id="webcrumbs">
            <div className="w-[500px] min-h-[400px] bg-neutral-50 shadow-lg rounded-lg p-6">
                <h1 className="font-title text-xl mb-4">���������� �����</h1>
                <form className="flex flex-col gap-4">
                    <details className="relative">
                        <summary className="cursor-pointer">�������� ����</summary>
                        <div className="absolute left-0 w-full bg-white rounded-md shadow-lg z-10">
                            <ul className="absolute z-10 bg-neutral-50 w-full border rounded-md mt-2 shadow-lg">
                                {error ? (
                                    <li className="py-2 px-4 text-red-500">������: {error}</li>
                                ) : accountNamber.length > 0 ? (
                                    accountNamber.map((type) => (
                                        <li key={type.id} className="py-2 px-4 hover:bg-neutral-200 cursor-pointer">
                                            {type.type}
                                        </li>
                                    ))
                                ) : (
                                    <li className="py-2 px-4">��������...</li>
                                )}
                            </ul>
                        </div>
                    </details>
                    <input type="number" placeholder="�����" className="border rounded-md p-2" />
                    <button className="w-[120px] h-[40px] bg-primary text-white rounded-full">���������</button>
                </form>
            </div>
        </div>
    )
}

export default Replen;