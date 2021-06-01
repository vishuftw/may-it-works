/*CMD
  command: /broadla
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Send the message
  keyboard: 
  aliases: 
CMD*/

if (user.telegramid == "1680884053"){
    //your telegram id this is at the end of your referral link)
    Bot.setProperty("adminBroadcast", message)
    Bot.runAll({
      command: "broadcastforad"
    })
    Bot.sendMessage("✅Message sent to all active members")
  } else {
   Bot.sendMessage("you are not allowed to use this")
  }
  
  
  