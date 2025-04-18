import Image from 'next/image';

export const EnhancedPhoto = () => {
  return (
    <section className="mb-6 md:mb-8">
      <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-8">
        {/* Style 1 - 꽃단장 프로필 */}
        <div
          className={`flex flex-col items-center "scale-105 transition-transform"
            }`}
        >
          <div className="relative w-full max-w-[120px] sm:max-w-[144px] md:max-w-full mx-auto">
            {/* Decorative frame */}
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-br from-purple-300 via-pink-200 to-purple-300 rounded-lg opacity-70 blur-sm"></div>

            {/* Image container */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-2 border-purple-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="/asserts/꽃단장 프로필.png"
                  alt="꽃단장 프로필 예시"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Enhanced label */}
          <div className="mt-3 md:mt-4 text-center">
            <p className="font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              꽃단장 프로필
            </p>
            <p className="text-[10px] md:text-xs text-purple-500 mt-0.5">화려한 색감과 꽃 장식</p>
          </div>
        </div>

        {/* Style 2 - 지브리 스타일 */}
        <div
          className={`flex flex-col items-center "scale-105 transition-transform"`}
        >
          <div className="relative w-full max-w-[120px] sm:max-w-[144px] md:max-w-full mx-auto">
            {/* Decorative frame */}
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-br from-sky-300 via-teal-200 to-sky-300 rounded-lg opacity-70 blur-sm"></div>

            {/* Image container */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-2 border-sky-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="/asserts/지브리.png"
                  alt="지브리 스타일 예시"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Enhanced label */}
          <div className="mt-3 md:mt-4 text-center">
            <p className="font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent">
              지브리 스타일
            </p>
            <p className="text-[10px] md:text-xs text-sky-500 mt-0.5">동화같은 따뜻한 분위기</p>
          </div>
        </div>

        {/* Style 3 - 야구 */}
        <div
          className={`flex flex-col items-center scale-105 transition-transform`}

        >
          <div className="relative w-full max-w-[120px] sm:max-w-[144px] md:max-w-full mx-auto">
            {/* Decorative frame */}
            <div className="absolute -inset-1 md:-inset-2 bg-gradient-to-br from-blue-300 via-indigo-200 to-blue-300 rounded-lg opacity-70 blur-sm"></div>

            {/* Image container */}
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg border-2 border-blue-200 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src="/asserts/야구.png"
                  alt="야구 스타일 예시"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Enhanced label */}
          <div className="mt-3 md:mt-4 text-center">
            <p className="font-bold text-xs sm:text-sm md:text-base bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              야구
            </p>
            <p className="text-[10px] md:text-xs text-blue-500 mt-0.5">*응원 팀 정보 받아야함</p>
          </div>
        </div>
      </div>
    </section>
  )
}
