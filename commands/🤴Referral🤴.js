
/*CMD
  command: 🤴Referral🤴
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Reffer
  answer: 
  keyboard: 
  aliases: 
CMD*/
// you have to change nothing here do it from admin panel

let stat = Bot.getProperty(""+user.telegramid+"");

if (stat=="ban"){
Bot.sendMessage("*You're Ban*");
}else{

let res = Libs.ResourcesLib.userRes("referral");
let reflink=Libs.ReferralLib.currentUser.getRefLink(""+bot.name+"","Bot");
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
let cur = Bot.getProperty("cur")
let rebon = Bot.getProperty("rebon")
Bot.sendMessage("*🚧 Total Invites : "+refList.length+" Users\n\n👲 Per Referral "+rebon+" "+cur+"\n\n🔗 Referral Link ⬇️\n"+reflink+"*");

}