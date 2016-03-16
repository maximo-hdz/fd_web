/* * * * * * * * * * * * * * * *
* Module: navigation           *
* Protractor 3.1.1             *
* Jasmine 2.4                  *
* * * * * * * * * * * * * * * */
//Note: when you refresh the page the site give us an alert which says "Quieres salir de fundación dondé?", if you accept -> log out

//Login function
function login_as_user() {
  element(by.model("auth.user_login")).sendKeys("usuario");
  element(by.buttonText("Ingresar")).click();
  element(by.model("auth.password")).sendKeys("contrasenia");
  element(by.buttonText("Acceder")).click();
};

function logout() {
  //browser.setLocation('accounts');
  element(by.buttonText("Cerrar sesión")).click();
};

/*
function sharedSetup(startPage) {
  beforeEach(function() {
    login_as_admin();
    browser.setLocation(startPage);
  });
  afterEach(function() {
    logout();
  });
};*/

xdescribe ("Test for navigation", function() {
  var lognUrl = "http://127.0.0.1:9005/#/login";
  var input_user = element(by.model("auth.user_login"));
  var btn_ingresar = element(by.buttonText("Ingresar"));

  beforeEach(function() {
    //Login page
    browser.get(lognUrl);
  });

  it (", check that it's the correct page for login_user", function() {
    expect(browser.getCurrentUrl()).toEqual(lognUrl);
  });

  describe ("when the user is logged in 'accounts page'", function() {
    beforeEach(function() {
      login_as_admin();
    });

    it (", check that it's the correct page for accounts", function() {
      expect(browser.getCurrentUrl()).toContain("/accounts");
      logout();
    });


/*
    it (", browse aclarations", function() {
      element(by.linkText("Aclaraciones")).click();
      expect(browser.getCurrentUrl()).toContain("aclarations");
      logout();
    });
*/
  });

  describe("when the user is not logged in", function() {

  });

});
