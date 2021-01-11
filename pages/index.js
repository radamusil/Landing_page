import Head from 'next/head'
import Image from 'next/image'

import { Meta } from '../components/meta'

export default function HomePage() {
  return (
    <>
      <Meta />
      <Head>
        <title>Footshop interview microsite</title>
      </Head>
      <div className={'header'}>
        <img src="/logo.svg" alt="logo"/>
        <h1>My interview task</h1>
      </div>
      <main>
        <div className="hero">
          <h2>Sale 30%</h2>
          <button>Explore</button>
        </div>
        <div className={'articles'}>
          <div className={'cards'}>
            <div className={'card'}>
              <div className={'card__label'}>Sunglasses</div>
              <button>Explore</button>
            </div>
            <div className={'card'}>
              <button>Buy now</button>
            </div>
            <div className={'card'}>
              <button>Go to releases</button>
            </div>
            <div className={'card'}>
              <div className={'card__label'}>Waterproof jackets</div>
              <button>Explore</button>
            </div>
          </div>
          <div className={'alpine'}>
            <div className={'article'}>
              <h2>Alpine</h2>
            </div>
            <div className={'article'}>
              <button>Buy now</button>
            </div>
          </div>
          <div className={'outdoor'}>
            <div className={'label'}>Outdoor</div>
              <div className={'holder'}>
                <div className={'article'}>
                  <button>Find your style</button>
                </div>
                <div className={'article'}>
                  <button>Buy now</button>
                </div>
                <div className={'article'}>
                  <h2>to the sky</h2>
                </div>
              </div>
          </div>
        </div>
      </main>
    </>
  )
}
