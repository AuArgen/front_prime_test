"use client";
import {useEffect, useState} from "react";
import {CategoryType} from "@/type/CategoryType";
import {api} from "@/lib/api";
import CategoryItem from "@/app/(public)/category/CategoryItem";

export default function ShowCategory() {
    const [category, setCategory] = useState<CategoryType[]>([]);
    useEffect(() => {
        async function getCategory() {
            try {
                const res = await api.get('/v1/v1/open/categories');
                setCategory(res.data);
            } catch (e) {
                console.error(e);
            }
        }

        getCategory();
    }, []);

    return (
        <main className="min-h-screen bg-white p-6">
            <div className="flex items-center gap-3 text-sky-700 text-2xl font-bold mb-5">
                <i className="pi pi-list text-sky-500"></i>
                Список категории
            </div>
            <div className="flex flex-row flex-wrap">
                {category.map(item => (
                    <CategoryItem key={item.id} item={item}/>
                ))}
            </div>
        </main>
    )
}