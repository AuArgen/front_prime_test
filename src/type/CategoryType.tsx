export class CategoryType {
    id: number | null;
    name: string;
    description: string;
    icon: string;

    constructor(
        id: number | null,
        name: string,
        description: string,
        icon: string
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.icon = icon;
    }
}