import React, { FunctionComponent } from 'react'
import { LayoutProps } from './Layout.props'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import styles from './Layout.module.css'
import { AppContextProvider, IAppContext } from '@/context/app.context'

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main className={styles.body} tabIndex={0}>
        {children}
      </main>
    </div>
  )
}

export function withLayout<T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) {
  return function WithLayoutWrapper(props: T): JSX.Element {
    return (
      <AppContextProvider>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
