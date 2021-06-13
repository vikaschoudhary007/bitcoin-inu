import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import LiveMarket from './Components/LiveMarket';
import About from './Components/About';
import WhyChooseUs from './Components/WhyChooseUs';
import TokenSale from './Components/TokenSale';
import Calculator from './Components/Calculator';
import TokenImage from './Components/TokenImage';
import Roadmap from './Components/Roadmap';
import Download from './Components/Download';
import Team from './Components/Team';
import Faq from './Components/Faq';
import Contact from './Components/Contact';
import CompanyPartner from './Components/CompanyPartner';
import Footer from './Components/Footer';
import Swal from 'sweetalert2';
import {
  loadWeb3,
  loadBlockChainData,
  listenAccountChange,
  listenNetworkChange,
} from './Functions/Web3';
import { UserProvider } from './Context/UserContext';
function App() {
  const [loading, setLoading] = useState(false);
  const [metaMaskInstalled, setMetaMaskInstalled] = useState(false);
  const [account, setAccount] = useState('');
  const [networkId, setNetworkId] = useState('');
  const [tokenContract, setTokenContract] = useState('');
  const [connectTag, setConnectTag] = useState('');
  const [userData, setUserData] = useState({
    bnbBalance: 0,
    binuBalance: 0,
  });

  useEffect(() => {
    const metaMaskInstalled = typeof window.web3 !== 'undefined';
    setMetaMaskInstalled(metaMaskInstalled);

    if (metaMaskInstalled) {
      loadWeb3(setMetaMaskInstalled);
      loadBlockChainData(
        setAccount,
        setNetworkId,
        setTokenContract,
        setConnectTag
      );
      listenAccountChange(setAccount, setConnectTag);
      listenNetworkChange(setNetworkId);
      // accountDetails(account, userData, setUserData, setLoading);
    } else {
      Swal.fire({
        width: 400,
        background: `#af0069`,
        iconColor: '#4F94CD',
        title: `<span style='color:white'>Non-Ethereum browser detected</span> `,
        text: `You should consider MetaMask`,
        footer: `<a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Install MetaMask</a>`,
        showConfirmButton: false,
        showCloseButton: true,
        imageUrl: `${process.env.PUBLIC_URL + '/img/logo.png'}`,
        imageHeight: 80,
        imageWidth: 80,
      });
    }
  }, []);

  const handleConnect = () => {
    const metaMaskInstalled = typeof window.web3 !== 'undefined';
    setMetaMaskInstalled(metaMaskInstalled);

    if (metaMaskInstalled) {
      loadWeb3(setMetaMaskInstalled);
      loadBlockChainData(
        setAccount,
        setNetworkId,
        setTokenContract,
        setConnectTag
      );
      listenAccountChange(setAccount, setConnectTag);
      listenNetworkChange(setNetworkId);
    } else {
      Swal.fire({
        width: 400,
        background: ``,
        iconColor: '#af0069',
        title: `<span style='color:white'>Non-Ethereum browser detected</span> `,
        text: `You should consider MetaMask`,
        footer: `<a target="_blank" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en">Install MetaMask</a>`,
        showConfirmButton: false,
        showCloseButton: true,
        imageUrl: `${process.env.PUBLIC_URL + '/img/logo.png'}`,
        imageHeight: 80,
        imageWidth: 80,
      });
    }
  };

  return (
    <>
      <UserProvider
        value={{
          metaMaskInstalled,
          setMetaMaskInstalled,
          account,
          setAccount,
          networkId,
          setNetworkId,
          tokenContract,
          setTokenContract,
          loadWeb3,
          loadBlockChainData,
          listenAccountChange,
          listenNetworkChange,
          connectTag,
          handleConnect,
          userData,
          loading,
          setUserData,
        }}
      >
        <Router>
          <Navbar />
          <Home />
          <LiveMarket />
          <About />
          <WhyChooseUs />
          <TokenSale />
          <Calculator />
          <TokenImage />
          <Roadmap />
          <Download />
          <Team />
          <Faq />
          <Contact />
          <CompanyPartner />
          <Footer />
        </Router>
      </UserProvider>
    </>
  );
}

export default App;
