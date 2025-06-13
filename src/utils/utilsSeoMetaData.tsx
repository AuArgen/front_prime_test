import { Metadata } from "next";

const defaultImage = process.env.NEXT_PUBLIC_DEFAULT_FAVICON ?? "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/2560px-Test-Logo.svg.png";

const siteName = "Онлайн тест";
const metadataBase = process.env.NEXT_PUBLIC_BASE_URL // На проде это можно будет подменить переменной

type SEOOptions = {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    path?: string;
};

export function createMetadata({
                                   title,
                                   description,
                                   keywords = [],
                                   image = defaultImage,
                                   path = "/",
                               }: SEOOptions): Metadata {
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const fullUrl = `${metadataBase}${path}`;

    return {
        title: fullTitle,
        description: description || "Добро пожаловать на нашу платформу с онлайн тестами.",
        keywords: [...keywords, "тесты", "онлайн тест", "quiz", "обучение"].filter(Boolean),
        openGraph: {
            title: fullTitle,
            description: description || "Подробная информация о тестах и категориях.",
            url: fullUrl,
            type: "website",
            images: [
                {
                    url: image,
                    width: 240,
                    alt: title || "Онлайн Тесты",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: fullTitle,
            description: description || "Тесты на разные темы. Участвуйте и улучшайте знания!",
            images: [image],
        },
    };
}