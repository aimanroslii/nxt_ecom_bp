import Image from "next/image";
import Link from "next/link";

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://dynamic.zacdn.com/3QKVSAEe0YqZKdaTxGd33F1D11Y=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-1598-8344873-1.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://dynamic.zacdn.com/H8iyxDtSYvNbbV1UtSklgl4O4rs=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-1598-8344873-2.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">H&M</span>
          <span className="font-semibold">$60</span>
        </div>
        <div className="text-sm text-gray-500">Oversized denim shirt</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://dynamic.zacdn.com/gWEitUe8-OfmSa_fY-Vfhldd4xM=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-1498-7894663-1.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://dynamic.zacdn.com/yk_gtKFfLlFVwmwdM82085FCksU=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-1498-7894663-2.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">H&M</span>
          <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">Shimmering metallic denim</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://dynamic.zacdn.com/L3MUbVLv0ef04IZRN_LdAgiMDX8=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-9461-3465983-1.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://dynamic.zacdn.com/IB_MtumffkKyBEPfir4VbLd9Qjc=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-9462-3465983-2.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">H&M</span>
          <span className="font-semibold">$15</span>
        </div>
        <div className="text-sm text-gray-500">3-pack printed T-shirts</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">Add to Cart</button>
      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image
            src="https://dynamic.zacdn.com/aSOOyKEpnJu_I5QFH15sfnF5ri0=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-3049-3452893-1.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src="https://dynamic.zacdn.com/yGRINDCNUjJoavyapCQUsMaHrcg=/filters:quality(70):format(webp)/https://static-my.zacdn.com/p/hm-3049-3452893-2.jpg"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">H&M</span>
          <span className="font-semibold">$30</span>
        </div>
        <div className="text-sm text-gray-500">2-piece sweatshirt set</div>
        <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white ">Add to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
