var Message = require('../Message.js').Message;
var EncoderConstructor = require('../EncoderConstructor.js').EncoderConstructor;
var DecoderConstructor = require('../DecoderConstructor.js').DecoderConstructor;

function PINGREQ() {
	PINGREQ.super_.call(this);
};

require('util').inherits(PINGREQ, Message);

PINGREQ.prototype.write = function(buf, offset) {
	buf[offset] = Message.types.PINGREQ << 4;
	buf[offset + 1] = 0;

	return offset + 2;
};

PINGREQ.prototype.read = function(buf, offset, len) {
	if(buf[offset + 1] !== 0)
		throw new Error('PINGREQ must be zero-body');

	return offset + 2;
};;

exports.PINGREQ = PINGREQ;
