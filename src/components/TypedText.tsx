import React, { useEffect, useState } from 'react'

interface TypedTextProps {
  texts: string[]
  speed?: number
}

const TypedText: React.FC<TypedTextProps> = ({ texts, speed = 60 }) => {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [blink, setBlink] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (subIndex === texts[index].length) {
        // pause at end
        setTimeout(() => {
          setSubIndex(0)
          setIndex((prev) => (prev + 1) % texts.length)
        }, 900)
      } else {
        setSubIndex((prev) => prev + 1)
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [subIndex, index, texts, speed])

  useEffect(() => {
    const blinkTimer = setInterval(() => setBlink((b) => !b), 500)
    return () => clearInterval(blinkTimer)
  }, [])

  return (
    <span className="inline-block">
      {texts[index].substring(0, subIndex)}
      <span className="text-accent">{blink ? '|' : ' '}</span>
    </span>
  )
}

export default TypedText
