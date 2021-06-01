/*CMD
  command: With1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Withdrawal
  answer: 
  keyboard: 
  aliases: 
CMD*/

var add = User.getProperty("TRXwallet")
var amo = parseInt(message)
User.setProperty("amo", amo ,"string")
var tokenid = "1000088"
// token id that you want to set as withdraw token

HTTP.post({
  url: "https://your app name here.herokuapp.com/post",
  success: "/onLoading ",
  body: { address: add, amount: amo, tokenid: tokenid }
})
var balance = Libs.ResourcesLib.userRes("balance")
balance.add(-amo)
