#!/usr/bin/env node

import program from 'commander';
import { commandController, azureDevOpController, gitHubParser } from './commands/commands.js';

/**
 * CLI command ADO-org
 *
 * Usage:
 * export ADO_PAT=<PAT>
 * ADO-org --organization <org>
 *
 * or
 *
 * ADO-org --organization <org>
 * <input PAT>
 *
 * or
 *
 * ADO-org --organization <org> --token <PAT>
 * <input PAT>
 *
 */
 program
   .command("ADO-org")
   .option("-o, --organization <organization>", "Organization Name")
   .option("-t, --token <PAT>", "Personal Access Token")
   .option("-p, --project <project>", "Project Name")
   .alias("a")
   .description("Fetch AzureDevOps Organization Metrics")
   .action(async (options) =>
     commandController(
       process.env.ADO_PAT,
       azureDevOpController,
       options,
       "AzureDevOps"
     )
   );

/**
* CLI command GH-org
*
* Usage:
* export GH_PAT=<PAT>
* GH-org --organization <org>
*
* or
*
* GH-org --organization <org>
* <input PAT>
*
* or
*
* GH-org --organization <org> --token <PAT>
* <input PAT>
*/
program
  .command("GH-org")
  .option("-o, --organization <organization>", "Organization Name")
  .option("-t, --token <PAT>", "Personal Access Token")
  .alias("a")
  .description("Fetch GitHub Organization Metrics")
  .action(async (options) =>
    commandController(process.env.GH_PAT, gitHubParser, options, "GitHub")
  );

program.parse(process.argv);
