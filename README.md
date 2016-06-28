# OK Coders Back-End Course

### Overview

Our goal is to learn programming for the server (i.e back-end programming). This
is a broad topic, so specifically we will learn how to gather, store, and serve
data. We will gather data by scraping a website, store it in a database, and
stand-up a restful api for others to consume the data we stored.

Technologies we will use throughout the course to do this:

- javascript: [javascript?](https://www.javascript.com/), [mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript), [eloquentjs](http://eloquentjavascript.net/)
- bash: [bash](https://www.gnu.org/software/bash/), [command line](http://linuxcommand.org/tlcl.php)
- [node](https://nodejs.org/en/)
- [mongodb](https://www.mongodb.com/)
- [html](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [css](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [git](http://rogerdudler.github.io/git-guide/)

Frameworks we will probably use (frameworks move pretty fast, a new one might
come out that we may like more):

- [lodash](https://lodash.com/)
- [mongoose](http://mongoosejs.com/)
- [express](http://expressjs.com/)
- [request](https://github.com/request/request)
- [cheerio](https://github.com/cheeriojs/cheerio)
- [async](https://github.com/caolan/async)

### General tenets for the course:

  - Get comfortable with not knowing (and be honest about what you do not know)
  - Through knowing how to look things up, we gain our comfort in not knowing
  - Respect the space we are in and the people around you

### Communication

- [Slack Channel](https://okcokcoders.slack.com), note on slack the previous course is
  on there, but I made a private summer session channel.
- Email: okcoders@gmail.com

### Expectations:

If you are an adult and are taking this course, I do not believe any high
school/college type tricks are needed (i.e grading homework, making up
class, etc.), as you are willfully doing this and are already putting in effort
because you want to. That being said, we do have a graduation showcase, and we
do give out certificates, and this is something you can put on your linkedin. If
you want to be able to do any of these things, 80% attendance is required (i.e you
can miss 3 classes).

We will have homework, though I strongly suggest independent reading of the
materials I provide for each topic we cover. If you are new to programming, at
least 1 hour of reading a day is a good guideline. There will usually not be answers
for the homework (as there are a lot of ways to do things), but if you need
help, the mentors, myself, and the slack channel are available to you. Do not be
afraid to reach out!

### Structure

I will update github as we go through the course with new material. The material
is put in a folder like 01-javascript - the syllabus is the best guide to find
the material we covered in a given class. In each of those folders you will also
see a folder called example/ in there I will stick anything I write during the
class, which includes answers to any in class exercises we do.

Homework is setup by week, and you can find the homework in the exercises
folder. I feel doing homework between Tuesday and Thursday to be a little
onerous, so my expectation is that you are doing the homework for each week over
the weekend.

Eventually we will start to have a lot of code written and we will want to build
on top of that. I will have some kind of project folder where we will start to
accumulate a coherent project. For example, we will have an express application
that serves from our mongo db, and we will have a scraper that is scheduled to
scrape from some site of our choosing.

I do enjoy questions during class. There is a ton of material/resources on the
internet one can use to learn to program, but none of it is interactive. My hope
is this course is a place you can ask questions and get some human interaction
with other programmers if you are trying to make the switch.

### Sites we could scrape

- [County Assessor](http://www.oklahomacounty.org/assessor/SearchMethod.htm)
- [IMDB](http://www.imdb.com/), [someone already did what we will be doing](http://www.omdbapi.com/)
- [Pitchfork](http://pitchfork.com/) (my favorite website)
- [Oklahoma](https://www.ok.gov/)
- [Netflix](https://www.netflix.com/), because they removed their public api

### Sites we wouldn't need to scrape

- [Twitter](https://dev.twitter.com/overview/documentation)
- [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)
- [Github](https://api.github.com/)
- [Goodreads](https://www.goodreads.com/api)
- [Spotify](https://developer.spotify.com/web-api/migration-guide/)
- [Worldbank](http://data.worldbank.org/developers)
- [Weather Underground](https://www.wunderground.com/weather/api/)

## Syllabus

<table>
	<thead>
		<tr>
			<th>Week 1</th>
			<th>First Hour</th>
			<th>Second Hour</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1.1</td>
			<td>Class Introduction</td>
			<td>Javascript: Introduction</td>
		</tr>
		<tr>
			<td>1.2</td>
			<td>Javascript: Variables and Values</td>
			<td>Bash: Introduction</td>
		</tr>

		<tr>
			<th colspan="3" align="left">Week 2</th>
		</tr>
		<tr>
			<td>2.1</td>
			<td>Javascript: Program Structure</td>
		</tr>
		<tr>
			<td>2.2</td>
			<td>Git</td>
			<td>Javascript: Arrays and Objects</td>
		</tr>

		<tr>
			<th colspan="3" align="left">Week 3</th>
		</tr>
		<tr>
			<td>3.1</td>
			<td>Javascript: Functions</td>
		</tr>
		<tr>
			<td>3.2</td>
                        <td>Node: Introduction</td>
		</tr>
		<tr>
			<th colspan="3" align="left">Week 4</th>
		</tr>
		<tr>
			<td>4.1</td>
			<td>Node: npm and require</td>
			<td>Databases: Modeling and Introduction</td>
		</tr>
		<tr>
			<td>4.2</td>
		</tr>
		<tr>
			<th colspan="3" align="left">Week 5</th>
		</tr>
		<tr>
			<td>5.1</td>
		</tr>
		<tr>
			<td>5.2</td>
		</tr>
		<tr>
			<th colspan="3" align="left">Week 6</th>
		</tr>
		<tr>
			<td>6.1</td>
		</tr>
		<tr>
			<td>6.2</td>
		</tr>
		<tr>
			<th colspan="3" align="left">Week 7</th>
		</tr>
		<tr>
			<td>7.1</td>
		</tr>
		<tr>
			<td>7.2</td>
		</tr>
		<tr>
			<th colspan="3" align="left">Week 8</th>
		</tr>
		<tr>
			<td>8.1</td>
		</tr>
		<tr>
			<td>8.2</td>
		</tr>
	</tbody>
</table>

