/*CMD
  command: /exi
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: π«exit
CMD*/

var stat = Bot.getProperty(""+user.telegramid+"")
if (stat=="ban"){
Bot.sendMessage("*β You are banned*");
return
}
var state = Bot.getProperty("BOT")
if (state=="π Turned OFF"){
Bot.sendMessage("*π Bot is currently OFF*");
}else{
Bot.runCommand("/mainf")
}
