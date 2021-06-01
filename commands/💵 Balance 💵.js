/*CMD
  command: 💵 Balance 💵
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Main Menu
  answer: 
  keyboard: 
  aliases: 
CMD*/

// dont make any changes here you have to do this from admin panel

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

var balance = Libs.ResourcesLib.userRes("balance")
var lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
let cur = Bot.getProperty("cur")
Bot.sendMessage("*👤 User : "+user.first_name+"\n\n💰 Balance : "+balance.value().toFixed(2)+" "+cur+"\n\n🤴Refer And Earn More*")
}