import * as React from 'react'
import { FunctionComponent } from 'react'
import { useTranslation } from 'react-i18next'
import { RouteProps } from 'typings/route'

import Sets from './sets'
import Posts from './posts'

import * as styles from './index.sass'
import * as hero from '~/styles/hero.sass'

const Browse: FunctionComponent<RouteProps> = props => {
  const { route, router } = props
  
  const { t } = useTranslation('pages')

  return (
    <div className='animated fadeIn'>
      <section id='hero' className={styles.hero}>
        <div className={hero.bg}></div>
        <div className='flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row relative container mx-auto text-white z-10'>
          <div className='flex-1 mx-5 mb-6'>
            <h1 className='mb-5 font-thin antialiased text-5xl text-center'>{t('posts.browse.heading')}</h1>
            <p className='text-center mb-5'>{t('posts.browse.subtext')}</p>
            <div className='mx-auto'>
              <form className='mx-auto max-w-md'>
                <input type='search' name='search' className='rounded p-5 w-full block focus:outline-none' placeholder={t('posts.browse.search.placeholder')} />
              </form>
            </div>
            <p className='leading-normal text-center font-normal text-lg'></p>
          </div>
        </div>
      </section>
      <section id='sets' className={styles.sets}>
        <div className='relative container mx-auto z-10'>
          <Sets />
        </div>
      </section>
      <section id='posts' className='bg-white pb-20'>
        <div className='mx-auto sm:mx-auto md:mx-auto lg:mx-5 xl:mx-20'>
          <h2 className='text-center text-4xl font-thin mb-10'>{t('posts.browse.posts_section.heading')}</h2>
          <Posts />
        </div>
      </section>
    </div>
  )
}

export default Browse
