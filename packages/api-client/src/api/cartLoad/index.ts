/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { Context, CustomQuery } from '@vue-storefront/core';
import query from './cartLoadQuery';
import ApolloClient from 'apollo-client';
import { CartLoadResult } from '../../index';
import { FetchResult } from 'apollo-link/lib/types';

export default async function cartLoad(
  context: Context,
  customQuery?: CustomQuery
): Promise<FetchResult<CartLoadResult>> {
  const apolloClient = context.client.apollo as ApolloClient<any>;

  const { cart } = context.extendQuery(
    customQuery, { cart: { query, variables: {} } }
  );

  const response = await apolloClient.query({
    fetchPolicy: 'no-cache',
    query: gql`${cart.query}`
  });

  return response;
}
