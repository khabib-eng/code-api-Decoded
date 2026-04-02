### borwser dev viewpage = html,css,js(compiled to js from typescript(probably?),texture(of entities,items,blocks),items and block crafting recipies,ReCapcha,Adsfrom AdinPlays).

basically the files and .png images of gamemdes ,items textures and meta data,font awesome fonts,item meta data raw data about cdn and reCapcha ,mesh entity images(images or textures for both entity and for example the texture of the cape when u buy super),ERROR handeling(a ton of error handling),Adin Plays adds API ,view port management (different for mobile and computers)

about bloxd,s webpage setup - 

it uses react,firebase(for logins),font awesome,ReCapcha,Google Tag Manager (GTM,it keeps your code clean and separates your application logic from your marketing/analytics logic,used to check how many times someone clicked a button and when and how),a voxel-engine forked from fenomas and websockets for in game chat functions and lobbies .

the main logic,module details,functions,helper functions,APIs,fetched data and almost everything is either obfuscated or minified or non-readable by humans and its either obfuscated by a node.js module or by a tool like javascript Obfuscator.there are alsolike hundreds of files and tens of Folders and i cant pasteor copy them directly for SOME reason (O_o). So i will  have to explain the whole page with code examples from the dev tools page AND tell u how to do it :)
ALL OF THE INFO PUT HERE ARE FOR EDUCATIONAL PURPOSES (i respect the devs hardwork into making this game :])

# **How to get to the dev tools**
**Windows / Linux:**
- F12: The quickest single-key toggle.
- Ctrl + Shift + I: Opens the main DevTools window.
- Ctrl + Shift + J: Opens the DevTools directly to the Console (great for seeing your JS errors).
- Ctrl + Shift + C: Opens the Element Selector (allows you to click an item on the page to see its code immediately).
  
**Mac:**
- Cmd + Option + I: Opens the main DevTools window.
- Cmd + Option + J: Opens directly to the Console.
- Cmd + Option + C: Opens the Element Selector.

there are a ton of ways to do this as the browser ur using innitially does want u to see what a webpage does there are other ways to view it raw which show raw html,css,js togehter as source code but many wont understand and would have a heart attack reading it.
#### **in dev tools there are 9 parts**
- **elements**,
- **console**,
- **sources**,
- **network**,
- **performance**,
- **memory**,
- **application**,
- **privacy and security**,
- **lighthouse**(a google tool that lets u run a page for testing purposes on loadtime,performance,best habits etc).

 i would prefer the reader to just do a little research about each as it helps furthur but here i would be mainly talking and showing about in the ```console``` ```sources``` and maybe side notes on the others if needed.
