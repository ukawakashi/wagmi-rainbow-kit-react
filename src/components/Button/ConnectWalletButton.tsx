import { ConnectButton } from '@rainbow-me/rainbowkit'

import { HighlightButton } from '../Button'

export default function ConnectWalletButton() {
    // const { disconnect } = useDisconnect()

    return (
        <>
            <ConnectButton.Custom>
                {({ account, chain, openChainModal, openConnectModal, mounted }) => {
                    const ready = mounted
                    const connected = ready && account && chain
                    return (
                        <div
                            {...(!ready
                                ? {
                                    'aria-hidden': true,
                                    style: {
                                        opacity: 0,
                                        pointerEvents: 'none',
                                        userSelect: 'none',
                                    },
                                }
                                : { style: { height: '10%' } })}
                        >
                            {connected && !chain?.unsupported && <></>}
                            {(() => {
                                if (!connected) {
                                    return (
                                        <HighlightButton
                                            onClick={openConnectModal}
                                            className="free-height free-width"
                                            style={{ height: '100%', paddingLeft: 6, paddingRight: 10 }}
                                        >
                                            <span style={{ marginTop: -1 }}>Connect Wallet</span>
                                        </HighlightButton>
                                    )
                                }

                                if (chain.unsupported) {
                                    return (
                                        <HighlightButton
                                            onClick={openChainModal}
                                            className="free-height free-width"
                                            style={{ height: '100%', paddingLeft: 10, paddingRight: 10 }}
                                        >
                                            <span style={{ marginTop: -1 }}>Wrong network</span>
                                        </HighlightButton>
                                    )
                                }

                                return (
                                    <div style={{ height: '100%' }}>
                                        <HighlightButton
                                            className="free-height free-width"
                                            style={{ height: '100%', paddingLeft: 6, paddingRight: 10 }}
                                        >
                                            <span style={{ marginTop: -1 }}>Connect Wallet</span>
                                        </HighlightButton>
                                    </div>
                                )
                            })()}
                        </div>
                    )
                }}
            </ConnectButton.Custom>
        </>
    )
}
