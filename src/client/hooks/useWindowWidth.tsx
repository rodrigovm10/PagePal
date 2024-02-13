import { useEffect, useState } from 'react'

export function useWindowWidth() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }

    // Verifica si window está disponible antes de suscribirte a eventos
    if (typeof window !== 'undefined') {
      setWidth(window.innerWidth)
      window.addEventListener('resize', updateWidth)
    }

    return () => {
      // Asegúrate de limpiar el event listener al desmontar el componente
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', updateWidth)
      }
    }
  }, [])

  return { width }
}
