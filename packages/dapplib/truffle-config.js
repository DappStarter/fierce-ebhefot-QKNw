require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enroll frame short fan razor meadow arrow grid knife army gesture'; 
let testAccounts = [
"0x980467222a7d78e0415cb17743ea4794bda15c1c3fa83210794c81ad4370d96d",
"0xab26740a6e6d4fa933fcc5aea6f9e13568a76a984f444c6f13992675b44205a5",
"0x315371abac8b2797727a4996e3d09458f42cd2e55c8d90baf24a2a5d8e605e13",
"0xd39d2db3c950e5ca6f35221055fb4d7146899ae2b02bb9967a47e45136297ff6",
"0xce2ef5d572631dad4c519c31618ca0a2cd86482e6023d9a7351666d8d4ee5ae1",
"0x498927a9f2f5ade2c90c6e87001eee818a1a15865a886b9581ca789cccb3a9ad",
"0xccb4e66eee79bfe785d99d8e8acd4fa44d03ca14689ff2b0010ef996db29f2cc",
"0xce134f4a36af5e14dd056621ce77bfcbd7536a0501d8ea576681e736acd643e8",
"0x81e4fae0508be049db6c4f18ec9a0bf8f9502296d4369d69818ea13c4f4b0c50",
"0xc994ec95033512a2cc3c79a2aa201eb3d04f10e117aa0939a051b776e5512c5f"
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

