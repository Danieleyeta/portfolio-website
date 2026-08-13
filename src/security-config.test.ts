import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

interface HeaderDefinition {
  key: string;
  value: string;
}

interface VercelConfig {
  headers: Array<{ source: string; headers: HeaderDefinition[] }>;
}

describe('deployment security policy', () => {
  const config = JSON.parse(
    readFileSync(new URL('../vercel.json', import.meta.url), 'utf8'),
  ) as VercelConfig;
  const headers = Object.fromEntries(
    config.headers.flatMap((route) => route.headers.map((header) => [header.key, header.value])),
  );
  const assetHeaders = Object.fromEntries(
    config.headers
      .filter((route) => route.source === '/assets/(.*)')
      .flatMap((route) => route.headers.map((header) => [header.key, header.value])),
  );

  it('blocks framing and content-type sniffing', () => {
    expect(headers['X-Frame-Options']).toBe('DENY');
    expect(headers['X-Content-Type-Options']).toBe('nosniff');
  });

  it('uses a restrictive content security policy', () => {
    expect(headers['Content-Security-Policy']).toContain("default-src 'self'");
    expect(headers['Content-Security-Policy']).toContain("frame-ancestors 'none'");
    expect(headers['Content-Security-Policy']).toContain("object-src 'none'");
    expect(headers['Content-Security-Policy']).toContain("script-src 'self'");
  });

  it('caches content-hashed assets immutably', () => {
    expect(assetHeaders['Cache-Control']).toBe('public, max-age=31536000, immutable');
  });
});
