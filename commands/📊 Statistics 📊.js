/*CMD
  command: 📊 Statistics
  help: 
  need_reply: 
  auto_retry_time: 
  folder: mainmenu
  answer: 
  keyboard: 
  aliases: 
CMD*/

var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  .value()
  .toFixed(0)

let stat =
  "*📊 Total  : " +
  status +
  " Users*" "\n\n 👑Bot made by @vishuftw 👑"

Bot.sendMessage(stat)