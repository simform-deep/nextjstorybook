import '@/styles/globals.scss'
import { ConfigProvider, Layout } from 'antd' 
import { useColorConfig } from "./../ThemeConfig/UseColorConfig";   
import { antDComponents, antDTheme } from "./../ThemeConfig/Variables";  
////import LeftNavigation  from "../component/LeftNavigation/LeftNavigation";
import type { AppProps } from 'next/app';
// import TopHeaderMenu from '@/component/TopHeaderMenu/TopHeaderMenu';

export default function App({ Component, pageProps }: AppProps) {
  const [handleChange, themeColor, themevalue] = useColorConfig();
  return (


  // update code 
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
  )
}
