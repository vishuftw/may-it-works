/*CMD
  command: 🏖 Refferal
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Reffer
  answer: 
  keyboard: 
  aliases: 
CMD*/

var m = Bot.getProperty("m")
var ref = Bot.getProperty("ref")
let res = Libs.ResourcesLib.userRes("referral")
let reflink = Libs.ReferralLib.currentUser.getRefLink(
  "multicoin_autopay_bot",
  "Bot"
)
let lib = Libs.ReferralLib
var refList = lib.currentUser.refList.get()
var button = [[{ text : "🔍My Referal Link" , callback_data: "🤴Referral🤴"}],[{text : "🎓Top Referal" , callback_data: "Top refer"},{text : "🎖️ Check Referral" , callback_data: "refcheck"}]];
var text = "*🏠Welcome To Invite And Earn\n\n🎙️Per Referral- 50000 ATRON/TWEET \n\n👥 Total Invites : " +
    refList.length +
    " Users *"
// enter your currency name and amount

Api.sendPhoto({
  photo: "https://images.app.goo.gl/mNGfnuJ4g7wtc2Vw9",
  caption:
    text,
  parse_mode: "Markdown",
  reply_markup: {
    inline_keyboard: button
  }
})
// dont change this segment