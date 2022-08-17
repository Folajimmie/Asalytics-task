import { gql } from 'graphql-request'


export const ALL_ASSET_DATA = gql`
query MyQuery {
  asalist {
    result {
      assetId
      available
      logo
      name
    }
  }
}
`;