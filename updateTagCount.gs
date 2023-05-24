//grab sheets with the old and new counts
const ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('tag list');
const newInfo = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('updated tag list');

//create an array of updated tags and counts
let updatedTags = newInfo.getDataRange().getValues();   

const tagCount = ss.getLastRow();


function updateTagCount(){
  for (var i = 2; i <= tagCount; i++){

    //get tag name
    var currentTag = ss.getRange(i, 1).getValue();
    //search for key match in updated tag list
    var updatedTag = updatedTags.find((updatedTag) => updatedTag[0] === currentTag);
    
    
    if (updatedTag){ // if tag is found update the event # by using the value of the update tag key. 
    var newTagCount = updatedTag[1];
    
    ss.getRange(i,8).setValue("count updated");
    
    ss.getRange(i, 2).setValue(newTagCount).setBackground("#9BE1FF");
    Logger.log(updatedTag[0] + " has been updated!")
    } else {

      ss.getRange(i,8).setValue("not in updated tag list");      
     
      
      ss.getRange(i, 1, 1, 8).setBackground("#FD9797");
      Logger.log(currentTag + " not found in updated tags")
    }
}

}
