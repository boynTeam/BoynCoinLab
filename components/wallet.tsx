import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useSignMessage } from "wagmi";
import { verifyMessage } from "ethers/lib/utils";
import { useEffect, useRef, useState } from "react";
const Wallet = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();
  const [isSign, setIsSign] = useState(false);
  const renderConnect = () => {
    const signedComponent = () => (
      <div>
        <span className="px-2">
          Connected to{" "}
          {address?.substring(0, 4) + "...." + address?.substring(38)}
        </span>
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    );
    return isSign ? signedComponent() : <div>Signing</div>;
  };
  const renderDisconnect = () => {
    return (
      <div>
        <button onClick={() => connect()}>Connect</button>
      </div>
    );
  };

  const recoveredAddress = useRef<string>();
  const { data, error, isLoading, signMessage } = useSignMessage({
    onSuccess(data, variables) {
      // Verify signature when sign message succeeds
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
      setIsSign(true);
    },
  });

  useEffect(() => {
    signMessage({ message: "Welcome to boyn coin lab" });
  }, [address]);

  return isConnected ? renderConnect() : renderDisconnect();
};

export default Wallet;
