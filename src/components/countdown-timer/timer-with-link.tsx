'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(10)
  const [showLink, setShowLink] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      setShowLink(true)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timeLeft])

  const reset = () => {
    setShowLink(false)
    setTimeLeft(60)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="text-center text-xxs">
      {!showLink ? (
        <p className="font-medium" aria-live="polite">
          Повторная отправка доступна через {formatTime(timeLeft)}
        </p>
      ) : (
        <p className="cursor-pointer font-medium underline" onClick={reset}>
          Выслать код повторно
        </p>
      )}
    </div>
  )
}
