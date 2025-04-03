# EVM TX & DEPLOYER BOT
The Evm Testnet Bot is a powerful tool designed for interacting with EVM-compatible networks. This bot automates transaction processes, enabling users to perform actions such as ETH to WETH swap interactions seamlessly and daily. Additionally, it provides a built-in smart contract deployment feature, making it an ideal solution for you to do your testnet airdrop.



## Prerequisite
- Git
- Node JS (v22)


```
                                                          
                      ...                                 
                     .;:.                                 
                    .;ol,.                                
                   .;ooc:'                                
            ..    .;ooccc:'.    ..                        
          .',....'cdxlccccc;.....,'.                      
         .;;..'';clolccccccc:,''..;;.                     
        ':c'..':cccccccccccccc;...'c:.                    
       ':cc,.'ccccccccccccccccc:..;cc:'                   
    ...:cc;.':cccccccccccccccccc:..:cc:...                
   .;';cc;.':;;:cccccccccccccc:;;;'.;cc,,;.               
  .cc':c:.',.....;cccccccccc;.....,..:c:'c:               
  ,x:'cc;.,'     .':cccccc:'.     ',.;cc':x'              
  lO,'cc;.;,       .;cccc:.       ,;.;cc';0l              
 .o0;.;c;.,:'......',''''''......':,.;c;.:0l.             
 .lxl,.;,..;c::::;:,.    .,:;::::c;..,;.,oxl.             
 .lkxOl..  ..'..;::'..''..'::;..'..  ..c0xkl.             
  .cKMx.        .;c:;:cc:;:c:.        .xMKc.              
    ;KX:         ;o::l:;cc;o:.        ;KK;                
     :KK:.       ,d,cd,'ol'o:       .:0K:                 
      ;0NOl:;:loo;. ... .. .;ldlc::lkN0:                  
       .lONNNKOx0Xd,;;'.,:,lKKkk0XNN0o.                   
         .','.. .lX0doooodOXd.  .','.                     
                 .,okkddxkd;.                             
                    'oxxd;.                               
   ...........................................                              
   .OWo  xNd      loxxol      xxx        xxx . 
   .OWo  o0W     cXW   WXc      xxx     xxx  .  
   .kMKoxsNN    dW0xxxxx0wd      xxxxxxxxx   .   
   .OMWXNaMX    kM0xxxxxx0Mk       xxxxxx    .        
   .OMk  dWK   XWd       dWX     xxx    xxx  .       
   'OWo  dM0  'XNN        NNx  xxx        xxx.       
   ........................................... 

```           
                                              
                                              




## BOT FEATURE
- Multi Account 
- Support PK & SEED
- Auto TX Daily (Wrap Unwrap ETH)
- Auto TX Daily With RAW TX DATA
- Auto TX Daily (SELF TRANSFER)
- Deploy Smart Contract

## First Request faucet: https://faucet-sepolia.tea.xyz/
## Second Begin KYC: https://sepolia.app.tea.xyz/sign-up
- Guide: https://tea.xyz/blog/attestation-flow-for-tea-airdrop

## Setup & Configure BOT

### Linux
1. Clone project repo
   ```
   git clone https://github.com/Gmhax/evm-tx-deployer-bot.git && cd evm-tx-deployer-bot
   ```
2. Run
   ```
   npm install
   ```
   ```
   git pull
   ```

3. Run
   ```
   cp -r accounts/accounts_tmp.js accounts/accounts.js && cp -r config/config_tmp.js config/config.js
   ```
4. Configure your accounts
   ```
   nano accounts/accounts.js
   ```

5. Configure the bot config
    ```
   nano config/config.js
    ```

## Example Config 
 `config.js` 
```js
export class Config {
  static GWEIPRICE = 25;
  static WAITFORBLOCKCONFIRMATION = true;
  static TXAMOUNTMIN = 0.0001;
  static TXAMOUNTMAX = 0.001;

  static USEWRAPUNWRAP = false;
  static WRAPUNWRAPCOUNT = 0;
  static WRAPPEDTOKENCONTRACTADDRESS = undefined;

  static USERAWTXDATA = true;
  static RAWTXCOUNT = 10;
  static RAWTX = [
    "0x773acdef0000000000000000000000000000000000000000000000000000000000000001",
  ];
  static RAWTXAMOUNT = 0;
  static RAWTXCONTRACTADDRESS = "0x2ADb4Da762E8Ad3Ebf050cEe0DaEF23d0f3C1Ed2";

  static USETRANSFER = true;
  static SELFTRANSFERCOUNT = 100;
  static OTHERUSERTRANSFERCOUNT = 0;
  static OTHERUSERADDRESSLIST = ["0xB2D5dF8BDB3230609F58D0A7B5A2f6A0B8eF3d04", ]; //add ka ng more address here mas marami mas maganda

  static DEPLOYCONTRACTINTERACTION = true;
  static DEPLOYCONTRACTINTERACTIONCOUNT = 10;
  static DEPLOYCONTRACTADDRESS = "0x2ADb4Da762E8Ad3Ebf050cEe0DaEF23d0f3C1Ed2";

  static RPC = {
    CHAINID: 10218,
    RPCURL: "https://tea-sepolia.g.alchemy.com/public", 
    EXPLORER: "https://sepolia.tea.xyz",
    SYMBOL: "$TEA",
  };
}
```

