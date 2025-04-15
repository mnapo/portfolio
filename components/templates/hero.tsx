import {Button} from '@/components/molecules/shadcn/button'
import Image from 'next/image'
import {AspectRatio} from '../molecules/shadcn/aspect-ratio'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Currículum
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Aptitudes, estudios y experiencia laboral.
            </p>
            <div className="flex items-center space-x-4">
              <Button variant="default" ><Link href="/cv">Visitar</Link></Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <AspectRatio ratio={16 / 9}>
              <Image
                src="https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={true}
                className="rounded-md object-cover"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}