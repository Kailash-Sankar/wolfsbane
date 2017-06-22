
{{{
  "title": "Knowledge Stream #5",
  "tags": ["Tech"],
  "category": "Knowledge Streams",
  "date": "15 March 2016",
  "preview": "This knowledge stream looks at cloud computing, Moore's law, DROWN, VCS, js maze and bitcoins."
}}}


#### Cloud Computing

Cloud computing means storing and accessing data and programs over the Internet instead of your computer's hard drive. The cloud is just a metaphor for the Internet. It goes back to the days of flowcharts and presentations that would represent the gigantic server-farm infrastructure of the Internet as nothing but a puffy, white cumulonimbus cloud, accepting connections and doling out information as it floats. In local storage everything you need is physically close to you, which means accessing your data is fast and easy, for that one computer, or others on the local network. Storing data on a home or office network(NAS) does not count as utilizing the cloud. For it to be considered "cloud computing," you need to access your data or your programs over the Internet, or at the very least, have that data synchronized with other information over the Web.

With cloud computing, you don’t need to make large upfront investments in hardware and spend a lot of time on the heavy lifting of managing that hardware. Instead, you can provision exactly the right type and size of computing resources you need to power your newest bright idea or operate your IT department. You can access as many resources as you need, almost instantly, and only pay for what you use.

**Cloud computing services can be private, public or hybrid.**

- Private cloud services are delivered from a business' data center to internal users. This model offers versatility and convenience, while preserving management, control and security.
- Public cloud model delivers the cloud service over the Internet. Public cloud services are sold on-demand, typically by the minute or the hour. Customers only pay for the CPU cycles, storage or bandwidth they consume.
- Hybrid cloud is a combination of public cloud services and on-premises private cloud – with orchestration and automation between the two. Companies can run mission-critical workloads or sensitive applications on the private cloud while using the public cloud for handling workloads that must scale on-demand.

As cloud computing has grown in popularity, several different models and deployment strategies have emerged to help meet specific needs of different users. There are three main models for cloud computing:
- Infrastructure as a Service (IaaS): Infrastructure as a Service contains the basic building blocks for cloud IT and typically provide access to networking features, computers (virtual or on dedicated hardware), and data storage space. Infrastructure as a Service provides you with the highest level of flexibility and management control over your IT resources and is most similar to existing IT resources that many IT departments and developers are familiar with today.
- Platform as a Service (PaaS): Platform as a Service is a paradigm for delivering operating systems and associated services over the Internet without downloads or installation. This service removes the need for organizations to manage the underlying infrastructure (usually hardware and operating systems) and allow you to focus on the deployment and management of your applications. This helps you be more efficient as you don’t need to worry about resource procurement, capacity planning, software maintenance, patching, or any of the other undifferentiated heavy lifting involved in running your application.
- Software as a Service (SaaS): Software as a Service provides you with a completed product that is run and managed by the service provider. With a SaaS offering you do not have to think about how the service is maintained or how the underlying infrastructure is managed; you only need to think about how you will use that particular piece software.

There have been arguments against the cloud computing model.
- Putting all your faith in the cloud means you're also putting all your faith in continued, unfettered access. If your network has issues then the whole setup fails.
- Ownership is a relevant factor to be concerned about. Who really owns the files you create on the cloud using a service?
- There's no central body governing use of the cloud for storage and services. The Institute of Electrical and Electronics Engineers (IEEE) is trying and It created an IEEE Cloud Computing Initiative in 2011 to establish standards for use, especially for the business sector.

Cloud computing market was already generating $100 billion a year in 2012. It could be $270 billion by the year 2020. Some of the major cloud services are Google Drive, Apple iCloud, Amazon Cloud Drive, Dropbox and Chromebook. Considering the growth seen in this area, it’s definitely worth reading about.

