interface StorageUpgrade {
    name: string;
    costs: Resource[];
}

interface Resource {
    name: string;
    amount: number;
    description: string;
}

export {
    Resource, StorageUpgrade
}