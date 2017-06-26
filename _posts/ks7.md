
{{{
  "title": "Knowledge Stream #7",
  "tags": ["Science","Security","Code"],
  "category": "Knowledge Streams",
  "date": "15 May 2016",
  "preview": "This knowledge stream looks at NOSQL, W3C, exploit kits, quantum entanglement and electric vehicles."
}}}


#### NOSQL

SQL (Structured Query Language) is the standard programming language used to communicate with a relational database. You can use SQL for different database operations. It is used to manage, store, and retrieve data in relational databases through applications and queries either on the same computer or over those on the network. An SQL server consists of a relational database which comprises of a set of tables containing data with predefined categories or columns. It contains structured data like names, email addresses, and phone numbers. A relational database matches data by using common characteristics found in the dataset and the resulting group is termed as Schema.
NoSQL (Not Only SQL) allows storage of unstructured data across multiple processing nodes and it does not require fixed table schemas, usually avoids join operations, and typically scales horizontally. NoSQL was conceived as a completely different framework of databases that allows for high-performance, agile processing of information at a much bigger scale. This is the database well-adapted to the high demands of big data.

###### Comparison with SQL
Relational databases were not designed to cope with the scale and agility challenges that face modern applications, nor were they built to take advantage of the commodity storage and processing power available today. The structured approach of RDBMS(Relational Database Management System) database like SQL slows down performance as data volume or size gets bigger and it is also not scalable to meet the needs of Big Data.

NoSQL is centered on the concept of distributed databases, where unstructured data may be stored across multiple processing nodes, and often across multiple servers. This distributed architecture allows NoSQL databases to be horizontally scalable; as data continues to explode, just add more hardware to keep up, with no slowdown in performance.

Relational databases require that schemas be defined before you can add data. For example, you might want to store data about your customers such as phone numbers, first and last name, address, city and state – a SQL database needs to know what you are storing in advance. This fits poorly with agile development approaches, because each time you complete new features, the schema of your database often needs to change.

NoSQL databases are built to allow the insertion of data without a predefined schema. That makes it easy to make significant application changes in real-time, without worrying about service interruptions – which means development is faster, code integration is more reliable, and less database administrator time is needed.


###### Types of NoSQL Databases
Document databases pair each key with a complex data structure known as a document. Documents can contain many different key-value pairs, or key-array pairs, or even nested documents.
Graph stores are used to store information about networks of data, such as social connections.
Key-value stores are the simplest NoSQL databases. Every single item in the database is stored as an attribute name (or "key"), together with its value.
Wide-column stores are optimized for queries over large datasets, and store columns of data together, instead of rows.

###### Benefits
**Elastic scaling**: NoSQL databases are designed to expand transparently and horizontally to take advantage of new nodes, and they’re usually designed with low-cost commodity hardware in mind.
Bigger Data Handling Capability: NoSQL distributed databases allow data to be spread across thousands of servers with little reduction in performance and it outstrips that which can be handled by the biggest RDBMS.
Lower Maintenance Cost: NoSQL databases require less management. Features like automatic repair, easier data distribution, and simpler data models make administration and tuning requirements lesser in NoSQL.

**Server Cost**: Storing and processing data cost per gigabyte in case of NoSQL can be many times lesser than the cost of RDBMS.

**No Schema**: Data can be inserted in a NoSQL database without first defining a rigid database schema.
Integrated Caching Facility: In order to increase data output and performance, advance NoSQL techniques cache data in system memory.

Best suited for:
Massive volume of new, rapidly changing data types
Agile sprints, quick schema iteration, and frequent code pushes
Always on services
Millions of users
Cloud computing
Object oriented programming
Geographically distributed scale-out architecture instead of expensive, monolithic architecture

###### Limitations
Support: All enterprises need to have the reassurance that should a key function within their data management system fail, they will have access to competent support in a timely manner. All the RDMBS vendors have made great effort to ensure that such services are available, and enterprises can also enlist 24 hour support. Each NoSQL database in contrast tends to be open-source, with just one or two firms handling the support angle. Many of them have been developed by smaller startups which lack the resources to fund support on a global scale, and also the credibility that the established RDBMS vendors like Oracle, IBM and Microsoft enjoy.
Expertise: Because NoSQL databases are still new, virtually every NoSQL developer out there is still learning the ropes, unlike RDBMS systems, which have millions of proficient developers throughout the market and in every field of trade. Over time, this situation will resolve itself, but presently, it remains easier to find an RDBMS expert than a NoSQL expert.

