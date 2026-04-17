/*! For license information please see pz8l4l.7.adb99ba7.chunk.js.LICENSE.txt */
(function () {
  try {
    var v = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : {};
    var v2 = new v.Error().stack;
    if (v2) {
      v._sentryDebugIds = v._sentryDebugIds || {};
      v._sentryDebugIds[v2] = "9676f7d5-e613-5b3d-b50e-add2b319a70d";
    }
  } catch (e2) {}
})();
export const id = 7;
export const ids = [7];
export const modules = {
  16779: (p, p2, p3) => {
    p3.r(p2);
    p3.d(p2, {
      ActionCodeOperation: () => vO6,
      ActionCodeURL: () => C19,
      AuthCredential: () => C15,
      AuthErrorCodes: () => vO7,
      EmailAuthCredential: () => C16,
      EmailAuthProvider: () => C20,
      FacebookAuthProvider: () => C24,
      FactorId: () => vO2,
      GithubAuthProvider: () => C26,
      GoogleAuthProvider: () => C25,
      OAuthCredential: () => C17,
      OAuthProvider: () => C23,
      OperationType: () => vO5,
      PhoneAuthCredential: () => C18,
      PhoneAuthProvider: () => C57,
      PhoneMultiFactorGenerator: () => C66,
      ProviderId: () => vO3,
      RecaptchaVerifier: () => C55,
      SAMLAuthProvider: () => C28,
      SignInMethod: () => vO4,
      TotpMultiFactorGenerator: () => C67,
      TotpSecret: () => C69,
      TwitterAuthProvider: () => C29,
      applyActionCode: () => f82,
      beforeAuthStateChanged: () => f102,
      browserLocalPersistence: () => vC45,
      browserPopupRedirectResolver: () => vC2,
      browserSessionPersistence: () => vC46,
      checkActionCode: () => f83,
      confirmPasswordReset: () => f81,
      connectAuthEmulator: () => f53,
      createUserWithEmailAndPassword: () => f85,
      debugErrorMap: () => vF,
      deleteUser: () => f107,
      fetchSignInMethodsForEmail: () => f91,
      getAdditionalUserInfo: () => f98,
      getAuth: () => f151,
      getIdToken: () => f23,
      getIdTokenResult: () => f24,
      getMultiFactorResolver: () => f108,
      getRedirectResult: () => f136,
      inMemoryPersistence: () => vC8,
      indexedDBLocalPersistence: () => vC50,
      initializeAuth: () => f52,
      initializeRecaptchaConfig: () => f100,
      isSignInWithEmailLink: () => f89,
      linkWithCredential: () => f76,
      linkWithPhoneNumber: () => f118,
      linkWithPopup: () => f128,
      linkWithRedirect: () => f135,
      multiFactor: () => f109,
      onAuthStateChanged: () => f103,
      onIdTokenChanged: () => f101,
      parseActionCodeURL: () => f64,
      prodErrorMap: () => vF2,
      reauthenticateWithCredential: () => f77,
      reauthenticateWithPhoneNumber: () => f119,
      reauthenticateWithPopup: () => f127,
      reauthenticateWithRedirect: () => f134,
      reload: () => f29,
      sendEmailVerification: () => f92,
      sendPasswordResetEmail: () => f80,
      sendSignInLinkToEmail: () => f87,
      setPersistence: () => f99,
      signInAnonymously: () => f67,
      signInWithCredential: () => f75,
      signInWithCustomToken: () => f78,
      signInWithEmailAndPassword: () => f86,
      signInWithEmailLink: () => f90,
      signInWithPhoneNumber: () => f117,
      signInWithPopup: () => f126,
      signInWithRedirect: () => f133,
      signOut: () => f106,
      unlink: () => f70,
      updateCurrentUser: () => f105,
      updateEmail: () => f95,
      updatePassword: () => f96,
      updatePhoneNumber: () => f121,
      updateProfile: () => f94,
      useDeviceLanguage: () => f104,
      verifyBeforeUpdateEmail: () => f93,
      verifyPasswordResetCode: () => f84
    });
    var vP3 = p3(16770);
    var vP32 = p3(16759);
    function f(p4, p5) {
      var vO = {};
      for (var v3 in p4) {
        if (Object.prototype.hasOwnProperty.call(p4, v3) && p5.indexOf(v3) < 0) {
          vO[v3] = p4[v3];
        }
      }
      if (p4 != null && typeof Object.getOwnPropertySymbols === "function") {
        var vLN0 = 0;
        for (v3 = Object.getOwnPropertySymbols(p4); vLN0 < v3.length; vLN0++) {
          if (p5.indexOf(v3[vLN0]) < 0 && Object.prototype.propertyIsEnumerable.call(p4, v3[vLN0])) {
            vO[v3[vLN0]] = p4[v3[vLN0]];
          }
        }
      }
      return vO;
    }
    Object.create;
    Object.create;
    if (typeof SuppressedError === "function") {
      SuppressedError;
    }
    var vP33 = p3(16773);
    var vP34 = p3(16765);
    const vO2 = {
      PHONE: "phone",
      TOTP: "totp"
    };
    const vO3 = {
      FACEBOOK: "facebook.com",
      GITHUB: "github.com",
      GOOGLE: "google.com",
      PASSWORD: "password",
      PHONE: "phone",
      TWITTER: "twitter.com"
    };
    const vO4 = {
      EMAIL_LINK: "emailLink",
      EMAIL_PASSWORD: "password",
      FACEBOOK: "facebook.com",
      GITHUB: "github.com",
      GOOGLE: "google.com",
      PHONE: "phone",
      TWITTER: "twitter.com"
    };
    const vO5 = {
      LINK: "link",
      REAUTHENTICATE: "reauthenticate",
      SIGN_IN: "signIn"
    };
    const vO6 = {
      EMAIL_SIGNIN: "EMAIL_SIGNIN",
      PASSWORD_RESET: "PASSWORD_RESET",
      RECOVER_EMAIL: "RECOVER_EMAIL",
      REVERT_SECOND_FACTOR_ADDITION: "REVERT_SECOND_FACTOR_ADDITION",
      VERIFY_AND_CHANGE_EMAIL: "VERIFY_AND_CHANGE_EMAIL",
      VERIFY_EMAIL: "VERIFY_EMAIL"
    };
    function f2() {
      return {
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
      };
    }
    const vF = function () {
      return {
        "admin-restricted-operation": "This operation is restricted to administrators only.",
        "argument-error": "",
        "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
        "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
        "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
        "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
        "cordova-not-ready": "Cordova framework is not ready.",
        "cors-unsupported": "This browser is not supported.",
        "credential-already-in-use": "This credential is already associated with a different user account.",
        "custom-token-mismatch": "The custom token corresponds to a different audience.",
        "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
        "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",
        "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
        "email-change-needs-verification": "Multi-factor users must always have a verified email.",
        "email-already-in-use": "The email address is already in use by another account.",
        "emulator-config-failed": "Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling \"connectAuthEmulator()\" sooner.",
        "expired-action-code": "The action code has expired.",
        "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
        "internal-error": "An internal AuthError has occurred.",
        "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
        "invalid-app-id": "The mobile app identifier is not registed for the current project.",
        "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
        "invalid-auth-event": "An internal AuthError has occurred.",
        "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",
        "invalid-continue-uri": "The continue URL provided in the request is invalid.",
        "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
        "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
        "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
        "invalid-email": "The email address is badly formatted.",
        "invalid-emulator-scheme": "Emulator URL must start with a valid scheme (http:// or https://).",
        "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
        "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
        "invalid-credential": "The supplied auth credential is malformed or has expired.",
        "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
        "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
        "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
        "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
        "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
        "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
        "wrong-password": "The password is invalid or the user does not have a password.",
        "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
        "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
        "invalid-provider-id": "The specified provider ID is invalid.",
        "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
        "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
        "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
        "invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
        "login-blocked": "Login blocked by user-provided method: {$originalMessage}",
        "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
        "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
        "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
        "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
        "missing-continue-uri": "A continue URL must be provided in the request.",
        "missing-iframe-start": "An internal AuthError has occurred.",
        "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
        "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
        "missing-password": "A non-empty password must be provided",
        "missing-multi-factor-info": "No second factor identifier is provided.",
        "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
        "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
        "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
        "app-deleted": "This instance of FirebaseApp has been deleted.",
        "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
        "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
        "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
        "network-request-failed": "A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",
        "no-auth-event": "An internal AuthError has occurred.",
        "no-such-provider": "User was not linked to an account with the given provider.",
        "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
        "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
        "operation-not-supported-in-this-environment": "This operation is not supported in the environment this application is running on. \"location.protocol\" must be http, https or chrome-extension and web storage must be enabled.",
        "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
        "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
        "provider-already-linked": "User can only be linked to one identity for the given provider.",
        "quota-exceeded": "The project's quota for this operation has been exceeded.",
        "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
        "redirect-operation-pending": "A redirect sign-in operation is already pending.",
        "rejected-credential": "The request contains malformed or mismatching credentials.",
        "second-factor-already-in-use": "The second factor is already enrolled on this account.",
        "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
        "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
        timeout: "The operation has timed out.",
        "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
        "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
        "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
        "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
        "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
        "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
        "unverified-email": "The operation requires a verified email.",
        "user-cancelled": "The user did not grant your application the permissions it requested.",
        "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
        "user-disabled": "The user account has been disabled by an administrator.",
        "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
        "user-signed-out": "",
        "weak-password": "The password must be 6 characters long or more.",
        "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled.",
        "already-initialized": "initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",
        "missing-recaptcha-token": "The reCAPTCHA token is missing when sending request to the backend.",
        "invalid-recaptcha-token": "The reCAPTCHA token is invalid when sending request to the backend.",
        "invalid-recaptcha-action": "The reCAPTCHA action is invalid when sending request to the backend.",
        "recaptcha-not-enabled": "reCAPTCHA Enterprise integration is not enabled for this project.",
        "missing-client-type": "The reCAPTCHA client type is missing when sending request to the backend.",
        "missing-recaptcha-version": "The reCAPTCHA version is missing when sending request to the backend.",
        "invalid-req-type": "Invalid request parameters.",
        "invalid-recaptcha-version": "The reCAPTCHA version is invalid when sending request to the backend."
      };
    };
    const vF2 = f2;
    const v4 = new vP3.f("auth", "Firebase", {
      "dependent-sdk-initialized-before-auth": "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
    });
    const vO7 = {
      ADMIN_ONLY_OPERATION: "auth/admin-restricted-operation",
      ARGUMENT_ERROR: "auth/argument-error",
      APP_NOT_AUTHORIZED: "auth/app-not-authorized",
      APP_NOT_INSTALLED: "auth/app-not-installed",
      CAPTCHA_CHECK_FAILED: "auth/captcha-check-failed",
      CODE_EXPIRED: "auth/code-expired",
      CORDOVA_NOT_READY: "auth/cordova-not-ready",
      CORS_UNSUPPORTED: "auth/cors-unsupported",
      CREDENTIAL_ALREADY_IN_USE: "auth/credential-already-in-use",
      CREDENTIAL_MISMATCH: "auth/custom-token-mismatch",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "auth/requires-recent-login",
      DEPENDENT_SDK_INIT_BEFORE_AUTH: "auth/dependent-sdk-initialized-before-auth",
      DYNAMIC_LINK_NOT_ACTIVATED: "auth/dynamic-link-not-activated",
      EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/email-change-needs-verification",
      EMAIL_EXISTS: "auth/email-already-in-use",
      EMULATOR_CONFIG_FAILED: "auth/emulator-config-failed",
      EXPIRED_OOB_CODE: "auth/expired-action-code",
      EXPIRED_POPUP_REQUEST: "auth/cancelled-popup-request",
      INTERNAL_ERROR: "auth/internal-error",
      INVALID_API_KEY: "auth/invalid-api-key",
      INVALID_APP_CREDENTIAL: "auth/invalid-app-credential",
      INVALID_APP_ID: "auth/invalid-app-id",
      INVALID_AUTH: "auth/invalid-user-token",
      INVALID_AUTH_EVENT: "auth/invalid-auth-event",
      INVALID_CERT_HASH: "auth/invalid-cert-hash",
      INVALID_CODE: "auth/invalid-verification-code",
      INVALID_CONTINUE_URI: "auth/invalid-continue-uri",
      INVALID_CORDOVA_CONFIGURATION: "auth/invalid-cordova-configuration",
      INVALID_CUSTOM_TOKEN: "auth/invalid-custom-token",
      INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-dynamic-link-domain",
      INVALID_EMAIL: "auth/invalid-email",
      INVALID_EMULATOR_SCHEME: "auth/invalid-emulator-scheme",
      INVALID_IDP_RESPONSE: "auth/invalid-credential",
      INVALID_MESSAGE_PAYLOAD: "auth/invalid-message-payload",
      INVALID_MFA_SESSION: "auth/invalid-multi-factor-session",
      INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id",
      INVALID_OAUTH_PROVIDER: "auth/invalid-oauth-provider",
      INVALID_OOB_CODE: "auth/invalid-action-code",
      INVALID_ORIGIN: "auth/unauthorized-domain",
      INVALID_PASSWORD: "auth/wrong-password",
      INVALID_PERSISTENCE: "auth/invalid-persistence-type",
      INVALID_PHONE_NUMBER: "auth/invalid-phone-number",
      INVALID_PROVIDER_ID: "auth/invalid-provider-id",
      INVALID_RECIPIENT_EMAIL: "auth/invalid-recipient-email",
      INVALID_SENDER: "auth/invalid-sender",
      INVALID_SESSION_INFO: "auth/invalid-verification-id",
      INVALID_TENANT_ID: "auth/invalid-tenant-id",
      MFA_INFO_NOT_FOUND: "auth/multi-factor-info-not-found",
      MFA_REQUIRED: "auth/multi-factor-auth-required",
      MISSING_ANDROID_PACKAGE_NAME: "auth/missing-android-pkg-name",
      MISSING_APP_CREDENTIAL: "auth/missing-app-credential",
      MISSING_AUTH_DOMAIN: "auth/auth-domain-config-required",
      MISSING_CODE: "auth/missing-verification-code",
      MISSING_CONTINUE_URI: "auth/missing-continue-uri",
      MISSING_IFRAME_START: "auth/missing-iframe-start",
      MISSING_IOS_BUNDLE_ID: "auth/missing-ios-bundle-id",
      MISSING_OR_INVALID_NONCE: "auth/missing-or-invalid-nonce",
      MISSING_MFA_INFO: "auth/missing-multi-factor-info",
      MISSING_MFA_SESSION: "auth/missing-multi-factor-session",
      MISSING_PHONE_NUMBER: "auth/missing-phone-number",
      MISSING_SESSION_INFO: "auth/missing-verification-id",
      MODULE_DESTROYED: "auth/app-deleted",
      NEED_CONFIRMATION: "auth/account-exists-with-different-credential",
      NETWORK_REQUEST_FAILED: "auth/network-request-failed",
      NULL_USER: "auth/null-user",
      NO_AUTH_EVENT: "auth/no-auth-event",
      NO_SUCH_PROVIDER: "auth/no-such-provider",
      OPERATION_NOT_ALLOWED: "auth/operation-not-allowed",
      OPERATION_NOT_SUPPORTED: "auth/operation-not-supported-in-this-environment",
      POPUP_BLOCKED: "auth/popup-blocked",
      POPUP_CLOSED_BY_USER: "auth/popup-closed-by-user",
      PROVIDER_ALREADY_LINKED: "auth/provider-already-linked",
      QUOTA_EXCEEDED: "auth/quota-exceeded",
      REDIRECT_CANCELLED_BY_USER: "auth/redirect-cancelled-by-user",
      REDIRECT_OPERATION_PENDING: "auth/redirect-operation-pending",
      REJECTED_CREDENTIAL: "auth/rejected-credential",
      SECOND_FACTOR_ALREADY_ENROLLED: "auth/second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "auth/maximum-second-factor-count-exceeded",
      TENANT_ID_MISMATCH: "auth/tenant-id-mismatch",
      TIMEOUT: "auth/timeout",
      TOKEN_EXPIRED: "auth/user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "auth/too-many-requests",
      UNAUTHORIZED_DOMAIN: "auth/unauthorized-continue-uri",
      UNSUPPORTED_FIRST_FACTOR: "auth/unsupported-first-factor",
      UNSUPPORTED_PERSISTENCE: "auth/unsupported-persistence-type",
      UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-tenant-operation",
      UNVERIFIED_EMAIL: "auth/unverified-email",
      USER_CANCELLED: "auth/user-cancelled",
      USER_DELETED: "auth/user-not-found",
      USER_DISABLED: "auth/user-disabled",
      USER_MISMATCH: "auth/user-mismatch",
      USER_SIGNED_OUT: "auth/user-signed-out",
      WEAK_PASSWORD: "auth/weak-password",
      WEB_STORAGE_UNSUPPORTED: "auth/web-storage-unsupported",
      ALREADY_INITIALIZED: "auth/already-initialized",
      RECAPTCHA_NOT_ENABLED: "auth/recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "auth/missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "auth/invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "auth/invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "auth/missing-client-type",
      MISSING_RECAPTCHA_VERSION: "auth/missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "auth/invalid-recaptcha-version",
      INVALID_REQ_TYPE: "auth/invalid-req-type"
    };
    const v5 = new vP33.g("@firebase/auth");
    function f3(p6) {
      if (v5.logLevel <= vP33.e.ERROR) {
        for (var v6 = arguments.length, v7 = new Array(v6 > 1 ? v6 - 1 : 0), vLN1 = 1; vLN1 < v6; vLN1++) {
          v7[vLN1 - 1] = arguments[vLN1];
        }
        v5.error(`Auth (${vP32.g}): ${p6}`, ...v7);
      }
    }
    function f4(p7) {
      for (var v8 = arguments.length, v9 = new Array(v8 > 1 ? v8 - 1 : 0), vLN12 = 1; vLN12 < v8; vLN12++) {
        v9[vLN12 - 1] = arguments[vLN12];
      }
      throw f8(p7, ...v9);
    }
    function f5(p8) {
      for (var v10 = arguments.length, v11 = new Array(v10 > 1 ? v10 - 1 : 0), vLN13 = 1; vLN13 < v10; vLN13++) {
        v11[vLN13 - 1] = arguments[vLN13];
      }
      return f8(p8, ...v11);
    }
    function f6(p9, p10, p11) {
      const v12 = Object.assign(Object.assign({}, vF2()), {
        [p10]: p11
      });
      return new vP3.f("auth", "Firebase", v12).create(p10, {
        appName: p9.name
      });
    }
    function f7(p12, p13, p14) {
      if (!(p13 instanceof p14)) {
        if (p14.name !== p13.constructor.name) {
          f4(p12, "argument-error");
        }
        throw f6(p12, "argument-error", `Type of ${p13.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`);
      }
    }
    function f8(p15) {
      for (var v13 = arguments.length, v14 = new Array(v13 > 1 ? v13 - 1 : 0), vLN14 = 1; vLN14 < v13; vLN14++) {
        v14[vLN14 - 1] = arguments[vLN14];
      }
      if (typeof p15 !== "string") {
        const v15 = v14[0];
        const vA = [...v14.slice(1)];
        if (vA[0]) {
          vA[0].appName = p15.name;
        }
        return p15._errorFactory.create(v15, ...vA);
      }
      return v4.create(p15, ...v14);
    }
    function f9(p16, p17) {
      if (!p16) {
        for (var v16 = arguments.length, v17 = new Array(v16 > 2 ? v16 - 2 : 0), vLN2 = 2; vLN2 < v16; vLN2++) {
          v17[vLN2 - 2] = arguments[vLN2];
        }
        throw f8(p17, ...v17);
      }
    }
    function f10(p18) {
      const v18 = "INTERNAL ASSERTION FAILED: " + p18;
      f3(v18);
      throw new Error(v18);
    }
    function f11(p19, p20) {
      if (!p19) {
        f10(p20);
      }
    }
    function f12() {
      return typeof self !== "undefined" && self.location?.href || "";
    }
    function f13() {
      return f14() === "http:" || f14() === "https:";
    }
    function f14() {
      return typeof self !== "undefined" && self.location?.protocol || null;
    }
    class C {
      constructor(p21, p22) {
        this.shortDelay = p21;
        this.longDelay = p22;
        f11(p22 > p21, "Short delay should be less than long delay!");
        this.isMobile = (0, vP3.fb)() || (0, vP3.gb)();
      }
      get() {
        if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && (f13() || (0, vP3.W)() || "connection" in navigator) && !navigator.onLine) {
          return Math.min(5000, this.shortDelay);
        } else if (this.isMobile) {
          return this.longDelay;
        } else {
          return this.shortDelay;
        }
      }
    }
    function f15(p23, p24) {
      f11(p23.emulator, "Emulator should always be set here");
      const {
        url: IC
      } = p23.emulator;
      if (p24) {
        return `${IC}${p24.startsWith("/") ? p24.slice(1) : p24}`;
      } else {
        return IC;
      }
    }
    class C2 {
      static initialize(p25, p26, p27) {
        this.fetchImpl = p25;
        if (p26) {
          this.headersImpl = p26;
        }
        if (p27) {
          this.responseImpl = p27;
        }
      }
      static fetch() {
        if (this.fetchImpl) {
          return this.fetchImpl;
        } else if (typeof self !== "undefined" && "fetch" in self) {
          return self.fetch;
        } else {
          f10("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
          return;
        }
      }
      static headers() {
        if (this.headersImpl) {
          return this.headersImpl;
        } else if (typeof self !== "undefined" && "Headers" in self) {
          return self.Headers;
        } else {
          f10("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
          return;
        }
      }
      static response() {
        if (this.responseImpl) {
          return this.responseImpl;
        } else if (typeof self !== "undefined" && "Response" in self) {
          return self.Response;
        } else {
          f10("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
          return;
        }
      }
    }
    const vO8 = {
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_PASSWORD: "wrong-password",
      MISSING_PASSWORD: "missing-password",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_REQ_TYPE: "internal-error",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      INVALID_CODE: "invalid-verification-code",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_SESSION_INFO: "missing-verification-id",
      SESSION_EXPIRED: "code-expired",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation",
      INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session",
      MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found",
      MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info",
      MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session",
      SECOND_FACTOR_EXISTS: "second-factor-already-in-use",
      SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded",
      BLOCKING_FUNCTION_ERROR_RESPONSE: "internal-error",
      RECAPTCHA_NOT_ENABLED: "recaptcha-not-enabled",
      MISSING_RECAPTCHA_TOKEN: "missing-recaptcha-token",
      INVALID_RECAPTCHA_TOKEN: "invalid-recaptcha-token",
      INVALID_RECAPTCHA_ACTION: "invalid-recaptcha-action",
      MISSING_CLIENT_TYPE: "missing-client-type",
      MISSING_RECAPTCHA_VERSION: "missing-recaptcha-version",
      INVALID_RECAPTCHA_VERSION: "invalid-recaptcha-version",
      INVALID_REQ_TYPE: "invalid-req-type"
    };
    const v19 = new C(30000, 60000);
    function f16(p28, p29) {
      if (p28.tenantId && !p29.tenantId) {
        return Object.assign(Object.assign({}, p29), {
          tenantId: p28.tenantId
        });
      } else {
        return p29;
      }
    }
    async function f17(p30, p31, p32, p33) {
      return f18(p30, arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {}, async () => {
        let vO9 = {};
        let vO10 = {};
        if (p33) {
          if (p31 === "GET") {
            vO10 = p33;
          } else {
            vO9 = {
              body: JSON.stringify(p33)
            };
          }
        }
        const v20 = (0, vP3.kb)(Object.assign({
          key: p30.config.apiKey
        }, vO10)).slice(1);
        const v21 = await p30._getAdditionalHeaders();
        v21["Content-Type"] = "application/json";
        if (p30.languageCode) {
          v21["X-Firebase-Locale"] = p30.languageCode;
        }
        return C2.fetch()(f20(p30, p30.config.apiHost, p32, v20), Object.assign({
          method: p31,
          headers: v21,
          referrerPolicy: "no-referrer"
        }, vO9));
      });
    }
    async function f18(p34, p35, p36) {
      p34._canInitEmulator = false;
      const v22 = Object.assign(Object.assign({}, vO8), p35);
      try {
        const v23 = new C3(p34);
        const v24 = await Promise.race([p36(), v23.promise]);
        v23.clearNetworkTimeout();
        const v25 = await v24.json();
        if ("needConfirmation" in v25) {
          throw f21(p34, "account-exists-with-different-credential", v25);
        }
        if (v24.ok && !("errorMessage" in v25)) {
          return v25;
        }
        {
          const v26 = v24.ok ? v25.errorMessage : v25.error.message;
          const [v27, v28] = v26.split(" : ");
          if (v27 === "FEDERATED_USER_ID_ALREADY_LINKED") {
            throw f21(p34, "credential-already-in-use", v25);
          }
          if (v27 === "EMAIL_EXISTS") {
            throw f21(p34, "email-already-in-use", v25);
          }
          if (v27 === "USER_DISABLED") {
            throw f21(p34, "user-disabled", v25);
          }
          const v29 = v22[v27] || v27.toLowerCase().replace(/[_\s]+/g, "-");
          if (v28) {
            throw f6(p34, v29, v28);
          }
          f4(p34, v29);
        }
      } catch (e3) {
        if (e3 instanceof vP3.i) {
          throw e3;
        }
        f4(p34, "network-request-failed", {
          message: String(e3)
        });
      }
    }
    async function f19(p37, p38, p39, p40, ky = {}) {
      const v30 = await f17(p37, p38, p39, p40, ky);
      if ("mfaPendingCredential" in v30) {
        f4(p37, "multi-factor-auth-required", {
          _serverResponse: v30
        });
      }
      return v30;
    }
    function f20(p41, p42, p43, p44) {
      const v31 = `${p42}${p43}?${p44}`;
      if (p41.config.emulator) {
        return f15(p41.config, v31);
      } else {
        return `${p41.config.apiScheme}://${v31}`;
      }
    }
    class C3 {
      constructor(p45) {
        this.auth = p45;
        this.timer = null;
        this.promise = new Promise((p46, p47) => {
          this.timer = setTimeout(() => p47(f5(this.auth, "network-request-failed")), v19.get());
        });
      }
      clearNetworkTimeout() {
        clearTimeout(this.timer);
      }
    }
    function f21(p48, p49, p50) {
      const vO11 = {
        appName: p48.name
      };
      if (p50.email) {
        vO11.email = p50.email;
      }
      if (p50.phoneNumber) {
        vO11.phoneNumber = p50.phoneNumber;
      }
      const vF5 = f5(p48, p49, vO11);
      vF5.customData._tokenResponse = p50;
      return vF5;
    }
    function f22(p51) {
      if (p51) {
        try {
          const v32 = new Date(Number(p51));
          if (!isNaN(v32.getTime())) {
            return v32.toUTCString();
          }
        } catch (e4) {}
      }
    }
    function f23(p52, yC = false) {
      return (0, vP3.R)(p52).getIdToken(yC);
    }
    async function f24(p53, yC = false) {
      const v33 = (0, vP3.R)(p53);
      const v34 = await v33.getIdToken(yC);
      const vHC = f26(v34);
      f9(vHC && vHC.exp && vHC.auth_time && vHC.iat, v33.auth, "internal-error");
      const v35 = typeof vHC.firebase === "object" ? vHC.firebase : undefined;
      const v36 = v35?.sign_in_provider;
      return {
        claims: vHC,
        token: v34,
        authTime: f22(f25(vHC.auth_time)),
        issuedAtTime: f22(f25(vHC.iat)),
        expirationTime: f22(f25(vHC.exp)),
        signInProvider: v36 || null,
        signInSecondFactor: v35?.sign_in_second_factor || null
      };
    }
    function f25(p54) {
      return Number(p54) * 1000;
    }
    function f26(p55) {
      const [v37, v38, v39] = p55.split(".");
      if (v37 === undefined || v38 === undefined || v39 === undefined) {
        f3("JWT malformed, contained fewer than 3 sections");
        return null;
      }
      try {
        const v40 = (0, vP3.p)(v38);
        if (v40) {
          return JSON.parse(v40);
        } else {
          f3("Failed to decode base64 JWT payload");
          return null;
        }
      } catch (e5) {
        f3("Caught error parsing JWT payload as JSON", e5 === null || e5 === undefined ? undefined : e5.toString());
        return null;
      }
    }
    async function f27(p56, p57) {
      if (arguments.length > 2 && arguments[2] !== undefined && arguments[2]) {
        return p57;
      }
      try {
        return await p57;
      } catch (e6) {
        if (e6 instanceof vP3.i && function (p58) {
          let {
            code: yC
          } = p58;
          return yC === `auth/user-disabled` || yC === `auth/user-token-expired`;
        }(e6) && p56.auth.currentUser === p56) {
          await p56.auth.signOut();
        }
        throw e6;
      }
    }
    class C4 {
      constructor(p59) {
        this.user = p59;
        this.isRunning = false;
        this.timerId = null;
        this.errorBackoff = 30000;
      }
      _start() {
        if (!this.isRunning) {
          this.isRunning = true;
          this.schedule();
        }
      }
      _stop() {
        if (this.isRunning) {
          this.isRunning = false;
          if (this.timerId !== null) {
            clearTimeout(this.timerId);
          }
        }
      }
      getInterval(p60) {
        if (p60) {
          const v41 = this.errorBackoff;
          this.errorBackoff = Math.min(this.errorBackoff * 2, 960000);
          return v41;
        }
        {
          this.errorBackoff = 30000;
          const v42 = (this.user.stsTokenManager.expirationTime ?? 0) - Date.now() - 300000;
          return Math.max(0, v42);
        }
      }
      schedule(CC = false) {
        if (!this.isRunning) {
          return;
        }
        const v43 = this.getInterval(CC);
        this.timerId = setTimeout(async () => {
          await this.iteration();
        }, v43);
      }
      async iteration() {
        try {
          await this.user.getIdToken(true);
        } catch (e7) {
          if (e7?.code === `auth/network-request-failed`) {
            this.schedule(true);
          }
          return;
        }
        this.schedule();
      }
    }
    class C5 {
      constructor(p61, p62) {
        this.createdAt = p61;
        this.lastLoginAt = p62;
        this._initializeTime();
      }
      _initializeTime() {
        this.lastSignInTime = f22(this.lastLoginAt);
        this.creationTime = f22(this.createdAt);
      }
      _copy(p63) {
        this.createdAt = p63.createdAt;
        this.lastLoginAt = p63.lastLoginAt;
        this._initializeTime();
      }
      toJSON() {
        return {
          createdAt: this.createdAt,
          lastLoginAt: this.lastLoginAt
        };
      }
    }
    async function f28(p64) {
      const v44 = p64.auth;
      const v45 = await p64.getIdToken();
      const v46 = await f27(p64, async function (p65, p66) {
        return f17(p65, "POST", "/v1/accounts:lookup", p66);
      }(v44, {
        idToken: v45
      }));
      f9(v46 === null || v46 === undefined ? undefined : v46.users.length, v44, "internal-error");
      const v47 = v46.users[0];
      p64._notifyReloadListener(v47);
      const v48 = v47.providerUserInfo?.length ? v47.providerUserInfo.map(p67 => {
        var {
          providerId: yC
        } = p67;
        var vF3 = f(p67, ["providerId"]);
        return {
          providerId: yC,
          uid: vF3.rawId || "",
          displayName: vF3.displayName || null,
          email: vF3.email || null,
          phoneNumber: vF3.phoneNumber || null,
          photoURL: vF3.photoUrl || null
        };
      }) : [];
      v49 = p64.providerData;
      v50 = v48;
      const vA2 = [...v49.filter(p68 => !v50.some(p69 => p69.providerId === p68.providerId)), ...v50];
      var v49;
      var v50;
      const v51 = p64.isAnonymous;
      const v52 = (!p64.email || !v47.passwordHash) && !vA2?.length;
      const v53 = !!v51 && v52;
      const vO12 = {
        uid: v47.localId,
        displayName: v47.displayName || null,
        photoURL: v47.photoUrl || null,
        email: v47.email || null,
        emailVerified: v47.emailVerified || false,
        phoneNumber: v47.phoneNumber || null,
        tenantId: v47.tenantId || null,
        providerData: vA2,
        metadata: new C5(v47.createdAt, v47.lastLoginAt),
        isAnonymous: v53
      };
      Object.assign(p64, vO12);
    }
    async function f29(p70) {
      const v54 = (0, vP3.R)(p70);
      await f28(v54);
      await v54.auth._persistUserIfCurrent(v54);
      v54.auth._notifyListenersIfCurrent(v54);
    }
    class C6 {
      constructor() {
        this.refreshToken = null;
        this.accessToken = null;
        this.expirationTime = null;
      }
      get isExpired() {
        return !this.expirationTime || Date.now() > this.expirationTime - 30000;
      }
      updateFromServerResponse(p71) {
        f9(p71.idToken, "internal-error");
        f9(typeof p71.idToken !== "undefined", "internal-error");
        f9(typeof p71.refreshToken !== "undefined", "internal-error");
        const v55 = "expiresIn" in p71 && typeof p71.expiresIn !== "undefined" ? Number(p71.expiresIn) : function (p72) {
          const vF26 = f26(p72);
          f9(vF26, "internal-error");
          f9(typeof vF26.exp !== "undefined", "internal-error");
          f9(typeof vF26.iat !== "undefined", "internal-error");
          return Number(vF26.exp) - Number(vF26.iat);
        }(p71.idToken);
        this.updateTokensAndExpiration(p71.idToken, p71.refreshToken, v55);
      }
      async getToken(p73, yC = false) {
        f9(!this.accessToken || this.refreshToken, p73, "user-token-expired");
        if (yC || !this.accessToken || this.isExpired) {
          if (this.refreshToken) {
            await this.refresh(p73, this.refreshToken);
            return this.accessToken;
          } else {
            return null;
          }
        } else {
          return this.accessToken;
        }
      }
      clearRefreshToken() {
        this.refreshToken = null;
      }
      async refresh(p74, p75) {
        const {
          accessToken: IC,
          refreshToken: ky,
          expiresIn: gC
        } = await async function (p76, p77) {
          const v56 = await f18(p76, {}, async () => {
            const v57 = (0, vP3.kb)({
              grant_type: "refresh_token",
              refresh_token: p77
            }).slice(1);
            const {
              tokenApiHost: ky,
              apiKey: gC
            } = p76.config;
            const vF20 = f20(p76, ky, "/v1/token", `key=${gC}`);
            const v58 = await p76._getAdditionalHeaders();
            v58["Content-Type"] = "application/x-www-form-urlencoded";
            return C2.fetch()(vF20, {
              method: "POST",
              headers: v58,
              body: v57
            });
          });
          return {
            accessToken: v56.access_token,
            expiresIn: v56.expires_in,
            refreshToken: v56.refresh_token
          };
        }(p74, p75);
        this.updateTokensAndExpiration(IC, ky, Number(gC));
      }
      updateTokensAndExpiration(p78, p79, p80) {
        this.refreshToken = p79 || null;
        this.accessToken = p78 || null;
        this.expirationTime = Date.now() + p80 * 1000;
      }
      static fromJSON(p81, p82) {
        const {
          refreshToken: IC,
          accessToken: fC,
          expirationTime: ky
        } = p82;
        const v59 = new C6();
        if (IC) {
          f9(typeof IC === "string", "internal-error", {
            appName: p81
          });
          v59.refreshToken = IC;
        }
        if (fC) {
          f9(typeof fC === "string", "internal-error", {
            appName: p81
          });
          v59.accessToken = fC;
        }
        if (ky) {
          f9(typeof ky === "number", "internal-error", {
            appName: p81
          });
          v59.expirationTime = ky;
        }
        return v59;
      }
      toJSON() {
        return {
          refreshToken: this.refreshToken,
          accessToken: this.accessToken,
          expirationTime: this.expirationTime
        };
      }
      _assign(p83) {
        this.accessToken = p83.accessToken;
        this.refreshToken = p83.refreshToken;
        this.expirationTime = p83.expirationTime;
      }
      _clone() {
        return Object.assign(new C6(), this.toJSON());
      }
      _performRefresh() {
        return f10("not implemented");
      }
    }
    function f30(p84, p85) {
      f9(typeof p84 === "string" || typeof p84 === "undefined", "internal-error", {
        appName: p85
      });
    }
    class C7 {
      constructor(p86) {
        var {
          uid: yC,
          auth: IC,
          stsTokenManager: fC
        } = p86;
        var vF4 = f(p86, ["uid", "auth", "stsTokenManager"]);
        this.providerId = "firebase";
        this.proactiveRefresh = new C4(this);
        this.reloadUserInfo = null;
        this.reloadListener = null;
        this.uid = yC;
        this.auth = IC;
        this.stsTokenManager = fC;
        this.accessToken = fC.accessToken;
        this.displayName = vF4.displayName || null;
        this.email = vF4.email || null;
        this.emailVerified = vF4.emailVerified || false;
        this.phoneNumber = vF4.phoneNumber || null;
        this.photoURL = vF4.photoURL || null;
        this.isAnonymous = vF4.isAnonymous || false;
        this.tenantId = vF4.tenantId || null;
        this.providerData = vF4.providerData ? [...vF4.providerData] : [];
        this.metadata = new C5(vF4.createdAt || undefined, vF4.lastLoginAt || undefined);
      }
      async getIdToken(p87) {
        const v60 = await f27(this, this.stsTokenManager.getToken(this.auth, p87));
        f9(v60, this.auth, "internal-error");
        if (this.accessToken !== v60) {
          this.accessToken = v60;
          await this.auth._persistUserIfCurrent(this);
          this.auth._notifyListenersIfCurrent(this);
        }
        return v60;
      }
      getIdTokenResult(p88) {
        return f24(this, p88);
      }
      reload() {
        return f29(this);
      }
      _assign(p89) {
        if (this !== p89) {
          f9(this.uid === p89.uid, this.auth, "internal-error");
          this.displayName = p89.displayName;
          this.photoURL = p89.photoURL;
          this.email = p89.email;
          this.emailVerified = p89.emailVerified;
          this.phoneNumber = p89.phoneNumber;
          this.isAnonymous = p89.isAnonymous;
          this.tenantId = p89.tenantId;
          this.providerData = p89.providerData.map(p90 => Object.assign({}, p90));
          this.metadata._copy(p89.metadata);
          this.stsTokenManager._assign(p89.stsTokenManager);
        }
      }
      _clone(p91) {
        const v61 = new C7(Object.assign(Object.assign({}, this), {
          auth: p91,
          stsTokenManager: this.stsTokenManager._clone()
        }));
        v61.metadata._copy(this.metadata);
        return v61;
      }
      _onReload(p92) {
        f9(!this.reloadListener, this.auth, "internal-error");
        this.reloadListener = p92;
        if (this.reloadUserInfo) {
          this._notifyReloadListener(this.reloadUserInfo);
          this.reloadUserInfo = null;
        }
      }
      _notifyReloadListener(p93) {
        if (this.reloadListener) {
          this.reloadListener(p93);
        } else {
          this.reloadUserInfo = p93;
        }
      }
      _startProactiveRefresh() {
        this.proactiveRefresh._start();
      }
      _stopProactiveRefresh() {
        this.proactiveRefresh._stop();
      }
      async _updateTokensIfNecessary(p94, yC = false) {
        let v62 = false;
        if (p94.idToken && p94.idToken !== this.stsTokenManager.accessToken) {
          this.stsTokenManager.updateFromServerResponse(p94);
          v62 = true;
        }
        if (yC) {
          await f28(this);
        }
        await this.auth._persistUserIfCurrent(this);
        if (v62) {
          this.auth._notifyListenersIfCurrent(this);
        }
      }
      async delete() {
        const v63 = await this.getIdToken();
        await f27(this, async function (p95, p96) {
          return f17(p95, "POST", "/v1/accounts:delete", p96);
        }(this.auth, {
          idToken: v63
        }));
        this.stsTokenManager.clearRefreshToken();
        return this.auth.signOut();
      }
      toJSON() {
        return Object.assign(Object.assign({
          uid: this.uid,
          email: this.email || undefined,
          emailVerified: this.emailVerified,
          displayName: this.displayName || undefined,
          isAnonymous: this.isAnonymous,
          photoURL: this.photoURL || undefined,
          phoneNumber: this.phoneNumber || undefined,
          tenantId: this.tenantId || undefined,
          providerData: this.providerData.map(p97 => Object.assign({}, p97)),
          stsTokenManager: this.stsTokenManager.toJSON(),
          _redirectEventId: this._redirectEventId
        }, this.metadata.toJSON()), {
          apiKey: this.auth.config.apiKey,
          appName: this.auth.name
        });
      }
      get refreshToken() {
        return this.stsTokenManager.refreshToken || "";
      }
      static _fromJSON(p98, p99) {
        const v64 = p99.displayName ?? undefined;
        const v65 = p99.email ?? undefined;
        const v66 = p99.phoneNumber ?? undefined;
        const v67 = p99.photoURL ?? undefined;
        const v68 = p99.tenantId ?? undefined;
        const v69 = p99._redirectEventId ?? undefined;
        const v70 = p99.createdAt ?? undefined;
        const v71 = p99.lastLoginAt ?? undefined;
        const {
          uid: TC,
          emailVerified: NC,
          isAnonymous: sC,
          providerData: jy,
          stsTokenManager: qC
        } = p99;
        f9(TC && qC, p98, "internal-error");
        const v72 = C6.fromJSON(this.name, qC);
        f9(typeof TC === "string", p98, "internal-error");
        f30(v64, p98.name);
        f30(v65, p98.name);
        f9(typeof NC === "boolean", p98, "internal-error");
        f9(typeof sC === "boolean", p98, "internal-error");
        f30(v66, p98.name);
        f30(v67, p98.name);
        f30(v68, p98.name);
        f30(v69, p98.name);
        f30(v70, p98.name);
        f30(v71, p98.name);
        const v73 = new C7({
          uid: TC,
          auth: p98,
          email: v65,
          emailVerified: NC,
          displayName: v64,
          isAnonymous: sC,
          photoURL: v67,
          phoneNumber: v66,
          tenantId: v68,
          stsTokenManager: v72,
          createdAt: v70,
          lastLoginAt: v71
        });
        if (jy && Array.isArray(jy)) {
          v73.providerData = jy.map(p100 => Object.assign({}, p100));
        }
        if (v69) {
          v73._redirectEventId = v69;
        }
        return v73;
      }
      static async _fromIdTokenResponse(p101, p102, IC = false) {
        const v74 = new C6();
        v74.updateFromServerResponse(p102);
        const v75 = new C7({
          uid: p102.localId,
          auth: p101,
          stsTokenManager: v74,
          isAnonymous: IC
        });
        await f28(v75);
        return v75;
      }
    }
    const v76 = new Map();
    function f31(p103) {
      f11(p103 instanceof Function, "Expected a class definition");
      let v77 = v76.get(p103);
      if (v77) {
        f11(v77 instanceof p103, "Instance stored in cache mismatched with class");
        return v77;
      } else {
        v77 = new p103();
        v76.set(p103, v77);
        return v77;
      }
    }
    class C8 {
      constructor() {
        this.type = "NONE";
        this.storage = {};
      }
      async _isAvailable() {
        return true;
      }
      async _set(p104, p105) {
        this.storage[p104] = p105;
      }
      async _get(p106) {
        const v78 = this.storage[p106];
        if (v78 === undefined) {
          return null;
        } else {
          return v78;
        }
      }
      async _remove(p107) {
        delete this.storage[p107];
      }
      _addListener(p108, p109) {}
      _removeListener(p110, p111) {}
    }
    C8.type = "NONE";
    const vC8 = C8;
    function f32(p112, p113, p114) {
      return `firebase:${p112}:${p113}:${p114}`;
    }
    class C9 {
      constructor(p115, p116, p117) {
        this.persistence = p115;
        this.auth = p116;
        this.userKey = p117;
        const {
          config: fC,
          name: ky
        } = this.auth;
        this.fullUserKey = f32(this.userKey, fC.apiKey, ky);
        this.fullPersistenceKey = f32("persistence", fC.apiKey, ky);
        this.boundEventHandler = p116._onStorageEvent.bind(p116);
        this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
      }
      setCurrentUser(p118) {
        return this.persistence._set(this.fullUserKey, p118.toJSON());
      }
      async getCurrentUser() {
        const v79 = await this.persistence._get(this.fullUserKey);
        if (v79) {
          return C7._fromJSON(this.auth, v79);
        } else {
          return null;
        }
      }
      removeCurrentUser() {
        return this.persistence._remove(this.fullUserKey);
      }
      savePersistenceForRedirect() {
        return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
      }
      async setPersistence(p119) {
        if (this.persistence === p119) {
          return;
        }
        const v80 = await this.getCurrentUser();
        await this.removeCurrentUser();
        this.persistence = p119;
        if (v80) {
          return this.setCurrentUser(v80);
        } else {
          return undefined;
        }
      }
      delete() {
        this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
      }
      static async create(p120, p121, IC = "authUser") {
        if (!p121.length) {
          return new C9(f31(vC8), p120, IC);
        }
        const v81 = (await Promise.all(p121.map(async p122 => {
          if (await p122._isAvailable()) {
            return p122;
          }
        }))).filter(p123 => p123);
        let v82 = v81[0] || f31(vC8);
        const vF32 = f32(IC, p120.config.apiKey, p120.name);
        let v83 = null;
        for (const v84 of p121) {
          try {
            const v85 = await v84._get(vF32);
            if (v85) {
              const v86 = C7._fromJSON(p120, v85);
              if (v84 !== v82) {
                v83 = v86;
              }
              v82 = v84;
              break;
            }
          } catch (e8) {}
        }
        const v87 = v81.filter(p124 => p124._shouldAllowMigration);
        if (v82._shouldAllowMigration && v87.length) {
          v82 = v87[0];
          if (v83) {
            await v82._set(vF32, v83.toJSON());
          }
          await Promise.all(p121.map(async p125 => {
            if (p125 !== v82) {
              try {
                await p125._remove(vF32);
              } catch (e9) {}
            }
          }));
          return new C9(v82, p120, p3);
        } else {
          return new C9(v82, p120, p3);
        }
      }
    }
    function f33(p126) {
      const v88 = p126.toLowerCase();
      if (v88.includes("opera/") || v88.includes("opr/") || v88.includes("opios/")) {
        return "Opera";
      }
      if (f37(v88)) {
        return "IEMobile";
      }
      if (v88.includes("msie") || v88.includes("trident/")) {
        return "IE";
      }
      if (v88.includes("edge/")) {
        return "Edge";
      }
      if (f34(v88)) {
        return "Firefox";
      }
      if (v88.includes("silk/")) {
        return "Silk";
      }
      if (f39(v88)) {
        return "Blackberry";
      }
      if (f40(v88)) {
        return "Webos";
      }
      if (f35(v88)) {
        return "Safari";
      }
      if ((v88.includes("chrome/") || f36(v88)) && !v88.includes("edge/")) {
        return "Chrome";
      }
      if (f38(v88)) {
        return "Android";
      }
      {
        const v89 = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
        const v90 = p126.match(v89);
        if (v90?.length === 2) {
          return v90[1];
        }
      }
      return "Other";
    }
    function f34(CC = (0, vP3.T)()) {
      return /firefox\//i.test(CC);
    }
    function f35() {
      const v91 = (arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, vP3.T)()).toLowerCase();
      return v91.includes("safari/") && !v91.includes("chrome/") && !v91.includes("crios/") && !v91.includes("android");
    }
    function f36(CC = (0, vP3.T)()) {
      return /crios\//i.test(CC);
    }
    function f37(CC = (0, vP3.T)()) {
      return /iemobile/i.test(CC);
    }
    function f38(CC = (0, vP3.T)()) {
      return /android/i.test(CC);
    }
    function f39(CC = (0, vP3.T)()) {
      return /blackberry/i.test(CC);
    }
    function f40(CC = (0, vP3.T)()) {
      return /webos/i.test(CC);
    }
    function f41(CC = (0, vP3.T)()) {
      return /iphone|ipad|ipod/i.test(CC) || /macintosh/i.test(CC) && /mobile/i.test(CC);
    }
    function f42(CC = (0, vP3.T)()) {
      return f41(CC) || f38(CC) || f40(CC) || f39(CC) || /windows phone/i.test(CC) || f37(CC);
    }
    function f43(p127) {
      let v92;
      let v93 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      switch (p127) {
        case "Browser":
          v92 = f33((0, vP3.T)());
          break;
        case "Worker":
          v92 = `${f33((0, vP3.T)())}-${p127}`;
          break;
        default:
          v92 = p127;
      }
      const v94 = v93.length ? v93.join(",") : "FirebaseCore-web";
      return `${v92}/JsCore/${vP32.g}/${v94}`;
    }
    async function f44(p128, p129) {
      return f17(p128, "GET", "/v2/recaptchaConfig", f16(p128, p129));
    }
    function f45(p130) {
      return p130 !== undefined && p130.getResponse !== undefined;
    }
    function f46(p131) {
      return p131 !== undefined && p131.enterprise !== undefined;
    }
    class C10 {
      constructor(p132) {
        this.siteKey = "";
        this.emailPasswordEnabled = false;
        if (p132.recaptchaKey === undefined) {
          throw new Error("recaptchaKey undefined");
        }
        this.siteKey = p132.recaptchaKey.split("/")[3];
        this.emailPasswordEnabled = p132.recaptchaEnforcementState.some(p133 => p133.provider === "EMAIL_PASSWORD_PROVIDER" && p133.enforcementState !== "OFF");
      }
    }
    function f47(p134) {
      return new Promise((p135, p136) => {
        const v95 = document.createElement("script");
        v95.setAttribute("src", p134);
        v95.onload = p135;
        v95.onerror = p137 => {
          const vF52 = f5("internal-error");
          vF52.customData = p137;
          p136(vF52);
        };
        v95.type = "text/javascript";
        v95.charset = "UTF-8";
        (function () {
          return document.getElementsByTagName("head")?.[0] ?? document;
        })().appendChild(v95);
      });
    }
    function f48(p138) {
      return `__${p138}${Math.floor(Math.random() * 1000000)}`;
    }
    class C11 {
      constructor(p139) {
        this.type = "recaptcha-enterprise";
        this.auth = f51(p139);
      }
      async verify(CC = "verify", yC = false) {
        function IC(p140, p141, p142) {
          const v96 = window.grecaptcha;
          if (f46(v96)) {
            v96.enterprise.ready(() => {
              v96.enterprise.execute(p140, {
                action: p
              }).then(p143 => {
                p141(p143);
              }).catch(() => {
                p141("NO_RECAPTCHA");
              });
            });
          } else {
            p142(Error("No reCAPTCHA enterprise script loaded."));
          }
        }
        return new Promise((p144, p145) => {
          (async function (p146) {
            if (!yC) {
              if (p146.tenantId == null && p146._agentRecaptchaConfig != null) {
                return p146._agentRecaptchaConfig.siteKey;
              }
              if (p146.tenantId != null && p146._tenantRecaptchaConfigs[p146.tenantId] !== undefined) {
                return p146._tenantRecaptchaConfigs[p146.tenantId].siteKey;
              }
            }
            return new Promise(async (p147, p148) => {
              f44(p146, {
                clientType: "CLIENT_TYPE_WEB",
                version: "RECAPTCHA_ENTERPRISE"
              }).then(p149 => {
                if (p149.recaptchaKey !== undefined) {
                  const v97 = new C10(p149);
                  if (p146.tenantId == null) {
                    p146._agentRecaptchaConfig = v97;
                  } else {
                    p146._tenantRecaptchaConfigs[p146.tenantId] = v97;
                  }
                  return p147(v97.siteKey);
                }
                p148(new Error("recaptcha Enterprise site key undefined"));
              }).catch(p150 => {
                p148(p150);
              });
            });
          })(this.auth).then(p151 => {
            if (!yC && f46(window.grecaptcha)) {
              IC(p151, p144, p145);
            } else {
              if (typeof window === "undefined") {
                p145(new Error("RecaptchaVerifier is only supported in browser"));
                return;
              }
              f47("https://www.google.com/recaptcha/enterprise.js?render=" + p151).then(() => {
                IC(p151, p144, p145);
              }).catch(p152 => {
                p145(p152);
              });
            }
          }).catch(p153 => {
            p145(p153);
          });
        });
      }
    }
    async function f50(p154, p155, p156, fC = false) {
      const v98 = new C11(p154);
      let v99;
      try {
        v99 = await v98.verify(p156);
      } catch (e10) {
        v99 = await v98.verify(p156, true);
      }
      const v100 = Object.assign({}, p155);
      if (fC) {
        Object.assign(v100, {
          captchaResp: v99
        });
      } else {
        Object.assign(v100, {
          captchaResponse: v99
        });
      }
      Object.assign(v100, {
        clientType: "CLIENT_TYPE_WEB"
      });
      Object.assign(v100, {
        recaptchaVersion: "RECAPTCHA_ENTERPRISE"
      });
      return v100;
    }
    class C12 {
      constructor(p157) {
        this.auth = p157;
        this.queue = [];
      }
      pushCallback(p158, p159) {
        const vF6 = p160 => new Promise((p161, p162) => {
          try {
            p161(p158(p160));
          } catch (e11) {
            p162(e11);
          }
        });
        vF6.onAbort = p159;
        this.queue.push(vF6);
        const v101 = this.queue.length - 1;
        return () => {
          this.queue[v101] = () => Promise.resolve();
        };
      }
      async runMiddleware(p163) {
        if (this.auth.currentUser === p163) {
          return;
        }
        const vA3 = [];
        try {
          for (const v102 of this.queue) {
            await v102(p163);
            if (v102.onAbort) {
              vA3.push(v102.onAbort);
            }
          }
        } catch (e12) {
          vA3.reverse();
          for (const v103 of vA3) {
            try {
              v103();
            } catch (e13) {}
          }
          throw this.auth._errorFactory.create("login-blocked", {
            originalMessage: e12?.message
          });
        }
      }
    }
    class C13 {
      constructor(p164, p165, p166, p167) {
        this.app = p164;
        this.heartbeatServiceProvider = p165;
        this.appCheckServiceProvider = p166;
        this.config = p167;
        this.currentUser = null;
        this.emulatorConfig = null;
        this.operations = Promise.resolve();
        this.authStateSubscription = new C14(this);
        this.idTokenSubscription = new C14(this);
        this.beforeStateQueue = new C12(this);
        this.redirectUser = null;
        this.isProactiveRefreshEnabled = false;
        this._canInitEmulator = true;
        this._isInitialized = false;
        this._deleted = false;
        this._initializationPromise = null;
        this._popupRedirectResolver = null;
        this._errorFactory = v4;
        this._agentRecaptchaConfig = null;
        this._tenantRecaptchaConfigs = {};
        this.lastNotifiedUid = undefined;
        this.languageCode = null;
        this.tenantId = null;
        this.settings = {
          appVerificationDisabledForTesting: false
        };
        this.frameworks = [];
        this.name = p164.name;
        this.clientVersion = p167.sdkClientVersion;
      }
      _initializeWithPersistence(p168, p169) {
        if (p169) {
          this._popupRedirectResolver = f31(p169);
        }
        this._initializationPromise = this.queue(async () => {
          if (!this._deleted && (this.persistenceManager = await C9.create(this, p168), !this._deleted)) {
            if (this._popupRedirectResolver?._shouldInitProactively) {
              try {
                await this._popupRedirectResolver._initialize(this);
              } catch (e14) {}
            }
            await this.initializeCurrentUser(p169);
            this.lastNotifiedUid = this.currentUser?.uid || null;
            if (!this._deleted) {
              this._isInitialized = true;
            }
          }
        });
        return this._initializationPromise;
      }
      async _onStorageEvent() {
        if (this._deleted) {
          return;
        }
        const v104 = await this.assertedPersistence.getCurrentUser();
        if (this.currentUser || v104) {
          if (this.currentUser && v104 && this.currentUser.uid === v104.uid) {
            this._currentUser._assign(v104);
            await this.currentUser.getIdToken();
            return;
          } else {
            await this._updateCurrentUser(v104, true);
            return;
          }
        } else {
          return undefined;
        }
      }
      async initializeCurrentUser(p170) {
        const v105 = await this.assertedPersistence.getCurrentUser();
        let vV105 = v105;
        let v106 = false;
        if (p170 && this.config.authDomain) {
          await this.getOrInitRedirectPersistenceManager();
          const v107 = this.redirectUser?._redirectEventId;
          const v108 = vV105?._redirectEventId;
          const v109 = await this.tryRedirectSignIn(p170);
          if ((!v107 || v107 === v108) && !!v109?.user) {
            vV105 = v109.user;
            v106 = true;
          }
        }
        if (!vV105) {
          return this.directlySetCurrentUser(null);
        }
        if (!vV105._redirectEventId) {
          if (v106) {
            try {
              await this.beforeStateQueue.runMiddleware(vV105);
            } catch (e15) {
              vV105 = v105;
              this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e15));
            }
          }
          if (vV105) {
            return this.reloadAndSetCurrentUserOrClear(vV105);
          } else {
            return this.directlySetCurrentUser(null);
          }
        }
        f9(this._popupRedirectResolver, this, "argument-error");
        await this.getOrInitRedirectPersistenceManager();
        if (this.redirectUser && this.redirectUser._redirectEventId === vV105._redirectEventId) {
          return this.directlySetCurrentUser(vV105);
        } else {
          return this.reloadAndSetCurrentUserOrClear(vV105);
        }
      }
      async tryRedirectSignIn(p171) {
        let v110 = null;
        try {
          v110 = await this._popupRedirectResolver._completeRedirectFn(this, p171, true);
        } catch (e16) {
          await this._setRedirectUser(null);
        }
        return v110;
      }
      async reloadAndSetCurrentUserOrClear(p172) {
        try {
          await f28(p172);
        } catch (e17) {
          if (e17?.code !== `auth/network-request-failed`) {
            return this.directlySetCurrentUser(null);
          }
        }
        return this.directlySetCurrentUser(p172);
      }
      useDeviceLanguage() {
        this.languageCode = function () {
          if (typeof navigator === "undefined") {
            return null;
          }
          const vNavigator = navigator;
          return vNavigator.languages && vNavigator.languages[0] || vNavigator.language || null;
        }();
      }
      async _delete() {
        this._deleted = true;
      }
      async updateCurrentUser(p173) {
        const v111 = p173 ? (0, vP3.R)(p173) : null;
        if (v111) {
          f9(v111.auth.config.apiKey === this.config.apiKey, this, "invalid-user-token");
        }
        return this._updateCurrentUser(v111 && v111._clone(this));
      }
      async _updateCurrentUser(p174, yC = false) {
        if (!this._deleted) {
          if (p174) {
            f9(this.tenantId === p174.tenantId, this, "tenant-id-mismatch");
          }
          if (!yC) {
            await this.beforeStateQueue.runMiddleware(p174);
          }
          return this.queue(async () => {
            await this.directlySetCurrentUser(p174);
            this.notifyAuthListeners();
          });
        }
      }
      async signOut() {
        await this.beforeStateQueue.runMiddleware(null);
        if (this.redirectPersistenceManager || this._popupRedirectResolver) {
          await this._setRedirectUser(null);
        }
        return this._updateCurrentUser(null, true);
      }
      setPersistence(p175) {
        return this.queue(async () => {
          await this.assertedPersistence.setPersistence(f31(p175));
        });
      }
      async initializeRecaptchaConfig() {
        const v112 = await f44(this, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
        });
        const v113 = new C10(v112);
        if (this.tenantId == null) {
          this._agentRecaptchaConfig = v113;
        } else {
          this._tenantRecaptchaConfigs[this.tenantId] = v113;
        }
        if (v113.emailPasswordEnabled) {
          new C11(this).verify();
        }
      }
      _getRecaptchaConfig() {
        if (this.tenantId == null) {
          return this._agentRecaptchaConfig;
        } else {
          return this._tenantRecaptchaConfigs[this.tenantId];
        }
      }
      _getPersistence() {
        return this.assertedPersistence.persistence.type;
      }
      _updateErrorMap(p176) {
        this._errorFactory = new vP3.f("auth", "Firebase", p176());
      }
      onAuthStateChanged(p177, p178, p179) {
        return this.registerStateListener(this.authStateSubscription, p177, p178, p179);
      }
      beforeAuthStateChanged(p180, p181) {
        return this.beforeStateQueue.pushCallback(p180, p181);
      }
      onIdTokenChanged(p182, p183, p184) {
        return this.registerStateListener(this.idTokenSubscription, p182, p183, p184);
      }
      toJSON() {
        var v114;
        return {
          apiKey: this.config.apiKey,
          authDomain: this.config.authDomain,
          appName: this.name,
          currentUser: (v114 = this._currentUser) === null || v114 === undefined ? undefined : v114.toJSON()
        };
      }
      async _setRedirectUser(p185, p186) {
        const v115 = await this.getOrInitRedirectPersistenceManager(p186);
        if (p185 === null) {
          return v115.removeCurrentUser();
        } else {
          return v115.setCurrentUser(p185);
        }
      }
      async getOrInitRedirectPersistenceManager(p187) {
        if (!this.redirectPersistenceManager) {
          const v116 = p187 && f31(p187) || this._popupRedirectResolver;
          f9(v116, this, "argument-error");
          this.redirectPersistenceManager = await C9.create(this, [f31(v116._redirectPersistence)], "redirectUser");
          this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
        }
        return this.redirectPersistenceManager;
      }
      async _redirectUserForId(p188) {
        if (this._isInitialized) {
          await this.queue(async () => {});
        }
        if (this._currentUser?._redirectEventId === p188) {
          return this._currentUser;
        } else if (this.redirectUser?._redirectEventId === p188) {
          return this.redirectUser;
        } else {
          return null;
        }
      }
      async _persistUserIfCurrent(p189) {
        if (p189 === this.currentUser) {
          return this.queue(async () => this.directlySetCurrentUser(p189));
        }
      }
      _notifyListenersIfCurrent(p190) {
        if (p190 === this.currentUser) {
          this.notifyAuthListeners();
        }
      }
      _key() {
        return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
      }
      _startProactiveRefresh() {
        this.isProactiveRefreshEnabled = true;
        if (this.currentUser) {
          this._currentUser._startProactiveRefresh();
        }
      }
      _stopProactiveRefresh() {
        this.isProactiveRefreshEnabled = false;
        if (this.currentUser) {
          this._currentUser._stopProactiveRefresh();
        }
      }
      get _currentUser() {
        return this.currentUser;
      }
      notifyAuthListeners() {
        if (!this._isInitialized) {
          return;
        }
        this.idTokenSubscription.next(this.currentUser);
        const v117 = this.currentUser?.uid ?? null;
        if (this.lastNotifiedUid !== v117) {
          this.lastNotifiedUid = v117;
          this.authStateSubscription.next(this.currentUser);
        }
      }
      registerStateListener(p191, p192, p193, p194) {
        if (this._deleted) {
          return () => {};
        }
        const v118 = typeof p192 === "function" ? p192 : p192.next.bind(p192);
        const v119 = this._isInitialized ? Promise.resolve() : this._initializationPromise;
        f9(v119, this, "internal-error");
        v119.then(() => v118(this.currentUser));
        if (typeof p192 === "function") {
          return p191.addObserver(p192, p193, p194);
        } else {
          return p191.addObserver(p192);
        }
      }
      async directlySetCurrentUser(p195) {
        if (this.currentUser && this.currentUser !== p195) {
          this._currentUser._stopProactiveRefresh();
        }
        if (p195 && this.isProactiveRefreshEnabled) {
          p195._startProactiveRefresh();
        }
        this.currentUser = p195;
        if (p195) {
          await this.assertedPersistence.setCurrentUser(p195);
        } else {
          await this.assertedPersistence.removeCurrentUser();
        }
      }
      queue(p196) {
        this.operations = this.operations.then(p196, p196);
        return this.operations;
      }
      get assertedPersistence() {
        f9(this.persistenceManager, this, "internal-error");
        return this.persistenceManager;
      }
      _logFramework(p197) {
        if (p197 && !this.frameworks.includes(p197)) {
          this.frameworks.push(p197);
          this.frameworks.sort();
          this.clientVersion = f43(this.config.clientPlatform, this._getFrameworks());
        }
      }
      _getFrameworks() {
        return this.frameworks;
      }
      async _getAdditionalHeaders() {
        var v120;
        const vO13 = {
          "X-Client-Version": this.clientVersion
        };
        if (this.app.options.appId) {
          vO13["X-Firebase-gmpid"] = this.app.options.appId;
        }
        const v121 = await ((v120 = this.heartbeatServiceProvider.getImmediate({
          optional: true
        })) === null || v120 === undefined ? undefined : v120.getHeartbeatsHeader());
        if (v121) {
          vO13["X-Firebase-Client"] = v121;
        }
        const v122 = await this._getAppCheckToken();
        if (v122) {
          vO13["X-Firebase-AppCheck"] = v122;
        }
        return vO13;
      }
      async _getAppCheckToken() {
        var v123;
        const v124 = await ((v123 = this.appCheckServiceProvider.getImmediate({
          optional: true
        })) === null || v123 === undefined ? undefined : v123.getToken());
        if (v124?.error) {
          (function (p198) {
            if (v5.logLevel <= vP33.e.WARN) {
              for (var v125 = arguments.length, v126 = new Array(v125 > 1 ? v125 - 1 : 0), vLN15 = 1; vLN15 < v125; vLN15++) {
                v126[vLN15 - 1] = arguments[vLN15];
              }
              v5.warn(`Auth (${vP32.g}): ${p198}`, ...v126);
            }
          })(`Error while retrieving App Check token: ${v124.error}`);
        }
        return v124?.token;
      }
    }
    function f51(p199) {
      return (0, vP3.R)(p199);
    }
    class C14 {
      constructor(p200) {
        this.auth = p200;
        this.observer = null;
        this.addObserver = (0, vP3.y)(p201 => this.observer = p201);
      }
      get next() {
        f9(this.observer, this.auth, "internal-error");
        return this.observer.next.bind(this.observer);
      }
    }
    function f52(p202, p203) {
      const v127 = (0, vP32.w)(p202, "auth");
      if (v127.isInitialized()) {
        const v128 = v127.getImmediate();
        const v129 = v127.getOptions();
        if ((0, vP3.C)(v129, p203 ?? {})) {
          return v128;
        }
        f4(v128, "already-initialized");
      }
      return v127.initialize({
        options: p203
      });
    }
    function f53(p204, p205, p206) {
      const vF51 = f51(p204);
      f9(vF51._canInitEmulator, vF51, "emulator-config-failed");
      f9(/^https?:\/\//.test(p205), vF51, "invalid-emulator-scheme");
      const v130 = !!p206?.disableWarnings;
      const vZy = f55(p205);
      const {
        host: AC,
        port: my
      } = function (p207) {
        const vZy2 = f55(p207);
        const v131 = /(\/\/)?([^?#/]+)/.exec(p207.substr(vZy2.length));
        if (!v131) {
          return {
            host: "",
            port: null
          };
        }
        const v132 = v131[2].split("@").pop() || "";
        const v133 = /^(\[[^\]]+\])(:|$)/.exec(v132);
        if (v133) {
          const v134 = v133[1];
          return {
            host: v134,
            port: f56(v132.substr(v134.length + 1))
          };
        }
        {
          const [v135, v136] = v132.split(":");
          return {
            host: v135,
            port: f56(v136)
          };
        }
      }(p205);
      const v137 = my === null ? "" : `:${my}`;
      vF51.config.emulator = {
        url: `${vZy}//${AC}${v137}/`
      };
      vF51.settings.appVerificationDisabledForTesting = true;
      vF51.emulatorConfig = Object.freeze({
        host: AC,
        port: my,
        protocol: vZy.replace(":", ""),
        options: Object.freeze({
          disableWarnings: v130
        })
      });
      if (!v130) {
        (function () {
          function CC() {
            const v138 = document.createElement("p");
            const v139 = v138.style;
            v138.innerText = "Running in emulator mode. Do not use with production credentials.";
            v139.position = "fixed";
            v139.width = "100%";
            v139.backgroundColor = "#ffffff";
            v139.border = ".1em solid #000000";
            v139.color = "#b50000";
            v139.bottom = "0px";
            v139.left = "0px";
            v139.margin = "0px";
            v139.zIndex = "10000";
            v139.textAlign = "center";
            v138.classList.add("firebase-emulator-warning");
            document.body.appendChild(v138);
          }
          if (typeof console !== "undefined" && typeof console.info === "function") {
            console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
          }
          if (typeof window !== "undefined" && typeof document !== "undefined") {
            if (document.readyState === "loading") {
              window.addEventListener("DOMContentLoaded", CC);
            } else {
              CC();
            }
          }
        })();
      }
    }
    function f55(p208) {
      const v140 = p208.indexOf(":");
      if (v140 < 0) {
        return "";
      } else {
        return p208.substr(0, v140 + 1);
      }
    }
    function f56(p209) {
      if (!p209) {
        return null;
      }
      const vNumber = Number(p209);
      if (isNaN(vNumber)) {
        return null;
      } else {
        return vNumber;
      }
    }
    class C15 {
      constructor(p210, p211) {
        this.providerId = p210;
        this.signInMethod = p211;
      }
      toJSON() {
        return f10("not implemented");
      }
      _getIdTokenResponse(p212) {
        return f10("not implemented");
      }
      _linkToIdToken(p213, p214) {
        return f10("not implemented");
      }
      _getReauthenticationResolver(p215) {
        return f10("not implemented");
      }
    }
    async function f57(p216, p217) {
      return f17(p216, "POST", "/v1/accounts:resetPassword", f16(p216, p217));
    }
    async function f58(p218, p219) {
      return f17(p218, "POST", "/v1/accounts:update", p219);
    }
    async function f59(p220, p221) {
      return f19(p220, "POST", "/v1/accounts:signInWithPassword", f16(p220, p221));
    }
    async function f60(p222, p223) {
      return f17(p222, "POST", "/v1/accounts:sendOobCode", f16(p222, p223));
    }
    async function f61(p224, p225) {
      return f60(p224, p225);
    }
    async function f62(p226, p227) {
      return f60(p226, p227);
    }
    class C16 extends C15 {
      constructor(p228, p229, p230, fC = null) {
        super("password", p230);
        this._email = p228;
        this._password = p229;
        this._tenantId = fC;
      }
      static _fromEmailAndPassword(p231, p232) {
        return new C16(p231, p232, "password");
      }
      static _fromEmailAndCode(p233, p234) {
        return new C16(p233, p234, "emailLink", arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null);
      }
      toJSON() {
        return {
          email: this._email,
          password: this._password,
          signInMethod: this.signInMethod,
          tenantId: this._tenantId
        };
      }
      static fromJSON(p235) {
        const v141 = typeof p235 === "string" ? JSON.parse(p235) : p235;
        if (v141?.email && v141?.password) {
          if (v141.signInMethod === "password") {
            return this._fromEmailAndPassword(v141.email, v141.password);
          }
          if (v141.signInMethod === "emailLink") {
            return this._fromEmailAndCode(v141.email, v141.password, v141.tenantId);
          }
        }
        return null;
      }
      async _getIdTokenResponse(p236) {
        switch (this.signInMethod) {
          case "password":
            const vO14 = {
              returnSecureToken: true,
              email: this._email,
              password: this._password,
              clientType: "CLIENT_TYPE_WEB"
            };
            if (p236._getRecaptchaConfig()?.emailPasswordEnabled) {
              const v142 = await f50(p236, vO14, "signInWithPassword");
              return f59(p236, v142);
            }
            return f59(p236, vO14).catch(async p237 => {
              if (p237.code === `auth/missing-recaptcha-token`) {
                console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
                const v143 = await f50(p236, vO14, "signInWithPassword");
                return f59(p236, v143);
              }
              return Promise.reject(p237);
            });
          case "emailLink":
            return async function (p238, p239) {
              return f19(p238, "POST", "/v1/accounts:signInWithEmailLink", f16(p238, p239));
            }(p236, {
              email: this._email,
              oobCode: this._password
            });
          default:
            f4(p236, "internal-error");
        }
      }
      async _linkToIdToken(p240, p241) {
        switch (this.signInMethod) {
          case "password":
            return f58(p240, {
              idToken: p241,
              returnSecureToken: true,
              email: this._email,
              password: this._password
            });
          case "emailLink":
            return async function (p242, p243) {
              return f19(p242, "POST", "/v1/accounts:signInWithEmailLink", f16(p242, p243));
            }(p240, {
              idToken: p241,
              email: this._email,
              oobCode: this._password
            });
          default:
            f4(p240, "internal-error");
        }
      }
      _getReauthenticationResolver(p244) {
        return this._getIdTokenResponse(p244);
      }
    }
    async function f63(p245, p246) {
      return f19(p245, "POST", "/v1/accounts:signInWithIdp", f16(p245, p246));
    }
    class C17 extends C15 {
      constructor() {
        super(...arguments);
        this.pendingToken = null;
      }
      static _fromParams(p247) {
        const v144 = new C17(p247.providerId, p247.signInMethod);
        if (p247.idToken || p247.accessToken) {
          if (p247.idToken) {
            v144.idToken = p247.idToken;
          }
          if (p247.accessToken) {
            v144.accessToken = p247.accessToken;
          }
          if (p247.nonce && !p247.pendingToken) {
            v144.nonce = p247.nonce;
          }
          if (p247.pendingToken) {
            v144.pendingToken = p247.pendingToken;
          }
        } else if (p247.oauthToken && p247.oauthTokenSecret) {
          v144.accessToken = p247.oauthToken;
          v144.secret = p247.oauthTokenSecret;
        } else {
          f4("argument-error");
        }
        return v144;
      }
      toJSON() {
        return {
          idToken: this.idToken,
          accessToken: this.accessToken,
          secret: this.secret,
          nonce: this.nonce,
          pendingToken: this.pendingToken,
          providerId: this.providerId,
          signInMethod: this.signInMethod
        };
      }
      static fromJSON(p248) {
        const v145 = typeof p248 === "string" ? JSON.parse(p248) : p248;
        const {
          providerId: IC,
          signInMethod: fC
        } = v145;
        const vF7 = f(v145, ["providerId", "signInMethod"]);
        if (!IC || !fC) {
          return null;
        }
        const v146 = new C17(IC, fC);
        v146.idToken = vF7.idToken || undefined;
        v146.accessToken = vF7.accessToken || undefined;
        v146.secret = vF7.secret;
        v146.nonce = vF7.nonce;
        v146.pendingToken = vF7.pendingToken || null;
        return v146;
      }
      _getIdTokenResponse(p249) {
        return f63(p249, this.buildRequest());
      }
      _linkToIdToken(p250, p251) {
        const v147 = this.buildRequest();
        v147.idToken = p251;
        return f63(p250, v147);
      }
      _getReauthenticationResolver(p252) {
        const v148 = this.buildRequest();
        v148.autoCreate = false;
        return f63(p252, v148);
      }
      buildRequest() {
        const vO15 = {
          requestUri: "http://localhost",
          returnSecureToken: true
        };
        if (this.pendingToken) {
          vO15.pendingToken = this.pendingToken;
        } else {
          const vO16 = {};
          if (this.idToken) {
            vO16.id_token = this.idToken;
          }
          if (this.accessToken) {
            vO16.access_token = this.accessToken;
          }
          if (this.secret) {
            vO16.oauth_token_secret = this.secret;
          }
          vO16.providerId = this.providerId;
          if (this.nonce && !this.pendingToken) {
            vO16.nonce = this.nonce;
          }
          vO15.postBody = (0, vP3.kb)(vO16);
        }
        return vO15;
      }
    }
    const vO17 = {
      USER_NOT_FOUND: "user-not-found"
    };
    class C18 extends C15 {
      constructor(p253) {
        super("phone", "phone");
        this.params = p253;
      }
      static _fromVerification(p254, p255) {
        return new C18({
          verificationId: p254,
          verificationCode: p255
        });
      }
      static _fromTokenResponse(p256, p257) {
        return new C18({
          phoneNumber: p256,
          temporaryProof: p257
        });
      }
      _getIdTokenResponse(p258) {
        return async function (p259, p260) {
          return f19(p259, "POST", "/v1/accounts:signInWithPhoneNumber", f16(p259, p260));
        }(p258, this._makeVerificationRequest());
      }
      _linkToIdToken(p261, p262) {
        return async function (p263, p264) {
          const v149 = await f19(p263, "POST", "/v1/accounts:signInWithPhoneNumber", f16(p263, p264));
          if (v149.temporaryProof) {
            throw f21(p263, "account-exists-with-different-credential", v149);
          }
          return v149;
        }(p261, Object.assign({
          idToken: p262
        }, this._makeVerificationRequest()));
      }
      _getReauthenticationResolver(p265) {
        return async function (p266, p267) {
          return f19(p266, "POST", "/v1/accounts:signInWithPhoneNumber", f16(p266, Object.assign(Object.assign({}, p267), {
            operation: "REAUTH"
          })), vO17);
        }(p265, this._makeVerificationRequest());
      }
      _makeVerificationRequest() {
        const {
          temporaryProof: CC,
          phoneNumber: yC,
          verificationId: IC,
          verificationCode: fC
        } = this.params;
        if (CC && yC) {
          return {
            temporaryProof: CC,
            phoneNumber: yC
          };
        } else {
          return {
            sessionInfo: IC,
            code: fC
          };
        }
      }
      toJSON() {
        const vO18 = {
          providerId: this.providerId
        };
        if (this.params.phoneNumber) {
          vO18.phoneNumber = this.params.phoneNumber;
        }
        if (this.params.temporaryProof) {
          vO18.temporaryProof = this.params.temporaryProof;
        }
        if (this.params.verificationCode) {
          vO18.verificationCode = this.params.verificationCode;
        }
        if (this.params.verificationId) {
          vO18.verificationId = this.params.verificationId;
        }
        return vO18;
      }
      static fromJSON(p268) {
        if (typeof p268 === "string") {
          p268 = JSON.parse(p268);
        }
        const {
          verificationId: yC,
          verificationCode: IC,
          phoneNumber: fC,
          temporaryProof: ky
        } = p268;
        if (IC || yC || fC || ky) {
          return new C18({
            verificationId: yC,
            verificationCode: IC,
            phoneNumber: fC,
            temporaryProof: ky
          });
        } else {
          return null;
        }
      }
    }
    class C19 {
      constructor(p269) {
        const v150 = (0, vP3.jb)((0, vP3.F)(p269));
        const v151 = v150.apiKey ?? null;
        const v152 = v150.oobCode ?? null;
        const vF8 = function (p270) {
          switch (p270) {
            case "recoverEmail":
              return "RECOVER_EMAIL";
            case "resetPassword":
              return "PASSWORD_RESET";
            case "signIn":
              return "EMAIL_SIGNIN";
            case "verifyEmail":
              return "VERIFY_EMAIL";
            case "verifyAndChangeEmail":
              return "VERIFY_AND_CHANGE_EMAIL";
            case "revertSecondFactorAddition":
              return "REVERT_SECOND_FACTOR_ADDITION";
            default:
              return null;
          }
        }(v150.mode ?? null);
        f9(v151 && v152 && vF8, "argument-error");
        this.apiKey = v151;
        this.operation = vF8;
        this.code = v152;
        this.continueUrl = v150.continueUrl ?? null;
        this.languageCode = v150.languageCode ?? null;
        this.tenantId = v150.tenantId ?? null;
      }
      static parseLink(p271) {
        const vF9 = function (p272) {
          const v153 = (0, vP3.jb)((0, vP3.F)(p272)).link;
          const v154 = v153 ? (0, vP3.jb)((0, vP3.F)(v153)).deep_link_id : null;
          const v155 = (0, vP3.jb)((0, vP3.F)(p272)).deep_link_id;
          return (v155 ? (0, vP3.jb)((0, vP3.F)(v155)).link : null) || v155 || v154 || v153 || p272;
        }(p271);
        try {
          return new C19(vF9);
        } catch (e18) {
          return null;
        }
      }
    }
    function f64(p273) {
      return C19.parseLink(p273);
    }
    class C20 {
      constructor() {
        this.providerId = C20.PROVIDER_ID;
      }
      static credential(p274, p275) {
        return C16._fromEmailAndPassword(p274, p275);
      }
      static credentialWithLink(p276, p277) {
        const v156 = C19.parseLink(p277);
        f9(v156, "argument-error");
        return C16._fromEmailAndCode(p276, v156.code, v156.tenantId);
      }
    }
    C20.PROVIDER_ID = "password";
    C20.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
    C20.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
    class C21 {
      constructor(p278) {
        this.providerId = p278;
        this.defaultLanguageCode = null;
        this.customParameters = {};
      }
      setDefaultLanguage(p279) {
        this.defaultLanguageCode = p279;
      }
      setCustomParameters(p280) {
        this.customParameters = p280;
        return this;
      }
      getCustomParameters() {
        return this.customParameters;
      }
    }
    class C22 extends C21 {
      constructor() {
        super(...arguments);
        this.scopes = [];
      }
      addScope(p281) {
        if (!this.scopes.includes(p281)) {
          this.scopes.push(p281);
        }
        return this;
      }
      getScopes() {
        return [...this.scopes];
      }
    }
    class C23 extends C22 {
      static credentialFromJSON(p282) {
        const v157 = typeof p282 === "string" ? JSON.parse(p282) : p282;
        f9("providerId" in v157 && "signInMethod" in v157, "argument-error");
        return C17._fromParams(v157);
      }
      credential(p283) {
        return this._credential(Object.assign(Object.assign({}, p283), {
          nonce: p283.rawNonce
        }));
      }
      _credential(p284) {
        f9(p284.idToken || p284.accessToken, "argument-error");
        return C17._fromParams(Object.assign(Object.assign({}, p284), {
          providerId: this.providerId,
          signInMethod: this.providerId
        }));
      }
      static credentialFromResult(p285) {
        return C23.oauthCredentialFromTaggedObject(p285);
      }
      static credentialFromError(p286) {
        return C23.oauthCredentialFromTaggedObject(p286.customData || {});
      }
      static oauthCredentialFromTaggedObject(p287) {
        let {
          _tokenResponse: yC
        } = p287;
        if (!yC) {
          return null;
        }
        const {
          oauthIdToken: IC,
          oauthAccessToken: fC,
          oauthTokenSecret: ky,
          pendingToken: gC,
          nonce: AC,
          providerId: my
        } = yC;
        if (!fC && !ky && !IC && !gC) {
          return null;
        }
        if (!my) {
          return null;
        }
        try {
          return new C23(my)._credential({
            idToken: IC,
            accessToken: fC,
            nonce: AC,
            pendingToken: gC
          });
        } catch (e19) {
          return null;
        }
      }
    }
    class C24 extends C22 {
      constructor() {
        super("facebook.com");
      }
      static credential(p288) {
        return C17._fromParams({
          providerId: C24.PROVIDER_ID,
          signInMethod: C24.FACEBOOK_SIGN_IN_METHOD,
          accessToken: p288
        });
      }
      static credentialFromResult(p289) {
        return C24.credentialFromTaggedObject(p289);
      }
      static credentialFromError(p290) {
        return C24.credentialFromTaggedObject(p290.customData || {});
      }
      static credentialFromTaggedObject(p291) {
        let {
          _tokenResponse: yC
        } = p291;
        if (!yC || !("oauthAccessToken" in yC)) {
          return null;
        }
        if (!yC.oauthAccessToken) {
          return null;
        }
        try {
          return C24.credential(yC.oauthAccessToken);
        } catch (e20) {
          return null;
        }
      }
    }
    C24.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
    C24.PROVIDER_ID = "facebook.com";
    class C25 extends C22 {
      constructor() {
        super("google.com");
        this.addScope("profile");
      }
      static credential(p292, p293) {
        return C17._fromParams({
          providerId: C25.PROVIDER_ID,
          signInMethod: C25.GOOGLE_SIGN_IN_METHOD,
          idToken: p292,
          accessToken: p293
        });
      }
      static credentialFromResult(p294) {
        return C25.credentialFromTaggedObject(p294);
      }
      static credentialFromError(p295) {
        return C25.credentialFromTaggedObject(p295.customData || {});
      }
      static credentialFromTaggedObject(p296) {
        let {
          _tokenResponse: yC
        } = p296;
        if (!yC) {
          return null;
        }
        const {
          oauthIdToken: IC,
          oauthAccessToken: fC
        } = yC;
        if (!IC && !fC) {
          return null;
        }
        try {
          return C25.credential(IC, fC);
        } catch (e21) {
          return null;
        }
      }
    }
    C25.GOOGLE_SIGN_IN_METHOD = "google.com";
    C25.PROVIDER_ID = "google.com";
    class C26 extends C22 {
      constructor() {
        super("github.com");
      }
      static credential(p297) {
        return C17._fromParams({
          providerId: C26.PROVIDER_ID,
          signInMethod: C26.GITHUB_SIGN_IN_METHOD,
          accessToken: p297
        });
      }
      static credentialFromResult(p298) {
        return C26.credentialFromTaggedObject(p298);
      }
      static credentialFromError(p299) {
        return C26.credentialFromTaggedObject(p299.customData || {});
      }
      static credentialFromTaggedObject(p300) {
        let {
          _tokenResponse: yC
        } = p300;
        if (!yC || !("oauthAccessToken" in yC)) {
          return null;
        }
        if (!yC.oauthAccessToken) {
          return null;
        }
        try {
          return C26.credential(yC.oauthAccessToken);
        } catch (e22) {
          return null;
        }
      }
    }
    C26.GITHUB_SIGN_IN_METHOD = "github.com";
    C26.PROVIDER_ID = "github.com";
    class C27 extends C15 {
      constructor(p301, p302) {
        super(p301, p301);
        this.pendingToken = p302;
      }
      _getIdTokenResponse(p303) {
        return f63(p303, this.buildRequest());
      }
      _linkToIdToken(p304, p305) {
        const v158 = this.buildRequest();
        v158.idToken = p305;
        return f63(p304, v158);
      }
      _getReauthenticationResolver(p306) {
        const v159 = this.buildRequest();
        v159.autoCreate = false;
        return f63(p306, v159);
      }
      toJSON() {
        return {
          signInMethod: this.signInMethod,
          providerId: this.providerId,
          pendingToken: this.pendingToken
        };
      }
      static fromJSON(p307) {
        const v160 = typeof p307 === "string" ? JSON.parse(p307) : p307;
        const {
          providerId: IC,
          signInMethod: fC,
          pendingToken: ky
        } = v160;
        if (IC && fC && ky && IC === fC) {
          return new C27(IC, ky);
        } else {
          return null;
        }
      }
      static _create(p308, p309) {
        return new C27(p308, p309);
      }
      buildRequest() {
        return {
          requestUri: "http://localhost",
          returnSecureToken: true,
          pendingToken: this.pendingToken
        };
      }
    }
    class C28 extends C21 {
      constructor(p310) {
        f9(p310.startsWith("saml."), "argument-error");
        super(p310);
      }
      static credentialFromResult(p311) {
        return C28.samlCredentialFromTaggedObject(p311);
      }
      static credentialFromError(p312) {
        return C28.samlCredentialFromTaggedObject(p312.customData || {});
      }
      static credentialFromJSON(p313) {
        const v161 = C27.fromJSON(p313);
        f9(v161, "argument-error");
        return v161;
      }
      static samlCredentialFromTaggedObject(p314) {
        let {
          _tokenResponse: yC
        } = p314;
        if (!yC) {
          return null;
        }
        const {
          pendingToken: IC,
          providerId: fC
        } = yC;
        if (!IC || !fC) {
          return null;
        }
        try {
          return C27._create(fC, IC);
        } catch (e23) {
          return null;
        }
      }
    }
    class C29 extends C22 {
      constructor() {
        super("twitter.com");
      }
      static credential(p315, p316) {
        return C17._fromParams({
          providerId: C29.PROVIDER_ID,
          signInMethod: C29.TWITTER_SIGN_IN_METHOD,
          oauthToken: p315,
          oauthTokenSecret: p316
        });
      }
      static credentialFromResult(p317) {
        return C29.credentialFromTaggedObject(p317);
      }
      static credentialFromError(p318) {
        return C29.credentialFromTaggedObject(p318.customData || {});
      }
      static credentialFromTaggedObject(p319) {
        let {
          _tokenResponse: yC
        } = p319;
        if (!yC) {
          return null;
        }
        const {
          oauthAccessToken: IC,
          oauthTokenSecret: fC
        } = yC;
        if (!IC || !fC) {
          return null;
        }
        try {
          return C29.credential(IC, fC);
        } catch (e24) {
          return null;
        }
      }
    }
    async function f65(p320, p321) {
      return f19(p320, "POST", "/v1/accounts:signUp", f16(p320, p321));
    }
    C29.TWITTER_SIGN_IN_METHOD = "twitter.com";
    C29.PROVIDER_ID = "twitter.com";
    class C30 {
      constructor(p322) {
        this.user = p322.user;
        this.providerId = p322.providerId;
        this._tokenResponse = p322._tokenResponse;
        this.operationType = p322.operationType;
      }
      static async _fromIdTokenResponse(p323, p324, p325, fC = false) {
        const v162 = await C7._fromIdTokenResponse(p323, p325, fC);
        const vBI = f66(p325);
        return new C30({
          user: v162,
          providerId: vBI,
          _tokenResponse: p325,
          operationType: p324
        });
      }
      static async _forOperation(p326, p327, p328) {
        await p326._updateTokensIfNecessary(p328, true);
        const vBI2 = f66(p328);
        return new C30({
          user: p326,
          providerId: vBI2,
          _tokenResponse: p328,
          operationType: p327
        });
      }
    }
    function f66(p329) {
      if (p329.providerId) {
        return p329.providerId;
      } else if ("phoneNumber" in p329) {
        return "phone";
      } else {
        return null;
      }
    }
    async function f67(p330) {
      const vF512 = f51(p330);
      await vF512._initializationPromise;
      if (vF512.currentUser?.isAnonymous) {
        return new C30({
          user: vF512.currentUser,
          providerId: null,
          operationType: "signIn"
        });
      }
      const v163 = await f65(vF512, {
        returnSecureToken: true
      });
      const v164 = await C30._fromIdTokenResponse(vF512, "signIn", v163, true);
      await vF512._updateCurrentUser(v164.user);
      return v164;
    }
    class C31 extends vP3.i {
      constructor(p331, p332, p333, p334) {
        super(p332.code, p332.message);
        this.operationType = p333;
        this.user = p334;
        Object.setPrototypeOf(this, C31.prototype);
        this.customData = {
          appName: p331.name,
          tenantId: p331.tenantId ?? undefined,
          _serverResponse: p332.customData._serverResponse,
          operationType: p333
        };
      }
      static _fromErrorAndOperation(p335, p336, p337, p338) {
        return new C31(p335, p336, p337, p338);
      }
    }
    function f68(p339, p340, p341, p342) {
      return (p340 === "reauthenticate" ? p341._getReauthenticationResolver(p339) : p341._getIdTokenResponse(p339)).catch(p343 => {
        if (p343.code === `auth/multi-factor-auth-required`) {
          throw C31._fromErrorAndOperation(p339, p343, p340, p342);
        }
        throw p343;
      });
    }
    function f69(p344) {
      return new Set(p344.map(p345 => {
        let {
          providerId: yC
        } = p345;
        return yC;
      }).filter(p346 => !!p346));
    }
    async function f70(p347, p348) {
      const v165 = (0, vP3.R)(p347);
      await f72(true, v165, p348);
      const {
        providerUserInfo: ky
      } = await async function (p349, p350) {
        return f17(p349, "POST", "/v1/accounts:update", p350);
      }(v165.auth, {
        idToken: await v165.getIdToken(),
        deleteProvider: [p348]
      });
      const vF69 = f69(ky || []);
      v165.providerData = v165.providerData.filter(p351 => vF69.has(p351.providerId));
      if (!vF69.has("phone")) {
        v165.phoneNumber = null;
      }
      await v165.auth._persistUserIfCurrent(v165);
      return v165;
    }
    async function f71(p352, p353, IC = false) {
      const v166 = await f27(p352, p353._linkToIdToken(p352.auth, await p352.getIdToken()), IC);
      return C30._forOperation(p352, "link", v166);
    }
    async function f72(p354, p355, p356) {
      await f28(p355);
      const v167 = p354 === false ? "provider-already-linked" : "no-such-provider";
      f9(f69(p355.providerData).has(p356) === p354, p355.auth, v167);
    }
    async function f73(p357, p358, IC = false) {
      const {
        auth: fC
      } = p357;
      const vLSReauthenticate = "reauthenticate";
      try {
        const v168 = await f27(p357, f68(fC, vLSReauthenticate, p358, p357), IC);
        f9(v168.idToken, fC, "internal-error");
        const vF262 = f26(v168.idToken);
        f9(vF262, fC, "internal-error");
        const {
          sub: my
        } = vF262;
        f9(p357.uid === my, fC, "user-mismatch");
        return C30._forOperation(p357, vLSReauthenticate, v168);
      } catch (e25) {
        if (e25?.code === `auth/user-not-found`) {
          f4(fC, "user-mismatch");
        }
        throw e25;
      }
    }
    async function f74(p359, p360, IC = false) {
      const vLSSignIn = "signIn";
      const v169 = await f68(p359, vLSSignIn, p360);
      const v170 = await C30._fromIdTokenResponse(p359, vLSSignIn, v169);
      if (!IC) {
        await p359._updateCurrentUser(v170.user);
      }
      return v170;
    }
    async function f75(p361, p362) {
      return f74(f51(p361), p362);
    }
    async function f76(p363, p364) {
      const v171 = (0, vP3.R)(p363);
      await f72(false, v171, p364.providerId);
      return f71(v171, p364);
    }
    async function f77(p365, p366) {
      return f73((0, vP3.R)(p365), p366);
    }
    async function f78(p367, p368) {
      const vF513 = f51(p367);
      const v172 = await async function (p369, p370) {
        return f19(p369, "POST", "/v1/accounts:signInWithCustomToken", f16(p369, p370));
      }(vF513, {
        token: p368,
        returnSecureToken: true
      });
      const v173 = await C30._fromIdTokenResponse(vF513, "signIn", v172);
      await vF513._updateCurrentUser(v173.user);
      return v173;
    }
    class C32 {
      constructor(p371, p372) {
        this.factorId = p371;
        this.uid = p372.mfaEnrollmentId;
        this.enrollmentTime = new Date(p372.enrolledAt).toUTCString();
        this.displayName = p372.displayName;
      }
      static _fromServerResponse(p373, p374) {
        if ("phoneInfo" in p374) {
          return C33._fromServerResponse(p373, p374);
        } else if ("totpInfo" in p374) {
          return C34._fromServerResponse(p373, p374);
        } else {
          return f4(p373, "internal-error");
        }
      }
    }
    class C33 extends C32 {
      constructor(p375) {
        super("phone", p375);
        this.phoneNumber = p375.phoneInfo;
      }
      static _fromServerResponse(p376, p377) {
        return new C33(p377);
      }
    }
    class C34 extends C32 {
      constructor(p378) {
        super("totp", p378);
      }
      static _fromServerResponse(p379, p380) {
        return new C34(p380);
      }
    }
    function f79(p381, p382, p383) {
      f9(p383.url?.length > 0, p381, "invalid-continue-uri");
      f9(typeof p383.dynamicLinkDomain === "undefined" || p383.dynamicLinkDomain.length > 0, p381, "invalid-dynamic-link-domain");
      p382.continueUrl = p383.url;
      p382.dynamicLinkDomain = p383.dynamicLinkDomain;
      p382.canHandleCodeInApp = p383.handleCodeInApp;
      if (p383.iOS) {
        f9(p383.iOS.bundleId.length > 0, p381, "missing-ios-bundle-id");
        p382.iOSBundleId = p383.iOS.bundleId;
      }
      if (p383.android) {
        f9(p383.android.packageName.length > 0, p381, "missing-android-pkg-name");
        p382.androidInstallApp = p383.android.installApp;
        p382.androidMinimumVersionCode = p383.android.minimumVersion;
        p382.androidPackageName = p383.android.packageName;
      }
    }
    async function f80(p384, p385, p386) {
      const vF514 = f51(p384);
      const vO19 = {
        requestType: "PASSWORD_RESET",
        email: p385,
        clientType: "CLIENT_TYPE_WEB"
      };
      if (vF514._getRecaptchaConfig()?.emailPasswordEnabled) {
        const v174 = await f50(vF514, vO19, "getOobCode", true);
        if (p386) {
          f79(vF514, v174, p386);
        }
        await f61(vF514, v174);
      } else {
        if (p386) {
          f79(vF514, vO19, p386);
        }
        await f61(vF514, vO19).catch(async p387 => {
          if (p387.code !== `auth/missing-recaptcha-token`) {
            return Promise.reject(p387);
          }
          {
            console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");
            const v175 = await f50(vF514, vO19, "getOobCode", true);
            if (p386) {
              f79(vF514, v175, p386);
            }
            await f61(vF514, v175);
          }
        });
      }
    }
    async function f81(p388, p389, p390) {
      await f57((0, vP3.R)(p388), {
        oobCode: p389,
        newPassword: p390
      });
    }
    async function f82(p391, p392) {
      await async function (p393, p394) {
        return f17(p393, "POST", "/v1/accounts:update", f16(p393, p394));
      }((0, vP3.R)(p391), {
        oobCode: p392
      });
    }
    async function f83(p395, p396) {
      const v176 = (0, vP3.R)(p395);
      const v177 = await f57(v176, {
        oobCode: p396
      });
      const v178 = v177.requestType;
      f9(v178, v176, "internal-error");
      switch (v178) {
        case "EMAIL_SIGNIN":
          break;
        case "VERIFY_AND_CHANGE_EMAIL":
          f9(v177.newEmail, v176, "internal-error");
          break;
        case "REVERT_SECOND_FACTOR_ADDITION":
          f9(v177.mfaInfo, v176, "internal-error");
        default:
          f9(v177.email, v176, "internal-error");
      }
      let v179 = null;
      if (v177.mfaInfo) {
        v179 = C32._fromServerResponse(f51(v176), v177.mfaInfo);
      }
      return {
        data: {
          email: (v177.requestType === "VERIFY_AND_CHANGE_EMAIL" ? v177.newEmail : v177.email) || null,
          previousEmail: (v177.requestType === "VERIFY_AND_CHANGE_EMAIL" ? v177.email : v177.newEmail) || null,
          multiFactorInfo: v179
        },
        operation: v178
      };
    }
    async function f84(p397, p398) {
      const {
        data: IC
      } = await f83((0, vP3.R)(p397), p398);
      return IC.email;
    }
    async function f85(p399, p400, p401) {
      const vF515 = f51(p399);
      const vO20 = {
        returnSecureToken: true,
        email: p400,
        password: p401,
        clientType: "CLIENT_TYPE_WEB"
      };
      let v180;
      if (vF515._getRecaptchaConfig()?.emailPasswordEnabled) {
        const v181 = await f50(vF515, vO20, "signUpPassword");
        v180 = f65(vF515, v181);
      } else {
        v180 = f65(vF515, vO20).catch(async p402 => {
          if (p402.code === `auth/missing-recaptcha-token`) {
            console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");
            const v182 = await f50(vF515, vO20, "signUpPassword");
            return f65(vF515, v182);
          }
          return Promise.reject(p402);
        });
      }
      const v183 = await v180.catch(p403 => Promise.reject(p403));
      const v184 = await C30._fromIdTokenResponse(vF515, "signIn", v183);
      await vF515._updateCurrentUser(v184.user);
      return v184;
    }
    function f86(p404, p405, p406) {
      return f75((0, vP3.R)(p404), C20.credential(p405, p406));
    }
    async function f87(p407, p408, p409) {
      const vF516 = f51(p407);
      const vO21 = {
        requestType: "EMAIL_SIGNIN",
        email: p408,
        clientType: "CLIENT_TYPE_WEB"
      };
      function f88(p410, p411) {
        f9(p411.handleCodeInApp, vF516, "argument-error");
        if (p411) {
          f79(vF516, p410, p411);
        }
      }
      if (vF516._getRecaptchaConfig()?.emailPasswordEnabled) {
        const v185 = await f50(vF516, vO21, "getOobCode", true);
        f88(v185, p409);
        await f62(vF516, v185);
      } else {
        f88(vO21, p409);
        await f62(vF516, vO21).catch(async p412 => {
          if (p412.code !== `auth/missing-recaptcha-token`) {
            return Promise.reject(p412);
          }
          {
            console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");
            const v186 = await f50(vF516, vO21, "getOobCode", true);
            f88(v186, p409);
            await f62(vF516, v186);
          }
        });
      }
    }
    function f89(p413, p414) {
      const v187 = C19.parseLink(p414);
      return v187?.operation === "EMAIL_SIGNIN";
    }
    async function f90(p415, p416, p417) {
      const v188 = (0, vP3.R)(p415);
      const v189 = C20.credentialWithLink(p416, p417 || f12());
      f9(v189._tenantId === (v188.tenantId || null), v188, "tenant-id-mismatch");
      return f75(v188, v189);
    }
    async function f91(p418, p419) {
      const vO22 = {
        identifier: p419,
        continueUri: f13() ? f12() : "http://localhost"
      };
      const {
        signinMethods: ky
      } = await async function (p420, p421) {
        return f17(p420, "POST", "/v1/accounts:createAuthUri", f16(p420, p421));
      }((0, vP3.R)(p418), vO22);
      return ky || [];
    }
    async function f92(p422, p423) {
      const v190 = (0, vP3.R)(p422);
      const vO23 = {
        requestType: "VERIFY_EMAIL",
        idToken: await p422.getIdToken()
      };
      if (p423) {
        f79(v190.auth, vO23, p423);
      }
      const {
        email: gC
      } = await async function (p424, p425) {
        return f60(p424, p425);
      }(v190.auth, vO23);
      if (gC !== p422.email) {
        await p422.reload();
      }
    }
    async function f93(p426, p427, p428) {
      const v191 = (0, vP3.R)(p426);
      const vO24 = {
        requestType: "VERIFY_AND_CHANGE_EMAIL",
        idToken: await p426.getIdToken(),
        newEmail: p427
      };
      if (p428) {
        f79(v191.auth, vO24, p428);
      }
      const {
        email: AC
      } = await async function (p429, p430) {
        return f60(p429, p430);
      }(v191.auth, vO24);
      if (AC !== p426.email) {
        await p426.reload();
      }
    }
    async function f94(p431, p432) {
      let {
        displayName: IC,
        photoURL: ky
      } = p432;
      if (IC === undefined && ky === undefined) {
        return;
      }
      const v192 = (0, vP3.R)(p431);
      const vO25 = {
        idToken: await v192.getIdToken(),
        displayName: IC,
        photoUrl: ky,
        returnSecureToken: true
      };
      const v193 = await f27(v192, async function (p433, p434) {
        return f17(p433, "POST", "/v1/accounts:update", p434);
      }(v192.auth, vO25));
      v192.displayName = v193.displayName || null;
      v192.photoURL = v193.photoUrl || null;
      const v194 = v192.providerData.find(p435 => {
        let {
          providerId: yC
        } = p435;
        return yC === "password";
      });
      if (v194) {
        v194.displayName = v192.displayName;
        v194.photoURL = v192.photoURL;
      }
      await v192._updateTokensIfNecessary(v193);
    }
    function f95(p436, p437) {
      return f97((0, vP3.R)(p436), p437, null);
    }
    function f96(p438, p439) {
      return f97((0, vP3.R)(p438), null, p439);
    }
    async function f97(p440, p441, p442) {
      const {
        auth: fC
      } = p440;
      const vO26 = {
        idToken: await p440.getIdToken(),
        returnSecureToken: true
      };
      if (p441) {
        vO26.email = p441;
      }
      if (p442) {
        vO26.password = p442;
      }
      const v195 = await f27(p440, f58(fC, vO26));
      await p440._updateTokensIfNecessary(v195, true);
    }
    class C35 {
      constructor(p443, p444, IC = {}) {
        this.isNewUser = p443;
        this.providerId = p444;
        this.profile = IC;
      }
    }
    class C36 extends C35 {
      constructor(p445, p446, p447, p448) {
        super(p445, p446, p447);
        this.username = p448;
      }
    }
    class C37 extends C35 {
      constructor(p449, p450) {
        super(p449, "facebook.com", p450);
      }
    }
    class C38 extends C36 {
      constructor(p451, p452) {
        super(p451, "github.com", p452, typeof p452?.login === "string" ? p452?.login : null);
      }
    }
    class C39 extends C35 {
      constructor(p453, p454) {
        super(p453, "google.com", p454);
      }
    }
    class C40 extends C36 {
      constructor(p455, p456, p457) {
        super(p455, "twitter.com", p456, p457);
      }
    }
    function f98(p458) {
      const {
        user: yC,
        _tokenResponse: IC
      } = p458;
      if (yC.isAnonymous && !IC) {
        return {
          providerId: null,
          isNewUser: false,
          profile: null
        };
      } else {
        return function (p459) {
          if (!p459) {
            return null;
          }
          const {
            providerId: fC
          } = p459;
          const v196 = p459.rawUserInfo ? JSON.parse(p459.rawUserInfo) : {};
          const v197 = p459.isNewUser || p459.kind === "identitytoolkit#SignupNewUserResponse";
          if (!fC && p459?.idToken) {
            const v198 = f26(p459.idToken)?.firebase?.sign_in_provider;
            if (v198) {
              return new C35(v197, v198 !== "anonymous" && v198 !== "custom" ? v198 : null);
            }
          }
          if (!fC) {
            return null;
          }
          switch (fC) {
            case "facebook.com":
              return new C37(v197, v196);
            case "github.com":
              return new C38(v197, v196);
            case "google.com":
              return new C39(v197, v196);
            case "twitter.com":
              return new C40(v197, v196, p459.screenName || null);
            case "custom":
            case "anonymous":
              return new C35(v197, null);
            default:
              return new C35(v197, fC, v196);
          }
        }(IC);
      }
    }
    function f99(p460, p461) {
      return (0, vP3.R)(p460).setPersistence(p461);
    }
    function f100(p462) {
      return f51(p462).initializeRecaptchaConfig();
    }
    function f101(p463, p464, p465, p466) {
      return (0, vP3.R)(p463).onIdTokenChanged(p464, p465, p466);
    }
    function f102(p467, p468, p469) {
      return (0, vP3.R)(p467).beforeAuthStateChanged(p468, p469);
    }
    function f103(p470, p471, p472, p473) {
      return (0, vP3.R)(p470).onAuthStateChanged(p471, p472, p473);
    }
    function f104(p474) {
      (0, vP3.R)(p474).useDeviceLanguage();
    }
    function f105(p475, p476) {
      return (0, vP3.R)(p475).updateCurrentUser(p476);
    }
    function f106(p477) {
      return (0, vP3.R)(p477).signOut();
    }
    async function f107(p478) {
      return (0, vP3.R)(p478).delete();
    }
    class C41 {
      constructor(p479, p480, p481) {
        this.type = p479;
        this.credential = p480;
        this.auth = p481;
      }
      static _fromIdtoken(p482, p483) {
        return new C41("enroll", p482, p483);
      }
      static _fromMfaPendingCredential(p484) {
        return new C41("signin", p484);
      }
      toJSON() {
        const v199 = this.type === "enroll" ? "idToken" : "pendingCredential";
        return {
          multiFactorSession: {
            [v199]: this.credential
          }
        };
      }
      static fromJSON(p485) {
        if (p485?.multiFactorSession) {
          if (p485.multiFactorSession?.pendingCredential) {
            return C41._fromMfaPendingCredential(p485.multiFactorSession.pendingCredential);
          }
          if (p485.multiFactorSession?.idToken) {
            return C41._fromIdtoken(p485.multiFactorSession.idToken);
          }
        }
        return null;
      }
    }
    class C42 {
      constructor(p486, p487, p488) {
        this.session = p486;
        this.hints = p487;
        this.signInResolver = p488;
      }
      static _fromError(p489, p490) {
        const vF517 = f51(p489);
        const v200 = p490.customData._serverResponse;
        const v201 = (v200.mfaInfo || []).map(p491 => C32._fromServerResponse(vF517, p491));
        f9(v200.mfaPendingCredential, vF517, "internal-error");
        const v202 = C41._fromMfaPendingCredential(v200.mfaPendingCredential);
        return new C42(v202, v201, async p492 => {
          const v203 = await p492._process(vF517, v202);
          delete v200.mfaInfo;
          delete v200.mfaPendingCredential;
          const v204 = Object.assign(Object.assign({}, v200), {
            idToken: v203.idToken,
            refreshToken: v203.refreshToken
          });
          switch (p490.operationType) {
            case "signIn":
              const v205 = await C30._fromIdTokenResponse(vF517, p490.operationType, v204);
              await vF517._updateCurrentUser(v205.user);
              return v205;
            case "reauthenticate":
              f9(p490.user, vF517, "internal-error");
              return C30._forOperation(p490.user, p490.operationType, v204);
            default:
              f4(vF517, "internal-error");
          }
        });
      }
      async resolveSignIn(p493) {
        const vP493 = p493;
        return this.signInResolver(vP493);
      }
    }
    function f108(p494, p495) {
      const v206 = (0, vP3.R)(p494);
      const vP495 = p495;
      f9(p495.customData.operationType, v206, "argument-error");
      f9(vP495.customData._serverResponse?.mfaPendingCredential, v206, "argument-error");
      return C42._fromError(v206, vP495);
    }
    class C43 {
      constructor(p496) {
        this.user = p496;
        this.enrolledFactors = [];
        p496._onReload(p497 => {
          if (p497.mfaInfo) {
            this.enrolledFactors = p497.mfaInfo.map(p498 => C32._fromServerResponse(p496.auth, p498));
          }
        });
      }
      static _fromUser(p499) {
        return new C43(p499);
      }
      async getSession() {
        return C41._fromIdtoken(await this.user.getIdToken(), this.user.auth);
      }
      async enroll(p500, p501) {
        const vP500 = p500;
        const v207 = await this.getSession();
        const v208 = await f27(this.user, vP500._process(this.user.auth, v207, p501));
        await this.user._updateTokensIfNecessary(v208);
        return this.user.reload();
      }
      async unenroll(p502) {
        const v209 = typeof p502 === "string" ? p502 : p502.uid;
        const v210 = await this.user.getIdToken();
        try {
          const v211 = await f27(this.user, (v212 = this.user.auth, v213 = {
            idToken: v210,
            mfaEnrollmentId: v209
          }, f17(v212, "POST", "/v2/accounts/mfaEnrollment:withdraw", f16(v212, v213))));
          this.enrolledFactors = this.enrolledFactors.filter(p503 => {
            let {
              uid: IC
            } = p503;
            return IC !== v209;
          });
          await this.user._updateTokensIfNecessary(v211);
          await this.user.reload();
        } catch (e26) {
          throw e26;
        }
        var v212;
        var v213;
      }
    }
    const v214 = new WeakMap();
    function f109(p504) {
      const v215 = (0, vP3.R)(p504);
      if (!v214.has(v215)) {
        v214.set(v215, C43._fromUser(v215));
      }
      return v214.get(v215);
    }
    const vLS__sak = "__sak";
    class C44 {
      constructor(p505, p506) {
        this.storageRetriever = p505;
        this.type = p506;
      }
      _isAvailable() {
        try {
          if (this.storage) {
            this.storage.setItem(vLS__sak, "1");
            this.storage.removeItem(vLS__sak);
            return Promise.resolve(true);
          } else {
            return Promise.resolve(false);
          }
        } catch (e27) {
          return Promise.resolve(false);
        }
      }
      _set(p507, p508) {
        this.storage.setItem(p507, JSON.stringify(p508));
        return Promise.resolve();
      }
      _get(p509) {
        const v216 = this.storage.getItem(p509);
        return Promise.resolve(v216 ? JSON.parse(v216) : null);
      }
      _remove(p510) {
        this.storage.removeItem(p510);
        return Promise.resolve();
      }
      get storage() {
        return this.storageRetriever();
      }
    }
    class C45 extends C44 {
      constructor() {
        super(() => window.localStorage, "LOCAL");
        this.boundEventHandler = (p511, p512) => this.onStorageEvent(p511, p512);
        this.listeners = {};
        this.localCache = {};
        this.pollTimer = null;
        this.safariLocalStorageNotSynced = function () {
          const v217 = (0, vP3.T)();
          return f35(v217) || f41(v217);
        }() && function () {
          try {
            return !!window && window !== window.top;
          } catch (e28) {
            return false;
          }
        }();
        this.fallbackToPolling = f42();
        this._shouldAllowMigration = true;
      }
      forAllChangedKeys(p513) {
        for (const v218 of Object.keys(this.listeners)) {
          const v219 = this.storage.getItem(v218);
          const v220 = this.localCache[v218];
          if (v219 !== v220) {
            p513(v218, v220, v219);
          }
        }
      }
      onStorageEvent(p514, yC = false) {
        if (!p514.key) {
          this.forAllChangedKeys((p515, p516, p517) => {
            this.notifyListeners(p515, p517);
          });
          return;
        }
        const v221 = p514.key;
        if (yC) {
          this.detachListener();
        } else {
          this.stopPolling();
        }
        if (this.safariLocalStorageNotSynced) {
          const v222 = this.storage.getItem(v221);
          if (p514.newValue !== v222) {
            if (p514.newValue !== null) {
              this.storage.setItem(v221, p514.newValue);
            } else {
              this.storage.removeItem(v221);
            }
          } else if (this.localCache[v221] === p514.newValue && !yC) {
            return;
          }
        }
        const vF10 = () => {
          const v223 = this.storage.getItem(v221);
          if (yC || this.localCache[v221] !== v223) {
            this.notifyListeners(v221, v223);
          }
        };
        const v224 = this.storage.getItem(v221);
        if ((0, vP3.ab)() && document.documentMode === 10 && v224 !== p514.newValue && p514.newValue !== p514.oldValue) {
          setTimeout(vF10, 10);
        } else {
          vF10();
        }
      }
      notifyListeners(p518, p519) {
        this.localCache[p518] = p519;
        const v225 = this.listeners[p518];
        if (v225) {
          for (const v226 of Array.from(v225)) {
            v226(p519 ? JSON.parse(p519) : p519);
          }
        }
      }
      startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(() => {
          this.forAllChangedKeys((p520, p521, p522) => {
            this.onStorageEvent(new StorageEvent("storage", {
              key: p520,
              oldValue: p521,
              newValue: p522
            }), true);
          });
        }, 1000);
      }
      stopPolling() {
        if (this.pollTimer) {
          clearInterval(this.pollTimer);
          this.pollTimer = null;
        }
      }
      attachListener() {
        window.addEventListener("storage", this.boundEventHandler);
      }
      detachListener() {
        window.removeEventListener("storage", this.boundEventHandler);
      }
      _addListener(p523, p524) {
        if (Object.keys(this.listeners).length === 0) {
          if (this.fallbackToPolling) {
            this.startPolling();
          } else {
            this.attachListener();
          }
        }
        if (!this.listeners[p523]) {
          this.listeners[p523] = new Set();
          this.localCache[p523] = this.storage.getItem(p523);
        }
        this.listeners[p523].add(p524);
      }
      _removeListener(p525, p526) {
        if (this.listeners[p525]) {
          this.listeners[p525].delete(p526);
          if (this.listeners[p525].size === 0) {
            delete this.listeners[p525];
          }
        }
        if (Object.keys(this.listeners).length === 0) {
          this.detachListener();
          this.stopPolling();
        }
      }
      async _set(p527, p528) {
        await super._set(p527, p528);
        this.localCache[p527] = JSON.stringify(p528);
      }
      async _get(p529) {
        const v227 = await super._get(p529);
        this.localCache[p529] = JSON.stringify(v227);
        return v227;
      }
      async _remove(p530) {
        await super._remove(p530);
        delete this.localCache[p530];
      }
    }
    C45.type = "LOCAL";
    const vC45 = C45;
    class C46 extends C44 {
      constructor() {
        super(() => window.sessionStorage, "SESSION");
      }
      _addListener(p531, p532) {}
      _removeListener(p533, p534) {}
    }
    C46.type = "SESSION";
    const vC46 = C46;
    class C47 {
      constructor(p535) {
        this.eventTarget = p535;
        this.handlersMap = {};
        this.boundEventHandler = this.handleEvent.bind(this);
      }
      static _getInstance(p536) {
        const v228 = this.receivers.find(p537 => p537.isListeningto(p536));
        if (v228) {
          return v228;
        }
        const v229 = new C47(p536);
        this.receivers.push(v229);
        return v229;
      }
      isListeningto(p538) {
        return this.eventTarget === p538;
      }
      async handleEvent(p539) {
        const vP539 = p539;
        const {
          eventId: IC,
          eventType: fC,
          data: ky
        } = vP539.data;
        const v230 = this.handlersMap[fC];
        if (!v230?.size) {
          return;
        }
        vP539.ports[0].postMessage({
          status: "ack",
          eventId: IC,
          eventType: fC
        });
        const v231 = Array.from(v230).map(async p540 => p540(vP539.origin, ky));
        const v232 = await function (p541) {
          return Promise.all(p541.map(async p542 => {
            try {
              return {
                fulfilled: true,
                value: await p542
              };
            } catch (e29) {
              return {
                fulfilled: false,
                reason: e29
              };
            }
          }));
        }(v231);
        vP539.ports[0].postMessage({
          status: "done",
          eventId: IC,
          eventType: fC,
          response: v232
        });
      }
      _subscribe(p543, p544) {
        if (Object.keys(this.handlersMap).length === 0) {
          this.eventTarget.addEventListener("message", this.boundEventHandler);
        }
        this.handlersMap[p543] ||= new Set();
        this.handlersMap[p543].add(p544);
      }
      _unsubscribe(p545, p546) {
        if (this.handlersMap[p545] && p546) {
          this.handlersMap[p545].delete(p546);
        }
        if (!p546 || this.handlersMap[p545].size === 0) {
          delete this.handlersMap[p545];
        }
        if (Object.keys(this.handlersMap).length === 0) {
          this.eventTarget.removeEventListener("message", this.boundEventHandler);
        }
      }
    }
    function f110(CC = "", yC = 10) {
      let vLS = "";
      for (let vLN02 = 0; vLN02 < yC; vLN02++) {
        vLS += Math.floor(Math.random() * 10);
      }
      return CC + vLS;
    }
    C47.receivers = [];
    class C48 {
      constructor(p547) {
        this.target = p547;
        this.handlers = new Set();
      }
      removeMessageHandler(p548) {
        if (p548.messageChannel) {
          p548.messageChannel.port1.removeEventListener("message", p548.KI);
          p548.messageChannel.port1.close();
        }
        this.handlers.delete(p548);
      }
      async _send(p549, p550, IC = 50) {
        const v233 = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
        if (!v233) {
          throw new Error("connection_unavailable");
        }
        let v234;
        let v235;
        return new Promise((p551, p552) => {
          const vF110 = f110("", 20);
          v233.port1.start();
          const vSetTimeout = setTimeout(() => {
            p552(new Error("unsupported_event"));
          }, IC);
          v235 = {
            messageChannel: v233,
            KI(p553) {
              const vP553 = p553;
              if (vP553.data.eventId === vF110) {
                switch (vP553.data.status) {
                  case "ack":
                    clearTimeout(vSetTimeout);
                    v234 = setTimeout(() => {
                      p552(new Error("timeout"));
                    }, 3000);
                    break;
                  case "done":
                    clearTimeout(v234);
                    p551(vP553.data.response);
                    break;
                  default:
                    clearTimeout(vSetTimeout);
                    clearTimeout(v234);
                    p552(new Error("invalid_response"));
                }
              }
            }
          };
          this.handlers.add(v235);
          v233.port1.addEventListener("message", v235.KI);
          this.target.postMessage({
            eventType: p549,
            eventId: vF110,
            data: p550
          }, [v233.port2]);
        }).finally(() => {
          if (v235) {
            this.removeMessageHandler(v235);
          }
        });
      }
    }
    function f111() {
      return window;
    }
    function f112() {
      return typeof f111().WorkerGlobalScope !== "undefined" && typeof f111().importScripts === "function";
    }
    const vLSFirebaseLocalStorage = "firebaseLocalStorageDb";
    const vLSFirebaseLocalStorage2 = "firebaseLocalStorage";
    const vLSFbase_key = "fbase_key";
    class C49 {
      constructor(p554) {
        this.request = p554;
      }
      toPromise() {
        return new Promise((p555, p556) => {
          this.request.addEventListener("success", () => {
            p555(this.request.result);
          });
          this.request.addEventListener("error", () => {
            p556(this.request.error);
          });
        });
      }
    }
    function f113(p557, p558) {
      return p557.transaction([vLSFirebaseLocalStorage2], p558 ? "readwrite" : "readonly").objectStore(vLSFirebaseLocalStorage2);
    }
    function f114() {
      const v236 = indexedDB.open(vLSFirebaseLocalStorage, 1);
      return new Promise((p559, p560) => {
        v236.addEventListener("error", () => {
          p560(v236.error);
        });
        v236.addEventListener("upgradeneeded", () => {
          const v237 = v236.result;
          try {
            v237.createObjectStore(vLSFirebaseLocalStorage2, {
              keyPath: vLSFbase_key
            });
          } catch (e30) {
            p560(e30);
          }
        });
        v236.addEventListener("success", async () => {
          const v238 = v236.result;
          if (v238.objectStoreNames.contains(vLSFirebaseLocalStorage2)) {
            p559(v238);
          } else {
            v238.close();
            await function () {
              const v239 = indexedDB.deleteDatabase(vLSFirebaseLocalStorage);
              return new C49(v239).toPromise();
            }();
            p559(await f114());
          }
        });
      });
    }
    async function f115(p561, p562, p563) {
      const v240 = f113(p561, true).put({
        [vLSFbase_key]: p562,
        value: p563
      });
      return new C49(v240).toPromise();
    }
    function f116(p564, p565) {
      const v241 = f113(p564, true).delete(p565);
      return new C49(v241).toPromise();
    }
    class C50 {
      constructor() {
        this.type = "LOCAL";
        this._shouldAllowMigration = true;
        this.listeners = {};
        this.localCache = {};
        this.pollTimer = null;
        this.pendingWrites = 0;
        this.receiver = null;
        this.sender = null;
        this.serviceWorkerReceiverAvailable = false;
        this.activeServiceWorker = null;
        this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {}, () => {});
      }
      async _openDb() {
        this.db ||= await f114();
        return this.db;
      }
      async _withRetries(p566) {
        let vLN03 = 0;
        while (true) {
          try {
            const v242 = await this._openDb();
            return await p566(v242);
          } catch (e31) {
            if (vLN03++ > 3) {
              throw e31;
            }
            if (this.db) {
              this.db.close();
              this.db = undefined;
            }
          }
        }
      }
      async initializeServiceWorkerMessaging() {
        if (f112()) {
          return this.initializeReceiver();
        } else {
          return this.initializeSender();
        }
      }
      async initializeReceiver() {
        this.receiver = C47._getInstance(f112() ? self : null);
        this.receiver._subscribe("keyChanged", async (p567, p568) => ({
          keyProcessed: (await this._poll()).includes(p568.key)
        }));
        this.receiver._subscribe("ping", async (p569, p570) => ["keyChanged"]);
      }
      async initializeSender() {
        var v243;
        this.activeServiceWorker = await async function () {
          if (!navigator?.serviceWorker) {
            return null;
          }
          try {
            return (await navigator.serviceWorker.ready).active;
          } catch (e32) {
            return null;
          }
        }();
        if (!this.activeServiceWorker) {
          return;
        }
        this.sender = new C48(this.activeServiceWorker);
        const v244 = await this.sender._send("ping", {}, 800);
        if (v244 && v244[0]?.fulfilled && ((v243 = v244[0]) === null || v243 === undefined ? undefined : v243.value.includes("keyChanged"))) {
          this.serviceWorkerReceiverAvailable = true;
        }
      }
      async notifyServiceWorker(p571) {
        if (this.sender && this.activeServiceWorker && function () {
          return navigator?.serviceWorker?.controller || null;
        }() === this.activeServiceWorker) {
          try {
            await this.sender._send("keyChanged", {
              key: p571
            }, this.serviceWorkerReceiverAvailable ? 800 : 50);
          } catch (e33) {}
        }
      }
      async _isAvailable() {
        try {
          if (!indexedDB) {
            return false;
          }
          const v245 = await f114();
          await f115(v245, vLS__sak, "1");
          await f116(v245, vLS__sak);
          return true;
        } catch (e34) {}
        return false;
      }
      async _withPendingWrite(p572) {
        this.pendingWrites++;
        try {
          await p572();
        } finally {
          this.pendingWrites--;
        }
      }
      async _set(p573, p574) {
        return this._withPendingWrite(async () => {
          await this._withRetries(p575 => f115(p575, p573, p574));
          this.localCache[p573] = p574;
          return this.notifyServiceWorker(p573);
        });
      }
      async _get(p576) {
        const v246 = await this._withRetries(p577 => async function (p578, p579) {
          const v247 = f113(p578, false).get(p579);
          const v248 = await new C49(v247).toPromise();
          if (v248 === undefined) {
            return null;
          } else {
            return v248.value;
          }
        }(p577, p576));
        this.localCache[p576] = v246;
        return v246;
      }
      async _remove(p580) {
        return this._withPendingWrite(async () => {
          await this._withRetries(p581 => f116(p581, p580));
          delete this.localCache[p580];
          return this.notifyServiceWorker(p580);
        });
      }
      async _poll() {
        const v249 = await this._withRetries(p582 => {
          const v250 = f113(p582, false).getAll();
          return new C49(v250).toPromise();
        });
        if (!v249) {
          return [];
        }
        if (this.pendingWrites !== 0) {
          return [];
        }
        const vA4 = [];
        const v251 = new Set();
        for (const {
          fbase_key: fC,
          value: ky
        } of v249) {
          v251.add(fC);
          if (JSON.stringify(this.localCache[fC]) !== JSON.stringify(ky)) {
            this.notifyListeners(fC, ky);
            vA4.push(fC);
          }
        }
        for (const v252 of Object.keys(this.localCache)) {
          if (this.localCache[v252] && !v251.has(v252)) {
            this.notifyListeners(v252, null);
            vA4.push(v252);
          }
        }
        return vA4;
      }
      notifyListeners(p583, p584) {
        this.localCache[p583] = p584;
        const v253 = this.listeners[p583];
        if (v253) {
          for (const v254 of Array.from(v253)) {
            v254(p584);
          }
        }
      }
      startPolling() {
        this.stopPolling();
        this.pollTimer = setInterval(async () => this._poll(), 800);
      }
      stopPolling() {
        if (this.pollTimer) {
          clearInterval(this.pollTimer);
          this.pollTimer = null;
        }
      }
      _addListener(p585, p586) {
        if (Object.keys(this.listeners).length === 0) {
          this.startPolling();
        }
        if (!this.listeners[p585]) {
          this.listeners[p585] = new Set();
          this._get(p585);
        }
        this.listeners[p585].add(p586);
      }
      _removeListener(p587, p588) {
        if (this.listeners[p587]) {
          this.listeners[p587].delete(p588);
          if (this.listeners[p587].size === 0) {
            delete this.listeners[p587];
          }
        }
        if (Object.keys(this.listeners).length === 0) {
          this.stopPolling();
        }
      }
    }
    C50.type = "LOCAL";
    const vC50 = C50;
    const vLN1000000000000 = 1000000000000;
    class C51 {
      constructor(p589) {
        this.auth = p589;
        this.counter = vLN1000000000000;
        this._widgets = new Map();
      }
      render(p590, p591) {
        const v255 = this.counter;
        this._widgets.set(v255, new C52(p590, this.auth.name, p591 || {}));
        this.counter++;
        return v255;
      }
      reset(p592) {
        var v256;
        const v257 = p592 || vLN1000000000000;
        if ((v256 = this._widgets.get(v257)) !== null && v256 !== undefined) {
          v256.delete();
        }
        this._widgets.delete(v257);
      }
      getResponse(p593) {
        var v258;
        const v259 = p593 || vLN1000000000000;
        return ((v258 = this._widgets.get(v259)) === null || v258 === undefined ? undefined : v258.getResponse()) || "";
      }
      async execute(p594) {
        var v260;
        const v261 = p594 || vLN1000000000000;
        if ((v260 = this._widgets.get(v261)) !== null && v260 !== undefined) {
          v260.execute();
        }
        return "";
      }
    }
    class C52 {
      constructor(p595, p596, p597) {
        this.params = p597;
        this.timerId = null;
        this.deleted = false;
        this.responseToken = null;
        this.clickHandler = () => {
          this.execute();
        };
        const v262 = typeof p595 === "string" ? document.getElementById(p595) : p595;
        f9(v262, "argument-error", {
          appName: p596
        });
        this.container = v262;
        this.isVisible = this.params.size !== "invisible";
        if (this.isVisible) {
          this.execute();
        } else {
          this.container.addEventListener("click", this.clickHandler);
        }
      }
      getResponse() {
        this.checkIfDeleted();
        return this.responseToken;
      }
      delete() {
        this.checkIfDeleted();
        this.deleted = true;
        if (this.timerId) {
          clearTimeout(this.timerId);
          this.timerId = null;
        }
        this.container.removeEventListener("click", this.clickHandler);
      }
      execute() {
        this.checkIfDeleted();
        this.timerId ||= window.setTimeout(() => {
          this.responseToken = function (p598) {
            const vA5 = [];
            const vLS1234567890abcdefghij = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (let vLN04 = 0; vLN04 < p598; vLN04++) {
              vA5.push(vLS1234567890abcdefghij.charAt(Math.floor(Math.random() * vLS1234567890abcdefghij.length)));
            }
            return vA5.join("");
          }(50);
          const {
            callback: CC,
            "expired-callback": yC
          } = this.params;
          if (CC) {
            try {
              CC(this.responseToken);
            } catch (e35) {}
          }
          this.timerId = window.setTimeout(() => {
            this.timerId = null;
            this.responseToken = null;
            if (yC) {
              try {
                yC();
              } catch (e36) {}
            }
            if (this.isVisible) {
              this.execute();
            }
          }, 60000);
        }, 500);
      }
      checkIfDeleted() {
        if (this.deleted) {
          throw new Error("reCAPTCHA mock was already deleted!");
        }
      }
    }
    const vF48 = f48("rcb");
    const v263 = new C(30000, 60000);
    class C53 {
      constructor() {
        this.hostLanguage = "";
        this.counter = 0;
        this.librarySeparatelyLoaded = !!f111().grecaptcha?.render;
      }
      load(p599, yC = "") {
        f9(function (p600) {
          return p600.length <= 6 && /^\s*[a-zA-Z0-9\-]*\s*$/.test(p600);
        }(yC), p599, "argument-error");
        if (this.shouldResolveImmediately(yC) && f45(f111().grecaptcha)) {
          return Promise.resolve(f111().grecaptcha);
        } else {
          return new Promise((p601, p602) => {
            const v264 = f111().setTimeout(() => {
              p602(f5(p599, "network-request-failed"));
            }, v263.get());
            f111()[vF48] = () => {
              f111().clearTimeout(v264);
              delete f111()[vF48];
              const v265 = f111().grecaptcha;
              if (!v265 || !f45(v265)) {
                p602(f5(p599, "internal-error"));
                return;
              }
              const v266 = v265.render;
              v265.render = (p603, p604) => {
                const vV266 = v266(p603, p604);
                this.counter++;
                return vV266;
              };
              this.hostLanguage = p2;
              p601(v265);
            };
            f47(`https://www.google.com/recaptcha/api.js??${(0, vP3.kb)({
              onload: vF48,
              render: "explicit",
              hl: p2
            })}`).catch(() => {
              clearTimeout(v264);
              p602(f5(p599, "internal-error"));
            });
          });
        }
      }
      clearedOneInstance() {
        this.counter--;
      }
      shouldResolveImmediately(p605) {
        return !!f111().grecaptcha?.render && (p605 === this.hostLanguage || this.counter > 0 || this.librarySeparatelyLoaded);
      }
    }
    class C54 {
      async load(p606) {
        return new C51(p606);
      }
      clearedOneInstance() {}
    }
    const vLSRecaptcha = "recaptcha";
    const vO27 = {
      theme: "if",
      type: "image"
    };
    class C55 {
      constructor(p607, yC = Object.assign({}, vO27), IC) {
        this.parameters = yC;
        this.type = vLSRecaptcha;
        this.destroyed = false;
        this.widgetId = null;
        this.tokenChangeListeners = new Set();
        this.renderPromise = null;
        this.recaptcha = null;
        this.auth = f51(IC);
        this.isInvisible = this.parameters.size === "invisible";
        f9(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
        const v267 = typeof p607 === "string" ? document.getElementById(p607) : p607;
        f9(v267, this.auth, "argument-error");
        this.container = v267;
        this.parameters.callback = this.makeTokenCallback(this.parameters.callback);
        this._recaptchaLoader = this.auth.settings.appVerificationDisabledForTesting ? new C54() : new C53();
        this.validateStartingState();
      }
      async verify() {
        this.assertNotDestroyed();
        const v268 = await this.render();
        const v269 = this.getAssertedRecaptcha();
        const v270 = v269.getResponse(v268);
        return v270 || new Promise(p608 => {
          const vF11 = p609 => {
            if (p609) {
              this.tokenChangeListeners.delete(vF11);
              p608(p609);
            }
          };
          this.tokenChangeListeners.add(vF11);
          if (this.isInvisible) {
            v269.execute(v268);
          }
        });
      }
      render() {
        try {
          this.assertNotDestroyed();
        } catch (e37) {
          return Promise.reject(e37);
        }
        this.renderPromise ||= this.makeRenderPromise().catch(p610 => {
          this.renderPromise = null;
          throw p610;
        });
        return this.renderPromise;
      }
      _reset() {
        this.assertNotDestroyed();
        if (this.widgetId !== null) {
          this.getAssertedRecaptcha().reset(this.widgetId);
        }
      }
      clear() {
        this.assertNotDestroyed();
        this.destroyed = true;
        this._recaptchaLoader.clearedOneInstance();
        if (!this.isInvisible) {
          this.container.childNodes.forEach(p611 => {
            this.container.removeChild(p611);
          });
        }
      }
      validateStartingState() {
        f9(!this.parameters.sitekey, this.auth, "argument-error");
        f9(this.isInvisible || !this.container.hasChildNodes(), this.auth, "argument-error");
        f9(typeof document !== "undefined", this.auth, "operation-not-supported-in-this-environment");
      }
      makeTokenCallback(p612) {
        return p613 => {
          this.tokenChangeListeners.forEach(p614 => p614(p613));
          if (typeof p612 === "function") {
            p612(p613);
          } else if (typeof p612 === "string") {
            const v271 = f111()[p612];
            if (typeof v271 === "function") {
              v271(p613);
            }
          }
        };
      }
      assertNotDestroyed() {
        f9(!this.destroyed, this.auth, "internal-error");
      }
      async makeRenderPromise() {
        await this.init();
        if (!this.widgetId) {
          let v272 = this.container;
          if (!this.isInvisible) {
            const v273 = document.createElement("div");
            v272.appendChild(v273);
            v272 = v273;
          }
          this.widgetId = this.getAssertedRecaptcha().render(v272, this.parameters);
        }
        return this.widgetId;
      }
      async init() {
        f9(f13() && !f112(), this.auth, "internal-error");
        await function () {
          let v274 = null;
          return new Promise(p615 => {
            if (document.readyState !== "complete") {
              v274 = () => p615();
              window.addEventListener("load", v274);
            } else {
              p615();
            }
          }).catch(p616 => {
            if (v274) {
              window.removeEventListener("load", v274);
            }
            throw p616;
          });
        }();
        this.recaptcha = await this._recaptchaLoader.load(this.auth, this.auth.languageCode || undefined);
        const v275 = await async function (p617) {
          return (await f17(p617, "GET", "/v1/recaptchaParams")).recaptchaSiteKey || "";
        }(this.auth);
        f9(v275, this.auth, "internal-error");
        this.parameters.sitekey = v275;
      }
      getAssertedRecaptcha() {
        f9(this.recaptcha, this.auth, "internal-error");
        return this.recaptcha;
      }
    }
    class C56 {
      constructor(p618, p619) {
        this.verificationId = p618;
        this.onConfirmation = p619;
      }
      confirm(p620) {
        const v276 = C18._fromVerification(this.verificationId, p620);
        return this.onConfirmation(v276);
      }
    }
    async function f117(p621, p622, p623) {
      const vF518 = f51(p621);
      const v277 = await f120(vF518, p622, (0, vP3.R)(p623));
      return new C56(v277, p624 => f75(vF518, p624));
    }
    async function f118(p625, p626, p627) {
      const v278 = (0, vP3.R)(p625);
      await f72(false, v278, "phone");
      const v279 = await f120(v278.auth, p626, (0, vP3.R)(p627));
      return new C56(v279, p628 => f76(v278, p628));
    }
    async function f119(p629, p630, p631) {
      const v280 = (0, vP3.R)(p629);
      const v281 = await f120(v280.auth, p630, (0, vP3.R)(p631));
      return new C56(v281, p632 => f77(v280, p632));
    }
    async function f120(p633, p634, p635) {
      const v282 = await p635.verify();
      try {
        let v283;
        f9(typeof v282 === "string", p633, "argument-error");
        f9(p635.type === vLSRecaptcha, p633, "argument-error");
        v283 = typeof p634 === "string" ? {
          phoneNumber: p634
        } : p634;
        if ("session" in v283) {
          const v284 = v283.session;
          if ("phoneNumber" in v283) {
            f9(v284.type === "enroll", p633, "internal-error");
            const v285 = await function (p636, p637) {
              return f17(p636, "POST", "/v2/accounts/mfaEnrollment:start", f16(p636, p637));
            }(p633, {
              idToken: v284.credential,
              phoneEnrollmentInfo: {
                phoneNumber: v283.phoneNumber,
                recaptchaToken: v282
              }
            });
            return v285.phoneSessionInfo.sessionInfo;
          }
          {
            f9(v284.type === "signin", p633, "internal-error");
            const v286 = v283.multiFactorHint?.uid || v283.multiFactorUid;
            f9(v286, p633, "missing-multi-factor-info");
            const v287 = await function (p638, p639) {
              return f17(p638, "POST", "/v2/accounts/mfaSignIn:start", f16(p638, p639));
            }(p633, {
              mfaPendingCredential: v284.credential,
              mfaEnrollmentId: v286,
              phoneSignInInfo: {
                recaptchaToken: v282
              }
            });
            return v287.phoneResponseInfo.sessionInfo;
          }
        }
        {
          const {
            sessionInfo: yC
          } = await async function (p640, p641) {
            return f17(p640, "POST", "/v1/accounts:sendVerificationCode", f16(p640, p641));
          }(p633, {
            phoneNumber: v283.phoneNumber,
            recaptchaToken: v282
          });
          return yC;
        }
      } finally {
        p635._reset();
      }
    }
    async function f121(p642, p643) {
      await f71((0, vP3.R)(p642), p643);
    }
    class C57 {
      constructor(p644) {
        this.providerId = C57.PROVIDER_ID;
        this.auth = f51(p644);
      }
      verifyPhoneNumber(p645, p646) {
        return f120(this.auth, p645, (0, vP3.R)(p646));
      }
      static credential(p647, p648) {
        return C18._fromVerification(p647, p648);
      }
      static credentialFromResult(p649) {
        const vP649 = p649;
        return C57.credentialFromTaggedObject(vP649);
      }
      static credentialFromError(p650) {
        return C57.credentialFromTaggedObject(p650.customData || {});
      }
      static credentialFromTaggedObject(p651) {
        let {
          _tokenResponse: yC
        } = p651;
        if (!yC) {
          return null;
        }
        const {
          phoneNumber: IC,
          temporaryProof: fC
        } = yC;
        if (IC && fC) {
          return C18._fromTokenResponse(IC, fC);
        } else {
          return null;
        }
      }
    }
    function f122(p652, p653) {
      if (p653) {
        return f31(p653);
      } else {
        f9(p652._popupRedirectResolver, p652, "argument-error");
        return p652._popupRedirectResolver;
      }
    }
    C57.PROVIDER_ID = "phone";
    C57.PHONE_SIGN_IN_METHOD = "phone";
    class C58 extends C15 {
      constructor(p654) {
        super("custom", "custom");
        this.params = p654;
      }
      _getIdTokenResponse(p655) {
        return f63(p655, this._buildIdpRequest());
      }
      _linkToIdToken(p656, p657) {
        return f63(p656, this._buildIdpRequest(p657));
      }
      _getReauthenticationResolver(p658) {
        return f63(p658, this._buildIdpRequest());
      }
      _buildIdpRequest(p659) {
        const vO28 = {
          requestUri: this.params.requestUri,
          sessionId: this.params.sessionId,
          postBody: this.params.postBody,
          tenantId: this.params.tenantId,
          pendingToken: this.params.pendingToken,
          returnSecureToken: true,
          returnIdpCredential: true
        };
        if (p659) {
          vO28.idToken = p659;
        }
        return vO28;
      }
    }
    function f123(p660) {
      return f74(p660.auth, new C58(p660), p660.bypassAuthState);
    }
    function f124(p661) {
      const {
        auth: yC,
        user: IC
      } = p661;
      f9(IC, yC, "internal-error");
      return f73(IC, new C58(p661), p661.bypassAuthState);
    }
    async function f125(p662) {
      const {
        auth: yC,
        user: IC
      } = p662;
      f9(IC, yC, "internal-error");
      return f71(IC, new C58(p662), p662.bypassAuthState);
    }
    class C59 {
      constructor(p663, p664, p665, p666, ky = false) {
        this.auth = p663;
        this.resolver = p665;
        this.user = p666;
        this.bypassAuthState = ky;
        this.pendingPromise = null;
        this.eventManager = null;
        this.filter = Array.isArray(p664) ? p664 : [p664];
      }
      execute() {
        return new Promise(async (p667, p668) => {
          this.pendingPromise = {
            resolve: p667,
            reject: p668
          };
          try {
            this.eventManager = await this.resolver._initialize(this.auth);
            await this.onExecution();
            this.eventManager.registerConsumer(this);
          } catch (e38) {
            this.reject(e38);
          }
        });
      }
      async onAuthEvent(p669) {
        const {
          urlResponse: yC,
          sessionId: IC,
          postBody: fC,
          tenantId: ky,
          error: gC,
          type: AC
        } = p669;
        if (gC) {
          this.reject(gC);
          return;
        }
        const vO29 = {
          auth: this.auth,
          requestUri: yC,
          sessionId: IC,
          tenantId: ky || undefined,
          postBody: fC || undefined,
          user: this.user,
          bypassAuthState: this.bypassAuthState
        };
        try {
          this.resolve(await this.getIdpTask(AC)(vO29));
        } catch (e39) {
          this.reject(e39);
        }
      }
      onError(p670) {
        this.reject(p670);
      }
      getIdpTask(p671) {
        switch (p671) {
          case "signInViaPopup":
          case "signInViaRedirect":
            return f123;
          case "linkViaPopup":
          case "linkViaRedirect":
            return f125;
          case "reauthViaPopup":
          case "reauthViaRedirect":
            return f124;
          default:
            f4(this.auth, "internal-error");
        }
      }
      resolve(p672) {
        f11(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.resolve(p672);
        this.unregisterAndCleanUp();
      }
      reject(p673) {
        f11(this.pendingPromise, "Pending promise was never set");
        this.pendingPromise.reject(p673);
        this.unregisterAndCleanUp();
      }
      unregisterAndCleanUp() {
        if (this.eventManager) {
          this.eventManager.unregisterConsumer(this);
        }
        this.pendingPromise = null;
        this.cleanUp();
      }
    }
    const v288 = new C(2000, 10000);
    async function f126(p674, p675, p676) {
      const vF519 = f51(p674);
      f7(p674, p675, C21);
      const vF122 = f122(vF519, p676);
      return new C60(vF519, "signInViaPopup", p675, vF122).executeNotNull();
    }
    async function f127(p677, p678, p679) {
      const v289 = (0, vP3.R)(p677);
      f7(v289.auth, p678, C21);
      const vF1222 = f122(v289.auth, p679);
      return new C60(v289.auth, "reauthViaPopup", p678, vF1222, v289).executeNotNull();
    }
    async function f128(p680, p681, p682) {
      const v290 = (0, vP3.R)(p680);
      f7(v290.auth, p681, C21);
      const vF1223 = f122(v290.auth, p682);
      return new C60(v290.auth, "linkViaPopup", p681, vF1223, v290).executeNotNull();
    }
    class C60 extends C59 {
      constructor(p683, p684, p685, p686, p687) {
        super(p683, p684, p686, p687);
        this.provider = p685;
        this.authWindow = null;
        this.pollId = null;
        if (C60.currentPopupAction) {
          C60.currentPopupAction.cancel();
        }
        C60.currentPopupAction = this;
      }
      async executeNotNull() {
        const v291 = await this.execute();
        f9(v291, this.auth, "internal-error");
        return v291;
      }
      async onExecution() {
        f11(this.filter.length === 1, "Popup operations only handle one event");
        const vF1102 = f110();
        this.authWindow = await this.resolver._openPopup(this.auth, this.provider, this.filter[0], vF1102);
        this.authWindow.associatedEvent = vF1102;
        this.resolver._originValidation(this.auth).catch(p688 => {
          this.reject(p688);
        });
        this.resolver._isIframeWebStorageSupported(this.auth, p689 => {
          if (!p689) {
            this.reject(f5(this.auth, "web-storage-unsupported"));
          }
        });
        this.pollUserCancellation();
      }
      get eventId() {
        return this.authWindow?.associatedEvent || null;
      }
      cancel() {
        this.reject(f5(this.auth, "cancelled-popup-request"));
      }
      cleanUp() {
        if (this.authWindow) {
          this.authWindow.close();
        }
        if (this.pollId) {
          window.clearTimeout(this.pollId);
        }
        this.authWindow = null;
        this.pollId = null;
        C60.currentPopupAction = null;
      }
      pollUserCancellation() {
        const vF12 = () => {
          if (this.authWindow?.window?.closed) {
            this.pollId = window.setTimeout(() => {
              this.pollId = null;
              this.reject(f5(this.auth, "popup-closed-by-user"));
            }, 8000);
          } else {
            this.pollId = window.setTimeout(vF12, v288.get());
          }
        };
        vF12();
      }
    }
    C60.currentPopupAction = null;
    const vLSPendingRedirect = "pendingRedirect";
    const v292 = new Map();
    class C61 extends C59 {
      constructor(p690, p691) {
        super(p690, ["signInViaRedirect", "linkViaRedirect", "reauthViaRedirect", "unknown"], p691, undefined, arguments.length > 2 && arguments[2] !== undefined && arguments[2]);
        this.eventId = null;
      }
      async execute() {
        let v293 = v292.get(this.auth._key());
        if (!v293) {
          try {
            const v294 = (await async function (p692, p693) {
              const vSk = f132(p693);
              const vNk = f131(p692);
              if (!(await vNk._isAvailable())) {
                return false;
              }
              const v295 = (await vNk._get(vSk)) === "true";
              await vNk._remove(vSk);
              return v295;
            }(this.resolver, this.auth)) ? await super.execute() : null;
            v293 = () => Promise.resolve(v294);
          } catch (e40) {
            v293 = () => Promise.reject(e40);
          }
          v292.set(this.auth._key(), v293);
        }
        if (!this.bypassAuthState) {
          v292.set(this.auth._key(), () => Promise.resolve(null));
        }
        return v293();
      }
      async onAuthEvent(p694) {
        if (p694.type === "signInViaRedirect") {
          return super.onAuthEvent(p694);
        }
        if (p694.type !== "unknown") {
          if (p694.eventId) {
            const v296 = await this.auth._redirectUserForId(p694.eventId);
            if (v296) {
              this.user = v296;
              return super.onAuthEvent(p694);
            }
            this.resolve(null);
          }
        } else {
          this.resolve(null);
        }
      }
      async onExecution() {}
      cleanUp() {}
    }
    async function f129(p695, p696) {
      return f131(p695)._set(f132(p696), "true");
    }
    function f130(p697, p698) {
      v292.set(p697._key(), p698);
    }
    function f131(p699) {
      return f31(p699._redirectPersistence);
    }
    function f132(p700) {
      return f32(vLSPendingRedirect, p700.config.apiKey, p700.name);
    }
    function f133(p701, p702, p703) {
      return async function (p704, p705, p706) {
        const vF5110 = f51(p704);
        f7(p704, p705, C21);
        await vF5110._initializationPromise;
        const vF1224 = f122(vF5110, p706);
        await f129(vF1224, vF5110);
        return vF1224._openRedirect(vF5110, p705, "signInViaRedirect");
      }(p701, p702, p703);
    }
    function f134(p707, p708, p709) {
      return async function (p710, p711, p712) {
        const v297 = (0, vP3.R)(p710);
        f7(v297.auth, p711, C21);
        await v297.auth._initializationPromise;
        const vF1225 = f122(v297.auth, p712);
        await f129(vF1225, v297.auth);
        const v298 = await f138(v297);
        return vF1225._openRedirect(v297.auth, p711, "reauthViaRedirect", v298);
      }(p707, p708, p709);
    }
    function f135(p713, p714, p715) {
      return async function (p716, p717, p718) {
        const v299 = (0, vP3.R)(p716);
        f7(v299.auth, p717, C21);
        await v299.auth._initializationPromise;
        const vF1226 = f122(v299.auth, p718);
        await f72(false, v299, p717.providerId);
        await f129(vF1226, v299.auth);
        const v300 = await f138(v299);
        return vF1226._openRedirect(v299.auth, p717, "linkViaRedirect", v300);
      }(p713, p714, p715);
    }
    async function f136(p719, p720) {
      await f51(p719)._initializationPromise;
      return f137(p719, p720, false);
    }
    async function f137(p721, p722, IC = false) {
      const vF5111 = f51(p721);
      const vF1227 = f122(vF5111, p722);
      const v301 = new C61(vF5111, vF1227, IC);
      const v302 = await v301.execute();
      if (v302 && !IC) {
        delete v302.user._redirectEventId;
        await vF5111._persistUserIfCurrent(v302.user);
        await vF5111._setRedirectUser(null, p722);
      }
      return v302;
    }
    async function f138(p723) {
      const vF1103 = f110(`${p723.uid}:::`);
      p723._redirectEventId = vF1103;
      await p723.auth._setRedirectUser(p723);
      await p723.auth._persistUserIfCurrent(p723);
      return vF1103;
    }
    class C62 {
      constructor(p724) {
        this.auth = p724;
        this.cachedEventUids = new Set();
        this.consumers = new Set();
        this.queuedRedirectEvent = null;
        this.hasHandledPotentialRedirect = false;
        this.lastProcessedEventTime = Date.now();
      }
      registerConsumer(p725) {
        this.consumers.add(p725);
        if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, p725)) {
          this.sendToConsumer(this.queuedRedirectEvent, p725);
          this.saveEventToCache(this.queuedRedirectEvent);
          this.queuedRedirectEvent = null;
        }
      }
      unregisterConsumer(p726) {
        this.consumers.delete(p726);
      }
      onEvent(p727) {
        if (this.hasEventBeenHandled(p727)) {
          return false;
        }
        let v303 = false;
        this.consumers.forEach(p728 => {
          if (this.isEventForConsumer(p727, p728)) {
            v303 = true;
            this.sendToConsumer(p727, p728);
            this.saveEventToCache(p727);
          }
        });
        if (!this.hasHandledPotentialRedirect && !!function (p729) {
          switch (p729.type) {
            case "signInViaRedirect":
            case "linkViaRedirect":
            case "reauthViaRedirect":
              return true;
            case "unknown":
              return f140(p729);
            default:
              return false;
          }
        }(p727)) {
          this.hasHandledPotentialRedirect = true;
          if (!v303) {
            this.queuedRedirectEvent = p727;
            v303 = true;
          }
        }
        return v303;
      }
      sendToConsumer(p730, p731) {
        var v304;
        if (p730.error && !f140(p730)) {
          const v305 = ((v304 = p730.error.code) === null || v304 === undefined ? undefined : v304.split("auth/")[1]) || "internal-error";
          p731.onError(f5(this.auth, v305));
        } else {
          p731.onAuthEvent(p730);
        }
      }
      isEventForConsumer(p732, p733) {
        const v306 = p733.eventId === null || !!p732.eventId && p732.eventId === p733.eventId;
        return p733.filter.includes(p732.type) && v306;
      }
      hasEventBeenHandled(p734) {
        if (Date.now() - this.lastProcessedEventTime >= 600000) {
          this.cachedEventUids.clear();
        }
        return this.cachedEventUids.has(f139(p734));
      }
      saveEventToCache(p735) {
        this.cachedEventUids.add(f139(p735));
        this.lastProcessedEventTime = Date.now();
      }
    }
    function f139(p736) {
      return [p736.type, p736.eventId, p736.sessionId, p736.tenantId].filter(p737 => p737).join("-");
    }
    function f140(p738) {
      let {
        type: yC,
        error: IC
      } = p738;
      return yC === "unknown" && IC?.code === `auth/no-auth-event`;
    }
    const v307 = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    const v308 = /^https?/;
    async function f141(p739) {
      if (p739.config.emulator) {
        return;
      }
      const {
        authorizedDomains: yC
      } = await async function (p740) {
        return f17(p740, "GET", "/v1/projects", arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {});
      }(p739);
      for (const v309 of yC) {
        try {
          if (f142(v309)) {
            return;
          }
        } catch (e41) {}
      }
      f4(p739, "unauthorized-domain");
    }
    function f142(p741) {
      const vF123 = f12();
      const {
        protocol: IC,
        hostname: fC
      } = new URL(vF123);
      if (p741.startsWith("chrome-extension://")) {
        const v310 = new URL(p741);
        if (v310.hostname === "" && fC === "") {
          return IC === "chrome-extension:" && p741.replace("chrome-extension://", "") === vF123.replace("chrome-extension://", "");
        } else {
          return IC === "chrome-extension:" && v310.hostname === fC;
        }
      }
      if (!v308.test(IC)) {
        return false;
      }
      if (v307.test(p741)) {
        return fC === p741;
      }
      const v311 = p741.replace(/\./g, "\\.");
      return new RegExp("^(.+\\." + v311 + "|" + v311 + ")$", "i").test(fC);
    }
    const v312 = new C(30000, 60000);
    function f143() {
      const v313 = f111().___jsl;
      if (v313?.H) {
        for (const v314 of Object.keys(v313.H)) {
          v313.H[v314].r = v313.H[v314].r || [];
          v313.H[v314].L = v313.H[v314].L || [];
          v313.H[v314].r = [...v313.H[v314].L];
          if (v313.CP) {
            for (let vLN05 = 0; vLN05 < v313.CP.length; vLN05++) {
              v313.CP[vLN05] = null;
            }
          }
        }
      }
    }
    let v315 = null;
    function f144(p742) {
      v315 = v315 || function (p743) {
        return new Promise((p744, p745) => {
          function f145() {
            f143();
            gapi.load("gapi.iframes", {
              callback: () => {
                p744(gapi.iframes.getContext());
              },
              ontimeout: () => {
                f143();
                p745(f5(p743, "network-request-failed"));
              },
              timeout: v312.get()
            });
          }
          if (f111().gapi?.iframes?.Iframe) {
            p744(gapi.iframes.getContext());
          } else {
            if (!f111().gapi?.load) {
              const vF482 = f48("iframefcb");
              f111()[vF482] = () => {
                if (gapi.load) {
                  f145();
                } else {
                  p745(f5(p743, "network-request-failed"));
                }
              };
              return f47(`https://apis.google.com/js/api.js?onload=${vF482}`).catch(p746 => p745(p746));
            }
            f145();
          }
        }).catch(p747 => {
          v315 = null;
          throw p747;
        });
      }(p742);
      return v315;
    }
    const v316 = new C(5000, 15000);
    const vO30 = {
      style: {
        position: "absolute",
        top: "-100px",
        width: "1px",
        height: "1px"
      },
      "aria-hidden": "true",
      tabindex: "-1"
    };
    const v317 = new Map([["identitytoolkit.googleapis.com", "p"], ["staging-identitytoolkit.sandbox.googleapis.com", "s"], ["test-identitytoolkit.sandbox.googleapis.com", "t"]]);
    function f146(p748) {
      const v318 = p748.config;
      f9(v318.authDomain, p748, "auth-domain-config-required");
      const v319 = v318.emulator ? f15(v318, "emulator/auth/iframe") : `https://${p748.config.authDomain}/__/auth/iframe`;
      const vO31 = {
        apiKey: v318.apiKey,
        appName: p748.name,
        v: vP32.g
      };
      const v320 = v317.get(p748.config.apiHost);
      if (v320) {
        vO31.eid = v320;
      }
      const v321 = p748._getFrameworks();
      if (v321.length) {
        vO31.fw = v321.join(",");
      }
      return `${v319}?${(0, vP3.kb)(vO31).slice(1)}`;
    }
    const vO32 = {
      location: "yes",
      resizable: "yes",
      statusbar: "yes",
      toolbar: "no"
    };
    class C63 {
      constructor(p749) {
        this.window = p749;
        this.associatedEvent = null;
      }
      close() {
        if (this.window) {
          try {
            this.window.close();
          } catch (e42) {}
        }
      }
    }
    function f147(p750, p751, p752, ky = 500, gC = 600) {
      const v322 = Math.max((window.screen.availHeight - gC) / 2, 0).toString();
      const v323 = Math.max((window.screen.availWidth - ky) / 2, 0).toString();
      let vLS2 = "";
      const v324 = Object.assign(Object.assign({}, vO32), {
        width: ky.toString(),
        height: gC.toString(),
        top: v322,
        left: v323
      });
      const v325 = (0, vP3.T)().toLowerCase();
      if (p752) {
        vLS2 = f36(v325) ? "_blank" : p752;
      }
      if (f34(v325)) {
        p751 = p751 || "http://localhost";
        v324.scrollbars = "yes";
      }
      const v326 = Object.entries(v324).reduce((p753, p754) => {
        let [v327, v328] = p754;
        return `${p753}${v327}=${v328},`;
      }, "");
      if (function () {
        return f41(arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, vP3.T)()) && !!window.navigator?.standalone;
      }(v325) && vLS2 !== "_self") {
        (function (p755, p756) {
          const v329 = document.createElement("a");
          v329.href = p755;
          v329.target = p756;
          const v330 = document.createEvent("MouseEvent");
          v330.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
          v329.dispatchEvent(v330);
        })(p751 || "", vLS2);
        return new C63(null);
      }
      const v331 = window.open(p751 || "", vLS2, v326);
      f9(v331, p750, "popup-blocked");
      try {
        v331.focus();
      } catch (e43) {}
      return new C63(v331);
    }
    const vLS__authhandler = "__/auth/handler";
    const vLSEmulatorauthhandler = "emulator/auth/handler";
    const vEncodeURIComponent = encodeURIComponent("fac");
    async function f148(p757, p758, p759, p760, p761, p762) {
      f9(p757.config.authDomain, p757, "auth-domain-config-required");
      f9(p757.config.apiKey, p757, "invalid-api-key");
      const vO33 = {
        apiKey: p757.config.apiKey,
        appName: p757.name,
        authType: p759,
        redirectUrl: p760,
        v: vP32.g,
        eventId: p761
      };
      if (p758 instanceof C21) {
        p758.setDefaultLanguage(p757.languageCode);
        vO33.providerId = p758.providerId || "";
        if (!(0, vP3.Y)(p758.getCustomParameters())) {
          vO33.customParameters = JSON.stringify(p758.getCustomParameters());
        }
        for (const [v332, v333] of Object.entries(p762 || {})) {
          vO33[v332] = v333;
        }
      }
      if (p758 instanceof C22) {
        const v334 = p758.getScopes().filter(p763 => p763 !== "");
        if (v334.length > 0) {
          vO33.scopes = v334.join(",");
        }
      }
      if (p757.tenantId) {
        vO33.tid = p757.tenantId;
      }
      const vVO33 = vO33;
      for (const v335 of Object.keys(vVO33)) {
        if (vVO33[v335] === undefined) {
          delete vVO33[v335];
        }
      }
      const v336 = await p757._getAppCheckToken();
      const v337 = v336 ? `#${vEncodeURIComponent}=${encodeURIComponent(v336)}` : "";
      return `${function (p764) {
        let {
          config: yC
        } = p764;
        if (!yC.emulator) {
          return `https://${yC.authDomain}/${vLS__authhandler}`;
        }
        return f15(yC, vLSEmulatorauthhandler);
      }(p757)}?${(0, vP3.kb)(vVO33).slice(1)}${v337}`;
    }
    const vLSWebStorageSupport = "webStorageSupport";
    const vC2 = class {
      constructor() {
        this.eventManagers = {};
        this.iframes = {};
        this.originValidationPromises = {};
        this._redirectPersistence = vC46;
        this._completeRedirectFn = f137;
        this._overrideRedirectResult = f130;
      }
      async _openPopup(p765, p766, p767, p768) {
        f11(this.eventManagers[p765._key()]?.manager, "_initialize() not called before _openPopup()");
        return f147(p765, await f148(p765, p766, p767, f12(), p768), f110());
      }
      async _openRedirect(p769, p770, p771, p772) {
        await this._originValidation(p769);
        (function (p773) {
          f111().location.href = p773;
        })(await f148(p769, p770, p771, f12(), p772));
        return new Promise(() => {});
      }
      _initialize(p774) {
        const v338 = p774._key();
        if (this.eventManagers[v338]) {
          const {
            manager: CC,
            promise: IC
          } = this.eventManagers[v338];
          if (CC) {
            return Promise.resolve(CC);
          } else {
            f11(IC, "If manager is not set, promise should be");
            return IC;
          }
        }
        const v339 = this.initAndGetManager(p774);
        this.eventManagers[v338] = {
          promise: v339
        };
        v339.catch(() => {
          delete this.eventManagers[v338];
        });
        return v339;
      }
      async initAndGetManager(p775) {
        const v340 = await async function (p776) {
          const v341 = await f144(p776);
          const v342 = f111().gapi;
          f9(v342, p776, "internal-error");
          return v341.open({
            where: document.body,
            url: f146(p776),
            messageHandlersFilter: v342.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
            attributes: vO30,
            dontclear: true
          }, p777 => new Promise(async (p778, p779) => {
            await p777.restyle({
              setHideOnLeave: false
            });
            const vF53 = f5(p776, "network-request-failed");
            const v343 = f111().setTimeout(() => {
              p779(vF53);
            }, v316.get());
            function f149() {
              f111().clearTimeout(v343);
              p778(p777);
            }
            p777.ping(f149).then(f149, () => {
              p779(vF53);
            });
          }));
        }(p775);
        const v344 = new C62(p775);
        v340.register("authEvent", p780 => {
          f9(p780?.authEvent, p775, "invalid-auth-event");
          return {
            status: v344.onEvent(p780.authEvent) ? "ACK" : "ERROR"
          };
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
        this.eventManagers[p775._key()] = {
          manager: v344
        };
        this.iframes[p775._key()] = v340;
        return v344;
      }
      _isIframeWebStorageSupported(p781, p782) {
        this.iframes[p781._key()].send(vLSWebStorageSupport, {
          type: vLSWebStorageSupport
        }, p783 => {
          const v345 = p783?.[0]?.[vLSWebStorageSupport];
          if (v345 !== undefined) {
            p782(!!v345);
          }
          f4(p781, "internal-error");
        }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
      }
      _originValidation(p784) {
        const v346 = p784._key();
        this.originValidationPromises[v346] ||= f141(p784);
        return this.originValidationPromises[v346];
      }
      get _shouldInitProactively() {
        return f42() || f35() || f41();
      }
    };
    class C64 {
      constructor(p785) {
        this.factorId = p785;
      }
      _process(p786, p787, p788) {
        switch (p787.type) {
          case "enroll":
            return this._finalizeEnroll(p786, p787.credential, p788);
          case "signin":
            return this._finalizeSignIn(p786, p787.credential);
          default:
            return f10("unexpected MultiFactorSessionType");
        }
      }
    }
    class C65 extends C64 {
      constructor(p789) {
        super("phone");
        this.credential = p789;
      }
      static _fromCredential(p790) {
        return new C65(p790);
      }
      _finalizeEnroll(p791, p792, p793) {
        return function (p794, p795) {
          return f17(p794, "POST", "/v2/accounts/mfaEnrollment:finalize", f16(p794, p795));
        }(p791, {
          idToken: p792,
          displayName: p793,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
      _finalizeSignIn(p796, p797) {
        return function (p798, p799) {
          return f17(p798, "POST", "/v2/accounts/mfaSignIn:finalize", f16(p798, p799));
        }(p796, {
          mfaPendingCredential: p797,
          phoneVerificationInfo: this.credential._makeVerificationRequest()
        });
      }
    }
    class C66 {
      constructor() {}
      static assertion(p800) {
        return C65._fromCredential(p800);
      }
    }
    C66.FACTOR_ID = "phone";
    class C67 {
      static assertionForEnrollment(p801, p802) {
        return C68._fromSecret(p801, p802);
      }
      static assertionForSignIn(p803, p804) {
        return C68._fromEnrollmentId(p803, p804);
      }
      static async generateSecret(p805) {
        const vP805 = p805;
        f9(typeof vP805.auth !== "undefined", "internal-error");
        const v347 = await (v348 = vP805.auth, v349 = {
          idToken: vP805.credential,
          totpEnrollmentInfo: {}
        }, f17(v348, "POST", "/v2/accounts/mfaEnrollment:start", f16(v348, v349)));
        var v348;
        var v349;
        return C69._fromStartTotpMfaEnrollmentResponse(v347, vP805.auth);
      }
    }
    C67.FACTOR_ID = "totp";
    class C68 extends C64 {
      constructor(p806, p807, p808) {
        super("totp");
        this.otp = p806;
        this.enrollmentId = p807;
        this.secret = p808;
      }
      static _fromSecret(p809, p810) {
        return new C68(p810, undefined, p809);
      }
      static _fromEnrollmentId(p811, p812) {
        return new C68(p812, p811);
      }
      async _finalizeEnroll(p813, p814, p815) {
        f9(typeof this.secret !== "undefined", p813, "argument-error");
        return function (p816, p817) {
          return f17(p816, "POST", "/v2/accounts/mfaEnrollment:finalize", f16(p816, p817));
        }(p813, {
          idToken: p814,
          displayName: p815,
          totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
        });
      }
      async _finalizeSignIn(p818, p819) {
        f9(this.enrollmentId !== undefined && this.otp !== undefined, p818, "argument-error");
        const vO34 = {
          verificationCode: this.otp
        };
        return function (p820, p821) {
          return f17(p820, "POST", "/v2/accounts/mfaSignIn:finalize", f16(p820, p821));
        }(p818, {
          mfaPendingCredential: p819,
          mfaEnrollmentId: this.enrollmentId,
          totpVerificationInfo: vO34
        });
      }
    }
    class C69 {
      constructor(p822, p823, p824, p825, p826, p827, p828) {
        this.sessionInfo = p827;
        this.auth = p828;
        this.secretKey = p822;
        this.hashingAlgorithm = p823;
        this.codeLength = p824;
        this.codeIntervalSeconds = p825;
        this.enrollmentCompletionDeadline = p826;
      }
      static _fromStartTotpMfaEnrollmentResponse(p829, p830) {
        return new C69(p829.totpSessionInfo.sharedSecretKey, p829.totpSessionInfo.hashingAlgorithm, p829.totpSessionInfo.verificationCodeLength, p829.totpSessionInfo.periodSec, new Date(p829.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), p829.totpSessionInfo.sessionInfo, p830);
      }
      _makeTotpVerificationInfo(p831) {
        return {
          sessionInfo: this.sessionInfo,
          verificationCode: p831
        };
      }
      generateQrCodeUrl(p832, p833) {
        let v350 = false;
        if (f150(p832) || f150(p833)) {
          v350 = true;
        }
        if (v350) {
          if (f150(p832)) {
            p832 = this.auth.currentUser?.email || "unknownuser";
          }
          if (f150(p833)) {
            p833 = this.auth.name;
          }
        }
        return `otpauth://totp/${p833}:${p832}?secret=${this.secretKey}&issuer=${p833}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
      }
    }
    function f150(p834) {
      return typeof p834 === "undefined" || p834?.length === 0;
    }
    var vLSfirebaseauth = "@firebase/auth";
    var vLS0232 = "0.23.2";
    class C70 {
      constructor(p835) {
        this.auth = p835;
        this.internalListeners = new Map();
      }
      getUid() {
        this.assertAuthConfigured();
        return this.auth.currentUser?.uid || null;
      }
      async getToken(p836) {
        this.assertAuthConfigured();
        await this.auth._initializationPromise;
        if (!this.auth.currentUser) {
          return null;
        }
        return {
          accessToken: await this.auth.currentUser.getIdToken(p836)
        };
      }
      addAuthTokenListener(p837) {
        this.assertAuthConfigured();
        if (this.internalListeners.has(p837)) {
          return;
        }
        const v351 = this.auth.onIdTokenChanged(p838 => {
          p837((p838 === null || p838 === undefined ? undefined : p838.stsTokenManager.accessToken) || null);
        });
        this.internalListeners.set(p837, v351);
        this.updateProactiveRefresh();
      }
      removeAuthTokenListener(p839) {
        this.assertAuthConfigured();
        const v352 = this.internalListeners.get(p839);
        if (v352) {
          this.internalListeners.delete(p839);
          v352();
          this.updateProactiveRefresh();
        }
      }
      assertAuthConfigured() {
        f9(this.auth._initializationPromise, "dependent-sdk-initialized-before-auth");
      }
      updateProactiveRefresh() {
        if (this.internalListeners.size > 0) {
          this.auth._startProactiveRefresh();
        } else {
          this.auth._stopProactiveRefresh();
        }
      }
    }
    const v353 = (0, vP3.O)("authIdTokenMaxAge") || 300;
    let v354 = null;
    const vF13 = p840 => async p841 => {
      const v355 = p841 && (await p841.getIdTokenResult());
      const v356 = v355 && (new Date().getTime() - Date.parse(v355.issuedAtTime)) / 1000;
      if (v356 && v356 > v353) {
        return;
      }
      const v357 = v355?.token;
      if (v354 !== v357) {
        v354 = v357;
        await fetch(p840, {
          method: v357 ? "POST" : "DELETE",
          headers: v357 ? {
            Authorization: `Bearer ${v357}`
          } : {}
        });
      }
    };
    function f151(CC = (0, vP32.K)()) {
      const v358 = (0, vP32.w)(CC, "auth");
      if (v358.isInitialized()) {
        return v358.getImmediate();
      }
      const vF522 = f52(CC, {
        popupRedirectResolver: vC2,
        persistence: [vC50, vC45, vC46]
      });
      const v359 = (0, vP3.O)("authTokenSyncURL");
      if (v359) {
        const vVF13 = vF13(v359);
        f102(vF522, vVF13, () => vVF13(vF522.currentUser));
        f101(vF522, p842 => vVF13(p842));
      }
      const v360 = (0, vP3.K)("auth");
      if (v360) {
        f53(vF522, `http://${v360}`);
      }
      return vF522;
    }
    var v361;
    v361 = "Browser";
    (0, vP32.y)(new vP34.e("auth", (p843, p844) => {
      let {
        options: IC
      } = p844;
      const v362 = p843.getProvider("app").getImmediate();
      const v363 = p843.getProvider("heartbeat");
      const v364 = p843.getProvider("app-check-internal");
      const {
        apiKey: AC,
        authDomain: my
      } = v362.options;
      f9(AC && !AC.includes(":"), "invalid-api-key", {
        appName: v362.name
      });
      const vO35 = {
        apiKey: AC,
        authDomain: my,
        clientPlatform: v361,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: f43(v361)
      };
      const v365 = new C13(v362, v363, v364, vO35);
      (function (p845, p846) {
        const v366 = p846?.persistence || [];
        const v367 = (Array.isArray(v366) ? v366 : [v366]).map(f31);
        if (p846?.errorMap) {
          p845._updateErrorMap(p846.errorMap);
        }
        p845._initializeWithPersistence(v367, p846?.popupRedirectResolver);
      })(v365, IC);
      return v365;
    }, "PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((p847, p848, p849) => {
      p847.getProvider("auth-internal").initialize();
    }));
    (0, vP32.y)(new vP34.e("auth-internal", p850 => (p851 => new C70(p851))(f51(p850.getProvider("auth").getImmediate())), "PRIVATE").setInstantiationMode("EXPLICIT"));
    (0, vP32.V)(vLSfirebaseauth, vLS0232, function (p852) {
      switch (p852) {
        case "Node":
          return "node";
        case "ReactNative":
          return "rn";
        case "Worker":
          return "webworker";
        case "Cordova":
          return "cordova";
        default:
          return;
      }
    }(v361));
    (0, vP32.V)(vLSfirebaseauth, vLS0232, "esm2017");
  }
};
//# sourceMappingURL=pz8l4l.7.adb99ba7.chunk.js.map
//# debugId=9676f7d5-e613-5b3d-b50e-add2b319a70d