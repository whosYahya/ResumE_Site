import { motion } from "framer-motion";

type ProfilePicProps = {
  src: string;
  alt: string;
  size?: string;
};

export default function ProfilePic({ src, alt, size = "26rem" }: ProfilePicProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative"
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-[-4px] rounded-full"
        style={{
          background: `conic-gradient(
            from 0deg,
            #7f77dd, #5dcaa5,
            #d4537e, #d85a30, #7f77dd
          )`,
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      />

      <div className="absolute inset-[2px] rounded-full bg-background z-10" />

      <div className="absolute inset-[6px] rounded-full overflow-hidden z-20">
        <img src={src} alt={alt} className="h-full w-full object-cover object-center" />
      </div>
    </motion.div>
  );
}
