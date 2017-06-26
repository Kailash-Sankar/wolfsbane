
{{{
  "title": "Knowledge Stream #8",
  "tags": ["UI","Security","Science"],
  "category": "Knowledge Streams",
  "date": "15 June 2016",
  "preview": "This knowledge stream looks at Tor, SQL Injection, haml, sass, quantum entanglement and bots."
}}}

#### Tor Network

Tor is short for The Onion Router and was initially a worldwide network of servers developed with the U.S. Navy that enabled people to browse the internet anonymously. Now, it's a non-profit organization whose main purpose is the research and development of online privacy tools. The concept of Onion Routing was first proposed in 1995, where it was first funded by the Office of Naval Research (ONR) and later helped out by DARPA in 1997. Tor was open sourced in October 2003. This idea of Onion Routing was simply that we can wrap traffic in encrypted layers (like onions) in order to protect the contents of the data as well as the anonymity of the sender and receiver.

**Relays**

Tor works by bouncing connections from your computer to destinations through a series of intermediate computers, or relays. These relays are located all across the world and run completely by volunteers willing to give up some bandwidth for the cause. Relays don’t have special hardware or software to run, they just have the Tor software configured to act as a relay.

**Types of Relays**

Entry/Guard Relay - This is the entry point to the Tor network. Relays are selected to serve as guard relays after being around for a while, as well as having shown to be stable and having high bandwidth.
Middle Relay - Middle relays are middle nodes used to transport traffic from the guard relay to the exit relay. This prevents the guard and exit relay from knowing each other.
Exit Relay - These relays are the exit point at the edge of the Tor network. These relays send traffic to the final destination intended by the client. Exit relays send traffic directly to the end destination, any illicit activity done through Tor appears to come from the exit relay.

**Onion Encryption**

Layer 1: The client encrypts the original data in such a way that only the exit relay can decrypt it.

Layer 2: This encrypted data is then encrypted again in such a way that only the middle relay can decrypt it.

Layer 3:  Finally, this encrypted data is encrypted once more in such a way that only the guard relay can decrypt it.

By doing this, each relay only has the information it needs to know - where it got the encrypted data from, and where to send it to next. Encrypting data this way is beneficial to both parties: client traffic isn’t compromised and relays can’t be held liable for data they can’t see.

**Bridges**

A Tor client needs a way to fetch a list of all the entry, middle, and exit relays available. But if the entry list is publically available to everyone, a particular network operator can block all the entry points and block user from using tor. Bridges are a clever solution to this problem. At their core, bridges are just unpublished entry relays. Users that are behind censored networks can use bridges as a way to access the Tor network.

Users to receive a small list of bridges so that they can connect to the rest of the Tor network. This project, called BridgeDB gives users the information about a few bridges at a time. This makes sense, since a few bridges should be all any user needs. It is difficult to find all the possible bridges and block them.

**Directory Authorities**

Hardcoded into each Tor client is the information about 10 Tor nodes run by trusted volunteers. These nodes maintain the status of the entire Tor network and are known as directory authorities (DA’s). Distributed around the world, DA’s are in charge of distributing an ever-updated master list of all known Tor relays. They choose what relays are valid, and when. Nine of the DA’s maintain the master list of relays, while one DA maintains the list of bridges.

**Consensus**

The status of all the Tor relays is maintained in a living document called the consensus. DA’s maintain this document and update it every hour by a vote. The consensus is a powerful document. By having trusted authorities keeping a master list of relays and their capabilities, it is easy for new and existing clients to keep track of the addition and removal of Tor relays.

**Tor browser**

To access this network, you just need to download the Tor browser(a modified version of Firefox). Everything you do in the browser goes through the Tor network and doesn't need any setup or configuration from you. Tor is useful for anyone who wants to keep their internet activities out of the hands of advertisers, ISPs, and web sites. That includes people getting around censorship restrictions in their country, police officers looking to hide their IP address, or anyone else who doesn't want their browsing habits linked to them.

**Deep and Dark web**

Tor's technology isn't just about browsing anonymously. It can also host web sites through its hidden services that are only accessible by other Tor users. Referred to as the Deep Web, Tor contains a massive portion of the Web that is not indexed by search engines. Tor allows web pages, like clients, to protect their anonymity, by configuring a server to connect with clients at a Tor relay in between. The server does not need to provide the IP address, and the user does not need it, instead using an “onion address,” a 16 character code that clients enter in place of a traditional URL.

The hidden pages on the Tor network comprise one of the most famous darknets, networks only accessible through specific protocols. Some of the most notable hidden sites are used for trafficking illegal goods, such as the Silk Road, a popular site for selling drugs which was shut down by the FBI in 2013.

**Users base**

