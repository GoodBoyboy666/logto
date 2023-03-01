const connectors = {
  title: 'Connectoren',
  subtitle: 'Richte Connectoren ein um passwortlose und Social Anmeldung zu aktivieren',
  create: 'Social Connector erstellen',
  config_sie_notice: 'You’ve set up connectors. Make sure to configure it in <a>{{link}}</a>.', // UNTRANSLATED
  config_sie_link_text: 'sign in experience', // UNTRANSLATED
  tab_email_sms: 'E-Mail und SMS Connectoren',
  tab_social: 'Social Connectoren',
  connector_name: 'Connectorname',
  connector_type: 'Typ',
  connector_status: 'Anmeldeoberfläche',
  connector_status_in_use: 'In Benutzung',
  connector_status_not_in_use: 'Nicht in Benutzung',
  not_in_use_tip: {
    content:
      'Not in use means your sign in experience hasn’t used this sign in method. <a>{{link}}</a> to add this sign in method. ', // UNTRANSLATED
    go_to_sie: 'Go to sign in experience', // UNTRANSLATED
  },
  placeholder_title: 'Social connector', // UNTRANSLATED
  placeholder_description:
    'Logto has provided many widely used social sign-in connectors meantime you can create your own with standard protocols.', // UNTRANSLATED
  save_and_done: 'Speichern und fertigstellen',
  type: {
    email: 'E-Mail Connector',
    sms: 'SMS Connector',
    social: 'Social Connector',
  },
  setup_title: {
    email: 'E-Mail Connector einrichten',
    sms: 'SMS Connector einrichten',
    social: 'Social Connector erstellen',
  },
  guide: {
    subtitle: 'Eine Schritt-für-Schritt-Anleitung zur Konfiguration deines Connectors',
    general_setting: 'General settings', // UNTRANSLATED
    parameter_configuration: 'Parameter configuration', // UNTRANSLATED
    test_connection: 'Test connection', // UNTRANSLATED
    name: 'Name for social sign-in button', // UNTRANSLATED
    name_placeholder: 'Enter name for social sign-in button', // UNTRANSLATED
    name_tip:
      'The name of the connector button will be displayed as "Continue with {{name}}." Be mindful of the length of the naming in case it gets too long.', // UNTRANSLATED
    logo: 'Logo URL for social sign-in button', // UNTRANSLATED
    logo_placeholder: 'https://your.cdn.domain/logo.png', // UNTRANSLATED
    logo_tip:
      'Logo image will show on the connector. Get a publicly accessible image link and insert the link here.', // UNTRANSLATED
    logo_dark: 'Logo URL for social sign-in button (Dark mode)', // UNTRANSLATED
    logo_dark_placeholder: 'https://your.cdn.domain/logo.png', // UNTRANSLATED
    logo_dark_tip:
      'Set your connector’s logo for dark mode after enabling it in the Sign-in Experience of Admin Console.', // UNTRANSLATED
    logo_dark_collapse: 'Collapse', // UNTRANSLATED
    logo_dark_show: 'Show logo setting for dark mode', // UNTRANSLATED
    target: 'Identity provider name', // UNTRANSLATED
    target_placeholder: 'Enter connector identity provider name', // UNTRANSLATED
    target_tip:
      'The value of “IdP name” can be a unique identifier string to distinguish your social identifies. This setting cannot be changed after the connector is built.', // UNTRANSLATED
    target_tooltip:
      '"Target" in Logto social connectors refers to the "source" of your social identities. In Logto design, we do not accept the same "target" of a specific platform to avoid conflicts. You should be very careful before you add a connector since you CAN NOT change its value once you create it. <a>Learn more.</a>', // UNTRANSLATED
    config: 'Enter your config JSON', // UNTRANSLATED
    sync_profile: 'Sync profile information', // UNTRANSLATED
    sync_profile_only_at_sign_up: 'Only sync at sign-up', // UNTRANSLATED
    sync_profile_each_sign_in: 'Always do a sync at each sign-in', // UNTRANSLATED
    sync_profile_tip:
      "Sync the basic profile from the social provider, such as users' names and their avatars.", // UNTRANSLATED
    callback_uri: 'Callback URI', // UNTRANSLATED
    callback_uri_description:
      "Also called redirect URI, is the URI in Logto where users will be sent back after social authorization, copy and paste to the social provider's config page.", // UNTRANSLATED
  },
  platform: {
    universal: 'Universal',
    web: 'Web',
    native: 'Nativ',
  },
  add_multi_platform: ' unterstützt mehrere Plattformen, wähle eine Plattform aus, um fortzufahren',
  drawer_title: 'Connector Anleitung',
  drawer_subtitle: 'Folge den Anweisungen, um deinen Connector zu integrieren',
  unknown: 'Unknown Connector', // UNTRANSLATED
};

export default connectors;
