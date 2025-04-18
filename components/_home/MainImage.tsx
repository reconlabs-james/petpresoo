import Image from 'next/image';

export const MainImage = () => {
  return (
    <div className="mb-6 md:mb-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        {/* Left image - Home photo */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs mx-auto">
            {/* Simple rounded mask with no background */}
            <div className="overflow-hidden rounded-2xl shadow-md aspect-square relative">
              <Image
                src="/asserts/칸쵸 원본.jpeg"
                alt="강아지 칸쵸의 일상 사진"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-center mt-2 md:mt-4 text-purple-700 font-medium text-sm md:text-base">
            칸쵸의 일상 모습
          </p>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full max-w-xs mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-md aspect-square relative">
              <Image
                src="/asserts/칸쵸_프로필.png"
                alt="강아지 칸쵸의 프로필 사진"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-center mt-2 md:mt-4 text-purple-700 font-medium text-sm md:text-base">
            칸쵸의 꽃단장 프로필
          </p>
        </div>
      </div>

      {/* Before and After text */}
      <div className="text-center mt-4 md:mt-6 mb-4 md:mb-6">
        <p className="text-base md:text-lg font-medium bg-gradient-to-r from-purple-600 to-sky-600 bg-clip-text text-transparent inline-block px-3 md:px-4 py-1 md:py-2 border-b-2 border-purple-200">
          일상 속 모습과 스튜디오에서의 변신!
        </p>
      </div>
    </div>
  )
}
