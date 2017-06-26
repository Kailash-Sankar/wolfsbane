
{{{
  "title": "Knowledge Stream #4",
  "tags": ["Tech","Security"],
  "category": "Knowledge Streams",
  "date": "15 Feb 2016",
  "preview": "This knowledge stream looks at RFIDs, neural networks, two-factor auth, ChakraCore, productivity hacks and more."
}}}


###### Hack-proof RFID

Radio frequency identification (RFID) is a small electronic device consisting of a chip on which data can be encoded, and an antenna used to transmit that data. It is typically used for short-distance communication of information. RFID is used in Logistics, Inventory tracking, Race timing, Access Control, IT Asset Tracking, Library Systems etc...

Researchers at MIT and Texas Instruments have developed a new type of radio frequency identification (RFID) chip that is virtually impossible to hack. The researchers presented their research on the first week of February at the International Solid-State Circuits Conference, in San Francisco.

The chip is designed to prevent side-channel attacks. Side-channel attacks analyze patterns of memory access or fluctuations in power usage when a device is performing a cryptographic operation, in order to extract its cryptographic key. RFID chip with a random-number generator can prevent side channel attacks but it would still be vulnerable to power glitch attacks. In a power glitch attack a hacker repeatedly cuts the RFID chip's power just before it changes the secret cryptographic key. By using this method, hackers can render the above strategy ineffective and run the same side-channel attack thousands of times, with the same key, in order to get the pattern and fetch the information from the RFID chip.

The new chip thwarts power-glitch attacks by having an on-chip power supply whose connection to the chip circuitry would be virtually impossible to cut and by using nonvolatile memory cells that can store whatever data the chip is working on when it begins to lose power. To achieve this, the new chip takes advantage of a material called Ferroelectric crystals that consist of molecules arranged into a lattice form where positive and negative charges naturally separate. These ferroelectric crystals can operate as a capacitor for storing power, producing computer memory that retains data even when powered off.

Texas Instruments & Japanese automotive company Denso are backing the project and it is going to be presented at the International Solid-State Circuits Conference.

