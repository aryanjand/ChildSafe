//
//  Presets.swift
//  ChildSafe
//
//  Created by Aryan Jand on 07/17/24.
//

import Foundation


enum Presets {
    static let server: Resolver = [
    .init(
        name: "1.1.1.3 (Block Malware + Adult Content)",
        configuration: .dnsOverHTTPS(
            DoHConfiguration(
                servers: [
                    "1.1.1.3",
                    "1.0.0.3",
                    "2606:4700:4700::1113",
                    "2606:4700:4700::1003",
                ],
                serverURL: URL(string: "https://family.cloudflare-dns.com/dns-query") // ChatGPT
            )
        )
    )
    ]
}