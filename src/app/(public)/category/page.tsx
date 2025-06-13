import ShowCategory from "@/app/(public)/category/ShowCategory";
import {createMetadata} from "@/utils/utilsSeoMetaData";

export const generateMetadata = () => {
    return createMetadata({
        title: "Категории",
        description: "Список всех категории и тестов",
        path: "/category",
        keywords: ['категории', 'список категории тестов', 'тесты']
    });
}


export default function CategoryPage() {

    return (
        <div>
            <ShowCategory/>
        </div>
    )
}