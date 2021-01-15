import React from "react";
import { SideDrawer, Toolbar } from ".";

const routes = [
  {
    "path": "/",
    "title": "Home",
    "component": "Home",
    "nav": {
      "icon": "casa.svg",
      "text": "Inicio"
    }
  },
  {
    "path": "/generar-qr",
    "title": "Generar QR",
    "component": "GenerarQR",
    "nav": {
      "icon": "qr-symbol.svg",
      "text": "Generar QR"
    }
  },
  {
    "nav": {
      "icon": "papel.svg",
      "text": "Swaggers",
      "submenu": [
        {
          "text": "Onboarding",
          "url": "https://payments-wallet-qa.fif.tech/onboarding/bff/api-doc.html"
        },
        {
          "text": "Login",
          "url": "https://payments-wallet-qa.fif.tech/login/bff/api-doc.html"
        },
        {
          "text": "Pago QR",
          "url": "https://payments-wallet-qa.fif.tech/bff/on-site-payment/api-docs/v1.html?apikey=62eb165c070a41d5c1b58d9d3d725ca1"
        },
        {
          "text": "Dashboard",
          "url": "https://payments-wallet-qa.fif.tech/bff/payment-dashboard/api-docs/v1.html"
        },
        {
          "text": "Add Card",
          "url": "https://payments-wallet-qa.fif.tech/form-pci/bff/api-doc.html"
        },
        {
          "text": "Accounts",
          "url": "https://payments-wallet-qa.fif.tech/api/payment-method/api-docs/v1.html"
        },
        {
          "text": "FundsIn/P2P/Notificaciones",
          "url": "https://payments-wallet-test.fif.tech/bff-docs/wallet/v1/core-operations/api-doc.html"
        },
        {
          "text": "Edit Profile",
          "url": "https://payments-wallet-test.fif.tech/bff-docs/user-profile/v1/customers/api-doc.html"
        },
        {
          "text": "QR Service",
          "url": "https://payments-wallet-int.fif.tech/api/qr-service/api-docs/v1.html"
        }
      ]
    }
  },
  {
    "path": "/internal-info",
    "title": "Internal Info",
    "component": "InternalInfo",
    "nav": {
      "icon": "grafico-de-barras.svg",
      "text": "Internal Info"
    }
  },
  {
    "path": "/ui-flow",
    "title": "UI Flow",
    "component": "UIFlow",
    "nav": {
      "icon": "aleatorio.svg",
      "text": "UI Flow"
    }
  },
  {
    "path": "/external-tools",
    "title": "External Tools",
    "component": "ExternalTools",
    "nav": {
      "icon": "aleatorio.svg",
      "text": "External Tools"
    }
  },
  {
    "path": "/vpn-tools",
    "title": "VPN Tools",
    "component": "VPNTools",
    "nav": {
      "icon": "aleatorio.svg",
      "text": "VPN Tools"
    }
  }
];

const Layout = ({ title = "Fpay", children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const layoutClasses = [classes.Layout];
  if (showSideDrawer) layoutClasses.push(classes.Layout___sideDrawerOpened);

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer((prevState) => !prevState);
  };

  return (
    <div className={layoutClasses.join(" ")}>
      <SideDrawer
        open={showSideDrawer}
        drawerToggleClicked={sideDrawerToggleHandler}
        routes={routes}
      />
      <div className={classes.Layout_aside}>
        <Toolbar drawerToggleClicked={sideDrawerToggleHandler} title={title} />
        <main className={classes.Layout_content}>{children}</main>
      </div>
    </div>
  );
};



const Template = (args) => <Layout {...args} />;
