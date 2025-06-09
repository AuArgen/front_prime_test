// src/api/auth.ts
import { api } from "@/lib/api";
import { AuthCodeType } from "@/type/AuthCodeType";

// authenticate функциясы үчүн жаңы тип түзөлү
export type AuthResponseType = {
    success: boolean;
    access_token?: string;
    refresh_token?: string;
    expires_at?: string;
};

export async function getAuthCode(): Promise<{ success: boolean; url?: string; error?: unknown }> { // 'any' ордуна 'unknown'
    try {
        const res = await api.get("/v1/authorization");
        const data: AuthCodeType = res.data; // AuthCodeType туура аныкталган болсо бул жерде ката болбошу керек

        return {
            success: data.success,
            url: (process.env.NEXT_PUBLIC_AUTH_SERVICE || "") + data.auth_code,
        };
    } catch (error: unknown) { // 'any' ордуна 'unknown'
        console.error("Ошибка при получении кода авторизации:", error);
        return {
            success: false,
            error,
        };
    }
}

export async function authenticate(code: string | null): Promise<AuthResponseType & { error?: unknown }> { // 'any' ордуна 'unknown'
    try {
        const res = await api.get("/v1/authorization/end", {
            params: { code }
        });
        const data: AuthResponseType = res.data; // Тибин так көрсөтүү

        return {
            success: data.success,
            access_token: data.access_token,
            refresh_token: data.refresh_token,
            expires_at: data.expires_at,
        };
    } catch (error: unknown) { // 'any' ордуна 'unknown'
        console.error("Ошибка при получении кода авторизации:", error);
        return {
            success: false,
            error,
        };
    }
}