/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: join
  answer: 
  keyboard: 
  aliases: 
CMD*/

var button = [{ title: "✅ Dᴏɴᴇ", command: "join" }]
Bot.sendInlineKeyboard(
  button,
  "_⭐You Must Join Our Channels to Start the Bot:\n\n💠Join Our_ [Main Channel](https://t.me/therealgemhunter)\n_💠Join Our_ [Partner's Channel](https://t.me/Crypto_Decko)\n_💠Join Our_ [Partner's Channel](https://t.me/Unknown_Looterz)\n_💠Join Our_ [Promoter Channel](https://t.me/legitlootonly)\n_💠Join Our_ [Promoter Channel](https://t.me/LegitAirdrops010)\n\n🚀_Join Our_ [Payment Channel](https://t.me/TheGemhunder",{disable_web_page_preview: "true"}
)

var user_link = Libs.commonLib.getLinkFor(user)

function hello(message) {
  var greetings = ""

  Bot.sendMessage(greetings + message)
}

function doTouchOwnLink() {
  Bot.sendMessage("*❌You're Trying To Invite You're Self *")
}

function doAttracted(channel) {
  hello("Referal: " + channel)
}

function doAtractedByUser(refUser) {
  hello("")
  Bot.sendMessageToChatWithId(
    refUser.chatId,
    "*💥 Nᴇᴡ Rᴇғᴇʀʀᴀʟ - *" +user_link+"*\nReward only if user joins our channels!*"
  )
}

function doAlreadyAttracted() {
  Bot.sendMessage("*🥳You Already Started The Bot *")
}

var trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAtractedByUser: doAtractedByUser,
  onAlreadyAttracted: doAlreadyAttracted
}

Libs.ReferralLib.currentUser.track(trackOptions)
var welco = User.getProperty("welco")
if (welco == undefined) {
  var status = Libs.ResourcesLib.anotherChatRes("status", "global")
  status.add(1)
Bot.sendMessageToChatWithId(1221302065, "*🚦NEW USER ALERT🚦\n\n🔍Name: *"+user_link+"*\n\n♨️ID: "+user.telegramid+"*")}
//enter your user id get it from reose bot by sending /info 

  User.setProperty("welco", user.telegramid, "text")
