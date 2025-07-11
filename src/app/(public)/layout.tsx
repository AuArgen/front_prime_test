"use client";
import HeaderPublic from "@/components/public/Header";
import GlobalLoading from "@/components/public/GlobalLoading";
import {ToastProvider} from "@/components/provider/ToastProvider";
import {AuthStatusProvider} from "@/components/provider/AuthStatusProvider";
import {Suspense} from "react";


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={"bg-base-200"}>
            <Suspense fallback={<div>Авторизацияланууда...</div>}>
                <ToastProvider>
                    <AuthStatusProvider>
                        <GlobalLoading/>
                        <HeaderPublic/>
                        <div className="max-w-7xl mx-auto my-5">
                            {children}
                        </div>
                    </AuthStatusProvider>
                </ToastProvider>
            </Suspense>
        </div>
    );
}
