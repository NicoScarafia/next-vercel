import React, { CSSProperties, FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// se pone afuera del componente para que no se tenga que renderizar nuevamente
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
    fontWeight: '600'
}

interface Props {
    text: string;
    href: string
}

const ActiveLink: FC<Props> = ({ text, href }) => {
    
    const {asPath} = useRouter()
    
    return (

        <Link href={href} >
            <a style={ asPath === href ? style : undefined }>{text}</a>
        </Link>

    )
}

export default ActiveLink