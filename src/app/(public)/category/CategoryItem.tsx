"use client";
import {CategoryType} from "@/type/CategoryType";
import {Card} from "primereact/card";
import {useState} from "react";
import {Image} from "primereact/image";

type Props = {
    item: CategoryType;
}

export default function CategoryItem(props: Props) {
    const item:CategoryType = props.item;
    const [imgSrc, setImgSrc] = useState<string>(item.icon);

    return (
        <div className="p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/4 ">
            <Card title={item.name} header={
                <Image src={imgSrc}
                     alt={item.name}
                     onError={() => setImgSrc("https://argauto.lv/application/modules/themes/views/default/assets/images/image-placeholder.png")}
                />
            }>
                {item.description}
            </Card>
        </div>
    )
}