Tor has become popular with journalists and activists in countries with restrictions on the Internet and expression. Countries like China are known for censoring their citizens’ access to the Web; Tor provides a way around this control. For whistleblowers, Tor provides a safe avenue to leak information to journalists. In fact, Edward Snowden released information on the NSA’s PRISM program to news organizations via Tor. One doesn’t need to be a freedom fighter to appreciate Tor, however. Many academics and ordinary citizens endorse Tor as a tool to keep privacy and freedom of expression alive in the Information Age.

**Vulnerability**

It's hard to hack into the Tor network, but the browser is a vulnerability.
- A "man in the middle" style attack is possible on Tor by injecting malware in the browser with help of internet service providers.
- Tor is also vulnerable to timing attacks, but to carry out such an attack, the attacker  needs to know your entry node and exit node. For this attack, the amount of invested resources is high and the results are comparatively low.
Attacks against Tor are an active area of academic research which is welcomed by the Tor Project itself

Sources: [jordan-wright](http://jordan-wright.com/blog/tags/tor/), [digitaltrends](http://www.digitaltrends.com/computing/a-beginners-guide-to-tor-how-to-navigate-through-the-underground-internet/), [lifehacker](http://lifehacker.com/what-is-tor-and-should-i-use-it-1527891029)


#### Injection Attacks(1 of 10 OWASP)
The OWASP Top 10 represents a broad consensus on the most critical web application security flaws. The errors on this list occur frequently in web applications, are often easy to find, and easy to exploit.

Injection flaws allow attackers to relay malicious code through a web application to another system. These attacks include calls to the operating system via system calls, the use of external programs via shell commands, as well as calls to backend databases via SQL. Whole scripts written in perl, python, and other languages can be injected into poorly designed web applications and executed. Any time a web application uses an interpreter of any type there is a danger of an injection attack

Most common is SQL injection, a type of web application security vulnerability in which an attacker is able to submit a database SQL command that is executed by a web application, exposing the back-end database. A SQL injection attack can occur when a web application utilizes user-supplied data without proper validation or encoding as part of a command or query. SQL injection allows an attacker to create, read, update, alter or delete data stored in the back-end database. In its most common form, a SQL injection attack gives access to sensitive information such as social security numbers, credit card numbers or other financial data.

SQL injection is a particularly widespread and dangerous form of attack and is listed in OWASP Top 10. To exploit a SQL injection flaw, the attacker must find a parameter that the web application passes through to a database. By carefully embedding malicious SQL commands into the content of the parameter, the attacker can trick the web application into forwarding a malicious query to the database. These attacks are not difficult to attempt and more tools are emerging that scan for these flaws. The consequences are particularly damaging, as an attacker can obtain, corrupt, or destroy database contents.

**Key Concepts**

* SQL injection is a software vulnerability that occurs when data entered by users is sent to the SQL interpreter as a part of a SQL query.
* Attackers provide specially crafted input data to the SQL interpreter and trick the interpreter to execute unintended commands.
* The interpreter is not able to distinguish between the intended commands and the attacker’s specially crafted data.
* A SQL injection attack exploits security vulnerabilities at the database layer. By exploiting the SQL injection flaw, attackers can create, read, modify or delete sensitive data.

**Prevention**

* You can prevent SQL injection if you adopt an input validation technique in which user input is authenticated against a set of defined rules for length, type and syntax and also against business rules.
* You should ensure that users with the permission to access the database have the least privileges.
* Use strongly typed parameterized query APIs with placeholder substitution markers, even when calling stored procedures.

Here’s a Cyber Security Awareness Week problem solved using SQL injection - [jordan-wright](http://jordan-wright.com/blog/2015/09/21/csaw-ctf-2015-web-200-writeup/)

Sources: [owasp](https://www.owasp.org/index.php/Top_10_2013-A1-Injection), [phpsecurity](http://phpsecurity.readthedocs.io/en/latest/Injection-Attacks.html), [acunetix](http://www.acunetix.com/websitesecurity/sql-injection/)


#### Preprocessors - HAML & SASS
A preprocessor is a program that takes one type of data and converts it to another type of data. In the case of HTML and CSS, some of the more popular preprocessor languages include Haml and Sass. Haml is processed into HTML and Sass is processed into CSS.

###### HAML

Haml, known as HTML abstraction markup language, is a markup language with the single goal of providing the ability to write beautiful markup. Serving as its own markup language, code written in Haml is later processed to HTML. Haml promotes DRY and well-structured markup, providing a pleasing experience for anyone having to write or read it. HAML is a replacement for inline page templating systems such as PHP, ASP, and ERB.

HAML was developed by Hampton Caitlin as pushback against the heavy nature of HTML and, by extension, ERB. It aims to reduce repetition in your markup by closing tags for you based on the structure of the indents in your code. The result is markup that is well-structured, DRY, logical, and easier to read. You can also use Haml on a project independent of Ruby, by installing the Haml gem on your machine and using the command line to convert it to html. One thing to keep in mind when using Haml is how strict it is with indentation. Each level of indentation denotes a parent/child relationship and the way your tags will be nested.

###### SASS

Sass (Syntactically Awesome Stylesheets) is an extension of CSS. Sass allows you to use things like variables, nested rules, inline imports and more. It also helps to keep things organized and allows you to create stylesheets faster.

SASS comes with two syntaxes –
SCSS (Sassy CSS): Uses the .scss file extension and is fully compliant with CSS syntax.
SASS : Uses .sass file extension and uses indentation rather than brackets; it is not fully compliant with CSS syntax, but it's quicker to write.
Key features -
Variables: Sass allows the use of variables which can store information you can use throughout your stylesheet. For example, you can store a color value in a variable at the top of the file, and then use this variable when setting the color of your elements.
Nesting: Provides an excellent method for reducing the amount of code you need to write, it can also lead to over-qualified CSS if not done carefully.
Importing: Partials (smaller Sass files) can be imported into other Sass files. Think of partials as code snippets.
Inheritance:  You can extend defined css properties in to another property.
Operators: SASS comes with a handful of standard math operators for calculations.

I’ve setup a demo here to demonstrate the advantages of using HAML and SASS, my 22 lines of HAML code compiles to 127 lines of HTML and 193 lines of SCSS compiles to 608 lines of CSS. HAML and SASS significantly reduce the amount of time it takes for front end development. [codepen](http://codepen.io/kailash-sankar/full/BKEXjW/)

Sources: [louisnovick](http://louisnovick.com/blog/a-short-introduction-to-haml/), [sass-lang](http://sass-lang.com/guide), [shayhowe](http://learn.shayhowe.com/advanced-html-css/preprocessors/)



#### Quantum Entanglement (Part 2)
Erwin Schrödinger, a founder of quantum theory who was deeply skeptical of its correctness, emphasized that the evolution of quantum systems naturally leads to states that might be measured to have grossly different properties.

###### Schrödinger's cat
Schrödinger's cat is a famous illustration of the principle in quantum theory of superposition, proposed by Erwin Schrödinger in 1935. Schrödinger's cat serves to demonstrate the apparent conflict between what quantum theory tells us is true about the nature and behavior of matter on the microscopic level and what we observe to be true about the nature and behavior of matter on the macroscopic level -- everything visible to the unaided human eye.

According to the thought experiment - We place a living cat into a steel chamber, along with a device containing a vial of hydrocyanic acid. There is, in the chamber, a very small amount of a radioactive substance. If even a single atom of the substance decays during the test period, a relay mechanism will trip a hammer, which will, in turn, break the vial and kill the cat. ( No animals were harmed - emphasizing that this is just a thought experiment)

The observer cannot know whether or not an atom of the substance has decayed, and consequently, cannot know whether the vial has been broken, the hydrocyanic acid released, and the cat killed. Since we cannot know, according to quantum law, the cat is both dead and alive, in what is called a superposition of states. It is only when we break open the box and learn the condition of the cat that the superposition is lost, and the cat becomes one or the other (dead or alive). This situation is sometimes called quantum indeterminacy or the observer's paradox: the observation or measurement itself affects an outcome, so that the outcome as such does not exist unless the measurement is made.

Entangled histories describe quantum muffins that are, in a real sense, Schrödinger kittens. Their full description requires, at intermediate times, that we take both of two contradictory property-trajectories into account. The controlled experimental realization of entangled histories is delicate because it requires we gather partial information about our quantum muffins. Conventional quantum measurements generally gather complete information at one time — for example, they determine a definite shape, or a definite flavor rather than partial information spanning several times. But it can be done without great technical difficulty. This way we can give definite mathematical and experimental meaning to the proliferation of “many worlds” in quantum theory, and demonstrate its substantiality.

###### Spooky Action at a Distance
In everyday speak, quantum entanglement simply means that when something happens to a quantum muffin, something also happens to the other quantum muffin it is inextricably linked to, no matter how far apart the two muffins are from each other. In this synchronous relationship between a pair of muffins, the change in one is instantaneously relayed to the other at speeds faster than that of light.
Einstein famously refused to believe that this phenomenon was a real thing as it violated the intricate workings of his special theory of relativity, which implies that nothing could travel faster than the speed of light. Einstein referred to it as "spooky action at a distance".

###### Relativity
Let's imagine a universe as a whole enclosed system. Somewhere in this universe there is Schrodinger's cat experiment set up. One observer for whom the time is beating at much the same rate as the experiment, will see that as the time passes the poison capsule will eventually break and the cat will unfortunately meet an unhappy end. Another observer who is moving nearly at speed of light relative to the experiment, will never see the poison capsule break as the whole process will appear to be still.

But if you are observing the whole universe from outside then you are not part of the system and therefore your relative state to anything within that universe cannot be established. You clearly will not see the process run forward in time because you lack identifiable relative state to that experiment. You will not see the time stop either for the very same reason. Point is that in order to see any certain outcome from the experiment, you have to have (or theoretically choose) some relative state to that experiment. Without it you cannot observe any certain outcomes.

When you select an arbitrary point for observation and then make that observation, what is then observed should not be regarded as the only "truth" which was hidden until now but which thanks to such observation is now revealed – however it should also not be interpreted as the "truth" instantaneously choosing its state and in some mysterious way collapsing into single state from superposition of all possible states just because an "observation" was made.

###### Bells Inequality
In the 1960s, physicist John Stewart Bell proposed a straightforward test, known as Bell's Inequality, to test spooky action at a distance. If spooky action were real, Bell proposed, then entangled particles measured some distance apart would have correlated states more than a certain percentage of the time. And if some hidden variable were affecting these seemingly entangled particles, then entangled particles would have correlated states less than that fraction of the time.    

In one experiment, two particles were separated by a distance of 89 miles and still the "spooky action" occurred.  The test was published in a paper last November. After many other experiments, the loopholes surrounding the validity of the phenomenon were deemed closed. These experiments are paving a solid way towards quantum computing and encryption.

You’ve been exposed to all the major concepts related to quantum entanglement and are now ready to enter the quantum era.

Sources: [livescience](http://www.livescience.com/52811-spooky-action-is-real.html), [quantamagazine](https://www.quantamagazine.org/20160428-entanglement-made-simple/)


#### Internet bots
An Internet bot or simply bot, is a software application that runs automated tasks (scripts) over the Internet. Typically, bots perform tasks that are both simple and structurally repetitive, at a much higher rate than would be possible for a human alone. According to the 2015 global traffic report by Incapsula, the total bot traffic accounts for 48.5% of which 19.5% is by good bots and 29% by bad bots.

Good bots are the worker bees of the Internet that assist its evolution and growth. Their owners are legitimate businesses who use bots to assist with automated tasks, including data collection and website scanning. Facebook uses bots to grab the headline, first paragraph, and image from a story when you share it on your news feed. Meanwhile, Google uses bots to crawl and catalog the web so when you run a search, the site can deliver appropriate results.

Bad bots, on the other hand, are the malicious intruders that swarm the Internet and leave a trail of hacked websites and downed services. Their masters are the bad actors of the cyber-security world. In their hands, bots are used to automate spam campaigns, spy on competitors, launch denial of service (DDoS) attacks or execute vulnerability scans to compromise websites on a large scale. Malicious bots are typically blended threats that come as part virus/worm, part bot and are used in an identity theft or to launch denial of service attacks. This is especially prevalent in a botnet, which is a grouping of computers that are all infected with a malicious bot. Other illegal, or at least questionable uses, involve bots that harvest email addresses for spam, scrape content or manipulate comments/votes on sites that allow user feedback.

Smaller websites are more vulnerable to bots than larger ones. Hackers target them more often in order to get usernames, passwords, and other credentials because these sites are less secure and a lot of people use the same passwords across all the sites they use.

Chat bots deserve their own section because they are popping up everywhere. These are complex bots and generally run on some form of artificial intelligence. Microsoft’s twitter chatbot Tay, recently captured the headlines after a  group of twitter users exploited it’s childlike learning curve and made it go on a hateful tirade. Facebook is going to let companies build their own chatbots into Messenger to interact with customers. Most chatbots learn from past conversations using neural nets and can start expecting what we'll ask them because of their AI capabilities.

At this year’s Build developer conference, Microsoft unveiled Microsoft Bot Framework — a set of tools that will let anyone create a bot that they (and their customers) can chat to, in the hope that these programs might replace web and app interfaces. To demonstrate this system, Microsoft assembled a chatbot on stage for Domino's, showing how a conversational interface could replace the standard online ordering forms (like drop downs and comment boxes). Microsoft will help power these programs by providing what it calls "cognitive micro services" — little scoops of prepackaged intelligence that give bots the ability to understand natural language, for example, or analyze and label images.

Sources: [tomsguide](http://www.tomsguide.com/us/web-bot-definition,review-1961.html), [incapsula](https://www.incapsula.com/blog/bot-traffic-report-2015.html), [nbcnews](http://www.nbcnews.com/tech/innovation/what-are-chatbots-why-does-big-tech-love-them-so-n572201)
