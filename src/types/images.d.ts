declare module '*.png';
declare module '*.jpg';
declare module '*.gif';
declare module '*.mp4';
declare module '*.svg';
declare module '*.webp';
declare module '*.png?as=webp' {
  const src: string;
  export default src;
}

declare module '*.jpg?as=webp' {
  const src: string;
  export default src;
}

declare module '*.jpeg?as=webp' {
  const src: string;
  export default src;
}

declare module '*.gif?as=webp' {
  const src: string;
  export default src;
}
