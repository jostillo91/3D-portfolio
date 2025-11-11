export function getImagePath(path: string): string {
  // In production with basePath, Next.js handles this automatically
  // But for static export, we need to ensure the path is correct
  if (typeof window !== 'undefined') {
    // Client-side: basePath is already handled by Next.js routing
    return path
  }
  // Server-side: return as-is, Next.js will handle basePath
  return path
}

