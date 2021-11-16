require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enroll supply suggest name release mad around good arena army gather'; 
let testAccounts = [
"0x12734f274fb983b20df1a03e47fd4a80f9c014a88a1ebfacea7a64051a2bc67b",
"0x411e6effc1a96e27f09575217bb004724959df3a812ad0aff34c95029d665a26",
"0x2c184f5c2ca63a775eaf6708f3c545d1186d803f7bb9ea2f50176bd5e1ad59a5",
"0xbf8e445ff762a2e1f15adc95e9c2a5555299343244df2a0fbb7ea92bd4cfc68b",
"0xbb23f33f5d600b9800f5d745e645861372f6df85d1ebfc8f02e75ff7812b67f7",
"0x56b609d35ff5c916171b8c81acad5f628669a148863e55b24d6ee31ce59a0eb9",
"0xbbdae5ddadbe4815c995632334650769037516e4057541a9478b00c292129b55",
"0xb5e9d2a69fdb357e7f6cebd14df52e4e36103e8d02f04cd6ad70d058dc3bdade",
"0xee26c1b5c76605a60628e08cca2f17934dc31c3b95f29dbf1b4c41084c61bd3c",
"0x97bb723fc5c7f8e4ac69fd58e5ff98bb31ae7d3ff8b8c196ff2e85096d51dffb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

