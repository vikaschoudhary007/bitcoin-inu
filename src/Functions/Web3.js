import Web3 from 'web3';

/////////// CHECK IF BROWSER IS ENABLED WITH Web3 //////////////

const loadWeb3 = async () => {
  try {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      // window.alert('Non-Ethereum browser detected. you should consider trying MetaMask')
    }
  } catch (err) {
    console.log('error', err);
  }
};

////////// GET METAMASK ACCOUNT AND CREATE CONTRACT INSTANCES ////////////////

const loadBlockChainData = async (
  setAccount,
  setNetworkId,
  setTokenContract,
  setConnectTag
) => {
  try {
    const web3 = window.web3;
    // Load Account
    const accounts = await web3.eth.getAccounts();

    await setAccount(accounts[0]);
    localStorage.account = accounts[0] || '';

    setConnectTag(
      localStorage.account.slice(0, 4) +
        '...' +
        localStorage.account.slice(38, 42)
    );

    // listen the Network ID
    const networkId = await web3.eth.net.getId();
    await setNetworkId(networkId);
    localStorage.networkId = networkId;
    // const tokenContract = await new web3.eth.Contract(
    //   TokenABI,
    //   TokenContractAddress
    // );

    // const guessContract = await new web3.eth.Contract(
    //   GuessABI,
    //   GuessContractAddress
    // );
    // await setTokenContract(tokenContract);
  } catch (err) {
    console.log(err);
  }
};

////////// CHECK IF USER SELECTED A DIFFERENT ACCOUNT IN METAMASK ///////////////

const listenAccountChange = async (setAccount, setConnectTag) => {
  try {
    const web3 = window.web3;
    window.ethereum.on('accountsChanged', async () => {
      const accounts = await web3.eth.getAccounts();
      await setAccount(accounts[0]);
      localStorage.account = accounts[0] || '';

      setConnectTag(
        localStorage.account.slice(0, 4) +
          '...' +
          localStorage.account.slice(39, 42)
      );
    });
  } catch (err) {
    console.log(err);
  }
};

////////// CHECK IF USER SELECTED A DIFFERENT NETWORK ////////////

const listenNetworkChange = async (setNetworkId) => {
  const web3 = window.web3;
  window.ethereum.on('networkChanged', async () => {
    const networkId = await web3.eth.net.getId();
    await setNetworkId(networkId);
    localStorage.networkId = networkId;
  });
};

/////////// GET ALL THE DETAILS OF AN ACCOUNT /////////////////

const accountDetails = async (account, userData, setUserData, setLoading) => {
  try {
    setLoading(true);
    const web3 = window.web3;

    // const tokenContract = await new web3.eth.Contract(
    //   TokenABI,
    //   TokenContractAddress
    // );

    // const binuBalance = await tokenContract.methods
    //   .balanceOf(account)
    //   .call({ from: account });

    // await setUserData({
    //   ...userData,
    //   binuBalance: binuBalance,
    // });

    setLoading(false);
  } catch (err) {}
};

export {
  loadWeb3,
  loadBlockChainData,
  listenAccountChange,
  listenNetworkChange,
  accountDetails,
};
