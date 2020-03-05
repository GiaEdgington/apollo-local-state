
const resolvers = {
    Query: {
      appBarColorSetting: () => userSettings.appBarColorSetting
    },
    Mutation: {
      updateAppBarColorSetting: (_, { setting }) => {
        userSettings.appBarColorSetting.setting = setting;
        return userSettings.appBarColorSetting;
      }
    }
  };

  export default resolvers;