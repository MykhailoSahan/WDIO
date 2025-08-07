import { Given, When, Then } from '@wdio/cucumber-framework';
import { BasePage } from '../Pages/BasePage.js';
import { SignUpPage } from '../Pages/SignUpPage.js';
import { SignInPage } from '../Pages/SignInPage.js';
import { UserProfileInfo } from '../Pages/UserProfileInfo.js';
import { testData } from '../test/Test Data/testData.js';
import { should, assert } from 'chai';
should();

const basePage = new BasePage();
const signUpPage = new SignUpPage();
const signInPage = new SignInPage();
const userProfileInfo = new UserProfileInfo();

Given('I open the main page', async () => {
  await basePage.open();
  const title = await browser.getTitle();
  assert.include(title, 'Practice Software Testing', 'Title does not match');
});
Given('I am on the sign in page', async () => {
  (await signInPage.isOpen()).should.be.true;
});
Given('I am on user account info page', async () => {
  await userProfileInfo.signInCheck.isDisplayed();
});

When('I click the sign in button', async () => {
  await basePage.signInBtn.click();
});
When('I sign up as a new user', async () => {
  await signUpPage.signUp();
});
When('I sign in with registered credentials', async () => {
  await signInPage.signIn(testData.user.email, testData.user.password);
});
When('I update my profile first name and last name', async () => {
  await userProfileInfo.updateProfile(
        testData.update.firstName,
        testData.update.lastName,
      );
});

Then('I should see the sign in page', async () => {
  (await signInPage.isOpen()).should.be.true;
});
Then('I should see the user account info', async () => {
  await userProfileInfo.signInCheck.isDisplayed();
});
Then('My profile first name and last name should be updated', async () => {
  const firstName = await userProfileInfo.firstNameInputField.getValue();
  const lastName = await userProfileInfo.lastNameInputField.getValue();
  firstName.should.be.a('string').and.equal('Johnas');
  lastName.should.be.a('string').and.equal('Doele');
});