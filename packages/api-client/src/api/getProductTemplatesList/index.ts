/* eslint-disable @typescript-eslint/no-unused-vars */
import gql from 'graphql-tag';
import { Context, CustomQuery } from '@vue-storefront/core';
import ApolloClient from 'apollo-client';
import query from './getProductTemplateListQuery';
import { GraphQlGetProductParams, ProductResult } from '../../index';
import { FetchResult } from 'apollo-link/lib/types';
export default async function getProductTemplatesList(
  context: Context,
  params: GraphQlGetProductParams,
  customQuery?: CustomQuery
): Promise<FetchResult<ProductResult>> {
  const apolloClient = context.client.apollo as ApolloClient<any>;

  const { getProductTemplatesList } = context.extendQuery(
    customQuery, { getProductTemplatesList: { query, variables: params } }
  );

  const response = await apolloClient.query({
    query: gql`${getProductTemplatesList.query}`,
    variables: getProductTemplatesList.variables
  });

  return response;
}
