import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export const AnimatedTooltip = ({
  items
}: {
  items: {
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-30, 30]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <div className="mt-8 grid grid-cols-2 gap-8 md:flex md:grid-cols-none md:gap-x-0 md:gap-y-4">
      {items.map((item, index) => (
        <div
          className="group relative w-full md:-mr-4"
          key={item.name}
          onClick={() => setHoveredIndex(index)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10
                }
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX: translateX,
                rotate: rotate
              }}
              className={`${index % 2 ? "max-md:-left-28" : "max-md:-left-12"} absolute bottom-24 z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 shadow-xl md:-left-12 md:bottom-48`}
            >
              <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent " />
              <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent " />
              <div className="relative z-30 text-xl font-bold text-white">
                {item.name}
              </div>
              <div
                className="text-left text-xs text-white md:text-[16px]"
                style={{ width: "250px" }}
              >
                {item.designation}
              </div>
            </motion.div>
          )}
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 size-32 rounded-full border-2 border-white object-center !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105 md:h-52 md:w-52"
          />
        </div>
      ))}
    </div>
  );
};
