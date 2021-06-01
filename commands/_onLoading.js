/*CMD
  command: /onLoading
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Instant withdraw
  answer: 
  keyboard: 
  aliases: 
CMD*/

var tx = content
var user_link =
  "[" +
  user.first_name +
  "]" +
  "(" +
  "tg://user?id=" +
  user.telegramid +
  ")";
var txnlink =
  "https://tronscan.org/#/transaction/" +
  content +""
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get();
var add = User.getProperty("TRXwallet")
var amo = User.getProperty("amo")
Bot.sendMessage(
  "✅* Paid automatically* \n ▪️ User Id : <code>" +
    user.telegramid +
    "</code>" +
    "\n🎤 <b> UserName: " +
    "@" +
    user.username +
    "\n Recipient's Name: " +
    user.first_name +
    "\n\nREFER AND EARN MORE" +
    "\n" +
    "🎪 Requester's id: " +
    user.id +
    "\n\n" +
    "🏆Hash\n  -  :https://tronscan.org/#/transaction/" +
    content
)

Api.sendMessage({
  chat_id: "@atronftwsutopayment",
  text:
    "✅ New successful Withdraw\n\n⭐ Amount - "+amo+" coin name\n🦁 User - @"+user.username+"\n💠 Wallet - "+add+"\n☎️ User Referrals = "+refList.length+"\n ☘Transaction ID - "+txnlink+" \n\n🏖 Bot Link - @"+bot.name+"\n⏩ Please Check Your Wallet",
  disable_web_page_preview: true,reply_markup: { inline_keyboard: [[{ text: "💠 Payment ID", url: "https://tronscan.org/#/transaction/"+content+"" },{ text: "🍀 Bot Link", url: "https://t.me/"+bot.name+"" }],
]}
})
Bot.sendMessageToChatWithId(
    1724473563,
  "✅ Withdraw successful in bot @" +
    bot.name +
    "\n\n💳 Amount: " +
    amo +
    " enter coin name \n👜 Wallet : " +
    add +
    "\n🕹️ ☘TxID : https://tronscan.org/#/transaction/" +
    tx +
    "\n\n💹 Now check your Tron Wallet.\nUser id : " +
    user.telegramid+""
)
// enter your user id from rose bot