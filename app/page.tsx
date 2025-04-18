import { MainContent } from "@/components/_home/MainContent";
import { Footer } from "@/components/common/footer";
import Header from "@/components/common/header";
import { EmojiGallery } from "@/components/emoji-gallery";
import { FeaturesSection } from "@/components/features-section";
import { NewsletterForm } from "@/components/newsletter-form";
import { PetForm } from "@/components/pet-form";
import Image from 'next/image';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <MainContent />
      {/* Description Section */}
      <section className="bg-gradient-to-b from-[#E2F3F1] to-[#E2F3F1] w-full py-8 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-black mb-8 md:text-lg text-center hidden md:block">
            <strong>MOVEMOJI</strong>는 생성형 AI 기반 움직이는 이모티콘 <br />
            자동 생성 웹서비스 입니다. 간단한 사진 업로드만으로<br />
            별도의 애니메이션 작업 없이 손쉽게 <br />움직이는 이모티콘을 만들 수 있습니다.
          </p>

          <div className="flex flex-row items-center justify-center md:gap-8 mb-12">
            <div className="rounded-lg p-4 w-64">
              <Image
                src="/asserts/jong-i.webp"
                alt="Original emoji"
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Arrow - always horizontal */}
            <div className="text-5xl">
              <span>→</span>
            </div>

            <div className="rounded-lg p-4 w-64">
              <video className="w-full h-full object-cover rounded-2xl" autoPlay loop muted playsInline>
                <source src="/asserts/jong-i-move-emoji.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#E2F3F1] to-[#dfe5fb] w-full py-8 md:py-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="relative px-8 py-6 md:px-12 md:py-8 bg-gray-100 rounded-full shadow-md border-2 border-gray-300 max-w-sm md:max-w-md">
            <p className="text-center text-2xl md:text-4xl font-bold text-blue-800">
              <span className="text-blue-900">MoveMoji</span>를 가장 먼저 <br className="hidden md:block" /> 무료로 이용해보세요!
            </p>
            <div className="absolute inset-0 rounded-full border border-gray-400 opacity-50"></div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="bg-gradient-to-b from-[#dfe5fb] to-[#fdf5dc] w-full py-16 bg-white">
        <div className="relative max-w-4xl mx-auto px-4">
          <Image
            src="/asserts/moveMoji_logo_blue.webp"
            alt="moveMojo_logo"
            width={300}
            height={10}
            className="absolute top-[-35px] left-1/2 transform -translate-x-1/2"
            unoptimized
          />
          <PetForm />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-gradient-to-b from-[#fdf5dc] to-[#ffffff] w-full py-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-2xl text-gray-500">✨</span>
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">사진 한장만 올리면 끝!</h1>
          <span className="text-2xl text-gray-500">✨</span>
        </div>
        <p className="text-center text-gray-700 max-w-2xl mx-auto mb-8">
          내 반려동물이 귀여운 움직이는 이모티콘으로 변신!
          <br />
          사진을 업로드하면 AI가 자동으로 애니메이션을 만들어줘요.
        </p>
        <EmojiGallery />
      </section>

      {/* Features Section */}
      <section className="w-full">
        <FeaturesSection />
      </section>

      {/* Newsletter Section */}
      <section className="w-full pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
      <section className="w-full">
        <div className="flex md:flex-row-reverse items-center justify-center md:justify-start md:mr-10 gap-4 mb-5">
          <Link href="https://www.instagram.com/movemoji.ai/">
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              width={20}
              height={20}
              className="w-10 h-10"
            />
          </Link>
          <Link href="https://www.threads.net/@movemoji.ai">
            <Image
              src="/icons/threads.svg"
              alt="threads"
              width={20}
              height={20}
              className="w-10 h-10"
            />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
