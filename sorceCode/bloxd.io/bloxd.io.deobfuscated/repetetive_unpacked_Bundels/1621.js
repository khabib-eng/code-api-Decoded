var fC = require("./1336.js");
var ky = require("./1370.js");
var gC = require("./442.js");
var AC = require("./49.js");
var my = require("./82.js");
var XC = require("./478.js");
var iy = require("./1408.js");
var LC = require("./1363.js");
var YC = require("./1449.js");
var bC = require("./534.js");
const rC = new Date("2025-11-17T12:00:00Z");
const GC = new Date("2025-11-17T12:00:00Z");
const eC = "_pubcid_optout";
const OC = "1";
export function b() {
  let CC = "We use cookies and such for the website's functionality, to analyse its usage, and to display non-personalized ads.";
  "mobileIos" === gC.D && (CC = "We use cookies and similar technologies for the website's functionality and to analyse its usage.");
  return (0, bC.jsxs)(bC.Fragment, {
    children: [(0, bC.jsx)("br", {}), CC, " For more details, please refer to our updated", " ", (0, bC.jsx)(YC.e, {
      to: "/privacy-policy",
      style: {
        color: "#4f94f1"
      },
      children: "Privacy Policy"
    }), ".", (0, bC.jsx)("br", {}), (0, bC.jsx)("br", {}), "If you're under 13, please ask an adult to review and approve it for you. If you're an adult, you can approve it yourself. By continuing to use bloxd.io, you (or your adult) agree to the updated", " ", (0, bC.jsx)(YC.e, {
      to: "/privacy-policy",
      style: {
        color: "#4f94f1"
      },
      children: "Privacy Policy"
    }), "."]
  });
}
function TC(CC) {
  let {
    children: yC,
    onClick: IC,
    href: fC
  } = CC;
  return (0, bC.jsx)("a", {
    href: fC,
    className: "PrivacyPolicyLink",
    onClick: IC,
    children: yC
  });
}
function NC() {
  const [CC, yC] = (0, AC.useReducer)(CC => CC + 1, 0);
  const IC = my.e.getItem(eC) !== OC ? (0, bC.jsxs)("p", {
    children: ["Users can opt out of the Common ID tracking cookie by clicking", " ", (0, bC.jsx)(TC, {
      href: "#opt-out",
      onClick: () => {
        my.e.setItem(eC, OC);
        yC();
      },
      children: "here"
    }), "."]
  }) : (0, bC.jsx)("p", {
    style: {
      color: "green"
    },
    children: "You have opted out of the common ID tracking cookie."
  });
  const fC = void 0 !== window.__tcfapi;
  return (0, bC.jsxs)("div", {
    children: [(0, bC.jsx)("h2", {
      children: "Common ID Cookie"
    }), (0, bC.jsx)("p", {
      children: "This site uses cookies and similar tracking technologies such as the Common ID cookie to provide its services. Cookies are important devices for measuring advertising effectiveness and ensuring a robust online advertising industry. The Common ID cookie stores a unique user ID in the first party domain and is accessible to our ad partners. This simple ID that can be utilized to improve user matching, especially for delivering ads to iOS and MacOS browsers."
    }), IC, (0, bC.jsx)("h2", {
      children: "Advertising Privacy Settings"
    }), fC && (0, bC.jsxs)("p", {
      children: ["When you use our site, pre-selected companies may access and use certain information on your device and about your interests to serve ads or personalized content. You may revisit or change consent-choices at any time by clicking", " ", (0, bC.jsx)(TC, {
        href: "#tcfapi",
        onClick: () => {
          window.ramp.showCmpModal();
        },
        children: "here"
      }), "."]
    })]
  });
}
function sC() {
  const {
    t: CC
  } = (0, fC.n)();
  const yC = "mobileIos" !== gC.D;
  return (0, bC.jsxs)("div", {
    className: "LegalText",
    children: [(0, bC.jsx)("div", {
      className: "BloxdInformationHeader FullyFancyText",
      children: CC("homePage:privacyPolicy")
    }), ky.e.isUsingPlaywire() && (0, bC.jsx)(NC, {}), (0, bC.jsx)("p", {
      children: (0, bC.jsxs)("em", {
        children: ["Last updated: ", GC.toLocaleDateString()]
      })
    }), (0, bC.jsx)("p", {
      children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
    }), (0, bC.jsx)("h2", {
      children: "1. Who We Are"
    }), (0, bC.jsx)("p", {
      children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you understand what information we collect, why we collect it, and how we keep it safe. We also want to ensure that you know your rights and how you can exercise them."
    }), (0, bC.jsx)("p", {
      children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players while respecting the privacy and concerns of parents and guardians."
    }), (0, bC.jsx)("h2", {
      children: "2. Information We Collect, Why We Collect It, and How It Is Used"
    }), (0, bC.jsx)("h3", {
      children: "2.1 Visitors"
    }), (0, bC.jsx)("h4", {
      children: "2.1.1 Data Collection and Usage"
    }), (0, bC.jsxs)("p", {
      children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information necessary to operate the website and ensure its functionality. The following types of information may be collected:", " "]
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP address, browser type, device type, screen resolution, language selection"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To ensure the website functions correctly and displays in your preferred language."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, time spent on pages, clicks, and interactions"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To analyze how the website is used and to improve player experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Cookie Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsxs)("p", {
            children: ["Cookies that store settings, advert frequency, fraud prevention", yC ? ", and with your consent, enable personalized advertising" : ""]
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsxs)("p", {
            children: ["To enhance your experience by remembering your preferences, save your game progress", yC ? ", and ensure ads are displayed an appropriate number of times and to prevent fraudulent activity. With your consent, cookies may also be used to enable personalized advertising based on your interests." : ""]
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Moderation Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Anonymized IP address, Chat logs, username, reports"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To maintain a safe environment in chat rooms and enforce community guidelines."
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Data Retention:\xa0Data related to visitors is retained as long as the account is active, or 14 months after your last play session. If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after the request is processed."
    }), (0, bC.jsx)("h3", {
      children: "2.2 Chat Rooms"
    }), (0, bC.jsx)("p", {
      children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
      }), (0, bC.jsx)("li", {
        children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
      }), (0, bC.jsx)("li", {
        children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
      })]
    }), (0, bC.jsx)("p", {
      children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
    }), (0, bC.jsx)("h3", {
      children: "2.3 Registered players"
    }), (0, bC.jsx)("h4", {
      children: "2.2.1 Age Requirements and Parental Consent"
    }), (0, bC.jsxs)("p", {
      children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer to", (0, bC.jsx)("a", {
        href: "https://families.google.com/familylink/privacy/child-policy&sa=D&source=editors&ust=1727110006167678&usg=AOvVaw0MAVtSjVpH1CAiGhSm3aWW",
        children: "\xa0"
      }), (0, bC.jsx)("a", {
        href: "https://families.google.com/familylink/privacy/child-policy&sa=D&source=editors&ust=1727110006167929&usg=AOvVaw1AG2Qwt16Nj32FwQLKYPny",
        children: "Google\u2019s Child Privacy Policy"
      }), "."]
    }), (0, bC.jsx)("h4", {
      children: "2.2.2 Data Collection for Registered Players"
    }), (0, bC.jsx)("p", {
      children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Account Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Username, email address"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To create and manage user accounts."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Profile Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Optional profile details (e.g., avatar)"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To personalize the user experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP address, device type, browser type"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To secure accounts and ensure the website functions correctly."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, site interactions"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To improve the user experience and offer tailored features."
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Data Retention: Data related to registered players is retained for as long as the account is active, 14 months after your last play session or If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after the request is processed."
    }), (0, bC.jsx)("h3", {
      children: "2.2.3 Data Collection for Store Purchases"
    }), (0, bC.jsx)("p", {
      children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Account Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "User ID, email address"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To attach any purchase made to your account."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Transaction ID, IP address, device type, browser type"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Combat fraud and reporting."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, site interactions, purchase history"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To secure accounts and ensure the website functions correctly."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, site interactions"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To improve the user experience and offer tailored features after purchase."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Payment Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Payment Information, Billing address "
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To complete and validate your purchase"
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
    }), (0, bC.jsx)("p", {
      children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
    }), (0, bC.jsx)("h3", {
      children: "2.3 When You Contact Us"
    }), (0, bC.jsx)("p", {
      children: "When you reach out to us, we collect information to help us respond to you effectively:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Contact Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Your email address or phone number"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To get back to you about your questions or concerns."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Message Content"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What you say in your message"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To understand and address your issue or feedback."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Date, time, and details of how you contacted us"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "For security and to ensure we respond appropriately."
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Data Retention:\xa0We will retain the personal data collected from your inquiries for up to\xa0three months after your query is resolved or closed. This extended period allows us to ensure that any follow-up questions can be addressed. If the inquiry is from a child under the age of 13, any data collected will be deleted as soon as possible."
    }), (0, bC.jsx)("h2", {
      children: "3. Third-Party Data Use"
    }), (0, bC.jsx)("h3", {
      children: "3.1 Scope of This Privacy Policy"
    }), (0, bC.jsxs)("p", {
      children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
    }), (0, bC.jsx)("p", {
      children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging with them."
    }), (0, bC.jsx)("p", {
      children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
    }), yC && (0, bC.jsxs)(bC.Fragment, {
      children: [(0, bC.jsx)("h3", {
        children: "3.2 Advertisers"
      }), (0, bC.jsx)("p", {
        children: "Bloxd.io displays ads from selected partners. With your consent, we may display personalized ads that are tailored to your interests based on your browsing behavior and preferences. Personalized ads may use information such as your browsing history, device information, and interactions with our site to show you more relevant advertisements."
      })]
    }), (0, bC.jsx)("h3", {
      children: "3.3 Service Providers"
    }), (0, bC.jsx)("p", {
      children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your information. The key service providers we work with are categorized as follows:"
    }), (0, bC.jsx)("h4", {
      children: "Hosting and Data Storage"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "AWS Cloud"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Data storage and processing"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Hosts our servers and stores backup, data securely."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Digital Ocean"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Data storage and processing"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Hosts our servers and stores data securely."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Google Firebase"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Email, User data, app usage data, device information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Provides backend services including database for registered users"
          })
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Website Security and Performance"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://www.cloudflare.com/en-gb/privacypolicy/&sa=D&source=editors&ust=1727110006181620&usg=AOvVaw0m1Y11iGrtmw0BIffCG8-a",
              children: "Cloudflare"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP addresses, browser types, device information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Provides\xa0website security, performance optimization, and protection against malicious attacks."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://policies.google.com/privacy&sa=D&source=editors&ust=1727110006182582&usg=AOvVaw3CvAbYhyrX6bej65_gl1iN",
              children: "Google reCAPTCHA"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP addresses, browser types, device information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Protection against malicious attacks."
          })
        })]
      })]
    }), yC && (0, bC.jsxs)(bC.Fragment, {
      children: [(0, bC.jsx)("h4", {
        children: "Advertising Management"
      }), (0, bC.jsxs)("table", {
        children: [(0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Service Provider"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "What They Collect"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "What They Do"
            })
          })]
        }), (0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: (0, bC.jsx)("a", {
                href: "https://adinplay.com/privacy-policy&sa=D&source=editors&ust=1727110006184385&usg=AOvVaw2dYQ1zKPCgljPb6h8zsOj8",
                children: "Adinplay"
              })
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Advertiser data, ad performance data, personalized with your consent"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Manages and delivers in-game advertisements."
            })
          })]
        }), (0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: (0, bC.jsx)("a", {
                href: "https://aditude.com/privacy&sa=D&source=editors&ust=1727110006184385&usg=AOvVaw2dYQ1zKPCgljPb6h8zsOj8",
                children: "Aditude"
              })
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Advertiser data, ad performance data, personalized with your consent"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Manages and delivers in-game advertisements."
            })
          })]
        }), (0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: (0, bC.jsx)("a", {
                href: "https://policies.google.com/privacy&sa=D&source=editors&ust=1727110006185337&usg=AOvVaw1bG-gHUubzWFYscDFt0UI7",
                children: "Google Ads Manager"
              })
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Advertiser data, ad performance data, personalized with your consent"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Manages and optimizes the display of advertisements on our site."
            })
          })]
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Analytics"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://policies.google.com/technologies/partner-sites&sa=D&source=editors&ust=1727110006187011&usg=AOvVaw3-sSL8NaONN0SK0JanyyRS",
              children: "Google Analytics"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage data, pages visited, interactions on the site"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Analyzes website usage to help us understand how the site is used and improve user experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://docs.bytebrew.io/BBSettings/privacypolicy",
              children: "ByteBrew"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage data, device data, interactions on the site"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Analyzes website usage to help us understand how the site is used and improve user experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://sentry.io/privacy",
              children: "Sentry"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP addresses, browser types, device information, interactions on the site"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Collects all errors that happen in the browser and records and collects user activity for debugging purposes."
          })
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Content Moderation"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://www.lassomoderation.com/privacy-policy/&sa=D&source=editors&ust=1727110006188937&usg=AOvVaw2yluOu0uYPx0NVQEN0VmiH",
              children: "Lasso Moderation"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Anonymized IP addresses, chat logs, usernames, reports"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Provides automated and manual moderation services to ensure chat safety and compliance with guidelines."
          })
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Payment Providers"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://xsolla.com/privacypolicy",
              children: "Xsolla"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "User ID, Email Address, IP addresses, Purchase History, Purchase Request"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Act as our merchant of record, handling all our secure payment protection insurance and checkout experience to complete your purchase and handle payment support."
          })
        })]
      })]
    }), (0, bC.jsx)("h2", {
      children: "4. Cookies and Tracking Technologies"
    }), (0, bC.jsx)("h3", {
      children: "4.1 What Are Cookies?"
    }), (0, bC.jsx)("p", {
      children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
    }), (0, bC.jsx)("h3", {
      children: "4.2 Types of Cookies We Use"
    }), (0, bC.jsx)("p", {
      children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Cookie"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Purpose"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Example"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Functional Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Ensure the website works properly by enabling basic functions like navigation and settings."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Remembering your game settings, progress or language preferences."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Analytical Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Help us understand how players use the site by collecting anonymized data (e.g., pages visited)."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Tracking the number of visitors or identifying popular game features."
          })
        })]
      }), yC && (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Ad Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Manage ad display frequency, prevent repetitive ads, help detect fraudulent activity, and with your consent, enable personalized advertising based on your interests and browsing behavior."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Ensuring the same ad doesn\u2019t appear too frequently, detecting fraudulent ad interactions, and when you consent, showing you ads that are more relevant to your interests."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Notice Acceptance Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Record whether you have acknowledged or accepted notices, such as our cookie policy."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Storing your acceptance of our cookie banner or other notifications."
          })
        })]
      })]
    }), (0, bC.jsx)("h3", {
      children: "4.3 Managing Cookies"
    }), (0, bC.jsx)("p", {
      children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
      }), (0, bC.jsx)("li", {
        children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
      }), (0, bC.jsx)("li", {
        children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
      }), (0, bC.jsx)("li", {
        children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
      })]
    }), (0, bC.jsx)("h2", {
      children: "5. Security Measures"
    }), (0, bC.jsx)("p", {
      children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
    }), (0, bC.jsx)("h3", {
      children: "5.1 Technologies and Procedures"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "We use encryption\xa0and other security technologies to safeguard your personal information during transmission and storage."
      }), (0, bC.jsx)("li", {
        children: "Our servers are hosted by trusted partners who apply high security standards to protect the data we store."
      }), (0, bC.jsx)("li", {
        children: "We regularly monitor our systems for potential vulnerabilities and use firewalls and anti-virus software to prevent unauthorized access."
      })]
    }), (0, bC.jsx)("h3", {
      children: "5.2 Staff Training and Compliance"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
      }), (0, bC.jsx)("li", {
        children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
      })]
    }), (0, bC.jsx)("h3", {
      children: "5.3 Data Breach Notification"
    }), (0, bC.jsx)("p", {
      children: "In the unlikely event of a data breach that affects your personal information:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "We will promptly notify\xa0affected users, as required by law."
      }), (0, bC.jsx)("li", {
        children: "The notification will include:"
      })]
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "What data was compromised."
      }), (0, bC.jsx)("li", {
        children: "The steps we are taking to resolve the issue and protect your data."
      }), (0, bC.jsx)("li", {
        children: "Recommendations for what you can do to protect yourself (e.g., change passwords)."
      })]
    }), (0, bC.jsx)("p", {
      children: "We take all necessary steps to ensure that breaches are addressed swiftly to minimize any potential harm."
    }), (0, bC.jsx)("h2", {
      children: "6. International Data Transfers"
    }), (0, bC.jsx)("p", {
      children: "Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded."
    }), (0, bC.jsx)("h2", {
      children: "7. Data Retention"
    }), (0, bC.jsx)("p", {
      children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
      }), (0, bC.jsx)("li", {
        children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
      }), (0, bC.jsx)("li", {
        children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
      }), (0, bC.jsx)("li", {
        children: "Cookies:\xa0Cookies are retained for varying periods, depending on their purpose. Functional cookies are typically retained for as long as they are needed to operate the site, while analytical cookies may be retained for a shorter period to analyze site performance."
      })]
    }), (0, bC.jsx)("p", {
      children: "If we collect personal data beyond what is outlined above, we will remove it as soon as possible once it is no longer needed."
    }), (0, bC.jsx)("h2", {
      children: "8. Your Rights"
    }), (0, bC.jsx)("h3", {
      children: "8.1 Your Choices and Control"
    }), (0, bC.jsx)("p", {
      children: "As a user of Bloxd.io, you have the right to:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Access Your Data: Request a copy of the personal information we hold about you."
      }), (0, bC.jsx)("li", {
        children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
      }), (0, bC.jsx)("li", {
        children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
      }), (0, bC.jsx)("li", {
        children: "Limit Data Collection: Request that we limit the collection or use of your data."
      }), (0, bC.jsx)("li", {
        children: "Object to Data Processing: Object to certain types of data processing, such as for marketing purposes."
      })]
    }), (0, bC.jsx)("h3", {
      children: "8.2 Parental Choices and Control "
    }), (0, bC.jsx)("p", {
      children: "As a verified parent or guardian of a child using Bloxd.io, you have the right to:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Access Your Child\u2019s Data: Request a copy of the personal information we\u2019ve collected about your child, including details like username, email address, and chat logs."
      }), (0, bC.jsx)("li", {
        children: "Correct Your Child\u2019s Data: Ask us to correct any inaccurate or incomplete information about your child."
      }), (0, bC.jsx)("li", {
        children: "Delete Your Child\u2019s Data: Request the deletion of your child\u2019s account and all associated data. Once verified, we will delete this data promptly, typically within 30 days. This will also remove any saved progress in the game."
      }), (0, bC.jsx)("li", {
        children: "Limit Data Collection for Your Child: Request that we limit the collection or use of certain types of data, such as usage information, from your child."
      })]
    }), (0, bC.jsx)("h3", {
      children: "8.3 How to Exercise Your Rights"
    }), (0, bC.jsx)("p", {
      children: "To exercise any of these rights, contact us using the information provided below. We may require proof of identity before proceeding with your request. Responses will typically be provided within 30 days."
    }), (0, bC.jsx)("h2", {
      children: "9. Contact Us"
    }), (0, bC.jsx)("p", {
      children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsxs)("li", {
        children: ["Email: ", (0, bC.jsx)("a", {
          href: "mailto:privacy@bloxd.io",
          children: "privacy@bloxd.io"
        })]
      }), (0, bC.jsx)("li", {
        children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
      })]
    }), (0, bC.jsx)("h2", {
      children: "10. Updates to This Policy"
    }), (0, bC.jsx)("p", {
      children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
    })]
  });
}
function jy() {
  const {
    t: CC
  } = (0, fC.n)();
  const yC = "mobileIos" !== gC.D;
  return (0, bC.jsxs)("div", {
    className: "LegalText",
    children: [(0, bC.jsx)("div", {
      className: "BloxdInformationHeader FullyFancyText",
      children: CC("homePage:privacyPolicy")
    }), (0, bC.jsx)("p", {
      children: (0, bC.jsxs)("em", {
        children: ["Last updated: ", rC.toLocaleDateString()]
      })
    }), (0, bC.jsx)("p", {
      children: "This Privacy Policy outlines how Bloxd LTD collects, uses, and protects your information when you visit and interact with Bloxd.io. This document is intended to provide clarity on our practices and your rights concerning your data."
    }), (0, bC.jsx)("h2", {
      children: "1. Who We Are"
    }), (0, bC.jsx)("p", {
      children: "At Bloxd.io, we take your privacy\u2014and the privacy of your children\u2014very seriously. This Privacy Policy explains how we collect, use, and protect the information of both you and your child when you use our website. Our goal is to make sure you understand what information we collect, why we collect it, and how we keep it safe. We also want to ensure that you know your rights and how you can exercise them."
    }), (0, bC.jsx)("p", {
      children: "Whether you\u2019re a parent, guardian, or player, this document is designed to provide you with clear and straightforward information about our privacy practices. We\u2019re committed to providing a safe and enjoyable environment for our younger players while respecting the privacy and concerns of parents and guardians."
    }), (0, bC.jsx)("h2", {
      children: "2. Information We Collect, Why We Collect It, and How It Is Used"
    }), (0, bC.jsx)("h3", {
      children: "2.1 Visitors"
    }), (0, bC.jsx)("h4", {
      children: "2.1.1 Data Collection and Usage"
    }), (0, bC.jsxs)("p", {
      children: ["When you interact with Bloxd.io, certain data is collected to ensure the website operates correctly and securely. By default, we apply the highest level of privacy protection for all visitors. This means that we collect only the minimal amount of information necessary to operate the website and ensure its functionality. The following types of information may be collected:", " "]
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP address, browser type, device type, screen resolution, language selection"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To ensure the website functions correctly and displays in your preferred language."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, time spent on pages, clicks, and interactions"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To analyze how the website is used and to improve player experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Cookie Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Cookies that store settings, advert frequency, fraud prevention"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsxs)("p", {
            children: ["To enhance your experience by remembering your preferences, save your game progress", yC ? ", and ensure ads are displayed an appropriate number of times and to prevent fraudulent activity." : ""]
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Moderation Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Anonymized IP address, Chat logs, username, reports"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To maintain a safe environment in chat rooms and enforce community guidelines."
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Data Retention:\xa0Data related to visitors is retained as long as the account is active, or 14 months after your last play session. If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after the request is processed."
    }), (0, bC.jsx)("h3", {
      children: "2.2 Chat Rooms"
    }), (0, bC.jsx)("p", {
      children: "Bloxd.io includes online social features, such as chat rooms, where players can interact. We implement several measures to ensure chat safety:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Automated Moderation: Tools are used to automatically detect and filter inappropriate content."
      }), (0, bC.jsx)("li", {
        children: "Manual Moderation: Human moderators review flagged content to ensure compliance with our chat safety rules."
      }), (0, bC.jsx)("li", {
        children: "User Reports: players can report content they believe violates guidelines, and it will be reviewed by moderators."
      })]
    }), (0, bC.jsx)("p", {
      children: "Before participating in chat rooms, players and their guardians are encouraged to review our Community Conduct."
    }), (0, bC.jsx)("h3", {
      children: "2.3 Registered players"
    }), (0, bC.jsx)("h4", {
      children: "2.2.1 Age Requirements and Parental Consent"
    }), (0, bC.jsxs)("p", {
      children: ["Accounts on Bloxd.io can only be created by players aged 13 or older, or by younger players with parental consent. For those registering through Google, Google will verify the user\u2019s age and obtain parental consent if required. For more details, refer to", (0, bC.jsx)("a", {
        href: "https://families.google.com/familylink/privacy/child-policy&sa=D&source=editors&ust=1727110006167678&usg=AOvVaw0MAVtSjVpH1CAiGhSm3aWW",
        children: "\xa0"
      }), (0, bC.jsx)("a", {
        href: "https://families.google.com/familylink/privacy/child-policy&sa=D&source=editors&ust=1727110006167929&usg=AOvVaw1AG2Qwt16Nj32FwQLKYPny",
        children: "Google\u2019s Child Privacy Policy"
      }), "."]
    }), (0, bC.jsx)("h4", {
      children: "2.2.2 Data Collection for Registered Players"
    }), (0, bC.jsx)("p", {
      children: "When creating an account, the following data is collected to provide personalized services and enhance user experience:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Account Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Username, email address"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To create and manage user accounts."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Profile Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Optional profile details (e.g., avatar)"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To personalize the user experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP address, device type, browser type"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To secure accounts and ensure the website functions correctly."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, site interactions"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To improve the user experience and offer tailored features."
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Data Retention: Data related to registered players is retained for as long as the account is active, 14 months after your last play session or If a user requests account deletion, the associated data will be deleted promptly, typically within 30 days after the request is processed."
    }), (0, bC.jsx)("h3", {
      children: "2.2.3 Data Collection for Store Purchases"
    }), (0, bC.jsx)("p", {
      children: "When making a store purchase as a registered player, the following data is collected by us or our payment partners listed in section 3.3 to provide a compliant checkout experience and access to their purchase:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Account Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "User ID, email address"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To attach any purchase made to your account."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Transaction ID, IP address, device type, browser type"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Combat fraud and reporting."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, site interactions, purchase history"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To secure accounts and ensure the website functions correctly."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Pages visited, site interactions"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To improve the user experience and offer tailored features after purchase."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Payment Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Payment Information, Billing address "
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To complete and validate your purchase"
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Our payment providers, who act as our merchant of record, securely collect payment information and handle it according to the required security & law. Payment information is not shared with or processed by bloxd."
    }), (0, bC.jsx)("p", {
      children: "Data Retention: Data related to purchases can be stored for up to 5 years after fulfilling the purposes for which the data were collected to combat fraud and for reporting purposes."
    }), (0, bC.jsx)("h3", {
      children: "2.3 When You Contact Us"
    }), (0, bC.jsx)("p", {
      children: "When you reach out to us, we collect information to help us respond to you effectively:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What We Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Why We Collect It"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Contact Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Your email address or phone number"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To get back to you about your questions or concerns."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Message Content"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What you say in your message"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "To understand and address your issue or feedback."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Technical Info"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Date, time, and details of how you contacted us"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "For security and to ensure we respond appropriately."
          })
        })]
      })]
    }), (0, bC.jsx)("p", {
      children: "Data Retention:\xa0We will retain the personal data collected from your inquiries for up to\xa0three months after your query is resolved or closed. This extended period allows us to ensure that any follow-up questions can be addressed. If the inquiry is from a child under the age of 13, any data collected will be deleted as soon as possible."
    }), (0, bC.jsx)("h2", {
      children: "3. Third-Party Data Use"
    }), (0, bC.jsx)("h3", {
      children: "3.1 Scope of This Privacy Policy"
    }), (0, bC.jsxs)("p", {
      children: ["This Privacy Policy applies only to the Bloxd.io game and its related services when accessed through the official Bloxd.io website or our mobile apps (such as those on iOS and Android).", " "]
    }), (0, bC.jsx)("p", {
      children: "If you use Bloxd.io through a third-party platform or website, this Privacy Policy does not cover those environments. We recommend checking the privacy policies of those sites or platforms and making sure you understand how your data is used before engaging with them."
    }), (0, bC.jsx)("p", {
      children: "We may also work with third-party services for some features in our game. These third parties have their own privacy policies, which apply in addition to ours. We encourage you to review those policies as well."
    }), yC && (0, bC.jsxs)(bC.Fragment, {
      children: [(0, bC.jsx)("h3", {
        children: "3.2 Advertisers"
      }), (0, bC.jsx)("p", {
        children: "Bloxd.io displays ads from selected partners. These ads are non-personalized, meaning they are not based on your personal data or browsing behavior, but rather on the context of the pages you visit. We do not collect personal data from children under 13 for advertising purposes.\xa0Ads are shown based on general context and not personalized information."
      })]
    }), (0, bC.jsx)("h3", {
      children: "3.3 Service Providers"
    }), (0, bC.jsx)("p", {
      children: "We work with trusted third-party service providers to help operate the website and deliver services effectively. These providers only receive the data necessary to perform their functions and are required to maintain the confidentiality and security of your information. The key service providers we work with are categorized as follows:"
    }), (0, bC.jsx)("h4", {
      children: "Hosting and Data Storage"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "AWS Cloud"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Data storage and processing"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Hosts our servers and stores backup, data securely."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Digital Ocean"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Data storage and processing"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Hosts our servers and stores data securely."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Google Firebase"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Email, User data, app usage data, device information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Provides backend services including database for registered users"
          })
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Website Security and Performance"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://www.cloudflare.com/en-gb/privacypolicy/&sa=D&source=editors&ust=1727110006181620&usg=AOvVaw0m1Y11iGrtmw0BIffCG8-a",
              children: "Cloudflare"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP addresses, browser types, device information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Provides\xa0website security, performance optimization, and protection against malicious attacks."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://policies.google.com/privacy&sa=D&source=editors&ust=1727110006182582&usg=AOvVaw3CvAbYhyrX6bej65_gl1iN",
              children: "Google reCAPTCHA"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP addresses, browser types, device information"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Protection against malicious attacks."
          })
        })]
      })]
    }), yC && (0, bC.jsxs)(bC.Fragment, {
      children: [(0, bC.jsx)("h4", {
        children: "Advertising Management"
      }), (0, bC.jsxs)("table", {
        children: [(0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Service Provider"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "What They Collect"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "What They Do"
            })
          })]
        }), (0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: (0, bC.jsx)("a", {
                href: "https://adinplay.com/privacy-policy&sa=D&source=editors&ust=1727110006184385&usg=AOvVaw2dYQ1zKPCgljPb6h8zsOj8",
                children: "Adinplay"
              })
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Advertiser data, ad performance data"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Manages and delivers in-game advertisements."
            })
          })]
        }), (0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: (0, bC.jsx)("a", {
                href: "https://aditude.com/privacy&sa=D&source=editors&ust=1727110006184385&usg=AOvVaw2dYQ1zKPCgljPb6h8zsOj8",
                children: "Aditude"
              })
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Advertiser data, ad performance data"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Manages and delivers in-game advertisements."
            })
          })]
        }), (0, bC.jsxs)("tr", {
          children: [(0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: (0, bC.jsx)("a", {
                href: "https://policies.google.com/privacy&sa=D&source=editors&ust=1727110006185337&usg=AOvVaw1bG-gHUubzWFYscDFt0UI7",
                children: "Google Ads Manager"
              })
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Advertiser data, ad performance data"
            })
          }), (0, bC.jsx)("td", {
            children: (0, bC.jsx)("p", {
              children: "Manages and optimizes the display of advertisements on our site."
            })
          })]
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Analytics"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://policies.google.com/technologies/partner-sites&sa=D&source=editors&ust=1727110006187011&usg=AOvVaw3-sSL8NaONN0SK0JanyyRS",
              children: "Google Analytics"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage data, pages visited, interactions on the site"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Analyzes website usage to help us understand how the site is used and improve user experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://docs.bytebrew.io/BBSettings/privacypolicy",
              children: "ByteBrew"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Usage data, device data, interactions on the site"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Analyzes website usage to help us understand how the site is used and improve user experience."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://sentry.io/privacy",
              children: "Sentry"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "IP addresses, browser types, device information, interactions on the site"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Collects all errors that happen in the browser and records and collects user activity for debugging purposes."
          })
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Content Moderation"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://www.lassomoderation.com/privacy-policy/&sa=D&source=editors&ust=1727110006188937&usg=AOvVaw2yluOu0uYPx0NVQEN0VmiH",
              children: "Lasso Moderation"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Anonymized IP addresses, chat logs, usernames, reports"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Provides automated and manual moderation services to ensure chat safety and compliance with guidelines."
          })
        })]
      })]
    }), (0, bC.jsx)("h4", {
      children: "Payment Providers"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Service Provider"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Collect"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "What They Do"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: (0, bC.jsx)("a", {
              href: "https://xsolla.com/privacypolicy",
              children: "Xsolla"
            })
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "User ID, Email Address, IP addresses, Purchase History, Purchase Request"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Act as our merchant of record, handling all our secure payment protection insurance and checkout experience to complete your purchase and handle payment support."
          })
        })]
      })]
    }), (0, bC.jsx)("h2", {
      children: "4. Cookies and Tracking Technologies"
    }), (0, bC.jsx)("h3", {
      children: "4.1 What Are Cookies?"
    }), (0, bC.jsx)("p", {
      children: "Cookies are small data files stored on your device that help identify you when you visit a website. They allow the site to remember your preferences and provide a smoother experience."
    }), (0, bC.jsx)("h3", {
      children: "4.2 Types of Cookies We Use"
    }), (0, bC.jsx)("p", {
      children: "We use different types of cookies to enhance your experience and ensure that Bloxd.io\xa0functions properly. Here\u2019s what each type of cookie does:"
    }), (0, bC.jsxs)("table", {
      children: [(0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Type of Cookie"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Purpose"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Example"
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Functional Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Ensure the website works properly by enabling basic functions like navigation and settings."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Remembering your game settings, progress or language preferences."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Analytical Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Help us understand how players use the site by collecting anonymized data (e.g., pages visited)."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Tracking the number of visitors or identifying popular game features."
          })
        })]
      }), yC && (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Ad Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Manage ad display frequency, prevent repetitive ads, and help detect fraudulent activity."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Ensuring the same ad doesn\u2019t appear too frequently or detecting fraudulent ad interactions."
          })
        })]
      }), (0, bC.jsxs)("tr", {
        children: [(0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Notice Acceptance Cookies"
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Record whether you have acknowledged or accepted notices, such as our cookie policy."
          })
        }), (0, bC.jsx)("td", {
          children: (0, bC.jsx)("p", {
            children: "Storing your acceptance of our cookie banner or other notifications."
          })
        })]
      })]
    }), (0, bC.jsx)("h3", {
      children: "4.3 Managing Cookies"
    }), (0, bC.jsx)("p", {
      children: "You can control cookie settings through your browser. Below are links to guides on how to manage cookies for common browsers:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Google Chrome: Go to Settings > Privacy and Security > Clear browsing data > Cookies and other site data."
      }), (0, bC.jsx)("li", {
        children: "Mozilla Firefox: Go to Options > Privacy & Security > Cookies and Site Data > Clear Data."
      }), (0, bC.jsx)("li", {
        children: "Safari: Go to Preferences > Privacy > Manage Website Data > Remove All."
      }), (0, bC.jsx)("li", {
        children: "Microsoft Edge: Go to Settings > Cookies and site permissions > Manage and delete cookies and site data."
      })]
    }), (0, bC.jsx)("h2", {
      children: "5. Security Measures"
    }), (0, bC.jsx)("p", {
      children: "We take the security of your data seriously. We implement various measures to ensure your personal information is protected and manage it according to applicable data protection laws."
    }), (0, bC.jsx)("h3", {
      children: "5.1 Technologies and Procedures"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "We use encryption\xa0and other security technologies to safeguard your personal information during transmission and storage."
      }), (0, bC.jsx)("li", {
        children: "Our servers are hosted by trusted partners who apply high security standards to protect the data we store."
      }), (0, bC.jsx)("li", {
        children: "We regularly monitor our systems for potential vulnerabilities and use firewalls and anti-virus software to prevent unauthorized access."
      })]
    }), (0, bC.jsx)("h3", {
      children: "5.2 Staff Training and Compliance"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Our team is trained to manage your data securely and in accordance with data protection laws like GDPR\xa0and COPPA."
      }), (0, bC.jsx)("li", {
        children: "Internal procedures are in place to ensure that only authorized personnel can access sensitive data."
      })]
    }), (0, bC.jsx)("h3", {
      children: "5.3 Data Breach Notification"
    }), (0, bC.jsx)("p", {
      children: "In the unlikely event of a data breach that affects your personal information:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "We will promptly notify\xa0affected users, as required by law."
      }), (0, bC.jsx)("li", {
        children: "The notification will include:"
      })]
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "What data was compromised."
      }), (0, bC.jsx)("li", {
        children: "The steps we are taking to resolve the issue and protect your data."
      }), (0, bC.jsx)("li", {
        children: "Recommendations for what you can do to protect yourself (e.g., change passwords)."
      })]
    }), (0, bC.jsx)("p", {
      children: "We take all necessary steps to ensure that breaches are addressed swiftly to minimize any potential harm."
    }), (0, bC.jsx)("h2", {
      children: "6. International Data Transfers"
    }), (0, bC.jsx)("p", {
      children: "Your data may be transferred to servers in other countries. All international transfers comply with relevant data protection regulations, ensuring that your information is safeguarded."
    }), (0, bC.jsx)("h2", {
      children: "7. Data Retention"
    }), (0, bC.jsx)("p", {
      children: "We retain your data only for as long as necessary to fulfil the purposes outlined in this policy:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Technical and Usage Data:\xa0Retained for 14 months after your last visit to the site or until you request removal and the removal is verified."
      }), (0, bC.jsx)("li", {
        children: "Personal Data for Registered players:\xa0Retained for as long as the account is active. Upon request for account deletion, data will be removed promptly, typically within 30 days after the request is processed."
      }), (0, bC.jsx)("li", {
        children: "Contact Information:\xa0Retained for three months after the query is resolved or closed. If personal data from children is collected, it will be deleted as soon as possible."
      }), (0, bC.jsx)("li", {
        children: "Cookies:\xa0Cookies are retained for varying periods, depending on their purpose. Functional cookies are typically retained for as long as they are needed to operate the site, while analytical cookies may be retained for a shorter period to analyze site performance."
      })]
    }), (0, bC.jsx)("p", {
      children: "If we collect personal data beyond what is outlined above, we will remove it as soon as possible once it is no longer needed."
    }), (0, bC.jsx)("h2", {
      children: "8. Your Rights"
    }), (0, bC.jsx)("h3", {
      children: "8.1 Your Choices and Control"
    }), (0, bC.jsx)("p", {
      children: "As a user of Bloxd.io, you have the right to:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Access Your Data: Request a copy of the personal information we hold about you."
      }), (0, bC.jsx)("li", {
        children: "Correct Your Data: Ask us to correct any inaccurate or incomplete information."
      }), (0, bC.jsx)("li", {
        children: "Delete Your Data: Request the deletion of your personal information when it is no longer needed."
      }), (0, bC.jsx)("li", {
        children: "Limit Data Collection: Request that we limit the collection or use of your data."
      }), (0, bC.jsx)("li", {
        children: "Object to Data Processing: Object to certain types of data processing, such as for marketing purposes."
      })]
    }), (0, bC.jsx)("h3", {
      children: "8.2 Parental Choices and Control "
    }), (0, bC.jsx)("p", {
      children: "As a verified parent or guardian of a child using Bloxd.io, you have the right to:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsx)("li", {
        children: "Access Your Child\u2019s Data: Request a copy of the personal information we\u2019ve collected about your child, including details like username, email address, and chat logs."
      }), (0, bC.jsx)("li", {
        children: "Correct Your Child\u2019s Data: Ask us to correct any inaccurate or incomplete information about your child."
      }), (0, bC.jsx)("li", {
        children: "Delete Your Child\u2019s Data: Request the deletion of your child\u2019s account and all associated data. Once verified, we will delete this data promptly, typically within 30 days. This will also remove any saved progress in the game."
      }), (0, bC.jsx)("li", {
        children: "Limit Data Collection for Your Child: Request that we limit the collection or use of certain types of data, such as usage information, from your child."
      })]
    }), (0, bC.jsx)("h3", {
      children: "8.3 How to Exercise Your Rights"
    }), (0, bC.jsx)("p", {
      children: "To exercise any of these rights, contact us using the information provided below. We may require proof of identity before proceeding with your request. Responses will typically be provided within 30 days."
    }), (0, bC.jsx)("h2", {
      children: "9. Contact Us"
    }), (0, bC.jsx)("p", {
      children: "Got questions or concerns? We\u2019re here to help. Reach out to us at:"
    }), (0, bC.jsxs)("ul", {
      children: [(0, bC.jsxs)("li", {
        children: ["Email: ", (0, bC.jsx)("a", {
          href: "mailto:privacy@bloxd.io",
          children: "privacy@bloxd.io"
        })]
      }), (0, bC.jsx)("li", {
        children: "Address: Bloxd LTD, 86-90 Paul Street, London, England, United Kingdom, EC2A 4NE"
      })]
    }), (0, bC.jsx)("h2", {
      children: "10. Updates to This Policy"
    }), (0, bC.jsx)("p", {
      children: "We may update this policy occasionally to reflect changes in our practices or the law. When we do, we\u2019ll update the \u201cLast updated\u201d date at the top. Please check back occasionally to stay informed."
    })]
  });
}
export function f() {
  let CC;
  CC = (0, XC.shouldUseUkPrivacyPolicy)() ? (0, bC.jsx)(jy, {}) : (0, bC.jsx)(sC, {});
  return (0, bC.jsxs)(bC.Fragment, {
    children: [(0, gC.k)() && (0, bC.jsx)(bC.Fragment, {
      children: (0, bC.jsx)(iy.d, {
        className: "DiscordPrivacyChoicesButton",
        onClick: () => {
          (0, LC.p)();
        },
        children: "Adjust Discord Privacy Choices"
      })
    }), CC]
  });
}
export function j() {
  return (0, XC.shouldUseUkPrivacyPolicy)() ? rC : GC;
}