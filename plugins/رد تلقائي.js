let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^نيزوكو$/i.test(m.text)) { 
     responses = [ 
 '*موجوده*✨️❤️‍🔥'  
     ];
    
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى النقطه*',  
     ];
            
        }else if (/^.مهام$/i.test(m.text)) { 
     responses = [ 
       '*اكتب .المهام*',  
     ];  
                     
        }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       '*موجوده بس اسمي روبين يا عاق*',  
     ];  
                 
        }else if (/^المطور$/i.test(m.text)) { 
     responses = [ 
       '*ديكو*',  
     ];  
                  
        }else if (/^ديكو$/i.test(m.text)) { 
     responses = [ 
       '*عمك + مطوري انا*',  
     ];  
                    
        }else if (/^. بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي روبين يا عاق*😮‍💨',  
     ];  
                     
        }else if (/^.بوت$/i.test(m.text)) { 
     responses = [ 
       '*اسمي روبين يا عاق*😮‍💨',
     ];  
                  
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
