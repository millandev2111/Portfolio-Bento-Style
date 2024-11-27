import Footer from "@/components/footer";
import LeftSide from "@/components/left-side";
import RightSide from "@/components/right-side";

export default function Home() {
  return (
  <main className="flex flex-col xl:flex-row flex-1 gap-6 xl:gap-10 h-full w-full container mx-auto">
    <LeftSide />
    <RightSide/>
    <div className="flex xl:hidden px-8 pb-10 w-full">
        <Footer/>
      </div>
  </main>
  );
}
