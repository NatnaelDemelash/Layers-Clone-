import Button from "@/components/Buttont";
import designExample1Image from "../assets/images/design-example-1.png";
import designExample2Image from "../assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute top-14 -left-32 hidden lg:block">
          <Image src={designExample1Image} alt="design example image 1" />
        </div>
        <div className="absolute -top-16 -right-64 hidden lg:block">
          <Image src={designExample2Image} alt="design example image 2" />
        </div>
        <div className="absolute">
          <Pointer name="Andrea" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-orange-400 text-neutral-950 rounded-full font-semibold">
            ✨$4.5M seed raised to launch
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6">
          Impactful AI tools for your business, created by AI
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          We are a team of AI experts and business professionals who are
          passionate about using AI to create impactful tools for businesses.
        </p>
        <form className="flex border border-white/15 p-2 rounded-full mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-transparent px-4 md:flex-1 outline-none"
          />
          <Button
            variant="primary"
            type="submit"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
