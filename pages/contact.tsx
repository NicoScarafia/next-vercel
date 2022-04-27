import MainLayout from '../components/layouts/MainLayout'
import Link from 'next/link'

export default function Contact() {
  return (

    <MainLayout>

      <h1>CONTACT PAGE</h1>

      <h1 className={'title'}>
        Ir al <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/contact.js</code>
      </p>

    </MainLayout>
  )
}
