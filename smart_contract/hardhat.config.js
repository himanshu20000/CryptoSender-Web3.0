require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    rinkeby : {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/doSeiK8HIOlU98Ao6jEn3VYwc06xKbjA',
      accounts: [ '50a5ae55d03b35c65550454a3a38c30aedc8f3e92ef3293ffeab045c2ffab165' ]
    },
  },
 }