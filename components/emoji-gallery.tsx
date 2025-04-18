import { galleryItems } from "@/constants"

export function EmojiGallery() {

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-3 p-4">
        {galleryItems.map((item, index) => (
          <div key={index} className="w-[calc(25%-0.75rem)]">
            <video className="w-full h-full object-contain rounded-full md:rounded-2xl" autoPlay loop muted playsInline>
              <source src={item.img} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </div>
  )
}
