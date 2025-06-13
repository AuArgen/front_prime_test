import {createMetadata} from "@/utils/utilsSeoMetaData";
import ShowContact from "@/app/(public)/contact/ShowContact";

export const generateMetadata = () => {
    return createMetadata({
        title: " Связаться с нами. PrimeTest",
        description: "Список всех категории и тестов, О нас?  это интеллектуальная онлайн-платформа для тестирования по всем основным направлениям:\n" +
            "                        математика, физика, программирование, языки и многое другое",
        path: "/about",
        keywords: ['категории', 'список категории тестов', 'тесты', 'О нас','Связаться с нами']
    });
}


export default function ContactPage() {

    return (
        <div>
            <ShowContact/>
        </div>
    )
}