import { argv } from 'node:process';
import path from 'path';

const args = argv.slice(2);
export const {pkg} = reflex(args,
	/**
	 * @constant
	 */
	[
	{
		regExp : /\bdonala|gpt\b/,
		variable : "pkg",
	},
]);

import { reflex,obsProjectRootDir, } from './toolkit';
