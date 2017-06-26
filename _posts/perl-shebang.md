
{{{
  "title": "The shebang line",
  "tags": ["Code","Perl"],
  "category": "Tutorials",
  "date": "05 Sept 2014",
  "preview": "What's up with shebang."
}}}


Konnichiwa!


I have setup a plan to learn something new everyday, it doesn't matter how small the topic is, five minutes, an hour or more if i can. Recently i got a shot at moving to a different project and i took it. I started learning by myself on my free time so that i can be productive at the earliest and i've come this far. Whatever i learned last week while building this blog has helped me meet my targets(work) for this week. Now i realize how critical it is to keep improving my programming knowledge because the challanges are only getting harder. And i feel quite bad about not doing any of this over the past year :/ (Update: I was talking about my perl catalyst blog)

Whatever i'm posting here would be definetely be there somewhere on the internet, why do it then? because this is my own archive that i can look back at and writing a post here that anyone can see makes me think twice about what i am writing, hence i learn more ;)

Let's start with shebang,

The shebang line is added at the top of a script to specify the path to the interpreter that should be used to run the script. The syntax of the shebang line would be like this:
`#!/path/to/interpreter`

For example, let's take a perl file test.pl
    #!/usr/bin/perl

    use strict;
    use warnings;

    my $str = "Hello";
    my $btr = "world";

    print "\n$str $btr\n";


If we run this file(assuming the perl path is same is in your machine) directly ./test.pl, the perl interpreter inside /usr/bin/ would be called with the argument /path/to/test.pl

Let's play around a bit,
Try moving the shebang line to the second line of your code and run test.pl. You will get an error, which means shebang line should always be the first line of the script. You must be wondering why, it's because the Kernel will only look at the first 2 bytes at the start of the executable file, and if these are #! then the rest of the line is considered as the interpreter which will run our script. If all else fails then the kernal will try to execute the file as a shell script and you would get weird errors.

Next add some spaces between #! and the /path/to/interpreter, the program will run fine, so spaces are allowed between #! and interpreter.
On one site i read a bit about space being mandatory after #! on some older versions on UNIX, but the post also says that it's 'virtually impossible to find a Unix which actually required this' :/ . If you like to read more links are at the end.

Now give a wrong path and see what happens #!/usr/bah/humbub/, you will get an error 'bad interpreter'.

Finally,Is shebang line mandatory? nope. You can simply execute the file like this perl testfile.pl.
In fact there are some posts which say that it's better not to rely on it. Why? Portability. Say you wrote the perl script on your machine which has bath /alpha/beta/ then you copied it to another machine which has path /gamma/delta/ , the script breaks.
If you have the shebang line and you are calling the script with perl, then the line will simply be ignored, so it's is good to have it there. :)

A few tips to end the whole shebang,
Find the locations of perl in your system with this command: whereis perl
To know which perl is getting execute when you run perl test.pl use any of these commands
which perl or perl -le 'print $^X'

There's a lot more to read about #!, take a look through these links if you have time time.

Sources:
[faqs.org](http://www.faqs.org/faqs/unix-faq/faq/part3/section-16.html), [#!magic](http://www.in-ulm.de/~mascheck/various/shebang/), [perltricks.com](http://perltricks.com/article/5/2013/3/25/You-don-t-need-a-shebang-line)
