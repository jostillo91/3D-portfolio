// Get the basePath from next.config.js
// For GitHub Pages, this will be '/3D-portfolio', for local dev it's ''
export function getImagePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  // Prepend basePath if it exists
  return basePath ? `${basePath}${cleanPath}` : cleanPath
}

