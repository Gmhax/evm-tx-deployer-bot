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
  static RAWTX = {
    CONTRACTTOINTERACT: "CONTRACTADDRESSTOINTERACT",
    RAWDATA: "RAWDATA",
  };

  //TRANSFER SECTION
  static USESELFTRANSFER = false;
  static SELFTRANSFERCOUNT = 10;
  static CONTRACTADDRESS = undefined; //undefined for ETH / FILL WITH YOUR DEPLOYED CONTRACT

  //RPC PROVIDER SECTION
  static RPC = {
    CHAINID: undefined, //CHAIN ID EX: 123123
    RPCURL: undefined, //RPC URL EX : "https://xxx"
    EXPLORER: undefined, //BLOCK EXPLORER EX "https://explorer"
    SYMBOL: "ETH",
  };
}
