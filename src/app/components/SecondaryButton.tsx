import React from 'react'

type Props = {
  buttonText?: string,
  onClick?: () => void
}

function SecondaryButton({buttonText}: Props) {
  return (
    <button
        type="button"
        className="text-xs rounded-md bg-secondary px-3.5 py-2.5 text-white shadow-sm hover:bg-primary outline-0"
      >
        {buttonText}
      </button>
  )
}

export default SecondaryButton