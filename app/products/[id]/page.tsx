// Importing the getProductById function from a module located in the "@/lib/actions" directory.
import { getProductById } from "@/lib/actions";

// Importing the redirect function from the "next/navigation" module.
import { redirect } from "next/navigation";

// Importing the Image component from the "next/image" module.
import Image from "next/image";

// Importing the Link component from the "next/link" module.
import Link from "next/link";

// Defining the Props type, which is an object with a params property of type { id: string }.
type Props = {
  params: { id: string };
};

// Defining the ProductDetails component as an asynchronous function that takes Props as a parameter.
const ProductDetails = async ({ params: { id } }: Props) => {
  // Fetching the product details based on the provided id.
  const product = await getProductById(id);

  // Redirecting to the homepage if the product is not found.
  if (!product) redirect('/');

  // Returning JSX for rendering the product details.
  return (
    <div className="product-container">
      <div className="flex gap-28 xl:flex-row flex-col">
        <div className="product-image">
          {/* Displaying the product image using the Image component */}
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={400}
            className="mx-auto"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              {/* Displaying the product title */}
              <p className="text-[28px] text-secondary font-semibold">
                {product.title}
              </p>

              {/* Link to visit the product */}
              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the ProductDetails component as the default export.
export default ProductDetails;
