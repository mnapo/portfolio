import { Check } from 'lucide-react'
import Image from 'next/image'
import { AspectRatio } from '../molecules/shadcn/aspect-ratio'
import { Badge } from '../molecules/shadcn/badge'

export default function Features() {
  return (
    <section className='py-16 md:py-24 lg:py-32 bg-primary text-secondary'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid gap-8 lg:grid-cols-2'>
          <AspectRatio ratio={16 / 9}>
            <Image
              src='https://plus.unsplash.com/premium_photo-1677402408071-232d1c3c3787?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              alt='Image'
              fill
              priority={false}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='rounded-md object-cover'
            />
          </AspectRatio>
          <div className='space-y-6'>
            <Badge variant='secondary' className='px-3 py-1 text-sm font-medium'>
              Mí trabajo
            </Badge>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
              Proyectos
            </h2>
            <p className='text-muted-foreground'>
              Trabajo principalmente con NodeJS+React y con Lua
            </p>
            <ul className='space-y-4'>
              <li className='flex items-center space-x-2'>
                <Check className='h-6 w-6 text-secondary' />
                <div>
                  <h3 className='text-lg font-semibold'>Herramientas</h3>
                  <p className='text-muted-foreground'>
                    Visitar repositorios
                  </p>
                </div>
              </li>
              <li className='flex items-center space-x-2'>
                <Check className='h-6 w-6 text-secondary' />
                <div>
                  <h3 className='text-lg font-semibold'>Desarrollo FullStack</h3>
                  <p className='text-muted-foreground'>
                     Sitios web responsive
                  </p>
                </div>
              </li>
              <li className='flex items-center space-x-2'>
                <Check className='h-6 w-6 text-secondary' />
                <div>
                  <h3 className='text-lg font-semibold'>Aplicaciones</h3>
                  <p className='text-muted-foreground'>
                    Creación mobile Apps
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}