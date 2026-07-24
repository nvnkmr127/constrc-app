import configPromise from '@/payload.config'
import { RootLayout, handleServerFunctions } from '@payloadcms/next/layouts'
import { importMap } from '@/importMap.js'

import '@payloadcms/next/css'

const serverFunction = async function (args: any) {
  'use server'
  return handleServerFunctions(args)
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <RootLayout config={configPromise} importMap={importMap} serverFunction={serverFunction}>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}
