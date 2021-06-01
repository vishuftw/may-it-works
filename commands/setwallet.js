/*CMD
  command: setwallet
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Extra
  answer: _✏️Send your Lovecoin Address from TronLink Pro_
  keyboard: 
  aliases: 
CMD*/

if (message.length == 34) {
    User.setProperty("TRXwallet", data.message, "string")
    Bot.sendMessage("*🔍 Wallet set To :* " + data.message + "")
  } else {
    Bot.sendMessage(
      "🖊 Error: This is not a wallet address! Send /start to return to the menu, or send a correct address"
    )
  }