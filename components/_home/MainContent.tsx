import { Heart, PawPrint, Sparkles, Star } from "lucide-react";

export const MainContent = () => {
  return (
    <section className="text-center mb-8 md:mb-12 py-6 md:py-8 relative">
      {/* 그라데이션 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top left decorative element */}
        <div className="absolute -top-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-200/40 to-transparent rounded-full blur-xl"></div>

        {/* Bottom right decorative element */}
        <div className="absolute -bottom-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-tl from-sky-200/40 to-transparent rounded-full blur-xl"></div>

        {/* Center decorative element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-purple-100/20 to-sky-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* 상단 장식 요소 */}
      <div className="relative flex justify-center items-center mb-3 md:mb-4">
        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-transparent to-purple-300 rounded-full"></div>
        <div className="mx-2 md:mx-3 text-purple-400 animate-bounce">
          <PawPrint className="h-4 w-4 md:h-5 md:w-5" />
        </div>
        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full"></div>
        <div className="mx-2 md:mx-3 text-sky-400 animate-bounce delay-100">
          <PawPrint className="h-4 w-4 md:h-5 md:w-5" />
        </div>
        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
      </div>

      {/* 장식 부제목 */}
      <p className="relative text-xs sm:text-sm md:text-base font-medium text-purple-600 tracking-wider uppercase mb-3 md:mb-4 animate-pulse">
        ✨ 특별한 순간을 위한 ✨
      </p>

      {/* Sparkling stars around the title */}
      <div className="absolute top-1/4 left-1/4 animate-pulse">
        <Sparkles className="h-4 w-4 md:h-6 md:w-6 text-yellow-400" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-pulse delay-300">
        <Star className="h-3 w-3 md:h-5 md:w-5 text-purple-400" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-pulse delay-700">
        <Sparkles className="h-3 w-3 md:h-5 md:w-5 text-sky-400" />
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-pulse delay-500">
        <Heart className="h-3 w-3 md:h-4 md:w-4 text-pink-400" />
      </div>

      {/* 메인 타이틀 - 레이아웃 수정 */}
      <div className="relative mb-4 md:mb-6">
        {/* Title background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-sky-400/20 to-purple-400/20 rounded-2xl blur-xl"></div>

        {/* Main title */}
        <div className="relative px-4 py-3 md:px-6 md:py-4 z-10">
          {/* PetPresso 강조 */}
          <div className="mb-3 md:mb-5 relative">
            {/* 배경 효과 */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-300/30 via-sky-300/30 to-purple-300/30 rounded-full blur-lg"></div>

            {/* 강조된 PetPresso 텍스트 */}
            <div className="relative inline-flex items-center justify-center py-1 px-4 md:py-2 md:px-6 rounded-full border-2 border-purple-300/50 shadow-lg bg-white/30 backdrop-blur-sm">
              <span
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600 bg-clip-text text-transparent drop-shadow-md"
                style={{ textShadow: "0 0 15px rgba(147, 51, 234, 0.3)" }}
              >
                Pet<span className="text-sky-600">Presso</span>
              </span>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 md:h-6 md:w-6 text-yellow-400" />
              </div>
            </div>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
            <div className="mb-1 md:mb-2">우리 강아지가</div>
            <div className="flex flex-wrap justify-center items-center">
              <span
                className="inline-block bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600 bg-clip-text text-transparent"
                style={{ animation: "float 3s ease-in-out infinite" }}
              >
                아이돌
              </span>
              <span className="inline-block bg-gradient-to-r from-purple-600 via-sky-500 to-purple-600 bg-clip-text text-transparent">
                {" "}
                샵 다녀왔어요!
              </span>
            </div>
          </h1>
        </div>

        {/* Decorative elements around title */}
        <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 animate-pulse">
          <Sparkles className="h-6 w-6 md:h-10 md:w-10 text-yellow-400" />
        </div>
        <div className="absolute -bottom-2 -left-2 md:-bottom-4 md:-left-4 animate-pulse delay-500">
          <Sparkles className="h-5 w-5 md:h-8 md:w-8 text-purple-400" />
        </div>
      </div>

      {/* 부제목 */}
      <div className="relative inline-block">
        <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-6 text-sky-600 font-medium px-3 py-1 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-purple-50 to-sky-50 shadow-sm border border-purple-100">
          내 반려동물도 꽃단장 하고 스튜디오 사진 찍기
          <span className="absolute -right-1 -bottom-1 text-pink-400">
            <Heart className="h-4 w-4 md:h-5 md:w-5 fill-pink-400" />
          </span>
        </p>
      </div>

      {/* 하단 장식 요소 */}
      <div className="relative flex justify-center items-center mt-3 md:mt-4">
        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-transparent to-purple-300 rounded-full"></div>
        <div className="mx-2 md:mx-3 text-purple-400 animate-bounce delay-200">
          <PawPrint className="h-4 w-4 md:h-5 md:w-5 transform rotate-45" />
        </div>
        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-purple-300 to-sky-300 rounded-full"></div>
        <div className="mx-2 md:mx-3 text-sky-400 animate-bounce delay-300">
          <PawPrint className="h-4 w-4 md:h-5 md:w-5 transform -rotate-45" />
        </div>
        <div className="h-0.5 w-12 md:w-16 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
      </div>
    </section>
  )
}
