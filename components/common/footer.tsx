export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-lg font-bold mb-4">(주) 리콘랩스</h1>
            <p className="text-sm mb-2">서울 강남구 학동로53길 30</p>
            <p className="text-sm mb-6">30, Hakdong-ro 53-gil, Gangnam-gu, Seoul</p>
          </div>

          <div className="text-sm md:text-right">
            <p className="mb-2">대표이사 : 반성훈</p>
            <p className="mb-2">통신판매업신고번호: 2021-서울강남-04763</p>
            <p className="mb-2">사업자등록번호: 497-86-01565</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6">
          <p className="text-center text-sm text-gray-400">
            Copyright ⓒ 2025 리콘랩스(RECON Labs) All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
