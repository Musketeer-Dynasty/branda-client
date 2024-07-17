import Image from "next/image";
import { HeroStyle } from "./style";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  return (
    <HeroStyle>
      <div className="one">
        <h1>
          Need to Start a company? <br /> Just <strong>branda</strong> it!
        </h1>
        <p>
          Running a business is stressful. Getting your brand assets shouldn’t
          be. Get your brand assets in just a few minutes.
        </p>
        <div className="btn">
          <motion.button
            type="button"
            whileTap={{ scale: 0.85 }}
            onClick={() => router.push("/auth/signup")}
          >
            Get Started for free
          </motion.button>
        </div>
      </div>
      <div className="img">
        <Image
          src="/hero.svg"
          height={0}
          width={0}
          sizes="100%"
          alt="hero img"
        />
      </div>
    </HeroStyle>
  );
};
