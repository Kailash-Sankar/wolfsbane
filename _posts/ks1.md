
{{{
  "title": "Knowledge Stream #1",
  "tags": ["Tech","Security","UI"],
  "category": "Knowledge Streams",
  "date": "15 Nov 2015",
  "preview": "This knowledge stream looks at free https certificates, passwords, UI design trends, D-H key exchange, personal development and drones."
}}}


###### Let's Encrypt

Free HTTPS Certificates! \0/  

Let's Encrypt, a non-profit company whose goal is to encrypt the whole Web, announced last month that its free HTTPS certificates are now trusted by all major browsers. The company is run by the Internet Security Research Group (ISRG) and backed by the Electronic Frontier Foundation, Mozilla, Cisco Systems, and Akamai.
Their code is available on github and they have a very detailed 'How it works' page. I requested a certificate for my site via their beta program and my request was approved yesterday, I'll try to set it up soon.

Source:
[Let's Encrypt](https://letsencrypt.org/2015/10/19/lets-encrypt-is-trusted.html)  


###### Kill the Password

With all the hacking that's going on in the web these days, it's a good idea to revisit the age old password schemes. Edward Snowden on an interview with John Oliver said that it's time to switch to passphrases instead of passwords. According to him it doesn't take long for NSA to brute force an 8 character password which is based on a dictionary term. There are a lot of password dictionaries available and tools like 'John the Ripper' make it easy for anyone to crack passwords.

Brute force attacks attempt to determine a password by trying every possible key combination. It takes a lot of time and is computationally expensive. A dictionary attack however tries only those possibilities which are most likely to succeed, typically derived from a list of words for example a dictionary. Generally, dictionary attacks succeed because many people have a tendency to choose passwords which are short, such as single words found in dictionaries or simple, easily predicted variations on words, such as appending a digit.

Quoting Mat Honan author at Wired - "This summer I learned how to get into, well, everything. With two minutes and $4 to spend at a sketchy foreign website, I could report back with your credit card, phone, and Social Security numbers and your home address. Allow me five minutes more and I could be inside your accounts for, say, Amazon, Best Buy, Hulu, Microsoft, and Netflix. With yet 10 more, I could take over your AT&T, Comcast, and Verizon. Give me 20 - total and I own your PayPal. Some of those security holes are plugged now. But not all, and new ones are discovered every day."

A long and randomized password will be hard to remember, so you have to find the right balance between the password strength and ease of remembering it.
Here are a few options that will help you out -

(I) Iambic tetrameter - Researchers from the University of Southern California's department of computer science recommend that you mantle your data in impenetrable mystery by choosing a couplet of iambic tetrameter as your password. Which makes writing password a poetry. The researchers have set up a poetry password generation website, but the wait time now is 466 hours K . Here are some samples and the link.

Random generated bit "101100001110100100100101101011101011010111001011011100000101" converted to "Because the Edwards testified and only packet amplified"

http://52.24.230.241/bc/password_generation.php

(II) Diceware wordlists - A diceware word list contains 7776 English words and each word has a five digit number assigned to it where each digit is between 1 and 6. A physical or virtual die is rolled 5 times and generated number is noted down, then looked up on the wordlist to get your first word for the passphrase. Repeat 4-6 times for a secure passphrase. Of course there is a site that can do all this and even show you how hard it will be to brute force the generated password. Link and samples below:

4 words - '39th wishy hyena inapt' , takes ~30 minutes to brute force by a machine which can guess a trillion keys/second.
6 words - 'violet dis fast hood ac close' takes ~3,505 years to brute force by a machine which can guess a trillion keys/second.

https://grempe.github.io/diceware/

Personally I use Japanese strings on my passwords :p

Sources: [Wired](http://www.wired.com/2012/11/ff-mat-honan-password-hacker/), [xkcd](https://xkcd.com/936/)

###### Design Trends - Ghost buttons, Material Designs, Atomic design

The UI/UX industry is coming up with cool stuff at lightning speed. These are some of the prominent ideas that came out recently.

**Ghost Buttons**

Apple inspires everyone with their design and aesthetics, this time with iOS7 they brought in the ghost buttons - transparent buttons outlined with a thin line. These buttons are best suited for full page backgrounds as they are less intrusive and pleasing to the eyes.
sample: http://bilderphoto.com/

**Material Design**

Google pushed in the material design with their lollipop update and app developers are since then switching to this design one by one. Two months ago Google released "Material Design Lite' a framework to bring material design to the web. Material design combines the principles of flat design with slight animation and gradients to present elements from the 3D world. Google describes 'material' as 'grounded in tactile reality, inspired by the study of paper and ink, yet technologically advanced and open to imagination and magic.'

I've had firsthand experience with material design lite and I can say it's awesome. It's a lot like the bootstrap framework by Twitter, follows a similar grid layout, it's responsive and offers a variety of classes to get things done. The most important aspect being shadows which give elements a 3D materialistic feel. Just like bootstrap with material design you can build an eye catching prototype within hours even if you are a beginner with CSS.
But Material is new and has it's issues when compared to the more stable bootstrap but it's made by Google and will keep getting better.
Sample: http://www.getmdl.io/templates/dashboard/index.html

**Interactive Infographics**

Infographics are cool, making them interactive is the next big thing. (>.>)
It's about providing content in a fun way to keep the visitor interested in the website and if it's a developer you want them to 'Right Click' -> 'Inspect Element', because that's the reward.
sample: http://www.wired.com/2011/01/ff_orgchart_crime/

**Full screen video background**

Sounds simple but becomes captivating if done in the right way. A recent study from MIT stated that in as little as 13 milliseconds people can process and retain visual images, meaning that a quick hook is all it takes. All recent design trends move towards a flat and minimal approach, having a video in the background with just a few links sounds perfect doesn't it.
Also, ghost buttons would complement this design.
Sample: http://iuqo.com/

**Atomic Design**

Atomic design applies chemistry to the web. 'Breaking Bad: UI'
Before we go in to the concept, there's the obvious question - Why are we applying stuff to the web? Why not just code and build a page and get it over with? Google's applying paper and ink concept, Brad Frost is applying chemistry, Apple see's Ghosts.. (0.0)
We need principles, something to standardize the designs we do. An approach that relates our design to the world we live in, the digital design should align with the material physical world. This is my understanding.

Atomic design is about creating the fundamental aspects of a design first, the atoms and then using them as building block to form larger elements. Somewhat like using Lego blocks :)
atoms -> molecules -> organisms -> template -> pages
"Atomic design isn't about designing a single instance or page, it's about designing with the big picture in mind - it's about designing the core of the system."

Example:
Atom - color code, font, buttons
Molecule - username and password field
Organism - a header bar with a login button
Templates - wireframe with multiple organisms - a home page layout
Pages - A high fidelity version of a template
Sample: http://demo.patternlab.io/

Sources: [TNW](http://thenextweb.com/dd/2015/07/24/6-design-trends-taking-over-the-web/), [Medium](https://medium.com/re-write/the-unicorn-workflow-design-to-code-with-atomic-design-principles-and-sketch-8b0fe7d05a37), [Zurb](http://zurb.com/patterntap)


__Code sample__: I tried a few of these concepts on [Codepen](http://codepen.io/kailash-sankar/full/WQKbQz/)

###### Diffie-Hellman key exchange: Vulnerability

The D-H scheme was first published by Whitfield Diffie and Martin Hellman in 1976 and is widely used. It is a way of generating a secret(key) between two people in such a way that the secret can't be seen by observing the communication. D-H primarily used as a method for exchanging keys for symmetric encryption algorithms like AES. It is the main key exchange mechanism in SSH and IPsec and a popular option in TLS.

If you are interested in learning the math behind D-H, this link explains it well in plain text: http://searchsecurity.techtarget.com/definition/Diffie-Hellman-key-exchange

Considering advances in computational power the prime size is continuously increased to make the mechanism more secure. The length of prime number matters because it dictates how many different prime numbers an adversary has to test to find the right one.

Researchers from the University of Michigan and several other universities recently presented a paper revealing that even the mathematics underlying such a protocol may be vulnerable. "If the protocol uses 512-bit primes, instead of the more common 1024-bit primes, then breaking it is well within reach of the capabilities of modern computation", the researchers write. And for 1024-bit primes the hardware required to crack the number in one year would cost hundreds of millions of dollars which is well within the reach of an organization like NSA.

Breaking the single, most common 1024-bit prime used by web servers would allow passive eavesdropping on connections to 18% of the Top 1 Million HTTPS domains. A second prime would allow passive decryption of connections to 66% of VPN servers and 26% of SSH servers.

There is also the 'Logjam' attack which allows a man-in-the-middle attacker to downgrade vulnerable TLS connections to 512-bit export-grade cryptography. The idea is that an active attacker (a MitM) could try to manipulate the list of cipher suites sent by the client to remove all "strong" crypto suites, keeping only the weakest that both client and server support. This allows the attacker to break the cipher suite and read & modify any data passed over the connection.

**How to protect yourself**
1. Disable support for export cipher suites and use a 2048-bit Diffie-Hellman group on your server
2. Update your browser.
3. Make sure the clients you maintain reject primes smaller than 1024

To check how secure banking websites are, I ran tests on https://www.ssllabs.com with three bank URLs and got these results(Grade A being the best):
1. Axis Bank - axisbank.co.in : Grade F
2. Wells Fargo - onlineservices.wellsfargo.com - Grade C
3. HDFC - netbanking.hdfcbank.com - Grade B

Sources: [weakdh](https://weakdh.org/), [Slate](http://www.slate.com/blogs/future_tense/2015/10/16/researchers_say_the_common_diffie_hellman_key_exchange_is_vulerable_to.html), [openssl](https://www.openssl.org/blog/blog/2015/05/20/logjam-freak-upcoming-changes/)


###### Personal Development

**Switching to a growth mindset**

A person's mindset can be categorized in to fixed or growth. Those with fixed mindset believe that things don't really change and those with growth mindset believe in constant evolution. The mindsets change based on the situation we are in. The below article shows how to understand the mindset we have and change ourselves to be the type of person everyone wants to be around.
Source: [Medium](https://medium.com/the-coffeelicious/how-to-be-the-type-of-person-everyone-wants-to-know-b7e996313c39#.yc15sgxfm)

**Value what we have**

It's true that we don't really value something until we lose it. What if that something is your life, the below post is a beautiful short story about life and death that makes us rethink about what we have and it's worth.
Source: [Medium](https://medium.com/life-tips/when-i-m-gone-f1611ceb759f#.u45o5ek40)

###### General Tech: Drones

Drones are fun but they can be a nuisance just as easily. How would your neighbor feel if you flew a drone with a cam near their yard and eventually crashed it on their space.
If that neighbor happens to be among the most powerful men on the planet say like the president of USA, then things are bound to get worse.
A drone crash landed on white house last month: http://www.cbsnews.com/news/drone-crash-lands-white-house/

Few weeks later this news comes up-
"The US Department of Transportation has announced plans to put together a task force entrusted with creating a registration process that certain drone operators will be required to adhere to."

What happens if you don't register and still fly your drones, it's not like they will shoot a missile and take it down right?
Guess again, there is a death ray that can take out drones by firing focused radio waves that operate at the same wavelength as the operators use thereby blocking the original signal. It's called Anti-UAV Defense System (AUDS) and is sold by US company Lit eye Systems, obviously drone death ray sound cooler. AUDS has been tested in the UK, the US and France, and government organizations in all three countries had been involved in the tests.
"If I can see it, I can kill it" said Rick Sondag, executive vice-president of Liteye Systems, at the Commercial Unmanned Aerial Vehicle Expo in Las Vegas this week.

Sources: [Techspot](http://www.techspot.com/news/62381-anti-drone-death-ray-can-take-out-uavs.html), [Techspot](http://www.techspot.com/news/62478-drones-may-have-registered-us-government.html)
