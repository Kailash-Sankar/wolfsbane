
{{{
  "title": "Knowledge Stream #3",
  "tags": ["Tech","Security","Crypto"],
  "category": "Knowledge Streams",
  "date": "15  Jan 2016",
  "preview": "This knowledge stream looks at big data, botnets, blockchain, AI, 8 Queens, HaLoW and pomodoro."
}}}


###### Big Data

The data volumes are exploding, more data has been created in the past two years than in the entire previous history of the human race. By the year 2020, about 1.7 megabytes of new information will be created every second for every human being on the planet. These stats are a sign that it is time for us to understand what big data is.

Big data is data that exceeds the processing capacity of conventional database systems. The data is too big, moves too fast, or doesn’t fit the strictures of your database architectures. To gain value from this data, you must choose an alternative way to process it. Challenges include analysis, capture, data curation, search, sharing, storage, transfer, visualization, querying and information privacy. The term ‘Big data’ often refers simply to the use of predictive analytics or certain other advanced methods to extract value from data, and seldom to a particular size of data set. Accuracy in big data may lead to more confident decision making, and better decisions can result in greater operational efficiency, cost reduction and reduced risk.

Being able to process every item of data in reasonable time removes the troublesome need for sampling and promotes an investigative approach to data, in contrast to the somewhat static nature of running predetermined reports. For example, by combining a large number of signals from a user’s actions and those of their friends, Facebook has been able to craft a highly personalized user experience and create a new kind of advertising business.

Big data is best described by the following three characteristics:
- Volume: The quantity of generated and stored data.

The size of the data determines the value and potential insight- and whether it can actually be considered big data or not. Having more data is better as it makes our predictions more accurate. If the volumes of data are larger than those conventional relational database infrastructures can cope with, processing options break down broadly into a choice between massively parallel processing architectures - data warehouses or databases such as Greenplum — and Apache Hadoop-based solutions.

- Variety: The type and nature of the data.

This helps people who analyze it to effectively use the resulting insight. A common theme in big data systems is that the source data is diverse, and doesn’t fall into neat relational structures. It could be text from social networks, image data, a raw feed directly from a sensor source. The process of moving from source data to processed application data involves the loss of information. When you tidy up, you end up throwing stuff away. This underlines a principle of big data: when you can, keep everything.

A disadvantage of the relational database is the static nature of its schema. In an agile, exploratory environment, the results of computations will evolve with the detection and extraction of more signals. Semi-structured NoSQL databases meet this need for flexibility: they provide enough structure to organize data, but do not require the exact schema of the data before storing it.

- Velocity: In this context, the speed at which the data is generated and processed to meet the demands and challenges that lie in the path of growth and development.

The importance lies in the speed of the feedback loop, taking data from input through to decision. The tighter the feedback loop, the greater the competitive advantage. Streaming processing is a favored approach here. When the input data are too fast to store in their entirety: in order to keep storage requirements practical some level of analysis must occur as the data streams in. Thanks to the rise of mobile applications and online gaming, immediate response is expected from the input data which can be achieved through streaming.

It’s this need for speed, particularly on the web, that has driven the development of key-value stores and columnar databases, optimized for the fast retrieval of precomputed information. These databases form part of an umbrella category known as NoSQL, used when relational models aren’t the right fit.

In November 2015, market research firm IDC said the market for big data-related infrastructure, software and services will grow at a compound annual growth rate of 23.1 percent through 2019, with spending reaching US$48.6 billion in 2019

Here are some of the coolest big data products that came out in 2015:
- Apache Spark is a powerful in-memory, data processing engine which turbo-charges big data systems like Hadoop and enables real-time business analytical applications using streaming data that weren't possible before. And it's open source.
- MongoDB 3.2 is a next-generation NoSQL databases capable of handling huge volumes of data. With the 3.2 edition, just unveiled last month, MongoDB took a major step forward in positioning itself for enterprise-class applications. The release incorporates a data storage engine that encrypts data both "in flight" and "at rest" for security – a necessity in some markets such as financial services, health care, retail and government.
- Snowflake Elastic Data Warehouse is a SQL-based data warehouse delivered as software-as-a-service in the Amazon Web Services cloud. The service offers native support for a diverse range of data types and works with structured and semi-structured data, the latter including increasingly analyzed machine data. It also boasts enterprise-class high-availability, disaster recovery and security.


