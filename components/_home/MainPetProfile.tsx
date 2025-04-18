import Image from 'next/image';

const MainPetProfile = () => {
  return (
    <section className="text-center mb-6 md:mb-8">
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg mb-2 sm:mb-3">
          <Image
            src="/asserts/덕선이 원본.pn"
            alt="부시시한 덕선이"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          부시시한 덕선이가 이렇게 변했어요!
        </p>
      </div>
    </section>
  )
}

export default MainPetProfile;
