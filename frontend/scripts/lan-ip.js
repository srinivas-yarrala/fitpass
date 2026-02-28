#!/usr/bin/env node
/**
 * Print this machine's LAN IPv4 addresses so you can open the dev server on your phone.
 * Use the IP that matches your WiFi/LAN (usually 192.168.x.x or 10.x.x.x).
 */
const os = require("os");

const ifaces = os.networkInterfaces();
const port = process.env.PORT || 3000;

console.log("\n  Dev server URL for other devices (use one of these on your phone):\n");

let found = false;
for (const name of Object.keys(ifaces)) {
  for (const iface of ifaces[name]) {
    if (iface.family === "IPv4" && !iface.internal) {
      const url = `http://${iface.address}:${port}`;
      console.log(`    ${url}  (${name})`);
      found = true;
    }
  }
}

if (!found) {
  console.log("    No LAN IPv4 address found. Are you connected to Wi-Fi/Ethernet?");
}

console.log("\n  If it still doesn't load on your phone:\n");
console.log("    1. Stop the server and run: npm run dev:lan");
console.log("    2. Windows: allow port", port, "in Firewall (see MOBILE_DEV.md)\n");
