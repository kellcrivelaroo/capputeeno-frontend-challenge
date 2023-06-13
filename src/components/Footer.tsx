import { Github, Linkedin, Instagram } from 'lucide-react'
import F from '@/assets/flame-logo.svg'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer
      className="flex h-auto w-full items-center justify-center bg-white pb-8 pt-6 
  text-gray-dark lg:h-24 lg:py-0"
    >
      <div
        className="flex w-full flex-col items-center justify-between gap-5 px-6 text-center 
  lg:w-container lg:flex-row lg:px-0"
      >
        <span>
          Projeto desenvolvido com objetivo didático, por{' '}
          <a
            href="https://github.com/kellcrivelaroo"
            target="_blank"
            rel="noreferrer"
            className="text-brand-orange underline hover:text-cart-orange"
          >
            Kell Crivelaro
          </a>
        </span>
        <div className="flex gap-4 [&>a:hover]:brightness-150 [&>a]:text-brand-orange">
          <a
            href="https://github.com/kellcrivelaroo"
            target="_blank"
            rel="noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/kellington-crivelaro-b9b817227/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://instagram.com/kellcrivelaro"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://flametecnologia.com.br"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src={F}
              alt="Flame Tecnologia"
              width={22}
              className="transition-all duration-500 
    hover:brightness-100 hover:grayscale-0 hover:invert-0"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
