export const images = [
  {
    id: 1,
    value: "둥글둥글",
    path: "/button/둥글둥글.webp",
  },
  {
    id: 2,
    value: "수채화",
    path: "/button/수채화.webp",
  },
  {
    id: 3,
    value: "미니멀",
    path: "/button/미니멀.webp",
  },
  {
    id: 4,
    value: "일러스트",
    path: "/button/벡터.webp",
  },
  {
    id: 5,
    value: "아트브러쉬",
    path: "/button/아트브러쉬.webp",
  },
  {
    id: 6,
    value: "실사",
    path: "/button/실사.webp",
  },
  {
    id: 7,
    value: "카툰",
    path: "/button/카툰.webp",
  },
  {
    id: 8,
    value: "지글지글",
    path: "/button/지글지글.webp",
  },
  {
    id: 9,
    value: "피규어",
    path: "/button/피큐어.webp",
  },
  {
    id: 10,
    value: "연필 스케치",
    path: "/button/스케치.webp",
  },
]

// Sample emoticon data with image paths and background colors
export const galleryItems = [
  { bg: "bg-[#f0ece4]", alt: "White fluffy dog emoticon", img: '/gallery/move_img_1_video.mp4' },
  { bg: "bg-[#e0ede5]", alt: "Sleeping dog emoticon", img: '/gallery/move_img_2_video.mp4' },
  { bg: "bg-[#f0e0d0]", alt: "Lion dog emoticon", img: '/gallery/move_img_3_video.mp4' },
  { bg: "bg-[#f0e0d0]", alt: "Lion dog emoticon", img: '/gallery/move_img_4_video.mp4' },
  { bg: "bg-[#f0ece4]", alt: "Barking dog emoticon", img: '/gallery/move_img_5_video.mp4' },
  { bg: "bg-[#f0e0d0]", alt: "Lion dog emoticon", img: '/gallery/move_img_6_video.mp4' },
  { bg: "bg-[#f0e0d0]", alt: "Lion dog emoticon", img: '/gallery/move_img_7_video.mp4' },
  { bg: "bg-[#d8e6f0]", alt: "Dog with headphones emoticon", img: '/gallery/move_img_8_video.mp4' },
  { bg: "bg-[#f0ece4]", alt: "Barking dog emoticon", img: '/gallery/move_img_9_video.mp4' },
  { bg: "bg-[#f0e0d0]", alt: "Lion dog emoticon", img: '/gallery/move_img_10_video.mp4' },
  { bg: "bg-[#f0e0d0]", alt: "Lion dog emoticon", img: '/gallery/move_img_11_video.mp4' },
  { bg: "bg-[#d8e6f0]", alt: "Dog with headphones emoticon", img: '/gallery/move_img_12_video.mp4' },
]

export const features = [
  {
    title: "다양로운 스타일의 캐릭터 생성",
    description:
        "당신의 반려동물을 다양한 스타일로 변환해보세요. 귀여운 캐릭터부터 유니크한 디자인까지 선택 가능합니다.",
    image: "/asserts/DALL·E 2025-03-13 13.50.28.png",
    position: "top-left",
  },
  {
    title: "인식하기 쉬워지기 등 포즈에 맞는 애니메이션",
    description: "반려동물의 특징을 살린 애니메이션으로 더욱 생동감 있는 이모티콘을 만들어드립니다.",
    image: "/asserts/DALL·E 2025-03-13 13.51.06.png",
    position: "top-right",
  },
  {
    title: "스티커, 티셔츠 등 굿즈에 활용",
    description:
        "만들어진 이모티콘으로 나만의 굿즈를 제작할 수 있어요. 스티커, 티셔츠, 파우치 등 다양한 상품에 활용해보세요.",
    image: "/asserts/DALL·E 2025-03-13 14.11.28.png",
    position: "bottom-left",
  },
  {
    title: "각 종 SNS에 사용스러운 이모티콘으로 공유",
    description:
        "카카오톡, 인스타그램, 페이스북 등 다양한 SNS에서 사용할 수 있는 이모티콘으로 친구들과 공유해보세요.",
    image: '/asserts/DALL·E 2025-03-14 18.03.16.png',
    position: "bottom-right",
  },
]

export const initialState = {
  success: false,
  message: "",
}

export const intialformData = {
  petName: "",
  petType: "",
  petStyle: "",
  petPhoto: null as File | null,
  features: "",
  email: "",
}
