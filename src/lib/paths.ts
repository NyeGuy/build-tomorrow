/** Prefix an in-site path or hash with Astro `base` (project Pages). */
export function withBase(path = ''): string {
  const base = import.meta.env.BASE_URL;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  if (path.startsWith('#')) return `${base}${path}`;
  const trimmed = path.replace(/^\/+/, '');
  return `${base}${trimmed}`;
}

export function isCurrentPath(href: string, pathname: string): boolean {
  const target = withBase(href);
  const current = pathname.endsWith('/') ? pathname : `${pathname}/`;
  if (href === '' || href === '/') {
    return current === import.meta.env.BASE_URL;
  }
  return current === target || current.startsWith(target);
}
