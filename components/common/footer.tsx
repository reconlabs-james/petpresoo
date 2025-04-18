export const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 sm:py-6 md:py-8 mt-4 sm:mt-8 md:mt-12">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between mb-3 sm:mb-4 md:mb-6">
            <div className="mb-2 md:mb-0">
              <h3 className="text-sm sm:text-base md:text-lg font-bold text-blue-900 mb-0.5 sm:mb-1 md:mb-2">
                주) 리콘랩스
              </h3>
              <p className="text-[10px] sm:text-xs md:text-sm text-blue-900">대표이사: 반성훈</p>
            </div>
            <div>
              <p className="text-[10px] sm:text-xs md:text-sm text-blue-900 mb-0.5 sm:mb-1">
                통신판매업신고번호: 2021-서울강남-04763
              </p>
              <p className="text-[10px] sm:text-xs md:text-sm text-blue-900">사업자등록번호: 497-86-01565</p>
            </div>
          </div>

          <div className="pt-2 sm:pt-3 md:pt-4 mb-2 sm:mb-3 md:mb-4">
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-900 mb-0.5 sm:mb-1">서울 강남구 학동로53길 30</p>
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-900">30, Hakdong-ro 53-gil, Gangnam-gu, Seoul</p>
          </div>

          <div className="text-center">
            <p className="text-[8px] sm:text-[10px] md:text-xs text-blue-900">
              Copyright ⓒ 2025 리콘랩스(RECON Labs) All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
