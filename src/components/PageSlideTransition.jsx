import { motion, AnimatePresence } from "framer-motion";

export default function PageSlideTransition({ active, image, bgImage, transitionImgClass }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{
            duration: 1.8,
            ease: [0.77, 0, 0.175, 1]
          }}
          className="fixed top-0 left-0 w-full h-full bg-gradient-to-br from-[#00165E] to-[#FF76BB] z-50 flex items-center justify-center"
        >

        {bgImage && (
            <motion.img
              src={bgImage}
              initial={{scale: 1.2 }}
              exit={{scale: 1.45 }}
              transition={{
                duration: 1.8,
                ease: "easeOut"
              }}
              className="absolute w-[900px] max-w-none pointer-events-none mix-blend-overlay"
            />
        )}

        <motion.img
          src={image}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -40 }}
          exit={{ opacity: 0, y: -250 }}
          transition={{
            duration: 1.4,
            ease: [0.33, 1, 0.68, 1]
          }}
          className={`h-auto ${transitionImgClass || "w-100"}`}
        />

      </motion.div>
      )}
    </AnimatePresence>
  );
}
