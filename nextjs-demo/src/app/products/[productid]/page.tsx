import { Metadata } from "next";

type Params = {
  productId: string;
};

type Props = {
  params: Params;
};

// ✅ `params`를 일부러 async 함수에서 await 처리
export const generateMetadata = async (
  props: Promise<Props>
): Promise<Metadata> => {
  const { params } = await props;
  const id = params.productId;

  return {
    title: `Product ${id}`,
  };
};

// ✅ 마찬가지로 page에서도 props를 Promise로 받고 await
export default async function ProductDetails(props: Promise<Props>) {
  const { params } = await props;
  const productId = params.productId;

  return <h1>Details about product {productId}</h1>;
}
