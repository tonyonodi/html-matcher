'use strict';

import token from './token';
import { eatSection, toCharCodes } from './utils';

const open  = toCharCodes('<!--');
const close = toCharCodes('-->');

/**
 * Consumes HTML comment from given stream
 * @param  {StreamReader} stream
 * @return {Token}
 */
export default function(stream) {
	const start = stream.pos;
	if (eatSection(stream, open, close, true)) {
		const result = token(stream, start);
		result.type = 'comment';
		return result;
	}

	return null;
}
