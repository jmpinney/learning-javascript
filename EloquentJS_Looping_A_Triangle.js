/* Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it. *\

stringhash = "#"

for (let number = 0; number <= 7; number = number + 1) {
 if (number == 1)
 	{console.log(stringhash);
 	}
 else if (number >= 1)
 	{console.log(stringhash += "#");
 	}
 }


/*
Mine works, but here's the actual solution from book. It is far more eloquent than my solution:

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

 *\

