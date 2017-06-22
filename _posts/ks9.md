
{{{
  "title": "Knowledge Stream #9",
  "tags": ["Code","Security","Crypto"],
  "category": "Knowledge Streams",
  "date": "15 July 2016",
  "preview": "This knowledge stream looks at XSS, Web services, jquery 3.0 and js encryption."
}}}


#### Cross-site Scripting (XSS) (2 of 10 OWASP)

Cross-site Scripting (XSS) refers to client-side code injection attack wherein an attacker can execute malicious scripts into a legitimate website or web application. XSS is amongst the most rampant of web application vulnerabilities and occurs when a web application makes use of invalid or unencoded user input within the output it generates. By leveraging XSS, an attacker does not target a victim directly. Instead, an attacker would exploit a vulnerability within a website or web application that the victim would visit, essentially using the vulnerable website to deliver a malicious script to the victim’s browser.

In order for an XSS attack to take place the vulnerable website needs to directly include user input in its pages. An attacker can then insert a string that will be used within the web page and treated as code by the victim’s browser. An XSS attack can exploit vulnerabilities in VBScript, ActiveX, Flash and JavaScript.

JavaScript is widely used for XSS, here’s why :
- Malicious JavaScript has access to all the same objects the rest of the web page has, including access to cookies. Cookies are often used to store session tokens, if an attacker can obtain a user’s session cookie, they can impersonate that user.
- JavaScript can read and make arbitrary modifications to the browser’s DOM
- JavaScript can use XMLHttpRequest to send HTTP requests with arbitrary content to arbitrary destinations.
- JavaScript in modern browsers can leverage HTML5 APIs such as accessing a user’s geolocation, webcam, microphone and even the specific files from the user’s file system. While most of these APIs require user opt-in, XSS in conjunction with some clever social engineering can bring an attacker a long way.

###### Types of XSS

**Stored XSS**: The most damaging type of XSS is Stored (Persistent) XSS. Stored XSS attacks involves an attacker injecting a script that is permanently stored on the target application (for instance within a database). The classic example of stored XSS is a malicious script inserted by an attacker in a comment field on a blog or in a forum post. When a victim navigates to the affected web page in a browser, the XSS payload will be served as part of the web page just like a legitimate comment would. This means that victims will inadvertently end-up executing the malicious script once the page is viewed in a browser.

**Reflected XSS**: The second, and by far most common type of XSS is Reflected XSS. In Reflected XSS, the attacker’s payload script has to be part of the request which is sent to the web server and reflected back in such a way that the HTTP response includes the payload from the HTTP request. Using Phishing emails and other social engineering techniques, the attacker lures the victim to inadvertently make a request to the server which contains the XSS payload and ends-up executing the script that gets reflected and executed inside the browser. Since Reflected XSS isn’t a persistent attack, the attacker needs to deliver the payload to each victim – social networks are often conveniently used for the dissemination of Reflected XSS attacks.

**DOM-based XSS**: DOM-based XSS is an advanced type of XSS attack which is made possible when the web application’s client side scripts write user provided data to the Document Object Model (DOM). The data is subsequently read from the DOM by the web application and outputted to the browser. If the data is incorrectly handled, an attacker can inject a payload, which will be stored as part of the DOM and executed when the data is read back from the DOM.

###### Methods of preventing XSS

**Secure input handling**:
Encoding:   Encoding is the act of escaping user input so that the browser interprets it only as data, not as code. The most recognizable type of encoding in web development is HTML escaping, which converts characters like < and > into `&lt;` and `&gt;`, respectively. When performing encoding in your client-side code, the language used is always JavaScript, which has built-in functions that encode data for different contexts. When performing encoding in your server-side code, you rely on the functions available in your server-side language or framework.

**Validation**: Validation is the act of filtering user input so that all malicious parts of it are removed, without necessarily removing all code in it. One of the most recognizable types of validation in web development is allowing some HTML elements (such as `<em>` and `<strong>`) but disallowing others (such as `<script>`).

**Blacklisting**: Perform validation by defining a forbidden pattern that should not appear in user input. If a string matches this pattern, it is then marked as invalid.  Accurately describing the set of all possible malicious strings is usually a very complex task. Even if a perfect blacklist were developed, it would fail if a new feature allowing malicious use were added to the browser.

