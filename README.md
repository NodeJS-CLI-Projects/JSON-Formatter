JSON Formatter CLI

A simple command-line JSON formatter built with Node.js.

This project was created as part of the roadmap.sh JSON Formatter project.

The tool reads a JSON file provided through the command line, parses its contents, and prints the formatted JSON to the terminal.

Features
Reads the JSON file path from process.argv.
Reads files using node:fs/promises.
Parses JSON using JSON.parse().
Formats JSON using JSON.stringify().
Handles missing file paths.
Handles files that cannot be read.
Handles invalid JSON.
Prints errors to stderr.
Sets a non-zero exit code when an error occurs.
Requirements
Node.js 18+
A terminal or command prompt
Installation

Clone the repository:

git clone https://github.com/NodeJS-CLI-Projects/JSON-Formatter

Navigate to the project directory:

cd <project-directory>

No external dependencies are required.

Usage

Run the program by providing the JSON file path:

node app.js user.json
Valid JSON

Example user.json:

{
  "name": "Ava",
  "role": "Developer",
  "skills": [
    "JavaScript",
    "Node.js"
  ]
}

Output:

{
  "name": "Ava",
  "role": "Developer",
  "skills": [
    "JavaScript",
    "Node.js"
  ]
}
Invalid JSON

Example broken.json:

{"name":"Ava","role":"Developer","skills":["JavaScript","Node.js"]

Run:

node app.js broken.json

Output:

error: invalid JSON in file: broken.json
File Not Found
node app.js missing.json

Output:

error: could not read file: missing.json
No File Provided
node app.js

Output:

error: please provide a JSON file path
Technologies Used
Node.js
JavaScript
process.argv
node:fs/promises
JSON.parse()
JSON.stringify()
What I Practiced

This project helped me practice:

Reading command-line arguments.
Reading files asynchronously with Promises.
Parsing JSON data.
Handling JSON.parse() errors.
Handling file system errors.
Using try...catch.
Writing errors to stderr.
Setting process.exitCode.
Formatting JSON output.
Project

Roadmap.sh project:

https://roadmap.sh/projects/nodejs-json-formatter