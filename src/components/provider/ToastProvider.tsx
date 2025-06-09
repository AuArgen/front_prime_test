// components/ToastProvider.tsx (же ушул аталыштагы файл)
"use client";
import React, { useRef, createContext, useContext } from 'react';
import { Toast } from 'primereact/toast';

// 1. ToastContext'тин тибин аныктаңыз
interface ToastContextType {
    showSuccess: (detail: string, summary?: string) => void;
    showInfo: (detail: string, summary?: string) => void;
    showWarn: (detail: string, summary?: string) => void;
    showError: (detail: string, summary?: string) => void;
}

// 2. Toast Context'ти түзүүдө, демейки мааниге бош объект берип, тибин көрсөтүңүз.
// null болсо, TypeScript анын тибин "null" деп гана таанып калат.
export const ToastContext = createContext<ToastContextType | null>(null);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
    const toast = useRef<Toast>(null); // useRef үчүн да туура типти көрсөтүү

    // Toast'ту көрсөтүү үчүн функция
    const showToast = (severity: 'success' | 'info' | 'warn' | 'error', summary: string, detail: string, life: number = 3000) => {
        if (toast.current) {
            toast.current.show({ severity, summary, detail, life });
        }
    };

    // Контекст аркылуу жеткиликтүү кылынган объект
    const value: ToastContextType = { // value объектисине тип берүү
        showSuccess: (detail, summary = 'Ийгиликтүү') => showToast('success', summary, detail),
        showInfo: (detail, summary = 'Маалымат') => showToast('info', summary, detail),
        showWarn: (detail, summary = 'Эскертүү') => showToast('warn', summary, detail, 5000),
        showError: (detail, summary = 'Ката') => showToast('error', summary, detail, 7000)
    };

    return (
        <ToastContext.Provider value={value}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
};

// Custom hook: башка компоненттерден Toast'ту колдонуу үчүн
export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        // Бул ката ToastProvider'сыз useToast чакырылса чыгат,
        // бул TypeScript'ке контексттин null болбошун камсыз кылууга жардам берет.
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context; // Эми context туура ToastContextType тибинде болот
};