**Whitelisting**: Whitelisting is essentially the opposite of blacklisting: instead of defining a forbidden pattern, a whitelist approach defines an allowed pattern and marks input as invalid if it does not match this pattern. Accurately describing a set of safe strings is generally much easier than identifying the set of all malicious strings. Unlike a blacklist, a whitelist will generally not become obsolete when a new feature is added to the browser.

Secure input handling needs to be performed differently depending on where in a page the user input is inserted. It can be performed either when your website receives the input (inbound) or right before your website inserts the input into a page (outbound).

**Content Security Policy (CSP)**:
CSP is used to constrain the browser viewing your page so that it can only use resources downloaded from trusted sources. A resource is a script, a stylesheet, an image, or some other type of file referred to by the page. This means that even if an attacker succeeds in injecting malicious content into your website, CSP can prevent it from ever being executed.

CSP can be used to enforce the following rules:
No untrusted sources - External resources can only be loaded from a set of clearly defined trusted sources.
No inline resources - Inline JavaScript and CSS will not be evaluated.
No eval - The JavaScript eval function cannot be used.
By default, browsers do not enforce CSP. To enable CSP on your website, pages must be served with an additional HTTP header: Content‑Security‑Policy. Any page served with this header will have its security policy respected by the browser loading it, provided that the browser supports CSP.

**Subresource Integrity**:
Subresource Integrity (SRI) is a security feature that enables browsers to verify that files they fetch (for example, from a Content Delivery Network) are delivered without unexpected manipulation. It works by allowing you to provide a cryptographic hash that a fetched file must match. Script tags should define two new attributes for SRI – Integrity and Crossorigin.

**Integrity**: An integrity value begins with at least one string, with each string including a prefix indicating a particular hash algorithm (currently the allowed prefixes are sha256, sha384, and sha512), followed by a dash, and ending with the actual base64-encoded hash. Integrity attribute is to allow the browser to check the file source to ensure that the code is never loaded if the source has been manipulated.

**Crossorigin**: When the request doesn't match Same Origin Policy (being loaded from an external source) the crossorigin attribute must be present for the integrity of the file to be checked. With an integrity set on an external origin(anonymous) and a missing crossorigin the browser will choose to 'fail-open' which means it will load the resource as if the integrity attribute was not set.

