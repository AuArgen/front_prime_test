"use client";
import {useUserStore} from "@/app/store/useUserStore";

// Функциянын атын 'testPage' ордуна 'TestPage' кылып өзгөртүңүз
export default function TestPage() {
    const {user} = useUserStore();

    return (
        <div>
            {user?.id}
            {user?.email}
            {user?.name}
        </div>
    )
}