Sources: [rackspace](https://support.rackspace.com/white-paper/understanding-the-cloud-computing-stack-saas-paas-iaas/),
[pcmag](http://in.pcmag.com/networking-communications-software/38970/feature/what-is-cloud-computing), [amazon](https://aws.amazon.com/types-of-cloud-computing/)


#### Moore's Law

Moore’s Law was first proposed in a magazine article by Intel co-founder Gordon E. Moore. What it says is that the number of transistors that can be packed into a given unit of space will roughly double every two years. Which means that computing power tends to approximately double every two years. That prediction has remained impressively true for a long time. Gordon Moore's observation was not driven by any particular scientific or engineering necessity. It was a reflection on just how things happened to turn out. The silicon chip industry took note and started using it not merely as a descriptive, predictive observation, but as a prescriptive, positive law: a target that the entire industry should hit.

Moore’s Law has been reinvented several times over the past fifty years. Here are the prominent changes –
- **Moore’s Law 1.0 (~1980s)**: the focus was on scaling up the number of components on a single chip. One simple example can be found in the evolution of the microprocessor itself. In the early 1980s, the vast majority of CPUs could only perform integer math on-die. If you wanted to perform floating point calculations (meaning calculations done using a decimal point), you had to buy a standalone floating point unit with its own pinout and motherboard socket.
- **Moore’s Law 2.0 (~mid 1990s)**: the law was expanded to include the phenomenon known as Dennard scaling.. Dennard Scaling stated that as transistors became smaller, their power density remained constant — meaning that smaller transistors required less voltage and lower current. If Moore’s Law had stated we would be able to pack more transistors into the same area, Dennard Scaling ensured that those transistors would be cooler and draw less power.
- **Moore’s Law 3.0(~2005)**: the emphasis was on improving cost by driving down the expense of each additional transistor. Those transistors might not run more quickly than their predecessors, but they were often more power-efficient and less expensive to build. The law is now far more diverse and involves integrating functions and capabilities that haven’t historically been seen as part of CPU functions at all.

Moore’s Law 1.0 gave us the mainframe and the minicomputer. Moore’s Law 2.0’s emphasis on per-transistor performance and cost scaling ushered in the era of the microcomputer in both its desktop and laptop incarnations. Moore’s Law 3.0, with its focus on platform-level costs and total system integration has given us the smartphone, the tablet, and the nascent wearables industry. Twenty years ago, the pace of Moore’s Law stood for faster transistors and higher clock speeds. Now it serves as shorthand for better battery life, higher boost frequencies, quicker returns to idle, sharper screens, thinner form factors, and, yes — higher overall performance in some cases, albeit not as quickly as most of us would like.

Earlier this month, at the International Solid State Circuits Conference, Intel made headlines by declaring that future processors built on next-generation technologies like spintronics(reading the spin of electrons rather than their charge) or quantum wells ( electrons take on a quantum state causing them to only exist at discrete energy levels) would likely be slower than current hardware, not faster. Intel is hinting the death of Moore's Law.

Today, all consumer processors are made out of silicon — the second most abundant element in the Earth’s crust, after oxygen. But silicon is not a perfect conductor, and limits to the mobility of the electrons it carries impose a hard limit on how densely you can pack silicon transistors. Outside of research facilities, silicon transistors don’t currently get smaller than 14 nanometers(smaller is better) — and while some 10 nanometer chips designs might someday reach the market, it’s seen as a foregone conclusion that to keep to Moore’s Law over a long period of time, we’ll have to come up with newer and better materials to be the basis of next generation computers.

One oft-cited example is graphene, or the rolled up tubes of graphene called carbon nanotubes. Graphene is “atomically thin,” often called two-dimensional, and so it allows a huge increase on the physical side of things. On the other hand, graphene does not have a useful bandgap — the energy difference we need to navigate to bump electrons back and forth between the conducting and non-conducting bands. That’s how silicon transistors switch on and off, which is the entire basis for their method of computation. Quantum computing could be another answer, but research is still so preliminary that it’s doubtful. Some believe they’ll offer such a huge and immediate upgrade over modern processors that computer encryption will come tumbling down.

Rather than focus on the technology used in the chips, the new roadmap will take an approach it describes as "More than Moore." The growth of smartphones and Internet of Things, for example, means that a diverse array of sensors and low power processors are now of great importance to chip companies. The highly integrated chips used in these devices mean that it's desirable to build processors that aren't just logic and cache, but which also include RAM, power regulation, analog components for GPS, cellular, and Wi-Fi radios, or even microelectromechanical components such as gyroscopes and accelerometers.

Sources: [extremetech](http://www.extremetech.com/extreme/210872-extremetech-explains-what-is-moores-law), [agner](http://www.agner.org/optimize/blog/read.php?i=417), [arstechnica](http://arstechnica.com/information-technology/2016/02/moores-law-really-is-dead-this-time/)



#### DROWN Attack

DROWN stands for Decrypting RSA with Obsolete and Weakened eNcryption. It's a new vulnerability in OpenSSL that affects servers using SSLv2, was revealed this week as an attack that could decrypt your secure HTTPS communications, such as passwords or credit card numbers. More than 33 percent of servers are vulnerable — significantly less than Heartbleed, but still a surprisingly high number. DROWN is a serious vulnerability that affects HTTPS and other services that rely on SSL and TLS, some of the essential cryptographic protocols for Internet security. These protocols allow everyone on the Internet to browse the web, use email, shop online, and send instant messages without third-parties being able to read the communication.

Among those vulnerable at time of reveal were Yahoo, Alibaba, Weibo, BuzzFeed, Weather.com, Flickr and Samsung. The vulnerability was revealed as part of an OpenSSL update this week, so a patch is already available, but exploiting the attack is fairly trivial. In this case, DROWN allows attackers to decrypt HTTPS by sending specially crafted packets to a server or if the certificate is shared on another server, effectively performing a Man-in-the-Middle attack.

**A server is vulnerable to DROWN if:**
- It allows SSLv2 connections. This is surprisingly common, due to misconfiguration and inappropriate default settings. SSLv2 dates back to the 1990s and is frequently enabled by accident or automatically when setting up a new server, which is why DROWN is still a major issue.
- Its private key is used on any other server that allows SSLv2 connections, even for another protocol. Many companies reuse the same certificate and key on their web and email servers, for instance. In this case, if the email server supports SSLv2 and the web server does not, an attacker can take advantage of the email server to break TLS connections to the web server.

To defend against the attack, you should ensure SSLv2 is disabled, or make sure that the private key is not shared across any other servers. Those vulnerable don’t need to re-issue certificates, but should take action to prevent the attack immediately.
- OpenSSL: OpenSSL is a cryptographic library used in many server products. For users of OpenSSL, the easiest and recommended solution is to upgrade to a recent OpenSSL version.
- Microsoft IIS (Windows Server): IIS versions 7.0 and above should have SSLv2 disabled by default.
- Network Security Services (NSS): NSS is a common cryptographic library built into many server products. NSS versions 3.13 and above should have SSLv2 disabled by default.

Sources: [drownattack](https://drownattack.com/), [thenextweb](http://thenextweb.com/dd/2016/03/01/drown-attack-breaks-https-on-33-of-websites/)



#### Version Control Systems

A version control system (also known as a Revision Control System) is a repository of files, often the files for the source code of computer programs, with monitored access. Every change made to the source is tracked, along with who made the change, why they made it, and references to problems fixed, or enhancements introduced, by the change. Version control systems are essential for any form of distributed, collaborative development. Whether it is the history of a wiki page or large software development project, the ability to track each change as it was made, and to reverse changes when necessary can make all the difference between a well-managed and controlled process and an uncontrolled ‘first come, first served’ system. It can also serve as a mechanism for due diligence for software projects.

The below points will get you up to speed with all things VCS.

###### Characteristics of a good VCS
- Synchronization: Lets people share files and stay up-to-date with the latest version.
- Undo ( Short-term & Long-term ): Throw away your changes and go back to the “last known good” version.
- Track Changes: As files are updated, you can leave messages explaining why the change happened.
- Track Ownership: A VCS tags every change with the name of the person who made it.
- Sandboxing: You can make temporary changes in an isolated area, test and work out the kinks before “checking in” your changes.
- Branching and merging: You can branch a copy of your code into a separate instance and modify it in isolation (tracking changes separately). Later, you can merge your work back into the common area.

###### Types of VCS
- Centralized: Systems are designed with the intent that there is One True Source that is Blessed, and therefore Good. All developers work (checkout) from that source, and then add (commit) their changes, which then become similarly Blessed.
- Distributed: Systems are designed with the intent that one repository is as good as any other, and that merges from one repository to another are just another form of communication. Any semantic value as to which repository should be trusted is imposed from the outside by process, not by the software itself.

###### Basic Terminology
- Repository(repo): It's a container for our project code.
- Working Copy: The local directory of files where we make changes.
- Trunk/Main/Master: The main line of code in a repo.
- Revision: What version a file is on (v1, v2, v3, etc.)
- Check out: Downloading file(s) from the repo
- Check-in/Commit: Uploading file to repo.
- Changelog: List of changes made to a file since it was created.
- Update/Sync: Synchronize your files with the latest from the repository. This lets you grab the latest revisions of all files.
- Revert: Throw away your local changes and reload the latest version from the repository.
- Branch: Create a copy of the code for private use (bug fixing, testing, etc). Branch is both a verb (“branch the code”) and a noun (“Which branch is it in?”).
- Diff/Change/Delta: Finding the differences between two files. Useful for seeing what changed between revisions.
- Merge/Patch: Apply the changes from one file to another, to bring it up-to-date.
- Conflict: When pending changes to a file contradict each other (both changes cannot be applied).
- Resolve: Fixing the changes that contradict each other and checking in the correct version.
- Locking: Taking control of a file so nobody else can edit it until you unlock it. Some version control systems use this to avoid conflicts.

###### Popular version control systems
- CVS: The grandfather of revision control systems. It came out in 1986 and is considered as the defacto standard. It's not as feature rich as modern systems.
- SVN: The version control system with the widest adoption. It is distributed as free software under the Apache License and is known for its ease of setup and administration.
- Git: Originally created by Linus Torvalds to manage the source code for the Linux Kernel project. It is free software distributed under GNU General Public License. It is the most widely used distributed version control system and is known to be a fast and efficient system.
- Mercurial: Similar to Git but much simpler. It was designed for large projects and is superbly fast given that the creators made the software with performance as its number one feature.

Sources: [codenewbie](http://www.codenewbie.org/blogs/what-is-source-control), [betterexplained](http://betterexplained.com/articles/a-visual-guide-to-version-control/), [sitepoint](http://www.sitepoint.com/version-control-software-2014-what-options/)



#### Random Maze Generator

What’s more interesting that a puzzle? An algorithm that generates puzzles!
My algorithm generates mazes, which are um, sort of like puzzles. View it here: [codepen](http://codepen.io/kailash-sankar/full/pgqLOr/)

**How it works:**
1. Start at a random cell
2. Check the neighboring cells to see if we have unvisited neighbors
3. Remove the wall to a neighbor, jump to it and mark the cell.
4. Repeat 2-3 until we remove the ideal no of walls(rows * column -1) or have visited all the neighboring cells.
5. Whenever all neighbors of the current cell are visited, we go back to the previous cell and try again. ( The power of Recursion)

The algorithm employs depth first approach using a recursive function. It’s called a depth first approach because we move to the next cell and repeat the process instead of staying in a cell and visiting all its neighbors.

The maze is drawn on the web page using HTML canvas. HTML canvas for web is like paint for windows. JavaScript commands are used to draw, color and crop on the canvas. The code accepts grid parameters, you can create a maze of your specifications - width, height and cell size (width and height should be a multiple of cell size). The code doesn’t add a start and end point to the maze right now, because of all the randomizations set in.

The script is small and it runs so fast that the maze gets generated the moment you click but to understand the generation process and to make it visually appealing I have introduced delays between each action on the canvas.
The codebase is 92% JavaScript, 3% HTML, 4% CSS and 1% fairy dust. The js code is neatly packed in to an object oriented plugin, aptly name aMazing.js.

Studies have proven that solving puzzles can give your brain a good workout.

Sources: [psychologytoday](https://www.psychologytoday.com/blog/brain-workout/200904/puzzles-and-the-brain)



#### Bitcoin: World’s Greatest Cryptocurrency (Part 1)

Bitcoin is a form of digital currency, It is created and held electronically. Bitcoins aren’t printed, like dollars or euros – they’re produced by people, and increasingly businesses, running computers all around the world, using software that solves mathematical problems. It is the most popular among a growing category of money known as cryptocurrency. A software developer called Satoshi Nakamoto proposed bitcoin, which was an electronic payment system based on mathematical proof. The idea was to produce a currency independent of any central authority, transferable electronically, more or less instantly, with very low transaction fees. One bitcoin is currently worth 420 US dollars. You can read the full paper here: https://bitcoin.org/bitcoin.pdf

###### Characteristics
- Decentralized: Bitcoin’s most important characteristic, and the thing that makes it different to conventional money, is that it is decentralized. No single institution controls the bitcoin network.
- Mined: Bitcoin is created digitally, by a community of people that anyone can join.
- Ease of setup: You can set up a bitcoin address in seconds, no questions asked, and with no fees payable.
- Anonymity: Users can hold multiple bitcoin addresses, and they aren’t linked to names, addresses, or other personally identifying information.
- Transparency: Bitcoin stores details of every single transaction that ever happened in the network in a huge version of a general ledger, called the blockchain (covered on KS#3). If you have a publicly used bitcoin address, anyone can tell how many bitcoins are stored at that address. They just don’t know that it’s yours.

###### How it works
**Wallet:** When you install a bitcoin wallet on your phone or computer, it will generate your first bitcoin address. This address will be used for transactions and payments.

**Blockchain:** All confirmed transactions are included in the block chain. This way, Bitcoin wallets can calculate their spendable balance and new transactions can be verified to be spending bitcoins that are actually owned by the spender. The integrity and the chronological order of the block chain are enforced with cryptography.

**Transactions:** A transaction is a transfer of value between Bitcoin wallets that gets included in the block chain. Bitcoin wallets keep a secret piece of data called a private key or seed, which is used to sign transactions, providing a mathematical proof that they have come from the owner of the wallet. The signature also prevents the transaction from being altered by anybody once it has been issued. When your bitcoins are sent, there’s no getting them back, unless the recipient returns them to you.

**Mining (the core concept):** People are sending bitcoins to each other over the bitcoin network all the time. The bitcoin network collects all of the transactions made during a set period into a list, called a block. It’s the miners’ job to confirm those transactions, and write them into a general ledger (blockchain). Whenever a new block of transactions is created, it is added to the blockchain, creating an increasingly lengthy list of all the transactions that ever took place on the bitcoin network. A constantly updated copy of the block is given to everyone who participates, so that they know what is going on.

When a block of transactions is created, miners put it through a process. They take the information in the block, and apply a mathematical formula to it, turning it into something else. That something else is a far shorter, seemingly random sequence of letters and numbers known as a hash. This hash is stored along with the block, at the end of the blockchain at that point in time. Hashes are irreversible. While it is very easy to produce a hash from a large amount of data, each hash is unique. If you change just one character in a bitcoin block, its hash will change completely.

Miners don’t just use the transactions in a block to generate a hash. Some other pieces of data are used too. One of these pieces of data is the hash of the last block stored in the blockchain. Because each block’s hash is produced using the hash of the block before it, it becomes a digital version of a wax seal. It confirms that this block – and every block after it – is legitimate, because if you tampered with it, everyone would know. The miners compete with each other to seal off a block, using software written specifically to mine blocks. Every time someone successfully creates a hash, they get a reward of 25 bitcoins, the blockchain is updated, and everyone on the network hears about it. That’s the incentive to keep mining, and keep the transactions working.

The problem is that it’s very easy to produce a hash from a collection of data. Computers are really good at this. The bitcoin network has to make it more difficult, otherwise everyone would be hashing hundreds of transaction blocks each second, and all of the bitcoins would be mined in minutes. The bitcoin protocol deliberately makes it more difficult, by introducing something called ‘proof of work’. The bitcoin protocol demands that a block’s hash has to look a certain way; for example it must have a certain number of zeroes at the start. There’s no way of telling what a hash is going to look like before you produce it, and as soon as you include a new piece of data in the mix, the hash will be totally different. To change the hash, miners add a random piece of data called a 'nonce'. If the hash doesn’t fit the required format, the nonce is changed, and the whole thing is hashed again. It can take many attempts to find a nonce that works, and all the miners in the network are trying to do it at the same time. That’s how miners earn their bitcoins.

The bitcoin protocol says that only 21 million bitcoins can ever be created by miners. However, these coins can be divided into smaller parts (the smallest divisible amount is one hundred millionth of a bitcoin and is called a ‘Satoshi’, after the founder of bitcoin).

**Security:** A person who takes reasonable precautions will be safe from having their personal cache stolen by hackers. Your bitcoin wallet can be stored online (i.e. a cloud service) or offline (a hard drive or USB stick). The offline method is more hacker-resistant, and absolutely recommended for anyone who owns more than 1 or 2 bitcoins.

Although Bitcoin is now five years into existence, countries still do not have explicit systems that restrict, regulate, or ban the cryptocurrency. The decentralized and anonymous nature of bitcoin has challenged many governments on how to allow legal use while preventing criminal transactions. Overall, bitcoin remains in a grey area as the technological leap has left lawmakers far behind. More on part 2.

Sources: [netforbeginners](http://netforbeginners.about.com/od/b/fl/What-Are-Bitcoins-How-Do-Bitcoins-Work.htm), [coindesk](http://www.coindesk.com/information/what-is-bitcoin/), [forbes](http://www.forbes.com/sites/investopedia/2013/08/01/how-bitcoin-works/#11145f4525ee)



#### AI Art

Last week Google’s research and virtual reality divisions hosted the first ever art exhibition produced by neural nets — the in-vogue artificial intelligence tool that roughly mimics the human brain. The artworks were auctioned off to benefit the Gray Area Foundation for the Arts. The priciest of the 29 artworks showcased went for as much as $8,000.

The artworks in this exhibition are made using artificial neural networks (NN). NNs are a biologically inspired form of computing which, unlike classical computer algorithms, aren’t programmed directly by human operators but instead learn from large amount of example data. The networks used in this work are trained with natural images from the environment and learn to distinguish objects and parse them into high level features. Their usual application is that of image classification or object recognition.

Once trained, these networks can then also be used to generate new imagery, essentially “imagining” images based on the learned rules and associations. DeepDream is one technique for generating new images using a trained artificial neural network. The process works as follows: An initial picture or simply random noise is shown to the network which will then visually parse and interpret it. The system then calculates how to change the picture incrementally in order to enhance that initial interpretation. The process is repeated until an image appears. Samples

The complexity of the interpretation that the neural network obtains varies based on the position of the layer. Neurons that are closer to the input image will respond to simple features while neurons deep in the network will respond to more complex ones. Thus depending on the depth of the neural network layer that’s targeted, different forms and features are obtained often leading to interesting new recombination’s of knowledge elements the network has learned. Many different forms are possible from simple geometric patterns to psychedelic looking combinations of entire concepts.

But there are other ways that Google machines are starting to learn more like humans: Google’s DeepMind recently learned how to think like a world-class Go player, and last week the group announced DeepMind Health, which will work on learning how to diagnose like a doctor, work that’s bringing the “Google brain” just a little closer to lifelike.

P.S. You can no longer say that Art is what makes us Human.

Sources: [googleresearch](http://googleresearch.blogspot.com/2015/06/inceptionism-going-deeper-into-neural.html), [recode](http://recode.net/2016/02/27/googles-tripply-ai-neural-nets-put-on-an-art-show/), [fastcodesign](http://www.fastcodesign.com/3057368/inside-googles-first-deepdream-art-show/1)
