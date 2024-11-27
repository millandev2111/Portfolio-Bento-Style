import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
    return (
        <div className="border-t w-full border-neutral-200 dark:border-neutral-800 pt-6 text-xs flex items-center justify-between">
        <div className="text-neutral-500">
        Built by @millanDev | 2024 millanDev. All Rights Reserved
        </div>
        <ThemeToggle/>
      </div>
    )
}

export default Footer;