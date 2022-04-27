import MainLayout from '../components/layouts/MainLayout'
import DarkLayout from '../components/layouts/DarkLayout'
import Link from 'next/link'

export default function About() {

  return (
    <>
      <h1>ABOUT PAGE</h1>

      <h1 className={'title'}>
        Ir al <Link href="/">Home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.js</code>
      </p>
    </>
  )
}

About.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}