const isProd =
  process.env.NODE_ENV === 'production' &&
  !!process.env.NEXT_PUBLIC_ROOT_DOMAIN &&
  !process.env.NEXT_PUBLIC_ROOT_DOMAIN.includes('localhost');

const dashSubdomain =
  process.env.SUBDOMAIN_HOSTING === 'true' && process.env.DASHBOARD_SUBDOMAIN
    ? process.env.DASHBOARD_SUBDOMAIN
    : 'dash';

export const DASH_DOMAIN = isProd
  ? `https://${dashSubdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`
  : 'http://dash.localhost:3000';

export const PROSE_CN =
  'prose prose-invert prose-p:font-extralight prose-zinc text-foreground/70 font-light prose-headings:font-medium prose-headings:text-foreground/80 prose-strong:text-foreground/80 prose-strong:font-normal prose-code:text-foreground/70 prose-code:font-light prose-code:font-monospace prose-blockquote:text-foreground/80 prose-blockquote:font-normal';
