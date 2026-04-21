All the discovered resources credits and thanks goes to @Khabib-eng.

the folders and files all date to start of April , Bloxd.io is a fast changing and updateing game , files names,folder order , config files,files related to skins , player info , item and blocks can and would have changed by the time you would read this, however major info related to player,api,blocks and items ,skins and more majorly wouldnt have changed alot . 

Tools used - i used webcrack on all the fils  first there were 2 main js files which  couldnt be run with demangel and jsx options on  so i left a comment explaining it in those  files , i also recommend running terser on all files with this command just replace index.js  with your file name , i did run this forindex.js only and it did show improvment , but my laptop (with pentium chip) cant run it on so many files . 
```
npx terser index.js --compress "dead_code=true,evaluate=true,loops=true" --no-mangle --format "beautify=true,comments=all" --output ./terser_results/index.tersed.js
```
if your PC has a powerful GPU or even a normal gaming GPU i would recommend on trying to run  LLMs on the deobfuscated files as LLMs can rename variables in MASSIVE file contect whichi believewill be the closest anyone humanly can get with reverse einginearing , using C and C++ tools which decode the whole js fles largely is also possible but not recomended for users who never used C before as its too low level . 



Folder Info 

there are 2 main folder bloxd.io , which contains the orignal main Obfuscated code and bloxd.io.deobfuscated , which contains the same files and  folders but deobfuscated and un-minified.

Better representation of folder system 

bloxd.io.deobfuscated - is the main folder with deobfuscated folder with main js files (deobfuscated) and other deobfuscated files related to npm and _esmodules . all the files names with .chunk.js in last are the main files with all the Numbered (ex-17.js,18.js,91.js etc) and the index.js being the modules / exported variables and data werestored in these , NOTE that "repetetive_unpacked_Bundels" folder has all  the same info and data as the numbered .js files and index.js being the main one , but i waanted to show some raw unpacked data so i kept a unpacked version of it there,(thats why index.js file is missing in  "repetetive_unpacked_bundels" folder as i didnt run webcrack on each of them unlike the other numbered files which i did (thus webcrack was able to connect the dots and formed a index.js file)).

npm_modules.metaData - this folder contains ONLY 1 (bytebrew) of the obvious npm modules functions etc as the other npm modules functions and data can be found in "repetetive_unpacked_Bundels".
what is bytebrew??...
ByteBrew is an all-in-one mobile game growth platform designed for developers to manage their game's entire lifecycle—from player acquisition to monetization—all within a single, lightweight SDK.
 below are its MAIN uses  :                   

-Developers use ByteBrew to replace multiple different services (like Flurry, AppsFlyer, or Firebase) with one tool. Here are its primary uses:

-Real-Time Analytics: Tracking player behavior, daily active users (DAU), retention rates, and session lengths as they happen.

-Mobile Attribution: Identifying where players are coming from (e.g., which Facebook or Google ad led them to download the game) without paying for a third-party attribution provider.

-Monetization Tracking: Monitoring both In-App Purchases (IAP) and Ad Revenue. It includes receipt validation to ensure the revenue reported is legitimate.
+1

-Live Ops & Remote Configs: Making changes to the game (like adjusting enemy health or launching a holiday event) remotely without requiring players to download an app store update.

-A/B Testing: Running experiments to see which game features or difficulty levels lead to better player retention or higher spending.

-Push Notifications: Sending targeted messages to specific segments of players to bring them back into the game.

World_generation.js - this files name was "aa94c2b6-c11a-4885-9f92-601f13cf13c9" which at first glance was and is random but even in obfuscated if you have done basic Math (related to 3D object modeling ,3D shapes, or even just usethe Math.js library),you would under stand that this is the file which generates chunks andworld . after running  webcrack , the variables name still be random(example-p30,p114,v15), these variables names are Unique and if you open VS code you can track EXACTLY what,how,when and how chunk generation and world generation works , in most cases nmes related to "p" are actually aargument or a updated variables passed down in a class,s methods and variables with "c" or "E" in names are mainly classes or objects and and on a side note the main functions which are or will  be used,in both world generation,loot generation,ruins genration,biome generation,even tree  canopy generation are in proper english not hidden variables butthey take previously declared number variables  in argumentsbutyou caan still decode it fully as its already webcrackedand understandable (ex=noise2D,noise3D,createBlockIdMaping,set,get,remove,checkStoredInfo,iterate,addStandardCanopyToChunk) and variables with "v"  in names are actually either a declared Number or a higly calculated variabe which depends on the main function arguments . example 

for v = this is a subset of example of the start of main functions declaration , we can see that p3 is a function that is passed down inside the main function (as a callback),here the v variables are declared minly in relation to the parent functions arguments.for best understanding of this complex maths and World Gen logic i would Definetly prefer you to read it part by part with VS codes,s variable word search and tracking .
```
var vO = {
    3: (p, p2, p3) => {
      var vP3 = p3(10);
      var v = p3.n(vP3);
      const v2 = (Math.sqrt(3) - 1) * 0.5;
      const v3 = (3 - Math.sqrt(3)) / 6;
      const v4 = 1 / 3;
      const v5 = 1 / 6;
      const v6 = (Math.sqrt(5) - 1) / 4;
      const v7 = (5 - Math.sqrt(5)) / 20;
      const v8 = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]);
      const v9 = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]);
```

my laptop started lagging given its not even meant for programming and suffers with running chrome lmao so i must end this note here , however you can ask me question in issues but all i would dois expalin or tell you the path onhow to do it not do it myself for you(reader)













