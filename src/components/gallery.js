import contract from "../contract/contract.json";

import Web3 from "web3";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { cleanup } from "@testing-library/react";
import { Navbar, Row, Col, Nav, Container, Button, Form, NavDropdown, FormControl } from 'react-bootstrap';
import Art from './Art';

//used to connect to blockchain
const initialInfo = {
  connected: false,
  status: null,
  account: null, //account connected to web app
  contract: null,
};

const initDropState = {
  loading: false,
  list: [],
};

const Gallery = () => {
  const [info, setInfo] = useState(initialInfo);
  const [drops, setDrops] = useState(initDropState);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const init = async () => {
    //checks to see if user has a metamask wallet
    if (window.ethereum?.isMetaMask) {
      const accounts = await window.ethereum.request({
        //waits for accounts to be obtained from metamask

        method: "eth_requestAccounts",
      });
      const networkID = await window.ethereum.request({
        //checks to see what network user is on (1 = eth, 2 = polygon, etc...)
        method: "net_version",
      });
      //checks to see if running  test network
      if (networkID == 5) {
        let web3 = new Web3(window.ethereum);
        setInfo({
          ...initialInfo,
          connected: true,
          account: accounts[0],
          contract: new web3.eth.Contract(contract.abi, contract.address),
        });
      } else {
        setInfo({
          ...initialInfo,
          status: "Please enter Goerli test network",
        });
      }
    } else {
      setInfo({
        ...initialInfo,
        status: "Please install MetaMask.",
      });
    }
  };

  //checks status of users wallet
  const initOnChanged = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        window.location.reload(); //reloads page on account change
      });
      window.ethereum.on("chainChanged", () => {
        window.location.reload(); // reloads page if chain changes ( example: kovan to main net)
      });
    }
  };

  const getDrops = async () => {
    setDrops((prevState) => ({
      ...prevState,
      loading: true,
    }));
    info.contract.methods
      .getDrops()
      .call()
      .then((res) => {
        setDrops({
          ...drops,
          loading: false,
          list: res,
        });
      })
      .catch((err) => {
        console.log(err);
        setDrops(initDropState);
      });
  };

  const onSubmit = (data) => {
    let newData = {
      imageUri: data.imageUri,
      name: data.name,
      description: data.description,
      websiteUri: data.websiteUri,
      social_1: data.social_1,
      social_2: data.social_2,
      price: data.price,
      supply: Number(data.supply),
      presale: Number(data.presale),
      sale: Number(data.sale),
      chain: Number(data.chain),
      approved: false,
    };

    info.contract.methods
      .addDrop(Object.values(newData))
      .send({ from: info.address }) // adds drop from existing users metamask account address
      .then((res) => {
        setDrops({
          ...drops,
          loading: false,
          list: res,
        });
      })
      .catch((err) => {
        console.log(err);
        setDrops(initDropState);
      });
  };

  useEffect(() => {
    init();
    initOnChanged();
  }, []);

  useEffect(() => {
    if (info.contract) {
      getDrops();
    }
  }, [info]);

  return (
    <div>
      <div className={"header"}>
        <h3>NFT Lister </h3>
      </div>
      <div className={"content"}>
      <Row className ="artCard"> 
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
    </Row>
    <Row className = "artCard">  
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
        <Col className="artCol" sm={6} md={6} lg={4}>
        <Art />
        </Col>
    </Row>
        
            {drops.list.map((item) => {
              return (
                <div className={"nftContainer"}>
                  <div>
                    <p className={"nftText"}>{item.name}</p>
                    <p className={"nftText"}>{item.description}</p>
                    <img
                      className={"nftImage"}
                      alt={"drop image"}
                      src={item.imageUri}
                    />
                  </div>

                  <div>
                    <p className={"nftText"}>Instagram: {item.social_1}</p>
                    <p className={"nftText"}>Website: {item.social_2}</p>
                  </div>
                  <div>
                    <p className={"nftText"}>Total Supply: {item.supply}</p>
                    <p className={"nftText"}>Presale Date: {item.presale}</p>
                    <p className={"nftText"}>Sale Date: {item.sale}</p>
                  </div>
                </div>
              );
            })}
       
          
      </div>
    </div>
  );
};
//["https://testtest.com/3.png",  "Tester Nft",   "This is a random drop",  "twitter",  "https://testtest.com",  "fasfas", "0.03",  "22",  163579023, 163579023, 1,  false ]
//["https://api.thewildbunch.io/wildbunch/3568.png",  "One of 4000",   "The Wild Bunch",  "twitter",  "https://testtest.com",  "fasfas", "0.03",  "22",  163579023, 163579023, 1,  false ]
export default Gallery;
