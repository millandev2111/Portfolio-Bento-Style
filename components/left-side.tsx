import { siteConfig } from "@/config/site-config"
import Footer from "./footer"
import { Mail, MapPin } from "lucide-react"

const LeftSide = () => {
    return (
    <div className="flex-1 p-8 w-full xl:h-full px-8 pt-8 xl:p-8 xl:max-w-md">
    <div className="flex flex-col w-full h-full rounded-md space-y-6">
      {/*Image*/}
      <div>
        <img src="/PerfilNoBG.webp" alt="Millandev avatar" className="size-28 rounded-full mb-4 bg-primary" fetchPriority="high"/>
      </div>
      {/* Seccion Container */}
      <div>
      {/*Title*/}
      <div className="text-primary text-xl font-semibold">
        {siteConfig.title}
      </div>
      {/*Full Name*/}
      <h1 className="text-4xl font-bold mt-2">
        {siteConfig.creator}
      </h1>
      {/*Bio*/}
      <p className="text-2xl font-light text-neutral-500">
        {siteConfig.bio}
      </p>
      </div>
      {/*Buttons*/}
      <div className="flex items-center justify-between gap-6 text-sm">
        <a className="border border-neutral-200 dark:border-neutral-800 w-full py-2 px-3 flex items-center gap-2 rounded-full hover:scale-105 transition" href={siteConfig.locationLink}><MapPin size="16"/>{siteConfig.location}</a>
        <a className="border border-neutral-200 dark:border-neutral-800 w-full py-2 px-3 flex items-center gap-2 rounded-full hover:scale-105 transition" href={`mailto:${siteConfig.email}`}><Mail size="16"/>Contact Me</a>
      </div>
      {/*Footer*/}
      <div className="hidden xl:flex">
        <Footer/>
      </div>
    </div>
    </div>
    )
}

export default LeftSide