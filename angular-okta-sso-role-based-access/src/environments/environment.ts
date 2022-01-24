// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  oauthClientId: '0oa1382uj9nDywFZ10h8',
  oauthIssuerUrl: 'https://dev.oktapreview.com',
  oauthLoginUrl: 'https://dev.oktapreview.com/oauth2/v1/authorize',
  oauthTokenUrl: 'https://dev.oktapreview.com/oauth2/v1/token',
  oauthUserInfoUrl: 'https://dev.oktapreview.com/oauth2/v1/userinfo',
  oauthCallbackUrl: 'http://localhost:4200/',
  oauthPostLogoutUrl: 'http://localhost:4200/expired',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
