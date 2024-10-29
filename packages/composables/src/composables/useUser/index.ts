/* eslint-disable @typescript-eslint/no-unused-vars */
/* istanbul ignore file */

import { Context, useUserFactory, UseUserFactoryParams} from '@vue-storefront/core';
import { Partner, GraphQlUpdateAccountParams, GraphQlLoginParams, AgnosticUser } from '@vue-storefront/odoo-api';
const factoryParams: UseUserFactoryParams<Partner, GraphQlUpdateAccountParams, any> = {
  load: async (context: Context) => {
    const user = context.$odoo.config.app.$cookies.get('odoo-user');
    if (user) {
      const { data, errors } = await context.$odoo.api.loadUser();
      return data.partner;
    }
    return null;
  },

  logOut: async (context: Context) => {
    context.$odoo.config.app.$cookies.remove('odoo-user');
    await context.$odoo.api.logOutUser();
  },

  updateUser: async (context: Context, { currentUser, updatedUserData, customQuery }) => {

    const params: GraphQlUpdateAccountParams = {
      id: currentUser.id,
      name: updatedUserData.name,
      email: updatedUserData.email
    };
    const { data } = await context.$odoo.api.updateAccount(params, customQuery);

    return data.updateMyAccount;
  },

  register: async (context: Context, params?: Partner & { customQuery }) => {
    const { customQuery } = params;

    try {
      const { data } = await context.$odoo.api.signUpUser(params, customQuery);

      context.$odoo.config.app.$cookies.set('odoo-user', data.register);

      return data.register;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.graphQLErrors
          .map((e) => e.message).join(',') || 'Some error');
      }
    }

  },
  logIn: async (context: Context, params: AgnosticUser & { customQuery }) => {
    const { customQuery } = params;

    const loginParams : GraphQlLoginParams = {
      email: params.username,
      password: params.password
    };

    try {
      const { data } = await context.$odoo.api.logInUser(loginParams, customQuery);

      context.$odoo.config.app.$cookies.set('odoo-user', data.login.partner);

      return data.login.partner;
    } catch (error) {
      if (error.response) {
        throw new Error(error.response?.data?.graphQLErrors
          .map((e) => e.message).join(',') || 'Some error');
      }
    }
  },

  changePassword: async (
    context: Context,
    { currentUser, currentPassword, newPassword }
  ) => {
    console.log('Mocked: changePassword');
    return {} as Partner;
  }
};

export default useUserFactory<Partner, any, any>(factoryParams);
