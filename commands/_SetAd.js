/*CMD
  command: /SetAd
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin @vishuftw panel
  answer: 📌*Send Id*
  keyboard: 
  aliases: 
CMD*/

var key = "1724473563"
if (user.telegramid== key){

Bot.sendMessage("✅ Done: Admin Id is\n "+""+message+"");
Bot.setProperty("admin" , message,"string")

}else{
Bot.sendMessage("*❌ You Are Not Allowed To Set Admin*");
}
