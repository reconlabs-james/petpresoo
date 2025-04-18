import { EnhancedPhoto } from "@/components/_home/EnhancedPhoto";
import { MainAutoSlidingGallery } from "@/components/_home/MainAutoSlidingGallery";
import { MainContent } from "@/components/_home/MainContent";
import { MainImage } from "@/components/_home/MainImage";
import MainPetProfile from "@/components/_home/MainPetProfile";
import { Footer } from "@/components/common/footer";
import Header from "@/components/common/header";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      <MainImage />
      <MainPetProfile />
      <EnhancedPhoto />
      <MainAutoSlidingGallery />
      <Footer />
    </div>
  );
}
