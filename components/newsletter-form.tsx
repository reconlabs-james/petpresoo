"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeNewsletter } from "@/actions/form-actions"
import { sendGAEvent } from "@next/third-parties/google"

export function NewsletterForm() {
  const [email, setEmail] = useState("")
  const [formState, setFormState] = useState({
    success: false,
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    setEmail("")

    try {
      const data = new FormData()
      data.append("email", email)

      const result = await subscribeNewsletter(data)
      setFormState(result)
    } catch (error) {
      console.error("Error submitting newsletter form:", error)

      setFormState({
        success: false,
        message: "구독 중 오류가 발생했습니다. 나중에 다시 시도해주세요.",
      })
    }

    setTimeout(() => {
      setFormState({
        success: false,
        message: "",
      })
    }, 3000)
  }

  return (
    <div className="w-full text-center">
      <div className="flex justify-center mb-6">
        <video className="w-32 h-32 object-cover" autoPlay loop muted playsInline>
          <source src="/gallery/gif_last.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="md:text-2xl font-bold text-center mb-3">MOVEMOJI의 특별한 소식을 가장 먼저 받아보세요!</h1>
      <p className="text-black mb-6">
        서비스의 출시, 기능 업데이트,
        <br />
        귀여운 반려동물 굿즈 소식을 듣고 싶지 않으신가요?
        <br />
        이메일을 등록하고 특별 혜택을 받아보세요!
      </p>

      {formState.success ? (
        <div className="bg-green-50 text-green-700 p-4 rounded-md">
          구독해 주셔서 감사합니다! 곧 특별한 소식을 보내드릴게요.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-gray-200 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            type="submit"
            className="bg-black hover:bg-gray-800 text-white"
            onClick={() => sendGAEvent('button_click', { event_category: 'form', event_label: 'subscribe', value: 'newsletter' })}
          >
            구독하기
          </Button>
        </form>
      )}
    </div>
  )
}
