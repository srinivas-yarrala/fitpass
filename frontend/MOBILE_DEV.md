# Testing on your phone (same Wi‑Fi)

## 1. Start the server for LAN access

Stop any running dev server, then:

```bash
npm run dev:lan
```

## 2. Get your PC’s IP

In another terminal (or before starting the server):

```bash
npm run lan-ip
```

Use one of the printed URLs on your phone (e.g. `http://192.168.1.5:3000`).  
**Do not use** `172.27.x.x` or `172.17.x.x` on your phone — those are often virtual/WSL and not reachable from the phone.

## 3. Windows: allow port 3000 in Firewall

If the phone cannot load the page, Windows Firewall is likely blocking it.

**Option A – PowerShell (run as Administrator):**

```powershell
New-NetFirewallRule -DisplayName "Next.js dev 3000" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow -Profile Private
```

**Option B – GUI:**

1. Open **Windows Defender Firewall** → **Advanced settings**.
2. **Inbound Rules** → **New Rule**.
3. **Port** → Next → **TCP**, **3000** → Next → **Allow the connection** → Next.
4. Check **Private** (and Domain if you use it) → Next → Name e.g. "Next.js dev 3000" → Finish.

## 4. Checklist

- [ ] `npm run dev:lan` is running (not plain `npm run dev`).
- [ ] Phone and PC are on the **same Wi‑Fi**.
- [ ] You opened the URL from `npm run lan-ip` (e.g. `http://192.168.1.x:3000`).
- [ ] Windows Firewall allows inbound TCP on port 3000 for Private networks.
