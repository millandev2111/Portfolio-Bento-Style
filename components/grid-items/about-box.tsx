import { GridItemInterface } from "@/config/site-config"
import Image from "next/image"
import Link from "next/link"

const AboutBox = ({item}: {item: GridItemInterface}) => {
    return (
        <div className="flex flex-col justify-end w-full h-full overflow-hidden rounded-3xl">
            {/* overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950/90" />
            {/* Background Image */}
            <Image className="object-cover object-center" fill src={item.image ?? ""} alt="bg-image"/>
            {/* Content Container */}
            <div className="relative z-20 p-8">
                {/* Title */}
                <div className="text-3xl font-medium text-white mb-3">{item.title}</div>
                {/* Items */}
                <div className="flex flex-wrap items-center gap-3 ">
                    {item.about?.map((about) => {
                    return (
                    <div className="px-2 py-1 font-medium bg-white rounded-lg dark:bg-neutral-900 text-sm" key={about.title} >
                        {about.title}
                    </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default AboutBox