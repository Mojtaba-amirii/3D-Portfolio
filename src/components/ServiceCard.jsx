import { motion } from "framer-motion";

import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div className=" xs:w-62.5 w-full hover:rotate-x-51 hover:rotate-z-43 hover:transform-3d duration-500 transition-all will-change">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-px rounded-[20px] shadow-card "
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-70 flex justify-evenly items-center flex-col ">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className=" text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
