// Pasando props destructurados para optener los argumentos
import Link from 'next/link'
import {useRouter} from 'next/router'

// Añadir clase active al enlace actual
const linkActive = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ({text, href}) => {
  //hook para validar el enlace actual, con asPath que nos indica el path en cual nos encontramos y ya solo es para la validacion en el enlace
  const {asPath} = useRouter()
  return (
      <Link href={href}>
        <a style={asPath === href ? linkActive : null}>{text}</a>
      </Link>
  )
}
