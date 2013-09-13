 $(function() {
    $( "#accordion" )
    .accordion({
      // header: "> div > h3",
      heightStyle: "content",
      collapsible: "true"
    });
    // .sortable({
    //     axis: "y",
    //     handle: "h3",
    //     stop: function( event, ui ) {
    //       // IE doesn't register the blur when sorting
    //       // so trigger focusout handlers to remove .ui-state-focus
    //       ui.item.children( "h3" ).triggerHandler( "focusout" );
    //     }
    //   });
 });


 function myCite()
  {
    this.authname = "Unknown"; 
    this.titles = "no name";
    this.year = "n.d.";
  } 

  myCite.prototype.setAuthname = function(newName)
  {
    if (newName != "")
    {
      this.authname = newName;
    }
    else
    {
      this.authname = "Unknown";
    }
  }

  myCite.prototype.getAuthname = function()
  {
    return this.authname;
  }

  myCite.prototype.setTitle = function(newTitle)
  {
    if (typeof(newTitle) != 'undefined')
    {
      this.titles = newTitle;
    }
    else
    {
      this.titles = "";
    }
  }

  myCite.prototype.getTitle = function()
  {
    return this.titles;
  }
  
  myCite.prototype.setYears = function(newYear)
  {
    if (newYear != "")
    {
      this.year = newYear;
    }
    else
    {
      this.year = "n.d.";
    }
  }

  myCite.prototype.getYears = function()
  {
    return this.year;
  }
  
  function Web()
  {
    myCite.call(this);
    this.accyear = "";
    this.url = "";
    this.webs = "";
  }

  Web.prototype = new myCite();
  Web.prototype.constructor = Web;

  Web.prototype.setAccYear = function(newAcc)
  {
    if (newAcc != 'undefined')
    {
      this.accyear = newAcc;
    }
    else
    {
      this.accyear = "";
    }
  }

  Web.prototype.getAccYear = function()
  {
    return this.accyear;
  }

  Web.prototype.setUrl = function(newUrl)
  {
    if (newUrl != 'undefined')
    {
      this.url = newUrl;
    }
    else
    {
      this.url = "";
    }
  }

  Web.prototype.getUrl = function()
  {
    return this.url;
  }


  Web.prototype.setWebname = function(newWeb)
  {
    if (newWeb != 'undefined')
    {
      this.webs = newWeb;
    }
    else
    {
      this.webs = "";
    }
  }

  Web.prototype.getWebname = function()
  {
    return this.webs;
  }

  function Book()
  {
    myCite.call(this);
    this.page = "none";
    this.pubplace = "none";
    this.publisher = "none";
    this.edition = "none";
  }


  Book.prototype = new myCite();
  Book.prototype.constructor = Book;


  Book.prototype.setPage = function(newPage)
  {
    if(newPage != 'undefined')
    {
      this.page = newPage;
    }
    else
    {
      this.page = "";
    }
  }

  Book.prototype.getPage = function()
  {
    return this.page;
  }

  Book.prototype.setPubplace = function(newPubplace)
  {
    if(newPubplace != 'undefined')
    {
      this.pubplace = newPubplace;
    }
    else
    {
      this.pubplace = "";
    }
  }

  Book.prototype.getPubplace = function()
  {
    return this.pubplace;
  }


  Book.prototype.setPublisher = function(newPub)
  {
    if(newPub != 'undefined')
    {
      this.publisher = newPub;
    }
    else
    {
      this.publisher = "";
    }
  }  

  Book.prototype.getPublisher = function()
  {
    return this.publisher;
  }

  
  Book.prototype.setEdition = function(newEdition)
  {
    if(newEdition != 'undefined')
    {
      this.edition = newEdition;
    }
    else
    {
      this.edition = "";
    }
  }

  Book.prototype.getEdition = function()
  {
    return this.edition;
  }

  function Journal()
  {
    myCite.call(this);
    this.page = "none";
    this.jarticle = "none";
    this.volume = "none";
    this.edition = "none";
  }


  Journal.prototype = new myCite();
  Journal.prototype.constructor = Journal;


  Journal.prototype.setPage = function(newPage)
  {
    if(newPage != 'undefined')
    {
      this.page = newPage;
    }
    else
    {
      this.page = "";
    }
  }

  Journal.prototype.getPage = function()
  {
    return this.page;
  }

  Journal.prototype.setJArticle = function(newJArticle)
  {
    if(newJArticle != 'undefined')
    {
      this.jarticle = newJArticle;
    }
    else
    {
      this.jarticle = "";
    }
  }

  Journal.prototype.getJArticle = function()
  {
    return this.jarticle;
  }


  Journal.prototype.setVolume = function(newVolume)
  {
    if(newVolume != 'undefined')
    {
      this.volume = newVolume;
    }
    else
    {
      this.volume = "";
    }
  }  

  Journal.prototype.getVolume = function()
  {
    return this.volume;
  }

  
  Journal.prototype.setPart = function(newPart)
  {
    if(newPart != 'undefined')
    {
      this.part = newPart;
    }
    else
    {
      this.part = "";
    }
  }

  Journal.prototype.getPart = function()
  {
    return this.part;
  }

  function EJournal()
  {
    Journal.call(this);
    this.EJurl = "";
    this.EJAccDate = "";
  }

  EJournal.prototype = new Journal();
  EJournal.prototype.constructor = EJournal;  

  EJournal.prototype.setEJUrl = function(newEJurl)
  {
    if(newEJurl != 'undefined')
    {
      this.EJurl = newEJurl;
    }
    else
    {
      this.EJurl = "";
    }
  }

  EJournal.prototype.getEJUrl = function()
  {
    return this.EJurl;
  }

  EJournal.prototype.setEJAccDate = function(newEJAccDate)
  {
    if(newEJAccDate != 'undefined')
    {
      this.EJAccDate = newEJAccDate;
    }
    else
    {
      this.EJAccDate = "";
    }
  }

  EJournal.prototype.getEJAccDate = function()
  {
    return this.EJAccDate;
  }
  
  function WebRef()
  {
    var R_Web = new Web;
    
    R_Web.setAuthname(document.getElementById('WebAuthorName').value);
    R_Web.setTitle(document.getElementById('WebTitle').value);
    var Title = R_Web.getTitle();
    R_Web.setWebname(document.getElementById('WebName').value);
    R_Web.setYears(document.getElementById('WebYear').value);
    R_Web.setAccYear(document.getElementById('WebDate').value);
    R_Web.setUrl(document.getElementById('WebURL').value);
    if(document.getElementById('Webreferences').value == "harvard")
    {
      var hw_ref = R_Web.getAuthname() + " (" + R_Web.getYears() + "). <em>" + Title + "</em> [Online]. Available from: " + R_Web.getUrl() + " [Accessed:" + R_Web.getAccYear() + "]";
      document.getElementById("webcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + hw_ref + "</dir></dir>");
      
      var hw_save = [localStorage[localStorage['Default']]];
      hw_save.push("<br>" + hw_ref);
      localStorage[localStorage['Default']] = hw_save;
      
    }
    else if(document.getElementById('Webreferences').value == "APA")
    {
      var aw_ref = R_Web.getAuthname() + " (" + R_Web.getYears() + "). <em>" + Title + "</em> [Online]. Retreived from: " + R_Web.getUrl();
      document.getElementById("webcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + aw_ref + "</dir></dir>");    
      
      var aw_save = [localStorage[localStorage['Default']]];
      aw_save.push("<br>" + aw_ref);
      localStorage[localStorage['Default']] = aw_save;
    }  
  }

  function BookRef()
  {
    var R_Book = new Book;

    R_Book.setAuthname(document.getElementById('BookAuthorName').value);
    R_Book.setTitle(document.getElementById('BookTitle').value);
    var BookTitle = R_Book.getTitle();
    R_Book.setPubplace(document.getElementById('BookPubPlace').value);
    R_Book.setYears(document.getElementById('BookYear').value);
    R_Book.setPublisher(document.getElementById('BookPublisher').value);
    R_Book.setPage(document.getElementById('BookPage').value);
    R_Book.setEdition(document.getElementById('editiontype').value);
    

    if(document.getElementById('Bookreferences').value == "harvard")
    {
      var hb_ref = R_Book.getAuthname() + " (" + R_Book.getYears() + "). <em>" + BookTitle + ".</em>" + R_Book.getEdition() + " " + R_Book.getPubplace() + ": " + R_Book.getPublisher() + ". " + R_Book.getPage();
      document.getElementById("bookcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + hb_ref + "</dir></dir>");
    
      var hb_save = [localStorage[localStorage['Default']]];
      hb_save.push("<br>" + hb_ref);
      localStorage[localStorage['Default']] = hb_save;
    }
    else if(document.getElementById('Bookreferences').value == "APA")
    {
      var ab_ref = R_Book.getAuthname() + " (" + R_Book.getYears() + "). <em>" + BookTitle + ".</em>" + R_Book.getPubplace() + ": " + R_Book.getPublisher();
      document.getElementById("bookcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + ab_ref + "</dir></dir>");
    
      var ab_save = [localStorage[localStorage['Default']]];
      ab_save.push("<br>" + ab_ref);
      localStorage[localStorage['Default']] = ab_save;
    }
  }

  function JournalRef()
  {
    var R_Journal = new Journal;

    R_Journal.setAuthname(document.getElementById('JournalAuthorName').value);
    R_Journal.setTitle(document.getElementById('JournalTitle').value);
    var JournalTitle = R_Journal.getTitle();
    R_Journal.setJArticle(document.getElementById('JournalArticle').value);
    R_Journal.setYears(document.getElementById('JournalYear').value);
    R_Journal.setPart(document.getElementById('JournalPart').value);
    R_Journal.setPage(document.getElementById('JournalPage').value);
    R_Journal.setVolume(document.getElementById('JournalVolume').value);
    
    if(document.getElementById('Journalreferences').value == "harvard")
    {
      var hj_ref = R_Journal.getAuthname() + " (" + R_Journal.getYears() + "). " + R_Journal.getJArticle() + "<em>" + JournalTitle + ".</em>" + R_Journal.getVolume() + "(" + R_Journal.getPart() + "), " + R_Journal.getPage() + ".";
      document.getElementById("journalcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + hj_ref + "</dir></dir>");
    
      var hj_save = [localStorage[localStorage['Default']]];
      hj_save.push("<br>" + hj_ref);
      localStorage[localStorage['Default']] = hj_save;
    }
    else if(document.getElementById('Journalreferences').value == "APA")
    {
      var aj_ref = R_Journal.getAuthname() + " (" + R_Journal.getYears() + ")." + R_Journal.getJArticle() + "<em>" + JournalTitle + ".</em> (" + R_Journal.getVolume() + "." + R_Journal.getPart() + "), " + R_Journal.getPage() + ".";
      document.getElementById("journalcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + aj_ref + "</dir></dir>");
    
      var aj_save = [localStorage[localStorage['Default']]];
      aj_save.push("<br>" + aj_ref);
      localStorage[localStorage['Default']] = aj_save;
    }
    // document.write("hello");
  }

  function EJournalRef()
  {
    var R_EJournal = new EJournal;
    
    R_EJournal.setAuthname(document.getElementById('EJournalAuthorName').value);
    R_EJournal.setTitle(document.getElementById('EJournalTitle').value);
    var EJournalTitle = R_EJournal.getTitle();
    R_EJournal.setJArticle(document.getElementById('EJournalArticle').value);
    R_EJournal.setYears(document.getElementById('EJournalYear').value);
    R_EJournal.setPart(document.getElementById('EJournalPart').value);
    R_EJournal.setPage(document.getElementById('EJournalPage').value);
    R_EJournal.setVolume(document.getElementById('EJournalVolume').value);
    R_EJournal.setEJUrl(document.getElementById('EJournalURL').value);
    R_EJournal.setEJAccDate(document.getElementById('EJournalAcc').value);
    
    if(document.getElementById('EJournalreferences').value == "harvard")
    {
      
      var hej_ref = R_EJournal.getAuthname() + " (" + R_EJournal.getYears() + "). " + R_EJournal.getJArticle() + "<em>" + EJournalTitle + ".</em> [Online]" + R_EJournal.getVolume() + "(" + R_EJournal.getPart() + "), " + R_EJournal.getPage() + ". Available from: <" + R_EJournal.getEJUrl() + "> [" + R_EJournal.getEJAccDate() + "]";
      document.getElementById("ejournalcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + hej_ref + "</dir></dir>");
      
      var hej_save = [localStorage[localStorage['Default']]];
      hej_save.push("<br>" + hej_ref);
      localStorage[localStorage['Default']] = hej_save;
    }
    else if(document.getElementById('EJournalreferences').value == "APA")
    {
      var aej_ref = R_EJournal.getAuthname() + " (" + R_EJournal.getYears() + ")." + R_EJournal.getJArticle() + "<em>" + EJournalTitle + ".</em> (" + R_EJournal.getVolume() + "." + R_EJournal.getPart() + "), " + R_EJournal.getPage() + ".";
      document.getElementById("ejournalcites").innerHTML=("<dir style=\"font-size:14px\">Copy and Paste the below: <br><dir style=\"outline-style:solid;outline-width:thin;font-size:16px\">" + aej_ref + "</dir></dir>");
    
      var aej_save = [localStorage[localStorage['Default']]];
      aej_save.push("<br>" + aej_ref);
      localStorage[localStorage['Default']] = aej_save;
    }
    // document.write("hello");
  }



function ScanCombo() {
  for(var a = 1; a<=100; a++)
  {
    var code = 'b' + a;
    if(typeof(localStorage[code]) != 'undefined')
    {
    var textb = document.getElementById("txtCombo");
    var combo = document.getElementById("combo");
    var option = document.createElement("option");
    option.text = localStorage[code];
    option.value = localStorage[code];
    try {
        combo.add(option, null); //Standard 
    }catch(error) {
        combo.add(option); // IE only
    }
    textb.value = "";
  }
  else break;
  }
}

function addCombo(e) 
{
  var comboption = document.getElementById('combo').value;
  
  var textb = document.getElementById("txtCombo");
  // var textbvalue = textb.value;
  if(comboption == "new")
  {
   document.getElementById("newlist").style.visibility = 'visible';
   document.getElementById("remove").style.visibility = 'hidden';
   document.getElementById("cites").style.visibility = 'hidden';
        if (comboption == "new" && textb.value != '')
        {
          alert("list \"" + textb.value + "\" Created!");
          for(var a = 1; a<=100; a++)
          {
            var code = 'b' + a;
            if(typeof(localStorage[code]) == 'undefined')
            {
          
              var combo = document.getElementById("combo");
           
              var option = document.createElement("option");
              option.text = textb.value;
              option.value = textb.value;
              localStorage[code] = textb.value;
              // localStorage[textb.value];
              try 
              {
                combo.add(option, null); //Standard 
              }
              catch(error) 
              {
                combo.add(option); // IE only
              }
              textb.value = "";
              document.getElementById("newlist").style.visibility = 'hidden';
              break;
            }
            else;
          }
        }
        else;
        }

  else if(comboption != "new")
  {      
      document.getElementById("newlist").style.visibility = 'hidden';
      document.getElementById("remove").style.visibility = 'visible';
      document.getElementById("cites").style.visibility = 'visible';
      var codes = document.getElementById("combo").value;
      localStorage['Default'] = codes;
      var status = localStorage[localStorage['Default']];
      if (typeof(status) == 'undefined')
      {
        var status = "No Citation yet.";
      }
      else;
      document.getElementById('cites').innerHTML=status;
  }
}

// document.write(localStorage['b1'] == 1 && typeof(localStorage['b'+2]) != 'undefined');
// document.write(localStorage['b1']);
// document.write(localStorage['b2']);
// document.write(localStorage['b3']);
// document.write(localStorage['b4']);
// document.write(localStorage['b5']);
// document.write(localStorage['b6']);
  function removeBib(e)
  {
    document.getElementById("cites").style.visibility = 'hidden';
    document.getElementById("remove").style.visibility = 'hidden';
    var combo = document.getElementById("combo");
    alert("list \"" + combo.value + "\" Deleted!");
    var option = document.createElement("option");
    var length = combo.options.length;
    localStorage.removeItem(combo.value); //delete "HSSN"
    localStorage.removeItem('Default'); //delete default
    for(z = 1; z <= 30; z++)
    {

      if(localStorage['b' + z] == combo.value && typeof(localStorage['b' + (z+1)]) != 'undefined')
      {
        var buffer = localStorage['b' + (z + 1)];
        localStorage['b' + z] = buffer;
        localStorage.removeItem('b' + (z+1));
        combo.options[z] = null;
        for(j = (z+1);j<30;j++)
        {
          if(typeof(localStorage['b' + (j+1)])!= 'undefined')
          {
            var buffer1 = localStorage['b' + (j + 1)];
            localStorage['b' + j] = buffer1;
            localStorage.removeItem('b' + (j + 1));
          }
          else break;
        }
      }
      else if(localStorage['b' + z] == combo.value && typeof(localStorage['b' + (z+1)]) == 'undefined')
      {
        localStorage.removeItem('b' + z);
        combo.options[z] = null;
        break;
      }

      else;
    }

    // for (var i = 1; i <= 30; i++) {
    //     combo.options[i]=null;
    // }

    // option.text = "New...";
    // option.value = "new"; 
    // try 
    // {
    //   combo.add(option, null); //Standard 
    // }
    //   catch(error) 
    // {
    //   combo.add(option); // IE only
    // }

    for (var i = 1; i <= 100; i++){
      var junk = localStorage['b' + i];
      if (junk == 'undefined'){
        localStorage.removeItem('b' + i);
      }
      else;
    }
  }

 document.addEventListener('DOMContentLoaded', function () {
 	var link = document.getElementById('WebID');
   	link.addEventListener('click', function(){
   	WebRef();
   	})
   	var link2 = document.getElementById('BookID');
   	link2.addEventListener('click', function(){
   	BookRef();
   	})
   	var link3 = document.getElementById('JournalID');
   	link3.addEventListener('click', function(){
   	JournalRef();
   	})
    var link4 = document.getElementById('EJournalID');
    link4.addEventListener('click', function(){
    EJournalRef();
    })
    ScanCombo();
    var link5 = document.getElementById('Bib');
    link5.addEventListener('click', function(){
    addCombo();
    })
    var link6 = document.getElementById('remove');
    link6.addEventListener('click', function(){
    removeBib();
    })
 });