Sources: [mit](http://news.mit.edu/2016/hack-proof-rfid-chips-0203), [thehackernews](http://thehackernews.com/2016/02/hacking-rfid-chips.html)



###### Deep learning & Neural networks

Deep learning is about programming machines to learn to work like our brain. Recognizing objects, understanding concepts, comprehending speech, handwriting recognition are all problems where we cannot write a straight forward program. Each person has their own style or writing and it's impossible to input all the possibilities to a program and even if we do, it would make the program horrendously complicated.
Instead we try to develop an algorithm that a computer can use to look at hundreds or thousands of examples and the correct answers, and then the computer uses that experience to solve the same problem in new situations. Essentially, our goal is to teach the computer to solve by example, very similar to how we might teach a young child.

In traditional machine the programmer needs to tell the computer what kinds of things it should be looking for that will be informative in making a decision, a process called as feature extraction. This places a huge burden on the programmer, and the algorithm's effectiveness relies heavily on how insightful the programmer is. Deep learning is one of the only methods by which we can circumvent the challenges of feature extraction. This is because deep learning models are capable of learning to focus on the right features by themselves, requiring little guidance from the programmer. This makes deep learning an extremely powerful tool for modern machine learning.

The model used by deep learning is called a Neural network (inspired by our brain). The basic foundational unit of a neural network is the neuron, which is actually conceptually quite simple. Each neuron has a set of inputs, each of which is given a specific weight. The neuron computes some function on these weighted inputs. A neural network comes about when we start hooking up neurons to each other, to the input data, and to the "outlets," which correspond to the network's answer to the learning problem. Neurons in neural nets are often organized in layers just like the human brain. These layers are what make these neural networks deep.

For small applications training a neuron is simple, supply a series of example inputs and expected outputs, and go through a mechanical process to take the weights from initial random values to progressively better numbers that produce more accurate predictions. The process becomes more complex for tasks like speech recognition or computer vision with far larger numbers of weights.

Deep learning neural networks can be trained in unsupervised and supervised manner. Supervised neural networks must have been told the answer to your question at some point, for it to learn it. This might be used for object recognition - to tell a face from a car. Unsupervised learning involves throwing information at a machine and hope it will learn something you haven’t trained it for, because it is able to cluster data to understand patterns. In object recognition this means it will group shapes together and conclude that they are similar. But it is often used in chess or online gaming AI.

This year Microsoft researchers won the ImageNet competition by designing a neural net that’s significantly more complex than typical designs - one that spans 152 layers of mathematical operations, compared to the typical six or seven. ImageNet Competition pits machines against each other in an image recognition contest — which computer can identify cats or cars or clouds more accurately? It shows that, in the years to come, companies like Microsoft will be able to use vast clusters of GPUs and other specialized chips to significantly improve not only image recognition but other AI services, including systems that recognize speech and even understand language as we humans naturally speak it.

Deep learning is at an early stage, yet it forms the basis of some of the largest, most profitable tech companies today. Services based on machine learning is what Google sells its advertising on, and competitors Apple and Facebook are also rapidly making developments in the field.


Sources: [wired](http://www.wired.com/2016/01/microsoft-neural-net-shows-deep-learning-can-get-way-deeper/), [oreilly](http://radar.oreilly.com/2014/07/what-is-deep-learning-and-why-should-you-care.html), [kdnuggets](http://www.kdnuggets.com/2015/01/deep-learning-explanation-what-how-why.html)


###### GitHub: Scientist

As codebases mature and requirements change, it is inevitable that we will need to replace or rewrite a part of our system.

Jesse Toth an engineer at GitHub says that upgrading an Internet service is like building a new bridge across San Francisco Bay. In building the new eastern span of the Bay Bridge, engineers didn’t tear down the old one and erect the new one in its place. They built the new span alongside the old one, before making sure the new bridge could handle the same traffic. Only then did they switch all the cars over and start tearing down the old span.

Applying this principle to software, GitHub engineers officially released a tool designed to ensure that your new code is ready before you disconnect your old code—in some cases, very old code. The tool is called Scientist, and as open source software, it’s freely available to all.

At the core of scientist is a technique known as Branch by Abstraction. It works by inserting an abstraction layer around the code you plan to change. The abstraction simply delegates to the existing code to begin with. Once you have the new code in place, you can flip a switch in the abstraction to begin substituting the new code for the old.

During the testing phase, the abstraction layer can run the old code and the new in parallel. The same live data streams into both systems, and Scientist records any differences in behavior. From the caller's perspective, nothing has changed. But by running and comparing both systems and recording the behavior mismatches and performance differences between the legacy system and the new one, we can use that data as a feedback loop to modify the new system to fix the errors, measure, and repeat until there are no differences between the two systems.

Sources: [githubengineering](http://githubengineering.com/scientist/), [wired](http://www.wired.com/2016/02/rebuilding-modern-software-is-like-rebuilding-the-bay-bridge/), [martinfowler](http://martinfowler.com/bliki/BranchByAbstraction.html)



###### Two-Factor Authentication

Two-factor authentication, also called multiple-factor or multiple-step verification, is an authentication mechanism to double check that your identity is legitimate. Its purpose is to make attackers’ life harder and reduce fraud risks.
Main categories of authentication factors:
- Something that you know: This could be a password, a PIN code or answer to a secret question.
- Something that you have: This is always related to a physical device, such as a token, a mobile phone, a SIM, a USB stick, a key fob, an ID card.
- Something that you are: This is a biological factor, such as a face or voice recognition, fingerprint, DNA, handwriting or retina scan.
- Time and location factors.

Passwords aren't as safe as they used to be, cyber attackers have the power to test billions of passwords combinations in a second. Passphrases are better but not for long. Answers to security questions are also easy to find out, especially now that we are willingly sharing all the details about our lives on social networks and blogs. According to statistics posted by http://www.entrepreneur.com, 90 percent of employee passwords can be cracked in six hours and 65% of people use the same password everywhere. This is where two-factor authentication comes in, It will offer you an extra layer of protection besides passwords.

**Examples:**
a. The token issued by your bank, which generates you a specific code at a specific time – you use it with your username and password for Internet banking.
b. A one-time password(OTP), that you receive as text message on your mobile phone and you use it when you want to log into your Google, Facebook or Twitter account.
c. A random number generated by an app like Google Authenticator or Facebook Code Generator – you use it to log in to your email or social media account.

**Two-factor authentication is a must-have for:**
• online banking
• online shopping (Amazon, PayPal)
• email (Gmail, Yahoo, Outlook)
• cloud storage accounts (Dropbox, Box, Sync)
• accounts on social networks (Facebook, Twitter, Linkedin, Tumblr)
• productivity apps (Evernote, Trello)
• password managers (LastPass)
• communication apps (Slack, Skype)

**Get started:**
Easiest way is to setup two factor authentication using mobile phone. OTP is a good option but if are worried about network range then it's better to have an app generate an authentication code.
The recommended apps are:
• Google Authenticator (available for Android, iOS, Blackberry)
• Authy (for Android, iOS, but also available as desktop app and browser extension)
• Microsoft Authenticator (Windows Phone 7)

I’ve been using Google authenticator for over an year to access my Git account, it’s easy to setup and it’s light (6.5MB on Android). Follow these instructions to set it up:
https://support.google.com/accounts/answer/1066447?hl=en

Sources: [heimdalsecurity](https://heimdalsecurity.com/blog/start-using-two-factor-authentication/), [entrepreneur](http://www.entrepreneur.com/article/242208)


###### Safer web

By late 2015, many browser makers either removed or announced timelines for the removal of plugins that use the old Netscape Application Programming Interface (NPAPI) standard – a decision that eliminated the ability to embed Flash, Java, Silverlight and other plugins. Recognizing this effort from modern browser vendors Oracle says that it’s discontinuing its Java browser plugin starting with the next big release - JDK 9.

This is a good news as Java has had its run of problems with the web. Kaspersky Lab said that in 2012, Java was responsible for 50 percent of all cyber-attacks in which hackers broke into a computer by exploiting bugs in software. It got so bad that even the Department of Homeland security urged consumers to disable Java.

Java is regularly used as a plugin inside the web browser similar to Flash. It lets the user runs untrusted code without having explicitly installed it, the idea is to have the code run inside a limited sandbox, where it should not be able to somehow act against the system or the user (e.g. read local files and send them to the website, scan the local network etc). And this is where Java failed in the recent years, new bugs popped up sometimes on a daily basis which allowed escaping from the sandbox.

The Java browser plugin is defective by design. Java applets simply aren’t sandboxed as they should be, and they blindly run any code that’s been signed with a cryptographic signature, without question. In layman terms if you’ve got a malicious piece of software, and you want to ensure it can run rampant on any computer without any interference, you need only cryptographically sign it.
Last year Google Chrome stopped supporting the plugin standard on which the Java plugin depends on, and Mozilla has announced it will do the same by the end of the year. Microsoft Internet Explorer still supports the standard, but the newer Microsoft Edge browser does not. With Microsoft dropping support for old versions of Internet Explorer and Adobe slowly phasing out Flash, it looks like a nightmarish era for web security is finally drawing to an end.

Sources: [oracle](https://blogs.oracle.com/java-platform-group/entry/moving_to_a_plugin_free), [makeuseof](http://www.makeuseof.com/tag/web-just-became-secure-google-drops-support-java/), [howtogeek](http://www.howtogeek.com/122934/java-is-insecure-and-awful-its-time-to-disable-it-and-heres-how/)


###### ChakraCore JavaScript engine

ChakraCore is a self-contained JavaScript virtual machine, also used in Microsoft Edge, that the company now allows developers to implement inside their own products. It’s available under an MIT license and is hosted on GitHub.

ChakraCore offers best-in-class JavaScript execution with the broadest set of ES2015(ECMAScript 6) feature coverage and dependable performance, reliability, and scalability. ChakraCore is expected to be used wherever these factors are important, ranging from cloud-based services to the Internet of Things and beyond.

ChakraCore is based on the Chakra, the JavaScript engine that Microsoft introduced with Internet Explorer 9 in 2010. Chakra has been in development since 2008, the goal was to have an engine which can start fast, run fast, and deliver a great user experience, while utilizing the full potential of the underlying hardware. Chakra achieved these goals via a unique multi-tiered pipeline that supports an interpreter, a multi-tiered background JIT(Just in Time) compiler, and a traditional mark and sweep garbage collector that can do concurrent and partial collections.

ChakraCore can be used to extend the reach of JavaScript on the server with platforms such as Node.js and cloud-based services. It includes everything that is needed to parse, interpret, compile and execute JavaScript code without any dependencies on Microsoft Edge internals. ChakraCore shares the same set of capabilities that are supported by Chakra in Microsoft Edge, with two key differences. First, it does not expose Chakra’s private bindings to the browser or the Universal Windows Platform, both of which constrain it to a very specific use case. Second, instead of exposing the COM based diagnostic APIs that are currently available in Chakra, ChakraCore will support a new set of modern diagnostic APIs, which will be platform agnostic and could be standardized or made interoperable across different implementations in the long run.

The background compilation of Chakra runs in concert with its flexible interpreter. Traditionally interpreters and compilers are distinct when it comes to running code, but they are not mutually exclusive. Interpreters are often used to speed up programming languages to run behaviors directly without running the code through a compiler. The interpreter in Chakra is used for fast startup and portability before sending the code to the Simple JIT and Full Time JIT compilers and garbage collectors.

Sources: [applause](http://arc.applause.com/2015/12/08/what-is-microsoft-chakracore-javascript-engine/), [thenextweb](http://thenextweb.com/dd/2016/01/13/microsofts-speedy-chakra-javascript-engine-is-now-open-source/#gref)



###### Productivity Hacks

Have you ever wondered how much productivity costs? eSignature brand SignNow has made an infographic about productivity here: [business2community](http://www.business2community.com/infographics/real-cost-productivity-infographic-01028945#eAo9zHATrAsl1bJC.97). According to them - " Time spent searching for misplaced items in the office combined with searching for lost files on the computer; the estimated dollars spent reaches more than $177 Billion annually." (I am still wondering how they got this number.)

Here are some Productivity Hacks to take those numbers down.
**Time Box:** Timeboxing allocates a fixed time period to each planned activity. Several project management approaches use time boxing (sprint). [hbr](https://hbr.org/2014/08/relax-you-have-168-hours-this-week)

**Plan ahead:** Always plan the week on Sundays. This is also the best way to beat the Monday blues! While planning use the 80/20 rule target the 20 percent tasks that will produce 80 percent of the output.
A handy tool online tool to help with the planning: http://slimtimer.com/

**Estimating Time:** Assign estimates for the items in your plan. Use the simple calculation called The Fudge Ratio to get better at avoiding planning fallacy. It is just the difference between the time you expect to take and the time it actually took to complete a task. You can use the ratio to fine-tune your future predictions. And it gets better with experience. Fudge ratio = actual / estimate.

**Work Playlist:** Prep a playlist of your favorite work music and listen to it while you work. According to studies, music listening based on worker’s choice to listen ‘when they want as they want,’ is beneficial for state positive affect, quality-of-work, and time spent on a task. Please use closed back in-ear/over-ear headset to avoid sound leakage(NO on-ears!). [8tracks](http://8tracks.com/explore/productive/), [wikipedia](https://en.wikipedia.org/wiki/Mozart_effect)

**Procrastination List:** It’s nothing but a list of low-energy activities that you can do when you don’t feel like working. The ideal thing to do is to sort this list by energy levels or emotion. It can also be a list of generic tasks that take little time. Use them as boosters throughout the day when you feel unmotivated for bigger tasks. Like filling the time sheets :}

**Keyboard Ninja:** Keyboard shortcuts save a lot of time and you’ll look cool.
https://www.shortcutfoo.com/

**Take a Walk:** Walking is the easiest way to make some endorphins. It is also the only cure to the epidemic of sitting that is sweeping the world. Researchers found that creative juices continued to flow, even when a person sat back down shortly after a walk. Any form of walking enhanced creative thinking by nearly 60%.

Sources: [makeuseof](http://www.makeuseof.com/tag/10-clever-productivity-hacks-anyone-can-use/)
