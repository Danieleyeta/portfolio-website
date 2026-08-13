import { describe, expect, it, vi } from 'vitest';
import { persistTheme, readStoredTheme } from './theme';

describe('theme storage', () => {
  it('returns only supported stored values', () => {
    expect(readStoredTheme({ getItem: () => 'dark' })).toBe('dark');
    expect(readStoredTheme({ getItem: () => 'light' })).toBe('light');
    expect(readStoredTheme({ getItem: () => 'system' })).toBeNull();
  });

  it('does not crash when storage access is blocked', () => {
    const getItem = vi.fn(() => {
      throw new DOMException('Blocked', 'SecurityError');
    });
    const setItem = vi.fn(() => {
      throw new DOMException('Blocked', 'SecurityError');
    });

    expect(readStoredTheme({ getItem })).toBeNull();
    expect(persistTheme('dark', { setItem })).toBe(false);
  });

  it('persists a valid theme when storage is available', () => {
    const setItem = vi.fn();

    expect(persistTheme('dark', { setItem })).toBe(true);
    expect(setItem).toHaveBeenCalledWith('portfolio-theme', 'dark');
  });
});