Sources: [acunetix](http://www.acunetix.com/websitesecurity/xss/), [excess-xss](http://excess-xss.com/), [owasp][owasp]
[owasp]: https://www.owasp.org/index.php/Cross-site_Scripting_(XSS)


#### Web Services (Part  1)
Web services are self-contained, modular, distributed, dynamic applications that can be described, published, located, or invoked over the network to create products, processes, and supply chains. These applications can be local, distributed, or web-based. Web services are built on top of open standards. Web services allow various applications to talk to each other and share data and services among themselves.

###### Characteristics

- Machine-to-machine interactions
- Loose coupling
- Interoperability
- Platform-independence
- Operating system-independence
- Language-independence
- Leveraging the architecture of the World Wide Web


###### History

**Remote Procedure Call (RPC) [1980s]** is a protocol that one program can use to request a service from a program located in another computer in a network without having to understand network details.  This is a form of client–server interaction (caller is client, executer is server), typically implemented via a request–response message-passing system. Practical implementations date to the early 1980s.

**Object Management Group (OMG) [1989]** -  The OMG is a non-profit consortium created in 1989 to promote the theory and practice of object technology for the development for distributed operating systems. The goal is to provide a common architectural framework for object-oriented applications based on widely available interface specifications.

Remote Method Invocation(RMI) is the object-oriented programming analogy of RPC.

**Common Object Request Broker Architecture (CORBA) [1991]**: CORBA is an architecture and specification for creating, distributing, and managing distributed program objects in a network. It allows programs at different locations and developed by different vendors to communicate in a network through an "interface broker." CORBA was developed by a consortium of vendors through the Object Management Group (OMG), which currently includes over 500 member companies. Interface Definition Language (IDL) is the OMG standard for defining language-neutral APIs and provides the platform-independent delineation of the interfaces of distributed objects.

**Component Object Model (COM) [1993]**: COM is a binary-interface standard for software components introduced by Microsoft in 1993. It is used to enable inter-process communication and dynamic object creation in a large range of programming languages. COM is the basis for several other Microsoft technologies and frameworks, including OLE, OLE Automation, ActiveX, COM+, DCOM, the Windows shell, DirectX, UMDF and Windows Runtime. The essence of COM is a language-neutral way of implementing objects that can be used in environments different from the one in which they were created, even across machine boundaries.

**DCOM (Distributed Component Object Model)**: Microsoft® Distributed COM (DCOM) extends the Component Object Model (COM) to support communication among objects on different computers-on a LAN, a WAN, or even the Internet. With DCOM, your application can be distributed at locations that make the most sense to your customer and to the application.

**SOAP [1999]**: SOAP provides the envelope for sending Web Services messages over the Internet/Internet. It is part of the set of standards specified by the W3C. SOAP commonly uses HTTP, but other protocols such as Simple Mail Transfer Protocol (SMTP) may by used. SOAP is defined independently of the underlying messaging transport mechanism in use. It allows the use of many alternative transports for message exchange, and allows both synchronous and asynchronous message transfer and processing.

**WSDL [2000]**: Web Services Description Language is an XML format for describing network services as a set of endpoints operating on messages containing either document-oriented or procedure-oriented information. The operations and messages are described abstractly, and then bound to a concrete network protocol and message format to define an endpoint. WSDL specifies what a request message must contain and what the response message will look like in unambiguous notation. The notation that a WSDL file uses to describe message formats is based on XML Schema. This means it is both programming-language neutral and standards-based, which makes it suitable for describing service interfaces that are accessible from a wide variety of platforms and programming languages.

**UDDI [2000]**: Universal Description, Discovery, and Integration is an XML-based standard for describing, publishing, and finding web services.

**REST**: REST stands for Representational State Transfer. It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used. REST is an architecture style for designing networked applications. The idea is that, rather than using complex mechanisms such as CORBA, RPC or SOAP to connect between machines, simple HTTP is used to make calls between machines. RESTful applications use HTTP requests to post data (create and/or update), read data (e.g., make queries), and delete data. Thus, REST uses HTTP for all four CRUD (Create/Read/Update/Delete) operations.


###### Soap Vs Rest
SOAP is definitely the heavyweight choice for Web service access. It provides the following advantages when compared to REST:
Language, platform, and transport independent (REST requires use of HTTP)
Works well in distributed enterprise environments (REST assumes direct point-to-point communication)
Standardized
Provides significant pre-build extensibility in the form of the WS* standards
Built-in error handling
Automation when used with certain language products

REST is easier to use for the most part and is more flexible. It has the following advantages when compared to SOAP:
No expensive tools require to interact with the Web service
Smaller learning curve
Efficient (SOAP uses XML for all messages, REST can use smaller message formats)
Fast (no extensive processing required)
Closer to other Web technologies in design philosophy

More on part 2.

Sources: [msdn](https://msdn.microsoft.com/en-us/library/ms996441.aspx#introwsa-upd_topic6a), [elkstein](http://rest.elkstein.org/2008/02/what-is-rest.html), [service-architecture](http://www.service-architecture.com/articles/web-services/index.html)


#### JQuery 3.0

JQuery 3.0 was released on June 9,2016 and comes with some major changes and performance bump. There are some new features, changes to existing functions and a few functions were deprecated.

###### Major Changes
 **Old IE Workarounds Got Removed**:
One of the main goals of the new major release was to make it faster and sleeker, therefore the old hacks and workarounds related to IE9- got removed. This means if you want or need to support IE6-8, you’ll have to keep using the latest 1.12 release, as even the 2.x series doesn’t have full support for older Internet Explorers (IE9-).

**Runs in Strict Mode**:
Strict mode is a way to opt in to a restricted variant of JavaScript. Strict mode isn't just a subset: it intentionally has different semantics from normal code. First, strict mode eliminates some JavaScript silent errors by changing them to throw errors. Second, strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. Third, strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.    
Although jQuery 3 has been written in strict mode, it’s important to know that your code is not required to run in strict mode, so you don’t need to rewrite your existing jQuery code if you want to migrate to jQuery 3. Strict & non-strict mode JavaScript can happily coexist.

 **For..OF Loop**:
Query 3 will offer the possibility to iterate over the DOM elements of a jQuery collection using the for...of loop. This new iterator is part of the ECMAScript 6 specification. It lets you loop over iterable objects. When using this new iterator, the value you receive is not a jQuery collection from which you can access one element at a time but rather a DOM element.  The for...of loop can replace the former $.each(...) syntax, and can make it easier to loop through the elements of a jQuery collection.

 **requestAnimationFrame() API**:
jQuery 3 uses the requestAnimationFrame() API for performing animations, making animations run smoother and faster. The new API is only used in browsers that support it; for older browsers (i.e. IE9) jQuery uses its previous API as a fall-back method to display animations.
Escape strings with special meaning:  The new jQuery.escapeSelector() method allows you to escape strings or characters that mean something else in CSS in order to be able to use it in a jQuery-selector; without escaping the JavaScript interpreter cannot properly understand it.

**New Show/Hide Logic**:
From now on, the .show(), .hide(), and .toggle() methods will focus on inline styles, instead of computed styles, this way they will better respect stylesheet changes. The changes have brought in significant performance improvement.

**Extra XSS Protection**:
jQuery 3 added an extra security layer against Cross-Site Scripting (XSS) attacks by requiring developers to specify dataType: "script" in the options of the $.ajax() and the $.get() methods. In other words, if you want to execute cross-domain script requests, you must declare this in the settings of these methods.

**Data Keys**:
The jQuery team changed the .data() implementation to closely match the HTML5 dataset specification. If the key in the data-* attribute contains a digit, the digits will no longer participate in the conversion.

**Deprecated functions**:
bind(), unbind(), delegate(), undelegated() have been deprecated. on() and off() are recommended.

**DEMO**: I’ve setup a demo to compare 3.0.0 with 2.2.4 at [codepen](http://codepen.io/kailash-sankar/pen/EyvmVy?editors=1010)


Sources: [jquery](https://jquery.com/upgrade-guide/3.0/), [github](https://github.com/jquery/jquery-migrate#migrate-older-jquery-code-to-jquery-30), [hongkiat](http://www.hongkiat.com/blog/jquery-3-new-features/)


#### Encryption with JavaScript

JavaScript has a web cryptography API which allows web pages access to certain cryptographic related services. Web Cryptography API supports most of the popular and commonly used cryptography algorithms for hashing, encryption and digital signing. window.crypto is the main object of of web cryptography api. It exposes all properties and functions required for in browser cryptography and it is an asynchronous API.

The API has various uses, my demo will only cover encryption using a passphrase within the browser. To make the process easier and reusable, I wrote a plugin ( caveInimicum.js ) which uses window.crypto and offers the below mentioned handles.

**Public functions**:
- generateKey :Generates a digest using SHA-256, the passphrase and a random salt (arraybuffer). Generate a key using AES-CBC and the digest we generated. Output is a crypto key object we can use for encryption and decryption                    
- encryptData  :  Encrypts data using AES-CBC, salt and key from step 1
- decryptData  : Decrypts the data if a valid key is set
- save: saves the encrypted data, salt and timestamp on browser
- load: loads data and salt from browser
- clear: clear saved data from browser
- enlighten: browser and protocol compatibility check, look for any saved data

The save and load methods use localStoage. localStorage allows us to store data on a browser much like a cookie but far easier to use. Also, the data is not lost when the browser is closed.

**Private functions**:
- \_keyMaker : perform step 2 of generateKey
- \_buffStr : convert a string in to an array buffer
- \_buffObj : convert a json object in to array buffer
- \_deBuff  : convert array buffer to a string
- \_dump    : for logging
- \_callback : for custom callbacks

window.crypto operates on array buffers, so we need functions for conversion (buff functions) and because crypto is asynchronous we have to execute chained actions as callbacks using .then() function.

**DEMO**: The demo will work on Chrome and Firefox while using https.  Note: The demo is themed to look like a console, but there's only front end (HTML,CSS and JS) code running - [codepen](https://codepen.io/kailash-sankar/full/zBKOrQ/)

Sources: [github](https://github.com/diafygi/webcrypto-examples), [qnimate](http://qnimate.com/post-series/web-cryptography-api-tutorial/)
