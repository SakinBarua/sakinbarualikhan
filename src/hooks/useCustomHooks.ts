import { useEffect } from 'react'
import React from 'react'

/**
 * Hook to add smooth scrolling with custom easing
 */
export const useScrollTo = () => {
  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return { scrollToElement }
}

/**
 * Hook to detect if element is in viewport
 */
export const useInViewport = (elementId: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewport')
        }
      },
      {
        threshold: 0.1,
      }
    )

    const element = document.getElementById(elementId)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [elementId])
}

/**
 * Hook for window resize events
 */
export const useWindowSize = () => {
  const [size, setSize] = React.useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

/**
 * Hook to detect dark/light mode
 */
export const useDarkMode = () => {
  const [isDark, setIsDark] = React.useState(true)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDark(prefersDark)
  }, [])

  return { isDark }
}

export default {}
