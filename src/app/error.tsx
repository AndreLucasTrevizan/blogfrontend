'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div
      className="
        p-4
        m-auto
        w-3/4
        flex
        flex-col
        gap-4
      "
    >
      <h2>Houve um problema ao carregar as informações do backend. Tente novamente mais tarde</h2>
      <div>
        <button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className='
            p-2
            bg-[#00D1CD]
            text-white
            font-bold
            rounded
          '
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}