import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import abi from './ABI.json';

function Pay() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    address: null,
  });

  const [balance, setBalance] = useState(null);
  const contractAddress = '0x788f9B6f9Bf5F8965D793055C3F256152a121b07';

  useEffect(() => {
    const Checker = async () => {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setState({ provider, signer, address });
      } catch (error) {
        console.error('Error fetching user account:', error);
      }
    };
    Checker();
  }, []);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const { provider } = state;
        const contract = new ethers.Contract(contractAddress, abi, provider);
        const bal = await contract.getBalance();
        setBalance(bal.toString());
      } catch (error) {
        console.error('Error fetching contract balance:', error);
      }
    };
    if (state.address) {
      fetchBalance();
    }
  }, [state]);

  //Add Money 

  const [money , setMoney]=useState()
  const AddMoney=async()=>{
    try {
        const { signer } = state;
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const bal = await contract.contribute(money);
      
      } catch (error) {
        console.error('Error fetching contract balance:', error);
      }
  }

  //withdraw Money

  const [withs , setWiths]=useState()
  const Withdarw=async()=>{
    try {
        const { signer } = state;
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const bal = await contract.withdraw(withs);
        console.log(bal)
      } catch (error) {
        console.error('Error fetching contract balance:', error);
      }
  }

  //UserInform user Information 
const [add , setAdd]=useState()
const [num , setNum]=useState()
const [nam , setNam]=useState()

const Information=async()=>{
    try {
        const { signer } = state;
        const contract = new ethers.Contract(contractAddress, abi, signer);
        const bal = await contract.UserInformaion(add , num , nam,{
            value: ethers.utils.parseEther("0.0000000000000001")
        });
        console.log(bal)
      } catch (error) {
        console.error('Error fetching contract balance:', error);
      }
  }


  return (
    <div>

<input type="text" name="" id="" onChange={(e)=>setAdd(e.target.value)} placeholder='address '/>
<br />
<input type="number" name="" id=""  onChange={(e)=>setNum(e.target.value)} placeholder='number '/>
<br />
<input type="text" name="" id="" onChange={(e)=>setNam(e.target.value)} placeholder='string name'/>
<br />
<button onClick={Information}>fuck</button>
        <br />
        <br />
        <br />

        <input type="number" name="" id="" onChange={(e)=>setMoney(e.target.value)} placeholder='addMoney' />
<br />
<br />
        <button onClick={AddMoney}>cliced</button>
        <br />
<br />
<br />

        {/* //wITHDRAW Your Money */}

<input type="number" name="" id="" onChange={(e)=>setWiths(e.target.value)} placeholder='withdraw Money' />
<br />
<button onClick={Withdarw}>withdrawe</button>

{/* //With Pricess Draw  */}
      <h1>Pay</h1>
      {state.address && <p>User Address: {state.address}</p>}
      {balance !== null && <p>Contract Balance: {balance} ETH</p>}
    </div>
  );
}

export default Pay;