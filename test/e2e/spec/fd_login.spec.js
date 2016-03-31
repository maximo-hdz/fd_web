/* * * * * * * * * * * * * * * *
* Module: Login - Logout       *
* Protractor 3.1.1             *
* Jasmine 2.4                  *
* node 5.6.0                   *
* * * * * * * * * * * * * * * */

describe ("Test module login - logout", function() {
  var lognUrl = browser.params.url;
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

    it("not allow typing rare characters like |°¬!#$%&/()", function() {
      input_pass.sendKeys("|°¬!#$%&/()");
        expect(btn_acceder.isEnabled()).toBe(false);
    });

    it("not allow typing rare characters like ?¿¡+*~@·½{}", function() {
      input_pass.sendKeys("?¿¡+*~@·½{}");
        expect(btn_acceder.isEnabled()).toBe(false);
    });

    it("not allow typing rare characters like \],¸´¨-_:.;", function() {
      input_pass.sendKeys("\],¸´¨-_:.;");
        expect(btn_acceder.isEnabled()).toBe(false);
    });

    it("not allow typing rare characters like <>=[", function() {
      input_pass.sendKeys("<>=[");
        expect(btn_acceder.isEnabled()).toBe(false);
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
    });

    afterEach(function() {
      element(by.buttonText("Cerrar sesión")).click();
        expect(browser.getCurrentUrl()).toContain("login");
    });

    it ("check that it's the correct page for accounts", function() {
      input_pass.sendKeys("contrasenia");
        expect(btn_acceder.isEnabled()).toBe(true);
      btn_acceder.click();
        expect(browser.getCurrentUrl()).toContain("accounts");
    });
  });

  describe ("when the user uses AAAAAAAA", function() {
    beforeEach(function() {
      input_user.sendKeys("AAAAAAAA");
      btn_ingresar.click();
    });

    it (", check that the checkbox appears", function() {
      expect(element(by.model("auth.new_condition_action")).isDisplayed()).toBe(true);
    });

    it (", check that the link for terms is presents", function() {
      expect(element(by.linkText("Términos y Condiciones de Uso")).isDisplayed()).toBe(true);
    });

    it (", check that the link for terms redirects", function() {
      var linkMul = element(by.linkText("Términos y Condiciones de Uso"));
      linkMul.click();
        expect(browser.getCurrentUrl()).not.toContain("login");
    });

    describe ("and if the checkbox is", function() {
      var input_pass;
      var btn_acceder;

      beforeEach(function() {
        input_pass = element(by.model("auth.password"));
        btn_acceder = element(by.buttonText("Acceder"));
      });

      afterEach(function() {
        element(by.model("auth.new_condition_action")).click();
        input_pass.clear();
      });

      it ("clicked, the user should be able to access the page", function() {
        element(by.model("auth.new_condition_action")).click();
        input_pass.sendKeys("contrasenia");
          expect(btn_acceder.isEnabled()).toBe(true);
      });

      it ("no clicked, the user should not be able to access the page", function() {
        input_pass.sendKeys("contrasenia");
          expect(btn_acceder.isEnabled()).toBe(false);
      });
    });

  });

  describe ("when the user uses BBBBBBBB", function() {
    beforeEach(function() {
      input_user.sendKeys("BBBBBBBB");
      btn_ingresar.click();
    });

    it("check that it's the correct page for register", function() {
      expect(browser.getCurrentUrl()).toContain("register");
    });
  });

  describe ("when the user uses CCCCCCCC", function() {
    beforeEach(function() {
      input_user.sendKeys("CCCCCCCC");
      btn_ingresar.click();
    });

    it("check that it's the correct page for register", function() {
      expect(browser.getCurrentUrl()).toContain("new");
    });
  });

});
