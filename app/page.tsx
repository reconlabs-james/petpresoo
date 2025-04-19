'use client'

import { EnhancedPhoto } from "@/components/_home/EnhancedPhoto";
import { MainAutoSlidingGallery } from "@/components/_home/MainAutoSlidingGallery";
import { MainContent } from "@/components/_home/MainContent";
import { MainImage } from "@/components/_home/MainImage";
import MainPetProfile from "@/components/_home/MainPetProfile";
import { useState } from "react";

export default function Home() {
  const [activeStyle, setActiveStyle] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex-1 flex flex-col">
        <main className="container mx-auto px-4 md:px-6 py-6 md:py-12 flex-1">
          <div className="max-w-4xl mx-auto">
            <MainContent />
            <MainImage />
            <MainPetProfile />
            <EnhancedPhoto activeStyle={activeStyle} setActiveStyle={() => setActiveStyle} />
            <MainAutoSlidingGallery />
          </div>
        </main>
      </div>
    </div>
  );
}
