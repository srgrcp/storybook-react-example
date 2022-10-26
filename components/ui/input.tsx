import React, { InputHTMLAttributes } from 'react'

export type InputAttributes = {
  icon?: JSX.Element

  /**
   * @default left
   */
  iconPosition: 'left' | 'right'

  /**
   * Activa el borde rojo indicando
   * que hay un error
   */
  hasError?: boolean
}

export type InputProps = InputHTMLAttributes<any> & InputAttributes

export default function Input({ icon, className, hasError, iconPosition = 'left', ...props }: InputProps) {
  return (
    <div className="relative font-mono">
      <div className='w-6 h-6 hidden'></div>
      {/* icon box */}
      <div
        className={`absolute z-10 ${
          iconPosition === 'left' ? 'left-2' : 'right-2'
        } top-0 h-full w-14 flex justify-center items-center`}
      >
        {icon}
      </div>

      {/* input */}
      <input
        {...props}
        className={`
          w-full
          px-16
          py-3
          text-amber-50
          ${
            hasError
              ? 'focus:!outline-red-400 border-red-400 focus:!ring-red-400'
              : 'outline-amber-50 border-amber-50'
          }
          border
          rounded-full
          bg-white/25
          backdrop-blur
          placeholder:text-amber-50/60
          ${className}
        `}
      />
    </div>
  )
}
