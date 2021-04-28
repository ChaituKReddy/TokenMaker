import './Styles/all.scss';
import NavBar from './Components/NavBar';
import DashBoard from './Components/DashBoard';
import {useState, useEffect} from 'react';
import Web3 from 'web3';

function App() {

  const [account, setAccount] = useState('');
  const[web3, setWeb3] = useState('');

  useEffect(() => {
    loadWeb3();
    // console.log(account)
    // loadBlockchainData();
    // console.log("App");
    document.title = "This is a title"
  },[])

  const loadWeb3 = async() => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      setWeb3(web3);
    } if(window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      setWeb3(web3);
    } else {
      window.alert("Please install MetaMask!");
    }
  }

  useEffect(() => {
    async function listenMMAccount() {
      window.ethereum.on("accountsChanged", async function() {
        // Time to reload your interface with accounts[0]!
        const accounts = await window.web3.eth.getAccounts();
        // accounts = await web3.eth.getAccounts();
        // console.log(accounts);
        setAccount(accounts[0]);
      });
    }
    listenMMAccount();
  }, []);

  return (
    <div className="App">
      <NavBar account={account}/>
      <DashBoard account = {account} web3={web3}/>
      {console.log(account)}
    </div>
  );
}

export default App;
