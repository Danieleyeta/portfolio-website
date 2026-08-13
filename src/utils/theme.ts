export type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'portfolio-theme';

export const readStoredTheme = (storage: Pick<Storage, 'getItem'> = window.localStorage): Theme | null => {
  try {
    const storedTheme = storage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
  } catch {
    return null;
  }
};

export const persistTheme = (
  theme: Theme,
  storage: Pick<Storage, 'setItem'> = window.localStorage,
): boolean => {
  try {
    storage.setItem(THEME_STORAGE_KEY, theme);
    return true;
  } catch {
    return false;
  }
};
