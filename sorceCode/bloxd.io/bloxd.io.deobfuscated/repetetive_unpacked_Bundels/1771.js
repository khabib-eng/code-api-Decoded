export let b = 0;
setInterval(() => {
  const CC = [1, "prototype", "toString", "includes", "native", 0, "call", "now", "log"];
  b = (Function[CC[1]][CC[6]][CC[2]]()[CC[3]](CC[4]) ? CC[5] : CC[0]) || (WebSocket[CC[1]].send[CC[2]][CC[2]]()[CC[3]](CC[4]) ? CC[5] : 3) || (Function[CC[1]][CC[6]][CC[2]]()[CC[3]](CC[4]) ? CC[5] : 4) || (WebSocket[CC[1]].oldSend ? 5 : CC[5]) || (Date[CC[7]][CC[2]]()[CC[3]](CC[4]) ? CC[5] : 6) || (Date[CC[7]][CC[2]][CC[2]]()[CC[3]](CC[4]) ? CC[5] : 7) || (Date[CC[7]][CC[2]][CC[2]]().startsWith("()") ? 8 : CC[5]) || (String[CC[1]][CC[3]][CC[2]]().indexOf(CC[4]) === -CC[0] ? 9 : CC[5]) || (!console[CC[8]][CC[2]]()[CC[3]](CC[4]) && console[CC[8]][CC[2]]()[CC[3]]("\n") ? 10 : CC[5]) || (void 0 !== console[CC[8]]() ? 11 : CC[5]);
}, 5500);