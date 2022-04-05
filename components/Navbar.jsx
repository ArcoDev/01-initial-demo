// Los componentes no se crea dentro de la carpeta page, ya que ahí solo se agregan paginas completas, api, o algunas funciones, para crear componentes se crea la carpeta y se utiliza la misma estructura de react
// Para añadir estilos a la pagina se tiene que hacer por modulos ya que next, no permite tomarlo como react, tambien es necesario agregar una clase o ID para acceder al elemnto y colocar los etilos, de otra manera no lo leera
import Link from 'next/link'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={ styles['menu-conatiner'] }>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
    </nav>
  )
}