- Create session:
   ```
   screen -S Teaprotocol
   ```

6. To run Auto TX
   ```
   npm run start
   ```

   



## IMPORTANT NOTE (READ IT THIS IS NOT DECORATION)
DWYOR & Always use a new wallet when running the bot, I am not responsible for any loss of assets.

If any error regarding SQL, try to delete `database.db` first


## UNDERSTANDING CONFIG
Config `config.js` file is a configuration file for this bot, it contains this kinds of parameter

## Config Template File
config template file is on `config_tmp.js`
```js
export class Config {
  static GWEIPRICE = 0.15; //GWEI PRICE
  static WAITFORBLOCKCONFIRMATION = true; //IF TRUE AFTER TX EXECUTED BOT WILL WAIT TX TO BE MINED FIRST, IF FALSE AFTER TX EXECUTED BOT WILL CONTINUE TO NEXT TX
  static TXAMOUNTMIN = 0.0001; //TX AMOUNT MIN
  static TXAMOUNTMAX = 0.001; //TX AMOUNT MAX

  //WRAP UNWRAP SECTION
  static USEWRAPUNWRAP = false; //IF TRUE THE BOT WILL EXECUTE WRAP UNWRAP TX
  static WRAPUNWRAPCOUNT = 10; //1 WRAPUNWRAPCOUNT = 2x TX (Wrap / Unwrap) OR (SWAP ETH TO WETH AND SWAP BACK)
  static WETHCONTRACTADDRESS = undefined; //WETH SMART CONTRACT ADDRESS EX: "0x"

  //RAW TX SECTION
  static USERAWTXDATA = false; //IF TRUE THE BOT WILL EXECUTE USE RAW TX
  static RAWTXCOUNT = 10; //COUNT OF RAW TX
  static RAWTXAMOUNT = 0; //RAW DATA TRANSACTION VALUE AMOUNT CHECK ON YOUR TRANSACTION EXPLORER > VALUE EX : 0 ANOTHER EX : 0.1
  static RAWTX = []; //RAW DATA FROM A TRANSACTION EX: ["0x0fxxxxxxxxforacc1","0x0fxxxxxxxxforacc2","0x0fxxxxxxxxforacc3"] BASED ON HOUW MANY OF YOUR ACCOUNTS, EACH ACCOUNT HAVE 1 RAW DATA, MAKE SURE THIS IS RAW DATA OF TRANSACTION THAT MATCH YOUR RAWTX AMOUNT
  static RAWTXCONTRACTADDRESS = undefined; //CONTRACT ADDRESS OF RAW TX

  //TRANSFER SECTION
  static USETRANSFER = true;
  static SELFTRANSFERCOUNT = 10; //TRANSFER NATIVE TOKEN TO YOUR SELF
  static OTHERUSERTRANSFERCOUNT = 0; //TRANSFER NATIVE TOKEN TO OTHER USER
  static OTHERUSERADDRESSLIST = []; //OTHER USER LIST ["0xuser1","0xuser2","0xuser3"] USER WILL RANDOMLY PICKED

  //INTERACTION WITH DEPLOYED CONTRACT SECTION
  static DEPLOYCONTRACTINTERACTION = false;
  static DEPLOYCONTRACTINTERACTIONCOUNT = 10;
  static DEPLOYCONTRACTADDRESS = undefined; //EX : "0x0000000000" MAKE SURE CONTRACT ALREADY VERIFIED

  //RPC PROVIDER SECTION
  static RPC = {
    CHAINID: undefined, //CHAIN ID EX: 123123
    RPCURL: undefined, //RPC URL EX : "https://xxx"
    EXPLORER: undefined, //BLOCK EXPLORER EX "https://explorer"
    SYMBOL: "ETH", //CURRENCY SYMBOL EX: "ETH"
  };
}

```
## You can also interact with TEA dApps: https://docs.google.com/spreadsheets/d/1qHd473i6cowH8eEImzaPVSKe590rkx6j8mysLRVTReQ/edit?usp=sharing

