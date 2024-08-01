import Foundation
import NetworkExtension

@objc(RNDNSProxyManager)
class RNDNSProxyManager: NSObject {

    @objc
    func startDNSProxy(_ serverAddress: String) {
        let dnsProxy = NEDNSProxyManager.shared()
        let dnsSettings = NEDNSSettings(servers: [serverAddress])

        let proxySettings = NEDNSProxySettings()
        proxySettings.serverAddresses = [serverAddress]
        dnsProxy.dnsSettings = dnsSettings
        dnsProxy.localizedDescription = "DNS Proxy"
        dnsProxy.providerProtocol = NEProviderProtocol()
        dnsProxy.providerProtocol?.serverAddress = serverAddress

        dnsProxy.saveToPreferences { error in
            if let error = error {
            } else {
                dnsProxy.loadFromPreferences { loadError in
                    if let loadError = loadError {

                    } else {
                        do {
                            try dnsProxy.startVPNTunnel()

                        } catch let startError {

                        }
                    }
                }
            }
        }
    }
}