Sources: [oreilly](https://www.oreilly.com/ideas/what-is-big-data_), [informationweek](http://www.informationweek.com/big-data/big-data-analytics/big-data-predictions-for-2016/d/d-id/1323671?image_number=2), [medium](https://medium.com/future-crunch/big-data-separating-hype-from-reality-ee6285f8e1d4#.kgfouad6w)


###### Botnets

A "bot" is a type of malware that allows an attacker to take control over an affected computer. A botnet is an army of such computers, all infected with the same malware, that gives a bot herder remote control of these computers in order to surreptitiously commandeer them without their owners’ knowledge. The bot herder can send instructions to the network of computers from a command-and-control server to siphon credit card numbers and banking credentials from them or use them to launch DDoS attacks against web sites, deliver spam and other malware to victims, or conduct advertising click fraud.

For a botnet to form and grow, it must accumulate drones, and each drone must be individually exploited, infected, and assimilated into the botnet. For this reason, most bot software contains spreaders that automate the task of scanning ip addresses for vulnerable software holes. Once found, the open machines are attacked and infected with the bot software, and the pattern continues. With each newly compromised drone, the botnet gains more power to infect more.

Traditionally, botnets have been controlled using Internet Relay Chat (IRC). IRC is a ubiquitous communications standard on the internet, and is thus easy to modify for any purpose. Bot software is designed to connect the infected host to an IRC server and accept commands from a control channel.
Also a significant number of botnets makes use of HTTP to implement the command and control since HTTP is usually not blocked by firewalls.

The security industry estimates that botnets, over time, have resulted in more than $110 billion in losses to victims globally. An estimated 500 million computers fall prey to botnet attackers annually, which comes down to about 18 victims infected per second.

Here are some of the most *famous botnets* :

**Coreflood** was a popular botnet that held strong for nearly a decade before law enforcement crippled it in 2011. One Coreflood control server seized by authorities commandeered more than 2 million infected machines and in a single year amassed more than 190 gigabytes of data from victim computers. The botnet allowed criminals to loot millions from victims, including $115,000 from the account of a real estate company in Michigan and $78,000 from a South Carolina law firm.

The **Bredolab** botnet has hijacked more than 30 million machines and was developed to siphon bank account passwords and other confidential information from infected computers. But authorities say the commanders also earned about $125,000 a month from renting out access to compromised computers in his botnet to other criminals, who used the botnet to spread malware, distribute spam, and conduct DDoS attacks.

The **SpyEye** and **Zeus** botnets both steal banking credentials from victims and automate the process of siphoning money from accounts. The author or authors behind the Zeus botnet sold it to various criminal gangs who infected more than 13 million machines with it from 2008 on, and used it to steal more than $100 million.

The **Conficker** worm botnet infected an estimated 12 million machines beginning in 2008, and it’s still infecting machines today. The worm uses a sophisticated method that was somewhat novel at the time, dynamic DNS to prevent its command structure from being taken down.

Despite the handful of successful operations that have taken down botnets over the years, there’s no sign of an end to this threat. In the few minutes it took you to read this article, more than 3,000 new machines joined the botnet army.

**To protect yourself:**
- Keep your OS and anti-virus software up to date.
- Install top-rated security software such as Norton AntiBot.
- Never click on attachments/suspicious links unless you can verify the source.

Sources: [wired](http://www.wired.com/2015/12/hacker-lexicon-botnets-the-zombie-computer-armies-that-earn-hackers-millions/), [kaspersky](https://blog.kaspersky.com/botnet/1742/), [norton](http://in.norton.com/botnet), [shadowserver](https://www.shadowserver.org/wiki/pmwiki.php/Information/Botnets)


###### Blockchain

A blockchain is a carefully cryptographically protected, publicly hosted ledger, a record of events and agreed-upon variables. You can essentially think of it like a super-advanced, cloud-based spreadsheet, with the real defining feature being not what services it can perform, but in how much users can trust it to perform those services impartially. The most famous implementation of blockchain is the bitcoin blockchain which contains certain and verifiable record of every single bitcoin transaction ever made. It allows total strangers to hold and exchange digital money in a completely transparent way — without having to trust each other or any central authority.

Today, every interaction you have online relies on a central trusted authority. No matter what you do online, you’re trusting someone to tell you the truth — whether it’s your bank giving you your statement balance or your email service provider telling you your message was delivered. We are trusting sources that can be hacked, manipulated or compromised.
The blockchain could change all of that. It sounds incredible, but by enabling this distributed consensus, it can actually create a true record of events, past and present, in the digital world. Crucially, it does this without compromising privacy. You can record the fact that the event happened, and even that it happened correctly, without exposing confidential details about the subject matter or the parties involved.

With the blockchain in place to act as that authority, we can do things like circulate currency securely on our own without paying a percentage of every transfer to a specialized third party like a bank. And when used to receive and enforce an agreed-upon set of rules, without the possibility of tampering or reneging, blockchain tech allows the creation of so-called “smart contracts.” These could let you buy a home directly from another person, safely and securely, or even plan and schedule a mortgage.

The Linux Foundation has announced a new open source initiative that will direct a powerful group of industry leaders in developing and supporting an open source standard for blockchain technology. Dubbed the Open Ledger Initiative (OLI), the just-revealed group already counts tech giants like IBM, Intel, Mitsubishi, and Cisco among its members, along with financial institutions like J.P. Morgan, Wells Fargo, and the London Stock Exchange.

Currently, a consortium of more than 25 banks, led by fintech (financial technology) company R3, is developing a framework for applying blockchain technology to markets. Santander, the world's tenth biggest bank according to Forbes, is one of several lenders investigating how to use the blockchain in traditional banking. UBS has set up a blockchain research lab in London, Goldman Sachs has invested in bitcoin startup Circle and Nasdaq is also experimenting with the technology. In fact last month the Nasdaq stock exchange used blockchain to transfer shares for the first time in what the US firm said was “a seminal moment” in the nascent technology. The country of Estonia, which secures much of its banking infrastructure with a blockchain, boasts the lowest rate of credit card fraud in the euro zone.

According to Santander, the blockchain tech could reduce the bank’s infrastructure costs by a significant amount( $20billion a year). The huge size of the ledger and the processing required to maintain it will be a concern when implementing the blockchain on a global scale.

If the blockchain lives up to its potential, it could introduce a level of democracy and objective “truth” to the digital world that even the physical world can’t match. Its promise involves a future in which no one has absolute power online, and no one can lie about past or current events.

Sources: [extreme](http://www.extremetech.com/extreme/219651-what-is-blockchain-and-can-ibm-intel-and-big-banks-use-it-to-remake-the-internet), [benbyford](http://benbyford.com/articles/problems-on-the-blockchain/), [cnbc](http://www.cnbc.com/2015/12/31/blockchain-what-the-big-banks-say-about-the-tech.html), [recode](http://recode.net/2015/07/05/forget-bitcoin-what-is-the-blockchain-and-why-should-you-care/)


###### OpenAI

Research in the artificial intelligence field has come a long way in recent years. We've progressed beyond predictive analytics towards deep learning, such as those used in IBM's Watson supercomputer, which promotes the use of architectures that allow a machine to generate its own algorithms based on data rather than developers inputting single algorithms and instructions for certain problems.

OpenAI is a non-profit artificial intelligence research company whose goal is to advance digital intelligence in the way that is most likely to benefit humanity as a whole, unconstrained by a need to generate financial return. Funding comes from a group of tech luminaries including Elon Musk, Reid Hoffman, Peter Thiel, Jessica Livingston and Amazon Web Services. They have collectively pledged more than a billion dollars to be paid over a long time period.

Essentially, OpenAI is a research lab meant to counteract large corporations who may gain too much power by owning super-intelligence systems devoted to profits, as well as governments which may use AI to gain power and even oppress their citizenry. "Because of AI's surprising history, it's hard to predict when human-level AI might come within reach," OpenAI says. "When it does, it'll be important to have a leading research institution which can prioritize a good outcome for all over its own self-interest."

Sources: [OpenAI](https://openai.com/blog/introducing-openai/), [medium](https://medium.com/backchannel/how-elon-musk-and-y-combinator-plan-to-stop-computers-from-taking-over-17e0e27dd02a#.vm96s2jpq), [huffingtonpost](http://www.huffingtonpost.com/babak-hodjat/artificial-intelligence-w_1_b_8894418.html?ir=India&adsSiteOverride=in)


###### Self-Optimizing Code

Software rot, also known as code rot describes the perceived "rot" which is either a slow deterioration of software performance over time or its diminishing responsiveness that will eventually lead to software becoming faulty, unusable, or otherwise called "legacy" and in need of upgrade. This is not a physical phenomenon: the software does not actually decay, but rather suffers from a lack of being responsive and updated with respect to the changing environment in which it resides.

Code rot is why programs seem to run worse and worse over time — because, in reality, they do.

Now, Adobe and MIT are teaming up to try to address the problem of code rot, and remove from the life of the coder the arduous and time-consuming task of manually updating old code for new technological capabilities. The project is called Helium, and its goal is to build software solutions capable of taking old code and optimizing it for new CPU task-sharing technology, newly efficient GPU architecture, new hardware-level security features, and more. It could save coders months of hard work on just a single project and, more importantly, it could save software users quite a bit of time, money, and frustration.

So far, Helium has produced a single proof of concept study that centers on Photoshop image filters. Basically, they looked at all the commands that were coming out of Photoshop to the CPU when applying a certain filter, and compared this to the actual on-screen changes that result from these commands. The comparison can provide a software “auto-tuner” with the information necessary to see which commands are superfluous, and which could be made quicker by making use of new hardware capabilities.

Sources: [extremetech](http://www.extremetech.com/computing/220017-mit-adobe-aim-to-end-code-rot-by-letting-software-edit-software), [csail](http://projects.csail.mit.edu/helium/#publications)


###### Problem Solving: 8 Queens

Using a regular chess board, the challenge is to place eight queens on the board such that no queen is attacking any of the others. For those not familiar with chess pieces, the queen is able to attack any square on the same row, any square on the same column, and also any square on either of the diagonals. The eight queens puzzle is an example of the more general n-queens problem of placing n queens on an n×n chessboard.

You can try to solve the problem in your browser using this link:
http://www.datagenetics.com/blog/august42012/

My Perl solution( uses a hash instead of standard solutions which use array, to solve for n * n board):
https://gist.github.com/Kailash-Sankar/81abcaea54a09b0060d0

Solutions in many(~77) languages including an optimized Perl solution:
http://rosettacode.org/wiki/N-queens_problem#Perl


###### General Tech: HaLow

The Wi-Fi Alliance has announced a new low power, long range Wi-Fi standard called 'HaLow' that is designed for smart home applications, connected cars, health care, and industrial and smart city environments.

- Wi-Fi HaLow extends Wi-Fi into the 900 MHz band, enabling the low power connectivity necessary for applications including sensor and wearables.
- While your home Wi-Fi network equipment can transmit up to 100 meters under ideal conditions, HaLow can transmit at reasonable rates up to 1 kilometer (a little less than two-thirds of a mile).
- Another characteristic of the 900MHz band HaLow is that it has better propagation (the ability to transmit in the presence of various kinds of interference) and penetration (the ability to go through walls and other obstructions).
- HaLow has the ability to transmit a minimum 150Kbps transmission over 1 or 2MHz channels. This kind of short, bursty data means that the sensors of IoT devices only need to be on for a short time, thus conserving power and allowing for longer battery life.
- HaLow speeds will be in the low tens of megabits per second rather than in the hundreds of megabits.

This combination of greater range, propagation, and penetration means that those Wi-Fi dead spots in your home or office that currently requires the installation of a wireless extender will be reachable by a single HaLow access point — critical if you plan to have IoT devices all around and in your home or business.

It will take until 2018 for the Wi-Fi Alliance to begin certifying HaLow products, after which the tech needs to make its way into your router, then into your wearable. That’s all going to take a significant amount of time, during which Bluetooth will also continue to iterate and improve.

Sources: [wired](http://www.wired.com/2016/01/wifi-halow-internet-of-things/), [wi-fi](https://www.wi-fi.org/news-events/newsroom/wi-fi-alliance-introduces-low-power-long-range-wi-fi-halow), [mwrf](http://mwrf.com/active-components/what-s-difference-between-ieee-80211af-and-80211ah)


###### Personal Development: Pomodoro Technique ( Agile sprints for life)

The Pomodoro Technique was invented in the early 90s by developer, entrepreneur, and author Francesco Cirillo. The methodology is simple: When faced with any large task or series of tasks, break the work down into short, timed intervals (called "Pomodoros") that are spaced out by short breaks. This trains your brain to focus for short periods and helps you stay on top of deadlines or constantly-refilling inboxes.

Interested? Get started with these five steps:
1. Choose a task to be accomplished.
2. Set the Pomodoro to 25 minutes (the Pomodoro is the timer)
3. Work on the task until the Pomodoro rings, then put a check on your sheet of paper (or a to-do list app)
4. Take a short break (5 minutes)
5. Every 4 Pomodoros take a longer break (15-30 minutes)

One Pomodoro i.e. 25 minutes of work sounds easy but keep in mind that there should be no distractions - twitter, Facebook, WhatsApp...etc.
Pomodoro is an indivisible unit of work, that means if you're distracted part-way by a coworker, meeting, or an emergency, you either have to end the pomodoro there (saving your work and starting a new one later), or you have to postpone the distraction until the pomodoro is complete.
You can set the timer on your phone or use a utility app which has preconfigured settings for pomodoro like the web app http://www.marinaratimer.com/

**Pomodoro is effective because it helps you:**
- Work with time, not against it
- Eliminate burnout
- Manage distractions
- Create a better work/life balance

The Pomodoro Technique is often championed by developers, designers, and other people who have to turn out regular packages of creative work.
If you couldn’t finish a task within 25 minutes, pause the timer get it done and then take a break before starting the next task. The goal is not to get things done in 25 minutes, it's to bring focus to what you are doing while ensuring you get enough breaks to avoid burnout.

I recommend reading through the first source link to get better insight, on the technique and the changes it will bring to your life.

Sources: [medium](https://medium.com/life-learning/how-to-work-40-hours-in-16-7-the-simple-technique-that-gave-me-my-life-back-8f98ec011862#.j8iii7o8e), [pomodorotechnique](http://pomodorotechnique.com/), [lifehacker](http://lifehacker.com/productivity-101-a-primer-to-the-pomodoro-technique-1598992730)
