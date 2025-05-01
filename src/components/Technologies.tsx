import React from "react";
import { 
    SiPython, SiMysql, SiC, SiGnubash, SiApachespark, SiDatabricks, 
    SiGooglebigquery,  SiPostgresql,  SiTableau, SiJavascript, SiHtml5, SiCss3, SiAmazon,
     SiGooglecloud, SiChartdotjs, SiTensorflow, SiFlask,
     SiDocker, SiGit, SiGithub, SiLinux 
  } from 'react-icons/si';
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import {motion} from "framer-motion";
import { Variants } from "framer-motion";

const iconVariants = (duration: number): Variants => ({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        }
    }
})
const Technologies: React.FC = () => {
  return( 
    <div className="pb-24">
        <motion.h2 
            whileInView={{opacity: 1, y:0}}
            initial={{opacity:0, y: -100}}
            transition ={{duration: 1.5}}
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{opacity:0, x: -100}}
            transition ={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4"><SiPython className="text-7xl text-yellow-400" title="Python" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4"><SiMysql className="text-7xl text-blue-600" title="SQL" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4"><SiC className="text-7xl text-blue-400" title="C" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4"><SiGnubash className="text-7xl text-green-500" title="Bash" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4"><SiApachespark className="text-7xl text-orange-400" title="PySpark" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4"><SiDatabricks className="text-7xl text-red-500" title="Databricks" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4"><SiGooglebigquery className="text-7xl text-blue-400" title="BigQuery" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4"><SiPostgresql className="text-7xl text-blue-600" title="PostgreSQL" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4"><SiMongodb className="text-7xl text-green-500" title="MongoDB" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4"><SiTableau className="text-7xl text-blue-300" title="Tableau" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4"><SiGooglecloud className="text-7xl text-blue-400" title="Google Cloud Compute" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4"><SiChartdotjs className="text-7xl text-pink-400" title="Chart.js" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4"><SiTensorflow className="text-7xl text-orange-400" title="TensorFlow" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4"><SiHtml5 className="text-7xl text-orange-500" title="HTML" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(7)} className="p-4"><SiCss3 className="text-7xl text-blue-500" title="CSS" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4"><SiJavascript className="text-7xl text-yellow-400" title="JavaScript" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4"><RiReactjsLine className="text-7xl text-cyan-400" title="React.js" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4"><SiFlask className="text-7xl text-gray-400" title="Flask" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(8)} className="p-4"><SiGooglecloud className="text-7xl text-blue-400" title="GCP" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4"><SiAmazon className="text-7xl text-orange-400" title="AWS (substitute)" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4"><SiDocker className="text-7xl text-blue-400" title="Docker" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4"><SiGit className="text-7xl text-red-500" title="Git" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4"><SiGithub className="text-7xl text-white bg-black rounded-full p-1" title="GitHub" /></motion.div>
            <motion.div initial="initial" animate="animate" variants={iconVariants(3)} className="p-4"><SiLinux className="text-7xl text-yellow-400" title="Linux" /></motion.div>  
        </motion.div>
    </div>

  )
};
  export default Technologies
