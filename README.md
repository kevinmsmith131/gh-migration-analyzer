# GitHub Migration Analyzer

The Migration Analyzer is a command-line (cli) utility tool that helps customers migrating repositories to GitHub plan for and size their migration in terms. The tool currently supports migrations from Azure DevOps and GitHub Cloud as a source to GitHub Cloud as a destination. 

The tool is for use alongside GitHub's Enterprise Importer (GEI). It is a self-service tool for customers to gauge how much data they will need to migrate without having to do a dry run migration with GEI itself. 
## Environment

The tool runs in a [Node.js](https://nodejs.org/) runtime environment.  It requires version 14 or greater. 
## Installation

Use the command ```cd <pathname of desired parent directory> && git clone https://github.com/github/migration-prep-tool.git``` to change to the desired parent directory and install the tool. 

## Personal Access Tokens

You will need to generate a Personal Access Token (PAT) within your source (Azure DevOps or GitHub). The following scopes are required:

* For Azure DevOps: `read` for `Code`.
* For GitHub Cloud: `repo`.  
## Dependencies

Use the command ```cd <pathname of migration analyzer directory> && npm install``` to change to your ```migration-analyzer``` directory.  This will install the following project dependencies:

- [commander](https://www.npmjs.com/package/commander)
- [csv-writer](https://www.npmjs.com/package/csv-writer)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [ora](https://www.npmjs.com/package/ora)
- [p-limit](https://www.npmjs.com/package/p-limit)
- [prompts](https://www.npmjs.com/package/prompts)

## Usage

Usage information about the tool is available with the help command. 
````
node src/index.js help
````

Fetch Azure DevOps organization metrics and write to CSV. 
````
node src/index.js ADO-org [options]

Options:
  -p, --project <project name> Azure DevOps project name (can pass either project or organization, not necessary to pass both)
  -o, --organization <organization> Azure DevOps organization name
  -t, --token <PAT> Azure DevOps personal access token
  -h, --help Help command for Azure DevOps options
````

Fetch GitHub Organization Metrics and write to CSV
````
node src/index.js GH-org [options]

Options:
  -o, --organization <organization> GitHub organization name (required)
  -t, --token <PAT> GitHub personal access token
  -h, --help Help command for GitHub options

````

You can alternatively export your PAT as environment variable if you do not want to pass it in with the command. 

````export GH_PAT=<PAT>```` or ````export_ADO=<PAT>````

The tool will export CSV files a new directory within the project's root directory. If GitHub is the source, the tool will export two CSV files: one containing a list of repositories with the number of Pull Requests, Issues, Projects, and whether wikis are enabled. The other will contain organization-level rollup metrics (number of repostories, pull requests, issues, and projects). If Azure DevOps is the source, the CSV will list each project, and the repositories and pull requets in each. 
## Project Roadmap

The current areas of focus for the project are:
- [ ] Achieving complete code coverage with unit tests
- [ ] Allowing the command ```migration-analyzer``` to be run instead of ```node src/index.js```
- [ ] Adding error handling for when an ADO repository contains a large binary that exceeds the size limit

In the future, the following areas of focus will be added:
- [ ] Create a new way to distribute and run the tool, such as a Docker image

## Contributions

This application was originally written by Aryan Patel ([@arypat](https://github.com/AryPat)) and Kevin Smith ([@kevinmsmith131](https://github.com/kevinmsmith131)). See [Contributing](CONTRIBUTING.md) for more information on how to get involved. 
