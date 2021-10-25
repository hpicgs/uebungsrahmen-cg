# uebungsrahmen

Framework for web-based exercise, designed to be reusable between lectures. Set up to be used with WebGL/[webgl-operate](https://webgl-operate.org/) out of the box.

## dependencies

See [here](docs/dependencies.md) (summary: you'll need Node.js version 14 or 16 and git).

## quick start (for students)

Note: `./fw.sh` and `.\fw.bat` (abbreviated to `fw` below) are wrappers for `npm run --silent main --`, making commands shorter and avoiding errors ([forgetting the `--`](https://docs.npmjs.com/cli/v7/commands/npm-run-script)).

```sh
# install dependencies - for Node.js 16: add --legacy-peer-deps
npm install
# short version
npm i

# initialize working dir
fw init --lecture "My Lecture" --directory "../exercises" --authors "authorId1" "authorId2"
# short version
fw i -l "My Lecture" -d "../exercises" -a "authorId1" 

# import assignment
fw import -i "./import/assignment01.tgz"
# short version (will select most recent archive inside ./import)
fw im

# work on assignment
fw start
# short version
fw s

# export solution - see full command doc for note about included files
fw export --assignment "id"
# short version (will select most recently imported assignment)
fw ex
```

## quick start (for creating exercises)

```sh
# install dependencies
npm install
# short version
npm i

# initialize working dir
fw init --lecture "My Lecture" --directory "../exercises"
# short version
fw i -l "My Lecture" -d "../exercises"

# you can use one of the examples to initialize an exercise
cp -R "./examples/webglOperateExample" "../exercises/myAssignment"

# edit the assignments.json file to include the exercise
# see examples/assignments.json for an example
cp "./examples/assignments.json" "../exercises/assignments.json"

# work on assignment
fw start
# short version
fw s

# export assignment
fw exportAssignment --assignment "id"
# short version (will select most recently imported assignment)
fw ex
```

## grading

```sh
# import a submission, resetting the assignment before import
# note: only works if the assignment was imported,
# so probably not in your main code base.
fw importSolution --input "./import/submission.tgz" --reset
# short version (will select most recent archive inside ./import)
fw is -r
```

## full command documentation

See [here](docs/commands.md).

## improvements over v1:

- more generalized architecture -> usable e.g. for plain WebGL exercises
- separate framework and exercises -> fw reusable between lectures
- better support for embedded files (md reload, advanced latex)
- controls visible when in fullscreen view
- less dependencies
- dark theme
- add links to local files in assignment text
