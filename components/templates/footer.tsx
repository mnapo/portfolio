import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-primary py-8 text-secondary'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Contacto</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Linkedin
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Correo
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-200'>RRSS</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  X
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Instagram
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Codepen
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Trabajos</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Proyectos
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Aplicaciones
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Guías
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold text-gray-200'>Links</h3>
            <ul className='mt-4 space-y-2'>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Currículum
                </Link>
              </li>
              <li>
                <Link className='hover:text-gray-300' href='#'>
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-800 pt-8 text-center'>
          <p className='text-sm'>©2025 Matías Nápoli</p>
        </div>
      </div>
    </footer>
  )
}