/**
 * fills missing global types
 */
declare module '*.scss' {
  // https://github.com/s-panferov/awesome-typescript-loader/issues/146
  const content: any
  export default content
}

// https://stackoverflow.com/questions/52759220/importing-images-in-typescript-react-cannot-find-module

declare module '*.jpg'
declare module '*.svg'
declare module '*.png'
declare module 'react-imask'
declare module '*.css'
declare module '*.scss' {
  const content: { [className: string]: string }
  export = content
}
