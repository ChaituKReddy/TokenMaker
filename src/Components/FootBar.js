import {useState, useEffect} from 'react';
const FootBar = ({chainId}) => {

    //State
    const [network, setNetwork] = useState('');

    const checkNetwork = async(chainId) => {
        if(chainId === '') {
            setTimeout(() => {
                console.log("Yoo");
            }, 1000);
        } else {
            if(chainId === '4') setNetwork('Rinkeby network(Ethereum Testnet)');
            else if(chainId === '1') setNetwork('Ethereum Mainnet network');
            else if(chainId === '2a') setNetwork('Kovan network(Ethereum Testnet)');
            else if(chainId === '3') setNetwork('Ropsten network(Ethereum Testnet)');
            else if(chainId === '38' || chainId === '56') setNetwork('Binance Mainnet network')
            else if(chainId === '97' || chainId === '61') setNetwork('Binance Testnet network'); 
            else setNetwork('Invalid network');
        }
    }

    useEffect(() => {
        checkNetwork(chainId);
    },[chainId])
    
    return(
        <div className="footbar">
            <div className="networkdetails">
                You are currently on {network} 
            </div>
        </div>
    );
}

export default FootBar;