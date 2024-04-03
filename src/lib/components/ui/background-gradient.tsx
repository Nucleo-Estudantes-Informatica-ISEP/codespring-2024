import React from "react";
import { motion } from "framer-motion";

import { cn } from "../../utils";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
  type = "default"
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
  type?: "default" | "gold" | "silver" | "bronze";
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%"
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"]
    }
  };

  return (
    <div
      className={cn(
        "group relative select-none p-5 md:p-9",
        containerClassName
      )}
    >
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl opacity-60 blur-xl transition duration-500 will-change-transform group-hover:opacity-100",
          type === "default"
            ? " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]"
            : type === "gold"
              ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#fded04,transparent),radial-gradient(circle_farthest-side_at_100%_0,#ffff00,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]"
              : type === "silver"
                ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#999,transparent),radial-gradient(circle_farthest-side_at_100%_0,#cecece,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]"
                : type === "bronze"
                  ? `bg-[radial-gradient(circle_farthest-side_at_0_100%,#dcc014,transparent),radial-gradient(circle_farthest-side_at_100%_0,#faa122,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]`
                  : ""
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined
        }}
        className={cn(
          "absolute inset-0 z-[1] rounded-3xl will-change-transform",
          type === "default"
            ? " bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
            : type === "gold"
              ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#ffff04,transparent),radial-gradient(circle_farthest-side_at_100%_0,#fadf00,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]"
              : type === "silver"
                ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#999,transparent),radial-gradient(circle_farthest-side_at_100%_0,#cecece,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]"
                : type === "bronze"
                  ? `bg-[radial-gradient(circle_farthest-side_at_0_100%,#cccb14,transparent),radial-gradient(circle_farthest-side_at_100%_0,#faa122,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#000614,transparent),radial-gradient(circle_farthest-side_at_0_0,#ff73af,#141316)]`
                  : ""
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
