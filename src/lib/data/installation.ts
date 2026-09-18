export type InstallGuide = {
  id: string;
  device: string;
  summary: string;
  requirements: string[];
  steps: string[];
};

export const installGuides: InstallGuide[] = [
  {
    id: "firetv",
    device: "Fire TV & Firestick",
    summary:
      "Set up your compatible player app on Amazon Fire TV and Fire TV Stick in a few minutes.",
    requirements: [
      "Amazon Fire TV or Fire TV Stick connected to the internet",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "From the Fire TV home screen, open the Apps section and search for your recommended compatible player app in the Amazon App Store.",
      "Download and install the app, then open it once installation finishes.",
      "Select the option to add a new playlist or account, and enter the activation details provided by our team.",
      "Save your settings and allow the app to load your channel and on-demand library.",
      "If you run into any issues, contact our support team on WhatsApp or Telegram and we'll help you troubleshoot.",
    ],
  },
  {
    id: "smart-tv",
    device: "Smart TV",
    summary:
      "Get IPTV 4NET running directly on supported Smart TV app stores, without extra hardware.",
    requirements: [
      "A Smart TV with an app store and internet connection",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "Open your TV's app store and search for a compatible player app supported by your TV's operating system.",
      "Install the app and open it from your TV's home screen.",
      "Choose to add a new account or playlist, then enter the activation details we sent you.",
      "Confirm your settings and give the app a moment to load your subscription.",
      "Message us on WhatsApp if your specific TV model doesn't list a compatible app and we'll recommend an alternative device setup.",
    ],
  },
  {
    id: "android",
    device: "Android",
    summary: "Install and activate IPTV 4NET on Android phones and tablets.",
    requirements: [
      "An Android phone or tablet with internet access",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "Open the Google Play Store on your Android device and search for your recommended compatible player app.",
      "Install the app and open it once the download completes.",
      "Enter the activation details provided by our team when prompted to add a playlist or account.",
      "Wait for the app to sync your channels and on-demand content.",
      "For app recommendations tailored to your Android version, reach out to our support team.",
    ],
  },
  {
    id: "ios",
    device: "iPhone & iPad",
    summary: "Configure a compatible player app on iOS devices in a few simple steps.",
    requirements: [
      "An iPhone or iPad running a supported iOS version",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "Open the App Store and search for the compatible player app recommended by our team.",
      "Download and install the app, then launch it from your home screen.",
      "Select the option to add a new account or playlist and enter your activation details.",
      "Allow the app to load your subscription content before you start watching.",
      "Contact us on WhatsApp or Telegram if you need help finding a compatible app for your device.",
    ],
  },
  {
    id: "apple-tv",
    device: "Apple TV",
    summary: "Bring IPTV 4NET to your living room with Apple TV.",
    requirements: [
      "An Apple TV connected to the internet",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "From the Apple TV home screen, open the App Store and search for a compatible player app.",
      "Download and install the app, then open it.",
      "Choose to add a new playlist or account and enter your activation details using the Apple TV remote.",
      "Give the app a moment to load your channels and library.",
      "If the app isn't available in your region's App Store, message our team for an alternative recommendation.",
    ],
  },
  {
    id: "windows-mac",
    device: "Windows & Mac",
    summary: "Stream IPTV 4NET on your desktop or laptop with a compatible player.",
    requirements: [
      "A Windows or macOS computer with internet access",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "Download a compatible desktop player recommended by our team for your operating system.",
      "Install the application and open it once setup completes.",
      "Enter your activation details in the app's account or playlist settings.",
      "Allow the player to load your subscription content.",
      "Reach out on WhatsApp if you'd like a recommendation for the best desktop player for your setup.",
    ],
  },
  {
    id: "android-box",
    device: "Android TV Box",
    summary: "Set up a dedicated Android TV box for a full living-room streaming experience.",
    requirements: [
      "An Android TV box connected to your television and the internet",
      "An active IPTV 4NET subscription",
      "Your activation details from our team",
    ],
    steps: [
      "Open the app store on your Android TV box and search for a compatible player app.",
      "Install the app and launch it from your box's home screen.",
      "Add a new account or playlist and enter the activation details from our team.",
      "Confirm your settings and let the app load your channels and on-demand library.",
      "Contact support if your box uses a customized interface and you need extra guidance.",
    ],
  },
];

export function getInstallGuideById(id: string) {
  return installGuides.find((guide) => guide.id === id);
}
