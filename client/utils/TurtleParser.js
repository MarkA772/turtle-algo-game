/**
 * This function will recursively parse the input string into an array of
 *   turtle commands and arguments.
 * 
 * User command syntax:
 * 
 * forward/fd [num]                 - move turtle forward/draw line forward
 * back/bk [num]                    - move turtle back/draw line back
 * right/rt [num]                   - rotate turtle right num degrees
 * left/lt [num]                    - rotate turtle left num degrees
 * clear/clr                        - clear screen
 * loop/lp [num] {[commands list]}  - loop through commands num times
 * penup/pu                         - turtle will move without drawing
 * pendown/pd                       - default behavior, turtle will draw when moving
 * 
 * Eg:
 * Input from user: lt 90 lp 4 { fd 100 rt 90 }
 * Eventual function call expected: dispatch('lp', [1, ['lt', 'lp'], [90, [4, ['fd', 'rt'], [100, 90]]]])
 * Output: ['lp', [1, ['lt', 'lp'], [90, [4, ['fd', 'rt'], [100, 90]]]]]
 * Unique output: ['lt', 'lp'], [90, [4, ['fd', 'rt'], [100, 90]]]
 */

function turtleParser(str) {
  const commandArray = splitCommands(str);
  // Loop method already has the functionality we need, so every command will be
  //   parsed as though it was in loop to be executed once.
  return ['lp', [1, ...parseCommands(commandArray)]];
}

function parseCommands(commandArray) {
  const commands = [];
  const args = [];
  while (commandArray.length > 0) {
    const currentCommand = commandArray.shift().toLowerCase();
    switch (currentCommand) {
      case 'left':
      case 'lt':
        commands.push('lt');
        args.push(commandArray.shift());
        break;
      case 'right':
      case 'rt':
        commands.push('rt');
        args.push(commandArray.shift());
        break;
      case 'forward':
      case 'fd':
        commands.push('fd');
        args.push(commandArray.shift());
        break;
      case 'back':
      case 'bk':
        commands.push('bk');
        args.push(commandArray.shift());
        break;
      case 'clear':
      case 'clr':
        commands.push('clr');
        args.push('');
        break;
      case 'loop':
      case 'lp':
        commands.push('lp');
        const loopCmds = [commandArray.shift(), ...parseCommands(commandArray.shift())];
        args.push(loopCmds);
        break;
      case 'penup':
      case 'pu':
        commands.push('pu');
        args.push('');
        break;
      case 'pendown':
      case 'pd':
        commands.push('pd');
        args.push('');
        break;
    
      default:
        break;
    }
  }

  return [commands, args];
}

function splitCommands(str) {
  str = str.trim();
  const commandsList = [];
  let currentCommand = '';
  let i = 0;
  while (i < str.length) {
    const c = str[i];
    if (c === ' ' || c === '\n') {
      if (currentCommand.length > 0) {
        commandsList.push(currentCommand);
        currentCommand = '';
      }
    } else if (c === '{') {
      // Recursively call splitCommands on everything in braces
      let startIndex = i++;
      let bracketCount = 1;
      while (i < str.length) {
        if (str[i] === '{') bracketCount++;
        if (str[i] === '}') bracketCount--;
        if (bracketCount === 0) break;
        i++;
      }
      commandsList.push(splitCommands(str.slice(startIndex + 1, i)));
    } else {
      currentCommand += c;
    }
    i++;
  }
  if (currentCommand.length > 0) {
    commandsList.push(currentCommand);
  }
  return commandsList;
}

export default turtleParser;