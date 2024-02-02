import { Helmet } from 'react-helmet-async'
import styled from 'styled-components/macro'
import {useAccount} from "@/context/AccountProvider";
import {useEnsName} from "wagmi";
import ConnectWalletButton from "@/components/Button/ConnectWalletButton";

const Foreground = styled.div`
  background-color: black;
  z-index: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  > * + * {
    margin-top: 1rem;
  }
`

export default function Home() {
  const { account, balance } = useAccount()
  const ens = useEnsName({ address: account?.address })

  return (
    <div style={{ backgroundColor: '#000', height: '100%', overflow: 'hidden', position: 'relative', zIndex: 0 }}>
      <Helmet>
          <title>Wagmi Rainbow-kit</title>
      </Helmet>
      <Foreground>
        <ConnectWalletButton />
        <div style={{ color: '#fff'}}>
          {account?.isConnected && (
              <>
                {account.address && <p>{account.address}</p>}
                {ens.data && <p>{ens.data}</p>}
                {balance && <p>{Number(balance.formatted).toFixed(4)} ETH</p>}
              </>
          )}
        </div>
      </Foreground>
    </div>
  )
}
