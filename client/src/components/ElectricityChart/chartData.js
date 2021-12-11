const labels = [
  '🏠 Your Home',
  '🌎 World avg. home',
  '',
  '🇳🇬 Nigeria',
  '🇮🇳 India',
  '🇨🇳 China',
  '🇲🇽 Mexico',
  '🇧🇷 Brazil',
  '🇯🇵 Japan',
  '🇫🇷 France',
  '🇮🇹 Italy',
  '🇿🇦 South Africa',
  '🇪🇺 EU',
  '🇪🇸 Spain',
  '🇷🇺 Russia',
  '🇬🇧 United Kingdom',
  '🇩🇪 Germany',
  '🇨🇦 Canada',
  '🇦🇺 Australia',
  '🇺🇸 United States',
];

export const chartData = {
  labels,
  datasets: [
    {
      label: 'yearly CO2 emissions',
      data: [
        569, 0, 93, 147, 221, 296, 300, 303, 348, 589, 719, 732, 784, 851, 971,
        1056, 1544, 2176, 2918,
      ],
      backgroundColor: [
        'rgba(0, 100, 255, 0.6)',
        'rgba(0, 255, 0, 0.6)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 0, 0.6)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
        'rgba(0, 255, 255, 0.2)',
      ],
      borderColor: ['rgba(0,0,0,.5)'],
      borderWidth: 0.8,
    },
  ],
};
