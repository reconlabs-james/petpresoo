"use client"

import type React from "react"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import * as Dialog from "@radix-ui/react-dialog"
import { initialState, intialformData, images } from '../constants'
import { useAlert } from "@/hook/useAlert"
import Image from 'next/image'
import { submitPetForm } from "@/actions/form-actions"
import { X } from "lucide-react";
import { sendGAEvent } from '@next/third-parties/google'

export function PetForm() {
  const [formData, setFormData] = useState(intialformData)

  const { showAlert } = useAlert()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const uploadAreaRef = useRef<HTMLDivElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formState, setFormState] = useState(initialState)
  const [selectedStyle, setSelectedStyle] = useState<string | null>(null)

  const handleStyleChange = (value: string) => {
    setSelectedStyle(value)
    setFormData((prev) => ({ ...prev, petStyle: value }))
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, petPhoto: file }));

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);

    // 메모리 누수 방지를 위한 cleanup 함수
    return () => URL.revokeObjectURL(url);
  };

  // 폼 제출 시 호출되는 함수 - 이메일 모달만 표시
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // 필수 입력 값 검사
    if (!formData.petName) {
      showAlert("반려동물 이름을 입력해주세요.")
      return
    }
    if (!formData.petType) {
      showAlert("반려동물 종을 입력해주세요.")
      return
    }
    if (!formData.petPhoto) {
      showAlert("반려동물 사진을 업로드해주세요.")
      return
    }
    if (!formData.petStyle) {
      showAlert("캐릭터 스타일을 선택해주세요.")
      return
    }

    setIsModalOpen(true)
  }

  // 이메일 입력 후 최종 제출 처리
  const handleModalSubmit = async () => {
    // 이메일 유효성 검사
    if (!formData.email || !formData.email.includes('@')) {
      showAlert("유효한 이메일 주소를 입력해주세요.")
      return
    }

    setIsModalOpen(false)
    setIsSubmitting(true)

    try {
      setTimeout(() => {
        setFormState({
          success: true,
          message: `MoveMoji에서 반려동물이 이모티콘으로 바뀌고 있어요! \n완성되면 메일로 전달드리겠습니다. \n수시간에서 길게는 수일 시간이 소요될 수 있습니다.`,
        })
        setPreviewUrl(null)
        setFormData(intialformData)
        showAlert(`MoveMoji에서 반려동물이 이모티콘으로 바뀌고 있어요! \n완성되면 메일로 전달드리겠습니다. \n수시간에서 길게는 수일 시간이 소요될 수 있습니다.`)
      }, 1000)

      const data = new FormData()
      data.append("petName", formData.petName)
      data.append("petType", formData.petType)
      data.append("petPhoto", formData.petPhoto || "")
      data.append("features", formData.features || "")
      data.append("email", formData.email)
      data.append("petStyle", formData.petStyle || "")

      await submitPetForm(data)

    } catch (error) {
      console.error("폼 제출 중 오류 발생:", error)
      showAlert("제출 중 오류가 발생했습니다. 나중에 다시 시도해주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto bg-gradient-to-r from-[#8ABFFF] to-[#CBE2FF] rounded-4xl p-6 md:p-8">

      {/* 폼 부분 */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* 나머지 폼 내용 */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Pet Photo Upload */}
          <div className="bg-[#D2EDFF] rounded-4xl p-4 flex flex-col items-center justify-center">
            <h3 className="font-bold text-lg mb-4">반려동물 사진 업로드</h3>
            <div
              ref={uploadAreaRef}
              className="bg-white border-2 border-dashed border-gray-300 rounded-lg w-full h-32 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors relative"
              onClick={() => fileInputRef.current?.click()}
            >
              {previewUrl ? (
                <div className="relative w-full h-full">
                  <Image
                    src={previewUrl}
                    alt="Pet Photo"
                    className="w-full h-full object-cover"
                    width={0}
                    height={0}
                  />
                  {/* 취소 버튼 추가 */}
                  <button
                    type="button"
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation(); // 이벤트 버블링 방지
                      setPreviewUrl(null);
                      if (fileInputRef.current) {
                        fileInputRef.current.value = '';
                        setFormData((prev) => ({ ...prev, petPhoto: null }));
                      }
                    }}
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mx-auto mb-2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                  <p className="text-sm text-gray-500">사진을 업로드하세요</p>
                  <input
                    type="file"
                    className="hidden"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    name="petPhoto"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Pet Information */}
          <div className="bg-[#D2EDFF] rounded-4xl p-4 flex flex-col">
            <div className="space-y-4">
              <div>
                <Label htmlFor="petName" className="text-sm font-medium">
                  반려동물 이름
                </Label>
                <Input
                  id="petName"
                  name="petName"
                  placeholder="반려동물 이름"
                  className="mt-1 bg-gray-50"
                  value={formData.petName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="petType" className="text-sm font-medium">
                  반려동물 종
                </Label>
                <Input
                  id="petType"
                  name="petType"
                  placeholder="반려동물 종"
                  className="mt-1 bg-gray-50"
                  value={formData.petType}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 캐릭터 스타일 선택 부분 */}
        <div className="bg-[#D2EDFF] rounded-4xl p-4 mb-8">
          <h3 className="font-bold text-sm mb-4 text-center md:text-lg">원하는 캐릭터 스타일을 1개 선택해주세요.</h3>
          <div className="grid grid-cols-4 md:grid-cols-5 gap-2">
            {images.map((image, i) => (
              <button
                type="button"
                key={i}
                className={`rounded-4xl flex flex-col items-center justify-center cursor-pointer transition-all`}
                onClick={() => handleStyleChange(image.value)}
              >
                {image.path ? (
                  <Image
                    src={image.path}
                    alt={image.value}
                    className={`w-full h-full object-cover rounded-md mb-1 ring-sky-500 ring-offset-4 md:ring-offset-4 ${
                      selectedStyle === image.value ? 'ring' : ''
                    }`}
                    width={60}
                    height={60}
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 rounded-md mb-1"></div>
                )}
                <div className="bg-white w-full rounded-xl flex items-center justify-center">
                  <span className="text-[0.625rem] md:text-xs font-bold text-gray-600">{image.value}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div>
          <h3 className="font-bold text-lg mb-2">내 반려동물만의 특징을 추가하고 싶나요? (선택)</h3>
          <Textarea
            name="features"
            placeholder="반려동물의 생김새 특징이나, 자주하는 포즈와 동작을 알려주세요."
            className="w-full bg-white p-4 rounded-lg resize-none"
            rows={3}
            value={formData.features}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl w-full md:w-2xl h-10 md:h-auto text-white font-bold py-3 px-12 md:px-6 rounded-4xl text-lg md:text-2xl"
            disabled={isSubmitting}
            onClick={() => sendGAEvent('button_click', { event_category: 'form', event_label: 'submit', value: 'email send' })}
          >
            {isSubmitting ? "전송중..." : formState.success ? "전송완료" : "메일 전송"}
          </Button>
        </div>
      </form>

      {/* Email Modal */}
      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-opacity-50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#242F6BDB] rounded-3xl p-6 w-full max-w-md">
            <p className="text-center mb-4 text-white text-lg">이모티콘 생성 후 메일로 보내드립니다.<br/>
            메일을 꼭 확인해주세요!
            </p>
            <Dialog.Title className=" text-white text-center font-bold mb-4">사용자 메일 주소</Dialog.Title>
            <Input
              name="email"
              placeholder="전달받으실 메일 주소를 입력해주세요."
              type="email"
              className="w-full bg-white p-4 rounded-lg"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="mt-4 flex justify-center gap-2">
              <Dialog.Close asChild>
                <Button variant="outline" className="absolute top-4 right-4">
                  <X className="h-2 w-2"/>
                </Button>
              </Dialog.Close>
              <Button className="bg-[#32ADE6] hover:bg-gradient-to-bl w-full font-bold" onClick={handleModalSubmit}>생성하기</Button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
