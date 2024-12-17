<!-- TITLE -->
<p align="center">
 <h2 align="center">Bando MiniPay Spending Dapp</h2>
 <p align="center">Spend your tokens on anything.</p>
</p>
  <p align="center">
    <a href="https://opensource.org/license/mit/">
      <img alt="MIT License" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
    </a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->

<div>
  <summary>Table of Contents</summary>
  <ol>
      <ol>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#install-minipay">Install MiniPay</a></li>
     </ol>
      <ol>
        <li><a href="#install-dependencies">Install Dependencies</a></li>
        <li><a href="#deploy-your-dapp-locally">Deploy your Dapp Locally</a></li>
        <li><a href="#add-ui-components">Add UI Components</a></li>
        <li><a href="#deploy-with-vercel">Deploy with Vercel</a></li>
        <li><a href="#supported-frameworks">Supported Frameworks</a></li>
      </ol>
    <li><a href="#support">Support</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

Bando MiniPay app allows you to spend your minipay balance to buy more thasn 10000 products globally.

## Built With

Built with: Celo Composer is built on Celo to make it simple to build dApps using a variety of front-end frameworks, and libraries.

- [Celo](https://celo.org/)
- [Solidity](https://docs.soliditylang.org/en/v0.8.19/)
- [Hardhat](https://hardhat.org/)
- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [viem](https://viem.sh/)
- [Tailwind](https://tailwindcss.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Prerequisites

- Node (v20 or higher)
- Git (v2.38 or higher)

## Install MiniPay

Welcome to the [MiniPay](https://www.opera.com/products/minipay) wallet integration guide. MiniPay is one of the fastest growing wallets that was built out by Opera on Celo that seeks to create a simple user experience to use DApps. MiniPay is available as a standalone app and inside the Opera Mini browser on Android phones thereby allowing DApp developers to tap into a distribution of 100M users on integration.

This guide provides information on how to develop and test your dapp for MiniPay.

To get started with MiniPay, we recommend testing the wallet and building a sample dApp using our starter kit. The following steps will guide you through setting up MiniPay, building your dApp, and testing it in the wallet.

:::info
Install the new [MiniPay standalone app](https://play.google.com/store/apps/details?id=com.opera.minipay) now! 🎉 📥
:::

## Install Dependencies


Once your custom dApp has been created, just install dependencies, either with yarn:

```bash
   yarn
```

If you prefer npm, you can run:

```bash
   npm install
```

## Deploy your Dapp Locally

Find the detailed instructions on how to run your frontend in the [`react-dapp` README.md](./packages/react-app/README.md).

Before you start the project, please follow these steps:

1. Rename the file:
   packages/react-app/.env.template
   to
   packages/react-app/.env

2. Open the newly renamed .env file and add your WalletConnect Cloud Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)

Once you've done that, you're all set to start your project!

Run the following commands from the `packages/react-app` folder to start the project:

```bash
   yarn dev
```

If you prefer npm, you can run:

```bash
   npm run dev
```

## Add UI Components

To keep the Celo Composer as lightwieght as possible we didn't add any components but rather a guide on how to add the components you need yourself with a very simple to use components library. To learn how to add UI components using [ShadCN](https://ui.shadcn.com/) in this project, refer to the [UI Components Guide](./docs/UI_COMPONENTS.md).

## Deploy with Vercel

The Celo Composer is a great tool for hackathons and fast deployments. We created a guide for you, using the Vercel CLI to create a live deployment in minutes. For detailed instructions on deploying the Next.js app using Vercel CLI, refer to the [Deployment Guide](./docs/DEPLOYMENT_GUIDE.md).


## Supported Frameworks

### React / Nextjs

- Support for Website and Progressive Web Application.
- Works with all major crypto wallets.

Check [nextjs docs](https://nextjs.org/docs) to learn more about it.

### Hardhat

- Robust framework for building and testing smart contracts.
- Compatible with various Ethereum development tools and plugins.

Check [hardhat docs](https://hardhat.org/hardhat-runner/docs/getting-started) to learn more about it.

## Support

Send us an email to [api@bando.cool](mailto:api@bando.cool) if you have any questions or need help.

<!-- CONTRIBUTING -->

## Contributing

We welcome contributions from the community.

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>