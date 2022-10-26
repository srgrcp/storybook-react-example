import Image from 'next/image'
import React, { FC, HTMLAttributes, useState } from 'react'
import { LockClosedSolidIcon } from '../icons/lock-closed-solid-icon'
import { UserCircleSolidIcon } from '../icons/user-circle-solid-icon'
import { Button } from '../ui/button'
import Input from '../ui/input'

type LoginAndRegisterInput = {
  email: string
  password: string
}

export type LoginPageAttributes = {
  login: (loginInput: LoginAndRegisterInput) => void
}

export type LoginPageProps = HTMLAttributes<any> & LoginPageAttributes

export const LoginPage: FC<LoginPageProps> = ({ login }) => {
  const [form, setForm] = useState<LoginAndRegisterInput>({
    email: '',
    password: '',
  })

  const handleInput = (newValue: string, key: keyof LoginAndRegisterInput) => {
    setForm(f => ({
      ...f,
      [key]: newValue
    }))
  }

  return (
    <>
      <div
        className={`
        flex
        justify-center
        w-full
        min-h-screen
        backdrop-brightness-75
        font-mono
      `}
      >
        <div
          className={`
          flex
          flex-col
          justify-center
          w-full
          max-w-lg
          min-h-screen
          text-amber-50
          px-5
          gap-5
          py-10
        `}
        >
          <div className="flex justify-center">
            <Image
              src="/logo.webp"
              alt="Logo"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="font-druk text-4xl mb-2">Bienvenido!</h2>
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <form className="flex flex-col gap-3" onSubmit={() => login(form)}>
            <Input
              iconPosition="left"
              type="email"
              placeholder="Correo"
              onChange={e => handleInput(e.target.value, 'email')}
              icon={<UserCircleSolidIcon />}
            />
            <Input
              iconPosition="left"
              type="password"
              placeholder="Contraseña"
              onChange={e => handleInput(e.target.value, 'password')}
              icon={<LockClosedSolidIcon />}
            />
            <span className="text-sm text-end text-amber-50">¿Olvidaste tu contraseña?</span>
            <input type="submit" className="hidden" />
          </form>

          <div className="flex justify-center">
            <Button
              type="primary"
              fontWeight="bold"
              onClick={() => login(form)}
            >
              LOGIN
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <p className="text-xs text-center text-amber-50/90">
                Al crear una cuenta o iniciar sesión, aceptas nuestros Términos y condiciones.
              </p>
            </div>

            <hr className="border-t-amber-500/60" />

            <div>
              <p className="text-sm text-center text-amber-50/90 font-bold">
                Tambien puedes ingresar con
              </p>
            </div>

            <div>
              <p className="text-sm text-center text-amber-50/90">
                ¿No tienes cuenta? <span className="font-bold">Registrate</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