###### Popular NOSQL Databases
Redis:  An open source, in-memory and NoSQL database known for its speed and performance. To deliver top performance, Redis stores all data in RAM. The database is best used when time is an issue, including job management, queuing, real-time analytics, messaging, in-app social capabilities and geo search.
Cassandra: Created at Facebook, Cassandra has emerged as a useful hybrid of a column-oriented database with a key-value store. Grouping families gives the familiar feeling of tables and provides good replication and consistency for easy linear scaling. Cassandra is most effective when used for managing really big volumes of data, such as Web/click analytics and measurements from the Internet of Things.
CouchDB: CouchDB is an Open Source NoSQL Database which utilizes JSON to store information and JavaScript as its query language. CouchDB applies a type of Multi-Version Controlling system for avoiding the lockage of the DB file during writing.
MongoDB: MongoDB is the most well-known among NoSQL Databases. It is an Open-Source database which is Document oriented. MongoDB is an scalable and accessible database and is in C++.
HBase: HBase is a distributed and non-relational database which is designed after the BigTable database by Google. One of the main goals of HBase is to host Billions of rows X millions of columns.

Sources: [mongodb](https://www.mongodb.com/nosql-explained), [udemy](https://blog.udemy.com/nosql-vs-sql-2/), [zdnet](http://www.zdnet.com/article/rdbms-vs-nosql-how-do-you-pick/)



#### World Wide Web Consortium (W3C)

The World Wide Web Consortium (W3C) is the main international standards organization for the World Wide Web (abbreviated WWW or W3). The World Wide Web Consortium (W3C) was founded by Tim Berners-Lee in October, 1994. It was founded at the Massachusetts Institute of Technology Laboratory for Computer Science (MIT/LCS) with support from the European Commission and the Defense Advanced Research Projects Agency (DARPA), which had pioneered the Internet and its predecessor ARPANET. Although W3C is funded by industrial members, it is vendor-neutral, and its products are freely available to all.

Most W3C work revolves around the standardization of Web technologies. W3C follows processes that promote the development of high-quality standards based on the consensus of the Membership, Team, and public.
General overview of the standardization process:
People generate interest in a particular topic. Members and Teams monitor work inside and outside of W3C for signs of interest.
When there is enough interest, the Director announces the development of a proposal
The working group - Member representatives, Invited experts and Team representatives work on the proposal ( reports, test suites, tutorials etc.)
Working group creates specifications and guidelines that undergo cycles of revision and review by members and public. At the end of the process, the Advisory Committee reviews the mature technical report, and if there is support, W3C publishes it as a Recommendation.

###### Highlights of W3C Principles
**Web for All**: W3C's primary goals is to make web available to all people, whatever their hardware, software, network infrastructure, native language, culture, geographical location, or physical or mental ability. (yes, even IE)
Web on Everything: Mobile phones, smart phones, personal digital assistants, interactive television systems, voice response systems, kiosks and even certain domestic appliances can all access the Web.
Web for Rich Interaction: W3C standards supported the evolution of web through strong architecture and design principles. W3C has Web Design and Applications standards for building and Rendering Web pages, including HTML, CSS, SVG, device APIs, and other technologies for Web Applications. Web architecture standards focuses on the foundation technologies and principles which sustain the Web, including URIs and HTTP (protocols).
Web of Data and Services:  W3C is helping to build a technology stack to support a “Web of data,” the sort of data you find in databases. The ultimate goal of the Web of data is to enable computers to do more useful work and to develop systems that can support trusted interactions over the network. As for services, technologies such as HTTP, XML, SOAP, WSDL, SPARQL, and others are covered.

**Web of Trust**: Do Not Track is a technology that lets users express their preferences around online tracking while browsing the Web. Advertisers, analytics, publishers and other online services that respect the DNT signal will limit the behavioral tracking of their users.
The Platform for Privacy Preferences Project (P3P) enables Websites to express their privacy practices in a standard format that can be retrieved automatically and interpreted easily by user agents. P3P user agents will allow users to be informed of site practices (in both machine- and human-readable formats) and to automate decision-making based on these practices when appropriate.
POWDER the Protocol for Web Description Resources provides a mechanism to describe and discover Web resources and helps the users to make a decision whether a given resource is of interest.

Sources: [w3](https://www.w3.org/Consortium/), [w3](https://www.w3.org/2005/10/Process-20051014/intro)



#### Exploit Kits

An exploit kit is a tool that cyber criminals use to exploit the vulnerabilities in your system and infect it with malware. The first recorded exploit kit attack could be traced back in 2006, which used the 'WebAttacker kit'. It was found in the Russian underground market, came with technical support and was sold for US$20.

###### Core Actions
To scan your system for vulnerabilities
To exploit the vulnerabilities it discovers by downloading malicious code into your system
To execute malicious code on your system which basically means that it is able to install malware on your device.

The exploit kit usually targets browsers or other programs that a website can invoke through any of your browsers (Adobe Reader, Java Runtime Environment, Adobe Flash Player, etc.). The most used exploit kits are so sophisticated that they manage to avoid being detected antivirus products.

###### Key Techniques
**Obfuscation**: A common technique used in several kinds of attacks to prevent the detection of the malicious payload. Through obfuscation, the payload is changed to have a different appearance in static but recovers during execution. A typical example is a packer program. A packer is piece of software that takes the original malware file and compresses it, thus making all the original code and data unreadable. At runtime, a wrapper program will take the packed program and decompress it in memory, revealing the program’s original code.

**File-less Infection**: The payload is written directly to RAM. The code is injected into some running process, such as iexplore.exe or javaw.exe, which is then used for the exploit. Because the malware doesn't exist as a file, it can often elude intrusion prevention systems and antivirus programs. Exploit kits like Angler and Hanjuan perform file less infection.

**Drive-By Attack**: Refers to the unintentional download of a virus or malicious software onto your computer or mobile device. A person can be tricked into a drive-by download attack in two ways: (1) the person is lured into visiting a malicious website set up by criminals; or (2) the person visits a legitimate website that has unknowingly been compromised by hackers, and either infects the person directly (usually through an ad or pop-up) or redirects the person to a malicious site.

An infection can happen in less than a second, here's how:
Entry point: You’re browsing through a website
Distribution: The attackers redirect your browser to a malicious website that hosts an exploit kit (drive-by attack)
Exploit: The kit scans your browser and loos for vulnerabilities ( lack of latest java, flash updates ..)
Infection: The exploit kit drops a payload
Execution: The payload applies what it's programmed to do: collect financial info, encrypt data and ask for ransom etc..

###### Most Notorious Kits
**Angler**: In its short history, Angler has gained traction because of its special characteristics. It has spread ransomware, it’s been involved in advertising and even in hacktivism campaigns. Sometimes it even comes with a user-friendly interface. This enables the attacker to track the evolution of the malware campaign and adjust the settings for more effective results. It's sold in cybercriminal circles, there's also a speculation that there may even be a "pay-per-install' payment model.

**Nuclear Pack**: This kit is capable of deploying a wide range of attacks, from Flash, Silverlight, PDF, and Internet Explorer exploits to the possibility of launching advanced pieces of malware and ransomware. Nuclear Pack is constantly being improved by its creators to avoid detection and achieve higher infection rates. Nuclear Pack has detection for anti-virus packs and has a second layer of obfuscation.

**Sweet Orange**: This kit has a database backend that records successful infections, statistics about exploits for Java, PDF, IE and Firefox, and of course regular updates. Sweet Orange claims to get a successful infection rate of 10% to 25% of the visitors who land on the malicious webpage. The malware has morphing abilities as well as the ability to evade and turn off sandbox protection. Additionally, it tries to stop and disable active anti-virus and blocks network and Internet access to anti-virus vendors to make it more difficult for users to detect and remove the rootkit.

Protect yourself:
- Secure your browser
- Keep software’s up to date
- A good anti-virus/anti-spyware/anti-malware
- Strong firewall
- Regular data backups
- Password Managers
- VPN
- Encryption

A good guide for securing browser:[heimdalsecurity](https://heimdalsecurity.com//blog/ultimate-guide-secure-online-browsing/)

Sources: [malwarebytes](https://blog.malwarebytes.org/101/2015/01/exploit-kits-a-fast-growing-threat/), [heimdalsecurity](https://heimdalsecurity.com/blog/ultimate-guide-angler-exploit-kit-non-technical-people/)

White Paper and Infographic: [trendmicro](https://www.trendmicro.com/cloud-content/us/pdfs/security-intelligence/white-papers/wp-evolution-of-exploit-kits.pdf), [sophos](https://sophos.files.wordpress.com/2014/03/webc2a0threatsc2a0infographic.pdf)


#### Wells Fargo: Eye scans on mobile app

Wells Fargo plans to use eye scans to verify the identity of customers using its mobile app and said that it plans to roll out the biometric security technology by July. Customers will use their iPhone cameras to take a picture of their eyes, and software in the bank’s mobile app will then translate the image into digital code to match a stored template. The system looks at the pattern of blood vessels in the whites of the eyes — a unique marker, like a fingerprint. The system will only be in place for commercial lending customers who typically handle millions of dollars in transactions. The existing authentication mechanism requires a user name, password and corporate ID number, and also a code from a hardware security token.

It's the latest step in a broader push by banks and other institutions to do away with passwords, PINs and other information that can be stolen or forgotten, and replace them with biometrics — unique physical characteristics that, for now at least, are difficult to forge.       

"User names and passwords are basically 15 years old. They're at the end of their useful life," Secil Watson, who oversees online and mobile applications for Wells Fargo commercial banking, told the LA Times. "Something needs to take their place." Initially conceived by a University of Missouri professor as a military tool, the system was developed by EyeVerify, a Kansas City, Mo., start-up that Wells Fargo invested in two years ago.

Fingerprint identification is becoming commonplace thanks to the addition of scanners on phones from Apple, Samsung and others. Big banks, including Bank of America and JPMorgan Chase, already let non-business customers sign into their mobile banking apps with their fingerprints, a feature that Wells Fargo will roll out soon.

Sources: [latimes](http://www.latimes.com/business/la-fi-cutting-edge-eyescan-20160306-story.html), [infosecurity-magazine](http://www.infosecurity-magazine.com/news/wells-fargo-to-roll-out-eyescans/)


#### Quantum Entanglement (Part 1)
Quantum Entanglement is a key concept in quantum mechanics. I decided to cover this topic because most researchers believe that entanglement is necessary to realize quantum computing and it is used in some protocols of quantum cryptography. To understand quantum entanglement we need to first look at a simple non-quantum or classical version of entanglement. Entanglement arises in situations where we have partial knowledge of the state of two systems.

Let's consider a simple example, we have two types of muffins(M), a square shaped one[M-S] and a circular one(M-C). If a box can have two muffins, these are the possibilities in front of us

**Muffin Experiment I**:    1. *[M-S][M-S]*   2. *[M-S]\(M-C)*  3. *(M-C)[M-S]*  4. *(M-C)(M-C)*  ( Yes, the position of the muffin inside the box matters, hence 2 & 3 )

Each combination has a 25% probability. Will knowing the first muffin inside a box is square [M-S] help us deduce the nature of the second muffin? No, the second one can still be [M-S] or (M-C).
We can conclude that the muffins inside a box are "Independent" of each other's nature.

Now what if the box can come in only two ways:

**Muffin Experiment II**:   1. *[M-S][M-S]* 2. *(M-C)(M-C)* - 50% probability each.
Here, knowing the shape of first muffin in the box will let us infer the shape of the other with certainty.
We can conclude that these muffins are extremely 'Entangled'.

The quantum version of entanglement is essentially the same phenomenon — that is, lack of independence.

What if our muffin came in two flavors? Let's say chocolate and vanilla. So a single muffin can now be,

**Muffin Experiment III**:   1. [M-S+CHO] 2. [M-S+VAN] 3. (M-C+CHO) 4. (M-C+VAN)

Consider that, to know the shape you have to see the muffin and to know the flavor you have to take a whiff. Two different type of actions are required to know both the properties. Now, let's apply some quantum level thought to this scenario - If you can perform only one action at a time, then the fact that a muffin can exhibit, in different situations, different shapes or different flavors does not necessarily mean that it possesses both a shape and a color simultaneously. This is because you can only measure one property at a time of our quantum muffin.

We can measure the shape, but in doing so we lose all information about flavor and vise-versa. What we cannot do, according to quantum theory, is measure both its shape and its flavor simultaneously. This is the principle of Complementarity. (Remember we are talking about quantum particles now.)

The quantum theory forces us to consider the following:
1. A property that is not measured need not exist.
2. Measurement is an active process that alters the system being measured
3. The states of objects are described by wave functions - We cannot directly apply the physical probabilities of muffins to wave functions, this gives rise to some interesting complications.

###### EPR Effect
Albert Einstein, Boris Podolsky and Nathan Rosen (EPR) described a startling effect that can arise when two quantum systems are entangled. An EPR pair consists of two quantum muffins, each of which can be measured either for its shape or for its flavor (but not for both). We assume that we have access to many such pairs, all identical, and that we can choose which measurements to make of their components. If we measure the shape of one member of an EPR pair, we find it is equally likely to be square or circular. If we measure the flavor, we find it is equally likely to be chocolate or vanilla.

The interesting effects, which EPR considered paradoxical, arise when we make measurements of both members of the pair. When we measure both members for flavor, or both members for shape, we find that the results always agree. Thus if we find that one is chocolate, and later measure the flavor of the other, we will discover that it too is chocolate, and so forth. On the other hand, if we measure the shape of one, and then the flavor of the other, there is no correlation.

The highlight is that, we will, according to quantum theory, get those results even if great distances separate the two systems, and the measurements are performed nearly simultaneously. The choice of measurement in one location appears to be affecting the state of the system in the other location.

If we put each member of a pair of gloves in boxes, and mail them to opposite sides of the earth, then we can by looking inside one box  determine the handedness of the glove in the other. Similarly, in all known cases the correlations between an EPR pair must be imprinted when its members are close together, though of course they can survive subsequent separation, as though they had memories.

###### GHZ State
Daniel Greenberger, Michael Horne and Anton Zeilinger discovered another brilliantly illuminating example of quantum entanglement. It involves three of quantum particles prepared in a special, entangled state. The GHZ experiment involved measuring three quantum muffins for shape and flavor, the muffins were in an entangled state called as the GHZ state. The measurements were done by three experimenters and chosen randomly.

Analysis of the results revealed certain correlations between the act of measurements and outcome set. An example -  The experimenters discovered that whenever two of them chose to measure shape but the third measured flavor, they found that exactly 0 or 2 results were circular or chocolate.

The experiment revealed that, the assumption that physical quantities are in possession of values(shape, flavor) irrespective of whether they are actually measured is absurd. Also, this means that the measurement result of a quantum observable depends on the physical arrangement of a second commuting observable being measured with it. This principle is called, Quantum Conceptuality.

"The inherent absurdity of conceptuality is that it is intended to allow physical quantities to exist independently of measurements even though their values can only be defined as members of sets of measurements that are performed together."

###### Many Worlds
If we can assign a definite state to our system at each point in time, then our system has ‘entangled histories’. Similar to how we got conventional entanglement by eliminating some possibilities(Muffin Experiment II), we can create entangled histories by making measurements that gather partial information about what happened.

Let’s consider the evolution of a single quantum muffin over time. We can imagine situations where we determine that the shape of our muffin was either square at both times or that it was circular at both times, but that our observations leave both alternatives in play. Knowing the state of the muffin at one point will lets us infer the state of the muffin at another point of time, hence the term entangled histories.

If we add complementarity to this system, our Muffin might be in the Vanilla state at an earlier time, and measured to be in the Chocolate state at a subsequent time. We cannot consistently assign our Muffin the property of flavor at intermediate times; nor does it have a determinate shape. Histories of this sort realize, in a limited but controlled and precise way, the intuition that underlies the many worlds picture of quantum mechanics. A definite state can branch into mutually contradictory historical trajectories that later come together.          

More muffin analogies on part 2.

Sources: [quantamagazine](https://www.quantamagazine.org/20160428-entanglement-made-simple/), [scienceblogs](     http://scienceblogs.com/pontiff/2008/01/17/contextuality-of-quantum-theor/), [thisquantumworld](http://thisquantumworld.com/wp/the-mystique-of-quantum-mechanics/greenberger-horne-zeilinger/)



#### Electric Vehicles & Hybrids
A standard electric vehicle is one that is propelled by one or more electric motors which are powered by a bank or pack of batteries. When depleted, the batteries are recharged using grid electricity, either from a wall socket or a dedicated charging unit. Fully-charged, most battery electric cars have a driving range of between 70 to 100 miles, well within the day-to-day range requirements of most people. Electric motors generate near-instant torque, or turning-force, while the torque of internal combustion engines increases in tandem with the engine’s revolutions (RPM). This means that BEVs have extremely fast acceleration and a “light” or “zippy” feel compared to conventional cars and trucks.

###### Key Features
Efficiency: Electric motors have an efficiency advantage over other types of motors, gasoline engines are 20-25% efficient, while electric car motors are 75-95% efficient (brushed motors usually have ratings in the 80s, and brushless in the 90s), meaning that they convert 75-95% of the electrical energy consumed into rotational mechanical energy.

Regenerative braking is a fuel-saving feature. Conventional cars rely entirely on friction brakes to slow down, dissipating the vehicle's kinetic energy as heat. Regenerative braking allows some of that energy to be captured, turned into electricity, and stored in the batteries. This stored electricity can later be used to run the motor and accelerate the vehicle.

Idle-off is a feature that turns off your car's conventional engine when the vehicle is stopped, saving fuel. The battery provides energy for the air conditioner and accessories while the vehicle idles at stoplights or in traffic, and the electric motor can start the vehicle moving again.

###### Types
**Hybrids**: Hybrids share an overlapping set of technologies to make their systems work. Their basic goal is to maximize the use of the electric portion of the drivetrain because electric motors are more efficient and produce no emissions. Conventional vehicles use gasoline or diesel to power an internal combustion engine. Hybrids also use an internal combustion engine—and can be fueled like normal cars—but have an electric motor and battery, and can be partially or wholly powered by electricity.

Hybrids achieve better fuel efficiency and offers the best of both worlds. In a Full hybrid both the gas engine and electric motor contribute to driving the wheels. A full hybrid may also operate for short durations in pure electric mode. Mild hybrid has a battery and helper motor, but these operate while the gas engine is on, and never fully take over. They are not powerful enough to propel the car without the gas engine also doing some of the work. Plug-In hybrids include all the technologies of a full hybrid, but have larger batteries. These can be plugged into the grid and their increased supply of on-board electricity allows them to run in all-electric mode.

**Fuel Cell**: Fuel cell electric vehicles convert hydrogen gas into electricity to power an electric motor and battery. Converting hydrogen gas into electricity produces only water and heat as a byproduct, meaning fuel cell vehicles don’t create tailpipe pollution when they’re driven. Producing the hydrogen itself can lead to pollution, including greenhouse gas emissions, but even when the fuel comes from one of the dirtiest sources of hydrogen, natural gas, today’s early fuel cell cars and trucks can cut emissions by over 30 percent when compared with their gasoline-powered counterparts.

Battery electric vehicles(BEV) run off an electric motor and battery. This offers them increased efficiency and, like fuel cell vehicles, allows them to drive emissions-free when the electricity comes from renewable sources. Unlike fuel cell cars and trucks, battery electric vehicles can use existing infrastructure to recharge, but must be plugged in for extended periods of time.

**Pollution factor**: When driven, BEVs don’t produce tailpipe pollution—they don’t even have a tailpipe. However, the electricity they use may produce heat-trapping gases and other pollution at the source of its generation or in the extraction of fossil fuels. The amount of pollution produced depends on how the electricity is made. Battery electric cars charged off the dirtiest coal-dominated grid still produce less pollution than their gasoline-powered counterparts. BEVs powered by renewable energy sources like wind or solar are virtually emission-free. Hybrids still produce emission but less in comparison. Widespread adoption of electric cars and trucks could save 1.5 million barrels of oil a day by 2035.
Calculate Emissions: [emissions-tool](http://www.ucsusa.org/clean-vehicles/electric-vehicles/ev-emissions-tool)

**Monetary benefit**: University of California at Davis’ Plug-in Hybrid & Electric Vehicle Research Center has released a tool which will simulate fuel costs and would help you find out how much you can save by switching from a gasoline vehicle to an electric vehicle.[ucdavis](http://gis.its.ucdavis.edu/evexplorer/)

Sources: [ucsusa](http://www.ucsusa.org/clean-vehicles/electric-vehicles), [kompulsa](https://www.kompulsa.com/energy-index/hybrid-and-electric-vehicles/)
