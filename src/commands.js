/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const AWW_COMMAND = {
  name: 'awwww',
  description: 'Drop some cuteness on this channel.',
};

export const INVITE_COMMAND = {
  name: 'invite',
  description: 'Get an invite link to add the bot to your server',
};

// New Command: /cat
export const CAT_COMMAND = {
  name: 'cat',
  description: 'Get a random cat image',
};

// New Command: /echo [message]
export const ECHO_COMMAND = {
  name: 'echo',
  description: 'Echoes your message back to you',
  options: [
    {
      name: 'message',
      description: 'The message to echo',
      type: 3, // String type
      required: true,
    },
  ],
};