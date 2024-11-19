const rules = [
{
  "id": "9dm_redirect_1",
  "priority": 1,
  "action": {
    "type": "redirect",
    "redirect": {
      "regexSubstitution": "http://www.9dmgamemod.com/thread-\\1-1-1.html"
    }
  },
  "condition": {
    "regexFilter": "^http://www.9dmgamemod.com/forum.php\.*tid=(\\d+)\.*$",
    "resourceTypes": ["main_frame"]
  }
}
  ];
  
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: ["9dm_redirect_1"],
    addRules: rules,
  }, function(){});