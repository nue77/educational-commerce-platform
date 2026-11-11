
import { notFound } from "next/navigation";
import { products } from "../../data/products";
import ProductDetails from "./ProductDetails";

type ProductPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ProductPage({
    params,
}: ProductPageProps) {
    const { slug } = await params;

    const product = products.find(
        (item) => item.slug === slug
    );

    if (!product) {
        notFound();
    }

    const relatedProducts = products
        .filter(
            (item) =>
                item.category === product.category &&
                item.slug !== product.slug
        )
        .slice(0, 3);

    return (
        <ProductDetails
            product={product}
            relatedProducts={relatedProducts}
        />
    );
}
