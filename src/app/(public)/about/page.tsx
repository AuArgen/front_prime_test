import {createMetadata} from "@/utils/utilsSeoMetaData";
import ShowAbout from "@/app/(public)/about/ShowAbout";

export const generateMetadata = () => {
    return createMetadata({
        title: "О PrimeTest",
        description: "Список всех категории и тестов, О нас?  это интеллектуальная онлайн-платформа для тестирования по всем основным направлениям:\n" +
            "                        математика, физика, программирование, языки и многое другое",
        path: "/about",
        keywords: ['категории', 'список категории тестов', 'тесты', 'О нас']
    });
}


export default function AboutPage() {

    return (
        <div>
            <ShowAbout/>
        </div>
    )
}