const Discord = require('discord.js');

    module.exports = bot => {
        console.log(`${bot.user.username} Est Online`)
       bot.user.setActivity("Bonjour !", {type: "ONLINE"});
   
       let statuses = [
           `aider ${bot.guilds.size} serveurs !`,
           "!help si vous avez besoin d'aide !",
           `regarder ses ${bot.users.size} utilisateurs !`,
           "ZyGout#6379 pour des idées de commandes !"
       ]
   
       setInterval(function() {
           let status = statuses[Math.floor(Math.random() * statuses.length)];
           bot.user.setActivity(status, {type: "PLAYING"});


     
     
     
     
     
     
     
     
      }, 5000)

   
   }