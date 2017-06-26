
{{{
  "title": "Perl @INC",
  "tags": ["Code","Perl"],
  "category": "Tutorials",
  "date": "15 Sept 2014",
  "preview": "A close look in to @INC"
}}}


###### What's @INC?

It holds the paths to all the treasures. Whenever we load a module in our program, perl checks for the module in the path's specified in @INC. It is set during compile time. Since it's built in to perl binary you cannot change it without re-compliling.
You can add your own path's to @INC while cofiguring perl before compiling. I have not tried this, there's a link at the bottom if you want to know more.
`Configure -Dotherlibdirs=/usr/lib/myscripts/`

There are a lot of easier ways to add your directories to @INC, i'll go throught them one by one. First let's print our @INC and see what all paths are loaded.
`$ env -i perl -V`, you will get a list of paths like this -
(btw $ is the bash terminal)

    /etc/perl  
    /usr/local/lib/perl/5.18.2  
    /usr/local/share/perl/5.18.2  
    /usr/lib/perl5  
    /usr/share/perl5
    /usr/lib/perl/5.18
    /usr/share/perl/5.18
    /usr/local/lib/site_perl
    .

The env -i is to ignore any paths added to the enviroment variable, we'll see more on that later.

Let's build a simple script to learn about @INC, make a new directory on your home folder mkdir Alpha and create a package inside named Hello.pm with the below code

    #! /usr/bin/perl
    package Hello;

    sub say_this {
      print "\n hey $_[0] ";
    }

    1;
Now let's make a small script outside Alpha that will use Hello.pm , lets call it testinc.pl

    #! /usr/bin/perl
    use Alpha::Hello;

    print "\n who are you?";
    my $me = ;
    chomp($me);

    Hello::say_this( $me );


Now run your file perl testinc.pl, the output will be like this

    who are you?kai

    hey kai

The package Hello.pm was loaded and the function call worked even though we didn't specify any additional paths to @INC, this is because of the '.' we saw when we printed @INC. The dot indicates that the current directory is included , from our script we accessed the file as Alpha::Hello, which refers to Hello.pm inside Alpha folder.

Now let's remove the Alpha part and just give use Hello;, try to run the file and you will encounter an error like this -

      Can't locate Hello.pm in @INC (you may need to install the Hello module) (@INC contains: /etc/perl /usr/local/lib/perl/5.18.2 /usr/local/share/perl/5.18.2 /usr/lib/perl5 /usr/share/perl5 /usr/lib/perl/5.18 /usr/share/perl/5.18 /usr/local/lib/site_perl .) at testinc.pl line 5.
      BEGIN failed--compilation aborted at tesinc.pl line 5.


To the solutions with haste!

 - Pass the directory while running the script , pretty straight forward.
 `perl -I /home/you/perlscripts/Alpha testinc.pl`
 - It is difficult to pass the path each time isn't it? Let's add it to the shebang line
 `#! /usr/bin/perl -I /home/you/perlscripts/Alpha`
 - You don't write the shebang line? Okay then add the path via use lib
  `use lib '/home/you/perlscripts/Alpha';`
 - I have a lot of files and i don't want to modify each of them to add the path. perl has you covered mate, use the PERLLIB environment variable
 `export PERL5LIB=/home/you/perlscripts/Alpha`

We can print @INC without env -i to see the paths in PERL5LIB $ perl -V

    %ENV:
    PERL5LIB="/home/you/perlscripts/Alpha"
    @INC:
    /home/you/perlscripts/Alpha
    /etc/perl
    /usr/local/lib/perl/5.18.2
    /usr/local/share/perl/5.18.2
    /usr/lib/perl5
    /usr/share/perl5
    /usr/lib/perl/5.18
    /usr/share/perl/5.18
    /usr/local/lib/site_perl
    .

- It doesn't end there, we are talking about perl after all ;)You can directly manipulate @INC inside your script and add the directories. This should be done within a BEGIN block and before the 'use' statement.


    #@INC is an array, manipulate it all you want
    BEGIN {
      push @INC, '/home/you/perlscripts/Alpha';
    }
    use Hello;

There are some very good posts about when to use these approaches and why, It's difficult to set up examples to show all that. Browse through the source links for more info. I'm winding up for now, i'll update this post with %INC later this week.

Sources: [stackoverflow](http://stackoverflow.com/questions/2526804/how-is-perls-inc-constructed-aka-what-are-all-the-ways-of-affecting-where-pe), [perlmaven](http://perlmaven.com/how-to-change-inc-to-find-perl-modules-in-non-standard-locations), [perlmonks](http://www.perl.com/pub/2002/05/14/mod_perl.html), [CPAN](http://search.cpan.org/~shay/perl-5.20.1/INSTALL#Relocatable_@INC)
