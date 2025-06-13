"use client";
import { motion } from 'framer-motion';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';

import { useState } from 'react';
import React from 'react';
import {useToast} from "@/components/provider/ToastProvider"; // React импорттоо керек

export default function ShowContact() {
    const toast = useToast();
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        // Здесь можно добавить отправку на API
        console.log('Форма отправлена:', form);
        // alert('Спасибо за ваше сообщение!');
        toast.showSuccess('Спасибо за ваше сообщение!');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-sky-50 to-white flex justify-center items-center p-6">
            <motion.div
                className="w-full max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Card
                    title={
                        <div className="flex items-center gap-3 text-sky-700 text-3xl font-bold">
                            <i className="pi pi-envelope text-sky-500"></i>
                            Связаться с нами
                        </div>
                    }
                    className="shadow-2xl rounded-2xl"
                >
                    <div className="grid gap-5">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-gray-700 font-semibold">
                                Имя
                            </label>
                            <InputText
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Ваше имя"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-gray-700 font-semibold">
                                Email
                            </label>
                            <InputText
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="example@mail.com"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-gray-700 font-semibold">
                                Сообщение
                            </label>
                            <InputTextarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                rows={5}
                                autoResize
                                placeholder="Введите ваше сообщение"
                            />
                        </div>

                        <div className="text-right">
                            <Button
                                label="Отправить"
                                icon="pi pi-send"
                                className="bg-sky-600 border-none hover:bg-sky-700"
                                onClick={handleSubmit}
                            />
                        </div>
                    </div>
                </Card>

                <p className="text-center text-sm text-gray-400 mt-6">
                    📬 Или напишите нам напрямую на <a href="mailto:support@primetest.com" className="text-sky-600 font-medium">support@primetest.com</a>
                </p>
            </motion.div>
        </main>
    );
}