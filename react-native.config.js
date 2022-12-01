module.exports = {
  assets: ['./src/assets/fonts/'],
  dependencies: {
    'react-native-flipper': {
      platforms: {
        ios: null,
      },
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
