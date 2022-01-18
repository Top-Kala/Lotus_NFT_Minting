import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import animatelotus from '../assets/video/lotus.gif'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css';
import {ethers} from "ethers";
import contract from "../assets/ABI/Lotus.json";

function Mainbody() {
    const [value, setValue] = useState(1);
    const [signer, setSigner] = useState();
    const [title, setTitle] = useState('CONNECT WALLET');
    const [address, setAddress] = useState();
    const [balance, setBalance] = useState();
    const [nftContract, setNftContract] = useState();
    const [mintedCount, setMintedCount] = useState(0);
    const [mintedNFTCount, setMintedNFTCount] = useState(0);
    
    useEffect(() => {
        // Update the document title using the browser API
        if (isMetaMaskInstalled()) {
            console.log('MetaMask Connected: True');
            setTitle('Mint Now');
            connectMetaMaskHandler();
        } else {
            console.log('You need to install MetaMask extension.');
            setTitle('Connect Wallet');
            connectMetaMaskHandler();
            return;
        }
    }, []);

    const isMetaMaskInstalled = () => {
        // Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window
        return Boolean(ethereum && ethereum.isMetaMask)
    }

    const connectMetaMaskHandler = async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const { chainId } = await provider.getNetwork();
        console.log('Chain ID:', chainId);
        
        const signer = await provider.getSigner()
        setSigner(signer);

        const address = await provider.getSigner().getAddress()
        setAddress(address)
        console.log("Address:", address);

        const balance = await provider.getSigner().getBalance();
        setBalance(balance)
        console.log("Balance:", parseInt(balance._hex, 16));

        const nftContract = new ethers.Contract(contract.address, contract.abi, signer);
        setNftContract(nftContract);
        console.log(nftContract);

        const mintedNFT_Count_object = await nftContract._tokenIds();
        setMintedNFTCount(parseInt(mintedNFT_Count_object._hex, 16));
        console.log('Minted Total NFT Count:', mintedNFTCount)

        const mintedCount_Object = await nftContract.mintedCount(address);
        setMintedCount(parseInt(mintedCount_Object._hex, 16));
        console.log('Minted Token Count:', mintedCount);
    }

    const createNFTs = async () => {
        
        connectMetaMaskHandler();

        const amount = 1;
        const options = {value: ethers.utils.parseEther(amount.toString())};
        console.log('Price to transfer', parseInt(options.value._hex, 16));

        if (parseInt(balance._hex, 16) - parseInt(options.value._hex, 16) < 0){
            console.log("Low balance so you can't mint");
            return;
        }

        if (mintedNFTCount + value > 1500){
            console.log("Total Token NFT Count is 1500");
            return;
        }
        
        if (mintedCount >= 3) {
            console.log("Token count that you can mint is 3");
            return;
        }

        const tokenURI_list = "https://ipfs.io/ipfs/QmSmKGumWtYVKmFvBe3Y5UxAZjyqtb84HPhGNmp8EzrbAo/" + (mintedNFTCount + 1) + ".json";
        await nftContract.createToken(tokenURI_list, options);
    }

    return (
        <div className='main_container'>
            <div className='animatelotus_container'>
                <img src={animatelotus} className='animatelotus' />
            </div>
            <div className='mint_container'>
                <div style={{marginLeft:"auto", marginRight:"auto"}}>
                    <p>{mintedNFTCount}/1500</p>
                    <Button className='mint_button' variant="contained" onClick={createNFTs}>{title}</Button>
                </div>
            </div>
        </div>
    )
}

export default Mainbody;
