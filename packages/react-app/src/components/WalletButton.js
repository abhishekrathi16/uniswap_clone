import React, { useState, useEffect } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

const WalletButton = () => {
  const [accountAddress, setAccountAddress] = useState("");
  //ENS
  const { ens } = useLookupAddress();
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    if(ens){
      setAccountAddress(ens)
    } else if(account){
      setAccountAddress(shortenAddress(account))
    } else {
      setAccountAddress('')
    }
  }, [account, ens, setAccountAddress]);
  return (
    <button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.walletButton}
    >
      {accountAddress || "Connect Wallet"} 
      {/* show account address if wallet is connected or show Connect Wallet if the account is not connected */}
    </button>
  );
};

export default WalletButton;
