
{{{
  "title": "Knowledge Stream #2",
  "tags": ["Tech","Security","Crypto"],
  "category": "Knowledge Streams",
  "date": "12 Dec 2015",
  "preview": "This knowledge stream looks at elliptic curves, SED, Color theory, ransomware attacks, Einstein's riddle and Li-Fi."
}}}


###### Elliptic Curve Cryptography: Is the end nigh?

Modern cryptography is founded on the idea that the key that you use to encrypt your data can be made public while the key that is used to decrypt your data can be kept private. As such, these systems are known as public key cryptographic systems. What you need for a public key cryptographic system to work is a set of algorithms that is easy to process in one direction but difficult to undo i.e a trapdoor function. Finding a good trapdoor function is critical to making a secure public key cryptographic system. Simplistically, the bigger the spread between the difficulty of going one direction in a trapdoor function and going the other, the more secure a cryptographic system based on it will be.

In the case of RSA, the easy algorithm multiplies two prime numbers. If multiplication is the easy algorithm, its difficult pair algorithm is factoring the product of the multiplication into its two component primes. The gap between the difficulty of factoring large numbers and multiplying large numbers is shrinking as the number (i.e. the key's bit length) gets larger. The gap between factoring and multiplying is not sustainable in the long term so we moved on to elliptic curves.

An elliptic curve is the set of points that satisfy a specific mathematical equation. The equation for an elliptic curve looks something like this: y2 = x3 + ax + b (Actual math is complex)
ECC is based on properties of a particular type of equation created from the mathematical group derived from points where the line intersects the axes. Multiplying a point on the curve by a number will produce another point on the curve, but it is very difficult to find what number was used, even if you know the original point and the result. Equations based on elliptic curves are relatively easy to perform, and extremely difficult to reverse.

This means that for numbers of the same size, solving elliptic curve discrete logarithms is significantly harder than factoring. Since a more computationally intensive hard problem means a stronger cryptographic system, it follows that elliptic curve cryptosystems are harder to break than RSA and Diffie-Hellman.

Today, we can find elliptic curves cryptosystems in TLS(Transport Layer Security), PGP(OpenPGP public key format ) and SSH(Secure Shell Transport Layer), which are just three of the main technologies on which the modern web and IT world are based. Not to mention Bitcoin and other cryptocurrencies. An increasing number of websites make extensive use of ECC to secure everything from customers' HTTPS connections to how they pass data between data centers.

Back in August, the NSA released an advisory that the world had to prepare for the oncoming impact of quantum computers, and the possibility that these devices could render existing computer cryptography(like ECC) almost completely obsolete.
"Unfortunately, the growth of elliptic curve use has bumped up against the fact of continued progress in the research on quantum computing, which has made it clear that elliptic curve cryptography is not the long term solution many once hoped it would be," the NSA said in its Aug. 19 statement. "Thus, we have been obligated to update our strategy."

This advisory has very nearly driven the Internet insane. Last month, two noted cryptographers Neal Koblitz and Alfred J. Menezes have published a paper compiling all the various theories surrounding this advisory, and trying to make sense of the situation.
You can read the full paper here: https://eprint.iacr.org/2015/1018.pdf

Matthew Green, a cryptographer and Johns Hopkins University professor, speculates that the NSA isn't worried about quantum computing, instead it could have made advances in cryptanalysis of the elliptic curve discrete logarithm problem (ECDLP).

As of 2015, the development of actual quantum computers is still in its infancy so there is no immediate threat but should we start thinking of a cryptocalypse?
The theory underlying quantum computers is interesting enough to read up on. Quantum computers make direct use of quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data. These computers are different from digital electronic computers based on transistors. Digital computers require data to be encoded into binary digits (bits), each of which is always in one of two definite states (0 or 1), quantum computation uses quantum bits (qubits), which can be in superposition of states. That means that they can attack different parts of a problem simultaneously, split across possible versions of the universe. Quantum computing is believed to be capable of tackling mathematical problems classical computers can't solve quickly, including computing discrete logarithm mod primes and discrete logs over elliptic curves.

Sources:
[cryptographyengineering](http://blog.cryptographyengineering.com/2015/10/a-riddle-wrapped-in-curve.html),
[threatpost](https://threatpost.com/nsas-divorce-from-ecc-causing-crypto-hand-wringing/115150/),
[arstechnica](http://arstechnica.com/security/2015/10/nsa-advisory-sparks-concern-of-secret-advance-ushering-in-cryptoapocalypse/), [corbellini](http://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/)


###### Self-encrypting drive(SED) vulnerabilities

An SED is a self-encrypting hard drive with a circuit built into the disk drive controller chip that encrypts all data to the magnetic media and decrypts all the data from the media automatically. The encryption is completely invisible to the user. SED's give performance-related benefits compared to software-based encryption products which rely on the CPU and the encryption key is not stored in the OS memory, but on the disk itself which is more secure.

The encryption key used in SEDs is called the Media Encryption Key (MEK). Locking and unlocking a drive requires another key, called the Key Encryption Key (KEK) supplied by the user (or the platform, or the network). When a locked self-encrypting drive is powered up, the BIOS first sees a shadow disk( ~100MB), the software in the shadow disk is read-only, and this software requires the KEK from the user to unlock the real disk for use and to decrypt the MEK so the real disk can be read and written to.

Three data recovery methods against laptops using SEDs was revealed at the Black Hat Europe security conference in Amsterdam last month. The researchers focused on laptops with SEDs compatible with the Opal or eDrive SED standard (like BitLocker for windows). The attacks they demonstrated show that the these standards can't guarantee the security of data in situations where a laptop is in sleep mode and not turned off completely.

Once a SED is unlocked, it remains in that state until the power to it is cycled or a deauthentication command is sent. When the laptop is put in sleep mode the drive state is locked, but when it resumes from sleep, the pre-boot management software, which is already loaded in memory, unlocks the drive. This happens even if Windows itself remains locked and requires the user's password to log in.

**Attacks:**
1. A hot plug attack: It involves removing the drive from the laptop while in sleep mode and connecting it back using SATA data and power extension cables. The laptop is then awakened and the management software unlocks the drive. The attacker can then unplug the SATA data cable only from the laptop and connect it to a different computer or laptop to access the data on the drive.
2. Soft rest through a critical error: The laptop is woken up from sleep to unlock the drive. The attacker can then connect a special circuit board called a Facedancer to the laptop via USB. This board can be used to trigger a BSOD(Blue Screen Of Death) in Windows. When the laptop reboots, as a result of the critical error, the attacker can use the special function key to access the boot menu and boot from an alternative source, like a USB thumb drive(linux live boot) and access the data.
3. Hot unplug attack: This attack is more difficult to pull off because it requires exposing the drive's SATA pins while still running, attaching another power source to it, removing the drive while maintaining the alternative power and connecting it to a different computer.

To protect yourself it is always better to power off your laptops or put them in a hibernation state when you leave them unattended. IT administrators should disable Windows option to automatically restart on BSOD and also lock down BIOS/UEFI so that attackers can't boot from external media.

Encryption related vulnerabilities were also found on WD My Passport family of external drives. On some models, the drive's encryption key can be trivially brute-forced. And the firmware on some devices can be easily altered, allowing an attacker to silently compromise the drive and its file systems. The detailed paper is available here: http://eprint.iacr.org/2015/1002.pdf

Sources: [computerweekly](http://www.computerweekly.com/feature/Self-encrypting-drives-SED-the-best-kept-secret-in-hard-drive-encryption-security), [itworld](http://www.itworld.com/article/3004669/self-encrypting-drives-are-hardly-any-better-than-software-based-encryption.html), [trustedcomputinggroup](http://www.trustedcomputinggroup.org/resources/commonly_asked_questions_and_answers_on_selfencrypting_drives), [theregister](http://www.theregister.co.uk/2015/10/20/western_digital_bad_hard_drive_encryption/)


###### Design: Color Theory
Color Theory at the most basic level is the interaction of colors in a design through complementation, contrast, and vibrancy.

Complementation refers to the way we see colors in terms of their relationships with other colors. When colors occupy opposite ends of the color spectrum, they lead people to consider a design visually appealing by establishing a happy medium the eye can reside in.
Contrast reduces eyestrain and focuses user attention by clearly dividing elements on a page.
Vibrancy dictates the emotion of your design. Each color evokes specific moods, the brighter warm colors (red, orange, yellow) tend to energize a user and make them more alert, while darker cool shades (green, blue, purple) tend to be more relaxing and tranquil.

Warm colors include red, orange, and yellow, and variations of those three colors. These are the colors of fire, of fall leaves, and of sunsets and sunrises, and are generally energizing, passionate, and positive.
Cool colors include green, blue, and purple, are often more subdued than warm colors. They are the colors of night, of water, of nature, and are usually calming, relaxing, and somewhat reserved.
Neutral colors include black, white, gray, brown, beige & tan, cream & ivory often serve as the backdrop in design. They're commonly combined with brighter accent colors. But they can also be used on their own in designs, and can create very sophisticated layouts.

**What each color represents:**
* Red: power, importance, youth
* Orange: friendliness, energy, uniqueness
* Yellow: happiness, enthusiasm, antiquity (darker shades)
* Green: growth, stability, financial themes, environmental themes
* Blue: calm, safety, openness (lighter shades), reliability (darker shades)
* Purple: luxury, romance (lighter shades), mystery (darker shades)
* Black: power, edginess, sophistication
* Gray: neutrality, formality, melancholy
* White: cleanliness, virtue, simplicity
* Brown: Nature, Wholesomeness, Dependability
* Tan or Beige: Conservative, Piety, Dull, traits of surrounding colors
* Cream or Ivory: comfort, elegance, simplicity


**Choosing a color scheme:**  

*Compound Color Scheme (aka Split Complimentary):* The concept uses four colors - two contrasting pairs and two complementary pairs from opposite ends of the color spectrum.

*Analogous:* An Analogous color scheme is based on a careful selection of colors in the same area of the color spectrum.

*Triadic:* Composed of 3 colors on separate ends of the color spectrum. There is a very easy way to create a Triadic color scheme:
- Take a color wheel, and choose your base color.
- Draw an Equilateral Triangle from this point.
- The three points of the triangle will form your tri-color scheme. By using an Equilateral Triangle, you can ensure the colors have equal vibrancy and complement each other properly.  


I recommend visiting the source links for visual examples of these schemes.

The color scheme designer at http://paletton.com/ is a nice tool for creating color schemes with just a few clicks.

Sources: [tutsplus](http://webdesign.tutsplus.com/articles/an-introduction-to-color-theory-for-web-designers--webdesign-1437), [thenextweb](http://thenextweb.com/dd/2015/04/07/how-to-create-the-right-emotions-with-color-in-web-design/), [smashingmagazine](http://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/)

###### Ransomware Attacks
Ransomware is a type of malware that restricts access to a computer system that it infects in some way, and demands that the user pay a ransom to the operators of the malware to remove the restriction.

Crypto ransomware encrypts a victim's files and subsequently demands payment in return for the key that can decrypt said files. Some of the famous crypto ransomwares are Cryptolocker, Cryptowall, TeslaCrypt and the more recent Chimera.
The FBI's Internet Crime Complaint Center (IC3) released a report earlier this year stating that FBI's IC3 has been contacted by 992 victims of CryptoWall(3.0), and their combined losses total over $18 million.
The cyberthreatalliance.org reveals a detailed report and indicates that CryptoWall(3.0) has resulted in over $325 million in damages worldwide.

The newcomer Chimera primarily targets business and is also programmed to target specific employees within an infected company, presumably to make sure the ransom demand doesn't get missed. It also threatens to publish pictures/personal data somewhere on the internet unless a ransom is paid in bitcoins. Chimera encrypts data on local hard drives and network drives, also all file extensions are changed to .crypt .

The recently released CryptoWall 4.0 now replaces names of encrypted files with pseudo-randomly generated letters and numbers, presumably to further befuddle victims who are suddenly unable to access their data. CryptoWall is encrypting data with 2,048-bit RSA keys, which when implemented correctly are practically impossible to break. The malware warns users not to attempt to break the encryption lest the files be lost forever.
According to researchers at Heimdal Security - This new version possesses vastly improved communication capabilities. It includes a modified protocol that enables it to avoid being detected, even by 2nd generation enterprise firewall solutions. Ransom payment is made through a tor network so the anonymity of the attackers are not compromised.

Security researchers have now identified a new strain of ransomware that targets Linux-based web servers, holding an entire website hostage until the owner pays up. The ransomware is currently being called 'Linux.Encoder.1' and has reportedly seen it bite only a handful of websites so far. Each time it locks down a website, it demands one Bitcoin in payment. With the recent uptick in value, that's about $500. Many of the infected systems were accessed through a vulnerability in the Magneto CMS. A patch was issued to close this security hole on October 31st, but not all users will get the new version installed right away. The malware seeks out Apache, MySQL, and Nginx installations in the server before going to work, thus ensuring it locks important files that someone will want back.


**Prevent Infection:**
* keep your system up to date and always install the latest updates available
* back up your data constantly and frequently
* don't keep any important information on your computer
* do not open spam emails or emails sent by unknown senders
* don't download or open attachments in those emails
* use products that can detect and block recent ransomware / Cryptoware variants.


**You got infected:**
Once your data is encrypted, unfortunately, there's not much you can do. The encryption is very strong and most likely unbreakable.
The only options you have to access your data are: to either format your system and restore your information from the most recent backup or pay the ransom to get a decryption key - please not that paying the ransom does not guarantee that you will get the decryption key and it is not recommend.

DDOS Ransoms are also getting popular. A number of sites have been hit by distributed denial-of-service attacks over the past week launched by extortionists demanding thousands of dollars in ransom money. The Australian e-mail provider FastMail said it was hit by a wave of data assaults this month that were soon followed by e-mails demanding a payment of 20 Bitcoins, worth about $6,600 at current exchange rates. Other services reporting similar shakedowns include Hushmail, Runbox, VFEMail and ProtonMail.
From ProntonMail blog: "The coordinated assault on our ISP exceeded 100Gbps and attacked not only the data center, but also routers in Zurich, Frankfurt, and other locations where our ISP has nodes. This coordinated assault on key infrastructure eventually managed to bring down both the data center and the ISP, which impacted hundreds of other companies, not just ProtonMail."

Sources: [arstechnica](http://arstechnica.com/security/2015/11/booming-crypto-ransomware-industry-employs-new-tricks-to-befuddle-victims/), [cyberthreatalliance](http://cyberthreatalliance.org/cryptowall-dashboard.html), [extremetech](http://www.extremetech.com/internet/217754-new-encryption-ransomware-holds-entire-websites-hostage)


###### Problem Solving: Einstein's Riddle
Rumor has it that Albert Einstein made up an impossibly difficult riddle when he was just a kid. There's no evidence to back up that apocryphal claim, but the rumor earned the popular logic puzzle the nickname "Einstein's Riddle."

**Situation:**
* There are 5 houses in five different colors.
* In each house lives a person with a different nationality.
* These five owners drink a certain type of beverage, smoke a certain brand of cigar and keep a certain pet.
* No owners have the same pet, smoke the same brand of cigar or drink the same beverage.

**Hints:**
* the Brit lives in the red house
* the Swede keeps dogs as pets
* the Dane drinks tea
* the green house is on the left of the white house
* the green house's owner drinks coffee
* the person who smokes Pall Mall rears birds
* the owner of the yellow house smokes Dunhill
* the man living in the center house drinks milk
* the Norwegian lives in the first house
* the man who smokes blends lives next to the one who keeps cats
* the man who keeps horses lives next to the man who smokes Dunhill
* the owner who smokes BlueMaster drinks beer
* the German smokes Prince
* the Norwegian lives next to the blue house
* the man who smokes blend has a neighbor who drinks water

The question is: *Who owns the fish?*

Logical way of solving the riddle:
http://www.techinsider.io/how-to-solve-einsteins-riddle-video-2015-9

My Perl solution( hash is love, hash is life ):
https://gist.github.com/Kailash-Sankar/0209ce39ca7fba952b30

A well written Ruby solution:
https://medium.com/@sean.handley/solving-einstein-s-riddle-with-ruby-e78ba9ebabe#.h65rf372n

###### General Tech: Li-Fi
Li-Fi stands for Light Fidelity and is a light-based data delivery method which is superior to Wi-Fi in almost every way. Li-fi can deliver internet access 100 times faster than traditional Wi-Fi, offering speeds of up to 1Gbps.
Harald Haas, a physicist and professor of mobile communications at the University of Edinburgh was the first to coin the term Li-Fi, doing so at a TED Talk during TEDGlobal 2011.

Li-Fi requires a light source, such as a standard LED bulb, an internet connection and a photo detector. Binary information is represented as strings of 1's and 0's, any light source can transmit this ON and off state but LEDs are preferred because of their high flickering speed. LED lightbulbs that use the technology don't appear visually different information is encoded in pulses of light that are small and rapid enough perturbations to be undetectable to the naked eye. And Li-Fi is faster than Wi-Fi because light is 10,000 times more dense than radio waves.

An Estonian start-up Velmenni recently tested a commercial implementation of Li-Fi. Velmenni used a li-fi-enabled light bulb to transmit data at speeds of 1Gbps. Laboratory tests have shown theoretical speeds of up to 224Gbps. The test was carried out in an office, to allow workers to access the internet and in an industrial space, where it provided a smart lighting solution.

One of the big advantages of Li-Fi is the fact that, unlike Wi-Fi which uses radio waves Li-Fi uses light. So it does not interfere with other radio signals and could be utilized places where interference is an issue(like and Aircraft). While the spectrum for radio waves is in short supply, the visible light spectrum is much larger, meaning it is unlikely to run out any time soon.

Li-Fi requires that you be in the stream of light being emitted by the light source i.e. Li-Fi cannot travel through walls but Wi-Fi can. But this line-of-sight limitation does make the system more secure and gives better control over emission. Li-Fi is a technology that can aid cybersecurity in a very new way.

Sources: [bbc](http://www.bbc.com/news/technology-34942685), [thenextweb](http://thenextweb.com/insider/2014/08/21/purelifi-li-fi-vlc-led/), [slashgear](http://www.slashgear.com/what-is-li-fi-and-how-practical-is-it-in-the-real-world-30416365/)
