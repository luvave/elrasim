export const LocalesConfig = {
  locales: [
    {
      id: 'cs',
      name: 'Čeština'
    },
    {
      id: 'en',
      name: 'English'
    }
  ],
  defaultLocale: 'cs'
};

export const Locales = LocalesConfig.locales.map((locale) => locale.id);