/* * * * * * * * * * * * * * * *
* Module: Users A,B & C        *
* Protractor 3.1.1             *
* Jasmine 2.4                  *
* node 5.6.0                   *
* * * * * * * * * * * * * * * */

describe ("Test login A, B & C users.", function() {
  var lognUrl = browser.params.url;
  var input_user = element(by.model("auth.user_login"));
  var btn_ingresar = element(by.buttonText("Ingresar"));
  var userA = "AAAAAAAA";
  var userB = "BBBBBBBB";
  var userC = "CCCCCCCC";

  beforeEach(function() {
    browser.get(lognUrl);
  });

  describe ("Check that it's the correct page for", function() {
    function inData(string){
      input_user.sendKeys(string);
      btn_ingresar.click();
    };

    it(" AAAAAAAA -> [accounts]", function() {
      inData(userA);
      element(by.model("auth.password")).sendKeys("contrasenia");
      element(by.model("auth.new_condition_action")).click();
      element(by.buttonText("Acceder")).click();
        expect(browser.getCurrentUrl()).toContain("accounts");
      element(by.buttonText("Cerrar sesión")).click();
        expect(browser.getCurrentUrl()).toContain("login");
    });

    it(" BBBBBBBB -> [register]", function() {
      inData(userB);
        expect(browser.getCurrentUrl()).toContain("register");
      element(by.buttonText("Salir")).click();
        expect(browser.getCurrentUrl()).toContain("login");
    });

    it(" CCCCCCCC -> [new]", function() {
      inData(userC);
        expect(browser.getCurrentUrl()).toContain("new");
      element(by.buttonText("Salir")).click();
        expect(browser.getCurrentUrl()).toContain("login");
    });

  });

  describe ("Check the register page for BBBBBBBB user", function() {
    var pwd1,pwd2,pwd3;
    var btn_pwdContinue;

    beforeEach(function() {
      input_user.sendKeys(userB);
      btn_ingresar.click();
      pwd1 = element(by.model("dataRegister.password"));
      pwd2 = element(by.model("dataRegister.new_password"));
      pwd3 = element(by.model("dataRegister.confirm_password"));
      btn_pwdContinue = element(by.buttonText("Cambiar contraseña y continuar"));
    });

    function morethan(inputPwd){
      inputPwd.sendKeys("abcdefghijklmnopq");
      inputPwd.getAttribute("value").then(function (value) {
        expect(value).toEqual("abcdefghijkl");
      });
    };

    it (", the input for 'ingresa tu contraseña' should not accept more than 12 characters", function() {
      morethan(pwd1);
    });

    it (", the input for 'nueva contraseña' should not accept more than 12 characters", function() {
      morethan(pwd2);
    });

    it (", the input for 'confirma contraseña' should not accept more than 12 characters", function() {
      morethan(pwd3);
    });

    function lessthan(inputPwd){
      inputPwd.sendKeys("abcdefg");
    };
    function normalthan(inputPwd){
      inputPwd.sendKeys("abcdefgh");
    };

    it (", the input for 'ingresa tu contraseña' should not accept less than 8 characters", function() {
      lessthan(pwd1);
      normalthan(pwd2);
      normalthan(pwd3);
      btn_pwdContinue.click();
      expect(pwd1.isDisplayed()).toBe(true);
    });

    it (", the input for 'nueva contraseña y confirmar contraseña' should not accept less than 8 characters", function() {
      normalthan(pwd1);
      lessthan(pwd2);
      lessthan(pwd3);
      btn_pwdContinue.click();
      expect(pwd1.isDisplayed()).toBe(true);
    });

    function specialCharacter(inputPwd,cadena){
      inputPwd.sendKeys(cadena);
      inputPwd.getAttribute("value").then(function (value) {
        expect(value).not.toEqual(cadena);
      });
      inputPwd.clear();
    };

    it (", the input for 'ingresa tu contraseña' should not accept specialCharacters", function() {
      specialCharacter(pwd1,"|°¬!#$%&/()=");
      specialCharacter(pwd1,"?¿¡+*~@·½{}[");
      specialCharacter(pwd1,"\],¸´¨-_:.;");
      specialCharacter(pwd1,"<>");
    });

    it (", the input for 'nueva contraseña' should not accept specialCharacters", function() {
      specialCharacter(pwd2,"|°¬!#$%&/()=");
      specialCharacter(pwd2,"?¿¡+*~@·½{}[");
      specialCharacter(pwd2,"\],¸´¨-_:.;");
      specialCharacter(pwd2,"<>");
    });

    it (", the input for 'confirma contraseña' should not accept specialCharacters", function() {
      specialCharacter(pwd3,"|°¬!#$%&/()=");
      specialCharacter(pwd3,"?¿¡+*~@·½{}[");
      specialCharacter(pwd3,"\],¸´¨-_:.;");
      specialCharacter(pwd3,"<>");
    });

    describe (", in the step 2", function() {
      function inputHello(){
        return element(by.model("dataRegister.saludo"));
      };

      beforeEach(function() {
        normalthan(pwd1);
        normalthan(pwd2);
        normalthan(pwd3);
        btn_pwdContinue.click();
      });

      it (", the step 1 should redirect to the step 2", function() {
        expect(inputHello().isDisplayed()).toBe(true);
      });

      it (", check all the images", function() {
        var list = element.all(by.css('.img-responsive'));
          expect(list.count()).toBe(5);
      });

      it (", check greeting secret", function() {
        element(by.model("dataRegister.saludo")).sendKeys("abcdefghijklmnñopqrstuvwxyzabcdefghijklmnñopqrstuvwxyz");
        element(by.model("dataRegister.saludo")).getAttribute("value").then(function (value) {
          expect(value).toEqual("abcdefghijklmnñopqrstuvwxyz");
        });
      });

      function imgclick(list, value){
        list.get(value).click();
          expect(element(by.buttonText("Continuar")).isEnabled()).toBe(true);
      };

      it (", check that the image is clicked", function() {
        element(by.model("dataRegister.saludo")).sendKeys("Hola");
        var list = element.all(by.css('.img-responsive'));
        imgclick(list, 0);
        imgclick(list, 1);
        imgclick(list, 2);
        imgclick(list, 3);
        imgclick(list, 4);
      });

    });

  });

  describe ("Check the register page for CCCCCCCC user", function() {
    var pwd1,pwd2,pwd3;
    var btn_pwdContinue;

    beforeEach(function() {
      input_user.sendKeys(userC);
      btn_ingresar.click();
      pwd1 = element(by.model("pass.old"));
      pwd2 = element(by.model("pass.password"));
      pwd3 = element(by.model("pass.confirm"));
      btn_pwdContinue = element(by.buttonText("Acceder"));
    });

    function morethan(inputPwd){
      inputPwd.sendKeys("abcdefghijklmnopq");
      inputPwd.getAttribute("value").then(function (value) {
        expect(value).toEqual("abcdefghijkl");
      });
    };

    it (", the input for 'ingresa tu contraseña' should not accept more than 12 characters", function() {
      morethan(pwd1);
    });

    it (", the input for 'nueva contraseña' should not accept more than 12 characters", function() {
      morethan(pwd2);
    });

    it (", the input for 'confirma contraseña' should not accept more than 12 characters", function() {
      morethan(pwd3);
    });

    function lessthan(inputPwd){
      inputPwd.sendKeys("abcdefg");
    };
    function normalthan(inputPwd){
      inputPwd.sendKeys("abcdefgh");
    };

    it (", the input for 'ingresa tu contraseña' should not accept less than 8 characters", function() {
      lessthan(pwd1);
      normalthan(pwd2);
      normalthan(pwd3);
      btn_pwdContinue.click();
      expect(pwd1.isDisplayed()).toBe(true);
    });

    it (", the input for 'nueva contraseña y confirmar contraseña' should not accept less than 8 characters", function() {
      normalthan(pwd1);
      lessthan(pwd2);
      lessthan(pwd3);
      btn_pwdContinue.click();
      expect(pwd1.isDisplayed()).toBe(true);
    });

    function specialCharacter(inputPwd,cadena){
      inputPwd.sendKeys(cadena);
      inputPwd.getAttribute("value").then(function (value) {
        expect(value).not.toEqual(cadena);
      });
      inputPwd.clear();
    };

    it (", the input for 'ingresa tu contraseña' should not accept specialCharacters", function() {
      specialCharacter(pwd1,"|°¬!#$%&/()=");
      specialCharacter(pwd1,"?¿¡+*~@·½{}[");
      specialCharacter(pwd1,"\],¸´¨-_:.;");
      specialCharacter(pwd1,"<>");
    });

    it (", the input for 'nueva contraseña' should not accept specialCharacters", function() {
      specialCharacter(pwd2,"|°¬!#$%&/()=");
      specialCharacter(pwd2,"?¿¡+*~@·½{}[");
      specialCharacter(pwd2,"\],¸´¨-_:.;");
      specialCharacter(pwd2,"<>");
    });

    it (", the input for 'confirma contraseña' should not accept specialCharacters", function() {
      specialCharacter(pwd3,"|°¬!#$%&/()=");
      specialCharacter(pwd3,"?¿¡+*~@·½{}[");
      specialCharacter(pwd3,"\],¸´¨-_:.;");
      specialCharacter(pwd3,"<>");
    });

  });

});
