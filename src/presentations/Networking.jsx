import React from 'react';
import { Slide } from '../components/Slide.jsx';
import { Terminal } from '../components/Terminal.jsx';
import { config } from '../config.js';
import DecryptedText from '../components/react-bits/DecryptedText/DecryptedText.jsx';
import BlurText from '../components/react-bits/BlurText/BlurText.jsx';

export const slides = [
  // Slide 1: Title
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan" alignCenter>
        <div className="speaker-badge stagger d-1" style={{ marginBottom: '2rem' }}>
          <div className="speaker-avatar"><i className={`fa-solid ${config.speaker.avatarIcon}`}></i></div>
          {config.speaker.role} // {config.speaker.name}
        </div>
        <h1 className="title-massive text-gradient grad-cyan stagger d-2">
          <DecryptedText key={active ? 'active' : 'inactive'} playAudio={active} text={config.presentation.title} animateOn="view" speed={40} maxIterations={3} sequential={true} />
        </h1>
        <BlurText
          key={active ? 'active' : 'inactive'}
          text={config.presentation.subtitle}
          delay={100}
          animateBy="words"
          direction="bottom"
          className="stagger d-3"
          style={{ maxWidth: '900px', fontSize: '2rem' }}
        />
        <div className="glass-panel stagger d-4" style={{ padding: '1rem 2rem', borderRadius: '50px', marginTop: '2rem' }}>
          <span className="mono" style={{ color: 'var(--cyan)', fontSize: '1rem' }}>
            [ <i className="fa-solid fa-network-wired"></i> systemctl start networking.service ]
          </span>
        </div>
      </Slide>
    )
  },
  // Slide 2: Domains & ICANN
  {
    color: "purple",
    component: ({ active }) => (
      <Slide active={active} color="purple">
        <h2 className="slide-title text-gradient grad-purple stagger d-1">
          <i className="fa-solid fa-address-book"></i> The Domain Market
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap stagger d-2">
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--purple)' }}>
              <h3 style={{ color: 'var(--purple)' }}>IANA & RFCs (The Numbers)</h3>
              <p>The <strong>Internet Assigned Numbers Authority</strong> manages IP block allocations and Protocol ports based on open IETF <strong>RFC</strong> standards.</p>
            </div>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--emerald)' }}>
              <h3 style={{ color: 'var(--emerald)' }}>ICANN (The Names)</h3>
              <p>The supreme governing body for names. They control root DNS servers and delegate TLDs (.com, .org) to Registries.</p>
            </div>
          </div>
          <div className="glass-panel stagger d-3" style={{ textAlign: 'center', borderColor: 'var(--amber)' }}>
            <i className="fa-solid fa-store" style={{ fontSize: '3rem', color: 'var(--amber)', marginBottom: '1rem' }}></i>
            <h3 style={{ color: '#fff' }}>Domain Brokers (Registrars)</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>You don't <em>buy</em> a domain, you rent it.</p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>Companies like GoDaddy, Namecheap, and Cloudflare are essentially real-estate brokers. They pay a fixed fee to ICANN to register your name in the global registry for a specific duration.</p>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 3: The .ai Boom
  {
    color: "rose",
    component: ({ active }) => (
      <Slide active={active} color="rose" alignCenter>
        <h2 className="slide-title text-gradient grad-rose stagger d-1" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-earth-americas"></i> The Domain Hack: .ai
        </h2>
        <div className="grid-2" style={{ width: '100%', maxWidth: '1200px', marginTop: '2rem' }}>
          <div className="glass-panel stagger d-2" style={{ padding: '3rem', textAlign: 'center', borderTop: '4px solid var(--emerald)' }}>
            <i className="fa-solid fa-umbrella-beach icon-massive" style={{ color: 'var(--emerald)' }}></i>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>The Origin (ccTLD)</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              <span className="mono text-gradient grad-emerald" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>.ai</span> was created as a <strong>Country Code TLD</strong> exclusively for the tiny Caribbean island of <strong>Anguilla</strong>.
            </p>
          </div>
          <div className="glass-panel stagger d-3" style={{ padding: '3rem', textAlign: 'center', borderTop: '4px solid var(--purple)' }}>
            <i className="fa-solid fa-microchip icon-massive" style={{ color: 'var(--purple)' }}></i>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>The Boom (gTLD)</h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Repurposed by the <strong>Artificial Intelligence</strong> boom, Anguilla now makes tens of millions of dollars just from tech companies renting their country's domain!
            </p>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 4: The Global Phonebook (DNS Core)
  {
    color: "purple",
    component: ({ active }) => (
      <Slide active={active} color="purple">
        <h2 className="slide-title text-gradient grad-purple stagger d-1">
          <i className="fa-solid fa-address-book"></i> The Global Phonebook
        </h2>
        <div className="diagram-flex stagger d-2">
          <div className="node" style={{ borderColor: 'var(--purple)', boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}>
            <i className="fa-solid fa-laptop-code" style={{ color: 'var(--purple)' }}></i>
            <h3 className="node-title">Browser</h3>
            <div className="mono node-sub">google.com</div>
          </div>
          <div className="arrow"><i className="fa-solid fa-arrow-right-arrow-left"></i></div>
          <div className="node" style={{ borderColor: 'var(--cyan)', boxShadow: '0 0 20px rgba(0, 242, 254, 0.2)' }}>
            <i className="fa-solid fa-server" style={{ color: 'var(--cyan)' }}></i>
            <h3 className="node-title">DNS (1.1.1.1)</h3>
            <div className="mono node-sub">UDP Port 53</div>
          </div>
          <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
          <div className="node" style={{ borderColor: 'var(--emerald)', boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}>
            <i className="fa-solid fa-globe" style={{ color: 'var(--emerald)' }}></i>
            <h3 className="node-title">Target Server</h3>
            <div className="mono node-sub">142.250.190.46</div>
          </div>
        </div>
        <div className="grid-2" style={{ marginTop: '2rem' }}>
          <div className="glass-panel stagger d-3">
            <h3 style={{ color: 'var(--purple)' }}>DNS Resolution</h3>
            <p>Translates aliases (google.com) to routable network coordinates.</p>
            <h3 style={{ color: 'var(--cyan)', marginTop: '1.5rem' }}>Distributed Registry</h3>
            <p>No single server holds every domain. The query bounces across servers globally to find the answer.</p>
          </div>
          <div className="glass-panel stagger d-4" style={{ borderLeft: '4px solid var(--amber)' }}>
            <h3 style={{ color: 'var(--amber)' }}><i className="fa-solid fa-flask"></i> Micro-Lab: nslookup</h3>
            <p>Let's unmask the IP behind a domain right now.</p>
            <Terminal active={active} cmd="nslookup discord.com" staggerClass="stagger d-5" fontSize="0.9rem">
              <div style={{ color: 'var(--text-muted)' }}>Server:     1.1.1.1</div>
              <div style={{ color: 'var(--text-muted)' }}>Address:    1.1.1.1#53</div>
              <br />
              <div style={{ color: 'var(--text-muted)' }}>Non-authoritative answer:</div>
              <div style={{ color: 'var(--emerald)' }}>Name:   discord.com</div>
              <div style={{ color: 'var(--rose)' }}>Address: 162.159.136.232</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 5: DNS Hierarchy & Traceroute
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan">
        <h2 className="slide-title text-gradient grad-cyan stagger d-1">
          <i className="fa-solid fa-sitemap"></i> DNS Resolution Hierarchy
        </h2>
        <div className="diagram-flex stagger d-2" style={{ marginBottom: '3rem' }}>
          <div className="node" style={{ borderColor: 'var(--purple)', boxShadow: '0 0 20px rgba(168,85,247,0.2)' }}>
            <i className="fa-solid fa-server" style={{ color: 'var(--purple)' }}></i>
            <h3 className="node-title">Root Server</h3>
            <div className="mono node-sub">"."</div>
          </div>
          <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
          <div className="node" style={{ borderColor: 'var(--cyan)', boxShadow: '0 0 20px rgba(0,242,254,0.2)' }}>
            <i className="fa-solid fa-server" style={{ color: 'var(--cyan)' }}></i>
            <h3 className="node-title">TLD Server</h3>
            <div className="mono node-sub">".com"</div>
          </div>
          <div className="arrow"><i className="fa-solid fa-arrow-right"></i></div>
          <div className="node" style={{ borderColor: 'var(--emerald)', boxShadow: '0 0 20px rgba(16,185,129,0.2)' }}>
            <i className="fa-solid fa-server" style={{ color: 'var(--emerald)' }}></i>
            <h3 className="node-title">Authoritative</h3>
            <div className="mono node-sub">"google.com"</div>
          </div>
        </div>
        <div className="grid-2">
          <div className="glass-panel stagger d-3">
            <h3 style={{ color: 'var(--cyan)' }}>The Recursive Journey</h3>
            <p>When your browser asks <code>1.1.1.1</code> for google.com, it walks down this tree automatically, caching the result to speed up future requests.</p>
          </div>
          <div className="glass-panel stagger d-4" style={{ borderLeft: '4px solid var(--amber)' }}>
            <h3 style={{ color: 'var(--amber)' }}><i className="fa-solid fa-route"></i> Live Lab: Traceroute</h3>
            <p style={{ marginBottom: '1rem' }}>Let's see the physical path your packets take.</p>
            <Terminal active={active} cmd="traceroute 1.1.1.1" staggerClass="stagger d-5">
              <div style={{ color: 'var(--text-muted)' }}>1  192.168.1.1 (Router)  2.1ms</div>
              <div style={{ color: 'var(--text-muted)' }}>2  10.32.4.1 (ISP Gateway)  14.3ms</div>
              <div style={{ color: 'var(--emerald)' }}>3  1.1.1.1 (Cloudflare)  18.5ms</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 6: The IPv4 vs IPv6 Paradox
  {
    color: "amber",
    component: ({ active }) => (
      <Slide active={active} color="amber">
        <h2 className="slide-title text-gradient grad-amber stagger d-1">
          <i className="fa-solid fa-infinity"></i> The IPv4 vs IPv6 Paradox
        </h2>
        <div className="grid-2">
          <div className="glass-panel stagger d-2" style={{ borderColor: 'rgba(244, 63, 94, 0.4)' }}>
            <div><div className="concept-badge" style={{ color: 'var(--rose)' }}>1990s Band-Aid</div></div>
            <h3 style={{ color: 'var(--rose)', fontSize: '3rem' }}>NAT</h3>
            <p style={{ color: '#fff' }}>We ran out of the 4.3 billion IPs years ago.</p>
            <p>Network Address Translation let <strong>entire houses share 1 public IP</strong>, creating "Private IPs" (192.168.x.x).</p>
          </div>
          <div className="glass-panel stagger d-3" style={{ borderColor: 'rgba(16, 185, 129, 0.4)' }}>
            <div><div className="concept-badge" style={{ color: 'var(--emerald)' }}>The Modern Reality</div></div>
            <h3 style={{ color: 'var(--emerald)', fontSize: '3rem' }}>3.4 × 10³⁸ IPs</h3>
            <p style={{ color: '#fff' }}>Every device gets a globally routable public IP.</p>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <h4 style={{ color: 'var(--amber)' }}>The Contradiction</h4>
              <p>Why do LANs still exist? For <strong>Security</strong> (Firewalls) and zero-cost local <strong>Switching</strong>.</p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 7: Riddle: The Connection Timeout
  {
    color: "rose",
    component: ({ active }) => (
      <Slide active={active} color="rose" alignCenter>
        <h2 className="slide-title text-gradient grad-rose stagger d-1" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-puzzle-piece"></i> Riddle: The Connection Timeout
        </h2>
        <div className="glass-panel stagger d-2" style={{ maxWidth: '900px', padding: '4rem', borderTop: '4px solid var(--rose)' }}>
          <i className="fa-solid fa-cubes icon-massive" style={{ color: 'var(--rose)' }}></i>
          <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '2rem' }}>The Dilemma</h3>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            Hackerman (your friend) just spun up a Minecraft server on his laptop and texts you to join.
          </p>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            He tells you: <strong>"I'm online. My IP is <span className="mono text-gradient grad-rose">192.168.1.5</span>. Join up so we can grief this village."</strong>
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '3rem', fontSize: '2rem', color: '#fff' }}>
            You type it in. Connection Timed Out. Why?
          </p>
        </div>
      </Slide>
    )
  },
  // Slide 8: The Reveal: Private IP Illusion
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan" alignCenter>
        <h2 className="slide-title text-gradient grad-cyan stagger d-1" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-house-lock"></i> The Reveal: Private IP Illusion
        </h2>
        
        <div className="glass-panel stagger d-2" style={{ maxWidth: '900px', padding: '3rem', borderTop: '4px solid var(--cyan)' }}>
          <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '1.5rem' }}>It's a Local Address</h3>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            <span className="mono">192.168.x.x</span> is a private IP generated by NAT. It does not exist globally.
          </p>
          <div style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1.5rem', border: '1px solid var(--cyan)', borderRadius: '8px', margin: '1.5rem 0' }}>
            <p style={{ color: 'var(--cyan)', fontWeight: 'bold', fontSize: '1.3rem', margin: 0 }}>
              Giving someone that IP is like telling the post office your address is "Bedroom 3".<br />Which house? Which city?
            </p>
          </div>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
            <strong>Note:</strong> If DHCP fails entirely, your OS assigns an <strong>APIPA</strong> link-local address (<span className="mono">169.254.x.x</span>), which cannot even route across local switches.
          </p>
        </div>

        <div className="stagger d-3" style={{ maxWidth: '900px', width: '100%', marginTop: '2rem', textAlign: 'left' }}>
          <Terminal active={active} cmd="ip addr show wlan0 | grep -w inet | awk '{print $2}'" fontSize="1rem">
            <div style={{ color: 'var(--text-muted)' }}>// Using grep, awk, and sed pipes to precisely extract the IP</div>
            <div style={{ color: 'var(--cyan)', marginTop: '0.5rem', fontWeight: 'bold' }}>192.168.1.5/24</div>
          </Terminal>
        </div>
      </Slide>
    )
  },
  // Slide 9: Interfaces & Ports
  {
    color: "emerald",
    component: ({ active }) => (
      <Slide active={active} color="emerald">
        <h2 className="slide-title text-gradient grad-emerald stagger d-1">
          <i className="fa-solid fa-door-open"></i> Interfaces & Ports
        </h2>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          <ul className="sleek-list stagger d-2">
            <li>
              <i className="fa-solid fa-building" style={{ color: 'var(--emerald)' }}></i>
              <strong>IP = The Building:</strong> Routes packet to the machine.
            </li>
            <li>
              <i className="fa-solid fa-door-closed" style={{ color: 'var(--amber)' }}></i>
              <strong>Port = The Apartment:</strong> Routes packet to the specific App.
            </li>
            <li>
              <i className="fa-solid fa-lock" style={{ color: 'var(--rose)' }}></i>
              <strong>127.0.0.1 (Localhost):</strong> App listens only to internal OS.
            </li>
            <li>
              <i className="fa-solid fa-globe" style={{ color: 'var(--cyan)' }}></i>
              <strong>0.0.0.0 (Any):</strong> App listens on ALL interfaces.
            </li>
          </ul>
          <div className="stagger d-3" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ width: '100%', textAlign: 'center', padding: '1.5rem 1rem' }}>
              <h3 style={{ fontFamily: '"JetBrains Mono"', color: 'var(--emerald)', marginBottom: '1.5rem' }}>
                192.168.1.50
              </h3>
              <div style={{ display: 'flex', justifyContent: 'space-around', gap: '1rem' }}>
                <div style={{ flex: 1, padding: '1rem 0', border: '2px solid rgba(255, 255, 255, 0.2)', borderBottom: 'none', borderRadius: '8px 8px 0 0', background: 'rgba(0, 0, 0, 0.5)' }}>
                  <h3 style={{ color: 'var(--cyan)', margin: 0 }}>80</h3>
                  <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Web</span>
                </div>
                <div style={{ flex: 1, padding: '1rem 0', border: '2px solid rgba(255, 255, 255, 0.2)', borderBottom: 'none', borderRadius: '8px 8px 0 0', background: 'rgba(0, 0, 0, 0.5)' }}>
                  <h3 style={{ color: 'var(--rose)', margin: 0 }}>22</h3>
                  <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>SSH</span>
                </div>
                <div style={{ flex: 1, padding: '1rem 0', border: '2px solid rgba(255, 255, 255, 0.2)', borderBottom: 'none', borderRadius: '8px 8px 0 0', background: 'rgba(0, 0, 0, 0.5)' }}>
                  <h3 style={{ color: 'var(--amber)', margin: 0 }}>25565</h3>
                  <span className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>MC</span>
                </div>
              </div>
            </div>
            
            <Terminal active={active} cmd="ss -tuln" fontSize="0.75rem">
              <div style={{ color: 'var(--text-muted)' }}>Netid  State   Recv-Q  Send-Q      Local Address:Port      Peer Address:Port</div>
              <div><span style={{ color: 'var(--rose)' }}>tcp</span>    LISTEN  0       128             <span style={{ color: 'var(--rose)', fontWeight: 'bold' }}>127.0.0.1:3306</span>           0.0.0.0:*</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '0.5rem' }}>// MySQL bound to Loopback. Safe. Cannot be reached externally.</div>
              <div><span style={{ color: 'var(--cyan)' }}>tcp</span>    LISTEN  0       128               <span style={{ color: 'var(--cyan)', fontWeight: 'bold' }}>0.0.0.0:80</span>             0.0.0.0:*</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>// Web Server bound to Any. Open to the world.</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 10: Port Scanning & Reconnaissance (Nmap)
  {
    color: "amber",
    component: ({ active }) => (
      <Slide active={active} color="amber">
        <h2 className="slide-title text-gradient grad-amber stagger d-1">
          <i className="fa-solid fa-radar"></i> Recon: Port Scanning (Nmap)
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap stagger d-2">
            <p>
              How do hackers know what doors are open? They knock on all 65,535 of them.
            </p>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--amber)' }}>
              <h3 style={{ color: 'var(--amber)', fontSize: '1.2rem' }}>Stealth SYN Scan (-sS)</h3>
              <p style={{ margin: 0 }}>
                Sends a SYN packet. If the server replies SYN-ACK, the port is open. The hacker immediately sends RST to drop the connection before it's logged by the application.
              </p>
            </div>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--rose)' }}>
              <h3 style={{ color: 'var(--rose)', fontSize: '1.2rem' }}>Service Detection (-sV)</h3>
              <p style={{ margin: 0 }}>
                Interrogates open ports to determine the exact software and version running (e.g., Apache 2.4.49), revealing known vulnerabilities.
              </p>
            </div>
          </div>
          
          <div className="stagger d-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <Terminal 
              active={active} 
              cmd="nmap -sS -sV -p- 192.168.1.50" 
              output={`Starting Nmap 7.93
Host is up (0.0020s latency).
Not shown: 65532 closed tcp ports (reset)
PORT      STATE SERVICE VERSION
22/tcp    open  ssh     OpenSSH 8.2p1
80/tcp    open  http    Apache httpd 2.4.41
25565/tcp open  minecraft Minecraft 1.16.5

Nmap done: 1 IP address (1 host up) scanned in 4.52 seconds`} 
            />
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: The ISP Trap
  {
    color: "rose",
    component: ({ active }) => (
      <Slide active={active} color="rose">
        <h2 className="slide-title text-gradient grad-rose stagger d-1">
          <i className="fa-solid fa-box-archive"></i> The ISP Trap: CGNAT
        </h2>
        <div className="grid-2">
          <div className="glass-panel stagger d-2" style={{ borderColor: 'rgba(244, 63, 94, 0.4)' }}>
            <h3>Carrier-Grade NAT</h3>
            <p>ISPs hoard public IPs, placing you behind <em>another</em> giant router.</p>
            <div style={{ margin: '1.5rem 0', padding: '1rem', border: '2px dashed var(--rose)', borderRadius: '12px', textAlign: 'center' }}>
              <div className="mono" style={{ color: '#fff', marginBottom: '0.5rem', fontSize: '1rem' }}>ISP Router (142.x.x.x)</div>
              <div style={{ padding: '1rem', background: 'rgba(245, 158, 11, 0.1)', border: '2px dashed var(--amber)', borderRadius: '8px' }}>
                <div className="mono" style={{ color: 'var(--amber)', marginBottom: '0.5rem', fontSize: '1rem' }}>Home Router (100.64.0.0/10 CGNAT)</div>
                <div style={{ padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', border: '2px dashed var(--emerald)', borderRadius: '6px' }}>
                  <div className="mono" style={{ color: 'var(--emerald)', fontSize: '1rem' }}>Your PC (192.168.1.5)</div>
                </div>
              </div>
            </div>
            <h4 style={{ color: 'var(--rose)', textAlign: 'center' }}>Result: Port Forwarding is Dead.</h4>
          </div>
          <div className="flex-col-gap">
            <div className="glass-panel stagger d-3">
              <h3 style={{ color: 'var(--cyan)' }}>
                <i className="fa-solid fa-ban"></i> College Constraints
              </h3>
              <p>Our Wi-Fi uses <strong>Client Isolation</strong>. You can't ping the laptop next to you. Inbound blocked.</p>
            </div>
            <div className="glass-panel stagger d-4">
              <h3 style={{ color: 'var(--purple)' }}>
                <i className="fa-solid fa-arrow-rotate-left"></i> Hairpin NAT Crash
              </h3>
              <p>Connecting to your own public IP from inside? Cheap routers drop the packet.</p>
            </div>
            
            <div className="stagger d-5" style={{ marginTop: '1rem' }}>
              <Terminal active={active} cmd="curl -s https://1.1.1.1/cdn-cgi/trace | grep ip=" fontSize="0.8rem">
                <div style={{ color: 'var(--text-muted)' }}>// Find your true Public IP beyond the CGNAT router</div>
                <div style={{ color: 'var(--emerald)', marginTop: '0.5rem', fontWeight: 'bold' }}>ip=142.250.190.46</div>
              </Terminal>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Censorship & DPI
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan">
        <h2 className="slide-title text-gradient grad-cyan stagger d-1">
          <i className="fa-solid fa-gavel"></i> Censorship & DPI
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap">
            <p className="stagger d-2" style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>
              How does an ISP enforce an app ban?
            </p>
            <div className="glass-panel stagger d-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem', padding: '1rem' }}>
              <h1 className="num-massive" style={{ color: 'var(--purple)', fontSize: '3rem' }}>1</h1>
              <div>
                <h3 style={{ color: '#fff', marginBottom: '0.25rem', fontSize: '1.1rem' }}>DNS Spoofing</h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>You ask for <span className="mono text-gradient grad-purple">telegram.org</span>. ISP returns <span className="mono">0.0.0.0</span>. <em>(e.g., Telegram Block 2026)</em></p>
              </div>
            </div>

            <div className="glass-panel stagger d-4" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem', padding: '1rem' }}>
              <h1 className="num-massive" style={{ color: 'var(--rose)', fontSize: '3rem' }}>2</h1>
              <div>
                <h3 style={{ color: '#fff', marginBottom: '0.25rem', fontSize: '1.1rem' }}>SNI Filtering (DPI)</h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>Firewall reads plain text "Server Name", and injects a <strong>TCP RST</strong> packet to kill it.</p>
              </div>
            </div>

            <div className="glass-panel stagger d-5" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1.5rem', padding: '1rem' }}>
              <h1 className="num-massive" style={{ color: 'var(--amber)', fontSize: '3rem' }}>3</h1>
              <div>
                <h3 style={{ color: '#fff', marginBottom: '0.25rem', fontSize: '1.1rem' }}>BGP Blackholing</h3>
                <p style={{ margin: 0, fontSize: '0.9rem' }}>ISPs advertise false routes for IPs, dropping traffic into a void.</p>
              </div>
            </div>
            
            <div className="stagger d-6" style={{ background: 'rgba(56, 189, 248, 0.1)', padding: '1rem', border: '1px dashed var(--cyan)', borderRadius: '8px' }}>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                <i className="fa-solid fa-shield-halved" style={{ color: 'var(--cyan)', marginRight: '0.5rem' }}></i>
                <strong>QUIC (HTTP/3) Solution:</strong> Encrypts the entire SNI handshake (TLS 1.3) directly over UDP, blinding DPI firewalls.
              </p>
            </div>
          </div>

          <div className="flex-col-gap stagger d-7" style={{ justifyContent: 'center' }}>
            <Terminal active={active} cmd="tcpdump -l -i any 'tcp port 443' -A | grep -a -i netflix" fontSize="0.75rem">
              <div style={{ color: 'var(--text-muted)' }}>listening on any, link-type LINUX_SLL2...</div>
              <div style={{ color: 'var(--rose)' }}>...netflix.com.........!.........+.....-.....</div>
            </Terminal>
            <Terminal active={active} cmd="curl -s https://netflix.com -v" fontSize="0.75rem">
              <div style={{ color: 'var(--text-muted)' }}>* TLSv1.3 (OUT), TLS handshake, Client hello (1):</div>
              <div style={{ color: 'var(--rose)' }}>* Recv failure: Connection reset by peer</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: LIVE LAB: HTTP Tunnel
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan">
        <h2 className="slide-title text-gradient grad-cyan stagger d-1">
          <i className="fa-solid fa-terminal"></i> LIVE LAB: Web Server Bypass
        </h2>
        <p className="stagger d-2" style={{ textAlign: 'center', color: '#fff', fontSize: '1.8rem', marginBottom: '2rem' }}>
          Since inbound is blocked, we punch a hole <strong>OUT</strong>.
        </p>
        <Terminal active={active} cmd="python3 -m http.server 8080" staggerClass="stagger d-3">
          <div style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Serving HTTP on 0.0.0.0 port 8080 ...</div>
          <div className="cmd">cloudflared tunnel --url http://localhost:8080</div>
          <div style={{ color: 'var(--text-muted)' }}>2026-09-02T19:05:16Z INF Requesting new quick Tunnel...</div>
          <div style={{ color: 'var(--text-muted)' }}>+---------------------------------------------------+</div>
          <div style={{ color: 'var(--text-muted)' }}>
            |<span className="hl-cyan" style={{ textDecoration: 'underline', fontWeight: 'bold' }}>https://random-words.trycloudflare.com</span>|
          </div>
          <div style={{ color: 'var(--text-muted)' }}>+---------------------------------------------------+</div>
        </Terminal>
        <div className="stagger d-4" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div className="glass-panel" style={{ display: 'inline-block', padding: '1rem 2rem', borderColor: 'var(--amber)' }}>
            <h3 style={{ color: 'var(--amber)', margin: 0 }}>
              <i className="fa-solid fa-mobile-screen"></i> Connect via 5G now!
            </h3>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: LIVE LAB: Minecraft Port Bypass
  {
    color: "emerald",
    component: ({ active }) => (
      <Slide active={active} color="emerald">
        <h2 className="slide-title text-gradient grad-emerald stagger d-1">
          <i className="fa-solid fa-cubes"></i> LIVE LAB: Minecraft Port Bypass
        </h2>
        <p className="stagger d-2" style={{ textAlign: 'center', color: '#fff', fontSize: '1.5rem', marginBottom: '2rem' }}>
          Bypassing CGNAT to host a TCP Game Server on Port 25565
        </p>

        <div className="grid-2">
          <div className="flex-col-gap stagger d-3" style={{ alignSelf: 'flex-start' }}>
            <div className="glass-panel" style={{ borderTop: '4px solid var(--emerald)' }}>
              <h3 style={{ color: 'var(--emerald)', marginBottom: '1rem' }}>How Playit.gg Works</h3>
              <ul className="sleek-list" style={{ fontSize: '1rem' }}>
                <li>
                  <i className="fa-solid fa-server" style={{ color: 'var(--rose)' }}></i>
                  <strong>1. Local Binding:</strong> Server listens on <span className="mono">0.0.0.0:25565</span>.
                </li>
                <li>
                  <i className="fa-solid fa-arrow-right-arrow-left" style={{ color: 'var(--amber)' }}></i>
                  <strong>2. Outbound Tunnel:</strong> Playit Agent creates an outbound TCP connection to their global network, bypassing local CGNAT firewalls.
                </li>
                <li>
                  <i className="fa-solid fa-globe" style={{ color: 'var(--cyan)' }}></i>
                  <strong>3. Public Relay:</strong> The network provisions a public hostname (<span className="mono">spicy-camel.playit.gg</span>) bridging external players into the tunnel.
                </li>
              </ul>
            </div>
            <div className="glass-panel" style={{ borderTop: '4px solid var(--purple)' }}>
              <h3 style={{ color: 'var(--purple)', marginBottom: '0.5rem' }}>
                <i className="fa-solid fa-arrow-right-from-bracket"></i> The NAT Hole-Punch
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
                By initiating the connection from <em>inside</em> the network outwards, we punch a hole through the NAT. Stateful firewalls allow outbound traffic and inherently keep the port open for the returning traffic.
              </p>
            </div>
          </div>

          <div className="flex-col-gap stagger d-4" style={{ justifyContent: 'center' }}>
            <Terminal active={active} cmd="java -jar purpur.jar" fontSize="0.75rem">
              <div style={{ color: 'var(--text-muted)' }}>[Server thread/INFO]: Starting minecraft server version 1.20.4</div>
              <div style={{ color: 'var(--emerald)' }}>[Server thread/INFO]: Done (4.123s)! For help, type "help"</div>
            </Terminal>

            <Terminal active={active} cmd="./playit" fontSize="0.75rem">
              <div style={{ color: 'var(--text-muted)' }}>[INFO] Agent starting...</div>
              <div style={{ color: 'var(--text-muted)' }}>[INFO] Connecting to global routing network...</div>
              <div style={{ color: 'var(--cyan)' }}>[SUCCESS] Outbound TCP Tunnel Established</div>
              <div style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>+-------------------------------------------+</div>
              <div style={{ color: 'var(--text-muted)' }}>
                |<span className="hl-cyan" style={{ fontWeight: 'bold', fontSize: '1rem' }}>spicy-camel.auto.playit.gg</span>|
              </div>
              <div style={{ color: 'var(--text-muted)' }}>+-------------------------------------------+</div>
              <div style={{ color: 'var(--emerald)', marginTop: '0.5rem', fontWeight: 'bold' }}>
                // Audience: Connect using this address!
              </div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Network Quality Metrics
  {
    color: "purple",
    component: ({ active }) => (
      <Slide active={active} color="purple">
        <h2 className="slide-title text-gradient grad-purple stagger d-1">
          <i className="fa-solid fa-chart-line"></i> Network Quality Metrics
        </h2>
        <div className="grid-2">
          <ul className="sleek-list stagger d-2">
            <li>
              <i className="fa-solid fa-water" style={{ color: 'var(--cyan)' }}></i>
              <strong style={{ color: '#fff' }}>Bandwidth & Throughput:</strong> Highway width vs actual cars passing.
            </li>
            <li>
              <i className="fa-solid fa-stopwatch" style={{ color: 'var(--emerald)' }}></i>
              <strong style={{ color: '#fff' }}>Latency & Ping:</strong> The time it takes for 1 car to do a round trip.
            </li>
            <li>
              <i className="fa-solid fa-bolt" style={{ color: 'var(--amber)' }}></i>
              <strong style={{ color: '#fff' }}>Jitter:</strong> The variance/unpredictability in latency (Rubberbanding).
            </li>
            <li>
              <i className="fa-solid fa-box-open" style={{ color: 'var(--rose)' }}></i>
              <strong style={{ color: '#fff' }}>Packet Loss:</strong> Packets dropped by overloaded routers.
            </li>
          </ul>

          <div className="glass-panel stagger d-3" style={{ textAlign: 'center', borderColor: 'var(--purple)' }}>
            <h3 style={{ color: 'var(--purple)', fontSize: '2.5rem', marginBottom: '1rem' }}>
              <i className="fa-solid fa-stopwatch"></i> Activity Time
            </h3>
            <p style={{ color: '#fff', fontSize: '1.5rem' }}>Open <strong>fast.com</strong> on your phone.</p>
            <p>Click "Show more info". Look at your <strong>Loaded Latency (Bufferbloat)</strong>.<br />Compare College Wi-Fi vs your 5G Network.</p>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Meme Break
  {
    color: "amber",
    component: ({ active }) => (
      <Slide active={active} color="amber" alignCenter>
        <h2 className="slide-title text-gradient grad-amber stagger d-1" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-face-laugh-squint"></i> It's Always DNS.
        </h2>
        <div className="grid-2" style={{ width: '100%', maxWidth: '1200px' }}>
          <div className="glass-panel stagger d-2" style={{ padding: '3rem', textAlign: 'center', borderTop: '4px solid var(--rose)' }}>
            <i className="fa-solid fa-server icon-massive" style={{ color: 'var(--rose)' }}></i>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>The Corporate Excuse:</h3>
            <h4 style={{ fontSize: '1.8rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.4 }}>
              "It was not a network issue. It was not a firewall issue. It was DNS."
            </h4>
            <p style={{ color: 'var(--rose)', fontWeight: 'bold', fontSize: '2rem', marginTop: '2rem' }}>
              It's ALWAYS DNS.
            </p>
          </div>
          <div className="glass-panel stagger d-3" style={{ padding: '3rem', textAlign: 'center', borderTop: '4px solid var(--emerald)' }}>
            <i className="fa-solid fa-masks-theater icon-massive" style={{ color: 'var(--emerald)' }}></i>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>The Free VPN Reality:</h3>
            <h4 style={{ fontSize: '1.8rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.4 }}>
              "Jor jor se bolke sabko scheme bata de!"
            </h4>
            <p style={{ color: 'var(--emerald)', fontWeight: 'bold', fontSize: '1.5rem', marginTop: '2rem' }}>
              (When your free VPN leaks your unencrypted DNS requests directly to your ISP)
            </p>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: VPNs & Privacy
  {
    color: "rose",
    component: ({ active }) => (
      <Slide active={active} color="rose">
        <h2 className="slide-title text-gradient grad-rose stagger d-1">
          <i className="fa-solid fa-user-secret"></i> VPNs & The Privacy Paradox
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap">
            <div className="glass-panel stagger d-2" style={{ borderLeft: '4px solid var(--cyan)' }}>
              <h3>WireGuard vs OpenVPN</h3>
              <p>
                <strong>OpenVPN:</strong> Old, user-space, heavy.<br />
                <strong>WireGuard:</strong> Next-gen, in-kernel, stealthy.
              </p>
            </div>
            <div className="glass-panel stagger d-3" style={{ borderLeft: '4px solid var(--rose)' }}>
              <h3>The Egress Risk</h3>
              <p>VPNs act as your new ISP. They see all DNS and TLS SNI metadata.</p>
            </div>
          </div>

          <div className="stagger d-4">
            <h3 style={{ color: '#fff' }}>
              <i className="fa-solid fa-spider" style={{ color: 'var(--purple)' }}></i> Web Tracking Escapes VPNs
            </h3>
            <p>Tracking relies on parameters, not just IP addresses.</p>
            <Terminal active={active}>
              <div style={{ color: '#fff' }}>GET /post/123 HTTP/3</div>
              <div style={{ color: 'var(--text-muted)', marginTop: '1rem' }}>URL Parameters:</div>
              <div className="hl-amber">?utm_source=networking</div>
              <div className="hl-amber">?igsh=YzcxN2Q2NzE0...</div>
              <div style={{ color: 'var(--rose)', marginTop: '1rem' }}>// igsh maps social graphs regardless of IP.</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Supply Chain & Attacks
  {
    color: "amber",
    component: ({ active }) => (
      <Slide active={active} color="amber">
        <h2 className="slide-title text-gradient grad-amber stagger d-1">
          <i className="fa-solid fa-skull-crossbones"></i> When The Network Attacks
        </h2>
        <div className="grid-3">
          <div className="glass-panel stagger d-2" style={{ borderTop: '4px solid var(--emerald)', textAlign: 'center' }}>
            <i className="fa-brands fa-linux icon-massive" style={{ color: 'var(--emerald)' }}></i>
            <h3 style={{ color: '#fff' }}>XZ-Utils Hack</h3>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>CVE-2024-3094</div>
            <p>A 4-line network backdoor injected into Linux SSH for remote access.</p>
          </div>

          <div className="glass-panel stagger d-3" style={{ borderTop: '4px solid var(--cyan)', textAlign: 'center' }}>
            <i className="fa-solid fa-box-open icon-massive" style={{ color: 'var(--cyan)' }}></i>
            <h3 style={{ color: '#fff' }}>AUR Typosquatting</h3>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>chrome-fix vs google-chrome</div>
            <p>Malicious packages relying on users blindly copying commands.</p>
          </div>

          <div className="glass-panel stagger d-4" style={{ borderTop: '4px solid var(--amber)', textAlign: 'center' }}>
            <i className="fa-solid fa-people-arrows icon-massive" style={{ color: 'var(--amber)' }}></i>
            <h3 style={{ color: '#fff' }}>ClickFix</h3>
            <div className="mono" style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.9rem' }}>Social Engineering</div>
            <p>"Browser needs update, paste this in terminal." Bypasses firewalls entirely.</p>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Web APIs & REST
  {
    color: "amber",
    component: ({ active }) => (
      <Slide active={active} color="amber">
        <h2 className="slide-title text-gradient grad-amber stagger d-1">
          <i className="fa-solid fa-code"></i> REST APIs & Web Requests
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap">
            <div className="glass-panel stagger d-2" style={{ borderLeft: '4px solid var(--amber)' }}>
              <h3>Application Programming Interfaces</h3>
              <p>An API allows two applications to talk to each other. When you open a mobile app, it sends a <strong>GET</strong> request to a server, which responds with raw data, usually in <strong>JSON</strong> format.</p>
            </div>
            <div className="glass-panel stagger d-3" style={{ borderLeft: '4px solid var(--rose)' }}>
              <h3 style={{ color: 'var(--rose)' }}>
                <i className="fa-solid fa-burst"></i> The DoS Connection
              </h3>
              <p>What happens if a botnet sends this exact, legitimate <span className="mono">curl</span> request 10 million times a second? The server's database crashes. This is a <strong>Layer-7 (Application) DDoS</strong> attack.</p>
            </div>
          </div>
          <div className="stagger d-4">
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Fetching Data via cURL</h3>
            <Terminal active={active} cmd="curl -s https://ipinfo.io/8.8.8.8/json | jq" fontSize="0.8rem">
              <div style={{ color: 'var(--cyan)' }}>{'{'}</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"ip"</span>: <span style={{ color: 'var(--emerald)' }}>"8.8.8.8"</span>,</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"hostname"</span>: <span style={{ color: 'var(--emerald)' }}>"dns.google"</span>,</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"city"</span>: <span style={{ color: 'var(--emerald)' }}>"Mountain View"</span>,</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"region"</span>: <span style={{ color: 'var(--emerald)' }}>"California"</span>,</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"country"</span>: <span style={{ color: 'var(--emerald)' }}>"US"</span>,</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"loc"</span>: <span style={{ color: 'var(--emerald)' }}>"37.4056,-122.0775"</span>,</div>
              <div style={{ color: 'var(--text-muted)' }}>  <span style={{ color: 'var(--rose)' }}>"org"</span>: <span style={{ color: 'var(--emerald)' }}>"AS15169 Google LLC"</span></div>
              <div style={{ color: 'var(--cyan)' }}>{'}'}</div>
              <div style={{ color: 'var(--emerald)', marginTop: '1rem' }}>// The app UI parses this JSON and displays it beautifully.</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: BGP
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan">
        <h2 className="slide-title text-gradient grad-cyan stagger d-1">
          <i className="fa-solid fa-project-diagram"></i> BGP & The Backbone
        </h2>
        <div className="grid-2">
          <div className="glass-panel stagger d-2" style={{ borderColor: 'var(--cyan)' }}>
            <h3 style={{ color: 'var(--cyan)', fontSize: '2.5rem' }}>Border Gateway Protocol</h3>
            <p style={{ color: '#fff' }}>The postal service of the internet.</p>
            <p>Routers don't know the entire internet. They only know their neighbors. BGP is how massive ISPs announce: <em>"I know the shortest path to YouTube's IPs!"</em></p>
          </div>
          <div className="flex-col-gap">
            <div className="glass-panel stagger d-3" style={{ borderLeft: '4px solid var(--amber)' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.25rem' }}>
                <i className="fa-solid fa-route" style={{ color: 'var(--amber)', marginRight: '0.5rem' }}></i> 
                The 2008 YouTube Hijack
              </h3>
              <p style={{ margin: 0 }}>Pakistan's telecom attempted to locally censor YouTube but accidentally announced to the global BGP routing table that they were the fastest route to YouTube, causing a global outage for the site.</p>
            </div>
            <div className="glass-panel stagger d-4" style={{ borderLeft: '4px solid var(--rose)' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.25rem' }}>
                <i className="fa-solid fa-plug-circle-xmark" style={{ color: 'var(--rose)', marginRight: '0.5rem' }}></i> 
                The Day Facebook Went Dark
              </h3>
              <p style={{ margin: 0 }}>A flawed BGP update caused Facebook's routers to withdraw their own IP routes. Facebook, Instagram, and WhatsApp completely disappeared from the global internet for 6 hours in 2021.</p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Rogue Appliance Riddle
  {
    color: "rose",
    component: ({ active }) => (
      <Slide active={active} color="rose" alignCenter>
        <h2 className="slide-title text-gradient grad-rose stagger d-1" style={{ justifyContent: 'center' }}>
          <i className="fa-solid fa-puzzle-piece"></i> Riddle: The Rogue Appliance
        </h2>
        <div className="glass-panel stagger d-2" style={{ maxWidth: '900px', padding: '4rem', borderTop: '4px solid var(--rose)' }}>
          <i className="fa-solid fa-tv icon-massive" style={{ color: 'var(--rose)' }}></i>
          <h3 style={{ color: '#fff', fontSize: '2.5rem', marginBottom: '2rem' }}>The Dilemma</h3>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
            You buy a Smart TV. It has no app store, and you <strong>cannot</strong> install an adblocker on it.
          </p>
          <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '1rem' }}>
            You channel your inner Mr. Robot, run a quick packet capture, and realize it is secretly sending your viewing habits to <span className="mono text-gradient grad-rose">trackers.smart-tv.com</span> every 5 seconds.
          </p>
          <p style={{ fontWeight: 'bold', marginTop: '3rem', fontSize: '2rem', color: '#fff' }}>
            Without touching the TV... how do you kill the connection?
          </p>
        </div>
      </Slide>
    )
  },
  // Slide 21b: Pi-hole Reveal
  {
    color: "emerald",
    component: ({ active }) => (
      <Slide active={active} color="emerald">
        <h2 className="slide-title text-gradient grad-emerald stagger d-1">
          <i className="fa-solid fa-shield-halved"></i> The Reveal: DNS Sinkholing
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap stagger d-2">
            <div className="glass-panel" style={{ borderTop: '4px solid var(--cyan)' }}>
              <h3 style={{ color: 'var(--cyan)' }}>Control the Network</h3>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>If you can't control the device, you control the infrastructure it relies on. By poisoning your own DNS using <strong>Pi-hole</strong> or <strong>AdGuard Home</strong>, you can blind any device on your Wi-Fi.</p>
            </div>
            <Terminal active={active} cmd="nslookup trackers.smart-tv.com" staggerClass="stagger d-3" fontSize="1.1rem">
              <div style={{ color: 'var(--text-muted)' }}>Server:     192.168.1.2 (Pi-hole)</div>
              <br />
              <div style={{ color: 'var(--emerald)', fontWeight: 'bold' }}>Name:       trackers.smart-tv.com</div>
              <div style={{ color: 'var(--rose)', fontWeight: 'bold' }}>Address:    0.0.0.0</div>
            </Terminal>
          </div>
          <div className="flex-col-gap stagger d-4">
            <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', borderColor: 'var(--purple)', height: '100%' }}>
              <i className="fa-solid fa-tv" style={{ fontSize: '3rem', color: 'var(--text-muted)', marginBottom: '1rem' }}></i>
              <p className="mono" style={{ margin: 0, color: '#fff', fontSize: '1.2rem' }}>"Where is trackers.com?"</p>
              <i className="fa-solid fa-arrow-down" style={{ fontSize: '2rem', color: 'var(--text-muted)', margin: '1rem 0' }}></i>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '1.5rem', border: '1px solid var(--emerald)', borderRadius: '8px' }}>
                <i className="fa-solid fa-server" style={{ fontSize: '3rem', color: 'var(--emerald)', marginBottom: '1rem' }}></i>
                <p className="mono" style={{ color: 'var(--emerald)', fontWeight: 'bold', margin: 0, fontSize: '1.5rem' }}>Pi-hole (192.168.1.2)</p>
              </div>
              <i className="fa-solid fa-arrow-down" style={{ fontSize: '2rem', color: 'var(--text-muted)', margin: '1rem 0' }}></i>
              <p className="mono" style={{ margin: 0, fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--rose)' }}>0.0.0.0 (Nowhere)</p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 22: Packet Sniffing & The HTTP Flaw
  {
    color: "rose",
    component: ({ active }) => (
      <Slide active={active} color="rose">
        <h2 className="slide-title text-gradient grad-rose stagger d-1">
          <i className="fa-solid fa-wave-square"></i> Sniffing the Wire: Plaintext HTTP
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap stagger d-2">
            <p>What happens when traffic isn't encrypted? It flies through the air in pure plaintext.</p>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--rose)' }}>
              <h3 style={{ color: 'var(--rose)', fontSize: '1.2rem' }}>The Plaintext Flaw</h3>
              <p style={{ margin: 0 }}>
                Whether it's an old website or a cheap IoT smart bulb, communicating over raw HTTP means anyone sharing your Wi-Fi can passively read your data.
              </p>
            </div>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--amber)' }}>
              <h3 style={{ color: 'var(--amber)', fontSize: '1.2rem' }}>Live Lab: The Intercept</h3>
              <p style={{ margin: 0, fontSize: '0.9rem' }}>
                1. Presenter starts: <span className="mono text-gradient grad-amber">python3 -m http.server 8080</span><br />
                2. Starts sniffer: <span className="mono text-gradient grad-amber">sudo tcpdump -l -i any 'tcp port 8080' -A</span><br />
                3. Audience visits the IP on their phones. We instantly see their HTTP headers in the clear.
              </p>
            </div>
          </div>
          
          <div className="stagger d-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <Terminal 
              active={active} 
              cmd="sudo tcpdump -l -i any 'tcp port 8080' -A" 
              fontSize="0.75rem"
            >
              <div style={{ color: 'var(--text-muted)' }}>listening on any, link-type LINUX_SLL2 (Linux cooked v2), snapshot length 262144 bytes</div>
              <div style={{ color: 'var(--text-muted)' }}>14:22:15.123 IP 192.168.1.5.53421 &gt; 192.168.1.100.8080: Flags [P.], seq 1:215, ack 1, win 502, options [nop,nop,TS val 123 ecr 456], length 215</div>
              <div style={{ color: 'var(--rose)', marginTop: '0.5rem' }}>E...(.@.@.......d...P.W...5.P...k...</div>
              <div style={{ color: 'var(--rose)' }}>GET / HTTP/1.1</div>
              <div style={{ color: 'var(--rose)' }}>Host: 192.168.1.100:8080</div>
              <div style={{ color: 'var(--rose)' }}>User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15</div>
              <div style={{ color: 'var(--rose)' }}>Accept: text/html,application/xhtml+xml</div>
              <div style={{ color: 'var(--rose)' }}>Accept-Encoding: gzip, deflate</div>
              <div style={{ color: 'var(--rose)', marginBottom: '0.5rem' }}>Connection: keep-alive</div>
              <div style={{ color: 'var(--emerald)', fontWeight: 'bold' }}>// 192.168.1.100 &gt; 192.168.1.5: HTTP/1.0 200 OK</div>
            </Terminal>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 23: Cryptography: TLS & Certificates
  {
    color: "cyan",
    component: ({ active }) => (
      <Slide active={active} color="cyan">
        <h2 className="slide-title text-gradient grad-cyan stagger d-1">
          <i className="fa-solid fa-lock"></i> Cryptography: TLS & Certificates
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap stagger d-2">
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--emerald)' }}>
              <h3 style={{ color: 'var(--emerald)' }}>HTTPS & TLS</h3>
              <p>
                <strong>Asymmetric Encryption:</strong> The server gives you a Public Key to lock data. Only the server holds the Private Key to unlock it.
              </p>
            </div>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--cyan)' }}>
              <h3 style={{ color: 'var(--cyan)' }}>HSTS (Strict Transport Security)</h3>
              <p>
                A header telling your browser: <em>"Never talk to me over unencrypted HTTP again."</em> Prevents hackers from silently downgrading your connection on public Wi-Fi.
              </p>
            </div>
          </div>
          
          <div className="glass-panel stagger d-3" style={{ borderColor: 'var(--purple)' }}>
            <h3 style={{ color: 'var(--purple)', fontSize: '2rem' }}>Certificate Authorities</h3>
            <p>How do you know the Public Key actually belongs to Google, and not a hacker intercepting your traffic?</p>
            <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '1.5rem', borderRadius: '8px', border: '1px solid var(--purple)', marginTop: '1.5rem' }}>
              <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}><i className="fa-solid fa-stamp" style={{ color: 'var(--amber)' }}></i> The Root of Trust</h4>
              <p style={{ margin: 0 }}>
                Your OS is pre-installed with root certificates from trusted authorities (like <strong>Let's Encrypt</strong>). These CAs verify domains and cryptographically sign their keys.
              </p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 24: Burp Suite & Web Exploitation
  {
    color: "amber",
    component: ({ active }) => (
      <Slide active={active} color="amber">
        <h2 className="slide-title text-gradient grad-amber stagger d-1">
          <i className="fa-solid fa-spider"></i> MITM Proxy: Burp Suite
        </h2>
        <div className="grid-2">
          <div className="flex-col-gap stagger d-2">
            <p>
              How do hackers exploit web apps if everything is encrypted via TLS? 
              They install a custom Root Certificate in their own browser and use a <strong>Proxy</strong> to intercept their own traffic before it leaves their computer.
            </p>
            <div className="glass-panel" style={{ borderLeft: '4px solid var(--amber)' }}>
              <h3 style={{ color: 'var(--amber)' }}>Intercept & Modify</h3>
              <p style={{ margin: 0 }}>
                Burp Suite pauses the HTTP request mid-flight. The attacker can manually edit headers, cookies, or payloads before forwarding it to the server.
              </p>
            </div>
          </div>
          
          <div className="stagger d-3" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="glass-panel" style={{ background: '#1e1e1e', fontFamily: '"JetBrains Mono", monospace', fontSize: '0.9rem', color: '#d4d4d4', overflowX: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #333', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ color: 'var(--amber)' }}>[ Proxy ] - Intercept is ON</span>
                <span>Forward | Drop | Action</span>
              </div>
              <div><span style={{ color: '#569cd6' }}>POST</span> <span style={{ color: '#ce9178' }}>/api/v1/checkout</span> HTTP/2</div>
              <div><span style={{ color: '#9cdcfe' }}>Host:</span> shop.target.com</div>
              <div><span style={{ color: '#9cdcfe' }}>Cookie:</span> session_id=abc123xyz</div>
              <div><span style={{ color: '#9cdcfe' }}>Content-Type:</span> application/json</div>
              <br/>
              <div style={{ color: '#dcdcaa' }}>{`{`}</div>
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ color: '#9cdcfe' }}>"item_id":</span> <span style={{ color: '#b5cea8' }}>8492</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ color: '#9cdcfe' }}>"price":</span> <del style={{ color: '#f43f5e' }}>999.99</del> <span style={{ color: '#10b981', fontWeight: 'bold' }}>0.00</span>,
              </div>
              <div style={{ paddingLeft: '1rem' }}>
                <span style={{ color: '#9cdcfe' }}>"quantity":</span> <span style={{ color: '#b5cea8' }}>1</span>
              </div>
              <div style={{ color: '#dcdcaa' }}>{`}`}</div>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 25: TOR & P2P (EXPANDED)
  {
    color: "purple",
    component: ({ active }) => (
      <Slide active={active} color="purple">
        <h2 className="slide-title text-gradient grad-purple stagger d-1">
          <i className="fa-solid fa-masks-theater"></i> The Underground: TOR & P2P
        </h2>
        <div className="grid-2">
          <div className="stagger d-2">
            <h3 style={{ color: 'var(--cyan)', fontSize: '2.5rem' }}>TOR (The Onion Router)</h3>
            <p>Your traffic is bounced through 3 random volunteer nodes globally. Each node only peels one layer of encryption.</p>
            <div className="flex-col-gap" style={{ marginTop: '2rem' }}>
              <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderLeft: '4px solid var(--rose)' }}>
                <strong className="mono" style={{ fontSize: '1.1rem' }}>1. Entry Guard</strong>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Knows YOU, but not Destination.</span>
              </div>
              <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderLeft: '4px solid var(--amber)' }}>
                <strong className="mono" style={{ fontSize: '1.1rem' }}>2. Middle Relay</strong>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Knows nothing (only sees encrypted blob).</span>
              </div>
              <div className="glass-panel" style={{ padding: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderLeft: '4px solid var(--emerald)' }}>
                <strong className="mono" style={{ fontSize: '1.1rem' }}>3. Exit Node</strong>
                <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>Knows Destination, but not YOU.</span>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--rose)', fontStyle: 'italic' }}>*Warning: Exit nodes can see unencrypted HTTP traffic. Always use HTTPS.</p>
            </div>
          </div>
          
          <div className="stagger d-3">
            <h3 style={{ color: 'var(--emerald)', fontSize: '2.5rem' }}>Torrents (P2P DHT)</h3>
            <div className="glass-panel" style={{ borderTop: '4px solid var(--emerald)' }}>
              <h4 style={{ color: '#fff', fontSize: '1.3rem' }}>Decentralized Swarm</h4>
              <p>Instead of downloading a 10GB file from a single server (which can be shut down), you download thousands of tiny chunks from 50 strangers globally simultaneously. It is mathematically unkillable.</p>
              <h4 style={{ color: 'var(--amber)', marginTop: '1.5rem', fontSize: '1.3rem' }}>Kademlia DHT</h4>
              <p style={{ margin: 0 }}>Distributed hash tables (using an XOR metric distance algorithm) allow nodes to discover peers mathematically without a central tracking server.</p>
            </div>
          </div>
        </div>
      </Slide>
    )
  },
  // Slide 26: Final 200 OK
  {
    color: "emerald",
    component: ({ active, onTerminate }) => (
      <Slide active={active} color="emerald" alignCenter>
        <div className="stagger d-1" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <i className="fa-solid fa-server icon-massive" style={{ color: 'var(--emerald)' }}></i>
        </div>
        <h1 className="title-massive text-gradient grad-emerald stagger d-2" style={{ fontFamily: '"JetBrains Mono"', fontSize: '6rem' }}>
          <DecryptedText key={active ? 'active' : 'inactive'} playAudio={active} text="HTTP 200 OK" animateOn="view" speed={40} maxIterations={4} sequential={true} />
        </h1>
        <p className="stagger d-3" style={{ color: 'var(--text-main)', maxWidth: '900px', fontSize: '1.5rem', marginTop: '2rem' }}>
          The connection is established. You now understand what happens under the hood.
        </p>
        <div className="stagger d-4" style={{ marginTop: '3rem' }}>
          <button
            onClick={onTerminate}
            className="glass-panel"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '1rem 3rem', color: 'var(--rose)',
              borderColor: 'rgba(244, 63, 94, 0.4)',
              background: 'rgba(244, 63, 94, 0.08)',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '1rem', cursor: 'pointer',
              transition: 'all 0.2s',
            }}
          >
            <i className="fa-solid fa-power-off"></i> Terminate Session
          </button>
        </div>
      </Slide>
    )
  }
];
