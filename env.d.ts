/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// Extend the ImportMeta interface
declare interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Define your env interface
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}
