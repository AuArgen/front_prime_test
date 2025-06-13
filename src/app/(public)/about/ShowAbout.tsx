'use client';

import { motion } from 'framer-motion';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';
export default function ShowAbout() {
    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-indigo-50 to-white p-6">
            <motion.div
                className="w-full max-w-4xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Card
                    title={
                        <div className="flex items-center gap-3 text-indigo-700 text-3xl font-bold">
                            <i className="pi pi-star-fill text-indigo-500"></i>
                            О проекте PrimeTest
                        </div>
                    }
                    className="shadow-2xl rounded-2xl"
                >
                    <p className="text-gray-700 text-lg mt-4">
                        <strong>PrimeTest</strong> — это интеллектуальная онлайн-платформа для тестирования по всем основным направлениям:
                        математика, физика, программирование, языки и многое другое.
                    </p>

                    <Divider className="my-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-3">
                            <i className="pi pi-check-circle text-indigo-600 text-xl"></i>
                            <span className="text-gray-700">Прохождение тестов по множеству предметов</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="pi pi-bolt text-indigo-600 text-xl"></i>
                            <span className="text-gray-700">Мгновенная проверка и результат</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="pi pi-user-edit text-indigo-600 text-xl"></i>
                            <span className="text-gray-700">Удобный интерфейс и тёмная тема</span>
                        </div>
                        <div className="flex items-start gap-3">
                            <i className="pi pi-mobile text-indigo-600 text-xl"></i>
                            <span className="text-gray-700">Полная адаптивность для смартфонов</span>
                        </div>
                    </div>

                    <Divider className="my-6" />

                    <motion.div
                        className="text-right"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Button
                            label="Начать тестирование"
                            icon="pi pi-play"
                            className="bg-indigo-600 border-none hover:bg-indigo-700"
                        />
                    </motion.div>
                </Card>

                <p className="text-center text-sm text-gray-400 mt-6">
                    © {new Date().getFullYear()} PrimeTest — создано с использованием Next.js, PrimeReact и TailwindCSS
                </p>
            </motion.div>
        </main>
    );
}