'use client';

import { siteConfig} from "@/config/site-config";
import GridItem from "./grid-item";
import SocialBox from "./grid-items/social-box";
import MentorshipBox from "./grid-items/mentorships-box";
import ProjectBox from "./grid-items/project-box";
import { useAnimate, stagger } from "framer-motion";
import { useEffect } from "react";
import AboutBox from "./grid-items/about-box";

const staggerDelay = stagger(0.02);

const RightSide = () => {

    const [scope, animate] = useAnimate();
    // Framer Motion
    useEffect(() => {
        if (scope.current) {
            animate("div", {
                opacity: 1,
                y: 0,
                scale: 1,
            },{
                duration: 0.15,
                type: "spring",
                stiffness: 330,
                damping: 35,
                delay: staggerDelay,
            });
        }
    },[scope])

    return (
    <div className="flex-1  lg:h-full">
      {/* Grid Container */}
      <div ref={scope} className="w-full lg:h-full p-6 xl:overflow-y-auto grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10">
        {/* Grid Items */}
        {siteConfig.items.map((item, index) => {
          return (
          <GridItem key={item.title + index} size={item.layout}>
            {
              item.type === 'social' ? (<SocialBox item={item} />) 
              : item.type === "mentor" ? (<MentorshipBox item={item}/>)
              : item.type === "project" ? (<ProjectBox item={item}/>) 
              : item.type === "about" ? (<AboutBox item={item}/>) 
              : (<div></div>) 
            }
          </GridItem>
          );
        })}
      </div>
    </div>
    )
}

export default RightSide