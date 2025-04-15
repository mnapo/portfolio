'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { AspectRatio } from '@/components/molecules/shadcn/aspect-ratio'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/molecules/shadcn/navigation-menu'
import { cn } from '@/lib/utils'

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Solar2D iconizer",
    href: "/",
    description: "Genera todas las variantes de un ícono de aplicación a partir de una imagen",
  },
  {
    title: "Gemlocks",
    href: "/",
    description: "Juego online estilo puzzle",
  },
  {
    title: "Vocablur",
    href: "/",
    description: "Juego estilo quiz para practicar el vocabulario en inglés",
  },
  {
    title: "3D tic-tac-toe",
    href: "/",
    description:
      "Variante en 3D del clásico juego ta-te-ti",
  },
  {
    title: "Proyecto secreto 1",
    href: "/",
    description: "Proyecto a gran escala con licencia aun no liberado",
  },
  {
    title: "Proyecto secreto 2",
    href: "/",
    description: "Proyecto de escala intermedia aún en desarrollo",
  },
  {
    title: "Proyecto secreto 3",
    href: "/",
    description:
      "Aplicación con patente pronta a ser lanzada en stores",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Proyectos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                        alt="Image"
                        fill
                        className="rounded-md object-cover h-6 w-6"
                      />
                    </AspectRatio>
                    <div className="mb-2 mt-4 text-lg font-medium">Porfolio</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Espacio para dejar mi información de contacto y trabajos propios
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Lunatic">
                LLM en Lua
              </ListItem>
              <ListItem href="/" title="Lucero">
                Framework para Solar2D SDK
              </ListItem>
              <ListItem href="/" title="Guías">
                Ejercicios resueltos de la carrera
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Aplicaciones</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title} href={component.href}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>Currículum</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"