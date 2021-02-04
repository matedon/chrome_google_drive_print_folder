# gDrivePrint
![Logo (icon)](icon.png?raw=true "Logo (icon)")
### Google Drive Print Folder

This Google Chrome Extension is good for:
* Open more documents at once in a Google Drive Folder
* Invoke Print dialog on all opened tabs

This extension doesn't use Google API just css selectors.

### Sources
* Button svg icons are Font Awesome Free icons (c) https://fontawesome.com/
* Background scripts are using jQuery v3.3.1 minified https://jquery.com/
* Extension based on https://github.com/MahbbRah/chrome_extension_boilerplate
* The tab switch method based on the code of Auto Tab Switch by zhenbiaoqiu@qq.com
 https://chrome.google.com/webstore/detail/auto-tab-switch/iagkccjmbfoijhedememehigdjocdkhd
 
 ## Things to do
 * Open all docs works every time - OK
 * Print all open tabs works occasionaly
    * Need to investigate
    * May other Chrome Extensions cause the problem
    * Instead of injecting js code Chrome should give a proper print API where
        * Extension can call print action
        * Set paper size
        * Set count of prints
        * Set all other attributes (what can be set manually in the print dialog now)