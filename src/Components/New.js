import {useState, useEffect} from 'react';
import Web3 from 'web3';
const New = ({account, web3, chainId}) => {

    //State
    const [name, setName] = useState('');
    const [symbol, setSymbol] = useState('');
    const [decimals, setDecimals] = useState('');
    const [totalSupply, setTotalSupply] = useState('');
    const [owner, setOwner] = useState('');
    const [error, setError] = useState('');
    // const [token, setToken] = useState('');
    const [step, setStep] = useState(0);
    const [tokenAddress, setTokenAddress] = useState('');
    const [uni, setUni] = useState('');
    const [pan, setPan] = useState('');

    useEffect(() => {
        setStep(0);
    },[chainId])

    const createToken = () => {
        let result = Web3.utils.isAddress(owner);
        const decimals1 = Number(decimals);
        const decimals2 = 10 ** decimals1;
        const decimals3 = decimals2.toString().substring(1);
        const supply = totalSupply + decimals3.toString();
        // console.log(isNaN(decimals));
        // console.log(isNaN(Number(supply)));
        if(!result || isNaN(decimals) || isNaN(supply)) {
            setError("Wrong parameters");
            setTimeout(() => {
                setError('');
            }, 2000);
            setTotalSupply('');
            setDecimals('');
            setOwner('')
        } else {
        if(account === '') {
            setError('Unlock Metamask');
            setTimeout(() => {
                setError('');
            }, 2000);
        } else {
            if(name === '' || symbol === '' || decimals === '' || totalSupply === '' || owner === ''){
                    setError("Wrong parameters");
                    setTimeout(() => {
                        setError('');
                    }, 2000);
                    
            } else {
                var tokenContract = new web3.eth.Contract([{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"address","name":"tokenOwnerAddress","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]);
                var token = tokenContract.deploy({
                    data: '0x6080604052604051620016f1380380620016f1833981810160405260a08110156200002957600080fd5b81019080805160405193929190846401000000008211156200004a57600080fd5b838201915060208201858111156200006157600080fd5b82518660018202830111640100000000821117156200007f57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000b557808201518184015260208101905062000098565b50505050905090810190601f168015620000e35780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010757600080fd5b838201915060208201858111156200011e57600080fd5b82518660018202830111640100000000821117156200013c57600080fd5b8083526020830192505050908051906020019080838360005b838110156200017257808201518184015260208101905062000155565b50505050905090810190601f168015620001a05780820380516001836020036101000a031916815260200191505b506040526020018051906020019092919080519060200190929190805190602001909291905050508460039080519060200190620001e092919062000485565b508360049080519060200190620001f992919062000485565b5082600560006101000a81548160ff021916908360ff1602179055506200022781836200023260201b60201c565b505050505062000534565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620002f281600254620003fc60201b62000ea31790919060201c565b60028190555062000350816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620003fc60201b62000ea31790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b6000808284019050838110156200047b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004c857805160ff1916838001178555620004f9565b82800160010185558215620004f9579182015b82811115620004f8578251825591602001919060010190620004db565b5b5090506200050891906200050c565b5090565b6200053191905b808211156200052d57600081600090555060010162000513565b5090565b90565b6111ad80620005446000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806342966c681161007157806342966c68146102d057806370a08231146102fe57806395d89b4114610356578063a457c2d7146103d9578063a9059cbb1461043f578063dd62ed3e146104a5576100b4565b806306fdde03146100b9578063095ea7b31461013c57806318160ddd146101a257806323b872dd146101c0578063313ce56714610246578063395093511461026a575b600080fd5b6100c161051d565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101886004803603604081101561015257600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105bf565b604051808215151515815260200191505060405180910390f35b6101aa6105d6565b6040518082815260200191505060405180910390f35b61022c600480360360608110156101d657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105e0565b604051808215151515815260200191505060405180910390f35b61024e610691565b604051808260ff1660ff16815260200191505060405180910390f35b6102b66004803603604081101561028057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506106a8565b604051808215151515815260200191505060405180910390f35b6102fc600480360360208110156102e657600080fd5b810190808035906020019092919050505061074d565b005b6103406004803603602081101561031457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061075a565b6040518082815260200191505060405180910390f35b61035e6107a2565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561039e578082015181840152602081019050610383565b50505050905090810190601f1680156103cb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610425600480360360408110156103ef57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610844565b604051808215151515815260200191505060405180910390f35b61048b6004803603604081101561045557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108e9565b604051808215151515815260200191505060405180910390f35b610507600480360360408110156104bb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610900565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105b55780601f1061058a576101008083540402835291602001916105b5565b820191906000526020600020905b81548152906001019060200180831161059857829003601f168201915b5050505050905090565b60006105cc338484610987565b6001905092915050565b6000600254905090565b60006105ed848484610b7e565b610686843361068185600160008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e1a90919063ffffffff16565b610987565b600190509392505050565b6000600560009054906101000a900460ff16905090565b6000610743338461073e85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ea390919063ffffffff16565b610987565b6001905092915050565b6107573382610f2b565b50565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561083a5780601f1061080f5761010080835404028352916020019161083a565b820191906000526020600020905b81548152906001019060200180831161081d57829003601f168201915b5050505050905090565b60006108df33846108da85600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e1a90919063ffffffff16565b610987565b6001905092915050565b60006108f6338484610b7e565b6001905092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806111556024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a93576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806110ed6022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610c04576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806111306025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c8a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806110ca6023913960400191505060405180910390fd5b610cdb816000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e1a90919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610d6e816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610ea390919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b600082821115610e92576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b600082840390508091505092915050565b600080828401905083811015610f21576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610fb1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061110f6021913960400191505060405180910390fd5b610fc681600254610e1a90919063ffffffff16565b60028190555061101d816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610e1a90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f2061646472657373a265627a7a723158209a50a437e5c97b7e5a9af8877afbcd6652d4ea0df467cc5daa55e4c11edeb78864736f6c63430005100032', 
                    arguments: [
                        name,
                        symbol,
                        decimals,
                        supply.toString(),
                        owner,
                    ]
                }).send({
                    from: account, 
                    gas: '4700000'
                }, function(e, contract) {
                    console.log(e, contract);
                    if(e !== null && e.code === 4001) {
                        // console.log('Rejected');
                        setError("User Denied transaction, try again");
                        setTimeout(() => {
                            setError('');
                        }, 5000)
                    } else {
                    let link;
                    if(chainId === '4') {link = 'https://rinkeby.etherscan.io/tx/' + contract;}
                    else if(chainId === '1') {link = 'https://etherscan.io/tx/' + contract;}
                    else if(chainId === '2a') {link = 'https://kovan.etherscan.io/tx/' + contract;}
                    else if(chainId === '3') {link = 'https://ropsten.etherscan.io/tx/' + contract;}
                    else if(chainId === '38' || chainId === '56') {link = 'https://bscscan.com/tx/' + contract;}
                    else if(chainId === '97' || chainId === '61') {link = 'https://testnet.bscscan.com/tx/' + contract;}
                    setError(<a href={link} target="_blank" rel="noreferrer">Check Transaction on BlockExplorer</a>)
                    const rec = async() => {
                                const r = await token;
                                console.log(r);
                                const address = r.options.address;
                                let tokenLink;
                                if(chainId === '4') {tokenLink = 'https://rinkeby.etherscan.io/address/' + r.options.address;}
                                else if(chainId === '1') {tokenLink = 'https://etherscan.io/address/' + r.options.address;}
                                else if(chainId === '2a') {tokenLink = 'https://kovan.etherscan.io/address/' + r.options.address;}
                                else if(chainId === '3') {tokenLink = 'https://ropsten.etherscan.io/address/' + r.options.address;}
                                else if(chainId === '38' || chainId === '56') {tokenLink = 'https://bscscan.com/address/' + r.options.address;}
                                else if(chainId === '97' || chainId === '61') {tokenLink = 'https://testnet.bscscan.com/address/' + r.options.address;}
                                // const tokenLink = 'https://rinkeby.etherscan.io/address/' + r.options.address;
                                setTokenAddress(<a href={tokenLink} target = "_blank" rel="noreferrer">{address}</a>);
                                // setError(<a href={tokenLink} target = "_blank" rel="noreferrer">{address}</a>);
                                // setToken('Token address:')
                                const uniLink = 'https://app.uniswap.org/#/add/ETH/' + address;
                                const panLink = 'https://exchange.pancakeswap.finance/#/add/BNB/' + address;
                                setPan(panLink);
                                setUni(uniLink);
                                setStep(2);

                                try {
                                    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
                                    const wasAdded = await window.ethereum.request({
                                      method: 'wallet_watchAsset',
                                      params: {
                                        type: 'ERC20', // Initially only supports ERC20, but eventually more!
                                        options: {
                                          address: address, // The address that the token is at.
                                          symbol: symbol, // A ticker symbol or shorthand, up to 5 chars.
                                          decimals: decimals, // The number of decimals in the token
                                        //   image: tokenImage, // A string url of the token logo
                                        },
                                      },
                                    });
                                  
                                    if (wasAdded) {
                                      console.log('Thanks for your interest!');
                                    } else {
                                      console.log('Your loss!');
                                    }
                                  } catch (error) {
                                    console.log(error);
                                  }
                            }
                    rec()
                    }
                })
            }
        }
    }
    }

    const network = (net) => {
        if (net === 'Ethereum') {
            console.log("Ethereum")
            if(chainId === '38' || chainId === '56' || chainId === '61' || chainId === '97') {
                console.log("Please switch to Ethereum network on Metamask");
                setStep(4);
            } else {
                setStep(1);
            }
        }
        if(net === 'Binance') {
            console.log("Binance")
            if(chainId === '4' || chainId === '1' || chainId === '2a' || chainId === '3') {
                console.log("Please switch to Binance network on Metamask");
                setStep(4);
            } else {
                setStep(1);
            }
        }
    }

    const back = () => {
        setStep(0);
        setName('');
        setSymbol('')
        setTotalSupply('');
        setDecimals('');
        setOwner('')
        setError('')
    }

    return (
        <div className="dashboard">
            <div className="tokenDashboard">
                <div className="tokenDetails">
                    <div className="titleD">
                        {step === 0 ? "Select Network" : null}
                        {step === 1 ? "Enter Token Details" : null}
                        {step === 2 ? "Token Details" : null}
                    </div>
                    <div className="details">
                        {step === 0 ? <div className="network">
                            <button onClick = {() => network('Ethereum')}>Ethereum</button>
                            <button onClick = {() => network('Binance')}>Binance</button>
                        </div> : null}
                        {step === 4 ? <div className="error"><div className="errorMessage">
                            Select correct network on Metamask
                        </div> 
                        <button onClick = {() => setStep(0)}> Home </button></div>  : null}
                        {step === 1 ? <div className="tokencontentdetails">
                            <div className="namediv">
                                Name: <input type="text" name="tokenName" value = {name} onChange = {(e) => setName(e.target.value)}/> 
                            </div>
                            <div className="symboldiv">
                                Symbol: <input type="text" name = "tokenSymbol" value = {symbol} onChange = {(e) => setSymbol(e.target.value)}/> 
                            </div>
                            <div className="decimaldiv">
                                Decimals: <input type="text" name = "tokenDecimals" value = {decimals} onChange = {(e) => setDecimals(e.target.value)}/> 
                            </div>
                            <div className="totalSupplydiv">
                                Total Supply: <input type="text" name = "tokenTotalSupply" value = {totalSupply} onChange = {(e) => setTotalSupply(e.target.value)}/>
                            </div>
                            <div className="ownerdiv">
                                Owner Address: <input type="text" name = "tokenOwnerAddress" value = {owner} onChange = {(e) => setOwner(e.target.value)}/>
                            </div>
                            <div className="createTokenButton">
                                <button onClick={createToken}>Create Token</button>
                                <button onClick = {() => back()}> Back </button>
                            </div>
                            <div className="postresults">
                                {error}
                            </div> 
                        </div> : null}
                        {step === 2 ? <div className="postTokenCreation">
                            <div className="posttokendetails">
                                <div className="tokenaddress">
                                    Token Address: {tokenAddress}
                                </div>
                                <div className="ownerbalance">
                                    <div className="owneraddress">
                                        Owner Address: {owner}
                                    </div>
                                    <div className="balance">
                                        Owner Balance: {totalSupply}
                                    </div>
                                </div> {chainId === '38' || chainId === '56' || chainId === '61' || chainId === '97' ? <div className="buttondiv">
                                    <div className="linkUniSwap">
                                        <a href={pan} target="_blank" rel="noreferrer"><button>PancakeSwap</button></a>
                                    </div>
                                    <div className="linkunicrypt">
                                    <a href="https://www.unicrypt.network/amm/pancakev2/locker" target="_blank" rel="noreferrer"><button>UniCrypt</button></a>
                                    </div> <div className="home">
                                    <button onClick = {() => back()}> Home </button>
                                    </div>
                                    </div> : <div className="buttondiv">
                                    <div className="linkUniSwap">
                                        <a href={uni} target="_blank" rel="noreferrer"><button>UniSwap</button></a>
                                    </div>
                                    <div className="linkunicrypt">
                                    <a href="https://www.unicrypt.network/amm/uni/locker" target="_blank" rel="noreferrer"><button>UniCrypt</button></a>
                                    </div> <div className="home">
                                    <button onClick = {() => back()}> Home </button>
                                    </div>
                                    </div> }
                            </div>
                        </div> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;