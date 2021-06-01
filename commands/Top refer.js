  
/*CMD
  command: Top refer
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Reffer
  answer: 
  keyboard: 
  aliases: 
CMD*/
// dont make any changes here sok

let msg = "*Top 20 List*:\n";
let users = Libs.ReferralLib.topList.get(20);

for(var index in users){
  let u = users[index];
  msg+= "@" + u.username + ": " + u.count + "\n";
}

Bot.sendMessage(msg);