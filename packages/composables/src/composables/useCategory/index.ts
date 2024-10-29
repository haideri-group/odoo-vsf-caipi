import { Context, CustomQuery, useCategoryFactory, UseCategoryFactoryParams} from '@vue-storefront/core';
import { Category, GraphQlGetCategoryParams} from '@vue-storefront/odoo-api';

const params: UseCategoryFactoryParams<Category, GraphQlGetCategoryParams> = {
  categorySearch: async (context: Context, params?:any & { customQuery?: CustomQuery }) => {

    const { data } = await context.$odoo.api.getCategory(params, params?.customQuery);

    return data?.categories?.categories.slice(0, 3);
  }
};

export default useCategoryFactory<Category, GraphQlGetCategoryParams>(params);
