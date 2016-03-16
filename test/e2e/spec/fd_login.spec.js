/* * * * * * * * * * * * * * * *
* Module: Login - Logout       *
* Protractor 3.1.1             *
* Jasmine 2.4                  *
* * * * * * * * * * * * * * * */

describe ("Test module login - logout", function() {
  var lognUrl = "http://127.0.0.1:9005/#/login";//Change Port
  var input_user = element(by.model("auth.user_login"));
  var btn_ingresar = element(by.buttonText("Ingresar"));

  beforeEach(function() {
    browser.get(lognUrl);
  });

  it ("check that it's the correct page for login_user", function() {
    expect(browser.getCurrentUrl()).toEqual(lognUrl);
  });

  describe ("when the user enters", function() {
    beforeEach(function() {
      input_user.clear();
    });

    it ("not allow tipyng less than 5 characters.", function() {
      input_user.sendKeys("abcd");
        expect(btn_ingresar.isEnabled()).toBe(false);
    });

    it ("not allow typing more than 12 characters.", function() {
      input_user.sendKeys("abcdefghijklm");
      input_user.getAttribute("value").then(function (value) {
        expect(value).toEqual("abcdefghijkl");
      });
    });

    it ("not allow typing special characters like |°¬!#$%&/()=?¿¡+*~@·½{}[\],¸´¨-_:.;<>", function() {
      function specialCharacter(cadena){
        input_user.sendKeys(cadena);
        expect(btn_ingresar.isEnabled()).toBe(false);
        input_user.clear();
      };
      specialCharacter("|°¬!#$%&/()=");
      specialCharacter("?¿¡+*~@·½{}[");
      specialCharacter("\],¸´¨-_:.;");
      specialCharacter("<>");
    });

    it ("allowed typing 5 to 12 characters.", function() {
      input_user.sendKeys("abcde");
        expect(btn_ingresar.isEnabled()).toBe(true);
      input_user.clear();
      input_user.sendKeys("abcdefghijkl");
        expect(btn_ingresar.isEnabled()).toBe(true);
    });
  });

  describe ("when the user enters the password", function() {
    var input_pass;
    var btn_acceder;

    beforeEach(function() {
      input_user.sendKeys("usuario");
      btn_ingresar.click();
      input_pass = element(by.model("auth.password"));
      btn_acceder = element(by.buttonText("Acceder"));
    });

    afterEach(function() {
      browser.refresh();
      input_user.clear();
    });

    it ("check that it's the correct page for password_user", function() {
      input_pass.sendKeys("contrasenia");
        expect(btn_acceder.isEnabled()).toBe(true);
    });

    it ("not allow tipyng less than 8 characters", function() {
      input_pass.sendKeys("abcdefg");
        expect(btn_acceder.isEnabled()).toBe(false);
    });

    it ("not allow tipyng more than 12 characters", function() {
      input_pass.sendKeys("abcdefghijklm");
      input_pass.getAttribute("value").then(function (value) {
        expect(value).toEqual("abcdefghijkl");
      });
    });

    it("not allow typing rare characters like |°¬!#$%&/()=?¿¡+*~@·½{}[\],¸´¨-_:.;<>", function() {
      function specialPass(cadena){
        input_pass.sendKeys(cadena);
        expect(btn_acceder.isEnabled()).toBe(false);
        input_pass.clear();
      };
      specialPass("|°¬!#$%&/()=");
      specialPass("?¿¡+*~@·½{}[");
      specialPass("\],¸´¨-_:.;");
      specialPass("<>");
    });

  });

  describe ("when the user will close it's session", function() {
    var input_pass;
    var btn_acceder;

    beforeEach(function() {
      input_user.sendKeys("usuario");
      btn_ingresar.click();
      input_pass = element(by.model("auth.password"));
      btn_acceder = element(by.buttonText("Acceder"));
      input_pass.sendKeys("contrasenia");
      btn_acceder.click();
    });

    it ("[can]", function() {
      element(by.buttonText("Cerrar sesión")).click();
        expect(browser.getCurrentUrl()).toContain("login");
    });

  });

});
