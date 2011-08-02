function valideratext(text) {
 
    return "&lt;p class='xyz' style='font-size:36px' &gt;"+text+"&lt;/p&gt;";
 
}
 
(function() {
 
    tinymce.create('tinymce.plugins.valideratext', {
 
        init : function(ed, url){
 
            ed.addButton('valideratext', {
                title : 'Insert Valideratext',
                onclick : function() {
                    
                    console.debug(ed.getContent());
                    
                    var txt = ed.getContent();
                    
                    txt = txt.replace('</p>','\n');
                    txt = txt.replace('<br/>','&#0B');
                    txt = txt.replace('<br>','&#0B');
                    txt = txt.replace('<br />','&#0B');
                    txt = txt.replace(/<\/?[^>]+>/gi,'');
                    
                    //txt = unescape( encodeURIComponent( txt ) );
                    
                    var sData;
                    var sApplication = "WordPress";
                    var sPluginVersion = "0.1";
                    var sVersion = "1.0";
                    var sUserName = "Id";
                    var sCompany = "Företag";
                    var sPassword = "NoneSet";
                    var sDomain = "http://www.valideratext.se/integration/demo/demo.aspx";

                    sData = "<form name='loginform' id='loginform' action='" + sDomain;
                    sData = sData + "' method='post'>";
                    sData = sData + "<input type='submit' name='wp-submit' id='wp-submit' value='valideratext' />";
                    sData = sData + "<input type='hidden' name='application_version' value='1.0' />";
                    sData = sData + "<input type='hidden' name='application' value='Aktuell applikation' />";
                    sData = sData + "<input type='hidden' name='plugin' value='0.1' />";
                    sData = sData + "<input type='hidden' name='user_company' value='Företag' />";
                    sData = sData + "<input type='hidden' name='user_id' value='Id' />";
                    sData = sData + "<input type='hidden' name='user_password' value='NotSet' />";
                    sData = sData + "<input type='hidden' id='wordpress_test_cookie' name='wordpress_test_cookie' value='WP Cookie check' />";
                    sData = sData + "<input type='hidden' name='validatetext' value='" + txt  + "' />";
                    sData = sData + "</form>";
                    sData = sData + "<script type='text/javascript'>";
                    sData = sData + "document.cookie='wordpress_test_cookie=home; expires=Fri, 11 Jul 2009 05:23:14 +0000; path=/';";
                    sData = sData + "document.loginform.submit();</sc" + "ript>";
                    OpenWindow=window.open("", "_blank","height=730, width=850");
                    OpenWindow.document.write(sData);
                    OpenWindow.document.close()
               },
            image: url + "/../images/valideratext.png"
        });
    }
});
 
tinymce.PluginManager.add('valideratext', tinymce.plugins.valideratext); })();