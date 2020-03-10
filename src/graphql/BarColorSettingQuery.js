import gql from "graphql-tag";

const BarColorSettingQuery = gql`
  query appBarColorSetting {
    appBarColorSetting @client {
      id @client
      name @client
      setting @client
    }
  }
`;

export default BarColorSettingQuery;