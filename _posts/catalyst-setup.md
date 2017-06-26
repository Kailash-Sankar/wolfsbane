
{{{
  "title": "Setup Catalyst on GoDaddy hosting",
  "tags": ["Code","Perl"],
  "category": "Tutorials",
  "date": "31 Aug 2014",
  "preview": "A guide to setup perl catalyst framework app on GoDaddy hosting account."
}}}


#### Catalyst framework

Setting up catalyst on the host server was quite harder than i thought it would be. There are a lot of ways to setup catalyst on linux host and you will find a ton of tutorials. I spent a whole day to get my server running, the problem was that i couldn't find any tutorial specific to setting up the server in godaddy hosting. This is from my experiance , there might be better ways to do it. Try at your own risk.

Before we start the setup details, i'll add in some info about my hosting plan and domain,
* The .in domain was Rs199 per year when i bought it
* I chose the most basic linux hoting plan - 30gb, cpanel, perl support and one mysql database
* So what is the main reason for choosing godadddy? Shell Access!!

Now to setup catalyst!

- Intalling the required modules through the cpanel interface
- tarball your project , copy to server and extract inside public_html
- Create a .htaccess file in your Myapp/script folder and add the following lines and save.


    Options +ExecCGI
    AddType application/x-httpd-fcgi .fcgi
    SetHandler fcgid-script
- Create an alias with name 'script' from public_html folder to point to your Myapp/script folder
- Open the main .htaccess file inside public_html and add the below lines and save ( replace Myapp with your app name).


    Options +ExecCGI
    AddHandler fastcgi-script .fcgi

    RewriteEngine On
    RewriteCond %{REQUEST_URI} !^/?script/myapp_fastcgi.fcgi
    RewriteRule ^(.*)$ script/myapp_fastcgi.fcgi/$1 [PT,L]
- Rename your *myapp_fastcgi.pl* file to *myapp_fastcgi.fcgi*, open the file and change the perl path to
 *#!/usr/bin/perlml*. This is the perl path on go daddy server. To confirm you can go to the install perl modules section, this path will be listed there.
- The final step is to give 755 permission to the .fcgi file. You can do this either from the cpanel file manager or from terminal. Now head to your address and check!
- In case you are facing errors, run the test server myapp_server.pl and check, if there are any missing dependencies you will see an error otherwise the test server will run. Don't leave the test server running as a process. You can use the Makefile.pl to install missing dependencies if any. I manually installed :p
- There is a way to test if apache is processing fcgi; for this, first comment out the below lines in the main .htacces file (the one inside public_html)


    #RewriteEngine On
    #RewriteCond %{REQUEST_URI} !^/?script/kdev_fastcgi.fcgi
    #RewriteRule ^(.*)$ script/Myapp_fastcgi.fcgi/$1 [PT,L]
Now go to your myapp/script folder and creat a new file helloworld.fcgi and add the below lines -

    #!/usr/bin/perl
    use cPanelUserConfig;

    use lib qw(
    /home/[yourusername]/perl5/lib/perl5/
     );
    use FCGI;
    use Socket qw( :crlf ); # server agnostic line endings in $CRLF

    my $counter = 0;
    my $request = FCGI::Request();
    while ( $request->Accept() >= 0) {
       $counter++;

       print
            "Content-Type: text/plain",
            $CRLF,
            $CRLF,
            "Hello World, in Perl FastCGI!",
            $CRLF,
            "I am process $$.",
            $CRLF,
            "I have served $counter request(s).",
            $CRLF;
     }
Now browse to that path from your address eg: ksankar.in/myapp/script/helloworld.fcgi . Hopefully you should see the output, if you do then your server is handling .fcgi, otherwise there is a problem with either the permissions or the handler.
Let me know if this works for you, if you are still facing issues or if you have any suggestions please add a comment.
