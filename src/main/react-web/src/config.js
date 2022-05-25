export default {
  oidc: {
    issuer: "https://trial-1640146.okta.com/oauth2/default",
    clientId: "0oa16j17aeoii2W6s697",
    scopes: ["openid", "profile", "email"],
    redirectUri: `${window.location.origin}/login/callback`,
  },
  widget: {
    issuer: "https://trial-1640146.okta.com/oauth2/default",
    clientId: "0oa16j17aeoii2W6s697",
    redirectUri: `${window.location.origin}/login/callback`,
    scopes: ["openid", "profile", "email"],
    useInteractionCodeFlow: true,
  },
};
