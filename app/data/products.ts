
export type Product = {
    id: number;
    slug: string;
    name: string;
    category: string;
    description: string;
    price: number;
    purchaseType: "direct" | "affiliate";
    badge?: string;
};

export const products: Product[] = [
    {
        id: 1,
        slug: "organic-wild-rocket",
        name: "Organic Wild Rocket",
        category: "Fresh Produce",
        description:
            "Fresh wild rocket leaves for salads, wraps and everyday meals.",
        price: 45.00,
        purchaseType: "direct",
        badge: "Featured",
    },
    {
        id: 2,
        slug: "chia-seeds",
        name: "Premium Chia Seeds",
        category: "Superfoods",
        description:
            "Versatile chia seeds for smoothies, breakfast bowls and baking.",
        price: 89.99,
        purchaseType: "direct",
        badge: "Popular",
    },
    {
        id: 3,
        slug: "herbal-wellness-tea",
        name: "Herbal Wellness Tea",
        category: "Herbal Products",
        description:
            "A soothing herbal tea blend for your everyday routine.",
        price: 75.00,
        purchaseType: "affiliate",
    },
    {
        id: 4,
        slug: "rolled-oats",
        name: "Whole Rolled Oats",
        category: "Healthy Foods",
        description:
            "A versatile breakfast staple for porridge, overnight oats and baking.",
        price: 54.99,
        purchaseType: "direct",
    },
    {
        id: 5,
        slug: "natural-peanut-butter",
        name: "Natural Peanut Butter",
        category: "Healthy Foods",
        description:
            "A simple pantry staple for toast, smoothies and snacks.",
        price: 69.99,
        purchaseType: "direct",
    },
    {
        id: 6,
        slug: "reusable-water-bottle",
        name: "Reusable Water Bottle",
        category: "Lifestyle",
        description:
            "A reusable bottle to help make hydration part of your daily routine.",
        price: 129.99,
        purchaseType: "affiliate",
        badge: "Recommended",
    },
];
