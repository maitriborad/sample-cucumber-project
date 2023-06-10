$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "duration": 53707293300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click to login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 882021300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToLoginLink()"
});
formatter.result({
  "duration": 1051609800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 85990700,
  "status": "passed"
});
formatter.after({
  "duration": 851737900,
  "status": "passed"
});
formatter.before({
  "duration": 10295432100,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should login with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click to login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"primetesting123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Prime@123\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickToLoginLink()"
});
formatter.result({
  "duration": 581622000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "primetesting123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 467335200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime@123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 134845300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1776554800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.after({
  "duration": 888215900,
  "status": "passed"
});
});