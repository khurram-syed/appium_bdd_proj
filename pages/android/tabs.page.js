class Tabs{
  get viewsBtn(){return $('//*[@text="Views"]')}
  get tabsBtn(){return $('//android.widget.TextView[@content-desc="Tabs"]')}
  get commentIdBtn(){return $('//android.widget.TextView[@content-desc="1. Content By Id"]')}
 
  get tabNames(){ return $$('android.widget.LinearLayout')}
 
  _tabsAreasText(tabText){
      return $(`//*[@text="${tabText}"]`)
  }
}
module.exports = new Tabs()